package com.apnacollegebihar.online;

import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.content.pm.PackageManager;
import android.content.pm.ResolveInfo;
import android.provider.Settings;

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

    private static final String PREFS_NAME = "CapacitorStorage";
    private static final String KEY_IS_ACTIVE = "_cap_isBlockerActive";
    private static final String KEY_COUNTDOWN_END = "_cap_countdownEndTime";
    private static final String KEY_ALLOWED_PACKAGES = "_cap_allowedPackages";

    @PluginMethod
    public void getInstalledApps(PluginCall call) {

        try {

            PackageManager pm = getContext().getPackageManager();

            Intent intent = new Intent(Intent.ACTION_MAIN, null);
            intent.addCategory(Intent.CATEGORY_LAUNCHER);

            List<ResolveInfo> resolveInfos =
                    pm.queryIntentActivities(intent, 0);

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

        long endTime =
                System.currentTimeMillis() +
                        (minutes * 60 * 1000L);

        SharedPreferences prefs =
                getContext().getSharedPreferences(
                        PREFS_NAME,
                        Context.MODE_PRIVATE
                );

        prefs.edit()
                .putLong(KEY_COUNTDOWN_END, endTime)
                .putBoolean(KEY_IS_ACTIVE, true)
                .apply();

        JSObject ret = new JSObject();
        ret.put("endTime", endTime);

        call.resolve(ret);
    }

    @PluginMethod
    public void stopBlocker(PluginCall call) {

        SharedPreferences prefs =
                getContext().getSharedPreferences(
                        PREFS_NAME,
                        Context.MODE_PRIVATE
                );

        prefs.edit()
                .putBoolean(KEY_IS_ACTIVE, false)
                .putLong(KEY_COUNTDOWN_END, 0)
                .apply();

        call.resolve();
    }

    @PluginMethod
    public void setBlockerActive(PluginCall call) {

        Boolean active = call.getBoolean("active");

        if (active == null) {
            call.reject("Must provide active boolean");
            return;
        }

        SharedPreferences prefs =
                getContext().getSharedPreferences(
                        PREFS_NAME,
                        Context.MODE_PRIVATE
                );

        prefs.edit()
                .putBoolean(KEY_IS_ACTIVE, active)
                .apply();

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
                allowedSet.add(obj.toString());
            }

            SharedPreferences prefs =
                    getContext().getSharedPreferences(
                            PREFS_NAME,
                            Context.MODE_PRIVATE
                    );

            prefs.edit()
                    .putStringSet(KEY_ALLOWED_PACKAGES, allowedSet)
                    .apply();

            call.resolve();

        } catch (Exception e) {
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
    public void isAccessibilityServiceEnabled(PluginCall call) {
        String service = getContext().getPackageName() + "/" + AppBlockerService.class.getCanonicalName();
        int accessibilityEnabled = 0;
        try {
            accessibilityEnabled = Settings.Secure.getInt(getContext().getContentResolver(), android.provider.Settings.Secure.ACCESSIBILITY_ENABLED);
        } catch (Settings.SettingNotFoundException e) {
            // Error
        }

        boolean isEnabled = false;
        if (accessibilityEnabled == 1) {
            String settingValue = Settings.Secure.getString(getContext().getContentResolver(), Settings.Secure.ENABLED_ACCESSIBILITY_SERVICES);
            if (settingValue != null) {
                isEnabled = settingValue.toLowerCase().contains(service.toLowerCase());
            }
        }

        JSObject ret = new JSObject();
        ret.put("enabled", isEnabled);
        call.resolve(ret);
    }

    @PluginMethod
    public void checkOverlayPermission(PluginCall call) {

        boolean granted = true;

        if (android.os.Build.VERSION.SDK_INT >=
                android.os.Build.VERSION_CODES.M) {

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
        JSObject ret = new JSObject();
        ret.put("working", true);
        call.resolve(ret);
    }
}
