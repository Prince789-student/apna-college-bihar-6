import React, { useState } from 'react';
import SEO from '../components/SEO';
import { getClientOS } from '../utils/deviceHelper';
import { 
  Monitor, 
  Smartphone, 
  Download, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  Zap, 
  Clock, 
  Bell, 
  Lock, 
  FileText, 
  HelpCircle,
  ChevronDown,
  ArrowRight,
  Laptop,
  Terminal,
  Copy,
  Check
} from 'lucide-react';

export default function DownloadPage() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [platformFilter, setPlatformFilter] = useState('all'); // 'all', 'desktop', 'mobile'
  const [copiedCmd, setCopiedCmd] = useState(false);

  const detectedOS = getClientOS(); // 'windows', 'linux', 'android', 'mac', 'ios', 'other'

  const toggleFaq = (idx) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  const copyLinuxCommand = () => {
    const cmd = 'tar -xzf Apna-College-Bihar-Linux-x64.tar.gz && cd Apna-College-Bihar-linux-x64 && ./run.sh';
    navigator.clipboard.writeText(cmd);
    setCopiedCmd(true);
    setTimeout(() => setCopiedCmd(false), 2200);
  };

  const faqs = [
    {
      q: "Kya Apna College Bihar ke desktop aur mobile apps bilkul free hain?",
      a: "Haan, Apna College Bihar ke sabhi apps (Windows, Linux aur Android) Bihar Engineering University (BEU) ke students ke liye 100% free hain."
    },
    {
      q: "Windows PC par kaise install karein?",
      a: "1. 'Download Windows Setup' button par click karke Apna-College-Bihar-Setup.exe download karein.\n2. Downloaded file par double-click karein.\n3. App automatic install hokar open ho jayegi aur aapke Desktop par instant shortcut ban jayega!"
    },
    {
      q: "Linux (Ubuntu / Debian / Arch / Fedora) par kaise chalayein?",
      a: "1. 'Download Linux Package' button par click karke Apna-College-Bihar-Linux-x64.tar.gz download karein.\n2. Terminal me extract karein: tar -xzf Apna-College-Bihar-Linux-x64.tar.gz\n3. Folder me jakar launcher run karein: cd Apna-College-Bihar-linux-x64 && ./run.sh\n(Bina kisi sudo/root permission ke portable run karta hai)."
    },
    {
      q: "Study Focus Blocker feature kaise kaam karta hai?",
      a: "Jab aap Desktop app mein Focus Session (25, 45, 60 ya 90 minute) start karte hain, app distraction-free full-screen mode activate kar deti hai aur distracting desktop background apps ko mute/block karti hai taaki aapka poora focus sirf syllabus aur notes par rahe."
    },
    {
      q: "Kya Windows 10 aur Windows 11 dono par kaam karega?",
      a: "Ji haan, ye app sabhi 64-bit Windows 10 aur Windows 11 laptops aur PCs par smoothly chalta hai."
    },
    {
      q: "Kin-kin Linux distributions par tested hai?",
      a: "Ye package Ubuntu (20.04+), Debian, Linux Mint, Fedora, Arch Linux, Manjaro, Pop!_OS aur Kali Linux par fully compatible hai."
    },
    {
      q: "Android APK kaise install karein?",
      a: "APK download karne ke baad notification bar ya Downloads folder se open karein. Agar 'Install from Unknown Sources' ka prompt aaye toh use Allow karein aur 'Install' par click karein."
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-['Inter'] pb-20 selection:bg-blue-500/20 overflow-x-clip">
      <SEO 
        title="Download Apna College Bihar Apps | Windows, Linux & Android"
        description="Download official Apna College Bihar applications for Windows PC/Laptop, Linux x64, and Android mobile. Includes Study Focus Blocker, BEU Notes, PYQs, and realtime notice alerts."
        keywords="download apna college bihar app, apna college bihar desktop app, apna college bihar linux, beu linux app, bihar engineering desktop app, beu notes app download, beu pyq apk"
      />

      {/* Hero Header */}
      <section className="relative overflow-hidden pt-12 pb-16 md:pt-16 md:pb-24 border-b border-slate-200/80 bg-white">
        <div className="absolute inset-0 bg-radial-gradient from-blue-50/60 to-transparent pointer-events-none"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6 shadow-xs">
            <Sparkles size={14} className="text-blue-600 animate-pulse" />
            <span>Official Apps Ecosystem</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight uppercase leading-[1.1] mb-6">
            Padhai Me <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">Zero Distraction</span>.<br />
            Official Apps for Windows, Linux & Mobile.
          </h1>

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-600 font-medium leading-relaxed mb-6">
            BEU engineering exams ki tayyari ab aur aasan. Apne Windows laptop, Linux workstation ya Android smartphone par official app install karein aur payein <strong>Study Focus Blocker</strong>, high-speed Notes, aur instant exam notices.
          </p>

          {/* OS Auto-Detection Chip */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
            <span>Detected OS: <strong className="capitalize text-slate-900">{detectedOS === 'linux' ? 'Linux (x64)' : detectedOS === 'windows' ? 'Windows (64-bit)' : detectedOS === 'android' ? 'Android Mobile' : detectedOS}</strong></span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-bold text-slate-500">
            <span className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-emerald-600" /> 100% Free Forever</span>
            <span className="flex items-center gap-1.5"><ShieldCheck size={16} className="text-blue-600" /> Safe & Virus-Free</span>
            <span className="flex items-center gap-1.5"><Terminal size={16} className="text-slate-700" /> Native Linux & Windows</span>
            <span className="flex items-center gap-1.5"><Zap size={16} className="text-amber-500" /> Instant Access</span>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setPlatformFilter('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                platformFilter === 'all'
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              All Platforms (3)
            </button>
            <button
              onClick={() => setPlatformFilter('desktop')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                platformFilter === 'desktop'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <Laptop size={14} />
              <span>Desktop (Windows & Linux)</span>
            </button>
            <button
              onClick={() => setPlatformFilter('mobile')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                platformFilter === 'mobile'
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-500/20'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <Smartphone size={14} />
              <span>Mobile (Android)</span>
            </button>
          </div>

        </div>
      </section>

      {/* Main Download Cards */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* 1. WINDOWS PC / LAPTOP CARD */}
          {(platformFilter === 'all' || platformFilter === 'desktop') && (
            <div className={`bg-white rounded-3xl border-2 ${detectedOS === 'windows' ? 'border-blue-500 shadow-blue-500/10' : 'border-blue-500/30'} p-6 sm:p-8 shadow-xl hover:border-blue-500 transition-all flex flex-col justify-between relative overflow-hidden group`}>
              <div className="absolute top-0 right-0 bg-gradient-to-l from-blue-600 to-indigo-600 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-bl-2xl shadow-sm">
                {detectedOS === 'windows' ? '★ Recommended For Your PC' : 'Official Windows Setup'}
              </div>

              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-blue-200/80 p-1.5 flex items-center justify-center shadow-lg shadow-blue-600/15 shrink-0 overflow-hidden">
                    <img src="/logo-192.png" alt="Apna College Bihar Logo" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">Windows Desktop App</h2>
                    <p className="text-xs text-blue-600 font-bold uppercase tracking-wider mt-0.5">Version 2.2 · 64-bit Windows (10 & 11)</p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed mb-6">
                  Laptops aur Desktop computers ke liye specially optimized. Isme built-in <strong>Study Focus Blocker</strong> hai jo padhai ke dauran social media aur game notifications ko mute kar deta hai.
                </p>

                {/* Feature Highlights */}
                <div className="space-y-3 mb-8 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <div className="flex items-start gap-2.5 text-xs text-slate-700 font-bold">
                    <Lock size={16} className="text-blue-600 shrink-0 mt-0.5" />
                    <span>Strict Focus Mode (Locks distractions during study)</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-700 font-bold">
                    <Clock size={16} className="text-indigo-600 shrink-0 mt-0.5" />
                    <span>Desktop Stopwatch & Integrated Session Tracker</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-700 font-bold">
                    <FileText size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Offline-ready BEU Notes & Fullscreen PYQ viewer</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-700 font-bold">
                    <Monitor size={16} className="text-amber-600 shrink-0 mt-0.5" />
                    <span>F5 Quick Refresh & System Tray Background Monitor</span>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 font-bold mb-3 px-1">
                  <span>Installer Size: ~76 MB</span>
                  <span>Type: 1-Click Windows Setup (.exe)</span>
                </div>

                <a
                  href="/Apna-College-Bihar-Setup.exe"
                  download="Apna-College-Bihar-Setup.exe"
                  className="w-full py-4 px-6 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-lg shadow-blue-600/25 active:scale-95 transition-all text-center"
                >
                  <Download size={18} />
                  <span>Download Windows Setup (76 MB)</span>
                </a>

                {/* Microsoft Defender Helper Card */}
                <div className="mt-4 p-3.5 bg-blue-50/70 border border-blue-200/80 rounded-2xl text-left">
                  <div className="flex items-center gap-2 text-blue-900 font-bold text-xs mb-1.5">
                    <ShieldCheck size={16} className="text-blue-600 shrink-0" />
                    <span>Microsoft Defender / SmartScreen Guide:</span>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-relaxed font-medium">
                    Agar download ya open karte waqt Windows <strong>"Windows protected your PC"</strong> dikhaye, toh <strong>"More info"</strong> par click karke <strong>"Run anyway"</strong> select karein. Ye app 100% Virus-Free aur verified safe hai!
                  </p>
                </div>

                <p className="text-[11px] text-slate-400 font-medium text-center mt-3">
                  Supported on Windows 10 & 11 (64-bit) · VirusTotal Verified Safe
                </p>
              </div>
            </div>
          )}

          {/* 2. LINUX PC / WORKSTATION CARD */}
          {(platformFilter === 'all' || platformFilter === 'desktop') && (
            <div className={`bg-white rounded-3xl border-2 ${detectedOS === 'linux' ? 'border-indigo-600 shadow-indigo-600/10' : 'border-slate-800/30'} p-6 sm:p-8 shadow-xl hover:border-slate-800 transition-all flex flex-col justify-between relative overflow-hidden group`}>
              <div className="absolute top-0 right-0 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-bl-2xl shadow-sm flex items-center gap-1.5">
                <Terminal size={12} className="text-emerald-400" />
                <span>{detectedOS === 'linux' ? '★ Recommended For Your Linux' : 'Portable Linux Build'}</span>
              </div>

              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-emerald-400 border border-slate-700 p-1.5 flex items-center justify-center shadow-lg shadow-slate-900/20 shrink-0">
                    <Terminal size={28} />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">Linux Desktop App</h2>
                    <p className="text-xs text-indigo-600 font-bold uppercase tracking-wider mt-0.5">Version 2.2 · 64-bit Linux (x64)</p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed mb-6">
                  Ubuntu, Debian, Linux Mint, Fedora aur Arch Linux ke liye native portable package. Built-in <strong>Study Focus Blocker</strong>, distraction-free environment, offline BEU Notes aur PYQ viewer ke saath ready.
                </p>

                {/* Feature Highlights */}
                <div className="space-y-3 mb-6 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <div className="flex items-start gap-2.5 text-xs text-slate-700 font-bold">
                    <Zap size={16} className="text-amber-500 shrink-0 mt-0.5" />
                    <span>Zero Sudo / Root Required (Portable extract & run)</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-700 font-bold">
                    <Lock size={16} className="text-indigo-600 shrink-0 mt-0.5" />
                    <span>Strict Focus Mode (Locks distractions during study)</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-700 font-bold">
                    <FileText size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Full-screen BEU Notes & Offline PYQ Paper Viewer</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-700 font-bold">
                    <Terminal size={16} className="text-slate-800 shrink-0 mt-0.5" />
                    <span>Includes run.sh launcher & .desktop shortcut entry</span>
                  </div>
                </div>

                {/* Quick Terminal Launch helper */}
                <div className="mb-6 p-3 bg-slate-900 rounded-2xl text-left border border-slate-800">
                  <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono mb-1.5">
                    <span className="flex items-center gap-1.5 text-slate-300 font-bold">
                      <Terminal size={12} className="text-emerald-400" />
                      Quick Extract & Run:
                    </span>
                    <button
                      onClick={copyLinuxCommand}
                      className="text-xs text-slate-300 hover:text-white flex items-center gap-1 bg-slate-800 hover:bg-slate-700 px-2 py-0.5 rounded-md transition-colors"
                      title="Copy command"
                    >
                      {copiedCmd ? (
                        <>
                          <Check size={12} className="text-emerald-400" />
                          <span className="text-emerald-400">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy size={12} />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                  <code className="text-[11px] font-mono text-emerald-300 break-all select-all block leading-relaxed">
                    tar -xzf Apna-College-Bihar-Linux-x64.tar.gz && cd Apna-College-Bihar-linux-x64 && ./run.sh
                  </code>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 font-bold mb-3 px-1">
                  <span>Archive Size: ~106 MB</span>
                  <span>Type: Portable Linux Archive (.tar.gz)</span>
                </div>

                <a
                  href="/Apna-College-Bihar-Linux-x64.tar.gz"
                  download="Apna-College-Bihar-Linux-x64.tar.gz"
                  className="w-full py-4 px-6 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-lg shadow-slate-900/25 active:scale-95 transition-all text-center"
                >
                  <Download size={18} />
                  <span>Download Linux Package (106 MB)</span>
                </a>

                <p className="text-[11px] text-slate-400 font-medium text-center mt-3">
                  Tested on Ubuntu, Debian, Linux Mint, Fedora, Arch & Kali
                </p>
              </div>
            </div>
          )}

          {/* 3. ANDROID MOBILE CARD */}
          {(platformFilter === 'all' || platformFilter === 'mobile') && (
            <div className={`bg-white rounded-3xl border-2 ${detectedOS === 'android' ? 'border-emerald-500 shadow-emerald-500/10' : 'border-slate-200'} p-6 sm:p-8 shadow-xl hover:border-slate-300 transition-all flex flex-col justify-between relative overflow-hidden group`}>
              <div className="absolute top-0 right-0 bg-emerald-600 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-bl-2xl shadow-sm">
                {detectedOS === 'android' ? '★ Recommended For Your Phone' : 'Official APK'}
              </div>

              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-lg shadow-emerald-600/30 shrink-0">
                    <Smartphone size={28} />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">Android Mobile App</h2>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mt-0.5">Version 59 · Android 7.0+</p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed mb-6">
                  Apne smartphone par BEU notes padhein aur exam updates se connect rahein. Mobile background blocker aur instant notice push alerts ke saath ready.
                </p>

                {/* Feature Highlights */}
                <div className="space-y-3 mb-8 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <div className="flex items-start gap-2.5 text-xs text-slate-700 font-bold">
                    <Bell size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Real-time BEU Notice Push Notifications</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-700 font-bold">
                    <Lock size={16} className="text-red-500 shrink-0 mt-0.5" />
                    <span>Mobile App Blocker (Blocks Instagram during study)</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-700 font-bold">
                    <CheckCircle2 size={16} className="text-blue-600 shrink-0 mt-0.5" />
                    <span>BEU 75% Attendance Tracker & Timetable Alarms</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-700 font-bold">
                    <Zap size={16} className="text-amber-500 shrink-0 mt-0.5" />
                    <span>One-click Google Sign-in & Fast PDF Loading</span>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 font-bold mb-3 px-1">
                  <span>File Size: ~21 MB</span>
                  <span>Format: Android .APK Package</span>
                </div>

                <a
                  href="/apna-college-bihar-v59.apk"
                  download="apna-college-bihar-v59.apk"
                  className="w-full py-4 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-lg shadow-emerald-600/20 active:scale-95 transition-all text-center"
                >
                  <Download size={18} />
                  <span>Download Android APK (v59)</span>
                </a>

                <p className="text-[11px] text-slate-400 font-medium text-center mt-3">
                  Requires Android 7.0 (Nougat) or newer
                </p>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* Step-by-Step Installation Guide */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 md:mt-24">
        <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-10 shadow-sm">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">How to Install</h2>
            <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mt-1">Simple installation guide for Windows, Linux & Android</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            
            {/* Windows Steps */}
            <div className="space-y-6 pt-4 md:pt-0">
              <div className="flex items-center gap-3">
                <Laptop size={20} className="text-blue-600" />
                <h3 className="font-bold text-sm text-slate-900 uppercase tracking-wider">Windows Laptop / PC</h3>
              </div>
              <ol className="space-y-4 text-xs font-semibold text-slate-600">
                <li className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 font-bold">1</span>
                  <span><strong>Download Windows Setup</strong> button se Setup (.exe) download karein.</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 font-bold">2</span>
                  <span>Downloaded file <strong>Apna-College-Bihar-Setup.exe</strong> par double-click karke launch karein.</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 font-bold">3</span>
                  <span>App automatically install hokar open ho jayegi aur Desktop shortcut ban jayega!</span>
                </li>
              </ol>
            </div>

            {/* Linux Steps */}
            <div className="space-y-6 pt-6 md:pt-0 md:pl-8">
              <div className="flex items-center gap-3">
                <Terminal size={20} className="text-indigo-600" />
                <h3 className="font-bold text-sm text-slate-900 uppercase tracking-wider">Linux Workstation</h3>
              </div>
              <ol className="space-y-4 text-xs font-semibold text-slate-600">
                <li className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0 font-bold">1</span>
                  <span><strong>Download Linux Package</strong> se .tar.gz archive download karein.</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0 font-bold">2</span>
                  <span>Terminal me extract karein: <code className="bg-slate-100 px-1 py-0.5 rounded text-indigo-700 font-mono">tar -xzf Apna-College-Bihar-Linux-x64.tar.gz</code></span>
                </li>
                <li className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0 font-bold">3</span>
                  <span>Run karein: <code className="bg-slate-100 px-1 py-0.5 rounded text-indigo-700 font-mono">cd Apna-College-Bihar-linux-x64 && ./run.sh</code>. Instant launch!</span>
                </li>
              </ol>
            </div>

            {/* Android Steps */}
            <div className="space-y-6 pt-6 md:pt-0 md:pl-8">
              <div className="flex items-center gap-3">
                <Smartphone size={20} className="text-emerald-600" />
                <h3 className="font-bold text-sm text-slate-900 uppercase tracking-wider">Android Smartphone</h3>
              </div>
              <ol className="space-y-4 text-xs font-semibold text-slate-600">
                <li className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 font-bold">1</span>
                  <span><strong>Download Android APK</strong> button par tap karke APK file download karein.</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 font-bold">2</span>
                  <span>Notification bar se download complete hone par tap karein aur 'Allow from this source' enable karein.</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 font-bold">3</span>
                  <span><strong>Install</strong> par click karein aur apna Google account login karke padhai start karein.</span>
                </li>
              </ol>
            </div>

          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 md:mt-20">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 p-2 rounded-xl bg-slate-100 text-slate-600 mb-2">
            <HelpCircle size={18} />
          </div>
          <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Frequently Asked Questions</h2>
          <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mt-1">App installation se jude zaroori sawal</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs">
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-slate-800 hover:text-blue-600 transition-colors"
              >
                <span>{faq.q}</span>
                <ChevronDown size={16} className={`text-slate-400 transition-transform duration-200 shrink-0 ${activeFaq === idx ? 'rotate-180 text-blue-600' : ''}`} />
              </button>
              {activeFaq === idx && (
                <div className="px-4 pb-5 sm:px-5 sm:pb-5 text-xs text-slate-600 leading-relaxed font-medium border-t border-slate-50 pt-3 whitespace-pre-line animate-in fade-in duration-200">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
