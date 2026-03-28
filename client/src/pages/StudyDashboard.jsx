import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  doc, getDoc, collection, query, where, getDocs,
  updateDoc, addDoc, deleteDoc
} from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../context/AuthContext';
import {
  Clock, Plus, Flame, Target, BookOpen,
  Calendar, BarChart3, Settings, Trash2, Trophy,
  Users, Hash, ArrowRight, ClipboardList, CalendarDays,
  CheckCircle2, Circle, Save, Shield, Zap, Award, Timer, ChevronRight
} from 'lucide-react';
import PremiumAds from '../components/PremiumAds';
import { startFocusSession, stopFocusSession, getInstalledApps, checkAccessibility, openSettings } from '../services/AppBlocker';

// ─── Helper ──────────────────────────────────────────────
function formatDuration(sec) {
  if (!sec || sec <= 0) return '0 min';
  const h = Math.floor(sec / 3600);
  const m = Math.floor((sec % 3600) / 60);
  const s = sec % 60;
  if (h > 0) return `${h} hr ${m} min`;
  if (m > 0) return `${m} min ${s} sec`;
  return `${s} sec`;
}

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const SLOTS = ['6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM', '9 PM', '10 PM'];
const ALL_BADGES = [
  { id: 'streak_3', icon: '🔥', name: '3-Day Streak', desc: 'Lagatar 3 din padha!', color: 'from-orange-500 to-red-600' },
  { id: 'streak_7', icon: '🌟', name: '7-Day Streak', desc: 'Ek hafte ki mehnat!', color: 'from-yellow-500 to-amber-600' },
  { id: 'streak_30', icon: '👑', name: '30-Day Streak', desc: 'Ek mahina lagatar! Legend!', color: 'from-purple-500 to-indigo-700' },
  { id: 'first_hour', icon: '⏱', name: 'First Hour', desc: 'Pehla 1 ghanta complete!', color: 'from-blue-500 to-cyan-600' },
  { id: 'ten_hours', icon: '⚡', name: '10 Hours Club', desc: 'Total 10 ghante padhe!', color: 'from-emerald-500 to-teal-600' },
  { id: 'sessions_5', icon: '📚', name: '5 Sessions', desc: '5 study sessions complete!', color: 'from-pink-500 to-rose-600' },
  { id: 'sessions_20', icon: '🎯', name: '20 Sessions', desc: '20 sessions master!', color: 'from-violet-500 to-purple-700' },
  { id: 'goals_hit', icon: '🏆', name: 'Goal Crusher', desc: 'Daily goal hit ki!', color: 'from-amber-400 to-yellow-600' },
];

// ─── Tabs ─────────────────────────────────────────────────
const TABS = [
  { id: 'timer', label: 'Focus Timer', icon: <Clock size={15} /> },
  { id: 'overview', label: 'Overview', icon: <BarChart3 size={15} /> },
  { id: 'todo', label: 'Aaj ka Plan', icon: <ClipboardList size={15} /> },
  { id: 'group', label: 'Study Network', icon: <Users size={15} /> },
  { id: 'achievements', label: 'Achievements', icon: <Trophy size={15} /> },
  { id: 'admin', label: 'Admin Ops', icon: <Shield size={15} className="text-red-500" /> },
];

