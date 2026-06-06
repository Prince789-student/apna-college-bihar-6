package com.apnacollegebihar.online;

import android.app.AlarmManager;
import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Build;
import android.util.Log;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

import java.util.Calendar;

/**
 * DailyNotificationPlugin
 *
 * Capacitor plugin that schedules a daily AlarmManager alarm at the configured hour/minute.
 * Called from JS after login to ensure daily class notifications are active.
 *
 * JS usage:
 *   import { Capacitor } from '@capacitor/core';
 *   if (Capacitor.isNativePlatform()) {
 *     (window as any).DailyNotificationPlugin?.scheduleDailyNotification({ hour: 8, minute: 0 });
 *   }
 */
@CapacitorPlugin(name = "DailyNotificationPlugin")
public class DailyNotificationPlugin extends Plugin {

    private static final String TAG = "DailyNotifPlugin";
    private static final int ALARM_REQUEST_CODE = 2001;
    private static final String PREFS_NAME = "CapacitorStorage";
    private static final String KEY_TIMETABLE = "_cap_timetable";

    /**
     * Schedule a daily notification at the given hour and minute.
     * Call this from JS every time the timetable is saved.
     *
     * @param call PluginCall with optional 'hour' (default 8) and 'minute' (default 0)
     */
    @PluginMethod
    public void scheduleDailyNotification(PluginCall call) {
        Context context = getContext();
        BootReceiver.scheduleAllAlarms(context);

        JSObject result = new JSObject();
        result.put("success", true);
        call.resolve(result);
    }

    /**
     * Cancel the daily notification alarm.
     */
    @PluginMethod
    public void cancelDailyNotification(PluginCall call) {
        cancelExistingAlarm(getContext());
        JSObject result = new JSObject();
        result.put("success", true);
        call.resolve(result);
    }

    /**
     * Save timetable JSON to SharedPreferences so DailyNotificationReceiver can read it.
     * This is needed because the alarm fires even when the app is closed.
     *
     * @param call PluginCall with 'timetableJson' string
     */
    @PluginMethod
    public void saveTimetableForNotification(PluginCall call) {
        String timetableJson = call.getString("timetableJson", "{}");
        SharedPreferences.Editor editor = getContext()
            .getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE)
            .edit();
        editor.putString(KEY_TIMETABLE, timetableJson);
        editor.apply();
        Log.d(TAG, "Timetable saved to prefs for notifications");

        JSObject result = new JSObject();
        result.put("success", true);
        call.resolve(result);
    }

    /**
     * Save targets (todo items) JSON to SharedPreferences so DailyNotificationReceiver can read it.
     *
     * @param call PluginCall with 'targetsJson' string
     */
    @PluginMethod
    public void saveTargetsForNotification(PluginCall call) {
        String targetsJson = call.getString("targetsJson", "[]");
        SharedPreferences.Editor editor = getContext()
            .getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE)
            .edit();
        editor.putString("_cap_targets", targetsJson);
        editor.apply();
        Log.d(TAG, "Targets saved to prefs for notifications");

        JSObject result = new JSObject();
        result.put("success", true);
        call.resolve(result);
    }

    private void cancelExistingAlarm(Context context) {
        AlarmManager alarmManager = (AlarmManager) context.getSystemService(Context.ALARM_SERVICE);
        Intent intent = new Intent(context, DailyNotificationReceiver.class);
        intent.setAction("com.apnacollegebihar.DAILY_NOTIFICATION");
        PendingIntent pendingIntent = PendingIntent.getBroadcast(
            context,
            ALARM_REQUEST_CODE,
            intent,
            PendingIntent.FLAG_NO_CREATE | PendingIntent.FLAG_IMMUTABLE
        );
        if (alarmManager != null && pendingIntent != null) {
            alarmManager.cancel(pendingIntent);
            Log.d(TAG, "Previous alarm cancelled");
        }
    }
}
