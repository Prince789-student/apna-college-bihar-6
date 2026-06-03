package com.apnacollegebihar.online;

import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.content.pm.PackageManager;
import android.content.pm.ResolveInfo;
import android.provider.Settings;
import android.util.Log;

import com.getcapacitor.JSArray;
import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@CapacitorPlugin(name = "AppBlocker")
public class AppBlockerPlugin extends Plugin {

    private static final String TAG = "AppBlockerPlugin";

    // CapacitorStorage is the SharedPreferences file used by @capacitor/preferences
    // Keys are stored WITH the _cap_ prefix by the Capacitor Preferences plugin
    private static final String PREFS_NAME = "CapacitorStorage";

    // These keys match what @capacitor/preferences stores (it auto-prefixes with _cap_)
    private static final String KEY_IS_ACTIVE = "_cap_isBlockerActive";
    private static final String KEY_COUNTDOWN_END = "_cap_countdownEndTime";
    private static final String KEY_ALLOWED_PACKAGES = "_cap_allowedPackages";

    private SharedPreferences getPrefs() {
        return getContext().getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE);
    }

    @PluginMethod
    public void getInstalledApps(PluginCall call) {
        try {
            PackageManager pm = getContext().getPackageManager();

            Intent intent = new Intent(Intent.ACTION_MAIN, null);
            intent.addCategory(Intent.CATEGORY_LAUNCHER);

            List<ResolveInfo> resolveInfos = pm.queryIntentActivities(intent, 0);

            JSArray retApps = new JSArray();

            String myPkg = getContext().getPackageName();

            for (ResolveInfo info : resolveInfos) {
                String pkg = info.activityInfo.packageName;
                if (!pkg.equals(myPkg)) {
                    JSObject appObj = new JSObject();
                    appObj.put("name", info.loadLabel(pm).toString());
                    appObj.put("packageName", pkg);
                    retApps.put(appObj);
                }
            }

            JSObject ret = new JSObject();
            ret.put("apps", retApps);
            call.resolve(ret);

        } catch (Exception e) {
            Log.e(TAG, "getInstalledApps error", e);
            call.reject(e.getMessage());
        }
    }

    @PluginMethod
    public void startCountdown(PluginCall call) {
        Integer minutes = call.getInt("minutes");

        if (minutes == null) {
            call.reject("Minutes required");
            return;
        }

        long endTime = System.currentTimeMillis() + (minutes * 60 * 1000L);

        // Store as String (consistent with @capacitor/preferences JSON serialization)
        // @capacitor/preferences stores values as JSON strings, so "true" and "1234567890"
        SharedPreferences.Editor editor = getPrefs().edit();
        editor.putString(KEY_IS_ACTIVE, "true");
        editor.putString(KEY_COUNTDOWN_END, String.valueOf(endTime));
        editor.apply();

        // Update in-memory static fields on the service (same process)
        AppBlockerService.sIsActive = true;
        AppBlockerService.sCountdownEnd = endTime;

        Log.d(TAG, "startCountdown: endTime=" + endTime + ", minutes=" + minutes);

        JSObject ret = new JSObject();
        ret.put("endTime", endTime);
        call.resolve(ret);
    }

    @PluginMethod
    public void stopBlocker(PluginCall call) {
        SharedPreferences.Editor editor = getPrefs().edit();
        editor.putString(KEY_IS_ACTIVE, "false");
        editor.putString(KEY_COUNTDOWN_END, "0");
        editor.apply();

        AppBlockerService.sIsActive = false;
        AppBlockerService.sCountdownEnd = 0;

        Log.d(TAG, "stopBlocker called");
        call.resolve();
    }

    @PluginMethod
    public void setBlockerActive(PluginCall call) {
        Boolean active = call.getBoolean("active");

        if (active == null) {
            call.reject("Must provide active boolean");
            return;
        }

        SharedPreferences.Editor editor = getPrefs().edit();
        editor.putString(KEY_IS_ACTIVE, active ? "true" : "false");
        editor.apply();

        AppBlockerService.sIsActive = active;

        Log.d(TAG, "setBlockerActive: " + active);
        call.resolve();
    }

    @PluginMethod
    public void setAllowedPackages(PluginCall call) {
        JSArray packagesArray = call.getArray("packages");

        if (packagesArray == null) {
            call.reject("Packages required");
            return;
        }

        try {
            Set<String> allowedSet = new HashSet<>();
            List<Object> list = packagesArray.toList();

            for (Object obj : list) {
                if (obj != null && !obj.toString().trim().isEmpty()) {
                    allowedSet.add(obj.toString().trim());
                }
            }

            // Store as comma-separated string (compatible with service reading)
            StringBuilder sb = new StringBuilder();
            for (String pkg : allowedSet) {
                if (sb.length() > 0) sb.append(",");
                sb.append(pkg);
            }

            SharedPreferences.Editor editor = getPrefs().edit();
            editor.putString(KEY_ALLOWED_PACKAGES, sb.toString());
            editor.apply();

            // Update in-memory set on service
            synchronized (AppBlockerService.sAllowedPackages) {
                AppBlockerService.sAllowedPackages.clear();
                AppBlockerService.sAllowedPackages.addAll(allowedSet);
            }

            Log.d(TAG, "setAllowedPackages: " + sb.toString());
            call.resolve();

        } catch (Exception e) {
            Log.e(TAG, "setAllowedPackages error", e);
            call.reject(e.getMessage());
        }
    }

    @PluginMethod
    public void openAccessibilitySettings(PluginCall call) {
        Intent intent = new Intent(Settings.ACTION_ACCESSIBILITY_SETTINGS);
        intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        getContext().startActivity(intent);
        call.resolve();
    }

    @PluginMethod
    public void checkAccessibility(PluginCall call) {
        String service = getContext().getPackageName() + "/" + AppBlockerService.class.getCanonicalName();
        int accessibilityEnabled = 0;
        try {
            accessibilityEnabled = Settings.Secure.getInt(
                getContext().getContentResolver(),
                android.provider.Settings.Secure.ACCESSIBILITY_ENABLED
            );
        } catch (Settings.SettingNotFoundException e) {
            // ignore
        }

        boolean isEnabled = false;
        if (accessibilityEnabled == 1) {
            String settingValue = Settings.Secure.getString(
                getContext().getContentResolver(),
                Settings.Secure.ENABLED_ACCESSIBILITY_SERVICES
            );
            if (settingValue != null) {
                isEnabled = settingValue.toLowerCase().contains(service.toLowerCase());
            }
        }

        Log.d(TAG, "checkAccessibility: enabled=" + isEnabled + " service=" + service);

        JSObject ret = new JSObject();
        ret.put("enabled", isEnabled);
        call.resolve(ret);
    }

    @PluginMethod
    public void checkOverlayPermission(PluginCall call) {
        boolean granted = true;

        if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.M) {
            granted = Settings.canDrawOverlays(getContext());
        }

        JSObject ret = new JSObject();
        ret.put("granted", granted);
        call.resolve(ret);
    }

    @PluginMethod
    public void requestOverlayPermission(PluginCall call) {
        if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.M) {
            Intent intent = new Intent(
                Settings.ACTION_MANAGE_OVERLAY_PERMISSION,
                android.net.Uri.parse("package:" + getContext().getPackageName())
            );
            intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
            getContext().startActivity(intent);
        }
        call.resolve();
    }

    @PluginMethod
    public void testPlugin(PluginCall call) {
        Log.d(TAG, "testPlugin called - plugin is working!");
        JSObject ret = new JSObject();
        ret.put("working", true);
        ret.put("message", "AppBlocker plugin is operational");
        call.resolve(ret);
    }

    @PluginMethod
    public void launchApp(PluginCall call) {
        String packageName = call.getString("packageName");
        if (packageName == null) {
            call.reject("Package name required");
            return;
        }
        try {
            // Store the launched package and time in SharedPreferences
            SharedPreferences.Editor editor = getPrefs().edit();
            editor.putString("_cap_lastLaunchedPackage", packageName);
            editor.putString("_cap_lastLaunchedTime", String.valueOf(System.currentTimeMillis()));
            editor.apply();

            // Update in-memory static fields on service too
            AppBlockerService.sLastLaunchedPackage = packageName;
            AppBlockerService.sLastLaunchedTime = System.currentTimeMillis();

            Intent intent = getContext().getPackageManager().getLaunchIntentForPackage(packageName);
            if (intent != null) {
                intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                getContext().startActivity(intent);
                call.resolve();
            } else {
                call.reject("App not found");
            }
        } catch (Exception e) {
            call.reject(e.getMessage());
        }
    }
}
