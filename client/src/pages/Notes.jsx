import React, { useState, useEffect, useMemo } from 'react';
import {
  BookOpen, Search, Download, Eye,
  FolderOpen, FileDigit, ArrowRight, ArrowLeft,
  ShieldCheck, Bookmark, ChevronRight, Pencil, Trash2
} from 'lucide-react';
import { db } from '../firebase';
import { collection, orderBy, onSnapshot, query, where, doc, deleteDoc, updateDoc } from 'firebase/firestore';
import { useParams, useNavigate } from 'react-router-dom';
import GlobalSearch from '../components/GlobalSearch';
import PremiumAds from '../components/PremiumAds';
import DonateModal from '../components/DonateModal';
import SEO from '../components/SEO';
import { useAuth } from '../context/AuthContext';
import { Capacitor } from '@capacitor/core';

const BRANCHES = [
  // Core Branches
  { id: 'CSE', label: 'Computer Science', short: 'CSE', color: 'indigo', emoji: '💻', type: 'core' },
  { id: 'CIVIL', label: 'Civil Engineering', short: 'CIVIL', color: 'emerald', emoji: '🏗️', type: 'core' },
  { id: 'ME',  label: 'Mechanical Engg.', short: 'ME',  color: 'orange', emoji: '⚙️', type: 'core' },
  { id: 'EE',  label: 'Electrical Engg.', short: 'EE',  color: 'yellow', emoji: '⚡', type: 'core' },
  { id: 'ECE', label: 'Electronics & Comm.', short: 'ECE', color: 'violet', emoji: '📡', type: 'core' },
  { id: 'EEE', label: 'Electrical & Electronics', short: 'EEE', color: 'pink', emoji: '🔌', type: 'core' },
  { id: 'IT', label: 'Information Tech.', short: 'IT', color: 'indigo', emoji: 'ℹ️', type: 'core' },
  { id: 'MINING', label: 'Mining Engineering', short: 'MINING', color: 'orange', emoji: '⛏️', type: 'core' },
  { id: 'CHEMICAL', label: 'Chemical Engineering', short: 'CHEMICAL', color: 'emerald', emoji: '🧪', type: 'core' },
  { id: 'BIOMEDICAL', label: 'Biomedical Engg.', short: 'BIOMEDICAL', color: 'pink', emoji: '🧬', type: 'core' },
  { id: 'FOOD', label: 'Food Technology', short: 'FOOD', color: 'yellow', emoji: '🍎', type: 'core' },
  { id: 'AERONAUTICAL', label: 'Aeronautical Engg.', short: 'AERONAUTICAL', color: 'violet', emoji: '🚀', type: 'core' },
  { id: 'ROBOTICS', label: 'Robotics Engineering', short: 'ROBOTICS', color: 'indigo', emoji: '🤖', type: 'core' },
  { id: 'FIRE', label: 'Fire & Safety Engg.', short: 'FIRE', color: 'orange', emoji: '🔥', type: 'core' },
  { id: 'MECHATRONICS', label: 'Mechatronics Engg.', short: 'MECHATRONICS', color: 'violet', emoji: '⚙️🤖', type: 'core' },

  // Specialization Branches
  { id: 'CSE_DS', label: 'CSE (Data Science)', short: 'CSE DS', color: 'indigo', emoji: '📊', type: 'spec' },
  { id: 'CSE_AIML', label: 'CSE (AI & ML)', short: 'CSE AI/ML', color: 'indigo', emoji: '🤖', type: 'spec' },
  { id: 'CSE_AI', label: 'CSE (Artificial Intel.)', short: 'CSE AI', color: 'indigo', emoji: '🧠', type: 'spec' },
  { id: 'CSE_CYBER', label: 'CSE (Cyber Security)', short: 'CSE Cyber', color: 'indigo', emoji: '🔒', type: 'spec' },
  { id: 'CSE_IOT', label: 'CSE (IoT)', short: 'CSE IoT', color: 'indigo', emoji: '🌐', type: 'spec' },
  { id: 'CSE_NETWORKS', label: 'CSE (Networks)', short: 'CSE Networks', color: 'indigo', emoji: '🕸️', type: 'spec' },
  { id: 'ECE_VLSI', label: 'ECE (VLSI Design)', short: 'ECE VLSI', color: 'violet', emoji: '🎛️', type: 'spec' },
  { id: 'CSE_IOT_CS_BC', label: 'CSE (IoT, CS, Blockchain)', short: 'CSE IoT/CS/BC', color: 'indigo', emoji: '⛓️', type: 'spec' },
  { id: 'CIVIL_CA', label: 'Civil (Computer Appl.)', short: 'Civil CA', color: 'emerald', emoji: '🏗️💻', type: 'spec' },
];

