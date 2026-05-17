package com.apnacollegebihar.online;

import android.accessibilityservice.AccessibilityService;
import android.content.SharedPreferences;
import android.util.Log;
import android.view.accessibility.AccessibilityEvent;
import android.widget.Toast;

import java.util.HashSet;
import java.util.Set;

public class AppBlockerService extends AccessibilityService {

    private static final String TAG = "AppBlockerService";
    private static final String PREFS_NAME = "CapacitorStorage";
    private static final String KEY_IS_ACTIVE_LEGACY = "_cap_isBlockerActive";
    private static final String KEY_IS_ACTIVE_CLEAN = "isBlockerActive";
    private static final String KEY_COUNTDOWN_END_LEGACY = "_cap_countdownEndTime";
    private static final String KEY_COUNTDOWN_END_CLEAN = "countdownEndTime";
    private static final String KEY_ALLOWED_PACKAGES_LEGACY = "_cap_allowedPackages";
    private static final String KEY_ALLOWED_PACKAGES_CLEAN = "allowedPackages";

    public static volatile boolean sIsActive = false;
    public static volatile long sCountdownEnd = 0;
    public static final Set<String> sAllowedPackages = new HashSet<>();

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
        if (event == null || event.getPackageName() == null) return;

        String packageName = event.getPackageName().toString();
        String myPackage = getPackageName();

        SharedPreferences prefs = getSharedPreferences(PREFS_NAME, MODE_PRIVATE);

        boolean isActive = sIsActive || getBooleanSafe(prefs, KEY_IS_ACTIVE_LEGACY) || getBooleanSafe(prefs, KEY_IS_ACTIVE_CLEAN);
        long endTime = Math.max(sCountdownEnd, Math.max(getLongSafe(prefs, KEY_COUNTDOWN_END_LEGACY), getLongSafe(prefs, KEY_COUNTDOWN_END_CLEAN)));
        boolean timerRunning = endTime > System.currentTimeMillis();

        Log.d(TAG, "onAccessibilityEvent pkg: " + packageName + ", isActive: " + isActive + ", timerRunning: " + timerRunning);

        if (!(isActive || timerRunning)) {
            return;
        }

        Set<String> allowedPackages = new HashSet<>();
        synchronized (sAllowedPackages) {
            allowedPackages.addAll(sAllowedPackages);
        }
        allowedPackages.addAll(getStringSetSafe(prefs, KEY_ALLOWED_PACKAGES_LEGACY));
        allowedPackages.addAll(getStringSetSafe(prefs, KEY_ALLOWED_PACKAGES_CLEAN));

        boolean isWhitelisted = allowedPackages.contains(packageName);

        if (
                packageName.equals(myPackage) ||
                packageName.contains("launcher") ||
                packageName.contains("systemui") ||
                packageName.contains("settings") ||
                isWhitelisted
        ) {
            return;
        }

        Log.d(TAG, "Blocking package: " + packageName);
        Toast.makeText(this, "Blocked: " + packageName, Toast.LENGTH_SHORT).show();
        performGlobalAction(GLOBAL_ACTION_HOME);
    }

    @Override
    public void onInterrupt() {
    }
}
