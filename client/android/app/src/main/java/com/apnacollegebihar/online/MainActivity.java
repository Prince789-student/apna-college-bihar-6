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
        super.onCreate(savedInstanceState);

        // Request POST_NOTIFICATIONS permission on Android 13+
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) {
            requestPermissions(new String[]{Manifest.permission.POST_NOTIFICATIONS}, 100);
        }

        // Schedule the daily notification alarm at 8:00 AM (if not already scheduled)
        BootReceiver.scheduleDailyAlarm(this, 8, 0);
    }
}
