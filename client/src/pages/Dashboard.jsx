import React, { useState, useEffect } from 'react';
import { 
  Plus, Users, Clock, Target, 
  ChevronRight, CalendarDays, Timer, 
  BarChart2, BookOpen, Bell, ArrowRight,
  TrendingUp, Globe, Shield, RefreshCw,
  Calculator, Send
} from 'lucide-react';
import { db } from '../firebase';
import { useAuth } from '../context/AuthContext';
import { 
  collection, query, where, getDocs, 
  onSnapshot, limit, orderBy 
} from 'firebase/firestore';
import { Link } from 'react-router-dom';
import PremiumAds from '../components/PremiumAds';

export default function Dashboard() {
  const { user } = useAuth();
  const [sessionCount, setSessionCount] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [activeGroups, setActiveGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstall, setShowInstall] = useState(false);

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
    
    // Fetch stats
    const qSessions = query(collection(db, 'StudySessions'), where('userId', '==', user.uid), limit(50));
    const unsubSessions = onSnapshot(qSessions, (snap) => {
      setSessionCount(snap.docs.length);
      setTotalTime(snap.docs.reduce((acc, d) => acc + d.data().duration, 0));
    });

    // Fetch groups
    const qGroups = query(collection(db, 'groups'), where('members', 'array-contains', user.uid), limit(3));
    const unsubGroups = onSnapshot(qGroups, (snap) => {
      setActiveGroups(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    });

    setLoading(false);
    return () => { unsubSessions(); unsubGroups(); };
  }, [user]);

  const fmt = (s) => `${Math.floor(s / 3600)}h ${Math.floor((s % 3600) / 60)}m`;

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      setShowInstall(false);
      setDeferredPrompt(null);
    }
  };

  return (
    <div className="max-w-7xl mx-auto pb-12 space-y-8 lg:space-y-10 animate-in fade-in duration-700">
      
      {/* Install App Banner (PWA Only) */}
      {showInstall && (
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-4 md:p-6 rounded-[2.5rem] flex items-center justify-between shadow-2xl relative overflow-hidden group">
           <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
           <p className="text-slate-900 font-black text-xs md:text-sm uppercase tracking-widest pl-4">Get the best experience in app mode!</p>
           <button onClick={handleInstallClick} className="px-8 py-3 bg-white text-blue-600 rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-xl active:scale-95 transition-all">
             Install App
           </button>
        </div>
      )}

      {/* Greetings Hub */}
      <div className="bg-white p-6 md:p-8 rounded-[3rem] border border-slate-200/80 shadow-2xl relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-6">
         <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>
         <div className="relative z-10 flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-700 flex items-center justify-center font-[1000] text-xl text-slate-900 shadow-2xl shadow-blue-500/20 group hover:scale-105 transition-transform">
               {user?.name?.[0]?.toUpperCase()}
            </div>
            <div>
              <h1 className="text-2xl font-[1000] text-slate-900 tracking-tighter uppercase leading-[0.8]">Hi, {user?.name?.split(' ')[0]}</h1>
              <p className="text-[9px] text-slate-400 font-black uppercase tracking-[0.3em] mt-2">Ready to dominate the session?</p>
            </div>
         </div>
         <div className="relative z-10 grid grid-cols-2 sm:flex sm:flex-wrap gap-3 md:gap-4 w-full sm:w-auto">
            <Link to="/dashboard/calculator" className="px-4 py-4 md:px-8 bg-slate-100 hover:bg-slate-100 text-slate-900 border border-slate-200/80 rounded-[2rem] font-black text-[10px] md:text-xs uppercase tracking-widest flex items-center justify-center gap-2 md:gap-3 transition-all active:scale-95 shadow-lg group">
               Sci-Calc <Calculator size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/dashboard/ugeac-predictor" className="px-4 py-4 md:px-8 bg-emerald-600 hover:bg-emerald-500 text-white rounded-[2rem] font-black text-[10px] md:text-xs uppercase tracking-widest flex items-center justify-center gap-2 md:gap-3 transition-all active:scale-95 shadow-xl shadow-emerald-950/20 group">
               UGEAC <Send size={14} />
            </Link>
            <Link to="/dashboard/notes" className="col-span-2 sm:col-span-1 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-[2rem] font-black text-[10px] md:text-xs uppercase tracking-widest flex items-center justify-center gap-3 transition-all active:scale-95 shadow-xl shadow-blue-950/20 group">
               Vault <BookOpen size={14} />
            </Link>
          </div>
      </div>

      {/* Global Promotion Slot (AdSense Ready) */}
      <PremiumAds type="BANNER" />

      <div className="w-full bg-blue-600/5 border border-blue-500/20 rounded-[3rem] p-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
             <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-4 shadow-xl shadow-blue-500/20 mx-auto md:mx-0">
               <Timer size={24} />
             </div>
             <h2 className="text-2xl font-[1000] text-slate-900 uppercase tracking-tighter mb-1">Integrated Study Hub</h2>
             <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.3em]">Timer · Hubs · Targets · Achievements</p>
          </div>
          <Link to="/dashboard/study" className="w-full md:w-auto px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-2xl shadow-blue-900/30 transition-all active:scale-[0.98] text-center">
             Enter Protocol
          </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Main Feed */}
        <div className="lg:col-span-8 space-y-12">
           
           {/* Analytic Chips */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { label: 'Study Time', val: fmt(totalTime), icon: Clock, tag: 'Lifetime' },
                { label: 'Network Hubs', val: activeGroups.length, icon: Globe, tag: 'Active' },
              ].map(s => (
                <div key={s.label} className="bg-white p-6 rounded-[2.5rem] border border-slate-200/80 group hover:border-blue-500/20 transition-all flex items-center gap-6 relative overflow-hidden">
                   <div className="p-4 bg-slate-100 text-slate-500 group-hover:text-blue-500 transition-colors rounded-2xl shrink-0"><s.icon size={22}/></div>
                   <div className="flex-1">
                      <p className="text-[8px] font-black uppercase tracking-widest text-slate-400 mb-0.5">{s.label}</p>
                      <p className="text-2xl font-black text-slate-900">{s.val}</p>
                   </div>
                </div>
              ))}
           </div>

           {/* Network Monitoring */}
           <div className="bg-slate-50 p-10 rounded-[4rem] border border-slate-300/30 shadow-2xl space-y-8">
              <div className="flex items-center justify-between">
                 <div className="flex items-center gap-3">
                   <Users size={20} className="text-blue-400" />
                   <h2 className="text-sm font-black uppercase text-slate-900 tracking-widest">Active Hubs</h2>
                 </div>
                 <Link to="/dashboard/study" className="text-[10px] font-black text-slate-500 hover:text-slate-900 uppercase tracking-widest flex items-center gap-2">Expand <ArrowRight size={12}/></Link>
              </div>

              <div className="space-y-4">
                 {activeGroups.map(g => {
                    const hubName = g.name || g.groupName || 'Hub';
                    return (
                      <div key={g.id} className="bg-[#f8fafc] p-6 rounded-[2.5rem] border border-slate-200/50 flex flex-col sm:flex-row sm:items-center justify-between gap-6 group hover:border-slate-600 transition-all">
                        <div className="flex items-center gap-5">
                            <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center font-black text-xl text-slate-900 uppercase group-hover:text-blue-500 border border-slate-200 group-hover:border-blue-500/30 transition-all">{hubName[0]}</div>
                            <div>
                              <p className="text-lg font-black text-slate-900 uppercase tracking-tight truncate max-w-[150px]">{hubName}</p>
                              <p className="text-[10px] font-bold text-slate-600 uppercase tracking-widest mt-1 italic">Code: {g.code || g.groupCode}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="text-right flex flex-col items-end">
                              <span className="text-[9px] font-black text-blue-500 uppercase tracking-[0.2em] mb-1 flex items-center gap-1"><RefreshCw size={8} className="animate-spin" /> LIVE</span>
                              <span className="text-xs font-black text-slate-900">{g.memberCount} Members</span>
                            </div>
                            <div className="w-10 h-10 border border-slate-200 rounded-full flex items-center justify-center text-slate-600 group-hover:text-slate-900 transition-all">
                              <ChevronRight size={18} />
                            </div>
                        </div>
                      </div>
                    );
                  })}
                 {activeGroups.length === 0 && (
                   <p className="text-center text-slate-600 text-[11px] font-bold py-10 uppercase tracking-widest">No active hubs found. Join a network to start tracking.</p>
                 )}
              </div>
           </div>

           {/* Announcement Preview */}
           <div className="bg-white p-6 rounded-[2.5rem] border border-slate-200/80 flex flex-col md:flex-row items-center gap-6">
              <div className="w-16 h-16 bg-orange-600/10 rounded-2xl flex items-center justify-center text-orange-500 shrink-0">
                <Bell size={24} />
              </div>
              <div className="flex-1 text-center md:text-left">
                <p className="text-xs font-black text-slate-900 uppercase tracking-widest">Global Broadcasts</p>
                <p className="text-[10px] text-slate-500 font-bold uppercase mt-1 leading-relaxed">Check the sidebar and Study Hub for the latest sessions and schedules.</p>
              </div>
           </div>
        </div>

        {/* Sidebar Analytics */}
        <div className="lg:col-span-4 space-y-8">
           
           <div className="bg-white p-10 rounded-[4rem] border border-slate-200/80">
              <div className="flex items-center gap-3 mb-8">
                 <BarChart2 size={20} className="text-emerald-500" />
                 <h2 className="text-sm font-black uppercase text-slate-900 tracking-widest">Growth Log</h2>
              </div>
              <div className="space-y-6">
                 {[
                   { label: 'Total Sessions', val: sessionCount, icon: CalendarDays },
                   { label: 'Hours Tracked', val: Math.floor(totalTime/3600), icon: Timer },
                 ].map(i => (
                   <div key={i.label} className="flex items-center justify-between group">
                      <div className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-lg bg-slate-100 border border-slate-200 group-hover:border-slate-600 transition-all flex items-center justify-center text-slate-500">
                           <i.icon size={14} />
                        </div>
                        <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{i.label}</p>
                      </div>
                      <p className="text-sm font-black text-slate-900">{i.val}</p>
                   </div>
                 ))}
              </div>
           </div>

        </div>

      </div>
    </div>
  );
}
