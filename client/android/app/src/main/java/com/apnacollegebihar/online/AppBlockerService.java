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

    private static final String PREFS_NAME = "AppBlockerPrefs";
    private static final String KEY_IS_ACTIVE = "isBlockerActive";
    private static final String KEY_COUNTDOWN_END = "countdownEndTime";
    private static final String KEY_ALLOWED_PACKAGES = "allowedPackages";

    @Override
    protected void onServiceConnected() {
        super.onServiceConnected();
        AccessibilityServiceInfo info = new AccessibilityServiceInfo();
        info.eventTypes = AccessibilityEvent.TYPE_WINDOW_STATE_CHANGED;
        info.feedbackType = AccessibilityServiceInfo.FEEDBACK_GENERIC;
        info.notificationTimeout = 100;
        this.setServiceInfo(info);
        Toast.makeText(this, "Apna College Bihar Blocker Started!", Toast.LENGTH_LONG).show();
    }

    @Override
    public void onAccessibilityEvent(AccessibilityEvent event) {
        if (event.getEventType() == AccessibilityEvent.TYPE_WINDOW_STATE_CHANGED) {
            String packageName = event.getPackageName().toString();
            
            SharedPreferences prefs = getSharedPreferences(PREFS_NAME, MODE_PRIVATE);
            boolean isActive = prefs.getBoolean(KEY_IS_ACTIVE, false);
            long endTime = prefs.getLong(KEY_COUNTDOWN_END, 0);
            
            // Hardcore Logic: Agar timer chalu hai, toh check karo!
            boolean isCountdownRunning = (System.currentTimeMillis() < endTime);
            
            if (isActive || isCountdownRunning) {
                Set<String> allowed = prefs.getStringSet(KEY_ALLOWED_PACKAGES, new HashSet<String>());
                
                // Humesha Allowed (System & Essential)
                if (packageName.equals("com.apnacollegebihar.online") || 
                    packageName.equals("com.android.phone") || 
                    packageName.equals("com.android.server.telecom") ||
                    packageName.equals("com.android.mms") ||
                    packageName.equals("com.google.android.apps.messaging") ||
                    allowed.contains(packageName)) {
                    return; // Sab sahi hai, aage badho!
                }

                // Agar Settings kholne ki koshish kari (Strict Mode)
                if (packageName.equals("com.android.settings") && isCountdownRunning) {
                    performGlobalAction(GLOBAL_ACTION_HOME);
                    Toast.makeText(this, "STRICT MODE: Setting block hain!", Toast.LENGTH_SHORT).show();
                    return;
                }

                // Baaki sab Block!
                performGlobalAction(GLOBAL_ACTION_HOME);
                Toast.makeText(this, "IRON FOCUS: Abhi abhi padhai ka time hai!", Toast.LENGTH_SHORT).show();
                
                // Bring App back to front
                Intent startMain = new Intent(this, MainActivity.class);
                startMain.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_REORDER_TO_FRONT);
                startActivity(startMain);
            }
        }
    }

    @Override
    public void onInterrupt() {
        // Required method
    }
}
