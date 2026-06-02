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

import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

public class AppBlockerService extends AccessibilityService {

    private static final String TAG = "AppBlockerService";

    // SharedPreferences file — must match AppBlockerPlugin
    private static final String PREFS_NAME = "CapacitorStorage";

    // Keys with _cap_ prefix — this is how @capacitor/preferences stores them
    private static final String KEY_IS_ACTIVE = "_cap_isBlockerActive";
    private static final String KEY_COUNTDOWN_END = "_cap_countdownEndTime";
    private static final String KEY_ALLOWED_PACKAGES = "_cap_allowedPackages";

    // In-memory state (updated by plugin directly)
    public static volatile boolean sIsActive = false;
    public static volatile long sCountdownEnd = 0;
    public static final Set<String> sAllowedPackages = new HashSet<>();

    private String mCachedLauncherPackage = null;
    private long mLastToastTime = 0;

    @Override
    protected void onServiceConnected() {
        super.onServiceConnected();
        Log.d(TAG, "AppBlockerService Connected and running!");
        try {
            Toast.makeText(this, "ACB Focus Mode: Service Started!", Toast.LENGTH_SHORT).show();
        } catch (Exception ignored) {}
    }

    private SharedPreferences getPrefs() {
        return getSharedPreferences(PREFS_NAME, MODE_PRIVATE);
    }

    /**
     * Read a String value from SharedPreferences.
     * @capacitor/preferences stores all values as JSON strings.
     */
    private String getString(String key) {
        SharedPreferences prefs = getPrefs();
        try {
            // @capacitor/preferences stores as String
            return prefs.getString(key, null);
        } catch (ClassCastException e) {
            // Fallback: maybe stored as other type
            try {
                Object val = prefs.getAll().get(key);
                return val != null ? val.toString() : null;
            } catch (Exception ex) {
                return null;
            }
        }
    }

    private boolean isBlockerActive() {
        // Check in-memory first (fastest)
        if (sIsActive) return true;

        // Check SharedPreferences (written by @capacitor/preferences and plugin)
        String val = getString(KEY_IS_ACTIVE);
        if (val != null) {
            // @capacitor/preferences stores booleans as "true" or "false" strings
            return "true".equalsIgnoreCase(val.trim());
        }
        return false;
    }

    private long getCountdownEnd() {
        // In-memory takes priority
        if (sCountdownEnd > 0) return sCountdownEnd;

        String val = getString(KEY_COUNTDOWN_END);
        if (val != null && !val.trim().isEmpty()) {
            try {
                return Long.parseLong(val.trim());
            } catch (NumberFormatException e) {
                Log.w(TAG, "Could not parse countdownEnd: " + val);
            }
        }
        return 0;
    }

    private Set<String> getAllowedPackages() {
        Set<String> result = new HashSet<>();

        // In-memory packages
        synchronized (sAllowedPackages) {
            result.addAll(sAllowedPackages);
        }

        // Also check SharedPreferences
        String val = getString(KEY_ALLOWED_PACKAGES);
        if (val != null && !val.trim().isEmpty()) {
            String[] parts = val.split(",");
            for (String part : parts) {
                String trimmed = part.trim();
                if (!trimmed.isEmpty()) {
                    result.add(trimmed);
                }
            }
        }

        return result;
    }

    private String getLauncherPackage() {
        if (mCachedLauncherPackage != null) return mCachedLauncherPackage;
        try {
            PackageManager pm = getPackageManager();
            Intent intent = new Intent(Intent.ACTION_MAIN);
            intent.addCategory(Intent.CATEGORY_HOME);
            ResolveInfo resolveInfo = pm.resolveActivity(intent, PackageManager.MATCH_DEFAULT_ONLY);
            if (resolveInfo != null && resolveInfo.activityInfo != null) {
                mCachedLauncherPackage = resolveInfo.activityInfo.packageName;
                return mCachedLauncherPackage;
            }
        } catch (Exception e) {
            Log.e(TAG, "Failed to resolve launcher", e);
        }
        return "";
    }

    @Override
    public void onAccessibilityEvent(AccessibilityEvent event) {
        try {
            if (event == null || event.getPackageName() == null) return;

            String packageName = event.getPackageName().toString();
            if (packageName.trim().isEmpty()) return;

            // Check if blocker should be active
            boolean isActive = isBlockerActive();
            long endTime = getCountdownEnd();
            boolean timerRunning = endTime > System.currentTimeMillis();

            if (!isActive && !timerRunning) {
                return;
            }

            String myPackage = getPackageName();
            String launcherPackage = getLauncherPackage();

            // Get whitelisted packages
            Set<String> allowed = getAllowedPackages();

            // Packages to never block
            boolean isIgnored =
                    packageName.equals(myPackage) ||
                    packageName.equals(launcherPackage) ||
                    packageName.contains("launcher") ||
                    packageName.contains(".home") ||
                    packageName.contains("systemui") ||
                    packageName.contains("settings") ||
                    packageName.equals("android") ||
                    packageName.equals("com.android.phone") ||
                    packageName.equals("com.android.server.telecom") ||
                    packageName.equals("com.google.android.dialer") ||
                    packageName.equals("com.android.incallui") ||
                    allowed.contains(packageName);

            if (isIgnored) {
                return;
            }

            Log.d(TAG, "BLOCKING: " + packageName + " | active=" + isActive + " | timer=" + timerRunning);

            // Show toast at most once per 3 seconds to avoid spam
            long now = System.currentTimeMillis();
            if (now - mLastToastTime > 3000) {
                mLastToastTime = now;
                try {
                    Toast.makeText(this, "🛡️ Focus Mode Active! App blocked.", Toast.LENGTH_SHORT).show();
                } catch (Exception ignored) {}
            }

            // Go to home screen
            performGlobalAction(GLOBAL_ACTION_HOME);

        } catch (Exception e) {
            Log.e(TAG, "Error in onAccessibilityEvent", e);
        }
    }

    @Override
    public void onInterrupt() {
        Log.d(TAG, "AppBlockerService interrupted");
    }
}
