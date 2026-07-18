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

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Locale;

/**
 * UserUnlockReceiver
 * Listens for Intent.ACTION_USER_PRESENT (phone unlocked by user).
 * Triggers a morning greeting / study motivation notification if it's the first unlock of the morning (5 AM to 11 AM).
 */
public class UserUnlockReceiver extends BroadcastReceiver {

    private static final String TAG = "UserUnlockReceiver";
    private static final String PREFS_NAME = "CapacitorStorage";
    private static final String KEY_LAST_GREETING_DATE = "last_morning_greeting_date";
    private static final String CHANNEL_ID = "morning_greeting";
    private static final String CHANNEL_NAME = "Morning Motivation";
    private static final int NOTIF_ID = 1002;

    @Override
    public void onReceive(Context context, Intent intent) {
        if (Intent.ACTION_USER_PRESENT.equals(intent.getAction())) {
            Log.d(TAG, "User unlocked phone screen");

            // Check if timer was running and restart app instantly
            try {
                SharedPreferences prefs = context.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE);
                String valActive = prefs.getString("_cap_isBlockerActive", "false");
                if ("true".equalsIgnoreCase(valActive.trim())) {
                    Log.d(TAG, "Blocker was active! Relaunching app instantly on unlock.");
                    
                    Intent serviceIntent = new Intent(context, UsageStatsBlockerService.class);
                    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
                        context.startForegroundService(serviceIntent);
                    } else {
                        context.startService(serviceIntent);
                    }

                    Intent launchIntent = new Intent(context, MainActivity.class);
                    launchIntent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_CLEAR_TOP);
                    context.startActivity(launchIntent);
                }
            } catch (Exception e) {
                e.printStackTrace();
            }

            Calendar cal = Calendar.getInstance();
            int hour = cal.get(Calendar.HOUR_OF_DAY);

            // Trigger greeting only between 5:00 AM and 11:00 AM
            if (hour >= 5 && hour < 11) {
                SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd", Locale.getDefault());
                String today = sdf.format(cal.getTime());

                SharedPreferences prefs = context.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE);
                String lastGreetingDate = prefs.getString(KEY_LAST_GREETING_DATE, "");

                if (!today.equals(lastGreetingDate)) {
                    // Save date so we only show the greeting once per day
                    prefs.edit().putString(KEY_LAST_GREETING_DATE, today).apply();
                    Log.d(TAG, "First unlock of the day. Showing morning notification.");
                    showMorningNotification(context);
                }
            }

            // Attempt to restore Launcher Icon if the OEM launcher aggressively hides it after failed uninstall
            try {
                android.content.pm.PackageManager pm = context.getPackageManager();
                android.content.ComponentName componentName = new android.content.ComponentName(context, MainActivity.class);
                pm.setComponentEnabledSetting(componentName, android.content.pm.PackageManager.COMPONENT_ENABLED_STATE_DISABLED, android.content.pm.PackageManager.DONT_KILL_APP);
                pm.setComponentEnabledSetting(componentName, android.content.pm.PackageManager.COMPONENT_ENABLED_STATE_ENABLED, android.content.pm.PackageManager.DONT_KILL_APP);
            } catch (Exception e) {}
        }
    }

    private void showMorningNotification(Context context) {
        NotificationManager nm = (NotificationManager) context.getSystemService(Context.NOTIFICATION_SERVICE);
        if (nm == null) return;

        // Create notification channel for Android O+
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            NotificationChannel channel = new NotificationChannel(
                CHANNEL_ID,
                CHANNEL_NAME,
                NotificationManager.IMPORTANCE_HIGH
            );
            channel.setDescription("Daily morning motivation and greetings");
            channel.enableVibration(true);
            nm.createNotificationChannel(channel);
        }

        // Intent to launch MainActivity when tapped
        Intent launchIntent = context.getPackageManager().getLaunchIntentForPackage(context.getPackageName());
        if (launchIntent != null) {
            launchIntent.setFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP | Intent.FLAG_ACTIVITY_SINGLE_TOP);
        }
        PendingIntent pendingIntent = PendingIntent.getActivity(
            context, 0,
            launchIntent != null ? launchIntent : new Intent(),
            PendingIntent.FLAG_UPDATE_CURRENT | PendingIntent.FLAG_IMMUTABLE
        );

        String title = "Good Morning Bhai! ☀️";
        String body = "Uth ja bidu 😄, kitna soyega? Naya din hai, naya chance hai. Aaj ka target complete karo aur din phod do! 💪🔥";

        NotificationCompat.Builder builder = new NotificationCompat.Builder(context, CHANNEL_ID)
            .setSmallIcon(R.mipmap.ic_launcher)
            .setContentTitle(title)
            .setContentText(body)
            .setStyle(new NotificationCompat.BigTextStyle().bigText(body))
            .setPriority(NotificationCompat.PRIORITY_HIGH)
            .setContentIntent(pendingIntent)
            .setAutoCancel(true)
            .setVibrate(new long[]{0, 250, 250, 250});

        nm.notify(NOTIF_ID, builder.build());
    }
}
