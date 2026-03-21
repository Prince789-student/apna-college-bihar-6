import React, { useState, useEffect } from 'react';
import { 
  Shield, Users, FileText, Bell, 
  Trash2, Ban, UserCheck, UploadCloud, 
  Search, RefreshCw, BarChart3, 
  ChevronRight, AlertCircle, Loader2,
  FileDigit, BookOpen, Download, UserMinus, UserPlus, Eye,
  LayoutDashboard, ShieldAlert, Database, Globe, Layers, Zap,
  Activity, TrendingUp, Target, LogOut
} from 'lucide-react';
import { db } from '../firebase';
import { 
  collection, doc, updateDoc, deleteDoc, 
  addDoc, query, orderBy, onSnapshot
} from 'firebase/firestore';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-hot-toast';

export default function AdminPanel() {
  const { user, ROLES, loading: authLoading } = useAuth();
  const [tab, setTab] = useState('overview');
  const [users, setUsers] = useState([]);
  const [groups, setGroups] = useState([]);
  const [docs, setDocs] = useState([]);
  const [anns, setAnns] = useState([]);
  const [newAnn, setNewAnn] = useState({ title: '', content: '', type: 'INFO' });
  const [loading, setLoading] = useState(true);

  // Access Control
  const isSuper = user?.role === ROLES.SUPER_ADMIN;
  const isAdmin = user?.email === 'prince86944@gmail.com' || user?.role === ROLES.SUPER_ADMIN || user?.role === 'admin'; 

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

    setLoading(false);
    return () => { unsubUsers(); unsubGroups(); unsubDocs(); unsubAnns(); };
  }, [isAdmin, authLoading]);

  // Actions
  const toggleBan = async (uid, banned) => {
    await updateDoc(doc(db, 'users', uid), { banned: !banned });
    toast.success(banned ? 'Security clearance restored' : 'Node restricted');
  };

  const changeRole = async (uid, role) => {
    if (!isSuper) { toast.error('Insufficient clearance'); return; }
    await updateDoc(doc(db, 'users', uid), { role });
    toast.success(`Role vector updated to ${role}`);
  };

  const deleteUser = async (uid) => {
    if (!isSuper) { toast.error('Permanent erasure requires High Council clearance'); return; }
    if (!window.confirm('Erase this identity from the database?')) return;
    await deleteDoc(doc(db, 'users', uid));
    toast.success('Identity Nullified');
  };

  const approveDoc = async (id) => {
    await updateDoc(doc(db, 'documents', id), { verified: true });
    toast.success('Asset Verified');
  };

  const deleteDocItem = async (id) => {
    if(!window.confirm('Decommission asset?')) return;
    await deleteDoc(doc(db, 'documents', id));
    toast.success('Asset Expunged');
  };

  const postAnn = async (e) => {
    e.preventDefault();
    if(!newAnn.title || !newAnn.content) return;
    await addDoc(collection(db, 'announcements'), {
      ...newAnn,
      author: user.displayName || 'System Command',
      createdAt: new Date().toISOString()
    });
    setNewAnn({ title: '', content: '', type: 'INFO' });
    toast.success('Announcement Transmitted');
  };

  if (!isAdmin && !authLoading) return (
     <div className="min-h-screen flex items-center justify-center p-10 bg-[#02040a]">
        <div className="max-w-md w-full p-10 bg-[#0d121f] border border-red-500/20 rounded-[3rem] text-center space-y-6">
           <div className="w-20 h-20 bg-red-600/10 text-red-500 rounded-3xl flex items-center justify-center mx-auto border border-red-500/20 animate-pulse"><ShieldAlert size={40} /></div>
           <div>
              <h2 className="text-3xl font-[1000] text-white uppercase tracking-tighter">Access Denied</h2>
              <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.3em] mt-3">Level 5 Security Protocol Active</p>
           </div>
           <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tight leading-loose">This node is restricted to Super Admin identities. Your attempt has been logged in the system audit.</p>
           <button onClick={() => window.location.href='/dashboard'} className="w-full py-4 text-[10px] font-black uppercase tracking-widest text-slate-600 hover:text-white transition-colors">Return to Safe Sector</button>
        </div>
     </div>
  );

  return (
    <div className="max-w-7xl mx-auto space-y-12 animate-in fade-in duration-700 pb-20">
      
      {/* ─── COMMAND HEADER ────────────────────────────────────── */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-10">
         <div className="space-y-1.5 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-[1000] tracking-tighter uppercase text-white leading-none">
              Operations <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-rose-500 font-black">Control</span>
            </h1>
            <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.4em]">Integrated Hub Management / System v7.1</p>
         </div>
         <div className="flex flex-wrap justify-center bg-[#0d121f] p-1.5 rounded-3xl border border-slate-800">
            {[
              { id: 'overview', l: 'Overview', i: <LayoutDashboard size={14}/> },
              { id: 'users', l: 'Identities', i: <Users size={14}/> },
              { id: 'assets', l: 'Assets', i: <Database size={14}/> },
              { id: 'comms', l: 'Comms', i: <Bell size={14}/> }
            ].map(t => (
               <button key={t.id} onClick={()=>setTab(t.id)}
                 className={`px-6 py-4 rounded-2xl text-[9px] font-black uppercase tracking-widest transition-all flex items-center gap-2 ${tab===t.id ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-950/40' : 'text-slate-500 hover:text-white'}`}>
                  {t.i} {t.l}
               </button>
            ))}
         </div>
      </div>

      {/* ─── TAB CONTENT ─────────────────────────────────────── */}
      <div className="animate-in slide-in-from-bottom-5 duration-500">
         
         {tab === 'overview' && (
            <div className="space-y-10">
               {/* Analytics Grid */}
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { l: 'System Nodes', v: users.length, i: <Users size={24}/>, c: 'text-blue-400' },
                    { l: 'Knowledge Assets', v: docs.length, i: <Database size={24}/>, c: 'text-indigo-400' },
                    { l: 'Active Sectors', v: groups.length, i: <Globe size={24}/>, c: 'text-emerald-400' },
                    { l: 'Protocol Transmissions', v: anns.length, i: <Activity size={24}/>, c: 'text-amber-400' }
                  ].map(s => (
                     <div key={s.l} className="bg-[#0d121f] p-10 rounded-[3rem] border border-slate-800 relative overflow-hidden group hover:border-indigo-500/30 transition-all shadow-2xl">
                        <div className="relative z-10 space-y-4">
                           <div className={`p-4 bg-slate-900 rounded-2xl inline-block ${s.c} group-hover:scale-110 transition-transform`}>{s.i}</div>
                           <div>
                              <p className="text-[10px] text-slate-500 font-extrabold uppercase tracking-widest">{s.l}</p>
                              <h4 className="text-5xl font-[1000] text-white tracking-tighter mt-1 leading-none">{s.v}</h4>
                           </div>
                        </div>
                        <div className="absolute bottom-[-10%] right-[-10%] w-24 h-24 bg-indigo-600/5 rounded-full blur-[40px]"></div>
                     </div>
                  ))}
               </div>

               {/* Live Monitor Section */}
               <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                  <div className="lg:col-span-8 bg-[#0d121f] rounded-[4rem] border border-slate-800 p-12 md:p-14 space-y-10 shadow-2xl overflow-hidden relative">
                     <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>
                     <div className="flex items-center justify-between relative z-10">
                        <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Asset Validation Queue</h3>
                        <div className="flex items-center gap-2 px-6 py-2 bg-emerald-600/10 text-emerald-400 rounded-full border border-emerald-500/20 text-[9px] font-black uppercase tracking-widest"><TrendingUp size={12}/> Monitoring</div>
                     </div>
                     <div className="space-y-6 relative z-10">
                       {docs.filter(d=>!d.verified).slice(0,5).map(d => (
                         <div key={d.id} className="flex flex-col md:flex-row md:items-center justify-between p-8 bg-black/40 rounded-3xl border border-slate-800 group hover:border-indigo-500/40 transition-all gap-6">
                            <div className="flex items-center gap-6">
                               <div className="w-14 h-14 bg-indigo-600/10 text-indigo-400 rounded-2xl flex items-center justify-center shrink-0"><BookOpen size={24}/></div>
                               <div>
                                  <p className="text-lg font-black text-white uppercase tracking-tight group-hover:text-indigo-400 transition-colors">{d.title}</p>
                                  <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mt-1">{d.subject} · SEM {d.semester}</p>
                               </div>
                            </div>
                            <div className="flex items-center gap-3">
                               <button onClick={()=>approveDoc(d.id)} className="px-8 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-[9px] font-black uppercase tracking-widest shadow-lg shadow-emerald-950/40 transition-all">Verify Asset</button>
                               <button onClick={()=>deleteDocItem(d.id)} className="p-3 text-slate-600 hover:text-red-500 transition-colors"><Trash2 size={16}/></button>
                            </div>
                         </div>
                       ))}
                       {!docs.some(d=>!d.verified) && <p className="text-center py-20 text-[10px] font-black text-slate-700 uppercase tracking-widest">Queue Status: Minimal / All Assets Synchronized</p>}
                     </div>
                  </div>
                  <div className="lg:col-span-4 bg-[#0d121f] rounded-[4.5rem] border border-slate-800 p-12 md:p-14 space-y-10 shadow-2xl relative overflow-hidden flex flex-col">
                     <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/5 rounded-full blur-2xl"></div>
                     <h3 className="text-xl font-black text-white uppercase tracking-tighter">Identity Log</h3>
                     <div className="space-y-6 overflow-y-auto custom-scrollbar flex-grow">
                        {users.slice(0,10).map(u => (
                          <div key={u.id} className="flex items-center gap-4 group">
                             <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-500 font-black group-hover:bg-indigo-600/10 group-hover:text-indigo-400 transition-all uppercase">{u.displayName?.slice(0,2) || 'NM'}</div>
                             <div className="flex-1 min-w-0">
                                <p className="text-[11px] font-black text-white truncate">{u.displayName || 'Unnamed node'}</p>
                                <p className="text-[8px] font-black text-slate-600 uppercase tracking-widest truncate">{u.email}</p>
                             </div>
                             <div className={`w-2 h-2 rounded-full ${u.banned ? 'bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]' : 'bg-emerald-500'}`} />
                          </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         )}

         {tab === 'users' && (
            <div className="bg-[#0d121f] rounded-[4rem] border border-slate-800 overflow-hidden shadow-2xl relative">
               <div className="p-10 border-b border-slate-800/80 flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                  <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Identity Management</h3>
                  <div className="relative">
                     <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-600" size={18} />
                     <input placeholder="Filter UIDs, Emails..." className="bg-[#1c263d] border border-slate-800 rounded-2xl p-4 pl-14 text-white text-[10px] font-black uppercase outline-none focus:border-indigo-500/50 w-full md:w-80 transition-all" />
                  </div>
               </div>
               
               <div className="overflow-x-auto relative z-10">
                  <table className="w-full text-left border-collapse min-w-[1000px]">
                     <thead>
                        <tr className="bg-[#02040a]/50 text-[10px] font-black text-slate-600 uppercase tracking-widest border-b border-slate-800">
                           <th className="p-10">Identity Node</th>
                           <th className="p-10 text-center">Auth Origin</th>
                           <th className="p-10 text-center">Protocol Level</th>
                           <th className="p-10 text-center">Status</th>
                           <th className="p-10 text-right">Operational Logic</th>
                        </tr>
                     </thead>
                     <tbody className="divide-y divide-slate-800/30">
                        {users.map(u => (
                          <tr key={u.id} className="group hover:bg-[#1c263d]/20 transition-all">
                             <td className="p-10">
                                <div className="flex items-center gap-6">
                                   <div className="w-14 h-14 bg-slate-900 border border-slate-800 rounded-2xl flex items-center justify-center shadow-inner group-hover:border-indigo-500/30 transition-all">
                                      {u.photoURL ? <img src={u.photoURL} alt="" className="w-full h-full rounded-2xl object-cover" /> : <Users size={24} className="text-slate-700" />}
                                   </div>
                                   <div>
                                      <p className="text-sm font-black text-white uppercase tracking-tight">{u.displayName || 'System User'}</p>
                                      <p className="text-[10px] font-mono text-slate-600 mt-1 uppercase truncate">{u.email}</p>
                                   </div>
                                </div>
                             </td>
                             <td className="p-10 text-center">
                                <span className={`px-4 py-1.5 rounded-full text-[8px] font-black uppercase tracking-widest shadow-inner ${u.provider === 'google.com' ? 'bg-white/5 text-white border border-white/10' : 'bg-blue-600/5 text-blue-500 border border-blue-500/10'}`}>
                                   {u.provider || 'Native'}
                                </span>
                             </td>
                             <td className="p-10 text-center">
                                {isSuper ? (
                                  <select value={u.role || 'user'} onChange={e=>changeRole(u.id, e.target.value)} className="bg-slate-900 border border-slate-800 rounded-xl px-4 py-2 text-[10px] font-black uppercase tracking-widest text-slate-400 focus:text-indigo-400 outline-none transition-all">
                                     <option value="user">User</option>
                                     <option value="admin">Admin</option>
                                     <option value="super-admin">Super</option>
                                  </select>
                                ) : (
                                  <span className="text-[10px] font-black uppercase text-indigo-400 tracking-widest">{u.role || 'USER'}</span>
                                )}
                             </td>
                             <td className="p-10 text-center">
                                <div className={`inline-flex items-center gap-2 px-6 py-2 rounded-full text-[9px] font-black uppercase tracking-widest ${u.banned ? 'bg-red-600/10 text-red-500 border border-red-500/20 shadow-xl shadow-red-950/20' : 'bg-emerald-600/10 text-emerald-500 border border-emerald-500/20'}`}>
                                   <div className={`w-1.5 h-1.5 rounded-full ${u.banned?'bg-red-500 animate-pulse':'bg-emerald-500'}`} />
                                   {u.banned ? 'Node Restricted' : 'Active Channel'}
                                </div>
                             </td>
                             <td className="p-10 text-right">
                                <div className="flex items-center justify-end gap-3">
                                   <button onClick={()=>toggleBan(u.id, u.banned)} className={`p-4 rounded-xl transition-all border ${u.banned ? 'bg-emerald-600/10 text-emerald-500 border-emerald-500/20 hover:bg-emerald-600 hover:text-white' : 'bg-red-600/10 text-red-500 border-red-500/20 hover:bg-red-600 hover:text-white'}`}>
                                      {u.banned ? <UserCheck size={18}/> : <Ban size={18}/>}
                                   </button>
                                   <button onClick={()=>deleteUser(u.id)} className="p-4 bg-slate-900 text-slate-700 hover:text-red-500 hover:bg-red-600/10 border border-slate-800 rounded-xl transition-all"><Trash2 size={18}/></button>
                                </div>
                             </td>
                          </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
            </div>
         )}

         {tab === 'assets' && (
            <div className="grid grid-cols-1 gap-10">
               <div className="bg-[#0d121f] rounded-[4rem] border border-slate-800 overflow-hidden shadow-2xl">
                  <div className="p-10 md:p-14 border-b border-slate-800/80 flex items-center justify-between">
                     <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Asset Hub Control</h3>
                     <span className="text-[10px] text-slate-500 font-extrabold uppercase tracking-widest">{docs.length} Recorded Modules</span>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                       <thead>
                          <tr className="bg-[#02040a]/50 text-[10px] font-black text-slate-600 uppercase tracking-widest">
                             <th className="p-10">Asset Identity</th>
                             <th className="p-10 text-center">Vector SEM</th>
                             <th className="p-10 text-center">Classification</th>
                             <th className="p-10 text-center">Verification Status</th>
                             <th className="p-10 text-right">Operations</th>
                          </tr>
                       </thead>
                       <tbody className="divide-y divide-slate-800/30">
                          {docs.map(d => (
                             <tr key={d.id} className="group hover:bg-[#1c263d]/30 transition-all">
                                <td className="p-10">
                                   <div className="flex items-center gap-6">
                                      <div className="p-4 bg-indigo-600/10 text-indigo-400 rounded-2xl border border-indigo-500/10 group-hover:scale-110 transition-all"><Database size={24}/></div>
                                      <div>
                                         <p className="text-sm font-black text-white uppercase tracking-tight leading-none">{d.title}</p>
                                         <p className="text-[9px] font-black text-slate-600 uppercase tracking-widest mt-2">{d.subject}</p>
                                      </div>
                                   </div>
                                </td>
                                <td className="p-10 text-center"><span className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs font-black text-white">SM-{d.semester}</span></td>
                                <td className="p-10 text-center"><span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">{d.category}</span></td>
                                <td className="p-10 text-center">
                                   <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest ${d.verified ? 'bg-emerald-600/10 text-emerald-500 border border-emerald-500/20 shadow-xl shadow-emerald-950/20' : 'bg-amber-600/10 text-amber-500 border border-amber-500/20 animate-pulse'}`}>
                                      {d.verified ? 'Verified Node' : 'Unverified Asset'}
                                   </div>
                                </td>
                                <td className="p-10 text-right">
                                   <div className="flex items-center justify-end gap-3">
                                      {!d.verified && <button onClick={()=>approveDoc(d.id)} className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-[9px] font-black uppercase tracking-widest shadow-xl shadow-indigo-950/30 transition-all">Verify</button>}
                                      <button onClick={()=>deleteDocItem(d.id)} className="p-4 text-slate-700 hover:text-red-500 hover:bg-red-600/10 border border-slate-800 rounded-xl transition-all"><Trash2 size={16}/></button>
                                   </div>
                                </td>
                             </tr>
                          ))}
                       </tbody>
                    </table>
                  </div>
               </div>
            </div>
         )}

         {tab === 'comms' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
               <div className="lg:col-span-12 xl:col-span-5 space-y-8">
                  <div className="bg-[#0d121f] rounded-[4rem] border border-slate-800 p-12 md:p-14 space-y-10 shadow-2xl relative overflow-hidden group">
                     <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-600/5 rounded-full blur-[80px]"></div>
                     <div className="relative z-10 space-y-8">
                        <div>
                           <h3 className="text-2xl font-black text-white uppercase tracking-tighter shrink-0">Broadcaster Module</h3>
                           <p className="text-[10px] text-slate-500 font-extrabold uppercase tracking-[0.4em] mt-2">Protocol Translation / v2.2</p>
                        </div>
                        <form onSubmit={postAnn} className="space-y-6">
                           <div className="space-y-2">
                              <p className="text-[9px] font-black text-slate-600 uppercase tracking-widest ml-2">Header</p>
                              <input required value={newAnn.title} onChange={e=>setNewAnn({...newAnn, title: e.target.value})} placeholder="TRANSMISSION HEADER..." className="w-full bg-[#1c263d] border-2 border-transparent focus:border-indigo-500/50 rounded-2xl p-6 text-white text-xs font-black uppercase tracking-tighter outline-none shadow-xl transition-all" />
                           </div>
                           <div className="space-y-2">
                              <p className="text-[9px] font-black text-slate-600 uppercase tracking-widest ml-2">Payload Content</p>
                              <textarea required value={newAnn.content} onChange={e=>setNewAnn({...newAnn, content: e.target.value})} placeholder="ENTER SYSTEM MESSAGE..." rows={4} className="w-full bg-[#1c263d] border-2 border-transparent focus:border-indigo-500/50 rounded-[2.5rem] p-8 text-white text-xs font-black outline-none shadow-xl transition-all resize-none" />
                           </div>
                           <div className="grid grid-cols-3 gap-3 p-1.5 bg-[#1c263d] rounded-2xl border border-slate-800">
                             {['INFO','URGENT','UPDATE'].map(t => (
                               <button type="button" key={t} onClick={()=>setNewAnn({...newAnn, type: t})} className={`py-3 rounded-xl text-[8px] font-black uppercase tracking-widest transition-all ${newAnn.type===t ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-500 hover:text-white'}`}>{t}</button>
                             ))}
                           </div>
                           <button type="submit" className="w-full py-6 bg-indigo-600 hover:bg-indigo-500 text-white rounded-3xl font-[1000] text-xs uppercase tracking-widest shadow-xl shadow-indigo-950/40 active:scale-95 transition-all flex items-center justify-center gap-4"><Zap size={18}/> Broadcast To All Nodes</button>
                        </form>
                     </div>
                  </div>
               </div>
               <div className="lg:col-span-12 xl:col-span-7 bg-[#0d121f] rounded-[4rem] border border-slate-800 p-12 md:p-14 space-y-10 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-60 h-60 bg-indigo-600/5 rounded-full blur-[100px] pointer-events-none"></div>
                  <h3 className="text-xl font-black text-white uppercase tracking-tighter relative z-10">Transmission Log</h3>
                  <div className="space-y-6 relative z-10">
                     {anns.map(a => (
                        <div key={a.id} className="p-8 bg-black/40 border border-slate-800 rounded-[2.5rem] group hover:border-indigo-500/30 transition-all flex items-start gap-8">
                           <div className={`p-4 rounded-2xl shrink-0 ${a.type==='URGENT'?'bg-red-600/10 text-red-500':'bg-indigo-600/10 text-indigo-400'}`}><Bell size={24}/></div>
                           <div className="flex-1 space-y-4">
                              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                 <div>
                                    <h4 className="text-xl font-black text-white uppercase tracking-tight group-hover:text-indigo-400 transition-colors leading-none">{a.title}</h4>
                                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-3">Author: {a.author}</p>
                                 </div>
                                 <span className="text-[9px] font-black text-slate-700 uppercase tracking-widest bg-slate-900 px-4 py-2 rounded-xl h-fit shrink-0">{new Date(a.createdAt).toLocaleDateString()}</span>
                              </div>
                              <p className="text-[10px] text-slate-400 font-bold uppercase leading-relaxed tracking-tight">{a.content}</p>
                              <div className="pt-4 flex justify-end">
                                 <button onClick={async() => { if(window.confirm('Delete transmission?')) await deleteDoc(doc(db, 'announcements', a.id)); toast.success('Transmitter Deactivated'); }} className="p-3 text-slate-700 hover:text-red-500 transition-colors"><Trash2 size={16}/></button>
                              </div>
                           </div>
                        </div>
                     ))}
                     {anns.length === 0 && <p className="text-center py-20 text-[10px] font-black text-slate-700 uppercase tracking-widest">No Active Transmissions Logged</p>}
                  </div>
               </div>
            </div>
         )}

      </div>
    </div>
  );
}
