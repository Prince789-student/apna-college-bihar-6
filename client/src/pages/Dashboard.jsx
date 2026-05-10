import React, { useState, useEffect } from 'react';
import { 
  Plus, Users, Clock, Target, 
  ChevronRight, CalendarDays, Timer, 
  BarChart2, BookOpen, Bell, ArrowRight,
  TrendingUp, Globe, Shield, RefreshCw,
  Calculator, Send, Search, CheckCircle2, X,
  Smartphone, Lock
} from 'lucide-react';
import { db } from '../firebase';
import { useAuth } from '../context/AuthContext';
import { 
  collection, query, where, getDocs, 
  onSnapshot, limit, orderBy 
} from 'firebase/firestore';
import { Link, useLocation } from 'react-router-dom';
import PremiumAds from '../components/PremiumAds';
import { Capacitor } from '@capacitor/core';
import { Preferences } from '@capacitor/preferences';
import { useStudy } from '../context/StudyContext';

export default function Dashboard() {
  const { user } = useAuth();
  const location = useLocation();
  const { 
    allowedPackages, setAllowedPackages, 
    installedApps, fetchApps 
  } = useStudy();
  
  const [sessionCount, setSessionCount] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [activeGroups, setActiveGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstall, setShowInstall] = useState(false);
  const [showWhitelist, setShowWhitelist] = useState(location.state?.openWhitelist || false);
  const [searchTerm, setSearchTerm] = useState('');

  const isNative = Capacitor.isNativePlatform();

  useEffect(() => {
    if (isNative) fetchApps();
  }, [isNative]);

  useEffect(() => {
    if (!user) return;

    const checkPWA = () => {
      if (window.deferredPrompt) {
        setDeferredPrompt(window.deferredPrompt);
        setShowInstall(true);
      }
    };

    checkPWA();
    window.addEventListener('pwa-ready', checkPWA);
    
    const qSessions = query(collection(db, 'StudySessions'), where('userId', '==', user.uid), limit(50));
    const unsubSessions = onSnapshot(qSessions, (snap) => {
      setSessionCount(snap.docs.length);
      setTotalTime(snap.docs.reduce((acc, d) => acc + d.data().duration, 0));
    });

    const qGroups = query(collection(db, 'groups'), where('members', 'array-contains', user.uid), limit(3));
    const unsubGroups = onSnapshot(qGroups, (snap) => {
      setActiveGroups(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    });

    setLoading(false);
    return () => { unsubSessions(); unsubGroups(); };
  }, [user]);

  const fmt = (s) => `${Math.floor(s / 3600)}h ${Math.floor((s % 3600) / 60)}m`;

  const toggleApp = (pkg) => {
    const list = allowedPackages.split(',').filter(Boolean);
    if (list.includes(pkg)) {
      setAllowedPackages(list.filter(p => p !== pkg).join(','));
    } else {
      setAllowedPackages([...list, pkg].join(','));
    }
  };

  const filteredApps = installedApps.filter(app => 
    app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    app.packageName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto pb-12 space-y-8 lg:space-y-12 animate-in fade-in duration-700">
      
      {/* ── App Banner (Web Only) ── */}
      {!isNative && (
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 rounded-[2.5rem] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden group">
           <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
           <div className="flex items-center gap-4 relative z-10">
              <div className="p-3 bg-white/20 rounded-2xl text-white"><Smartphone size={24}/></div>
              <div className="text-center sm:text-left">
                <p className="text-white font-[1000] text-sm uppercase tracking-widest">Upgrade to Native Experience</p>
                <p className="text-blue-100 text-[10px] font-bold uppercase tracking-widest opacity-80 mt-1">Unlock Iron Focus & Global Blocking</p>
              </div>
           </div>
           <div className="flex flex-wrap justify-center sm:justify-end items-center gap-3 relative z-10 w-full sm:w-auto">
             <a href="/ACB-v12.apk" download="ACB-v12.apk" className="w-full sm:w-auto px-8 py-4 bg-white text-blue-600 hover:bg-blue-50 rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-xl active:scale-95 transition-all text-center">
               Download APK
             </a>
           </div>
        </div>
      )}

      {/* ── Greetings Hub ── */}
      <div className="bg-white p-8 rounded-[3.5rem] border border-slate-200/80 shadow-2xl relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-8">
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>
         <div className="relative z-10 flex items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-800 flex items-center justify-center font-[1000] text-2xl text-white shadow-2xl shadow-blue-500/30">
               {user?.name?.[0]?.toUpperCase()}
            </div>
            <div>
              <h1 className="text-3xl font-[1000] text-slate-900 tracking-tighter uppercase leading-none">Protocol, {user?.name?.split(' ')[0]}</h1>
              <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.4em] mt-3 flex items-center gap-2">
                <CheckCircle2 size={12} className="text-blue-500" /> System Integrity Validated
              </p>
            </div>
         </div>
         <div className="relative z-10 grid grid-cols-2 sm:flex sm:flex-wrap gap-4 w-full sm:w-auto">
            <Link to="/dashboard/calculator" className="px-6 py-4 bg-slate-100 hover:bg-slate-200 text-slate-900 rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-3 transition-all active:scale-95 border border-slate-200/50 shadow-sm">
               Calc <Calculator size={14} />
            </Link>
            <Link to="/dashboard/ugeac-predictor" className="px-6 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-3 transition-all active:scale-95 shadow-xl shadow-emerald-500/20">
               UGEAC <Send size={14} />
            </Link>
            <Link to="/dashboard/notes" className="col-span-2 sm:col-span-1 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-3 transition-all active:scale-95 shadow-xl shadow-blue-500/30">
               Vault <BookOpen size={14} />
            </Link>
          </div>
      </div>

      {/* ── Main Action & Blocker Section ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Study Protocol Card */}
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-10 rounded-[3.5rem] shadow-3xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-[80px] pointer-events-none group-hover:scale-125 transition-transform duration-700"></div>
          <div className="relative z-10 h-full flex flex-col justify-between gap-12">
            <div className="space-y-4 text-center md:text-left">
               <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center text-white shadow-xl backdrop-blur-md border border-white/20 mx-auto md:mx-0">
                 <Timer size={28} />
               </div>
               <h2 className="text-3xl md:text-4xl font-[1000] text-white tracking-tighter uppercase leading-tight">Launch Study <br/> Protocol</h2>
               <p className="text-blue-100/70 text-[10px] font-bold uppercase tracking-[0.4em]">Timer · Hubs · Focus Lock</p>
            </div>
            <Link to="/dashboard/study" className="w-full py-6 bg-white text-blue-600 hover:bg-blue-50 rounded-[2rem] font-[1000] text-sm uppercase tracking-[0.2em] shadow-2xl shadow-blue-950/40 transition-all active:scale-95 text-center">
               Enter Protocol
            </Link>
          </div>
        </div>

        {/* Iron Focus Card (Native Only) */}
        {isNative ? (
          <div className="bg-slate-950 p-10 rounded-[3.5rem] border border-slate-800 shadow-3xl relative overflow-hidden group">
             <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
             <div className="relative z-10 flex flex-col justify-between h-full gap-8">
                <div className="space-y-4">
                   <div className="flex items-center justify-between">
                      <div className="w-14 h-14 bg-slate-900 border border-blue-500/30 rounded-2xl flex items-center justify-center text-blue-400 shadow-2xl">
                         <Shield size={28} />
                      </div>
                      <div className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-[8px] font-black uppercase tracking-widest animate-pulse">System Level Active</div>
                   </div>
                   <h2 className="text-3xl font-[1000] text-white tracking-tighter uppercase leading-none">Iron Focus</h2>
                   <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest leading-relaxed">
                     Total hardware lock during sessions. <br/> Currently whitelisting: <span className="text-blue-400">{allowedPackages.split(',').filter(Boolean).length} Apps</span>
                   </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                   <button 
                     onClick={() => alert("Iron Focus is ready! Start a session in 'Study Protocol' to lock your device.")}
                     className="px-6 py-5 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all"
                   >
                     Test Blocker
                   </button>
                   <button 
                     onClick={() => setShowWhitelist(true)}
                     className="px-6 py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-xl shadow-blue-900/20 active:scale-95 transition-all"
                   >
                     Whitelist
                   </button>
                </div>
             </div>
          </div>
        ) : (
          <div className="bg-slate-50 p-10 rounded-[3.5rem] border border-slate-200 border-dashed flex flex-col items-center justify-center text-center gap-6">
             <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center text-slate-300"><Smartphone size={32}/></div>
             <div className="space-y-2">
                <p className="text-sm font-black text-slate-400 uppercase tracking-widest">Iron Focus is Native Only</p>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest max-w-[200px]">Download the Android app to enable hardware app blocking.</p>
             </div>
          </div>
        )}
      </div>

      <PremiumAds type="BANNER" />

      {/* ── Secondary Feed ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Main Feed Content */}
        <div className="lg:col-span-8 space-y-12">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { label: 'Study Time', val: fmt(totalTime), icon: Clock, color: 'text-blue-500' },
                { label: 'Network Hubs', val: activeGroups.length, icon: Globe, color: 'text-orange-500' },
              ].map(s => (
                <div key={s.label} className="bg-white p-8 rounded-[3rem] border border-slate-200/80 group hover:border-blue-500/20 transition-all flex items-center gap-8 shadow-sm">
                   <div className={`p-4 bg-slate-50 ${s.color} rounded-2xl shrink-0 group-hover:scale-110 transition-transform`}><s.icon size={24}/></div>
                   <div className="flex-1">
                      <p className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">{s.label}</p>
                      <p className="text-3xl font-[1000] text-slate-900 tracking-tight">{s.val}</p>
                   </div>
                </div>
              ))}
           </div>

           {/* Network Monitoring */}
           <div className="bg-[#f8fafc] p-10 rounded-[4rem] border border-slate-200/60 shadow-xl space-y-10">
              <div className="flex items-center justify-between px-2">
                 <div className="flex items-center gap-4">
                   <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white"><Users size={20} /></div>
                   <h2 className="text-sm font-black uppercase text-slate-900 tracking-widest">Global Study Network</h2>
                 </div>
                 <Link to="/dashboard/groups" className="text-[10px] font-black text-blue-600 hover:text-blue-700 uppercase tracking-widest flex items-center gap-2 transition-all">Explore Hubs <ArrowRight size={14}/></Link>
              </div>

              <div className="space-y-4">
                 {activeGroups.map(g => {
                    const hubName = g.name || g.groupName || 'Hub';
                    return (
                      <div key={g.id} className="bg-white p-8 rounded-[3rem] border border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-8 group hover:shadow-2xl hover:border-blue-500/20 transition-all cursor-pointer">
                        <div className="flex items-center gap-6">
                            <div className="w-16 h-16 bg-slate-50 border border-slate-100 rounded-[1.5rem] flex items-center justify-center font-[1000] text-2xl text-slate-400 uppercase group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all shadow-sm">{hubName[0]}</div>
                            <div>
                              <p className="text-xl font-[1000] text-slate-900 tracking-tight uppercase leading-none">{hubName}</p>
                              <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mt-3 flex items-center gap-2"><Lock size={10}/> CODE: {g.code || g.groupCode}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-6">
                            <div className="text-right flex flex-col items-end">
                              <span className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.2em] mb-2 flex items-center gap-2"><span className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></span> ONLINE</span>
                              <span className="text-sm font-black text-slate-900">{g.memberCount} Members</span>
                            </div>
                            <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-slate-300 group-hover:bg-blue-50 group-hover:text-blue-600 transition-all">
                              <ChevronRight size={22} />
                            </div>
                        </div>
                      </div>
                    );
                  })}
                 {activeGroups.length === 0 && (
                   <div className="text-center py-16 px-8 border-2 border-dashed border-slate-200 rounded-[3rem] space-y-4">
                      <p className="text-slate-400 text-xs font-black uppercase tracking-widest">No Active Connections</p>
                      <Link to="/dashboard/groups" className="text-blue-500 text-[10px] font-black uppercase tracking-widest underline">Join your first hub now</Link>
                   </div>
                 )}
              </div>
           </div>
        </div>

        {/* Sidebar Analytics */}
        <div className="lg:col-span-4 space-y-8">
           <div className="bg-white p-10 rounded-[4rem] border border-slate-200/80 shadow-sm space-y-10">
              <div className="flex items-center gap-4">
                 <div className="p-3 bg-emerald-50 text-emerald-500 rounded-2xl"><BarChart2 size={24} /></div>
                 <h2 className="text-sm font-black uppercase text-slate-900 tracking-widest">Academic Log</h2>
              </div>
              <div className="space-y-8">
                 {[
                   { label: 'Total Sessions', val: sessionCount, icon: CalendarDays, color: 'bg-blue-50 text-blue-500' },
                   { label: 'Hours Dominating', val: Math.floor(totalTime/3600), icon: Timer, color: 'bg-orange-50 text-orange-500' },
                 ].map(i => (
                   <div key={i.label} className="flex items-center justify-between group">
                      <div className="flex items-center gap-5">
                        <div className={`w-12 h-12 rounded-2xl ${i.color} transition-all flex items-center justify-center`}>
                           <i.icon size={20} />
                        </div>
                        <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-none">{i.label}</p>
                      </div>
                      <p className="text-xl font-[1000] text-slate-900">{i.val}</p>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </div>

      {/* ── Whitelist Modal ── */}
      {showWhitelist && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-6 bg-slate-950/90 backdrop-blur-xl animate-in fade-in duration-300">
           <div className="w-full max-w-2xl bg-white rounded-[3.5rem] shadow-3xl flex flex-col max-h-[85vh] overflow-hidden">
              <div className="p-8 md:p-10 border-b border-slate-100 flex items-center justify-between">
                 <div>
                    <h2 className="text-2xl font-[1000] text-slate-900 tracking-tighter uppercase">Iron Focus Whitelist</h2>
                    <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mt-2">Select apps that can bypass the lock</p>
                 </div>
                 <button onClick={() => setShowWhitelist(false)} className="p-4 bg-slate-100 hover:bg-slate-200 rounded-2xl text-slate-500 transition-all"><X size={20}/></button>
              </div>

              <div className="px-10 py-6 border-b border-slate-100">
                 <div className="relative group">
                    <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-blue-500" size={18} />
                    <input 
                      type="text" 
                      placeholder="Search Apps..." 
                      className="w-full pl-16 pr-8 py-5 bg-slate-50 border-2 border-transparent focus:border-blue-500/30 focus:bg-white rounded-[1.5rem] text-sm font-bold tracking-tight outline-none transition-all"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                 </div>
              </div>

              <div className="flex-1 overflow-y-auto p-6 md:p-10 space-y-3 custom-scrollbar">
                 {filteredApps.map(app => {
                   const isSelected = allowedPackages.includes(app.packageName);
                   return (
                     <div 
                       key={app.packageName} 
                       onClick={() => toggleApp(app.packageName)}
                       className={`flex items-center justify-between p-5 rounded-[1.5rem] cursor-pointer transition-all border-2 ${isSelected ? 'bg-blue-50 border-blue-200' : 'bg-slate-50/50 border-transparent hover:bg-slate-50'}`}
                     >
                        <div className="flex items-center gap-4">
                           <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-[1000] text-lg ${isSelected ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-500'}`}>{app.name[0]}</div>
                           <div>
                              <p className="text-sm font-[1000] text-slate-900 uppercase tracking-tight leading-none">{app.name}</p>
                              <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest mt-2 truncate max-w-[200px]">{app.packageName}</p>
                           </div>
                        </div>
                        {isSelected && <CheckCircle2 size={24} className="text-blue-600" />}
                     </div>
                   );
                 })}
              </div>

              <div className="p-8 bg-slate-50/50 border-t border-slate-100">
                 <button 
                   onClick={() => setShowWhitelist(false)}
                   className="w-full py-5 bg-slate-900 text-white rounded-[1.5rem] font-black text-xs uppercase tracking-[0.2em] shadow-xl transition-all active:scale-95"
                 >
                   Confirm Configuration
                 </button>
              </div>
           </div>
        </div>
      )}

    </div>
  );
}
