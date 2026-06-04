import React, { useState, useEffect, useMemo } from 'react';
import {
  FileDigit, Search, Download, Eye,
  FolderOpen, ArrowRight, ArrowLeft,
  ShieldCheck, Bookmark, FolderPlus, ChevronRight
} from 'lucide-react';
import { db, storage } from '../firebase';
import { collection, onSnapshot, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useAuth } from '../context/AuthContext';
import PremiumAds from '../components/PremiumAds';

const BRANCHES = [
  // Core Branches
  { id: 'CSE', label: 'Computer Science', short: 'CSE', color: 'amber', emoji: '💻', type: 'core' },
  { id: 'CIVIL', label: 'Civil Engineering', short: 'CIVIL', color: 'lime', emoji: '🏗️', type: 'core' },
  { id: 'ME',  label: 'Mechanical Engg.', short: 'ME',  color: 'red', emoji: '⚙️', type: 'core' },
  { id: 'EE',  label: 'Electrical Engg.', short: 'EE',  color: 'yellow', emoji: '⚡', type: 'core' },
  { id: 'ECE', label: 'Electronics & Comm.', short: 'ECE', color: 'orange', emoji: '📡', type: 'core' },
  { id: 'EEE', label: 'Electrical & Electronics', short: 'EEE', color: 'pink', emoji: '🔌', type: 'core' },
  { id: 'IT', label: 'Information Tech.', short: 'IT', color: 'amber', emoji: 'ℹ️', type: 'core' },
  { id: 'MINING', label: 'Mining Engineering', short: 'MINING', color: 'red', emoji: '⛏️', type: 'core' },
  { id: 'CHEMICAL', label: 'Chemical Engineering', short: 'CHEMICAL', color: 'lime', emoji: '🧪', type: 'core' },
  { id: 'BIOMEDICAL', label: 'Biomedical Engg.', short: 'BIOMEDICAL', color: 'pink', emoji: '🧬', type: 'core' },
  { id: 'FOOD', label: 'Food Technology', short: 'FOOD', color: 'yellow', emoji: '🍎', type: 'core' },
  { id: 'AERONAUTICAL', label: 'Aeronautical Engg.', short: 'AERONAUTICAL', color: 'orange', emoji: '🚀', type: 'core' },
  { id: 'ROBOTICS', label: 'Robotics Engineering', short: 'ROBOTICS', color: 'amber', emoji: '🤖', type: 'core' },
  { id: 'FIRE', label: 'Fire & Safety Engg.', short: 'FIRE', color: 'red', emoji: '🔥', type: 'core' },
  { id: 'MECHATRONICS', label: 'Mechatronics Engg.', short: 'MECHATRONICS', color: 'orange', emoji: '⚙️🤖', type: 'core' },

  // Specialization Branches
  { id: 'CSE_DS', label: 'CSE (Data Science)', short: 'CSE DS', color: 'amber', emoji: '📊', type: 'spec' },
  { id: 'CSE_AIML', label: 'CSE (AI & ML)', short: 'CSE AI/ML', color: 'amber', emoji: '🤖', type: 'spec' },
  { id: 'CSE_AI', label: 'CSE (Artificial Intel.)', short: 'CSE AI', color: 'amber', emoji: '🧠', type: 'spec' },
  { id: 'CSE_CYBER', label: 'CSE (Cyber Security)', short: 'CSE Cyber', color: 'amber', emoji: '🔒', type: 'spec' },
  { id: 'CSE_IOT', label: 'CSE (IoT)', short: 'CSE IoT', color: 'amber', emoji: '🌐', type: 'spec' },
  { id: 'CSE_NETWORKS', label: 'CSE (Networks)', short: 'CSE Networks', color: 'amber', emoji: '🕸️', type: 'spec' },
  { id: 'ECE_VLSI', label: 'ECE (VLSI Design)', short: 'ECE VLSI', color: 'orange', emoji: '🎛️', type: 'spec' },
  { id: 'CSE_IOT_CS_BC', label: 'CSE (IoT, CS, Blockchain)', short: 'CSE IoT/CS/BC', color: 'amber', emoji: '⛓️', type: 'spec' },
  { id: 'CIVIL_CA', label: 'Civil (Computer Appl.)', short: 'Civil CA', color: 'lime', emoji: '🏗️💻', type: 'spec' },
];

const SEMESTERS = [1,2,3,4,5,6,7,8];

