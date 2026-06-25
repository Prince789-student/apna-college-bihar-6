package com.apnacollegebihar.online;

import android.app.DownloadManager;
import android.content.Context;
import android.net.Uri;
import android.os.Environment;
import android.util.Log;

import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "AndroidDownloader")
public class AndroidDownloaderPlugin extends Plugin {

    @PluginMethod
    public void downloadFile(PluginCall call) {
        String url = call.getString("url");
        String filename = call.getString("filename");
        String title = call.getString("title", filename);
        
        if (url == null || url.isEmpty()) {
            call.reject("Must provide url");
            return;
        }
        
        if (filename == null || filename.isEmpty()) {
            filename = "download.pdf";
        }

        try {
            DownloadManager.Request request = new DownloadManager.Request(Uri.parse(url));
            request.setTitle(title);
            request.setDescription("Downloading file...");
            request.setNotificationVisibility(DownloadManager.Request.VISIBILITY_VISIBLE_NOTIFY_COMPLETED);
            request.setDestinationInExternalPublicDir(Environment.DIRECTORY_DOWNLOADS, filename);
            request.allowScanningByMediaScanner();

            DownloadManager manager = (DownloadManager) getContext().getSystemService(Context.DOWNLOAD_SERVICE);
            if (manager != null) {
                manager.enqueue(request);
                call.resolve();
            } else {
                call.reject("DownloadManager is not available");
            }
        } catch (Exception e) {
            Log.e("AndroidDownloader", "Download failed", e);
            call.reject("Download error: " + e.getMessage());
        }
    }
}
