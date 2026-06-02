package com.apnacollegebihar.online;

import android.accessibilityservice.AccessibilityService;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.content.pm.PackageManager;
import android.content.pm.ResolveInfo;
import android.util.Log;
import android.view.accessibility.AccessibilityEvent;
import android.widget.Toast;

import java.util.HashSet;
import java.util.Set;

public class AppBlockerService extends AccessibilityService {

    private static final String TAG = "AppBlockerService";
    
    // Key Prefs keys (legacy Cap prefix and clean)
    private static final String KEY_IS_ACTIVE_LEGACY = "_cap_isBlockerActive";
    private static final String KEY_IS_ACTIVE_CLEAN = "isBlockerActive";
    private static final String KEY_COUNTDOWN_END_LEGACY = "_cap_countdownEndTime";
    private static final String KEY_COUNTDOWN_END_CLEAN = "countdownEndTime";
    private static final String KEY_ALLOWED_PACKAGES_LEGACY = "_cap_allowedPackages";
    private static final String KEY_ALLOWED_PACKAGES_CLEAN = "allowedPackages";

    public static volatile boolean sIsActive = false;
    public static volatile long sCountdownEnd = 0;
    public static final Set<String> sAllowedPackages = new HashSet<>();

    private String mCachedLauncherPackage = null;

    @Override
    protected void onServiceConnected() {
        super.onServiceConnected();
        Log.d(TAG, "AppBlockerService Connected!");
        try {
            Toast.makeText(this, "ACB Focus Mode Service Connected!", Toast.LENGTH_SHORT).show();
        } catch (Exception e) {}
    }

    // Returns all three potential SharedPreferences storage files used by Capacitor/Plugins
    private SharedPreferences[] getPrefsList() {
        return new SharedPreferences[]{
            getSharedPreferences("CapacitorStorage", MODE_PRIVATE),
            getSharedPreferences("com.getcapacitor.android.plugins.preferences.Preferences", MODE_PRIVATE),
            getSharedPreferences(getPackageName() + "_preferences", MODE_PRIVATE)
        };
    }

    private boolean getBooleanSafe(SharedPreferences prefs, String key) {
        try {
            return prefs.getBoolean(key, false);
        } catch (ClassCastException e) {
            try {
                String str = prefs.getString(key, "false");
                return "true".equalsIgnoreCase(str);
            } catch (Exception ex) {
                return false;
            }
        }
    }

    private long getLongSafe(SharedPreferences prefs, String key) {
        try {
            return prefs.getLong(key, 0);
        } catch (ClassCastException e) {
            try {
                String str = prefs.getString(key, "0");
                if (str != null && !str.isEmpty()) {
                    return Long.parseLong(str);
                }
            } catch (Exception ex) {}
            return 0;
        }
    }

    private Set<String> getStringSetSafe(SharedPreferences prefs, String key) {
        Set<String> result = new HashSet<>();
        try {
            Set<String> stored = prefs.getStringSet(key, new HashSet<>());
            if (stored != null) result.addAll(stored);
        } catch (ClassCastException e) {
            try {
                String str = prefs.getString(key, "");
                if (str != null && !str.isEmpty()) {
                    String[] parts = str.split(",");
                    for (String p : parts) {
                        if (!p.trim().isEmpty()) result.add(p.trim());
                    }
                }
            } catch (Exception ex) {}
        }
        return result;
    }

    @Override
    public void onAccessibilityEvent(AccessibilityEvent event) {
        try {
            if (event == null || event.getPackageName() == null) return;

            String packageName = event.getPackageName().toString();
            String myPackage = getPackageName();

            SharedPreferences[] prefsList = getPrefsList();

            // Evaluate if blocker is active across all possible settings sources
            boolean isActive = sIsActive;
            for (SharedPreferences prefs : prefsList) {
                if (getBooleanSafe(prefs, KEY_IS_ACTIVE_LEGACY) || getBooleanSafe(prefs, KEY_IS_ACTIVE_CLEAN)) {
                    isActive = true;
                    break;
                }
            }

            long endTime = sCountdownEnd;
            for (SharedPreferences prefs : prefsList) {
                endTime = Math.max(endTime, Math.max(
                    getLongSafe(prefs, KEY_COUNTDOWN_END_LEGACY),
                    getLongSafe(prefs, KEY_COUNTDOWN_END_CLEAN)
                ));
            }
            boolean timerRunning = endTime > System.currentTimeMillis();

            if (!(isActive || timerRunning)) {
                return;
            }

            // Resolve and cache the launcher package dynamically to avoid redundant PM queries
            String currentLauncherPackage = mCachedLauncherPackage;
            if (currentLauncherPackage == null) {
                try {
                    PackageManager pm = getPackageManager();
                    Intent intent = new Intent(Intent.ACTION_MAIN);
                    intent.addCategory(Intent.CATEGORY_HOME);
                    ResolveInfo resolveInfo = pm.resolveActivity(intent, PackageManager.MATCH_DEFAULT_ONLY);
                    if (resolveInfo != null && resolveInfo.activityInfo != null) {
                        mCachedLauncherPackage = resolveInfo.activityInfo.packageName;
                        currentLauncherPackage = mCachedLauncherPackage;
                    }
                } catch (Exception e) {
                    Log.e(TAG, "Failed to resolve launcher package", e);
                }
            }
            if (currentLauncherPackage == null) {
                currentLauncherPackage = "";
            }

            // Pull whitelisted packages from all possible SharedPreferences sources
            Set<String> allowedPackages = new HashSet<>();
            synchronized (sAllowedPackages) {
                allowedPackages.addAll(sAllowedPackages);
            }
            for (SharedPreferences prefs : prefsList) {
                allowedPackages.addAll(getStringSetSafe(prefs, KEY_ALLOWED_PACKAGES_LEGACY));
                allowedPackages.addAll(getStringSetSafe(prefs, KEY_ALLOWED_PACKAGES_CLEAN));
            }

            boolean isWhitelisted = allowedPackages.contains(packageName);

            // Safe-list standard UI, launchers, system apps, and essential incoming calls
            boolean isIgnoredPackage = 
                    packageName.equals(myPackage) ||
                    packageName.equals(currentLauncherPackage) ||
                    packageName.contains("launcher") ||
                    packageName.contains("home") ||
                    packageName.contains("systemui") ||
                    packageName.contains("settings") ||
                    packageName.equals("android") ||
                    packageName.equals("com.android.phone") ||
                    packageName.equals("com.android.server.telecom") ||
                    packageName.equals("com.google.android.dialer") ||
                    packageName.equals("com.android.incallui") ||
                    isWhitelisted;

            if (isIgnoredPackage) {
                return;
            }

            Log.d(TAG, "Blocking distracting package: " + packageName);
            try {
                Toast.makeText(this, "Focus Mode is Active!", Toast.LENGTH_SHORT).show();
            } catch (Exception tErr) {}
            
            // Go to home screen to block the app
            performGlobalAction(GLOBAL_ACTION_HOME);
            
        } catch (Exception e) {
            Log.e(TAG, "Error in onAccessibilityEvent", e);
        }
    }

    @Override
    public void onInterrupt() {
    }
}
