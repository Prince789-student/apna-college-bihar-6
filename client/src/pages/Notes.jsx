import React, { useState, useEffect } from 'react';
import { 
  BookOpen, Search, Download, Eye, 
  Filter, FileDigit, CalendarDays, BookMarked,
  ArrowRight, ShieldCheck, Bookmark,
  TrendingUp, Award, Zap, LayoutGrid
} from 'lucide-react';
import { db } from '../firebase';
import { collection, query, orderBy, onSnapshot, addDoc } from 'firebase/firestore';
import { toast } from 'react-hot-toast';

export default function Notes() {
  const [docs, setDocs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [cat, setCat] = useState('ALL');
  const [sem, setSem] = useState('ALL');
  const [showUpload, setShowUpload] = useState(false);
  const [uploadData, setUploadData] = useState({ title: '', subject: '', category: 'NOTES', semester: '1', file: null });
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    const q = query(collection(db, 'documents'), orderBy('createdAt', 'desc'));
    const unsub = onSnapshot(q, (snap) => {
      setDocs(snap.docs.map(d => ({ id: d.id, ...d.data() })));
      setLoading(false);
    });
    return () => unsub();
  }, []);

  const filtered = docs.filter(d => 
    (cat === 'ALL' || d.category === cat) &&
    (sem === 'ALL' || d.semester === sem) &&
    (d.title?.toLowerCase().includes(search.toLowerCase()) || d.subject?.toLowerCase().includes(search.toLowerCase()))
  );

  const handleUpload = async (e) => {
    e.preventDefault();
    if(!uploadData.title) return;
    setUploading(true);
    try {
      await addDoc(collection(db, 'documents'), {
        title: uploadData.title,
        subject: uploadData.subject.toUpperCase(),
        category: uploadData.category,
        semester: uploadData.semester,
        fileUrl: '#', 
        createdAt: new Date().toISOString(),
        verified: false
      });
      setShowUpload(false);
      setUploadData({ title: '', subject: '', category: 'NOTES', semester: '1', file: null });
      toast.success('Upload Pending! Awaiting Admin Verification.');
    } catch(err) { toast.error(err.message); }
    finally { setUploading(false); }
  };

  return (
    <div className="max-w-7xl mx-auto space-y-12 animate-in fade-in duration-700 pb-20">
      
      {/* ─── HEADER ──────────────────────────────────────────────── */}
      <div className="bg-[#0d121f] rounded-[4rem] border border-slate-800/80 p-12 md:p-20 relative overflow-hidden shadow-2xl">
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>
         <div className="absolute bottom-[-10%] left-[-5%] w-80 h-80 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>

         <div className="relative z-10 space-y-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-10">
               <div className="flex items-center gap-6">
                  <div className="p-5 bg-indigo-600/20 text-indigo-400 rounded-3xl border border-indigo-500/20 shadow-xl shadow-indigo-950/40">
                    <BookOpen size={40} />
                  </div>
                  <div>
                    <h1 className="text-4xl md:text-6xl font-[1000] text-white tracking-tighter uppercase leading-[0.9]">Knowledge <span className="text-indigo-500">Hub</span></h1>
                    <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.4em] mt-3">Curated Academic Repository / v3.1</p>
                  </div>
               </div>
               <button onClick={() => setShowUpload(true)} className="px-10 py-5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-[2rem] font-black text-xs uppercase tracking-widest shadow-xl shadow-indigo-900/40 active:scale-95 transition-all">Submit Asset</button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
               <div className="lg:col-span-12 xl:col-span-8 relative group">
                  <Search className="absolute left-8 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-indigo-500 transition-colors" size={24} />
                  <input value={search} onChange={e=>setSearch(e.target.value)}
                    placeholder="Search Subjects, Concepts, PYQs..."
                    className="w-full bg-[#1c263d] border-2 border-transparent focus:border-indigo-500/50 rounded-[2.5rem] p-6 pl-20 text-white text-sm font-black outline-none transition-all placeholder:text-slate-700 shadow-xl" />
               </div>
               <div className="lg:col-span-12 xl:col-span-4 flex gap-4">
                  <div className="flex-1 bg-[#1c263d] rounded-[2rem] border border-slate-800 p-1 flex items-center">
                     {['ALL','NOTES','PYQ'].map(c => (
                        <button key={c} onClick={()=>setCat(c)}
                          className={`flex-1 py-4 rounded-[1.8rem] text-[10px] font-black uppercase tracking-widest transition-all ${cat===c?'bg-indigo-600 text-white shadow-xl':'text-slate-500 hover:text-white'}`}>
                          {c}
                        </button>
                     ))}
                  </div>
                  <div className="bg-[#1c263d] rounded-[2rem] border border-slate-800 px-6 py-1 flex items-center">
                     <select value={sem} onChange={e=>setSem(e.target.value)} className="bg-transparent text-[10px] font-black text-slate-400 uppercase tracking-widest outline-none cursor-pointer">
                       <option value="ALL">Semesters</option>
                       {[1,2,3,4,5,6,7,8].map(s => <option key={s} value={String(s)}>Sem {s}</option>)}
                     </select>
                  </div>
               </div>
            </div>
         </div>
      </div>

      {/* ─── DOCUMENTS GRID ───────────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
         {loading ? (
           [1,2,3].map(i => <div key={i} className="h-40 bg-slate-900/50 rounded-[3rem] animate-pulse border border-slate-800"></div>)
         ) : filtered.length ? filtered.map(d => (
            <div key={d.id} className="group p-10 bg-[#0d121f] border border-slate-800/80 rounded-[3rem] hover:border-indigo-500/40 transition-all relative overflow-hidden flex flex-col justify-between h-full">
               <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/5 rounded-full blur-3xl group-hover:bg-indigo-600/10 transition-all"></div>
               
               <div className="space-y-6">
                  <div className="flex items-center justify-between">
                     <div className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest border ${d.category === 'PYQ' ? 'bg-amber-600/10 text-amber-500 border-amber-500/20' : 'bg-emerald-600/10 text-emerald-500 border-emerald-500/20'}`}>
                        {d.category}
                     </div>
                     <span className="text-[9px] font-black text-slate-700 uppercase tracking-widest">Sem {d.semester}</span>
                  </div>
                  
                  <div className="space-y-2">
                     <h3 className="text-2xl font-black text-white uppercase tracking-tighter leading-none group-hover:text-indigo-400 transition-colors line-clamp-2">{d.title}</h3>
                     <p className="text-[10px] text-slate-500 font-extrabold uppercase tracking-widest">{d.subject}</p>
                  </div>
               </div>

               <div className="mt-10 pt-8 border-t border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                     <div className="text-slate-600 hover:text-white transition-colors cursor-pointer"><Eye size={20} /></div>
                     <div className="w-[1px] h-4 bg-slate-800"></div>
                     <div className="text-slate-600 hover:text-white transition-colors cursor-pointer"><Download size={20} /></div>
                  </div>
                  <button className="flex items-center gap-3 text-indigo-500 hover:text-white transition-all">
                     <span className="text-[9px] font-black uppercase tracking-widest">Access Hub Asset</span>
                     <ArrowRight size={14} />
                  </button>
               </div>

               {d.verified && <div className="absolute top-6 right-6 text-emerald-500"><ShieldCheck size={18} /></div>}
            </div>
         )) : (
            <div className="col-span-full py-20 text-center space-y-6">
               <div className="w-24 h-24 bg-slate-900 border border-slate-800 rounded-[2.5rem] flex items-center justify-center mx-auto text-slate-700"><Bookmark size={48} /></div>
               <p className="text-sm font-black text-slate-600 uppercase tracking-widest leading-loose">No Academic Matches Found <br /> for your Search Vector</p>
            </div>
         )}
      </div>

      {/* ─── UPLOAD MODAL ─────────────────────────────────────── */}
      {showUpload && (
         <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-[#02040a]/80 backdrop-blur-xl">
           <div className="w-full max-w-xl bg-[#0d121f] border border-slate-800 rounded-[4rem] p-12 md:p-16 shadow-2xl relative overflow-hidden animate-in zoom-in-95 duration-300">
             <div className="absolute top-0 right-0 w-60 h-60 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
             
             <div className="relative z-10 space-y-10">
               <div className="flex items-center justify-between">
                  <h2 className="text-4xl font-[1000] text-white uppercase tracking-tighter">Submit Asset</h2>
                  <button onClick={()=>setShowUpload(false)} className="text-slate-500 hover:text-white transition-colors">Close Engine</button>
               </div>

               <form onSubmit={handleUpload} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="col-span-full space-y-2">
                     <p className="text-[9px] font-black text-slate-600 uppercase tracking-[0.2em] ml-2">Display Title</p>
                     <input type="text" required placeholder="Asset Title (e.g. Unit 3 Notes)" 
                        className="w-full bg-[#1c263d] border-2 border-transparent focus:border-indigo-500/50 rounded-2xl p-5 text-white text-xs font-black outline-none transition-all placeholder:text-slate-700 shadow-xl"
                        value={uploadData.title} onChange={e => setUploadData({...uploadData, title: e.target.value})} />
                  </div>
                  <div className="space-y-2">
                     <p className="text-[9px] font-black text-slate-600 uppercase tracking-[0.2em] ml-2">Subject Code</p>
                     <input type="text" required placeholder="BEE-101" 
                        className="w-full bg-[#1c263d] border-2 border-transparent focus:border-indigo-500/50 rounded-2xl p-5 text-white text-xs font-black outline-none transition-all placeholder:text-slate-700 shadow-xl"
                        value={uploadData.subject} onChange={e => setUploadData({...uploadData, subject: e.target.value})} />
                  </div>
                  <div className="space-y-2">
                     <p className="text-[9px] font-black text-slate-600 uppercase tracking-[0.2em] ml-2">Classification</p>
                     <select className="w-full bg-[#1c263d] rounded-2xl p-5 text-white text-xs font-black outline-none cursor-pointer"
                       value={uploadData.category} onChange={e => setUploadData({...uploadData, category: e.target.value})}>
                        <option value="NOTES">NOTES</option>
                        <option value="PYQ">PYQ</option>
                        <option value="SYLLABUS">SYLLABUS</option>
                     </select>
                  </div>
                  <button type="submit" disabled={uploading} className="col-span-full py-6 bg-indigo-600 hover:bg-indigo-500 text-white rounded-[1.8rem] font-black text-xs uppercase tracking-widest shadow-xl transition-all active:scale-95 disabled:opacity-50">
                    {uploading ? 'Transmitting Module...' : 'Establish Hub Entry'}
                  </button>
               </form>
             </div>
           </div>
         </div>
      )}
    </div>
  );
}
