import React, { useState, useEffect } from 'react';
import { doc, getDoc, collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../context/AuthContext';
import { 
  Trophy, Flame, Clock, Star, Zap, Award, Shield,
  Target, TrendingUp, Medal, Sparkles, LayoutDashboard,
  ShieldCheck, AlertCircle, Info, GraduationCap
} from 'lucide-react';

const ALL_BADGES = [
  { id: 'streak_3',   icon: <Flame size={40} />, name: '3-Day Streak',   desc: 'Consistent participation for 72 hours.',       color: 'from-orange-500 to-red-600', glow: 'shadow-orange-500/50' },
  { id: 'streak_7',   icon: <Star size={40} />, name: '7-Day Streak',   desc: 'Weekly milestone established.',         color: 'from-amber-400 to-yellow-600', glow: 'shadow-yellow-500/50' },
  { id: 'streak_30',  icon: <Trophy size={40} />, name: '30-Day Streak',  desc: 'Monthly node synchronization verified.',  color: 'from-purple-500 to-indigo-700', glow: 'shadow-purple-500/50' },
  { id: 'first_hour', icon: <Clock size={40} />, name: 'First Hour',     desc: 'Initial study vector complete.',    color: 'from-blue-500 to-cyan-600', glow: 'shadow-blue-500/50' },
  { id: 'ten_hours',  icon: <Zap size={40} />, name: '10 Hours Club',  desc: 'High-energy input detected.',      color: 'from-emerald-500 to-teal-600', glow: 'shadow-emerald-500/50' },
  { id: 'sessions_5', icon: <Medal size={40} />, name: '5 Sessions',     desc: 'Multiple session modules active.',  color: 'from-pink-500 to-rose-600', glow: 'shadow-rose-500/50' },
  { id: 'sessions_20',icon: <ShieldCheck size={40} />, name: '20 Sessions',    desc: 'Mastery of session scheduling.',         color: 'from-violet-500 to-purple-700', glow: 'shadow-indigo-500/50' },
  { id: 'goals_hit',  icon: <Target size={40} />, name: 'Goal Crusher',  desc: 'Daily objective protocols met.',          color: 'from-emerald-400 to-cyan-500', glow: 'shadow-cyan-500/50' },
];

export default function Achievements() {
  const { user } = useAuth();
  const [userData, setUserData] = useState(null);
  const [sessionCount, setSessionCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => { if (user) fetchData(); }, [user]);

  const fetchData = async () => {
    try {
      const snap = await getDoc(doc(db, 'users', user.uid));
      if (snap.exists()) setUserData(snap.data());

      const q = query(collection(db, 'StudySessions'), where('userId', '==', user.uid));
      const sessSnap = await getDocs(q);
      setSessionCount(sessSnap.size);
    } catch(e) { console.error(e); }
    finally { setLoading(false); }
  };

  const earnedBadges = userData?.badges || [];
  const computedBadges = [...earnedBadges];
  if (sessionCount >= 5 && !computedBadges.includes('sessions_5')) computedBadges.push('sessions_5');
  if (sessionCount >= 20 && !computedBadges.includes('sessions_20')) computedBadges.push('sessions_20');

  const earned = ALL_BADGES.filter(b => computedBadges.includes(b.id));
  const locked = ALL_BADGES.filter(b => !computedBadges.includes(b.id));

  const formatHrs = (s) => ((s || 0) / 3600).toFixed(1);
  
  if (loading) return (
     <div className="min-h-screen flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
     </div>
  );

  return (
    <div className="max-w-7xl mx-auto space-y-12 animate-in fade-in duration-1000 pb-20 px-4 md:px-0">
      
      {/* ─── HEADER ──────────────────────────────────────────────── */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-10">
         <div className="space-y-1.5 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-[1000] tracking-tighter uppercase text-white leading-none">
              Milestone <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-600 font-black">Archive</span>
            </h1>
            <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.4em]">Performance Record / Identity: {user.displayName || 'Unknown node'}</p>
         </div>
         <div className="flex items-center gap-4 bg-[#0d121f] rounded-[2rem] border border-slate-800 p-6 shadow-2xl">
            <div className="p-4 bg-amber-600/10 text-amber-500 rounded-2xl"><Sparkles size={24} /></div>
            <div>
               <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-none">Global Ranking</p>
               <p className="text-2xl font-[1000] text-white tracking-tighter mt-1 uppercase leading-none">BETA SECTOR</p>
            </div>
         </div>
      </div>

      {/* ─── STATS DASHBOARD ─────────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
         {[
           { icon: <Flame size={24}/>, label: 'Current Streak', value: `${userData?.streak || 0}`, sub: 'Consecutive Days', c: 'text-orange-500', bg: 'bg-orange-500/10' },
           { icon: <Clock size={24}/>, label: 'Total Input', value: `${formatHrs(userData?.totalStudyTime)}`, sub: 'Hours Synchronized', c: 'text-blue-400', bg: 'bg-blue-400/10' },
           { icon: <Zap size={24}/>, label: 'Session High', value: sessionCount, sub: 'Total Modules', c: 'text-yellow-400', bg: 'bg-yellow-400/10' },
           { icon: <Award size={24}/>, label: 'Badges Earned', value: `${earned.length}/${ALL_BADGES.length}`, sub: 'Identity Verification', c: 'text-purple-400', bg: 'bg-purple-400/10' },
         ].map((s) => (
           <div key={s.label} className="bg-[#0d121f] p-10 rounded-[3rem] border border-slate-800 relative overflow-hidden group hover:border-slate-700 transition-all shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-slate-800/10 rounded-full blur-2xl group-hover:bg-indigo-600/5 transition-all"></div>
              <div className="relative z-10 space-y-6">
                 <div className={`p-4 ${s.bg} ${s.c} rounded-2xl inline-block group-hover:scale-110 transition-transform`}>{s.icon}</div>
                 <div className="space-y-1">
                    <p className="text-[9px] text-slate-500 font-extrabold uppercase tracking-[0.2em]">{s.label}</p>
                    <h4 className="text-4xl font-[1000] text-white tracking-tighter uppercase leading-none">{s.value}</h4>
                    <p className="text-[8px] text-slate-600 font-black uppercase tracking-widest">{s.sub}</p>
                 </div>
              </div>
           </div>
         ))}
      </div>

      {/* ─── EARNED BADGES ───────────────────────────────────── */}
      <div className="space-y-8">
         <div className="flex items-center justify-between px-6">
            <h3 className="text-sm font-black text-slate-500 uppercase tracking-widest flex items-center gap-3"><Medal size={16} className="text-emerald-500"/> Verified Achievements ({earned.length})</h3>
            <div className="flex items-center gap-2 px-6 py-2 bg-emerald-600/10 text-emerald-400 rounded-full border border-emerald-500/20 text-[9px] font-black uppercase tracking-widest">Protocol Active</div>
         </div>

         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {earned.map(badge => (
               <div key={badge.id} className={`group bg-[#0d121f] p-10 rounded-[3rem] border border-slate-800/80 hover:border-emerald-500/30 transition-all relative overflow-hidden flex flex-col items-center text-center space-y-8 shadow-2xl h-80 justify-center`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${badge.color} opacity-[0.03] group-hover:opacity-[0.08] transition-opacity`}></div>
                  <div className={`p-6 rounded-[2.5rem] bg-gradient-to-br ${badge.color} text-white shadow-2xl ${badge.glow} group-hover:scale-110 transition-transform duration-500`}>
                     {badge.icon}
                  </div>
                  <div className="space-y-2 relative z-10">
                     <p className="text-xl font-black text-white uppercase tracking-tight leading-none">{badge.name}</p>
                     <p className="text-[9px] text-slate-500 font-bold uppercase tracking-tight leading-relaxed">{badge.desc}</p>
                  </div>
               </div>
            ))}
            {earned.length === 0 && (
              <div className="col-span-full py-24 text-center space-y-8 bg-[#0d121f] rounded-[4rem] border border-dashed border-slate-800/50">
                 <div className="w-24 h-24 bg-slate-900 border border-slate-800 rounded-[3rem] flex items-center justify-center mx-auto text-slate-800 animate-pulse"><GraduationCap size={48} /></div>
                 <div>
                    <h4 className="text-xl font-black text-white uppercase tracking-tighter">No Identity Badges Found</h4>
                    <p className="text-[10px] font-black text-slate-700 uppercase tracking-[0.3em] mt-3">Synchronize session module to unlock milestones</p>
                 </div>
              </div>
            )}
         </div>
      </div>

      {/* ─── LOCKED ASSETS ───────────────────────────────────── */}
      <div className="space-y-8 opacity-60">
         <div className="flex items-center justify-between px-6">
            <h3 className="text-sm font-black text-slate-600 uppercase tracking-widest flex items-center gap-3"><Shield size={16}/> Encrypted Milestones ({locked.length})</h3>
         </div>

         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {locked.map(badge => (
               <div key={badge.id} className="p-10 bg-[#0d121f] border border-slate-800/50 rounded-[3rem] flex flex-col items-center text-center space-y-8 opacity-30 group grayscale hover:grayscale-0 transition-all cursor-not-allowed h-80 justify-center">
                  <div className="p-6 rounded-[2.5rem] bg-slate-900 border border-slate-800 text-slate-700">
                     {badge.icon}
                  </div>
                  <div className="space-y-2">
                     <p className="text-xl font-black text-slate-600 uppercase tracking-tight leading-none group-hover:text-white transition-colors">{badge.name}</p>
                     <p className="text-[9px] text-slate-700 font-bold uppercase tracking-tight leading-relaxed">{badge.desc}</p>
                  </div>
               </div>
            ))}
         </div>
      </div>
    </div>
  );
}
