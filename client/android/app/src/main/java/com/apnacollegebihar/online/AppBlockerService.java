package com.apnacollegebihar.online;

import android.accessibilityservice.AccessibilityService;
import android.accessibilityservice.AccessibilityServiceInfo;
import android.content.SharedPreferences;
import android.view.accessibility.AccessibilityEvent;
import android.widget.Toast;

import java.util.HashSet;
import java.util.Set;

public class AppBlockerService extends AccessibilityService {

    private static final String PREFS_NAME = "CapacitorStorage";
    private static final String KEY_IS_ACTIVE = "_cap_isBlockerActive";
    private static final String KEY_COUNTDOWN_END = "_cap_countdownEndTime";
    private static final String KEY_ALLOWED_PACKAGES = "_cap_allowedPackages";

    @Override
    protected void onServiceConnected() {
        super.onServiceConnected();
        AccessibilityServiceInfo info = getServiceInfo();
        if (info == null) {
            info = new AccessibilityServiceInfo();
        }
        info.eventTypes = AccessibilityEvent.TYPE_WINDOW_STATE_CHANGED;
        info.feedbackType = AccessibilityServiceInfo.FEEDBACK_GENERIC;
        info.flags |= AccessibilityServiceInfo.FLAG_RETRIEVE_INTERACTIVE_WINDOWS | AccessibilityServiceInfo.DEFAULT;
        info.notificationTimeout = 100;
        setServiceInfo(info);
    }

    @Override
    public void onAccessibilityEvent(AccessibilityEvent event) {

        if (event == null) return;

        if (event.getPackageName() == null) return;

        String packageName = event.getPackageName().toString();

        String myPackage = getPackageName();

        SharedPreferences prefs =
                getSharedPreferences(PREFS_NAME, MODE_PRIVATE);

        boolean isActive = false;
        try {
            isActive = prefs.getBoolean(KEY_IS_ACTIVE, false);
        } catch (ClassCastException e) {
            try {
                String str = prefs.getString(KEY_IS_ACTIVE, "false");
                isActive = "true".equalsIgnoreCase(str);
            } catch (Exception ex) {}
        }

        long endTime = 0;
        try {
            endTime = prefs.getLong(KEY_COUNTDOWN_END, 0);
        } catch (ClassCastException e) {
            try {
                String str = prefs.getString(KEY_COUNTDOWN_END, "0");
                if (str != null && !str.isEmpty()) {
                    endTime = Long.parseLong(str);
                }
            } catch (Exception ex) {}
        }

        boolean timerRunning =
                endTime > System.currentTimeMillis();

        Set<String> allowedPackages = new HashSet<>();
        try {
            Set<String> stored = prefs.getStringSet(KEY_ALLOWED_PACKAGES, new HashSet<>());
            if (stored != null) allowedPackages.addAll(stored);
        } catch (ClassCastException e) {
            try {
                String str = prefs.getString(KEY_ALLOWED_PACKAGES, "");
                if (str != null && !str.isEmpty()) {
                    String[] parts = str.split(",");
                    for (String p : parts) {
                        if (!p.trim().isEmpty()) allowedPackages.add(p.trim());
                    }
                }
            } catch (Exception ex) {}
        }

        if (!(isActive || timerRunning)) {
            return;
        }

        boolean isWhitelisted =
                allowedPackages.contains(packageName);

        if (
                packageName.equals(myPackage) ||
                packageName.contains("launcher") ||
                packageName.contains("systemui") ||
                packageName.contains("settings") ||
                isWhitelisted
        ) {
            return;
        }

        Toast.makeText(
                this,
                "Blocked: " + packageName,
                Toast.LENGTH_SHORT
        ).show();

        performGlobalAction(GLOBAL_ACTION_HOME);
    }

    @Override
    public void onInterrupt() {

    }
}
