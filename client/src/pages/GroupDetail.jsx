import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { db } from '../firebase';
import { useAuth } from '../context/AuthContext';
import { Trophy, Users, Calendar, Hash, ArrowLeft, Clock, Shield, Trash2, Video, Maximize2, Minimize2, ExternalLink, Settings2, Link2, Lock, Monitor, BellRing, X, Activity, MoreVertical, BarChart2 } from 'lucide-react';
import { collection, query, where, onSnapshot, doc, updateDoc, arrayRemove, deleteDoc, addDoc, serverTimestamp } from 'firebase/firestore';
import { useStudy } from '../context/StudyContext';

export default function GroupDetail() {
  const { groupId } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [group, setGroup] = useState(null);
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isMeetingOpen, setIsMeetingOpen] = useState(false);
  const [isSettingLink, setIsSettingLink] = useState(false);
  const [newLink, setNewLink] = useState('');
  const [selectedMember, setSelectedMember] = useState(null);

  useEffect(() => {
    if (!groupId || !user) return;
    const unsubGroup = onSnapshot(doc(db, 'groups', groupId), (docSnap) => {
      if (!docSnap.exists()) { setError('Study Collective not found'); setLoading(false); return; }
      const data = { id: docSnap.id, ...docSnap.data() };
      setGroup(data);
      if (!data.members.includes(user.uid)) navigate('/dashboard/study');
      setLoading(false);
    });
    return () => unsubGroup();
  }, [groupId, user]);

  useEffect(() => {
    if (!group?.members?.length) return;
    const unsubMembers = onSnapshot(query(collection(db, 'users'), where('uid', 'in', group.members)), (snap) => {
      const mData = snap.docs.map(d => ({ id: d.id, ...d.data() }));
      mData.sort((a, b) => (b.todayStudyTime || 0) - (a.todayStudyTime || 0));
      setMembers(mData);
    });
    return () => unsubMembers();
  }, [group?.members]);

  const isAdmin = (group?.createdBy || group?.members?.[0]) === user?.uid;

  const removeMember = async (targetId) => {
    if (!isAdmin || targetId === user.uid || !window.confirm('Strike this student?')) return;
    try { await updateDoc(doc(db, 'groups', groupId), { members: arrayRemove(targetId), memberCount: group.memberCount - 1 }); } catch (e) { console.error(e); }
  };

  const deleteGroup = async () => {
    if (!isAdmin || !window.confirm('Permanently decommission this Hub?')) return;
    try { await deleteDoc(doc(db, 'groups', groupId)); navigate('/dashboard/study'); } catch (e) { console.error(e); }
  };

  const setGroupGoal = async () => {
    if (!isAdmin) return;
    const g = window.prompt('Set network goal (Total Hours):', group.dailyGoal || '10');
    if (g) await updateDoc(doc(db, 'groups', groupId), { dailyGoal: Number(g) });
  };

  const updateMeetingLink = async () => {
    if (!newLink.trim() || !isAdmin) return;
    try { 
      await updateDoc(doc(db, 'groups', groupId), { 
        meetingLink: newLink.trim(),
        linkUpdatedAt: serverTimestamp()
      }); 
      setIsSettingLink(false); 
      setNewLink(''); 
    } catch (e) { console.error(e); }
  };

  const formatHHMMSS = (totalSeconds) => {
    const hrs = Math.floor((totalSeconds || 0) / 3600);
    const mins = Math.floor(((totalSeconds || 0) % 3600) / 60);
    const secs = (totalSeconds || 0) % 60;
    return `${hrs}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const sendNudge = async (targetMember = null) => {
    const target = targetMember || selectedMember;
    if (!target || !user) return;
    try { await addDoc(collection(db, 'nudges'), { toUserId: target.id, fromUserName: user.name || 'Scholar', timestamp: serverTimestamp(), groupId: groupId }); alert(`Nudge sent!`); } catch (e) { console.error(e); }
    if (!targetMember) setSelectedMember(null);
  };

  const MemberCard = ({ member, index }) => {
    const { timerActive, timerTime, timerMode, customMinutes, customSeconds } = useStudy();
    const isMe = member.id === user.uid;
    const isStudying = member.isStudying;
    let displayTimeSec = member.todayStudyTime || 0;
    if (isMe && timerActive) {
      const elapsed = timerMode === 'COUNTDOWN' ? (customMinutes * 60 + customSeconds - timerTime) : timerTime;
      displayTimeSec += elapsed;
    }
    const studyTimeStr = formatHHMMSS(displayTimeSec);
    return (
      <div onClick={() => setSelectedMember(member)} className={`relative flex flex-col items-center justify-center p-6 md:p-8 rounded-[2rem] border-2 transition-all cursor-pointer group hover:scale-105 ${isStudying ? 'bg-orange-50 border-orange-200 hover:border-orange-400 shadow-xl shadow-orange-500/10' : 'bg-white border-slate-200/80 hover:border-slate-300'}`}>
         <div className={`absolute top-4 left-4 text-[10px] font-black italic tracking-widest ${index < 3 ? 'text-amber-500' : 'text-slate-400'}`}>#{index + 1}</div>
         <div className="relative mb-4">
           <div className={`w-16 h-16 md:w-20 md:h-20 rounded-[2rem] flex items-center justify-center transition-colors ${isStudying ? 'bg-orange-500/10 text-orange-500' : 'bg-slate-100 text-slate-300'}`}><Monitor size={32} /></div>
           {isStudying && <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-orange-500 border-2 border-white rounded-full animate-pulse shadow-[0_0_10px_rgba(249,115,22,0.8)]"></div>}
           {!isStudying && <button onClick={(e) => { e.stopPropagation(); sendNudge(member); }} className="absolute -bottom-2 -right-2 w-8 h-8 bg-white border border-slate-200 rounded-full flex items-center justify-center text-amber-500 hover:bg-amber-50 opacity-0 group-hover:opacity-100 shadow-sm"><BellRing size={14} /></button>}
         </div>
         <span className="font-[1000] text-slate-900 text-xs md:text-sm tracking-tight uppercase truncate w-full text-center mb-1">{member.name}</span>
         <div className={`${isStudying ? 'text-orange-600' : 'text-slate-400'} font-[1000] text-sm md:text-base tracking-widest mt-1`}>{studyTimeStr}</div>
      </div>
    );
  };

  if (loading) return <div className="flex items-center justify-center p-20"><div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div></div>;
  if (error) return <div className="text-red-500 font-black p-20 text-center uppercase tracking-widest">{error}</div>;
  if (!group || !user) return null;

  const totalSec = members.reduce((a, m) => a + (m.todayStudyTime || 0), 0);
  const totalHrs = (totalSec / 3600).toFixed(1);
  const progress = Math.min(100, (Number(totalHrs) / (group?.dailyGoal || 1)) * 100);

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-5 duration-700">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-100">
        <div className="space-y-4 flex-1">
           <button onClick={() => navigate('/dashboard/study', { state: { tab: 'group' } })} className="flex items-center space-x-2 text-slate-400 hover:text-blue-600 transition-colors group"><ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /><span className="text-[10px] font-black uppercase tracking-widest">Back to Network</span></button>
           <div className="space-y-2">
              <h1 className="text-3xl md:text-5xl font-[1000] text-slate-900 tracking-tighter uppercase leading-none">{group.name}</h1>
              <div className="flex flex-wrap items-center gap-3">
                  <div className="flex items-center gap-2 bg-slate-100 text-slate-500 px-3 py-1.5 rounded-xl border border-slate-200">
                    <Calendar size={12} />
                    <span className="text-[9px] font-black uppercase tracking-widest">
                      {group.createdAt?.toDate ? group.createdAt.toDate().toLocaleDateString() : new Date(group.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                 <div className="flex items-center gap-2 bg-blue-600/10 text-blue-600 px-3 py-1.5 rounded-xl border border-blue-500/20"><Hash size={12} /><span className="text-[10px] font-black tracking-widest uppercase">ID: {group.code}</span></div>
              </div>
           </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:block text-right">
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">Scholar Density</p>
            <div className="flex items-center gap-2"><span className="text-2xl font-black text-slate-900">{group.memberCount}</span><span className="text-xs text-slate-400 font-bold uppercase">/ 70</span></div>
          </div>
          {isAdmin && <button onClick={deleteGroup} className="p-4 bg-red-50 text-red-500 hover:bg-red-500 rounded-2xl transition-all border border-red-100"><Trash2 size={18} /></button>}
        </div>
      </div>

      {/* Internal Virtual Study Portal */}
      <div className="relative group">
        <div className="bg-slate-900 border border-slate-800 rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-[100px]"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="space-y-6 flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-ping"></span>
                <span className="text-[10px] font-black text-red-400 uppercase tracking-[0.2em]">Internal Operational Hub</span>
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl md:text-5xl font-[1000] text-white tracking-tighter uppercase leading-none">Embedded Study Room</h2>
                <p className="text-slate-400 text-[10px] md:text-xs font-bold uppercase tracking-widest max-w-md mx-auto md:mx-0">Join the collective meeting without leaving the platform. Your study records stay synced.</p>
              </div>
              <div className="flex flex-wrap items-center gap-3 justify-center md:justify-start">
                {group.meetingLink ? (
                  <>
                    <button onClick={() => setIsMeetingOpen(true)} className="px-6 py-4 md:px-10 md:py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-[1000] text-[10px] md:text-sm uppercase tracking-widest transition-all shadow-2xl shadow-blue-600/30 active:scale-95 flex items-center gap-2 md:gap-3">
                      Infiltrate Hub Portal <Video size={16} />
                    </button>
                    {isAdmin && (() => {
                      const lastUpdate = group.linkUpdatedAt?.toDate ? group.linkUpdatedAt.toDate() : (group.linkUpdatedAt ? new Date(group.linkUpdatedAt) : null);
                      const isRecent = !lastUpdate || (new Date() - lastUpdate < 3600000);
                      return isRecent ? (
                        <button onClick={() => setIsSettingLink(true)} className="p-4 bg-white/10 hover:bg-white/20 text-white rounded-2xl transition-all border border-white/10 flex items-center gap-2">
                          <Settings2 size={16} /> <span className="text-[10px] font-black uppercase">Change</span>
                        </button>
                      ) : null;
                    })()}
                  </>
                ) : (
                  isAdmin ? (
                    <button onClick={() => setIsSettingLink(true)} className="px-8 py-5 bg-white text-slate-900 rounded-2xl font-[1000] text-[10px] md:text-sm uppercase tracking-widest transition-all shadow-xl active:scale-95 flex items-center justify-center gap-3">
                      <Link2 size={18} className="text-blue-600" /> Establish Link
                    </button>
                  ) : (
                    <div className="px-8 py-4 bg-white/5 border border-white/10 rounded-2xl text-slate-500 font-black text-[10px] uppercase tracking-widest">
                      Link Not Established
                    </div>
                  )
                )}
              </div>
            </div>
            <div className="w-full md:w-auto flex flex-col items-center">
              <div className="w-32 h-32 md:w-48 md:h-48 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[2.5rem] md:rounded-[3.5rem] flex items-center justify-center shadow-2xl relative overflow-hidden group/icon"><div className="absolute inset-0 bg-white/10 group-hover/icon:scale-150 transition-transform duration-700"></div><Video size={64} className="text-white relative z-10" /></div>
            </div>
          </div>
        </div>

        {/* Embedded Meeting Modal */}
        {isMeetingOpen && (
          <div className="fixed inset-0 z-[500] flex flex-col bg-slate-950 animate-in fade-in duration-500">
            <div className="bg-slate-900 border-b border-slate-800 p-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-600/20 text-blue-500 rounded-xl flex items-center justify-center"><Monitor size={20} /></div>
                <div><h3 className="text-white font-[1000] uppercase text-xs tracking-tighter">Study Hub Portal</h3><p className="text-[8px] text-slate-500 font-black uppercase tracking-widest">Active operational zone</p></div>
              </div>
              <button onClick={() => setIsMeetingOpen(false)} className="px-6 py-2 bg-red-600/10 hover:bg-red-600 text-red-500 hover:text-white rounded-xl text-[10px] font-black uppercase tracking-widest transition-all">Terminate Link</button>
            </div>
            <div className="flex-1 relative">
              <iframe 
                src={group.meetingLink.startsWith('http') ? group.meetingLink : `https://${group.meetingLink}`}
                className="w-full h-full border-none"
                title="Internal Study Room"
                allow="camera; microphone; display-capture; fullscreen; autoplay"
              />
              {/* Overlay if iframe fails or needs help */}
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-black/60 backdrop-blur-md p-4 rounded-[2rem] border border-white/10">
                <p className="text-[10px] text-white/70 font-black uppercase tracking-widest">Problem viewing?</p>
                <a href={group.meetingLink.startsWith('http') ? group.meetingLink : `https://${group.meetingLink}`} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-600 text-white rounded-xl text-[9px] font-black uppercase flex items-center gap-2">External View <ExternalLink size={12} /></a>
              </div>
            </div>
          </div>
        )}

        {isSettingLink && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
            <div className="bg-white rounded-[3rem] p-10 w-full max-w-lg shadow-2xl space-y-8">
              <div className="text-center space-y-2"><div className="w-16 h-16 bg-blue-600/10 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4"><Link2 size={32} /></div><h3 className="text-2xl font-[1000] text-slate-900 uppercase tracking-tighter">Configure Link</h3><p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Paste your meeting URL below.</p></div>
              <div className="space-y-4"><input value={newLink} onChange={(e) => setNewLink(e.target.value)} placeholder="https://..." className="w-full bg-slate-100 border-2 border-transparent focus:border-blue-500/50 rounded-2xl p-5 text-slate-900 font-bold outline-none transition-all" /><div className="flex gap-4"><button onClick={() => setIsSettingLink(false)} className="flex-1 py-4 text-slate-400 font-black uppercase text-xs tracking-widest hover:bg-slate-50 rounded-xl transition-all">Cancel</button><button onClick={updateMeetingLink} className="flex-1 py-4 bg-slate-900 text-white font-black uppercase text-xs tracking-widest rounded-xl shadow-xl active:scale-95 transition-all">Establish</button></div></div>
            </div>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-8">
           <div className="flex items-center space-x-3"><div className="p-2 bg-amber-500 rounded-xl shadow-lg shadow-amber-900/20"><Trophy size={20} className="text-slate-900" /></div><h2 className="text-xl font-black text-slate-900 uppercase tracking-tighter italic">Leaderboard Rank</h2></div>
           <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">{members.length === 0 ? <div className="col-span-full p-12 text-center text-slate-500 font-black text-xs italic">No data synced</div> : members.map((member, index) => <MemberCard key={member.id} member={member} index={index} />)}</div>
        </div>

        <div className="space-y-10">
           <div className="bg-slate-900 rounded-[2.5rem] p-8 space-y-8 shadow-2xl relative overflow-hidden border border-slate-800">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl"></div>
              <div className="flex justify-between items-start"><div><h3 className="text-xs font-black text-blue-500 uppercase tracking-[0.3em] mb-2">Network Objective</h3><p className="text-3xl font-black text-white tracking-tighter uppercase leading-none">Strategic Goal</p></div>{isAdmin && <button onClick={setGroupGoal} className="p-2 bg-white/5 hover:bg-white/10 rounded-xl transition-all text-white/50 hover:text-white"><Shield size={14} /></button>}</div>
              <div className="space-y-4"><div className="flex justify-between items-end"><span className="text-[10px] text-slate-500 font-black uppercase tracking-widest italic">Progress</span><span className="text-2xl font-black text-white tracking-tighter">{totalHrs} / {group?.dailyGoal || 1} <span className="text-[10px] text-slate-500">HRS</span></span></div><div className="h-3 bg-white/5 rounded-full overflow-hidden border border-white/5 p-0.5"><div className="h-full bg-gradient-to-r from-blue-600 to-indigo-500 rounded-full transition-all duration-1000 shadow-[0_0_15px_rgba(37,99,235,0.4)]" style={{ width: `${progress}%` }}></div></div></div>
           </div>
           <div className="space-y-6">
              <h3 className="text-sm font-black text-slate-900 uppercase tracking-[0.3em] italic flex items-center gap-2"><Clock size={16} className="text-blue-500" /> Operational Specs</h3>
              <div className="bg-white border border-slate-200 rounded-3xl p-8 space-y-6 shadow-2xl">
                 <div className="flex justify-between items-center border-b border-slate-200/50 pb-4"><span className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Protocol</span><span className="text-xs font-black text-blue-500 uppercase tracking-widest">Study Group</span></div>
                 <div className="flex justify-between items-center border-b border-slate-200/50 pb-4"><span className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Capacity</span><span className="text-xs font-black text-slate-700 uppercase tracking-widest">70 Seats</span></div>
                 <div className="flex justify-between items-center border-b border-slate-200/50 pb-4"><span className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Status</span><span className="text-xs font-black text-emerald-500 uppercase tracking-widest flex items-center gap-2"><div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping"></div> Secure</span></div>
              </div>
           </div>
        </div>
      </div>

      {selectedMember && (
        <div className="fixed inset-0 z-[300] flex items-end md:items-center justify-center bg-black/60 backdrop-blur-sm transition-all" onClick={() => setSelectedMember(null)}>
          <div className="w-full md:w-[400px] bg-white rounded-t-[3rem] md:rounded-[3rem] p-8 shadow-2xl relative" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${selectedMember.isStudying ? 'bg-orange-500/10 text-orange-500' : 'bg-slate-100 text-slate-400'}`}><Monitor size={28} /></div>
                <div><h3 className="text-xl font-[1000] text-slate-900 tracking-tighter uppercase">{selectedMember.name}</h3><p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Scholar</p></div>
              </div>
              <button onClick={() => setSelectedMember(null)} className="p-2 bg-slate-100 text-slate-400 rounded-xl"><X size={20} /></button>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 mb-8 space-y-6"><div className="flex items-center justify-between"><div><span className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Today's Focus</span><span className="text-3xl font-[1000] text-slate-900 tracking-tighter">{formatHHMMSS(selectedMember.todayStudyTime)}</span></div></div></div>
            <div className="flex gap-4"><button onClick={() => sendNudge()} className="flex-1 flex items-center justify-center gap-2 py-4 bg-orange-50 text-orange-600 rounded-2xl font-black text-xs uppercase tracking-widest transition-all"><BellRing size={16} /> Nudge</button></div>
          </div>
        </div>
      )}
    </div>
  );
}
