import React, { useState, useEffect } from 'react';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../context/AuthContext';
import { Bell, ChevronDown, ChevronUp, AlertTriangle, Plus, X, Clock, MapPin, Tag, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const DAYS_OF_WEEK = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];

// Utility to generate time slots for dropdowns
const TIME_OPTIONS = [];
for (let i = 6; i <= 21; i++) {
  const period = i >= 12 ? 'PM' : 'AM';
  const hour = i > 12 ? i - 12 : (i === 0 ? 12 : i);
  const formattedHour = hour < 10 ? `0${hour}` : hour;
  TIME_OPTIONS.push(`${formattedHour}:00 ${period}`);
  TIME_OPTIONS.push(`${formattedHour}:15 ${period}`);
  TIME_OPTIONS.push(`${formattedHour}:30 ${period}`);
  TIME_OPTIONS.push(`${formattedHour}:45 ${period}`);
}

export default function Timetable() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [schedule, setSchedule] = useState({
    MONDAY: [], TUESDAY: [], WEDNESDAY: [], THURSDAY: [], FRIDAY: [], SATURDAY: []
  });
  const [loading, setLoading] = useState(true);
  const [expandedDay, setExpandedDay] = useState('');
  
  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeDay, setActiveDay] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    startTime: '10:00 AM',
    endTime: '11:00 AM',
    isBreak: false,
    subject: '',
    room: '',
    type: 'CLASS LECTURE',
    isImportant: false
  });

  const todayIndex = new Date().getDay(); // 0 is Sunday, 1 is Monday
  const todayName = todayIndex >= 1 && todayIndex <= 6 ? DAYS_OF_WEEK[todayIndex - 1] : '';

  useEffect(() => {
    if (user) {
      fetchSchedule();
      if (todayName) setExpandedDay(todayName);
    }
  }, [user]);

  const fetchSchedule = async () => {
    try {
      const snap = await getDoc(doc(db, 'users', user.uid));
      if (snap.exists() && snap.data().timetableV2) {
        setSchedule(snap.data().timetableV2);
      }
    } catch(e) { console.error(e); }
    finally { setLoading(false); }
  };

  const handleSaveToCloud = async (newSchedule) => {
    try {
      // Collect unique subjects for Attendance Sync
      const uniqueSubjects = new Set();
      Object.values(newSchedule).flat().forEach(cls => {
        if (!cls.isBreak && cls.subject.trim()) {
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
        timetableV2: newSchedule,
        attendance: updatedAttendance
      });

      // Notification logic
      try {
        const { Capacitor } = await import('@capacitor/core');
        if (Capacitor.isNativePlatform()) {
          const plugin = Capacitor.Plugins && Capacitor.Plugins.DailyNotificationPlugin;
          if (plugin) {
            await plugin.saveTimetableForNotification({ timetableJson: JSON.stringify(newSchedule) });
            await plugin.scheduleDailyNotification({ hour: 8, minute: 0 });
          }
        }
      } catch (e) {}

      if (addedCount > 0) {
        toast.success(`${addedCount} new subjects synced to Attendance!`, { icon: '✅', style: { background: '#0a1128', color: '#fff' } });
      } else {
        toast.success('Timetable saved!', { style: { background: '#0a1128', color: '#fff' } });
      }
    } catch(e) {
      toast.error('Failed to save timetable');
    }
  };

  const openModal = (day, cls = null) => {
    setActiveDay(day);
    if (cls) {
      setEditingId(cls.id);
      setFormData(cls);
    } else {
      setEditingId(null);
      setFormData({
        startTime: '10:00 AM',
        endTime: '11:00 AM',
        isBreak: false,
        subject: '',
        room: '',
        type: 'CLASS LECTURE',
        isImportant: false
      });
    }
    setIsModalOpen(true);
  };

  const saveClass = () => {
    if (!formData.isBreak && !formData.subject.trim()) {
      toast.error('Please enter a subject name');
      return;
    }
    
    const newSchedule = { ...schedule };
    if (!newSchedule[activeDay]) newSchedule[activeDay] = [];
    
    if (editingId) {
      newSchedule[activeDay] = newSchedule[activeDay].map(c => c.id === editingId ? { ...formData, id: editingId } : c);
    } else {
      newSchedule[activeDay].push({ ...formData, id: Date.now().toString() });
    }
    
    // Sort classes by start time roughly
    newSchedule[activeDay].sort((a, b) => TIME_OPTIONS.indexOf(a.startTime) - TIME_OPTIONS.indexOf(b.startTime));
    
    setSchedule(newSchedule);
    handleSaveToCloud(newSchedule);
    setIsModalOpen(false);
  };

  const deleteClass = (day, id) => {
    const newSchedule = { ...schedule };
    newSchedule[day] = newSchedule[day].filter(c => c.id !== id);
    setSchedule(newSchedule);
    handleSaveToCloud(newSchedule);
  };

  if (loading) return <div className="flex justify-center p-20"><div className="w-10 h-10 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div></div>;

  return (
    <div className="bg-[#050B14] min-h-[calc(100vh-100px)] -m-4 md:-m-6 lg:-m-8 p-4 md:p-8 font-['Inter'] text-slate-300">
      <div className="max-w-2xl mx-auto space-y-4 md:space-y-6">
        
        {/* Header */}
        <div className="text-center mb-6 md:mb-8 pt-4">
          <h1 className="text-xl md:text-2xl font-[1000] text-cyan-400 uppercase tracking-widest mb-4">Class Time Table</h1>
          <button 
             onClick={() => navigate('/dashboard/attendance')}
             className="w-full bg-[#111A2C] border border-[#1E293B] hover:border-cyan-500/50 text-amber-400 font-bold text-xs uppercase tracking-widest py-3 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95"
          >
            <Bell size={14} /> Mark Attendance & Notify
          </button>
        </div>

        {/* Days Accordion */}
        <div className="space-y-3">
          {DAYS_OF_WEEK.map(day => {
            const isToday = day === todayName;
            const isExpanded = expandedDay === day;
            const classes = schedule[day] || [];
            
            return (
              <div key={day} className={`border ${isExpanded || isToday ? 'border-cyan-500/30 bg-[#0B1221]' : 'border-[#1E293B] bg-[#0A111C]'} rounded-2xl overflow-hidden transition-all duration-300`}>
                <button 
                  onClick={() => setExpandedDay(isExpanded ? '' : day)}
                  className="w-full flex items-center justify-between p-4 md:p-5"
                >
                  <div className="flex items-center gap-3">
                    <span className={`font-black text-sm uppercase tracking-widest ${isExpanded || isToday ? 'text-cyan-400' : 'text-slate-400'}`}>{day}</span>
                  </div>
                  <div className="flex items-center gap-2 md:gap-3">
                    {isToday && <span className="bg-cyan-500 text-black text-[9px] font-black px-2 py-0.5 rounded uppercase tracking-widest">Today</span>}
                    {!isExpanded && (
                      <span className="bg-[#1E293B] text-slate-400 text-[8px] md:text-[9px] font-black px-2 md:px-3 py-1 rounded-full uppercase tracking-widest">
                        {classes.length === 0 ? 'No Classes' : `${classes.length} Class${classes.length > 1 ? 'es' : ''}`}
                      </span>
                    )}
                    {isExpanded ? <ChevronUp size={16} className="text-cyan-400 shrink-0" /> : <ChevronDown size={16} className="text-slate-600 shrink-0" />}
                  </div>
                </button>
                
                {isExpanded && (
                  <div className="p-4 md:p-5 pt-0 space-y-3">
                    {classes.length === 0 ? (
                      <p className="text-center text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest py-6">No classes added</p>
                    ) : (
                      <div className="space-y-3">
                        {classes.map(cls => (
                          <div key={cls.id} className="bg-[#111A2C] border border-[#1E293B] p-4 rounded-xl relative group">
                            <button onClick={(e) => { e.stopPropagation(); deleteClass(day, cls.id); }} className="absolute top-3 right-3 text-slate-500 hover:text-red-400 p-1 rounded-lg">
                               <X size={14} />
                            </button>
                            <div className="flex items-center gap-3 mb-2" onClick={() => openModal(day, cls)}>
                              <div className="flex items-center gap-1.5 text-[10px] font-black text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-lg cursor-pointer">
                                <Clock size={12} /> {cls.startTime} - {cls.endTime}
                              </div>
                              {cls.isImportant && <span className="text-[9px] font-black bg-amber-500/10 text-amber-500 px-2 py-1 rounded-lg uppercase tracking-widest">Important</span>}
                            </div>
                            <div className="cursor-pointer" onClick={() => openModal(day, cls)}>
                              <h3 className={`text-sm md:text-base font-black uppercase tracking-wide pr-6 ${cls.isBreak ? 'text-amber-400' : 'text-slate-200'}`}>
                                {cls.isBreak ? (cls.subject || 'Break / Lunch') : cls.subject}
                              </h3>
                              {!cls.isBreak && (
                                <div className="flex flex-wrap items-center gap-3 md:gap-4 mt-2 text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                                  {cls.room && <span className="flex items-center gap-1"><MapPin size={10}/> {cls.room}</span>}
                                  {cls.type && <span className="flex items-center gap-1"><Tag size={10}/> {cls.type}</span>}
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                    <button 
                      onClick={() => openModal(day)}
                      className="w-full mt-2 bg-transparent border border-dashed border-[#1E293B] hover:border-cyan-500/50 text-slate-400 hover:text-cyan-400 font-black text-[10px] uppercase tracking-widest py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all"
                    >
                      <Plus size={14} /> Add Class
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer actions */}
        <div className="pt-4 md:pt-6 pb-20 md:pb-0">
          <button className="w-full bg-[#111A2C] border border-[#1E293B] text-slate-400 font-bold text-[10px] md:text-xs uppercase tracking-widest p-4 rounded-2xl flex items-center justify-between">
            <span className="flex items-center gap-2"><AlertTriangle size={14} className="text-cyan-500" /> Fix Delayed Notifications</span>
            <ChevronDown size={14} />
          </button>
        </div>
      </div>

      {/* Add Class Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0B1221] border border-cyan-500/30 w-full max-w-md rounded-[2rem] shadow-2xl shadow-cyan-900/20 overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="p-6 md:p-8 space-y-5 md:space-y-6">
              <h2 className="text-lg md:text-xl font-[1000] text-cyan-400 uppercase tracking-widest">Add Class</h2>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[9px] font-black text-cyan-400 uppercase tracking-widest">Start Time</label>
                  <select 
                    value={formData.startTime}
                    onChange={e => setFormData({...formData, startTime: e.target.value})}
                    className="w-full bg-[#111A2C] border border-[#1E293B] text-slate-200 rounded-xl p-3 text-[10px] md:text-xs font-bold outline-none focus:border-cyan-500/50"
                  >
                    {TIME_OPTIONS.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] font-black text-cyan-400 uppercase tracking-widest">End Time</label>
                  <select 
                    value={formData.endTime}
                    onChange={e => setFormData({...formData, endTime: e.target.value})}
                    className="w-full bg-[#111A2C] border border-[#1E293B] text-slate-200 rounded-xl p-3 text-[10px] md:text-xs font-bold outline-none focus:border-cyan-500/50"
                  >
                    {TIME_OPTIONS.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
              </div>

              <label className="flex items-center gap-3 cursor-pointer group">
                <div className={`w-4 h-4 rounded border flex items-center justify-center transition-all ${formData.isBreak ? 'bg-cyan-500 border-cyan-500' : 'bg-transparent border-[#1E293B] group-hover:border-cyan-500/50'}`}>
                  {formData.isBreak && <Check size={10} className="text-black font-black"/>}
                </div>
                <input type="checkbox" className="hidden" checked={formData.isBreak} onChange={e => setFormData({...formData, isBreak: e.target.checked})} />
                <span className="text-[10px] md:text-xs font-bold text-slate-300">This is a Break / Lunch Time</span>
              </label>

              <div className="space-y-2">
                <label className="text-[9px] font-black text-cyan-400 uppercase tracking-widest">Subject / Lab Name</label>
                <input 
                  type="text"
                  placeholder="e.g. Mathematics-II / Python Lab"
                  value={formData.subject}
                  onChange={e => setFormData({...formData, subject: e.target.value})}
                  className="w-full bg-[#111A2C] border border-[#1E293B] text-slate-200 rounded-xl p-3 text-[10px] md:text-xs font-bold outline-none focus:border-cyan-500/50 placeholder:text-slate-600"
                />
              </div>

              {!formData.isBreak && (
                <>
                  <div className="space-y-2">
                    <label className="text-[9px] font-black text-cyan-400 uppercase tracking-widest">Room No. / Teacher (Optional)</label>
                    <input 
                      type="text"
                      placeholder="e.g. Room No. 308 / Dharmendra Sir"
                      value={formData.room}
                      onChange={e => setFormData({...formData, room: e.target.value})}
                      className="w-full bg-[#111A2C] border border-[#1E293B] text-slate-200 rounded-xl p-3 text-[10px] md:text-xs font-bold outline-none focus:border-cyan-500/50 placeholder:text-slate-600"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[9px] font-black text-cyan-400 uppercase tracking-widest">Subject Type</label>
                    <div className="flex bg-[#111A2C] rounded-xl border border-[#1E293B] overflow-hidden p-1">
                      <button 
                        onClick={() => setFormData({...formData, type: 'CLASS LECTURE'})}
                        className={`flex-1 text-[9px] md:text-[10px] font-black uppercase tracking-widest py-2.5 rounded-lg transition-all ${formData.type === 'CLASS LECTURE' ? 'bg-cyan-500 text-black shadow-md' : 'text-slate-500 hover:text-slate-300'}`}
                      >
                        Class Lecture
                      </button>
                      <button 
                        onClick={() => setFormData({...formData, type: 'PRACTICAL / LAB'})}
                        className={`flex-1 text-[9px] md:text-[10px] font-black uppercase tracking-widest py-2.5 rounded-lg transition-all ${formData.type === 'PRACTICAL / LAB' ? 'bg-cyan-500 text-black shadow-md' : 'text-slate-500 hover:text-slate-300'}`}
                      >
                        Practical / Lab
                      </button>
                    </div>
                  </div>
                </>
              )}

              <label className="flex items-center gap-3 cursor-pointer group pt-2">
                <div className={`w-4 h-4 rounded border flex items-center justify-center transition-all ${formData.isImportant ? 'bg-amber-500 border-amber-500' : 'bg-transparent border-[#1E293B] group-hover:border-amber-500/50'}`}>
                  {formData.isImportant && <Check size={10} className="text-black font-black"/>}
                </div>
                <input type="checkbox" className="hidden" checked={formData.isImportant} onChange={e => setFormData({...formData, isImportant: e.target.checked})} />
                <span className="text-[10px] md:text-xs font-bold text-slate-300">Mark as Important</span>
              </label>

              <div className="flex gap-4 pt-2 md:pt-4">
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 bg-transparent border border-[#1E293B] hover:bg-[#1E293B] text-slate-400 text-[10px] font-black uppercase tracking-widest py-3.5 rounded-xl transition-all"
                >
                  Cancel
                </button>
                <button 
                  onClick={saveClass}
                  className="flex-1 bg-cyan-400 hover:bg-cyan-300 text-black shadow-[0_0_20px_rgba(34,211,238,0.3)] text-[10px] font-black uppercase tracking-widest py-3.5 rounded-xl transition-all"
                >
                  Save
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
}