const BRANCH_COLORS = {
  amber:  { bg: 'bg-amber-50',  border: 'border-amber-200',  text: 'text-amber-700',  badge: 'bg-amber-100 text-amber-600'  },
  orange: { bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-700', badge: 'bg-orange-100 text-orange-600' },
  red:    { bg: 'bg-red-50',    border: 'border-red-200',    text: 'text-red-700',    badge: 'bg-red-100 text-red-600'      },
  lime:   { bg: 'bg-lime-50',   border: 'border-lime-200',   text: 'text-lime-700',   badge: 'bg-lime-100 text-lime-600'    },
  yellow: { bg: 'bg-yellow-50', border: 'border-yellow-200', text: 'text-yellow-700', badge: 'bg-yellow-100 text-yellow-600'},
  pink:   { bg: 'bg-pink-50',   border: 'border-pink-200',   text: 'text-pink-700',   badge: 'bg-pink-100 text-pink-600'   },
};

export default function PYQ() {
  const { user } = useAuth();
  const [docs, setDocs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  const [branch, setBranch] = useState(null);
  const [sem, setSem] = useState(null);
  const [folder, setFolder] = useState(null);
  const [navHistory, setNavHistory] = useState([]);

  const [showUpload, setShowUpload] = useState(false);
  const [uploadData, setUploadData] = useState({ title: '', subject: '', category: 'PYQ', semester: '1', file: null, externalUrl: '' });
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, 'documents'), (snap) => {
      setDocs(snap.docs.map(d => ({ id: d.id, ...d.data() })));
      setLoading(false);
    });
    return unsub;
  }, []);

  const handleAction = (url, callback) => {
    if (!url || url.includes('localhost')) { alert('Ye link abhi active nahi hai. Admin se sampark karein.'); return; }
    callback();
  };

  // Subject folders for branch+sem in PYQ category
  const subjectFolders = useMemo(() => {
    if (!branch || !sem) return [];
    return docs.filter(d =>
      d.type === 'folder' &&
      (d.parentId === 'root' || !d.parentId) &&
      d.branch === branch.id &&
      String(d.semester) === String(sem) &&
      (d.category === 'PYQ' || d.category === 'pyq')
    );
  }, [docs, branch, sem]);

  const folderFiles = useMemo(() => {
    if (!folder) return [];
    return docs.filter(d =>
      d.parentId === folder.id &&
      (d.category === 'PYQ' || d.type === 'folder')
    );
  }, [docs, folder]);

  const searchResults = useMemo(() => {
    if (!search.trim()) return [];
    return docs.filter(d =>
      d.category === 'PYQ' &&
      d.type !== 'folder' &&
      (d.title?.toLowerCase().includes(search.toLowerCase()) ||
       d.subject?.toLowerCase().includes(search.toLowerCase()))
    );
  }, [docs, search]);

  const goHome = () => { setBranch(null); setSem(null); setFolder(null); setNavHistory([]); };
  const goToBranch = () => { setSem(null); setFolder(null); setNavHistory([]); };
  const goToSem = () => { setFolder(null); setNavHistory([]); };

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
  const branchColor = branch ? BRANCH_COLORS[branch.color] : BRANCH_COLORS.amber;

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!uploadData.title) { alert('Title daalo!'); return; }
    setUploading(true);
    try {
      let finalUrl = uploadData.externalUrl;
      if (uploadData.file) {
        if (uploadData.file.size > 10 * 1024 * 1024) { alert('10MB se badi file nahi chalegi!'); setUploading(false); return; }
        const storageRef = ref(storage, `pyq/${Date.now()}_${uploadData.file.name.replace(/\s+/g, '_')}`);
        const snapshot = await uploadBytes(storageRef, uploadData.file);
        finalUrl = await getDownloadURL(snapshot.ref);
      }
      if (!finalUrl && uploadData.category !== 'FOLDER') { alert('File ya Drive link daalo!'); setUploading(false); return; }
      await addDoc(collection(db, 'documents'), {
        title: uploadData.title,
        subject: uploadData.subject.toUpperCase() || 'GENERAL',
        category: 'PYQ',
        semester: sem ? String(sem) : uploadData.semester,
        branch: branch?.id || '',
        fileUrl: finalUrl || '',
        parentId: folder?.id || 'root',
        type: 'file',
        createdAt: new Date().toISOString(),
        verified: false,
        uploadedBy: user?.email || 'Guest'
      });
      setShowUpload(false);
      setUploadData({ title: '', subject: '', category: 'PYQ', semester: '1', file: null, externalUrl: '' });
      alert('Uploaded! Admin verify karega.');
    } catch(err) { alert('Error: ' + err.message); }
    finally { setUploading(false); }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 pb-24 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">

      {/* Header */}
      <div className="bg-white p-6 md:p-10 rounded-[2.5rem] border border-slate-200/80 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-amber-500/8 rounded-full blur-[80px] pointer-events-none"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3.5 bg-amber-500/15 text-amber-500 rounded-2xl">
              <FileDigit size={30} />
            </div>
            <div>
              <h1 className="text-3xl font-[1000] text-slate-900 tracking-tighter uppercase leading-none">PYQ Bank</h1>
              <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.3em] mt-1">Branch → Semester → Subject → Papers</p>
            </div>
          </div>

          {/* Breadcrumb */}
          <div className="flex items-center gap-1.5 flex-wrap mb-5">
            <button onClick={goHome} className={`text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg transition-all ${step === 'branch' ? 'bg-amber-500 text-white' : 'text-slate-400 hover:text-amber-600 hover:bg-amber-50'}`}>📋 PYQ</button>
            {branch && <><ChevronRight size={12} className="text-slate-300" /><button onClick={goToBranch} className={`text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg transition-all ${step === 'sem' ? 'bg-amber-500 text-white' : 'text-slate-400 hover:text-amber-600 hover:bg-amber-50'}`}>{branch.emoji} {branch.short}</button></>}
            {sem && <><ChevronRight size={12} className="text-slate-300" /><button onClick={goToSem} className={`text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg transition-all ${step === 'subject' ? 'bg-amber-500 text-white' : 'text-slate-400 hover:text-amber-600 hover:bg-amber-50'}`}>Sem {sem}</button></>}
            {folder && <><ChevronRight size={12} className="text-slate-300" />{navHistory.map((h, i) => (<React.Fragment key={h.id}><button onClick={() => { setNavHistory(nh => nh.slice(0, i)); setFolder(h); }} className="text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg text-slate-400 hover:text-amber-600 hover:bg-amber-50">{h.title}</button><ChevronRight size={12} className="text-slate-300" /></React.Fragment>))}<span className="text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg bg-amber-500 text-white">{folder.title}</span></>}
          </div>

          {/* Search */}
          <div className="relative group">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-amber-500" size={18} />
            <input value={search} onChange={e => setSearch(e.target.value)}
              placeholder="Search PYQ across all subjects..."
              className="w-full bg-slate-100 border-2 border-transparent focus:border-amber-500/40 rounded-2xl py-4 pl-14 pr-5 text-slate-900 text-sm font-bold outline-none transition-all placeholder:text-slate-400" />
          </div>
        </div>
      </div>

      {/* Search Results */}
      {search.trim() && (
        <div>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">{searchResults.length} result(s) found</p>
          {searchResults.length === 0 ? (
            <div className="py-16 text-center bg-white rounded-[2rem] border border-dashed border-slate-200">
              <p className="text-slate-400 font-bold text-sm">No PYQs found for "{search}"</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {searchResults.map(d => <PYQFileCard key={d.id} d={d} onAction={handleAction} />)}
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
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {BRANCHES.filter(b => b.type === 'core').map(b => {
                const c = BRANCH_COLORS[b.color] || BRANCH_COLORS.amber;
                return (
                  <button key={b.id} onClick={() => { setBranch(b); setSem(null); setFolder(null); }}
                    className={`flex flex-col items-start gap-3 p-5 rounded-[1.75rem] border-2 ${c.bg} ${c.border} hover:scale-[1.02] active:scale-[0.98] transition-all text-left shadow-sm hover:shadow-md`}>
                    <span className="text-2xl">{b.emoji}</span>
                    <div>
                      <p className={`text-base font-[900] tracking-tight ${c.text}`}>{b.short}</p>
                      <p className="text-[9px] font-bold text-slate-500 mt-0.5">{b.label}</p>
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
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {BRANCHES.filter(b => b.type === 'spec').map(b => {
                const c = BRANCH_COLORS[b.color] || BRANCH_COLORS.amber;
                return (
                  <button key={b.id} onClick={() => { setBranch(b); setSem(null); setFolder(null); }}
                    className={`flex flex-col items-start gap-3 p-5 rounded-[1.75rem] border-2 ${c.bg} ${c.border} hover:scale-[1.02] active:scale-[0.98] transition-all text-left shadow-sm hover:shadow-md`}>
                    <span className="text-2xl">{b.emoji}</span>
                    <div>
                      <p className={`text-base font-[900] tracking-tight ${c.text}`}>{b.short}</p>
                      <p className="text-[9px] font-bold text-slate-500 mt-0.5">{b.label}</p>
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
          <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
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
          ) : subjectFolders.length === 0 ? (
            <div className="py-16 text-center bg-white rounded-[2rem] border border-dashed border-slate-200">
              <div className="text-4xl mb-3">📂</div>
              <p className="text-slate-800 font-black text-base uppercase tracking-tight">No subjects yet</p>
              <p className="text-slate-400 text-xs font-bold mt-1">Admin panel se {branch.short} Sem {sem} ke PYQ subject folders banao</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {subjectFolders.map(f => (
                <button key={f.id} onClick={() => selectFolder(f)}
                  className={`flex flex-col items-start gap-4 p-7 rounded-[2rem] border-2 bg-white hover:${branchColor.bg} ${branchColor.border} hover:scale-[1.01] active:scale-[0.99] transition-all text-left shadow-sm hover:shadow-lg group`}>
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${branchColor.badge}`}>
                    <FolderOpen size={26} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-[900] text-slate-900 uppercase tracking-tight leading-tight">{f.title}</h3>
                    <p className="text-[10px] font-bold text-slate-400 mt-1">{docs.filter(x => x.parentId === f.id).length} papers inside</p>
                  </div>
                  <div className={`flex items-center gap-1.5 text-[9px] font-black uppercase tracking-widest ${branchColor.text} group-hover:gap-2.5 transition-all`}>
                    Open PYQs <ArrowRight size={10} />
                  </div>
                </button>
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
            <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">{folder.title} — Previous Year Papers</p>
            <button onClick={() => setShowUpload(true)}
              className="ml-auto px-4 py-2 bg-amber-500 hover:bg-amber-400 text-white rounded-xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center gap-2">
              <FolderPlus size={12} /> Upload PYQ
            </button>
          </div>
          {loading ? (
            <div className="py-16 text-center"><p className="text-slate-400 font-black uppercase tracking-widest animate-pulse text-sm">Loading papers...</p></div>
          ) : folderFiles.length === 0 ? (
            <div className="py-16 text-center bg-white rounded-[2rem] border border-dashed border-slate-200">
              <div className="text-4xl mb-3">📄</div>
              <p className="text-slate-800 font-black text-base uppercase tracking-tight">No PYQs yet</p>
              <p className="text-slate-400 text-xs font-bold mt-1">Is subject mein abhi koi PYQ upload nahi hua</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {folderFiles.map((d, idx) => (
                <React.Fragment key={d.id}>
                  {d.type === 'folder' ? (
                    <button onClick={() => selectFolder(d)}
                      className="flex flex-col items-start gap-4 p-7 rounded-[2rem] border-2 bg-white hover:bg-amber-50 border-amber-100 hover:border-amber-300 transition-all text-left shadow-sm hover:shadow-md group">
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-amber-100"><FolderOpen size={22} className="text-amber-600" /></div>
                      <div>
                        <h3 className="text-base font-[900] text-slate-900 uppercase tracking-tight">{d.title}</h3>
                        <p className="text-[10px] font-bold text-slate-400 mt-1">{docs.filter(x => x.parentId === d.id).length} papers</p>
                      </div>
                      <div className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-widest text-amber-600 group-hover:gap-2.5 transition-all">Open <ArrowRight size={10} /></div>
                    </button>
                  ) : (
                    <PYQFileCard d={d} onAction={handleAction} />
                  )}
                  {idx % 4 === 3 && <div className="col-span-1"><PremiumAds type="INLINE" /></div>}
                </React.Fragment>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Footer */}
      <div className="bg-slate-50 p-6 rounded-[2.5rem] border border-slate-200/50 flex items-center gap-3">
        <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center"><ShieldCheck size={20} className="text-amber-600"/></div>
        <div>
          <p className="text-slate-900 font-black uppercase text-xs">Verified PYQ Content</p>
          <p className="text-[9px] text-slate-400 font-bold uppercase mt-0.5">Files verified by ACB Admin Team</p>
        </div>
      </div>

      {/* Upload Modal */}
      {showUpload && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
          <div className="bg-white w-full max-w-md rounded-[2.5rem] border border-slate-200 p-8 space-y-6 animate-in zoom-in-95 duration-300">
            <h2 className="text-xl font-[1000] text-slate-900 uppercase tracking-tighter">Upload PYQ Paper</h2>
            <form onSubmit={handleUpload} className="space-y-4">
              <div className="space-y-1">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Title (e.g. OS 2023 End Sem)</p>
                <input type="text" required value={uploadData.title} onChange={e => setUploadData({...uploadData, title: e.target.value})} placeholder="e.g. OS 2023 End Sem" className="w-full bg-slate-100 border border-slate-200 rounded-2xl p-4 text-slate-900 text-sm outline-none focus:border-amber-500" />
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Google Drive Link</p>
                <input type="url" value={uploadData.externalUrl} onChange={e => setUploadData({...uploadData, externalUrl: e.target.value})} placeholder="https://drive.google.com/..." className="w-full bg-slate-100 border border-slate-200 rounded-2xl p-4 text-slate-900 text-sm outline-none focus:border-amber-500" />
              </div>
              <div className="relative py-1 flex items-center justify-center">
                <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-200"></div></div>
                <span className="relative bg-white px-4 text-[9px] font-black text-slate-500 uppercase">OR</span>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Direct File (PDF)</p>
                <input type="file" accept="application/pdf" onChange={e => setUploadData({...uploadData, file: e.target.files[0]})} className="w-full bg-slate-100 border border-slate-200 rounded-2xl p-4 text-slate-500 text-xs outline-none" />
              </div>
              <div className="flex gap-3 pt-2">
                <button type="button" onClick={() => setShowUpload(false)} className="flex-1 py-4 bg-slate-100 text-slate-700 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-200 transition-all">Cancel</button>
                <button type="submit" disabled={uploading} className="flex-1 py-4 bg-amber-500 hover:bg-amber-400 text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-lg transition-all">
                  {uploading ? 'Uploading...' : 'Upload PYQ'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

function PYQFileCard({ d, onAction }) {
  return (
    <div className="bg-white rounded-[2rem] border border-slate-200/80 p-6 hover:border-amber-300/60 transition-all group flex flex-col shadow-sm hover:shadow-md">
      <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 bg-amber-100 text-amber-600 group-hover:scale-110 transition-transform">
        <FileDigit size={22} />
      </div>
      <div className="flex-1 space-y-1.5 mb-4">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-[8px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest border bg-amber-50 text-amber-600 border-amber-200">PYQ</span>
          {d.semester && <span className="text-[8px] font-black bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full uppercase tracking-widest border border-slate-200">Sem {d.semester}</span>}
        </div>
        <h3 className="text-sm font-[900] text-slate-900 uppercase tracking-tight leading-tight">{d.title}</h3>
        {d.subject && <p className="text-[10px] font-bold text-slate-500 flex items-center gap-1"><Bookmark size={9} className="text-amber-400" />{d.subject}</p>}
      </div>
      <div className="flex items-center gap-2 pt-4 border-t border-slate-100">
        <button onClick={() => onAction(d.fileUrl, () => window.open(d.fileUrl, '_blank'))}
          className="flex-1 flex items-center justify-center gap-1.5 py-3 bg-slate-50 hover:bg-slate-100 text-slate-700 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all">
          <Eye size={11} /> View
        </button>
        <button onClick={() => onAction(d.fileUrl, () => { const a = document.createElement('a'); a.href = d.fileUrl; a.download = d.title || 'pyq'; document.body.appendChild(a); a.click(); document.body.removeChild(a); })}
          className="p-3 rounded-xl transition-all border bg-amber-100 hover:bg-amber-600 text-amber-600 hover:text-white border-amber-200"><Download size={13} /></button>
        <button onClick={() => onAction(d.fileUrl, () => window.open(`https://wa.me/?text=${encodeURIComponent(`Check out this PYQ: ${d.title} - ${d.fileUrl}`)}`, '_blank'))}
          className="p-3 bg-emerald-50 hover:bg-emerald-600 text-emerald-600 hover:text-white rounded-xl transition-all border border-emerald-200">
          <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.653a11.734 11.734 0 005.682 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        </button>
      </div>
    </div>
  );
}
