package com.apnacollegebihar.online;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Build;

public class BootReceiver extends BroadcastReceiver {

    private static final String PREFS_NAME = "CapacitorStorage";
    private static final String KEY_COUNTDOWN_END = "_cap_countdownEndTime";

    @Override
    public void onReceive(Context context, Intent intent) {

        if (Intent.ACTION_BOOT_COMPLETED.equals(intent.getAction())) {

            SharedPreferences prefs =
                    context.getSharedPreferences(
                            PREFS_NAME,
                            Context.MODE_PRIVATE
                    );

            long endTime =
                    prefs.getLong(KEY_COUNTDOWN_END, 0);

            if (System.currentTimeMillis() < endTime) {

                Intent serviceIntent =
                        new Intent(context, AppBlockerService.class);

                if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
                    context.startForegroundService(serviceIntent);
                } else {
                    context.startService(serviceIntent);
                }
            }
        }
    }
}
