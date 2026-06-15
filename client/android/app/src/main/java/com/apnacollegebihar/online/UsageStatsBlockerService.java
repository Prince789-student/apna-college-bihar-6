package com.apnacollegebihar.online;

import android.app.Notification;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.app.Service;
import android.app.usage.UsageEvents;
import android.app.usage.UsageStatsManager;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.content.pm.PackageManager;
import android.os.Build;
import android.os.Handler;
import android.os.IBinder;
import android.os.Looper;
import android.util.Log;
import android.media.MediaPlayer;
import android.support.v4.media.session.MediaSessionCompat;

import androidx.core.app.NotificationCompat;
import java.util.HashSet;
import java.util.Set;
import java.util.Timer;
import java.util.TimerTask;

public class UsageStatsBlockerService extends Service {

    private static final String TAG = "UsageStatsBlocker";
    private static final String CHANNEL_ID = "BlockerServiceChannel";

    private Timer timer;
    private UsageStatsManager usageStatsManager;
    private String myPackageName;
    private String launcherPackageName;
    private MediaSessionCompat mediaSession;
    private MediaPlayer mediaPlayer;

    // Keys that match @capacitor/preferences
    private static final String PREFS_NAME = "CapacitorStorage";
    private static final String KEY_IS_ACTIVE = "_cap_isBlockerActive";
    private static final String KEY_COUNTDOWN_END = "_cap_countdownEndTime";
    private static final String KEY_ALLOWED_PACKAGES = "_cap_allowedPackages";

    private boolean isBlockerActive = false;
    private long countdownEnd = 0;
    private Set<String> allowedPackages = new HashSet<>();

    private Handler mainHandler = new Handler(Looper.getMainLooper());
    private long lastBlockTime = 0;

    @Override
    public void onCreate() {
        super.onCreate();
        Log.d(TAG, "Service onCreate");
        usageStatsManager = (UsageStatsManager) getSystemService(Context.USAGE_STATS_SERVICE);
        myPackageName = getPackageName();
        launcherPackageName = getLauncherPackageName();
    }

    @Override
    public int onStartCommand(Intent intent, int flags, int startId) {
        Log.d(TAG, "Service onStartCommand");
        createNotificationChannel();
        
        Intent notificationIntent = new Intent(this, MainActivity.class);
        PendingIntent pendingIntent = PendingIntent.getActivity(this,
                0, notificationIntent, PendingIntent.FLAG_IMMUTABLE);

        // Initialize MediaSession to trick Android 13+ Task Manager
        mediaSession = new MediaSessionCompat(this, "UsageStatsBlockerMedia");
        mediaSession.setActive(true);

        // Start playing silent audio to satisfy Android 14 requirements
        try {
            mediaPlayer = MediaPlayer.create(this, R.raw.silent);
            if (mediaPlayer != null) {
                mediaPlayer.setLooping(true);
                mediaPlayer.start();
            }
        } catch (Exception e) {
            Log.e(TAG, "Failed to start media player", e);
        }

        Notification notification = new NotificationCompat.Builder(this, CHANNEL_ID)
                .setContentTitle("Study Focus Mode Active")
                .setContentText("Blocking distractions...")
                .setSmallIcon(R.mipmap.ic_launcher)
                .setContentIntent(pendingIntent)
                .setOngoing(true)
                .setPriority(NotificationCompat.PRIORITY_LOW)
                .setStyle(new androidx.media.app.NotificationCompat.MediaStyle()
                        .setMediaSession(mediaSession.getSessionToken()))
                .build();

        startForeground(1001, notification);

        startPolling();

        return START_STICKY;
    }

    @Override
    public void onDestroy() {
        super.onDestroy();
        Log.d(TAG, "Service onDestroy");
        if (timer != null) {
            timer.cancel();
            timer = null;
        }

        if (mediaPlayer != null) {
            mediaPlayer.stop();
            mediaPlayer.release();
            mediaPlayer = null;
        }

        if (mediaSession != null) {
            mediaSession.release();
            mediaSession = null;
        }
    }

    @Override
    public IBinder onBind(Intent intent) {
        return null;
    }

    private void startPolling() {
        if (timer != null) {
            timer.cancel();
        }
        timer = new Timer();
        timer.scheduleAtFixedRate(new TimerTask() {
            @Override
            public void run() {
                checkForegroundApp();
            }
        }, 0, 200); // Check 5 times per second
    }

    private void loadSettings() {
        try {
            SharedPreferences prefs = getSharedPreferences(PREFS_NAME, MODE_PRIVATE);
            
            String valActive = prefs.getString(KEY_IS_ACTIVE, "false");
            isBlockerActive = "true".equalsIgnoreCase(valActive.trim());

            String valEnd = prefs.getString(KEY_COUNTDOWN_END, "0");
            try {
                countdownEnd = Long.parseLong(valEnd.trim());
            } catch (Exception e) {
                countdownEnd = 0;
            }

            String valAllowed = prefs.getString(KEY_ALLOWED_PACKAGES, "");
            allowedPackages.clear();
            if (valAllowed != null && !valAllowed.trim().isEmpty()) {
                String[] parts = valAllowed.split(",");
                for (String part : parts) {
                    if (!part.trim().isEmpty()) {
                        allowedPackages.add(part.trim());
                    }
                }
            }
        } catch (Exception e) {
            Log.e(TAG, "Error loading settings", e);
        }
    }

