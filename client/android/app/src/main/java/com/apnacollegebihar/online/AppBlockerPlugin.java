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
import android.graphics.Bitmap;
import android.graphics.Canvas;
import android.graphics.drawable.BitmapDrawable;
import android.graphics.drawable.Drawable;
import android.util.Base64;
import java.io.ByteArrayOutputStream;

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
    public void getInstalledApps(final PluginCall call) {
        new Thread(new Runnable() {
            @Override
            public void run() {
                try {
                    PackageManager pm = getContext().getPackageManager();

                    List<android.content.pm.ApplicationInfo> packages = pm.getInstalledApplications(PackageManager.GET_META_DATA);

                    JSArray retApps = new JSArray();

                    String myPkg = getContext().getPackageName();

                    Intent mainIntent = new Intent(Intent.ACTION_MAIN, null);
                    mainIntent.addCategory(Intent.CATEGORY_LAUNCHER);
                    List<ResolveInfo> resolveInfos = pm.queryIntentActivities(mainIntent, 0);
                    
                    Set<String> launcherPackages = new HashSet<>();
                    for (ResolveInfo resolveInfo : resolveInfos) {
                        launcherPackages.add(resolveInfo.activityInfo.packageName);
                    }

                    for (android.content.pm.ApplicationInfo info : packages) {
                        // Include apps that have a launcher icon, and exclude our own app
                        if (launcherPackages.contains(info.packageName) && !info.packageName.equals(myPkg)) {
                            JSObject appObj = new JSObject();
                            appObj.put("name", pm.getApplicationLabel(info).toString());
                            appObj.put("packageName", info.packageName);
                            
                            // Fetch icon and convert to base64
                            try {
                                Drawable icon = pm.getApplicationIcon(info);
                                int width = icon.getIntrinsicWidth() > 0 ? icon.getIntrinsicWidth() : 96;
                                int height = icon.getIntrinsicHeight() > 0 ? icon.getIntrinsicHeight() : 96;
                                if (width > 96 || height > 96) {
                                    width = 96;
                                    height = 96;
                                }
                                Bitmap bitmap = Bitmap.createBitmap(width, height, Bitmap.Config.ARGB_8888);
                                Canvas canvas = new Canvas(bitmap);
                                icon.setBounds(0, 0, canvas.getWidth(), canvas.getHeight());
                                icon.draw(canvas);

                                ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
                                bitmap.compress(Bitmap.CompressFormat.PNG, 80, outputStream);
                                byte[] byteArray = outputStream.toByteArray();
                                String base64Icon = Base64.encodeToString(byteArray, Base64.NO_WRAP);
                                appObj.put("icon", "data:image/png;base64," + base64Icon);
                            } catch (Exception ignored) {
                                appObj.put("icon", "");
                            }
                            
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
        }).start();
    }

    @PluginMethod
    public void startCountdown(PluginCall call) {
        Integer minutes = call.getInt("minutes");

        if (minutes == null) {
            call.reject("Minutes required");
            return;
        }

        long endTime = System.currentTimeMillis() + (minutes * 60 * 1000L);

        SharedPreferences.Editor editor = getPrefs().edit();
        editor.putString(KEY_IS_ACTIVE, "true");
        editor.putString(KEY_COUNTDOWN_END, String.valueOf(endTime));
        editor.apply();

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

        Intent serviceIntent = new Intent(getContext(), UsageStatsBlockerService.class);
        getContext().stopService(serviceIntent);

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

        // Also save to DeviceProtectedStorage for Direct Boot!
        Context deviceContext;
        if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.N) {
            deviceContext = getContext().createDeviceProtectedStorageContext();
        } else {
            deviceContext = getContext();
        }
        SharedPreferences.Editor dEditor = deviceContext.getSharedPreferences("DeviceProtectedStorage", Context.MODE_PRIVATE).edit();
        dEditor.putString("isBlockerActive", active ? "true" : "false");
        dEditor.apply();

        if (active) {
            Intent serviceIntent = new Intent(getContext(), UsageStatsBlockerService.class);
            if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.O) {
                getContext().startForegroundService(serviceIntent);
            } else {
                getContext().startService(serviceIntent);
            }
        } else {
            Intent serviceIntent = new Intent(getContext(), UsageStatsBlockerService.class);
            getContext().stopService(serviceIntent);
        }

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

            StringBuilder sb = new StringBuilder();
            for (String pkg : allowedSet) {
                if (sb.length() > 0) sb.append(",");
                sb.append(pkg);
            }

            SharedPreferences.Editor editor = getPrefs().edit();
            editor.putString(KEY_ALLOWED_PACKAGES, sb.toString());
            editor.apply();

            Log.d(TAG, "setAllowedPackages: " + sb.toString());
            call.resolve();

        } catch (Exception e) {
            Log.e(TAG, "setAllowedPackages error", e);
            call.reject(e.getMessage());
        }
    }

    @PluginMethod
    public void openAccessibilitySettings(PluginCall call) {
        // Kept for backwards compatibility if needed, but we use openUsageAccessSettings now
        call.resolve();
    }

    @PluginMethod
    public void checkAccessibility(PluginCall call) {
        // Return true to avoid breaking old UI code expecting this
        JSObject ret = new JSObject();
        ret.put("enabled", true);
        call.resolve(ret);
    }

    @PluginMethod
    public void checkUsageStatsPermission(PluginCall call) {
        boolean granted = false;
        if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.LOLLIPOP) {
            android.app.AppOpsManager appOps = (android.app.AppOpsManager) getContext()
                    .getSystemService(Context.APP_OPS_SERVICE);
            int mode = appOps.checkOpNoThrow(android.app.AppOpsManager.OPSTR_GET_USAGE_STATS,
                    android.os.Process.myUid(), getContext().getPackageName());
            granted = (mode == android.app.AppOpsManager.MODE_ALLOWED);
        } else {
            granted = true; // Not required below Lollipop
        }

        JSObject ret = new JSObject();
        ret.put("granted", granted);
        call.resolve(ret);
    }

    @PluginMethod
    public void requestUsageStatsPermission(PluginCall call) {
        if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.LOLLIPOP) {
            Intent intent = new Intent(Settings.ACTION_USAGE_ACCESS_SETTINGS);
            intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
            getContext().startActivity(intent);
        }
        call.resolve();
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
    public void checkAdminRights(PluginCall call) {
        try {
            android.app.admin.DevicePolicyManager dpm = (android.app.admin.DevicePolicyManager) getContext().getSystemService(Context.DEVICE_POLICY_SERVICE);
            android.content.ComponentName adminComponent = new android.content.ComponentName(getContext(), StudyDeviceAdminReceiver.class);
            
            boolean active = dpm.isAdminActive(adminComponent);
            JSObject ret = new JSObject();
            ret.put("granted", active);
            call.resolve(ret);
        } catch (Exception e) {
            call.reject(e.getMessage());
        }
    }

    @PluginMethod
    public void requestAdminRights(PluginCall call) {
        try {
            android.app.admin.DevicePolicyManager dpm = (android.app.admin.DevicePolicyManager) getContext().getSystemService(Context.DEVICE_POLICY_SERVICE);
            android.content.ComponentName adminComponent = new android.content.ComponentName(getContext(), StudyDeviceAdminReceiver.class);

            if (!dpm.isAdminActive(adminComponent)) {
                Intent intent = new Intent(android.app.admin.DevicePolicyManager.ACTION_ADD_DEVICE_ADMIN);
                intent.putExtra(android.app.admin.DevicePolicyManager.EXTRA_DEVICE_ADMIN, adminComponent);
                intent.putExtra(android.app.admin.DevicePolicyManager.EXTRA_ADD_EXPLANATION, "We need Device Administrator access to ensure strict focus mode and prevent app uninstallation during your study sessions.");
                
                getActivity().runOnUiThread(() -> {
                    getActivity().startActivity(intent);
                });
            }
            call.resolve();
        } catch (Exception e) {
            call.reject(e.getMessage());
        }
    }

    @PluginMethod
    public void removeAdminRights(PluginCall call) {
        try {
            android.app.admin.DevicePolicyManager dpm = (android.app.admin.DevicePolicyManager) getContext().getSystemService(Context.DEVICE_POLICY_SERVICE);
            android.content.ComponentName adminComponent = new android.content.ComponentName(getContext(), StudyDeviceAdminReceiver.class);
            
            if (dpm.isAdminActive(adminComponent)) {
                dpm.removeActiveAdmin(adminComponent);
            }
            call.resolve();
        } catch (Exception e) {
            call.reject(e.getMessage());
        }
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

    @PluginMethod
    public void lockApp(PluginCall call) {
        if (getActivity() != null) {
            getActivity().runOnUiThread(() -> {
                try {
                    getActivity().startLockTask();
                    call.resolve();
                } catch (Exception e) {
                    call.reject("Failed to lock task: " + e.getMessage());
                }
            });
        } else {
            call.reject("Activity is null");
        }
    }

    @PluginMethod
    public void unlockApp(PluginCall call) {
        if (getActivity() != null) {
            getActivity().runOnUiThread(() -> {
                try {
                    getActivity().stopLockTask();
                    call.resolve();
                } catch (Exception e) {
                    call.reject("Failed to unlock task: " + e.getMessage());
                }
            });
        } else {
            call.reject("Activity is null");
        }
    }
}

