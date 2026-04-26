import React, { useState, useEffect } from 'react';
import { 
  Shield, Users, FileText, Bell, 
  Trash2, Ban, UserCheck, UploadCloud, 
  Search, RefreshCw, BarChart3, 
  ChevronRight, AlertCircle, Loader2,
  FileDigit, BookOpen, Download, UserMinus, UserPlus, Eye
} from 'lucide-react';
import { db, storage } from '../firebase';
import { 
  collection, getDocs, doc, updateDoc, deleteDoc, 
  addDoc, serverTimestamp, query, orderBy, onSnapshot, limit
} from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useAuth } from '../context/AuthContext';

export default function AdminPanel() {
  const { user, ROLES, loading: authLoading } = useAuth();
  const [tab, setTab] = useState('overview');
  const [users, setUsers] = useState([]);
  const [groups, setGroups] = useState([]);
  const [docs, setDocs] = useState([]);
  const [anns, setAnns] = useState([]);
  const [ads, setAds] = useState([]);
  const [newAnn, setNewAnn] = useState({ title: '', content: '', type: 'INFO' });
  const [adForm, setAdForm] = useState({ title: '', link: '', file: null, type: 'BANNER', externalUrl: '', useAdSense: false });
  const [msg, setMsg] = useState(null);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);

  // ── UPLOAD STATE ──
  const [docForm, setDocForm] = useState({ title: '', subject: '', category: 'NOTES', file: null });
  const [newGroup, setNewGroup] = useState({ name: '', description: '', code: '' });

  // Access Control
  const isSuper = user?.role === ROLES.SUPER_ADMIN;
  const isAdmin = user?.email === 'prince86944@gmail.com' || user?.role === ROLES.SUPER_ADMIN; 

  const flash = (text, type = 'ok') => {
    setMsg({ text, type });
    setTimeout(() => setMsg(null), 4000);
  };

  useEffect(() => {
    if (!isAdmin || authLoading) return;
    setLoading(true);

    const unsubUsers = onSnapshot(collection(db, 'users'), (snap) => {
      setUsers(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    });

    const unsubGroups = onSnapshot(collection(db, 'groups'), (snap) => {
      setGroups(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    });

    const unsubDocs = onSnapshot(collection(db, 'documents'), (snap) => {
      setDocs(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    });

    const unsubAnns = onSnapshot(query(collection(db, 'announcements'), orderBy('createdAt', 'desc')), (snap) => {
      setAnns(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    });

    const unsubAds = onSnapshot(collection(db, 'ads'), (snap) => {
      setAds(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    });

    setLoading(false);
    return () => { 
      if(unsubUsers) unsubUsers(); 
      if(unsubGroups) unsubGroups(); 
      if(unsubDocs) unsubDocs(); 
      if(unsubAnns) unsubAnns(); 
      if(unsubAds) unsubAds();
    };
  }, [isAdmin, authLoading]);

  // ── USER ACTIONS ──
  const toggleBan = async (uid, banned) => {
    await updateDoc(doc(db, 'users', uid), { banned: !banned });
    flash(banned ? 'User unbanned' : 'User banned');
  };

  const changeRole = async (uid, role) => {
    if (!isSuper) { flash('Only Super Admin can change roles', 'err'); return; }
    await updateDoc(doc(db, 'users', uid), { role });
    flash(`Role updated to ${role}`);
  };

  const deleteUser = async (uid) => {
    if (!isSuper) { flash('Only Super Admin can delete users', 'err'); return; }
    if (!window.confirm('Delete this user permanently?')) return;
    await deleteDoc(doc(db, 'users', uid));
    flash('User deleted');
  };

  // ── GROUP ACTIONS ──
  const deleteGroup = async (gid) => {
    if (!window.confirm('Delete this group?')) return;
    await deleteDoc(doc(db, 'groups', gid));
    flash('Group removed');
  };

  const approveDoc = async (id) => {
    await updateDoc(doc(db, 'documents', id), { verified: true });
    flash('Document Approved');
  };

  const deleteDocItem = async (id) => {
    if(!window.confirm('Permanent delete?')) return;
    await deleteDoc(doc(db, 'documents', id));
    flash('Document Deleted');
  };

  const handleCreateGroup = async (e) => {
    e.preventDefault();
    if (!newGroup.name || !newGroup.code) { flash('Name and Code are required', 'err'); return; }
    
    try {
      await addDoc(collection(db, 'groups'), {
        ...newGroup,
        memberCount: 0,
        members: [],
        createdAt: serverTimestamp(),
        createdBy: user.email
      });
      flash('Official Study Hub Created! 🚀');
      setNewGroup({ name: '', description: '', code: '' });
    } catch (err) {
      flash('Creation failed: ' + err.message, 'err');
    }
  };

  const postAnn = async (e) => {
    e.preventDefault();
    if(!newAnn.content) return;
    await addDoc(collection(db, 'announcements'), {
      ...newAnn,
      createdAt: serverTimestamp(),
      createdBy: user.name
    });
    setNewAnn({ title: '', content: '', type: 'INFO' });
    flash('Broadcast Live!');
  };

  const deleteAnn = async (id) => {
    await deleteDoc(doc(db, 'announcements', id));
    flash('Broadcast Removed');
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    const { title, subject, category, file, externalUrl } = docForm;
    
    if (!title) { flash('Title required', 'err'); return; }
    
    setUploading(true);
    try {
      let finalUrl = externalUrl;

      // Handle File Upload if present
      if (file) {
        const timeout = setTimeout(() => {
          setUploading(false);
          flash('File Upload Timed Out! Use "Direct Link" as a bypass.', 'err');
        }, 12000);

        const fileName = `${Date.now()}_${file.name.replace(/\s+/g, '_')}`;
        const storageRef = ref(storage, `notes/${fileName}`);
        const snapshot = await uploadBytes(storageRef, file);
        clearTimeout(timeout);
        finalUrl = await getDownloadURL(snapshot.ref);
      }

      if (!finalUrl) { flash('File or Direct Link required', 'err'); setUploading(false); return; }

      await addDoc(collection(db, 'documents'), {
        title,
        subject: subject || 'GENERAL',
        category,
        fileUrl: category === 'FOLDER' ? '' : finalUrl,
        type: category === 'FOLDER' ? 'folder' : 'file',
        parentId: 'root', // Admin uploads to root by default, can be moved later if needed
        verified: true,
        createdAt: serverTimestamp()
      });
      
      flash('Success! Document ready in Library! ✅');
      setDocForm({ title: '', subject: '', category: 'NOTES', file: null, externalUrl: '' });
    } catch (err) { 
       console.error("DEPLOY ERROR:", err);
       flash('Deployment failed: ' + err.message, 'err'); 
    } finally {
       setUploading(false);
    }
  };

  const handleAdUpload = async (e) => {
    e.preventDefault();
    if (!adForm.title || !adForm.link) { flash('Campaign Name & Target Link are required!', 'err'); return; }
    
    setUploading(true);
    let timeoutId;

    try {
      let imageUrl = adForm.externalUrl;
      
      if (adForm.file) {
        // Safety Timeout for Storage Upload
        timeoutId = setTimeout(() => {
          setUploading(false);
          flash('Storage Upload taking too long! ⏳ Try using "Direct Image Link" instead.', 'err');
        }, 30000);

        const storageRef = ref(storage, `ads/${Date.now()}_${adForm.file.name.replace(/\s+/g, '_')}`);
        const snapshot = await uploadBytes(storageRef, adForm.file);
        
        if (timeoutId) clearTimeout(timeoutId);
        imageUrl = await getDownloadURL(snapshot.ref);
      }

      if (!imageUrl && !adForm.file) { flash('Bhai, ya toh Image daalo ya Link!', 'err'); setUploading(false); return; }

      await addDoc(collection(db, 'ads'), {
        title: adForm.title.toUpperCase(),
        link: adForm.link,
        imageUrl: imageUrl || "",
        type: adForm.type,
        useAdSense: adForm.useAdSense,
        active: true,
        createdAt: serverTimestamp()
      });
      
      flash('Campaign Deployment Victory! 🚀✨');
      setAdForm({ title: '', link: '', file: null, type: 'BANNER', externalUrl: '', useAdSense: false });
    } catch (err) {
      if (timeoutId) clearTimeout(timeoutId);
      console.error("AD DEPLOY ERROR:", err);
      flash('Deployment Failure: ' + (err.code || err.message), 'err');
    } finally {
      if (timeoutId) clearTimeout(timeoutId);
      setUploading(false);
    }
  };

  const deleteAd = async (id) => {
    if(!window.confirm('Remove this Ad?')) return;
    await deleteDoc(doc(db, 'ads', id));
    flash('Ad Removed');
  };

  const toggleAd = async (id, active) => {
    await updateDoc(doc(db, 'ads', id), { active: !active });
    flash(active ? 'Ad Disabled' : 'Ad Activated');
  };


  if (authLoading) return (
    <div className="flex flex-col items-center justify-center py-40 gap-4">
      <Loader2 className="w-12 h-12 text-indigo-500 animate-spin" />
      <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Checking Authority...</p>
    </div>
  );

  // if (!isAdmin) return <div className="text-center py-20 text-slate-500 font-bold uppercase tracking-widest">Unauthorized Access</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-0 pb-12 space-y-6 animate-in fade-in duration-700">
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-[#f8fafc] p-5 md:p-6 border border-slate-200/80 rounded-[2rem] shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-red-600/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="flex items-center gap-4 relative z-10">
          <div className="p-3 bg-indigo-600/20 text-indigo-400 rounded-2xl group hover:scale-110 transition-transform cursor-pointer">
             <Shield size={24} />
          </div>
          <div>
            <h1 className="text-2xl font-[1000] text-slate-900 tracking-tighter uppercase leading-[0.8]">{isSuper?'SUPER OPS':'ADMIN OPS'}</h1>
            <p className="text-[9px] text-slate-500 font-black uppercase tracking-[0.3em] mt-2">Governance Hub</p>
          </div>
        </div>
        <div className="flex flex-wrap bg-slate-100/50 p-1.5 rounded-2xl border border-slate-200/50 overflow-x-auto">
           {['overview', 'users', 'groups', 'notes', 'broadcasts', 'ads'].map(t => (
             <button key={t} onClick={()=>setTab(t)}
               className={`px-6 py-2 rounded-xl text-[9px] font-[1000] uppercase tracking-widest transition-all ${tab===t?'bg-indigo-600 text-slate-900 shadow-xl shadow-indigo-900/20':'text-slate-500 hover:text-slate-700'}`}>
               {t}
             </button>
           ))}
        </div>
      </div>

      {msg && (
        <div className={`p-4 rounded-2xl border flex items-center gap-3 animate-in zoom-in duration-300 ${msg.type==='ok'?'bg-emerald-600/20 text-emerald-400 border-emerald-500/30':'bg-red-600/20 text-red-400 border-red-500/30'}`}>
          <AlertCircle size={18}/> <span className="text-[13px] font-bold uppercase tracking-tight">{msg.text}</span>
        </div>
      )}

      {/* ── OVERVIEW TAB ── */}
      {tab==='overview' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: 'Scholars', val: users.length, icon: Users },
            { label: 'Study Hubs', val: groups.length, icon: BookOpen },
            { label: 'Knowledge Base', val: docs.length, icon: FileText },
            { label: 'Admins', val: users.filter(x=>x.role==='ADMIN').length, icon: Shield },
          ].map(s => (
            <div key={s.label} className="bg-white p-6 rounded-[2.5rem] border border-slate-200/80">
               <div className="flex justify-between items-start mb-4">
                 <div className="p-2.5 bg-slate-100 text-slate-500 rounded-xl"><s.icon size={18}/></div>
                 <BarChart3 size={12} className="text-slate-800" />
               </div>
               <p className="text-[9px] font-black uppercase tracking-widest text-slate-500 mb-1">{s.label}</p>
               <p className="text-2xl font-black text-slate-900">{s.val}</p>
            </div>
          ))}
        </div>
      )}

      {/* ── USERS TAB ── */}
      {tab==='users' && (
        <div className="bg-white rounded-[2rem] md:rounded-[3.5rem] border border-slate-200/80 overflow-hidden shadow-2xl animate-in fade-in duration-500">
           <div className="p-4 md:p-8 border-b border-slate-200/50 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <h2 className="text-sm font-black uppercase text-slate-500 tracking-widest">Scholar Directory</h2>
              <div className="relative group w-full md:w-72">
                 <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-500" size={16} />
                 <input placeholder="Search UID/Email/Name..." className="w-full bg-slate-100 border-2 border-transparent focus:border-blue-500/50 rounded-2xl p-2.5 pl-12 text-slate-900 text-[12px] font-bold outline-none" />
              </div>
           </div>
           <div className="overflow-x-auto">
             <table className="w-full text-left">
               <thead>
                 <tr className="bg-slate-100/40 text-[9px] font-black uppercase tracking-[0.2em] text-slate-500 border-b border-slate-200/50">
                   <th className="py-5 px-8">Identity</th>
                   <th className="py-5 px-8 text-center">Contact</th>
                   <th className="py-5 px-8 text-center">Status</th>
                   <th className="py-5 px-8">Rank</th>
                   <th className="py-5 px-8 text-right">Operations</th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-slate-800/30">
                 {users.map(u => (
                   <tr key={u.id} className="hover:bg-slate-100/20 transition-all group">
                     <td className="py-6 px-8">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center font-black text-white text-[11px] group-hover:scale-110 transition-transform">
                              {u.name?.charAt(0).toUpperCase() || 'S'}
                            </div>
                           <div>
                              <p className="text-[13px] font-black text-slate-900 uppercase tracking-tight">{u.name}</p>
                              <p className="text-[10px] font-bold text-slate-600 truncate max-w-[150px]">{u.email}</p>
                           </div>
                        </div>
                     </td>
                     <td className="py-6 px-8 text-center">
                        <div className="inline-block px-3 py-1.5 bg-slate-100/50 border border-slate-200/80 rounded-xl">
                          <span className="text-[11px] font-bold text-slate-500 tracking-widest">
                            {u.phone || 'NOT LINKED'}
                          </span>
                        </div>
                     </td>
                     <td className="py-6 px-8 text-center">
                        <span className={`text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-tighter ${u.banned?'bg-red-500/10 text-red-400 border border-red-500/20':'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'}`}>
                          {u.banned ? 'TERMINATED' : 'VERIFIED'}
                        </span>
                     </td>
                     <td className="py-6 px-8">
                        <div className="flex items-center gap-2">
                           <Shield size={12} className={u.role===ROLES.SUPER_ADMIN?'text-amber-500':u.role===ROLES.ADMIN?'text-blue-500':'text-slate-600'} />
                           <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{u.role}</span>
                        </div>
                     </td>
                     <td className="py-6 px-8 text-right space-x-2">
                        <button onClick={()=>toggleBan(u.id, u.banned)} className={`p-2 rounded-xl transition-all ${u.banned?'bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500 hover:text-slate-900':'bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-slate-900'}`}>
                           {u.banned ? <UserCheck size={16}/> : <Ban size={16}/>}
                        </button>
                        {isSuper && (
                          <button onClick={()=>changeRole(u.id, u.role==='STUDENT'?'ADMIN':'STUDENT')} className="p-2 bg-indigo-500/10 text-indigo-400 hover:bg-indigo-500 hover:text-slate-900 rounded-xl">
                            {u.role==='STUDENT'?<UserPlus size={16}/>:<UserMinus size={16}/>}
                          </button>
                        )}
                        {u.role!==ROLES.SUPER_ADMIN && (
                          <button onClick={()=>deleteUser(u.id)} className="p-2 bg-slate-800 text-slate-500 hover:text-red-500 rounded-xl"><Trash2 size={16}/></button>
                        )}
                     </td>
                   </tr>
                 ))}
               </tbody>
             </table>
           </div>
        </div>
      )}

      {/* ── NOTES UPLOAD ── */}
      {tab==='notes' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 px-0">
           <div className="lg:col-span-4 space-y-8">
              <div className="bg-white p-6 md:p-8 rounded-[2rem] md:rounded-[3.5rem] border border-slate-200/80">
                <h2 className="text-sm font-black uppercase text-slate-500 tracking-widest mb-8 text-center font-['Inter']">Global Deployment 🛰️</h2>
                <form onSubmit={handleUpload} className="space-y-4">
                  <input value={docForm.title} onChange={e=>setDocForm({...docForm, title:e.target.value})} placeholder="Doc Title" className="w-full bg-slate-100 p-4 rounded-2xl text-[12px] font-bold text-slate-900 outline-none border-2 border-transparent focus:border-indigo-500" />
                  <input value={docForm.subject} onChange={e=>setDocForm({...docForm, subject:e.target.value})} placeholder="Subject" className="w-full bg-slate-100 p-4 rounded-2xl text-[12px] font-bold text-slate-900 outline-none border-2 border-transparent focus:border-indigo-500" />
                  
                  <div className="p-4 bg-slate-100/50 rounded-2xl border border-slate-300/20">
                     <p className="text-[9px] font-black text-slate-500 uppercase mb-3">Option 1: Direct Link (No Billing Needed)</p>
                     <input value={docForm.externalUrl || ''} onChange={e=>setDocForm({...docForm, externalUrl:e.target.value, file:null})} placeholder="Paste Drive/URL Link here..." className="w-full bg-[#f8fafc] p-3 rounded-xl text-[11px] font-bold text-blue-400 outline-none border border-slate-200" />
                  </div>

                  <div className="text-center font-black text-slate-700 text-[10px]">— OR —</div>

                  <div className="p-4 bg-slate-100/50 rounded-2xl border border-slate-300/20">
                    <p className="text-[9px] font-black text-slate-500 uppercase mb-3">Option 2: Internal Cloud Sync (Needs Billing)</p>
                    <input type="file" accept=".pdf" onChange={e=>setDocForm({...docForm, file:e.target.files[0], externalUrl:''})} className="hidden" id="admin-up" />
                    <label htmlFor="admin-up" className="flex items-center justify-center p-6 bg-[#f8fafc] border-2 border-dashed border-slate-200 hover:border-indigo-500 rounded-[2rem] cursor-pointer transition-all">
                       <div className="text-center">
                          <UploadCloud size={24} className="mx-auto text-slate-600 mb-2" />
                          <p className="text-[10px] font-black text-slate-500 truncate">{docForm.file?.name || 'SYNC FILE'}</p>
                       </div>
                    </label>
                  </div>

                  <select onChange={e=>setDocForm({...docForm, category:e.target.value})} className="w-full bg-slate-100 p-4 rounded-2xl text-[12px] font-bold text-slate-900 outline-none">
                    <option value="NOTES">Notes</option>
                    <option value="PYQ">PYQ</option>
                    <option value="FOLDER">FOLDER</option>
                  </select>

                  <button disabled={uploading} className="w-full py-5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-3xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-3 shadow-xl shadow-indigo-950/20 group">
                     {uploading ? <Loader2 size={18} className="animate-spin" /> : <><RefreshCw size={18} className="group-hover:rotate-180 transition-transform duration-700"/> Push to Library</>}
                  </button>
                </form>
              </div>
           </div>

           <div className="lg:col-span-8 space-y-8">
              {/* Approval Queue */}
              <div className="bg-slate-50/80 p-8 rounded-[3.5rem] border border-slate-300/30">
                <div className="flex items-center gap-3 mb-8">
                  <AlertCircle size={20} className="text-amber-500" />
                  <h2 className="text-sm font-black uppercase text-slate-900 tracking-widest">Pending Approvals ({docs.filter(d=>!d.verified).length})</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {docs.filter(d => !d.verified).map(d => (
                      <div key={d.id} className="bg-[#f8fafc] p-5 rounded-[2.2rem] border border-slate-200/50 group">
                          <p className="text-[11px] font-black text-slate-900 uppercase truncate mb-1">{d.title}</p>
                          <p className="text-[8px] text-slate-500 font-bold uppercase mb-4">{d.subject} · {d.category}</p>
                          <div className="flex gap-2">
                            <a href={d.fileUrl} target="_blank" rel="noreferrer" className="flex-1 py-2.5 bg-slate-800 hover:bg-slate-200 text-white rounded-xl text-[8px] font-black uppercase text-center">Preview</a>
                            <button onClick={()=>approveDoc(d.id)} className="px-3 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl"><UserCheck size={12}/></button>
                            <button onClick={()=>deleteDocItem(d.id)} className="px-3 py-2.5 bg-red-600/10 text-red-400 hover:bg-red-600 rounded-xl"><Trash2 size={12}/></button>
                          </div>
                      </div>
                    ))}
                </div>
              </div>

              {/* Repo Explorer */}
              <div className="bg-white p-8 rounded-[3.5rem] border border-slate-200/80">
                <h2 className="text-sm font-black uppercase text-slate-500 tracking-widest mb-8">Active Repository ({docs.filter(d=>d.verified).length})</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {docs.filter(d=>d.verified).map(d => (
                    <div key={d.id} className="bg-slate-100/40 p-5 rounded-3xl border border-slate-200/50 hover:border-indigo-500/20 transition-all flex justify-between items-center group">
                        <div className="min-w-0 pr-2">
                          <p className="text-[12px] font-black text-slate-900 uppercase truncate">{d.title}</p>
                          <p className="text-[8px] font-bold text-slate-600 uppercase tracking-widest mt-1">{d.subject} · {d.category}</p>
                        </div>
                        <button onClick={()=>deleteDocItem(d.id)} className="p-2.5 bg-red-600/10 text-red-500 rounded-xl opacity-0 group-hover:opacity-100 transition-all"><Trash2 size={14}/></button>
                    </div>
                  ))}
                </div>
              </div>
           </div>
        </div>
      )}
      {tab==='broadcasts' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
           <div className="lg:col-span-4 bg-white p-10 rounded-[3.5rem] border border-slate-200/80">
              <div className="flex items-center gap-3 mb-8">
                <Bell size={24} className="text-orange-500" />
                <h2 className="text-xl font-[1000] text-slate-900 uppercase tracking-tighter">New Broadcast</h2>
              </div>
              <form onSubmit={postAnn} className="space-y-4">
                <input value={newAnn.title} onChange={e=>setNewAnn({...newAnn, title: e.target.value})} placeholder="Announcement Title" className="w-full bg-slate-100 p-4 rounded-2xl text-[12px] font-bold text-slate-900 outline-none border-2 border-transparent focus:border-orange-500" />
                <textarea value={newAnn.content} onChange={e=>setNewAnn({...newAnn, content: e.target.value})} placeholder="Broadcast Content..." className="w-full h-40 bg-slate-100 p-4 rounded-2xl text-[12px] font-bold text-slate-900 outline-none border-2 border-transparent focus:border-orange-500 resize-none" />
                <select value={newAnn.type} onChange={e=>setNewAnn({...newAnn, type: e.target.value})} className="w-full bg-slate-100 p-4 rounded-2xl text-[12px] font-bold text-slate-900 outline-none">
                   <option value="INFO">GENERAL INFO</option>
                   <option value="ALERT">URGENT ALERT</option>
                   <option value="UPDATE">SCHEDULE UPDATE</option>
                </select>
                <button type="submit" className="w-full py-5 bg-orange-600 hover:bg-orange-500 text-white rounded-3xl font-black text-xs uppercase tracking-widest shadow-xl shadow-orange-950/20">Go Live!</button>
              </form>
           </div>
           <div className="lg:col-span-8 bg-white p-10 rounded-[4rem] border border-slate-200/80">
              <h2 className="text-sm font-black uppercase text-slate-500 tracking-widest mb-8">Live History</h2>
              <div className="space-y-4">
                {anns.map(a => (
                  <div key={a.id} className="p-6 bg-slate-100/40 rounded-[2rem] border border-slate-200/50 flex justify-between items-center group">
                     <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                           <span className={`text-[8px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest ${a.type==='ALERT'?'bg-red-600/10 text-red-500':'bg-blue-600/10 text-blue-500'}`}>{a.type}</span>
                           <h3 className="text-sm font-black text-slate-900 uppercase tracking-tight">{a.title}</h3>
                        </div>
                        <p className="text-[10px] text-slate-500 leading-relaxed font-bold truncate max-w-[400px]">{a.content}</p>
                     </div>
                     <button onClick={()=>deleteAnn(a.id)} className="p-3 bg-red-600/10 text-red-500 rounded-xl opacity-0 group-hover:opacity-100 transition-all"><Trash2 size={16}/></button>
                  </div>
                ))}
              </div>
           </div>
        </div>
      )}

      {/* ── GROUPS TAB ── */}
      {tab==='groups' && (
        <div className="space-y-8 animate-in fade-in duration-500">
           {/* Create Group Form */}
           <div className="bg-white rounded-[3.5rem] border border-slate-200/80 p-10 shadow-xl overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/5 rounded-full blur-3xl pointer-events-none"></div>
              <h2 className="text-xl font-[1000] text-slate-900 uppercase tracking-tighter mb-8 flex items-center gap-3">
                 <div className="p-2 bg-indigo-600/10 text-indigo-600 rounded-xl"><UserPlus size={20}/></div>
                 Initialize Official Study Hub
              </h2>
              <form onSubmit={handleCreateGroup} className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                 <div className="space-y-2">
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-2">Hub Name</p>
                    <input value={newGroup.name} onChange={e=>setNewGroup({...newGroup, name: e.target.value})} placeholder="e.g. CSE - SEM 1" className="w-full bg-slate-100 p-4 rounded-2xl text-[12px] font-bold text-slate-900 outline-none border-2 border-transparent focus:border-indigo-500" />
                 </div>
                 <div className="space-y-2">
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-2">Join Code</p>
                    <input value={newGroup.code} onChange={e=>setNewGroup({...newGroup, code: e.target.value})} placeholder="e.g. BIHAR25" className="w-full bg-slate-100 p-4 rounded-2xl text-[12px] font-bold text-indigo-600 outline-none border-2 border-transparent focus:border-indigo-500" />
                 </div>
                 <div className="space-y-2 lg:col-span-1">
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-2">Description</p>
                    <input value={newGroup.description} onChange={e=>setNewGroup({...newGroup, description: e.target.value})} placeholder="Group purpose..." className="w-full bg-slate-100 p-4 rounded-2xl text-[12px] font-bold text-slate-900 outline-none border-2 border-transparent focus:border-indigo-500" />
                 </div>
                 <div className="flex items-end">
                    <button type="submit" className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-indigo-950/20 transition-all active:scale-95">
                       Create Hub
                    </button>
                 </div>
              </form>
           </div>

           <div className="bg-white rounded-[3.5rem] border border-slate-200/80 p-8 shadow-2xl">
              <h2 className="text-sm font-black uppercase text-slate-500 tracking-widest mb-8">Network Hub Monitoring ({groups.length})</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {groups.map(g => (
                <div key={g.id} className="p-6 bg-slate-50 rounded-[2.5rem] border border-slate-300/30">
                   <div className="flex justify-between items-start mb-6">
                      <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-xl font-black text-slate-900">{g.name[0]}</div>
                      <button onClick={()=>deleteGroup(g.id)} className="p-2 text-slate-600 hover:text-red-500"><Trash2 size={20}/></button>
                   </div>
                   <p className="text-lg font-[1000] text-slate-900 uppercase tracking-tighter truncate">{g.name}</p>
                   <div className="mt-6 p-4 bg-slate-100/50 rounded-2xl border border-slate-200/50 flex justify-between items-center">
                      <div>
                         <p className="text-[9px] font-black text-slate-500 uppercase">Load Density</p>
                         <p className="text-sm font-black text-slate-900">{g.memberCount}/150</p>
                      </div>
                      <div className="text-right">
                         <p className="text-[9px] font-black text-slate-500 uppercase">Code</p>
                         <p className="text-sm font-black text-slate-900">{g.code}</p>
                      </div>
                   </div>
                </div>
              ))}
              </div>
           </div>
        </div>
      )}

      {/* ── ADS MANAGEMENT TAB ── */}
      {tab==='ads' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
           <div className="lg:col-span-4 bg-white p-10 rounded-[3.5rem] border border-slate-200/80">
              <div className="flex items-center gap-3 mb-8">
                <BarChart3 size={24} className="text-emerald-500" />
                <h2 className="text-xl font-[1000] text-slate-900 uppercase tracking-tighter">New Campaign</h2>
              </div>
              <form onSubmit={handleAdUpload} className="space-y-4">
                <input value={adForm.title} onChange={e=>setAdForm({...adForm, title: e.target.value})} placeholder="Campaign Name (e.g. JOIN COMMUNITY)" className="w-full bg-slate-100 p-4 rounded-2xl text-[12px] font-bold text-slate-900 outline-none border-2 border-transparent focus:border-emerald-500" />
                <input value={adForm.link} onChange={e=>setAdForm({...adForm, link: e.target.value})} placeholder="Target Action URL" className="w-full bg-slate-100 p-4 rounded-2xl text-[12px] font-bold text-blue-400 outline-none border-2 border-transparent focus:border-emerald-500" />
                
                <div className="p-4 bg-slate-100/50 rounded-2xl border border-slate-300/20 text-center">
                  <input type="file" accept="image/*" onChange={e=>setAdForm({...adForm, file:e.target.files[0]})} className="hidden" id="ad-img-up" />
                  <label htmlFor="ad-img-up" className="cursor-pointer">
                    <div className="py-8 bg-[#f8fafc] border-2 border-dashed border-slate-200 rounded-3xl hover:border-emerald-500 transition-all">
                       <UploadCloud size={30} className="mx-auto text-slate-500 mb-2" />
                       <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{adForm.file?.name || 'Upload Banner (Option 1)'}</p>
                    </div>
                  </label>
                </div>

                <div className="relative py-2 flex items-center justify-center">
                   <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-200"></div></div>
                   <span className="relative bg-white px-4 text-[8px] font-black text-slate-700 uppercase">OR</span>
                </div>

                <input value={adForm.externalUrl} onChange={e=>setAdForm({...adForm, externalUrl: e.target.value})} placeholder="Direct Image URL (Option 2)" className="w-full bg-slate-100 p-4 rounded-2xl text-[11px] font-bold text-emerald-500 outline-none border-2 border-transparent focus:border-emerald-500 placeholder:text-slate-700 shadow-inner" />

                <div className="flex items-center gap-4 bg-slate-100/40 p-5 rounded-3xl border border-slate-200/50">
                   <div className="flex-1">
                      <p className="text-[10px] font-[1000] text-amber-500 uppercase tracking-widest">Google AdSense</p>
                      <p className="text-[8px] font-bold text-slate-500 uppercase">Override with Google Ads</p>
                   </div>
                   <input type="checkbox" checked={adForm.useAdSense} onChange={e=>setAdForm({...adForm, useAdSense: e.target.checked})} className="w-6 h-6 rounded-lg bg-slate-800 accent-amber-500 border-none outline-none" />
                </div>

                <select value={adForm.type} onChange={e=>setAdForm({...adForm, type: e.target.value})} className="w-full bg-slate-100 p-4 rounded-2xl text-[12px] font-bold text-slate-900 outline-none">
                   <option value="BANNER">DASHBOARD BANNER (TOP)</option>
                   <option value="SIDEBAR">SIDEBAR AD (SQUARE)</option>
                   <option value="INLINE">NOTES INLINE AD</option>
                </select>

                <button type="submit" disabled={uploading} className="w-full py-5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-3xl font-black text-xs uppercase tracking-widest shadow-xl shadow-emerald-950/20 flex items-center justify-center gap-3">
                  {uploading ? <Loader2 className="animate-spin" size={18}/> : 'Launch Campaign'}
                </button>
              </form>
           </div>

           <div className="lg:col-span-8 bg-white p-10 rounded-[4rem] border border-slate-200/80">
              <h2 className="text-sm font-black uppercase text-slate-500 tracking-widest mb-8">Live Campaigns ({ads.length})</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {ads.map(ad => (
                  <div key={ad.id} className="p-6 bg-slate-100/40 rounded-[2.5rem] border border-slate-200/50 flex flex-col group relative overflow-hidden">
                     {ad.imageUrl && (
                       <img src={ad.imageUrl} alt="Ad" className="w-full h-32 object-cover rounded-2xl mb-4 border border-slate-200" />
                     )}
                     <div className="flex justify-between items-start mb-2">
                        <div>
                          <p className="text-[9px] font-black text-emerald-500 uppercase tracking-widest mb-1">{ad.type}</p>
                          <h3 className="text-sm font-black text-slate-900 uppercase tracking-tight truncate max-w-[200px]">{ad.title}</h3>
                        </div>
                        <div className="flex gap-2">
                           {ad.useAdSense && <span className="bg-amber-600/10 text-amber-500 text-[8px] font-black px-2 py-1 rounded-full border border-amber-500/20 uppercase">Google Mode</span>}
                           <button onClick={()=>toggleAd(ad.id, ad.active)} className={`p-2 rounded-xl transition-all ${ad.active?'bg-emerald-500/10 text-emerald-500':'bg-red-500/10 text-red-500'}`}>
                             {ad.active ? <Eye size={16}/> : <Ban size={16}/>}
                           </button>
                           <button onClick={()=>deleteAd(ad.id)} className="p-2 bg-slate-800 text-slate-500 hover:text-red-500 rounded-xl"><Trash2 size={16}/></button>
                        </div>
                     </div>
                     <p className="text-[10px] text-slate-600 truncate font-bold">{ad.link}</p>
                  </div>
                ))}
              </div>
           </div>
        </div>
      )}
    </div>
  );
}
