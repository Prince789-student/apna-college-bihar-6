import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  doc, getDoc, collection, query, where, getDocs,
  updateDoc, addDoc, deleteDoc
} from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../context/AuthContext';
import { useStudy } from '../context/StudyContext';
import {
  Clock, Plus, Flame, Target,
  BarChart3, Settings, Trash2, Trophy,
  ArrowRight, ClipboardList,
  CheckCircle2, Circle, Shield, Timer, AlertTriangle
} from 'lucide-react';

// ── Helpers ──
function formatDuration(sec) {
  if (!sec || sec <= 0) return '0 min';
  const h = Math.floor(sec / 3600);
  const m = Math.floor((sec % 3600) / 60);
  const s = sec % 60;
  if (h > 0) return `${h} hr ${m} min`;
  if (m > 0) return `${m} min ${s} sec`;
  return `${s} sec`;
}

const TABS = [
  { id: 'timer', label: 'Focus Timer', icon: <Clock size={15} /> },
  { id: 'overview', label: 'Overview', icon: <BarChart3 size={15} /> },
  { id: 'todo', label: 'Aaj ka Plan', icon: <ClipboardList size={15} /> },
  { id: 'achievements', label: 'Achievements', icon: <Trophy size={15} /> },
  { id: 'admin', label: 'Admin Ops', icon: <Shield size={15} className="text-red-500" /> },
];

