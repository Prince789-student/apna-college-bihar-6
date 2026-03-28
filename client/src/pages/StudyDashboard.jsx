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
  CheckCircle2, Circle, Save, Shield, Zap, Award, Timer, ChevronRight, Youtube
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
  const [editingTask, setEditingTask] = useState(null);

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

      // New Streak Logic based on strict 2-hour (7200 sec) requirement
      let newStreak = userData?.streak || 0;
      let streakDate = userData?.streakDate || userData?.lastStudyDate || ''; 
      const newTodaySec = todaySec + timeToSave;
      
      const yesterday = new Date(); yesterday.setDate(yesterday.getDate() - 1);
      const yStr = yesterday.toISOString().split('T')[0];

      if (streakDate !== today && streakDate !== yStr) {
          newStreak = 0; // Break streak if missed yesterday
      }

      if (newTodaySec >= 7200 && streakDate !== today) {
         if (streakDate === yStr) newStreak += 1;
         else newStreak = 1;
         streakDate = today;
      }

      await updateDoc(userRef, {
        streak: newStreak,
        streakDate: streakDate,
        lastStudyDate: today,
        totalStudyTime: (userData?.totalStudyTime || 0) + timeToSave
      });

      // Disable blocker when session is saved/finished
      await stopFocusSession();

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
        
        // Auto-break streak on UI load if they missed yesterday
        const todayStr = new Date().toISOString().split('T')[0];
        const yesterdayStr = new Date(Date.now() - 86400000).toISOString().split('T')[0];
        const sDate = d.streakDate || d.lastStudyDate || '';
        if (d.streak > 0 && sDate !== todayStr && sDate !== yesterdayStr) {
           d.streak = 0;
           d.streakDate = '';
           updateDoc(doc(db, 'users', user.uid), { streak: 0, streakDate: '' }).catch(console.error);
        }

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
  const toggleTask = async (task) => { await updateDoc(doc(db, 'Tasks', task.id), { done: !task.done }); setTasks(tasks.map(t => t.id === task.id ? { ...t, done: !task.done } : t)); };
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
    <div className="max-w-5xl mx-auto space-y-10 pb-20 pt-10 px-4 md:px-0">

      {/* ── Main High Impact YouTube Portal ── */}
      <div className="relative group overflow-hidden bg-gradient-to-br from-red-600 to-amber-900 md:p-20 p-10 rounded-[4rem] shadow-[0_40px_100px_rgba(220,38,38,0.2)] animate-in fade-in zoom-in-95 duration-1000">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[120px] -mr-40 -mt-40"></div>
        
        <div className="relative z-10 flex flex-col items-center text-center space-y-12">
           <div className="w-40 h-40 bg-white shadow-2xl rounded-[3.5rem] flex items-center justify-center p-10 group-hover:scale-110 transition-transform duration-700">
              <Youtube size={80} className="text-red-600 fill-red-600" />
           </div>

           <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-6 py-2.5 bg-white/20 backdrop-blur-md rounded-full border border-white/30 text-white">
                <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_15px_#10b981]"></span>
                <span className="text-[12px] font-black uppercase tracking-[0.5em]">Live Academic Feed</span>
              </div>
              
              <h1 className="text-5xl md:text-8xl font-[1000] text-white tracking-tighter uppercase leading-[0.8] drop-shadow-2xl">
                APNE <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-white">STUDY HUB</span>
              </h1>
              
              <p className="text-white/60 text-xs md:text-base font-bold uppercase tracking-[0.4em] max-w-2xl mx-auto">
                Transforming Bihar Engineering Education on YouTube · Free Notes & Session Updates
              </p>
           </div>

           <div className="flex flex-col sm:flex-row gap-6 w-full max-w-lg">
             <a href="https://youtube.com/@appne-h8p?si=0xA0suRWTouLWP3i" target="_blank" rel="noopener noreferrer" 
                className="flex-1 px-12 py-7 bg-white text-red-600 rounded-[2.5rem] font-[1000] text-sm uppercase tracking-widest shadow-2xl hover:bg-slate-50 transition-all flex items-center justify-center gap-4 active:scale-95 group/btn">
                Watch Broadcast <Youtube size={24} className="fill-red-600" />
             </a>
             <button onClick={() => navigate('/dashboard/notes')}
                className="flex-1 px-12 py-7 bg-black/40 backdrop-blur-xl border border-white/20 text-white rounded-[2.5rem] font-[1000] text-sm uppercase tracking-widest hover:bg-white/20 transition-all active:scale-95">
                Notes Section
             </button>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10">
         <div className="bg-white p-10 rounded-[3.5rem] border border-slate-200/80 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/5 rounded-full blur-3xl"></div>
            <div className="relative z-10 space-y-6">
               <div className="p-5 bg-red-600/10 text-red-600 rounded-3xl w-fit"><Youtube size={32} /></div>
               <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">Daily Lecture Feed</h3>
               <p className="text-[11px] text-slate-500 font-bold uppercase tracking-widest leading-relaxed">Catch up with the latest recorded sessions from Appne H8P Hub.</p>
               <a href="https://youtube.com/@appne-h8p" target="_blank" className="inline-flex items-center gap-2 text-red-600 font-black text-[10px] uppercase tracking-widest group-hover:gap-4 transition-all">Explore Playlist <ArrowRight size={14} /></a>
            </div>
         </div>
         <div className="bg-white p-10 rounded-[3.5rem] border border-slate-200/80 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-full blur-3xl"></div>
            <div className="relative z-10 space-y-6">
               <div className="p-5 bg-blue-600/10 text-blue-600 rounded-3xl w-fit"><BookOpen size={32} /></div>
               <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">Official Notes Bank</h3>
               <p className="text-[11px] text-slate-500 font-bold uppercase tracking-widest leading-relaxed">Integrated library for all your BEU semester requirements.</p>
               <button onClick={()=>navigate('/dashboard/notes')} className="inline-flex items-center gap-2 text-blue-600 font-black text-[10px] uppercase tracking-widest group-hover:gap-4 transition-all">Enter Library <ArrowRight size={14} /></button>
            </div>
         </div>
      </div>

      {/* MODALS */}
      {showGoalModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 p-8 rounded-[2.5rem] w-full max-w-sm shadow-2xl">
            <p className="text-xl font-black uppercase mb-1">Goals Set Karo</p>
            <p className="text-[10px] text-slate-500 mb-8">Aap kitna padhna chahte ho?</p>
            {[{ key: 'daily', label: 'Daily Goal', hint: 'Max 24 hr', max: 24 }, { key: 'weekly', label: 'Weekly Goal', hint: 'Max 168 hr', max: 168 }, { key: 'monthly', label: 'Monthly Goal', hint: 'Max 744 hr', max: 744 }].map(({ key, label, hint, max }) => (
              <div key={key} className="mb-5">
                <div className="flex justify-between mb-2"><p className="text-[9px] font-black uppercase tracking-widest text-slate-500">{label}</p><p className="text-[9px] text-slate-600">{hint}</p></div>
                <div className="flex items-center gap-3"><input type="number" min={0} max={max} value={goals[key]} onChange={e => setGoals({ ...goals, [key]: Math.min(max, Math.max(0, Number(e.target.value))) })} className="flex-1 bg-slate-50 border border-slate-200 rounded-2xl p-4 text-slate-900 font-black text-center outline-none focus:border-blue-500" /><span className="text-slate-500 text-sm font-bold">hr</span></div>
              </div>
            ))}
            <div className="flex gap-3 mt-2"><button className="flex-1 p-4 rounded-xl font-black text-[10px] uppercase text-slate-500 hover:bg-slate-100 transition-all" onClick={() => setShowGoalModal(false)}>Cancel</button><button className="flex-1 bg-blue-600 hover:bg-blue-500 p-4 rounded-xl font-black text-[10px] uppercase text-white" onClick={saveGoals}>Save</button></div>
          </div>
        </div>
      )}
    </div>
  );
}
