package com.apnacollegebihar.online;

import android.app.admin.DeviceAdminReceiver;
import android.app.admin.DevicePolicyManager;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.widget.Toast;

public class StudyDeviceAdminReceiver extends DeviceAdminReceiver {

    @Override
    public void onEnabled(Context context, Intent intent) {
        super.onEnabled(context, intent);
        Toast.makeText(context, "Device Admin Enabled", Toast.LENGTH_SHORT).show();
    }

    @Override
    public CharSequence onDisableRequested(Context context, Intent intent) {
        boolean isActive = false;

        try {
            SharedPreferences prefs = context.getSharedPreferences("CapacitorStorage", Context.MODE_PRIVATE);
            String capActive = prefs.getString("_cap_isBlockerActive", "false");
            String legacyActive = prefs.getString("isBlockerActive", "false");
            long endTime = 0L;
            try {
                endTime = Long.parseLong(prefs.getString("_cap_countdownEndTime", "0").trim());
            } catch (Exception ignored) {}

            if ("true".equalsIgnoreCase(capActive.trim()) || "true".equalsIgnoreCase(legacyActive.trim())) {
                isActive = (endTime == 0L || System.currentTimeMillis() < endTime);
            }
        } catch (Exception ignored) {}

        if (!isActive) {
            try {
                Context deviceContext = android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.N
                        ? context.createDeviceProtectedStorageContext()
                        : context;
                SharedPreferences dPrefs = deviceContext.getSharedPreferences("DeviceProtectedStorage", Context.MODE_PRIVATE);
                String dActive = dPrefs.getString("isBlockerActive", "false");
                long dEnd = dPrefs.getLong("countdownEndTime", 0L);
                if ("true".equalsIgnoreCase(dActive.trim())) {
                    isActive = (dEnd == 0L || System.currentTimeMillis() < dEnd);
                }
            } catch (Exception ignored) {}
        }

        if (isActive) {
            // Aggressively prevent deactivation/uninstallation during an active focus session
            Intent launchIntent = new Intent(context, MainActivity.class);
            launchIntent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_CLEAR_TOP);
            context.startActivity(launchIntent);

            try {
                DevicePolicyManager dpm = (DevicePolicyManager) context.getSystemService(Context.DEVICE_POLICY_SERVICE);
                if (dpm != null) {
                    dpm.lockNow(); // Lock screen immediately
                }
            } catch (Exception ignored) {}

            return "WARNING: Focus Mode Active! You cannot disable Device Admin or uninstall the app while studying.";
        }

        return "Disabling Device Admin will remove your ability to use Strict Mode.";
    }

    @Override
    public void onDisabled(Context context, Intent intent) {
        super.onDisabled(context, intent);
        Toast.makeText(context, "Device Admin Disabled", Toast.LENGTH_SHORT).show();
    }
}
