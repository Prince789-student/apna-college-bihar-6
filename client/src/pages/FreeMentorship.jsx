import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, UserCheck, Calendar, BookOpen, Clock, 
  CheckCircle2, MessageCircle, Sparkles, Send, Target, 
  Award, Phone, Video, ChevronRight, AlertCircle, 
  TrendingUp, Flame, Check, Plus, Trash2, HelpCircle, 
  Share2, ShieldCheck, RefreshCw, Star, ExternalLink, ArrowRight,
  Search, Users, User, Mail, Lock, Eye, EyeOff, KeyRound, UserPlus, LogIn,
  Filter, BookMarked, Briefcase, FileText, X, Play, Pause, RotateCcw, Timer, Save
} from 'lucide-react';
import SEO from '../components/SEO';
import toast from 'react-hot-toast';
import { useStudy } from '../context/StudyContext';
import { 
  findStudent, 
  getEnrolledStudents, 
  saveEnrolledStudents,
  getMentorsList,
  saveMentorsList,
  verifyStudentLogin,
  verifyMentorLogin
} from '../data/mentorshipData';
import { fetchCloudMentorshipData, subscribeMentorshipUpdates } from '../services/mentorshipSync';
import MentorshipChat from '../components/MentorshipChat';

// ─── BEU College Code Mapping ───────────────────────────────────────────────
const BEU_COLLEGE_CODES = {
  '101': 'BCE Bhagalpur',
  '102': 'GCE Gaya',
  '103': 'MIT Muzaffarpur',
  '104': 'DCE Darbhanga',
  '105': 'MIT Muzaffarpur',
  '106': 'BCE Bakhtiyarpur',
  '107': 'MCE Motihari',
  '108': 'DCE Darbhanga',
  '109': 'LNJPIT Chapra',
  '110': 'SEC Sasaram',
  '111': 'SCE Saharsa',
  '112': 'KEC Katihar',
  '113': 'GEC Vaishali',
  '114': 'GEC Banka',
  '115': 'GEC Jamui',
  '116': 'GEC Nawada',
  '117': 'GEC Aurangabad',
  '118': 'GEC Kishanganj',
  '119': 'GEC Munger',
  '120': 'GEC Sheohar',
  '121': 'GEC Madhubani',
  '122': 'GEC Siwan',
  '123': 'GEC Gopalganj',
  '124': 'GEC Samastipur',
  '125': 'GEC West Champaran',
  '126': 'GEC Buxar',
  '127': 'GEC Bhojpur',
  '128': 'GEC Sheikhpura',
  '129': 'GEC Lakhisarai',
  '130': 'GEC Khagaria',
  '131': 'GEC Begusarai',
};

const BEU_BRANCH_CODES = {
  '101': { name: 'Civil Engineering', code: 'CE', icon: '🏗️' },
  '102': { name: 'Civil with Computer App.', code: 'CE', icon: '🏛️' },
  '103': { name: 'Mechanical Engineering', code: 'ME', icon: '⚙️' },
  '104': { name: 'Electrical Engineering', code: 'EE', icon: '⚡' },
  '105': { name: 'Electrical & Electronics Engg.', code: 'EEE', icon: '🔋' },
  '106': { name: 'Computer Science & Engineering', code: 'CSE', icon: '💻' },
  '107': { name: 'Information Technology', code: 'CSE', icon: '🌐' },
  '108': { name: 'Electronics & Communication', code: 'ECE', icon: '📡' },
  '109': { name: 'CSE (AI & Machine Learning)', code: 'CSE', icon: '🤖' },
  '110': { name: 'CSE (Data Science)', code: 'CSE', icon: '📊' },
  '111': { name: 'CSE (Cyber Security)', code: 'CSE', icon: '🛡️' },
  '112': { name: 'CSE (IoT & Cyber Security)', code: 'CSE', icon: '📶' },
};

