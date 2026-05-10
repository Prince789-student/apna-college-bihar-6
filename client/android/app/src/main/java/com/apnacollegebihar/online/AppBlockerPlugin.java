package com.apnacollegebihar.online;

import android.content.Context;
import android.content.SharedPreferences;
import android.content.pm.ApplicationInfo;
import android.content.pm.PackageManager;
import com.getcapacitor.JSArray;
import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import android.text.TextUtils;
import android.provider.Settings;
import android.content.Intent;
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
            // Get all installed applications
            List<ApplicationInfo> apps = pm.getInstalledApplications(PackageManager.GET_META_DATA);
            JSArray retApps = new JSArray();

            for (ApplicationInfo app : apps) {
                // Filter: Non-system apps OR apps with a launcher intent
                boolean isSystem = (app.flags & ApplicationInfo.FLAG_SYSTEM) != 0;
                boolean hasLauncher = pm.getLaunchIntentForPackage(app.packageName) != null;
                
                if (hasLauncher && !app.packageName.equals(getContext().getPackageName())) {
                    JSObject info = new JSObject();
                    info.put("name", pm.getApplicationLabel(app).toString());
                    info.put("packageName", app.packageName);
                    retApps.put(info);
                }
            }

            JSObject ret = new JSObject();
            ret.put("apps", retApps);
            call.resolve(ret);
        } catch (Exception e) {
            call.reject("Error fetching apps: " + e.getMessage());
        }
    }

    @PluginMethod
    public void startCountdown(PluginCall call) {
        Integer minutes = call.getInt("minutes");
        JSArray allowed = call.getArray("allowedPackages");

        if (minutes == null) {
            call.reject("Must provide 'minutes'");
            return;
        }

        long endTime = System.currentTimeMillis() + (minutes * 60 * 1000);
        
        SharedPreferences prefs = getContext().getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE);
        SharedPreferences.Editor editor = prefs.edit();
        editor.putLong(KEY_COUNTDOWN_END, endTime);
        
        if (allowed != null) {
            Set<String> allowedSet = new HashSet<String>();
            try {
                List<String> list = allowed.toList();
                allowedSet.addAll(list);
            } catch (Exception e) {}
            editor.putStringSet(KEY_ALLOWED_PACKAGES, allowedSet);
        }
        
        editor.apply();

        JSObject ret = new JSObject();
        ret.put("endTime", endTime);
        call.resolve(ret);
    }

    @PluginMethod
    public void stopBlocker(PluginCall call) {
        SharedPreferences prefs = getContext().getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE);
        SharedPreferences.Editor editor = prefs.edit();
        editor.putBoolean(KEY_IS_ACTIVE, false);
        editor.putLong(KEY_COUNTDOWN_END, 0); // Reset timer
        editor.apply();
        call.resolve();
    }

    @PluginMethod
    public void openAccessibilitySettings(PluginCall call) {
        Intent intent = new Intent(Settings.ACTION_ACCESSIBILITY_SETTINGS);
        intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        getContext().startActivity(intent);
        call.resolve();
    }

    @PluginMethod
    public void launchApp(PluginCall call) {
        String packageName = call.getString("packageName");
        if (packageName == null) {
            call.reject("Must provide 'packageName'");
            return;
        }
        Intent launchIntent = getContext().getPackageManager().getLaunchIntentForPackage(packageName);
        if (launchIntent != null) {
            getContext().startActivity(launchIntent);
            call.resolve();
        } else {
            call.reject("App not found or not launchable");
        }
    }

    @PluginMethod
    public void isAccessibilityServiceEnabled(PluginCall call) {
        boolean isEnabled = false;
        String pkgName = getContext().getPackageName();
        String serviceName = AppBlockerService.class.getName(); // Full class name
        String servicePath = pkgName + "/" + serviceName;
        String altServicePath = pkgName + "/.AppBlockerService";

        try {
            int accessibilityEnabled = Settings.Secure.getInt(
                getContext().getContentResolver(),
                Settings.Secure.ACCESSIBILITY_ENABLED, 0);
            
            if (accessibilityEnabled == 1) {
                String settingValue = Settings.Secure.getString(
                    getContext().getContentResolver(),
                    Settings.Secure.ENABLED_ACCESSIBILITY_SERVICES);
                if (settingValue != null) {
                    String[] services = settingValue.split(":");
                    for (String s : services) {
                        if (s.equalsIgnoreCase(servicePath) || s.equalsIgnoreCase(altServicePath) || s.contains(serviceName)) {
                            isEnabled = true;
                            break;
                        }
                    }
                }
            }
        } catch (Exception e) {
            // Fallback: Check if service is actually running? 
            // Better to just report false on error
        }

        JSObject ret = new JSObject();
        ret.put("enabled", isEnabled);
        call.resolve(ret);
    }

    @PluginMethod
    public void setBlockerActive(PluginCall call) {
        Boolean active = call.getBoolean("active");
        if (active == null) {
            call.reject("Must provide 'active' boolean");
            return;
        }

        SharedPreferences prefs = getContext().getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE);
        SharedPreferences.Editor editor = prefs.edit();
        editor.putString(KEY_IS_ACTIVE, active ? "true" : "false");
        
        // Also set a non-prefixed version just in case
        editor.putString("isBlockerActive", active ? "true" : "false");
        
        editor.apply();
        call.resolve();
    }

    @PluginMethod
    public void setAllowedPackages(PluginCall call) {
        String packages = call.getString("packages");
        if (packages == null) {
            call.reject("Must provide 'packages' string");
            return;
        }

        SharedPreferences prefs = getContext().getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE);
        SharedPreferences.Editor editor = prefs.edit();
        editor.putString(KEY_ALLOWED_PACKAGES, packages);
        
        // Also set a non-prefixed version just in case
        editor.putString("allowedPackages", packages);
        
        editor.apply();
        call.resolve();
    }

    @PluginMethod
    public void checkAccessibility(PluginCall call) {
        // Redundant with isAccessibilityServiceEnabled, but keeping for compatibility
        isAccessibilityServiceEnabled(call);
    }
}
