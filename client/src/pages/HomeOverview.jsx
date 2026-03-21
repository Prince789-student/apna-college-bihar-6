import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, Clock, BookOpen, Calculator, 
  GraduationCap, Timer, Grid, ArrowRight,
  Zap, Target, Sparkles, LayoutDashboard,
  Plus, Users, Flame, Trophy, Activity,
  ChevronRight, Search
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { doc, getDoc, collection, query, where, getDocs, setDoc, updateDoc, arrayUnion } from 'firebase/firestore';
import { toast } from 'react-hot-toast';

export default function HomeOverview() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [myGroups, setMyGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showCreate, setShowCreate] = useState(false);
  const [showJoin, setShowJoin] = useState(false);
  const [groupName, setGroupName] = useState('');
  const [groupCode, setGroupCode] = useState('');

  useEffect(() => {
    if (user) fetchDashboardData();
  }, [user]);

  const fetchDashboardData = async () => {
    try {
      const userRef = doc(db, 'Users', user.uid);
      const userSnap = await getDoc(userRef);
      if (userSnap.exists()) setUserData(userSnap.data());

      const q = query(collection(db, 'Groups'), where('members', 'array-contains', user.uid));
      const groupSnaps = await getDocs(q);
      const groups = groupSnaps.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setMyGroups(groups);
    } catch (err) { console.error(err); }
    finally { setLoading(false); }
  };

  const handleCreateGroup = async () => {
    if (!groupName) return;
    const newCode = Math.random().toString(36).substring(2, 8).toUpperCase();
    const groupId = `group_${Date.now()}`;
    const newGroup = {
      groupId, groupName, groupCode: newCode,
      createdBy: user.uid, members: [user.uid],
      memberCount: 1, maxMembers: 50, createdAt: new Date().toISOString()
    };
    try {
      await setDoc(doc(db, 'Groups', groupId), newGroup);
      setShowCreate(false); setGroupName('');
      toast.success('Vectorized Group Created');
      fetchDashboardData();
    } catch (err) { toast.error('Creation Failed'); }
  };

  const handleJoinGroup = async () => {
    if (!groupCode) return;
    try {
      const q = query(collection(db, 'Groups'), where('groupCode', '==', groupCode.toUpperCase()));
      const snap = await getDocs(q);
      if (snap.empty) { toast.error('Signal Not Found'); return; }
      const groupDoc = snap.docs[0];
      const groupData = groupDoc.data();
      if (groupData.members.includes(user.uid)) { toast.error('Already Synced'); return; }
      await updateDoc(doc(db, 'Groups', groupDoc.id), {
        members: arrayUnion(user.uid), memberCount: groupData.memberCount + 1
      });
      setShowJoin(false); setGroupCode('');
      toast.success('Sync Successful');
      fetchDashboardData();
    } catch (err) { toast.error('Sync Failed'); }
  };

  const formatMins = (totalSeconds) => Math.floor((totalSeconds || 0) / 60);
  const formatHrs = (totalSeconds) => ((totalSeconds || 0) / 3600).toFixed(1);

  if (loading) return (
    <div className="flex items-center justify-center min-h-[60vh]">
       <div className="w-16 h-16 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin"></div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto space-y-12 animate-in fade-in duration-1000 pb-20 px-4 md:px-0">
      
      {/* ─── HEADER SECTION ───────────────────────────────────── */}
      <div className="relative bg-[#0d121f] p-10 md:p-14 rounded-[4rem] border border-slate-800 shadow-2xl overflow-hidden group">
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none group-hover:bg-blue-600/10 transition-all"></div>
         
         <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-10">
            <div className="space-y-4">
               <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse"></div>
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em]">Node Connection Secured</p>
               </div>
               <h1 className="text-4xl md:text-6xl font-[1000] text-white tracking-tighter uppercase leading-none">
                 Welcome Back, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 font-black">{user?.displayName?.split(' ')[0] || 'Scholar'}</span>
               </h1>
               <p className="max-w-xl text-slate-400 text-sm font-medium leading-relaxed uppercase tracking-tight">
                 Monitor your study metrics and manage your regional group clusters from the central hub.
               </p>
            </div>
            
            <button onClick={() => navigate('/dashboard/study')} className="px-10 py-6 bg-blue-600 hover:bg-blue-500 text-white rounded-[2rem] font-[1000] text-[10px] uppercase tracking-widest shadow-2xl shadow-blue-900/40 active:scale-95 transition-all flex items-center gap-4">
               <Timer size={20} /> Initialize Study Protocol
            </button>
         </div>
      </div>

      {/* ─── OPERATIONAL STATS ─────────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         <div className="bg-[#0d121f] p-10 rounded-[3rem] border border-slate-800 shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl"></div>
            <div className="flex items-center gap-6 relative z-10">
               <div className="p-6 bg-blue-600/10 text-blue-500 rounded-[1.8rem] group-hover:scale-110 transition-transform shadow-lg"><Clock size={32}/></div>
               <div>
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-none mb-2">Today Vector</p>
                  <p className="text-4xl font-[1000] text-white tracking-tighter uppercase leading-none">{formatMins(userData?.todayStudyTime)} Minutes</p>
               </div>
            </div>
         </div>
         <div className="bg-[#0d121f] p-10 rounded-[3rem] border border-slate-800 shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl"></div>
            <div className="flex items-center gap-6 relative z-10">
               <div className="p-6 bg-emerald-600/10 text-emerald-500 rounded-[1.8rem] group-hover:scale-110 transition-transform shadow-lg"><Activity size={32}/></div>
               <div>
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-none mb-2">Total Accumulated</p>
                  <p className="text-4xl font-[1000] text-white tracking-tighter uppercase leading-none">{formatHrs(userData?.totalStudyTime)} Hours</p>
               </div>
            </div>
         </div>
      </div>

      {/* ─── NETWORK ACTIONS ───────────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         <button onClick={() => setShowCreate(true)} className="p-12 border-2 border-dashed border-slate-800 hover:border-blue-500/50 hover:bg-blue-600/5 rounded-[3rem] flex items-center justify-center gap-6 transition-all group shadow-xl">
            <Plus size={40} className="text-slate-600 group-hover:text-blue-500 transition-colors" />
            <div className="text-left text-white">
               <h4 className="text-2xl font-[1000] uppercase tracking-tighter leading-none">Create Hub</h4>
               <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest mt-2">Generate New Cluster Code</p>
            </div>
         </button>
         <button onClick={() => setShowJoin(true)} className="p-12 border-2 border-dashed border-slate-800 hover:border-emerald-500/50 hover:bg-emerald-600/5 rounded-[3rem] flex items-center justify-center gap-6 transition-all group shadow-xl">
            <Search size={40} className="text-slate-600 group-hover:text-emerald-500 transition-colors" />
            <div className="text-left text-white">
               <h4 className="text-2xl font-[1000] uppercase tracking-tighter leading-none">Join Network</h4>
               <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest mt-2">Initialize Code Synchronization</p>
            </div>
         </button>
      </div>

      {/* ─── ACTIVE CLUSTERS ─────────────────────────────────────── */}
      <div className="space-y-8">
         <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
               <Users className="text-blue-500" size={24} />
               <h3 className="text-xl font-[1000] text-white uppercase tracking-tighter leading-none">Synchronized Network Clusters</h3>
            </div>
            <p className="text-[9px] font-black text-slate-600 uppercase tracking-widest">{myGroups.length} Active Node(s)</p>
         </div>

         {myGroups.length === 0 ? (
            <div className="p-20 bg-[#0d121f] border border-slate-800 rounded-[3rem] text-center space-y-4 shadow-2xl">
               <Users size={40} className="mx-auto text-slate-800" />
               <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest">No Active Connections in Repository</p>
            </div>
         ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               {myGroups.map(grp => (
                 <div key={grp.id} className="bg-[#0d121f] p-8 rounded-[2.5rem] border border-slate-800 shadow-xl flex items-center justify-between hover:border-blue-500/30 transition-all group">
                    <div className="space-y-2">
                       <h5 className="text-xl font-black text-white uppercase tracking-tight group-hover:text-blue-400 transition-colors">{grp.groupName}</h5>
                       <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest leading-none">
                          CODE: <span className="text-emerald-500">{grp.groupCode}</span> &bull; {grp.memberCount}/50 NODES
                       </p>
                    </div>
                    <button onClick={() => navigate(`/group/${grp.id}`)} className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-2xl flex items-center justify-center text-slate-500 hover:text-white hover:bg-blue-600 transition-all shadow-xl">
                       <ChevronRight size={20} />
                    </button>
                 </div>
               ))}
            </div>
         )}
      </div>

      {/* ─── MODALS ─────────────────────────────────────────────── */}
      {showCreate && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-[#02040a]/80 backdrop-blur-xl animate-in fade-in duration-300">
           <div className="w-full max-w-lg bg-[#0d121f] border border-slate-800 rounded-[3rem] p-12 md:p-14 shadow-2xl space-y-8">
              <div className="space-y-2 text-center text-white">
                 <h2 className="text-3xl font-[1000] uppercase tracking-tighter">New Hub Identity</h2>
                 <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Construct Regional Cluster</p>
              </div>
              <input 
                 className="w-full bg-[#1c263d] border-2 border-transparent focus:border-blue-500/50 rounded-2xl p-5 text-white text-center text-xl font-black outline-none transition-all placeholder:text-slate-700 placeholder:uppercase placeholder:tracking-widest"
                 placeholder="Enter Hub Designation..." 
                 value={groupName}
                 onChange={e => setGroupName(e.target.value)}
                 autoFocus
              />
              <div className="grid grid-cols-2 gap-4 pt-4">
                 <button onClick={() => setShowCreate(false)} className="py-5 bg-slate-900 text-slate-500 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:text-white transition-all">Abort</button>
                 <button onClick={handleCreateGroup} className="py-5 bg-blue-600 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-xl shadow-blue-900/20 active:scale-95 transition-all">Construct</button>
              </div>
           </div>
        </div>
      )}

      {showJoin && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-[#02040a]/80 backdrop-blur-xl animate-in fade-in duration-300">
           <div className="w-full max-w-lg bg-[#0d121f] border border-slate-800 rounded-[3rem] p-12 md:p-14 shadow-2xl space-y-8">
              <div className="space-y-2 text-center text-white">
                 <h2 className="text-3xl font-[1000] uppercase tracking-tighter">Signal Entrance</h2>
                 <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Connect to Cluster Signal</p>
              </div>
              <input 
                 className="w-full bg-[#1c263d] border-2 border-transparent focus:border-emerald-500/50 rounded-2xl p-5 text-emerald-400 text-center text-3xl font-black outline-none transition-all placeholder:text-slate-700 uppercase tracking-[0.4em]"
                 placeholder="XXXXXX" 
                 value={groupCode}
                 onChange={e => setGroupCode(e.target.value.toUpperCase())}
                 maxLength={6}
                 autoFocus
              />
              <div className="grid grid-cols-2 gap-4 pt-4">
                 <button onClick={() => setShowJoin(false)} className="py-5 bg-slate-900 text-slate-500 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:text-white transition-all">Abort</button>
                 <button onClick={handleJoinGroup} className="py-5 bg-emerald-600 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-xl shadow-emerald-950/20 active:scale-95 transition-all">Join Signal</button>
              </div>
           </div>
        </div>
      )}

    </div>
  );
}
