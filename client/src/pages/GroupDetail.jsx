import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../context/AuthContext';
import { 
  Trophy, Users, Calendar, Hash, ArrowLeft, Clock,
  ShieldCheck, Zap, TrendingUp, Globe, Activity,
  Crown, Star, User, ChevronRight, Share2
} from 'lucide-react';
import { toast } from 'react-hot-toast';

export default function GroupDetail() {
  const { groupId } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [group, setGroup] = useState(null);
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (groupId) fetchGroup();
  }, [groupId]);

  const fetchGroup = async () => {
    try {
      const groupRef = doc(db, 'groups', groupId);
      const groupSnap = await getDoc(groupRef);

      if (!groupSnap.exists()) {
        setError('Sector protocol not found in decentralized database');
        return;
      }

      const grpData = groupSnap.data();
      setGroup(grpData);

      if (!grpData.members.includes(user.uid)) {
        toast.error('Access Restricted: Unauthorized node');
        navigate('/dashboard/groups');
        return;
      }

      const memberPromises = grpData.members.map(memberId => getDoc(doc(db, 'users', memberId)));
      const memberDocs = await Promise.all(memberPromises);
      const membersData = memberDocs.map(userDoc => {
        if (userDoc.exists()) {
          return { id: userDoc.id, ...userDoc.data() };
        }
        return { id: userDoc.id, displayName: 'Unknown Scholar', todayStudyTime: 0 };
      });

      membersData.sort((a, b) => (b.todayStudyTime || 0) - (a.todayStudyTime || 0));
      setMembers(membersData);
    } catch (err) {
      console.error(err);
      setError('Vector Data Synchronization Failure');
    } finally {
      setLoading(false);
    }
  };

  const formatMins = (totalSeconds) => Math.floor((totalSeconds || 0) / 60);

  if (loading) return (
     <div className="min-h-screen flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
     </div>
  );

  if (error) return (
     <div className="min-h-screen flex items-center justify-center p-10 bg-[#02040a]">
        <div className="max-w-md w-full p-10 bg-[#0d121f] border border-red-500/20 rounded-[3rem] text-center space-y-6">
           <div className="w-20 h-20 bg-red-600/10 text-red-500 rounded-3xl flex items-center justify-center mx-auto border border-red-500/20"><Activity size={40} /></div>
           <div>
              <h2 className="text-3xl font-[1000] text-white uppercase tracking-tighter">System Error</h2>
              <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.3em] mt-3">{error}</p>
           </div>
           <button onClick={() => navigate('/dashboard/groups')} className="w-full py-4 text-[10px] font-black uppercase tracking-widest text-slate-600 hover:text-white transition-colors">Return to Networks</button>
        </div>
     </div>
  );

  if (!group) return null;

  return (
    <div className="max-w-7xl mx-auto space-y-12 animate-in fade-in duration-1000 pb-20 px-4 md:px-0">
      
      {/* ─── COMMAND HEADER ────────────────────────────────────── */}
      <div className="bg-[#0d121f] rounded-[4rem] border border-slate-800/80 p-12 md:p-16 relative overflow-hidden shadow-2xl">
         <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
         
         <div className="relative z-10 space-y-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-10">
               <div className="space-y-6">
                  <button onClick={() => navigate('/dashboard/groups')} className="flex items-center gap-3 text-slate-500 hover:text-white transition-colors group">
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="text-[9px] font-black uppercase tracking-[0.4em]">Back to networks</span>
                  </button>
                  <div className="space-y-2">
                    <h1 className="text-4xl md:text-6xl font-[1000] text-white tracking-tighter uppercase leading-none">{group.name}</h1>
                    <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.4em] mt-4">Sector Hub Coordination / Code: {group.code}</p>
                  </div>
               </div>
               
               <div className="flex gap-4">
                  <div className="p-8 bg-black/40 rounded-[2.5rem] border border-slate-800 text-center min-w-[150px] space-y-2">
                     <p className="text-[9px] text-slate-600 font-black uppercase tracking-widest leading-none">Identities Sync</p>
                     <p className="text-4xl font-[1000] text-white tracking-tighter leading-none">{group.memberCount} <span className="text-[10px] text-slate-700">/ {group.maxMembers || 150}</span></p>
                  </div>
                  <div className="p-8 bg-blue-600/10 rounded-[2.5rem] border border-blue-500/20 text-center min-w-[150px] flex flex-col items-center justify-center gap-3">
                     <div onClick={() => { navigator.clipboard.writeText(group.code); toast.success('Vector Code Copied'); }} className="p-3 bg-blue-600 text-white rounded-xl cursor-pointer hover:bg-blue-500 transition-all shadow-lg active:scale-95"><Share2 size={18}/></div>
                     <p className="text-[9px] text-blue-400 font-black uppercase tracking-widest leading-none">Share Code</p>
                  </div>
               </div>
            </div>
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
         
         {/* ─── RANKING VECTOR ───────────────────────────────────── */}
         <div className="lg:col-span-8 space-y-8">
            <div className="flex items-center justify-between px-6">
               <h3 className="text-sm font-black text-slate-500 uppercase tracking-widest flex items-center gap-3"><Trophy size={16} className="text-amber-500"/> Performance Hierarchy</h3>
               <div className="flex items-center gap-2 px-6 py-2 bg-emerald-600/10 text-emerald-400 rounded-full border border-emerald-500/20 text-[9px] font-black uppercase tracking-widest"><TrendingUp size={12}/> Live Leaderboard</div>
            </div>

            <div className="space-y-4">
               {members.map((m, i) => (
                  <div key={m.id} className={`group p-8 rounded-[2.5rem] border transition-all relative overflow-hidden flex items-center justify-between ${i === 0 ? 'bg-gradient-to-r from-blue-600/20 to-indigo-600/10 border-blue-500/40 shadow-2xl shadow-blue-900/40' : 'bg-[#0d121f] border-slate-800/80 hover:border-slate-700 shadow-xl'}`}>
                     {i === 0 && <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl"></div>}
                     
                     <div className="flex items-center gap-8 relative z-10">
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-[1000] text-xl tracking-tighter shadow-xl ${i===0?'bg-amber-500 text-white animate-pulse': i===1?'bg-slate-300 text-slate-800': i===2?'bg-orange-800 text-white':'bg-slate-900 text-slate-600'}`}>
                           {i+1}
                        </div>
                        <div className="flex items-center gap-6">
                           <div className="w-14 h-14 bg-slate-800 border-2 border-slate-700 rounded-2xl p-0.5 overflow-hidden group-hover:border-blue-500 transition-all shadow-inner">
                              {m.photoURL ? <img src={m.photoURL} className="w-full h-full object-cover rounded-xl" alt="" /> : <User size={24} className="mx-auto mt-2.5 text-slate-700" />}
                           </div>
                           <div>
                              <div className="flex items-center gap-3">
                                 <p className="text-xl font-black text-white uppercase tracking-tighter leading-none group-hover:text-blue-400 transition-colors uppercase">{m.displayName || 'Identity Node'}</p>
                                 {m.id === user.uid && <span className="bg-indigo-600 px-3 py-1 rounded-full text-[8px] font-black text-white uppercase tracking-widest shadow-lg">Current Agent</span>}
                                 {i === 0 && <Crown size={16} className="text-amber-500 animate-bounce" />}
                              </div>
                              <p className="text-[9px] font-black text-slate-600 uppercase tracking-widest mt-2">{m.role || 'Scholar'} · Level {Math.floor((m.totalStudyTime || 0) / 3600)}</p>
                           </div>
                        </div>
                     </div>

                     <div className="text-right relative z-10">
                        <div className="flex items-center justify-end gap-2">
                           <p className="text-3xl font-[1000] text-emerald-500 leading-none tracking-tighter">{formatMins(m.todayStudyTime)}</p>
                           <p className="text-[10px] font-black text-slate-600 uppercase mt-2 tracking-tighter">MIN</p>
                        </div>
                        <p className="text-[8px] font-black text-slate-700 uppercase tracking-widest mt-1">Today's Input Vector</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>

         {/* ─── SECTOR SPECS ─────────────────────────────────────── */}
         <div className="lg:col-span-4 space-y-10">
            <div className="bg-[#0d121f] rounded-[4.5rem] border border-slate-800/80 p-10 md:p-14 space-y-10 shadow-2xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/5 rounded-full blur-[60px] pointer-events-none"></div>
               <h3 className="text-xl font-black text-white uppercase tracking-tighter relative z-10 flex items-center justify-between">Sector Specs <ShieldCheck size={18}/></h3>
               <div className="space-y-6 relative z-10">
                  {[
                     { l: 'Established', v: new Date(group.createdAt).toLocaleDateString(), i: <Calendar size={18}/> },
                     { l: 'Vector Code', v: group.code, i: <Hash size={18}/> },
                     { l: 'Encryption', v: 'Secure (v7)', i: <Globe size={18}/> },
                     { l: 'Status', v: 'Active Hub', i: <Activity size={18}/> }
                  ].map(s => (
                     <div key={s.l} className="flex items-center justify-between p-6 bg-black/20 rounded-3xl border border-slate-800/50 group-hover:border-slate-700 transition-all">
                        <div className="flex items-center gap-4">
                           <div className="text-slate-600">{s.i}</div>
                           <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{s.l}</p>
                        </div>
                        <p className="text-[11px] font-black text-white uppercase tracking-tight">{s.v}</p>
                     </div>
                  ))}
               </div>
               
               <div className="pt-6 relative z-10">
                  <div className="p-8 bg-gradient-to-br from-indigo-600 to-blue-700 rounded-[3rem] shadow-xl shadow-indigo-900/40 space-y-6 group/cta overflow-hidden relative">
                     <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl group-hover/cta:scale-150 transition-transform duration-700"></div>
                     <h4 className="text-2xl font-black text-white uppercase tracking-tighter leading-tight relative z-10">Contribute To <br /> Rank Vector</h4>
                     <button onClick={() => navigate('/dashboard/study')} className="w-full py-5 bg-white text-indigo-700 rounded-2xl font-black uppercase text-[10px] tracking-widest shadow-xl hover:bg-slate-100 transition-all active:scale-95 flex items-center justify-center gap-3 relative z-10">
                        Infiltrate Studio <ArrowRight size={16}/>
                     </button>
                  </div>
               </div>
            </div>
         </div>

      </div>
    </div>
  );
}
