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
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@CapacitorPlugin(name = "AppBlocker")
public class AppBlockerPlugin extends Plugin {
    private static final String PREFS_NAME = "AppBlockerPrefs";
    private static final String KEY_IS_ACTIVE = "isBlockerActive";
    private static final String KEY_COUNTDOWN_END = "countdownEndTime";
    private static final String KEY_ALLOWED_PACKAGES = "allowedPackages";

    @PluginMethod
    public void getInstalledApps(PluginCall call) {
        PackageManager pm = getContext().getPackageManager();
        List<ApplicationInfo> apps = pm.getInstalledApplications(PackageManager.GET_META_DATA);
        JSArray retApps = new JSArray();

        for (ApplicationInfo app : apps) {
            if ((app.flags & ApplicationInfo.FLAG_SYSTEM) == 0) { // Filter out system apps
                JSObject info = new JSObject();
                info.put("name", pm.getApplicationLabel(app).toString());
                info.put("packageName", app.packageName);
                retApps.put(info);
            }
        }

        JSObject ret = new JSObject();
        ret.put("apps", retApps);
        call.resolve(ret);
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
}
