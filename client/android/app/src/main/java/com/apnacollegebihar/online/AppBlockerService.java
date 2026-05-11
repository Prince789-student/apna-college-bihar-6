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

        AccessibilityServiceInfo info =
                new AccessibilityServiceInfo();

        info.eventTypes =
                AccessibilityEvent.TYPE_WINDOW_STATE_CHANGED;

        info.feedbackType =
                AccessibilityServiceInfo.FEEDBACK_GENERIC;

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

        boolean isActive =
                prefs.getBoolean(KEY_IS_ACTIVE, false);

        long endTime =
                prefs.getLong(KEY_COUNTDOWN_END, 0);

        boolean timerRunning =
                endTime > System.currentTimeMillis();

        Set<String> allowedPackages =
                prefs.getStringSet(
                        KEY_ALLOWED_PACKAGES,
                        new HashSet<>()
                );

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
