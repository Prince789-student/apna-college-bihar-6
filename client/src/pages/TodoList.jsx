import React, { useState, useEffect } from 'react';
import { collection, query, where, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../context/AuthContext';
import { Plus, CheckCircle2, Circle, Trash2, ClipboardList } from 'lucide-react';

export default function TodoList() {
  const { user } = useAuth();
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => { if (user) fetchTasks(); }, [user]);

  const fetchTasks = async () => {
    setLoading(true);
    try {
      const today = new Date().toISOString().split('T')[0];
      const q = query(collection(db, 'Tasks'), where('userId', '==', user.uid), where('date', '==', today));
      const snap = await getDocs(q);
      setTasks(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    } catch(e) { console.error(e); }
    finally { setLoading(false); }
  };

  const addTask = async () => {
    const text = newTask.trim();
    if (!text || tasks.length >= 10) return;
    try {
      const today = new Date().toISOString().split('T')[0];
      await addDoc(collection(db, 'Tasks'), {
        userId: user.uid, text, done: false, date: today,
        createdAt: new Date().toISOString()
      });
      setNewTask('');
      fetchTasks();
    } catch(e) { console.error(e); }
  };

  const toggleTask = async (task) => {
    try {
      await updateDoc(doc(db, 'Tasks', task.id), { done: !task.done });
      setTasks(tasks.map(t => t.id === task.id ? { ...t, done: !t.done } : t));
    } catch(e) { console.error(e); }
  };

  const deleteTask = async (id) => {
    try {
      await deleteDoc(doc(db, 'Tasks', id));
      setTasks(tasks.filter(t => t.id !== id));
    } catch(e) { console.error(e); }
  };

  const completed = tasks.filter(t => t.done).length;
  const total = tasks.length;
  const progress = total > 0 ? Math.round((completed / total) * 100) : 0;

  if (loading) return <div className="flex justify-center p-20"><div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div></div>;

  return (
    <div className="max-w-2xl mx-auto space-y-6 animate-in fade-in duration-300">
      <div className="flex items-center gap-3">
        <ClipboardList size={24} className="text-blue-500" />
        <div>
          <h1 className="text-2xl font-black text-white uppercase tracking-tight">Aaj ka Plan</h1>
          <p className="text-[11px] text-slate-500">Today's To-Do List — {new Date().toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long' })}</p>
        </div>
      </div>

      {/* Progress */}
      {total > 0 && (
        <div className="bg-[#0d121f] p-5 rounded-2xl border border-slate-800/50 space-y-2">
          <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-slate-400">
            <span>Progress</span>
            <span className="text-white">{completed}/{total} Complete</span>
          </div>
          <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-blue-500 rounded-full transition-all duration-700" style={{ width: `${progress}%` }}></div>
          </div>
          {progress === 100 && <p className="text-center text-emerald-400 text-xs font-black">🎉 Sab complete! Bahut badhiya!</p>}
        </div>
      )}

      {/* Add Task */}
      <div className="flex gap-3">
        <input
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && addTask()}
          placeholder="Naya task likhein... (Enter dabao)"
          maxLength={100}
          className="flex-1 bg-[#0d121f] border border-slate-700/50 rounded-2xl px-5 py-4 text-white font-medium outline-none focus:border-blue-500 transition-all placeholder:text-slate-600"
        />
        <button
          onClick={addTask}
          disabled={tasks.length >= 10 || !newTask.trim()}
          className="px-6 py-4 bg-blue-600 hover:bg-blue-500 disabled:opacity-40 text-white font-black rounded-2xl transition-all flex items-center gap-2"
        >
          <Plus size={18} />
        </button>
      </div>
      <p className="text-[10px] text-slate-600 -mt-2">{tasks.length}/10 tasks</p>

      {/* Task List */}
      <div className="space-y-3">
        {tasks.length === 0 ? (
          <div className="text-center py-16 bg-[#0d121f] rounded-3xl border border-dashed border-slate-700">
            <ClipboardList size={32} className="mx-auto text-slate-700 mb-4" />
            <p className="text-slate-500 font-bold">Koi task nahi — Upar add karo!</p>
          </div>
        ) : (
          tasks.map(task => (
            <div key={task.id} className={`flex items-center gap-4 p-5 rounded-2xl border transition-all group ${task.done ? 'bg-emerald-900/10 border-emerald-500/20' : 'bg-[#0d121f] border-slate-800/50 hover:border-slate-600'}`}>
              <button onClick={() => toggleTask(task)} className="shrink-0">
                {task.done
                  ? <CheckCircle2 size={24} className="text-emerald-500" />
                  : <Circle size={24} className="text-slate-600 hover:text-blue-500 transition-colors" />
                }
              </button>
              <p className={`flex-1 font-bold ${task.done ? 'line-through text-slate-500' : 'text-white'}`}>{task.text}</p>
              <button onClick={() => deleteTask(task.id)} className="opacity-0 group-hover:opacity-100 text-slate-600 hover:text-red-500 transition-all">
                <Trash2 size={16} />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
