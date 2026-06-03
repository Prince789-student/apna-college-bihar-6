import React, { useState, useEffect } from 'react';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../context/AuthContext';
import { CalendarDays, Save, UserCheck, ArrowRight, Info, Trophy } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const SLOTS = ['6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM', '9 PM', '10 PM'];
const DAYS_MAP = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const BEU_MARKS_RULES = [
  { range: '75% – 80%', marks: '+1 Mark', color: 'text-yellow-600', bg: 'bg-yellow-50 border-yellow-200' },
  { range: '81% – 85%', marks: '+2 Marks', color: 'text-orange-500', bg: 'bg-orange-50 border-orange-200' },
  { range: '86% – 90%', marks: '+3 Marks', color: 'text-blue-600', bg: 'bg-blue-50 border-blue-200' },
  { range: '91% – 95%', marks: '+4 Marks', color: 'text-purple-600', bg: 'bg-purple-50 border-purple-200' },
  { range: '96% – 100%', marks: '+5 Marks', color: 'text-emerald-600', bg: 'bg-emerald-50 border-emerald-200' },
];

export default function Timetable() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [schedule, setSchedule] = useState({});
  const [saved, setSaved] = useState(false);
  const [loading, setLoading] = useState(true);

  const todayDayKey = DAYS_MAP[new Date().getDay()];

  useEffect(() => { if (user) fetchSchedule(); }, [user]);

  const fetchSchedule = async () => {
    try {
      const snap = await getDoc(doc(db, 'users', user.uid));
      if (snap.exists() && snap.data().timetable) {
        setSchedule(snap.data().timetable);
      }
    } catch(e) { console.error(e); }
    finally { setLoading(false); }
  };

  const updateCell = (day, slot, value) => {
    setSchedule(prev => ({
      ...prev,
      [`${day}_${slot}`]: value
    }));
    setSaved(false);
  };

  const handleSave = async () => {
    try {
      // 1. Collect unique subject names from filled cells
      const uniqueSubjects = new Set();
      Object.values(schedule).forEach(val => {
        if (val && val.trim()) uniqueSubjects.add(val.trim());
      });

      // 2. Load current attendance from Firestore
      const docRef = doc(db, 'users', user.uid);
      const snap = await getDoc(docRef);
      let currentAttendance = snap.exists() && snap.data().attendance
        ? snap.data().attendance
        : [];

      // 3. Merge: add new subjects that don't already exist in attendance
      const updatedAttendance = [...currentAttendance];
      let addedCount = 0;
      uniqueSubjects.forEach(subName => {
        const exists = updatedAttendance.some(
          s => s.name.trim().toLowerCase() === subName.toLowerCase()
        );
        if (!exists) {
          updatedAttendance.push({ name: subName, present: 0, total: 0 });
          addedCount++;
        }
      });

      // 4. Save timetable + merged attendance to Firestore
      await updateDoc(docRef, {
        timetable: schedule,
        attendance: updatedAttendance,
      });

      // 5. Schedule native Android daily notification (8 AM daily)
      try {
        const { Capacitor } = await import('@capacitor/core');
        if (Capacitor.isNativePlatform()) {
          const plugin = Capacitor.Plugins && Capacitor.Plugins.DailyNotificationPlugin;
          if (plugin) {
            await plugin.saveTimetableForNotification({ timetableJson: JSON.stringify(schedule) });
            await plugin.scheduleDailyNotification({ hour: 8, minute: 0 });
          }
        }
      } catch (nativeErr) {
        console.log('Native notification (web fallback):', nativeErr && nativeErr.message);
      }

      // 6. Request web notification permission if not yet granted
      if ('Notification' in window && Notification.permission === 'default') {
        const perm = await Notification.requestPermission();
        if (perm === 'granted') {
          toast.success('🔔 Daily class notifications enabled!');
        }
      }

      setSaved(true);
      if (addedCount > 0) {
        toast.success(`✅ Saved! ${addedCount} new subject${addedCount > 1 ? 's' : ''} synced to Attendance.`);
      } else {
        toast.success('✅ Timetable saved & synced!');
      }
      setTimeout(() => setSaved(false), 3000);
    } catch(e) {
      console.error(e);
      toast.error('Failed to save timetable.');
    }
  };

  // Count today's scheduled classes
  const todayClassCount = Object.entries(schedule).filter(
    ([key, val]) => key.startsWith(todayDayKey + '_') && val && val.trim()
  ).length;

  // Total filled slots
  const totalFilled = Object.values(schedule).filter(v => v && v.trim()).length;

  if (loading) return (
    <div className="flex justify-center p-20">
      <div className="w-10 h-10 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );

  return (
    <div className="space-y-6 animate-in fade-in duration-300 font-['Inter']">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 md:p-8 rounded-[2.5rem] border border-slate-200 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
          <CalendarDays size={96} />
        </div>
        <div className="flex items-center gap-4">
          <div className="p-4 bg-indigo-50 text-indigo-600 rounded-3xl border border-indigo-100 shadow-sm">
            <CalendarDays size={32} />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-[1000] text-slate-900 uppercase tracking-tighter">Weekly Timetable</h1>
            <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.3em] mt-1">
              Build schedule → Auto-sync subjects → Track attendance
            </p>
          </div>
        </div>
        <div className="flex gap-2 flex-wrap">
          <button
            onClick={() => navigate('/dashboard/attendance')}
            className="flex items-center gap-2 px-5 py-3 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-700 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all active:scale-95"
          >
            <UserCheck size={16} /> My Attendance <ArrowRight size={14} />
          </button>
          <button
            onClick={handleSave}
            className={`flex items-center gap-2 px-5 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all active:scale-95 shadow-md ${
              saved
                ? 'bg-emerald-600 text-white shadow-emerald-500/30'
                : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-500/30'
            }`}
          >
            <Save size={16} />
            {saved ? '✅ Saved & Synced!' : 'Save & Sync'}
          </button>
        </div>
      </div>

      {/* Today's class count banner */}
      {todayClassCount > 0 && (
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-4 md:p-5 rounded-[2rem] flex items-center gap-4 shadow-lg shadow-indigo-500/20">
          <div className="p-2.5 bg-white/20 rounded-xl shrink-0">
            <CalendarDays size={18} className="text-white" />
          </div>
          <div>
            <p className="text-[8px] font-black text-indigo-200 uppercase tracking-widest">
              {new Date().toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'short', year: 'numeric' })}
            </p>
            <p className="text-white font-black text-sm">
              📚 {todayClassCount} class{todayClassCount > 1 ? 'es' : ''} scheduled today — check My Attendance to log them!
            </p>
          </div>
          <button
            onClick={() => navigate('/dashboard/attendance')}
            className="ml-auto shrink-0 px-4 py-2 bg-white/20 hover:bg-white/30 border border-white/20 text-white rounded-xl text-[9px] font-black uppercase tracking-widest transition-all"
          >
            Log Now →
          </button>
        </div>
      )}

      {/* BEU Sessional Marks Rules */}
      <div className="bg-white border border-slate-200 rounded-[2.5rem] p-6 md:p-8">
        <div className="flex items-center gap-3 mb-5">
          <div className="p-2.5 bg-amber-50 text-amber-600 rounded-2xl border border-amber-100">
            <Trophy size={20} />
          </div>
          <div>
            <h3 className="text-sm font-black text-slate-900 uppercase tracking-tighter">BEU Sessional Marks Rule</h3>
            <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">Attendance % → Bonus Sessional Marks added to your score</p>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {BEU_MARKS_RULES.map((rule, idx) => (
            <div key={idx} className={`p-4 rounded-2xl border text-center ${rule.bg}`}>
              <p className={`text-sm font-black ${rule.color}`}>{rule.marks}</p>
              <p className="text-[9px] font-bold text-slate-500 mt-1">{rule.range}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 p-3.5 bg-slate-50 border border-slate-200/80 rounded-2xl flex items-start gap-2">
          <Info size={14} className="text-slate-400 mt-0.5 shrink-0" />
          <p className="text-[9px] font-bold text-slate-500 leading-relaxed">
            Subjects added here are <strong>automatically synced</strong> to <strong>My Attendance</strong>. Visit Attendance → Subject Tracker to see live BEU sessional marks eligibility per subject.
          </p>
        </div>
      </div>

      {/* Timetable Grid */}
      <div className="bg-white border border-slate-200 rounded-[2.5rem] overflow-hidden">
        <div className="p-5 md:p-6 border-b border-slate-100 flex items-center justify-between">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
            Tap any cell → Type subject name → Save & Sync
          </p>
          <span className="text-[9px] font-black text-indigo-500 uppercase tracking-widest bg-indigo-50 border border-indigo-100 px-3 py-1.5 rounded-xl">
            {totalFilled} slot{totalFilled !== 1 ? 's' : ''} filled
          </span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px]">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/50">
                <th className="p-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-left w-20">Time</th>
                {DAYS.map(day => {
                  const isToday = day === todayDayKey;
                  return (
                    <th key={day} className={`p-4 text-[10px] font-black uppercase tracking-widest ${isToday ? 'text-indigo-600 bg-indigo-50/50' : 'text-slate-500'}`}>
                      {day}
                      {isToday && <div className="text-[7px] text-indigo-400 font-black">TODAY</div>}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {SLOTS.map((slot, si) => (
                <tr key={slot} className={`border-b border-slate-200/30 ${si % 2 === 0 ? '' : 'bg-slate-50/30'}`}>
                  <td className="p-2 pl-5 text-[10px] font-black text-slate-400 whitespace-nowrap">{slot}</td>
                  {DAYS.map(day => {
                    const key = `${day}_${slot}`;
                    const isToday = day === todayDayKey;
                    const hasValue = schedule[key] && schedule[key].trim();
                    return (
                      <td key={key} className={`p-1 ${isToday ? 'bg-indigo-50/20' : ''}`}>
                        <input
                          type="text"
                          maxLength={25}
                          value={schedule[key] || ''}
                          onChange={e => updateCell(day, slot, e.target.value)}
                          placeholder="—"
                          className={`w-full text-center text-xs font-bold text-slate-900 outline-none rounded-xl p-2 transition-all placeholder:text-slate-200 hover:bg-slate-100/70 focus:ring-1 focus:ring-indigo-400/50 ${
                            hasValue
                              ? 'bg-indigo-500/10 text-indigo-700 focus:bg-indigo-50'
                              : 'bg-transparent focus:bg-indigo-50/50'
                          }`}
                        />
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <p className="text-[9px] text-slate-400 text-center font-bold uppercase tracking-widest">
        ✅ Saving will auto-add all new subjects to your Attendance tracker.
      </p>
    </div>
  );
}
