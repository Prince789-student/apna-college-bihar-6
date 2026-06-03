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

import org.json.JSONArray;
import org.json.JSONObject;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Locale;

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
        Log.d(TAG, "Daily notification alarm fired");

        // Get today's day abbreviation
        int dayOfWeek = new java.util.Calendar.getInstance().get(java.util.Calendar.DAY_OF_WEEK);
        // Calendar.DAY_OF_WEEK: 1=Sun, 2=Mon ... 7=Sat
        String todayKey = DAY_KEYS[dayOfWeek - 1];

        // Read timetable from SharedPreferences
        SharedPreferences prefs = context.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE);
        String timetableJson = prefs.getString(KEY_TIMETABLE, null);

        List<String> todaySubjects = new ArrayList<>();

        if (timetableJson != null) {
            try {
                JSONObject timetable = new JSONObject(timetableJson);
                String[] slots = {"6 AM","7 AM","8 AM","9 AM","10 AM","11 AM","12 PM",
                                  "1 PM","2 PM","3 PM","4 PM","5 PM","6 PM","7 PM","8 PM","9 PM","10 PM"};
                for (String slot : slots) {
                    String cellKey = todayKey + "_" + slot;
                    if (timetable.has(cellKey)) {
                        String subject = timetable.getString(cellKey).trim();
                        if (!subject.isEmpty()) {
                            todaySubjects.add(subject + " (" + slot + ")");
                        }
                    }
                }
            } catch (Exception e) {
                Log.e(TAG, "Error parsing timetable JSON", e);
            }
        }

        // Build notification content
        String title;
        String body;

        if (todaySubjects.isEmpty()) {
            // No classes today — check if timetable was set up at all
            if (timetableJson == null) {
                title = "📅 Apna College Bihar";
                body = "Aaj ki classes track karo! Timetable set karo aur attendance mark karo.";
            } else {
                title = "✅ Aaj koi class nahi!";
                body = "Today's schedule is clear. But don't forget to mark your overall attendance!";
            }
        } else {
            title = "📚 Aaj ki Classes — " + todaySubjects.size() + " Subjects";
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < Math.min(todaySubjects.size(), 4); i++) {
                if (i > 0) sb.append(", ");
                sb.append(todaySubjects.get(i).split(" \\(")[0]); // just subject name
            }
            if (todaySubjects.size() > 4) sb.append(" +" + (todaySubjects.size() - 4) + " more");
            body = sb.toString() + "\nAttendance mark karna mat bhoolo! 🎯";
        }

        showNotification(context, title, body);
    }

    private void showNotification(Context context, String title, String body) {
        NotificationManager nm = (NotificationManager) context.getSystemService(Context.NOTIFICATION_SERVICE);

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

        nm.notify(NOTIF_ID, builder.build());
        Log.d(TAG, "Notification shown: " + title);
    }
}
