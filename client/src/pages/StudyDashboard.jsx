import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  doc, getDoc, collection, query, where, getDocs,
  updateDoc, addDoc, deleteDoc, onSnapshot, orderBy
} from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../context/AuthContext';
import { useStudy } from '../context/StudyContext';
import {
  Clock, Plus, Flame, Target,
  BarChart3, Settings, Trash2, Trophy,
  ArrowRight, ClipboardList,
  CheckCircle2, Circle, Shield, Timer, AlertTriangle,
  BookOpen, Activity
} from 'lucide-react';

// ── Helpers ──
function formatDuration(sec) {
  if (!sec || sec <= 0) return '0 min';
  const h = Math.floor(sec / 3600);
  const m = Math.floor((sec % 3600) / 60);
  const s = sec % 60;
  if (h > 0) return `${h}h ${m}m`;
  if (m > 0) return `${m}m ${s}s`;
  return `${s}s`;
}

const TABS = [
  { id: 'timer', label: 'Focus Zone', icon: <Clock size={15} /> },
  { id: 'overview', label: 'Dashboard', icon: <BarChart3 size={15} /> },
  { id: 'todo', label: 'Mission Plan', icon: <ClipboardList size={15} /> },
  { id: 'achievements', label: 'Ranking', icon: <Trophy size={15} /> },
];

