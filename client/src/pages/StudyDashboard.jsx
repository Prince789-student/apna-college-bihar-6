import React, { useState, useEffect } from 'react';
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
  BarChart3, Settings, Trash2, Trophy,
  ArrowRight, ClipboardList,
  CheckCircle2, Circle, Shield, Timer, AlertTriangle,
  BookOpen, Activity, LayoutDashboard
} from 'lucide-react';

// ── Helpers ──
function formatDuration(sec) {
  if (!sec || sec <= 0) return '0m';
  const h = Math.floor(sec / 3600);
  const m = Math.floor((sec % 3600) / 60);
  const s = sec % 60;
  if (h > 0) return `${h}h ${m}m`;
  if (m > 0) return `${m}m ${s}s`;
  return `${s}s`;
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
  const [taskSub, setTaskSub] = useState('');

  // 1. Fetch Static Data
  useEffect(() => {
    if (!user) return;
    const fetchBase = async () => {
      try {
        const uSnap = await getDoc(doc(db, 'users', user.uid));
        if (uSnap.exists()) {
          const d = uSnap.data();
          setUserData(d);
          setGoals({ 
            daily: d?.dailyGoal || 2, 
            weekly: d?.weeklyGoal || 14, 
            monthly: d?.monthlyGoal || 60 
          });
        }
        const subSnap = await getDocs(query(collection(db, 'Subjects'), where('userId', '==', user.uid)));
        setSubjects(subSnap.docs.map(d => ({ id: d.id, ...d.data() })));
      } catch (e) { console.error(e); }
      setLoading(false);
    };
    fetchBase();
  }, [user]);

  // 2. Real-time Sessions
  useEffect(() => {
    if (!user) return;
    const sessQuery = query(collection(db, 'StudySessions'), where('userId', '==', user.uid));
    const unsub = onSnapshot(sessQuery, (snap) => {
      setSessions(snap.docs.map(d => d.data()));
    });
    return () => unsub();
  }, [user]);

  // 3. Real-time Tasks
  useEffect(() => {
    if (!user) return;
    const taskQuery = query(collection(db, 'Tasks'), where('userId', '==', user.uid), where('date', '==', todayStr));
    const unsub = onSnapshot(taskQuery, (snap) => {
      setTasks(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    });
    return () => unsub();
  }, [user, todayStr]);

  // Derived Stats
  const todaySec = sessions.filter(s => s.date === todayStr).reduce((a, s) => a + (Number(s.duration) || 0), 0);
  
  const last7Days = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(); d.setDate(d.getDate() - i);
    return d.toLocaleDateString('en-CA');
  });
  const weeklySec = sessions.filter(s => last7Days.includes(s.date)).reduce((a, s) => a + (Number(s.duration) || 0), 0);
  
  const curM = new Date().getMonth(), curY = new Date().getFullYear();
  const monthlySec = sessions.filter(s => {
    const d = new Date(s.date);
    return d.getMonth() === curM && d.getFullYear() === curY;
  }).reduce((a, s) => a + (Number(s.duration) || 0), 0);

  const heatmap = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(); d.setDate(d.getDate() - (6 - i));
    const dStr = d.toLocaleDateString('en-CA');
    return { 
      dStr, 
      day: d.toLocaleDateString('en-US', { weekday: 'short' }), 
      sec: sessions.filter(s => s.date === dStr).reduce((a, s) => a + (Number(s.duration) || 0), 0), 
      isToday: dStr === todayStr 
    };
  });
  const maxH = Math.max(1, ...heatmap.map(d => d.sec));

  const subjectFocus = subjects.map(sub => ({
    name: sub.subjectName,
    sec: sessions.filter(s => s.subject === sub.subjectName).reduce((a, s) => a + (Number(s.duration) || 0), 0)
  })).filter(s => s.sec > 0).sort((a, b) => b.sec - a.sec);

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
      {/* Visual Header Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-[2rem] border border-slate-200/60 shadow-sm flex items-center justify-between group hover:border-orange-500/30 transition-all">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-orange-500/10 text-orange-500 rounded-2xl flex items-center justify-center border border-orange-500/10"><Flame size={24} fill="currentColor" /></div>
            <div><p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Current Streak</p><p className="text-2xl font-black text-slate-900 leading-none">{userData?.streak || 0} <span className="text-xs text-slate-500 font-bold">Days</span></p></div>
          </div>
          <button onClick={() => setShowGoalModal(true)} className="p-2 bg-slate-50 text-slate-400 hover:text-slate-900 rounded-xl transition-all"><Settings size={18} /></button>
        </div>
        <div className="bg-slate-900 p-6 rounded-[2rem] border border-slate-800 shadow-xl flex items-center gap-4 group cursor-pointer" onClick={() => setTab('timer')}>
           <div className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.4)] group-hover:scale-110 transition-transform"><Clock size={24} /></div>
           <div className="flex-1"><p className="text-[10px] font-black text-blue-400 uppercase tracking-widest leading-none mb-1">Focus Protocol</p><p className="text-xl font-black text-white leading-none">Initialize Zone</p></div>
           <ArrowRight size={20} className="text-slate-600 group-hover:translate-x-1 transition-all" />
        </div>
        <div className="bg-white p-6 rounded-[2rem] border border-slate-200/60 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-emerald-500/10 text-emerald-600 rounded-2xl flex items-center justify-center border border-emerald-500/10"><Activity size={24} /></div>
          <div><p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Today's Focus</p><p className="text-2xl font-black text-slate-900 leading-none">{formatDuration(todaySec)}</p></div>
        </div>
      </div>

      {/* Tabs Selection */}
      <div className="flex gap-2 bg-white/80 backdrop-blur-md p-2 rounded-[2.5rem] border border-slate-200 shadow-sm overflow-x-auto no-scrollbar">
        {TABS.map(t => (
          <button key={t.id} onClick={() => setTab(t.id)}
            className={`flex-1 min-w-fit flex items-center justify-center gap-3 px-8 py-4 rounded-[1.5rem] text-[10px] font-black uppercase tracking-widest transition-all ${tab === t.id ? 'bg-slate-900 text-white shadow-2xl scale-[1.02]' : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900'}`}>
            {t.icon} {t.label}
          </button>
        ))}
        {user?.role === ROLES.SUPER_ADMIN && (
          <button onClick={() => navigate('/dashboard/admin')} className="flex items-center justify-center gap-3 px-8 py-4 rounded-[1.5rem] text-[10px] font-black uppercase tracking-widest text-red-500 hover:bg-red-50 transition-all border border-transparent hover:border-red-100"><Shield size={15} /> Admin Ops</button>
        )}
      </div>

      {/* Tab Content Display */}
      <div className="min-h-[500px]">
        {tab === 'timer' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-white p-12 md:p-24 rounded-[3.5rem] md:rounded-[5rem] border border-slate-200/80 shadow-2xl relative overflow-hidden flex flex-col items-center">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent pointer-events-none"></div>
              
              <div className="flex flex-col items-center gap-6 mb-12">
                <div className="flex gap-2 p-1.5 bg-slate-100/80 rounded-2xl border border-slate-200/50">
                  {['COUNTDOWN', 'STOPWATCH'].map(m => (
                    <button key={m} onClick={() => !timerActive && setTimerMode(m)} className={`px-6 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all ${timerMode === m ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-500 hover:text-slate-900'}`}>{m}</button>
                  ))}
                </div>
                <div className="flex items-center gap-3 px-6 py-3 bg-slate-100/50 rounded-2xl border border-slate-200/50 group hover:border-blue-500/30 transition-all">
                   <BookOpen size={16} className="text-blue-500" />
                   <select value={timerSubject} onChange={e => setTimerSubject(e.target.value)} disabled={timerActive} className="bg-transparent text-[10px] font-black uppercase tracking-widest text-slate-900 outline-none cursor-pointer">
                     <option value="OTHERS">SELECT SUBJECT PROTOCOL</option>
                     {subjects.map(s => <option key={s.id} value={s.subjectName}>{s.subjectName}</option>)}
                   </select>
                </div>
              </div>

              <div className="relative">
                <h1 className="text-8xl md:text-[10rem] font-[1000] text-slate-900 tracking-tighter tabular-nums leading-none">
                  {Math.floor(timerTime / 3600) > 0 ? `${Math.floor(timerTime / 3600).toString().padStart(2, '0')}:` : ''}
                  {Math.floor((timerTime % 3600) / 60).toString().padStart(2, '0')}:
                  {(timerTime % 60).toString().padStart(2, '0')}
                </h1>
                {timerActive && <div className="absolute -top-4 -right-4 w-4 h-4 bg-blue-600 rounded-full animate-ping"></div>}
              </div>
              
              <div className="mt-16 w-full max-w-md space-y-8">
                {!timerActive ? (
                  <div className="space-y-8">
                    {timerMode === 'COUNTDOWN' && (
                      <div className="bg-slate-50/80 p-8 rounded-[2rem] border border-slate-200/50 flex flex-col items-center gap-4">
                        <div className="flex justify-between w-full"><p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Focus Duration</p><p className="text-xl font-black text-slate-900">{customMinutes} Min</p></div>
                        <input type="range" min="5" max="120" step="5" value={customMinutes} onChange={e => setCustomMinutes(parseInt(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600" />
                      </div>
                    )}
                    <div className="text-center space-y-4">
                      <p className="text-[10px] font-black text-blue-500 uppercase tracking-[0.3em] flex items-center justify-center gap-3"><Shield size={14} className="animate-pulse" /> Focus Shield Active</p>
                      <button onClick={() => setTimerActive(true)} className="w-full py-7 bg-blue-600 hover:bg-blue-500 text-white rounded-[2.5rem] font-[1000] text-sm uppercase tracking-[0.2em] shadow-2xl active:scale-95 transition-all flex items-center justify-center gap-3">Initialize Focus <ArrowRight size={22} /></button>
                    </div>
                  </div>
                ) : (
                  <div className="flex gap-4">
                    <button onClick={() => setTimerActive(false)} className="flex-1 py-7 bg-white text-slate-400 hover:text-slate-900 rounded-[2.5rem] font-[1000] text-[10px] uppercase tracking-widest border-2 border-slate-100 hover:border-slate-300 transition-all">Pause Mission</button>
                    <button onClick={() => saveGlobalSession()} className="flex-1 py-7 bg-red-600 hover:bg-red-500 text-white rounded-[2.5rem] font-[1000] text-[10px] uppercase tracking-widest shadow-2xl transition-all">Abort & Save</button>
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
                { label: 'Today Efficiency', sec: todaySec, goal: goals.daily, color: 'from-blue-600 to-indigo-600' },
                { label: 'Weekly Protocol', sec: weeklySec, goal: goals.weekly, color: 'from-emerald-500 to-teal-500' },
                { label: 'Monthly Strategic', sec: monthlySec, goal: goals.monthly, color: 'from-orange-500 to-amber-500' },
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
                <div className="flex items-center justify-between"><h3 className="text-xs font-black uppercase tracking-[0.3em] text-slate-900 flex items-center gap-3"><Calendar size={20} className="text-blue-500" /> Operational History</h3></div>
                <div className="flex items-end justify-between gap-4 h-40">
                  {heatmap.map(d => (
                    <div key={d.dStr} className="flex flex-col items-center gap-3 flex-1 group relative">
                      <div className={`w-full rounded-t-2xl transition-all duration-700 ${d.isToday ? 'bg-blue-600 shadow-xl shadow-blue-500/30' : d.sec > 0 ? 'bg-slate-200' : 'bg-slate-50'}`} style={{ height: `${Math.max(8, (d.sec / maxH) * 100)}%` }}></div>
                      <span className={`text-[10px] font-black uppercase tracking-widest ${d.isToday ? 'text-blue-600' : 'text-slate-400'}`}>{d.day}</span>
                      {d.sec > 0 && <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[9px] font-black px-3 py-1.5 rounded-xl opacity-0 group-hover:opacity-100 transition-all scale-90 group-hover:scale-100 pointer-events-none whitespace-nowrap z-20">{formatDuration(d.sec)}</div>}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-10 rounded-[3rem] border border-slate-200/60 shadow-sm space-y-8">
                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-slate-900 flex items-center gap-3"><Activity size={20} className="text-orange-500" /> Focus Distribution</h3>
                <div className="space-y-6">
                  {subjectFocus.length === 0 ? (
                    <div className="text-center py-16 flex flex-col items-center gap-4">
                      <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center text-slate-200"><BookOpen size={32} /></div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">No Protocol Data Found</p>
                    </div>
                  ) : subjectFocus.map(sub => (
                    <div key={sub.name} className="space-y-2">
                      <div className="flex justify-between items-center"><span className="text-[10px] font-black uppercase tracking-widest text-slate-700">{sub.name}</span><span className="text-[10px] font-black text-slate-400">{formatDuration(sub.sec)}</span></div>
                      <div className="w-full h-2 bg-slate-50 rounded-full overflow-hidden"><div className="h-full bg-slate-900 rounded-full transition-all duration-1000" style={{ width: `${(sub.sec / todaySec) * 100}%` }}></div></div>
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
              <div className="flex flex-col md:flex-row gap-4 items-end bg-slate-50 p-8 rounded-[2.5rem] border border-slate-200/50">
                <div className="flex-1 w-full space-y-2">
                   <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Objective Protocol</p>
                   <input value={newTask} onChange={e => setNewTask(e.target.value)} onKeyDown={e => e.key === 'Enter' && addTask()} placeholder="Define mission goal..." className="w-full bg-white border-2 border-transparent focus:border-blue-500/50 rounded-2xl px-6 py-5 text-sm font-bold outline-none transition-all shadow-sm" />
                </div>
                <button onClick={addTask} className="w-full md:w-24 h-16 bg-slate-900 text-white rounded-2xl flex items-center justify-center hover:bg-black transition-all shadow-2xl active:scale-95"><Plus size={28} /></button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tasks.length === 0 ? <p className="col-span-full text-center py-24 text-[10px] font-black text-slate-300 uppercase tracking-[0.3em]">Operational Readiness: 100% (No Pending Tasks)</p> : tasks.map(task => (
                  <div key={task.id} className={`flex items-center gap-5 p-6 rounded-[2rem] border-2 transition-all ${task.done ? 'bg-emerald-50/50 border-emerald-100' : 'bg-white border-slate-50 hover:border-slate-200 hover:shadow-xl'}`}>
                    <button onClick={async () => await updateDoc(doc(db, 'Tasks', task.id), { done: !task.done })} className={`w-7 h-7 rounded-xl flex items-center justify-center transition-all ${task.done ? 'bg-emerald-500 text-white' : 'border-2 border-slate-200 text-transparent'}`}><CheckCircle2 size={18} /></button>
                    <div className="flex-1 min-w-0"><p className={`text-sm font-[1000] tracking-tight truncate ${task.done ? 'text-slate-400 line-through' : 'text-slate-900'}`}>{task.text}</p><p className="text-[8px] font-black uppercase text-slate-500 tracking-widest mt-1">Status: {task.done ? 'COMPLETED' : 'ACTIVE'}</p></div>
                    <button onClick={async () => await deleteDoc(doc(db, 'Tasks', task.id))} className="text-slate-200 hover:text-red-500 transition-colors p-2"><Trash2 size={18} /></button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Strategy Goal Modal */}
      {showGoalModal && (
        <div className="fixed inset-0 z-[500] flex items-center justify-center p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-300">
          <div className="bg-white rounded-[4rem] p-12 w-full max-w-sm shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)] space-y-10 animate-in zoom-in-95 duration-500">
             <div className="text-center space-y-3"><div className="w-16 h-16 bg-blue-600/10 text-blue-600 rounded-[1.5rem] flex items-center justify-center mx-auto mb-2"><Settings size={32} /></div><h3 className="text-3xl font-[1000] text-slate-900 uppercase tracking-tighter">Mission Control</h3><p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">Adjust operational targets</p></div>
             <div className="space-y-8">
                {['daily', 'weekly', 'monthly'].map(t => (
                  <div key={t} className="space-y-2">
                    <div className="flex justify-between items-center px-1"><p className="text-[9px] font-black uppercase tracking-widest text-slate-500">{t} Hours</p><span className="text-[9px] font-bold text-blue-500">{goals[t]}h</span></div>
                    <input type="number" value={goals[t]} onChange={e => setGoals({ ...goals, [t]: e.target.value })} className="w-full bg-slate-50 border-2 border-slate-100 focus:border-blue-500 rounded-2xl p-5 text-center font-black text-2xl outline-none transition-all" />
                  </div>
                ))}
             </div>
             <button onClick={saveGoals} className="w-full py-6 bg-slate-900 text-white rounded-[2rem] font-black uppercase tracking-[0.3em] shadow-2xl active:scale-95 transition-all">Synchronize Strategy</button>
          </div>
        </div>
      )}
    </div>
  );
}
