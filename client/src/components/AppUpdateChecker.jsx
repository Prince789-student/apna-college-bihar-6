import React, { useState, useEffect } from 'react';
import { Capacitor } from '@capacitor/core';
import { App as CapacitorApp } from '@capacitor/app';
import { Download, Sparkles, RefreshCw } from 'lucide-react';

const CURRENT_APP_VERSION_CODE = 62;
const CURRENT_APP_VERSION_NAME = "62.0";
const DOWNLOAD_URL = "https://www.apnacollegebihar.online/api/download-apk";

export default function AppUpdateChecker() {
  const [updateRequired, setUpdateRequired] = useState(false);
  const [installedVersion, setInstalledVersion] = useState("61.0");
  const [latestVersion, setLatestVersion] = useState(CURRENT_APP_VERSION_NAME);
  const [downloading, setDownloading] = useState(false);

  useEffect(() => {
    const isNative = Capacitor.isNativePlatform() 
      || !!window.Capacitor?.isNative 
      || window.location.protocol === 'file:' 
      || (typeof window !== 'undefined' && (window.location.hostname === 'localhost' && !window.location.port));

    if (!isNative) return;

    const checkVersion = async () => {
      try {
        let currentCode = 61; // Default assumption for older installed builds
        try {
          const info = await CapacitorApp.getInfo();
          if (info && info.build) {
            currentCode = parseInt(info.build, 10) || 61;
          }
          if (info && info.version) {
            setInstalledVersion(info.version);
          }
        } catch (e) {
          console.warn("Could not read local app info:", e);
        }

        // Fetch latest version metadata from public endpoints
        const endpoints = [
          'https://www.apnacollegebihar.online/api/app-version',
          'https://apna-college-bihar-6.onrender.com/api/app-version',
          '/app-version.json'
        ];

        let remoteConfig = null;
        for (const url of endpoints) {
          try {
            const res = await fetch(url, { cache: 'no-store' });
            if (res.ok) {
              remoteConfig = await res.json();
              break;
            }
          } catch (err) {}
        }

        const targetCode = remoteConfig?.latestVersionCode || CURRENT_APP_VERSION_CODE;
        const targetName = remoteConfig?.latestVersionName || CURRENT_APP_VERSION_NAME;
        setLatestVersion(targetName);

        if (currentCode < targetCode) {
          setUpdateRequired(true);
        }
      } catch (err) {
        console.warn("Update check error:", err);
      }
    };

    checkVersion();
  }, []);

  const handleDownload = async () => {
    setDownloading(true);
    try {
      const plugin = Capacitor.Plugins?.AndroidDownloader;
      if (plugin && typeof plugin.downloadFile === 'function') {
        await plugin.downloadFile({
          url: DOWNLOAD_URL,
          filename: `apna-college-bihar-v${latestVersion.replace('.0', '')}.apk`,
          title: `Apna College Bihar v${latestVersion} Update`
        });
      }
    } catch (e) {
      console.warn("Native downloader fallback:", e);
    }

    try {
      window.open(DOWNLOAD_URL, '_system');
    } catch (e) {
      window.location.href = DOWNLOAD_URL;
    }
  };

  if (!updateRequired) return null;

  return (
    <div className="fixed inset-0 z-[999999] bg-slate-950/95 backdrop-blur-xl flex items-center justify-center p-4 select-none font-['Inter'] animate-in fade-in duration-300">
      <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-blue-500/30 p-7 md:p-9 rounded-[2.5rem] shadow-2xl shadow-blue-900/30 max-w-[420px] w-full text-center relative overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute -top-20 -right-20 w-44 h-44 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-44 h-44 bg-emerald-600/20 rounded-full blur-3xl pointer-events-none" />

        {/* Animated Icon */}
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center mx-auto mb-5 shadow-lg shadow-blue-500/30 animate-bounce">
          <Download size={32} />
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-[10px] font-black uppercase tracking-widest mb-3">
          <Sparkles size={12} />
          <span>New Version Available</span>
        </div>

        <h2 className="text-2xl font-black text-white tracking-tight mb-2">
          Update Your App
        </h2>

        <p className="text-xs text-slate-300 font-medium leading-relaxed mb-6 px-2">
          Aapka installed app version <span className="font-bold text-amber-400">v{installedVersion}</span> purana ho gaya hai. Official BEU notifications aur behtar performance ke liye kripya naya version <span className="font-bold text-emerald-400">v{latestVersion}</span> download karein.
        </p>

        <div className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-4 mb-6 text-left space-y-2 text-[11px] text-slate-300">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>BEU Official Notifications (Real-time updates)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Fast notes, syllabus &amp; PYQ hub</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Unwanted background notifications removed</span>
          </div>
        </div>

        <button
          onClick={handleDownload}
          disabled={downloading}
          className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2.5 shadow-xl shadow-blue-600/30 active:scale-95 transition-all cursor-pointer"
        >
          {downloading ? (
            <>
              <RefreshCw size={16} className="animate-spin" />
              <span>Downloading Update...</span>
            </>
          ) : (
            <>
              <Download size={16} />
              <span>Download &amp; Update Now</span>
            </>
          )}
        </button>

        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-4">
          Click karte hi direct APK download shuru hoga
        </p>
      </div>
    </div>
  );
}
