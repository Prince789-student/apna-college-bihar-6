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
  CheckCircle2, Circle, Save, Shield, Zap, Award, Timer,
  Pause, Play, Square
} from 'lucide-react';

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
const SLOTS = ['6 AM','7 AM','8 AM','9 AM','10 AM','11 AM','12 PM','1 PM','2 PM','3 PM','4 PM','5 PM','6 PM','7 PM','8 PM','9 PM','10 PM'];
const ALL_BADGES = [
  { id: 'streak_3',    icon: '🔥', name: '3-Day Streak',    desc: 'Lagatar 3 din padha!',        color: 'from-orange-500 to-red-600' },
  { id: 'streak_7',    icon: '🌟', name: '7-Day Streak',    desc: 'Ek hafte ki mehnat!',          color: 'from-yellow-500 to-amber-600' },
  { id: 'streak_30',   icon: '👑', name: '30-Day Streak',   desc: 'Ek mahina lagatar! Legend!',   color: 'from-purple-500 to-indigo-700' },
  { id: 'first_hour',  icon: '⏱', name: 'First Hour',      desc: 'Pehla 1 ghanta complete!',     color: 'from-blue-500 to-cyan-600' },
  { id: 'ten_hours',   icon: '⚡', name: '10 Hours Club',   desc: 'Total 10 ghante padhe!',       color: 'from-emerald-500 to-teal-600' },
  { id: 'sessions_5',  icon: '📚', name: '5 Sessions',      desc: '5 study sessions complete!',   color: 'from-pink-500 to-rose-600' },
  { id: 'sessions_20', icon: '🎯', name: '20 Sessions',     desc: '20 sessions master!',          color: 'from-violet-500 to-purple-700' },
  { id: 'goals_hit',   icon: '🏆', name: 'Goal Crusher',   desc: 'Daily goal hit ki!',           color: 'from-amber-400 to-yellow-600' },
];

// ─── Tabs ─────────────────────────────────────────────────
const TABS = [
  { id: 'timer',         label: 'Focus Timer',   icon: <Clock size={15}/> },
  { id: 'overview',      label: 'Overview',      icon: <BarChart3 size={15}/> },
  { id: 'todo',          label: 'Aaj ka Plan',   icon: <ClipboardList size={15}/> },
  { id: 'group',         label: 'Study Network', icon: <Users size={15}/> },
  { id: 'achievements',  label: 'Achievements',  icon: <Trophy size={15}/> },
  { id: 'admin',         label: 'Admin Ops',     icon: <Shield size={15} className="text-red-500" /> },
];

