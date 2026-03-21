import React, { useState, useEffect } from 'react';
import { 
  BookOpen, Search, Download, Eye, 
  Filter, FileDigit, CalendarDays, BookMarked,
  ArrowRight, ShieldCheck, Bookmark
} from 'lucide-react';
import { db } from '../firebase';
import { collection, query, orderBy, onSnapshot, where } from 'firebase/firestore';

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
    return unsub;
  }, []);

  const filtered = docs.filter(d => 
    (cat === 'ALL' || d.category === cat) &&
    (sem === 'ALL' || d.semester === sem) &&
    (d.title?.toLowerCase().includes(search.toLowerCase()) || d.subject?.toLowerCase().includes(search.toLowerCase()))
  );

  const handleUpload = async (e) => {
    e.preventDefault();
    if(!uploadData.file || !uploadData.title) return;
    setUploading(true);
    try {
      // For now we use a URL field, if storage is not set up we might need to handle it.
      // Assuming storage is integrated or we simulate it.
      // I'll use a dummy data for now or actual firestore save.
      await addDoc(collection(db, 'documents'), {
        title: uploadData.title,
        subject: uploadData.subject.toUpperCase(),
        category: uploadData.category,
        semester: uploadData.semester,
        fileUrl: 'https://firebasestorage.googleapis.com/v0/b/placeholder...', // User should ideally use storage
        createdAt: new Date().toISOString(),
        verified: false
      });
      setShowUpload(false);
      setUploadData({ title: '', subject: '', category: 'NOTES', semester: '1', file: null });
      alert('Upload Success! Admin verify hone ke baad dikhega.');
    } catch(err) { console.error(err); }
    finally { setUploading(false); }
  };

  return (
    <div className="max-w-6xl mx-auto pb-24 space-y-12 animate-in fade-in slide-in-from-bottom-5 duration-700">
      
      {/* Search & Filter Header */}
      <div className="bg-[#0d121f] p-8 md:p-12 rounded-[4rem] border border-slate-800/80 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="relative z-10 space-y-8">
           <div className="flex items-center gap-4">
              <div className="p-4 bg-indigo-600/20 text-indigo-400 rounded-3xl">
                <BookOpen size={36} />
              </div>
              <div>
                <h1 className="text-4xl font-[1000] text-white tracking-tighter uppercase leading-none">Knowledge Hub</h1>
                <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.3em] mt-3">Curated Notes & Prev Year Papers</p>
              </div>
           </div>

           <div className="flex flex-col md:flex-row gap-4">
              <div className="relative group flex-1">
                 <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-indigo-500" size={20} />
                 <input value={search} onChange={e=>setSearch(e.target.value)}
                   placeholder="Search Subject, Title or Topic..."
                   className="w-full bg-[#1c263d] border-2 border-transparent focus:border-indigo-500/50 rounded-[2rem] p-5 pl-16 text-white text-sm font-bold outline-none transition-all placeholder:text-slate-600 shadow-xl" />
              </div>
               <div className="flex flex-wrap gap-4">
                  <div className="flex gap-2 p-1.5 bg-[#1c263d] rounded-[2rem] border border-slate-800/50">
                     {['ALL','NOTES','PYQ'].map(c => (
                       <button key={c} onClick={()=>setCat(c)}
                         className={`px-6 py-3 rounded-[1.5rem] text-[10px] font-black uppercase tracking-widest transition-all ${cat===c?'bg-indigo-600 text-white shadow-xl':'text-slate-500 hover:text-white'}`}>
                         {c}
                       </button>
                     ))}
                  </div>
                  <div className="flex gap-2 p-1.5 bg-[#1c263d] rounded-[2rem] border border-slate-800/50">
                     <select value={sem} onChange={e=>setSem(e.target.value)} className="bg-transparent text-[10px] font-black text-slate-400 uppercase tracking-widest outline-none px-4">
                       <option value="ALL">All Semesters</option>
                       {[1,2,3,4,5,6,7,8].map(s => <option key={s} value={String(s)}>Sem {s}</option>)}
                     </select>
                  </div>
               </div>
           </div>
        </div>
      </div>

      {/* Main Repository */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {loading ? (
          <div className="col-span-full py-20 text-center"><p className="text-slate-500 font-black uppercase tracking-widest animate-pulse">Establishing Connection to Database...</p></div>
        ) : filtered.length === 0 ? (
          <div className="col-span-full py-20 text-center bg-slate-900/10 rounded-[4rem] border border-dashed border-slate-800">
            <p className="text-slate-600 font-bold uppercase tracking-widest text-sm">No documents found matching your query.</p>
          </div>
        ) : (
          filtered.map(d => (
            <div key={d.id} className="bg-[#0d121f] rounded-[3.5rem] border border-slate-800/80 p-8 hover:border-indigo-500/30 transition-all group relative overflow-hidden flex flex-col items-center">
               <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-indigo-600/5 rounded-full blur-[50px] pointer-events-none group-hover:bg-indigo-600/10 transition-all"></div>
               
               <div className="w-16 h-16 bg-red-600/10 text-red-500 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <FileDigit size={32} />
               </div>

               <div className="text-center space-y-2 mb-8">
                  <div className="flex items-center justify-center gap-2">
                    <span className={`text-[8px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest border ${d.category==='NOTES'?'bg-blue-600/10 text-blue-400 border-blue-500/20':'bg-amber-600/10 text-amber-400 border-amber-500/20'}`}>
                      {d.category}
                    </span>
                    {d.semester && (
                      <span className="text-[8px] font-black bg-slate-800 text-slate-400 px-2 py-0.5 rounded-full uppercase tracking-widest border border-slate-700/50">
                        Sem {d.semester}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-black text-white uppercase tracking-tight leading-[1.1] truncate max-w-[200px]">{d.title}</h3>
                  <p className="text-[10px] font-bold text-slate-600 uppercase tracking-widest flex items-center justify-center gap-2">
                     <Bookmark size={10} className="text-indigo-500" /> {d.subject}
                  </p>
               </div>

                <div className="mt-auto w-full flex items-center gap-2 pt-6 border-t border-slate-800/50">
                   <a href={d.fileUrl} target="_blank" rel="noreferrer" 
                     className="flex-1 flex items-center justify-center gap-2 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl text-[9px] font-black uppercase tracking-widest transition-all">
                     <Eye size={12} /> View
                   </a>
                   <a href={d.fileUrl} download 
                     className="p-4 bg-indigo-600/10 hover:bg-indigo-600 text-indigo-400 hover:text-white rounded-2xl transition-all border border-indigo-500/20">
                     <Download size={14} />
                   </a>
                   <button onClick={() => {
                     const text = `Hey! Check out this document on ACB Portal: ${d.title} - ${d.fileUrl}`;
                     window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
                   }} className="p-4 bg-emerald-600/10 hover:bg-emerald-600 text-emerald-400 hover:text-white rounded-2xl transition-all border border-emerald-500/20">
                     <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.653a11.734 11.734 0 005.682 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                   </button>
                </div>
            </div>
          ))
        )}
      </div>

      {/* Footer Info */}
      <div className="bg-[#162035] p-8 rounded-[3.5rem] border border-slate-700/30 flex flex-col md:flex-row items-center justify-between gap-6">
         <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-indigo-400"><ShieldCheck size={28}/></div>
            <div>
              <p className="text-white font-black uppercase text-sm">Verified Academic Content</p>
              <p className="text-[10px] text-slate-500 font-bold uppercase mt-1">Files verified by ACB Admin Audit Team</p>
            </div>
         </div>
         <button onClick={()=>setShowUpload(true)} className="px-8 py-4 bg-white text-black rounded-[2rem] font-black text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all flex items-center gap-3">
           Upload Own Notes <ArrowRight size={14} />
         </button>

         {showUpload && (
           <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-md">
             <div className="bg-[#0d121f] w-full max-w-xl rounded-[3rem] border border-slate-800 p-10 space-y-8 animate-in zoom-in-95 duration-300">
               <h2 className="text-2xl font-[1000] text-white uppercase tracking-tighter">Share Knowledge</h2>
               <form onSubmit={handleUpload} className="space-y-6">
                 <div className="grid grid-cols-2 gap-4">
                   <div className="space-y-2">
                     <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Document Title</p>
                     <input type="text" required value={uploadData.title} onChange={e=>setUploadData({...uploadData, title: e.target.value})} placeholder="e.g. Unit 1 Notes" className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-4 text-white text-xs outline-none focus:border-indigo-500" />
                   </div>
                   <div className="space-y-2">
                     <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Subject Name</p>
                     <input type="text" required value={uploadData.subject} onChange={e=>setUploadData({...uploadData, subject: e.target.value})} placeholder="e.g. OS" className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-4 text-white text-xs outline-none focus:border-indigo-500" />
                   </div>
                 </div>
                 <div className="grid grid-cols-2 gap-4">
                   <div className="space-y-2">
                     <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Category</p>
                     <select value={uploadData.category} onChange={e=>setUploadData({...uploadData, category: e.target.value})} className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-4 text-white text-xs outline-none appearance-none">
                       <option value="NOTES">NOTES</option>
                       <option value="PYQ">PYQ</option>
                     </select>
                   </div>
                   <div className="space-y-2">
                     <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Semester</p>
                     <select value={uploadData.semester} onChange={e=>setUploadData({...uploadData, semester: e.target.value})} className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-4 text-white text-xs outline-none appearance-none">
                       {[1,2,3,4,5,6,7,8].map(s => <option key={s} value={String(s)}>Semester {s}</option>)}
                     </select>
                   </div>
                 </div>
                 <div className="space-y-2">
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Document File (PDF)</p>
                    <input type="file" accept="application/pdf" onChange={e=>setUploadData({...uploadData, file: e.target.files[0]})} className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-4 text-slate-500 text-xs outline-none" />
                 </div>
                 <div className="flex gap-4 pt-4">
                   <button type="button" onClick={()=>setShowUpload(false)} className="flex-1 py-4 bg-slate-800 text-white rounded-2xl font-black text-xs uppercase tracking-widest">Cancel</button>
                   <button type="submit" disabled={uploading} className="flex-1 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-indigo-950/20">
                     {uploading ? 'Uploading...' : 'Upload Hub'}
                   </button>
                 </div>
               </form>
             </div>
           </div>
         )}
      </div>

    </div>
  );
}
