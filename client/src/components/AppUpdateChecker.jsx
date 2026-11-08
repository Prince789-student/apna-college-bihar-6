import React, { useState, useEffect } from 'react';
import { Capacitor } from '@capacitor/core';
import { App as CapacitorApp } from '@capacitor/app';
import { Download, Sparkles, RefreshCw } from 'lucide-react';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';

const CURRENT_APP_VERSION_CODE = 64;
const CURRENT_APP_VERSION_NAME = "64.0";
const DOWNLOAD_URL = "https://www.apnacollegebihar.online/api/download-apk";

export default function AppUpdateChecker() {
  const [updateRequired, setUpdateRequired] = useState(false);
  const [installedVersion, setInstalledVersion] = useState("63.0");
  const [latestVersion, setLatestVersion] = useState(CURRENT_APP_VERSION_NAME);
  const [downloading, setDownloading] = useState(false);

  // STRICT GUARANTEE: Never, ever execute or show on public web domain
  const isWebDomain = typeof window !== 'undefined' && Boolean(
    window.location.hostname.includes('apnacollegebihar.online') ||
    window.location.hostname.includes('onrender.com') ||
    window.location.hostname.includes('firebaseapp.com') ||
    window.location.hostname.includes('web.app')
  );

  // MUST ONLY run inside the native Android mobile app container
  const [isNativeApp, setIsNativeApp] = useState(() => {
    if (isWebDomain) return false;
    return typeof window !== 'undefined' && Boolean(
      Capacitor.isNativePlatform() ||
      window.Capacitor?.isNative ||
      (window.Capacitor?.getPlatform && window.Capacitor.getPlatform() === 'android') ||
      window.location.protocol === 'file:' ||
      (window.location.hostname === 'localhost' && !window.location.port)
    );
  });

  useEffect(() => {
    if (isWebDomain) return;
    const checkNative = () => {
      const native = Boolean(
        Capacitor.isNativePlatform() ||
        window.Capacitor?.isNative ||
        (window.Capacitor?.getPlatform && window.Capacitor.getPlatform() === 'android') ||
        window.location.protocol === 'file:' ||
        (window.location.hostname === 'localhost' && !window.location.port)
      );
      if (native) setIsNativeApp(true);
    };
    checkNative();
    const t = setTimeout(checkNative, 500);
    return () => clearTimeout(t);
  }, [isWebDomain]);

  useEffect(() => {
    // If this is a regular website visitor (desktop/mobile browser), NEVER run update checker!
    if (!isNativeApp) {
      setUpdateRequired(false);
      return;
    }

    let isMounted = true;

    const evaluateVersion = async (targetCode, targetName) => {
      if (!isMounted) return;
      const targetVName = targetName || CURRENT_APP_VERSION_NAME;
      const targetVCode = targetCode || CURRENT_APP_VERSION_CODE;
      setLatestVersion(targetVName);

      let currentCode = 62; // Assume older installed build by default
      try {
        const info = await CapacitorApp.getInfo();
        if (info && info.build) {
          currentCode = parseInt(info.build, 10) || 62;
        }
        if (info && info.version) {
          setInstalledVersion(info.version);
        }
      } catch (e) {
        console.warn("Could not read local app info:", e);
      }

      // If installed APK version is older than target version code, force popup
      if (currentCode < targetVCode) {
        setUpdateRequired(true);
      } else {
        setUpdateRequired(false);
      }
    };

    // 1. Real-time Firestore Listener (Instant, Zero Server Lag)
    let unsubFirestore = () => {};
    try {
      const versionDocRef = doc(db, 'app_config', 'version');
      unsubFirestore = onSnapshot(versionDocRef, (snap) => {
        if (!isMounted) return;
        if (snap.exists()) {
          const data = snap.data();
          const targetCode = data.latestVersionCode || CURRENT_APP_VERSION_CODE;
          const targetName = data.latestVersionName || CURRENT_APP_VERSION_NAME;
          evaluateVersion(targetCode, targetName);
        } else {
          evaluateVersion(CURRENT_APP_VERSION_CODE, CURRENT_APP_VERSION_NAME);
        }
      }, (err) => {
        console.warn("Firestore version snapshot error:", err);
        evaluateVersion(CURRENT_APP_VERSION_CODE, CURRENT_APP_VERSION_NAME);
      });
    } catch (e) {
      console.warn("Firestore version check failed:", e);
      evaluateVersion(CURRENT_APP_VERSION_CODE, CURRENT_APP_VERSION_NAME);
    }

    // 2. HTTP Fallback with strict 2500ms timeout
    const checkHttpEndpoints = async () => {
      const endpoints = [
        '/api/app-version',
        'https://www.apnacollegebihar.online/api/app-version',
        '/app-version.json'
      ];

      for (const url of endpoints) {
        try {
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 2500);
          const res = await fetch(url, { signal: controller.signal, cache: 'no-store' });
          clearTimeout(timeoutId);
          if (res.ok) {
            const data = await res.json();
            if (data && data.latestVersionCode) {
              evaluateVersion(data.latestVersionCode, data.latestVersionName);
              break;
            }
          }
        } catch (err) {
          // Timeout or network error, ignore and continue
        }
      }
    };

    checkHttpEndpoints();

    return () => {
      isMounted = false;
      unsubFirestore();
    };
  }, [isNativeApp]);

  // NEVER render anything on website
  if (!isNativeApp || !updateRequired) {
    return null;
  }

  const handleDownload = async () => {
    setDownloading(true);

    // 1. Trigger native Android Downloader plugin (DownloadManager notification bar)
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

    // 2. Also trigger direct browser / webview download
    try {
      window.open(DOWNLOAD_URL, '_system');
    } catch (e) {
      window.location.href = DOWNLOAD_URL;
    }

    // 3. Keep fallback redirect active
    setTimeout(() => {
      try {
        window.location.href = DOWNLOAD_URL;
      } catch (e) {}
    }, 600);
  };

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