    private void checkForegroundApp() {
        loadSettings();
        
        long now = System.currentTimeMillis();
        
        // Auto-disable if timer expired
        if (countdownEnd > 0 && now >= countdownEnd) {
            if (isBlockerActive) {
                isBlockerActive = false;
                SharedPreferences.Editor editor = getSharedPreferences(PREFS_NAME, MODE_PRIVATE).edit();
                editor.putString(KEY_IS_ACTIVE, "false");
                editor.apply();
            }
        }

        if (!isBlockerActive) {
            // Stop service if blocker is no longer active
            stopSelf();
            return;
        }

        String foregroundApp = getForegroundApp();
        if (foregroundApp == null || foregroundApp.isEmpty()) {
            return;
        }

        boolean timerRunning = isBlockerActive;

        // Apps that are always ignored to prevent system crashes
        boolean isSystemIgnored =
                foregroundApp.equals(myPackageName) ||
                foregroundApp.equals(launcherPackageName) ||
                foregroundApp.equals("com.android.systemui") ||
                foregroundApp.equals("com.google.android.permissioncontroller") ||
                foregroundApp.equals("com.android.permissioncontroller") ||
                foregroundApp.equals("android") ||
                foregroundApp.equals("com.android.phone") ||
                foregroundApp.equals("com.android.server.telecom") ||
                foregroundApp.equals("com.google.android.dialer") ||
                foregroundApp.equals("com.android.incallui") ||
                foregroundApp.contains("inputmethod") ||
                foregroundApp.equals("com.google.android.gms");

        // CRITICAL: Prevent Uninstallation!
        boolean isSettings = foregroundApp.contains("settings") || foregroundApp.equals("com.android.settings");
        boolean isInstaller = foregroundApp.contains("packageinstaller") ||
                foregroundApp.contains("vending") || // Play Store
                foregroundApp.equals("com.google.android.packageinstaller") ||
                foregroundApp.equals("com.miui.packageinstaller") ||
                foregroundApp.equals("com.samsung.android.packageinstaller") ||
                foregroundApp.equals("com.oneplus.packageinstaller");

        boolean isBlockedUninstallScreen = (isSettings || isInstaller) && timerRunning;

        // Allowed via whitelist
        boolean isWhitelisted = allowedPackages.contains(foregroundApp);

        // If it's the uninstaller screen, ALWAYS block.
        // Otherwise, if it's ignored or whitelisted, DO NOT block.
        if (isBlockedUninstallScreen) {
            Log.d(TAG, "Blocking uninstall/settings screen: " + foregroundApp);
            blockApp();
        } else if (!isSystemIgnored && !isWhitelisted && timerRunning) {
            Log.d(TAG, "Blocking unauthorized app: " + foregroundApp);
            blockApp();
        }
    }

    private void blockApp() {
        long now = System.currentTimeMillis();
        // Prevent spamming intents
        if (now - lastBlockTime < 300) {
            return;
        }
        lastBlockTime = now;

        Intent launchIntent = getPackageManager().getLaunchIntentForPackage(myPackageName);
        if (launchIntent != null) {
            launchIntent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_CLEAR_TOP | Intent.FLAG_ACTIVITY_SINGLE_TOP);
            startActivity(launchIntent);
        }
    }

    private String getForegroundApp() {
        long time = System.currentTimeMillis();
        UsageEvents usageEvents = usageStatsManager.queryEvents(time - 10000, time); // Look back 10 seconds
        UsageEvents.Event event = new UsageEvents.Event();
        String foreground = null;
        
        while (usageEvents.hasNextEvent()) {
            usageEvents.getNextEvent(event);
            if (event.getEventType() == UsageEvents.Event.ACTIVITY_RESUMED) {
                foreground = event.getPackageName();
            } else if (event.getEventType() == UsageEvents.Event.ACTIVITY_PAUSED && event.getPackageName().equals(foreground)) {
                foreground = null;
            }
        }
        return foreground;
    }

    private String getLauncherPackageName() {
        try {
            Intent intent = new Intent(Intent.ACTION_MAIN);
            intent.addCategory(Intent.CATEGORY_HOME);
            android.content.pm.ResolveInfo resolveInfo = getPackageManager().resolveActivity(intent, PackageManager.MATCH_DEFAULT_ONLY);
            if (resolveInfo != null && resolveInfo.activityInfo != null) {
                return resolveInfo.activityInfo.packageName;
            }
        } catch (Exception e) {
            Log.e(TAG, "Failed to resolve launcher", e);
        }
        return "";
    }

    private void createNotificationChannel() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            NotificationChannel serviceChannel = new NotificationChannel(
                    CHANNEL_ID,
                    "Study Blocker Service Channel",
                    NotificationManager.IMPORTANCE_LOW
            );
            NotificationManager manager = getSystemService(NotificationManager.class);
            if (manager != null) {
                manager.createNotificationChannel(serviceChannel);
            }
        }
    }
}
