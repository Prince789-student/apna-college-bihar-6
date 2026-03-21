import React, { useState, useEffect, useRef } from 'react';
import { 
  Timer, Play, Pause, Square, BookOpen, 
  BarChart3, Trophy, Clock, Target, 
  ChevronRight, CalendarDays, RefreshCw
} from 'lucide-react';
import { db } from '../firebase';
import { useAuth } from '../context/AuthContext';
import { 
  collection, addDoc, query, where, 
  getDocs, serverTimestamp, orderBy, limit,
  onSnapshot
} from 'firebase/firestore';

export default function StudyTimer() {
  const { user } = useAuth();
  const [active, setActive] = useState(false);
  const [time, setTime] = useState(0);
  const [subjects, setSubjects] = useState(['Physics', 'Chemistry', 'Maths', 'CS']);
  const [selSub, setSelSub] = useState('Physics');
  const [sessions, setSessions] = useState([]);
  const [leaderboard, setLeaderboard] = useState([]);
  const [stats, setStats] = useState({ daily: 0, weekly: 0, monthly: 0 });
  const timerRef = useRef(null);

  // Timer logic
  useEffect(() => {
    if (active) {
      timerRef.current = setInterval(() => setTime(t => t + 1), 1000);
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [active]);

  const fmt = (s) => {
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = s % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
  };

  const save = async () => {
    if (time < 10) { alert('Session must be > 10s'); setActive(false); setTime(0); return; }
    try {
      await addDoc(collection(db, 'StudySessions'), {
        userId: user.uid,
        userName: user.name,
        subject: selSub,
        duration: time,
        createdAt: serverTimestamp()
      });
      setActive(false); setTime(0);
      fetchStats();
    } catch (e) { console.error(e); }
  };

  const fetchStats = async () => {
    if (!user) return;
    const now = new Date();
    const day = new Date(now.setHours(0,0,0,0));
    const week = new Date(new Date().setDate(now.getDate() - 7));

    const qDay = query(collection(db, 'StudySessions'), where('userId', '==', user.uid), where('createdAt', '>=', day));
    const snapDay = await getDocs(qDay);
    const dTot = snapDay.docs.reduce((acc, d) => acc + d.data().duration, 0);

    const qWeek = query(collection(db, 'StudySessions'), where('userId', '==', user.uid), where('createdAt', '>=', week));
    const snapWeek = await getDocs(qWeek);
    const wTot = snapWeek.docs.reduce((acc, d) => acc + d.data().duration, 0);

    setStats({ daily: dTot, weekly: wTot, monthly: wTot * 4 }); // Placeholder monthly
  };

  useEffect(() => {
    fetchStats();
    // Real-time leaderboard (Global top 10)
    const q = query(collection(db, 'StudySessions'), limit(100)); // We'll aggregate manually here for demo
    const unsub = onSnapshot(q, (snap) => {
      const agg = {};
      snap.docs.forEach(d => {
        const { userName, duration } = d.data();
        const cleanName = userName || 'Scholar';
        agg[cleanName] = (agg[cleanName] || 0) + duration;
      });
      const sorted = Object.entries(agg).map(([n, d]) => ({ name: n, dur: d })).sort((a, b) => b.dur - a.dur).slice(0, 5);
      setLeaderboard(sorted);
    });
    return unsub;
  }, [user]);

  return (
    <div className="max-w-6xl mx-auto pb-24 space-y-8 lg:space-y-12">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Timer Core */}
        <div className="lg:col-span-12 xl:col-span-8 space-y-8">
           <div className="bg-[#0d121f] p-10 md:p-16 rounded-[4rem] border border-slate-800/80 shadow-2xl relative overflow-hidden flex flex-col items-center">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent pointer-events-none"></div>
              
              <div className="flex items-center gap-3 mb-10 px-6 py-2 bg-slate-900/50 rounded-full border border-slate-800/50">
                <Target size={14} className="text-orange-400" />
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Current Objective: <span className="text-white">{selSub}</span></p>
              </div>

              <h1 className="text-8xl md:text-[10rem] font-[1000] text-white tracking-tighter transition-all tabular-nums leading-none">
                {fmt(time)}
              </h1>

              <div className="mt-12 flex gap-4 w-full max-w-sm">
                {!active ? (
                  <button onClick={() => setActive(true)} 
                    className="flex-1 py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-3xl font-black text-xs uppercase tracking-widest shadow-xl shadow-blue-900/20 active:scale-95 transition-all flex items-center justify-center gap-3">
                    <Play size={18} fill="currentColor" /> Initialize Focus
                  </button>
                ) : (
                  <>
                    <button onClick={() => setActive(false)} 
                      className="flex-1 py-5 bg-orange-600 hover:bg-orange-500 text-white rounded-3xl font-black text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-3">
                      <Pause size={18} fill="currentColor" /> Suspend
                    </button>
                    <button onClick={save} 
                      className="flex-1 py-5 bg-red-600 hover:bg-red-500 text-white rounded-3xl font-black text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-3">
                      <Square size={18} fill="currentColor" /> Terminate
                    </button>
                  </>
                )}
              </div>

              <div className="mt-12 flex flex-wrap justify-center gap-2">
                {subjects.map(s => (
                  <button key={s} onClick={() => !active && setSelSub(s)}
                    className={`px-6 py-3 rounded-2xl text-[11px] font-bold uppercase transition-all ${selSub === s ? 'bg-white text-black shadow-xl scale-105' : 'bg-slate-900 text-slate-500 hover:text-white'}`}>
                    {s}
                  </button>
                ))}
                <button onClick={()=>setSubjects([...subjects, prompt('New Subject:') || 'Extra'])} className="px-6 py-3 bg-slate-800 rounded-2xl text-[11px] font-bold text-slate-500 hover:text-white transition-all">+</button>
              </div>
           </div>

           {/* Personal Stats Hub */}
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { label: 'Daily Session', val: fmt(stats.daily), icon: Clock, col: 'blue' },
                { label: 'Weekly Grind', val: fmt(stats.weekly), icon: CalendarDays, col: 'indigo' },
                { label: 'Subject Leader', val: selSub, icon: BookOpen, col: 'orange' },
              ].map(s => (
                <div key={s.label} className="bg-[#0d121f] p-8 rounded-[3rem] border border-slate-800/80 group hover:border-blue-500/20 transition-all">
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-slate-900 rounded-2xl text-slate-500 group-hover:text-blue-500 transition-colors">
                      <s.icon size={20} />
                    </div>
                    <ChevronRight size={14} className="text-slate-800" />
                  </div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">{s.label}</p>
                  <p className="text-2xl font-black text-white">{s.val}</p>
                </div>
              ))}
           </div>
        </div>

        {/* Global Leaderboard */}
        <div className="lg:col-span-12 xl:col-span-4 space-y-6">
           <div className="bg-[#162035] p-8 rounded-[3.5rem] border border-slate-700/30 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <Trophy size={20} className="text-amber-500" />
                  <h2 className="text-sm font-black uppercase text-white tracking-widest">Global Ranking</h2>
                </div>
                <button onClick={fetchStats} className="p-2 text-slate-500 hover:text-white"><RefreshCw size={14}/></button>
              </div>

              <div className="space-y-4">
                {leaderboard.map((u, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-[#0d121f] rounded-3xl border border-slate-800/80 group">
                    <div className="flex items-center gap-4">
                       <span className={`text-xs font-[1000] w-6 ${i===0?'text-amber-500':i===1?'text-slate-400':'text-slate-600'}`}>0{i+1}</span>
                       <div className="w-9 h-9 bg-slate-800 rounded-full flex items-center justify-center font-black text-xs text-white uppercase group-hover:bg-blue-600 transition-colors">
                         {(u.name || 'S')[0].toUpperCase()}
                       </div>
                       <div>
                          <p className="text-[11px] font-black text-white uppercase tracking-tight">{u.name || 'Scholar'}</p>
                          <p className="text-[9px] font-bold text-slate-600 uppercase tracking-widest">Global Scholar</p>
                       </div>
                    </div>
                    <p className="text-xs font-black text-slate-400">{Math.floor(u.dur/60)}m</p>
                  </div>
                ))}
              </div>

              <button className="w-full mt-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all">
                 View Full Hall of Fame
              </button>
           </div>

           <div className="bg-[#0d121f] p-8 rounded-[3rem] border border-slate-800/80 flex items-center gap-6">
              <div className="w-16 h-16 bg-blue-600/10 rounded-3xl flex items-center justify-center text-blue-500 shrink-0">
                <BarChart3 size={28} />
              </div>
              <div>
                <p className="text-sm font-black text-white uppercase">Weekly Goal</p>
                <div className="mt-2 w-full bg-slate-900 h-2 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-600 rounded-full" style={{width: '65%'}}></div>
                </div>
                <p className="text-[10px] text-slate-500 font-bold uppercase mt-2">6.5h / 10h Completed</p>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
}