export default function StudyDashboard() {
  const { user, ROLES } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [tab, setTab] = useState(location.state?.tab || 'timer');
  const todayStr = new Date().toLocaleDateString('en-CA'); // YYYY-MM-DD local

  const {
    timerActive, setTimerActive,
    timerTime, setTimerTime,
    timerSubject, setTimerSubject,
    customMinutes, setCustomMinutes,
    timerMode, setTimerMode,
    saveGlobalSession
  } = useStudy();

  const [userData, setUserData] = useState(null);
  const [subjects, setSubjects] = useState([]);
  const [sessions, setSessions] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [goals, setGoals] = useState({ daily: 0, weekly: 0, monthly: 0 });
  const [showGoalModal, setShowGoalModal] = useState(false);
  const [newTask, setNewTask] = useState('');
  const [taskSub, setTaskSub] = useState('');

  // 1. Fetch User Data & Subjects (Static/One-time)
  useEffect(() => {
    if (!user) return;
    const fetchBase = async () => {
      const uSnap = await getDoc(doc(db, 'users', user.uid));
      if (uSnap.exists()) {
        const d = uSnap.data();
        setUserData(d);
        setGoals({ daily: d?.dailyGoal || 2, weekly: d?.weeklyGoal || 14, monthly: d?.monthlyGoal || 60 });
      }
      const subSnap = await getDocs(query(collection(db, 'Subjects'), where('userId', '==', user.uid)));
      setSubjects(subSnap.docs.map(d => ({ id: d.id, ...d.data() })));
      setLoading(false);
    };
    fetchBase();
  }, [user]);

  // 2. Real-time Sessions Sync (For live Overview updates)
  useEffect(() => {
    if (!user) return;
    const sessQuery = query(collection(db, 'StudySessions'), where('userId', '==', user.uid));
    const unsub = onSnapshot(sessQuery, (snap) => {
      const data = snap.docs.map(d => d.data());
      setSessions(data);
    });
    return () => unsub();
  }, [user]);

  // 3. Real-time Tasks Sync
  useEffect(() => {
    if (!user) return;
    const taskQuery = query(collection(db, 'Tasks'), where('userId', '==', user.uid), where('date', '==', todayStr));
    const unsub = onSnapshot(taskQuery, (snap) => {
      setTasks(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    });
    return () => unsub();
  }, [user, todayStr]);

  // Calculations
  const todaySec = sessions.filter(s => s.date === todayStr).reduce((a, s) => a + (s.duration || 0), 0);
  const last7Days = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(); d.setDate(d.getDate() - i);
    return d.toLocaleDateString('en-CA');
  });
  const weeklySec = sessions.filter(s => last7Days.includes(s.date)).reduce((a, s) => a + (s.duration || 0), 0);
  
  const curM = new Date().getMonth(), curY = new Date().getFullYear();
  const monthlySec = sessions.filter(s => {
    const d = new Date(s.date);
    return d.getMonth() === curM && d.getFullYear() === curY;
  }).reduce((a, s) => a + (s.duration || 0), 0);

  const heatmap = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(); d.setDate(d.getDate() - (6 - i));
    const dStr = d.toLocaleDateString('en-CA');
    return { 
      dStr, 
      day: d.toLocaleDateString('en-US', { weekday: 'short' }), 
      sec: sessions.filter(s => s.date === dStr).reduce((a, s) => a + (s.duration || 0), 0), 
      isToday: dStr === todayStr 
    };
  });
  const maxH = Math.max(1, ...heatmap.map(d => d.sec));

  // Subject-wise Breakdown
  const subjectFocus = subjects.map(sub => ({
    name: sub.subjectName,
    sec: sessions.filter(s => s.subject === sub.subjectName).reduce((a, s) => a + (s.duration || 0), 0)
  })).sort((a, b) => b.sec - a.sec).filter(s => s.sec > 0);

  const getProgress = (sec, g) => (!g || g <= 0) ? 0 : Math.min(100, (sec / (g * 3600)) * 100).toFixed(0);

  const saveGoals = async () => {
    await updateDoc(doc(db, 'users', user.uid), { dailyGoal: Number(goals.daily), weeklyGoal: Number(goals.weekly), monthlyGoal: Number(goals.monthly) });
    setShowGoalModal(false);
  };

  const addTask = async () => {
    if (!newTask.trim()) return;
    await addDoc(collection(db, 'Tasks'), { 
      userId: user.uid, text: newTask.trim(), 
      subject: taskSub.trim() || 'OTHERS', done: false, 
      date: todayStr, createdAt: new Date().toISOString() 
    });
    setNewTask('');
  };

  if (loading) return <div className="flex justify-center p-20"><div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div></div>;

  return (
    <div className="max-w-5xl mx-auto space-y-6 pb-20 px-2 md:px-0">
      {/* Top Stats Bar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-[2rem] border border-slate-200/60 shadow-sm flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-orange-500/10 text-orange-500 rounded-2xl flex items-center justify-center border border-orange-500/10"><Flame size={24} fill="currentColor" /></div>
            <div><p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Streak</p><p className="text-2xl font-black text-slate-900 leading-none">{userData?.streak || 0} <span className="text-xs text-slate-500">Days</span></p></div>
          </div>
          <button onClick={() => setShowGoalModal(true)} className="p-2 bg-slate-100 rounded-xl text-slate-400 hover:text-slate-900 transition-all"><Settings size={18} /></button>
        </div>
        <div className="bg-slate-900 p-5 rounded-[2rem] border border-slate-800 shadow-xl flex items-center gap-4 group cursor-pointer" onClick={() => setTab('timer')}>
           <div className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform"><Clock size={24} /></div>
           <div className="flex-1"><p className="text-[10px] font-black text-blue-400 uppercase tracking-widest leading-none mb-1">Focus Protocol</p><p className="text-xl font-black text-white leading-none">Initialize Zone</p></div>
           <ArrowRight size={20} className="text-slate-600 group-hover:text-white transition-colors" />
        </div>
        <div className="bg-white p-5 rounded-[2rem] border border-slate-200/60 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-emerald-500/10 text-emerald-600 rounded-2xl flex items-center justify-center border border-emerald-500/10"><Activity size={24} /></div>
          <div><p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Today's Focus</p><p className="text-2xl font-black text-slate-900 leading-none">{formatDuration(todaySec)}</p></div>
        </div>
      </div>

      {/* Tabs Menu */}
      <div className="flex gap-2 bg-white/80 backdrop-blur-md p-2 rounded-[2.5rem] border border-slate-200 shadow-sm overflow-x-auto no-scrollbar">
        {TABS.map(t => (
          <button key={t.id} onClick={() => setTab(t.id)}
            className={`flex-1 min-w-fit flex items-center justify-center gap-3 px-8 py-4 rounded-[1.5rem] text-[10px] font-black uppercase tracking-widest transition-all ${tab === t.id ? 'bg-slate-900 text-white shadow-2xl' : 'text-slate-500 hover:bg-slate-100'}`}>
            {t.icon} {t.label}
          </button>
        ))}
        {user?.role === ROLES.SUPER_ADMIN && (
          <button onClick={() => navigate('/dashboard/admin')} className="flex items-center justify-center gap-3 px-8 py-4 rounded-[1.5rem] text-[10px] font-black uppercase tracking-widest text-red-500 hover:bg-red-50/50 transition-all border border-transparent hover:border-red-100">
            <Shield size={15} /> Admin Ops
          </button>
        )}
      </div>

      {/* Tab Content */}
      <div className="min-h-[400px]">
        {tab === 'timer' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-white p-10 md:p-20 rounded-[3rem] md:rounded-[4rem] border border-slate-200/80 shadow-2xl relative overflow-hidden flex flex-col items-center">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent pointer-events-none"></div>
              <div className="flex flex-col items-center gap-6 mb-10">
                <div className="flex gap-2 p-1.5 bg-slate-100/80 rounded-2xl border border-slate-200/50">
                  {['COUNTDOWN', 'STOPWATCH'].map(m => (
                    <button key={m} onClick={() => !timerActive && setTimerMode(m)} className={`px-6 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all ${timerMode === m ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-500 hover:text-slate-900'}`}>{m}</button>
                  ))}
                </div>
                <div className="flex items-center gap-3 px-6 py-2 bg-slate-100/50 rounded-full border border-slate-200/50">
                   <BookOpen size={14} className="text-blue-500" />
                   <select value={timerSubject} onChange={e => setTimerSubject(e.target.value)} disabled={timerActive} className="bg-transparent text-[10px] font-black uppercase tracking-widest text-slate-900 outline-none">
                     <option value="OTHERS">SELECT SUBJECT</option>
                     {subjects.map(s => <option key={s.id} value={s.subjectName}>{s.subjectName}</option>)}
                   </select>
                </div>
              </div>
              <h1 className="text-7xl md:text-[8rem] font-[1000] text-slate-900 tracking-tighter tabular-nums leading-none">
                {Math.floor(timerTime / 3600) > 0 ? `${Math.floor(timerTime / 3600).toString().padStart(2, '0')}:` : ''}
                {Math.floor((timerTime % 3600) / 60).toString().padStart(2, '0')}:
                {(timerTime % 60).toString().padStart(2, '0')}
              </h1>
              
              <div className="mt-12 w-full max-w-sm space-y-6">
                {!timerActive ? (
                  <div className="space-y-6">
                    {timerMode === 'COUNTDOWN' && (
                      <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200/50 flex items-center justify-between">
                        <div><p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Focus Target</p><p className="text-2xl font-black text-slate-900">{customMinutes} Minutes</p></div>
                        <input type="range" min="5" max="120" step="5" value={customMinutes} onChange={e => setCustomMinutes(parseInt(e.target.value))} className="w-32" />
                      </div>
                    )}
                    <div className="text-center space-y-4">
                      <p className="text-[10px] font-black text-blue-500 uppercase tracking-widest flex items-center justify-center gap-2"><Shield size={12} /> Focus Shield Active: No Tab Switching</p>
                      <button onClick={() => setTimerActive(true)} className="w-full py-6 bg-blue-600 hover:bg-blue-500 text-white rounded-[2rem] font-[1000] text-sm uppercase tracking-widest shadow-2xl active:scale-95 transition-all flex items-center justify-center gap-3">Initialize Focus <ArrowRight size={20} /></button>
                    </div>
                  </div>
                ) : (
                  <div className="flex gap-4">
                    <button onClick={() => setTimerActive(false)} className="flex-1 py-6 bg-orange-50 text-orange-600 rounded-[2rem] font-[1000] text-[10px] uppercase tracking-widest border border-orange-200">Pause</button>
                    <button onClick={() => saveGlobalSession()} className="flex-1 py-6 bg-red-600 text-white rounded-[2rem] font-[1000] text-[10px] uppercase tracking-widest shadow-xl">Abort & Save</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {tab === 'overview' && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { label: 'Today Progress', sec: todaySec, goal: goals.daily, color: 'from-blue-600 to-indigo-600' },
                { label: 'Weekly Performance', sec: weeklySec, goal: goals.weekly, color: 'from-emerald-500 to-teal-500' },
                { label: 'Monthly Summary', sec: monthlySec, goal: goals.monthly, color: 'from-orange-500 to-amber-500' },
              ].map(({ label, sec, goal, color }) => (
                <div key={label} className="bg-white p-6 rounded-[2rem] border border-slate-200/60 shadow-sm space-y-4">
                  <div className="flex justify-between items-center"><span className="text-[10px] font-black uppercase tracking-widest text-slate-500">{label}</span><span className="text-xs font-black text-slate-900">{getProgress(sec, goal)}%</span></div>
                  <p className="text-3xl font-black text-slate-900">{formatDuration(sec)}</p>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden"><div className={`h-full bg-gradient-to-r ${color} rounded-full transition-all duration-1000`} style={{ width: `${getProgress(sec, goal)}%` }}></div></div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200/60 shadow-sm space-y-8">
                <h3 className="text-sm font-black uppercase tracking-widest text-slate-900 flex items-center gap-3"><Calendar size={18} className="text-blue-500" /> Operational Efficiency</h3>
                <div className="flex items-end justify-between gap-4 h-32">
                  {heatmap.map(d => (
                    <div key={d.dStr} className="flex flex-col items-center gap-2 flex-1 group relative">
                      <div className={`w-full rounded-t-xl transition-all duration-700 ${d.isToday ? 'bg-blue-600 shadow-lg shadow-blue-500/30' : d.sec > 0 ? 'bg-slate-200' : 'bg-slate-50'}`} style={{ height: `${Math.max(5, (d.sec / maxH) * 100)}%` }}></div>
                      <span className={`text-[9px] font-black uppercase tracking-widest ${d.isToday ? 'text-blue-600' : 'text-slate-400'}`}>{d.day}</span>
                      {d.sec > 0 && <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[8px] font-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">{formatDuration(d.sec)}</div>}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200/60 shadow-sm space-y-6">
                <h3 className="text-sm font-black uppercase tracking-widest text-slate-900 flex items-center gap-3"><Activity size={18} className="text-orange-500" /> Strategic Distribution</h3>
                <div className="space-y-4">
                  {subjectFocus.length === 0 ? <p className="text-center py-10 text-[10px] font-black text-slate-400 uppercase tracking-widest">No mission data recorded</p> : subjectFocus.map(sub => (
                    <div key={sub.name} className="space-y-1.5">
                      <div className="flex justify-between items-center"><span className="text-[10px] font-black uppercase tracking-widest text-slate-700">{sub.name}</span><span className="text-[10px] font-bold text-slate-500">{formatDuration(sub.sec)}</span></div>
                      <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden"><div className="h-full bg-slate-900 rounded-full" style={{ width: `${(sub.sec / todaySec) * 100}%` }}></div></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {tab === 'todo' && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-200/60 shadow-sm space-y-8">
              <div className="flex flex-col md:flex-row gap-4 items-end">
                <div className="flex-1 w-full space-y-2">
                   <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Define Protocol Mission</p>
                   <input value={newTask} onChange={e => setNewTask(e.target.value)} onKeyDown={e => e.key === 'Enter' && addTask()} placeholder="Enter objective..." className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 text-sm font-bold outline-none focus:border-blue-500 transition-all" />
                </div>
                <button onClick={addTask} className="w-full md:w-20 h-14 bg-slate-900 text-white rounded-2xl flex items-center justify-center hover:bg-black transition-all shadow-xl active:scale-95"><Plus size={24} /></button>
              </div>
              <div className="space-y-3">
                {tasks.length === 0 ? <p className="text-center py-20 text-[10px] font-black text-slate-400 uppercase tracking-widest">Awaiting Objectives...</p> : tasks.map(task => (
                  <div key={task.id} className={`flex items-center gap-4 p-5 rounded-2xl border transition-all ${task.done ? 'bg-emerald-50 border-emerald-100' : 'bg-white border-slate-100 hover:border-slate-200 shadow-sm'}`}>
                    <button onClick={async () => await updateDoc(doc(db, 'Tasks', task.id), { done: !task.done })} className={`w-6 h-6 rounded-lg flex items-center justify-center transition-all ${task.done ? 'bg-emerald-500 text-white' : 'border-2 border-slate-200 text-transparent'}`}><CheckCircle2 size={16} /></button>
                    <div className="flex-1"><p className={`text-sm font-black tracking-tight ${task.done ? 'text-slate-400 line-through' : 'text-slate-900'}`}>{task.text}</p><p className="text-[8px] font-black uppercase text-slate-400 tracking-widest mt-0.5">{task.subject}</p></div>
                    <button onClick={async () => await deleteDoc(doc(db, 'Tasks', task.id))} className="text-slate-300 hover:text-red-500 transition-colors p-2"><Trash2 size={16} /></button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {tab === 'achievements' && (
          <div className="animate-in fade-in duration-300 text-center py-20 bg-white rounded-[3rem] border border-slate-200/60 shadow-sm">
             <div className="w-20 h-20 bg-amber-500/10 text-amber-500 rounded-[2rem] flex items-center justify-center mx-auto mb-6"><Trophy size={40} /></div>
             <h2 className="text-2xl font-[1000] text-slate-900 uppercase tracking-tighter">Academic Ranking System</h2>
             <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-2">Syncing with global student leaderboard...</p>
          </div>
        )}
      </div>

      {/* Goal Modal */}
      {showGoalModal && (
        <div className="fixed inset-0 z-[500] flex items-center justify-center p-6 bg-slate-950/80 backdrop-blur-md">
          <div className="bg-white rounded-[3rem] p-10 w-full max-w-sm shadow-2xl space-y-8 animate-in zoom-in-95">
             <div className="text-center space-y-2"><h3 className="text-2xl font-[1000] text-slate-900 uppercase tracking-tighter">Strategic Goals</h3><p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">Define your focus targets</p></div>
             <div className="space-y-6">
                {['daily', 'weekly', 'monthly'].map(t => (
                  <div key={t} className="space-y-2">
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">{t} Hours</p>
                    <input type="number" value={goals[t]} onChange={e => setGoals({ ...goals, [t]: e.target.value })} className="w-full bg-slate-100 rounded-2xl p-4 text-center font-black text-xl outline-none focus:ring-2 ring-blue-500/20" />
                  </div>
                ))}
             </div>
             <button onClick={saveGoals} className="w-full py-5 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest shadow-xl active:scale-95">Update Strategy</button>
          </div>
        </div>
      )}
    </div>
  );
}
