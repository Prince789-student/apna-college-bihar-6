import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../context/AuthContext';
import { Trophy, Users, Calendar, Hash, ArrowLeft, Clock } from 'lucide-react';

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
        setError('Study Collective not found in decentralized database');
        return;
      }

      const grpData = groupSnap.data();
      setGroup(grpData);

      if (!grpData.members.includes(user.uid)) {
        navigate('/dashboard/study');
        return;
      }

      const memberPromises = grpData.members.map(memberId => getDoc(doc(db, 'users', memberId)));
      const memberDocs = await Promise.all(memberPromises);
      const membersData = memberDocs.map(userDoc => {
        if (userDoc.exists()) {
          return { id: userDoc.id, ...userDoc.data() };
        }
        return { id: userDoc.id, name: 'Unknown Scholar', todayStudyTime: 0 };
      });

      membersData.sort((a, b) => (b.todayStudyTime || 0) - (a.todayStudyTime || 0));
      setMembers(membersData);
    } catch (err) {
      console.error(err);
      setError('Error loading network data');
    } finally {
      setLoading(false);
    }
  };

  const formatMins = (totalSeconds) => Math.floor((totalSeconds || 0) / 60);

  if (loading) return <div className="flex items-center justify-center p-20"><div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div></div>;
  if (error) return <div className="text-red-500 font-black p-20 text-center uppercase tracking-widest">{error}</div>;
  if (!group) return null;

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
                              {member.id === user.uid && <span className="bg-slate-800 text-slate-500 text-[8px] font-black uppercase px-2 py-0.5 rounded-full tracking-widest">YOU</span>}
                           </div>
                           <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Verified Scholar</p>
                        </div>
                     </div>
                     <div className="text-right">
                        <div className="text-2xl font-black text-emerald-500 drop-shadow-lg">{formatMins(member.todayStudyTime)} <span className="text-[10px] font-bold uppercase tracking-tighter text-slate-600">Min</span></div>
                        <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest italic opacity-60">Synchronized</p>
                     </div>
                  </div>
                ))
              )}
           </div>
        </div>

        {/* Right Column: Information & Actions */}
        <div className="space-y-10">
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