export default function StudyDashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [tab, setTab] = useState('timer'); // Start at timer as requested

  // ── Shared Data ───────────────────────────────────────
  const [userData, setUserData] = useState(null);
  const [subjects, setSubjects] = useState([]);
  const [sessions, setSessions] = useState([]);
  const [groups, setGroups] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [sessionCount, setSessionCount] = useState(0);
  const [loading, setLoading] = useState(true);

  // ── Goals ─────────────────────────────────────────────
  const [goals, setGoals] = useState({ daily: 0, weekly: 0, monthly: 0 });
  const [showGoalModal, setShowGoalModal] = useState(false);

  // ── Subjects ──────────────────────────────────────────
  const [showSubjectModal, setShowSubjectModal] = useState(false);
  const [newSubject, setNewSubject] = useState('');

  // ── Timer State ───────────────────────────────────────
  const [timerActive, setTimerActive] = useState(false);
  const [timerTime, setTimerTime] = useState(1500);
  const [timerSubject, setTimerSubject] = useState('OTHERS');
  const [customMinutes, setCustomMinutes] = useState(25);
  const [timerMode, setTimerMode] = useState('COUNTDOWN'); // 'COUNTDOWN' or 'STOPWATCH'
  const timerRef = useRef(null);

  // ── Groups ────────────────────────────────────────────
  const [showCreateGroup, setShowCreateGroup] = useState(false);
  const [showJoinGroup, setShowJoinGroup] = useState(false);
  const [newGroupName, setNewGroupName] = useState('');
  const [joinCode, setJoinCode] = useState('');
  const [groupLoading, setGroupLoading] = useState(false);

  // ── Todo ──────────────────────────────────────────────
  const [newTask, setNewTask] = useState('');
  const [taskSub, setTaskSub] = useState('');

  // ── Timetable ─────────────────────────────────────────
  const [schedule, setSchedule] = useState({});
  const [scheduleSaved, setScheduleSaved] = useState(false);

  // ── Edit Task ─────────────────────────────────────────
  const [editValue, setEditValue] = useState('');

  // ── Hardcore Focus ────────────────────────────────────
  const [installedApps, setInstalledApps] = useState([]);
  const [allowedApps, setAllowedApps] = useState([]); // List of package names
  const [showAppPicker, setShowAppPicker] = useState(false);
  const [isBlockerEnabled, setIsBlockerEnabled] = useState(true);

  useEffect(() => {
    const runCheck = async () => {
      const enabled = await checkAccessibility();
      setIsBlockerEnabled(enabled);
    };
    runCheck();
  }, []);

  useEffect(() => { if (user) fetchAll(); }, [user]);

  // Timer Logic
  useEffect(() => {
    if (timerActive) {
      timerRef.current = setInterval(() => {
        setTimerTime(t => {
          if (timerMode === 'COUNTDOWN') {
            if (t <= 1) {
              clearInterval(timerRef.current);
              setTimerActive(false);
              completeCountdown();
              return 0;
            }
            return t - 1;
          } else {
            return t + 1;
          }
        });
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [timerActive, timerMode]);

  const loadApps = async () => {
    const apps = await getInstalledApps();
    setInstalledApps(apps);
    setShowAppPicker(true);
  };

  const toggleAppSelection = (pkg) => {
    if (allowedApps.includes(pkg)) setAllowedApps(allowedApps.filter(a => a !== pkg));
    else if (allowedApps.length < 5) setAllowedApps([...allowedApps, pkg]);
    else alert('Sirf 5 apps allow kar sakte hain!');
  };

  const completeCountdown = () => {
    const fullBlock = customMinutes * 60;
    saveTimerSession(fullBlock);
    setTimerTime(customMinutes * 60);
    alert('Focus session complete! Your time has been added to overview.');
  };

  const fmtTimer = (s) => {
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = s % 60;
    return `${h > 0 ? h.toString().padStart(2, '0') + ':' : ''}${m.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
  };

  const saveTimerSession = async (manualTime = null) => {
    const timeToSave = manualTime || (timerMode === 'STOPWATCH' ? timerTime : (customMinutes * 60 - timerTime));
    if (timeToSave < 1) { setTimerActive(false); setTimerTime(timerMode === 'STOPWATCH' ? 0 : customMinutes * 60); return; }

    try {
      await addDoc(collection(db, 'StudySessions'), {
        userId: user.uid,
        userName: user.name || 'Scholar',
        subject: timerSubject,
        duration: timeToSave,
        date: todayStr,
        createdAt: new Date().toISOString()
      });

      const userRef = doc(db, 'users', user.uid);
      const today = new Date().toISOString().split('T')[0];
      const lastDate = userData?.lastStudyDate || '';

      let newStreak = userData?.streak || 0;
      if (lastDate !== today) {
        const yesterday = new Date(); yesterday.setDate(yesterday.getDate() - 1);
        const yStr = yesterday.toISOString().split('T')[0];
        if (lastDate === yStr) newStreak += 1;
        else if (newStreak === 0) newStreak = 1;
      }

      await updateDoc(userRef, {
        streak: newStreak,
        lastStudyDate: today,
        totalStudyTime: (userData?.totalStudyTime || 0) + timeToSave
      });

      // Disable blocker when session is saved/finished
      await enableAppBlocker(false);

      setTimerActive(false);
      setTimerTime(timerMode === 'STOPWATCH' ? 0 : customMinutes * 60);
      fetchAll();
    } catch (e) { console.error('save error:', e); }
  };

  const fetchAll = async () => {
    setLoading(true);
    try {
      const uSnap = await getDoc(doc(db, 'users', user.uid));
      if (uSnap.exists()) {
        const d = uSnap.data();
        setUserData(d);
        setGoals({ daily: d.dailyGoal || 0, weekly: d.weeklyGoal || 0, monthly: d.monthlyGoal || 0 });
        setSchedule(d.timetable || {});
      } else {
        setUserData({});
        setGoals({ daily: 0, weekly: 0, monthly: 0 });
        setSchedule({});
      }

      const subSnap = await getDocs(query(collection(db, 'Subjects'), where('userId', '==', user.uid)));
      setSubjects(subSnap.docs.map(d => ({ id: d.id, ...d.data() })));

      const sessSnap = await getDocs(query(collection(db, 'StudySessions'), where('userId', '==', user.uid)));
      setSessionCount(sessSnap.size);
      const thirtyDaysAgo = new Date(); thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
      const cutoff = thirtyDaysAgo.toISOString().split('T')[0];
      setSessions(sessSnap.docs.map(d => ({ ...d.data() })).filter(s => s.date >= cutoff));

      const grpSnap = await getDocs(query(collection(db, 'Groups'), where('members', 'array-contains', user.uid)));
      setGroups(grpSnap.docs.map(d => ({ id: d.id, ...d.data() })));

      const today = new Date().toISOString().split('T')[0];
      const taskSnap = await getDocs(query(collection(db, 'Tasks'), where('userId', '==', user.uid), where('date', '==', today)));
      setTasks(taskSnap.docs.map(d => ({ id: d.id, ...d.data() })));

    } catch (e) { console.error('fetchAll error:', e); }
    finally { setLoading(false); }
  };

  const todayStr = new Date().toISOString().split('T')[0];
  const last7 = Array.from({ length: 7 }, (_, i) => { const d = new Date(); d.setDate(d.getDate() - i); return d.toISOString().split('T')[0]; });
  const todaySec = sessions.filter(s => s.date === todayStr).reduce((a, s) => a + s.duration, 0);
  const weeklySec = sessions.filter(s => last7.includes(s.date)).reduce((a, s) => a + s.duration, 0);
  const curM = new Date().getMonth(), curY = new Date().getFullYear();
  const monthlySec = sessions.filter(s => { const d = new Date(s.date); return d.getMonth() === curM && d.getFullYear() === curY; }).reduce((a, s) => a + s.duration, 0);
  const subjectToday = sessions.filter(s => s.date === todayStr).reduce((acc, s) => { acc[s.subject] = (acc[s.subject] || 0) + s.duration; return acc; }, {});
  const dayTotals = sessions.reduce((acc, s) => { acc[s.date] = (acc[s.date] || 0) + s.duration; return acc; }, {});
  const bestDaySec = Math.max(0, ...Object.values(dayTotals));
  const heatmap = Array.from({ length: 7 }, (_, i) => { const d = new Date(); d.setDate(d.getDate() - (6 - i)); const dStr = d.toISOString().split('T')[0]; return { dStr, day: d.toLocaleDateString('en-US', { weekday: 'short' }), sec: sessions.filter(s => s.date === dStr).reduce((a, s) => a + s.duration, 0), isToday: dStr === todayStr }; });
  const maxH = Math.max(1, ...heatmap.map(d => d.sec));
  const getProgress = (sec, g) => (!g || g <= 0) ? 0 : Math.min(100, (sec / (g * 3600)) * 100).toFixed(0);

  const saveGoals = async () => { await updateDoc(doc(db, 'users', user.uid), { dailyGoal: Number(goals.daily), weeklyGoal: Number(goals.weekly), monthlyGoal: Number(goals.monthly) }); setShowGoalModal(false); fetchAll(); };
  const addSubject = async () => { const t = newSubject.trim(); if (!t || subjects.length >= 10) return; try { await addDoc(collection(db, 'Subjects'), { userId: user.uid, subjectName: t.toUpperCase(), createdAt: new Date().toISOString() }); setNewSubject(''); setShowSubjectModal(false); fetchAll(); } catch (e) { console.error(e); alert('Subject save nahi hua.'); } };
  const delSubject = async (id) => { try { await deleteDoc(doc(db, 'Subjects', id)); fetchAll(); } catch (err) { console.error('Delete subject error:', err); } };
  const genCode = () => Math.random().toString(36).substring(2, 8).toUpperCase();
  const createGroup = async () => { if (!newGroupName.trim()) return; setGroupLoading(true); try { await addDoc(collection(db, 'Groups'), { groupName: newGroupName.trim(), groupCode: genCode(), createdBy: user.uid, members: [user.uid], memberCount: 1, maxMembers: 50, createdAt: new Date().toISOString() }); setNewGroupName(''); setShowCreateGroup(false); fetchAll(); } catch (e) { console.error(e); } finally { setGroupLoading(false); } };
  const joinGroup = async () => { if (!joinCode.trim()) return; setGroupLoading(true); try { const snp = await getDocs(query(collection(db, 'Groups'), where('groupCode', '==', joinCode.toUpperCase()))); if (snp.empty) { alert('Invalid code!'); return; } const gDoc = snp.docs[0]; const gd = gDoc.data(); if (gd.members.includes(user.uid)) { alert('Already member!'); return; } await updateDoc(doc(db, 'Groups', gDoc.id), { members: [...gd.members, user.uid], memberCount: gd.memberCount + 1 }); setJoinCode(''); setShowJoinGroup(false); fetchAll(); } catch (e) { console.error(e); } finally { setGroupLoading(false); } };

  const addTask = async () => {
    const t = newTask.trim();
    const s = taskSub.trim().toUpperCase();
    if (!t || !s) return;
    const exists = subjects.find(sub => sub.subjectName === s);
    if (!exists) { await addDoc(collection(db, 'Subjects'), { userId: user.uid, subjectName: s, createdAt: new Date().toISOString() }); }
    await addDoc(collection(db, 'Tasks'), { userId: user.uid, text: t, subject: s, done: false, date: todayStr, createdAt: new Date().toISOString() });
    setNewTask(''); setTaskSub(''); fetchAll();
  };
  const toggleTask = async (task) => { await updateDoc(doc(db, 'Tasks', task.id), { done: !task.done }); setTasks(tasks.map(t => t.id === task.id ? { ...t, done: !t.done } : t)); };
  const delTask = async (id) => { await deleteDoc(doc(db, 'Tasks', id)); setTasks(tasks.filter(t => t.id !== id)); };

  const updateTask = async () => {
    if (!editingTask || !editValue.trim()) return;
    await updateDoc(doc(db, 'Tasks', editingTask.id), { text: editValue });
    setTasks(tasks.map(t => t.id === editingTask.id ? { ...t, text: editValue } : t));
    setEditingTask(null);
  };

  const saveSchedule = async () => { await updateDoc(doc(db, 'users', user.uid), { timetable: schedule }); setScheduleSaved(true); setTimeout(() => setScheduleSaved(false), 3000); };

  const earnedIds = [...(userData?.badges || [])];
  if (sessionCount >= 5 && !earnedIds.includes('sessions_5')) earnedIds.push('sessions_5');
  if (sessionCount >= 20 && !earnedIds.includes('sessions_20')) earnedIds.push('sessions_20');
  const todayGoalHit = goals.daily > 0 && todaySec >= (goals.daily * 3600);
  if (todayGoalHit && !earnedIds.includes('goals_hit')) earnedIds.push('goals_hit');
  const earned = ALL_BADGES.filter(b => earnedIds.includes(b.id));
  const locked = ALL_BADGES.filter(b => !earnedIds.includes(b.id));

  if (loading) return <div className="flex justify-center p-20"><div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div></div>;

  return (
    <div className="max-w-5xl mx-auto space-y-6 pb-20">

      {/* ── Header: Streak & Start Study ── */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 flex items-center justify-between bg-[#0d121f] p-5 rounded-[2rem] border border-slate-800/50">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-orange-500/10 rounded-2xl flex items-center justify-center border border-orange-500/20 shrink-0">
              <Flame size={24} className="text-orange-500" fill="currentColor" />
            </div>
            <div>
              <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest">Daily Streak</p>
              <p className="text-2xl font-black text-white leading-none">{userData?.streak || 0} <span className="text-xs font-bold text-slate-400">days</span></p>
              <p className="text-[9px] mt-0.5 text-slate-600">
                {todaySec >= 7200
                  ? '✅ 2 hr complete — streak safe!'
                  : `⚠️ ${Math.floor((7200 - todaySec) / 60)} min aur padho streak ke liye`}
              </p>
            </div>
          </div>
          <button onClick={() => setShowGoalModal(true)} className="p-2.5 bg-slate-800/50 rounded-xl text-slate-400 hover:text-white transition-colors" title="Goals"><Settings size={18} /></button>
        </div>
        <button onClick={() => setTab('timer')} className="flex-1 sm:max-w-[220px] bg-blue-600 hover:bg-blue-500 text-white rounded-[2rem] font-black uppercase text-sm tracking-widest shadow-lg shadow-blue-900/30 flex items-center justify-center gap-3 active:scale-[0.98] transition-all p-5 group">
          <Clock size={20} className="group-hover:rotate-12 transition-transform" />
          <span>▶ Start Study</span>
        </button>
      </div>

      {/* ── Tab Navigation ─────────────────────────────── */}
      <div className="flex gap-1 bg-[#0d121f] p-1.5 rounded-2xl border border-slate-800/50 overflow-x-auto">
        {TABS.map(t => {
          if (t.id === 'admin' && user?.email !== 'prince86944@gmail.com' && user?.role !== 'SUPER_ADMIN') return null;
          return (
            <button key={t.id} onClick={() => t.id === 'admin' ? navigate('/dashboard/admin') : setTab(t.id)} className={`flex-1 min-w-fit flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-wider transition-all whitespace-nowrap ${tab === t.id ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-500 hover:text-white hover:bg-slate-800/50'}`}>
              {t.icon} {t.label}
            </button>
          );
        })}
      </div>

      <PremiumAds type="BANNER" />

      {/* TAB: FOCUS TIMER */}
      {tab === 'timer' && (
        <div className="space-y-6 animate-in fade-in duration-300">
          <div className="bg-[#0d121f] p-10 md:p-16 rounded-[4rem] border border-slate-800/80 shadow-2xl relative overflow-hidden flex flex-col items-center">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent pointer-events-none"></div>

            <div className="flex flex-col items-center gap-4 mb-8">
              <div className="flex gap-2 p-1.5 bg-slate-900/80 rounded-2xl border border-slate-800/50">
                {['COUNTDOWN', 'STOPWATCH'].map(m => (
                  <button key={m} onClick={() => !timerActive && {
                    COUNTDOWN: () => { setTimerMode('COUNTDOWN'); setTimerTime(customMinutes * 60); },
                    STOPWATCH: () => { setTimerMode('STOPWATCH'); setTimerTime(0); }
                  }[m]()}
                    className={`px-4 py-1.5 rounded-xl text-[8px] font-black uppercase tracking-widest transition-all ${timerMode === m ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/20' : 'text-slate-500 hover:text-white'}`}>
                    {m}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-3 px-6 py-2 bg-slate-900/50 rounded-full border border-slate-800/50">
                <Target size={14} className="text-orange-400" />
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Current Goal: <span className="text-white">{timerSubject}</span></p>
              </div>
            </div>

            {!isBlockerEnabled && window.Capacitor && (
              <div className="max-w-sm mx-auto bg-orange-500/10 border border-orange-500/20 p-6 rounded-[2.5rem] mb-10 flex flex-col items-center text-center gap-5 animate-in slide-in-from-top-4 duration-500">
                <div className="w-14 h-14 bg-orange-600/20 text-orange-500 rounded-3xl flex items-center justify-center animate-bounce shadow-2xl"><Shield size={24} /></div>
                <div className="space-y-1">
                  <h3 className="text-xs font-[1000] text-white uppercase tracking-[0.3em]">Iron Focus Locked</h3>
                  <p className="text-[9px] text-orange-200/50 font-bold uppercase leading-relaxed tracking-wider">Accessibility permission is needed to block distracting apps.</p>
                </div>
                <button onClick={openSettings} className="group px-10 py-4 bg-orange-600 hover:bg-orange-500 text-white rounded-[1.8rem] font-black text-[10px] uppercase tracking-[0.2em] shadow-2xl active:scale-95 transition-all flex items-center gap-2">
                  ACTIVATE NOW <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            )}

            <h1 className="text-8xl md:text-[8rem] font-[1000] text-white tracking-tighter tabular-nums leading-none">
              {fmtTimer(timerTime)}
            </h1>

            <div className="mt-12 flex gap-4 w-full max-w-sm">
              {!timerActive ? (
                <div className="flex flex-col items-center gap-6 w-full max-w-sm">
                  {timerMode === 'COUNTDOWN' && (
                    <div className="flex items-center gap-4 bg-slate-900/80 p-4 rounded-3xl border border-slate-800/50 w-full animate-in slide-in-from-bottom-2">
                      <div className="p-3 bg-blue-600/10 text-blue-500 rounded-2xl"><Timer size={20} /></div>
                      <div className="flex-1">
                        <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Set Blocks (Minutes)</p>
                        <div className="flex items-baseline gap-2">
                          <input type="number" min="1" max="600" value={customMinutes}
                            onChange={e => {
                              const v = Math.min(600, Math.max(1, parseInt(e.target.value) || 1));
                              setCustomMinutes(v); setTimerTime(v * 60);
                            }}
                            className="w-20 bg-transparent text-white text-3xl font-black outline-none border-b-2 border-slate-800 focus:border-blue-500 transition-all" />
                          <span className="text-[10px] font-bold text-slate-600 uppercase">Mins</span>
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="flex gap-3 w-full">
                    <button onClick={() => {
                      setTimerActive(true);
                      if (timerMode === 'COUNTDOWN') {
                        startFocusSession(customMinutes, allowedApps);
                      } else {
                        enableAppBlocker(true);
                      }
                    }}
                      className="flex-1 py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-3xl font-[1000] text-sm uppercase tracking-widest shadow-2xl active:scale-95 transition-all flex items-center justify-center gap-3">
                      {timerTime > 0 && ((timerMode === 'COUNTDOWN' && timerTime !== (customMinutes * 60)) || (timerMode === 'STOPWATCH')) ? 'Resume' : 'Start Hub'} <ArrowRight size={18} />
                    </button>
                    {(timerMode === 'STOPWATCH' && timerTime > 0) || (timerMode === 'COUNTDOWN' && timerTime < customMinutes * 60) ? (
                      <button onClick={() => saveTimerSession()} className="px-8 py-5 bg-slate-800 text-white rounded-3xl font-black text-[10px] uppercase tracking-widest hover:bg-red-600 transition-all">Done</button>
                    ) : null}
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center gap-4 w-full max-w-sm">
                  <div className="flex gap-4 w-full">
                    <button onClick={() => { setTimerActive(false); enableAppBlocker(false); }}
                      className="flex-1 py-5 bg-orange-600 hover:bg-orange-500 text-white rounded-3xl font-[1000] text-xs uppercase tracking-widest transition-all shadow-xl">
                      Pause
                    </button>
                    <button onClick={() => saveTimerSession()}
                      className="flex-1 py-5 bg-red-600 hover:bg-red-500 text-white rounded-[2rem] font-[1000] text-xs uppercase tracking-widest transition-all shadow-xl">
                      Stop & Save
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-2">
              {subjects.map(s => (
                <button key={s.id} onClick={() => !timerActive && setTimerSubject(s.subjectName)}
                  className={`px-5 py-2.5 rounded-xl text-[10px] font-bold uppercase transition-all ${timerSubject === s.subjectName ? 'bg-white text-black shadow-xl scale-105' : 'bg-slate-900 text-slate-500 hover:text-white'}`}>
                  {s.subjectName}
                </button>
              ))}
              <button onClick={() => !timerActive && setTimerSubject('OTHERS')}
                className={`px-5 py-2.5 rounded-xl text-[10px] font-bold uppercase transition-all ${timerSubject === 'OTHERS' ? 'bg-white text-black shadow-xl scale-105' : 'bg-slate-900 text-slate-500 hover:text-white'}`}>
                OTHERS
              </button>
              <button onClick={() => !timerActive && setShowSubjectModal(true)}
                className="px-5 py-2.5 rounded-xl text-[10px] font-bold uppercase transition-all bg-blue-600/20 text-blue-400 hover:bg-blue-600 hover:text-white flex items-center gap-2">
                <Plus size={14} /> Add Subject
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TAB: OVERVIEW */}
      {tab === 'overview' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: 'Aaj (Today)', sec: todaySec, goal: goals.daily, color: 'bg-blue-500', ic: <Target size={11} className="text-blue-400" /> },
              { label: 'Is Hafte', sec: weeklySec, goal: goals.weekly, color: 'bg-emerald-500', ic: <Calendar size={11} className="text-emerald-400" /> },
              { label: 'Is Mahine', sec: monthlySec, goal: goals.monthly, color: 'bg-indigo-500', ic: <BarChart3 size={11} className="text-indigo-400" /> },
            ].map(({ label, sec, goal, color, ic }) => (
              <div key={label} className="bg-[#0d121f] p-5 rounded-2xl border border-slate-800/50 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1 text-[9px] font-black uppercase tracking-widest text-slate-500">{ic}{label}</span>
                  {goal > 0 && <span className="text-[9px] font-bold text-slate-500">{getProgress(sec, goal)}%</span>}
                </div>
                <p className="text-xl font-black text-white leading-none">{formatDuration(sec)}</p>
                <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div className={`h-full ${color} rounded-full transition-all duration-1000`} style={{ width: `${getProgress(sec, goal)}%` }}></div>
                </div>
                <p className="text-[9px] text-slate-600">{goal > 0 ? `Goal: ${goal} hr` : <span className="text-slate-500 cursor-pointer hover:text-blue-400" onClick={() => setShowGoalModal(true)}>Set goal ⚙️</span>}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: 'Aaj ke Sessions', value: sessions.filter(s => s.date === todayStr).length },
              { label: 'Aaj ka Time', value: formatDuration(todaySec) },
              { label: 'Is Hafte', value: formatDuration(weeklySec) },
              { label: 'Best Day Ever', value: bestDaySec > 0 ? formatDuration(bestDaySec) : '—' },
            ].map(({ label, value }) => (
              <div key={label} className="bg-[#0d121f] p-4 rounded-2xl border border-slate-800/50 text-center">
                <p className="text-[8px] text-slate-500 font-bold uppercase tracking-widest mb-1">{label}</p>
                <p className="text-base font-black text-white leading-tight">{value}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#0d121f] p-6 rounded-[2rem] border border-slate-800/50">
            <p className="text-[9px] font-black uppercase tracking-widest text-slate-500 mb-4 flex items-center gap-2"><Calendar size={11} /> Pichle 7 Din</p>
            <div className="flex items-end justify-between gap-2 h-24">
              {heatmap.map(d => (
                <div key={d.dStr} className="flex flex-col items-center gap-1 flex-1">
                  <span className="text-[8px] font-bold text-slate-600">{d.sec > 0 ? formatDuration(d.sec).split(' ').slice(0, 2).join('') : '—'}</span>
                  <div className={`w-full rounded-t-lg transition-all duration-700 ${d.isToday ? 'bg-blue-500' : d.sec > 0 ? 'bg-emerald-600' : 'bg-slate-800'}`} style={{ height: `${Math.max(8, (d.sec / maxH) * 100)}%` }}></div>
                  <span className={`text-[9px] font-black ${d.isToday ? 'text-blue-400' : 'text-slate-500'}`}>{d.day}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#0d121f] p-6 rounded-[2rem] border border-slate-800/50 space-y-4">
            <div className="flex items-center justify-between">
              <p className="text-[9px] font-black uppercase tracking-widest text-slate-500 flex items-center gap-2"><BookOpen size={11} />Your Subjects ({subjects.length}/10)</p>
              <button onClick={() => setShowSubjectModal(true)} disabled={subjects.length >= 10} className="flex items-center gap-1 text-[9px] font-black text-blue-400 hover:text-white bg-blue-600/10 hover:bg-blue-600 border border-blue-500/20 px-2.5 py-1.5 rounded-xl transition-all disabled:opacity-40"><Plus size={11} /> New</button>
            </div>
            {subjects.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-[10px] text-slate-600 mb-3">Add your subjects to start tracking!</p>
                <button onClick={() => setShowSubjectModal(true)} className="text-[10px] font-black text-blue-500 hover:underline">Click here to add</button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {subjects.map(sub => {
                  const tSec = subjectToday[sub.subjectName] || 0;
                  const totSec = sessions.filter(s => s.subject === sub.subjectName).reduce((a, s) => a + s.duration, 0);
                  return (
                    <div key={sub.id} className="flex items-center justify-between p-3 bg-slate-900/60 rounded-2xl border border-slate-800/50">
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full shrink-0"></div>
                        <div>
                          <p className="text-xs font-black text-white uppercase">{sub.subjectName}</p>
                          <p className="text-[8px] text-slate-500">{formatDuration(tSec)} aaj · {formatDuration(totSec)} total</p>
                        </div>
                      </div>
                      <button onClick={() => delSubject(sub.id)} className="p-2 text-slate-700 hover:text-red-500"><Trash2 size={13} /></button>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      )}

      {/* TAB: STUDY NETWORK */}
      {tab === 'group' && (
        <div className="space-y-6 animate-in fade-in duration-300">
          <div className="bg-[#02040a] p-8 rounded-[3rem] border border-slate-800/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-blue-600/10 rounded-full blur-[80px] pointer-events-none"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl font-[1000] text-white tracking-tighter uppercase">Study Network</h2>
                <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.3em] mt-1">Connect with other scholars</p>
              </div>
              <div className="flex gap-3">
                <button onClick={() => setShowJoinGroup(true)} className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white border border-slate-800 rounded-2xl font-black text-[10px] uppercase tracking-widest">Join By Code</button>
                <button onClick={() => setShowCreateGroup(true)} className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center gap-2"><Plus size={14} /> Create</button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {groups.map(g => {
              const hubName = g.groupName || g.name || 'Hub';
              return (
                <div key={g.id} className="bg-[#0d121f] p-6 rounded-[2.5rem] border border-slate-800/80 hover:border-blue-500/30 transition-all group">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-400 font-black text-xl">{hubName[0]}</div>
                    <div className="text-[9px] font-black text-slate-500 bg-slate-900 px-3 py-1 rounded-full uppercase italic">Code: {g.groupCode || g.code}</div>
                  </div>
                  <h3 className="text-lg font-black text-white uppercase group-hover:text-blue-400 transition-colors">{hubName}</h3>
                  <p className="text-[10px] text-slate-600 font-bold uppercase mt-1">{g.memberCount} Mems · Hub Active</p>
                  <button onClick={() => navigate(`/dashboard/study/group/${g.id}`)} className="mt-6 w-full py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-[10px] font-black uppercase tracking-widest">Open Hub</button>
                </div>
              );
            })}
            {groups.length === 0 && (
              <div className="col-span-full text-center py-20 bg-slate-900/20 rounded-[3rem] border border-dashed border-slate-800">
                <Users size={32} className="mx-auto text-slate-800 mb-4" />
                <p className="text-slate-600 font-bold uppercase tracking-widest text-[11px]">No active groups found</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* TAB: AAJ KA PLAN */}
      {tab === 'todo' && (
        <div className="space-y-5 animate-in fade-in duration-200">
          <div className="bg-[#0d121f] p-6 rounded-[2rem] border border-slate-800/50">
            <p className="text-lg font-black text-white mb-1">📋 Aaj ka Study Plan</p>
            <p className="text-[10px] text-slate-500 mb-6">{new Date().toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long' })}</p>
            {tasks.length > 0 && (
              <div className="mb-5 bg-[#161c2c] p-4 rounded-2xl border border-slate-700/50 space-y-2">
                <div className="flex justify-between text-[9px] font-black uppercase text-slate-500">
                  <span>Progress</span><span className="text-white">{tasks.filter(t => t.done).length}/{tasks.length}</span>
                </div>
                <div className="w-full h-1.5 bg-slate-800 rounded-full"><div className="h-full bg-blue-500 rounded-full transition-all" style={{ width: `${(tasks.filter(t => t.done).length / tasks.length) * 100}%` }}></div></div>
                {tasks.every(t => t.done) && <p className="text-center text-emerald-400 text-xs font-black">🎉 Sab complete!</p>}
              </div>
            )}
            <div className="flex flex-col md:flex-row gap-3 mb-6 bg-slate-900/40 p-5 rounded-3xl border border-slate-800/30">
              <input value={newTask} onChange={e => setNewTask(e.target.value)} onKeyDown={e => e.key === 'Enter' && addTask()} placeholder="Kya padhna hai? (e.g. Exercise 1)" className="flex-[2] bg-[#161c2c] border border-slate-700/50 rounded-2xl px-5 py-3.5 text-white text-sm outline-none focus:border-blue-500 transition-all placeholder:text-slate-600 font-bold" />
              <div className="flex-1 flex gap-2">
                <input list="subjects-list" value={taskSub} onChange={e => setTaskSub(e.target.value)} placeholder="Subject" className="flex-1 bg-[#161c2c] border border-slate-700/50 rounded-2xl px-5 py-3.5 text-white text-xs outline-none focus:border-blue-500 transition-all font-black uppercase tracking-widest placeholder:text-slate-600" />
                <datalist id="subjects-list">
                  {subjects.map(s => <option key={s.id} value={s.subjectName} />)}
                </datalist>
                <button onClick={addTask} disabled={tasks.length >= 12 || !newTask.trim() || !taskSub.trim()} className="px-6 py-3.5 bg-blue-600 hover:bg-blue-500 disabled:opacity-40 text-white font-[1000] rounded-2xl transition-all shadow-xl active:scale-95"><Plus size={18} /></button>
              </div>
            </div>
            <div className="space-y-2">
              {tasks.length === 0 ? (
                <p className="text-center text-[10px] text-slate-600 py-8">Koi task nahi — Upar add karo!</p>
              ) : (
                tasks.map(task => (
                  <div key={task.id} className={`flex items-center gap-3 p-4 rounded-2xl border transition-all group ${task.done ? 'bg-emerald-900/10 border-emerald-500/20' : 'bg-slate-900/60 border-slate-800/50'}`}>
                    <button onClick={() => toggleTask(task)} className="shrink-0">{task.done ? <CheckCircle2 size={20} className="text-emerald-500" /> : <Circle size={20} className="text-slate-600 hover:text-blue-500 transition-colors" />}</button>
                    {editingTask?.id === task.id ? (
                      <div className="flex-1 flex gap-2">
                        <input value={editValue} onChange={e => setEditValue(e.target.value)} className="flex-1 bg-slate-800 text-white text-sm rounded-lg p-1 outline-none" />
                        <button onClick={updateTask} className="text-blue-500"><Save size={16} /></button>
                      </div>
                    ) : (
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          {task.subject && <span className="text-[7px] font-black bg-blue-600/10 text-blue-400 px-1.5 py-0.5 rounded-full uppercase tracking-tighter border border-blue-500/10">{task.subject}</span>}
                          <span className="text-[7px] text-slate-600 font-black uppercase tracking-widest">{task.date}</span>
                        </div>
                        <p className={`text-sm font-bold tracking-tight ${task.done ? 'line-through text-slate-600' : 'text-white'}`}
                          onClick={() => { setEditingTask(task); setEditValue(task.text); }}>{task.text}</p>
                      </div>
                    )}
                    {!task.done && (
                      <button onClick={() => { setTimerSubject(task.subject || 'OTHERS'); setTab('timer'); if (timerMode === 'COUNTDOWN') setTimerTime(customMinutes * 60); else setTimerTime(0); }}
                        className="px-3 py-1.5 bg-blue-600/10 hover:bg-blue-600 text-blue-500 hover:text-white rounded-xl text-[8px] font-black uppercase tracking-widest transition-all border border-blue-500/10 flex items-center gap-2 group">
                        <Zap size={10} className="fill-blue-500 group-hover:fill-white" /> Start Hub
                      </button>
                    )}
                    <button onClick={() => delTask(task.id)} className="opacity-0 group-hover:opacity-100 text-slate-600 hover:text-red-500 transition-all"><Trash2 size={14} /></button>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}

      {/* TAB: ACHIEVEMENTS */}
      {tab === 'achievements' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { ic: <Flame size={18} className="text-orange-500" />, label: 'Current Streak', val: `${userData?.streak || 0} days` },
              { ic: <Clock size={18} className="text-blue-500" />, label: 'Total Study', val: formatDuration(userData?.totalStudyTime || 0) },
              { ic: <Zap size={18} className="text-yellow-500" />, label: 'Sessions', val: sessionCount },
              { ic: <Award size={18} className="text-purple-500" />, label: 'Badges', val: `${earned.length}/${ALL_BADGES.length}` },
            ].map(({ ic, label, val }) => (
              <div key={label} className="bg-[#0d121f] p-4 rounded-2xl border border-slate-800/50 text-center space-y-2">
                <div className="flex justify-center">{ic}</div>
                <p className="text-[8px] text-slate-500 font-bold uppercase tracking-widest">{label}</p>
                <p className="text-lg font-black text-white">{val}</p>
              </div>
            ))}
          </div>
          {earned.length > 0 && (
            <div className="space-y-3">
              <p className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">✅ Earned ({earned.length})</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {earned.map(b => (
                  <div key={b.id} className={`bg-gradient-to-br ${b.color} p-5 rounded-2xl text-center space-y-1.5 shadow-lg`}>
                    <div className="text-3xl">{b.icon}</div>
                    <p className="text-xs font-black text-white uppercase tracking-tight">{b.name}</p>
                    <p className="text-[8px] text-white/70">{b.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* MODALS */}
      {showGoalModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-[#0d121f] border border-slate-800 p-8 rounded-[2.5rem] w-full max-w-sm shadow-2xl">
            <p className="text-xl font-black uppercase mb-1">Goals Set Karo</p>
            <p className="text-[10px] text-slate-500 mb-8">Aap kitna padhna chahte ho?</p>
            {[{ key: 'daily', label: 'Daily Goal', hint: 'Max 24 hr', max: 24 }, { key: 'weekly', label: 'Weekly Goal', hint: 'Max 168 hr', max: 168 }, { key: 'monthly', label: 'Monthly Goal', hint: 'Max 744 hr', max: 744 }].map(({ key, label, hint, max }) => (
              <div key={key} className="mb-5">
                <div className="flex justify-between mb-2"><p className="text-[9px] font-black uppercase tracking-widest text-slate-400">{label}</p><p className="text-[9px] text-slate-600">{hint}</p></div>
                <div className="flex items-center gap-3"><input type="number" min={0} max={max} value={goals[key]} onChange={e => setGoals({ ...goals, [key]: Math.min(max, Math.max(0, Number(e.target.value))) })} className="flex-1 bg-[#161c2c] border border-slate-700/50 rounded-2xl p-4 text-white font-black text-center outline-none focus:border-blue-500" /><span className="text-slate-500 text-sm font-bold">hr</span></div>
              </div>
            ))}
            <div className="flex gap-3 mt-2"><button className="flex-1 p-4 rounded-xl font-black text-[10px] uppercase text-slate-500 hover:bg-slate-800 transition-all" onClick={() => setShowGoalModal(false)}>Cancel</button><button className="flex-1 bg-blue-600 hover:bg-blue-500 p-4 rounded-xl font-black text-[10px] uppercase text-white" onClick={saveGoals}>Save</button></div>
          </div>
        </div>
      )}

      {showSubjectModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-[#0d121f] border border-slate-800 p-8 rounded-[2.5rem] w-full max-w-sm shadow-2xl">
            <p className="text-xl font-black uppercase mb-1">New Subject</p>
            <p className="text-[10px] text-slate-500 mb-8">{subjects.length}/10 used</p>
            <input maxLength={20} placeholder="Jaise: MATHS, PHYSICS, HINDI" className="w-full bg-[#161c2c] border border-slate-700/50 rounded-2xl p-4 text-white font-black uppercase mb-6 outline-none focus:border-blue-500 transition-all" value={newSubject} onChange={e => setNewSubject(e.target.value)} onKeyDown={e => e.key === 'Enter' && addSubject()} autoFocus />
            <div className="flex gap-3"><button className="flex-1 p-4 rounded-xl font-black text-[10px] uppercase text-slate-500 hover:bg-slate-800" onClick={() => { setShowSubjectModal(false); setNewSubject(''); }}>Cancel</button><button disabled={subjects.length >= 10 || !newSubject.trim()} className={`flex-1 p-4 rounded-xl font-black text-[10px] uppercase text-white transition-all ${subjects.length >= 10 || !newSubject.trim() ? 'bg-slate-700 opacity-50' : 'bg-blue-600 hover:bg-blue-500'}`} onClick={addSubject}>Add Subject</button></div>
          </div>
        </div>
      )}

      {showCreateGroup && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-[#0d121f] border border-slate-800 p-8 rounded-[2.5rem] w-full max-w-sm shadow-2xl">
            <p className="text-xl font-black uppercase mb-1">New Study Group</p>
            <p className="text-[10px] text-slate-500 mb-8">Group code se dosto ko join karao</p>
            <input maxLength={30} placeholder="Group ka naam..." className="w-full bg-[#161c2c] border border-slate-700/50 rounded-2xl p-4 text-white font-black mb-6 outline-none focus:border-blue-500" value={newGroupName} onChange={e => setNewGroupName(e.target.value)} onKeyDown={e => e.key === 'Enter' && createGroup()} autoFocus />
            <div className="flex gap-3"><button className="flex-1 p-4 rounded-xl font-black text-[10px] uppercase text-slate-500 hover:bg-slate-800" onClick={() => { setShowCreateGroup(false); setNewGroupName(''); }}>Cancel</button><button disabled={groupLoading || !newGroupName.trim()} className="flex-1 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 p-4 rounded-xl font-black text-[10px] uppercase text-white" onClick={createGroup}>{groupLoading ? 'Creating...' : 'Create Group'}</button></div>
          </div>
        </div>
      )}

      {showJoinGroup && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-[#0d121f] border border-slate-800 p-8 rounded-[2.5rem] w-full max-w-sm shadow-2xl">
            <p className="text-xl font-black uppercase mb-1">Join Group</p>
            <p className="text-[10px] text-slate-500 mb-8">6-character group code dalo</p>
            <input maxLength={6} placeholder="ABC123" className="w-full bg-[#161c2c] border border-slate-700/50 rounded-2xl p-4 text-white font-black uppercase text-center tracking-[0.5em] text-xl mb-6 outline-none focus:border-blue-500" value={joinCode} onChange={e => setJoinCode(e.target.value.toUpperCase())} onKeyDown={e => e.key === 'Enter' && joinGroup()} autoFocus />
            <div className="flex gap-3"><button className="flex-1 p-4 rounded-xl font-black text-[10px] uppercase text-slate-500 hover:bg-slate-800" onClick={() => { setShowJoinGroup(false); setJoinCode(''); }}>Cancel</button><button disabled={groupLoading || joinCode.length < 4} className="flex-1 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 p-4 rounded-xl font-black text-[10px] uppercase text-white" onClick={joinGroup}>{groupLoading ? 'Joining...' : 'Join Group'}</button></div>
          </div>
        </div>
      )}

      {showAppPicker && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-[200] flex items-center justify-center p-4">
          <div className="bg-[#0d121f] border border-slate-800 p-8 rounded-[3rem] w-full max-w-md max-h-[80vh] overflow-hidden flex flex-col">
            <h2 className="text-xl font-black uppercase mb-1">Select Allowed Apps</h2>
            <p className="text-[10px] text-slate-500 mb-6 uppercase tracking-widest">Studying ke waqt inke bina kaam nahi chalega (Max 5)</p>

            <div className="flex-1 overflow-y-auto pr-2 space-y-2 mb-6 scrollbar-hide">
              {installedApps.length > 0 ? (
                installedApps.map(app => (
                  <div key={app.packageName} onClick={() => toggleAppSelection(app.packageName)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${allowedApps.includes(app.packageName) ? 'bg-blue-600/20 border-blue-500' : 'bg-slate-900/50 border-slate-800/50 opacity-70'}`}>
                    <span className="text-sm font-bold text-white">{app.name}</span>
                    <div className={`w-5 h-5 rounded-full border-2 ${allowedApps.includes(app.packageName) ? 'bg-blue-600 border-blue-600' : 'border-slate-800'}`}></div>
                  </div>
                ))
              ) : (
                <p className="text-center text-slate-600 text-[10px] py-10 uppercase">No apps found. Try building as APK first.</p>
              )}
            </div>

            <button onClick={() => setShowAppPicker(false)} className="w-full py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl">Ho Gaya!</button>
          </div>
        </div>
      )}
    </div>
  );
}
