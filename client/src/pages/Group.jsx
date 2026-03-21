import React, { useState, useEffect } from 'react';
import { 
  Users, Plus, LogIn, Crown, Timer, 
  Search, ShieldCheck, AlertCircle, Loader2,
  Trash2, Copy, CheckCircle, Globe, Zap,
  Layers, ArrowRight, Share2, TrendingUp
} from 'lucide-react';
import { db } from '../firebase';
import { useAuth } from '../context/AuthContext';
import { 
  collection, query, where, getDocs, addDoc, 
  onSnapshot, doc, updateDoc,
  arrayUnion, serverTimestamp,
  increment, limit, orderBy
} from 'firebase/firestore';
import { toast } from 'react-hot-toast';

const genCode = () => Math.random().toString(36).substring(2, 8).toUpperCase();

export default function Group() {
  const { user, updateProfileData } = useAuth();
  const [groups, setGroups] = useState([]);
  const [myGroups, setMyGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [joinCode, setJoinCode] = useState('');
  const [showCreate, setShowCreate] = useState(false);
  const [newGroupName, setNewGroupName] = useState('');

  useEffect(() => {
    if (!user) return;
    const q = query(collection(db, 'groups'), orderBy('createdAt', 'desc'), limit(50));
    const unsub = onSnapshot(q, (snap) => {
      const g = snap.docs.map(d => ({ id: d.id, ...d.data() }));
      setGroups(g);
      setMyGroups(g.filter(x => x.members.includes(user.uid)));
      setLoading(false);
    });
    return () => unsub();
  }, [user]);

  const createGroup = async () => {
    if (!newGroupName.trim()) return;
    const today = new Date().toDateString();
    let count = user.lastGroupCreateDate === today ? (user.groupsCreatedToday || 0) : 0;

    if (count >= 5) {
      toast.error('Daily Limit Reached (5 Sectors)');
      return;
    }

    try {
      const code = genCode();
      await addDoc(collection(db, 'groups'), {
        name: newGroupName.trim().toUpperCase(),
        code,
        createdBy: user.uid,
        creatorName: user.displayName || 'System Command',
        members: [user.uid],
        memberCount: 1,
        maxMembers: 150,
        createdAt: serverTimestamp()
      });
      
      await updateProfileData({
        groupsCreatedToday: count + 1,
        lastGroupCreateDate: today
      });
      setShowCreate(false);
      setNewGroupName('');
      toast.success(`Sector ${newGroupName} Established. Code: ${code}`);
    } catch (e) { toast.error('Creation Failed'); }
  };

  const joinByCode = async () => {
    if (!joinCode.trim()) return;
    try {
      const q = query(collection(db, 'groups'), where('code', '==', joinCode.toUpperCase()));
      const snap = await getDocs(q);
      
      if (snap.empty) { toast.error('Invalid Vector Code'); return; }

      const gDoc = snap.docs[0];
      const gData = gDoc.data();

      if (gData.members.includes(user.uid)) { toast.error('Node already synchronized'); return; }
      if (gData.memberCount >= (gData.maxMembers || 150)) { toast.error('Sector at capacity'); return; }

      await updateDoc(doc(db, 'groups', gDoc.id), {
        members: arrayUnion(user.uid),
        memberCount: increment(1)
      });
      setJoinCode('');
      toast.success('Synchronization Successful');
    } catch (e) { toast.error('Join Failed'); }
  };

  const filtered = groups.filter(g => g.name.toLowerCase().includes(searchTerm.toLowerCase()));

  if (loading) return (
     <div className="min-h-screen flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
     </div>
  );

  return (
    <div className="max-w-7xl mx-auto space-y-12 animate-in fade-in duration-1000 pb-20 px-4 md:px-0">
      
      {/* ─── HEADER ──────────────────────────────────────────────── */}
      <div className="bg-[#0d121f] rounded-[4rem] border border-slate-800/80 p-12 md:p-20 relative overflow-hidden shadow-2xl">
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
         <div className="absolute bottom-[-10%] left-[-5%] w-80 h-80 bg-emerald-600/5 rounded-full blur-[100px] pointer-events-none"></div>

         <div className="relative z-10 space-y-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-10">
               <div className="flex items-center gap-6">
                  <div className="p-5 bg-blue-600/20 text-blue-400 rounded-3xl border border-blue-500/20 shadow-xl shadow-blue-950/40">
                    <Globe size={40} />
                  </div>
                  <div>
                    <h1 className="text-4xl md:text-6xl font-[1000] text-white tracking-tighter uppercase leading-[0.9]">Study <span className="text-blue-500">Network</span></h1>
                    <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.4em] mt-3">Global Collaborative Infrastructure / v2.1</p>
                  </div>
               </div>
               <button onClick={() => setShowCreate(true)} className="px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-[2rem] font-black text-xs uppercase tracking-widest shadow-xl shadow-blue-900/40 active:scale-95 transition-all">Establish New Sector</button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
               <div className="lg:col-span-12 xl:col-span-8 relative group">
                  <Search className="absolute left-8 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-500 transition-colors" size={24} />
                  <input value={searchTerm} onChange={e=>setSearchTerm(e.target.value)}
                    placeholder="Locate Sectors, Hubs or Study Circles..."
                    className="w-full bg-[#1c263d] border-2 border-transparent focus:border-blue-500/50 rounded-[2.5rem] p-6 pl-20 text-white text-sm font-black outline-none transition-all placeholder:text-slate-700 shadow-xl" />
               </div>
               <div className="lg:col-span-12 xl:col-span-4 flex gap-4">
                  <div className="flex-1 bg-[#1c263d] border-2 border-transparent focus-within:border-orange-500/50 rounded-[2rem] p-4 flex items-center gap-4 shadow-xl group">
                     <Layers className="text-slate-600 group-focus-within:text-orange-400 transition-colors" size={20} />
                     <input value={joinCode} onChange={e=>setJoinCode(e.target.value)}
                       placeholder="Vector Code"
                       className="bg-transparent text-white text-xs font-black uppercase tracking-[0.2em] outline-none flex-1 placeholder:text-slate-700" />
                     <button onClick={joinByCode} className="p-3 bg-orange-600 hover:bg-orange-500 text-white rounded-xl transition-all active:scale-90"><ArrowRight size={16}/></button>
                  </div>
               </div>
            </div>
         </div>
      </div>

      {/* ─── NETWORKS GRID ───────────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
         
         <div className="lg:col-span-8 space-y-8">
            <div className="flex items-center justify-between px-6">
               <h3 className="text-sm font-black text-slate-500 uppercase tracking-widest flex items-center gap-3"><ShieldCheck size={14}/> Active Synchronizations ({myGroups.length})</h3>
               <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" /> <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Live Status</span></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {myGroups.map(g => (
                 <div key={g.id} className="group p-10 bg-[#0d121f] border border-slate-800/80 rounded-[3rem] hover:border-blue-500/40 transition-all relative overflow-hidden flex flex-col justify-between h-72">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-full blur-3xl group-hover:bg-blue-600/10 transition-all"></div>
                    
                    <div className="space-y-6">
                       <div className="flex justify-between items-center">
                          <div className="px-4 py-1.5 bg-blue-600/10 border border-blue-500/20 text-blue-400 text-[9px] font-black uppercase tracking-widest rounded-full">{g.code}</div>
                          <div className="flex items-center gap-2 text-[9px] font-black text-slate-600 uppercase tracking-widest">
                             <Users size={12}/> {g.memberCount} Mems
                          </div>
                       </div>
                       
                       <div className="space-y-2">
                          <h3 className="text-2xl font-black text-white uppercase tracking-tighter leading-none group-hover:text-blue-400 transition-colors uppercase truncate">{g.name}</h3>
                          <p className="text-[10px] text-slate-500 font-extrabold uppercase tracking-widest flex items-center gap-2">
                            <Crown size={12} className="text-amber-500" /> Sector Lead: {g.creatorName || 'Admin'}
                          </p>
                       </div>
                    </div>

                    <div className="pt-8 border-t border-slate-800 flex items-center justify-between">
                       <button onClick={() => { navigator.clipboard.writeText(g.code); toast.success('Vector Code Copied'); }} className="text-slate-600 hover:text-white transition-colors"><Share2 size={20}/></button>
                       <button className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-[9px] font-black uppercase tracking-widest shadow-xl shadow-blue-900/40 active:scale-95 transition-all">Enter Sector Hub</button>
                    </div>
                 </div>
              ))}
              {myGroups.length === 0 && (
                <div className="col-span-full py-20 bg-slate-900/20 rounded-[3rem] border border-dashed border-slate-800 flex flex-col items-center justify-center space-y-4">
                  <Users size={32} className="text-slate-800" />
                  <p className="text-[10px] font-black text-slate-700 uppercase tracking-widest">No Active Synchronizations / Hubs Empty</p>
                </div>
              )}
            </div>
         </div>

         <div className="lg:col-span-4 space-y-10">
            <div className="bg-[#0d121f] rounded-[4.5rem] border border-slate-800/80 p-10 md:p-14 space-y-10 shadow-2xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600/5 rounded-full blur-[60px] pointer-events-none"></div>
               <h3 className="text-xl font-black text-white uppercase tracking-tighter relative z-10 flex items-center justify-between">Trending Sectors <TrendingUp size={18}/></h3>
               <div className="space-y-8 relative z-10">
                  {groups.filter(x=>!x.members.includes(user.uid)).slice(0, 6).map(g => (
                     <div key={g.id} className="flex items-center justify-between group/item">
                        <div className="flex items-center gap-4">
                           <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center font-black text-xl text-white group-hover/item:border-blue-500 transition-all">
                             {g.name[0]}
                           </div>
                           <div>
                              <p className="text-[11px] font-black text-white uppercase tracking-tight">{g.name}</p>
                              <p className="text-[8px] font-black text-slate-600 uppercase tracking-widest mt-1">{g.memberCount} Actives</p>
                           </div>
                        </div>
                        <button className="p-3 text-slate-700 hover:text-white transition-colors"><LogIn size={18}/></button>
                     </div>
                  ))}
               </div>
            </div>
         </div>

      </div>

      {/* ─── CREATE MODAL ─────────────────────────────────────── */}
      {showCreate && (
         <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-[#02040a]/80 backdrop-blur-xl">
           <div className="w-full max-w-lg bg-[#0d121f] border border-slate-800 rounded-[4rem] p-12 md:p-16 shadow-2xl relative overflow-hidden animate-in zoom-in-95 duration-300">
             <div className="absolute top-0 right-0 w-60 h-60 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
             
             <div className="relative z-10 space-y-10">
               <div className="flex items-center justify-between">
                  <h2 className="text-4xl font-[1000] text-white uppercase tracking-tighter">New Sector</h2>
                  <button onClick={()=>setShowCreate(false)} className="text-slate-500 hover:text-white transition-colors">Abort Access</button>
               </div>

               <div className="space-y-8">
                  <div className="space-y-2">
                     <p className="text-[9px] font-black text-slate-600 uppercase tracking-widest ml-2">Sector Identification Name</p>
                     <input type="text" maxLength={40} placeholder="e.g. ALPHA SQUAD" 
                        value={newGroupName} onChange={e => setNewGroupName(e.target.value)}
                        className="w-full bg-[#1c263d] border-2 border-transparent focus:border-blue-500/50 rounded-2xl p-6 text-white text-xs font-black outline-none transition-all placeholder:text-slate-700 uppercase shadow-xl" />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-6 bg-black/40 rounded-3xl border border-slate-800 text-center">
                       <p className="text-[8px] font-black text-slate-600 uppercase tracking-widest mb-1">Max Capacity</p>
                       <p className="text-xl font-black text-white">150 NODES</p>
                    </div>
                    <div className="p-6 bg-black/40 rounded-3xl border border-slate-800 text-center">
                       <p className="text-[8px] font-black text-slate-600 uppercase tracking-widest mb-1">Visibility</p>
                       <p className="text-xl font-black text-white uppercase">Public</p>
                    </div>
                  </div>

                  <button onClick={createGroup} className="w-full py-6 bg-blue-600 hover:bg-blue-500 text-white rounded-3xl font-[1000] text-xs uppercase tracking-widest shadow-xl shadow-blue-900/40 active:scale-95 transition-all">Synchronize New Sector</button>
               </div>
             </div>
           </div>
         </div>
      )}
    </div>
  );
}
