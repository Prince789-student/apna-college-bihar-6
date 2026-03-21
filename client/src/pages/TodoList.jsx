import React, { useState, useEffect } from 'react';
import { collection, query, where, getDocs, addDoc, updateDoc, deleteDoc, doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../context/AuthContext';
import { 
  Plus, CheckCircle2, Circle, Trash2, ClipboardList, 
  Target, Zap, TrendingUp, Clock, CalendarDays, Rocket
} from 'lucide-react';
import { toast } from 'react-hot-toast';

export default function TodoList() {
  const { user } = useAuth();
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    const today = new Date().toISOString().split('T')[0];
    const q = query(collection(db, 'Tasks'), where('userId', '==', user.uid), where('date', '==', today));
    const unsub = onSnapshot(q, (snap) => {
      setTasks(snap.docs.map(d => ({ id: d.id, ...d.data() })));
      setLoading(false);
    });
    return () => unsub();
  }, [user]);

  const addTask = async () => {
    const text = newTask.trim();
    if (!text || tasks.length >= 12) {
      if(tasks.length >= 12) toast.error('Daily Task Buffer Full');
      return;
    }
    try {
      const today = new Date().toISOString().split('T')[0];
      await addDoc(collection(db, 'Tasks'), {
        userId: user.uid, text, done: false, date: today,
        createdAt: new Date().toISOString()
      });
      setNewTask('');
      toast.success('Task Vector Initialized');
    } catch(e) { toast.error('Transmission Error'); }
  };

  const toggleTask = async (task) => {
    try {
      await updateDoc(doc(db, 'Tasks', task.id), { done: !task.done });
      toast.success(task.done ? 'Task Re-opened' : 'Objective Secured');
    } catch(e) { toast.error('Sync Error'); }
  };

  const deleteTask = async (id) => {
    try {
      await deleteDoc(doc(db, 'Tasks', id));
      toast.success('Vector Expunged');
    } catch(e) { toast.error('Deletion Failed'); }
  };

  const completed = tasks.filter(t => t.done).length;
  const total = tasks.length;
  const progress = total > 0 ? Math.round((completed / total) * 100) : 0;

  if (loading) return (
     <div className="min-h-screen flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
     </div>
  );

  return (
    <div className="max-w-4xl mx-auto space-y-10 animate-in fade-in duration-700 pb-20 px-4 md:px-0">
      
      {/* ─── HEADER ──────────────────────────────────────────────── */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-10">
         <div className="space-y-1.5 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-[1000] tracking-tighter uppercase text-white leading-none">
              Daily <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 font-black">Plan</span>
            </h1>
            <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.4em]">Strategic Objective Tracking / {new Date().toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long' })}</p>
         </div>
         <div className="flex bg-[#0d121f] p-4 rounded-[2rem] border border-slate-800 shadow-xl items-center gap-6">
            <div className="space-y-1.5">
               <div className="flex justify-between text-[9px] font-black uppercase tracking-widest text-slate-500">
                  <span>Core completion</span>
                  <span className="text-blue-400">{progress}%</span>
               </div>
               <div className="w-40 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-600 rounded-full transition-all duration-700 shadow-[0_0_10px_rgba(37,99,235,0.5)]" style={{ width: `${progress}%` }}></div>
               </div>
            </div>
            <div className={`p-4 rounded-2xl ${progress===100?'bg-emerald-600/10 text-emerald-400':'bg-blue-600/10 text-blue-400'}`}>
               <Rocket size={24} className={progress===100?'animate-bounce':''} />
            </div>
         </div>
      </div>

      {/* ─── INPUT PANEL ───────────────────────────────────────── */}
      <div className="bg-[#0d121f] rounded-[3rem] border border-slate-800/80 p-6 md:p-10 relative overflow-hidden shadow-2xl group">
         <div className="absolute top-0 right-0 w-60 h-60 bg-blue-600/5 rounded-full blur-[80px] pointer-events-none group-hover:bg-blue-600/10 transition-all"></div>
         <div className="relative z-10 flex flex-col md:flex-row gap-4">
            <div className="relative flex-1 group">
               <Target className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-600 group-focus-within:text-blue-500 transition-colors" size={20} />
               <input
                 value={newTask}
                 onChange={e => setNewTask(e.target.value)}
                 onKeyDown={e => e.key === 'Enter' && addTask()}
                 placeholder="Define a new objective module..."
                 maxLength={100}
                 className="w-full bg-[#1c263d] border-2 border-transparent focus:border-blue-500/50 rounded-2xl px-16 py-5 text-white text-sm font-black outline-none transition-all placeholder:text-slate-700 shadow-xl"
               />
            </div>
            <button
               onClick={addTask}
               disabled={tasks.length >= 12 || !newTask.trim()}
               className="px-10 py-5 bg-blue-600 hover:bg-blue-500 disabled:opacity-40 text-white font-[1000] rounded-2xl transition-all shadow-xl shadow-blue-900/40 uppercase text-[10px] tracking-widest flex items-center justify-center gap-3"
            >
               <Plus size={18} /> Initialize
            </button>
         </div>
      </div>

      {/* ─── TASK GRID ─────────────────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         {tasks.length === 0 ? (
           <div className="col-span-full py-24 text-center space-y-6 bg-[#0d121f] rounded-[4rem] border border-dashed border-slate-800/50">
              <div className="w-24 h-24 bg-slate-900 border border-slate-800 rounded-[3rem] flex items-center justify-center mx-auto text-slate-800 animate-pulse"><ClipboardList size={48} /></div>
              <p className="text-[10px] font-black text-slate-700 uppercase tracking-[0.3em]">No Active Task Vectors Recorded Today</p>
           </div>
         ) : (
           tasks.map(task => (
             <div key={task.id} className={`group p-8 rounded-[2.5rem] border transition-all relative overflow-hidden flex flex-col justify-between ${task.done ? 'bg-emerald-950/10 border-emerald-500/20' : 'bg-[#0d121f] border-slate-800/80 hover:border-blue-500/40 shadow-xl'}`}>
                <div className="flex items-start gap-6">
                   <button onClick={() => toggleTask(task)} className="shrink-0 mt-1">
                      {task.done
                        ? <div className="w-8 h-8 rounded-xl bg-emerald-600/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shadow-lg shadow-emerald-950/40"><CheckCircle2 size={20} /></div>
                        : <div className="w-8 h-8 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-600 group-hover:border-blue-500 transition-all hover:bg-blue-600/10 hover:text-blue-400"><Circle size={20} /></div>
                      }
                   </button>
                   <div className="space-y-4 flex-1">
                      <p className={`text-xl font-black uppercase tracking-tight leading-none ${task.done ? 'line-through text-slate-600' : 'text-white group-hover:text-blue-400 transition-colors'}`}>{task.text}</p>
                      <div className="flex items-center gap-6">
                         <div className="flex items-center gap-2 text-[9px] font-black text-slate-500 uppercase tracking-widest">
                            <Clock size={12} className="text-slate-700" />
                            {new Date(task.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                         </div>
                         <div className="flex items-center gap-2 text-[9px] font-black text-slate-500 uppercase tracking-widest">
                            <Zap size={12} className={task.done ? 'text-emerald-500' : 'text-slate-700'} />
                            {task.done ? 'Secured' : 'Active'}
                         </div>
                      </div>
                   </div>
                </div>

                <button onClick={() => deleteTask(task.id)} className="absolute top-8 right-8 p-3 text-slate-800 hover:text-red-500 hover:bg-red-500/10 rounded-xl transition-all opacity-0 group-hover:opacity-100">
                   <Trash2 size={16} />
                </button>
             </div>
           ))
         )}
      </div>

      {/* ─── FOOTER ANALYTICS ─────────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
         <div className="p-8 bg-slate-900/40 backdrop-blur-md rounded-[2.5rem] border border-slate-800/50 flex items-center gap-5">
            <div className="p-4 bg-blue-600/10 text-blue-500 rounded-2xl"><Target size={20}/></div>
            <div>
               <p className="text-[14px] font-[1000] text-white leading-none uppercase tracking-tighter">{total}</p>
               <p className="text-[8px] text-slate-500 font-extrabold uppercase mt-1">Total Objectives</p>
            </div>
         </div>
         <div className="p-8 bg-slate-900/40 backdrop-blur-md rounded-[2.5rem] border border-slate-800/50 flex items-center gap-5">
            <div className="p-4 bg-emerald-600/10 text-emerald-500 rounded-2xl"><TrendingUp size={20}/></div>
            <div>
               <p className="text-[14px] font-[1000] text-white leading-none uppercase tracking-tighter">{completed}</p>
               <p className="text-[8px] text-slate-500 font-extrabold uppercase mt-1">Objectives Secured</p>
            </div>
         </div>
         <div className="p-8 bg-slate-900/40 backdrop-blur-md rounded-[2.5rem] border border-slate-800/50 flex items-center gap-5">
            <div className="p-4 bg-amber-600/10 text-amber-500 rounded-2xl"><Clock size={20}/></div>
            <div>
               <p className="text-[14px] font-[1000] text-white leading-none uppercase tracking-tighter">{total - completed}</p>
               <p className="text-[8px] text-slate-500 font-extrabold uppercase mt-1">Pending Sync</p>
            </div>
         </div>
      </div>
    </div>
  );
}
