package com.apnacollegebihar.online;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;

public class BootReceiver extends BroadcastReceiver {
    private static final String PREFS_NAME = "CapacitorStorage";
    private static final String KEY_COUNTDOWN_END = "_cap_countdownEndTime";

    @Override
    public void onReceive(Context context, Intent intent) {
        if (Intent.ACTION_BOOT_COMPLETED.equals(intent.getAction())) {
            SharedPreferences prefs = context.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE);
            String endTimeStr = prefs.getString(KEY_COUNTDOWN_END, "0");
            long endTime = 0;
            try {
                endTime = Long.parseLong(endTimeStr);
            } catch (Exception e) {}
            
            // Agar timer abhi bhi bacha hai, toh service chalu rakho!
            if (System.currentTimeMillis() < endTime) {
                Intent serviceIntent = new Intent(context, AppBlockerService.class);
                context.startService(serviceIntent);
            }
        }
    }
}
