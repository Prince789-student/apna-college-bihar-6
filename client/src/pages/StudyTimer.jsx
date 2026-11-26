import SEO from '../components/SEO';
import React, { useState, useEffect, useRef } from 'react';
import {
  Play, Pause, Square, BookOpen,
  BarChart3, Trophy, Clock, Target,
  ChevronRight, CalendarDays, RefreshCw
} from 'lucide-react';
import { db } from '../firebase';
import { useAuth } from '../context/AuthContext';
import { useStudy } from '../context/StudyContext';
import {
  collection, addDoc, query, where,
  getDocs, serverTimestamp, limit, onSnapshot
} from 'firebase/firestore';
import toast from 'react-hot-toast';

export default function StudyTimer() {
  const { user } = useAuth();
  const { setTimerActive } = useStudy();
  const [active, setActive] = useState(false);
  const [time, setTime] = useState(0);
  const [subjects, setSubjects] = useState(['Physics', 'Chemistry', 'Maths', 'CS']);
  const [selSub, setSelSub] = useState('Physics');
  const [leaderboard, setLeaderboard] = useState([]);
  const [showAllLeaderboard, setShowAllLeaderboard] = useState(false);
  const [stats, setStats] = useState({ daily: 0, weekly: 0, monthly: 0 });
  const timerRef = useRef(null);

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

  const fetchStats = async () => {
    if (!user) return;
    try {
      const now = new Date();
      const day = new Date(new Date(now).setHours(0, 0, 0, 0));
      const week = new Date(new Date().setDate(now.getDate() - 7));

      const qDay = query(collection(db, 'StudySessions'), where('userId', '==', user.uid), where('createdAt', '>=', day));
      const snapDay = await getDocs(qDay);
      const dTot = snapDay.docs.reduce((acc, d) => acc + (d.data().duration || 0), 0);

      const qWeek = query(collection(db, 'StudySessions'), where('userId', '==', user.uid), where('createdAt', '>=', week));
      const snapWeek = await getDocs(qWeek);
      const wTot = snapWeek.docs.reduce((acc, d) => acc + (d.data().duration || 0), 0);

      setStats({ daily: dTot, weekly: wTot, monthly: wTot * 4 });
    } catch (e) {
      console.error(e);
    }
  };

  const save = async () => {
    if (time < 10) {
      toast.error('Session must be greater than 10 seconds');
      setActive(false);
      setTimerActive(false);
      setTime(0);
      return;
    }
    if (!user) {
      toast.success('Session finished! Login to save your study time.');
      setActive(false);
      setTimerActive(false);
      setTime(0);
      return;
    }
    try {
      await addDoc(collection(db, 'StudySessions'), {
        userId: user.uid,
        userName: user.name || user.displayName || 'Scholar',
        subject: selSub,
        duration: time,
        createdAt: serverTimestamp()
      });
      toast.success('Study session saved!');
      setActive(false);
      setTimerActive(false);
      setTime(0);
      fetchStats();
    } catch (e) {
      console.error(e);
      toast.error('Could not save session');
    }
  };

  useEffect(() => {
    fetchStats();
    const q = query(collection(db, 'StudySessions'), limit(100));
    const unsub = onSnapshot(q, (snap) => {
      const agg = {};
      snap.docs.forEach(d => {
        const { userName, duration } = d.data();
        const cleanName = userName || 'Scholar';
        agg[cleanName] = (agg[cleanName] || 0) + (duration || 0);
      });
      const sorted = Object.entries(agg)
        .map(([n, d]) => ({ name: n, dur: d }))
        .sort((a, b) => b.dur - a.dur)
        .slice(0, 15);
      setLeaderboard(sorted);
    }, () => {});
    return unsub;
  }, [user]);

  const weeklyHours = (stats.weekly / 3600).toFixed(1);
  const weeklyGoalPct = Math.min(100, Math.round((stats.weekly / (10 * 3600)) * 100));
  const displayedLeaders = showAllLeaderboard ? leaderboard : leaderboard.slice(0, 5);

  return (
    <div className="max-w-6xl mx-auto pb-24 space-y-8 lg:space-y-12">
      <SEO title="Study Timer | Apna College Bihar" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

        {/* Timer Core */}
        <div className="lg:col-span-12 xl:col-span-8 space-y-8">
          <div className="bg-white p-8 md:p-14 rounded-3xl md:rounded-[3rem] border border-slate-200/80 shadow-xl relative overflow-hidden flex flex-col items-center">
            <div className="flex items-center gap-3 mb-8 px-5 py-2 bg-slate-100 rounded-xl border border-slate-200/70">
              <Target size={14} className="text-orange-500" />
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-600">Current Objective: <span className="text-slate-900">{selSub}</span></p>
            </div>

            <h1 className="text-6xl sm:text-8xl md:text-9xl font-[1000] text-slate-900 tracking-tighter transition-all tabular-nums leading-none">
              {fmt(time)}
            </h1>

            <div className="mt-10 flex gap-3 w-full max-w-sm">
              {!active ? (
                <button type="button" onClick={() => { setActive(true); setTimerActive(true); }}
                  className="flex-1 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2.5 cursor-pointer">
                  <Play size={18} fill="currentColor" /> Initialize Focus
                </button>
              ) : (
                <>
                  <button type="button" onClick={() => { setActive(false); setTimerActive(false); }}
                    className="flex-1 py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-black text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 cursor-pointer">
                    <Pause size={18} fill="currentColor" /> Suspend
                  </button>
                  <button type="button" onClick={() => { save(); setTimerActive(false); }}
                    className="flex-1 py-4 bg-red-600 hover:bg-red-700 text-white rounded-2xl font-black text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 cursor-pointer">
                    <Square size={18} fill="currentColor" /> Finish
                  </button>
                </>
              )}
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-2">
              {subjects.map(s => (
                <button type="button" key={s} onClick={() => !active && setSelSub(s)}
                  className={`px-4 py-2.5 rounded-xl text-[11px] font-bold uppercase transition-all cursor-pointer ${selSub === s ? 'bg-slate-900 text-white shadow-md' : 'bg-slate-100 text-slate-600 hover:text-slate-900'}`}>
                  {s}
                </button>
              ))}
              <button type="button" onClick={() => { const n = prompt('New Subject:'); if (n && n.trim()) setSubjects([...subjects, n.trim()]); }} className="px-4 py-2.5 bg-slate-200 rounded-xl text-[11px] font-bold text-slate-700 hover:bg-slate-300 transition-all cursor-pointer">+</button>
            </div>
          </div>

          {/* Personal Stats Hub */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { label: 'Daily Session', val: fmt(stats.daily), icon: Clock },
              { label: 'Weekly Total', val: fmt(stats.weekly), icon: CalendarDays },
              { label: 'Active Subject', val: selSub, icon: BookOpen },
            ].map(s => (
              <div key={s.label} className="bg-white p-6 rounded-3xl border border-slate-200/80 group hover:border-blue-500/30 transition-all">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-slate-100 rounded-2xl text-slate-600 group-hover:text-blue-600 transition-colors">
                    <s.icon size={20} />
                  </div>
                  <ChevronRight size={14} className="text-slate-400" />
                </div>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">{s.label}</p>
                <p className="text-xl font-black text-slate-900 truncate">{s.val}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Global Leaderboard */}
        <div className="lg:col-span-12 xl:col-span-4 space-y-6">
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2.5">
                <Trophy size={20} className="text-amber-500" />
                <h2 className="text-sm font-black uppercase text-slate-900 tracking-widest">Global Ranking</h2>
              </div>
              <button type="button" onClick={fetchStats} className="p-2 text-slate-500 hover:text-slate-900 cursor-pointer" aria-label="Refresh Stats"><RefreshCw size={14} /></button>
            </div>

            <div className="space-y-3">
              {displayedLeaders.length === 0 ? (
                <p className="text-xs text-slate-500 text-center py-4 font-medium">No sessions logged yet.</p>
              ) : displayedLeaders.map((u, i) => (
                <div key={i} className="flex items-center justify-between p-3.5 bg-slate-50 rounded-2xl border border-slate-200/70 group">
                  <div className="flex items-center gap-3 min-w-0">
                    <span className={`text-xs font-[1000] w-6 shrink-0 ${i === 0 ? 'text-amber-500' : i === 1 ? 'text-slate-500' : 'text-slate-600'}`}>0{i + 1}</span>
                    <div className="w-9 h-9 bg-slate-800 rounded-xl flex items-center justify-center font-black text-xs text-white uppercase group-hover:bg-blue-600 transition-colors shrink-0">
                      {(u.name || 'S')[0].toUpperCase()}
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-black text-slate-900 uppercase tracking-tight truncate">{u.name || 'Scholar'}</p>
                      <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">BEU Scholar</p>
                    </div>
                  </div>
                  <p className="text-xs font-black text-slate-600 shrink-0">{Math.floor(u.dur / 60)}m</p>
                </div>
              ))}
            </div>

            {leaderboard.length > 5 && (
              <button type="button" onClick={() => setShowAllLeaderboard(!showAllLeaderboard)} className="w-full mt-5 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-900 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all cursor-pointer">
                {showAllLeaderboard ? 'Show Top 5' : 'View Full Hall of Fame'}
              </button>
            )}
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200/80 flex items-center gap-5">
            <div className="w-14 h-14 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-600 shrink-0">
              <BarChart3 size={26} />
            </div>
            <div className="flex-1">
              <p className="text-sm font-black text-slate-900 uppercase">Weekly Goal</p>
              <div className="mt-2 w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div className="h-full bg-blue-600 rounded-full transition-all" style={{ width: `${weeklyGoalPct}%` }}></div>
              </div>
              <p className="text-[10px] text-slate-500 font-bold uppercase mt-2">{weeklyHours}h / 10h Completed</p>
            </div>
          </div>
        </div>

      </div>

      {/* ── Educational SEO Content ── */}
      <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200/50 mt-12 max-w-4xl mx-auto prose prose-slate max-w-none shadow-sm mb-12 text-left">
        <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tighter mb-4">Master Your Engineering Studies with the Pomodoro Timer</h2>
        <p>
          B.Tech programs at Bihar Engineering University (BEU) require consistent focus, especially during mid-semester and end-semester examinations. Our <strong>Study Timer &amp; Global Leaderboard</strong> uses the Pomodoro Technique to help engineering students structure deep study sessions and track subject-wise progress.
        </p>

        <h3 className="text-xl font-bold mt-8 mb-4">What is the Pomodoro Technique?</h3>
        <p>
          The Pomodoro Technique breaks intense study sessions into focused intervals of 25 minutes separated by short 5-minute breaks. After four intervals, a longer 15 to 30-minute break helps maintain concentration across heavy engineering subjects like Data Structures, Thermodynamics, or Network Theory.
        </p>

        <h3 className="text-xl font-bold mt-8 mb-4">Tracking Your Academic Progress</h3>
        <p>
          Select your active subject before starting the timer to record daily and weekly totals. Combine this timer with our <strong>BEU Notes</strong> and <strong>Previous Year Question Papers (PYQs)</strong> for organized exam preparation.
        </p>
      </div>
    </div>
  );
}
