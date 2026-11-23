import React, { useState, useEffect } from 'react';
import { BookOpen, Save, RotateCcw, Plus, Eye, Edit3, CheckCircle2, Loader2 } from 'lucide-react';
import { doc, getDoc, setDoc, deleteDoc, collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import defaultSyllabusData from '../data/syllabusData.json';
import ReactMarkdown from 'react-markdown';

const BRANCH_OPTIONS = [
  { id: 'cse', label: 'CSE (Computer Science)' },
  { id: 'cse_ai', label: 'CSE (AI & ML)' },
  { id: 'cse_iot', label: 'CSE (IoT)' },
  { id: 'cse_iot_cs', label: 'CSE (IoT & Cyber Security)' },
  { id: 'civil', label: 'Civil Engineering' },
  { id: 'civil_ca', label: 'Civil (Computer Application)' },
  { id: 'mech', label: 'Mechanical Engineering' },
  { id: 'ee', label: 'Electrical Engineering' },
  { id: 'ece', label: 'Electronics & Comm. (ECE)' },
  { id: 'eee', label: 'Electrical & Electronics (EEE)' },
  { id: 'group_a', label: 'Group A (1st Sem New)' },
  { id: 'group_b', label: 'Group B (1st Sem New)' },
  { id: 'group_c', label: 'Group C (1st Sem New)' },
];

const SEM_OPTIONS = [
  { id: 'sem1_new', label: '1st Sem New (2026+)' },
  { id: 'sem1', label: '1st Semester' },
  { id: 'sem2', label: '2nd Semester' },
  { id: 'sem3', label: '3rd Semester' },
  { id: 'sem4', label: '4th Semester' },
  { id: 'sem5', label: '5th Semester' },
  { id: 'sem6', label: '6th Semester' },
  { id: 'sem7', label: '7th Semester' },
  { id: 'sem8', label: '8th Semester' },
];

export default function AdminSyllabusManager({ flash }) {
  const [branch, setBranch] = useState('cse');
  const [semester, setSemester] = useState('sem5');
  const [content, setContent] = useState('');
  const [isOverridden, setIsOverridden] = useState(false);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [previewMode, setPreviewMode] = useState(false);
  const [overrideKeys, setOverrideKeys] = useState([]);

  const loadOverrideIndex = async () => {
    try {
      const snap = await getDocs(collection(db, 'beu_syllabus'));
      setOverrideKeys(snap.docs.map(d => d.id));
    } catch (_) {}
  };

  useEffect(() => {
    loadOverrideIndex();
  }, []);

  useEffect(() => {
    let active = true;
    const load = async () => {
      setLoading(true);
      const docId = `${branch}_${semester}`;
      try {
        const snap = await getDoc(doc(db, 'beu_syllabus', docId));
        if (active && snap.exists() && snap.data()?.content) {
          setContent(snap.data().content);
          setIsOverridden(true);
          setLoading(false);
          return;
        }
      } catch (_) {}

      const fallback = defaultSyllabusData.find(x => x.branch === branch && x.semester === semester);
      if (active) {
        setContent(fallback?.content || '');
        setIsOverridden(false);
        setLoading(false);
      }
    };
    load();
    return () => { active = false; };
  }, [branch, semester]);

  const handleSave = async () => {
    if (!content.trim()) {
      flash('Syllabus content cannot be empty.', 'err');
      return;
    }
    setSaving(true);
    const docId = `${branch}_${semester}`;
    try {
      await setDoc(doc(db, 'beu_syllabus', docId), {
        branch,
        semester,
        content,
        updatedAt: new Date().toISOString()
      });
      setIsOverridden(true);
      await loadOverrideIndex();
      flash(`Saved ${branch.toUpperCase()} ${semester.toUpperCase()} syllabus live! Students will see it immediately. ✅`, 'ok');
    } catch (err) {
      flash('Save failed: ' + err.message, 'err');
    } finally {
      setSaving(false);
    }
  };

  const handleRevert = async () => {
    const docId = `${branch}_${semester}`;
    if (!window.confirm(`Revert ${branch.toUpperCase()} ${semester.toUpperCase()} to default built-in syllabus?`)) return;
    setSaving(true);
    try {
      await deleteDoc(doc(db, 'beu_syllabus', docId));
      const fallback = defaultSyllabusData.find(x => x.branch === branch && x.semester === semester);
      setContent(fallback?.content || '');
      setIsOverridden(false);
      await loadOverrideIndex();
      flash('Reverted to default syllabus.', 'ok');
    } catch (err) {
      flash('Revert failed: ' + err.message, 'err');
    } finally {
      setSaving(false);
    }
  };

  const handleInsertSubjectTemplate = () => {
    const tpl = `\n\n## NEW SUBJECT TITLE (CODE)\n\n#### Unit - 1\n1. **Module 1:**\n   Topic 1, Topic 2, Topic 3\n\n#### Unit - 2\n1. **Module 2:**\n   Topic 1, Topic 2\n`;
    setContent(prev => prev + tpl);
    setPreviewMode(false);
  };

  return (
    <div className="bg-white rounded-[2rem] border border-slate-200/80 shadow-xl p-5 sm:p-8 space-y-6 animate-in fade-in duration-300">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
        <div className="flex items-center gap-3.5">
          <div className="p-3 bg-indigo-50 text-indigo-600 rounded-2xl">
            <BookOpen size={22} />
          </div>
          <div>
            <h2 className="text-lg font-black uppercase text-slate-900 tracking-tight">Live Syllabus Manager</h2>
            <p className="text-[11px] font-bold text-slate-500 mt-0.5">
              Edit, add, or update any Branch &amp; Semester syllabus directly — reflects live in Website &amp; Android App
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {isOverridden && (
            <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px] font-bold">
              <CheckCircle2 size={13} /> Live Override Active
            </span>
          )}
          <span className="px-3 py-1.5 rounded-xl bg-slate-100 text-slate-600 text-[11px] font-bold">
            {overrideKeys.length} Custom Edits
          </span>
        </div>
      </div>

      {/* Branch & Semester Selectors */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-200/70">
        <div>
          <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1.5">
            Branch
          </label>
          <select
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
            className="w-full h-11 px-3.5 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-900 focus:outline-none focus:border-indigo-500"
          >
            {BRANCH_OPTIONS.map(b => (
              <option key={b.id} value={b.id}>{b.label}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1.5">
            Semester
          </label>
          <select
            value={semester}
            onChange={(e) => setSemester(e.target.value)}
            className="w-full h-11 px-3.5 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-900 focus:outline-none focus:border-indigo-500"
          >
            {SEM_OPTIONS.map(s => (
              <option key={s.id} value={s.id}>
                {s.label} {overrideKeys.includes(`${branch}_${s.id}`) ? '★ (Edited)' : ''}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setPreviewMode(false)}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${!previewMode ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
          >
            <Edit3 size={14} /> Edit Markdown
          </button>
          <button
            type="button"
            onClick={() => setPreviewMode(true)}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${previewMode ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
          >
            <Eye size={14} /> Preview
          </button>
          <button
            type="button"
            onClick={handleInsertSubjectTemplate}
            className="px-3.5 py-2 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-bold flex items-center gap-1.5 transition-all"
          >
            <Plus size={14} /> Add Subject Block
          </button>
        </div>

        <div className="flex items-center gap-2">
          {isOverridden && (
            <button
              type="button"
              onClick={handleRevert}
              disabled={saving}
              className="px-4 py-2 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-600 text-xs font-bold flex items-center gap-1.5 transition-all disabled:opacity-50"
            >
              <RotateCcw size={14} /> Revert Default
            </button>
          )}
          <button
            type="button"
            onClick={handleSave}
            disabled={saving || loading}
            className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-black uppercase tracking-wider flex items-center gap-2 shadow-md shadow-indigo-600/20 transition-all disabled:opacity-50"
          >
            {saving ? <Loader2 size={15} className="animate-spin" /> : <Save size={15} />}
            <span>{saving ? 'Publishing...' : 'Save Live Syllabus'}</span>
          </button>
        </div>
      </div>

      {/* Editor / Preview */}
      {loading ? (
        <div className="py-16 text-center text-slate-400 text-xs font-bold flex items-center justify-center gap-2">
          <Loader2 size={18} className="animate-spin text-indigo-600" /> Loading syllabus...
        </div>
      ) : previewMode ? (
        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 prose prose-slate max-w-none max-h-[540px] overflow-y-auto text-sm">
          {content ? <ReactMarkdown>{content}</ReactMarkdown> : <p className="text-slate-400 italic">No syllabus content yet for this selection.</p>}
        </div>
      ) : (
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={18}
          placeholder="Paste or edit BEU syllabus in Markdown format (## SUBJECT NAME, #### Unit - 1, topics...)"
          className="w-full p-4 rounded-2xl bg-slate-50 border border-slate-200 font-mono text-xs text-slate-800 leading-relaxed focus:outline-none focus:border-indigo-500 focus:bg-white transition-colors"
        />
      )}
    </div>
  );
}
