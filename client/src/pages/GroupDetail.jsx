import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { db } from '../firebase';
import { useAuth } from '../context/AuthContext';
import { Trophy, Users, Calendar, Hash, ArrowLeft, Clock, Shield, Trash2, Video, Maximize2, Minimize2, ExternalLink, Settings2, Link2, Lock, Monitor, BellRing, X, Activity, MoreVertical, BarChart2 } from 'lucide-react';
import { collection, query, where, onSnapshot, doc, updateDoc, arrayRemove, deleteDoc, addDoc, serverTimestamp } from 'firebase/firestore';

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
  const [selectedMember, setSelectedMember] = useState(null);
  const [showInsights, setShowInsights] = useState(false);

  useEffect(() => {
    if (!groupId || !user) return;

    // Real-time Group Sync
    const unsubGroup = onSnapshot(doc(db, 'groups', groupId), (docSnap) => {
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
      await updateDoc(doc(db, 'groups', groupId), {
        members: arrayRemove(targetId),
        memberCount: group.memberCount - 1
      });
    } catch (e) { console.error(e); }
  };

  const deleteGroup = async () => {
    if (!isAdmin) return;
    if (!window.confirm('CRITICAL: This will permanently decommission this Hub and disconnect all scholars. Proceed?')) return;
    
    try {
      await deleteDoc(doc(db, 'groups', groupId));
      navigate('/dashboard/study');
    } catch (e) { console.error(e); }
  };

  const setGroupGoal = async () => {
    if (!isAdmin) return;
    const g = window.prompt('Set collective network goal (Total Hours):', group.dailyGoal || '10');
    if (g) {
      await updateDoc(doc(db, 'groups', groupId), { dailyGoal: Number(g) });
    }
  };

  const updateMeetingLink = async () => {
    if (!newLink.trim()) return;
    try {
      await updateDoc(doc(db, 'groups', groupId), { meetingLink: newLink.trim() });
      setIsSettingLink(false);
      setNewLink('');
    } catch (e) { console.error(e); }
  };

  const copyInviteLink = () => {
    const link = window.location.href;
    navigator.clipboard.writeText(link);
    alert('Group Invite Link copied to clipboard! Share it with friends.');
  };

  const sendNudge = async (targetMember = null) => {
    const memberToNudge = targetMember || selectedMember;
    if (!memberToNudge || !user) return;
    try {
      await addDoc(collection(db, 'nudges'), {
        toUserId: memberToNudge.id,
        fromUserName: user.displayName || 'A Scholar',
        timestamp: serverTimestamp(),
        groupId: groupId
      });
      alert(`Nudge sent to ${memberToNudge.name}!`);
    } catch (e) {
      console.error("Nudge failed", e);
    }
    if (!targetMember) setSelectedMember(null);
  };



  if (loading) return <div className="flex items-center justify-center p-20"><div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div></div>;
  if (error) return <div className="text-red-500 font-black p-20 text-center uppercase tracking-widest">{error}</div>;
  if (!group || !user) return null;

  const totalSec = members.reduce((a, m) => a + (m.todayStudyTime || 0), 0);
  const totalHrs = (totalSec / 3600).toFixed(1);
  const goalHrs = group?.dailyGoal || 1;
  const progress = Math.min(100, (Number(totalHrs) / goalHrs) * 100);

  const formatMins = (totalSeconds) => Math.floor((totalSeconds || 0) / 60);
  const formatHHMMSS = (totalSeconds) => {
    const hrs = Math.floor((totalSeconds || 0) / 3600);
    const mins = Math.floor(((totalSeconds || 0) % 3600) / 60);
    const secs = (totalSeconds || 0) % 60;
    return `${hrs}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-5 duration-700">
      
      {/* Premium Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-100">
        <div className="space-y-4 flex-1">
           <button onClick={() => navigate('/dashboard/study', { state: { tab: 'group' } })} className="flex items-center space-x-2 text-slate-400 hover:text-blue-600 transition-colors group">
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
                 <button onClick={copyInviteLink} className="flex items-center gap-2 bg-emerald-50 text-emerald-600 px-3 py-1.5 rounded-xl border border-emerald-500/20 hover:bg-emerald-500 hover:text-white transition-colors cursor-pointer group/link">
                    <Link2 size={12} />
                    <span className="text-[10px] font-black tracking-widest uppercase">Share Hub Link</span>
                 </button>
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
              
              <div className="flex flex-wrap items-center gap-3 justify-center md:justify-start">
                {group.meetingLink ? (
                  <>
                    <a 
                      href={group.meetingLink.startsWith('http') ? group.meetingLink : `https://${group.meetingLink}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-6 py-4 md:px-10 md:py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-[1000] text-[10px] md:text-sm uppercase tracking-widest transition-all shadow-2xl shadow-blue-600/30 active:scale-95 flex items-center gap-2 md:gap-3"
                    >
                      Enter Google Meet <ExternalLink size={16} />
                    </a>
                    <div className="p-5 bg-white/5 text-slate-500 rounded-2xl border border-white/5 flex items-center gap-2 cursor-not-allowed" title="Link cannot be changed once set">
                      <Lock size={20} />
                      <span className="text-[10px] font-black uppercase hidden md:inline">Link Locked</span>
                    </div>
                  </>
                ) : (
                  <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <button 
                      onClick={() => setIsSettingLink(true)}
                      className="px-8 py-5 bg-white text-slate-900 rounded-2xl font-[1000] text-[10px] md:text-sm uppercase tracking-widest transition-all shadow-xl active:scale-95 flex items-center justify-center gap-3"
                    >
                      <Link2 size={18} className="text-blue-600" /> Attach Meeting Link
                    </button>
                  </div>
                )}
              </div>


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

           <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {members.length === 0 ? (
                <div className="col-span-full p-12 text-center text-slate-500 uppercase tracking-widest font-black text-xs italic">No data synced yet</div>
              ) : (
                members.map((member, index) => {
                  const isStudying = member.isStudying;
                  const studyTime = formatHHMMSS(member.todayStudyTime);
                  
                  return (
                    <div key={member.id} onClick={() => setSelectedMember(member)} className={`relative flex flex-col items-center justify-center p-6 md:p-8 rounded-[2rem] border-2 transition-all cursor-pointer group hover:scale-105 ${isStudying ? 'bg-orange-50 border-orange-200 hover:border-orange-400 shadow-xl shadow-orange-500/10' : 'bg-white border-slate-200/80 hover:border-slate-300'}`}>
                       
                       <div className={`absolute top-4 left-4 text-[10px] font-black italic tracking-widest ${index < 3 ? 'text-amber-500' : 'text-slate-400'}`}>
                          #{index + 1}
                       </div>
                       
                       <div className="relative mb-4">
                         <div className={`w-16 h-16 md:w-20 md:h-20 rounded-[2rem] flex items-center justify-center transition-colors ${isStudying ? 'bg-orange-500/10 text-orange-500' : 'bg-slate-100 text-slate-300'}`}>
                           <Monitor size={32} strokeWidth={isStudying ? 2.5 : 1.5} />
                         </div>
                         {isStudying && (
                           <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-orange-500 border-2 border-white rounded-full animate-pulse shadow-[0_0_10px_rgba(249,115,22,0.8)]"></div>
                         )}
                         {!isStudying && (
                           <button onClick={(e) => { e.stopPropagation(); sendNudge(member); }} className="absolute -bottom-2 -right-2 w-8 h-8 bg-white border border-slate-200 rounded-full flex items-center justify-center text-amber-500 hover:bg-amber-50 hover:text-amber-600 transition-all opacity-0 group-hover:opacity-100 shadow-sm" title="Nudge to Study">
                             <BellRing size={14} />
                           </button>
                         )}
                       </div>

                       <span className="font-[1000] text-slate-900 text-xs md:text-sm tracking-tight uppercase truncate w-full text-center mb-1">
                         {member.name}
                       </span>

                       {isStudying ? (
                         <div className="text-orange-600 font-[1000] text-sm md:text-base tracking-widest mt-1">
                           {studyTime}
                         </div>
                       ) : (
                         <div className="text-slate-400 font-bold text-[10px] uppercase tracking-widest mt-1">
                           {studyTime}
                         </div>
                       )}

                       <div className="absolute top-4 right-4 flex items-center gap-2">
                         {(member.id === group.adminId || member.id === group.members?.[0]) && <Shield size={12} className="text-blue-500" />}
                         {isAdmin && member.id !== user.uid && (
                           <button onClick={(e) => { e.stopPropagation(); removeMember(member.id); }} className="text-slate-300 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100">
                             <Trash2 size={12} />
                           </button>
                         )}
                       </div>

                    </div>
                  );
                })
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
              <button                  onClick={() => navigate('/dashboard/study')}
                 className="w-full py-4 bg-white text-blue-700 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-slate-100 transition-all shadow-xl active:scale-95"
              >
                 Infiltrate Studio
              </button>
           </div>
        </div>
      </div>

      {/* YPT Style Bottom Sheet Modal */}
      {selectedMember && (
        <div className="fixed inset-0 z-[300] flex items-end md:items-center justify-center bg-black/60 backdrop-blur-sm transition-all" onClick={() => { setSelectedMember(null); setShowInsights(false); }}>
          <div 
            className={`w-full md:w-[400px] bg-white rounded-t-[3rem] md:rounded-[3rem] p-8 shadow-2xl relative transition-all duration-500 animate-in slide-in-from-bottom-full md:slide-in-from-bottom-10 ${showInsights ? 'h-[80vh] md:h-auto overflow-y-auto' : ''}`}
            onClick={e => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                {showInsights && (
                   <button onClick={() => setShowInsights(false)} className="p-2 -ml-2 bg-slate-50 text-slate-400 hover:text-slate-900 rounded-xl transition-all">
                     <ArrowLeft size={20} />
                   </button>
                )}
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${selectedMember.isStudying ? 'bg-orange-500/10 text-orange-500' : 'bg-slate-100 text-slate-400'}`}>
                  <Monitor size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-[1000] text-slate-900 tracking-tighter uppercase">{selectedMember.name}</h3>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                    {(selectedMember.id === group.adminId || selectedMember.id === group.members?.[0]) ? 'Architect' : 'Verified Scholar'}
                  </p>
                </div>
              </div>
              <button onClick={() => { setSelectedMember(null); setShowInsights(false); }} className="p-2 bg-slate-100 text-slate-400 hover:text-slate-900 hover:bg-slate-200 rounded-xl transition-all">
                <X size={20} />
              </button>
            </div>

            {showInsights ? (
              <div className="space-y-8 animate-in slide-in-from-right-4 fade-in duration-500">
                 <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                    <span className="font-black text-slate-900 uppercase tracking-widest text-sm">Focus Time</span>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">This Week</span>
                 </div>
                 
                 {/* Heatmap Calendar Mock */}
                 <div className="grid grid-cols-7 gap-2 md:gap-3">
                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                      <div key={day} className="text-center text-[9px] font-black uppercase text-slate-400 tracking-widest mb-2">{day}</div>
                    ))}
                    {[0, 1, 2, 3, 4, 5, 6].map(i => {
                       const todayIdx = (new Date().getDay() + 6) % 7; // Convert Sun=0 to 6, Mon=1 to 0
                       const isToday = i === todayIdx;
                       const hrsNum = isToday ? ((selectedMember.todayStudyTime || 0) / 3600) : 0;
                       const hrs = hrsNum.toFixed(1);
                       const intensity = isToday ? Math.min(100, (hrsNum / 8) * 100) : 0;
                       
                       return (
                         <div key={i} className="aspect-square rounded-[1rem] flex flex-col items-center justify-center bg-slate-50 relative overflow-hidden group shadow-sm border border-slate-200/50">
                           <div className="absolute inset-0 bg-gradient-to-tr from-orange-500 to-amber-400 transition-all" style={{ opacity: intensity / 100 }}></div>
                           <span className={`relative z-10 text-[10px] font-black ${intensity > 40 ? 'text-white' : 'text-slate-400'}`}>{hrs}</span>
                           {isToday && <div className="absolute bottom-1 w-1 h-1 rounded-full bg-orange-600"></div>}
                         </div>
                       )
                    })}
                 </div>

                 {/* Donut Chart Block */}
                 <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 flex items-center gap-6">
                    <div className={`w-20 h-20 rounded-full border-[6px] flex items-center justify-center shrink-0 ${selectedMember.todayStudyTime > 0 ? 'border-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.3)]' : 'border-slate-200'}`}>
                       <span className="text-sm font-black text-slate-900">{selectedMember.todayStudyTime > 0 ? '100%' : '0%'}</span>
                    </div>
                    <div>
                       <h4 className="text-xs font-black uppercase tracking-widest text-slate-900 mb-1">Study Distribution</h4>
                       <p className="text-[10px] font-bold text-slate-500 tracking-widest uppercase flex items-center gap-2">
                         <span className={`w-2 h-2 rounded-full ${selectedMember.todayStudyTime > 0 ? 'bg-orange-500' : 'bg-slate-300'}`}></span> Self Study
                       </p>
                    </div>
                 </div>

                 <div className="pt-4">
                   <button onClick={() => sendNudge()} className="w-full py-4 bg-orange-50 text-orange-600 hover:bg-orange-500 hover:text-white rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-lg flex items-center justify-center gap-2">
                      <BellRing size={16} /> Send Nudge
                   </button>
                 </div>
              </div>
            ) : (
              <>
                {/* Stats Box */}
                <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 mb-8 space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Today's Focus</span>
                      <span className="text-3xl font-[1000] text-slate-900 tracking-tighter">
                        {formatHHMMSS(selectedMember.todayStudyTime)}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Status</span>
                      <span className={`text-sm font-black uppercase tracking-widest ${selectedMember.isStudying ? 'text-orange-500' : 'text-slate-400'}`}>
                        {selectedMember.isStudying ? 'Studying' : 'Resting'}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 border-t border-slate-200 pt-6">
                    <div>
                      <span className="block text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1">Start Time</span>
                      <span className="text-xs font-black text-slate-700">--:-- AM</span>
                    </div>
                    <div>
                      <span className="block text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1">Max Focus</span>
                      <span className="text-xs font-black text-slate-700">{formatHHMMSS(selectedMember.todayStudyTime)}</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <button onClick={() => sendNudge()} className="flex-1 flex items-center justify-center gap-2 py-4 bg-orange-50 text-orange-600 hover:bg-orange-500 hover:text-white rounded-2xl font-black text-xs uppercase tracking-widest transition-all">
                    <BellRing size={16} /> Nudge
                  </button>
                  <button onClick={() => setShowInsights(true)} className="flex-1 flex items-center justify-center gap-2 py-4 bg-slate-900 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/20 active:scale-95">
                    <BarChart2 size={16} /> Insights
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
