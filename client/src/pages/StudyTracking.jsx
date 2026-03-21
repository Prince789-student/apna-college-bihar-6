import React, { useState, useEffect, useRef } from 'react';
import { 
  Timer as TimerIcon, Play, Pause, Square, Trophy, Users, 
  Flame, Calendar, BarChart2, Hash, CheckSquare, 
  Zap, Clock, Target, ChevronRight, Activity, Save
} from 'lucide-react';
import { doc, updateDoc, increment, addDoc, collection, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function StudyTracking() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0); 
  const [isSaving, setIsSaving] = useState(false);
  const [todayTotal, setTodayTotal] = useState(0);
  const [userData, setUserData] = useState(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (user) fetchUserStats();
  }, [user]);

  const fetchUserStats = async () => {
    try {
      const userRef = doc(db, 'Users', user.uid);
      const snap = await getDoc(userRef);
      if (snap.exists()) {
        const data = snap.data();
        setUserData(data);
        setTodayTotal(data.todayStudyTime || 0);
      }
    } catch (err) { console.error(err); }
  };

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime(t => t + 1);
        setTodayTotal(t => t + 1);
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const formatTime = (s) => {
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = s % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
  };

  const handleStop = async () => {
    if (time < 5) {
      setIsRunning(false);
      setTime(0);
      toast.error('Session too short to sync');
      return;
    }

    setIsRunning(false);
    setIsSaving(true);
    try {
      const today = new Date().toISOString().split('T')[0];
      
      // 1. Create Session Log
      await addDoc(collection(db, 'StudySessions'), {
        userId: user.uid,
        duration: time,
        date: today,
        createdAt: new Date().toISOString()
      });

      // 2. Global Sync (Update Users Collection)
      const userRef = doc(db, 'Users', user.uid);
      await updateDoc(userRef, {
        todayStudyTime: increment(time),
        totalStudyTime: increment(time)
      });

      toast.success(`Vector Synced: ${Math.floor(time / 60)}m Logged`);
      setTime(0);
      fetchUserStats();
    } catch (err) {
      toast.error('Sync Intersection Failed');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto space-y-10 animate-in fade-in duration-1000 pb-20 px-4 md:px-0">
      
      {/* ─── HEADER ──────────────────────────────────────────────── */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-10">
         <div className="space-y-1.5 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-[1000] tracking-tighter uppercase text-white leading-none">
              Study <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 font-black">Protocol</span>
            </h1>
            <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.4em]">Integrated Focus Engine / Node: {user?.displayName?.split(' ')[0] || 'User'}</p>
         </div>
         <div className="flex items-center gap-4 bg-[#0d121f] rounded-[2rem] border border-slate-800 p-6 shadow-2xl group">
            <div className="p-4 bg-orange-600/10 text-orange-500 rounded-2xl group-hover:scale-110 transition-transform"><Flame size={24} /></div>
            <div>
               <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-none">Global Streak</p>
               <p className="text-2xl font-[1000] text-white tracking-tighter mt-1 uppercase leading-none">ACTIVE PROTOCOL</p>
            </div>
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* ─── LEFT COLUMN: STATS ───────────────────────────────── */}
        <div className="lg:col-span-3 space-y-8 order-2 lg:order-1">
           <div className="bg-[#0d121f] p-10 rounded-[3.5rem] border border-slate-800 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-full blur-2xl"></div>
              <div className="space-y-8 relative z-10 text-center">
                 <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-blue-500 to-indigo-800 flex items-center justify-center font-[1000] text-3xl text-white shadow-2xl mx-auto border-4 border-white/5">{user?.displayName?.[0] || 'P'}</div>
                 <div className="space-y-2">
                    <p className="text-[9px] font-black text-slate-600 uppercase tracking-widest">Active Identity</p>
                    <h4 className="text-xl font-black text-white uppercase tracking-tighter">{user?.displayName || 'Prince Kumar'}</h4>
                 </div>
                 <div className="grid grid-cols-1 gap-4 text-left pt-6">
                    <div className="p-5 bg-slate-900/50 rounded-3xl border border-slate-800/80 flex items-center justify-between shadow-lg">
                       <Clock size={16} className="text-blue-500" />
                       <span className="text-sm font-black text-white font-mono uppercase tracking-tighter">Day: {formatTime(todayTotal)}</span>
                    </div>
                    <div className="p-5 bg-slate-900/50 rounded-3xl border border-slate-800/80 flex items-center justify-between shadow-lg">
                       <Trophy size={16} className="text-amber-500" />
                       <span className="text-sm font-black text-white uppercase tracking-tighter">Total: {((userData?.totalStudyTime || 0)/3600).toFixed(1)}H</span>
                    </div>
                 </div>
              </div>
           </div>

           <div className="bg-[#0d121f] p-8 rounded-[2.5rem] border border-slate-800 shadow-2xl group">
              <div className="flex items-center gap-3 mb-6">
                 <Activity size={18} className="text-sky-400 group-hover:scale-110 transition-transform" />
                 <h3 className="text-[10px] font-black uppercase text-white tracking-widest">Cognitive State</h3>
              </div>
              <div className="space-y-4">
                 <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden">
                    <div className="h-full bg-sky-500 shadow-[0_0_15px_rgba(14,165,233,0.4)] transition-all duration-1000" style={{width: isRunning ? '98%' : '20%'}}></div>
                 </div>
                 <p className="text-[9px] font-bold text-slate-500 uppercase flex justify-between"><span>Focus Saturation</span> <span>{isRunning ? '98%' : '20%'}</span></p>
              </div>
           </div>
        </div>

        {/* ─── CENTER COLUMN: TIMER ──────────────────────────────── */}
        <div className="lg:col-span-9 space-y-8 order-1 lg:order-2">
           <div className="bg-[#0d121f] rounded-[4.5rem] border border-slate-800 p-10 md:p-14 relative overflow-hidden shadow-2xl text-center flex flex-col items-center justify-center min-h-[550px] group">
              <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none group-hover:bg-blue-600/10 transition-all"></div>
              
              <div className="relative z-10 space-y-12 w-full max-w-2xl">
                 <div className="space-y-4">
                    <div className="inline-flex items-center gap-3 px-6 py-2.5 bg-blue-600/10 border border-blue-500/20 rounded-full text-blue-400 font-[1000] text-[10px] uppercase tracking-widest shadow-xl">
                       <Sparkles size={14} className="fill-blue-400" /> Neural Sync Active
                    </div>
                    <h2 className="text-2xl md:text-3xl font-[1000] text-white uppercase tracking-tighter">Scholar Intel Protocol</h2>
                    <p className="text-slate-500 text-sm font-bold uppercase tracking-widest leading-relaxed max-w-md mx-auto">
                      "Stay focused, {user?.displayName?.split(' ')[0] || 'Scholar'}. You've got this!"
                    </p>
                 </div>

                 {/* Timer Display */}
                 <div className="relative inline-block py-16 px-12 md:py-20 md:px-24 bg-black/40 rounded-[5rem] border-2 border-slate-800 shadow-inner group/timer">
                    <div className="absolute inset-0 bg-blue-600/5 blur-3xl rounded-[5rem] opacity-0 group-hover/timer:opacity-100 transition-opacity"></div>
                    <div className="relative z-10 text-6xl md:text-9xl font-[1000] text-white font-mono tracking-tighter leading-none shadow-2xl text-shadow-blue select-none">
                       {formatTime(time)}
                    </div>
                 </div>

                 <div className="flex flex-wrap items-center justify-center gap-8">
                    {!isRunning ? (
                       <button onClick={() => setIsRunning(true)} className="px-16 py-8 bg-blue-600 hover:bg-blue-500 text-white rounded-[2.5rem] font-[1000] text-sm uppercase tracking-[0.2em] shadow-2xl shadow-blue-900/40 active:scale-95 transition-all flex items-center gap-4">
                          <Play size={24} fill="currentColor" /> Initialize Protocol
                       </button>
                    ) : (
                       <button onClick={handleStop} disabled={isSaving} className="px-16 py-8 bg-rose-600/10 hover:bg-rose-600 text-rose-500 hover:text-white border-2 border-rose-500/20 rounded-[2.5rem] font-[1000] text-sm uppercase tracking-[0.2em] shadow-2xl active:scale-95 transition-all flex items-center gap-4">
                          {isSaving ? <Activity className="animate-spin" size={24} /> : <Save size={24} />} 
                          {isSaving ? 'Synchronizing...' : 'Terminate & Save'}
                       </button>
                    )}
                 </div>

                 {isRunning && (
                    <div className="flex flex-col items-center gap-4 animate-pulse">
                       <p className="text-[9px] font-black text-blue-400 uppercase tracking-[0.4em]">Real-Time Data Streaming to Core Repository...</p>
                       <div className="flex gap-2">
                          {[1,2,3].map(i => <div key={i} className={`w-1.5 h-1.5 rounded-full bg-blue-500/50 animate-bounce`} style={{animationDelay: `${i*0.2}s`}} />)}
                       </div>
                    </div>
                 )}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
