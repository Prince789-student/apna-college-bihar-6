import React, { useState, useEffect } from 'react';
import { UserCheck, Plus, Minus, RotateCcw, Shield } from 'lucide-react';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';

export default function Attendance() {
  const { user } = useAuth();
  const [subjects, setSubjects] = useState([
    { name: 'Mathematics', present: 0, total: 0 },
    { name: 'Physics', present: 0, total: 0 },
    { name: 'Computer Science', present: 0, total: 0 },
  ]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) fetchAttendance();
  }, [user]);

  const fetchAttendance = async () => {
    try {
      const snap = await getDoc(doc(db, 'users', user.uid));
      if (snap.exists() && snap.data().attendance) {
        setSubjects(snap.data().attendance);
      }
    } catch (e) { console.error(e); }
    finally { setLoading(false); }
  };

  const saveAttendance = async (newSubjects) => {
    try {
      await updateDoc(doc(db, 'users', user.uid), { attendance: newSubjects });
    } catch (e) { console.error(e); }
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
    toast.success('Attendance Updated');
  };

  const addSubject = () => {
    const name = prompt('Enter Subject Name:');
    if (name) {
      const newSubjects = [...subjects, { name, present: 0, total: 0 }];
      setSubjects(newSubjects);
      saveAttendance(newSubjects);
    }
  };

  if (loading) return <div className="flex justify-center p-20"><div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div></div>;

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex items-center justify-between bg-white p-8 rounded-[3rem] border border-slate-200 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-5"><UserCheck size={64}/></div>
        <div className="flex items-center gap-4">
          <div className="p-4 bg-emerald-600/10 text-emerald-600 rounded-3xl">
            <UserCheck size={32} />
          </div>
          <div>
            <h1 className="text-3xl font-[1000] text-slate-900 uppercase tracking-tighter">Attendance Tracker</h1>
            <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.3em] mt-1">Goal: 75% Attendance Required</p>
          </div>
        </div>
        <button onClick={addSubject} className="p-4 bg-slate-900 text-white rounded-2xl flex items-center gap-2 text-[10px] font-black uppercase tracking-widest active:scale-95 transition-all">
          <Plus size={18} /> Add Subject
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subjects.map((s, i) => {
          const percent = s.total > 0 ? ((s.present / s.total) * 100).toFixed(1) : 0;
          const isDanger = percent < 75 && s.total > 0;

          return (
            <div key={i} className="bg-white border border-slate-200 p-8 rounded-[3rem] shadow-sm hover:shadow-xl transition-all relative overflow-hidden group">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl font-black text-slate-900 uppercase tracking-tighter mb-1">{s.name}</h3>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{s.present} / {s.total} Lectures</p>
                </div>
                <div className={`px-4 py-2 rounded-2xl text-[12px] font-black ${isDanger ? 'bg-red-50 text-red-600' : 'bg-emerald-50 text-emerald-600'}`}>
                  {percent}%
                </div>
              </div>

              {/* Progress Bar */}
              <div className="h-3 bg-slate-100 rounded-full mb-8 overflow-hidden">
                <div 
                  className={`h-full transition-all duration-700 ${isDanger ? 'bg-red-500' : 'bg-emerald-500'}`}
                  style={{ width: `${percent}%` }}
                ></div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button 
                  onClick={() => updateAttendance(i, 'present')}
                  className="flex items-center justify-center gap-2 py-4 bg-emerald-600 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest active:scale-95 transition-all"
                >
                  <Plus size={16} /> Present
                </button>
                <button 
                  onClick={() => updateAttendance(i, 'absent')}
                  className="flex items-center justify-center gap-2 py-4 bg-red-600 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest active:scale-95 transition-all"
                >
                  <Minus size={16} /> Absent
                </button>
              </div>

              <button 
                onClick={() => updateAttendance(i, 'reset')}
                className="w-full mt-4 flex items-center justify-center gap-2 py-2 text-slate-400 hover:text-slate-600 text-[8px] font-black uppercase tracking-widest transition-all"
              >
                <RotateCcw size={12} /> Reset Data
              </button>
            </div>
          );
        })}
      </div>

      <div className="bg-blue-600/5 border border-blue-500/20 p-8 rounded-[3rem] flex items-start gap-4">
        <Shield size={24} className="text-blue-500 shrink-0" />
        <p className="text-[11px] text-blue-900 font-medium leading-relaxed uppercase tracking-tight">
          <strong>Tip:</strong> Bihar Engineering University regulations ke anusar, 75% attendance mandatory hai exam mein baithne ke liye. Is tracker ka use karke apne safe zones maintain karein.
        </p>
      </div>
    </div>
  );
}
