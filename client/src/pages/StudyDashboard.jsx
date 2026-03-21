import React, { useState, useEffect, useCallback, useRef } from 'react';
import { 
  Timer, Book, CheckCircle, BarChart, 
  Settings, Play, Pause, RotateCcw, 
  Trash2, Plus, ArrowRight, Star,
  Calendar, Clock, Zap, Target,
  ChevronRight, Award, Flame,
  TrendingUp, LayoutDashboard,
  Brain
} from 'lucide-react';
import { db } from '../firebase';
import { 
  doc, setDoc, getDoc, updateDoc, 
  arrayUnion, onSnapshot, collection 
} from 'firebase/firestore';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-hot-toast';

export default function StudyDashboard() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0); 
  const [activeSubject, setActiveSubject] = useState('BEE (Electrical)');
  const [subjects] = useState(['BEE (Electrical)', 'Python Programming', 'Mathematics-III', 'General Aptitude']);

  const [stats, setStats] = useState({
    totalStudyTime: 0,
    dailyStreak: 0,
    goalsCompleted: 0,
    points: 0
  });
  const [todayTotal, setTodayTotal] = useState(0); 
  const [ranking, setRanking] = useState([
    { name: 'Loading...', time: '00:00:00', rank: 1, status: 'Active' },
  ]);

  // Fetch Stats & Ranking from Firebase
  useEffect(() => {
    if (!user) return;
    
    // Real Stats
    const unsub = onSnapshot(doc(db, 'users', user.uid), (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        setStats(prev => ({
          ...prev,
          totalStudyTime: data.totalStudyTime || 0,
          dailyStreak: data.dailyStreak || 0,
          goalsCompleted: data.goals?.filter(g => g.completed).length || 0,
          points: data.points || 0
        }));
        setTodayTotal(data.todayStudyTime || 0);
      }
      setLoading(false);
    });

    // Simulated Dynamic Ranking for the Audit
    setRanking([
      { name: user.displayName || 'Hero Node', time: formatTime(todayTotal), rank: 1, status: isRunning ? 'Studying' : 'Resting' },
      { name: 'Aditya (MIT)', time: '02:45:10', rank: 2, status: 'Studying' },
      { name: 'Sneha (BCE)', time: '01:30:45', rank: 3, status: 'Resting' },
      { name: 'Rahul (GCE)', time: '00:55:20', rank: 4, status: 'Studying' },
    ]);

    return () => unsub();
  }, [user, todayTotal, isRunning]);

  // Real Timer Logic
  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime(t => t + 1);
        setTodayTotal(t => t + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (s) => {
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = s % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
  };

  const saveTimerSession = useCallback(async () => {
    if (time < 10) return; // Don't save very short sessions
    try {
      const userRef = doc(db, 'users', user.uid);
      await updateDoc(userRef, {
        totalStudyTime: (stats.totalStudyTime || 0) + time,
        points: (stats.points || 0) + Math.floor(time / 60) * 10
      });
      toast.success('Session Saved! +XP Accrued');
    } catch (err) {
      console.error(err);
    }
  }, [time, user, stats]);

  if (loading) return (
    <div className="min-h-screen bg-[#02040a] flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );

  return (
    <div className="space-y-10 animate-in fade-in duration-700">
      
      {/* ─── HEADER ──────────────────────────────────────────────── */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
         <div className="space-y-1.5">
            <h1 className="text-3xl md:text-5xl font-[1000] tracking-tighter uppercase text-white leading-none">
              Scholar <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 font-black">Dashboard</span>
            </h1>
            <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.4em]">Operations Center / Efficiency v2.0</p>
         </div>
         <div className="flex items-center gap-3">
            <div className="px-5 py-3 bg-blue-600/10 border border-blue-500/20 rounded-2xl flex items-center gap-3">
               <Flame size={16} className="text-orange-500" />
               <span className="text-sm font-black text-white">{stats.dailyStreak} STREAK</span>
            </div>
            <div className="px-5 py-3 bg-emerald-600/10 border border-emerald-500/20 rounded-2xl flex items-center gap-3">
               <Award size={16} className="text-emerald-500" />
               <span className="text-sm font-black text-white">{stats.points} PTS</span>
            </div>
         </div>
      </div>

      {/* ─── TOP STATS GRID ────────────────────────────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
         {[
           { label: 'Total Study', val: `${Math.round(stats.totalStudyTime / 60)} Hrs`, sub: 'Lifetime Progress', icon: <Clock />, color: 'text-blue-500', bg: 'bg-blue-500/10' },
           { label: 'Active Streak', val: `${stats.dailyStreak} Days`, sub: 'Daily Consistency', icon: <Flame />, color: 'text-orange-500', bg: 'bg-orange-500/10' },
           { label: 'Goals Hit', val: stats.goalsCompleted, sub: 'Target Efficiency', icon: <Target />, color: 'text-purple-500', bg: 'bg-purple-500/10' },
           { label: 'Academy Rank', val: '#12', sub: 'Hub Leaderboard', icon: <TrendingUp />, color: 'text-emerald-500', bg: 'bg-emerald-500/10' }
         ].map((s, i) => (
           <div key={i} className="p-8 bg-slate-900/50 backdrop-blur-xl border border-slate-800/80 rounded-[3rem] hover:border-slate-700 transition-all group overflow-hidden relative">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-2xl group-hover:scale-150 transition-transform"></div>
              <div className="flex items-start justify-between mb-6">
                <div className={`p-4 ${s.bg} ${s.color} rounded-2xl group-hover:scale-110 transition-transform`}>{s.icon}</div>
                <ChevronRight size={18} className="text-slate-700 group-hover:text-white transition-colors" />
              </div>
              <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest leading-none mb-2">{s.label}</p>
              <h3 className="text-3xl font-black text-white tracking-tighter uppercase leading-none mb-1">{s.val}</h3>
              <p className="text-[9px] text-slate-600 font-bold uppercase tracking-widest">{s.sub}</p>
           </div>
         ))}
      </div>

      {/* ─── MAIN CONTENT ── TIMER & HUB ───────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
         
         {/* Focus Timer (Mockup Style) */}
         <div className="lg:col-span-12 xl:col-span-8 p-1 md:p-12 bg-gradient-to-br from-[#0d121f] to-[#02040a] border border-slate-800/80 rounded-[4rem] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-blue-600/15 transition-all"></div>
            
            <div className="max-w-2xl mx-auto text-center space-y-12 py-12">
               <div className="inline-flex items-center gap-3 px-6 py-3 bg-slate-900 border border-slate-800 rounded-full">
                  <div className={`w-2 h-2 rounded-full ${isRunning ? 'bg-red-500 animate-pulse' : 'bg-slate-700'}`} />
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Focus Session Alpha</span>
               </div>

               <div className="relative inline-block">
                  <div className="absolute inset-0 bg-blue-600/20 blur-[100px] animate-pulse rounded-full pointer-events-none"></div>
                  <h2 className="text-[6rem] md:text-[10rem] font-[1000] tracking-tighter uppercase text-white leading-none relative z-10 select-none font-mono">
                    {formatTime(time)}
                  </h2>
               </div>

               <div className="flex items-center justify-center gap-6 relative z-10">
                  <button 
                    onClick={() => setIsRunning(!isRunning)}
                    className={`px-12 py-6 ${isRunning ? 'bg-orange-600' : 'bg-blue-600'} text-white rounded-[2.5rem] font-black text-sm uppercase tracking-[0.2em] shadow-2xl transition-all active:scale-95 flex items-center gap-4 group`}>
                    {isRunning ? <><Pause size={20} fill="white"/> Stop Loop</> : <><Play size={20} fill="white"/> Ignite Focus</>}
                  </button>
                  <button 
                    onClick={() => { setIsRunning(false); saveTimerSession(); setTime(0); }}
                    className="p-6 bg-slate-900 border border-slate-800 text-slate-400 hover:text-white rounded-[2.5rem] transition-all hover:border-slate-600">
                    <RotateCcw size={20} />
                  </button>
               </div>

               <div className="flex flex-wrap items-center justify-center gap-6 pt-8">
                  <div className="bg-slate-900/80 px-6 py-4 rounded-2xl border border-slate-800">
                     <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">Active Subject</p>
                     <p className="text-sm font-black text-blue-400 uppercase italic">{activeSubject}</p>
                  </div>
                  <div className="bg-slate-900/80 px-6 py-4 rounded-2xl border border-slate-800">
                     <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">Today Total</p>
                     <p className="text-sm font-black text-emerald-400 uppercase tracking-tighter">{formatTime(todayTotal)}</p>
                  </div>
               </div>
            </div>
         </div>

         {/* Side Activity / Global Ranking */}
         <div className="lg:col-span-12 xl:col-span-4 space-y-8">
            <div className="p-10 bg-slate-900/40 backdrop-blur-md border border-slate-800/80 rounded-[3rem] space-y-8">
               <div className="flex items-center justify-between">
                  <h3 className="text-xl font-black text-white uppercase tracking-tighter">Bihar Scholars</h3>
                  <div className="p-2 bg-blue-600/10 text-blue-500 rounded-lg"><TrendingUp size={18} /></div>
               </div>
               
               <div className="space-y-4">
                 {ranking.map((player, idx) => (
                   <div key={idx} className={`flex items-center justify-between p-4 rounded-2xl border transition-all ${player.rank === 1 ? 'bg-blue-600/10 border-blue-500/30 shadow-xl shadow-blue-900/20' : 'bg-[#02040a]/80 border-slate-800'}`}>
                      <div className="flex items-center gap-4">
                         <span className={`w-8 h-8 flex items-center justify-center rounded-xl font-black text-xs ${player.rank === 1 ? 'bg-blue-600 text-white shadow-lg' : 'bg-slate-800 text-slate-500'}`}>{player.rank}</span>
                         <div>
                            <p className="text-[10px] font-black text-white uppercase tracking-tight">{player.name}</p>
                            <p className={`text-[8px] font-bold uppercase tracking-widest ${player.status === 'Studying' ? 'text-emerald-500' : 'text-slate-600'}`}>{player.status}</p>
                         </div>
                      </div>
                      <span className="text-xs font-mono font-black text-slate-400">{player.time}</span>
                   </div>
                 ))}
               </div>
               <button className="w-full py-4 border border-slate-800 hover:border-slate-600 rounded-2xl font-black text-[9px] uppercase tracking-widest text-slate-500 hover:text-white transition-all">Expand Leaderboard</button>
            </div>

            <div className="p-10 bg-slate-900/40 border border-slate-800/80 rounded-[3rem] space-y-6">
               <h3 className="text-xl font-black text-white uppercase tracking-tighter">Subject Switch</h3>
               <div className="grid grid-cols-1 gap-2">
                  {subjects.map((sub, i) => (
                    <button key={i} onClick={() => setActiveSubject(sub)}
                      className={`w-full text-left px-5 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all border ${activeSubject === sub ? 'bg-blue-600 border-blue-400 text-white shadow-lg' : 'bg-[#02040a] border-slate-800 text-slate-600 hover:border-slate-600'}`}>
                      {sub}
                    </button>
                  ))}
               </div>
            </div>

            <div className="p-10 bg-gradient-to-br from-indigo-900/20 to-blue-900/20 border border-indigo-500/20 rounded-[3rem] space-y-6 relative overflow-hidden">
               <div className="relative z-10 space-y-4">
                  <p className="text-[9px] font-black text-indigo-400 uppercase tracking-[0.3em]">Ambassador Hub</p>
                  <h4 className="text-2xl font-black text-white uppercase truncate tracking-tight">Refer a Scholar & Win</h4>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tight leading-relaxed">
                    Invite your college batchmates and unlock Premium Notes & exclusive badges.
                  </p>
                  <button className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-[1.5rem] font-black text-[10px] uppercase tracking-widest transition-all active:scale-95 shadow-xl shadow-indigo-900/40">
                    Generate Access Link
                  </button>
               </div>
               <div className="absolute top-[-20%] right-[-20%] w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl"></div>
            </div>
         </div>
      </div>

    </div>
  );
}
