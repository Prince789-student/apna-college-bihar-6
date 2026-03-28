import React, { useState, useEffect } from 'react';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../context/AuthContext';
import { CalendarDays, Save } from 'lucide-react';

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const SLOTS = ['6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM', '9 PM', '10 PM'];

export default function Timetable() {
  const { user } = useAuth();
  const [schedule, setSchedule] = useState({});
  const [saved, setSaved] = useState(false);
  const [loading, setLoading] = useState(true);

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
      await updateDoc(doc(db, 'users', user.uid), { timetable: schedule });
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } catch(e) { console.error(e); }
  };

  if (loading) return <div className="flex justify-center p-20"><div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div></div>;

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <CalendarDays size={24} className="text-indigo-500" />
          <div>
            <h1 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Weekly Timetable</h1>
            <p className="text-[11px] text-slate-500">Apna weekly study schedule set karo</p>
          </div>
        </div>
        <button onClick={handleSave} className={`flex items-center gap-2 px-5 py-3 rounded-2xl font-black text-[11px] uppercase tracking-widest transition-all ${saved ? 'bg-emerald-600 text-slate-900' : 'bg-blue-600 hover:bg-blue-500 text-slate-900'}`}>
          <Save size={16} />
          {saved ? '✅ Saved!' : 'Save'}
        </button>
      </div>

      <div className="overflow-x-auto rounded-3xl border border-slate-200/50 bg-white">
        <table className="w-full min-w-[700px]">
          <thead>
            <tr className="border-b border-slate-200">
              <th className="p-4 text-[10px] font-black text-slate-500 uppercase tracking-widest text-left w-16">Time</th>
              {DAYS.map(day => (
                <th key={day} className={`p-4 text-[10px] font-black uppercase tracking-widest ${day === DAYS[new Date().getDay() === 0 ? 6 : new Date().getDay() - 1] ? 'text-blue-400' : 'text-slate-500'}`}>{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {SLOTS.map((slot, si) => (
              <tr key={slot} className={`border-b border-slate-200/30 ${si % 2 === 0 ? '' : 'bg-slate-100/20'}`}>
                <td className="p-2 pl-4 text-[10px] font-bold text-slate-600 whitespace-nowrap">{slot}</td>
                {DAYS.map(day => {
                  const key = `${day}_${slot}`;
                  return (
                    <td key={key} className="p-1">
                      <input
                        type="text"
                        maxLength={20}
                        value={schedule[key] || ''}
                        onChange={e => updateCell(day, slot, e.target.value)}
                        placeholder="—"
                        className={`w-full bg-transparent text-center text-xs font-bold text-slate-900 outline-none rounded-xl p-2 transition-all placeholder:text-slate-800 hover:bg-slate-100/50 focus:bg-slate-800 focus:ring-1 focus:ring-blue-500/50 ${schedule[key] ? 'bg-blue-600/10 text-blue-300' : ''}`}
                      />
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-[10px] text-slate-600 text-center italic">Click any cell to type your subject or activity. Click Save when done.</p>
    </div>
  );
}
