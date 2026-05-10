package com.apnacollegebihar.online;

import android.content.pm.ApplicationInfo;
import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import android.os.Bundle;
import com.getcapacitor.BridgeActivity;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.JSObject;
import com.getcapacitor.JSArray;
import java.util.List;
import java.util.ArrayList;

public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        registerPlugin(AppListPlugin.class);
    }
}

@com.getcapacitor.annotation.CapacitorPlugin(name = "AppList")
class AppListPlugin extends Plugin {
    @PluginMethod
    public void getInstalledApps(PluginCall call) {
        PackageManager pm = getContext().getPackageManager();
        List<ApplicationInfo> apps = pm.getInstalledApplications(PackageManager.GET_META_DATA);
        JSArray appList = new JSArray();

        for (ApplicationInfo app : apps) {
            // Only show launchable apps (user apps)
            if (pm.getLaunchIntentForPackage(app.packageName) != null) {
                JSObject appInfo = new JSObject();
                appInfo.put("name", pm.getApplicationLabel(app).toString());
                appInfo.put("packageName", app.packageName);
                appList.put(appInfo);
            }
        }
        JSObject ret = new JSObject();
        ret.put("apps", appList);
        call.resolve(ret);
    }

    @PluginMethod
    public void isAccessibilityServiceEnabled(PluginCall call) {
        String serviceName = getContext().getPackageName() + "/" + AppBlockerService.class.getName();
        int accessibilityEnabled = 0;
        try {
            accessibilityEnabled = android.provider.Settings.Secure.getInt(
                getContext().getContentResolver(),
                android.provider.Settings.Secure.ACCESSIBILITY_ENABLED);
        } catch (android.provider.Settings.SettingNotFoundException e) {}

        android.text.TextUtils.SimpleStringSplitter mStringColonSplitter = new android.text.TextUtils.SimpleStringSplitter(':');
        boolean isEnabled = false;
        if (accessibilityEnabled == 1) {
            String settingValue = android.provider.Settings.Secure.getString(
                getContext().getContentResolver(),
                android.provider.Settings.Secure.ENABLED_ACCESSIBILITY_SERVICES);
            if (settingValue != null) {
                mStringColonSplitter.setString(settingValue);
                while (mStringColonSplitter.hasNext()) {
                    String accessibilityService = mStringColonSplitter.next();
                    if (accessibilityService.equalsIgnoreCase(serviceName)) {
                        isEnabled = true;
                    }
                }
            }
        }
        JSObject ret = new JSObject();
        ret.put("enabled", isEnabled);
        call.resolve(ret);
    }
}
