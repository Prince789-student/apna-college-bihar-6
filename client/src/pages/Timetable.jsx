import React, { useState, useEffect } from 'react';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../context/AuthContext';
import { CalendarDays, Save, UserCheck, ArrowRight, Info, Trophy, Plus, X, Clock, AlertTriangle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const DAYS_OF_WEEK = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];

export const formatTime12h = (time24) => {
  if (!time24) return '';
  const [h, m] = time24.split(':');
  let hour = parseInt(h, 10);
  const ampm = hour >= 12 ? 'PM' : 'AM';
  hour = hour % 12;
  hour = hour ? hour : 12;
  return `${hour}:${m} ${ampm}`;
};

const to24h = (h, m, ampm) => {
  let hour = parseInt(h, 10);
  if (ampm === 'PM' && hour !== 12) hour += 12;  // 1PM=13, 11PM=23
  if (ampm === 'AM' && hour === 12) hour = 0;    // 12AM=midnight=0
  // 12PM stays as 12 (correct noon)
  return `${String(hour).padStart(2, '0')}:${m}`;
};

const parse24h = (time24) => {
  if (!time24) return { h: '8', m: '00', ampm: 'AM' };
  const [hr, mn] = time24.split(':');
  let hour = parseInt(hr, 10);
  const ampm = hour >= 12 ? 'PM' : 'AM';  // 12=PM, 13=PM, 0=AM, 11=AM
  hour = hour % 12;                         // 12%12=0, 13%12=1, 0%12=0
  hour = hour === 0 ? 12 : hour;            // 0 → 12 (for both noon & midnight)
  return { h: String(hour), m: mn || '00', ampm };
};

// Add 1 hour to a 24h time string: "11:00" → "12:00", "23:00" → "23:00"
const addOneHour = (time24) => {
  if (!time24) return '09:00';
  const [hr, mn] = time24.split(':');
  let hour = parseInt(hr, 10) + 1;
  if (hour >= 24) hour = 23;
  return `${String(hour).padStart(2, '0')}:${mn}`;
};

const HOURS = ['1','2','3','4','5','6','7','8','9','10','11','12'];
const MINUTES = ['00','05','10','15','20','25','30','35','40','45','50','55'];

function TimePickerAMPM({ value, onChange, isToday, label }) {
  const { h, m, ampm } = parse24h(value);
  const sel = `text-[10px] font-black border outline-none rounded-lg px-1.5 py-1 cursor-pointer transition-all appearance-none text-center ${
    isToday ? 'bg-white border-indigo-200 focus:border-indigo-500 text-indigo-700' : 'bg-white border-slate-200 focus:border-slate-400 text-slate-700'
  }`;
  const update = (newH, newM, newAmpm) => onChange(to24h(newH, newM, newAmpm));

  const handleHourChange = (newH) => {
    // Auto-switch AM↔PM at 12:
    // If user picks 12 while in AM → switch to PM (noon, not midnight)
    // If user picks 1-11 while in PM → keep PM (1PM, 2PM... not AM)
    let autoAmpm = ampm;
    if (newH === '12' && ampm === 'AM') autoAmpm = 'PM';
    update(newH, m, autoAmpm);
  };

  return (
    <div className="flex flex-col gap-0.5">
      <span className={`text-[8px] font-black uppercase tracking-widest ${isToday ? 'text-indigo-400' : 'text-slate-400'}`}>{label}</span>
      <div className="flex items-center gap-0.5">
        <select value={h} onChange={e => handleHourChange(e.target.value)} className={sel} style={{width:'36px'}}>
          {HOURS.map(hr => <option key={hr} value={hr}>{hr}</option>)}
        </select>
        <span className="text-slate-400 font-black text-xs">:</span>
        <select value={m} onChange={e => update(h, e.target.value, ampm)} className={sel} style={{width:'38px'}}>
          {MINUTES.map(mn => <option key={mn} value={mn}>{mn}</option>)}
        </select>
        <select value={ampm} onChange={e => update(h, m, e.target.value)} className={sel} style={{width:'40px'}}>
          <option value="AM">AM</option>
          <option value="PM">PM</option>
        </select>
      </div>
    </div>
  );
}

