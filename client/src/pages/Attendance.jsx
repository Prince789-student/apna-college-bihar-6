import React, { useState, useEffect, useRef } from 'react';
import { UserCheck, Plus, Minus, RotateCcw, Shield, Calendar, Fingerprint, AlertCircle, Info, Trash2, CheckCircle2, XCircle, Award, ChevronLeft, ChevronRight } from 'lucide-react';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';

const HOLIDAYS_2026 = [
  { name: 'New Year Begins (नववर्ष आरम्भ)', date: '01 Jan 2026', dateStrings: ['2026-01-01'], day: 'Thursday', duration: 1, sundays: 0 },
  { name: 'Makar Sankranti (मकर संक्रांति)', date: '14 Jan 2026', dateStrings: ['2026-01-14'], day: 'Wednesday', duration: 1, sundays: 0 },
  { name: 'Basant Panchami / Saraswati Puja (बसंत पंचमी / सरस्वती पूजा)', date: '23 Jan 2026', dateStrings: ['2026-01-23'], day: 'Friday', duration: 1, sundays: 0 },
  { name: 'Sant Ravidas Jayanti (संत रविदास जयंती)', date: '01 Feb 2026', dateStrings: ['2026-02-01'], day: 'Sunday', duration: 0, sundays: 1 },
  { name: 'Shab-e-Barat (शब-ए-बरात)', date: '04 Feb 2026', dateStrings: ['2026-02-04'], day: 'Wednesday', duration: 1, sundays: 0 },
  { name: 'Maha Shivratri (महाशिवरात्रि)', date: '15 Feb 2026', dateStrings: ['2026-02-15'], day: 'Sunday', duration: 0, sundays: 1 },
  { name: 'Holika Dahan / Holi (होलिका दहन / होली)', date: '02-04 Mar 2026', dateStrings: ['2026-03-02', '2026-03-03', '2026-03-04'], day: 'Mon-Wed', duration: 3, sundays: 0 },
  { name: 'Eid-ul-Fitr (ईद-उल-फितर)', date: '21 Mar 2026', dateStrings: ['2026-03-21'], day: 'Saturday', duration: 1, sundays: 0 },
  { name: 'Bihar Diwas (बिहार दिवस)', date: '22 Mar 2026', dateStrings: ['2026-03-22'], day: 'Sunday', duration: 0, sundays: 1 },
  { name: 'Samrat Ashok Jayanti (सम्राट अशोक जयंती)', date: '26 Mar 2026', dateStrings: ['2026-03-26'], day: 'Thursday', duration: 1, sundays: 0 },
  { name: 'Ram Navami (रामनवमी)', date: '27 Mar 2026', dateStrings: ['2026-03-27'], day: 'Friday', duration: 1, sundays: 0 },
  { name: 'Mahavir Jayanti (महावीर जयंती)', date: '31 Mar 2026', dateStrings: ['2026-03-31'], day: 'Tuesday', duration: 1, sundays: 0 },
  { name: 'Good Friday (गुड फ्राइडे)', date: '03 Apr 2026', dateStrings: ['2026-04-03'], day: 'Friday', duration: 1, sundays: 0 },
  { name: 'Dr. B.R. Ambedkar Jayanti (डॉ० भीम राव अम्बेडकर जयंती)', date: '14 Apr 2026', dateStrings: ['2026-04-14'], day: 'Tuesday', duration: 1, sundays: 0 },
  { name: 'Veer Kunwar Singh Jayanti (वीर कुँवर सिंह जयंती)', date: '23 Apr 2026', dateStrings: ['2026-04-23'], day: 'Thursday', duration: 1, sundays: 0 },
  { name: 'Janaki Navami (जानकी नवमी)', date: '25 Apr 2026', dateStrings: ['2026-04-25'], day: 'Saturday', duration: 1, sundays: 0 },
  { name: 'May Day / Labour Day / Buddha Purnima (मई दिवस / बुद्ध पूर्णिमा)', date: '01 May 2026', dateStrings: ['2026-05-01'], day: 'Friday', duration: 1, sundays: 0 },
  { name: 'Eid-ul-Adha / Bakrid (ईद-उल-जोहा / बकरीद)', date: '28 May 2026', dateStrings: ['2026-05-28'], day: 'Thursday', duration: 1, sundays: 0 },
  { name: 'Summer Vacation (शिक्षकों के लिए) / Kabir Jayanti', date: '01-30 Jun 2026', dateStrings: Array.from({ length: 30 }, (_, i) => `2026-06-${String(i + 1).padStart(2, '0')}`), day: 'Mon-Tue', duration: 26, sundays: 4 },
  { name: 'Chehallum (चेहल्लुम)', date: '04 Aug 2026', dateStrings: ['2026-08-04'], day: 'Tuesday', duration: 1, sundays: 0 },
  { name: 'Hazrat Mohammad Birthday (हज़रत मोहम्मद जन्म दिवस)', date: '26 Aug 2026', dateStrings: ['2026-08-26'], day: 'Wednesday', duration: 1, sundays: 0 },
  { name: 'Raksha Bandhan (रक्षाबंधन)', date: '28 Aug 2026', dateStrings: ['2026-08-28'], day: 'Friday', duration: 1, sundays: 0 },
  { name: 'Krishna Janmashtami (श्री कृष्ण जन्माष्टमी)', date: '04 Sep 2026', dateStrings: ['2026-09-04'], day: 'Friday', duration: 1, sundays: 0 },
  { name: 'Mahatma Gandhi Jayanti (महात्मा गाँधी जयंती)', date: '02 Oct 2026', dateStrings: ['2026-10-02'], day: 'Friday', duration: 1, sundays: 0 },
  { name: 'Durga Puja (दुर्गा पूजा)', date: '17-20 Oct 2026', dateStrings: ['2026-10-17', '2026-10-18', '2026-10-19', '2026-10-20'], day: 'Sat-Tue', duration: 3, sundays: 1 },
  { name: 'Deepawali / Bhai Dooj / Chhath Puja (दीपावली / छठ पूजा)', date: '08-16 Nov 2026', dateStrings: ['2026-11-08', '2026-11-09', '2026-11-10', '2026-11-11', '2026-11-12', '2026-11-13', '2026-11-14', '2026-11-15', '2026-11-16'], day: 'Sun-Mon', duration: 7, sundays: 2 },
  { name: 'Guru Nanak Jayanti / Kartik Purnima (गुरुनानक जयंती)', date: '24 Nov 2026', dateStrings: ['2026-11-24'], day: 'Tuesday', duration: 1, sundays: 0 },
  { name: 'Christmas / Winter Vacation (क्रिसमस / शीतकालीन अवकाश)', date: '25-31 Dec 2026', dateStrings: ['2026-12-25', '2026-12-26', '2026-12-27', '2026-12-28', '2026-12-29', '2026-12-30', '2026-12-31'], day: 'Fri-Thu', duration: 6, sundays: 1 }
];