const SEMESTERS = [1,2,3,4,5,6,7,8];

const BRANCH_COLORS = {
  indigo: { bg: 'bg-indigo-50', border: 'border-indigo-200', text: 'text-indigo-700', active: 'bg-indigo-600 text-white border-indigo-600', badge: 'bg-indigo-100 text-indigo-600' },
  violet: { bg: 'bg-violet-50', border: 'border-violet-200', text: 'text-violet-700', active: 'bg-violet-600 text-white border-violet-600', badge: 'bg-violet-100 text-violet-600' },
  orange: { bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-700', active: 'bg-orange-600 text-white border-orange-600', badge: 'bg-orange-100 text-orange-600' },
  emerald:{ bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-700', active: 'bg-emerald-600 text-white border-emerald-600', badge: 'bg-emerald-100 text-emerald-600' },
  yellow: { bg: 'bg-yellow-50', border: 'border-yellow-200', text: 'text-yellow-700', active: 'bg-yellow-500 text-white border-yellow-500', badge: 'bg-yellow-100 text-yellow-600' },
  pink:   { bg: 'bg-pink-50', border: 'border-pink-200', text: 'text-pink-700', active: 'bg-pink-600 text-white border-pink-600', badge: 'bg-pink-100 text-pink-600' },
};

export default function Notes() {
  const { branchId, semesterId } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();

  // Parse URL params for initial state
  const initialBranch = branchId ? BRANCHES.find(b => b.id.toLowerCase() === branchId.toLowerCase()) : null;
  const initialSem = semesterId ? parseInt(semesterId) : null;

  const [docs, setDocs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  // Navigation state
  const [branch, setBranch] = useState(initialBranch);
  const [sem, setSem] = useState(initialSem);
  const [folder, setFolder] = useState(null);
  const [navHistory, setNavHistory] = useState([]); // for sub-folders

  const [donateModal, setDonateModal] = useState({ isOpen: false, mode: 'SUPPORT', onProceed: null });

  useEffect(() => {
    const b = branchId ? BRANCHES.find(x => x.id.toLowerCase() === branchId.toLowerCase()) : null;
    const s = semesterId ? parseInt(semesterId) : null;
    setBranch(b);
    setSem(s);
    if (!s) {
       setFolder(null);
       setNavHistory([]);
    }
  }, [branchId, semesterId]);

  useEffect(() => {
    if (window.__PRERENDER_INJECTED) {
      setLoading(false);
      return;
    }
    const q = query(collection(db, 'documents'), where('category', '==', 'NOTES'));
    const unsub = onSnapshot(q, (snap) => {
      setDocs(snap.docs.map(d => ({ id: d.id, ...d.data() })));
      setLoading(false);
    });
    return unsub;
  }, []);

  const handleAction = (url, callback) => {
    if (url === 'generate-python-unit1') {
      import('../utils/pythonNotesPdf').then(m => m.generatePythonUnit1Notes());
      return;
    }
    if (!url || url.includes('localhost')) {
      alert('Bhai, ye file link abhi active nahi hai. Admin se sampark karein.');
      return;
    }
    // Show Donate Modal before continuing
    setDonateModal({ isOpen: true, mode: 'DOWNLOAD', onProceed: callback });
  };

  const handleEditNote = async (note) => {
    const newTitle = window.prompt("Enter new title:", note.title);
    if (!newTitle) return;
    const newSubject = window.prompt("Enter new subject:", note.subject);
    if (!newSubject) return;
    const newUrl = window.prompt("Enter new file URL:", note.fileUrl);
    if (!newUrl) return;

    try {
      await updateDoc(doc(db, 'documents', note.id), {
        title: newTitle,
        subject: newSubject,
        fileUrl: newUrl
      });
      alert('Note updated successfully!');
    } catch (err) {
      alert('Error updating note: ' + err.message);
    }
  };

  const handleDeleteNote = async (note) => {
    if (!window.confirm(`Are you sure you want to delete "${note.title}"?`)) return;
    try {
      await deleteDoc(doc(db, 'documents', note.id));
      alert('Note deleted successfully!');
    } catch (err) {
      alert('Error deleting note: ' + err.message);
    }
  };

  // Current folder id for display
  const currentFolderId = folder ? folder.id : null;

  // Subject folders at branch+sem level (parentId='root', branch=branch, semester=sem)
  const subjectFolders = useMemo(() => {
    if (!branch || !sem) return [];
    const list = docs.filter(d =>
      d.type === 'folder' &&
      (d.parentId === 'root' || !d.parentId) &&
      d.branch === branch.id &&
      String(d.semester) === String(sem) &&
      (d.category === 'NOTES' || !d.category)
    );
    return list.sort((a, b) => (a.title || '').localeCompare(b.title || '', undefined, { numeric: true }));
  }, [docs, branch, sem]);

  // Orphan files: notes at root level that don't belong to any folder
  const looseFiles = useMemo(() => {
    if (!branch || !sem) return [];
    return docs.filter(d =>
      d.type !== 'folder' &&
      (!d.parentId || d.parentId === 'root') &&
      d.branch === branch.id &&
      String(d.semester) === String(sem) &&
      (d.category === 'NOTES' || !d.category) &&
      d.fileUrl
    ).sort((a, b) => (a.title || '').localeCompare(b.title || '', undefined, { numeric: true }));
  }, [docs, branch, sem]);

  // Files inside selected folder
  const folderFiles = useMemo(() => {
    if (!folder) return [];

    return docs.filter(d =>
      d.parentId === folder.id &&
      (d.category === 'NOTES' || !d.category || d.type === 'folder')
    ).sort((a, b) => (a.title || '').localeCompare(b.title || '', undefined, { numeric: true }));
  }, [docs, folder]);

  // Search across all NOTES files
  const searchResults = useMemo(() => {
    if (!search.trim()) return [];
    return docs.filter(d =>
      d.category === 'NOTES' &&
      d.type !== 'folder' &&
      (d.title?.toLowerCase().includes(search.toLowerCase()) ||
       d.subject?.toLowerCase().includes(search.toLowerCase()))
    );
  }, [docs, search]);

  const handleBranchSelect = (b) => {
    setBranch(b);
    setSem(null);
    setFolder(null);
    setSearch('');
    navigate(`/notes/${b.id.toLowerCase()}`);
  };

  const handleSemSelect = (s) => {
    setSem(s);
    setFolder(null);
    setSearch('');
    if (branch) navigate(`/notes/${branch.id.toLowerCase()}/${s}`);
  };

  const goHome = () => { setBranch(null); setSem(null); setFolder(null); setNavHistory([]); navigate('/notes'); };
  const goToBranch = () => { setSem(null); setFolder(null); setNavHistory([]); navigate(`/notes/${branch.id.toLowerCase()}`); };
  const goToSem = () => { setFolder(null); setNavHistory([]); navigate(`/notes/${branch.id.toLowerCase()}/${sem}`); };

  const selectFolder = (f) => {
    if (folder) setNavHistory(h => [...h, folder]);
    setFolder(f);
  };

  const goBack = () => {
    if (navHistory.length > 0) {
      const prev = navHistory[navHistory.length - 1];
      setNavHistory(h => h.slice(0, -1));
      setFolder(prev);
    } else {
      setFolder(null);
    }
  };

  const step = !branch ? 'branch' : !sem ? 'sem' : !folder ? 'subject' : 'files';

  const branchColor = branch ? BRANCH_COLORS[branch.color] : BRANCH_COLORS.indigo;

  return (
    <div className="max-w-5xl mx-auto px-3 md:px-4 pb-24 space-y-4 md:space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Header */}
      <div className="bg-white p-4 md:p-10 rounded-2xl md:rounded-[2.5rem] border border-slate-200/80 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-indigo-600/8 rounded-full blur-[80px] pointer-events-none"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
            <div className="p-2.5 md:p-3.5 bg-indigo-600/15 text-indigo-500 rounded-xl md:rounded-2xl">
              <BookOpen size={22} className="md:hidden" />
              <BookOpen size={30} className="hidden md:block" />
            </div>
            <div>
              <h1 className="text-xl md:text-3xl font-[1000] text-slate-900 tracking-tighter uppercase leading-none">Notes Library</h1>
              <p className="text-[8px] md:text-[10px] text-slate-400 font-black uppercase tracking-[0.2em] md:tracking-[0.3em] mt-0.5 md:mt-1">Branch → Semester → Subject → Files</p>
            </div>
          </div>

          {/* Breadcrumb */}
          <div className="flex items-center gap-1 md:gap-1.5 flex-wrap mb-3 md:mb-5">
            <button onClick={goHome} className={`text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg transition-all ${step === 'branch' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-indigo-600 hover:bg-indigo-50'}`}>📚 Notes</button>
            {branch && <><ChevronRight size={12} className="text-slate-300" /><button onClick={goToBranch} className={`text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg transition-all ${step === 'sem' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-indigo-600 hover:bg-indigo-50'}`}>{branch.emoji} {branch.short}</button></>}
            {sem && <><ChevronRight size={12} className="text-slate-300" /><button onClick={goToSem} className={`text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg transition-all ${step === 'subject' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-indigo-600 hover:bg-indigo-50'}`}>Sem {sem}</button></>}
            {folder && <><ChevronRight size={12} className="text-slate-300" />{navHistory.map((h, i) => (<React.Fragment key={h.id}><button onClick={() => { setNavHistory(nh => nh.slice(0, i)); setFolder(h); }} className="text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg text-slate-400 hover:text-indigo-600 hover:bg-indigo-50">{h.title}</button><ChevronRight size={12} className="text-slate-300" /></React.Fragment>))}<span className="text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg bg-indigo-600 text-white">{folder.title}</span></>}
          </div>

          {/* Search */}
          <div className="relative group">
            <Search className="absolute left-4 md:left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500" size={16} />
            <input value={search} onChange={e => setSearch(e.target.value)}
              placeholder="Search notes..."
              className="w-full bg-slate-100 border-2 border-transparent focus:border-indigo-500/40 rounded-xl md:rounded-2xl py-3 md:py-4 pl-11 md:pl-14 pr-4 md:pr-5 text-slate-900 text-xs md:text-sm font-bold outline-none transition-all placeholder:text-slate-400" />
          </div>
        </div>
      </div>
      
      {/* SEO Tags */}
      {folder && branch && sem ? (
        <SEO 
          title={`${folder.title} Notes - BEU ${branch.short} Sem ${sem} | Apna College Bihar`}
          description={`Download free PDF notes for ${folder.title} (Semester ${sem} ${branch.short}) at Apna College Bihar.`}
          keywords={`BEU Notes, ${folder.title} Notes, ${branch.short} Semester ${sem}`}
        />
      ) : branch && sem ? (
        <SEO 
          title={`BEU ${branch.short} Semester ${sem} Notes PDF Download`} 
          description={`Download free B.Tech ${branch.label} Semester ${sem} notes for Bihar Engineering University (BEU). Best study material, chapter-wise PDFs.`}
          keywords={`BEU Notes, ${branch.short} Notes, Semester ${sem} Notes, Bihar Engineering Notes, B.Tech Notes PDF`}
        />
      ) : branch ? (
        <SEO 
          title={`BEU ${branch.short} B.Tech Notes PDF Download - All Semesters`} 
          description={`Free B.Tech ${branch.label} notes for all semesters under Bihar Engineering University (BEU). Organized study material and PDFs.`}
          keywords={`BEU Notes, ${branch.short} Notes, Bihar Engineering Notes, B.Tech Notes PDF`}
        />
      ) : (
        <SEO 
          title="BEU B.Tech Notes PDF Download | Apna College Bihar" 
          description="Download free B.Tech semester notes and study material for all branches under Bihar Engineering University (BEU)."
        />
      )}

      {/* Search Results */}
      {search.trim() && (
        <div>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">{searchResults.length} result(s) found</p>
          {searchResults.length === 0 ? (
            <div className="py-16 text-center bg-white rounded-[2rem] border border-dashed border-slate-200">
              <p className="text-slate-400 font-bold text-sm">No notes found for "{search}"</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
              {searchResults.map(d => <FileCard key={d.id} d={d} onAction={handleAction} accentColor="indigo" user={user} onEdit={handleEditNote} onDelete={handleDeleteNote} />)}
            </div>
          )}
        </div>
      )}

      {/* Step: Branch Selection */}
      {!search.trim() && step === 'branch' && (
        <div className="space-y-10">
          {/* Core Branches */}
          <div>
            <div className="flex items-center gap-2 mb-4 px-1">
              <span className="text-slate-400 text-xs font-black uppercase tracking-[0.25em]">Core Branches</span>
              <div className="h-px flex-1 bg-slate-200"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5 md:gap-4">
              {BRANCHES.filter(b => b.type === 'core').map(b => {
                const c = BRANCH_COLORS[b.color] || BRANCH_COLORS.indigo;
                return (
                  <button key={b.id} onClick={() => { setBranch(b); setSem(null); setFolder(null); }}
                    className={`flex flex-col items-start gap-2 md:gap-3 p-3.5 md:p-5 rounded-2xl md:rounded-[1.75rem] border-2 ${c.bg} ${c.border} hover:scale-[1.02] active:scale-[0.98] transition-all text-left shadow-sm hover:shadow-md`}>
                    <span className="text-xl md:text-2xl">{b.emoji}</span>
                    <div>
                      <p className={`text-sm md:text-base font-[900] tracking-tight ${c.text}`}>{b.short}</p>
                      <p className="text-[8px] md:text-[9px] font-bold text-slate-500 mt-0.5 leading-tight">{b.label}</p>
                    </div>
                    <div className={`mt-auto flex items-center gap-1.5 text-[9px] font-black uppercase tracking-widest ${c.text}`}>
                      Select <ArrowRight size={10} />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Specialization Branches */}
          <div>
            <div className="flex items-center gap-2 mb-4 px-1">
              <span className="text-slate-400 text-xs font-black uppercase tracking-[0.25em]">Specialization Branches</span>
              <div className="h-px flex-1 bg-slate-200"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5 md:gap-4">
              {BRANCHES.filter(b => b.type === 'spec').map(b => {
                const c = BRANCH_COLORS[b.color] || BRANCH_COLORS.indigo;
                return (
                  <button key={b.id} onClick={() => { setBranch(b); setSem(null); setFolder(null); }}
                    className={`flex flex-col items-start gap-2 md:gap-3 p-3.5 md:p-5 rounded-2xl md:rounded-[1.75rem] border-2 ${c.bg} ${c.border} hover:scale-[1.02] active:scale-[0.98] transition-all text-left shadow-sm hover:shadow-md`}>
                    <span className="text-xl md:text-2xl">{b.emoji}</span>
                    <div>
                      <p className={`text-sm md:text-base font-[900] tracking-tight ${c.text}`}>{b.short}</p>
                      <p className="text-[8px] md:text-[9px] font-bold text-slate-500 mt-0.5 leading-tight">{b.label}</p>
                    </div>
                    <div className={`mt-auto flex items-center gap-1.5 text-[9px] font-black uppercase tracking-widest ${c.text}`}>
                      Select <ArrowRight size={10} />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Step: Semester Selection */}
      {!search.trim() && step === 'sem' && (
        <div>
          <div className="flex items-center gap-3 mb-4">
            <button onClick={goHome} className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 transition-all"><ArrowLeft size={16} className="text-slate-600" /></button>
            <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">{branch.emoji} {branch.label} — Select Semester</p>
          </div>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-2.5 md:gap-3">
            {SEMESTERS.map(s => (
              <button key={s} onClick={() => setSem(s)}
                className={`aspect-square rounded-2xl flex flex-col items-center justify-center border-2 font-[900] text-xl transition-all hover:scale-105 active:scale-95 shadow-sm hover:shadow-md ${branchColor.bg} ${branchColor.border} ${branchColor.text}`}>
                {s}
                <span className="text-[8px] font-bold text-slate-400 mt-0.5">SEM</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step: Subject Folders */}
      {!search.trim() && step === 'subject' && (
        <div>
          <div className="flex items-center gap-3 mb-4">
            <button onClick={goToBranch} className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 transition-all"><ArrowLeft size={16} className="text-slate-600" /></button>
            <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">{branch.emoji} {branch.short} · Semester {sem} — Select Subject</p>
          </div>
          {loading ? (
            <div className="py-16 text-center"><p className="text-slate-400 font-black uppercase tracking-widest animate-pulse text-sm">Loading subjects...</p></div>
          ) : subjectFolders.length === 0 && looseFiles.length === 0 ? (
            <div className="py-16 text-center bg-white rounded-[2rem] border border-dashed border-slate-200">
              <div className="text-4xl mb-3">📂</div>
              <p className="text-slate-800 font-black text-base uppercase tracking-tight">Coming Soon!</p>
              <p className="text-slate-400 text-xs font-bold mt-1">Wait bruh! Jald hi notes upload honge. Stay tuned!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
              {subjectFolders.map(f => (
                <button key={f.id} onClick={() => selectFolder(f)}
                  className={`flex flex-col items-start gap-3 md:gap-4 p-5 md:p-7 rounded-2xl md:rounded-[2rem] border-2 bg-white hover:${branchColor.bg} ${branchColor.border} hover:scale-[1.01] active:scale-[0.99] transition-all text-left shadow-sm hover:shadow-lg group`}>
                  <div className={`w-11 h-11 md:w-14 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center ${branchColor.badge}`}>
                    <FolderOpen size={20} className={`md:hidden ${branchColor.text.replace('text-', 'text-')}`} />
                    <FolderOpen size={26} className={`hidden md:block ${branchColor.text.replace('text-', 'text-')}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base md:text-lg font-[900] text-slate-900 uppercase tracking-tight leading-tight">{f.title}</h3>
                    <p className="text-[9px] md:text-[10px] font-bold text-slate-400 mt-1">{docs.filter(x => x.parentId === f.id).length} files inside</p>
                  </div>
                  <div className={`flex items-center gap-1.5 text-[9px] font-black uppercase tracking-widest ${branchColor.text} group-hover:gap-2.5 transition-all`}>
                    Open Notes <ArrowRight size={10} />
                  </div>
                </button>
              ))}
              {/* Orphan files not inside any folder */}
              {looseFiles.map(d => (
                  <FileCard 
                    key={d.id} 
                    d={d} 
                    onAction={handleAction} 
                    accentColor={branch?.color}
                    user={user}
                    onEdit={handleEditNote}
                    onDelete={handleDeleteNote}
                  />
              ))}
            </div>
          )}
        </div>
      )}

      {/* Step: Files inside Subject */}
      {!search.trim() && step === 'files' && (
        <div>
          <div className="flex items-center gap-3 mb-4">
            <button onClick={goBack} className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 transition-all"><ArrowLeft size={16} className="text-slate-600" /></button>
            <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">{folder.title} — Notes Files</p>
          </div>
          {loading ? (
            <div className="py-16 text-center"><p className="text-slate-400 font-black uppercase tracking-widest animate-pulse text-sm">Loading files...</p></div>
          ) : folderFiles.length === 0 ? (
            <div className="py-16 text-center bg-white rounded-[2rem] border border-dashed border-slate-200">
              <div className="text-4xl mb-3">📄</div>
              <p className="text-slate-800 font-black text-base uppercase tracking-tight">No files yet</p>
              <p className="text-slate-400 text-xs font-bold mt-1">Is subject mein abhi koi notes upload nahi hua hai</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
              {folderFiles.map((d, idx) => (
                <React.Fragment key={d.id}>
                  {d.type === 'folder' ? (
                    <button onClick={() => selectFolder(d)}
                      className="flex flex-col items-start gap-3 md:gap-4 p-5 md:p-7 rounded-2xl md:rounded-[2rem] border-2 bg-white hover:bg-indigo-50 border-indigo-100 hover:border-indigo-300 transition-all text-left shadow-sm hover:shadow-md group">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl flex items-center justify-center bg-indigo-100"><FolderOpen size={20} className="text-indigo-600" /></div>
                      <div>
                        <h3 className="text-base font-[900] text-slate-900 uppercase tracking-tight">{d.title}</h3>
                        <p className="text-[10px] font-bold text-slate-400 mt-1">{docs.filter(x => x.parentId === d.id).length} files</p>
                      </div>
                      <div className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-widest text-indigo-600 group-hover:gap-2.5 transition-all">Open <ArrowRight size={10} /></div>
                    </button>
                  ) : (
                    <FileCard d={d} onAction={handleAction} accentColor="indigo" user={user} onEdit={handleEditNote} onDelete={handleDeleteNote} />
                  )}
                  {idx % 4 === 3 && <div className="col-span-1"><PremiumAds type="INLINE" onClick={() => setDonateModal({isOpen: true, mode: 'SUPPORT'})} /></div>}
                </React.Fragment>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Footer */}
      <div className="bg-slate-50 p-4 md:p-6 rounded-2xl md:rounded-[2.5rem] border border-slate-200/50 flex items-center gap-3">
        <div className="w-9 h-9 md:w-10 md:h-10 bg-indigo-100 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0"><ShieldCheck size={18} className="text-indigo-600"/></div>
        <div>
          <p className="text-slate-900 font-black uppercase text-[10px] md:text-xs">Verified Academic Content</p>
          <p className="text-[8px] md:text-[9px] text-slate-400 font-bold uppercase mt-0.5">Files verified by ACB Admin Team</p>
        </div>
      </div>

      {/* ── Educational SEO Content ── */}
      <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-200/50 mt-12 mx-auto prose prose-slate max-w-none shadow-sm mb-8">
        <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tighter mb-6">Bihar Engineering University (BEU) B.Tech Notes & Study Material</h2>
        
        <p className="text-slate-700 text-lg leading-relaxed mb-6">
          Welcome to Apna College Bihar's dedicated portal for <strong>B.Tech Notes for Bihar Engineering University (BEU)</strong>. This is the largest, most organized, and entirely free repository designed specifically for engineering students across Bihar. Whether you are pursuing Computer Science Engineering (CSE), Civil Engineering, Mechanical Engineering, Electrical Engineering, or specialized branches like Artificial Intelligence, our platform provides comprehensive, chapter-wise handwritten and digital notes. All materials are strictly aligned with the latest AICTE guidelines and the official BEU Syllabus.
        </p>

        <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-2xl my-8">
          <h3 className="text-xl font-bold text-indigo-900 mt-0 mb-3">Why Rely on Official BEU Syllabus Notes?</h3>
          <p className="text-indigo-800 mb-0">
            The Bihar Engineering University standardizes the curriculum across all 38+ Government Engineering Colleges in Bihar, including prestigious institutions like MIT Muzaffarpur, BCE Bhagalpur, and DCE Darbhanga. Relying on generic internet notes can be detrimental to your grades because they often miss the specific modules and derivations required for your End Semester Examinations. Our team meticulously curates notes from college toppers, senior students, and highly qualified faculties to ensure they exactly match the <strong>BEU Module-wise breakdown</strong>. This targeted approach ensures you maximize your study efficiency and don't waste time on irrelevant topics.
          </p>
        </div>

        <h3 className="text-2xl font-bold text-slate-800 mt-10 mb-5">How to Effectively Use These Engineering Notes</h3>
        <p className="text-slate-700 mb-4">
          To get the most out of our study materials and secure a high SGPA/CGPA, follow this structured approach:
        </p>
        <ol className="space-y-4 text-slate-700 mb-8">
          <li><strong>Select your specific Branch and Semester:</strong> Navigation is straightforward. Choose from core branches like CSE, Civil, ECE, Mechanical, IT, etc., and select your current semester (Sem 1 to 8) to find your exact curriculum.</li>
          <li><strong>Locate the Subject Folder:</strong> Find folders labeled with your specific subject code (e.g., Physics, Engineering Chemistry, Basic Electrical Engineering, Data Structures & Algorithms, Machine Learning).</li>
          <li><strong>Download or View Online:</strong> Click the Download icon to save the high-quality PDF directly to your device for offline reading, or click 'View' to read directly in our fast, integrated PDF viewer without downloading.</li>
          <li><strong>Cross-Reference with the Syllabus:</strong> Always keep a copy of the official BEU syllabus handy. As you read through a module in our notes, check it off your syllabus copy to track your progress.</li>
        </ol>

        <h3 className="text-2xl font-bold text-slate-800 mt-10 mb-6">Frequently Asked Questions (FAQs)</h3>
        
        <div className="space-y-6">
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <h4 className="text-lg font-bold text-slate-900 mb-2">Are these Notes Sufficient for BEU End Semester Exams?</h4>
            <p className="text-slate-600 mb-0">
              Absolutely! These notes have been thoroughly tested by thousands of engineering students across Bihar. However, to maximize your SGPA and CGPA, we strongly recommend combining these notes with our <strong>Previous Year Questions (PYQs)</strong> section. While notes build your conceptual foundation and help in understanding complex derivations and numericals, solving PYQs is the ultimate strategy to understand the exam pattern and question framing.
            </p>
          </div>

          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <h4 className="text-lg font-bold text-slate-900 mb-2">Is the study material completely free?</h4>
            <p className="text-slate-600 mb-0">
              Yes, Apna College Bihar is committed to democratizing engineering education in Bihar. All our B.Tech notes, previous year question papers, syllabus copies, and counselling tools are 100% free for all students. You do not need to pay any subscription fees to download or view the PDFs.
            </p>
          </div>

          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <h4 className="text-lg font-bold text-slate-900 mb-2">How often are the notes updated?</h4>
            <p className="text-slate-600 mb-0">
              Our academic team and community of student contributors continuously review and update the content. Whenever BEU introduces a syllabus change (like the recent updates to the CSE and emerging branches curriculum), we prioritize acquiring and uploading the updated notes. We ensure that the material reflects the most current academic requirements.
            </p>
          </div>
        </div>
      </div>

      <DonateModal 
        isOpen={donateModal.isOpen}
        mode={donateModal.mode}
        onClose={() => setDonateModal({ ...donateModal, isOpen: false })}
        onContinueWithoutDonating={donateModal.onProceed}
      />
    </div>
  );
}

function FileCard({ d, onAction, accentColor = 'indigo', user, onEdit, onDelete }) {
  const colors = {
    indigo: { icon: 'bg-indigo-100 text-indigo-600', badge: 'bg-indigo-50 text-indigo-500 border-indigo-200', dl: 'bg-indigo-100 hover:bg-indigo-600 text-indigo-600 hover:text-white border-indigo-200' },
    amber:  { icon: 'bg-amber-100 text-amber-600',  badge: 'bg-amber-50 text-amber-500 border-amber-200',  dl: 'bg-amber-100 hover:bg-amber-600 text-amber-600 hover:text-white border-amber-200' },
  };
  const c = colors[accentColor] || colors.indigo;
  return (
    <div className="relative bg-white rounded-2xl md:rounded-[2rem] border border-slate-200/80 p-4 md:p-6 hover:border-indigo-300/50 transition-all group flex flex-col shadow-sm hover:shadow-md">
      
      {/* Admin Actions */}
      {(user?.role === 'SUPER_ADMIN' || user?.role === 'ADMIN') && (
        <div className="absolute top-4 right-4 flex gap-2 z-10">
           <button onClick={(e) => { e.stopPropagation(); onEdit && onEdit(d); }} className="p-1.5 bg-blue-50 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition-all"><Pencil size={14} /></button>
           <button onClick={(e) => { e.stopPropagation(); onDelete && onDelete(d); }} className="p-1.5 bg-red-50 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition-all"><Trash2 size={14} /></button>
        </div>
      )}

      <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl flex items-center justify-center mb-3 md:mb-4 ${c.icon} group-hover:scale-110 transition-transform`}>
        <FileDigit size={18} className="md:hidden" />
        <FileDigit size={22} className="hidden md:block" />
      </div>
      <div className="flex-1 space-y-1 md:space-y-1.5 mb-3 md:mb-4">
        <div className="flex items-center gap-1.5 md:gap-2 flex-wrap">
          <span className={`text-[7px] md:text-[8px] font-black px-1.5 md:px-2 py-0.5 rounded-full uppercase tracking-widest border ${c.badge}`}>NOTES</span>
          {d.semester && <span className="text-[7px] md:text-[8px] font-black bg-slate-100 text-slate-500 px-1.5 md:px-2 py-0.5 rounded-full uppercase tracking-widest border border-slate-200">Sem {d.semester}</span>}
        </div>
        <h3 className="text-xs md:text-sm font-[900] text-slate-900 uppercase tracking-tight leading-tight">{d.title}</h3>
        {d.subject && <p className="text-[9px] md:text-[10px] font-bold text-slate-500 flex items-center gap-1"><Bookmark size={9} className="text-indigo-400" />{d.subject}</p>}
      </div>
      <div className="flex items-center gap-1.5 md:gap-2 pt-3 md:pt-4 border-t border-slate-100">
        <button onClick={() => onAction(d.fileUrl, () => window.open(d.fileUrl, '_blank'))}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 md:py-3 bg-slate-50 hover:bg-slate-100 text-slate-700 rounded-lg md:rounded-xl text-[8px] md:text-[9px] font-black uppercase tracking-widest transition-all">
          <Eye size={11} /> View
        </button>
        {!Capacitor.isNativePlatform() && (
          <button onClick={() => onAction(d.fileUrl, () => { 
            window.open(d.fileUrl, '_system'); 
          })}
            className={`p-2.5 md:p-3 rounded-lg md:rounded-xl transition-all border ${c.dl}`}><Download size={12} /></button>
        )}
        <button onClick={() => onAction(d.fileUrl, () => window.open(`https://wa.me/?text=${encodeURIComponent(`Check out: ${d.title} - ${d.fileUrl}`)}`, '_blank'))}
          className="p-2.5 md:p-3 bg-emerald-50 hover:bg-emerald-600 text-emerald-600 hover:text-white rounded-lg md:rounded-xl transition-all border border-emerald-200">
          <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.653a11.734 11.734 0 005.682 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        </button>
      </div>
    </div>
  );
}
