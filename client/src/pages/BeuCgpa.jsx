import React, { useState, useEffect } from 'react';
import {
  collection, query, where, getDocs,
  addDoc, updateDoc, deleteDoc, doc
} from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../context/AuthContext';
import {
  Plus, Trash2, BookOpen, FlaskConical,
  ChevronDown, ChevronUp, AlertTriangle, CheckCircle, Award, Target, BarChart3,
  TrendingUp, GraduationCap, Clock, ShieldCheck
} from 'lucide-react';
import { toast } from 'react-hot-toast';

// ─── BEU Grading ─────────────────────────────────────────
const getGrade = (pct) => {
  if (pct < 0)  return { grade: '—', point: 0, color: 'text-slate-500' };
  if (pct >= 90) return { grade: 'A+', point: 10, color: 'text-emerald-400' };
  if (pct >= 80) return { grade: 'A',  point: 9,  color: 'text-blue-400' };
  if (pct >= 70) return { grade: 'B',  point: 8,  color: 'text-cyan-400' };
  if (pct >= 60) return { grade: 'C',  point: 7,  color: 'text-yellow-400' };
  if (pct >= 50) return { grade: 'D',  point: 6,  color: 'text-orange-400' };
  if (pct >= 35) return { grade: 'P',  point: 5,  color: 'text-amber-400' };
  return          { grade: 'F',  point: 0,  color: 'text-red-500' };
};

const EMPTY_THEORY = { attendance: '', assignment: '', midSem: '', endSem: '' };
const EMPTY_PRAC   = { practAtt: '', performance: '', viva: '' };
const SEMESTERS = [1,2,3,4,5,6,7,8];

const calcSubject = (sub) => {
  const m = sub.marks || {};
  if (sub.type === 'theory') {
    const att  = Number(m.attendance || 0);
    const asn  = Number(m.assignment || 0);
    const mid  = Number(m.midSem    || 0);
    const end  = Number(m.endSem !== '' && m.endSem !== undefined ? m.endSem : -1);
    const internal = att + asn + mid;
    const total    = internal + (end >= 0 ? end : 0);
    const hasMarks = m.endSem !== '' && m.endSem !== undefined;
    const pct      = hasMarks ? total : -1;
    const endSemFail = hasMarks && end < 25;
    const totalFail  = hasMarks && pct < 35;

    let grade, point, color;
    if (!hasMarks) { grade = '—'; point = 0; color = 'text-slate-500'; }
    else if (endSemFail || totalFail) { grade = 'F'; point = 0; color = 'text-red-500'; }
    else { ({ grade, point, color } = getGrade(pct)); }

    return { internal, total, maxTotal: 100, pct: hasMarks ? pct : null, grade, point, color, endSemFail, endSem: end >= 0 ? end : null };
  } else {
    const att  = Number(m.practAtt    || 0);
    const perf = Number(m.performance || 0);
    const viva = Number(m.viva !== '' && m.viva !== undefined ? m.viva : -1);
    const hasMarks = m.viva !== '' && m.viva !== undefined;
    const total = att + perf + (viva >= 0 ? viva : 0);
    const pct   = hasMarks ? (total / 20) * 100 : -1;
    const fail  = hasMarks && pct < 35;
    let grade, point, color;
    if (!hasMarks) { grade = '—'; point = 0; color = 'text-slate-500'; }
    else if (fail) { grade = 'F'; point = 0; color = 'text-red-500'; }
    else { ({ grade, point, color } = getGrade(pct)); }
    return { total, maxTotal: 20, pct: hasMarks ? pct : null, grade, point, color, endSemFail: false };
  }
};

