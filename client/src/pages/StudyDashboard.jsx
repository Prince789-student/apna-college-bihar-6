import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Capacitor, registerPlugin } from '@capacitor/core';
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
  BookOpen, Activity, Calendar, Users, Search, X
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
  { id: 'todo', label: 'Study Plan', icon: <ClipboardList size={15} /> },
  { id: 'network', label: 'Network', icon: <Users size={15} /> }
];

const AppBlocker = registerPlugin('AppBlocker');

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
    saveGlobalSession,
    allowedPackages, setAllowedPackages,
    installedApps, fetchApps,
    launchApp, openAccessibilitySettings
  } = useStudy();

  const [userData, setUserData] = useState(null);
  const [subjects, setSubjects] = useState([]);
  const [sessions, setSessions] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [goals, setGoals] = useState({ daily: 2, weekly: 14, monthly: 60 });
  const [showGoalModal, setShowGoalModal] = useState(false);
  const [showWhitelist, setShowWhitelist] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [newTask, setNewTask] = useState('');
  const [newTaskSubject, setNewTaskSubject] = useState('OTHERS');

  const isNative = Capacitor.isNativePlatform();

  const [isAccessibilityEnabled, setIsAccessibilityEnabled] = useState(false);
  const [isOverlayEnabled, setIsOverlayEnabled] = useState(false);

  const openAccessibility = async () => {
    try {
      // Test the plugin first
      const test = await AppBlocker.testPlugin();
      console.log("Plugin Test:", test);
      
      await AppBlocker.openAccessibilitySettings();
    } catch (e) {
      console.log("Plugin Error:", e);
      alert("AppBlocker Plugin Error: " + JSON.stringify(e));
    }
  };

  const openOverlay = async () => {
    try {
      await AppBlocker.requestOverlayPermission();
    } catch (e) {
      console.log(e);
      alert(JSON.stringify(e));
    }
  };

  const checkPermissions = async () => {
    if (!isNative) return;
    try {
      const { enabled } = await AppBlocker.isAccessibilityServiceEnabled();
      setIsAccessibilityEnabled(enabled);
      
      const { granted } = await AppBlocker.checkOverlayPermission();
      setIsOverlayEnabled(granted);
    } catch (err) { console.error("Permission Check Failed:", err); }
  };

  useEffect(() => {
    if (isNative) {
      fetchApps();
      checkPermissions();
      const interval = setInterval(checkPermissions, 5000);
      return () => clearInterval(interval);
    }
  }, [isNative]);

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

  const toggleApp = (pkg) => {
    const list = (allowedPackages || '').split(',').filter(Boolean);
    if (list.includes(pkg)) {
      setAllowedPackages(list.filter(p => p !== pkg).join(','));
    } else {
      setAllowedPackages([...list, pkg].join(','));
    }
  };

  const filteredApps = installedApps.filter(app =>
    app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    app.packageName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const stats = useMemo(() => {
    let activeSec = 0;
    if (timerActive) {
      activeSec = timerMode === 'COUNTDOWN' ? (customMinutes * 60 + customSeconds - timerTime) : timerTime;
    }

    const today = sessions.filter(s => s.date === todayStr).reduce((a, s) => a + (Number(s.duration) || 0), 0) + activeSec;
    const last7 = Array.from({ length: 7 }, (_, i) => {
      const d = new Date(); d.setDate(d.getDate() - i);
      return d.toLocaleDateString('en-CA');
    });
    const weekly = sessions.filter(s => last7.includes(s.date)).reduce((a, s) => a + (Number(s.duration) || 0), 0) + activeSec;
    const curM = new Date().getMonth(), curY = new Date().getFullYear();
    const monthly = sessions.filter(s => {
      const d = new Date(s.date);
      return d.getMonth() === curM && d.getFullYear() === curY;
    }).reduce((a, s) => a + (Number(s.duration) || 0), 0) + activeSec;

    const heatmap = Array.from({ length: 7 }, (_, i) => {
      const d = new Date(); d.setDate(d.getDate() - (6 - i));
      const dStr = d.toLocaleDateString('en-CA');
      let daySec = sessions.filter(s => s.date === dStr).reduce((a, s) => a + (Number(s.duration) || 0), 0);
      if (dStr === todayStr) daySec += activeSec;
      return {
        day: d.toLocaleDateString('en-US', { weekday: 'short' }),
        sec: daySec,
        isToday: dStr === todayStr
      };
    });

    const subjectNames = subjects.map(s => s.subjectName);
    const subjectBreakdown = subjects.map(sub => ({
      name: sub.subjectName,
      sec: sessions.filter(s => s.subject === sub.subjectName).reduce((a, s) => a + (Number(s.duration) || 0), 0) + (timerSubject === sub.subjectName ? activeSec : 0)
    })).filter(s => s.sec > 0);

    const otherSec = sessions
      .filter(s => !subjectNames.includes(s.subject))
      .reduce((a, s) => a + (Number(s.duration) || 0), 0) + (timerSubject === 'OTHERS' ? activeSec : 0);

    if (otherSec > 0) {
      subjectBreakdown.push({ name: 'Others', sec: otherSec });
    }

    subjectBreakdown.sort((a, b) => b.sec - a.sec);

    return { today, weekly, monthly, heatmap, subjectBreakdown };
  }, [sessions, subjects, todayStr, timerActive, timerTime, timerMode, customMinutes, customSeconds, timerSubject]);

  const getProgress = (sec, g) => (!g || g <= 0) ? 0 : Math.min(100, (sec / (g * 3600)) * 100).toFixed(0);

  const addTask = async () => {
    if (!newTask.trim()) return;
    await addDoc(collection(db, 'Tasks'), {
      userId: user.uid, text: newTask.trim(),
      subject: newTaskSubject, done: false,
      date: todayStr, createdAt: new Date().toISOString()
    });
    setNewTask('');
    setNewTaskSubject('OTHERS');
  };

  if (loading) return <div className="flex justify-center p-20"><div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div></div>;

  return (
    <div className="max-w-2xl mx-auto pb-24 px-3 md:px-0">

      {/* ACB Study Zone Header */}
      <div className="flex items-center gap-3 pt-4 pb-3">
        <img src="/logo_acb.png?v=3" alt="ACB" className="w-10 h-10 rounded-xl" />
        <div>
          <p className="text-[8px] font-black text-slate-400 uppercase tracking-[0.3em]">Apna College Bihar</p>
          <h1 className="text-lg font-[1000] text-slate-900 tracking-tighter uppercase leading-none">Study Zone</h1>
        </div>
        {timerActive && (
          <span className="ml-auto text-[8px] font-black bg-blue-600 text-white px-3 py-1 rounded-full uppercase animate-pulse">
            Focus Active
          </span>
        )}
      </div>

      {/* ── STICKY 4-TAB BAR ── */}
      <div className="sticky top-0 z-30 bg-white/90 backdrop-blur-lg pb-3 pt-1">
        <div className="grid grid-cols-4 gap-1.5 bg-slate-100 p-1.5 rounded-2xl">
          {[
            { id: 'timer', label: 'Focus', icon: <Clock size={16} /> },
            { id: 'overview', label: 'Dashboard', icon: <LayoutDashboard size={16} /> },
            { id: 'todo', label: 'Plan', icon: <ClipboardList size={16} /> },
            { id: 'network', label: 'Network', icon: <Users size={16} /> },
          ].map(t => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`flex flex-col items-center gap-1 py-2.5 px-1 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all ${tab === t.id
                  ? 'bg-white text-slate-900 shadow-md'
                  : 'text-slate-400 hover:text-slate-600'
                }`}
            >
              <span className={tab === t.id ? 'text-blue-600' : ''}>{t.icon}</span>
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── Proactive Permission Check ── */}
      {isNative && (!isAccessibilityEnabled || !isOverlayEnabled) && (
        <div className="fixed inset-0 z-[2000] bg-slate-950/95 backdrop-blur-2xl flex items-center justify-center p-8 animate-in fade-in duration-500">
          <div className="w-full max-w-sm bg-white rounded-[3.5rem] p-10 text-center space-y-8 shadow-3xl">
            <div className="w-20 h-20 bg-red-600/10 text-red-600 rounded-[2rem] flex items-center justify-center mx-auto animate-pulse">
              <Shield size={40} />
            </div>
            <div className="space-y-3">
              <h2 className="text-2xl font-[1000] text-slate-900 tracking-tighter uppercase leading-none">Iron Focus <br /> Requires Permissions</h2>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-relaxed">To block distractions, you must enable two permissions.</p>
            </div>
            <div className="space-y-4">
              {!isAccessibilityEnabled && (
                <button
                  onClick={openAccessibility}
                  className="w-full py-5 bg-blue-600 text-white rounded-2xl font-[1000] text-xs uppercase tracking-widest shadow-xl shadow-blue-600/20 active:scale-95 transition-all"
                >
                  1. Accessibility Service
                </button>
              )}
              {!isOverlayEnabled && (
                <button
                  onClick={openOverlay}
                  className="w-full py-5 bg-indigo-600 text-white rounded-2xl font-[1000] text-xs uppercase tracking-widest shadow-xl shadow-indigo-600/20 active:scale-95 transition-all"
                >
                  2. Display Over Apps
                </button>
              )}
              <div className="p-4 bg-slate-50 rounded-2xl text-left space-y-2">
                <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Why these?</p>
                <p className="text-[9px] font-bold text-slate-600">Accessibility is needed to detect apps, and "Display Over Apps" is needed to pull you back to Study Zone.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="space-y-6 mt-2">

        {/* ─── TAB: FOCUS ZONE ─── */}
        {tab === 'timer' && (
          <div className="bg-white rounded-[3rem] border border-slate-200/60 shadow-sm overflow-hidden animate-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center gap-3 px-6 pt-6 pb-4 border-b border-slate-100">
              <div className="w-9 h-9 bg-blue-600/10 text-blue-600 rounded-xl flex items-center justify-center"><Clock size={18} /></div>
              <h2 className="text-sm font-[1000] text-slate-900 uppercase tracking-tighter">Focus Zone</h2>
              <span className={`ml-auto text-[8px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${timerActive ? 'bg-blue-600 text-white animate-pulse' : 'bg-slate-100 text-slate-400'}`}>{timerActive ? 'ACTIVE' : 'STANDBY'}</span>
            </div>
            <div className="p-6 flex flex-col items-center gap-6">
              {/* Mode + Subject */}
              <div className="flex gap-2 w-full">
                {['COUNTDOWN', 'STOPWATCH'].map(m => (
                  <button key={m} onClick={() => !timerActive && setTimerMode(m)} className={`flex-1 py-2.5 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all ${timerMode === m ? 'bg-blue-600 text-white shadow-lg' : 'bg-slate-100 text-slate-500'}`}>{m}</button>
                ))}
              </div>
              <div className="flex items-center gap-2 w-full px-4 py-3 bg-slate-50 rounded-2xl border border-slate-200/50">
                <BookOpen size={14} className="text-blue-500" />
                <select value={timerSubject} onChange={e => setTimerSubject(e.target.value)} disabled={timerActive} className="bg-transparent text-[10px] font-black uppercase tracking-widest text-slate-900 outline-none flex-1">
                  <option value="OTHERS">SELECT SUBJECT</option>
                  {subjects.map(s => <option key={s.id} value={s.subjectName}>{s.subjectName}</option>)}
                </select>
              </div>
              {/* Timer Display */}
              <h2 className="text-7xl font-[1000] text-slate-900 tracking-tighter tabular-nums leading-none">
                {Math.floor(timerTime / 3600) > 0 ? `${Math.floor(timerTime / 3600).toString().padStart(2, '0')}:` : ''}
                {Math.floor((timerTime % 3600) / 60).toString().padStart(2, '0')}:
                {(timerTime % 60).toString().padStart(2, '0')}
              </h2>
              {/* Duration Picker */}
              {!timerActive && timerMode === 'COUNTDOWN' && (
                <div className="flex items-center justify-center gap-4 bg-slate-50 p-5 rounded-2xl w-full">
                  <div className="flex flex-col items-center gap-1">
                    <input type="number" min="0" max="599" value={customMinutes} onChange={e => setCustomMinutes(Math.max(0, parseInt(e.target.value) || 0))} className="w-20 bg-white border-2 border-slate-200 rounded-xl p-3 text-center font-black text-2xl outline-none focus:border-blue-500" />
                    <span className="text-[9px] font-black text-slate-400 uppercase">Min</span>
                  </div>
                  <span className="text-2xl font-black text-slate-300 mb-4">:</span>
                  <div className="flex flex-col items-center gap-1">
                    <input type="number" min="0" max="59" value={customSeconds} onChange={e => setCustomSeconds(Math.min(59, Math.max(0, parseInt(e.target.value) || 0)))} className="w-20 bg-white border-2 border-slate-200 rounded-xl p-3 text-center font-black text-2xl outline-none focus:border-blue-500" />
                    <span className="text-[9px] font-black text-slate-400 uppercase">Sec</span>
                  </div>
                </div>
              )}
              {/* Control Buttons */}
              {!timerActive ? (
                <div className="flex gap-3 w-full">
                  <button onClick={() => {
                    if (isNative && !isAccessibilityEnabled) {
                      openAccessibilitySettings();
                      return;
                    }
                    setTimerActive(true);
                    // Auto-launch the first whitelisted app if available
                    const firstApp = (allowedPackages || '').split(',').filter(Boolean)[0];
                    if (firstApp) {
                      setTimeout(() => launchApp(firstApp), 1000);
                    }
                  }} className="flex-[2] py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-[1000] text-xs uppercase tracking-widest shadow-xl active:scale-95 transition-all flex items-center justify-center gap-2">
                    <Shield size={16} /> Start Focus
                  </button>
                  {isNative && (
                    <button onClick={() => setShowWhitelist(true)} className="flex-1 py-5 bg-slate-900 text-white rounded-2xl font-[1000] text-[9px] uppercase tracking-widest active:scale-95 transition-all flex items-center justify-center gap-1">
                      <Settings size={14} /> Apps
                    </button>
                  )}
                </div>
              ) : timerMode === 'COUNTDOWN' ? (
                <div className="w-full space-y-3">
                  <div className="w-full py-5 bg-orange-50 border-2 border-orange-200 text-orange-600 rounded-2xl flex flex-col items-center justify-center gap-1 animate-pulse">
                    <div className="flex items-center gap-2">
                      <Shield size={18} className="animate-bounce" />
                      <span className="font-[1000] text-[10px] uppercase tracking-widest">Iron Focus Locked</span>
                    </div>
                    <p className="text-[8px] font-black uppercase opacity-70">App is locked until timer ends</p>
                  </div>
                  <p className="text-center text-[8px] font-black text-slate-400 uppercase tracking-[0.2em]">Exit blocked by strict mode</p>
                </div>
              ) : (
                <div className="flex gap-3 w-full">
                  <button onClick={() => setTimerActive(false)} className="flex-1 py-5 bg-slate-100 text-slate-500 rounded-2xl font-[1000] text-[9px] uppercase tracking-widest transition-all">Pause</button>
                  <button onClick={() => saveGlobalSession()} className="flex-1 py-5 bg-red-600 text-white rounded-2xl font-[1000] text-[9px] uppercase tracking-widest shadow-xl transition-all">Stop & Save</button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ─── TAB: DASHBOARD ─── */}
        {tab === 'overview' && (
          <div className="bg-white rounded-[2.5rem] border border-slate-200/60 shadow-sm overflow-hidden">
            <div className="flex items-center gap-3 px-6 pt-6 pb-4 border-b border-slate-100">
              <div className="w-9 h-9 bg-indigo-500 text-white rounded-xl flex items-center justify-center"><LayoutDashboard size={18} /></div>
              <h2 className="text-sm font-[1000] text-slate-900 uppercase tracking-tighter">Dashboard</h2>
            </div>
          <div className="p-4 space-y-4">
            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: 'Today', sec: stats.today, goal: goals.daily, color: 'text-blue-600', bg: 'bg-blue-50' },
                { label: 'This Week', sec: stats.weekly, goal: goals.weekly, color: 'text-emerald-600', bg: 'bg-emerald-50' },
                { label: 'This Month', sec: stats.monthly, goal: goals.monthly, color: 'text-orange-600', bg: 'bg-orange-50' },
              ].map(({ label, sec, goal, color, bg }) => (
                <div key={label} className={`${bg} p-4 rounded-2xl`}>
                  <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest leading-none mb-2">{label}</p>
                  <p className={`text-lg font-[1000] ${color} leading-none`}>{formatDuration(sec)}</p>
                  <div className="w-full h-1.5 bg-white/70 rounded-full mt-2 overflow-hidden">
                    <div className={`h-full ${color.replace('text', 'bg')} rounded-full`} style={{ width: `${getProgress(sec, goal)}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
            {/* Stats Summary */}
            <div className="flex items-center justify-between px-4 py-3 bg-slate-50 rounded-2xl">
              <div className="flex items-center gap-2"><Flame size={16} className="text-orange-500" /><span className="text-xs font-black text-slate-700">{userData?.streak || 0} Day Streak</span></div>
              <button onClick={() => setShowGoalModal(true)} className="flex items-center gap-1.5 text-[9px] font-black text-slate-400 uppercase tracking-widest"><Settings size={13} /> Goals</button>
            </div>
            {/* Heatmap */}
            <div className="flex items-end justify-between gap-2 h-20 px-2">
              {stats.heatmap.map((d, i) => {
                const maxH = Math.max(1, ...stats.heatmap.map(x => x.sec));
                return (
                  <div key={i} className="flex flex-col items-center gap-1.5 flex-1">
                    <div className={`w-full rounded-lg transition-all ${d.isToday ? 'bg-blue-600' : d.sec > 0 ? 'bg-slate-300' : 'bg-slate-100'}`} style={{ height: `${Math.max(8, (d.sec / maxH) * 56)}px` }}></div>
                    <span className={`text-[8px] font-black uppercase ${d.isToday ? 'text-blue-600' : 'text-slate-300'}`}>{d.day}</span>
                  </div>
                );
              })}
            </div>
            {/* Subject Breakdown */}
            {stats.subjectBreakdown.length > 0 && (
              <div className="space-y-3 pt-2">
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest px-2">Subject Focus</p>
                {stats.subjectBreakdown.map(sub => (
                  <div key={sub.name} className="space-y-1.5 px-2">
                    <div className="flex justify-between"><span className="text-[10px] font-black text-slate-700 uppercase tracking-wide">{sub.name}</span><span className="text-[10px] font-black text-slate-400">{formatDuration(sub.sec)}</span></div>
                    <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden"><div className="h-full bg-slate-800 rounded-full" style={{ width: `${(sub.sec / Math.max(1, stats.today)) * 100}%` }}></div></div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

        {/* ─── TAB: STUDY PLAN ─── */}
        {tab === 'todo' && (
          <div className="bg-white rounded-[2.5rem] border border-slate-200/60 shadow-sm overflow-hidden">
            <div className="flex items-center gap-3 px-6 pt-6 pb-4 border-b border-slate-100">
              <div className="w-9 h-9 bg-purple-500 text-white rounded-xl flex items-center justify-center"><ClipboardList size={18} /></div>
              <h2 className="text-sm font-[1000] text-slate-900 uppercase tracking-tighter">Study Plan</h2>
              <span className="ml-auto text-[8px] font-black bg-slate-100 text-slate-500 px-3 py-1 rounded-full uppercase">{tasks.filter(t => t.done).length}/{tasks.length} Done</span>
            </div>
          <div className="p-4 space-y-4">
            {/* Add Task */}
            <div className="flex gap-2">
              <input value={newTask} onChange={e => setNewTask(e.target.value)} onKeyDown={e => e.key === 'Enter' && addTask()} placeholder="Add a task..." className="flex-1 bg-slate-50 rounded-xl px-4 py-3 text-sm font-bold outline-none border border-slate-200 focus:border-blue-400" />
              <select value={newTaskSubject} onChange={e => setNewTaskSubject(e.target.value)} className="bg-slate-50 rounded-xl px-3 py-3 text-[9px] font-black uppercase outline-none border border-slate-200 max-w-[90px]">
                <option value="OTHERS">Subject</option>
                {subjects.map(s => <option key={s.id} value={s.subjectName}>{s.subjectName}</option>)}
              </select>
              <button onClick={addTask} className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center active:scale-95 transition-all"><Plus size={22} /></button>
            </div>
            {/* Task List */}
            {tasks.length === 0 ? (
              <div className="text-center py-8 text-slate-300"><ClipboardList size={32} className="mx-auto mb-2" /><p className="text-[10px] font-black uppercase tracking-widest">No tasks yet</p></div>
            ) : (
              <div className="space-y-2">
                {tasks.map(task => (
                  <div key={task.id} className={`flex items-center gap-3 p-4 rounded-2xl border transition-all ${task.done ? 'bg-emerald-50 border-emerald-100' : 'bg-slate-50 border-slate-100'}`}>
                    <button onClick={async () => await updateDoc(doc(db, 'Tasks', task.id), { done: !task.done })} className={`w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 transition-all ${task.done ? 'bg-emerald-500 text-white' : 'border-2 border-slate-300'}`}><CheckCircle2 size={14} /></button>
                    <div className="flex-1 min-w-0">
                      <span className={`text-[8px] font-black px-2 py-0.5 rounded-full uppercase ${task.done ? 'bg-slate-200 text-slate-400' : 'bg-blue-100 text-blue-600'}`}>{task.subject || 'OTHERS'}</span>
                      <p className={`text-sm font-bold mt-0.5 ${task.done ? 'text-slate-400 line-through' : 'text-slate-900'}`}>{task.text}</p>
                    </div>
                    <button onClick={async () => await deleteDoc(doc(db, 'Tasks', task.id))} className="text-slate-200 hover:text-red-500 p-1 flex-shrink-0"><Trash2 size={16} /></button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

        {/* ─── TAB: STUDY NETWORK ─── */}
        {tab === 'network' && (
          <div className="bg-white rounded-[2.5rem] border border-slate-200/60 shadow-sm overflow-hidden">
            <div className="flex items-center gap-3 px-6 pt-6 pb-4 border-b border-slate-100">
              <div className="w-9 h-9 bg-orange-500 text-white rounded-xl flex items-center justify-center"><Users size={18} /></div>
              <h2 className="text-sm font-[1000] text-slate-900 uppercase tracking-tighter">Study Network</h2>
            </div>
          <div className="p-4">
            <button onClick={() => navigate('/dashboard/groups')} className="w-full flex items-center justify-between p-5 bg-slate-900 text-white rounded-2xl active:scale-95 transition-all">
              <div className="flex items-center gap-3"><Users size={20} className="text-orange-400" /><div><p className="text-xs font-black uppercase tracking-widest">Study Groups</p><p className="text-[9px] text-slate-400 mt-0.5">Join or create a group</p></div></div>
              <ArrowRight size={18} className="text-slate-500" />
            </button>
            <div className="mt-3 grid grid-cols-2 gap-3">
              <div className="bg-slate-50 p-4 rounded-2xl text-center">
                <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Streak</p>
                <p className="text-2xl font-[1000] text-slate-900 mt-1">{userData?.streak || 0}</p>
                <p className="text-[8px] text-slate-400">days</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-2xl text-center">
                <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Total Focus</p>
                <p className="text-2xl font-[1000] text-slate-900 mt-1">{formatDuration(stats.weekly)}</p>
                <p className="text-[8px] text-slate-400">this week</p>
              </div>
            </div>
          </div>
        </div>
      )}


        {/* ── Whitelist Modal ── */}
        {showWhitelist && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-6 bg-slate-950/90 backdrop-blur-xl animate-in fade-in duration-300">
            <div className="w-full max-w-2xl bg-white rounded-[3.5rem] shadow-3xl flex flex-col max-h-[85vh] overflow-hidden">
              <div className="p-8 md:p-10 border-b border-slate-100 flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-[1000] text-slate-900 tracking-tighter uppercase">Iron Focus Configuration</h2>
                  <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mt-2">Whitelist essential apps to bypass the lock</p>
                </div>
                <button onClick={() => setShowWhitelist(false)} className="p-4 bg-slate-100 hover:bg-slate-200 rounded-2xl text-slate-500 transition-all"><X size={20} /></button>
              </div>

              <div className="px-10 py-6 border-b border-slate-100">
                <div className="relative group">
                  <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input
                    type="text"
                    placeholder="Search Apps..."
                    className="w-full pl-16 pr-8 py-5 bg-slate-50 border-2 border-transparent focus:border-blue-500/30 focus:bg-white rounded-[1.5rem] text-sm font-bold outline-none transition-all"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-6 md:p-10 space-y-3 custom-scrollbar">
                {isNative && installedApps.length === 0 && (
                  <div className="text-center py-10 space-y-4">
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest animate-pulse">Fetching installed apps...</p>
                    <button onClick={fetchApps} className="text-[10px] font-black text-blue-600 uppercase tracking-widest border border-blue-600 px-4 py-2 rounded-xl hover:bg-blue-50">Retry Fetch</button>
                  </div>
                )}
                {filteredApps.length === 0 && installedApps.length > 0 && (
                  <div className="text-center py-10">
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">No apps match your search.</p>
                  </div>
                )}
                {filteredApps.map(app => {
                  const isSelected = (allowedPackages || '').includes(app.packageName);
                  return (
                    <div
                      key={app.packageName}
                      onClick={() => toggleApp(app.packageName)}
                      className={`flex items-center justify-between p-5 rounded-[1.5rem] cursor-pointer transition-all border-2 ${isSelected ? 'bg-blue-50 border-blue-200' : 'bg-slate-50/50 border-transparent hover:bg-slate-50'}`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-[1000] text-lg ${isSelected ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-500'}`}>{app.name[0]}</div>
                        <div>
                          <p className="text-sm font-[1000] text-slate-900 uppercase tracking-tight leading-none">{app.name}</p>
                          <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest mt-2 truncate max-w-[200px]">{app.packageName}</p>
                        </div>
                      </div>
                      {isSelected && <CheckCircle2 size={24} className="text-blue-600" />}
                    </div>
                  );
                })}
              </div>

              <div className="p-8 bg-slate-50/50 border-t border-slate-100">
                <button
                  onClick={() => setShowWhitelist(false)}
                  className="w-full py-5 bg-slate-900 text-white rounded-[1.5rem] font-black text-xs uppercase tracking-[0.2em] shadow-xl transition-all active:scale-95"
                >
                  Apply Changes
                </button>
              </div>
            </div>
          </div>
        )}

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
              <button onClick={() => { updateDoc(doc(db, 'users', user.uid), { dailyGoal: Number(goals.daily), weeklyGoal: Number(goals.weekly), monthlyGoal: Number(goals.monthly) }); setShowGoalModal(false); }} className="w-full py-6 bg-slate-900 text-white rounded-[2rem] font-black uppercase tracking-widest shadow-xl">Update Strategy</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
