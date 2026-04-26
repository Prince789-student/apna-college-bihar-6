import React, { useState, useEffect } from 'react';
import { 
  Users, Plus, LogIn, Crown, Timer, 
  Search, ShieldCheck, AlertCircle, Loader2,
  Trash2, Copy, CheckCircle
} from 'lucide-react';
import { db } from '../firebase';
import { useAuth } from '../context/AuthContext';
import { 
  collection, query, where, getDocs, addDoc, 
  onSnapshot, doc, getDoc, updateDoc,
  arrayUnion, arrayRemove, serverTimestamp, setDoc,
  increment, limit, orderBy, deleteDoc
} from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';


const genCode = () => Math.random().toString(36).substring(2, 8).toUpperCase();

export default function Group() {
  const { user, updateProfileData } = useAuth();
  const navigate = useNavigate();
  const [groups, setGroups] = useState([]);


  const [myGroups, setMyGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [joinCode, setJoinCode] = useState('');
  const [createMsg, setCreateMsg] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newGroupData, setNewGroupData] = useState({ name: '', description: '' });

  // Fetch groups
  useEffect(() => {
    if (!user) return;
    const q = query(collection(db, 'groups'), orderBy('createdAt', 'desc'), limit(50));

    const unsub = onSnapshot(q, (snap) => {
      const g = snap.docs.map(d => ({ id: d.id, ...d.data() }));
      setGroups(g);
      setMyGroups(g.filter(x => x.members?.includes(user?.uid)));
      setLoading(false);
    });
    return unsub;
  }, [user]);

  // Create Group (Rate limited: 5/day)
  const createGroup = async (e) => {
    e.preventDefault();
    const { name, description } = newGroupData;
    if (!name.trim()) return;
    const today = new Date().toDateString();
    let count = user.lastGroupCreateDate === today ? (user.groupsCreatedToday || 0) : 0;

    if (count >= 5) {
      setCreateMsg({ type: 'err', text: 'Daily limit (5 groups) reached!' });
      return;
    }

    try {
      const code = genCode();
      const newGroup = {
        name,
        description: description || 'No description provided.',
        code,
        createdBy: user.uid,
        creatorName: user?.displayName || user?.name || 'Scholar',
        members: [user?.uid],
        memberCount: 1,
        maxMembers: 70,
        createdAt: serverTimestamp()
      };
      await addDoc(collection(db, 'groups'), newGroup);

      
      // Update rate limit in user profile
      await updateProfileData({
        groupsCreatedToday: count + 1,
        lastGroupCreateDate: today
      });
      setCreateMsg({ type: 'ok', text: `Group "${name}" created! Code: ${code}` });
      setShowCreateModal(false);
      setNewGroupData({ name: '', description: '' });
    } catch (e) {
      setCreateMsg({ type: 'err', text: 'Creation failed.' });
    }
    setTimeout(() => setCreateMsg(null), 5000);
  };

  // Join by code
  const joinByCode = async () => {
    if (!joinCode.trim()) return;
    try {
      const q = query(collection(db, 'groups'), where('code', '==', joinCode.toUpperCase()));

      const snap = await getDocs(q);
      
      if (snap.empty) {
        setCreateMsg({ type: 'err', text: 'Invalid group code!' });
        return;
      }

      const gDoc = snap.docs[0];
      const gData = gDoc.data();

      if (gData.members.includes(user.uid)) {
        setCreateMsg({ type: 'ok', text: 'You are already a member!' });
        return;
      }

      if (gData.memberCount >= (gData.maxMembers || 70)) {
        setCreateMsg({ type: 'err', text: 'Group is full (max 70)!' });
        return;
      }

      await updateDoc(doc(db, 'groups', gDoc.id), {

        members: arrayUnion(user.uid),
        memberCount: increment(1)
      });

      setCreateMsg({ type: 'ok', text: 'Joined successfully!' });
      setJoinCode('');
    } catch (e) {
      setCreateMsg({ type: 'err', text: 'Join failed.' });
    }
    setTimeout(() => setCreateMsg(null), 5000);
  };

  // UI helpers
  const filtered = groups.filter(g => g.name?.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="max-w-6xl mx-auto pb-24 space-y-8 animate-in fade-in slide-in-from-bottom-5 duration-700">
      
      {/* Header & Controls */}
      <div className="bg-white p-8 rounded-[3rem] border border-slate-200/80 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-blue-600/20 text-blue-400 rounded-3xl">
              <Users size={32} />
            </div>
            <div>
              <h1 className="text-3xl font-[1000] text-slate-900 tracking-tighter uppercase">Study Network</h1>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-1">Connect · Collaborate · Conquer</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <div className="relative group flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-500" size={18} />
              <input value={searchTerm} onChange={e=>setSearchTerm(e.target.value)}
                placeholder="Find a group..."
                className="w-full bg-slate-100 border-2 border-transparent focus:border-blue-500/50 rounded-2xl p-3 pl-12 text-slate-900 text-[13px] font-bold outline-none transition-all placeholder:text-slate-600" />
            </div>
            <button key="create" onClick={() => setShowCreateModal(true)} className="p-3 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl shadow-lg transition-transform active:scale-95">
              <Plus size={18} />
            </button>
          </div>
        </div>

        {createMsg && (
          <div className={`mt-6 p-4 rounded-2xl border flex items-center gap-3 animate-in zoom-in duration-300 ${createMsg.type==='ok'?'bg-emerald-600/20 text-emerald-400 border-emerald-500/30':'bg-red-600/20 text-red-400 border-red-500/30'}`}>
            {createMsg.type==='ok' ? <CheckCircle size={18}/> : <AlertCircle size={18}/>}
            <span className="text-[13px] font-bold tracking-tight">{createMsg.text}</span>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Joined Groups */}
        <div className="lg:col-span-8 space-y-6">
          <div className="flex items-center gap-2 px-2">
            <ShieldCheck size={18} className="text-blue-500" />
            <h2 className="text-sm font-black uppercase text-slate-500 tracking-widest">My Active Hubs ({myGroups.length})</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {myGroups.map(g => (
              <div key={g.id} className="bg-white p-6 rounded-[2.5rem] border border-slate-200/80 hover:border-blue-500/30 transition-all group">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-400 font-black text-xl">
                    {g.name?.[0]?.toUpperCase() || 'G'}
                  </div>
                  <div className="flex items-center gap-1 text-[10px] font-black text-slate-500 bg-slate-100/50 px-2 py-1 rounded-full uppercase tracking-widest">
                    <Users size={10} />
                    {g.memberCount}/70
                  </div>
                </div>
                <h3 className="text-lg font-black text-slate-900 group-hover:text-blue-400 transition-colors uppercase truncate">{g.name}</h3>
                <p className="text-[10px] text-slate-500 font-bold uppercase mt-1 mb-4 flex items-center gap-2">
                  <Crown size={12} className="text-amber-500" /> Lead: {g.creatorName || 'Admin'}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-slate-200/50">
                   <button onClick={() => {
                     navigator.clipboard.writeText(g.code);
                     setCreateMsg({ type: 'ok', text: `Code ${g.code} copied!` });
                     setTimeout(() => setCreateMsg(null), 2000);
                   }} className="flex items-center gap-2 text-[10px] font-black text-blue-500 uppercase hover:text-blue-400 transition-all">
                     <Copy size={12}/> Code: {g.code}
                   </button>
                   <button 
                     onClick={() => navigate(`/dashboard/groups/${g.id}`)}
                     className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-[10px] font-black uppercase tracking-widest transition-all shadow-lg shadow-blue-900/20"
                   >
                     Enter Hub
                   </button>

                </div>
              </div>
            ))}
          </div>
          {myGroups.length===0 && !loading && (
            <div className="text-center py-10 bg-slate-100/20 rounded-[2rem] border border-dashed border-slate-200">
               <p className="text-slate-500 font-bold text-sm">Join a hub to start tracking together!</p>
            </div>
          )}
        </div>

        {/* Explore & Join */}
        <div className="lg:col-span-4 space-y-8">
           <div className="bg-slate-50 p-8 rounded-[3rem] border border-slate-300/30 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <LogIn size={20} className="text-orange-400" />
                <h2 className="text-sm font-black uppercase text-slate-900 tracking-widest">Join Hub</h2>
              </div>
              <p className="text-slate-500 text-xs font-bold leading-relaxed mb-6 italic opacity-70">"Enter a unique 6-character code shared by your peers to join their network."</p>
              <div className="space-y-3">
                 <input value={joinCode} onChange={e=>setJoinCode(e.target.value)}
                   placeholder="CODE (e.g. AB12XY)"
                   className="w-full bg-[#f8fafc] border-2 border-transparent focus:border-orange-500/50 rounded-2xl p-4 text-slate-900 text-center text-sm font-black uppercase tracking-[0.2em] outline-none transition-all" />
                 <button onClick={joinByCode} className="w-full py-4 bg-orange-500 hover:bg-orange-400 text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-lg shadow-orange-950/20 active:scale-95 transition-all">
                   Authenticate & Join
                 </button>
              </div>
           </div>

           <div className="bg-white p-8 rounded-[3rem] border border-slate-200/80">
              <h2 className="text-sm font-black uppercase text-slate-500 tracking-widest mb-4">Trending Hubs</h2>
              <div className="space-y-4">
                 {filtered.slice(0, 5).map(g => (
                   <div key={g.id} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                         <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center font-black text-[10px] text-white">
                           {g.name?.[0]?.toUpperCase() || 'G'}
                         </div>
                         <div>
                            <p className="text-[11px] font-black text-slate-900 uppercase">{g.name}</p>
                            <p className="text-[9px] font-bold text-slate-600">{g.memberCount} Mems</p>
                         </div>
                      </div>
                      <button onClick={() => { setJoinCode(g.code); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="p-2 text-slate-500 hover:text-slate-900 transition-colors" title="Copy Code to Join"><LogIn size={14}/></button>
                   </div>
                 ))}
              </div>
           </div>
        </div>
    </div>

      {/* Create Group Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-md">
          <div className="bg-white w-full max-w-lg rounded-[3rem] border border-slate-200 p-10 space-y-8 animate-in zoom-in-95 duration-300">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-[1000] text-slate-900 uppercase tracking-tighter">Initialize Study Hub</h2>
              <button onClick={() => setShowCreateModal(false)} className="text-slate-400 hover:text-slate-900"><Plus size={24} className="rotate-45" /></button>
            </div>
            <form onSubmit={createGroup} className="space-y-6">
              <div className="space-y-2">
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-2">Hub Name</p>
                <input required value={newGroupData.name} onChange={e => setNewGroupData({ ...newGroupData, name: e.target.value })} placeholder="e.g. CSE Finals Group" className="w-full bg-slate-100 border border-slate-200 rounded-2xl p-4 text-slate-900 text-xs font-bold outline-none focus:border-blue-500" />
              </div>
              <div className="space-y-2">
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-2">Description / Motto</p>
                <textarea required value={newGroupData.description} onChange={e => setNewGroupData({ ...newGroupData, description: e.target.value })} placeholder="What is this hub about?" rows={3} className="w-full bg-slate-100 border border-slate-200 rounded-2xl p-4 text-slate-900 text-xs font-bold outline-none focus:border-blue-500 resize-none" />
              </div>
              <div className="flex items-center gap-4 pt-4">
                <button type="button" onClick={() => setShowCreateModal(false)} className="flex-1 py-4 bg-slate-100 text-slate-500 rounded-2xl font-black text-xs uppercase tracking-widest">Cancel</button>
                <button type="submit" className="flex-1 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-blue-950/20">Create Now</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
