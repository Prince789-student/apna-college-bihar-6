package com.apnacollegebihar.online;

import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Build;
import android.util.Log;

import androidx.core.app.NotificationCompat;

import org.json.JSONObject;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

/**
 * DailyNotificationReceiver
 * Fires every morning (scheduled by DailyNotificationPlugin via AlarmManager).
 * Reads today's timetable from SharedPreferences and shows a notification.
 */
public class DailyNotificationReceiver extends BroadcastReceiver {

    private static final String TAG = "DailyNotifReceiver";
    private static final String CHANNEL_ID = "attendance_daily";
    private static final String CHANNEL_NAME = "Daily Class Reminder";
    private static final int NOTIF_ID = 1001;

    // Capacitor SharedPreferences key for timetable JSON
    private static final String PREFS_NAME = "CapacitorStorage";
    private static final String KEY_TIMETABLE = "_cap_timetable";

    // Day abbreviations matching JS side (Mon, Tue, Wed, Thu, Fri, Sat, Sun)
    private static final String[] DAY_KEYS = {"Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"};

    @Override
    public void onReceive(Context context, Intent intent) {
        Log.d(TAG, "Daily notification alarm triggered but non-BEU notifications are disabled. Cancelling all alarms.");
        // Ensure all daily alarms are cancelled and no notification is displayed
        BootReceiver.cancelAllAlarms(context);
    }

    private void showNotification(Context context, String title, String body, int notifId) {
        NotificationManager nm = (NotificationManager) context.getSystemService(Context.NOTIFICATION_SERVICE);
        if (nm == null) return;

        // Create notification channel for Android O+
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            NotificationChannel channel = new NotificationChannel(
                CHANNEL_ID,
                CHANNEL_NAME,
                NotificationManager.IMPORTANCE_HIGH
            );
            channel.setDescription("Daily class schedule reminders from Apna College Bihar");
            channel.enableVibration(true);
            nm.createNotificationChannel(channel);
        }

        // Intent to open app when notification tapped
        Intent launchIntent = context.getPackageManager()
            .getLaunchIntentForPackage(context.getPackageName());
        if (launchIntent != null) {
            launchIntent.setFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP | Intent.FLAG_ACTIVITY_SINGLE_TOP);
        }
        PendingIntent pendingIntent = PendingIntent.getActivity(
            context, 0,
            launchIntent != null ? launchIntent : new Intent(),
            PendingIntent.FLAG_UPDATE_CURRENT | PendingIntent.FLAG_IMMUTABLE
        );

        NotificationCompat.Builder builder = new NotificationCompat.Builder(context, CHANNEL_ID)
            .setSmallIcon(R.mipmap.ic_launcher)
            .setContentTitle(title)
            .setContentText(body)
            .setStyle(new NotificationCompat.BigTextStyle().bigText(body))
            .setPriority(NotificationCompat.PRIORITY_HIGH)
            .setContentIntent(pendingIntent)
            .setAutoCancel(true)
            .setVibrate(new long[]{0, 300, 200, 300});

        nm.notify(notifId, builder.build());
        Log.d(TAG, "Notification shown: " + title + " (ID: " + notifId + ")");
    }
}
