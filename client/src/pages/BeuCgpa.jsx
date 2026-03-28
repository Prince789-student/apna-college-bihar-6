import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  collection, query, where, getDocs,
  addDoc, updateDoc, deleteDoc, doc
} from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../context/AuthContext';
import {
  Plus, Trash2, BookOpen, FlaskConical,
  ChevronDown, ChevronUp, AlertTriangle, CheckCircle, Award, Target, BarChart3
} from 'lucide-react';

// ─── BEU Grading ─────────────────────────────────────────
function getGrade(pct) {
  if (pct < 0)  return { grade: '—', point: 0, color: 'text-slate-500' };
  if (pct >= 90) return { grade: 'A+', point: 10, color: 'text-emerald-400' };
  if (pct >= 80) return { grade: 'A',  point: 9,  color: 'text-blue-400' };
  if (pct >= 70) return { grade: 'B',  point: 8,  color: 'text-cyan-400' };
  if (pct >= 60) return { grade: 'C',  point: 7,  color: 'text-yellow-400' };
  if (pct >= 50) return { grade: 'D',  point: 6,  color: 'text-orange-400' };
  if (pct >= 35) return { grade: 'P',  point: 5,  color: 'text-amber-400' };
  return          { grade: 'F',  point: 0,  color: 'text-red-500' };
}

const EMPTY_THEORY = { attendance: '', assignment: '', midSem: '', endSem: '' };
const EMPTY_PRAC   = { practAtt: '', performance: '', viva: '' };
const SEMESTERS = [1,2,3,4,5,6,7,8];

// Calculate totals
function calcSubject(sub) {
  const m = sub.marks || {};
  if (sub.type === 'theory') {
    const att  = Number(m.attendance || 0);
    const asn  = Number(m.assignment || 0);
    const mid  = Number(m.midSem    || 0);
    const end  = Number(m.endSem !== '' && m.endSem !== undefined ? m.endSem : -1);
    const internal = att + asn + mid;       // max 30
    const total    = internal + (end >= 0 ? end : 0); // max 100
    const hasMarks = m.endSem !== '' && m.endSem !== undefined;
    const pct      = hasMarks ? total : -1;

    // BEU Rule: End Sem min 25/70 required + Overall min 35%
    const endSemFail = hasMarks && end < 25;   // failed end sem cutoff
    const totalFail  = hasMarks && pct < 35;   // failed overall

    let grade, point, color;
    if (!hasMarks) {
      grade = '—'; point = 0; color = 'text-slate-500';
    } else if (endSemFail || totalFail) {
      grade = 'F'; point = 0; color = 'text-red-500';
    } else {
      ({ grade, point, color } = getGrade(pct));
    }

    return { internal, total, maxTotal: 100, pct: hasMarks ? pct : null, grade, point, color, endSemFail, endSem: end >= 0 ? end : null };
  } else {
    const att  = Number(m.practAtt    || 0);
    const perf = Number(m.performance || 0);
    const viva = Number(m.viva !== '' && m.viva !== undefined ? m.viva : -1);
    const hasMarks = m.viva !== '' && m.viva !== undefined;
    const total = att + perf + (viva >= 0 ? viva : 0);   // max 20
    const pct   = hasMarks ? (total / 20) * 100 : -1;
    const fail  = hasMarks && pct < 35;
    let grade, point, color;
    if (!hasMarks)       { grade = '—'; point = 0; color = 'text-slate-500'; }
    else if (fail)       { grade = 'F'; point = 0; color = 'text-red-500'; }
    else                 { ({ grade, point, color } = getGrade(pct)); }
    return { total, maxTotal: 20, pct: hasMarks ? pct : null, grade, point, color, endSemFail: false };
  }
}


