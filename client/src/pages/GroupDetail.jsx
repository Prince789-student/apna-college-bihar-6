import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { db } from '../firebase';
import { useAuth } from '../context/AuthContext';
import { Trophy, Users, Calendar, Hash, ArrowLeft, Clock, Shield, Trash2, Video, Maximize2, Minimize2, ExternalLink, Settings2, Link2 } from 'lucide-react';
import { collection, query, where, onSnapshot, doc, updateDoc, arrayRemove, deleteDoc } from 'firebase/firestore';

export default function GroupDetail() {
  const { groupId } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [group, setGroup] = useState(null);
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isMeetingExpanded, setIsMeetingExpanded] = useState(false);
  const [isSettingLink, setIsSettingLink] = useState(false);
  const [newLink, setNewLink] = useState('');

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

  const isAdmin = (group?.adminId || group?.members?.[0]) === user?.uid;

  const removeMember = async (targetId) => {
    if (!isAdmin) return;
    if (targetId === user.uid) return; 
    if (!window.confirm('Strike this student from the operational network?')) return;

    try {
      await updateDoc(doc(db, 'Groups', groupId), {
        members: arrayRemove(targetId),
        memberCount: group.memberCount - 1
      });
    } catch (e) { console.error(e); }
  };

  const deleteGroup = async () => {
    if (!isAdmin) return;
    if (!window.confirm('CRITICAL: This will permanently decommission this Hub and disconnect all scholars. Proceed?')) return;
    
    try {
      await deleteDoc(doc(db, 'Groups', groupId));
      navigate('/dashboard/study');
    } catch (e) { console.error(e); }
  };

  const setGroupGoal = async () => {
    if (!isAdmin) return;
    const g = window.prompt('Set collective network goal (Total Hours):', group.dailyGoal || '10');
    if (g) {
      await updateDoc(doc(db, 'Groups', groupId), { dailyGoal: Number(g) });
    }
  };

  const updateMeetingLink = async () => {
    if (!isAdmin) return;
    if (!newLink.trim()) return;
    try {
      await updateDoc(doc(db, 'Groups', groupId), { meetingLink: newLink.trim() });
      setIsSettingLink(false);
      setNewLink('');
    } catch (e) { console.error(e); }
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
      
      {/* Premium Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-100">
        <div className="space-y-4 flex-1">
           <button onClick={() => navigate('/dashboard/study')} className="flex items-center space-x-2 text-slate-400 hover:text-blue-600 transition-colors group">
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
              <span className="text-[10px] font-black uppercase tracking-widest">Back to Network</span>
           </button>
           <div className="space-y-2">
              <h1 className="text-3xl md:text-5xl font-[1000] text-slate-900 tracking-tighter uppercase leading-none">{group.groupName}</h1>
              <div className="flex flex-wrap items-center gap-3">
                 <div className="flex items-center gap-2 bg-slate-100 text-slate-500 px-3 py-1.5 rounded-xl border border-slate-200">
                    <Calendar size={12} />
                    <span className="text-[9px] font-black uppercase tracking-widest">{new Date(group.createdAt).toLocaleDateString()}</span>
                 </div>
                 <div className="flex items-center gap-2 bg-blue-600/10 text-blue-600 px-3 py-1.5 rounded-xl border border-blue-500/20">
                    <Hash size={12} />
                    <span className="text-[10px] font-black tracking-widest uppercase">ID: {group.groupCode}</span>
                 </div>
              </div>
           </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:block text-right">
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">Scholar Density</p>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-black text-slate-900">{group.memberCount}</span>
              <span className="text-xs text-slate-400 font-bold uppercase">/ {group.maxMembers}</span>
            </div>
          </div>
          {isAdmin && (
            <button onClick={deleteGroup} className="p-4 bg-red-50 text-red-500 hover:bg-red-500 hover:text-white rounded-2xl transition-all border border-red-100">
              <Trash2 size={18} />
            </button>
          )}
        </div>
      </div>

      {/* Live Study Portal (Persistent Meeting Hub) */}
      <div className="relative group">
        <div className="bg-slate-900 border border-slate-800 rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] relative overflow-hidden">
          {/* Decorative Background */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-[100px]"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="space-y-6 flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-ping"></span>
                <span className="text-[10px] font-black text-red-400 uppercase tracking-[0.2em]">Live Operational Hub</span>
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl md:text-5xl font-[1000] text-white tracking-tighter uppercase leading-none">Virtual Study Room</h2>
                <p className="text-slate-400 text-[10px] md:text-xs font-bold uppercase tracking-widest max-w-md mx-auto md:mx-0">Connect via Google Meet, Zoom, or Discord. This room is always active for your collective.</p>
              </div>
              
              {group.meetingLink ? (
                <div className="flex flex-wrap items-center gap-3 justify-center md:justify-start">
                  <a 
                    href={group.meetingLink.startsWith('http') ? group.meetingLink : `https://${group.meetingLink}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-6 py-4 md:px-10 md:py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-[1000] text-[10px] md:text-sm uppercase tracking-widest transition-all shadow-2xl shadow-blue-600/30 active:scale-95 flex items-center gap-2 md:gap-3"
                  >
                    Enter Meeting <ExternalLink size={16} />
                  </a>
                  {isAdmin && (
                    <button 
                      onClick={() => { setNewLink(group.meetingLink); setIsSettingLink(true); }}
                      className="p-5 bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white rounded-2xl transition-all border border-white/10"
                    >
                      <Settings2 size={20} />
                    </button>
                  )}
                </div>
              ) : (
                <div className="space-y-4">
                  {isAdmin ? (
                    <button 
                      onClick={() => setIsSettingLink(true)}
                      className="px-10 py-5 bg-white text-slate-900 rounded-2xl font-[1000] text-sm uppercase tracking-widest transition-all shadow-xl active:scale-95 flex items-center gap-3"
                    >
                      Setup Meeting Link <Link2 size={18} />
                    </button>
                  ) : (
                    <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                      <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest italic">Waiting for Admin to initialize the meeting link...</p>
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="w-full md:w-auto flex flex-col items-center">
              <div className="w-32 h-32 md:w-48 md:h-48 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[2.5rem] md:rounded-[3.5rem] flex items-center justify-center shadow-2xl relative overflow-hidden group/icon">
                 <div className="absolute inset-0 bg-white/10 group-hover/icon:scale-150 transition-transform duration-700"></div>
                 <Video size={isMeetingExpanded ? 80 : 64} className="text-white relative z-10" />
              </div>
            </div>
          </div>
        </div>

        {/* Link Setup Modal */}
        {isSettingLink && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
            <div className="bg-white rounded-[3rem] p-10 w-full max-w-lg shadow-2xl space-y-8">
              <div className="text-center space-y-2">
                <div className="w-16 h-16 bg-blue-600/10 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Link2 size={32} />
                </div>
                <h3 className="text-2xl font-[1000] text-slate-900 uppercase tracking-tighter">Configure Meeting Hub</h3>
                <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Paste your Google Meet, Zoom, or Discord link below.</p>
              </div>
              <div className="space-y-4">
                <input 
                  value={newLink}
                  onChange={(e) => setNewLink(e.target.value)}
                  placeholder="https://meet.google.com/xxx-xxxx-xxx"
                  className="w-full bg-slate-100 border-2 border-transparent focus:border-blue-500/50 rounded-2xl p-5 text-slate-900 font-bold outline-none transition-all"
                />
                <div className="flex gap-4">
                  <button onClick={() => setIsSettingLink(false)} className="flex-1 py-4 text-slate-400 font-black uppercase text-xs tracking-widest hover:bg-slate-50 rounded-xl transition-all">Cancel</button>
                  <button onClick={updateMeetingLink} className="flex-1 py-4 bg-slate-900 text-white font-black uppercase text-xs tracking-widest rounded-xl shadow-xl active:scale-95 transition-all">Establish Link</button>
                </div>
              </div>
            </div>
          </div>
        )}
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
                              {(member.id === group.adminId || member.id === group.members?.[0]) && (
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
                           <div className="text-2xl font-black text-emerald-500 drop-shadow-lg">
                              {(member.todayStudyTime / 3600).toFixed(1)} <span className="text-[8px] text-slate-500">HRS</span>
                           </div>
                           <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest italic opacity-60">
                             Today: {formatMins(member.todayStudyTime)} MIN
                           </p>
                        </div>
                        {isAdmin && member.id !== user.uid && (
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
                 {isAdmin && (
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
