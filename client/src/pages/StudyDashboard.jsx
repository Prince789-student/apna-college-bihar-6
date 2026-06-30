import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { Capacitor, registerPlugin } from '@capacitor/core';
import {
  doc, getDoc, collection, query, where, getDocs,
  updateDoc, addDoc, deleteDoc, onSnapshot
} from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../context/AuthContext';
import { useStudy } from '../context/StudyContext';
import SEO from '../components/SEO';
import {
  Clock, Plus, Flame, Target,
  LayoutDashboard, Settings, Trash2, Trophy,
  ArrowRight, ClipboardList,
  CheckCircle2, Shield, Timer, AlertTriangle,
  BookOpen, Activity, Calendar, Users, Search, X,
  ChevronLeft, ChevronRight
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
  const queryParams = new URLSearchParams(location.search);
  const isStandalone = queryParams.get('standalone') === 'true';
  const todayStr = new Date().toLocaleDateString('en-CA');

  const {
    timerActive, setTimerActive,
    timerTime, setTimerTime,
    timerSubject, setTimerSubject,
    customHours, setCustomHours,
    customMinutes, setCustomMinutes,
    customSeconds, setCustomSeconds,
    timerMode, setTimerMode,
    overtimeActive, setOvertimeActive,
    saveGlobalSession,
    allowedPackages, setAllowedPackages,
    lockMode, setLockMode,
    installedApps, fetchApps,
    launchApp, openUsageAccessSettings,
    selectedTaskId, setSelectedTaskId
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
  const [newTaskDuration, setNewTaskDuration] = useState('');
  const [newSubjectName, setNewSubjectName] = useState('');
  const [newSubjectTarget, setNewSubjectTarget] = useState('2'); // Default to 2 hours target
  const [showSubjectManager, setShowSubjectManager] = useState(false);
  const [selectedPlannerDate, setSelectedPlannerDate] = useState(new Date().toLocaleDateString('en-CA'));
  const [openAddFormSubject, setOpenAddFormSubject] = useState(null);
  const [inlineTaskText, setInlineTaskText] = useState('');
  const [inlineTaskDuration, setInlineTaskDuration] = useState('');
  const [activeStartTask, setActiveStartTask] = useState(null);
  const [historyScope, setHistoryScope] = useState('week');
  const [historyRefDate, setHistoryRefDate] = useState(new Date());
  const [selectedHistoryDetailDate, setSelectedHistoryDetailDate] = useState(null);
  const [selectedHeatmapDay, setSelectedHeatmapDay] = useState(null);
  const [modalHours, setModalHours] = useState(0);
  const [modalMinutes, setModalMinutes] = useState(0);
  const [modalSeconds, setModalSeconds] = useState(0);

  useEffect(() => {
    if (activeStartTask) {
      const dur = activeStartTask.duration || 60;
      setModalHours(Math.floor(dur / 60));
      setModalMinutes(dur % 60);
      setModalSeconds(0);
    }
  }, [activeStartTask]);

  const [isNative, setIsNative] = useState(() => {
    return Capacitor.isNativePlatform() || (typeof window !== 'undefined' && window.Capacitor && (window.Capacitor.isNativePlatform?.() || window.Capacitor.isPluginAvailable?.('AppBlocker'))) || Capacitor.isPluginAvailable?.('AppBlocker');
  });

  useEffect(() => {
    const checkBridge = () => {
      if (Capacitor.isNativePlatform() || (typeof window !== 'undefined' && window.Capacitor && (window.Capacitor.isNativePlatform?.() || window.Capacitor.isPluginAvailable?.('AppBlocker'))) || Capacitor.isPluginAvailable?.('AppBlocker')) {
        setIsNative(true);
      }
    };
    checkBridge();
    const timer1 = setTimeout(checkBridge, 1000);
    const timer2 = setTimeout(checkBridge, 3000);
    return () => { clearTimeout(timer1); clearTimeout(timer2); };
  }, []);

  const addSubject = async () => {
    if (!newSubjectName.trim()) return;
    try {
      const docRef = await addDoc(collection(db, 'Subjects'), {
        userId: user.uid,
        subjectName: newSubjectName.trim().toUpperCase(),
        targetHours: Number(newSubjectTarget || 2)
      });
      setSubjects([...subjects, { 
        id: docRef.id, 
        userId: user.uid, 
        subjectName: newSubjectName.trim().toUpperCase(),
        targetHours: Number(newSubjectTarget || 2)
      }]);
      setNewSubjectName('');
      setNewSubjectTarget('2');
      toast.success("Subject added successfully!");
    } catch(e) {
      toast.error("Failed to add subject");
    }
  };

  const deleteSubject = async (subId) => {
    try {
      await deleteDoc(doc(db, 'Subjects', subId));
      setSubjects(subjects.filter(s => s.id !== subId));
      toast.success("Subject deleted successfully!");
    } catch(e) {
      toast.error("Failed to delete subject");
    }
  };

  const updateSubjectTarget = async (subId, target) => {
    try {
      await updateDoc(doc(db, 'Subjects', subId), { targetHours: Number(target) });
      setSubjects(subjects.map(s => s.id === subId ? { ...s, targetHours: Number(target) } : s));
      toast.success("Subject target updated!");
    } catch (e) {
      toast.error("Failed to update target");
    }
  };

  const [isUsageStatsEnabled, setIsUsageStatsEnabled] = useState(false);
  const [isOverlayEnabled, setIsOverlayEnabled] = useState(false);
  const [isAdminEnabled, setIsAdminEnabled] = useState(false);

  const [disclosureModal, setDisclosureModal] = useState({ isOpen: false, type: null });

  const handleRequestPermission = (type) => {
    if (!isNative) {
      import('react-hot-toast').then(m => m.toast.error("Please download our app to use this feature!"));
      return;
    }
    setDisclosureModal({ isOpen: true, type });
  };

  const confirmPermission = async () => {
    const { type } = disclosureModal;
    setDisclosureModal({ isOpen: false, type: null });
    
    try {
      if (type === 'admin' && AppBlocker && AppBlocker.requestAdminRights) {
        await AppBlocker.requestAdminRights();
      } else if (type === 'usage' && AppBlocker && AppBlocker.requestUsageStatsPermission) {
        await AppBlocker.requestUsageStatsPermission();
      } else if (type === 'overlay' && AppBlocker && AppBlocker.requestOverlayPermission) {
        await AppBlocker.requestOverlayPermission();
      }
    } catch (e) {
      // console.log removed for production
      alert("Permission error: " + JSON.stringify(e));
    }
  };

  const checkPermissions = async () => {
    try {
      if (AppBlocker && AppBlocker.checkUsageStatsPermission) {
        const { granted } = await AppBlocker.checkUsageStatsPermission();
        setIsUsageStatsEnabled(granted);
      }
      if (AppBlocker && AppBlocker.checkOverlayPermission) {
        const { granted } = await AppBlocker.checkOverlayPermission();
        setIsOverlayEnabled(granted);
      }
      if (AppBlocker && AppBlocker.checkAdminRights) {
        const { granted } = await AppBlocker.checkAdminRights();
        setIsAdminEnabled(granted);
      }
    } catch (err) { console.error("Permission Check Failed:", err); }
  };

  useEffect(() => {
    if (isNative || Capacitor.isPluginAvailable?.('AppBlocker')) {
      fetchApps();
      checkPermissions();
      const interval = setInterval(checkPermissions, 5000);
      return () => clearInterval(interval);
    }
  }, [isNative]);

  useEffect(() => {
    if (!user) {
      setLoading(false);
      return;
    }
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
    const taskQuery = query(collection(db, 'Tasks'), where('userId', '==', user.uid));
    const unsubTask = onSnapshot(taskQuery, (snap) => {
      setTasks(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    });
    return () => { unsubSess(); unsubTask(); };
  }, [user]);

  const toggleApp = (pkg) => {
    if (timerActive && lockMode === 'STRICT') {
      alert("Strict Mode Active! You cannot modify allowed apps during an active session.");
      return;
    }
    if (timerActive && timerMode === 'COUNTDOWN') {
      alert("Focus Session is Locked! You cannot modify allowed apps during an active countdown session.");
      return;
    }
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
      activeSec = timerMode === 'COUNTDOWN' ? (customHours * 3600 + customMinutes * 60 + customSeconds - timerTime) : timerTime;
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
        isToday: dStr === todayStr,
        dateStr: dStr
      };
    });

    const subjectNames = subjects.map(s => s.subjectName);

    // Calculate dates filter for Subject Focus based on historyScope:
    const filterLimitDate = new Date();
    if (historyScope === 'week') {
      filterLimitDate.setDate(filterLimitDate.getDate() - 7);
    } else if (historyScope === 'month') {
      filterLimitDate.setDate(filterLimitDate.getDate() - 30);
    } else {
      filterLimitDate.setDate(filterLimitDate.getDate() - 365);
    };
    
    const filterLimitStr = filterLimitDate.toLocaleDateString('en-CA');

    const filteredSessions = sessions.filter(s => s.date >= filterLimitStr);

    const subjectBreakdown = subjects.map(sub => ({
      name: sub.subjectName,
      sec: filteredSessions.filter(s => s.subject === sub.subjectName).reduce((a, s) => a + (Number(s.duration) || 0), 0) + (timerSubject === sub.subjectName ? activeSec : 0)
    })).filter(s => s.sec > 0);

    const otherSec = filteredSessions
      .filter(s => !subjectNames.includes(s.subject))
      .reduce((a, s) => a + (Number(s.duration) || 0), 0) + (timerSubject === 'OTHERS' ? activeSec : 0);

    if (otherSec > 0) {
      subjectBreakdown.push({ name: 'Others', sec: otherSec });
    }

    subjectBreakdown.sort((a, b) => b.sec - a.sec);
    const totalScopeSec = subjectBreakdown.reduce((a, s) => a + s.sec, 0);

    return { today, weekly, monthly, heatmap, subjectBreakdown, totalScopeSec };
  }, [sessions, subjects, todayStr, timerActive, timerTime, timerMode, customHours, customMinutes, customSeconds, timerSubject, historyScope]);

   const historySessions = useMemo(() => {
    let activeSec = 0;
    if (timerActive) {
      activeSec = timerMode === 'COUNTDOWN' ? (customHours * 3600 + customMinutes * 60 + customSeconds - timerTime) : timerTime;
    }
    const all = [...sessions];
    if (timerActive && activeSec > 0) {
      all.push({
        date: todayStr,
        duration: activeSec,
        subject: timerSubject || 'OTHERS'
      });
    }
    return all;
  }, [sessions, timerActive, timerTime, timerMode, customHours, customMinutes, customSeconds, timerSubject, todayStr]);

  const handlePrevHistory = () => {
    const nextD = new Date(historyRefDate);
    if (historyScope === 'week') {
      nextD.setDate(nextD.getDate() - 7);
    } else if (historyScope === 'month') {
      nextD.setMonth(nextD.getMonth() - 1);
    } else if (historyScope === 'year') {
      nextD.setFullYear(nextD.getFullYear() - 1);
    }
    setHistoryRefDate(nextD);
  };

  const handleNextHistory = () => {
    const nextD = new Date(historyRefDate);
    if (historyScope === 'week') {
      nextD.setDate(nextD.getDate() + 7);
    } else if (historyScope === 'month') {
      nextD.setMonth(nextD.getMonth() + 1);
    } else if (historyScope === 'year') {
      nextD.setFullYear(nextD.getFullYear() + 1);
    }
    setHistoryRefDate(nextD);
  };

  const historyHeaderTitle = useMemo(() => {
    if (historyScope === 'week') {
      const temp = new Date(historyRefDate);
      const day = temp.getDay();
      const diff = temp.getDate() - day + (day === 0 ? -6 : 1);
      const monday = new Date(temp.setDate(diff));
      const sunday = new Date(monday.getTime());
      sunday.setDate(monday.getDate() + 6);
      
      const options = { month: 'short', day: 'numeric' };
      return `${monday.toLocaleDateString('en-US', options)} - ${sunday.toLocaleDateString('en-US', { ...options, year: 'numeric' })}`;
    } else if (historyScope === 'month') {
      return historyRefDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
    } else {
      return `Year ${historyRefDate.getFullYear()}`;
    }
  }, [historyRefDate, historyScope]);

  const weekDaysForHistory = useMemo(() => {
    const temp = new Date(historyRefDate);
    const day = temp.getDay();
    const diff = temp.getDate() - day + (day === 0 ? -6 : 1);
    const monday = new Date(temp.setDate(diff));
    return Array.from({ length: 7 }, (_, i) => {
      const d = new Date(monday.getTime());
      d.setDate(monday.getDate() + i);
      const dStr = d.toLocaleDateString('en-CA');
      const sec = historySessions.filter(s => s.date === dStr).reduce((acc, s) => acc + (Number(s.duration) || 0), 0);
      return {
        name: d.toLocaleDateString('en-US', { weekday: 'short' }),
        dateNum: d.getDate(),
        dateStr: dStr,
        sec,
        isToday: dStr === todayStr
      };
    });
  }, [historyRefDate, historySessions, todayStr]);

  const monthDaysForHistory = useMemo(() => {
    const year = historyRefDate.getFullYear();
    const month = historyRefDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    
    let startDay = firstDay.getDay() - 1;
    if (startDay === -1) startDay = 6;
    
    const totalDays = lastDay.getDate();
    const cells = [];
    
    // Prev Month padding
    const prevMonthLast = new Date(year, month, 0).getDate();
    for (let i = startDay - 1; i >= 0; i--) {
      const d = new Date(year, month - 1, prevMonthLast - i);
      const dStr = d.toLocaleDateString('en-CA');
      const sec = historySessions.filter(s => s.date === dStr).reduce((acc, s) => acc + (Number(s.duration) || 0), 0);
      cells.push({
        dateNum: d.getDate(),
        dateStr: dStr,
        isCurrentMonth: false,
        sec,
        isToday: dStr === todayStr
      });
    }
    
    // Current month
    for (let i = 1; i <= totalDays; i++) {
      const d = new Date(year, month, i);
      const dStr = d.toLocaleDateString('en-CA');
      const sec = historySessions.filter(s => s.date === dStr).reduce((acc, s) => acc + (Number(s.duration) || 0), 0);
      cells.push({
        dateNum: i,
        dateStr: dStr,
        isCurrentMonth: true,
        sec,
        isToday: dStr === todayStr
      });
    }
    
    // Next month padding
    const totalCells = cells.length <= 35 ? 35 : 42;
    const nextNeeded = totalCells - cells.length;
    for (let i = 1; i <= nextNeeded; i++) {
      const d = new Date(year, month + 1, i);
      const dStr = d.toLocaleDateString('en-CA');
      const sec = historySessions.filter(s => s.date === dStr).reduce((acc, s) => acc + (Number(s.duration) || 0), 0);
      cells.push({
        dateNum: i,
        dateStr: dStr,
        isCurrentMonth: false,
        sec,
        isToday: dStr === todayStr
      });
    }
    return cells;
  }, [historyRefDate, historySessions, todayStr]);

  const yearMonthsForHistory = useMemo(() => {
    const year = historyRefDate.getFullYear();
    return Array.from({ length: 12 }, (_, i) => {
      const mStr = `${year}-${(i + 1).toString().padStart(2, '0')}`;
      const sec = historySessions
        .filter(s => s.date.startsWith(mStr))
        .reduce((acc, s) => acc + (Number(s.duration) || 0), 0);
      return {
        name: new Date(year, i, 1).toLocaleDateString('en-US', { month: 'short' }),
        fullName: new Date(year, i, 1).toLocaleDateString('en-US', { month: 'long' }),
        mStr,
        sec
      };
    });
  }, [historyRefDate, historySessions]);

  const historyTotalDuration = useMemo(() => {
    if (historyScope === 'week') {
      return weekDaysForHistory.reduce((acc, d) => acc + d.sec, 0);
    } else if (historyScope === 'month') {
      return monthDaysForHistory
        .filter(d => d.isCurrentMonth)
        .reduce((acc, d) => acc + d.sec, 0);
    } else {
      return yearMonthsForHistory.reduce((acc, m) => acc + m.sec, 0);
    }
  }, [historyScope, weekDaysForHistory, monthDaysForHistory, yearMonthsForHistory]);

  const dailyDetailData = useMemo(() => {
    if (!selectedHistoryDetailDate) return null;
    const dStr = selectedHistoryDetailDate;
    
    // Filter sessions on this day
    const daySessions = historySessions.filter(s => s.date === dStr);
    const totalDuration = daySessions.reduce((acc, s) => acc + (Number(s.duration) || 0), 0);
    
    // Filter tasks on this day
    const dayTasks = tasks.filter(t => t.date === dStr);
    const completedTasksCount = dayTasks.filter(t => t.done).length;
    const totalTasksCount = dayTasks.length;
    
    // Format date beautifully
    const formattedDate = new Date(dStr + 'T00:00:00').toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
    
    return {
      dateStr: dStr,
      formattedDate,
      sessions: daySessions,
      totalDuration,
      tasks: dayTasks,
      completedTasksCount,
      totalTasksCount
    };
  }, [selectedHistoryDetailDate, historySessions, tasks]);

  const groupedHistory = []; // Kept for compatibility but not rendered

  const activeSubjectObj = subjects.find(s => s.subjectName === timerSubject);

  const activeSubjectTodaySec = useMemo(() => {
    if (!activeSubjectObj) return 0;
    let activeSec = 0;
    if (timerActive && timerSubject === activeSubjectObj.subjectName) {
      activeSec = timerMode === 'COUNTDOWN' ? (customMinutes * 60 + customSeconds - timerTime) : timerTime;
    }
    return sessions
      .filter(s => s.date === todayStr && s.subject === activeSubjectObj.subjectName)
      .reduce((a, s) => a + (Number(s.duration) || 0), 0) + activeSec;
  }, [sessions, activeSubjectObj, timerActive, timerTime, timerMode, customMinutes, customSeconds, timerSubject, todayStr]);

  const getProgress = (sec, g) => (!g || g <= 0) ? 0 : Math.min(100, (sec / (g * 3600)) * 100).toFixed(0);

  const addTask = async () => {
    if (!newTask.trim()) return;
    await addDoc(collection(db, 'Tasks'), {
      userId: user.uid, text: newTask.trim(),
      subject: newTaskSubject, done: false,
      date: todayStr, 
      duration: newTaskDuration ? parseInt(newTaskDuration) : null,
      createdAt: new Date().toISOString()
    });
    setNewTask('');
    setNewTaskDuration('');
    setNewTaskSubject('OTHERS');
  };

  const addSubjectTask = async (subjectName) => {
    if (!inlineTaskText.trim()) return;
    try {
      await addDoc(collection(db, 'Tasks'), {
        userId: user.uid,
        text: inlineTaskText.trim(),
        subject: subjectName,
        done: false,
        date: selectedPlannerDate,
        duration: inlineTaskDuration ? parseInt(inlineTaskDuration) : null,
        createdAt: new Date().toISOString()
      });
      setInlineTaskText('');
      setInlineTaskDuration('');
      setOpenAddFormSubject(null);
      toast.success("Task added to planner!");
    } catch (e) {
      toast.error("Failed to add task");
    }
  };

  const startFocusSessionForTask = (task, mode) => {
    setTab('timer');
    setTimerSubject(task.subject || 'OTHERS');
    setSelectedTaskId(task.id);
    
    if (mode === 'TIMER') {
      setTimerMode('COUNTDOWN');
      const totalSecs = (modalHours * 3600) + (modalMinutes * 60) + modalSeconds;
      setTimerTime(totalSecs);
      setCustomHours(modalHours);
      setCustomMinutes(modalMinutes);
      setCustomSeconds(modalSeconds);
    } else {
      setTimerMode('STOPWATCH');
      setTimerTime(0);
    }
    
    setTimerActive(true);
    setActiveStartTask(null);
  };

  const weekDays = useMemo(() => {
    const now = new Date();
    const dayOfWeek = now.getDay();
    const mondayDiff = now.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1);
    const monday = new Date(now.getFullYear(), now.getMonth(), mondayDiff);
    
    return Array.from({ length: 7 }, (_, i) => {
      const d = new Date(monday.getTime());
      d.setDate(monday.getDate() + i);
      return d;
    });
  }, []);

  const allSubjectList = useMemo(() => {
    return [...subjects.map(s => s.subjectName), 'OTHERS'];
  }, [subjects]);

  const tabTitles = {
    timer: 'Focus Timer',
    overview: 'Study Dashboard',
    todo: 'Study Plan & Tasks',
    network: 'Study Network'
  };
  const activeTabTitle = tabTitles[tab] || 'Study Dashboard';

  if (loading) return <div className="flex justify-center p-20"><div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div></div>;

  return (
    <div className="max-w-2xl mx-auto pb-24 px-3 md:px-0">
      <SEO 
        title={`${activeTabTitle} | Apna College Bihar`} 
        description="Track your study hours, manage tasks, block distractions, and focus better with Apna College Bihar's Study Dashboard."
      />

      {/* ACB Study Zone Header */}
      <div className="flex items-center gap-3 pt-4 pb-3">
        <img src="/logo-acb.png?v=99" alt="ACB" className="w-10 h-10 rounded-xl" />
        <div>
          <p className="text-[8px] font-black text-slate-400 uppercase tracking-[0.3em]">Apna College Bihar</p>
          <h1 className="text-lg font-[1000] text-slate-900 tracking-tighter uppercase leading-none">Study Zone</h1>
        </div>
        {timerActive && (
          <span className="ml-auto text-[8px] font-black bg-blue-600 text-white px-3 py-1 rounded-full uppercase animate-pulse">
            Focus Active
          </span>
        )}
      </div>      {/* Guest Login Banner — only shown when not logged in */}
      {!user && (
        <div className="flex items-center gap-3 bg-blue-50 border border-blue-200/80 rounded-2xl px-4 py-3 mb-2">
          <div className="w-8 h-8 bg-blue-600/10 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
            <Shield size={16} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[10px] font-black text-blue-900 uppercase tracking-widest leading-none">Login to Track Sessions</p>
            <p className="text-[9px] text-blue-500 font-bold mt-0.5">Timer visible hai — login karo sessions save karne ke liye</p>
          </div>
          <Link to="/login" className="shrink-0 px-3 py-1.5 bg-blue-600 text-white text-[9px] font-black rounded-xl uppercase tracking-widest active:scale-95 transition-all">
            Login
          </Link>
        </div>
      )}


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
              {/* Mode */}
              <div className="flex gap-2 w-full">
                {['COUNTDOWN', 'STOPWATCH'].map(m => (
                  <button key={m} onClick={() => !timerActive && setTimerMode(m)} className={`flex-1 py-2.5 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all ${timerMode === m ? 'bg-blue-600 text-white shadow-lg' : 'bg-slate-100 text-slate-500'}`}>{m}</button>
                ))}
              </div>

              {/* Task Selector for Focus */}
              <div className="flex items-center gap-2 w-full px-4 py-3 bg-slate-50 rounded-2xl border border-slate-200/50">
                <ClipboardList size={14} className="text-blue-500" />
                <select 
                  value={selectedTaskId || ''} 
                  onChange={e => {
                    const taskId = e.target.value;
                    setSelectedTaskId(taskId);
                    const task = tasks.find(t => t.id === taskId);
                    if (task) {
                      setTimerSubject(task.subject || 'OTHERS');
                      if (task.duration && !timerActive && timerMode === 'COUNTDOWN') {
                        setTimerTime(task.duration * 60);
                        setCustomHours(Math.floor(task.duration / 60));
                        setCustomMinutes(task.duration % 60);
                        setCustomSeconds(0);
                      }
                    }
                  }} 
                  disabled={timerActive} 
                  className="bg-transparent text-[10px] font-black uppercase tracking-widest text-slate-900 outline-none flex-1"
                >
                  <option value="">SELECT TASK TO FOCUS ON (OPTIONAL)</option>
                  {tasks.filter(t => !t.done && t.date === todayStr).map(t => (
                    <option key={t.id} value={t.id}>
                      {t.text} {t.duration ? `(${t.duration}m)` : ''}
                    </option>
                  ))}
                </select>
              </div>

              {/* Timer Display */}
              <h2 className="text-7xl font-[1000] text-slate-900 tracking-tighter tabular-nums leading-none">
                {Math.floor(timerTime / 3600).toString().padStart(2, '0')}:
                {Math.floor((timerTime % 3600) / 60).toString().padStart(2, '0')}:
                {(timerTime % 60).toString().padStart(2, '0')}
              </h2>

              {overtimeActive && (
                <div className="flex items-center gap-1.5 px-3 py-1 bg-red-50 text-red-600 border border-red-200 rounded-full animate-pulse mt-1">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                  <span className="text-[9px] font-black uppercase tracking-widest">Overtime Active</span>
                </div>
              )}
              {/* Duration Picker */}
              {!timerActive && timerMode === 'COUNTDOWN' && (
                <div className="flex items-center justify-center gap-4 bg-slate-50 p-5 rounded-2xl w-full">
                  <div className="flex flex-col items-center gap-1">
                    <input type="number" min="0" max="23" value={customHours} onChange={e => setCustomHours(Math.max(0, parseInt(e.target.value) || 0))} className="w-16 bg-white border-2 border-slate-200 rounded-xl p-3 text-center font-black text-xl outline-none focus:border-blue-500" />
                    <span className="text-[9px] font-black text-slate-400 uppercase">Hr</span>
                  </div>
                  <span className="text-xl font-black text-slate-300 mb-4">:</span>
                  <div className="flex flex-col items-center gap-1">
                    <input type="number" min="0" max="59" value={customMinutes} onChange={e => setCustomMinutes(Math.min(59, Math.max(0, parseInt(e.target.value) || 0)))} className="w-16 bg-white border-2 border-slate-200 rounded-xl p-3 text-center font-black text-xl outline-none focus:border-blue-500" />
                    <span className="text-[9px] font-black text-slate-400 uppercase">Min</span>
                  </div>
                  <span className="text-xl font-black text-slate-300 mb-4">:</span>
                  <div className="flex flex-col items-center gap-1">
                    <input type="number" min="0" max="59" value={customSeconds} onChange={e => setCustomSeconds(Math.min(59, Math.max(0, parseInt(e.target.value) || 0)))} className="w-16 bg-white border-2 border-slate-200 rounded-xl p-3 text-center font-black text-xl outline-none focus:border-blue-500" />
                    <span className="text-[9px] font-black text-slate-400 uppercase">Sec</span>
                  </div>
                </div>
              )}
              {/* Control Buttons */}
              {!timerActive ? (
                <div className="flex gap-3 w-full">
                  <button onClick={() => {
                    // Login gate — only for timer start
                    if (!user) {
                      navigate('/login', { state: { from: '/study' } });
                      return;
                    }
                    if (isNative && lockMode === 'NORMAL' && !isUsageStatsEnabled) {
                      alert("Please enable Usage Access permission first to use Normal Mode App Blocker.");
                      return;
                    }
                    if (isNative && lockMode === 'STRICT' && (!isUsageStatsEnabled || !isOverlayEnabled || !isAdminEnabled)) {
                      alert("Strict Mode requires all permissions: Usage Access, Overlay, and Device Admin. Please enable them below.");
                      return;
                    }
                    setTimerActive(true);
                  }} className="w-full py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-[1000] text-xs uppercase tracking-widest shadow-xl active:scale-95 transition-all flex items-center justify-center gap-2">
                    <Shield size={16} /> {user ? 'Start Focus' : 'Login to Start'}
                  </button>
                </div>
              ) : (
                <div className="w-full space-y-3 animate-in fade-in duration-300">
                  {timerMode === 'COUNTDOWN' ? (
                    <div className="bg-amber-500/10 border border-amber-500/20 p-5 rounded-2xl text-center space-y-2">
                      <div className="flex items-center justify-center gap-2 text-amber-600 font-[1000] text-[10px] uppercase tracking-widest">
                        <Shield size={14} className="animate-pulse" /> Focus Session is Locked
                      </div>
                      <p className="text-[9px] font-bold text-slate-500 uppercase tracking-wider leading-relaxed">
                        To build ultimate discipline, stop and pause controls are disabled until the timer runs out.
                      </p>
                    </div>
                  ) : (
                    <div className="flex gap-3 w-full">
                      <button onClick={() => setTimerActive(false)} className="flex-1 py-5 bg-slate-100 text-slate-700 hover:bg-slate-200 rounded-2xl font-[1000] text-[10px] uppercase tracking-widest transition-all shadow-md active:scale-95">
                        Pause Focus
                      </button>
                      <button onClick={() => saveGlobalSession()} className="flex-1 py-5 bg-red-600 hover:bg-red-500 text-white rounded-2xl font-[1000] text-[10px] uppercase tracking-widest shadow-xl shadow-red-600/20 transition-all active:scale-95">
                        Stop & Save
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* Native App Blocker / Iron Focus Panel */}
              <div className="w-full bg-slate-50 border border-slate-200/80 rounded-[2rem] p-6 space-y-4 animate-in fade-in duration-500 font-['Inter']">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-blue-600/10 text-blue-600 rounded-2xl">
                    <Shield size={22} />
                  </div>
                  <div>
                    <h3 className="text-xs font-[1000] text-slate-900 uppercase tracking-tight">Iron Focus Shield (App Blocker)</h3>
                    <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mt-0.5">Strict background app blocking</p>
                  </div>
                </div>

                <div className="flex gap-2 w-full pt-2">
                  <button onClick={() => setLockMode('NORMAL')} className={`flex-1 py-2.5 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all ${lockMode === 'NORMAL' ? 'bg-blue-600 text-white shadow-lg' : 'bg-white text-slate-500 border border-slate-200'}`}>NORMAL MODE</button>
                  <button onClick={() => setLockMode('STRICT')} className={`flex-1 py-2.5 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all ${lockMode === 'STRICT' ? 'bg-red-600 text-white shadow-lg' : 'bg-white text-slate-500 border border-slate-200'}`}>STRICT MODE</button>
                </div>

                <div className="space-y-3 pt-2">
                  {/* Permissions */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-slate-200/60 shadow-sm animate-in fade-in slide-in-from-top-2">
                      <div className="flex items-center gap-3">
                        <AlertTriangle size={18} className={isUsageStatsEnabled ? "text-emerald-500" : "text-amber-500"} />
                        <div>
                          <p className="text-[11px] font-[1000] text-slate-800 uppercase tracking-tight">Usage Access</p>
                          <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">Required for tracking</p>
                        </div>
                      </div>
                      <button 
                        onClick={() => handleRequestPermission('usage')}
                        className={`px-4 py-2.5 rounded-xl text-[9px] font-[1000] uppercase tracking-widest transition-all ${isUsageStatsEnabled ? 'bg-emerald-50 text-emerald-600 border border-emerald-200' : 'bg-blue-600 hover:bg-blue-50 text-white shadow-lg active:scale-95'}`}
                      >
                        {isUsageStatsEnabled ? 'Enabled' : 'Enable'}
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-slate-200/60 shadow-sm animate-in fade-in slide-in-from-top-2">
                      <div className="flex items-center gap-3">
                        <AlertTriangle size={18} className={isOverlayEnabled ? "text-emerald-500" : "text-amber-500"} />
                        <div>
                          <p className="text-[11px] font-[1000] text-slate-800 uppercase tracking-tight">Overlay Access</p>
                          <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">Required to block apps</p>
                        </div>
                      </div>
                      <button 
                        onClick={() => handleRequestPermission('overlay')}
                        className={`px-4 py-2.5 rounded-xl text-[9px] font-[1000] uppercase tracking-widest transition-all ${isOverlayEnabled ? 'bg-emerald-50 text-emerald-600 border border-emerald-200' : 'bg-blue-600 hover:bg-blue-50 text-white shadow-lg active:scale-95'}`}
                      >
                        {isOverlayEnabled ? 'Enabled' : 'Enable'}
                      </button>
                    </div>

                    {lockMode === 'STRICT' && (
                      <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-slate-200/60 shadow-sm animate-in fade-in slide-in-from-top-2">
                        <div className="flex items-center gap-3">
                          <Shield size={18} className={isAdminEnabled ? "text-emerald-500" : "text-amber-500"} />
                          <div>
                            <p className="text-[11px] font-[1000] text-slate-800 uppercase tracking-tight">Device Admin</p>
                            <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">Required for Strict Mode</p>
                          </div>
                        </div>
                        <button 
                          onClick={() => handleRequestPermission('admin')}
                          className={`px-4 py-2.5 rounded-xl text-[9px] font-[1000] uppercase tracking-widest transition-all ${isAdminEnabled ? 'bg-emerald-50 text-emerald-600 border border-emerald-200' : 'bg-red-600 hover:bg-red-50 text-white shadow-lg active:scale-95'}`}
                        >
                          {isAdminEnabled ? 'Enabled' : 'Enable'}
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Whitelist Button */}
                  {!timerActive && (
                    <button 
                      onClick={() => setShowWhitelist(true)}
                      className="w-full mt-2 flex items-center justify-between p-5 rounded-2xl transition-all active:scale-95 shadow-xl group bg-slate-900 hover:bg-slate-800 text-white"
                    >
                      <div className="flex items-center gap-4">
                        <div className="p-2 bg-white/10 rounded-xl text-blue-400 group-hover:scale-110 transition-transform">
                          <Activity size={18} />
                        </div>
                        <div className="text-left">
                          <p className="text-[11px] font-[1000] uppercase tracking-tight leading-none">Configure Whitelist</p>
                          <p className="text-[8px] text-slate-400 font-bold uppercase tracking-widest mt-1.5">{(allowedPackages || '').split(',').filter(Boolean).length} Apps Allowed</p>
                        </div>
                      </div>
                      <ArrowRight size={18} className="text-slate-400 group-hover:translate-x-1 transition-transform" />
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Allowed Apps Launch Pad Card */}
            {isNative && installedApps.filter(app => (allowedPackages || '').split(',').filter(Boolean).includes(app.packageName)).length > 0 && (
              <div className="bg-white rounded-[3rem] border border-slate-200/60 shadow-sm p-6 space-y-4 animate-in slide-in-from-bottom-4 duration-500">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-blue-600/10 text-blue-600 rounded-2xl">
                    <Activity size={20} />
                  </div>
                  <div>
                    <h3 className="text-xs font-[1000] text-slate-900 uppercase tracking-tight">Allowed Apps Launch Pad</h3>
                    <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mt-0.5">Click an app to open it safely</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 pt-2">
                  {installedApps
                    .filter(app => (allowedPackages || '').split(',').filter(Boolean).includes(app.packageName))
                    .map(app => (
                      <button
                        key={app.packageName}
                        onClick={() => launchApp(app.packageName)}
                        className="flex items-center gap-3 p-3 bg-slate-50 hover:bg-slate-100/80 border border-slate-200/40 rounded-2xl transition-all text-left shadow-sm active:scale-95 group/appBtn"
                      >
                        <div className="w-8 h-8 rounded-xl overflow-hidden flex items-center justify-center bg-blue-600/10 text-blue-600 font-[1000] text-sm group-hover/appBtn:bg-blue-600 group-hover/appBtn:text-white transition-all shrink-0">
                          {app.icon ? (
                            <img src={app.icon} alt={app.name} className="w-6 h-6 object-contain" />
                          ) : (
                            app.name[0]
                          )}
                        </div>
                        <span className="text-[10px] font-black text-slate-700 uppercase truncate flex-1">{app.name}</span>
                      </button>
                    ))
                  }
                </div>
              </div>
            )}
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
                const isSelected = selectedHeatmapDay?.dateStr === d.dateStr;
                return (
                  <button 
                    key={i} 
                    onClick={() => setSelectedHeatmapDay(isSelected ? null : d)}
                    className="flex flex-col items-center gap-1.5 flex-1 focus:outline-none group relative"
                  >
                    {isSelected && (
                      <div className="absolute bottom-full mb-2 bg-slate-800 text-white text-[9px] font-black uppercase tracking-wider px-2 py-1.5 rounded-lg shadow-xl z-20 whitespace-nowrap animate-in fade-in zoom-in-95 duration-100">
                        {formatDuration(d.sec)}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-slate-800"></div>
                      </div>
                    )}
                    <div 
                      className={`w-full rounded-lg transition-all ${
                        d.isToday 
                          ? 'bg-blue-600 shadow-md shadow-blue-500/20' 
                          : isSelected
                            ? 'bg-blue-400'
                            : d.sec > 0 
                              ? 'bg-slate-400 group-hover:bg-slate-500' 
                              : 'bg-slate-100 group-hover:bg-slate-200'
                      }`} 
                      style={{ height: `${Math.max(8, (d.sec / maxH) * 56)}px` }}
                    ></div>
                    <span className={`text-[8px] font-black uppercase transition-colors ${
                      d.isToday 
                        ? 'text-blue-600' 
                        : isSelected
                          ? 'text-blue-400 font-[1000]'
                          : 'text-slate-300 group-hover:text-slate-500'
                    }`}>
                      {d.day}
                    </span>
                    {d.isToday && (
                      <div className="w-8 h-1 bg-blue-600 rounded-full mt-0.5"></div>
                    )}
                  </button>
                );
              })}
            </div>

            {selectedHeatmapDay && (
              <div className="bg-slate-50 border border-slate-200/50 rounded-2xl p-3 text-center animate-in slide-in-from-top-1 duration-200 mx-2">
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">
                  Focus on {new Date(selectedHeatmapDay.dateStr + 'T00:00:00').toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}
                </p>
                <p className="text-sm font-[1000] text-blue-600 mt-0.5">
                  {formatDuration(selectedHeatmapDay.sec)}
                </p>
              </div>
            )}
            {/* Subject Breakdown */}
            {stats.subjectBreakdown.length > 0 && (
              <div className="space-y-3 pt-2">
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest px-2">Subject Focus</p>
                {stats.subjectBreakdown.map(sub => (
                  <div key={sub.name} className="space-y-1.5 px-2">
                    <div className="flex justify-between"><span className="text-[10px] font-black text-slate-700 uppercase tracking-wide">{sub.name}</span><span className="text-[10px] font-black text-slate-400">{formatDuration(sub.sec)}</span></div>
                    <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden"><div className="h-full bg-slate-800 rounded-full" style={{ width: `${(sub.sec / Math.max(1, stats.totalScopeSec)) * 100}%` }}></div></div>
                  </div>
                ))}
              </div>
            )}

            {/* Focus History section */}
            <div className="space-y-3 pt-4 border-t border-slate-100">
              <div className="flex justify-between items-center px-2">
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Focus History</p>
                <div className="flex bg-slate-100 p-0.5 rounded-lg border border-slate-200">
                  {['week', 'month', 'year'].map(scope => (
                    <button
                      key={scope}
                      onClick={() => setHistoryScope(scope)}
                      className={`px-3 py-1 rounded-md text-[8px] font-black uppercase tracking-wider transition-all ${historyScope === scope ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
                    >
                      {scope}
                    </button>
                  ))}
                </div>
              </div>

              {/* Navigation Bar */}
              <div className="flex flex-col gap-1.5 bg-slate-50 p-3 md:p-4 rounded-2xl border border-slate-200/50 mx-2">
                <div className="flex items-center justify-between">
                  <button onClick={handlePrevHistory} className="p-1 hover:bg-slate-200 rounded-lg transition-colors text-slate-600">
                    <ChevronLeft size={16} />
                  </button>
                  <span className="text-[10px] font-black text-slate-700 uppercase tracking-widest">{historyHeaderTitle}</span>
                  <button onClick={handleNextHistory} className="p-1 hover:bg-slate-200 rounded-lg transition-colors text-slate-600">
                    <ChevronRight size={16} />
                  </button>
                </div>
                <div className="text-center">
                  <span className="text-[9px] font-black bg-blue-600 text-white px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    Total Focus: {formatDuration(historyTotalDuration)}
                  </span>
                </div>
              </div>

              {/* Render View Grid */}
              <div className="px-2">
                {historyScope === 'week' && (
                  <div className="grid grid-cols-7 gap-1.5 pt-1">
                    {weekDaysForHistory.map(day => (
                      <button 
                        key={day.dateStr} 
                        onClick={() => setSelectedHistoryDetailDate(day.dateStr)}
                        className={`flex flex-col items-center p-2 rounded-xl border transition-all hover:scale-105 active:scale-95 text-center ${
                          day.isToday 
                            ? 'bg-blue-50 border-blue-200 text-blue-700 font-bold' 
                            : 'bg-slate-50 border-slate-200/50 text-slate-600 hover:border-slate-300'
                        }`}
                      >
                        <span className="text-[7px] font-black uppercase tracking-wider">{day.name}</span>
                        <span className="text-xs font-[1000] mt-0.5">{day.dateNum}</span>
                        <span className={`text-[8px] font-bold mt-1.5 px-1 py-0.5 rounded-md leading-tight text-center ${day.sec > 0 ? 'bg-blue-600 text-white font-[1000] shadow-sm' : 'bg-slate-200 text-slate-400'}`}>
                          {formatDuration(day.sec)}
                        </span>
                      </button>
                    ))}
                  </div>
                )}

                {historyScope === 'month' && (
                  <div className="pt-1">
                    <div className="grid grid-cols-7 gap-1 text-center mb-1.5">
                      {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((lbl, idx) => (
                        <span key={idx} className="text-[8px] font-black text-slate-400">{lbl}</span>
                      ))}
                    </div>
                    <div className="grid grid-cols-7 gap-1">
                      {monthDaysForHistory.map((cell, idx) => {
                        const isBtn = cell.isCurrentMonth;
                        const Comp = isBtn ? 'button' : 'div';
                        return (
                          <Comp 
                            key={idx}
                            onClick={isBtn ? () => setSelectedHistoryDetailDate(cell.dateStr) : undefined}
                            className={`flex flex-col items-center justify-between p-1.5 min-h-[44px] rounded-xl border text-center transition-all ${
                              isBtn ? 'hover:scale-105 active:scale-95 hover:border-slate-300' : ''
                            } ${
                              !cell.isCurrentMonth 
                                ? 'opacity-20 border-transparent bg-transparent' 
                                : cell.isToday 
                                  ? 'bg-blue-50 border-blue-300 text-blue-700' 
                                  : 'bg-slate-50 border-slate-200/40 text-slate-700'
                            }`}
                          >
                            <span className="text-[8px] font-black">{cell.dateNum}</span>
                            {cell.sec > 0 ? (
                              <span className="text-[7px] font-[1000] bg-blue-600 text-white px-1 py-0.5 rounded leading-none scale-90 origin-bottom">
                                {formatDuration(cell.sec)}
                              </span>
                            ) : (
                              <span className="text-[7px] text-slate-300">-</span>
                            )}
                          </Comp>
                        );
                      })}
                    </div>
                  </div>
                )}

                {historyScope === 'year' && (
                  <div className="grid grid-cols-3 gap-2.5 pt-1">
                    {yearMonthsForHistory.map(m => (
                      <div key={m.mStr} className="flex flex-col justify-between p-3.5 bg-slate-50 border border-slate-200/40 rounded-2xl hover:border-slate-300 transition-all">
                        <span className="text-[10px] font-black text-slate-700 uppercase tracking-wide">{m.name}</span>
                        <span className={`text-xs font-[1000] mt-2 ${m.sec > 0 ? 'text-blue-600' : 'text-slate-400'}`}>
                          {formatDuration(m.sec)}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

        {/* ─── TAB: STUDY PLAN ─── */}
        {tab === 'todo' && (
          <div className="bg-white rounded-[2.5rem] border border-slate-200/60 shadow-sm overflow-hidden animate-in fade-in duration-300">
            <div className="flex items-center gap-3 px-6 pt-6 pb-4 border-b border-slate-100">
              <div className="w-9 h-9 bg-purple-500 text-white rounded-xl flex items-center justify-center"><ClipboardList size={18} /></div>
              <h2 className="text-sm font-[1000] text-slate-900 uppercase tracking-tighter">Study Planner</h2>
              <span className="ml-auto text-[8px] font-black bg-slate-100 text-slate-500 px-3 py-1 rounded-full uppercase">
                {tasks.filter(t => t.date === selectedPlannerDate && t.done).length} / {tasks.filter(t => t.date === selectedPlannerDate).length} Done
              </span>
            </div>

            {/* Week Navigation */}
            <div className="flex justify-between items-center gap-1.5 overflow-x-auto pb-4 pt-3 border-b border-slate-100 px-6">
              {weekDays.map(day => {
                const dStr = day.toLocaleDateString('en-CA');
                const isSelected = selectedPlannerDate === dStr;
                const isToday = dStr === new Date().toLocaleDateString('en-CA');
                const dayTasks = tasks.filter(t => t.date === dStr);
                const completedCount = dayTasks.filter(t => t.done).length;
                const totalCount = dayTasks.length;
                
                return (
                  <button
                    key={dStr}
                    onClick={() => setSelectedPlannerDate(dStr)}
                    className={`flex flex-col items-center p-3 rounded-2xl min-w-[55px] transition-all border ${isSelected ? 'bg-blue-600 border-blue-600 text-white shadow-md' : 'bg-slate-50 border-slate-200/50 text-slate-600 hover:bg-slate-100'}`}
                  >
                    <span className="text-[8px] font-black uppercase tracking-wider">
                      {day.toLocaleDateString('en-US', { weekday: 'short' })}
                    </span>
                    <span className="text-xs font-[1000] mt-0.5">
                      {day.getDate()}/{day.getMonth() + 1}
                    </span>
                    <span className="text-[8px] font-black mt-1">
                      {completedCount}/{totalCount}
                    </span>
                    {isToday && (
                      <span className={`text-[6px] font-black uppercase tracking-widest mt-1 px-1 rounded-full ${isSelected ? 'bg-white text-blue-600' : 'bg-blue-600 text-white'}`}>
                        Today
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            <div className="px-6 pt-4">
              <button 
                onClick={() => setShowSubjectManager(!showSubjectManager)}
                className="w-full flex items-center justify-between p-4 bg-slate-50 hover:bg-slate-100/80 border border-slate-200/60 rounded-2xl text-[10px] font-black uppercase tracking-widest text-blue-600 transition-all"
              >
                <span className="flex items-center gap-2">
                  <BookOpen size={14} />
                  Manage Subjects ({subjects.length})
                </span>
                <Plus size={14} className={`transition-transform duration-200 ${showSubjectManager ? 'rotate-45' : ''}`} />
              </button>

              {showSubjectManager && (
                <div className="w-full bg-slate-50 border border-slate-200/80 rounded-2xl p-4 mt-3 space-y-3 animate-in slide-in-from-top-2 duration-200">
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Create & Manage Subjects</p>
                  <div className="flex gap-2">
                    <input 
                      type="text" 
                      value={newSubjectName} 
                      onChange={e => setNewSubjectName(e.target.value)}
                      placeholder="SUBJECT NAME" 
                      className="flex-1 bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs font-bold outline-none"
                    />
                    <button onClick={addSubject} className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-xl text-xs font-bold active:scale-95 transition-all">Add</button>
                  </div>
                  {subjects.length > 0 && (
                    <div className="max-h-32 overflow-y-auto space-y-1.5 pt-2 border-t border-slate-200/50">
                      {subjects.map(s => (
                        <div key={s.id} className="flex justify-between items-center bg-white px-3 py-1.5 rounded-lg border border-slate-100 gap-2">
                          <span className="text-[10px] font-bold text-slate-700 uppercase flex-1">{s.subjectName}</span>
                          <button onClick={() => deleteSubject(s.id)} className="text-red-400 hover:text-red-600"><Trash2 size={12} /></button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="p-6 space-y-6">
              {/* Grouped Subjects list */}
              {allSubjectList.map(subName => {
                const dayTasks = tasks.filter(t => t.date === selectedPlannerDate);
                const subTasks = dayTasks.filter(t => (t.subject || 'OTHERS') === subName);
                const isFormOpen = openAddFormSubject === subName;

                return (
                  <div key={subName} className="bg-slate-50/50 border border-slate-200/50 rounded-3xl p-5 space-y-4">
                    <div className="flex justify-between items-center pb-2 border-b border-slate-200/40">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-3.5 bg-blue-600 rounded-full"></span>
                        <h3 className="text-xs font-black text-slate-800 uppercase tracking-widest">{subName}</h3>
                      </div>
                      <button 
                        onClick={() => {
                          setOpenAddFormSubject(isFormOpen ? null : subName);
                          setInlineTaskText('');
                          setInlineTaskDuration('');
                        }}
                        className="p-1 text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                      >
                        {isFormOpen ? <X size={16} /> : <Plus size={16} />}
                      </button>
                    </div>

                    {/* Inline Task Form */}
                    {isFormOpen && (
                      <div className="bg-white border border-slate-200/60 rounded-2xl p-4 space-y-3 shadow-sm animate-in slide-in-from-top-2 duration-200">
                        <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Add target for {subName}</p>
                        <div className="flex gap-2">
                          <input 
                            type="text" 
                            value={inlineTaskText}
                            onChange={e => setInlineTaskText(e.target.value)}
                            placeholder="Target description"
                            className="flex-1 bg-slate-50 border border-slate-200/50 rounded-xl px-3 py-2 text-xs font-bold outline-none focus:border-blue-400"
                          />
                          <button 
                            onClick={() => addSubjectTask(subName)}
                            className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-xl text-xs font-bold active:scale-95 transition-all"
                          >
                            Add
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Task Cards */}
                    <div className="space-y-2">
                      {subTasks.map(task => (
                        <div key={task.id} className={`flex items-center gap-3 p-4 bg-white rounded-2xl border transition-all ${task.done ? 'border-slate-100 opacity-60' : 'border-slate-200/60 shadow-sm'}`}>
                          <button 
                            onClick={async () => await updateDoc(doc(db, 'Tasks', task.id), { done: !task.done })} 
                            className={`w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 transition-all ${task.done ? 'bg-emerald-500 text-white border-emerald-500' : 'border-2 border-slate-300'}`}
                          >
                            {task.done && <CheckCircle2 size={14} className="text-white" />}
                          </button>
                          <div className="flex-1 min-w-0">
                            <p className={`text-xs font-bold ${task.done ? 'text-slate-400 line-through' : 'text-slate-900'}`}>
                              {task.text}
                            </p>
                            {task.duration && (
                              <span className="text-[9px] font-black text-slate-400 uppercase tracking-wider block mt-0.5">
                                Target: {task.duration}m
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-1.5">
                            {!task.done && (
                              <button 
                                onClick={() => setActiveStartTask(task)}
                                className="p-2 bg-blue-50 hover:bg-blue-600 text-blue-600 hover:text-white rounded-xl transition-all"
                                title="Start Focus Session"
                              >
                                <Timer size={14} />
                              </button>
                            )}
                            <button 
                              onClick={async () => await deleteDoc(doc(db, 'Tasks', task.id))} 
                              className="text-slate-300 hover:text-red-500 p-2 transition-colors"
                            >
                              <Trash2 size={14} />
                            </button>
                          </div>
                        </div>
                      ))}
                      {subTasks.length === 0 && (
                        <p className="text-[9px] text-slate-400 font-bold uppercase italic text-center py-2">No targets set for this day</p>
                      )}
                    </div>
                  </div>
                );
              })}
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
            <button onClick={() => navigate('/groups' + (isStandalone ? '?standalone=true' : ''), { state: { from: 'study-network' } })} className="w-full flex items-center justify-between p-5 bg-slate-900 text-white rounded-2xl active:scale-95 transition-all">
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
                <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Today's Focus</p>
                <p className="text-2xl font-[1000] text-slate-900 mt-1">{formatDuration(stats.today)}</p>
                <p className="text-[8px] text-slate-400">today</p>
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
                        <div className="w-12 h-12 rounded-xl overflow-hidden flex items-center justify-center bg-slate-100 border border-slate-200/50 shrink-0">
                          {app.icon ? (
                            <img src={app.icon} alt={app.name} className="w-8 h-8 object-contain" />
                          ) : (
                            <div className={`w-full h-full flex items-center justify-center font-[1000] text-lg ${isSelected ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-500'}`}>{app.name[0]}</div>
                          )}
                        </div>
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
        {/* Mode Selection Modal */}
        {activeStartTask && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-300">
            <div className="bg-white rounded-[3rem] p-8 w-full max-w-md shadow-2xl space-y-6 animate-in zoom-in-95">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-blue-600/10 text-blue-600 rounded-2xl flex items-center justify-center mx-auto">
                  <Timer size={24} />
                </div>
                <h3 className="text-xl font-[1000] text-slate-900 uppercase tracking-tight">Choose Focus Mode</h3>
                <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">
                  Target: {activeStartTask.text} ({activeStartTask.subject || 'OTHERS'})
                </p>
              </div>

              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/50 space-y-2">
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest text-center">Configure Timer Duration</p>
                <div className="flex items-center justify-center gap-2">
                  <div className="flex flex-col items-center">
                    <input type="number" min="0" max="23" value={modalHours} onChange={e => setModalHours(Math.max(0, parseInt(e.target.value) || 0))} className="w-12 bg-white border border-slate-200 rounded-lg p-1.5 text-center font-black text-sm outline-none focus:border-blue-500" />
                    <span className="text-[7px] font-black text-slate-400 uppercase mt-0.5">Hr</span>
                  </div>
                  <span className="text-sm font-black text-slate-300">:</span>
                  <div className="flex flex-col items-center">
                    <input type="number" min="0" max="59" value={modalMinutes} onChange={e => setModalMinutes(Math.min(59, Math.max(0, parseInt(e.target.value) || 0)))} className="w-12 bg-white border border-slate-200 rounded-lg p-1.5 text-center font-black text-sm outline-none focus:border-blue-500" />
                    <span className="text-[7px] font-black text-slate-400 uppercase mt-0.5">Min</span>
                  </div>
                  <span className="text-sm font-black text-slate-300">:</span>
                  <div className="flex flex-col items-center">
                    <input type="number" min="0" max="59" value={modalSeconds} onChange={e => setModalSeconds(Math.min(59, Math.max(0, parseInt(e.target.value) || 0)))} className="w-12 bg-white border border-slate-200 rounded-lg p-1.5 text-center font-black text-sm outline-none focus:border-blue-500" />
                    <span className="text-[7px] font-black text-slate-400 uppercase mt-0.5">Sec</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => startFocusSessionForTask(activeStartTask, 'TIMER')}
                  className="flex flex-col items-center justify-center p-6 bg-slate-50 hover:bg-blue-50 border-2 border-slate-200/60 hover:border-blue-500 rounded-3xl transition-all group active:scale-95 text-center"
                >
                  <Clock size={28} className="text-slate-400 group-hover:text-blue-600 mb-3 transition-colors" />
                  <span className="text-xs font-black uppercase tracking-widest text-slate-800 group-hover:text-blue-600">Timer Mode</span>
                  <span className="text-[8px] text-slate-400 mt-2 font-bold uppercase">
                    Use config above
                  </span>
                  <span className="text-[7px] text-blue-500 font-bold uppercase mt-1 leading-normal">
                    (Auto rollover to stopwatch on end)
                  </span>
                </button>

                <button
                  onClick={() => startFocusSessionForTask(activeStartTask, 'STOPWATCH')}
                  className="flex flex-col items-center justify-center p-6 bg-slate-50 hover:bg-emerald-50 border-2 border-slate-200/60 hover:border-emerald-500 rounded-3xl transition-all group active:scale-95 text-center"
                >
                  <Activity size={28} className="text-slate-400 group-hover:text-emerald-600 mb-3 transition-colors" />
                  <span className="text-xs font-black uppercase tracking-widest text-slate-800 group-hover:text-emerald-600">Stopwatch Mode</span>
                  <span className="text-[8px] text-slate-400 mt-2 font-bold uppercase">Counts up from 00:00</span>
                  <span className="text-[7px] text-emerald-500 font-bold uppercase mt-1 leading-normal">
                    (Save manually when finished)
                  </span>
                </button>
              </div>

              <button
                onClick={() => setActiveStartTask(null)}
                className="w-full py-4 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-2xl font-black text-xs uppercase tracking-widest active:scale-95 transition-all"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* Daily History Details Modal */}
        {selectedHistoryDetailDate && dailyDetailData && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-300">
            <div className="bg-white rounded-[3rem] p-6 md:p-8 w-full max-w-md shadow-2xl flex flex-col max-h-[85vh] overflow-hidden animate-in zoom-in-95">
              
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 bg-blue-600/10 text-blue-600 rounded-xl">
                    <Calendar size={18} />
                  </div>
                  <div>
                    <h3 className="text-xs font-[1000] text-slate-400 uppercase tracking-widest leading-none">Day Summary</h3>
                    <p className="text-[11px] font-black text-slate-800 uppercase tracking-tight mt-1.5">{dailyDetailData.formattedDate}</p>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedHistoryDetailDate(null)}
                  className="p-2 bg-slate-100 hover:bg-slate-200 text-slate-500 rounded-xl transition-all"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Scrollable Body */}
              <div className="flex-1 overflow-y-auto py-5 space-y-5 custom-scrollbar">
                
                {/* Stats Summary Card */}
                <div className="grid grid-cols-2 gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-200/50">
                  <div className="text-center p-2 bg-white rounded-xl border border-slate-100 shadow-sm">
                    <span className="text-[8px] font-black text-slate-400 uppercase tracking-wider block">Focus Time</span>
                    <span className="text-lg font-[1000] text-blue-600 block mt-1">{formatDuration(dailyDetailData.totalDuration)}</span>
                  </div>
                  <div className="text-center p-2 bg-white rounded-xl border border-slate-100 shadow-sm">
                    <span className="text-[8px] font-black text-slate-400 uppercase tracking-wider block">Tasks Completed</span>
                    <span className="text-lg font-[1000] text-emerald-600 block mt-1">{dailyDetailData.completedTasksCount} / {dailyDetailData.totalTasksCount}</span>
                  </div>
                </div>

                {/* Focus Sessions list */}
                <div className="space-y-2.5">
                  <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Completed Focus Sessions</h4>
                  <div className="space-y-1.5 max-h-40 overflow-y-auto custom-scrollbar">
                    {dailyDetailData.sessions.map((sess, idx) => (
                      <div key={idx} className="flex justify-between items-center p-3 bg-slate-50 border border-slate-200/40 rounded-xl">
                        <span className="text-[10px] font-black text-slate-700 uppercase tracking-wide">{sess.subject}</span>
                        <span className="text-xs font-[1000] text-blue-600">{formatDuration(sess.duration)}</span>
                      </div>
                    ))}
                    {dailyDetailData.sessions.length === 0 && (
                      <p className="text-[9px] text-slate-400 font-bold uppercase italic text-center py-3">No focus sessions completed on this day</p>
                    )}
                  </div>
                </div>

                {/* Tasks list */}
                <div className="space-y-2.5">
                  <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Planned Study Tasks</h4>
                  <div className="space-y-1.5 max-h-40 overflow-y-auto custom-scrollbar">
                    {dailyDetailData.tasks.map(task => (
                      <div key={task.id} className="flex items-center gap-3 p-3 bg-slate-50 border border-slate-200/40 rounded-xl">
                        <div className={`w-5 h-5 rounded-lg flex items-center justify-center flex-shrink-0 border transition-all ${task.done ? 'bg-emerald-500 text-white border-emerald-500' : 'border-2 border-slate-300'}`}>
                          {task.done && <CheckCircle2 size={12} className="text-white" />}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className={`text-[11px] font-bold truncate ${task.done ? 'text-slate-400 line-through' : 'text-slate-800'}`}>{task.text}</p>
                          <span className="text-[8px] font-black text-slate-400 uppercase tracking-wider block mt-0.5">{task.subject || 'OTHERS'}</span>
                        </div>
                      </div>
                    ))}
                    {dailyDetailData.tasks.length === 0 && (
                      <p className="text-[9px] text-slate-400 font-bold uppercase italic text-center py-3">No targets set for this day</p>
                    )}
                  </div>
                </div>

              </div>

              {/* Close Button */}
              <div className="pt-4 border-t border-slate-100">
                <button 
                  onClick={() => setSelectedHistoryDetailDate(null)}
                  className="w-full py-4 bg-slate-900 text-white hover:bg-slate-800 rounded-2xl font-black text-xs uppercase tracking-widest transition-all active:scale-95 shadow-lg shadow-slate-900/10"
                >
                  Close
                </button>
              </div>

            </div>
          </div>
        )}
        {/* Prominent Disclosure Modal for Permissions */}
        {disclosureModal.isOpen && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-300">
            <div className="bg-white rounded-[2rem] p-6 w-full max-w-sm shadow-2xl flex flex-col animate-in zoom-in-95">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                  <Shield size={24} />
                </div>
                <div>
                  <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest">Permission Required</h3>
                  <p className="text-[10px] text-slate-500 font-bold uppercase mt-0.5">Data Usage Disclosure</p>
                </div>
              </div>
              
              <div className="text-[11px] text-slate-600 font-medium leading-relaxed mb-6 space-y-3">
                {disclosureModal.type === 'usage' && (
                  <p>
                    <strong className="text-slate-900">Usage Access:</strong> Apna College Bihar collects information about the apps you open (Usage Stats) to detect and block distracting applications while Focus Mode is active. This data is processed locally on your device and is <strong className="text-blue-600">NOT</strong> sent to our servers.
                  </p>
                )}
                {disclosureModal.type === 'overlay' && (
                  <p>
                    <strong className="text-slate-900">Display Over Other Apps:</strong> Apna College Bihar requires permission to display over other apps in order to show the Study Blocker screen when you attempt to open a restricted application during a focus session.
                  </p>
                )}
                {disclosureModal.type === 'admin' && (
                  <p>
                    <strong className="text-slate-900">Device Administrator:</strong> Apna College Bihar requires Device Administrator privileges strictly to prevent the uninstallation of this app while a Study Session is active. We do not use these privileges to wipe data or change passwords.
                  </p>
                )}
              </div>

              <div className="flex gap-3">
                <button 
                  onClick={() => setDisclosureModal({ isOpen: false, type: null })}
                  className="flex-1 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all"
                >
                  Cancel
                </button>
                <button 
                  onClick={confirmPermission}
                  className="flex-1 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-black text-[10px] uppercase tracking-widest transition-all shadow-md shadow-blue-600/20"
                >
                  I Agree & Continue
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ── Educational SEO Content ── */}
        <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-200/50 mt-12 mb-8 prose prose-slate max-w-none shadow-sm text-left">
          <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tighter mb-4">Focus Mode & Study Timer for Engineering Students</h2>
          <p>
            Welcome to the ultimate <strong>Study Dashboard and Pomodoro Timer</strong> designed specifically for Bihar Engineering University (BEU) students. Engineering requires intense concentration, especially when preparing for complex subjects like Data Structures, Applied Mathematics, or Engineering Mechanics. Our custom-built focus timer helps you block out distractions and track your daily study hours efficiently.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-4">Why Use the Apna College Bihar Study Timer?</h3>
          <p>
            Mobile phones are the biggest source of distraction during exam preparation. If you are using our official Android App, this Study Dashboard comes equipped with a strict <strong>App Blocker</strong>. When you start a Focus Session, it automatically locks out distracting applications (like Instagram, Facebook, and games), ensuring 100% dedication to your BEU Notes and PYQs.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-4">Track Your Academic Progress</h3>
          <p>
            The Study Dashboard isn't just a timer; it is a complete productivity suite. You can set daily targets, organize tasks by subject, and monitor your study history via beautiful analytics charts. By consistently tracking your focus hours, you build a disciplined routine—which is the secret to scoring a high CGPA in Bihar Engineering University (BEU) end-semester examinations.
          </p>
        </div>

      </div>
    </div>
  );
}
