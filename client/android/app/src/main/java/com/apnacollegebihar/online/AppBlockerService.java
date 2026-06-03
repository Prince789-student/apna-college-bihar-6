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

    private static final String KEY_LAST_LAUNCHED_PACKAGE = "_cap_lastLaunchedPackage";
    private static final String KEY_LAST_LAUNCHED_TIME = "_cap_lastLaunchedTime";

    public static volatile String sLastLaunchedPackage = null;
    public static volatile long sLastLaunchedTime = 0;

    private String mCachedLauncherPackage = null;
    private long mLastToastTime = 0;

    private void clearLastLaunched() {
        sLastLaunchedPackage = "";
        sLastLaunchedTime = 0;
        try {
            SharedPreferences.Editor editor = getPrefs().edit();
            editor.putString(KEY_LAST_LAUNCHED_PACKAGE, "");
            editor.putString(KEY_LAST_LAUNCHED_TIME, "0");
            editor.apply();
        } catch (Exception ignored) {}
        Log.d(TAG, "Cleared last launched package");
    }

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

            // Basic system packages that should never be blocked
            boolean isSystemIgnored =
                    packageName.equals(myPackage) ||
                    packageName.equals(launcherPackage) ||
                    packageName.contains("launcher") ||
                    packageName.contains(".home") ||
                    packageName.contains("systemui") ||
                    packageName.equals("android") ||
                    packageName.equals("com.android.phone") ||
                    packageName.equals("com.android.server.telecom") ||
                    packageName.equals("com.google.android.dialer") ||
                    packageName.equals("com.android.incallui") ||
                    packageName.contains("packageinstaller") ||
                    packageName.contains("inputmethod") ||
                    packageName.equals("com.google.android.gms");

            // Settings is only blocked if the blocker is active and the timer is running
            boolean isSettings = packageName.contains("settings") || packageName.equals("com.android.settings");
            boolean isBlockedSettings = isSettings && (isActive && timerRunning);

            // Get whitelisted packages
            Set<String> allowed = getAllowedPackages();

            // Read last launched package and time from memory / SharedPreferences
            String lastLaunchedPkg = sLastLaunchedPackage;
            long lastLaunchedT = sLastLaunchedTime;
            if (lastLaunchedPkg == null) {
                lastLaunchedPkg = getString(KEY_LAST_LAUNCHED_PACKAGE);
                String tStr = getString(KEY_LAST_LAUNCHED_TIME);
                if (tStr != null && !tStr.trim().isEmpty()) {
                    try {
                        lastLaunchedT = Long.parseLong(tStr.trim());
                    } catch (NumberFormatException ignored) {}
                }
            }

            long now = System.currentTimeMillis();
            long timeSinceLaunch = now - lastLaunchedT;

            // Clear the launched package when user returns to our app or launcher
            if (packageName.equals(myPackage)) {
                if (lastLaunchedPkg != null && !lastLaunchedPkg.isEmpty() && timeSinceLaunch > 3000) {
                    clearLastLaunched();
                }
                return;
            }

            if (packageName.equals(launcherPackage) || packageName.contains("launcher") || packageName.contains(".home")) {
                if (lastLaunchedPkg != null && !lastLaunchedPkg.isEmpty() && timeSinceLaunch > 3000) {
                    clearLastLaunched();
                }
                return;
            }

            // An allowed app is only ignored if it matches the last launched package from our app
            boolean isLastLaunchedAllowed = allowed.contains(packageName) && packageName.equals(lastLaunchedPkg);

            boolean isIgnored = isSystemIgnored || (isSettings && !isBlockedSettings) || isLastLaunchedAllowed;

            if (isIgnored) {
                return;
            }

            Log.d(TAG, "BLOCKING: " + packageName + " | active=" + isActive + " | timer=" + timerRunning);

            // Show toast at most once per 3 seconds to avoid spam
            if (now - mLastToastTime > 3000) {
                mLastToastTime = now;
                try {
                    Toast.makeText(this, "🛡️ Focus Mode Active! App blocked.", Toast.LENGTH_SHORT).show();
                } catch (Exception ignored) {}
            }

            // Bring our app to the foreground instead of going home
            Intent launchIntent = getPackageManager().getLaunchIntentForPackage(myPackage);
            if (launchIntent != null) {
                launchIntent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_CLEAR_TOP | Intent.FLAG_ACTIVITY_SINGLE_TOP);
                startActivity(launchIntent);
            } else {
                performGlobalAction(GLOBAL_ACTION_HOME);
            }

        } catch (Exception e) {
            Log.e(TAG, "Error in onAccessibilityEvent", e);
        }
    }

    @Override
    public void onInterrupt() {
        Log.d(TAG, "AppBlockerService interrupted");
    }
}