export default function FreeMentorship() {
  const [activeTab, setActiveTab] = useState('student'); // 'student' | 'mentor'
  const [activeStudent, setActiveStudent] = useState(null);
  const [activeMentor, setActiveMentor] = useState(null);
  const [enrolledList, setEnrolledList] = useState([]);
  const [mentorsList, setMentorsList] = useState([]);

  // Student Login Form State
  const [loginRoll, setLoginRoll] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Mentor Login Form State
  const [mentorEmail, setMentorEmail] = useState('');
  const [mentorPassword, setMentorPassword] = useState('');
  const [showMentorPassword, setShowMentorPassword] = useState(false);
  const [isMentorSubmitting, setIsMentorSubmitting] = useState(false);

  // Mentor Portal View State (when mentor is logged in)
  const [mentorSearchQuery, setMentorSearchQuery] = useState('');
  const [mentorBranchFilter, setMentorBranchFilter] = useState('ALL');
  const [mentorAssignmentFilter, setMentorAssignmentFilter] = useState('all'); // 'all' | 'assigned'
  const [selectedMenteeLogs, setSelectedMenteeLogs] = useState(null);
  const [activeChatMentee, setActiveChatMentee] = useState(null);
  const [mentorMeetInput, setMentorMeetInput] = useState('');

  // Study Tracker & Live Timer State
  const [studyLogs, setStudyLogs] = useState([]);
  const [subjectName, setSubjectName] = useState('Engineering Mathematics-I');
  const [topicCovered, setTopicCovered] = useState('');
  const [studyHours, setStudyHours] = useState('1');
  const [studyStatus, setStudyStatus] = useState('Completed ✅');

  // Live Timer State (Stopwatch / Pomodoro for Student)
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [timerTick, setTimerTick] = useState(0);

  // Mentor Tasks
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Download & review 3 years of BEU PYQs for upcoming mid-sems', done: true },
    { id: 2, text: 'Complete Module 1 & Module 2 formula notes with neat derivations', done: false },
    { id: 3, text: 'Practice 5 university numerical problems every day', done: false },
    { id: 4, text: 'Attend this week\'s Free 1-on-1 Mentor Guidance Q&A room', done: false },
  ]);

  // Doubt Box State
  const [doubtText, setDoubtText] = useState('');
  const [doubtCategory, setDoubtCategory] = useState('Exams & CGPA');
  const [doubtSubmitted, setDoubtSubmitted] = useState(false);

  // Booking Modal State
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState('Tomorrow · 6:00 PM');
  const [slotBooked, setSlotBooked] = useState(false);

  // Live Timer Interval
  useEffect(() => {
    let interval = null;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setTimerSeconds(prev => prev + 1);
      }, 1000);
    } else if (!isTimerRunning && timerSeconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timerSeconds]);

  const formatTimerDisplay = (totalSecs) => {
    const hrs = Math.floor(totalSecs / 3600);
    const mins = Math.floor((totalSecs % 3600) / 60);
    const secs = totalSecs % 60;
    if (hrs > 0) {
      return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  // Load mentors and students on mount and subscribe to live cloud sync
  useEffect(() => {
    const students = getEnrolledStudents();
    const mentors = getMentorsList();
    setEnrolledList(students);
    setMentorsList(mentors);

    // Fetch latest from Cloud / Server API
    fetchCloudMentorshipData().then(cloud => {
      const studentsList = (cloud && cloud.students && cloud.students.length > 0) ? cloud.students : null;
      const mentorsListFresh = (cloud && cloud.mentors && cloud.mentors.length > 0) ? cloud.mentors : null;
      if (studentsList) setEnrolledList(studentsList);
      if (mentorsListFresh) setMentorsList(mentorsListFresh);

      const savedRoll = localStorage.getItem('beu_mentorship_active_roll');
      if (savedRoll) {
        const freshStu = findStudent(savedRoll);
        if (freshStu) setLoggedInStudent(freshStu, mentorsListFresh || mentors);
      }
    }).catch(() => {});

    // Real-time Firestore sync (instant update if Admin re-assigns on laptop)
    const unsub = subscribeMentorshipUpdates(({ students: updatedStudents, mentors: updatedMentors }) => {
      if (updatedStudents && updatedStudents.length > 0) {
        setEnrolledList(updatedStudents);
        const savedRoll = localStorage.getItem('beu_mentorship_active_roll');
        if (savedRoll) {
          const freshStu = findStudent(savedRoll);
          if (freshStu) setLoggedInStudent(freshStu, updatedMentors || mentors);
        }
      }
      if (updatedMentors && updatedMentors.length > 0) {
        setMentorsList(updatedMentors);
      }
    });

    // Check if student session is already active
    const savedRoll = localStorage.getItem('beu_mentorship_active_roll');
    if (savedRoll) {
      const student = findStudent(savedRoll);
      if (student) {
        setLoggedInStudent(student, mentors);
      }
    }

    // Check if mentor session is already active
    const savedMentorId = localStorage.getItem('beu_mentorship_active_mentor_id');
    if (savedMentorId) {
      const mentorFound = mentors.find(m => m.id === savedMentorId || (m.email && m.email.toLowerCase() === savedMentorId.toLowerCase()));
      if (mentorFound) {
        setActiveMentor(mentorFound);
      } else if (savedMentorId === 'mentor-default-1' || savedMentorId === 'mentor@beu.in') {
        setActiveMentor({
          id: 'mentor-default-1',
          name: 'Senior BEU Academic Mentor',
          email: 'mentor@beu.in',
          role: 'Verified Academic Mentor (BEU Senior)',
          college: 'Bihar Engineering University',
          branch: 'ALL',
          cgpa: '9.20 CGPA',
          avatar: '',
          specialties: ['High CGPA Strategy', 'Coding Fundamentals', 'Backlog Avoidance']
        });
      }
    }

    // Auto-clean any mock study logs from localStorage
    try {
      const regRaw = localStorage.getItem('beu_all_study_logs_registry');
      if (regRaw) {
        const reg = JSON.parse(regRaw);
        let changed = false;
        Object.keys(reg).forEach(k => {
          if (Array.isArray(reg[k])) {
            const clean = reg[k].filter(item => !isMockStudyLog(item));
            if (clean.length !== reg[k].length) {
              reg[k] = clean;
              changed = true;
            }
          }
        });
        if (changed) {
          localStorage.setItem('beu_all_study_logs_registry', JSON.stringify(reg));
        }
      }
    } catch (e) {}
  }, []);

  // Helper to detect mock/dummy study logs
  const isMockStudyLog = (item) => {
    if (!item) return true;
    const t = (item.topic || '').toLowerCase();
    const s = (item.subject || '').toLowerCase();
    const id = String(item.id || '');
    return (
      t.includes('c programming & ac circuit') ||
      t.includes('syllabus orientation') ||
      t.includes('calculus & matrices') ||
      s.includes('core engineering basics') ||
      id === '1' ||
      id === '2' ||
      item.date === 'Recent' ||
      item.date === 'Yesterday'
    );
  };

  const setLoggedInStudent = (stu, mentors = mentorsList) => {
    const mentorsPool = (mentors && mentors.length > 0) ? mentors : getMentorsList();
    let mentor = null;

    if (stu.assignedMentorId && mentorsPool && mentorsPool.length > 0) {
      const assignedLower = (stu.assignedMentorId || '').toLowerCase();
      mentor = mentorsPool.find(m => {
        if (m.id === stu.assignedMentorId) return true;
        if (assignedLower.includes('deepak') && (m.name?.toLowerCase().includes('deepak') || m.id?.includes('deepak'))) return true;
        if (assignedLower.includes('subhash') && (m.name?.toLowerCase().includes('subhash') || m.id?.includes('subhash'))) return true;
        return false;
      }) || null;
    }

    // Always ensure every enrolled student is assigned to Deepak or Subhash
    if (!mentor && mentorsPool && mentorsPool.length > 0) {
      const isSubhash = (stu.assignedMentorId?.toLowerCase().includes('subhash') || (stu.branchCode === 'ECE' && parseInt(String(stu.id || '').replace(/\D/g, '') || '0') > 17));
      mentor = mentorsPool.find(m => isSubhash ? m.name?.toLowerCase().includes('subhash') : m.name?.toLowerCase().includes('deepak')) || mentorsPool[0];
    }

    const studentData = {
      ...stu,
      branchIcon: stu.branchCode === 'CSE' ? '💻' : stu.branchCode === 'ECE' ? '📡' : stu.branchCode === 'EEE' ? '🔋' : stu.branchCode === 'CE' ? '🏗️' : '⚙️',
      batch: '2026-2030 Batch (1st Year)',
      yearText: '1st Year',
      semester: '1st / 2nd Semester',
      mentor: mentor
    };

    setActiveStudent(studentData);
    localStorage.setItem('beu_mentorship_active_roll', stu.roll);
    localStorage.setItem('beu_mentorship_active_student_name', stu.name);
    if (mentor?.name) {
      localStorage.setItem('beu_mentorship_active_mentor_name', mentor.name);
    } else {
      localStorage.removeItem('beu_mentorship_active_mentor_name');
    }
    loadSavedStudyLogs(stu.roll);
  };

  const loadSavedStudyLogs = (roll) => {
    try {
      const saved = localStorage.getItem(`beu_study_logs_${roll}`);
      let parsed = null;
      if (saved) {
        try { parsed = JSON.parse(saved); } catch(e) {}
      }
      if (parsed && Array.isArray(parsed)) {
        const clean = parsed.filter(item => !isMockStudyLog(item));
        setStudyLogs(clean);
        localStorage.setItem(`beu_study_logs_${roll}`, JSON.stringify(clean));
      } else {
        const registry = JSON.parse(localStorage.getItem('beu_all_study_logs_registry') || '{}');
        if (registry[roll] && Array.isArray(registry[roll])) {
          const clean = registry[roll].filter(item => !isMockStudyLog(item));
          setStudyLogs(clean);
          localStorage.setItem(`beu_study_logs_${roll}`, JSON.stringify(clean));
        } else {
          setStudyLogs([]);
          localStorage.setItem(`beu_study_logs_${roll}`, JSON.stringify([]));
        }
      }
    } catch (e) {
      console.error(e);
      setStudyLogs([]);
    }
  };

  // Real-time listener: Auto-reload logs when student returns from /study or saves a session in another tab
  useEffect(() => {
    const handleStorageUpdate = (e) => {
      if (activeStudent?.roll && (e.key === `beu_study_logs_${activeStudent.roll}` || e.key === 'beu_all_study_logs_registry' || e.key === 'timerActive')) {
        loadSavedStudyLogs(activeStudent.roll);
      }
      setTimerTick(prev => prev + 1);
    };
    const handleWindowFocus = () => {
      if (activeStudent?.roll) {
        loadSavedStudyLogs(activeStudent.roll);
      }
      setTimerTick(prev => prev + 1);
    };
    const handleTimerEvent = () => {
      if (activeStudent?.roll) {
        loadSavedStudyLogs(activeStudent.roll);
      }
      setTimerTick(prev => prev + 1);
    };

    window.addEventListener('storage', handleStorageUpdate);
    window.addEventListener('focus', handleWindowFocus);
    window.addEventListener('study_timer_updated', handleTimerEvent);
    return () => {
      window.removeEventListener('storage', handleStorageUpdate);
      window.removeEventListener('focus', handleWindowFocus);
      window.removeEventListener('study_timer_updated', handleTimerEvent);
    };
  }, [activeStudent?.roll]);

  // ── Handle Student Login ──
  const handleLogin = (e) => {
    e.preventDefault();
    if (!loginRoll.trim()) {
      toast.error('Kripya apna Username (Phone Number ya Roll Number) daalein!');
      return;
    }
    if (!loginPassword.trim()) {
      toast.error('Kripya apna Password daalein!');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      const result = verifyStudentLogin(loginRoll.trim(), loginPassword.trim());

      if (result.success) {
        setLoggedInStudent(result.student);
        toast.success(`Welcome ${result.student.name}! Dashboard khul gaya.`);
      } else {
        toast.error(result.message || 'Login failed!');
      }
      setIsSubmitting(false);
    }, 400);
  };

  // ── Handle Mentor Login ──
  const handleMentorLogin = (e) => {
    e.preventDefault();
    if (!mentorEmail.trim()) {
      toast.error('Kripya Mentor Email ya Name daalein!');
      return;
    }
    if (!mentorPassword.trim()) {
      toast.error('Kripya Mentor Password daalein!');
      return;
    }

    setIsMentorSubmitting(true);
    setTimeout(() => {
      const result = verifyMentorLogin(mentorEmail.trim(), mentorPassword.trim());

      if (result.success) {
        setActiveMentor(result.mentor);
        localStorage.setItem('beu_mentorship_active_mentor_id', result.mentor.id || result.mentor.email);
        toast.success(`Welcome Mentor ${result.mentor.name}! Aapke mentees ka portal load ho gaya.`);
      } else {
        toast.error(result.message || 'Mentor Login fail ho gaya!');
      }
      setIsMentorSubmitting(false);
    }, 400);
  };

  const handleLogout = () => {
    localStorage.removeItem('beu_mentorship_active_roll');
    localStorage.removeItem('beu_mentorship_active_student_name');
    localStorage.removeItem('beu_mentorship_active_mentor_name');
    setActiveStudent(null);
    setLoginRoll('');
    setLoginPassword('');
    toast('Logged out successfully.', { icon: '👋' });
  };

  const handleMentorLogout = () => {
    localStorage.removeItem('beu_mentorship_active_mentor_id');
    setActiveMentor(null);
    setMentorEmail('');
    setMentorPassword('');
    setMentorMeetInput('');
    toast('Mentor Portal se logged out.', { icon: '👋' });
  };

  // Dynamically update or remove Google Meet link by mentor
  const handleUpdateMentorMeetLink = (newLink) => {
    const link = (newLink || '').trim();
    const updatedMentor = { ...activeMentor, meetLink: link };
    setActiveMentor(updatedMentor);

    const mentors = getMentorsList();
    const updatedMentors = mentors.map(m => m.id === activeMentor.id ? { ...m, meetLink: link } : m);
    saveMentorsList(updatedMentors);

    if (link) {
      toast.success('Google Meet link successfully set ho gaya! Ab sabhi students ko Live Meeting button dikhega. 🔴');
    } else {
      toast.success('Google Meet link successfully hata diya gaya! Meeting ended. ✅');
    }
  };

  const handleAddStudyLog = (e) => {
    e.preventDefault();
    if (!subjectName.trim() || !topicCovered.trim()) {
      toast.error('Subject aur Topic ka naam likhein!');
      return;
    }

    const newLog = {
      id: Date.now(),
      date: 'Today · ' + new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }),
      subject: subjectName.trim(),
      topic: topicCovered.trim(),
      hours: studyHours,
      status: studyStatus
    };

    const updated = [newLog, ...studyLogs];
    setStudyLogs(updated);
    if (activeStudent?.roll) {
      localStorage.setItem(`beu_study_logs_${activeStudent.roll}`, JSON.stringify(updated));
    }
    setSubjectName('');
    setTopicCovered('');
    toast.success('Study Log add ho gaya! Badhiya progress 🔥');
  };

  const handleSaveTimerSession = () => {
    if (timerSeconds < 10 && !topicCovered.trim()) {
      toast.error('Kam se kam topic ka naam likhein ya 10 seconds timer chalne dein!');
      return;
    }
    const computedHours = timerSeconds >= 60 ? (timerSeconds / 3600).toFixed(2) : (parseFloat(studyHours) || 0.5).toString();
    const finalSubject = subjectName.trim() || 'Engineering Mathematics-I';
    const finalTopic = topicCovered.trim() || 'Core Concept Revision & Practice';

    const newLog = {
      id: Date.now(),
      date: 'Today · ' + new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }),
      subject: finalSubject,
      topic: finalTopic,
      hours: computedHours < 0.1 ? '0.2' : computedHours,
      status: studyStatus,
      durationText: timerSeconds > 0 ? `${Math.ceil(timerSeconds / 60)} mins (Timer Tracked)` : `${studyHours} hrs (Manual)`
    };

    const updated = [newLog, ...studyLogs];
    setStudyLogs(updated);
    if (activeStudent?.roll) {
      localStorage.setItem(`beu_study_logs_${activeStudent.roll}`, JSON.stringify(updated));
    }
    try {
      const registry = JSON.parse(localStorage.getItem('beu_all_study_logs_registry') || '{}');
      registry[activeStudent?.roll || 'default'] = updated;
      localStorage.setItem('beu_all_study_logs_registry', JSON.stringify(registry));
    } catch(e) {}

    setIsTimerRunning(false);
    setTimerSeconds(0);
    setTopicCovered('');
    toast.success('🎉 Study Timer Session Saved! Mentor Portal me live sync ho gaya.');
  };

  const getStudentLogs = (roll) => {
    try {
      const saved = localStorage.getItem(`beu_study_logs_${roll}`);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) return parsed.filter(item => !isMockStudyLog(item));
      }
      const registry = JSON.parse(localStorage.getItem('beu_all_study_logs_registry') || '{}');
      if (registry[roll] && Array.isArray(registry[roll])) {
        return registry[roll].filter(item => !isMockStudyLog(item));
      }
    } catch (e) {}
    return [];
  };

  const handleDeleteLog = (id) => {
    const updated = studyLogs.filter(item => item.id !== id);
    setStudyLogs(updated);
    if (activeStudent?.roll) {
      localStorage.setItem(`beu_study_logs_${activeStudent.roll}`, JSON.stringify(updated));
    }
    toast.success('Log remove ho gaya.');
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  const handleDoubtSubmit = (e) => {
    e.preventDefault();
    if (!doubtText.trim()) {
      toast.error('Apna sawal likhein!');
      return;
    }
    setDoubtSubmitted(true);
    toast.success('Aapka doubt mentor ko bhej diya gaya hai! Mentor jald hi reply karenge.');
  };

  // StudyContext Integration for Live Timer Tracking
  const studyCtx = useStudy();
  const todayStr = new Date().toLocaleDateString('en-CA');
  const isLiveTimerRunning = Boolean(studyCtx?.timerActive) || (typeof window !== 'undefined' && localStorage.getItem('timerActive') === 'true');

  // Compute real-time live active seconds from running timer session
  const getLiveActiveSecs = useCallback(() => {
    if (studyCtx?.timerActive) {
      if (studyCtx.timerMode === 'COUNTDOWN') {
        const total = (studyCtx.customHours || 0) * 3600 + (studyCtx.customMinutes || 0) * 60 + (studyCtx.customSeconds || 0);
        return Math.max(0, total - (studyCtx.timerTime || 0));
      }
      return studyCtx.timerTime || 0;
    }
    // Fallback: If timer started in another tab or background
    if (typeof window !== 'undefined') {
      const startedAt = localStorage.getItem('study_timer_started_at');
      if (startedAt && localStorage.getItem('timerActive') === 'true') {
        const elapsed = Math.floor((Date.now() - parseInt(startedAt, 10)) / 1000);
        if (!isNaN(elapsed) && elapsed > 0) return elapsed;
      }
    }
    return 0;
  }, [studyCtx]);

  // Interval ticker when timer is running so seconds and minutes update live
  useEffect(() => {
    let interval = null;
    if (isLiveTimerRunning) {
      interval = setInterval(() => {
        setTimerTick(t => t + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isLiveTimerRunning]);

  // Format seconds into clean, readable display (e.g., '1h 30m', '45m', '0m')
  const formatStudyDuration = (totalSecs) => {
    if (!totalSecs || totalSecs <= 0) return '0 min';
    const h = Math.floor(totalSecs / 3600);
    const m = Math.floor((totalSecs % 3600) / 60);
    const s = totalSecs % 60;
    if (h > 0 && m > 0) return `${h} hr ${m} min`;
    if (h > 0 && m === 0) return `${h} hr`;
    if (m > 0) return `${m} min`;
    return `${s} sec`;
  };

  // Compute today's total study seconds across all completed logs + live running timer
  const { todayStudySeconds, todayLogsCount, totalStudyHours } = useMemo(() => {
    const roll = activeStudent?.roll;
    let completedSecsFromLogs = 0;
    let todayCount = 0;

    studyLogs.forEach(log => {
      const isToday = 
        log.today === true || 
        log.dateStr === todayStr || 
        (typeof log.date === 'string' && (
          log.date.toLowerCase().includes('today') || 
          log.date.toLowerCase().includes('aaj') || 
          log.date.includes(todayStr)
        )) ||
        (log.createdAt && typeof log.createdAt === 'string' && log.createdAt.startsWith(todayStr));
      
      if (isToday) {
        todayCount++;
        if (typeof log.duration === 'number' && log.duration > 0) {
          completedSecsFromLogs += log.duration;
        } else {
          completedSecsFromLogs += Math.round((parseFloat(log.hours) || 0) * 3600);
        }
      }
    });

    let dedicatedTodaySecs = 0;
    try {
      if (roll) {
        const key = `beu_today_study_${roll}_${todayStr}`;
        const val = localStorage.getItem(key);
        if (val) dedicatedTodaySecs = Math.max(dedicatedTodaySecs, parseInt(val, 10) || 0);
      }
      const genKey = `beu_today_study_seconds_${todayStr}`;
      const genVal = localStorage.getItem(genKey);
      if (genVal) dedicatedTodaySecs = Math.max(dedicatedTodaySecs, parseInt(genVal, 10) || 0);
    } catch(e) {}

    const baseTodaySecs = Math.max(completedSecsFromLogs, dedicatedTodaySecs);
    const liveSecs = getLiveActiveSecs();
    const finalTodaySecs = baseTodaySecs + liveSecs;

    const allTimeCompletedSecs = studyLogs.reduce((acc, curr) => {
      if (typeof curr.duration === 'number' && curr.duration > 0) return acc + curr.duration;
      return acc + Math.round((parseFloat(curr.hours) || 0) * 3600);
    }, 0);
    const finalAllTimeHrs = (allTimeCompletedSecs + liveSecs) / 3600;

    return {
      todayStudySeconds: finalTodaySecs,
      todayLogsCount: todayCount + (isLiveTimerRunning ? 1 : 0),
      totalStudyHours: finalAllTimeHrs
    };
  }, [studyLogs, activeStudent?.roll, todayStr, timerTick, isLiveTimerRunning, getLiveActiveSecs]);

  const completedTasksCount = tasks.filter(t => t.done).length;

  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-24 px-3 sm:px-6 animate-in fade-in duration-300">
      <SEO 
        title="Free BEU Mentorship Login & Study Tracker | Apna College Bihar" 
        description="Login with your Roll Number & Password to access your assigned BEU senior mentor, study tracker, and 1-on-1 guidance sessions." 
      />

      {/* ── Top Hero Header ── */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 rounded-[2.5rem] p-6 sm:p-10 border border-blue-800/30 shadow-2xl text-white">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-black tracking-widest uppercase shadow-sm">
            <Sparkles size={14} className="text-yellow-400 animate-pulse" /> 100% Free BEU Mentorship
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            BEU Mentorship & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-sky-300">
              Student Study Portal
            </span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
            Bihar Engineering University ke har student ke liye dedicated senior mentor aur personalized study tracker. 
            Apna <strong>Roll Number</strong> aur <strong>Password</strong> daal kar login karein.
          </p>

          <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-slate-300">
            <span className="flex items-center gap-1.5"><ShieldCheck size={16} className="text-emerald-400" /> {enrolledList.length}+ Enrolled Students</span>
            <span className="flex items-center gap-1.5"><KeyRound size={16} className="text-blue-400" /> Password Protected Login</span>
            <span className="flex items-center gap-1.5"><Flame size={16} className="text-amber-400" /> Kya Padha Daily Tracker</span>
          </div>
        </div>
      </div>

      {/* ── NOT LOGGED IN: Auth Screen (Student Login vs Mentor Login) ── */}
      {!activeStudent && !activeMentor ? (
        <div className="space-y-12">
          <div className="bg-white rounded-[2rem] border border-slate-200 shadow-xl p-6 sm:p-10 space-y-6 max-w-2xl mx-auto">
          
          {/* Tabs: Student Login vs Mentor Login */}
          <div className="flex bg-slate-100 p-1.5 rounded-2xl border border-slate-200">
            <button
              onClick={() => setActiveTab('student')}
              className={`flex-1 py-3 rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                activeTab === 'student' ? 'bg-white text-blue-600 shadow-md' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <LogIn size={16} /> Student Login
            </button>
            <button
              onClick={() => setActiveTab('mentor')}
              className={`flex-1 py-3 rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                activeTab === 'mentor' ? 'bg-white text-indigo-600 shadow-md' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <GraduationCap size={16} /> Mentor Login
            </button>
          </div>

          {/* ── TAB 1: STUDENT LOGIN FORM ── */}
          {activeTab === 'student' ? (
            <div className="space-y-6">
              <div className="text-center space-y-1">
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">Student Mentorship Login</h2>
                <p className="text-xs text-slate-500 font-medium">
                  Apna Phone Number (Username) ya Roll Number aur Password daal kar login karein.
                </p>
              </div>

              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-[11px] font-black uppercase text-slate-600 mb-1 flex items-center justify-between">
                    <span>Username (Phone Number / BEU Roll No.)</span>
                    <span className="text-[10px] text-blue-600 font-bold normal-case">Phone ya Roll daalein</span>
                  </label>
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Apna WhatsApp Phone Number ya BEU Roll No. daalein..."
                      value={loginRoll}
                      onChange={(e) => setLoginRoll(e.target.value)}
                      className="w-full pl-4 pr-10 py-3.5 bg-slate-50 border-2 border-slate-200 rounded-xl text-slate-900 font-bold tracking-wider placeholder:font-normal placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-all text-sm"
                      required
                    />
                    <Target size={18} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-black uppercase text-slate-600 mb-1">
                    Password
                  </label>
                  <div className="relative">
                    <input 
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Apna password daalein"
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      className="w-full pl-4 pr-12 py-3.5 bg-slate-50 border-2 border-slate-200 rounded-xl text-slate-900 font-bold tracking-wider placeholder:font-normal placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-all text-sm"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-blue-600 hover:bg-blue-700 active:scale-[0.99] text-white rounded-2xl font-black text-sm uppercase tracking-wider transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw size={18} className="animate-spin" /> Verifying...
                    </>
                  ) : (
                    <>
                      Login to Student Dashboard <ArrowRight size={18} />
                    </>
                  )}
                </button>
              </form>
            </div>
          ) : (
            /* ── TAB 2: MENTOR LOGIN FORM ── */
            <div className="space-y-6">
              <div className="text-center space-y-1">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto border border-indigo-100 shadow-sm">
                  <GraduationCap size={26} />
                </div>
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">Mentor Portal Login</h2>
                <p className="text-xs text-slate-500 font-medium">
                  BEU Senior Mentors yahan login karke apne sabhi students aur unke <strong>"Kya Padha" study tracker</strong> aur <strong>timer records</strong> access karein.
                </p>
              </div>

              <form onSubmit={handleMentorLogin} className="space-y-4">
                <div>
                  <label className="block text-[11px] font-black uppercase text-slate-600 mb-1">
                    Phone Number (Username) / Email
                  </label>
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Phone Number ya Email (jaise admin ne diya)"
                      value={mentorEmail}
                      onChange={(e) => setMentorEmail(e.target.value)}
                      className="w-full pl-4 pr-10 py-3.5 bg-slate-50 border-2 border-slate-200 rounded-xl text-slate-900 font-bold tracking-wider placeholder:font-normal placeholder:text-slate-400 focus:outline-none focus:border-indigo-600 focus:bg-white transition-all text-sm"
                      required
                    />
                    <Phone size={18} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-black uppercase text-slate-600 mb-1">
                    Mentor Password
                  </label>
                  <div className="relative">
                    <input 
                      type={showMentorPassword ? 'text' : 'password'}
                      placeholder="Mentor account password"
                      value={mentorPassword}
                      onChange={(e) => setMentorPassword(e.target.value)}
                      className="w-full pl-4 pr-12 py-3.5 bg-slate-50 border-2 border-slate-200 rounded-xl text-slate-900 font-bold tracking-wider placeholder:font-normal placeholder:text-slate-400 focus:outline-none focus:border-indigo-600 focus:bg-white transition-all text-sm"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowMentorPassword(!showMentorPassword)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    >
                      {showMentorPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                <button 
                  type="submit"
                  disabled={isMentorSubmitting}
                  className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 active:scale-[0.99] text-white rounded-2xl font-black text-sm uppercase tracking-wider transition-all shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2"
                >
                  {isMentorSubmitting ? (
                    <>
                      <RefreshCw size={18} className="animate-spin" /> Verifying Mentor...
                    </>
                  ) : (
                    <>
                      Login to Mentor Portal <ArrowRight size={18} />
                    </>
                  )}
                </button>
              </form>
            </div>
          )}

        </div>

        {/* ── 1000+ WORD COMPREHENSIVE BEU MENTORSHIP GUIDE & AD-SENSE HIGH VALUE CONTENT ── */}
        <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm p-6 sm:p-12 space-y-12 text-slate-800">
          
          {/* Main Title & Overview */}
          <div className="border-b border-slate-100 pb-8 space-y-3">
            <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-black uppercase tracking-widest rounded-full inline-block">
              Free Academic Initiative
            </span>
            <h2 className="text-2xl sm:text-4xl font-[1000] text-slate-900 tracking-tight uppercase leading-tight">
              The Comprehensive Guide to Free BEU Mentorship: Navigating Engineering Excellence in Bihar
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Empowering 38+ Government Engineering Colleges across Bihar with structured peer guidance, verified semester exam strategies, daily study accountability, and industry placement roadmaps.
            </p>
          </div>

          {/* Section 1: The Transition Challenge */}
          <section className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
              <span>1. The Transition Challenge: Why Bihar Engineering Scholars Need Peer Mentorship</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
              Every academic year, thousands of brilliant, ambitious students from across Bihar’s 38 districts secure admission into Government Engineering Colleges (GECs) through the BCECEB UGEAC counseling process. While clearing the entrance hurdle reflects tremendous mathematical grit and perseverance, stepping into the university lecture halls of Bihar Engineering University (BEU), Patna, introduces a unique set of academic and psychological friction points.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
              For a significant majority of scholars graduating from Bihar State Board (BSEB) or regional vernacular schooling, the abrupt shift to an entirely English-medium technical curriculum can feel intimidating. Fundamental subjects like Engineering Mathematics, Applied Physics, Basic Electrical Engineering, and Engineering Mechanics demand not just conceptual mastery, but precise analytical formulation and technical articulation. Without timely, empathetic guidance from senior students who have successfully traversed the exact same journey, first-year scholars frequently develop exam anxiety, fall prey to backlog cycles, or lose focus during crucial foundational semesters.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
              The <strong>Apna College Bihar (ACB) Free Mentorship Program</strong> was conceived to eradicate this isolation. By bridging the generational gap between senior university scholars (3rd and 4th year achievers) and incoming juniors, our platform establishes a supportive, democratized ecosystem where every student receives personalized academic direction, psychological reassurance, and actionable roadmaps completely free of charge.
            </p>
          </section>

          {/* Section 2: Core Pillars */}
          <section className="space-y-6">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              2. Core Pillars of the ACB Free Mentorship Framework
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-3">
                <div className="w-10 h-10 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center font-black text-base">
                  01
                </div>
                <h4 className="text-base font-black text-slate-900 uppercase tracking-tight">1-on-1 Personalized Senior Matching</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Unlike generic advisory forums, our algorithm pairs each enrolled student with a verified senior mentor from their specific branch (CSE, Civil, Mechanical, EEE, ECE) or alumni network. This guarantees that subject-specific nuances—such as lab manual drafting, university numerical derivations, and faculty evaluation preferences—are addressed with pinpoint contextual accuracy.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-3">
                <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-black text-base">
                  02
                </div>
                <h4 className="text-base font-black text-slate-900 uppercase tracking-tight">The "Kya Padha, Kitna Padha" Daily Accountability Habit</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Consistency is the ultimate differentiator in university examinations. The integrated study log tracker encourages students to record their daily topics, chapter revisions, and Pomodoro focus sessions. Mentors actively monitor these logs, praising productive study streaks and intervening when inactivity signals potential study bottlenecks before mid-semester exams arrive.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-3">
                <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center font-black text-base">
                  03
                </div>
                <h4 className="text-base font-black text-slate-900 uppercase tracking-tight">BEU PYQ & Derivation Mastery</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  University exams conducted by BEU place heavy emphasis on theoretical derivations, standard proofs, and recurring problem archetypes spanning the last 5 to 7 years. Mentors provide students with curated Previous Year Question (PYQ) breakdowns, highlighting high-yield units and training them to produce presentation-perfect answer sheets with clean pencil schematics and boxed numerical answers.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-3">
                <div className="w-10 h-10 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center font-black text-base">
                  04
                </div>
                <h4 className="text-base font-black text-slate-900 uppercase tracking-tight">Career, Internship & Placement Guidance</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Beyond semester grades, students receive strategic clarity regarding internships, Smart India Hackathon (SIH) participations, GATE preparation timelines, State Engineering Service (BPSC AE) foundations, and software engineering hiring tracks. Mentors review GitHub profiles, suggest curated YouTube lecture playlists, and conduct mock technical interview drills.
                </p>
              </div>

            </div>
          </section>

          {/* Section 3: Branch-Specific 4-Year Progression Blueprints */}
          <section className="space-y-6">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              3. Branch-Specific 4-Year Academic & Skill Progression Blueprint
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
              Every engineering specialization demands a distinct balance between university curriculum adherence and external industry skill acquisition. Here is the structured roadmap recommended by our senior mentors:
            </p>

            <div className="space-y-4">
              <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-2">
                <h4 className="text-sm font-black text-blue-900 flex items-center gap-2">
                  <span>💻 Computer Science & IT (CSE, AI/ML, Data Science, Cyber Security)</span>
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  <strong>Year 1:</strong> Master C Programming fundamentals and discrete mathematics; maintain SGPA &gt; 8.5. <strong>Year 2:</strong> Data Structures &amp; Algorithms (Java or C++), Object-Oriented Design, Database Management Systems (SQL), and Version Control (Git/GitHub). <strong>Year 3:</strong> Operating Systems, Computer Networks, full-stack web or ML project development, open-source contributions, and internship hunting. <strong>Year 4:</strong> Advanced LeetCode problem solving, system design fundamentals, resume tailoring, and off-campus/on-campus placement drives.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-2">
                <h4 className="text-sm font-black text-emerald-900 flex items-center gap-2">
                  <span>🏗️ Civil Engineering (CE)</span>
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  <strong>Year 1 &amp; 2:</strong> Develop deep mastery in Strength of Materials (SOM), Fluid Mechanics, Surveying, and Building Materials. <strong>Year 3:</strong> Structural Analysis, Design of Concrete Structures (RCC), Soil Mechanics, and software proficiency in AutoCAD, STAAD Pro, or Revit. <strong>Year 4:</strong> Intensive preparation for GATE Civil, BPSC AE, and SSC JE examinations, alongside site engineering internship experience.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-2">
                <h4 className="text-sm font-black text-amber-900 flex items-center gap-2">
                  <span>⚙️ Mechanical Engineering (ME)</span>
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  <strong>Year 1 &amp; 2:</strong> Solidify core concepts in Engineering Thermodynamics, Kinematics of Machines, and Manufacturing Processes. <strong>Year 3:</strong> Heat Transfer, Fluid Machines, Machine Design, and 3D CAD modeling (SolidWorks/CATIA). <strong>Year 4:</strong> Thermal &amp; design project implementation, industrial plant training reports, and PSU/GATE competitive exam test series.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-2">
                <h4 className="text-sm font-black text-indigo-900 flex items-center gap-2">
                  <span>⚡ Electrical & Electronics Engineering (EEE / EE / ECE)</span>
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  <strong>Year 1 &amp; 2:</strong> Circuit &amp; Network Theory, Analog Electronics, Electromagnetic Fields, and Digital Logic. <strong>Year 3:</strong> Control Systems, Electrical Machines, Microprocessors, Power Systems, and MATLAB/Simulink simulations. <strong>Year 4:</strong> Renewable energy capstone projects, Embedded C or VLSI fundamentals, and core electrical/electronics placement preparation.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: Tips for 9+ CGPA in BEU */}
          <section className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              4. The Blueprint to Securing an 8.5+ or 9.0+ CGPA in BEU Semester Examinations
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
              Scoring high marks in Bihar Engineering University is not about rote memorization; it is about strategic presentation and syllabus alignment. Senior mentors highlight five proven rules:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-slate-600 font-medium">
              <li><strong>Prioritize High-Weightage Syllabus Units:</strong> BEU question papers offer internal choices. Identify the 3 core units per subject that reliably generate full 14-mark questions and master their derivations completely.</li>
              <li><strong>Incorporate Structured Schematics &amp; Flowcharts:</strong> Examiners evaluate hundreds of answer booklets. Neatly labeled pencil diagrams, circuit layouts, and algorithmic flowcharts immediately elevate your paper above average submissions.</li>
              <li><strong>Formula Box Highlighting:</strong> Conclude every mathematical derivation by boxing the final formula with standard units and clear parameter definitions. This signals rigor and thorough understanding.</li>
              <li><strong>Internal Sessional &amp; Attendance Regularity:</strong> Maintain 75%+ lecture attendance and submit laboratory records on time. Internal 30 marks heavily stabilize your semester SGPA and shield against unexpected theory scaling.</li>
              <li><strong>Systematic PYQ Rehearsal:</strong> Solve at least five recent end-semester papers under timed 3-hour examination conditions to build writing stamina and prevent time crunches during final exams.</li>
            </ul>
          </section>

          {/* Section 5: Frequently Asked Questions (FAQs) */}
          <section className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              5. Frequently Asked Questions (FAQs)
            </h3>
            
            <div className="space-y-3">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <h5 className="text-xs sm:text-sm font-black text-slate-900 mb-1">Q1: Is the BEU Mentorship Program really 100% free?</h5>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Yes, absolutely. Apna College Bihar is an independent community initiative created by students and alumni. There are no fees, hidden subscriptions, or premium tiers for mentorship, doubt clearing, or tracker access.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <h5 className="text-xs sm:text-sm font-black text-slate-900 mb-1">Q2: How do I get my login username and password?</h5>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Enrolled students receive their credentials directly via official WhatsApp communications from our administrator desk. Your username is typically your registered WhatsApp Phone Number or University Roll Number, accompanied by your secure access password.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <h5 className="text-xs sm:text-sm font-black text-slate-900 mb-1">Q3: How are mentors selected and assigned?</h5>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Our mentors are verified 3rd-year, 4th-year scholars and alumni across Bihar Government Engineering Colleges with exceptional academic records (8.5+ CGPA) and proven track records in technical projects, hackathons, or competitive examinations.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <h5 className="text-xs sm:text-sm font-black text-slate-900 mb-1">Q4: Can I book live 1-on-1 video calls with my mentor?</h5>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Yes! Once logged into your student dashboard, you can request 1-on-1 Google Meet sessions, submit specific academic doubts via the Doubt Box, or connect directly through official WhatsApp channels for swift feedback.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6: Institutional Note */}
          <div className="pt-6 border-t border-slate-100 text-center space-y-2">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
              Apna College Bihar • Dedicated to Bihar Engineering Scholars
            </p>
            <p className="text-xs text-slate-500 font-medium max-w-xl mx-auto">
              Notice: Apna College Bihar is a non-governmental, independent peer-learning platform. All educational syllabi and university details are referenced from public educational gazettes for academic welfare.
            </p>
          </div>

        </div>
      </div>
      ) : activeMentor ? (
        /* ── LOGGED IN: MENTOR PORTAL DASHBOARD (Access to all students & their Study Trackers) ── */
        <div className="space-y-8 animate-in fade-in duration-300">
          
          {/* Mentor Profile Header Bar */}
          <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-950 rounded-3xl p-6 sm:p-8 text-white shadow-xl border border-indigo-800/40 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="relative shrink-0">
                {activeMentor.avatar && !activeMentor.avatar.includes('unsplash') ? (
                  <img 
                    src={activeMentor.avatar} 
                    alt={activeMentor.name} 
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border-2 border-indigo-400 shadow-xl"
                  />
                ) : (
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-indigo-500 via-blue-600 to-indigo-700 border-2 border-indigo-400 shadow-xl flex items-center justify-center text-white font-[1000] text-2xl sm:text-3xl tracking-wider uppercase">
                    {activeMentor.name.split(' ').map(n => n[0]).slice(0, 2).join('') || 'BM'}
                  </div>
                )}
                <span className="absolute -bottom-1 -right-1 bg-emerald-500 text-white p-1 rounded-full ring-2 ring-slate-900">
                  <ShieldCheck size={14} />
                </span>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white">
                    {activeMentor.name}
                  </h2>
                  <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-400/30 text-[10px] font-black uppercase tracking-wider">
                    👨‍🏫 Mentor Portal Active
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-indigo-200 font-bold">
                  {activeMentor.role || 'Senior BEU Academic Mentor'} · {activeMentor.college || 'Bihar Engineering University'}
                </p>
                {activeMentor.workedOn && (
                  <p className="text-xs text-indigo-200 flex items-center gap-2 flex-wrap pt-0.5 font-medium">
                    <span className="text-slate-300 text-[11px]">🛠️ Project/Work: {activeMentor.workedOn}</span>
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              {/* Google Meet Link Control */}
              {activeMentor.meetLink ? (
                <div className="flex items-center gap-2 bg-rose-600/20 border border-rose-500/30 rounded-xl px-3 py-2">
                  <span className="flex items-center gap-1.5 text-[11px] font-black text-rose-300">
                    <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping shrink-0" />
                    Live Meet On
                  </span>
                  <a
                    href={activeMentor.meetLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[10px] text-white bg-rose-600 hover:bg-rose-700 px-2 py-0.5 rounded font-bold flex items-center gap-1 transition-colors"
                  >
                    <ExternalLink size={10} /> Open
                  </a>
                  <button
                    onClick={() => handleUpdateMentorMeetLink('')}
                    className="text-[10px] text-rose-300 hover:text-white px-2 py-0.5 rounded border border-rose-500/40 font-bold transition-colors"
                    title="Meeting band karo"
                  >
                    ✕ Hatao
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Google Meet link paste karein..."
                    value={mentorMeetInput}
                    onChange={(e) => setMentorMeetInput(e.target.value)}
                    className="px-3 py-2 bg-white/10 border border-white/20 rounded-xl text-[11px] text-white placeholder:text-slate-400 focus:outline-none focus:border-indigo-400 w-48"
                  />
                  <button
                    onClick={() => {
                      if (mentorMeetInput.trim()) {
                        handleUpdateMentorMeetLink(mentorMeetInput.trim());
                        setMentorMeetInput('');
                      }
                    }}
                    disabled={!mentorMeetInput.trim()}
                    className="px-3 py-2 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 text-white rounded-xl text-[11px] font-black transition-colors flex items-center gap-1"
                    title="Live Google Meet lagao"
                  >
                    <Video size={13} /> Live
                  </button>
                </div>
              )}
              <button
                onClick={handleMentorLogout}
                className="px-4 py-2.5 bg-rose-500/20 hover:bg-rose-500 text-rose-200 hover:text-white rounded-xl text-xs font-black uppercase tracking-wider transition-all border border-rose-400/30"
              >
                Logout Mentor Portal
              </button>
            </div>
          </div>

          {/* Mentee Portal: Show only students assigned to this mentor */}
          {(() => {
            const isDeepak = (activeMentor.name || '').toLowerCase().includes('deepak');
            const isSubhash = (activeMentor.name || '').toLowerCase().includes('subhash');

            const myMentees = mentorAssignmentFilter === 'all' 
              ? enrolledList 
              : enrolledList.filter(s => {
                  const sAssigned = (s.assignedMentorId || '').trim().toLowerCase();
                  if (sAssigned && sAssigned === (activeMentor.id || '').toLowerCase()) return true;
                  if (isDeepak && (sAssigned.includes('deepak') || sAssigned === 'mentor-cse-1789726326697')) return true;
                  if (isSubhash && (sAssigned.includes('subhash') || sAssigned === 'mentor-cse-1789731436566')) return true;
                  return false;
                });

            const assignedToMeCount = enrolledList.filter(s => {
              const sAssigned = (s.assignedMentorId || '').trim().toLowerCase();
              if (sAssigned && sAssigned === (activeMentor.id || '').toLowerCase()) return true;
              if (isDeepak && (sAssigned.includes('deepak') || sAssigned === 'mentor-cse-1789726326697')) return true;
              if (isSubhash && (sAssigned.includes('subhash') || sAssigned === 'mentor-cse-1789731436566')) return true;
              return false;
            }).length;

            const collegesCount = new Set(myMentees.map(s => s.college)).size;
            const filteredMentees = myMentees.filter(stu => {
              if (mentorSearchQuery.trim()) {
                const q = mentorSearchQuery.toLowerCase();
                const matches = (stu.name && stu.name.toLowerCase().includes(q)) ||
                                (stu.roll && stu.roll.toLowerCase().includes(q)) ||
                                (stu.college && stu.college.toLowerCase().includes(q)) ||
                                (stu.branch && stu.branch.toLowerCase().includes(q)) ||
                                (stu.whatsapp && stu.whatsapp.includes(q));
                if (!matches) return false;
              }
              return true;
            });

            return (
              <>
                {/* Quick Metrics Cards (Only for this mentor's assigned mentees) */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-1">
                    <div className="flex items-center justify-between text-slate-500">
                      <span className="text-[11px] font-bold uppercase tracking-wider">
                        {mentorAssignmentFilter === 'all' ? 'Sabhi Enrolled Mentees' : 'Aapke Assigned Mentees'}
                      </span>
                      <GraduationCap size={20} className="text-indigo-600" />
                    </div>
                    <div className="text-2xl font-black text-slate-900">
                      {myMentees.length} {myMentees.length === 1 ? 'Mentee' : 'Mentees'}
                    </div>
                    <p className="text-[10px] text-emerald-600 font-bold">1-on-1 Direct Guidance</p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-1">
                    <div className="flex items-center justify-between text-slate-500">
                      <span className="text-[11px] font-bold uppercase tracking-wider">BEU Colleges</span>
                      <BookOpen size={20} className="text-amber-600" />
                    </div>
                    <div className="text-2xl font-black text-slate-900">
                      {collegesCount} Colleges
                    </div>
                    <p className="text-[10px] text-slate-500 font-medium">Assigned Mentees Campus</p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-1">
                    <div className="flex items-center justify-between text-slate-500">
                      <span className="text-[11px] font-bold uppercase tracking-wider">Live Tracker Status</span>
                      <Flame size={20} className="text-orange-500 fill-orange-500" />
                    </div>
                    <div className="text-2xl font-black text-slate-900">Live Synced</div>
                    <p className="text-[10px] text-blue-600 font-bold">Study Timer & Topics</p>
                  </div>
                </div>

                {/* Toolbar */}
                <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <h3 className="text-lg font-black text-slate-900 tracking-tight flex items-center gap-2">
                        <Users size={20} className="text-indigo-600" />
                        Mentee Students ({myMentees.length})
                      </h3>
                      <p className="text-xs text-slate-500 font-medium">
                        Aapke assigned students ke study tracker records aur direct live chat guidance.
                      </p>
                    </div>

                    {/* Filter Tabs: Assigned to Me vs All Enrolled */}
                    <div className="flex items-center gap-1.5 p-1.5 bg-slate-100 rounded-2xl shrink-0 self-start sm:self-auto">
                      <button
                        type="button"
                        onClick={() => setMentorAssignmentFilter('assigned')}
                        className={`px-3.5 py-2 rounded-xl text-xs font-black transition-all ${
                          mentorAssignmentFilter === 'assigned'
                            ? 'bg-white text-indigo-700 shadow-sm'
                            : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        ⭐ Mere Assigned ({assignedToMeCount})
                      </button>
                      <button
                        type="button"
                        onClick={() => setMentorAssignmentFilter('all')}
                        className={`px-3.5 py-2 rounded-xl text-xs font-black transition-all ${
                          mentorAssignmentFilter === 'all'
                            ? 'bg-white text-indigo-700 shadow-sm'
                            : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        👥 Sabhi Mentees ({enrolledList.length})
                      </button>
                    </div>
                  </div>

                  {myMentees.length > 0 && (
                    <div className="relative flex-1">
                      <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input 
                        type="text"
                        placeholder="Mentee ka naam, roll number, college ya mobile se search karein..."
                        value={mentorSearchQuery}
                        onChange={(e) => setMentorSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-indigo-600"
                      />
                    </div>
                  )}
                </div>

                {/* Students Grid List */}
                {filteredMentees.length === 0 ? (
                  <div className="bg-white rounded-3xl border border-dashed border-slate-300 p-12 text-center space-y-3">
                    <div className="w-16 h-16 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-3xl mx-auto shadow-inner">
                      👨‍🏫
                    </div>
                    <h4 className="text-base font-black text-slate-900">
                      {myMentees.length === 0 ? 'Abhi Tak Koi Mentee Assign Nahi Hua Hai' : 'Koi student match nahi hua'}
                    </h4>
                    <p className="text-xs text-slate-500 max-w-md mx-auto font-medium">
                      {myMentees.length === 0 
                        ? 'Admin dwara aapko student assign kiye jane par unka complete profile aur "Kya Padha" study tracker yahan dikhega.'
                        : 'Search query badal kar dekhein.'}
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {filteredMentees.map(stu => {
                      // Read student's study logs
                      let logs = [];
                      try {
                        const saved = localStorage.getItem(`beu_study_logs_${stu.roll}`);
                        if (saved) {
                          const parsed = JSON.parse(saved);
                          if (Array.isArray(parsed)) logs = parsed.filter(item => !isMockStudyLog(item));
                        } else {
                          const registry = JSON.parse(localStorage.getItem('beu_all_study_logs_registry') || '{}');
                          if (registry[stu.roll] && Array.isArray(registry[stu.roll])) {
                            logs = registry[stu.roll].filter(item => !isMockStudyLog(item));
                          }
                        }
                      } catch(e) {}

                      const totalHrs = (logs || []).reduce((acc, curr) => acc + (parseFloat(curr.hours) || 0), 0);
                      const latestLog = logs && logs.length > 0 ? logs[0] : null;

                      return (
                        <div 
                          key={stu.id || stu.roll}
                          className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-md hover:border-indigo-300 transition-all p-5 space-y-4 flex flex-col justify-between"
                        >
                          <div className="space-y-3">
                            {/* Top student header */}
                            <div className="flex items-start justify-between gap-3">
                              <div className="flex items-center gap-3">
                                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-100 flex items-center justify-center text-xl shrink-0">
                                  {stu.branchCode === 'CSE' ? '💻' : stu.branchCode === 'ECE' ? '📡' : stu.branchCode === 'EEE' ? '🔋' : stu.branchCode === 'CE' ? '🏗️' : '⚙️'}
                                </div>
                                <div>
                                  <h4 className="text-sm font-black text-slate-900 leading-tight">
                                    {stu.name}
                                  </h4>
                                  <span className="font-mono text-[11px] font-bold text-blue-600">
                                    Roll: {stu.roll}
                                  </span>
                                </div>
                              </div>

                              <span className="px-2 py-0.5 rounded-full border text-[10px] font-black uppercase shrink-0 bg-emerald-50 text-emerald-700 border-emerald-200">
                                Assigned Mentee
                              </span>
                            </div>

                            {/* College & Branch */}
                            <div className="space-y-1 text-xs text-slate-600 border-t border-slate-100 pt-2.5">
                              <p className="font-bold text-slate-800 line-clamp-1">
                                🏛️ {stu.college}
                              </p>
                              <p className="text-[11px] text-slate-500 font-medium">
                                {stu.branch} ({stu.branchCode})
                              </p>
                            </div>

                            {/* Stated Goals */}
                            {(stu.goals || stu.mentorExpectations) && (
                              <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 space-y-1 text-[11px]">
                                <p className="font-bold text-slate-700 line-clamp-2">
                                  🎯 <strong>Goals:</strong> {stu.goals || 'Padhai me guidance'}
                                </p>
                                {stu.mentorExpectations && (
                                  <p className="text-slate-500 line-clamp-1 font-medium italic">
                                    💡 "{stu.mentorExpectations}"
                                  </p>
                                )}
                              </div>
                            )}

                            {/* Live Study Tracker & Timer Box */}
                            <div className="p-3 bg-gradient-to-br from-blue-50/70 to-indigo-50/70 rounded-2xl border border-blue-100 space-y-2">
                              <div className="flex items-center justify-between text-[11px]">
                                <span className="font-bold text-blue-900 flex items-center gap-1">
                                  <Flame size={14} className={totalHrs > 0 ? "text-amber-500 fill-amber-500" : "text-slate-400"} /> Study Tracker:
                                </span>
                                <span className={`font-black px-2 py-0.5 rounded-md border text-[11px] ${totalHrs > 0 ? 'text-indigo-700 bg-white border-blue-200' : 'text-slate-500 bg-slate-100 border-slate-200'}`}>
                                  {totalHrs > 0 ? `${totalHrs.toFixed(1)} hrs Logged` : '0 hrs Logged'}
                                </span>
                              </div>
                              {latestLog ? (
                                <div className="text-[11px] space-y-0.5 text-slate-700">
                                  <p className="font-bold text-slate-900 line-clamp-1">
                                    📖 Latest: {latestLog.subject}
                                  </p>
                                  <p className="text-slate-500 text-[10px] line-clamp-1">
                                    "{latestLog.topic}" ({latestLog.status})
                                  </p>
                                </div>
                              ) : (
                                <p className="text-[11px] text-slate-400 italic">
                                  Abhi koi study session log nahi hua hai
                                </p>
                              )}
                            </div>
                          </div>

                          {/* Action Buttons: Live Chat, Kya Padha Log & WhatsApp */}
                          <div className="space-y-2 pt-2 border-t border-slate-100">
                            <button
                              onClick={() => setActiveChatMentee(stu)}
                              className="w-full py-2.5 px-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md shadow-blue-500/20 active:scale-[0.98]"
                            >
                              <MessageCircle size={15} /> 💬 Live Chat With Mentee
                            </button>

                            <button
                              onClick={() => setSelectedMenteeLogs({ ...stu, logs })}
                              className="w-full py-2 px-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 active:scale-[0.98]"
                            >
                              <TrendingUp size={14} /> Kya Padha & Study Timer Logs
                            </button>

                            <a 
                              href={`https://wa.me/91${stu.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Namaste ${stu.name}! Main ${activeMentor.name} bol raha hoon (Aapka BEU Senior Mentor). Padhai aur semester guidance ke baare me baat karte hain.`)}`}
                              target="_blank"
                              rel="noreferrer"
                              className="w-full py-2 px-3 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 border border-emerald-200"
                            >
                              <MessageCircle size={15} /> WhatsApp Pe Guidance Dein
                            </a>
                          </div>

                        </div>
                      );
                    })}
                  </div>
                )}
              </>
            );
          })()}

        </div>
      ) : (
        /* ── LOGGED IN: Active Student Mentorship Dashboard ── */
        <div className="space-y-8">
          
          {/* 1. Student Identity Header Bar */}
          <div className="bg-white rounded-3xl border border-slate-200 p-5 sm:p-6 shadow-sm flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center font-black text-2xl shadow-lg shadow-blue-500/20">
                {activeStudent.branchIcon || '🎓'}
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h2 className="text-xl font-black text-slate-900">
                    {activeStudent.name}
                  </h2>
                  <span className="text-[10px] font-black uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1">
                    <CheckCircle2 size={12} /> Logged In
                  </span>
                </div>
                <p className="text-xs font-bold text-blue-600 mt-0.5">
                  Roll: <span className="font-black text-slate-800">{activeStudent.roll}</span> · {activeStudent.branch} ({activeStudent.yearText || '1st Year'})
                </p>
                <p className="text-[11px] text-slate-500 font-medium">
                  {activeStudent.college}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button 
                onClick={handleLogout}
                className="px-4 py-2.5 bg-rose-50 hover:bg-rose-100 text-rose-700 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 border border-rose-200"
              >
                Logout Account
              </button>
            </div>
          </div>

          {/* Student's Stated Goals & Expectations */}
          {(activeStudent.goals || activeStudent.mentorExpectations) && (
            <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-sky-50 border border-blue-200/80 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
              <div className="space-y-1">
                <span className="text-[10px] font-black uppercase tracking-widest text-blue-700 bg-white px-2 py-0.5 rounded-md border border-blue-200">
                  🎯 Aapke Registered Goals:
                </span>
                <p className="text-xs font-bold text-slate-800">
                  {activeStudent.goals}
                </p>
                {activeStudent.mentorExpectations && (
                  <p className="text-xs text-slate-600 font-medium">
                    <strong className="text-slate-700">Expectations from Mentor:</strong> "{activeStudent.mentorExpectations}"
                  </p>
                )}
              </div>
              <div className="text-right shrink-0">
                <span className="text-[11px] font-black text-indigo-700 bg-white px-3 py-1.5 rounded-xl border border-indigo-200 shadow-sm block">
                  Coding: {activeStudent.codingExperience?.includes('beginner') ? '🌱 Beginner' : '💻 Basic Knowledge'}
                </span>
              </div>
            </div>
          )}

          {/* 2. Top Grid: Assigned Mentor Card or Pending Assignment Notice */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* ── Mentor Profile Card (2 cols) ── */}
            {activeStudent.mentor ? (
              <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-200 shadow-md p-6 sm:p-8 space-y-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-gradient-to-l from-emerald-500 to-teal-500 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-bl-2xl shadow-sm flex items-center gap-1">
                  <CheckCircle2 size={12} /> Assigned Senior Mentor
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pt-2">
                  <div className="relative shrink-0">
                    {activeStudent.mentor.avatar && !activeStudent.mentor.avatar.includes('unsplash') ? (
                      <img 
                        src={activeStudent.mentor.avatar} 
                        alt={activeStudent.mentor.name} 
                        className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border-2 border-blue-500 shadow-lg"
                      />
                    ) : (
                      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white font-[1000] text-2xl sm:text-3xl flex items-center justify-center border-2 border-blue-400 shadow-lg shrink-0 uppercase">
                        {activeStudent.mentor.name.split(' ').map(w => w[0]).join('').slice(0, 2) || 'BM'}
                      </div>
                    )}
                    <span className="absolute -bottom-1 -right-1 bg-emerald-500 text-white p-1 rounded-full ring-2 ring-white">
                      <ShieldCheck size={14} />
                    </span>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                        {activeStudent.mentor.name}
                      </h3>
                      <span className="px-2 py-0.5 rounded-md bg-blue-100 text-blue-700 text-[11px] font-black uppercase">
                        {activeStudent.mentor.branch || activeStudent.mentor.branchLabel}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm font-bold text-blue-600">
                      {activeStudent.mentor.role}
                    </p>
                    <p className="text-xs text-slate-500 font-medium">
                      Alumnus: {activeStudent.mentor.college}
                    </p>
                  </div>
                </div>

                {/* Worked On & Expertise */}
                {(activeStudent.mentor.workedOn || activeStudent.mentor.expertiseIn) && (
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-2 text-xs font-semibold">
                    {activeStudent.mentor.workedOn && (
                      <p className="text-slate-800">
                        🛠️ <strong className="text-slate-900">Worked On:</strong> {activeStudent.mentor.workedOn}
                      </p>
                    )}
                    {activeStudent.mentor.expertiseIn && (
                      <p className="text-blue-800">
                        💡 <strong className="text-blue-900">Expertise:</strong> {activeStudent.mentor.expertiseIn}
                      </p>
                    )}
                  </div>
                )}

                {/* Live Meeting & Chat Actions */}
                <div className="pt-2 space-y-2">
                  <a
                    href="#mentor-live-chat"
                    className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md shadow-blue-500/20 active:scale-[0.98]"
                  >
                    <MessageCircle size={16} /> 💬 Live Chat with {activeStudent.mentor.name}
                  </a>

                  {activeStudent.mentor.meetLink ? (
                    <a
                      href={activeStudent.mentor.meetLink}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full py-3 px-4 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md shadow-rose-600/25 active:scale-[0.98] animate-pulse"
                    >
                      <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                      <Video size={16} /> Join Live Google Meet Session
                    </a>
                  ) : (
                    <div className="p-2.5 bg-slate-100/80 rounded-xl flex items-center justify-between text-xs text-slate-500 font-semibold border border-slate-200">
                      <span className="flex items-center gap-2"><Video size={15} className="text-slate-400" /> No Live Meet Scheduled Right Now</span>
                      <span className="text-[10px] text-slate-500 font-bold bg-white px-2 py-0.5 rounded border border-slate-200">Mentor will notify</span>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="lg:col-span-2 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 rounded-3xl border border-blue-900/50 shadow-xl p-6 sm:p-8 text-white space-y-5 relative overflow-hidden">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-[11px] font-black uppercase tracking-wider border border-amber-500/30">
                  <Clock size={13} className="animate-spin" /> Senior Mentor Assignment In Progress
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white">
                    Wait! Your Mentor is being assigned according to your problem ⏳
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    Namaste <strong className="text-white">{activeStudent.name}</strong>! Admin team aapke branch (<span className="text-amber-400 font-bold">{activeStudent.branch}</span>) aur aapke queries/goals ke anusaar ek verified senior mentor jald hi assign kar rahi hai.
                  </p>
                </div>

                {(activeStudent.mentorExpectations || activeStudent.goals) && (
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                    <p className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
                      🎯 Aapka Guidance Requirement / Problem:
                    </p>
                    <p className="text-[12px] text-slate-200 italic font-medium">
                      "{activeStudent.mentorExpectations || activeStudent.goals}"
                    </p>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                    <p className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                      <Flame size={14} /> "Kya Padha" Live Study Tracker
                    </p>
                    <p className="text-[11px] text-slate-300">
                      Niche diye gaye study tracker aur Pomodoro timer se daily padhai track karein.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                    <p className="text-xs font-bold text-blue-400 flex items-center gap-1.5">
                      <BookOpen size={14} /> Free Study Material
                    </p>
                    <p className="text-[11px] text-slate-300">
                      Handwritten topper notes, official BEU syllabus aur Previous Year Question papers freely use karein.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* ── 1st Year Academic Resources Hub (1 col) ── */}
            <div className="bg-gradient-to-br from-indigo-900 to-slate-900 rounded-3xl p-6 text-white flex flex-col justify-between shadow-xl relative overflow-hidden border border-indigo-700/30">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/30 text-indigo-200 text-[10px] font-black uppercase tracking-widest border border-indigo-400/20">
                  <Sparkles size={12} className="text-amber-400" /> 1st Year Study Hub
                </div>

                <div className="space-y-1">
                  <h4 className="text-lg font-black tracking-tight">
                    BEU Semester Exam Prep
                  </h4>
                  <p className="text-xs text-indigo-200 leading-relaxed font-normal">
                    Free handwritten topper notes, official BEU syllabus and previous year solved questions.
                  </p>
                </div>

                <div className="space-y-2 pt-1">
                  <Link 
                    to="/notes" 
                    className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-slate-200 font-bold transition-colors"
                  >
                    <span className="flex items-center gap-2"><BookOpen size={15} className="text-blue-400" /> Handwritten Notes</span>
                    <ChevronRight size={14} className="text-slate-400" />
                  </Link>
                  <Link 
                    to="/pyq" 
                    className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-slate-200 font-bold transition-colors"
                  >
                    <span className="flex items-center gap-2"><Award size={15} className="text-amber-400" /> Previous Year PYQs</span>
                    <ChevronRight size={14} className="text-slate-400" />
                  </Link>
                  <Link 
                    to="/syllabus" 
                    className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-slate-200 font-bold transition-colors"
                  >
                    <span className="flex items-center gap-2"><Target size={15} className="text-emerald-400" /> BEU Syllabus & Marks</span>
                    <ChevronRight size={14} className="text-slate-400" />
                  </Link>
                </div>
              </div>

              <div className="pt-4">
                <Link 
                  to="/notes" 
                  className="w-full py-3 bg-white hover:bg-slate-100 text-slate-900 rounded-xl font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all"
                >
                  Access All Notes & PYQs <ArrowRight size={14} />
                </Link>
              </div>
            </div>

          </div>

          {/* 3. "KYA PADHA" STUDY TRACKER & LIVE TIMER SECTION */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-md p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
              <div>
                <div className="flex items-center gap-2">
                  <span className="p-2 rounded-xl bg-amber-50 text-amber-600 border border-amber-200">
                    <Flame size={20} className="fill-amber-500" />
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    "Kya Padha" Live Study Tracker & Timer
                  </h3>
                </div>
                <p className="text-xs text-slate-500 mt-1 font-medium">
                  Aapka har study session aur timer record aapke <strong>assigned senior mentor ko live access</strong> me dikhta hai.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                {/* 1. AAJ KITNA PADHA (Today's Study Timer) */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50/80 border border-blue-200/90 px-4 py-2.5 rounded-2xl text-left shadow-sm min-w-[150px]">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-black text-blue-700 uppercase tracking-wider flex items-center gap-1.5">
                      <Clock size={13} className="text-blue-600" /> Aaj Kitna Padha
                    </span>
                    {isLiveTimerRunning && (
                      <span className="inline-flex items-center gap-1 text-[9px] font-black bg-emerald-500 text-white px-2 py-0.5 rounded-full uppercase tracking-wider shadow-sm animate-pulse">
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span> Live
                      </span>
                    )}
                  </div>
                  <div className="flex items-baseline gap-1 mt-0.5">
                    <span className="text-xl font-[1000] text-slate-900 tracking-tight">
                      {formatStudyDuration(todayStudySeconds)}
                    </span>
                  </div>
                  <span className="text-[10px] font-bold text-slate-500 block">
                    {isLiveTimerRunning 
                      ? '⏱️ Study Timer Chalu Hai' 
                      : todayStudySeconds > 0 
                        ? '✅ Mentor ko live synced' 
                        : 'Aaj ka study timer (0 min)'}
                  </span>
                </div>

                {/* 2. AAJ KE TOPICS / SESSIONS */}
                <div className="bg-slate-50 px-4 py-2.5 rounded-2xl border border-slate-200 text-center min-w-[105px]">
                  <span className="block text-[11px] font-black text-slate-500 uppercase tracking-wider flex items-center justify-center gap-1">
                    <Target size={12} className="text-emerald-600" /> Aaj Ke Topics
                  </span>
                  <span className="text-xl font-[1000] text-emerald-600 mt-0.5 block">
                    {todayLogsCount}
                  </span>
                  <span className="text-[10px] font-bold text-slate-400 block">
                    Sessions Aaj
                  </span>
                </div>

                {/* 3. TOTAL ALL-TIME TIME */}
                <div className="bg-slate-50 px-4 py-2.5 rounded-2xl border border-slate-200 text-center min-w-[95px] hidden sm:block">
                  <span className="block text-[11px] font-black text-slate-500 uppercase tracking-wider">
                    Total Hours
                  </span>
                  <span className="text-xl font-[1000] text-slate-700 mt-0.5 block">
                    {totalStudyHours.toFixed(1)} hrs
                  </span>
                  <span className="text-[10px] font-bold text-slate-400 block">
                    {studyLogs.length} Total Topics
                  </span>
                </div>
              </div>
            </div>

            {/* ── IN-BUILT BEU STUDY ZONE & TIMER HUB CARD ── */}
            <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 text-white p-6 sm:p-8 rounded-3xl border border-blue-800/40 shadow-2xl relative overflow-hidden space-y-6">
              {/* Decorative background glow */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/20 text-blue-300 text-[10px] font-black uppercase tracking-wider border border-blue-400/30">
                    <Sparkles size={13} className="text-yellow-400 animate-pulse" /> Official BEU Study Zone
                  </div>
                  <h3 className="text-xl sm:text-2xl font-[1000] text-white tracking-tight">
                    In-Built Focus Study Room & Timer Hub
                  </h3>
                  <p className="text-xs text-slate-300 font-medium leading-relaxed max-w-xl">
                    Apna College Bihar ka complete in-built study hub jisme <strong>Pomodoro Timer, Lo-Fi Music, Study Heatmap, Tasks & Target Tracking</strong> sab in-built milta hai.
                  </p>
                </div>

                {/* Live Mentor Sync Status Badge */}
                <div className="flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 px-4 py-2 rounded-2xl text-xs font-black self-start sm:self-auto shrink-0 shadow-lg shadow-emerald-500/10">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
                  <span>Mentor Live Auto-Sync Active 📡</span>
                </div>
              </div>

              {/* Feature Highlights Pills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 relative z-10">
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-500/20 border border-blue-400/30 text-blue-300 flex items-center justify-center shrink-0">
                    <Timer size={18} className={isLiveTimerRunning ? "text-emerald-400 animate-spin" : ""} />
                  </div>
                  <div>
                    <span className="block text-[10px] font-black text-slate-400 uppercase">Aaj Ka Timer</span>
                    <span className="text-xs font-black text-white">{formatStudyDuration(todayStudySeconds)} {isLiveTimerRunning ? '🔥' : ''}</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 flex items-center justify-center shrink-0">
                    <Sparkles size={18} />
                  </div>
                  <div>
                    <span className="block text-[10px] font-black text-slate-400 uppercase">Music</span>
                    <span className="text-xs font-black text-white">In-Built Lo-Fi Beats</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-purple-500/20 border border-purple-400/30 text-purple-300 flex items-center justify-center shrink-0">
                    <TrendingUp size={18} />
                  </div>
                  <div>
                    <span className="block text-[10px] font-black text-slate-400 uppercase">Analytics</span>
                    <span className="text-xs font-black text-white">Heatmap & Breakdown</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 flex items-center justify-center shrink-0">
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <span className="block text-[10px] font-black text-slate-400 uppercase">Mentor Sync</span>
                    <span className="text-xs font-black text-emerald-300">100% Automatic</span>
                  </div>
                </div>
              </div>

              {/* Main Launch Button & Mentee Notice */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-600/30 via-indigo-600/25 to-purple-600/30 border border-blue-400/30 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
                <div className="space-y-1 text-center sm:text-left">
                  <h4 className="text-sm font-black text-white flex items-center justify-center sm:justify-start gap-2">
                    <span>🚀 Launch Focus Study Zone (/study)</span>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full border ${isLiveTimerRunning ? 'bg-emerald-500/30 text-emerald-300 border-emerald-400/50 animate-pulse' : 'bg-emerald-500/20 text-emerald-300 border-emerald-400/30'}`}>
                      {isLiveTimerRunning ? '🔴 Timer Active' : 'Live Access'}
                    </span>
                  </h4>
                  <p className="text-xs text-slate-300 font-medium">
                    {isLiveTimerRunning ? (
                      <>🔥 <strong>Study Timer Chalu Hai!</strong> Aapka live timer session senior mentor <strong>({activeStudent?.mentor?.name || 'Assigned Mentor'})</strong> ko live sync ho raha hai ({formatStudyDuration(todayStudySeconds)} aaj padha).</>
                    ) : (
                      <>Jaise hi aap <strong>/study</strong> tab par focus timer chalu karenge ya session complete karenge, aapka aaj ka study time yahan automatically live update hoga aur aapke mentor ko sync ho jayega.</>
                    )}
                  </p>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto shrink-0">
                  <a
                    href="/study"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-4 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 hover:from-blue-600 hover:to-indigo-700 text-white rounded-2xl font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-xl shadow-blue-500/30 border border-blue-400/30 transition-all active:scale-95"
                  >
                    <span>Open Built-in Study Tab</span>
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* 4. LIVE 1-ON-1 DIRECT CHAT WITH SENIOR MENTOR */}
          <div id="mentor-live-chat" className="max-w-3xl mx-auto w-full space-y-4">
            {activeStudent.mentor ? (
              <MentorshipChat
                student={activeStudent}
                mentor={activeStudent.mentor}
                currentUserRole="student"
                isModal={false}
              />
            ) : (
              <div className="bg-white rounded-3xl border border-slate-200 shadow-md p-8 text-center space-y-3">
                <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto text-2xl">
                  ⏳
                </div>
                <h3 className="text-lg font-black text-slate-900">Senior Mentor Assignment In Progress</h3>
                <p className="text-xs text-slate-500 max-w-md mx-auto">
                  Aapka verified senior mentor assign hote hi aap yahan seedhe 1-on-1 real-time chat kar sakenge aur koi bhi sawal pooch sakenge.
                </p>
              </div>
            )}

            {/* Instant Quick Tips */}
            <div className="p-4 bg-blue-50/70 border border-blue-100 rounded-2xl text-blue-900 text-xs space-y-1">
              <span className="font-black block">💡 1st Year Pro-Tip from {activeStudent.mentor?.name || 'Senior Mentors'}:</span>
              <p className="text-slate-600 leading-relaxed font-medium">
                "1st semester me Basic Electrical aur Mathematics-I par roz 1 ghanta regular dein. Ye dono subjects me backlogs lagne ka sabse zyada chance rehta hai."
              </p>
            </div>
          </div>

        </div>
      )}

      {/* ── Modal: Mentee Study Logs & Live Timer Records (Mentor View) ── */}
      {selectedMenteeLogs && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-2xl">
                  {selectedMenteeLogs.branchCode === 'CSE' ? '💻' : selectedMenteeLogs.branchCode === 'ECE' ? '📡' : selectedMenteeLogs.branchCode === 'EEE' ? '🔋' : selectedMenteeLogs.branchCode === 'CE' ? '🏗️' : '⚙️'}
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-black text-slate-900 flex items-center gap-2">
                    {selectedMenteeLogs.name}
                    <span className="text-[11px] font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">
                      {selectedMenteeLogs.roll}
                    </span>
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">
                    {selectedMenteeLogs.college} · {selectedMenteeLogs.branch}
                  </p>
                </div>
              </div>

              <button 
                onClick={() => setSelectedMenteeLogs(null)}
                className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200"
              >
                <X size={16} />
              </button>
            </div>

            {/* Quick Stats of Mentee's Study */}
            <div className="grid grid-cols-3 gap-3">
              <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200 text-center">
                <span className="block text-[10px] font-black uppercase text-slate-400">Total Hours</span>
                <span className="text-base sm:text-lg font-black text-blue-600">
                  {selectedMenteeLogs.logs && selectedMenteeLogs.logs.length > 0
                    ? `${selectedMenteeLogs.logs.reduce((acc, curr) => acc + (parseFloat(curr.hours) || 0), 0).toFixed(1)} hrs`
                    : '0.0 hrs'}
                </span>
              </div>
              <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200 text-center">
                <span className="block text-[10px] font-black uppercase text-slate-400">Topics Covered</span>
                <span className="text-base sm:text-lg font-black text-emerald-600">
                  {selectedMenteeLogs.logs?.length || 0}
                </span>
              </div>
              <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200 text-center">
                <span className="block text-[10px] font-black uppercase text-slate-400">Study Status</span>
                <span className={`text-xs sm:text-sm font-black ${selectedMenteeLogs.logs && selectedMenteeLogs.logs.length > 0 ? 'text-indigo-600' : 'text-slate-400'}`}>
                  {selectedMenteeLogs.logs && selectedMenteeLogs.logs.length > 0 ? 'Active 🔥' : 'No Logs Yet ⏳'}
                </span>
              </div>
            </div>

            {/* Mentee Stated Goals & Expectations */}
            <div className="p-4 bg-indigo-50/70 rounded-2xl border border-indigo-100 space-y-1.5 text-xs text-indigo-950">
              <p>
                <strong>🎯 Student Ke Goals:</strong> {selectedMenteeLogs.goals || 'Padhai me guidance (Achha CGPA kaise layein)'}
              </p>
              {selectedMenteeLogs.mentorExpectations && (
                <p className="text-slate-600">
                  <strong>💡 Mentor Se Expectations:</strong> "{selectedMenteeLogs.mentorExpectations}"
                </p>
              )}
            </div>

            {/* Study Logs & Timer History Table */}
            <div className="space-y-3">
              <h4 className="text-xs font-black uppercase tracking-widest text-slate-700 flex items-center justify-between">
                <span>"Kya Padha, Kitna Padha" Record:</span>
                <span className="text-[10px] text-slate-400 font-mono">Live Synced with Mentor</span>
              </h4>

              {(!selectedMenteeLogs.logs || selectedMenteeLogs.logs.length === 0) ? (
                <div className="p-6 text-center text-xs text-slate-400 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                  Is student ne abhi tak koi study log add nahi kiya hai.
                </div>
              ) : (
                <div className="space-y-2.5 max-h-60 overflow-y-auto pr-1">
                  {selectedMenteeLogs.logs.map((log, idx) => (
                    <div 
                      key={log.id || idx}
                      className="p-3.5 bg-slate-50 hover:bg-slate-100/80 rounded-2xl border border-slate-200 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                    >
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-xs font-black text-slate-900">{log.subject}</span>
                          {log.source && (
                            <span className="px-2 py-0.5 rounded-md bg-purple-100 text-purple-700 font-black text-[9px] uppercase tracking-wider border border-purple-200 inline-flex items-center gap-1">
                              <Sparkles size={10} /> {log.source}
                            </span>
                          )}
                          <span className="text-[10px] font-bold text-slate-500 font-mono">
                            · {log.date}
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 font-medium">
                          {log.topic}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
                        <span className="px-2.5 py-1 rounded-lg bg-blue-100/70 text-blue-700 font-black text-[11px]">
                          ⏱️ {log.hours} hrs {log.durationText ? `(${log.durationText})` : ''}
                        </span>
                        <span className="px-2.5 py-1 rounded-lg bg-emerald-100/70 text-emerald-700 font-black text-[10px]">
                          {log.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Mentor Actions on Mentee */}
            <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex flex-col sm:flex-row items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={() => {
                    const student = selectedMenteeLogs;
                    setSelectedMenteeLogs(null);
                    setActiveChatMentee(student);
                  }}
                  className="w-full sm:w-auto px-5 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md shadow-blue-500/20 active:scale-95"
                >
                  <MessageCircle size={16} /> 💬 Live Chat With Mentee
                </button>

                <a
                  href={`https://wa.me/91${selectedMenteeLogs.whatsapp?.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Namaste ${selectedMenteeLogs.name}! Main ${activeMentor?.name} (Aapka BEU Senior Mentor). Maine aapka study tracker dekha. Padhai me bahut achhi consistency hai! Koi doubt ho toh pooch sakte hain.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20"
                >
                  <MessageCircle size={16} /> WhatsApp Feedback
                </a>
              </div>

              <button
                onClick={() => setSelectedMenteeLogs(null)}
                className="w-full sm:w-auto px-5 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-all"
              >
                Close Window
              </button>
            </div>

          </div>
        </div>
      )}

      {/* ── Modal: Live Mentorship Chat (Mentor View) ── */}
      {activeChatMentee && activeMentor && (
        <MentorshipChat
          student={activeChatMentee}
          mentor={activeMentor}
          currentUserRole="mentor"
          isModal={true}
          onClose={() => setActiveChatMentee(null)}
        />
      )}

      {/* ── Booking Modal ── */}
      {showBookingModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 space-y-5 shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                <Calendar size={20} className="text-blue-600" /> Book Free 1-on-1 Call
              </h3>
              <button 
                onClick={() => setShowBookingModal(false)}
                className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200"
              >
                ✕
              </button>
            </div>

            {slotBooked ? (
              <div className="text-center py-6 space-y-3">
                <CheckCircle2 size={48} className="text-emerald-500 mx-auto" />
                <h4 className="text-base font-black text-slate-900">Session Book Ho Gaya!</h4>
                <p className="text-xs text-slate-600">
                  Aapka 1-on-1 slot <strong>{selectedSlot}</strong> ke liye confirm ho gaya hai. Guidance details aapke WhatsApp par share kiye jayenge.
                </p>
                <button 
                  onClick={() => { setShowBookingModal(false); setSlotBooked(false); }}
                  className="px-6 py-2.5 bg-blue-600 text-white rounded-xl text-xs font-bold"
                >
                  Done
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <p className="text-xs text-slate-500 font-medium">
                  Apne mentor <strong>{activeStudent?.mentor.name}</strong> ke saath 1-on-1 discussion ke liye slot chunein:
                </p>

                <div className="space-y-2">
                  {[
                    'Tomorrow · 6:00 PM to 6:30 PM',
                    'Saturday · 7:00 PM to 7:30 PM',
                    'Sunday · 5:00 PM to 5:30 PM',
                    'Monday · 8:00 PM to 8:30 PM'
                  ].map((slot) => (
                    <div 
                      key={slot}
                      onClick={() => setSelectedSlot(slot)}
                      className={`p-3 rounded-xl border text-xs font-bold cursor-pointer transition-all flex items-center justify-between ${
                        selectedSlot === slot ? 'bg-blue-50 border-blue-600 text-blue-900' : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <span>📅 {slot}</span>
                      {selectedSlot === slot && <Check size={16} className="text-blue-600" />}
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <button 
                    onClick={() => {
                      setSlotBooked(true);
                      toast.success('Slot successfully reserved!');
                    }}
                    className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-black uppercase tracking-wider shadow-lg shadow-blue-600/20"
                  >
                    Confirm Booking (Free)
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
