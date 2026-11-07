package com.apnacollegebihar.online;

import android.app.AlarmManager;
import android.app.PendingIntent;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.os.Build;
import android.util.Log;

import java.util.Calendar;

/**
 * BootReceiver
 * Reschedules the daily attendance notification alarm after device reboot.
 * This is necessary because AlarmManager alarms are cleared on reboot.
 */
public class BootReceiver extends BroadcastReceiver {

    private static final String TAG = "BootReceiver";

    @Override
    public void onReceive(Context context, Intent intent) {
        String action = intent.getAction();
        if (Intent.ACTION_BOOT_COMPLETED.equals(action) ||
            "android.intent.action.LOCKED_BOOT_COMPLETED".equals(action) ||
            "android.intent.action.QUICKBOOT_POWERON".equals(action)) {

            Log.d(TAG, "Boot completed or Locked Boot completed - rescheduling alarms and checking blocker");
            scheduleAllAlarms(context);

            // Restart app and blocker if a focus session was active before reboot
            try {
                Context deviceContext;
                if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.N) {
                    deviceContext = context.createDeviceProtectedStorageContext();
                } else {
                    deviceContext = context;
                }
                android.content.SharedPreferences dPrefs = deviceContext.getSharedPreferences("DeviceProtectedStorage", Context.MODE_PRIVATE);
                String valActive = dPrefs.getString("isBlockerActive", "false");
                
                // Fallback to CapacitorStorage if not found in DeviceProtectedStorage (for compatibility with existing sessions)
                if ("false".equals(valActive)) {
                    android.content.SharedPreferences prefs = context.getSharedPreferences("CapacitorStorage", Context.MODE_PRIVATE);
                    valActive = prefs.getString("isBlockerActive", "false");
                }
                if ("true".equalsIgnoreCase(valActive.trim())) {
                    Log.d(TAG, "Blocker was active before reboot! Relaunching app and service.");
                    
                    // 1. Start the blocker service directly so it acts immediately
                    Intent serviceIntent = new Intent(context, UsageStatsBlockerService.class);
                    if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.O) {
                        context.startForegroundService(serviceIntent);
                    } else {
                        context.startService(serviceIntent);
                    }

                    // 2. Launch the app to re-pin the screen
                    Intent launchIntent = new Intent(context, MainActivity.class);
                    launchIntent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_CLEAR_TOP);
                    context.startActivity(launchIntent);
                }
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }

    static void scheduleAllAlarms(Context context) {
        // Disabled: Only BEU official notifications are allowed.
        // Ensure any previously scheduled local alarms are actively cancelled.
        cancelAllAlarms(context);
    }

    public static void cancelAllAlarms(Context context) {
        cancelSpecificAlarm(context, 6000, "target_morning");
        cancelSpecificAlarm(context, 8000, "timetable");
        cancelSpecificAlarm(context, 8300, "attendance");
        cancelSpecificAlarm(context, 2230, "target_night");
        cancelSpecificAlarm(context, 2300, "good_night");
        Log.d(TAG, "All non-BEU daily alarms have been cancelled.");
    }

    private static void cancelSpecificAlarm(Context context, int requestCode, String alarmType) {
        AlarmManager alarmManager = (AlarmManager) context.getSystemService(Context.ALARM_SERVICE);
        if (alarmManager == null) return;

        Intent alarmIntent = new Intent(context, DailyNotificationReceiver.class);
        alarmIntent.setAction("com.apnacollegebihar.DAILY_NOTIFICATION");
        alarmIntent.putExtra("alarm_type", alarmType);

        PendingIntent pendingIntent = PendingIntent.getBroadcast(
            context,
            requestCode,
            alarmIntent,
            PendingIntent.FLAG_UPDATE_CURRENT | PendingIntent.FLAG_IMMUTABLE
        );
        alarmManager.cancel(pendingIntent);
        pendingIntent.cancel();
    }
}
