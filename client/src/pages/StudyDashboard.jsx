import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  doc, getDoc, collection, query, where, getDocs,
  updateDoc, addDoc, deleteDoc, onSnapshot
} from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../context/AuthContext';
import { useStudy } from '../context/StudyContext';
import {
  Clock, Plus, Flame, Target,
  LayoutDashboard, Settings, Trash2, Trophy,
  ArrowRight, ClipboardList,
  CheckCircle2, Shield, Timer, AlertTriangle,
  BookOpen, Activity, Calendar
} from 'lucide-react';

// ── Helpers ──
function formatDuration(sec) {
  if (!sec || sec <= 0) return '0m';
  const h = Math.floor(sec / 3600);
  const m = Math.floor((sec % 3600) / 60);
  if (h > 0) return `${h}h ${m}m`;
  return `${m}m`;
}

const TABS = [
  { id: 'timer', label: 'Focus Zone', icon: <Clock size={15} /> },
  { id: 'overview', label: 'Dashboard', icon: <LayoutDashboard size={15} /> },
  { id: 'todo', label: 'Mission Plan', icon: <ClipboardList size={15} /> }
];

export default function StudyDashboard() {
  const { user, ROLES } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [tab, setTab] = useState(location.state?.tab || 'timer');
  const todayStr = new Date().toLocaleDateString('en-CA');

  const {
    timerActive, setTimerActive,
    timerTime, setTimerTime,
    timerSubject, setTimerSubject,
    customMinutes, setCustomMinutes,
    customSeconds, setCustomSeconds,
    timerMode, setTimerMode,
    saveGlobalSession
  } = useStudy();

  const [userData, setUserData] = useState(null);
  const [subjects, setSubjects] = useState([]);
  const [sessions, setSessions] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [goals, setGoals] = useState({ daily: 2, weekly: 14, monthly: 60 });
  const [showGoalModal, setShowGoalModal] = useState(false);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    if (!user) return;
    const fetchStatic = async () => {
      try {
        const uSnap = await getDoc(doc(db, 'users', user.uid));
        if (uSnap.exists()) {
          const d = uSnap.data();
          setUserData(d);
          setGoals({ daily: d?.dailyGoal || 2, weekly: d?.weeklyGoal || 14, monthly: d?.monthlyGoal || 60 });
        }
        const subSnap = await getDocs(query(collection(db, 'Subjects'), where('userId', '==', user.uid)));
        setSubjects(subSnap.docs.map(d => ({ id: d.id, ...d.data() })));
      } catch (e) { console.error(e); }
      setLoading(false);
    };
    fetchStatic();
  }, [user]);

  useEffect(() => {
    if (!user) return;
    const sessQuery = query(collection(db, 'StudySessions'), where('userId', '==', user.uid));
    const unsubSess = onSnapshot(sessQuery, (snap) => {
      setSessions(snap.docs.map(d => d.data()));
    });
    const taskQuery = query(collection(db, 'Tasks'), where('userId', '==', user.uid), where('date', '==', todayStr));
    const unsubTask = onSnapshot(taskQuery, (snap) => {
      setTasks(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    });
    return () => { unsubSess(); unsubTask(); };
  }, [user, todayStr]);

  const stats = useMemo(() => {
    const today = sessions.filter(s => s.date === todayStr).reduce((a, s) => a + (Number(s.duration) || 0), 0);
    const last7 = Array.from({ length: 7 }, (_, i) => {
      const d = new Date(); d.setDate(d.getDate() - i);
      return d.toLocaleDateString('en-CA');
    });
    const weekly = sessions.filter(s => last7.includes(s.date)).reduce((a, s) => a + (Number(s.duration) || 0), 0);
    const curM = new Date().getMonth(), curY = new Date().getFullYear();
    const monthly = sessions.filter(s => {
      const d = new Date(s.date);
      return d.getMonth() === curM && d.getFullYear() === curY;
    }).reduce((a, s) => a + (Number(s.duration) || 0), 0);

    const heatmap = Array.from({ length: 7 }, (_, i) => {
      const d = new Date(); d.setDate(d.getDate() - (6 - i));
      const dStr = d.toLocaleDateString('en-CA');
      return { 
        day: d.toLocaleDateString('en-US', { weekday: 'short' }), 
        sec: sessions.filter(s => s.date === dStr).reduce((a, s) => a + (Number(s.duration) || 0), 0), 
        isToday: dStr === todayStr 
      };
    });

    const subjectBreakdown = subjects.map(sub => ({
      name: sub.subjectName,
      sec: sessions.filter(s => s.subject === sub.subjectName).reduce((a, s) => a + (Number(s.duration) || 0), 0)
    })).filter(s => s.sec > 0).sort((a, b) => b.sec - a.sec);

    return { today, weekly, monthly, heatmap, subjectBreakdown };
  }, [sessions, subjects, todayStr]);

  const getProgress = (sec, g) => (!g || g <= 0) ? 0 : Math.min(100, (sec / (g * 3600)) * 100).toFixed(0);

  const saveGoals = async () => {
    try {
      await updateDoc(doc(db, 'users', user.uid), { dailyGoal: Number(goals.daily), weeklyGoal: Number(goals.weekly), monthlyGoal: Number(goals.monthly) });
      setShowGoalModal(false);
    } catch (e) { console.error(e); }
  };

  const addTask = async () => {
    if (!newTask.trim()) return;
    try {
      await addDoc(collection(db, 'Tasks'), { 
        userId: user.uid, text: newTask.trim(), 
        subject: 'OTHERS', done: false, 
        date: todayStr, createdAt: new Date().toISOString() 
      });
      setNewTask('');
    } catch (e) { console.error(e); }
  };

  if (loading) return <div className="flex justify-center p-20"><div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div></div>;

  return (
    <div className="max-w-5xl mx-auto space-y-6 pb-20 px-2 md:px-0">
      
      {/* Top Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-[2rem] border border-slate-200/60 shadow-sm flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-orange-500/10 text-orange-500 rounded-2xl flex items-center justify-center border border-orange-500/10"><Flame size={24} fill="currentColor" /></div>
            <div><p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Current Streak</p><p className="text-2xl font-black text-slate-900 leading-none">{userData?.streak || 0} <span className="text-xs text-slate-500 font-bold">Days</span></p></div>
          </div>
          <button onClick={() => setShowGoalModal(true)} className="p-2 bg-slate-50 text-slate-400 hover:text-slate-900 rounded-xl"><Settings size={18} /></button>
        </div>
        <div className="bg-slate-900 p-6 rounded-[2rem] border border-slate-800 shadow-xl flex items-center gap-4 group cursor-pointer" onClick={() => setTab('timer')}>
           <div className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform"><Clock size={24} /></div>
           <div className="flex-1"><p className="text-[10px] font-black text-blue-400 uppercase tracking-widest leading-none mb-1">Focus Protocol</p><p className="text-xl font-black text-white leading-none">Initialize Zone</p></div>
           <ArrowRight size={20} className="text-slate-600 group-hover:translate-x-1 transition-all" />
        </div>
        <div className="bg-white p-6 rounded-[2rem] border border-slate-200/60 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-emerald-500/10 text-emerald-600 rounded-2xl flex items-center justify-center border border-emerald-500/10"><Activity size={24} /></div>
          <div><p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Today's Focus</p><p className="text-2xl font-black text-slate-900 leading-none">{formatDuration(stats.today)}</p></div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex gap-2 bg-white/80 backdrop-blur-md p-2 rounded-[2.5rem] border border-slate-200 shadow-sm overflow-x-auto no-scrollbar">
        {TABS.map(t => (
          <button key={t.id} onClick={() => setTab(t.id)}
            className={`flex-1 flex min-w-fit items-center justify-center gap-3 px-8 py-4 rounded-[1.5rem] text-[10px] font-black uppercase tracking-widest transition-all ${tab === t.id ? 'bg-slate-900 text-white shadow-2xl scale-[1.02]' : 'text-slate-500 hover:bg-slate-100'}`}>
            {t.icon} {t.label}
          </button>
        ))}
      </div>

      {/* Tab Content Display */}
      <div className="min-h-[500px]">
        {tab === 'timer' && (
          <div className="space-y-6 animate-in fade-in duration-500">
            <div className="bg-white p-12 md:p-24 rounded-[3.5rem] md:rounded-[5rem] border border-slate-200/80 shadow-2xl relative overflow-hidden flex flex-col items-center">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent pointer-events-none"></div>
              
              <div className="flex flex-col items-center gap-6 mb-12">
                <div className="flex gap-2 p-1.5 bg-slate-100/80 rounded-2xl border border-slate-200/50">
                  {['COUNTDOWN', 'STOPWATCH'].map(m => (
                    <button key={m} onClick={() => !timerActive && setTimerMode(m)} className={`px-6 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all ${timerMode === m ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-500 hover:text-slate-900'}`}>{m}</button>
                  ))}
                </div>
                <div className="flex items-center gap-3 px-6 py-3 bg-slate-100/50 rounded-2xl border border-slate-200/50">
                   <BookOpen size={16} className="text-blue-500" />
                   <select value={timerSubject} onChange={e => setTimerSubject(e.target.value)} disabled={timerActive} className="bg-transparent text-[10px] font-black uppercase tracking-widest text-slate-900 outline-none">
                     <option value="OTHERS">SELECT SUBJECT</option>
                     {subjects.map(s => <option key={s.id} value={s.subjectName}>{s.subjectName}</option>)}
                   </select>
                </div>
              </div>

              <h1 className="text-8xl md:text-[10rem] font-[1000] text-slate-900 tracking-tighter tabular-nums leading-none">
                {Math.floor(timerTime / 3600) > 0 ? `${Math.floor(timerTime / 3600).toString().padStart(2, '0')}:` : ''}
                {Math.floor((timerTime % 3600) / 60).toString().padStart(2, '0')}:
                {(timerTime % 60).toString().padStart(2, '0')}
              </h1>
              
              <div className="mt-16 w-full max-w-md space-y-8">
                {!timerActive ? (
                  <div className="space-y-8">
                    {timerMode === 'COUNTDOWN' && (
                      <div className="bg-slate-50/80 p-8 rounded-[2rem] border border-slate-200/50">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 text-center">Focus Duration Protocol</p>
                        <div className="flex items-center justify-center gap-6">
                           <div className="flex flex-col items-center">
                              <input type="number" min="0" max="599" value={customMinutes} onChange={e => setCustomMinutes(Math.max(0, parseInt(e.target.value) || 0))} className="w-24 bg-white border-2 border-slate-200 rounded-2xl p-4 text-center font-black text-3xl outline-none focus:border-blue-500" />
                              <span className="text-[9px] font-black text-slate-400 uppercase mt-2">Min</span>
                           </div>
                           <span className="text-3xl font-black text-slate-300">:</span>
                           <div className="flex flex-col items-center">
                              <input type="number" min="0" max="59" value={customSeconds} onChange={e => setCustomSeconds(Math.min(59, Math.max(0, parseInt(e.target.value) || 0)))} className="w-24 bg-white border-2 border-slate-200 rounded-2xl p-4 text-center font-black text-3xl outline-none focus:border-blue-500" />
                              <span className="text-[9px] font-black text-slate-400 uppercase mt-2">Sec</span>
                           </div>
                        </div>
                      </div>
                    )}
                    <div className="text-center space-y-4">
                      <p className="text-[10px] font-black text-blue-500 uppercase tracking-widest flex items-center justify-center gap-3"><Shield size={14} /> Focus Shield Active</p>
                      <button onClick={() => setTimerActive(true)} className="w-full py-7 bg-blue-600 hover:bg-blue-500 text-white rounded-[2.5rem] font-[1000] text-sm uppercase tracking-widest shadow-2xl active:scale-95 transition-all flex items-center justify-center gap-3">Initialize Focus <ArrowRight size={22} /></button>
                    </div>
                  </div>
                ) : (
                  <div className="flex gap-4">
                    <button onClick={() => setTimerActive(false)} className="flex-1 py-7 bg-white text-slate-400 rounded-[2.5rem] font-[1000] text-[10px] uppercase tracking-widest border-2 border-slate-100">Pause Mission</button>
                    <button onClick={() => saveGlobalSession()} className="flex-1 py-7 bg-red-600 text-white rounded-[2.5rem] font-[1000] text-[10px] uppercase tracking-widest shadow-2xl transition-all">Abort & Save</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {tab === 'overview' && (
          <div className="space-y-8 animate-in fade-in duration-500">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { label: 'Today Efficiency', sec: stats.today, goal: goals.daily, color: 'from-blue-600 to-indigo-600' },
                { label: 'Weekly Protocol', sec: stats.weekly, goal: goals.weekly, color: 'from-emerald-500 to-teal-500' },
                { label: 'Monthly Strategic', sec: stats.monthly, goal: goals.monthly, color: 'from-orange-500 to-amber-500' },
              ].map(({ label, sec, goal, color }) => (
                <div key={label} className="bg-white p-8 rounded-[2.5rem] border border-slate-200/60 shadow-sm space-y-6">
                  <div className="flex justify-between items-center"><span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{label}</span><span className="text-xs font-black text-slate-900">{getProgress(sec, goal)}%</span></div>
                  <p className="text-4xl font-[1000] text-slate-900 tracking-tighter">{formatDuration(sec)}</p>
                  <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden"><div className={`h-full bg-gradient-to-r ${color} rounded-full transition-all duration-1000`} style={{ width: `${getProgress(sec, goal)}%` }}></div></div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white p-10 rounded-[3rem] border border-slate-200/60 shadow-sm space-y-10">
                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-slate-900 flex items-center gap-3"><Calendar size={20} className="text-blue-500" /> Operational History</h3>
                <div className="flex items-end justify-between gap-4 h-40">
                  {stats.heatmap.map((d, i) => {
                    const maxH = Math.max(1, ...stats.heatmap.map(x => x.sec));
                    return (
                      <div key={i} className="flex flex-col items-center gap-3 flex-1 group relative">
                        <div className={`w-full rounded-t-2xl transition-all duration-700 ${d.isToday ? 'bg-blue-600 shadow-xl' : d.sec > 0 ? 'bg-slate-200' : 'bg-slate-50'}`} style={{ height: `${Math.max(8, (d.sec / maxH) * 100)}%` }}></div>
                        <span className={`text-[10px] font-black uppercase tracking-widest ${d.isToday ? 'text-blue-600' : 'text-slate-400'}`}>{d.day}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="bg-white p-10 rounded-[3rem] border border-slate-200/60 shadow-sm space-y-8">
                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-slate-900 flex items-center gap-3"><Activity size={20} className="text-orange-500" /> Focus Distribution</h3>
                <div className="space-y-6">
                  {stats.subjectBreakdown.length === 0 ? (
                    <div className="text-center py-16 flex flex-col items-center gap-4 text-slate-300"><BookOpen size={40} /><p className="text-[10px] font-black uppercase tracking-widest">Awaiting Mission Data</p></div>
                  ) : stats.subjectBreakdown.map(sub => (
                    <div key={sub.name} className="space-y-2">
                      <div className="flex justify-between items-center"><span className="text-[10px] font-black uppercase tracking-widest text-slate-700">{sub.name}</span><span className="text-[10px] font-black text-slate-400">{formatDuration(sub.sec)}</span></div>
                      <div className="w-full h-2 bg-slate-50 rounded-full overflow-hidden"><div className="h-full bg-slate-900 rounded-full transition-all duration-1000" style={{ width: `${(sub.sec / Math.max(1, stats.today)) * 100}%` }}></div></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {tab === 'todo' && (
          <div className="space-y-6 animate-in fade-in duration-500">
            <div className="bg-white p-10 rounded-[3rem] border border-slate-200/60 shadow-sm space-y-10">
              <div className="flex flex-col md:flex-row gap-4 items-end bg-slate-50 p-8 rounded-[2.5rem]">
                <div className="flex-1 w-full space-y-2">
                   <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Mission Objective</p>
                   <input value={newTask} onChange={e => setNewTask(e.target.value)} onKeyDown={e => e.key === 'Enter' && addTask()} placeholder="Define task goal..." className="w-full bg-white rounded-2xl px-6 py-5 text-sm font-bold outline-none shadow-sm" />
                </div>
                <button onClick={addTask} className="w-full md:w-24 h-16 bg-slate-900 text-white rounded-2xl flex items-center justify-center hover:bg-black transition-all shadow-2xl active:scale-95"><Plus size={28} /></button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tasks.length === 0 ? <div className="col-span-full text-center py-24 text-[10px] font-black text-slate-300 uppercase tracking-widest">No active objectives</div> : tasks.map(task => (
                  <div key={task.id} className={`flex items-center gap-5 p-6 rounded-[2rem] border-2 transition-all ${task.done ? 'bg-emerald-50/50 border-emerald-100' : 'bg-white border-slate-50 hover:border-slate-200 shadow-lg'}`}>
                    <button onClick={async () => await updateDoc(doc(db, 'Tasks', task.id), { done: !task.done })} className={`w-7 h-7 rounded-xl flex items-center justify-center transition-all ${task.done ? 'bg-emerald-500 text-white' : 'border-2 border-slate-200 text-transparent'}`}><CheckCircle2 size={18} /></button>
                    <div className="flex-1"><p className={`text-sm font-[1000] tracking-tight ${task.done ? 'text-slate-400 line-through' : 'text-slate-900'}`}>{task.text}</p></div>
                    <button onClick={async () => await deleteDoc(doc(db, 'Tasks', task.id))} className="text-slate-200 hover:text-red-500 p-2 transition-colors"><Trash2 size={18} /></button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Goal Modal */}
      {showGoalModal && (
        <div className="fixed inset-0 z-[500] flex items-center justify-center p-6 bg-slate-950/80 backdrop-blur-md">
          <div className="bg-white rounded-[4rem] p-12 w-full max-w-sm shadow-2xl space-y-10 animate-in zoom-in-95">
             <div className="text-center space-y-3"><div className="w-16 h-16 bg-blue-600/10 text-blue-600 rounded-[1.5rem] flex items-center justify-center mx-auto"><Settings size={32} /></div><h3 className="text-3xl font-[1000] text-slate-900 uppercase tracking-tighter">Strategic Goals</h3></div>
             <div className="space-y-6">
                {['daily', 'weekly', 'monthly'].map(t => (
                  <div key={t} className="space-y-2">
                    <p className="text-[9px] font-black uppercase tracking-widest text-slate-500">{t} Hours</p>
                    <input type="number" value={goals[t]} onChange={e => setGoals({ ...goals, [t]: e.target.value })} className="w-full bg-slate-50 rounded-2xl p-5 text-center font-black text-2xl outline-none" />
                  </div>
                ))}
             </div>
             <button onClick={saveGoals} className="w-full py-6 bg-slate-900 text-white rounded-[2rem] font-black uppercase tracking-widest shadow-xl">Update Strategy</button>
          </div>
        </div>
      )}
    </div>
  );
}