export default function BeuCgpa() {
  const { user } = useAuth();
  const [semester, setSemester] = useState(1);
  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading]   = useState(true);
  const [showAdd, setShowAdd]   = useState(false);
  const [marksModal, setMarksModal] = useState(null); // subject doc id
  const [expandedId, setExpandedId] = useState(null);

  // Add subject form
  const [form, setForm] = useState({ name: '', type: 'theory', credits: 4 });

  // Marks form (live editing)
  const [marksForm, setMarksForm] = useState({});

  useEffect(() => { 
    if (user) {
      fetchSubjects(); 
    } else {
      setLoading(false); // Guest mode
    }
  }, [user, semester]);

  const fetchSubjects = async () => {
    setLoading(true);
    try {
      const q = query(
        collection(db, 'BeuSubjects'),
        where('userId', '==', user.uid),
        where('semester', '==', semester)
      );
      const snap = await getDocs(q);
      setSubjects(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    } catch(e) { console.error(e); }
    finally { setLoading(false); }
  };

  const addSubject = async () => {
    if (!form.name.trim()) return;
    const newSubData = {
      semester,
      name: form.name.trim().toUpperCase(),
      type: form.type,
      credits: Number(form.credits),
      marks: form.type === 'theory' ? { ...EMPTY_THEORY } : { ...EMPTY_PRAC },
      createdAt: new Date().toISOString()
    };

    if (!user) {
      // Guest: Random ID and local state update
      setSubjects([...subjects, { id: 'temp-' + Math.random(), ...newSubData }]);
      setForm({ name: '', type: 'theory', credits: 4 });
      setShowAdd(false);
      return;
    }

    try {
      await addDoc(collection(db, 'BeuSubjects'), {
        userId: user.uid,
        ...newSubData
      });
      setForm({ name: '', type: 'theory', credits: 4 });
      setShowAdd(false);
      fetchSubjects();
    } catch(e) { console.error(e); alert('Save nahi hua.'); }
  };

  const openMarks = (sub) => {
    setMarksModal(sub.id);
    setMarksForm({ ...(sub.marks || {}) });
  };

  const saveMarks = async () => {
    if (!user) {
      setSubjects(subjects.map(s => s.id === marksModal ? { ...s, marks: marksForm } : s));
      setMarksModal(null);
      return;
    }
    try {
      await updateDoc(doc(db, 'BeuSubjects', marksModal), { marks: marksForm });
      setMarksModal(null);
      fetchSubjects();
    } catch(e) { console.error(e); }
  };

  const deleteSubject = async (id) => {
    if (!user) {
      setSubjects(subjects.filter(s => s.id !== id));
      return;
    }
    try { await deleteDoc(doc(db, 'BeuSubjects', id)); fetchSubjects(); }
    catch(e) { console.error(e); }
  };

  // ── CGPA Calculation ─────────────────────────────────
  const results = subjects.map(sub => ({ ...sub, calc: calcSubject(sub) }));
  const graded  = results.filter(s => s.calc.pct !== null);
  const totalCredits = graded.reduce((a, s) => a + s.credits, 0);
  const totalPoints  = graded.reduce((a, s) => a + s.credits * s.calc.point, 0);
  const cgpa = totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : null;
  const backlogs = results.filter(s => s.calc.grade === 'F' && s.calc.pct !== null);
  const passed   = graded.filter(s => s.calc.grade !== 'F');

  const cgpaColor = !cgpa ? 'text-slate-500'
    : Number(cgpa) >= 8 ? 'text-emerald-400'
    : Number(cgpa) >= 6 ? 'text-yellow-400'
    : 'text-red-400';

  if (loading) return <div className="flex justify-center p-20"><div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div></div>;

  return (
    <div className="max-w-5xl mx-auto space-y-6 pb-20 animate-in fade-in duration-300">
      
      {/* ── Header ─── */}
      <div>
        <h1 className="text-2xl font-black text-slate-900 uppercase tracking-tight">BEU CGPA Calculator</h1>
        <p className="text-[11px] text-slate-500 mt-1">Bihar Engineering University · Marks-based grading system</p>
        
        {!user && (
          <div className="mt-4 p-4 bg-orange-600/10 border border-orange-500/20 rounded-2xl flex items-center gap-3">
             <AlertTriangle size={18} className="text-orange-400 shrink-0"/>
             <p className="text-[11px] font-bold text-orange-200">
               <span className="text-orange-400 font-black uppercase">Guest Mode:</span> Aapka data save nahi ho raha. Login karein marks hamesha ke liye save karne ke liye.
             </p>
             <Link to="/login" className="ml-auto px-4 py-2 bg-orange-600 hover:bg-orange-500 text-white rounded-xl text-[10px] font-black uppercase tracking-widest transition-all">Login</Link>
          </div>
        )}
      </div>

      {/* ── Semester Selector ─── */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200/50">
        <p className="text-[9px] font-black uppercase tracking-widest text-slate-500 mb-3">Semester Select Karo</p>
        <div className="flex flex-wrap gap-2">
          {SEMESTERS.map(s => (
            <button key={s} onClick={() => setSemester(s)}
              className={`w-12 h-12 rounded-2xl font-black text-sm transition-all ${semester === s ? 'bg-blue-600 text-slate-900 shadow-lg shadow-blue-900/30' : 'bg-slate-800/50 text-slate-500 hover:bg-slate-200'}`}>
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* ── CGPA Summary Card ─── */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="col-span-2 bg-white p-6 rounded-[2rem] border border-slate-200/50 flex items-center gap-5">
          <div className="w-20 h-20 bg-blue-500/10 rounded-2xl border border-blue-500/20 flex flex-col items-center justify-center shrink-0">
            <p className={`text-3xl font-black leading-none ${cgpaColor}`}>{cgpa || '—'}</p>
            <p className="text-[8px] text-slate-500 font-bold uppercase tracking-widest mt-1">CGPA</p>
          </div>
          <div>
            <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest">Semester {semester} Result</p>
            <p className="text-sm font-black text-slate-900">{graded.length} / {subjects.length} subjects graded</p>
            <p className="text-[10px] text-slate-500 mt-1">Total Credits: <span className="text-slate-900 font-black">{totalCredits}</span></p>
            {backlogs.length > 0 && (
              <p className="text-[10px] text-red-400 font-black mt-1 flex items-center gap-1">
                <AlertTriangle size={11}/> {backlogs.length} Backlog{backlogs.length > 1 ? 's' : ''}!
              </p>
            )}
          </div>
        </div>
        {[
          { label: 'Subjects', val: subjects.length, icon: <BookOpen size={16} className="text-blue-400"/> },
          { label: 'Passed', val: passed.length, icon: <CheckCircle size={16} className="text-emerald-400"/> },
          { label: 'Backlogs', val: backlogs.length, icon: <AlertTriangle size={16} className={backlogs.length > 0 ? 'text-red-400' : 'text-slate-600'}/> },
          { label: 'Total Credits Attempted', val: totalCredits, icon: <Award size={16} className="text-amber-400"/> },
        ].slice(0,2).map(({label, val, icon}) => (
          <div key={label} className="bg-white p-5 rounded-2xl border border-slate-200/50 text-center space-y-2">
            <div className="flex justify-center">{icon}</div>
            <p className="text-[8px] text-slate-500 font-bold uppercase tracking-widest">{label}</p>
            <p className="text-2xl font-black text-slate-900">{val}</p>
          </div>
        ))}
      </div>

      {/* ── Add Subject Button ─── */}
      <div className="flex items-center justify-between">
        <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">
          Semester {semester} Subjects
        </p>
        <button onClick={() => setShowAdd(true)} className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black text-[11px] uppercase tracking-wider transition-all">
          <Plus size={14}/> Add Subject
        </button>
      </div>

      {/* ── Subject Table / Cards ─── */}
      {subjects.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-300">
          <BookOpen size={36} className="mx-auto text-slate-700 mb-4"/>
          <p className="text-slate-500 font-bold">Koi subject nahi!</p>
          <p className="text-slate-600 text-xs mt-2">+ Add Subject button se shuru karo</p>
        </div>
      ) : (
        <div className="bg-white rounded-[2rem] border border-slate-200/50 overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-12 gap-2 p-4 border-b border-slate-200 text-[9px] font-black uppercase tracking-widest text-slate-500">
            <div className="col-span-4">Subject</div>
            <div className="col-span-1 text-center">Cr</div>
            <div className="col-span-2 text-center">Marks</div>
            <div className="col-span-1 text-center">%</div>
            <div className="col-span-1 text-center">Grade</div>
            <div className="col-span-1 text-center">GP</div>
            <div className="col-span-2 text-center">Action</div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-slate-800/50">
            {results.map((sub) => {
              const { calc } = sub;
              const isExpanded = expandedId === sub.id;
              return (
                <div key={sub.id}>
                  <div className={`grid grid-cols-12 gap-2 p-4 items-center transition-colors ${calc.grade === 'F' && calc.pct !== null ? 'bg-red-900/10' : ''}`}>
                    {/* Name + type */}
                    <div className="col-span-4">
                      <div className="flex items-center gap-2">
                        {sub.type === 'theory'
                          ? <BookOpen size={13} className="text-blue-400 shrink-0"/>
                          : <FlaskConical size={13} className="text-purple-400 shrink-0"/>}
                        <div>
                          <p className="text-xs font-black text-slate-900 leading-none">{sub.name}</p>
                          <p className="text-[8px] text-slate-500 capitalize">{sub.type} · {sub.credits} cr</p>
                        </div>
                      </div>
                    </div>
                    {/* Credits */}
                    <div className="col-span-1 text-center text-xs font-black text-slate-500">{sub.credits}</div>
                    {/* Marks */}
                    <div className="col-span-2 text-center text-xs font-black text-slate-900">
                      {calc.pct !== null ? `${calc.total}/${calc.maxTotal}` : <span className="text-slate-600">—</span>}
                    </div>
                    {/* % */}
                    <div className="col-span-1 text-center text-xs font-black text-slate-900">
                      {calc.pct !== null ? `${calc.pct.toFixed(0)}%` : <span className="text-slate-600">—</span>}
                    </div>
                    {/* Grade */}
                    <div className={`col-span-1 text-center text-sm font-black ${calc.color}`}>
                      {calc.grade}
                    </div>
                    {/* GP */}
                    <div className="col-span-1 text-center text-xs font-black text-slate-700">
                      {calc.pct !== null ? calc.point : '—'}
                    </div>
                    {/* Actions */}
                    <div className="col-span-2 flex items-center justify-center gap-1">
                      <button onClick={() => openMarks(sub)} className="px-2 py-1 bg-blue-600/20 hover:bg-blue-600 text-blue-400 hover:text-slate-900 rounded-lg text-[9px] font-black uppercase tracking-wider transition-all">
                        Marks
                      </button>
                      <button onClick={() => deleteSubject(sub.id)} className="p-1.5 text-slate-600 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-all">
                        <Trash2 size={12}/>
                      </button>
                    </div>
                  </div>

                  {/* Breakdown row (expanded) */}
                  {calc.pct !== null && (
                    <div className="px-4 pb-3">
                      <button onClick={() => setExpandedId(isExpanded ? null : sub.id)} className="flex items-center gap-1 text-[8px] font-black text-slate-600 hover:text-slate-500 transition-colors ml-6">
                        {isExpanded ? <ChevronUp size={10}/> : <ChevronDown size={10}/>}
                        {isExpanded ? 'Hide details' : 'View marks breakdown'}
                      </button>
                      {isExpanded && (
                        <div className="ml-6 mt-2 p-3 bg-slate-100/60 rounded-xl border border-slate-200/50 text-[9px] font-bold text-slate-500 grid grid-cols-2 sm:grid-cols-4 gap-2">
                          {sub.type === 'theory' ? <>
                            <div>Attendance: <span className="text-slate-900">{sub.marks?.attendance || 0}/5</span></div>
                            <div>Assignment: <span className="text-slate-900">{sub.marks?.assignment || 0}/5</span></div>
                            <div>Mid Sem: <span className="text-slate-900">{sub.marks?.midSem || 0}/20</span></div>
                            <div>End Sem: <span className="text-slate-900">{sub.marks?.endSem || 0}/70</span></div>
                            <div className="col-span-2 sm:col-span-4 border-t border-slate-200 pt-2 mt-1">
                              Internal (A+A+M): <span className="text-slate-900">{Number(sub.marks?.attendance||0)+Number(sub.marks?.assignment||0)+Number(sub.marks?.midSem||0)}/30</span>
                              <span className="ml-4">Total: <span className="text-slate-900 font-black">{calc.total}/100</span></span>
                            </div>
                          </> : <>
                            <div>Attendance: <span className="text-slate-900">{sub.marks?.practAtt || 0}/5</span></div>
                            <div>Performance: <span className="text-slate-900">{sub.marks?.performance || 0}/5</span></div>
                            <div>Viva: <span className="text-slate-900">{sub.marks?.viva || 0}/10</span></div>
                            <div>Total: <span className="text-slate-900 font-black">{calc.total}/20</span></div>
                          </>}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* CGPA Footer */}
          {cgpa && (
            <div className="p-5 border-t border-slate-200 bg-slate-100/30 flex items-center justify-between">
              <div>
                <p className="text-[9px] font-black uppercase tracking-widest text-slate-500">Semester {semester} CGPA</p>
                <p className="text-[9px] text-slate-600">Σ(Credit × Grade Point) / Σ Credits = {totalPoints} / {totalCredits}</p>
              </div>
              <p className={`text-4xl font-black ${cgpaColor}`}>{cgpa}</p>
            </div>
          )}
        </div>
      )}

      {/* ── Backlogs Section ─── */}
      {backlogs.length > 0 && (
        <div className="bg-red-900/10 border border-red-500/20 p-6 rounded-[2rem] space-y-3">
          <p className="text-[10px] font-black uppercase tracking-widest text-red-400 flex items-center gap-2">
            <AlertTriangle size={13}/> Backlogs — Ye Subjects Clear Karo!
          </p>
          <div className="space-y-2">
            {backlogs.map(sub => (
              <div key={sub.id} className="flex items-center justify-between p-3 bg-red-900/20 rounded-2xl border border-red-500/20">
                <div className="flex items-center gap-3">
                  {sub.type === 'theory' ? <BookOpen size={14} className="text-red-400"/> : <FlaskConical size={14} className="text-red-400"/>}
                  <div>
                    <p className="text-xs font-black text-red-300">{sub.name}</p>
                    <p className="text-[9px] text-red-600">
                      {sub.calc.endSemFail
                        ? `End Sem: ${sub.marks?.endSem ?? 0}/70 — Min 25 chahiye tha!`
                        : `${sub.calc.pct?.toFixed(0)}% — Min 35% chahiye tha!`
                      }
                    </p>
                  </div>
                </div>
                <span className="text-red-500 font-black text-sm">F</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── Grade Reference ─── */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200/50">
        <p className="text-[9px] font-black uppercase tracking-widest text-slate-500 mb-4 flex items-center gap-2"><BarChart3 size={11}/>BEU Grading Scale</p>
        <div className="grid grid-cols-3 sm:grid-cols-7 gap-2">
          {[
            {range:'≥90%', grade:'A+', point:10, color:'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'},
            {range:'80–89', grade:'A', point:9, color:'bg-blue-500/20 text-blue-400 border-blue-500/30'},
            {range:'70–79', grade:'B', point:8, color:'bg-cyan-500/20 text-cyan-400 border-cyan-500/30'},
            {range:'60–69', grade:'C', point:7, color:'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'},
            {range:'50–59', grade:'D', point:6, color:'bg-orange-500/20 text-orange-400 border-orange-500/30'},
            {range:'35–49', grade:'P', point:5, color:'bg-amber-500/20 text-amber-400 border-amber-500/30'},
            {range:'<35%', grade:'F', point:0, color:'bg-red-500/20 text-red-400 border-red-500/30'},
          ].map(g => (
            <div key={g.grade} className={`border rounded-2xl p-3 text-center ${g.color}`}>
              <p className="text-lg font-black leading-none">{g.grade}</p>
              <p className="text-[8px] font-bold mt-1 opacity-80">GP: {g.point}</p>
              <p className="text-[7px] opacity-60 mt-0.5">{g.range}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ══ ADD SUBJECT MODAL ══════════════════════════════ */}
      {showAdd && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 p-8 rounded-[2.5rem] w-full max-w-sm shadow-2xl space-y-5">
            <div>
              <p className="text-xl font-black uppercase tracking-tight mb-1">Add Subject</p>
              <p className="text-[10px] text-slate-500">Semester {semester}</p>
            </div>

            <div>
              <p className="text-[9px] font-black uppercase tracking-widest text-slate-500 mb-2">Subject Name</p>
              <input
                maxLength={40} placeholder="e.g. DATA STRUCTURES"
                className="w-full bg-[#161c2c] border border-slate-300/50 rounded-2xl p-4 text-slate-900 font-black uppercase outline-none focus:border-blue-500 transition-all"
                value={form.name} onChange={e => setForm({...form, name: e.target.value})}
                onKeyDown={e => e.key === 'Enter' && addSubject()} autoFocus
              />
            </div>

            <div>
              <p className="text-[9px] font-black uppercase tracking-widest text-slate-500 mb-2">Type</p>
              <div className="grid grid-cols-2 gap-3">
                {[{val:'theory',label:'📘 Theory',sub:'Max 100 marks'},{val:'practical',label:'🧪 Practical',sub:'Max 20 marks'}].map(t => (
                  <button key={t.val} onClick={() => setForm({...form, type: t.val})}
                    className={`p-4 rounded-2xl border text-center transition-all ${form.type === t.val ? 'bg-blue-600 border-blue-500 text-slate-900' : 'border-slate-300 text-slate-500 hover:border-slate-500'}`}>
                    <p className="font-black text-sm">{t.label}</p>
                    <p className="text-[9px] opacity-70 mt-0.5">{t.sub}</p>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[9px] font-black uppercase tracking-widest text-slate-500 mb-2">Credits</p>
              <div className="flex gap-2">
                {[1,2,3,4,5,6].map(c => (
                  <button key={c} onClick={() => setForm({...form, credits: c})}
                    className={`flex-1 py-3 rounded-xl font-black text-sm transition-all ${form.credits === c ? 'bg-blue-600 text-slate-900' : 'bg-slate-800 text-slate-500 hover:bg-slate-200'}`}>
                    {c}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <button className="flex-1 p-4 rounded-xl font-black text-[10px] uppercase text-slate-500 hover:bg-slate-100 transition-all" onClick={() => setShowAdd(false)}>Cancel</button>
              <button disabled={!form.name.trim()} className="flex-1 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 p-4 rounded-xl font-black text-[10px] uppercase text-white transition-all" onClick={addSubject}>Add</button>
            </div>
          </div>
        </div>
      )}

      {/* ══ MARKS ENTRY MODAL ════════════════════════════ */}
      {marksModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 p-8 rounded-[2.5rem] w-full max-w-sm shadow-2xl space-y-5 max-h-[90vh] overflow-y-auto">
            {(() => {
              const sub = subjects.find(s => s.id === marksModal);
              if (!sub) return null;
              const isTheory = sub.type === 'theory';
              const liveCalc = calcSubject({ ...sub, marks: marksForm });
              return <>
                <div>
                  <p className="text-xl font-black uppercase mb-1">{sub.name}</p>
                  <p className="text-[10px] text-slate-500">{isTheory ? 'Theory (100 marks)' : 'Practical (20 marks)'}</p>
                </div>

                {isTheory ? (
                  <>
                    <p className="text-[9px] font-black uppercase tracking-widest text-blue-400">Internal Assessment (30 marks)</p>
                    {[
                      {key:'attendance', label:'Attendance', max:5},
                      {key:'assignment', label:'Assignment / Class Test', max:5},
                      {key:'midSem',     label:'Mid Semester Exam', max:20},
                    ].map(({key, label, max}) => (
                      <div key={key}>
                        <div className="flex justify-between mb-1">
                          <p className="text-[9px] font-black uppercase tracking-widest text-slate-500">{label}</p>
                          <p className="text-[9px] text-slate-600">Max: {max}</p>
                        </div>
                        <input type="number" min={0} max={max} placeholder={`0 – ${max}`}
                          value={marksForm[key] ?? ''} onFocus={e=>e.target.select()}
                          onChange={e => setMarksForm({...marksForm, [key]: Math.min(max, Math.max(0, Number(e.target.value)))})}
                          className="w-full bg-[#161c2c] border border-slate-300/50 rounded-2xl p-3 text-slate-900 font-black outline-none focus:border-blue-500 transition-all"
                        />
                      </div>
                    ))}
                    <div className="border-t border-slate-200 pt-3">
                      <div className="flex justify-between mb-1">
                        <p className="text-[9px] font-black uppercase tracking-widest text-orange-400">End Semester Exam (70 marks)</p>
                        <p className="text-[9px] text-orange-600 font-bold">Min: 25 required</p>
                      </div>
                      <input type="number" min={0} max={70} placeholder="0 – 70"
                        value={marksForm.endSem ?? ''} onFocus={e=>e.target.select()}
                        onChange={e => setMarksForm({...marksForm, endSem: Math.min(70, Math.max(0, Number(e.target.value)))})}
                        className={`w-full bg-[#161c2c] border rounded-2xl p-3 text-slate-900 font-black outline-none transition-all ${
                          marksForm.endSem !== undefined && marksForm.endSem !== '' && Number(marksForm.endSem) < 25
                            ? 'border-red-500 focus:border-red-400'
                            : 'border-slate-300/50 focus:border-orange-500'
                        }`}
                      />
                      {marksForm.endSem !== undefined && marksForm.endSem !== '' && Number(marksForm.endSem) < 25 && (
                        <p className="text-[9px] text-red-400 font-black mt-1.5 flex items-center gap-1">
                          <AlertTriangle size={10}/> End Sem mein {25 - Number(marksForm.endSem)} marks aur chahiye (min 25/70)!
                        </p>
                      )}
                    </div>
                  </>
                ) : (
                  <>
                    <p className="text-[9px] font-black uppercase tracking-widest text-purple-400">Internal Assessment (20 marks)</p>
                    {[
                      {key:'practAtt',   label:'Attendance',   max:5},
                      {key:'performance',label:'Performance',   max:5},
                      {key:'viva',       label:'Viva',         max:10},
                    ].map(({key, label, max}) => (
                      <div key={key}>
                        <div className="flex justify-between mb-1">
                          <p className="text-[9px] font-black uppercase tracking-widest text-slate-500">{label}</p>
                          <p className="text-[9px] text-slate-600">Max: {max}</p>
                        </div>
                        <input type="number" min={0} max={max} placeholder={`0 – ${max}`}
                          value={marksForm[key] ?? ''} onFocus={e=>e.target.select()}
                          onChange={e => setMarksForm({...marksForm, [key]: Math.min(max, Math.max(0, Number(e.target.value)))})}
                          className="w-full bg-[#161c2c] border border-slate-300/50 rounded-2xl p-3 text-slate-900 font-black outline-none focus:border-purple-500 transition-all"
                        />
                      </div>
                    ))}
                  </>
                )}

                {/* Live Preview */}
                {liveCalc.pct !== null && (
                  <div className="bg-slate-100/60 p-4 rounded-2xl border border-slate-300/50 space-y-1">
                    <p className="text-[9px] font-black uppercase text-slate-500 tracking-widest mb-2">Live Preview</p>
                    <div className="flex justify-between"><span className="text-[10px] text-slate-500">Total</span><span className="text-slate-900 font-black">{liveCalc.total}/{liveCalc.maxTotal}</span></div>
                    <div className="flex justify-between"><span className="text-[10px] text-slate-500">Percentage</span><span className="text-slate-900 font-black">{liveCalc.pct?.toFixed(1)}%</span></div>
                    <div className="flex justify-between"><span className="text-[10px] text-slate-500">Grade</span><span className={`font-black ${liveCalc.color}`}>{liveCalc.grade}</span></div>
                    <div className="flex justify-between"><span className="text-[10px] text-slate-500">Grade Point</span><span className="text-slate-900 font-black">{liveCalc.point}</span></div>
                    <div className={`mt-2 text-center text-xs font-black py-2 rounded-lg ${liveCalc.grade === 'F' ? 'bg-red-900/30 text-red-400' : 'bg-emerald-900/30 text-emerald-400'}`}>
                      {liveCalc.grade === 'F'
                        ? liveCalc.endSemFail
                          ? '❌ FAIL — End Sem < 25 marks!'
                          : '❌ FAIL — Total < 35%!'
                        : '✅ PASS'}
                    </div>
                  </div>
                )}

                <div className="flex gap-3">
                  <button className="flex-1 p-4 rounded-xl font-black text-[10px] uppercase text-slate-500 hover:bg-slate-100" onClick={() => setMarksModal(null)}>Cancel</button>
                  <button className="flex-1 bg-blue-600 hover:bg-blue-500 p-4 rounded-xl font-black text-[10px] uppercase text-white" onClick={saveMarks}>Save Marks</button>
                </div>
              </>;
            })()}
          </div>
        </div>
      )}
    </div>
  );
}
