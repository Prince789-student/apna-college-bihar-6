package com.apnacollegebihar.online;

import android.os.Build;
import android.os.Bundle;
import android.Manifest;
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {

    @Override
    public void onCreate(Bundle savedInstanceState) {
        // Register all Capacitor plugins
        registerPlugin(AppBlockerPlugin.class);
        registerPlugin(DailyNotificationPlugin.class);
        registerPlugin(AndroidDownloaderPlugin.class);
        super.onCreate(savedInstanceState);

        // Request POST_NOTIFICATIONS permission on Android 13+
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) {
            requestPermissions(new String[]{Manifest.permission.POST_NOTIFICATIONS}, 100);
        }

        // Schedule all five daily alarms (if not already scheduled)
        BootReceiver.scheduleAllAlarms(this);
    }

    @Override
    public void onBackPressed() {
        try {
            android.content.SharedPreferences prefs = getSharedPreferences("CapacitorStorage", android.content.Context.MODE_PRIVATE);
            String valActive = prefs.getString("isBlockerActive", "false");
            if ("true".equalsIgnoreCase(valActive.trim())) {
                android.widget.Toast.makeText(this, "Focus Mode is Active! You cannot exit.", android.widget.Toast.LENGTH_SHORT).show();
                return; // Consume the back button event!
            }
        } catch (Exception e) {}
        
        super.onBackPressed();
    }
}