export default function BeuCgpa() {
  const { user } = useAuth();
  const [semester, setSemester] = useState(1);
  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAdd, setShowAdd] = useState(false);
  const [marksModal, setMarksModal] = useState(null);
  const [expandedId, setExpandedId] = useState(null);
  const [form, setForm] = useState({ name: '', type: 'theory', credits: 4 });
  const [marksForm, setMarksForm] = useState({});

  useEffect(() => { if (user) fetchSubjects(); }, [user, semester]);

  const fetchSubjects = async () => {
    setLoading(true);
    try {
      const q = query(collection(db, 'BeuSubjects'), where('userId', '==', user.uid), where('semester', '==', semester));
      const snap = await getDocs(q);
      setSubjects(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    } catch(e) { console.error(e); }
    finally { setLoading(false); }
  };

  const addSubject = async () => {
    if (!form.name.trim()) return;
    try {
      await addDoc(collection(db, 'BeuSubjects'), {
        userId: user.uid, semester, name: form.name.trim().toUpperCase(),
        type: form.type, credits: Number(form.credits),
        marks: form.type === 'theory' ? { ...EMPTY_THEORY } : { ...EMPTY_PRAC },
        createdAt: new Date().toISOString()
      });
      setForm({ name: '', type: 'theory', credits: 4 });
      setShowAdd(false);
      fetchSubjects();
      toast.success('Subject Registered');
    } catch(e) { toast.error('Transmission Failed'); }
  };

  const openMarks = (sub) => { setMarksModal(sub.id); setMarksForm({ ...(sub.marks || {}) }); };
  const saveMarks = async () => {
    try {
      await updateDoc(doc(db, 'BeuSubjects', marksModal), { marks: marksForm });
      setMarksModal(null);
      fetchSubjects();
      toast.success('Grades Synchronized');
    } catch(e) { toast.error('Sync Error'); }
  };

  const deleteSubject = async (id) => {
    try { await deleteDoc(doc(db, 'BeuSubjects', id)); fetchSubjects(); toast.success('Module Expunged'); }
    catch(e) { toast.error('Deletion Failed'); }
  };

  const results = subjects.map(sub => ({ ...sub, calc: calcSubject(sub) }));
  const graded = results.filter(s => s.calc.pct !== null);
  const totalCredits = graded.reduce((a, s) => a + s.credits, 0);
  const totalPoints = graded.reduce((a, s) => a + s.credits * s.calc.point, 0);
  const cgpa = totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : null;
  const backlogs = results.filter(s => s.calc.grade === 'F' && s.calc.pct !== null);
  const passed = graded.filter(s => s.calc.grade !== 'F');

  const cgpaColor = !cgpa ? 'text-slate-400'
    : Number(cgpa) >= 8 ? 'text-emerald-400'
    : Number(cgpa) >= 6 ? 'text-yellow-400'
    : 'text-red-400';

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto space-y-12 animate-in fade-in duration-700 pb-20 px-4 md:px-0">
      
      {/* ─── HEADER ──────────────────────────────────────────────── */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-10">
         <div className="space-y-1.5">
            <h1 className="text-3xl md:text-5xl font-[1000] tracking-tighter uppercase text-white leading-none">
              Academic <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500 font-black">Analytics</span>
            </h1>
            <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.4em]">BEU Exam Portal / Performance Stack v3.0</p>
         </div>
         <button onClick={() => setShowAdd(true)} className="px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-[2rem] font-black text-xs uppercase tracking-widest shadow-xl shadow-blue-900/40 active:scale-95 transition-all flex items-center justify-center gap-4">
            <Plus size={18}/> New Subject Module
         </button>
      </div>

      {/* ─── SEMESTER & SUMMARY ────────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
         
         <div className="lg:col-span-12 xl:col-span-8 bg-[#0d121f] p-10 md:p-14 rounded-[4rem] border border-slate-800/80 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-600/5 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="relative z-10 space-y-10">
               <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="space-y-2 text-center md:text-left">
                     <p className="text-[9px] font-black text-slate-600 uppercase tracking-widest leading-none">Grading Vector</p>
                     <h2 className="text-2xl font-black text-white uppercase tracking-tight">Semester Selection</h2>
                  </div>
                  <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
                    {SEMESTERS.map(s => (
                       <button key={s} onClick={() => setSemester(s)}
                          className={`w-12 h-12 rounded-2xl font-black text-sm transition-all border ${semester === s ? 'bg-emerald-600 border-emerald-400 text-white shadow-xl shadow-emerald-900/40 group' : 'bg-[#02040a] border-slate-800 text-slate-600 hover:border-slate-600'}`}>
                          {s}
                       </button>
                    ))}
                  </div>
               </div>

               <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-slate-800/50">
                  <div className="bg-black/40 p-8 rounded-[2.5rem] border border-slate-800 text-center space-y-4 group hover:border-emerald-500/30 transition-all">
                     <p className="text-[8px] text-slate-600 font-black uppercase tracking-widest">Calculated CGPA</p>
                     <p className={`text-6xl font-[1000] tracking-tighter leading-none ${cgpaColor}`}>{cgpa || '0.00'}</p>
                     <div className="flex items-center justify-center gap-2">
                        <TrendingUp size={12} className={cgpaColor} />
                        <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Sem {semester} Logic</span>
                     </div>
                  </div>
                  <div className="bg-black/40 p-8 rounded-[2.5rem] border border-slate-800 text-center space-y-4">
                     <p className="text-[8px] text-slate-600 font-black uppercase tracking-widest">Active Credits</p>
                     <p className="text-6xl font-[1000] tracking-tighter text-white leading-none">{totalCredits}</p>
                     <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Hub Total</p>
                  </div>
                  <div className="bg-black/40 p-8 rounded-[2.5rem] border border-slate-800 text-center space-y-4">
                     <p className="text-[8px] text-slate-600 font-black uppercase tracking-widest">Passed Units</p>
                     <p className="text-6xl font-[1000] tracking-tighter text-emerald-500 leading-none">{passed.length}</p>
                     <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Out of {subjects.length}</p>
                  </div>
               </div>
            </div>
         </div>

         <div className="lg:col-span-12 xl:col-span-4 bg-[#0d121f] rounded-[4.5rem] border border-slate-800/80 p-10 md:p-14 space-y-10 shadow-2xl relative overflow-hidden group">
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-indigo-600/5 rounded-full blur-[80px] pointer-events-none"></div>
            <div className="relative z-10 space-y-8">
               <div className="flex items-center gap-4">
                  <div className="p-4 bg-indigo-600/20 text-indigo-400 rounded-2xl group-hover:scale-110 transition-transform"><Award size={24}/></div>
                  <h3 className="text-xl font-black text-white uppercase tracking-tighter leading-none">Academic <br /> Standards</h3>
               </div>
               <div className="space-y-4">
                  {backlogs.length > 0 ? (
                    <div className="p-6 bg-red-600/10 border border-red-500/20 rounded-3xl space-y-4 animate-pulse">
                       <div className="flex items-center gap-3 text-red-400">
                          <AlertTriangle size={18} />
                          <span className="text-[9px] font-black uppercase tracking-widest">System Alert</span>
                       </div>
                       <p className="text-[10px] text-red-500/80 font-bold uppercase tracking-tight leading-relaxed">
                         Detected {backlogs.length} critical failures in semester {semester} modules. Grade clearing required for eligibility.
                       </p>
                    </div>
                  ) : (
                    <div className="p-6 bg-emerald-600/5 border border-emerald-500/20 rounded-3xl space-y-4">
                       <div className="flex items-center gap-3 text-emerald-400">
                          <CheckCircle size={18} />
                          <span className="text-[9px] font-black uppercase tracking-widest">Optimal Status</span>
                       </div>
                       <p className="text-[10px] text-emerald-500/80 font-bold uppercase tracking-tight leading-relaxed">
                         All modules synchronized. System health within BEU graduation parameters.
                       </p>
                    </div>
                  )}
               </div>
               <div className="pt-6 border-t border-slate-800/50">
                  <button className="w-full py-4 bg-[#1c263d] border border-slate-800 hover:border-slate-600 text-slate-500 hover:text-white rounded-[1.5rem] font-black text-[9px] uppercase tracking-widest transition-all">Download Audit Report</button>
               </div>
            </div>
         </div>

      </div>

      {/* ─── SUBJECTS TABLE ───────────────────────────────────── */}
      <div className="bg-[#0d121f] rounded-[4rem] border border-slate-800/80 overflow-hidden shadow-2xl">
         <div className="p-10 border-b border-slate-800/80 flex items-center justify-between">
            <h3 className="text-xl font-black text-white uppercase tracking-tighter">Semester Modules</h3>
            <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl"><Target size={18} className="text-slate-600" /></div>
         </div>
         
         <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
               <thead>
                  <tr className="bg-[#02040a]/50 text-[10px] font-black text-slate-600 uppercase tracking-widest">
                     <th className="p-10">Module Identity</th>
                     <th className="p-10 text-center">Weight (Cr)</th>
                     <th className="p-10 text-center">Score Vector</th>
                     <th className="p-10 text-center">Percentage</th>
                     <th className="p-10 text-center">Grade Point</th>
                     <th className="p-10 text-right">Operations</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-slate-800/50">
                  {results.length > 0 ? results.map((sub) => {
                     const { calc } = sub;
                     return (
                        <tr key={sub.id} className={`group hover:bg-[#1c263d]/30 transition-all ${calc.grade === 'F' && calc.pct !== null ? 'bg-red-950/20' : ''}`}>
                           <td className="p-10">
                              <div className="flex items-center gap-4">
                                 <div className={`p-4 rounded-2xl ${sub.type==='theory'?'bg-blue-600/10 text-blue-400':'bg-purple-600/10 text-purple-400'}`}>
                                    {sub.type==='theory' ? <BookOpen size={20}/> : <FlaskConical size={20}/>}
                                 </div>
                                 <div>
                                    <p className="text-sm font-black text-white group-hover:text-blue-400 transition-colors uppercase leading-none">{sub.name}</p>
                                    <p className="text-[8px] font-black text-slate-500 uppercase tracking-widest mt-2">{sub.type} · Module ID: {sub.id.slice(0,6)}</p>
                                 </div>
                              </div>
                           </td>
                           <td className="p-10 text-center font-mono font-black text-slate-400">{sub.credits}</td>
                           <td className="p-10 text-center">
                              {calc.pct !== null ? (
                                 <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-800 rounded-xl">
                                    <span className="text-xs font-black text-white">{calc.total}</span>
                                    <span className="text-[9px] text-slate-700 font-bold">/</span>
                                    <span className="text-[10px] text-slate-600 font-black">{calc.maxTotal}</span>
                                 </div>
                              ) : <span className="text-slate-800">UNGRADED</span>}
                           </td>
                           <td className="p-10 text-center">
                              {calc.pct !== null ? (
                                <div className="space-y-2 max-w-[100px] mx-auto">
                                   <div className="flex justify-between text-[8px] font-black text-slate-600 uppercase"><span className="text-white">{calc.pct.toFixed(0)}%</span> <span>100%</span></div>
                                   <div className="h-1 bg-slate-800 rounded-full overflow-hidden"><div className={`h-full ${calc.grade==='F'?'bg-red-500':'bg-emerald-500'}`} style={{ width: `${calc.pct}%` }} /></div>
                                </div>
                              ) : <span className="text-slate-800">—</span>}
                           </td>
                           <td className="p-10 text-center">
                              <div className={`inline-flex flex-col items-center bg-black/40 p-4 rounded-2xl border ${calc.grade==='F'?'border-red-500/20':'border-slate-800 group-hover:border-blue-500/30'} min-w-[70px]`}>
                                 <span className={`text-xl font-[1000] leading-none ${calc.color}`}>{calc.grade}</span>
                                 <span className="text-[8px] font-black text-slate-600 uppercase mt-1">GP {calc.point}</span>
                              </div>
                           </td>
                           <td className="p-10 text-right">
                              <div className="flex items-center justify-end gap-3">
                                 <button onClick={() => openMarks(sub)} className="px-6 py-3 bg-blue-600/10 hover:bg-blue-600 text-blue-500 hover:text-white rounded-xl text-[9px] font-black uppercase tracking-widest transition-all">Scoring</button>
                                 <button onClick={() => deleteSubject(sub.id)} className="p-3 text-slate-700 hover:text-red-500 transition-colors"><Trash2 size={16}/></button>
                              </div>
                           </td>
                        </tr>
                     );
                  }) : (
                     <tr>
                        <td colSpan={6} className="p-20 text-center space-y-6">
                           <div className="w-24 h-24 bg-slate-900 border border-slate-800 rounded-[3rem] flex items-center justify-center mx-auto text-slate-800 animate-pulse"><BookOpen size={48} /></div>
                           <p className="text-[10px] font-black text-slate-700 uppercase tracking-[0.3em]">Ready to Compute Semester {semester}</p>
                        </td>
                     </tr>
                  )}
               </tbody>
            </table>
         </div>
      </div>

      {/* ─── MODALS ───────────────────────────────────────────── */}
      
      {/* ADD SUBJECT MODAL */}
      {showAdd && (
         <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-[#02040a]/80 backdrop-blur-xl">
           <div className="w-full max-w-lg bg-[#0d121f] border border-slate-800 rounded-[4rem] p-12 md:p-16 shadow-2xl relative overflow-hidden animate-in zoom-in-95 duration-300">
             <div className="absolute top-0 right-0 w-60 h-60 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
             
             <div className="relative z-10 space-y-10">
               <div className="flex items-center justify-between">
                  <h2 className="text-4xl font-[1000] text-white uppercase tracking-tighter">New Module</h2>
                  <button onClick={()=>setShowAdd(false)} className="text-slate-500 hover:text-white transition-colors">Abort</button>
               </div>

               <div className="space-y-8">
                  <div className="space-y-2">
                     <p className="text-[9px] font-black text-slate-600 uppercase tracking-widest ml-2">Module Label</p>
                     <input type="text" maxLength={40} placeholder="e.g. ELECTRONICS ENGINEERING" 
                        value={form.name} onChange={e => setForm({...form, name: e.target.value})}
                        className="w-full bg-[#1c263d] border-2 border-transparent focus:border-blue-500/50 rounded-2xl p-6 text-white text-xs font-black outline-none transition-all placeholder:text-slate-700 uppercase" />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                     {[{v:'theory',l:'📘 Theory Core'},{v:'practical',l:'🧪 Lab Skill'}].map(t => (
                        <button key={t.v} onClick={() => setForm({...form, type: t.v})}
                          className={`p-5 rounded-2xl border text-center transition-all ${form.type === t.v ? 'bg-blue-600/20 border-blue-500 text-blue-300 shadow-xl shadow-blue-900/40' : 'bg-black/40 border-slate-800 text-slate-500 hover:border-slate-600'}`}>
                           <p className="font-black text-[10px] uppercase tracking-widest">{t.l}</p>
                        </button>
                     ))}
                  </div>

                  <div className="space-y-2">
                     <p className="text-[9px] font-black text-slate-600 uppercase tracking-widest ml-2">Credit Assignment</p>
                     <div className="flex gap-2 p-1.5 bg-[#1c263d] rounded-2xl border border-slate-800">
                        {[1,2,3,4,5].map(c => (
                           <button key={c} onClick={() => setForm({...form, credits: c})}
                              className={`flex-1 py-4 rounded-xl font-[1000] text-xs transition-all ${form.credits === c ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-500 hover:text-white'}`}>
                              {c}
                           </button>
                        ))}
                     </div>
                  </div>

                  <button disabled={!form.name.trim()} onClick={addSubject} className="w-full py-6 bg-blue-600 hover:bg-blue-500 disabled:bg-slate-800 text-white rounded-3xl font-[1000] text-xs uppercase tracking-widest shadow-xl shadow-blue-900/40 active:scale-95 transition-all">Establish Module</button>
               </div>
             </div>
           </div>
         </div>
      )}

      {/* MARKS ENTRY MODAL */}
      {marksModal && (
         <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-[#02040a]/80 backdrop-blur-xl">
           <div className="w-full max-w-xl bg-[#0d121f] border border-slate-800 rounded-[4rem] p-12 md:p-16 shadow-2xl relative overflow-hidden animate-in zoom-in-95 duration-300 max-h-[90vh] overflow-y-auto custom-scrollbar">
             {(() => {
               const sub = subjects.find(s => s.id === marksModal);
               if (!sub) return null;
               const isT = sub.type === 'theory';
               const live = calcSubject({ ...sub, marks: marksForm });
               return (
                  <div className="relative z-10 space-y-10">
                     <div className="flex items-center justify-between">
                        <div>
                           <h2 className="text-3xl font-[1000] text-white uppercase tracking-tighter shrink-0">{sub.name}</h2>
                           <p className="text-[9px] text-slate-500 font-black uppercase tracking-widest mt-1">Data Entry / {sub.type} protocol</p>
                        </div>
                        <button onClick={()=>setMarksModal(null)} className="text-slate-500 hover:text-white transition-colors">Cancel</button>
                     </div>

                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {(isT ? [
                          {k:'attendance', l:'Attendance', m:5}, {k:'assignment', l:'Assignment', m:5},
                          {k:'midSem', l:'Mid Sem', m:20}, {k:'endSem', l:'End Sem Exam', m:70, danger: true}
                        ] : [
                          {k:'practAtt', l:'Attendance', m:5}, {k:'performance', l:'Performance', m:5},
                          {k:'viva', l:'Viva Voce', m:10}
                        ]).map(f => (
                           <div key={f.k} className="space-y-3">
                              <div className="flex justify-between px-2">
                                 <p className="text-[8px] font-black text-slate-600 uppercase tracking-widest">{f.l}</p>
                                 <p className="text-[8px] text-slate-500 font-black">Max {f.m}</p>
                              </div>
                              <input type="number" value={marksForm[f.k] ?? ''} onFocus={e=>e.target.select()}
                                onChange={e => setMarksForm({...marksForm, [f.k]: Math.min(f.m, Math.max(0, Number(e.target.value)))})}
                                className={`w-full bg-[#1c263d] border-2 rounded-2xl p-5 text-white font-black outline-none transition-all ${f.danger && Number(marksForm[f.k])<25 && marksForm[f.k]!=='' ? 'border-red-500 focus:border-red-400' : 'border-transparent focus:border-blue-500/50'}`} 
                              />
                           </div>
                        ))}
                     </div>

                     <div className="p-8 bg-black/40 rounded-[2.5rem] border border-slate-800 space-y-4">
                        <div className="flex justify-between items-center">
                           <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Calculated Score</p>
                           <p className={`text-2xl font-black ${live.color}`}>{live.total} <span className="text-[10px] text-slate-700">/ {live.maxTotal}</span></p>
                        </div>
                        <div className="flex justify-between items-center pt-4 border-t border-slate-800/50">
                           <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Final Status</p>
                           <div className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest ${live.grade==='F'?'bg-red-600/10 text-red-500':'bg-emerald-600/10 text-emerald-500'}`}>
                              {live.grade === 'F' ? (live.endSemFail ? 'End Sem Fail' : 'Total Fail') : 'Module Passed'}
                           </div>
                        </div>
                     </div>

                     <button onClick={saveMarks} className="w-full py-6 bg-blue-600 hover:bg-blue-500 text-white rounded-3xl font-[1000] text-xs uppercase tracking-widest shadow-xl shadow-blue-900/40 active:scale-95 transition-all">Synchronize Grades</button>
                  </div>
               );
             })()}
           </div>
         </div>
      )}

    </div>
  );
}