export default function StudyDashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [tab, setTab] = useState('overview');

  // ── Shared Data ───────────────────────────────────────
  const [userData, setUserData] = useState(null);
  const [subjects, setSubjects] = useState([]);
  const [sessions, setSessions] = useState([]);
  const [groups, setGroups] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [sessionCount, setSessionCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [globalRanking, setGlobalRanking] = useState([]);

  // ── Goals ─────────────────────────────────────────────
  const [goals, setGoals] = useState({ daily: 0, weekly: 0, monthly: 0 });
  const [showGoalModal, setShowGoalModal] = useState(false);

  // ── Subjects ──────────────────────────────────────────
  const [showSubjectModal, setShowSubjectModal] = useState(false);
  const [newSubject, setNewSubject] = useState('');

  // ── Groups ────────────────────────────────────────────
  const [showCreateGroup, setShowCreateGroup] = useState(false);
  const [showJoinGroup, setShowJoinGroup]   = useState(false);
  const [newGroupName, setNewGroupName]     = useState('');
  const [joinCode, setJoinCode]             = useState('');
  const [groupLoading, setGroupLoading]     = useState(false);

  // ── Todo ──────────────────────────────────────────────
  const [newTask, setNewTask] = useState('');
  const [taskSub, setTaskSub] = useState('');

  // ── Timetable ─────────────────────────────────────────
  const [schedule, setSchedule] = useState({});
  const [scheduleSaved, setScheduleSaved] = useState(false);

  // ── Focus Timer (Pomodoro 25m) ───────────────
  const [timerActive, setTimerActive] = useState(false);
  const [timerTime, setTimerTime] = useState(1500); 
  const [isBreak, setIsBreak] = useState(false);
  const [timerSubject, setTimerSubject] = useState('OTHERS');
  const [customMinutes, setCustomMinutes] = useState(25);
  const [timerMode, setTimerMode] = useState('COUNTDOWN'); // 'COUNTDOWN' or 'STOPWATCH'
  const timerRef = useRef(null);

  // ── Edit Task ─────────────────────────────────────────
  const [editingTask, setEditingTask] = useState(null);
  const [editValue, setEditValue] = useState('');

  // ── Focus Mode (Full Screen) ───────────
  const [focusMode, setFocusMode] = useState(false);
  const [holdTime, setHoldTime] = useState(0);
  const holdRef = useRef(null);

  useEffect(() => { if (user) fetchAll(); }, [user]);

  // Timer Effect
  useEffect(() => {
    if (timerActive) {
      timerRef.current = setInterval(() => {
        setTimerTime(t => {
          if (timerMode === 'COUNTDOWN') {
            if (t <= 1) {
              clearInterval(timerRef.current);
              setTimerActive(false);
              completePomodoro();
              return 0;
            }
            return t - 1;
          } else {
            return t + 1; // Stopwatch increments
          }
        });
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }
    
    // Global User Status Tracker (Live Pulse)
    if (user) {
       updateDoc(doc(db, 'users', user.uid), { isStudying: timerActive }).catch(() => {});
    }

    return () => clearInterval(timerRef.current);
  }, [timerActive, timerMode]);

  const completePomodoro = () => {
    const fullBlock = customMinutes * 60;
    saveTimerSession(fullBlock); 
    setTimerTime(customMinutes * 60);
    alert('Focus session complete!');
  };

  const fmtTimer = (s) => {
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = s % 60;
    return `${h > 0 ? h.toString().padStart(2, '0') + ':' : ''}${m.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
  };

  const saveTimerSession = async (manualTime = null) => {
    const timeToSave = manualTime || (timerMode === 'STOPWATCH' ? timerTime : (customMinutes * 60 - timerTime));
    
    // Set status to resting when timer stops/saves
    try { await updateDoc(doc(db, 'users', user.uid), { isStudying: false }); } catch(err){}

    if (timeToSave < 1) { setTimerActive(false); setTimerTime(timerMode==='STOPWATCH'?0:customMinutes*60); return; }
    
    try {
      // 1. Save Session
      await addDoc(collection(db, 'StudySessions'), {
        userId: user.uid,
        userName: user.name || 'Scholar',
        subject: timerSubject,
        duration: timeToSave,
        date: todayStr,
        createdAt: new Date().toISOString()
      });

      // 2. Update Streak & Total Time
      const userRef = doc(db, 'users', user.uid);
      const today = new Date().toISOString().split('T')[0];
      const lastDate = userData?.lastStudyDate || '';
      
      let newStreak = userData?.streak || 0;
      if (lastDate !== today) {
        // If yesterday was last study, increment. Otherwise reset to 1.
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

      setTimerActive(false); 
      setTimerTime(timerMode === 'STOPWATCH' ? 0 : customMinutes * 60);
      fetchAll();
      // Optional: success feedback can be added here
    } catch (e) { console.error('save error:', e); }
  };

  const fetchAll = async () => {
    setLoading(true);
    try {
      // 1. User doc
      const uSnap = await getDoc(doc(db, 'users', user.uid));
      if (uSnap.exists()) {
        const d = uSnap.data();
        setUserData(d);
        setGoals({ daily: d.dailyGoal || 0, weekly: d.weeklyGoal || 0, monthly: d.monthlyGoal || 0 });
        setSchedule(d.timetable || {});
      } else {
        // Safety guard: If user doc doesn't exist, initialize with default values
        setUserData({});
        setGoals({ daily: 0, weekly: 0, monthly: 0 });
        setSchedule({});
      }

      // 2. Subjects
      const subSnap = await getDocs(query(collection(db, 'Subjects'), where('userId', '==', user.uid)));
      setSubjects(subSnap.docs.map(d => ({ id: d.id, ...d.data() })));

      // 3. Sessions
      const sessSnap = await getDocs(query(collection(db, 'StudySessions'), where('userId', '==', user.uid)));
      setSessionCount(sessSnap.size);
      const thirtyDaysAgo = new Date(); thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
      const cutoff = thirtyDaysAgo.toISOString().split('T')[0];
      setSessions(sessSnap.docs.map(d => ({ ...d.data() })).filter(s => s.date >= cutoff));

      // 4. Groups
      const grpSnap = await getDocs(query(collection(db, 'Groups'), where('members', 'array-contains', user.uid)));
      setGroups(grpSnap.docs.map(d => ({ id: d.id, ...d.data() })));

      // 5. Today's tasks
      const today = new Date().toISOString().split('T')[0];
      const taskSnap = await getDocs(query(collection(db, 'Tasks'), where('userId', '==', user.uid), where('date', '==', today)));
      setTasks(taskSnap.docs.map(d => ({ id: d.id, ...d.data() })));

      // 6. Global Ranking (Real-time sort by streak)
      const qUsers = query(collection(db, 'users'), orderBy('streak', 'desc'), limit(5));
      const uSnapRanking = await getDocs(qUsers);
      setGlobalRanking(uSnapRanking.docs.map((d, i) => ({
         id: d.id,
         name: d.data().name || 'Scholar',
         time: 'Today Active',
         rank: i + 1,
         active: d.data().isStudying || false,
         streak: d.data().streak || 0
      })));

    } catch(e) { console.error('fetchAll error:', e); }
    finally { setLoading(false); }
  };

  // ── Computed Stats ────────────────────────────────────
  const todayStr = new Date().toISOString().split('T')[0];
  const last7 = Array.from({length:7},(_,i)=>{ const d=new Date(); d.setDate(d.getDate()-i); return d.toISOString().split('T')[0]; });
  const todaySec   = sessions.filter(s=>s.date===todayStr).reduce((a,s)=>a+s.duration,0);
  const weeklySec  = sessions.filter(s=>last7.includes(s.date)).reduce((a,s)=>a+s.duration,0);
  const curM = new Date().getMonth(), curY = new Date().getFullYear();
  const monthlySec = sessions.filter(s=>{ const d=new Date(s.date); return d.getMonth()===curM&&d.getFullYear()===curY; }).reduce((a,s)=>a+s.duration,0);
  const subjectToday = sessions.filter(s=>s.date===todayStr).reduce((acc,s)=>{ acc[s.subject]=(acc[s.subject]||0)+s.duration; return acc; },{});
  const dayTotals = sessions.reduce((acc,s)=>{ acc[s.date]=(acc[s.date]||0)+s.duration; return acc; },{});
  const bestDaySec = Math.max(0,...Object.values(dayTotals));
  const heatmap = Array.from({length:7},(_,i)=>{ const d=new Date(); d.setDate(d.getDate()-(6-i)); const dStr=d.toISOString().split('T')[0]; return {dStr,day:d.toLocaleDateString('en-US',{weekday:'short'}),sec:sessions.filter(s=>s.date===dStr).reduce((a,s)=>a+s.duration,0),isToday:dStr===todayStr}; });
  const maxH = Math.max(1,...heatmap.map(d=>d.sec));
  const getProgress = (sec,g) => (!g||g<=0)?0:Math.min(100,(sec/(g*3600))*100).toFixed(0);

  // ── Handlers ──────────────────────────────────────────
  const saveGoals = async () => { await updateDoc(doc(db,'users',user.uid),{dailyGoal:Number(goals.daily),weeklyGoal:Number(goals.weekly),monthlyGoal:Number(goals.monthly)}); setShowGoalModal(false); fetchAll(); };
  const addSubject = async () => { const t=newSubject.trim(); if(!t||subjects.length>=10) return; try{ await addDoc(collection(db,'Subjects'),{userId:user.uid,subjectName:t.toUpperCase(),createdAt:new Date().toISOString()}); setNewSubject(''); setShowSubjectModal(false); fetchAll(); }catch(e){console.error(e);alert('Subject save nahi hua.');} };
  const delSubject = async (id) => {
    try {
      await deleteDoc(doc(db, 'Subjects', id));
      fetchAll();
    } catch(err) { console.error('Delete subject error:', err); }
  };
  const genCode = () => Math.random().toString(36).substring(2,8).toUpperCase();
  const createGroup = async () => { if(!newGroupName.trim()) return; setGroupLoading(true); try{ await addDoc(collection(db,'Groups'),{groupName:newGroupName.trim(),groupCode:genCode(),createdBy:user.uid,members:[user.uid],memberCount:1,maxMembers:50,createdAt:new Date().toISOString()}); setNewGroupName(''); setShowCreateGroup(false); fetchAll(); }catch(e){console.error(e);}finally{setGroupLoading(false);} };
  const joinGroup  = async () => { if(!joinCode.trim()) return; setGroupLoading(true); try{ const snp=await getDocs(query(collection(db,'Groups'),where('groupCode','==',joinCode.toUpperCase()))); if(snp.empty){alert('Invalid code!');return;} const gDoc=snp.docs[0]; const gd=gDoc.data(); if(gd.members.includes(user.uid)){alert('Already member!');return;} await updateDoc(doc(db,'Groups',gDoc.id),{members:[...gd.members,user.uid],memberCount:gd.memberCount+1}); setJoinCode(''); setShowJoinGroup(false); fetchAll(); }catch(e){console.error(e);}finally{setGroupLoading(false);} };
  const addTask = async () => {
    const t = newTask.trim();
    const s = taskSub.trim().toUpperCase();
    if (!t || !s) return;

    // Auto-create subject if needed
    const exists = subjects.find(sub => sub.subjectName === s);
    if (!exists) {
       await addDoc(collection(db, 'Subjects'), { userId: user.uid, subjectName: s, createdAt: new Date().toISOString() });
    }

    await addDoc(collection(db,'Tasks'), {
      userId: user.uid,
      text: t,
      subject: s,
      done: false,
      date: todayStr,
      createdAt: new Date().toISOString()
    });
    setNewTask('');
    setTaskSub('');
    fetchAll();
  };
  const toggleTask = async (task) => { await updateDoc(doc(db,'Tasks',task.id),{done:!task.done}); setTasks(tasks.map(t=>t.id===task.id?{...t,done:!t.done}:t)); };
  const delTask = async (id) => { await deleteDoc(doc(db,'Tasks',id)); setTasks(tasks.filter(t=>t.id!==id)); };
  
  const updateTask = async () => {
    if (!editingTask || !editValue.trim()) return;
    await updateDoc(doc(db, 'Tasks', editingTask.id), { text: editValue });
    setTasks(tasks.map(t => t.id === editingTask.id ? { ...t, text: editValue } : t));
    setEditingTask(null);
  };

  const saveSchedule = async () => { await updateDoc(doc(db,'users',user.uid),{timetable:schedule}); setScheduleSaved(true); setTimeout(()=>setScheduleSaved(false),3000); };

  // ── Achievements computed ─────────────────────────────
  const earnedIds = [...(userData?.badges||[])];
  if(sessionCount>=5 && !earnedIds.includes('sessions_5')) earnedIds.push('sessions_5');
  if(sessionCount>=20 && !earnedIds.includes('sessions_20')) earnedIds.push('sessions_20');
  const todayGoalHit = goals.daily>0 && todaySec>=(goals.daily*3600);
  if(todayGoalHit && !earnedIds.includes('goals_hit')) earnedIds.push('goals_hit');
  const earned = ALL_BADGES.filter(b=>earnedIds.includes(b.id));
  const locked = ALL_BADGES.filter(b=>!earnedIds.includes(b.id));

  if (loading) return <div className="flex justify-center p-20"><div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div></div>;

  return (
    <div className="max-w-5xl mx-auto space-y-6 pb-20">

      {/* ── Always-visible Header: Streak + Start Button ── */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 flex items-center justify-between bg-[#0d121f] p-5 rounded-[2rem] border border-slate-800/50">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-orange-500/10 rounded-2xl flex items-center justify-center border border-orange-500/20 shrink-0">
               <Flame size={24} className="text-orange-500" fill="currentColor"/>
            </div>
            <div>
               <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest">Daily Streak</p>
               <p className="text-2xl font-black text-white leading-none">{userData?.streak||0} <span className="text-xs font-bold text-slate-400">days</span></p>
               <p className="text-[9px] mt-0.5 text-slate-600">
                  {todaySec >= 7200
                  ? '✅ 2 hr complete — streak safe!'
                  : `⚠️ ${Math.floor((7200 - todaySec) / 60)} min aur padho streak ke liye`}
               </p>
            </div>
          </div>
          <button onClick={()=>setShowGoalModal(true)} className="p-2.5 bg-slate-800/50 rounded-xl text-slate-400 hover:text-white transition-colors" title="Goals"><Settings size={18}/></button>
        </div>
        <button onClick={()=>setTab('timer')} className="flex-1 sm:max-w-[220px] bg-blue-600 hover:bg-blue-500 text-white rounded-[2rem] font-black uppercase text-sm tracking-widest shadow-lg shadow-blue-900/30 flex items-center justify-center gap-3 active:scale-[0.98] transition-all p-5 group">
           <Clock size={20} className="group-hover:rotate-12 transition-transform"/>
           <span>▶ Start Study</span>
        </button>
      </div>

      {/* ── Tab Navigation ─────────────────────────────── */}
      <div className="flex gap-1.5 bg-[#0d121f]/80 backdrop-blur-md p-1.5 rounded-[1.8rem] border border-slate-800/50 overflow-x-auto sticky top-4 z-[50] shadow-2xl">
        {TABS.map(t => {
          if (t.id === 'admin' && user?.email !== 'prince86944@gmail.com' && user?.role !== 'SUPER_ADMIN') return null;
          return (
            <button key={t.id} onClick={()=> t.id === 'admin' ? navigate('/dashboard/admin') : setTab(t.id)} className={`flex-1 min-w-fit flex items-center justify-center gap-2 px-6 py-3 rounded-[1.2rem] text-[10px] font-black uppercase tracking-wider transition-all whitespace-nowrap ${tab===t.id?'bg-blue-600 text-white shadow-xl shadow-blue-500/20':'text-slate-500 hover:text-white hover:bg-slate-800/30'}`}>
              {t.icon} {t.label}
            </button>
          );
        })}
      </div>

      {tab === 'timer' && (
        <div className="flex flex-col lg:flex-row gap-6 animate-in fade-in slide-in-from-bottom-5 duration-500 items-start">
           
           {/* ── LEFT SB: Profile & Streak ── */}
           <div className="w-full lg:w-1/4 space-y-6">
              <div className="bg-[#0d121f] border border-slate-800/80 rounded-[2.5rem] p-8 shadow-2xl relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-3xl group-hover:bg-orange-500/10 transition-all"></div>
                 <div className="relative z-10 text-center flex flex-col items-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-800 border-4 border-slate-800 flex items-center justify-center text-4xl font-[1000] text-white shadow-2xl mb-6 ring-4 ring-blue-500/10">
                       {user?.name?.[0]?.toUpperCase() || 'P'}
                    </div>
                    <h3 className="text-xl font-[1000] text-white uppercase tracking-tighter leading-none mb-4">{user?.name || 'Scholar'}'s Path</h3>
                    <div className="inline-flex items-center gap-3 bg-orange-500/10 border border-orange-500/20 px-5 py-2.5 rounded-2xl shadow-lg">
                       <Flame size={18} className="text-orange-500" fill="currentColor" />
                       <span className="text-[10px] font-black text-orange-400 uppercase tracking-widest">{userData?.streak || 0} DAY STREAK</span>
                    </div>
                    <div className="w-full mt-10 space-y-3">
                       <div className="bg-slate-900/60 p-4 rounded-2xl border border-slate-800/50 flex justify-between items-center">
                          <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Today Total</span>
                          <span className="text-lg font-black text-blue-400 font-mono">{fmtTimer(todaySec)}</span>
                       </div>
                       <div className="bg-slate-900/60 p-4 rounded-2xl border border-slate-800/50 flex justify-between items-center">
                          <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">World Rank</span>
                          <span className="text-lg font-black text-amber-500 font-mono">#42</span>
                       </div>
                    </div>
                 </div>
              </div>

              {/* Weekly Progress Summary */}
              <div className="bg-[#0d121f] border border-slate-800/80 rounded-[2.5rem] p-6 shadow-2xl">
                 <div className="flex items-center gap-3 mb-6">
                    <BarChart3 className="text-blue-500" size={18} />
                    <h4 className="text-[10px] font-black text-white uppercase tracking-widest leading-none">Weekly Tempo</h4>
                 </div>
                 <div className="flex items-end justify-between h-20 gap-1.5 px-2">
                    {heatmap.map(d => (
                       <div key={d.dStr} className="flex-1 flex flex-col items-center gap-2">
                          <div className={`w-full rounded-md transition-all ${d.isToday ? 'bg-blue-600 shadow-lg shadow-blue-500/50' : d.sec > 0 ? 'bg-blue-900/60' : 'bg-slate-800/40'}`} style={{ height: `${Math.max(10, (d.sec / (maxH || 1)) * 100)}%` }}></div>
                          <span className={`text-[8px] font-black ${d.isToday ? 'text-blue-400' : 'text-slate-600 uppercase'}`}>{d.day}</span>
                       </div>
                    ))}
                 </div>
              </div>
           </div>

           {/* ── CENTER: The Big Hub Timer ── */}
           <div className="flex-1 w-full space-y-6">
              <div className="bg-[#0d121f] border-[8px] border-slate-900 rounded-[4rem] p-10 md:p-16 h-[560px] shadow-[0_60px_100px_rgba(0,0,0,0.6)] relative flex flex-col items-center justify-center overflow-hidden">
                 <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
                 <div className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none"></div>

                 <div className="relative z-10 w-full flex flex-col items-center">
                    <div className="mb-6 group">
                       <span className="bg-blue-600/10 text-blue-400 px-6 py-2 rounded-[1.5rem] text-[10px] font-black uppercase tracking-widest border border-blue-500/20 shadow-lg group-hover:scale-105 transition-transform duration-300">
                          🎯 Hub Mode: {timerSubject}
                       </span>
                    </div>

                    <div className="text-[90px] md:text-[110px] lg:text-[130px] font-[1000] tracking-[-0.05em] text-white leading-none font-mono drop-shadow-[0_20px_40px_rgba(30,58,138,0.5)] mb-10 flex select-none">
                       {fmtTimer(timerTime).split(':').map((part, i) => (
                         <span key={i} className="flex items-center">
                           {part}{i < 2 && <span className="text-slate-800/80 mx-1 mb-2">:</span>}
                         </span>
                       ))}
                    </div>

                    <div className="flex items-center justify-center gap-8 mb-12">
                       <button onClick={() => setTimerActive(!timerActive)} 
                         className={`w-24 h-24 rounded-full flex items-center justify-center border-4 shadow-2xl transition-all active:scale-90 relative overflow-hidden group ${timerActive ? 'bg-orange-600 border-orange-500/50 shadow-orange-900/40' : 'bg-blue-600 border-blue-500/50 shadow-blue-900/40'}`}>
                          <div className={`absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                          {timerActive ? <Pause size={42} fill="white" className="relative z-10" /> : <Play size={42} fill="white" className="ml-2 relative z-10" />}
                       </button>

                       {((timerMode==='STOPWATCH' && timerTime > 0) || (timerMode==='COUNTDOWN' && timerTime < customMinutes*60)) && !timerActive && (
                        <div className="flex gap-4">
                           <button onClick={() => saveTimerSession()} 
                             className="w-16 h-16 rounded-full bg-slate-900 border-4 border-slate-800 flex items-center justify-center text-slate-500 hover:text-red-400 hover:border-red-900/50 transition-all shadow-xl active:scale-95 group">
                              <Square size={20} fill="currentColor" />
                           </button>
                           {timerActive && (
                              <button onClick={() => setFocusMode(true)} className="px-6 py-2 bg-blue-600/10 text-blue-400 border border-blue-500/20 rounded-2xl text-[9px] font-black uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all">
                                 Focus Mode
                              </button>
                           )}
                        </div>
                       )}
                    </div>

                    <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
                       <div className="bg-slate-900/60 p-5 rounded-3xl border border-slate-800/50 flex items-center gap-4 group">
                          <Zap className="text-blue-500 group-hover:animate-bounce" size={24} />
                          <div>
                             <p className="text-[9px] text-slate-500 font-black uppercase tracking-widest italic">Hub Focus</p>
                             <p className="text-sm font-black text-white">96% Supernova</p>
                          </div>
                       </div>
                       <div className="bg-slate-900/60 p-5 rounded-3xl border border-slate-800/50 flex items-center gap-4 group">
                          <Trophy className="text-amber-500 group-hover:animate-bounce" size={24} />
                          <div>
                             <p className="text-[9px] text-slate-500 font-black uppercase tracking-widest italic">Session XP</p>
                             <p className="text-sm font-black text-white">+{Math.floor(timerTime/60) * 10} pts</p>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>

              {/* Study Marathon Heatmap */}
              <div className="bg-[#0d121f] border border-slate-800/80 rounded-[2.5rem] p-8 shadow-2xl">
                 <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-3">
                       <CalendarDays className="text-emerald-500" size={20} />
                       <h3 className="text-[11px] font-[1000] text-white uppercase tracking-widest">Study Marathon Heatmap</h3>
                    </div>
                    <span className="text-[9px] text-slate-600 font-bold uppercase tracking-widest italic">Study Frequency</span>
                 </div>
                 <div className="flex flex-wrap gap-1.5 opacity-90 justify-center sm:justify-start">
                    {Array(84).fill(0).map((_, i) => (
                       <div key={i} className={`w-4 h-4 rounded-sm transition-all hover:scale-125 cursor-pointer ${i % 7 === 0 ? 'bg-blue-500' : (i % 3 === 0 ? 'bg-blue-700' : (i%5===0 ? 'bg-slate-800' : 'bg-slate-900'))}`}></div>
                    ))}
                 </div>
              </div>
           </div>

           {/* ── RIGHT SB: Ranking & Switcher ── */}
           <div className="w-full lg:w-1/4 space-y-6">
              <div className="bg-[#0d121f] border border-slate-800/80 rounded-[2.5rem] p-8 shadow-2xl">
                 <div className="flex items-center gap-3 mb-8">
                    <Hash size={20} className="text-amber-500" />
                    <h3 className="text-[11px] font-[1000] text-white uppercase tracking-widest leading-none">Global Ranking</h3>
                 </div>
                 <div className="space-y-4">
                    {globalRanking.length > 0 ? globalRanking.map((p, idx) => (
                       <div key={idx} className={`flex items-center justify-between p-4 rounded-3xl transition-all border ${p.id === user?.uid ? 'bg-blue-600/10 border-blue-500/20 shadow-xl' : 'bg-slate-900/50 border-transparent hover:border-slate-800'}`}>
                          <div className="flex items-center gap-3">
                             <div className={`w-7 h-7 flex items-center justify-center rounded-xl text-[10px] font-black ${p.rank === 1 ? 'bg-amber-500 text-slate-900' : 'bg-slate-800 text-slate-500'}`}>{p.rank}</div>
                             <div className="text-left">
                                <p className={`text-[11px] font-black uppercase ${p.id === user?.uid ? 'text-blue-400' : 'text-white'}`}>{p.name}</p>
                                <div className="flex items-center gap-1.5 mt-0.5">
                                   <span className={`w-1 h-1 rounded-full ${p.active ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]' : 'bg-slate-700'}`}></span>
                                   <span className={`text-[7px] font-black uppercase tracking-widest ${p.active ? 'text-emerald-500' : 'text-slate-600'}`}>{p.active ? 'Studying...' : 'Offline'}</span>
                                </div>
                             </div>
                          </div>
                          <div className="text-right">
                             <span className="text-[10px] font-mono font-black text-white italic">{p.streak}d</span>
                          </div>
                       </div>
                    )) : (
                       <div className="flex flex-col items-center justify-center py-10 opacity-20">
                          <Users size={32} className="mb-2" />
                          <p className="text-[8px] font-black uppercase tracking-widest">Global Pulse Syncing...</p>
                       </div>
                    )}
                 </div>
                 <button className="w-full mt-8 py-4 bg-slate-900 hover:bg-slate-800 text-white border border-slate-800 rounded-2xl text-[9px] font-black uppercase tracking-widest transition-all">View Leaderboard</button>
              </div>

              {/* Subject Switcher Hub */}
              <div className="bg-[#0d121f] border border-slate-800/80 rounded-[2.5rem] p-8 shadow-2xl relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/5 rounded-full blur-2xl"></div>
                 <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                       <Zap className="text-indigo-400" size={18} />
                       <h3 className="text-[11px] font-[1000] text-white uppercase tracking-widest">Active Hubs</h3>
                    </div>
                    <div className="space-y-2">
                       {subjects.map(s => (
                          <button key={s.id} onClick={() => !timerActive && setTimerSubject(s.subjectName)}
                            className={`w-full text-left p-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all border ${timerSubject === s.subjectName ? 'bg-indigo-600 border-indigo-500 text-white shadow-xl shadow-indigo-900/20' : 'bg-slate-900/40 border-slate-800 text-slate-500 hover:text-white hover:border-indigo-500/50'}`}>
                             {s.subjectName}
                          </button>
                       ))}
                       <button onClick={() => !timerActive && setTimerSubject('OTHERS')}
                          className={`w-full text-left p-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all border ${timerSubject === 'OTHERS' ? 'bg-indigo-600 border-indigo-500 text-white shadow-xl shadow-indigo-900/20' : 'bg-slate-900/40 border-slate-800 text-slate-500 hover:text-white'}`}>
                          OTHERS
                       </button>
                       <button onClick={() => !timerActive && setShowSubjectModal(true)} className="w-full py-4 bg-blue-600/10 border border-blue-500/20 text-blue-400 rounded-2xl text-[9px] font-black uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all">Add New Hub</button>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      )}

      {/* ══════════════════════════════════════════════════ */}
      {/* TAB: OVERVIEW                                      */}
      {/* ══════════════════════════════════════════════════ */}
      {tab === 'overview' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          
          {/* Progress Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {label:'Aaj (Today)',  sec:todaySec,   goal:goals.daily,   color:'bg-blue-500',   ic:<Target size={11} className="text-blue-400"/>},
              {label:'Is Hafte',     sec:weeklySec,  goal:goals.weekly,  color:'bg-emerald-500',ic:<Calendar size={11} className="text-emerald-400"/>},
              {label:'Is Mahine',    sec:monthlySec, goal:goals.monthly, color:'bg-indigo-500', ic:<BarChart3 size={11} className="text-indigo-400"/>},
            ].map(({label,sec,goal,color,ic})=>(
              <div key={label} className="bg-[#0d121f] p-5 rounded-2xl border border-slate-800/50 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1 text-[9px] font-black uppercase tracking-widest text-slate-500">{ic}{label}</span>
                  {goal>0&&<span className="text-[9px] font-bold text-slate-500">{getProgress(sec,goal)}%</span>}
                </div>
                <p className="text-xl font-black text-white leading-none">{formatDuration(sec)}</p>
                <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div className={`h-full ${color} rounded-full transition-all duration-1000`} style={{width:`${getProgress(sec,goal)}%`}}></div>
                </div>
                <p className="text-[9px] text-slate-600">{goal>0?`Goal: ${goal} hr`:<span className="text-slate-500 cursor-pointer hover:text-blue-400" onClick={()=>setShowGoalModal(true)}>Set goal ⚙️</span>}</p>
              </div>
            ))}
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              {label:'Aaj ke Sessions', value:sessions.filter(s=>s.date===todayStr).length},
              {label:'Aaj ka Time', value:formatDuration(todaySec)},
              {label:'Is Hafte', value:formatDuration(weeklySec)},
              {label:'Best Day Ever', value:bestDaySec>0?formatDuration(bestDaySec):'—'},
            ].map(({label,value})=>(
              <div key={label} className="bg-[#0d121f] p-4 rounded-2xl border border-slate-800/50 text-center">
                <p className="text-[8px] text-slate-500 font-bold uppercase tracking-widest mb-1">{label}</p>
                <p className="text-base font-black text-white leading-tight">{value}</p>
              </div>
            ))}
          </div>

          {/* 7-Day Heatmap */}
          <div className="bg-[#0d121f] p-6 rounded-[2rem] border border-slate-800/50">
            <p className="text-[9px] font-black uppercase tracking-widest text-slate-500 mb-4 flex items-center gap-2"><Calendar size={11}/> Pichle 7 Din</p>
            <div className="flex items-end justify-between gap-2 h-24">
              {heatmap.map(d=>(
                <div key={d.dStr} className="flex flex-col items-center gap-1 flex-1">
                  <span className="text-[8px] font-bold text-slate-600">{d.sec>0?formatDuration(d.sec).split(' ').slice(0,2).join(''):'—'}</span>
                  <div className={`w-full rounded-t-lg transition-all duration-700 ${d.isToday?'bg-blue-500':d.sec>0?'bg-emerald-600':'bg-slate-800'}`} style={{height:`${Math.max(8,(d.sec/maxH)*100)}%`}}></div>
                  <span className={`text-[9px] font-black ${d.isToday?'text-blue-400':'text-slate-500'}`}>{d.day}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Subjects */}
          <div className="bg-[#0d121f] p-6 rounded-[2rem] border border-slate-800/50 space-y-4">
            <div className="flex items-center justify-between">
              <p className="text-[9px] font-black uppercase tracking-widest text-slate-500 flex items-center gap-2"><BookOpen size={11}/>Your Subjects ({subjects.length}/10)</p>
              <button onClick={()=>setShowSubjectModal(true)} disabled={subjects.length>=10} className="flex items-center gap-1 text-[9px] font-black text-blue-400 hover:text-white bg-blue-600/10 hover:bg-blue-600 border border-blue-500/20 px-2.5 py-1.5 rounded-xl transition-all disabled:opacity-40"><Plus size={11}/> New</button>
            </div>
            {subjects.length===0?(
              <div className="text-center py-8">
                 <p className="text-[10px] text-slate-600 mb-3">Add your subjects to start tracking!</p>
                 <button onClick={()=>setShowSubjectModal(true)} className="text-[10px] font-black text-blue-500 hover:underline">Click here to add</button>
              </div>
            ):(
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {subjects.map(sub=>{
                  const tSec=subjectToday[sub.subjectName]||0;
                  const totSec=sessions.filter(s=>s.subject===sub.subjectName).reduce((a,s)=>a+s.duration,0);
                  return (
                    <div key={sub.id} className="flex items-center justify-between p-3 bg-slate-900/60 rounded-2xl border border-slate-800/50">
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full shrink-0"></div>
                        <div>
                          <p className="text-xs font-black text-white uppercase">{sub.subjectName}</p>
                          <p className="text-[8px] text-slate-500">{formatDuration(tSec)} aaj · {formatDuration(totSec)} total</p>
                        </div>
                      </div>
                      <button onClick={() => delSubject(sub.id)} className="p-2 text-slate-700 hover:text-red-500"><Trash2 size={13}/></button>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════════════ */}
      {/* TAB: STUDY NETWORK (Groups)                         */}
      {/* ══════════════════════════════════════════════════ */}
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
                       <button onClick={()=>setShowJoinGroup(true)} className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white border border-slate-800 rounded-2xl font-black text-[10px] uppercase tracking-widest">Join By Code</button>
                       <button onClick={()=>setShowCreateGroup(true)} className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center gap-2"><Plus size={14}/> Create</button>
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
                        <button onClick={()=>navigate(`/dashboard/study/group/${g.id}`)} className="mt-6 w-full py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-[10px] font-black uppercase tracking-widest">Open Hub</button>
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

      {/* ══════════════════════════════════════════════════ */}
      {/* TAB: AAJ KA PLAN (To-Do)                          */}
      {/* ══════════════════════════════════════════════════ */}
      {tab === 'todo' && (
        <div className="space-y-5 animate-in fade-in duration-200">
          <div className="bg-[#0d121f] p-6 rounded-[2rem] border border-slate-800/50">
            <p className="text-lg font-black text-white mb-1">📋 Aaj ka Study Plan</p>
            <p className="text-[10px] text-slate-500 mb-6">{new Date().toLocaleDateString('en-IN',{weekday:'long',day:'numeric',month:'long'})}</p>

            {tasks.length>0 && (
              <div className="mb-5 bg-[#161c2c] p-4 rounded-2xl border border-slate-700/50 space-y-2">
                <div className="flex justify-between text-[9px] font-black uppercase text-slate-500">
                  <span>Progress</span><span className="text-white">{tasks.filter(t=>t.done).length}/{tasks.length}</span>
                </div>
                <div className="w-full h-1.5 bg-slate-800 rounded-full"><div className="h-full bg-blue-500 rounded-full transition-all" style={{width:`${(tasks.filter(t=>t.done).length/tasks.length)*100}%`}}></div></div>
                {tasks.every(t=>t.done)&&<p className="text-center text-emerald-400 text-xs font-black">🎉 Sab complete!</p>}
              </div>
            )}

            <div className="flex flex-col md:flex-row gap-3 mb-6 bg-slate-900/40 p-5 rounded-3xl border border-slate-800/30">
              <input value={newTask} onChange={e=>setNewTask(e.target.value)} onKeyDown={e=>e.key==='Enter'&&addTask()} placeholder="Kya padhna hai? (e.g. Exercise 1)" className="flex-[2] bg-[#161c2c] border border-slate-700/50 rounded-2xl px-5 py-3.5 text-white text-sm outline-none focus:border-blue-500 transition-all placeholder:text-slate-600 font-bold"/>
              <div className="flex-1 flex gap-2">
                <input list="subjects-list" value={taskSub} onChange={e=>setTaskSub(e.target.value)} placeholder="Subject" className="flex-1 bg-[#161c2c] border border-slate-700/50 rounded-2xl px-5 py-3.5 text-white text-xs outline-none focus:border-blue-500 transition-all font-black uppercase tracking-widest placeholder:text-slate-600"/>
                <datalist id="subjects-list">
                  {subjects.map(s => <option key={s.id} value={s.subjectName} />)}
                </datalist>
                <button onClick={addTask} disabled={tasks.length>=12||!newTask.trim()||!taskSub.trim()} className="px-6 py-3.5 bg-blue-600 hover:bg-blue-500 disabled:opacity-40 text-white font-[1000] rounded-2xl transition-all shadow-xl active:scale-95"><Plus size={18}/></button>
              </div>
            </div>

            <div className="space-y-2">
              {tasks.length===0?(
                <p className="text-center text-[10px] text-slate-600 py-8">Koi task nahi — Upar add karo!</p>
              ):(
                tasks.map(task=>(
                  <div key={task.id} className={`flex items-center gap-3 p-4 rounded-2xl border transition-all group ${task.done?'bg-emerald-900/10 border-emerald-500/20':'bg-slate-900/60 border-slate-800/50'}`}>
                    <button onClick={()=>toggleTask(task)} className="shrink-0">{task.done?<CheckCircle2 size={20} className="text-emerald-500"/>:<Circle size={20} className="text-slate-600 hover:text-blue-500 transition-colors"/>}</button>
                    {editingTask?.id === task.id ? (
                      <div className="flex-1 flex gap-2">
                         <input value={editValue} onChange={e=>setEditValue(e.target.value)} className="flex-1 bg-slate-800 text-white text-sm rounded-lg p-1 outline-none"/>
                         <button onClick={updateTask} className="text-blue-500"><Save size={16}/></button>
                      </div>
                    ) : (
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                           {task.subject && <span className="text-[7px] font-black bg-blue-600/10 text-blue-400 px-1.5 py-0.5 rounded-full uppercase tracking-tighter border border-blue-500/10">{task.subject}</span>}
                           <span className="text-[7px] text-slate-600 font-black uppercase tracking-widest">{task.date}</span>
                        </div>
                        <p className={`text-sm font-bold tracking-tight ${task.done?'line-through text-slate-600':'text-white'}`}
                          onClick={() => { setEditingTask(task); setEditValue(task.text); }}>{task.text}</p>
                      </div>
                    )}
                    {!task.done && (
                      <button onClick={() => { setTimerSubject(task.subject || 'OTHERS'); setTab('timer'); if(timerMode==='COUNTDOWN') setTimerTime(customMinutes*60); else setTimerTime(0); }} 
                        className="px-3 py-1.5 bg-blue-600/10 hover:bg-blue-600 text-blue-500 hover:text-white rounded-xl text-[8px] font-black uppercase tracking-widest transition-all border border-blue-500/10 flex items-center gap-2 group">
                        <Zap size={10} className="fill-blue-500 group-hover:fill-white" /> Start Hub
                      </button>
                    )}
                    <button onClick={()=>delTask(task.id)} className="opacity-0 group-hover:opacity-100 text-slate-600 hover:text-red-500 transition-all"><Trash2 size={14}/></button>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════════════ */}
      {/* TAB: ACHIEVEMENTS                                  */}
      {/* ══════════════════════════════════════════════════ */}
      {tab === 'achievements' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              {ic:<Flame size={18} className="text-orange-500"/>, label:'Current Streak', val:`${userData?.streak||0} days`},
              {ic:<Clock size={18} className="text-blue-500"/>,   label:'Total Study',   val:formatDuration(userData?.totalStudyTime||0)},
              {ic:<Zap size={18} className="text-yellow-500"/>,   label:'Sessions',       val:sessionCount},
              {ic:<Award size={18} className="text-purple-500"/>, label:'Badges',         val:`${earned.length}/${ALL_BADGES.length}`},
            ].map(({ic,label,val})=>(
              <div key={label} className="bg-[#0d121f] p-4 rounded-2xl border border-slate-800/50 text-center space-y-2">
                <div className="flex justify-center">{ic}</div>
                <p className="text-[8px] text-slate-500 font-bold uppercase tracking-widest">{label}</p>
                <p className="text-lg font-black text-white">{val}</p>
              </div>
            ))}
          </div>

          {earned.length>0&&(
            <div className="space-y-3">
              <p className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">✅ Earned ({earned.length})</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {earned.map(b=>(
                  <div key={b.id} className={`bg-gradient-to-br ${b.color} p-5 rounded-2xl text-center space-y-1.5 shadow-lg`}>
                    <div className="text-3xl">{b.icon}</div>
                    <p className="text-xs font-black text-white uppercase tracking-tight">{b.name}</p>
                    <p className="text-[8px] text-white/70">{b.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {locked.length>0&&(
            <div className="space-y-3">
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-2"><Shield size={11}/> Locked ({locked.length})</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {locked.map(b=>(
                  <div key={b.id} className="bg-[#0d121f] border border-slate-800/50 p-5 rounded-2xl text-center space-y-1.5 opacity-40">
                    <div className="text-3xl grayscale">{b.icon}</div>
                    <p className="text-xs font-black text-slate-400 uppercase tracking-tight">{b.name}</p>
                    <p className="text-[8px] text-slate-600">{b.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {earned.length===0&&(
            <div className="text-center py-16 bg-[#0d121f] rounded-3xl border border-dashed border-slate-700">
              <Trophy size={40} className="mx-auto text-slate-700 mb-4"/>
              <p className="text-slate-500 font-bold">Padhai karo aur badges unlock karo!</p>
            </div>
          )}
        </div>
      )}

      {/* ══ MODALS ══════════════════════════════════════════ */}
      {showGoalModal&&(
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-[#0d121f] border border-slate-800 p-8 rounded-[2.5rem] w-full max-w-sm shadow-2xl">
            <p className="text-xl font-black uppercase mb-1">Goals Set Karo</p>
            <p className="text-[10px] text-slate-500 mb-8">Aap kitna padhna chahte ho?</p>
            {[{key:'daily',label:'Daily Goal',hint:'Max 24 hr',max:24},{key:'weekly',label:'Weekly Goal',hint:'Max 168 hr',max:168},{key:'monthly',label:'Monthly Goal',hint:'Max 744 hr',max:744}].map(({key,label,hint,max})=>(
              <div key={key} className="mb-5">
                <div className="flex justify-between mb-2"><p className="text-[9px] font-black uppercase tracking-widest text-slate-400">{label}</p><p className="text-[9px] text-slate-600">{hint}</p></div>
                <div className="flex items-center gap-3"><input type="number" min={0} max={max} value={goals[key]} onChange={e=>setGoals({...goals,[key]:Math.min(max,Math.max(0,Number(e.target.value)))})} className="flex-1 bg-[#161c2c] border border-slate-700/50 rounded-2xl p-4 text-white font-black text-center outline-none focus:border-blue-500"/><span className="text-slate-500 text-sm font-bold">hr</span></div>
              </div>
            ))}
            <div className="flex gap-3 mt-2"><button className="flex-1 p-4 rounded-xl font-black text-[10px] uppercase text-slate-500 hover:bg-slate-800 transition-all" onClick={()=>setShowGoalModal(false)}>Cancel</button><button className="flex-1 bg-blue-600 hover:bg-blue-500 p-4 rounded-xl font-black text-[10px] uppercase text-white" onClick={saveGoals}>Save</button></div>
          </div>
        </div>
      )}

      {showSubjectModal&&(
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-[#0d121f] border border-slate-800 p-8 rounded-[2.5rem] w-full max-w-sm shadow-2xl">
            <p className="text-xl font-black uppercase mb-1">New Subject</p>
            <p className="text-[10px] text-slate-500 mb-8">{subjects.length}/10 used</p>
            <input maxLength={20} placeholder="Jaise: MATHS, PHYSICS, HINDI" className="w-full bg-[#161c2c] border border-slate-700/50 rounded-2xl p-4 text-white font-black uppercase mb-6 outline-none focus:border-blue-500 transition-all" value={newSubject} onChange={e=>setNewSubject(e.target.value)} onKeyDown={e=>e.key==='Enter'&&addSubject()} autoFocus/>
            <div className="flex gap-3"><button className="flex-1 p-4 rounded-xl font-black text-[10px] uppercase text-slate-500 hover:bg-slate-800" onClick={()=>{setShowSubjectModal(false);setNewSubject('');}}>Cancel</button><button disabled={subjects.length>=10||!newSubject.trim()} className={`flex-1 p-4 rounded-xl font-black text-[10px] uppercase text-white transition-all ${subjects.length>=10||!newSubject.trim()?'bg-slate-700 opacity-50':'bg-blue-600 hover:bg-blue-500'}`} onClick={addSubject}>Add Subject</button></div>
          </div>
        </div>
      )}

      {showCreateGroup&&(
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-[#0d121f] border border-slate-800 p-8 rounded-[2.5rem] w-full max-w-sm shadow-2xl">
            <p className="text-xl font-black uppercase mb-1">New Study Group</p>
            <p className="text-[10px] text-slate-500 mb-8">Group code se dosto ko join karao</p>
            <input maxLength={30} placeholder="Group ka naam..." className="w-full bg-[#161c2c] border border-slate-700/50 rounded-2xl p-4 text-white font-black mb-6 outline-none focus:border-blue-500" value={newGroupName} onChange={e=>setNewGroupName(e.target.value)} onKeyDown={e=>e.key==='Enter'&&createGroup()} autoFocus/>
            <div className="flex gap-3"><button className="flex-1 p-4 rounded-xl font-black text-[10px] uppercase text-slate-500 hover:bg-slate-800" onClick={()=>{setShowCreateGroup(false);setNewGroupName('');}}>Cancel</button><button disabled={groupLoading||!newGroupName.trim()} className="flex-1 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 p-4 rounded-xl font-black text-[10px] uppercase text-white" onClick={createGroup}>{groupLoading?'Creating...':'Create Group'}</button></div>
          </div>
        </div>
      )}

      {showJoinGroup&&(
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-[#0d121f] border border-slate-800 p-8 rounded-[2.5rem] w-full max-w-sm shadow-2xl">
            <p className="text-xl font-black uppercase mb-1">Join Group</p>
            <p className="text-[10px] text-slate-500 mb-8">6-character group code dalo</p>
            <input maxLength={6} placeholder="ABC123" className="w-full bg-[#161c2c] border border-slate-700/50 rounded-2xl p-4 text-white font-black uppercase text-center tracking-[0.5em] text-xl mb-6 outline-none focus:border-blue-500" value={joinCode} onChange={e=>setJoinCode(e.target.value.toUpperCase())} onKeyDown={e=>e.key==='Enter'&&joinGroup()} autoFocus/>
            <div className="flex gap-3"><button className="flex-1 p-4 rounded-xl font-black text-[10px] uppercase text-slate-500 hover:bg-slate-800" onClick={()=>{setShowJoinGroup(false);setJoinCode('');}}>Cancel</button><button disabled={groupLoading||joinCode.length<4} className="flex-1 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 p-4 rounded-xl font-black text-[10px] uppercase text-white" onClick={joinGroup}>{groupLoading?'Joining...':'Join Group'}</button></div>
          </div>
        </div>
      )}

      {/* ── FOCUS MODE OVERLAY ─────────────────────────── */}
      {focusMode && (
        <div className="fixed inset-0 z-[1000] bg-black flex flex-col items-center justify-center animate-in zoom-in-95 duration-500 overflow-hidden">
           <div className="absolute top-10 left-10 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600/20 flex items-center justify-center border border-blue-500/20">
                 <Power className="text-blue-500" size={18} />
              </div>
              <p className="text-[10px] font-black text-blue-500 uppercase tracking-[0.5em] italic">Distraction-Free Focus</p>
           </div>

           <div className="text-center space-y-6">
              <div className="inline-block bg-slate-900 text-slate-400 px-6 py-2 rounded-full text-[9px] font-black uppercase tracking-widest border border-slate-800">
                 Subject: {timerSubject}
              </div>
              <h2 className="text-8xl md:text-[12rem] font-[1000] text-white tracking-tighter tabular-nums leading-none font-mono drop-shadow-[0_20px_50px_rgba(59,130,246,0.5)]">
                 {fmtTimer(timerTime)}
              </h2>
              <p className="text-slate-600 text-[10px] font-black uppercase tracking-[0.5em]">Steady & Consistent</p>
           </div>

           <div className="absolute bottom-20 flex flex-col items-center gap-6">
              <div className="w-48 h-1.5 bg-slate-900 rounded-full overflow-hidden border border-slate-800 relative">
                 <div className="absolute top-0 left-0 h-full bg-red-600 transition-all duration-100" style={{ width: `${holdTime}%` }}></div>
              </div>
              <button 
                onMouseDown={() => {
                   holdRef.current = setInterval(() => {
                      setHoldTime(h => {
                         if (h >= 100) { setFocusMode(false); clearInterval(holdRef.current); return 0; }
                         return h + 5;
                      });
                   }, 50);
                }}
                onMouseUp={() => { clearInterval(holdRef.current); setHoldTime(0); }}
                onMouseLeave={() => { clearInterval(holdRef.current); setHoldTime(0); }}
                className="px-10 py-4 bg-slate-900 hover:bg-red-900/20 text-slate-500 hover:text-red-500 border border-slate-800 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all"
              >
                 Hold to Exit
              </button>
           </div>
        </div>
      )}
    </div>
  );
}
