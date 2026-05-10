package com.apnacollegebihar.online;

import android.accessibilityservice.AccessibilityService;
import android.accessibilityservice.AccessibilityServiceInfo;
import android.content.Intent;
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
        AccessibilityServiceInfo info = new AccessibilityServiceInfo();
        info.eventTypes = AccessibilityEvent.TYPE_WINDOW_STATE_CHANGED;
        info.feedbackType = AccessibilityServiceInfo.FEEDBACK_GENERIC;
        info.notificationTimeout = 100;
        this.setServiceInfo(info);
    }

    @Override
    public void onAccessibilityEvent(AccessibilityEvent event) {
        if (event.getEventType() == AccessibilityEvent.TYPE_WINDOW_STATE_CHANGED) {
            if (event.getPackageName() == null) return;
            String packageName = event.getPackageName().toString();
            String myPackage = this.getPackageName();
            
            // Check multiple potential preference files
            String[] prefFiles = {"CapacitorStorage", "com.getcapacitor.android.plugins.preferences.Preferences", "AppBlockerPrefs", "bridge"};
            boolean isActive = false;
            long endTime = 0;
            String allowedStr = "";

            for (String prefFile : prefFiles) {
                try {
                    SharedPreferences prefs = getSharedPreferences(prefFile, MODE_PRIVATE);
                    String activeStr = prefs.getString("_cap_isBlockerActive", prefs.getString("isBlockerActive", "false"));
                    if ("true".equals(activeStr) || prefs.getBoolean("isBlockerActive", false) || prefs.getBoolean("_cap_isBlockerActive", false)) {
                        isActive = true;
                    }
                    
                    String timeStr = prefs.getString("_cap_countdownEndTime", prefs.getString("countdownEndTime", "0"));
                    try {
                        long t = Long.parseLong(timeStr);
                        if (t > endTime) endTime = t;
                    } catch (Exception e) {
                        long t = prefs.getLong("_cap_countdownEndTime", prefs.getLong("countdownEndTime", 0));
                        if (t > endTime) endTime = t;
                    }
                    
                    String allowed = prefs.getString("_cap_allowedPackages", prefs.getString("allowedPackages", ""));
                    if (allowed != null && !allowed.isEmpty()) {
                        if (allowedStr.isEmpty()) allowedStr = allowed;
                        else allowedStr += "," + allowed;
                    }
                } catch (Exception e) {}
            }

            boolean isCountdownRunning = (endTime > 0 && System.currentTimeMillis() < endTime);
            
            if (isActive || isCountdownRunning) {
                // Enhanced Whitelist Check
                boolean isWhitelisted = false;
                if (allowedStr != null && !allowedStr.isEmpty()) {
                    String[] allowedApps = allowedStr.split(",");
                    for (String pkg : allowedApps) {
                        if (packageName.equals(pkg.trim())) {
                            isWhitelisted = true;
                            break;
                        }
                    }
                }

                // System & Essential Apps (including Google Services/Launcher)
                if (packageName.equals(myPackage) || 
                    packageName.equals("com.android.phone") || 
                    packageName.equals("com.android.server.telecom") ||
                    packageName.equals("com.android.systemui") ||
                    packageName.contains("launcher") ||
                    packageName.contains("trebuchet") ||
                    isWhitelisted) {
                    return; 
                }

                // Block everything else!
                // Instead of just going home, bring our app back to the front
                Intent launchIntent = getPackageManager().getLaunchIntentForPackage(myPackage);
                if (launchIntent != null) {
                    launchIntent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_REORDER_TO_FRONT | Intent.FLAG_ACTIVITY_SINGLE_TOP);
                    try {
                        startActivity(launchIntent);
                        Toast.makeText(this, "IRON FOCUS: Strict mode active!", Toast.LENGTH_SHORT).show();
                    } catch (Exception e) {}
                } else {
                    performGlobalAction(GLOBAL_ACTION_HOME);
                }
            }
        }
    }

    @Override
    public void onInterrupt() {
    }
}
