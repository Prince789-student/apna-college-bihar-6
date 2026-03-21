import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  doc, getDoc, collection, query, where, getDocs, 
  updateDoc, addDoc, onSnapshot, orderBy, limit, serverTimestamp, arrayUnion, arrayRemove
} from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../context/AuthContext';
import { 
  ArrowLeft, Users, MessageSquare, Trophy, Shield, 
  UserPlus, UserMinus, Send, Hash, MoreVertical, 
  Flame, Clock, Signal, SignalHigh, Zap, Power
} from 'lucide-react';

export default function GroupDetails() {
  const { groupId } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [group, setGroup] = useState(null);
  const [members, setMembers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [newMsg, setNewMsg] = useState('');
  const [tab, setTab] = useState('live'); // 'live', 'leaderboard', 'chat', 'manage'
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef();

  // 1. Fetch Group & Real-time Listeners
  useEffect(() => {
    if (!user || !groupId) return;

    // Listen to Group Changes
    const unsubGroup = onSnapshot(doc(db, 'Groups', groupId), (snp) => {
      if (snp.exists()) setGroup({ id: snp.id, ...snp.data() });
      else navigate('/dashboard/study');
    });

    // Listen to Messages
    const qMsg = query(collection(db, `Groups/${groupId}/messages`), orderBy('createdAt', 'asc'), limit(50));
    const unsubMsg = onSnapshot(qMsg, (snp) => {
      setMessages(snp.docs.map(d => ({ id: d.id, ...d.data() })));
    });

    return () => { unsubGroup(); unsubMsg(); };
  }, [groupId, user]);

  // 2. Fetch Members Live Pulse
  useEffect(() => {
    if (!group?.members) return;
    const qMembers = query(collection(db, 'users'), where('__name__', 'in', group.members.slice(0, 10))); // Firebase 'in' limit 10
    const unsubPulse = onSnapshot(qMembers, (snp) => {
      setMembers(snp.docs.map(d => ({ id: d.id, ...d.data() })));
      setLoading(false);
    });
    return () => unsubPulse();
  }, [group?.members]);

  // Scroll Chat
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, tab]);

  // Handlers
  const sendMessage = async (e) => {
    e.preventDefault();
    if (!newMsg.trim()) return;
    const text = newMsg.trim();
    setNewMsg('');
    await addDoc(collection(db, `Groups/${groupId}/messages`), {
       userId: user.uid,
       userName: user.name || 'Scholar',
       text,
       createdAt: serverTimestamp()
    });
  };

  const removeMember = async (targetId) => {
    if (targetId === group.createdBy) return alert("Owner cannot be removed!");
    if (window.confirm("Remove member from hub?")) {
      await updateDoc(doc(db, 'Groups', groupId), {
        members: arrayRemove(targetId),
        memberCount: Math.max(1, group.memberCount - 1)
      });
    }
  };

  const promoteAdmin = async (targetId) => {
    // Basic logic for promotion (can be expanded to an admins array)
    alert("Promoted to HUB LEGEND!");
  };

  if (loading) return <div className="flex justify-center p-20 animate-pulse text-blue-500 font-black">SYNCING PULSE...</div>;

  const isOwner = group?.createdBy === user?.uid;

  return (
    <div className="max-w-6xl mx-auto flex flex-col h-[calc(100vh-100px)] space-y-4">
      
      {/* ── HEADER: HUB STATS ────────────────────────────────── */}
      <div className="bg-[#02040a] border border-slate-800/80 rounded-[2.5rem] p-8 shadow-2xl relative overflow-hidden shrink-0">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <button onClick={() => navigate('/dashboard/study')} className="p-4 bg-slate-900/50 hover:bg-slate-800 rounded-2xl border border-slate-800 transition-all active:scale-95 shadow-lg group">
               <ArrowLeft size={18} className="text-slate-400 group-hover:text-white" />
            </button>
            <div>
              <div className="flex items-center gap-3 mb-1">
                 <h1 className="text-3xl font-[1000] text-white tracking-tighter uppercase leading-none">{group?.groupName}</h1>
                 <span className="text-[9px] font-black bg-blue-600/10 text-blue-500 px-3 py-1 rounded-full border border-blue-500/20 italic">HUB ACTIVE</span>
              </div>
              <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.4em] flex items-center gap-2">
                 <Hash size={12} className="text-amber-500"/> HUB CODE: <span className="text-white">{group?.groupCode}</span>
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
             <div className="bg-slate-900/40 p-5 rounded-3xl border border-slate-800/50 text-center min-w-[120px]">
                <p className="text-[8px] text-slate-500 font-bold uppercase tracking-widest mb-1">Members</p>
                <div className="flex items-center justify-center gap-2">
                   <Users size={14} className="text-blue-500" />
                   <span className="text-xl font-[1000] text-white">{group?.memberCount}</span>
                </div>
             </div>
             <div className="bg-slate-900/40 p-5 rounded-3xl border border-slate-800/50 text-center min-w-[120px]">
                <p className="text-[8px] text-slate-500 font-bold uppercase tracking-widest mb-1">Live Now</p>
                <div className="flex items-center justify-center gap-2">
                   <SignalHigh size={14} className="text-emerald-500 animate-pulse" />
                   <span className="text-xl font-[1000] text-white">{members.filter(m => m.isStudying).length}</span>
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* ── TABS NAVIGATION ─────────────────────────────────── */}
      <div className="flex gap-2 bg-[#02040a]/40 p-2 rounded-[2rem] border border-slate-800/40 shrink-0">
        {[
          { id: 'live', label: 'LIVE PULSE', icon: <Power size={14}/> },
          { id: 'leaderboard', label: 'RANKING', icon: <Trophy size={14}/> },
          { id: 'chat', label: 'HUB CHAT', icon: <MessageSquare size={14}/> },
          { id: 'manage', label: 'MEMBERS', icon: <Shield size={14}/> },
        ].map(t => (
          <button key={t.id} onClick={() => setTab(t.id)} className={`flex-1 min-w-fit flex items-center justify-center gap-3 px-6 py-4 rounded-[1.5rem] text-[10px] font-[1000] uppercase tracking-widest transition-all ${tab===t.id ? 'bg-blue-600/20 text-blue-400 border border-blue-500/20 shadow-2xl' : 'text-slate-600 hover:text-white hover:bg-slate-800'}`}>
            {t.icon} {t.label}
          </button>
        ))}
      </div>

      {/* ── TAB CONTENT: LIVE PULSE ──────────────────────────── */}
      {tab === 'live' && (
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-y-auto pr-2 custom-scroll pb-10">
          {members.map(m => (
             <div key={m.id} className={`bg-[#0d121f] p-6 rounded-[2.5rem] border transition-all h-fit ${m.lastStudyDate === new Date().toISOString().split('T')[0] ? 'border-blue-500/20 shadow-lg shadow-blue-500/5' : 'border-slate-800/50'}`}>
                <div className="flex items-center justify-between mb-6">
                   <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 rounded-[1.2rem] bg-gradient-to-tr from-blue-600 to-indigo-800 border-4 border-slate-800 flex items-center justify-center text-xl font-[1000] text-white shadow-xl ${m.isStudying ? 'ring-4 ring-emerald-500/20' : ''}`}>
                         {m.name?.[0].toUpperCase()}
                      </div>
                      <div>
                         <h4 className="font-black text-white uppercase text-sm tracking-tighter leading-none">{m.name}</h4>
                         <div className="flex items-center gap-2 mt-2">
                            <span className={`w-1.5 h-1.5 rounded-full ${m.isStudying ? 'bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]' : 'bg-slate-700'}`}></span>
                            <span className={`text-[8px] font-black uppercase tracking-[0.2em] ${m.isStudying ? 'text-emerald-500' : 'text-slate-500'}`}>{m.isStudying ? 'FOCUSING' : 'OFFLINE'}</span>
                         </div>
                      </div>
                   </div>
                   <div className="bg-slate-900/80 px-4 py-2 rounded-2xl border border-slate-800/50">
                      <p className="text-[7px] text-slate-500 font-black uppercase tracking-widest leading-none mb-1">Total Today</p>
                      <p className="text-xs font-black text-white font-mono leading-none tracking-tighter italic">04:12:15</p>
                   </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3 mb-2">
                   <div className="bg-slate-900/40 p-3 rounded-2xl flex items-center gap-3">
                      <Flame size={14} className="text-orange-500" />
                      <span className="text-[10px] font-black">{m.streak || 0} DAY</span>
                   </div>
                   <div className="bg-slate-900/40 p-3 rounded-2xl flex items-center gap-3">
                      <Zap size={14} className="text-blue-500" />
                      <span className="text-[10px] font-black text-blue-400">7.2 hrs</span>
                   </div>
                </div>
             </div>
          ))}
        </div>
      )}

      {/* ── TAB CONTENT: CHAT ───────────────────────────────── */}
      {tab === 'chat' && (
        <div className="flex-1 bg-[#02040a] border border-slate-800/80 rounded-[3rem] p-6 flex flex-col shadow-2xl overflow-hidden relative">
           <div className="absolute top-0 left-0 w-64 h-64 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>
           
           <div className="flex-1 overflow-y-auto pr-4 custom-scroll space-y-4 mb-4">
              {messages.map(msg => (
                 <div key={msg.id} className={`flex ${msg.userId === user.uid ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[70%] ${msg.userId === user.uid ? 'bg-blue-600' : 'bg-slate-800'} rounded-3xl px-6 py-4 shadow-xl border border-white/5`}>
                       {msg.userId !== user.uid && <p className="text-[7px] font-black text-blue-400 uppercase tracking-widest mb-1">{msg.userName}</p>}
                       <p className="text-sm font-medium text-white leading-relaxed">{msg.text}</p>
                       <p className={`text-[7px] font-black uppercase mt-1 text-right ${msg.userId === user.uid ? 'text-blue-200/50' : 'text-slate-500'}`}>12:45 PM</p>
                    </div>
                 </div>
              ))}
              <div ref={scrollRef} />
           </div>

           <form onSubmit={sendMessage} className="flex gap-4 p-4 bg-slate-900 border border-slate-800 rounded-3xl shadow-lg relative z-10">
              <input value={newMsg} onChange={e => setNewMsg(e.target.value)} placeholder="Send a message to the hub..." className="flex-1 bg-transparent border-none outline-none text-white text-sm font-bold placeholder:text-slate-600 px-2"/>
              <button type="submit" className="w-12 h-12 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl flex items-center justify-center transition-all active:scale-95 shadow-xl shadow-blue-900/20">
                 <Send size={18} />
              </button>
           </form>
        </div>
      )}

      {/* ── TAB CONTENT: MANAGEMENT ─────────────────────────── */}
      {tab === 'manage' && (
        <div className="flex-1 bg-[#02040a] border border-slate-800/80 rounded-[3rem] p-10 overflow-y-auto custom-scroll shadow-2xl">
           <div className="flex justify-between items-center mb-10">
              <div>
                 <h2 className="text-2xl font-[1000] text-white tracking-tighter uppercase mb-1">Hub Management</h2>
                 <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.3em]">Owner & Admin Operations</p>
              </div>
              {isOwner && (
                <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center gap-3 shadow-xl shadow-blue-900/20 active:scale-95 transition-all">
                  <UserPlus size={16} /> Invite Member
                </button>
              )}
           </div>

           <div className="space-y-3">
              {members.map(m => (
                 <div key={m.id} className="bg-slate-900/60 p-5 rounded-3xl border border-slate-800/50 flex items-center justify-between hover:border-slate-700 transition-all">
                    <div className="flex items-center gap-4">
                       <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center font-black text-slate-400 capitalize">
                          {m.name?.[0]}
                       </div>
                       <div>
                          <p className="font-black text-white text-xs uppercase tracking-widest leading-none mb-1">{m.name} {m.id === group.createdBy && <span className="text-amber-500 italic lowercase ml-2 font-bold opacity-50 text-[10px]">(Owner)</span>}</p>
                          <p className="text-[8px] text-slate-500 font-black uppercase tracking-[0.2em]">{m.email}</p>
                       </div>
                    </div>
                    
                    {isOwner && m.id !== user.uid && (
                       <div className="flex gap-2">
                          <button onClick={() => promoteAdmin(m.id)} className="p-3 bg-amber-500/10 hover:bg-amber-500 text-amber-500 hover:text-white rounded-xl border border-amber-500/20 transition-all" title="Promote to Admin"><Trophy size={14}/></button>
                          <button onClick={() => removeMember(m.id)} className="p-3 bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white rounded-xl border border-red-500/20 transition-all" title="Remove Member"><UserMinus size={14}/></button>
                       </div>
                    )}
                 </div>
              ))}
           </div>
        </div>
      )}
    </div>
  );
}