export default function StudyDashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [tab, setTab] = useState(location.state?.tab || 'timer');
  const todayStr = new Date().toISOString().split('T')[0];

  // Use Global Study Context
  const {
    timerActive, setTimerActive,
    timerTime, setTimerTime,
    timerSubject, setTimerSubject,
    customMinutes, setCustomMinutes,
    timerMode, setTimerMode,
    saveGlobalSession
  } = useStudy();

  // Data State
  const [userData, setUserData] = useState(null);
  const [subjects, setSubjects] = useState([]);
  const [sessions, setSessions] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [sessionCount, setSessionCount] = useState(0);
  const [loading, setLoading] = useState(true);

  // Modals
  const [goals, setGoals] = useState({ daily: 0, weekly: 0, monthly: 0 });
  const [showGoalModal, setShowGoalModal] = useState(false);
  const [showSubjectModal, setShowSubjectModal] = useState(false);
  const [newSubject, setNewSubject] = useState('');
  const [newTask, setNewTask] = useState('');
  const [taskSub, setTaskSub] = useState('');

  useEffect(() => { if (user) fetchAll(); }, [user]);

  const fetchAll = async () => {
    setLoading(true);
    try {
      const uSnap = await getDoc(doc(db, 'users', user.uid));
      if (uSnap.exists()) {
        const d = uSnap.data();
        const yesterdayStr = new Date(Date.now() - 86400000).toISOString().split('T')[0];
        const sDate = d.streakDate || d.lastStudyDate || '';
        if (d.streak > 0 && sDate !== todayStr && sDate !== yesterdayStr) {
          await updateDoc(doc(db, 'users', user.uid), { streak: 0 });
          d.streak = 0;
        }
        setUserData(d);
        setGoals({ daily: d?.dailyGoal || 0, weekly: d?.weeklyGoal || 0, monthly: d?.monthlyGoal || 0 });
      }

      const subSnap = await getDocs(query(collection(db, 'Subjects'), where('userId', '==', user.uid)));
      setSubjects(subSnap.docs.map(d => ({ id: d.id, ...d.data() })));

      const sessSnap = await getDocs(query(collection(db, 'StudySessions'), where('userId', '==', user.uid)));
      setSessionCount(sessSnap.size);
      const thirtyDaysAgo = new Date(); thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
      const cutoff = thirtyDaysAgo.toISOString().split('T')[0];
      const sessData = sessSnap.docs.map(d => ({ ...d.data() }));
      setSessions(sessData.filter(s => s.date >= cutoff));

      const taskSnap = await getDocs(query(collection(db, 'Tasks'), where('userId', '==', user.uid), where('date', '==', todayStr)));
      setTasks(taskSnap.docs.map(d => ({ id: d.id, ...d.data() })));
    } catch (e) { console.error(e); } finally { setLoading(false); }
  };

  const fmtTimer = (s) => {
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = s % 60;
    return `${h > 0 ? h.toString().padStart(2, '0') + ':' : ''}${m.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
  };

  const todaySec = sessions.filter(s => s.date === todayStr).reduce((a, s) => a + s.duration, 0);
  const last7 = Array.from({ length: 7 }, (_, i) => { const d = new Date(); d.setDate(d.getDate() - i); return d.toISOString().split('T')[0]; });
  const weeklySec = sessions.filter(s => last7.includes(s.date)).reduce((a, s) => a + s.duration, 0);
  const curM = new Date().getMonth(), curY = new Date().getFullYear();
  const monthlySec = sessions.filter(s => { const d = new Date(s.date); return d.getMonth() === curM && d.getFullYear() === curY; }).reduce((a, s) => a + s.duration, 0);
  
  const heatmap = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(); d.setDate(d.getDate() - (6 - i));
    const dStr = d.toISOString().split('T')[0];
    return { dStr, day: d.toLocaleDateString('en-US', { weekday: 'short' }), sec: sessions.filter(s => s.date === dStr).reduce((a, s) => a + s.duration, 0), isToday: dStr === todayStr };
  });
  const maxH = Math.max(1, ...heatmap.map(d => d.sec));
  const getProgress = (sec, g) => (!g || g <= 0) ? 0 : Math.min(100, (sec / (g * 3600)) * 100).toFixed(0);

  const saveGoals = async () => { await updateDoc(doc(db, 'users', user.uid), { dailyGoal: Number(goals.daily), weeklyGoal: Number(goals.weekly), monthlyGoal: Number(goals.monthly) }); setShowGoalModal(false); fetchAll(); };
  const addSubject = async () => { if (!newSubject.trim() || subjects.length >= 10) return; try { await addDoc(collection(db, 'Subjects'), { userId: user.uid, subjectName: newSubject.trim().toUpperCase(), createdAt: new Date().toISOString() }); setNewSubject(''); setShowSubjectModal(false); fetchAll(); } catch (e) { console.error(e); } };
  const delSubject = async (id) => { try { await deleteDoc(doc(db, 'Subjects', id)); fetchAll(); } catch (e) { console.error(e); } };
  const addTask = async () => { if (!newTask.trim() || !taskSub.trim()) return; await addDoc(collection(db, 'Tasks'), { userId: user.uid, text: newTask.trim(), subject: taskSub.trim().toUpperCase(), done: false, date: todayStr, createdAt: new Date().toISOString() }); setNewTask(''); setTaskSub(''); fetchAll(); };
  const toggleTask = async (task) => { await updateDoc(doc(db, 'Tasks', task.id), { done: !task.done }); fetchAll(); };
  const delTask = async (id) => { await deleteDoc(doc(db, 'Tasks', id)); fetchAll(); };

  const handleStopAndSave = async () => {
    await saveGlobalSession();
    fetchAll();
  };

  if (loading) return <div className="flex justify-center p-20"><div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div></div>;

  return (
    <div className="max-w-5xl mx-auto space-y-4 md:space-y-6 pb-20 px-2 md:px-0">
      <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
        <div className="flex-1 flex items-center justify-between bg-white p-4 md:p-5 rounded-[2rem] border border-slate-200/50 shadow-sm">
          <div className="flex items-center gap-3 md:gap-4">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-500/10 rounded-2xl flex items-center justify-center border border-orange-500/20 shrink-0"><Flame size={20} className="text-orange-500" fill="currentColor" /></div>
            <div>
              <p className="text-[8px] md:text-[9px] text-slate-500 font-bold uppercase tracking-widest leading-none mb-1">Streak</p>
              <p className="text-xl md:text-2xl font-black text-slate-900 leading-none">{userData?.streak || 0} <span className="text-[10px] md:text-xs font-bold text-slate-500">Days</span></p>
            </div>
          </div>
          <button onClick={() => setShowGoalModal(true)} className="p-2 bg-slate-100 rounded-xl text-slate-400 hover:text-slate-900 transition-colors"><Settings size={16} /></button>
        </div>
        <button onClick={() => setTab('timer')} className="flex-1 sm:max-w-[180px] bg-blue-600 hover:bg-blue-500 text-white rounded-[2rem] font-black uppercase text-[10px] md:text-xs tracking-widest shadow-lg flex items-center justify-center gap-2 transition-all p-4">
          <Clock size={16} /> <span>Focus Zone</span>
        </button>
      </div>

      <div className="flex gap-2 bg-white/60 backdrop-blur-md p-2 rounded-[2rem] border border-slate-200 shadow-sm overflow-x-auto no-scrollbar">
        {TABS.map(t => {
          if (t.id === 'admin' && user?.role !== 'SUPER_ADMIN') return null;
          const isActive = tab === t.id;
          return (
            <button key={t.id} onClick={() => t.id === 'admin' ? navigate('/dashboard/admin') : setTab(t.id)}
              className={`flex-1 min-w-fit flex items-center justify-center gap-2 px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all border-2 ${isActive ? 'bg-slate-900 text-white border-slate-900 shadow-xl' : 'bg-white text-slate-600 border-transparent hover:border-slate-200 hover:text-slate-900 shadow-sm'}`}>
              {t.icon} {t.label}
            </button>
          );
        })}
      </div>

      {tab === 'timer' && (
        <div className="space-y-6 animate-in fade-in duration-300">
          <div className="bg-white p-8 md:p-14 rounded-[2.5rem] md:rounded-[3.5rem] border border-slate-200/80 shadow-2xl relative overflow-hidden flex flex-col items-center">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent pointer-events-none"></div>
            <div className="flex flex-col items-center gap-4 mb-8">
              <div className="flex gap-2 p-1 bg-slate-100/80 rounded-2xl border border-slate-200/50">
                {['COUNTDOWN', 'STOPWATCH'].map(m => (
                  <button key={m} onClick={() => !timerActive && setTimerMode(m)} className={`px-4 py-1.5 rounded-xl text-[8px] font-black uppercase tracking-widest transition-all ${timerMode === m ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-500 hover:text-slate-900'}`}>{m}</button>
                ))}
              </div>
              <div className="flex items-center gap-3 px-6 py-2 bg-slate-100/50 rounded-full border border-slate-200/50">
                <Target size={14} className="text-orange-400" />
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Subject: <span className="text-slate-900">{timerSubject}</span></p>
              </div>
            </div>
            <h1 className="text-6xl md:text-[6rem] font-[1000] text-slate-900 tracking-tighter tabular-nums leading-none">{fmtTimer(timerTime)}</h1>
            <div className="mt-12 flex gap-4 w-full max-w-sm">
              {!timerActive ? (
                <div className="flex flex-col items-center gap-6 w-full max-w-sm">
                  {timerMode === 'COUNTDOWN' && (
                    <div className="flex items-center gap-4 bg-slate-100/80 p-4 rounded-3xl border border-slate-200/50 w-full">
                      <div className="p-3 bg-blue-600/10 text-blue-500 rounded-2xl"><Timer size={20} /></div>
                      <div className="flex-1">
                        <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Duration (Min)</p>
                        <input type="number" min="1" max="600" value={customMinutes} onChange={e => { const v = Math.min(600, Math.max(1, parseInt(e.target.value) || 1)); setCustomMinutes(v); }} className="w-20 bg-transparent text-slate-900 text-3xl font-black outline-none border-b-2 border-slate-200 focus:border-blue-500" />
                      </div>
                    </div>
                  )}
                  <div className="text-center space-y-3 w-full">
                    <p className="text-[10px] font-black text-blue-500 uppercase tracking-widest flex items-center justify-center gap-2">
                      <Shield size={12} /> Focus Shield Active: No Tab Switching
                    </p>
                    <button onClick={() => setTimerActive(true)} className="w-full py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-3xl font-[1000] text-sm uppercase tracking-widest shadow-2xl active:scale-95 transition-all flex items-center justify-center gap-3">
                      Start Focus <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex gap-4 w-full">
                  <button onClick={() => setTimerActive(false)} className="flex-1 py-5 bg-orange-600 hover:bg-orange-500 text-white rounded-3xl font-[1000] text-xs uppercase tracking-widest transition-all shadow-xl">Pause</button>
                  <button onClick={handleStopAndSave} className="flex-1 py-5 bg-red-600 hover:bg-red-500 text-white rounded-[2rem] font-[1000] text-xs uppercase tracking-widest transition-all shadow-xl">Stop & Save</button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {tab === 'overview' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: 'Today', sec: todaySec, goal: goals.daily, color: 'bg-blue-500' },
              { label: 'Weekly', sec: weeklySec, goal: goals.weekly, color: 'bg-emerald-500' },
              { label: 'Monthly', sec: monthlySec, goal: goals.monthly, color: 'bg-indigo-500' },
            ].map(({ label, sec, goal, color }) => (
              <div key={label} className="bg-white p-5 rounded-2xl border border-slate-200/50 space-y-2 shadow-sm">
                <div className="flex items-center justify-between"><span className="text-[9px] font-black uppercase tracking-widest text-slate-500">{label}</span><span className="text-[9px] font-bold text-slate-500">{getProgress(sec, goal)}%</span></div>
                <p className="text-xl font-black text-slate-900">{formatDuration(sec)}</p>
                <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden"><div className={`h-full ${color} rounded-full transition-all duration-1000`} style={{ width: `${getProgress(sec, goal)}%` }}></div></div>
              </div>
            ))}
          </div>
          <div className="bg-white p-6 rounded-[2rem] border border-slate-200/50 shadow-sm">
            <p className="text-[9px] font-black uppercase tracking-widest text-slate-500 mb-6 flex items-center gap-2"><Calendar size={11} /> 7-Day Efficiency</p>
            <div className="flex items-end justify-between gap-2 h-20">
              {heatmap.map(d => (
                <div key={d.dStr} className="flex flex-col items-center gap-1 flex-1">
                  <div className={`w-full rounded-t-lg transition-all duration-700 ${d.isToday ? 'bg-blue-500' : d.sec > 0 ? 'bg-emerald-500' : 'bg-slate-100'}`} style={{ height: `${Math.max(5, (d.sec / maxH) * 100)}%` }}></div>
                  <span className={`text-[8px] font-black uppercase tracking-tighter ${d.isToday ? 'text-blue-500' : 'text-slate-400'}`}>{d.day}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {tab === 'todo' && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="bg-white p-6 rounded-[2rem] border border-slate-200/50 shadow-sm">
            <h3 className="text-lg font-black text-slate-900 mb-6 uppercase tracking-tighter flex items-center gap-2"><ClipboardList size={20} className="text-blue-500" /> Operational Tasks</h3>
            <div className="flex flex-col md:flex-row gap-3 mb-6 bg-slate-50 p-4 rounded-3xl border border-slate-200">
              <input value={newTask} onChange={e => setNewTask(e.target.value)} onKeyDown={e => e.key === 'Enter' && addTask()} placeholder="New protocol mission..." className="flex-[2] bg-white border border-slate-200 rounded-2xl px-5 py-3.5 text-sm outline-none focus:border-blue-500 font-bold" />
              <button onClick={addTask} className="px-6 py-3.5 bg-slate-900 text-white rounded-2xl hover:bg-black transition-all shadow-lg active:scale-95"><Plus size={18} /></button>
            </div>
            <div className="space-y-2">
              {tasks.length === 0 ? <p className="text-center py-10 text-[10px] font-black text-slate-400 uppercase tracking-widest">No active tasks</p> : tasks.map(task => (
                <div key={task.id} className={`flex items-center gap-3 p-4 rounded-2xl border transition-all ${task.done ? 'bg-emerald-50 border-emerald-100' : 'bg-slate-50 border-slate-100'}`}>
                  <button onClick={() => toggleTask(task)}>{task.done ? <CheckCircle2 size={18} className="text-emerald-500" /> : <Circle size={18} className="text-slate-400" />}</button>
                  <div className="flex-1"><p className={`text-sm font-bold ${task.done ? 'line-through text-slate-400' : 'text-slate-900'}`}>{task.text}</p></div>
                  <button onClick={() => delTask(task.id)} className="text-slate-300 hover:text-red-500 transition-colors"><Trash2 size={14} /></button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {tab === 'achievements' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: 'Streak', val: `${userData?.streak || 0} Days`, color: 'text-orange-500' },
              { label: 'Total Focus', val: formatDuration(userData?.totalStudyTime || 0), color: 'text-blue-500' },
              { label: 'Sessions', val: sessionCount, color: 'text-emerald-500' },
            ].map(({ label, val, color }) => (
              <div key={label} className="bg-white p-5 rounded-2xl border border-slate-200/50 text-center shadow-sm">
                <p className="text-[8px] font-black text-slate-500 uppercase tracking-widest mb-1">{label}</p>
                <p className={`text-xl font-black ${color}`}>{val}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {showGoalModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 p-8 rounded-[2.5rem] w-full max-sm shadow-2xl">
            <p className="text-xl font-black uppercase mb-6 text-center">Set Targets</p>
            <div className="space-y-4">
              {['daily', 'weekly', 'monthly'].map(t => (
                <div key={t} className="space-y-1">
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">{t} (Hours)</p>
                  <input type="number" value={goals[t]} onChange={e => setGoals({ ...goals, [t]: e.target.value })} className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl font-black text-center outline-none focus:border-blue-500" />
                </div>
              ))}
            </div>
            <div className="flex gap-3 mt-8">
              <button className="flex-1 p-4 rounded-xl font-black text-[10px] uppercase text-slate-400 hover:bg-slate-50" onClick={() => setShowGoalModal(false)}>Cancel</button>
              <button className="flex-1 bg-blue-600 hover:bg-blue-500 p-4 rounded-xl font-black text-[10px] uppercase text-white shadow-lg" onClick={saveGoals}>Save Protocol</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
