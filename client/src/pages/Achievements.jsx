import React, { useState, useEffect } from 'react';
import { doc, getDoc, collection, query, where, getDocs, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../context/AuthContext';
import { Trophy, Flame, Clock, Star, Zap, Award, Shield } from 'lucide-react';

const ALL_BADGES = [
  { id: 'streak_3',   icon: '🔥', name: '3-Day Streak',   desc: 'Lagatar 3 din padha!',       color: 'from-orange-500 to-red-600' },
  { id: 'streak_7',   icon: '🌟', name: '7-Day Streak',   desc: 'Ek hafte ki mehnat!',         color: 'from-yellow-500 to-amber-600' },
  { id: 'streak_30',  icon: '👑', name: '30-Day Streak',  desc: 'Ek mahina lagatar! Legend!',  color: 'from-purple-500 to-indigo-700' },
  { id: 'first_hour', icon: '⏱', name: 'First Hour',     desc: 'Pehla 1 ghanta complete!',    color: 'from-blue-500 to-cyan-600' },
  { id: 'ten_hours',  icon: '⚡', name: '10 Hours Club',  desc: 'Total 10 ghante padhe!',      color: 'from-emerald-500 to-teal-600' },
  { id: 'sessions_5', icon: '📚', name: '5 Sessions',     desc: '5 study sessions complete!',  color: 'from-pink-500 to-rose-600' },
  { id: 'sessions_20',icon: '🎯', name: '20 Sessions',    desc: '20 sessions master!',         color: 'from-violet-500 to-purple-700' },
  { id: 'goals_hit',  icon: '🏆', name: 'Goal Crusher',  desc: 'Daily goal hit ki!',          color: 'from-amber-400 to-yellow-600' },
];

export default function Achievements() {
  const { user } = useAuth();
  const [userData, setUserData] = useState(null);
  const [sessionCount, setSessionCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => { if (user) fetchData(); }, [user]);

  const fetchData = async () => {
    try {
      const snap = await getDoc(doc(db, 'users', user.uid));
      if (snap.exists()) setUserData(snap.data());

      const q = query(collection(db, 'StudySessions'), where('userId', '==', user.uid));
      const sessSnap = await getDocs(q);
      setSessionCount(sessSnap.size);
    } catch(e) { console.error(e); }
    finally { setLoading(false); }
  };

  const earnedBadges = userData?.badges || [];
  
  // Compute extra badges from session count
  const computedBadges = [...earnedBadges];
  if (sessionCount >= 5 && !computedBadges.includes('sessions_5')) computedBadges.push('sessions_5');
  if (sessionCount >= 20 && !computedBadges.includes('sessions_20')) computedBadges.push('sessions_20');

  const earned = ALL_BADGES.filter(b => computedBadges.includes(b.id));
  const locked = ALL_BADGES.filter(b => !computedBadges.includes(b.id));

  const formatHrs = (s) => ((s || 0) / 3600).toFixed(1);
  
  if (loading) return <div className="flex justify-center p-20"><div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div></div>;

  return (
    <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in duration-300">
      
      <div className="flex items-center gap-3">
        <Trophy size={24} className="text-amber-500" />
        <div>
          <h1 className="text-2xl font-black text-white uppercase tracking-tight">Achievements</h1>
          <p className="text-[11px] text-slate-500">Aapki mehnat ke medals</p>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { icon: <Flame size={20} className="text-orange-500" />, label: 'Current Streak', value: `${userData?.streak || 0} days` },
          { icon: <Clock size={20} className="text-blue-500" />, label: 'Total Study Time', value: `${formatHrs(userData?.totalStudyTime)} hr` },
          { icon: <Zap size={20} className="text-yellow-500" />, label: 'Total Sessions', value: sessionCount },
          { icon: <Award size={20} className="text-purple-500" />, label: 'Badges Earned', value: `${earned.length}/${ALL_BADGES.length}` },
        ].map(({ icon, label, value }) => (
          <div key={label} className="bg-[#0d121f] p-5 rounded-2xl border border-slate-800/50 text-center space-y-2">
            <div className="flex justify-center">{icon}</div>
            <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest">{label}</p>
            <p className="text-xl font-black text-white">{value}</p>
          </div>
        ))}
      </div>

      {/* Earned Badges */}
      {earned.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-sm font-black text-emerald-400 uppercase tracking-widest flex items-center gap-2">✅ Earned ({earned.length})</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {earned.map(badge => (
              <div key={badge.id} className={`bg-gradient-to-br ${badge.color} p-5 rounded-2xl text-center space-y-2 shadow-lg`}>
                <div className="text-4xl">{badge.icon}</div>
                <p className="text-xs font-black text-white uppercase tracking-tight">{badge.name}</p>
                <p className="text-[9px] text-white/70">{badge.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Locked Badges */}
      {locked.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-sm font-black text-slate-500 uppercase tracking-widest flex items-center gap-2"><Shield size={14} /> Locked ({locked.length})</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {locked.map(badge => (
              <div key={badge.id} className="bg-[#0d121f] border border-slate-800/50 p-5 rounded-2xl text-center space-y-2 opacity-40">
                <div className="text-4xl grayscale">{badge.icon}</div>
                <p className="text-xs font-black text-slate-400 uppercase tracking-tight">{badge.name}</p>
                <p className="text-[9px] text-slate-600">{badge.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {earned.length === 0 && (
        <div className="text-center py-12 bg-[#0d121f] rounded-3xl border border-dashed border-slate-700">
          <Trophy size={40} className="mx-auto text-slate-700 mb-4" />
          <p className="text-slate-500 font-bold">Koi badge nahi abhi — Padhai shuru karo!</p>
          <p className="text-slate-600 text-xs mt-2">Study session complete karo aur badges unlock karo</p>
        </div>
      )}
    </div>
  );
}
