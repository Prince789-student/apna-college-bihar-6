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
        // Schedule each of the 5 alarms
        // 1. 6:00 AM (target_morning) -> Request Code 6000
        scheduleSpecificAlarm(context, 6, 0, 6000, "target_morning");
        // 2. 8:00 AM (timetable) -> Request Code 8000
        scheduleSpecificAlarm(context, 8, 0, 8000, "timetable");
        // 3. 8:30 AM (attendance) -> Request Code 8300
        scheduleSpecificAlarm(context, 8, 30, 8300, "attendance");
        // 4. 10:30 PM / 22:30 (target_night) -> Request Code 2230
        scheduleSpecificAlarm(context, 22, 30, 2230, "target_night");
        // 5. 11:00 PM / 23:00 (good_night) -> Request Code 2300
        scheduleSpecificAlarm(context, 23, 0, 2300, "good_night");
    }

    private static void scheduleSpecificAlarm(Context context, int hour, int minute, int requestCode, String alarmType) {
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

        Calendar calendar = Calendar.getInstance();
        calendar.set(Calendar.HOUR_OF_DAY, hour);
        calendar.set(Calendar.MINUTE, minute);
        calendar.set(Calendar.SECOND, 0);
        calendar.set(Calendar.MILLISECOND, 0);

        // If time already passed today, schedule for tomorrow
        if (calendar.getTimeInMillis() <= System.currentTimeMillis()) {
            calendar.add(Calendar.DAY_OF_MONTH, 1);
        }

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.S) {
            if (alarmManager.canScheduleExactAlarms()) {
                alarmManager.setExactAndAllowWhileIdle(AlarmManager.RTC_WAKEUP, calendar.getTimeInMillis(), pendingIntent);
            } else {
                alarmManager.setAndAllowWhileIdle(AlarmManager.RTC_WAKEUP, calendar.getTimeInMillis(), pendingIntent);
            }
        } else if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
            alarmManager.setExactAndAllowWhileIdle(
                AlarmManager.RTC_WAKEUP,
                calendar.getTimeInMillis(),
                pendingIntent
            );
        } else {
            alarmManager.setRepeating(
                AlarmManager.RTC_WAKEUP,
                calendar.getTimeInMillis(),
                AlarmManager.INTERVAL_DAY,
                pendingIntent
            );
        }
        Log.d(TAG, "Alarm " + alarmType + " scheduled for " + hour + ":" + minute + " (Request Code: " + requestCode + ")");
    }
}
