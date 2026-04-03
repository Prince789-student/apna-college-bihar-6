import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { db } from '../firebase';
import { useAuth } from '../context/AuthContext';
import { Trophy, Users, Calendar, Hash, ArrowLeft, Clock, Shield, Trash2 } from 'lucide-react';
import { collection, query, where, onSnapshot, doc, updateDoc, arrayRemove } from 'firebase/firestore';

export default function GroupDetail() {
  const { groupId } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [group, setGroup] = useState(null);
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!groupId || !user) return;

    // Real-time Group Sync
    const unsubGroup = onSnapshot(doc(db, 'Groups', groupId), (docSnap) => {
      if (!docSnap.exists()) {
        setError('Study Collective not found in decentralized database');
        setLoading(false);
        return;
      }
      const data = docSnap.id ? { id: docSnap.id, ...docSnap.data() } : docSnap.data();
      setGroup(data);
      
      if (!data.members.includes(user.uid)) {
        navigate('/dashboard/study');
      }
      setLoading(false);
    });

    // Real-time Members Sync (Status + Stats)
    const unsubUsers = onSnapshot(query(collection(db, 'users'), where('uid', '!=', '0')), (uSnap) => {
       // Note: We'll filter members client-side to keep it simple with existing structure
       // or we could use another query if member list is HUGE, but here 10-20 is fine.
    });

    return () => unsubGroup();
  }, [groupId, user]);

  useEffect(() => {
    if (!group) return;
    
    // Listen to changes in specific members of this group
    const unsubMembers = onSnapshot(query(collection(db, 'users'), where('uid', 'in', group.members)), (snap) => {
      const mData = snap.docs.map(d => ({ id: d.id, ...d.data() }));
      mData.sort((a, b) => (b.todayStudyTime || 0) - (a.todayStudyTime || 0));
      setMembers(mData);
    });

    return () => unsubMembers();
  }, [group?.members]);

  const removeMember = async (targetId) => {
    if (!group || group.adminId !== user.uid) return;
    if (targetId === user.uid) return; // Cant remove self
    if (!window.confirm('Remove this scholar from the operational network?')) return;

    try {
      await updateDoc(doc(db, 'Groups', groupId), {
        members: arrayRemove(targetId),
        memberCount: group.memberCount - 1
      });
    } catch (e) { console.error(e); }
  };

  const setGroupGoal = async () => {
    if (!group || group.adminId !== user.uid) return;
    const g = window.prompt('Set collective network goal (Total Hours):', group.dailyGoal || '10');
    if (g) {
      await updateDoc(doc(db, 'Groups', groupId), { dailyGoal: Number(g) });
    }
  };

  if (loading) return <div className="flex items-center justify-center p-20"><div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div></div>;
  if (error) return <div className="text-red-500 font-black p-20 text-center uppercase tracking-widest">{error}</div>;
  if (!group || !user) return null;

  const totalSec = members.reduce((a, m) => a + (m.todayStudyTime || 0), 0);
  const totalHrs = (totalSec / 3600).toFixed(1);
  const goalHrs = group?.dailyGoal || 1;
  const progress = Math.min(100, (Number(totalHrs) / goalHrs) * 100);

  const formatMins = (totalSeconds) => Math.floor((totalSeconds || 0) / 60);

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-5 duration-700">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-200 pb-10">
        <div className="space-y-4">
           <button onClick={() => navigate('/dashboard/study')} className="flex items-center space-x-2 text-slate-500 hover:text-slate-900 transition-colors group">
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em]">Return to Network</span>
           </button>
           <div>
              <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase leading-none">{group.groupName}</h1>
              <div className="flex items-center space-x-4 mt-4">
                 <div className="flex items-center space-x-2 bg-blue-600/10 text-blue-400 px-3 py-1 rounded-full border border-blue-500/20 shadow-md">
                    <Calendar size={12} />
                    <span className="text-[9px] font-black tracking-widest uppercase italic">Est. {new Date(group.createdAt).toLocaleDateString()}</span>
                 </div>
                 <div className="flex items-center space-x-2 bg-emerald-600/10 text-emerald-400 px-3 py-1 rounded-full border border-emerald-500/20 shadow-md">
                    <Hash size={12} />
                    <span className="text-[11px] font-black tracking-widest">ID: {group.groupCode}</span>
                 </div>
              </div>
           </div>
        </div>

        <div className="flex flex-col items-center justify-center p-6 bg-white border border-slate-300/50 rounded-3xl shadow-2xl relative group overflow-hidden min-w-[180px]">
           <div className="absolute top-0 right-0 w-12 h-12 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
           <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1 italic">Synchronization</p>
           <span className="text-3xl font-black text-slate-900">{group.memberCount} / {group.maxMembers}</span>
           <p className="text-[8px] text-slate-600 font-black uppercase tracking-widest mt-1">Scholars Active</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* Left Column: Leaderboard */}
        <div className="lg:col-span-2 space-y-8">
           <div className="flex items-center space-x-3">
              <div className="p-2 bg-amber-500 rounded-xl shadow-lg shadow-amber-900/20"><Trophy size={20} className="text-slate-900" /></div>
              <h2 className="text-xl font-black text-slate-900 uppercase tracking-tighter italic">Daily Leaderboard Rank</h2>
           </div>

           <div className="space-y-4">
              {members.length === 0 ? (
                <div className="p-12 text-center text-slate-500 uppercase tracking-widest font-black text-xs italic">No data synced yet</div>
              ) : (
                members.map((member, index) => (
                  <div key={member.id} className={`flex items-center justify-between p-6 rounded-[2rem] transition-all relative group shadow-2xl ${index === 0 ? 'bg-gradient-to-r from-blue-600/20 to-indigo-600/10 border-2 border-blue-500/30' : 'bg-white border border-slate-200/80 hover:border-slate-300'}`}>
                     {index === 0 && <div className="absolute -top-3 -right-3 w-10 h-10 bg-amber-500 rounded-full shadow-lg shadow-amber-500/20 flex items-center justify-center border-2 border-[#0d121f] z-10 animate-bounce cursor-default"><Trophy size={16} fill="white" className="text-slate-900" /></div>}
                     
                     <div className="flex items-center space-x-6">
                        <div className={`w-12 h-12 flex items-center justify-center rounded-2xl text-lg font-black italic shadow-lg ${index < 3 ? 'bg-blue-600 text-slate-900' : 'bg-slate-800 text-slate-500'}`}>
                           #{index + 1}
                        </div>
                        <div>
                           <div className="flex items-center space-x-3">
                              <span className="font-black text-slate-900 text-lg tracking-tighter uppercase">{member.name}</span>
                              {member.id === group.adminId && (
                                <span className="flex items-center gap-1 bg-amber-500/10 text-amber-600 text-[8px] font-black uppercase px-2 py-0.5 rounded-full border border-amber-500/20 tracking-widest">
                                  <Shield size={8} fill="currentColor" /> Architect
                                </span>
                              )}
                              {member.id === user.uid && <span className="bg-slate-800 text-slate-500 text-[8px] font-black uppercase px-2 py-0.5 rounded-full tracking-widest">YOU</span>}
                              {member.isStudying && (
                                <span className="flex items-center gap-1.5 px-2 py-0.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
                                  <span className="text-[8px] font-black uppercase tracking-widest text-emerald-500">Studying Now</span>
                                </span>
                              )}
                           </div>
                           <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Verified Scholar</p>
                        </div>
                     </div>
                     <div className="flex items-center gap-6">
                        <div className="text-right">
                           <div className="text-2xl font-black text-emerald-500 drop-shadow-lg">{formatMins(member.todayStudyTime)} <span className="text-[10px] font-bold uppercase tracking-tighter text-slate-600">Min</span></div>
                           <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest italic opacity-60">Synchronized</p>
                        </div>
                        {group.adminId === user.uid && member.id !== user.uid && (
                          <button onClick={() => removeMember(member.id)} className="p-3 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-2xl transition-all lg:opacity-0 group-hover:opacity-100">
                            <Trash2 size={16} />
                          </button>
                        )}
                     </div>
                  </div>
                ))
              )}
           </div>
        </div>

        {/* Right Column: Information & Actions */}
        <div className="space-y-10">
           
           {/* Collective Target Card */}
           <div className="bg-slate-900 rounded-[2.5rem] p-8 space-y-8 shadow-2xl relative overflow-hidden border border-slate-800">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl"></div>
              <div className="flex justify-between items-start">
                 <div>
                    <h3 className="text-xs font-black text-blue-500 uppercase tracking-[0.3em] mb-2">Network Objective</h3>
                    <p className="text-3xl font-black text-white tracking-tighter uppercase leading-none">Strategic Goal</p>
                 </div>
                 {group.adminId === user.uid && (
                   <button onClick={setGroupGoal} className="p-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all text-white/50 hover:text-white">
                      <Shield size={14} />
                   </button>
                 )}
              </div>

              <div className="space-y-4">
                 <div className="flex justify-between items-end">
                    <span className="text-[10px] text-slate-500 font-black uppercase tracking-widest italic">Current Progress</span>
                    <span className="text-2xl font-black text-white tracking-tighter">{totalHrs} / {group?.dailyGoal || 1} <span className="text-[10px] text-slate-500">HRS</span></span>
                 </div>
                 <div className="h-3 bg-white/5 rounded-full overflow-hidden border border-white/5 p-0.5">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-600 to-indigo-500 rounded-full transition-all duration-1000 shadow-[0_0_15px_rgba(37,99,235,0.4)]"
                      style={{ width: `${progress}%` }}
                    ></div>
                 </div>
                 <p className="text-[8px] text-slate-600 font-black uppercase tracking-[0.2em] text-center">Protocol Efficiency: {progress.toFixed(0)}% Synchronized</p>
              </div>
           </div>

           <div className="space-y-6">
              <h3 className="text-sm font-black text-slate-900 uppercase tracking-[0.3em] italic flex items-center gap-2">
                 <Clock size={16} className="text-blue-500" /> Operational Specs
              </h3>
              <div className="bg-white border border-slate-200 rounded-3xl p-8 space-y-6 shadow-2xl">
                 <div className="flex justify-between items-center border-b border-slate-200/50 pb-4">
                    <span className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Protocol</span>
                    <span className="text-xs font-black text-blue-500 uppercase tracking-widest">Study Group</span>
                 </div>
                 <div className="flex justify-between items-center border-b border-slate-200/50 pb-4">
                    <span className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Capacity</span>
                    <span className="text-xs font-black text-slate-700 uppercase tracking-widest">50 Seats</span>
                 </div>
                 <div className="flex justify-between items-center border-b border-slate-200/50 pb-4">
                    <span className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Status</span>
                    <span className="text-xs font-black text-emerald-500 uppercase tracking-widest flex items-center gap-2"><div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping"></div> Secure</span>
                 </div>
              </div>
           </div>

           <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[3rem] p-10 shadow-2xl shadow-blue-900/40 relative overflow-hidden group">
              <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
              <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter leading-tight mb-8">Ready to climb the rank?</h3>
              <button                  onClick={() => navigate('/dashboard/timer')}
                 className="w-full py-4 bg-white text-blue-700 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-slate-100 transition-all shadow-xl active:scale-95"
              >
                 Infiltrate Studio
              </button>
           </div>
        </div>
      </div>
    </div>
  );
}
