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
        String alarmType = intent.getStringExtra("alarm_type");
        if (alarmType == null) {
            alarmType = "timetable";
        }
        Log.d(TAG, "Daily notification alarm fired. Type: " + alarmType);

        SharedPreferences prefs = context.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE);
        String title = "Apna College Bihar";
        String body = "";
        int notifId = NOTIF_ID;

        if ("target_morning".equals(alarmType)) {
            title = "Aaj ka Target! 🎯";
            notifId = 1001;
            String targetsJson = prefs.getString("_cap_targets", null);
            boolean hasTargets = false;
            StringBuilder targetText = new StringBuilder();
            if (targetsJson != null) {
                try {
                    org.json.JSONArray arr = new org.json.JSONArray(targetsJson);
                    if (arr.length() > 0) {
                        hasTargets = true;
                        int count = Math.min(arr.length(), 3);
                        for (int i = 0; i < count; i++) {
                            if (i > 0) targetText.append(", ");
                            targetText.append(arr.getJSONObject(i).getString("text"));
                        }
                        if (arr.length() > 3) {
                            targetText.append(" +").append(arr.length() - 3).append(" aur");
                        }
                    }
                } catch (Exception e) {
                    Log.e(TAG, "Error parsing targets", e);
                }
            }

            if (hasTargets) {
                body = "Bhai, aaj ka target set hai: " + targetText.toString() + ". Chalo jaldi se padhna shuru karo! 💪🔥";
            } else {
                body = "Bhai, aaj ka target set kiya tune? Chalo jaldi se app kholo aur aaj ka target set karo! 💪";
            }

        } else if ("timetable".equals(alarmType)) {
            title = "Daily Class Reminder 📚";
            notifId = 1002;
            Calendar cal = Calendar.getInstance();
            int dayOfWeek = cal.get(Calendar.DAY_OF_WEEK);
            String todayKey = DAY_KEYS[dayOfWeek - 1];
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
                                todaySubjects.add(subject);
                            }
                        }
                    }
                } catch (Exception e) {
                    Log.e(TAG, "Error parsing timetable JSON", e);
                }
            }

            if (todaySubjects.isEmpty()) {
                if (timetableJson == null) {
                    title = "Apna College Bihar";
                    body = "Aaj ki classes track karo! Timetable set karo aur attendance mark karo.";
                } else {
                    title = "Aaj koi class nahi! 🎉";
                    body = "Today's schedule is clear. Attendance zaroor check karo!";
                }
            } else {
                title = "Aaj ki Classes — " + todaySubjects.size() + " Subject" + (todaySubjects.size() > 1 ? "s" : "");
                StringBuilder sb = new StringBuilder();
                int showCount = Math.min(todaySubjects.size(), 4);
                for (int i = 0; i < showCount; i++) {
                    if (i > 0) sb.append(", ");
                    sb.append(todaySubjects.get(i));
                }
                if (todaySubjects.size() > 4) {
                    sb.append(" +").append(todaySubjects.size() - 4).append(" more");
                }
                body = sb.toString() + "\nAttendance mark karna mat bhoolo!";
            }

        } else if ("attendance".equals(alarmType)) {
            title = "Attendance Update! 📝";
            notifId = 1003;
            body = "Bhai, classes ki attendance mark kar lo! Attendance low nahi honi chahiye. ⏰";

        } else if ("target_night".equals(alarmType)) {
            title = "Kal ka Target Set Karo! 📝";
            notifId = 1004;
            body = "Kal ka target set kar lo biru! Subah uthte hi seedhe start karna hai. 🔥";

        } else if ("good_night".equals(alarmType)) {
            title = "Good Night Biro! 😴";
            notifId = 1005;
            body = "Din jaisa bhi gaya biru, ab so jaao. Aaj ka kaam khatam! Kal subah jaldi uth ke target pura karna hai. Shubh ratri! 💫";
        }

        showNotification(context, title, body, notifId);

        // Reschedule all daily alarms to make sure they repeat properly
        BootReceiver.scheduleAllAlarms(context);
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