export default function Timetable() {
  const { user } = useAuth();
  const navigate = useNavigate();
  // Using timetableV3 for the simplified manual input structure
  const [schedule, setSchedule] = useState({
    MONDAY: [], TUESDAY: [], WEDNESDAY: [], THURSDAY: [], FRIDAY: [], SATURDAY: []
  });
  const [saved, setSaved] = useState(false);
  const [loading, setLoading] = useState(true);

  const todayIndex = new Date().getDay(); // 0 is Sunday, 1 is Monday
  const todayName = todayIndex >= 1 && todayIndex <= 6 ? DAYS_OF_WEEK[todayIndex - 1] : '';

  useEffect(() => {
    if (user) {
      fetchSchedule();
    } else {
      setLoading(false);
    }
  }, [user]);

  const fetchSchedule = async () => {
    try {
      const snap = await getDoc(doc(db, 'users', user.uid));
      if (snap.exists() && snap.data().timetableV3) {
        setSchedule(snap.data().timetableV3);
      } else if (snap.exists() && snap.data().timetableV2) {
        // Simple migration from V2 to V3 if exists
        const v2 = snap.data().timetableV2;
        const v3 = {};
        DAYS_OF_WEEK.forEach(day => {
          v3[day] = (v2[day] || []).map(c => ({
            id: c.id || crypto.randomUUID(),
            timeSlot: `${c.startTime} - ${c.endTime}`,
            subject: c.subject
          }));
        });
        setSchedule(v3);
      }
    } catch(e) { console.error(e); }
    finally { setLoading(false); }
  };

  const handleSave = async () => {
    try {
      // Collect unique subjects for Attendance Sync
      const uniqueSubjects = new Set();
      Object.values(schedule).flat().forEach(cls => {
        if (cls.subject && cls.subject.trim() && !cls.isRecess && cls.subject.toUpperCase() !== 'LUNCH / RECESS') {
          uniqueSubjects.add(cls.subject.trim());
        }
      });

      const docRef = doc(db, 'users', user.uid);
      const snap = await getDoc(docRef);
      let currentAttendance = snap.exists() && snap.data().attendance ? snap.data().attendance : [];
      
      const updatedAttendance = [...currentAttendance];
      let addedCount = 0;
      uniqueSubjects.forEach(subName => {
        const exists = updatedAttendance.some(s => s.name.trim().toLowerCase() === subName.toLowerCase());
        if (!exists) {
          updatedAttendance.push({ name: subName, present: 0, total: 0 });
          addedCount++;
        }
      });

      await updateDoc(docRef, {
        timetableV3: schedule,
        attendance: updatedAttendance
      });

      // Notification logic for Native Android
      try {
        const { Capacitor } = await import('@capacitor/core');
        if (Capacitor.isNativePlatform()) {
          const plugin = Capacitor.Plugins && Capacitor.Plugins.DailyNotificationPlugin;
          if (plugin) {
            await plugin.saveTimetableForNotification({ timetableJson: JSON.stringify(schedule) });
            await plugin.scheduleDailyNotification({ hour: 8, minute: 0 });
          }
        }
      } catch (e) {}

      setSaved(true);
      if (addedCount > 0) {
        toast.success(`✅ Saved! ${addedCount} new subjects synced to Attendance.`);
      } else {
        toast.success('✅ Timetable saved & synced!');
      }
      setTimeout(() => setSaved(false), 3000);
    } catch(e) {
      console.error(e);
      toast.error('Failed to save timetable.');
    }
  };

  const addClass = (day) => {
    const newSchedule = { ...schedule };
    if (!newSchedule[day]) newSchedule[day] = [];
    
    // Auto-fill: next class starts where the last one ended
    const dayClasses = newSchedule[day];
    let defaultStart = '08:00';
    if (dayClasses.length > 0) {
      const lastClass = dayClasses[dayClasses.length - 1];
      if (lastClass.endTime) {
        defaultStart = lastClass.endTime; // next start = previous end
      }
    }
    const defaultEnd = addOneHour(defaultStart); // end = start + 1 hr
    
    newSchedule[day].push({ 
      id: Date.now().toString(), 
      startTime: defaultStart, 
      endTime: defaultEnd, 
      subject: '',
      facultyName: '',
      roomNumber: '',
      isRecess: false
    });
    setSchedule(newSchedule);
    setSaved(false);
  };

  const updateClass = (day, id, field, value) => {
    const newSchedule = { ...schedule };
    newSchedule[day] = newSchedule[day].map(c => c.id === id ? { ...c, [field]: value } : c);
    setSchedule(newSchedule);
    setSaved(false);
  };

  const deleteClass = (day, id) => {
    const newSchedule = { ...schedule };
    newSchedule[day] = newSchedule[day].filter(c => c.id !== id);
    setSchedule(newSchedule);
    setSaved(false);
  };

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
            <h1 className="text-2xl md:text-3xl font-[1000] text-slate-900 uppercase tracking-tighter">BEU Timetable</h1>
            <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.3em] mt-1">
              Add your classes → Auto-sync to Attendance
            </p>
          </div>
        </div>
        <div className="flex gap-2 flex-wrap">
          <button
            onClick={() => navigate('/attendance')}
            className="flex items-center gap-2 px-5 py-3 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-700 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all active:scale-95"
          >
            <UserCheck size={16} /> Mark Attendance <ArrowRight size={14} />
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

      <div className="bg-white border border-slate-200 rounded-[2.5rem] p-6 md:p-8">
        <div className="flex items-start gap-3 mb-6">
           <Info size={18} className="text-indigo-500 shrink-0 mt-0.5" />
           <p className="text-xs font-bold text-slate-500 leading-relaxed">
             Select your class start time and end time using the clock. 
             All subjects you add here will automatically appear in your Attendance Tracker.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {DAYS_OF_WEEK.map(day => {
            const isToday = day === todayName;
            const classes = schedule[day] || [];

            return (
              <div key={day} className={`rounded-3xl border p-4 md:p-5 transition-all ${isToday ? 'bg-indigo-50/30 border-indigo-200' : 'bg-slate-50 border-slate-100'}`}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className={`font-[1000] text-sm uppercase tracking-widest ${isToday ? 'text-indigo-600' : 'text-slate-700'}`}>
                    {day}
                  </h3>
                  {isToday && <span className="text-[9px] font-black bg-indigo-100 text-indigo-600 px-2.5 py-1 rounded-lg uppercase tracking-widest">Today</span>}
                </div>

                <div className="space-y-3">
                  {classes.length === 0 ? (
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center py-4">No Classes</p>
                  ) : (
                    classes.map((cls, idx) => (
                      <div key={cls.id} className="flex gap-2.5 relative group items-start bg-white p-3 rounded-2xl border border-slate-200/50 shadow-sm">
                        <div className="flex flex-col gap-1.5 flex-shrink-0">
                          <TimePickerAMPM
                            label="Start"
                            value={cls.startTime || '08:00'}
                            isToday={isToday}
                            onChange={(val) => updateClass(day, cls.id, 'startTime', val)}
                          />
                          <TimePickerAMPM
                            label="End"
                            value={cls.endTime || '09:00'}
                            isToday={isToday}
                            onChange={(val) => updateClass(day, cls.id, 'endTime', val)}
                          />
                        </div>
                        <div className="flex-1 flex flex-col gap-2">
                          <div className="flex items-center justify-between gap-2">
                            <label className="flex items-center gap-1.5 cursor-pointer shrink-0">
                              <input
                                type="checkbox"
                                checked={cls.isRecess || false}
                                onChange={(e) => {
                                  const checked = e.target.checked;
                                  updateClass(day, cls.id, 'isRecess', checked);
                                  if (checked) {
                                    updateClass(day, cls.id, 'subject', 'LUNCH / RECESS');
                                    updateClass(day, cls.id, 'facultyName', '');
                                    updateClass(day, cls.id, 'roomNumber', '');
                                  } else {
                                    updateClass(day, cls.id, 'subject', '');
                                  }
                                }}
                                className="w-3.5 h-3.5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                              />
                              <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Lunch/Recess</span>
                            </label>
                            <button 
                              onClick={() => deleteClass(day, cls.id)}
                              className="p-1 text-slate-300 hover:text-red-500 transition-colors rounded-md hover:bg-red-50"
                            >
                              <X size={14} />
                            </button>
                          </div>
                          
                          <div className="relative flex items-center">
                            <input 
                              type="text"
                              placeholder={cls.isRecess ? "LUNCH / RECESS" : "Subject Name"}
                              value={cls.subject}
                              disabled={cls.isRecess}
                              onChange={(e) => updateClass(day, cls.id, 'subject', e.target.value)}
                              className={`w-full text-xs font-bold px-3 py-2 rounded-xl border outline-none transition-all pr-8 ${isToday ? 'bg-white border-indigo-100 focus:border-indigo-400' : 'bg-white border-slate-200 focus:border-slate-400'}`}
                            />
                          </div>

                          {!cls.isRecess && (
                            <div className="grid grid-cols-2 gap-2 animate-in fade-in duration-200">
                              <div className="flex flex-col gap-0.5">
                                <span className="text-[8px] font-black uppercase tracking-wider text-slate-400">Faculty</span>
                                <input 
                                  type="text"
                                  placeholder="Faculty Name"
                                  value={cls.facultyName || ''}
                                  onChange={(e) => updateClass(day, cls.id, 'facultyName', e.target.value)}
                                  className={`w-full text-[10px] font-bold px-2.5 py-1.5 rounded-lg border outline-none transition-all ${isToday ? 'bg-white border-indigo-100 focus:border-indigo-400' : 'bg-white border-slate-200 focus:border-slate-400'}`}
                                />
                              </div>
                              <div className="flex flex-col gap-0.5">
                                <span className="text-[8px] font-black uppercase tracking-wider text-slate-400">Room</span>
                                <input 
                                  type="text"
                                  placeholder="Room Number"
                                  value={cls.roomNumber || ''}
                                  onChange={(e) => updateClass(day, cls.id, 'roomNumber', e.target.value)}
                                  className={`w-full text-[10px] font-bold px-2.5 py-1.5 rounded-lg border outline-none transition-all ${isToday ? 'bg-white border-indigo-100 focus:border-indigo-400' : 'bg-white border-slate-200 focus:border-slate-400'}`}
                                />
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    ))
                  )}

                  <button 
                    onClick={() => addClass(day)}
                    className={`w-full py-2.5 flex items-center justify-center gap-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border border-dashed ${
                      isToday 
                        ? 'border-indigo-300 text-indigo-600 hover:bg-indigo-100' 
                        : 'border-slate-300 text-slate-500 hover:bg-slate-100 hover:text-slate-700'
                    }`}
                  >
                    <Plus size={14} /> Add Class
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Educational SEO Content ── */}
      <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-200/50 mt-12 max-w-4xl mx-auto prose prose-slate max-w-none shadow-sm mb-12 relative z-20">
        <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tighter mb-4">BEU B.Tech Timetable & Schedule Organizer</h2>
        <p>
          Managing your daily engineering classes is essential for staying on top of your academic performance. The <strong>BEU B.Tech Timetable Organizer</strong> is designed specifically for students of Bihar Engineering University to digitally manage their weekly class schedules, recess breaks, and faculty details.
        </p>

        <h3 className="text-xl font-bold mt-8 mb-4">How to Setup Your College Timetable?</h3>
        <ul>
          <li><strong>Step 1:</strong> Select a specific day (Monday to Saturday) to view or edit the schedule.</li>
          <li><strong>Step 2:</strong> Click on <strong>Add Class</strong> to insert a new lecture slot or lab session.</li>
          <li><strong>Step 3:</strong> Enter the subject name, faculty, room number, and time. You can also mark a slot as <em>Recess/Break</em>.</li>
          <li><strong>Step 4:</strong> Click the <strong>Save Timetable</strong> button to securely store your schedule in the cloud.</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">Why is a Digital Timetable Important?</h3>
        <p>
          Keeping track of lab sessions, theory classes, and tutorials can be overwhelming. By creating a digital timetable, you can seamlessly integrate your daily routine with the <strong>Attendance Tracker</strong>. When your timetable is set, the system automatically pulls today's subjects so you can punch in your attendance with a single click, helping you easily maintain the mandatory 75% attendance required by BEU Patna.
        </p>
      </div>

    </div>
  );
}