export default function Attendance() {
  const { user } = useAuth();
  const [subjects, setSubjects] = useState([
    { name: 'Mathematics', present: 0, total: 0 },
    { name: 'Physics', present: 0, total: 0 },
    { name: 'Computer Science', present: 0, total: 0 },
  ]);
  const [dailyLog, setDailyLog] = useState({});
  const [activeTab, setActiveTab] = useState('subjects'); // 'subjects', 'daily', 'holidays'
  const [loading, setLoading] = useState(true);
  
  const [currentDate, setCurrentDate] = useState(() => {
    const today = new Date();
    if (today.getFullYear() !== 2026) {
      return new Date('2026-06-03');
    }
    return today;
  });

  const handlePrevMonth = () => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      newDate.setMonth(newDate.getMonth() - 1);
      if (newDate.getFullYear() < 2026) {
        toast.error("Holidays and logging are configured for 2026!");
        return prev;
      }
      return newDate;
    });
  };

  const handleNextMonth = () => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      newDate.setMonth(newDate.getMonth() + 1);
      if (newDate.getFullYear() > 2026) {
        toast.error("Holidays and logging are configured for 2026!");
        return prev;
      }
      return newDate;
    });
  };
  
  // Biometric Scan State
  const [scanning, setScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const scanIntervalRef = useRef(null);

  useEffect(() => {
    if (user) fetchAttendance();
  }, [user]);

  const fetchAttendance = async () => {
    try {
      const snap = await getDoc(doc(db, 'users', user.uid));
      if (snap.exists()) {
        const data = snap.data();
        if (data.attendance) {
          setSubjects(data.attendance);
        }
        if (data.dailyAttendanceLog) {
          setDailyLog(data.dailyAttendanceLog);
        }
      }
    } catch (e) {
      console.error("Fetch attendance error:", e);
    } finally {
      setLoading(false);
    }
  };

  const saveAttendance = async (newSubjects, newDailyLog = dailyLog) => {
    try {
      await updateDoc(doc(db, 'users', user.uid), {
        attendance: newSubjects,
        dailyAttendanceLog: newDailyLog
      });
    } catch (e) {
      console.error("Save attendance error:", e);
    }
  };

  const updateAttendance = (index, type) => {
    const newSubjects = [...subjects];
    if (type === 'present') {
      newSubjects[index].present += 1;
      newSubjects[index].total += 1;
    } else if (type === 'absent') {
      newSubjects[index].total += 1;
    } else if (type === 'reset') {
      newSubjects[index].present = 0;
      newSubjects[index].total = 0;
    }
    setSubjects(newSubjects);
    saveAttendance(newSubjects);
    toast.success('Subject Attendance Updated');
  };

  const addSubject = () => {
    const name = prompt('Enter Subject Name:');
    if (name && name.trim()) {
      const newSubjects = [...subjects, { name: name.trim(), present: 0, total: 0 }];
      setSubjects(newSubjects);
      saveAttendance(newSubjects);
      toast.success('Subject Added');
    }
  };

  const deleteSubject = (index) => {
    if (window.confirm(`Delete subject "${subjects[index].name}" permanently?`)) {
      const newSubjects = subjects.filter((_, idx) => idx !== index);
      setSubjects(newSubjects);
      saveAttendance(newSubjects);
      toast.success('Subject Deleted');
    }
  };

  // Biometric Scan Handlers
  const startScan = (e) => {
    e.preventDefault();
    const todayStr = new Date().toLocaleDateString('en-CA');
    if (dailyLog[todayStr]) {
      toast.error("Today's attendance has already been logged!");
      return;
    }

    setScanning(true);
    setScanProgress(0);
    
    scanIntervalRef.current = setInterval(() => {
      setScanProgress(prev => {
        if (prev >= 100) {
          clearInterval(scanIntervalRef.current);
          handleScanSuccess();
          return 100;
        }
        return prev + 10;
      });
    }, 150);
  };

  const stopScan = () => {
    if (scanIntervalRef.current) {
      clearInterval(scanIntervalRef.current);
    }
    setScanning(false);
    setScanProgress(0);
  };

  const handleScanSuccess = async () => {
    const todayStr = new Date().toLocaleDateString('en-CA');
    const newDailyLog = { ...dailyLog, [todayStr]: 'PRESENT' };
    setDailyLog(newDailyLog);
    setScanning(false);
    setScanProgress(0);

    // Dynamic haptic trigger if supported
    try {
      if (window.navigator && window.navigator.vibrate) {
        window.navigator.vibrate([100, 50, 100]);
      }
    } catch (e) {}

    await saveAttendance(subjects, newDailyLog);
    toast.success('Biometric verification successful! Attendance logged.');
  };

  // Toggle past attendance in grid manually
  const toggleDailyDate = async (dateStr) => {
    const currentStatus = dailyLog[dateStr];
    let nextStatus = 'PRESENT';
    if (currentStatus === 'PRESENT') nextStatus = 'ABSENT';
    else if (currentStatus === 'ABSENT') nextStatus = 'HOLIDAY';
    else if (currentStatus === 'HOLIDAY') nextStatus = undefined;

    const newDailyLog = { ...dailyLog };
    if (nextStatus) {
      newDailyLog[dateStr] = nextStatus;
    } else {
      delete newDailyLog[dateStr];
    }

    setDailyLog(newDailyLog);
    await saveAttendance(subjects, newDailyLog);
    toast.success(`Log updated for ${dateStr}`);
  };

  // Generate days for calendar rendering
  const getDaysArray = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    const arr = [];
    for (let d = 1; d <= daysInMonth; d++) {
      const dString = `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
      arr.push({ day: d, dateStr: dString });
    }
    return arr;
  };

  const calendarDays = getDaysArray();
  const currentMonthName = currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  // Holiday matchers
  const holidayDatesSet = new Set();
  HOLIDAYS_2026.forEach(h => {
    if (h.dateStrings) {
      h.dateStrings.forEach(d => holidayDatesSet.add(d));
    }
  });

  const getOfficialHolidayName = (dateStr) => {
    const h = HOLIDAYS_2026.find(h => h.dateStrings && h.dateStrings.includes(dateStr));
    return h ? h.name : null;
  };

  // Calculate statistics from dailyLog (All-time overall)
  const dailyStats = Object.values(dailyLog).reduce((acc, status) => {
    if (status === 'PRESENT') acc.present += 1;
    if (status === 'ABSENT') acc.absent += 1;
    if (status === 'HOLIDAY') acc.holiday += 1;
    return acc;
  }, { present: 0, absent: 0, holiday: 0 });

  const totalLogCount = dailyStats.present + dailyStats.absent;
  const overallDailyPercent = totalLogCount > 0 ? ((dailyStats.present / totalLogCount) * 100).toFixed(1) : 0;

  // Selected Month Stats
  const selYear = currentDate.getFullYear();
  const selMonth = currentDate.getMonth();
  const prefix = `${selYear}-${String(selMonth + 1).padStart(2, '0')}-`;

  const monthlyStats = Object.entries(dailyLog).reduce((acc, [dateStr, status]) => {
    if (dateStr.startsWith(prefix)) {
      if (status === 'PRESENT') acc.present += 1;
      if (status === 'ABSENT') acc.absent += 1;
      if (status === 'HOLIDAY') acc.holiday += 1;
    }
    return acc;
  }, { present: 0, absent: 0, holiday: 0 });

  const totalMonthlyCount = monthlyStats.present + monthlyStats.absent;
  const monthlyPercent = totalMonthlyCount > 0 ? ((monthlyStats.present / totalMonthlyCount) * 100).toFixed(1) : 0;

  if (loading) return <div className="flex justify-center p-20"><div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div></div>;

  return (
    <div className="space-y-6 md:space-y-8 animate-in fade-in duration-500 font-['Inter']">
      
      {/* CSS Injected for scan animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes laser-sweep {
          0% { top: 0%; opacity: 0.8; }
          50% { top: 100%; opacity: 0.8; }
          100% { top: 0%; opacity: 0.8; }
        }
        @keyframes ripple-pulse {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(1.6); opacity: 0; }
        }
        .animate-laser {
          animation: laser-sweep 2s infinite ease-in-out;
        }
        .animate-ripple {
          animation: ripple-pulse 1.5s infinite linear;
        }
      `}} />

      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 md:p-8 rounded-[2.5rem] border border-slate-200 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none"><UserCheck size={96}/></div>
        <div className="flex items-center gap-4">
          <div className="p-4 bg-emerald-50 text-emerald-600 rounded-3xl border border-emerald-100 shadow-sm">
            <UserCheck size={32} />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-[1000] text-slate-900 uppercase tracking-tighter">My Attendance</h1>
            <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.3em] mt-1">Goal: 75% Attendance Required (BEU Regulation)</p>
          </div>
        </div>
        <div className="flex gap-2">
          {activeTab === 'subjects' && (
            <button onClick={addSubject} className="px-5 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl flex items-center gap-2 text-[10px] font-black uppercase tracking-widest active:scale-95 transition-all shadow-md">
              <Plus size={16} /> Add Subject
            </button>
          )}
        </div>
      </div>

      {/* Tabs Menu */}
      <div className="flex bg-slate-100 p-1.5 rounded-2xl border border-slate-200 w-full overflow-x-auto no-scrollbar">
        {[
          { id: 'subjects', label: 'Subject Tracker', icon: <Award size={16} /> },
          { id: 'daily', label: 'Daily Punch-In', icon: <Fingerprint size={16} /> },
          { id: 'holidays', label: 'Holidays Calendar 2026', icon: <Calendar size={16} /> }
        ].map(t => (
          <button
            key={t.id}
            onClick={() => setActiveTab(t.id)}
            className={`flex-1 py-3 px-4 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2 whitespace-nowrap ${
              activeTab === t.id
                ? 'bg-white text-slate-900 shadow-md font-[1000]'
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            {t.icon}
            {t.label}
          </button>
        ))}
      </div>

      {/* Tab Contents: Subjects Tracker */}
      {activeTab === 'subjects' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map((s, i) => {
            const percent = s.total > 0 ? Number(((s.present / s.total) * 100).toFixed(1)) : 0;
            const isDanger = percent < 75 && s.total > 0;

            return (
              <div key={i} className="bg-white border border-slate-200/80 p-6 md:p-8 rounded-[2.5rem] shadow-sm hover:shadow-lg transition-all relative overflow-hidden group flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start gap-3 mb-6">
                    <div>
                      <h3 className="text-lg md:text-xl font-black text-slate-900 uppercase tracking-tighter truncate max-w-[150px]" title={s.name}>{s.name}</h3>
                      <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">{s.present} / {s.total} Lectures Attended</p>
                    </div>
                    <div className={`px-3.5 py-1.5 rounded-2xl text-[11px] font-black ${isDanger ? 'bg-red-50 text-red-600 border border-red-100' : 'bg-emerald-50 text-emerald-600 border border-emerald-100'}`}>
                      {percent}%
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="h-2.5 bg-slate-100 rounded-full mb-6 overflow-hidden">
                    <div 
                      className={`h-full transition-all duration-700 ${isDanger ? 'bg-red-500' : 'bg-emerald-500'}`}
                      style={{ width: `${percent}%` }}
                    ></div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-2">
                    <button 
                      onClick={() => updateAttendance(i, 'present')}
                      className="flex items-center justify-center gap-1.5 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-[9px] font-black uppercase tracking-widest active:scale-95 transition-all shadow-sm"
                    >
                      <Plus size={14} /> Present
                    </button>
                    <button 
                      onClick={() => updateAttendance(i, 'absent')}
                      className="flex items-center justify-center gap-1.5 py-3.5 bg-red-600 hover:bg-red-500 text-white rounded-xl text-[9px] font-black uppercase tracking-widest active:scale-95 transition-all shadow-sm"
                    >
                      <Minus size={14} /> Absent
                    </button>
                  </div>

                  <div className="flex justify-between items-center pt-2 border-t border-slate-100">
                    <button 
                      onClick={() => updateAttendance(i, 'reset')}
                      className="flex items-center gap-1 py-1.5 text-slate-400 hover:text-slate-600 text-[8px] font-black uppercase tracking-widest transition-all"
                    >
                      <RotateCcw size={12} /> Reset Stats
                    </button>
                    <button 
                      onClick={() => deleteSubject(i)}
                      className="flex items-center gap-1 py-1.5 text-slate-400 hover:text-red-500 text-[8px] font-black uppercase tracking-widest transition-all"
                    >
                      <Trash2 size={12} /> Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
          {subjects.length === 0 && (
            <div className="col-span-full py-16 text-center bg-white rounded-[3rem] border border-slate-200">
              <Award size={36} className="mx-auto text-slate-300 mb-2" />
              <p className="text-xs font-black uppercase tracking-widest text-slate-400">No subjects tracked yet. Click "Add Subject" above!</p>
            </div>
          )}
        </div>
      )}

      {/* Tab Contents: Daily Punch-In (Biometric) */}
      {activeTab === 'daily' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Fingerprint Punch-in card */}
          <div className="lg:col-span-5 bg-white p-8 rounded-[3rem] border border-slate-200 flex flex-col items-center justify-between min-h-[400px] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-[50px] rounded-full"></div>
            
            <div className="text-center w-full">
              <h3 className="text-lg font-black text-slate-900 uppercase tracking-tighter">Biometric Punch-In</h3>
              <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest mt-1">Press and hold fingerprint to check-in for today</p>
            </div>

            {/* Fingerprint Hold Scanning area */}
            <div className="relative my-8 flex flex-col items-center justify-center">
              {/* Outer Ripple Effects */}
              {scanning && (
                <>
                  <div className="absolute w-28 h-28 border border-emerald-500/30 rounded-full animate-ripple" style={{ animationDelay: '0ms' }}></div>
                  <div className="absolute w-28 h-28 border border-emerald-500/20 rounded-full animate-ripple" style={{ animationDelay: '500ms' }}></div>
                </>
              )}

              {/* Core Scanner button */}
              <button
                onMouseDown={startScan}
                onMouseUp={stopScan}
                onMouseLeave={stopScan}
                onTouchStart={startScan}
                onTouchEnd={stopScan}
                className={`relative w-24 h-24 rounded-full flex items-center justify-center transition-all border-2 select-none shadow-md ${
                  scanning 
                    ? 'bg-emerald-500/20 border-emerald-500 text-emerald-500 scale-95 shadow-emerald-500/20 shadow-lg' 
                    : 'bg-slate-50 hover:bg-slate-100 border-slate-200 hover:border-slate-300 text-slate-500 active:scale-95'
                }`}
              >
                <Fingerprint size={48} className={scanning ? 'animate-pulse' : ''} />
                
                {/* Laser scan line overlay */}
                {scanning && (
                  <div className="absolute left-0 right-0 h-1 bg-emerald-500 shadow-[0_0_10px_#10b981] animate-laser rounded-full pointer-events-none"></div>
                )}
              </button>

              {/* Progress Text */}
              <div className="mt-6 text-center h-4">
                {scanning ? (
                  <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">Scanning Fingerprint... {scanProgress}%</p>
                ) : (
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Hold sensor for 2 seconds</p>
                )}
              </div>
            </div>

            {/* Today status indicator */}
            <div className="w-full">
              {dailyLog[new Date().toLocaleDateString('en-CA')] ? (
                <div className="bg-emerald-50 border border-emerald-200/50 p-4 rounded-2xl flex items-center justify-center gap-2.5 text-emerald-700">
                  <CheckCircle2 size={16} />
                  <span className="text-[10px] font-black uppercase tracking-widest">Today's Attendance Checked In!</span>
                </div>
              ) : (
                <div className="bg-slate-50 border border-slate-200/50 p-4 rounded-2xl flex items-center justify-center gap-2.5 text-slate-400">
                  <Info size={16} />
                  <span className="text-[9px] font-bold uppercase tracking-widest">Punch-in status pending</span>
                </div>
              )}
            </div>
          </div>

          {/* Month Log Calendar */}
          <div className="lg:col-span-7 bg-white p-8 rounded-[3rem] border border-slate-200">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3 mb-6">
              <div>
                <h3 className="text-lg font-black text-slate-900 uppercase tracking-tighter">My Attendance Log</h3>
                <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest mt-1">Mark daily logs & view status</p>
              </div>

              {/* Month Navigation */}
              <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-xl border border-slate-200">
                <button 
                  onClick={handlePrevMonth} 
                  className="p-1.5 hover:bg-white rounded-lg text-slate-600 active:scale-90 transition-all"
                  title="Previous Month"
                >
                  <ChevronLeft size={16} />
                </button>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-800 px-2 min-w-[120px] text-center">
                  {currentMonthName}
                </span>
                <button 
                  onClick={handleNextMonth} 
                  className="p-1.5 hover:bg-white rounded-lg text-slate-600 active:scale-90 transition-all"
                  title="Next Month"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
              
              {/* Legends */}
              <div className="flex gap-3 flex-wrap">
                {[
                  { label: 'Present', color: 'bg-emerald-500' },
                  { label: 'Absent', color: 'bg-red-500' },
                  { label: 'Holiday', color: 'bg-amber-500' }
                ].map(l => (
                  <div key={l.label} className="flex items-center gap-1.5">
                    <span className={`w-2.5 h-2.5 rounded-full ${l.color}`}></span>
                    <span className="text-[8px] font-black uppercase tracking-widest text-slate-500">{l.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-4 gap-2 mb-4 bg-slate-50 p-4 rounded-2xl border border-slate-200">
              {[
                { label: 'Present', val: monthlyStats.present, color: 'text-emerald-600' },
                { label: 'Absent', val: monthlyStats.absent, color: 'text-red-600' },
                { label: 'Holiday', val: monthlyStats.holiday, color: 'text-amber-600' },
                { label: 'Month %', val: `${monthlyPercent}%`, color: 'text-blue-600' }
              ].map(s => (
                <div key={s.label} className="text-center">
                  <p className="text-[8px] font-black text-slate-400 uppercase tracking-wider leading-none mb-1">{s.label}</p>
                  <p className={`text-base font-black ${s.color}`}>{s.val}</p>
                </div>
              ))}
            </div>

            {/* Overall stats banner */}
            <div className="flex justify-between items-center px-4 py-2.5 bg-blue-50/50 rounded-2xl border border-blue-100/50 mb-6">
              <span className="text-[9px] font-black uppercase text-blue-900 tracking-wider">Overall Punch-In Attendance</span>
              <span className="text-xs font-black text-blue-700">{overallDailyPercent}% ({dailyStats.present} of {totalLogCount} days)</span>
            </div>

            {/* Calendar grid */}
            <div className="grid grid-cols-7 gap-2 text-center">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => (
                <span key={d} className="text-[8px] font-black uppercase tracking-widest text-slate-400 py-1">{d}</span>
              ))}
              
              {/* Padding for first day of month alignment */}
              {(() => {
                const year = currentDate.getFullYear();
                const month = currentDate.getMonth();
                const startDayOfWeek = new Date(year, month, 1).getDay();
                const p = [];
                for (let i = 0; i < startDayOfWeek; i++) {
                  p.push(<span key={`pad-${i}`}></span>);
                }
                return p;
              })()}

              {/* Render days */}
              {calendarDays.map(dayObj => {
                const status = dailyLog[dayObj.dateStr];
                const holidayName = getOfficialHolidayName(dayObj.dateStr);
                
                let tileColor = 'bg-slate-50 border border-slate-100 hover:bg-slate-100 text-slate-600';
                if (status === 'PRESENT') tileColor = 'bg-emerald-500 border border-emerald-600 text-white shadow-[0_4px_12px_rgba(16,185,129,0.3)]';
                else if (status === 'ABSENT') tileColor = 'bg-red-500 border border-red-600 text-white shadow-[0_4px_12px_rgba(239,68,68,0.3)]';
                else if (status === 'HOLIDAY') tileColor = 'bg-amber-500 border border-amber-600 text-white shadow-[0_4px_12px_rgba(245,158,11,0.3)]';
                else if (holidayName) tileColor = 'bg-amber-50 border border-amber-200 text-amber-600 hover:bg-amber-100/70';

                return (
                  <button
                    key={dayObj.day}
                    onClick={() => toggleDailyDate(dayObj.dateStr)}
                    className={`w-10 h-10 mx-auto rounded-xl flex flex-col items-center justify-center text-xs font-black transition-all active:scale-90 relative ${tileColor}`}
                    title={holidayName ? `Official Holiday: ${holidayName} (Click to override)` : `Date: ${dayObj.dateStr} | Status: ${status || 'Unmarked'} (Click to change)`}
                  >
                    <span>{dayObj.day}</span>
                    {holidayName && !status && <span className="absolute bottom-1 w-1 h-1 bg-amber-500 rounded-full"></span>}
                  </button>
                );
              })}
            </div>
            
            <p className="text-[7px] font-bold text-slate-400 uppercase tracking-widest text-center mt-6">
              * Tip: Tap any date tile directly in the grid to log / update attendance status manually!
            </p>
          </div>
        </div>
      )}

      {/* Tab Contents: BEU Holiday Calendar 2026 */}
      {activeTab === 'holidays' && (
        <div className="bg-white p-6 md:p-8 rounded-[3rem] border border-slate-200">
          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3 mb-8 border-b border-slate-100 pb-4">
            <div>
              <h3 className="text-xl font-black text-slate-900 uppercase tracking-tighter">BEU ADDA Holiday Calendar 2026</h3>
              <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest mt-1">Official list of Bihar Engineering College Holidays</p>
            </div>
            <div className="px-5 py-2.5 bg-amber-50 border border-amber-200/50 text-amber-700 rounded-xl text-center">
              <p className="text-[8px] font-black uppercase tracking-widest leading-none mb-1">Total Holidays</p>
              <p className="text-base font-black leading-none">
                {HOLIDAYS_2026.reduce((acc, h) => acc + h.duration, 0)} Days + {HOLIDAYS_2026.reduce((acc, h) => acc + h.sundays, 0)} Sundays
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {HOLIDAYS_2026.map((h, idx) => (
              <div key={idx} className="p-4 bg-slate-50 border border-slate-200/50 rounded-2xl flex items-center justify-between group hover:border-amber-500/20 transition-all">
                <div className="flex items-center gap-3.5 min-w-0 pr-2">
                  <div className="w-10 h-10 bg-amber-500/10 text-amber-600 rounded-xl flex items-center justify-center shrink-0 font-black text-[10px]">
                    {h.duration > 0 ? `${h.duration}d` : 'Sun'}
                  </div>
                  <div className="min-w-0">
                    <p className="text-[12px] font-black text-slate-800 uppercase truncate leading-tight">{h.name}</p>
                    <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider mt-1.5">{h.day} · {h.date}</p>
                  </div>
                </div>
                <div className="px-2.5 py-1 bg-white border border-slate-200 rounded-lg text-[9px] font-black uppercase text-slate-500 tracking-wider">
                  2026
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tip Banner */}
      <div className="bg-blue-600/5 border border-blue-500/20 p-6 md:p-8 rounded-[2.5rem] flex items-start gap-4">
        <Shield size={24} className="text-blue-500 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <h4 className="text-[11px] font-black uppercase tracking-widest text-blue-900">Academic Regulations (BEU Patna)</h4>
          <p className="text-[10px] text-blue-800 font-bold leading-relaxed uppercase tracking-tight">
            BEU regulations ke anusaar, Semester Exam me appear hone ke liye minimum 75% attendance anivarya hai. 
            Agar aapka attendance kisi subject me kam hai toh jald hi medical/application proof ke saath HOD se contact karein.
          </p>
        </div>
      </div>
    </div>
  );
}
