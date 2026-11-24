package com.apnacollegebihar.online;

import android.os.Build;
import android.os.Bundle;
import android.Manifest;
import android.view.View;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowCompat;
import androidx.core.view.WindowInsetsCompat;
import androidx.core.view.WindowInsetsControllerCompat;
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {

    @Override
    public void onCreate(Bundle savedInstanceState) {
        // Register all Capacitor plugins
        registerPlugin(AppBlockerPlugin.class);
        registerPlugin(DailyNotificationPlugin.class);
        registerPlugin(AndroidDownloaderPlugin.class);
        super.onCreate(savedInstanceState);

        // Enforce clean safe-area padding for Android 15/16 (API 35/36) edge-to-edge + display cutout
        WindowCompat.setDecorFitsSystemWindows(getWindow(), true);
        View contentView = findViewById(android.R.id.content);
        if (contentView != null) {
            contentView.setBackgroundColor(android.graphics.Color.parseColor("#f8fafc"));
            ViewCompat.setOnApplyWindowInsetsListener(contentView, (v, windowInsets) -> {
                Insets insets = windowInsets.getInsets(
                    WindowInsetsCompat.Type.systemBars() |
                    WindowInsetsCompat.Type.displayCutout() |
                    WindowInsetsCompat.Type.ime()
                );
                v.setPadding(insets.left, insets.top, insets.right, insets.bottom);
                return WindowInsetsCompat.CONSUMED;
            });
        }
        WindowInsetsControllerCompat controller = new WindowInsetsControllerCompat(getWindow(), getWindow().getDecorView());
        controller.setAppearanceLightStatusBars(true);
        controller.setAppearanceLightNavigationBars(true);

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
