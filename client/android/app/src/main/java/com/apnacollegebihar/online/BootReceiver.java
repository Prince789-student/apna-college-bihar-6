package com.apnacollegebihar.online;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.util.Log;

public class BootReceiver extends BroadcastReceiver {

    private static final String PREFS_NAME = "CapacitorStorage";
    private static final String KEY_COUNTDOWN_END = "_cap_countdownEndTime";

    @Override
    public void onReceive(Context context, Intent intent) {
        if (Intent.ACTION_BOOT_COMPLETED.equals(intent.getAction())) {
            Log.d("BootReceiver", "Boot completed event received safely. Accessibility service will be managed by OS.");
        }
    }
}
