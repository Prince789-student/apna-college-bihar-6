import React, { useState, useEffect } from 'react';
import { Timer, Play, Pause, Square, Trophy, Users, Flame, Calendar, BarChart2, Hash, CheckSquare, Zap } from 'lucide-react';

export default function StudyTracking() {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0); 
  const [activeSubject, setActiveSubject] = useState('BEE (Electrical)');
  const [subjects] = useState(['BEE (Electrical)', 'Python Programming', 'Mathematics-III', 'General Aptitude']);
  const [todayTotal, setTodayTotal] = useState(14520); // 4h 02m
  const [ranking, setRanking] = useState([
    { name: 'Prince (You)', time: '04:02:15', rank: 1, status: 'Studying' },
    { name: 'Amit Kumar', time: '03:45:00', rank: 2, status: 'Resting' },
    { name: 'Sneha Singh', time: '03:12:30', rank: 3, status: 'Studying' },
  ]);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime(t => t + 1);
        setTodayTotal(t => t + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (s) => {
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = s % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
  };

  return (
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 p-4 text-slate-900 min-h-screen bg-slate-950">
      
      {/* Left Sidebar: Profile & Stats */}
      <div className="lg:w-1/4 space-y-6">
        <div className="bg-slate-100 border border-slate-200 rounded-3xl p-6 shadow-2xl">
           <div className="flex items-center space-x-4 mb-8 text-center flex-col">
              <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-orange-400 to-red-500 border-4 border-slate-200 flex items-center justify-center text-3xl font-black shadow-xl mb-4">P</div>
              <h2 className="text-xl font-black tracking-tight">Prince's Study Path</h2>
              <div className="flex items-center space-x-2 text-orange-400 mt-2 font-bold uppercase text-[10px] tracking-widest bg-orange-400/10 px-3 py-1 rounded-full">
                 <Flame size={12} fill="currentColor" />
                 <span>7 DAY STREAK</span>
              </div>
           </div>

           <div className="space-y-4">
              <div className="bg-slate-800/50 p-4 rounded-2xl border border-slate-300/50 flex justify-between items-center">
                 <span className="text-slate-500 text-xs font-bold uppercase tracking-wider">Today Total</span>
                 <span className="text-xl font-mono font-black text-blue-400">{formatTime(todayTotal)}</span>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-2xl border border-slate-300/50 flex justify-between items-center">
                 <span className="text-slate-500 text-xs font-bold uppercase tracking-wider">World Rank</span>
                 <span className="text-xl font-mono font-black text-amber-500">#42</span>
              </div>
           </div>
        </div>

        {/* 10-Minute Planner / To-Do */}
        <div className="bg-slate-100 border border-slate-200 rounded-3xl p-6 shadow-2xl">
           <div className="flex items-center space-x-2 mb-4">
              <CheckSquare className="text-blue-500" size={18} />
              <h3 className="font-black text-sm uppercase tracking-widest">Focus Planner</h3>
           </div>
           <div className="space-y-3">
              {['Unit 2 Revision', 'Solve 10 PYQs', 'Python Lab Prep'].map((t, i) => (
                <div key={i} className="flex items-center space-x-3 bg-slate-800 p-3 rounded-xl cursor-not-allowed opacity-60">
                   <div className="w-4 h-4 border border-slate-600 rounded"></div>
                   <span className="text-xs font-medium">{t}</span>
                </div>
              ))}
           </div>
        </div>
      </div>

      {/* Main Center: YPT Timer Dashboard */}
      <div className="lg:w-2/4 space-y-6">
        <div className="bg-slate-100 border-4 border-slate-200 rounded-[3rem] p-10 shadow-[0_50px_100px_rgba(0,0,0,0.5)] text-center relative overflow-hidden flex flex-col items-center justify-center min-h-[500px]">
           {/* Visual Glow */}
           <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px]"></div>
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[100px]"></div>

           <div className="z-10 w-full">
              <div className="mb-4">
                 <span className="bg-blue-600/20 text-blue-400 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-blue-500/20">{activeSubject}</span>
              </div>
              
              <div className="text-[100px] leading-tight font-black tracking-tighter text-slate-900 mb-10 font-mono drop-shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                {formatTime(time).split(':').map((part, i) => (
                  <span key={i}>{part}{i < 2 ? <span className="text-slate-700 mx-1">:</span> : null}</span>
                ))}
              </div>

              <div className="flex justify-center space-x-8 items-center">
                 <button 
                   onClick={() => setIsRunning(!isRunning)}
                   className={`w-24 h-24 rounded-full flex items-center justify-center border-4 shadow-2xl transition-all active:scale-90 ${isRunning ? 'bg-orange-500 border-orange-400 shadow-orange-500/50' : 'bg-blue-600 border-blue-500 shadow-blue-500/50'}`}
                 >
                   {isRunning ? <Pause fill="white" size={40} /> : <Play fill="white" size={40} className="ml-2" />}
                 </button>
                 <button 
                   onClick={() => { setIsRunning(false); setTime(0); }}
                   className="w-16 h-16 rounded-full bg-slate-800 border-4 border-slate-300 flex items-center justify-center text-slate-500 hover:text-slate-900 transition-all shadow-xl active:scale-95"
                 >
                   <Square fill="currentColor" size={20} />
                 </button>
              </div>

              <div className="mt-12 grid grid-cols-2 gap-4">
                 <div className="bg-slate-800/40 p-4 rounded-2xl flex items-center space-x-3 border border-slate-300">
                    <Zap className="text-blue-500" size={20} />
                    <div className="text-left">
                       <p className="text-[10px] text-slate-500 font-black tracking-widest uppercase italic">Focus Level</p>
                       <p className="text-sm font-black">94% Supernova</p>
                    </div>
                 </div>
                 <div className="bg-slate-800/40 p-4 rounded-2xl flex items-center space-x-3 border border-slate-300">
                    <Flame className="text-orange-500" size={20} />
                    <div className="text-left">
                       <p className="text-[10px] text-slate-500 font-black tracking-widest uppercase italic">Xp Accrued</p>
                       <p className="text-sm font-black">2,480 Points</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* Heatmap Section */}
        <div className="bg-slate-100 border border-slate-200 rounded-3xl p-6 shadow-2xl">
           <div className="flex justify-between items-center mb-6">
              <div className="flex items-center space-x-2">
                 <Calendar className="text-emerald-500" size={18} />
                 <h3 className="font-black text-sm uppercase tracking-widest">Study Marathon Heatmap</h3>
              </div>
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest italic">Last 3 Months</span>
           </div>
           <div className="flex flex-wrap gap-1.5 opacity-80">
              {Array(84).fill(0).map((_, i) => (
                <div key={i} className={`w-3.5 h-3.5 rounded-sm transition-all hover:scale-125 ${i % 7 === 0 ? 'bg-emerald-400' : (i % 3 === 0 ? 'bg-emerald-600' : (i%5===0 ? 'bg-emerald-900' : 'bg-slate-800'))}`}></div>
              ))}
           </div>
        </div>
      </div>

      {/* Right Sidebar: Groups & Rank */}
      <div className="lg:w-1/4 space-y-6">
        <div className="bg-slate-100 border border-slate-200 rounded-3xl p-6 shadow-2xl">
           <div className="flex items-center space-x-2 mb-6">
              <Hash className="text-amber-500" size={18} />
              <h3 className="font-black text-sm uppercase tracking-widest">Global Ranking</h3>
           </div>
           <div className="space-y-4">
              {ranking.map((player, idx) => (
                <div key={idx} className={`flex items-center justify-between p-3 rounded-2xl transition ${player.rank === 1 ? 'bg-blue-600/10 border border-blue-500/20' : 'bg-slate-800/50'}`}>
                   <div className="flex items-center space-x-3">
                      <span className={`w-6 h-6 flex items-center justify-center rounded-full text-[10px] font-black ${player.rank===1 ? 'bg-blue-600 text-slate-900' : 'bg-slate-700 text-slate-500'}`}>{player.rank}</span>
                      <div className="text-left">
                        <p className="text-xs font-bold whitespace-nowrap">{player.name}</p>
                        <p className={`text-[8px] font-black uppercase tracking-widest ${player.status === 'Studying' ? 'text-green-500' : 'text-slate-500'}`}>{player.status}</p>
                      </div>
                   </div>
                   <span className="text-xs font-mono font-black text-slate-700">{player.time}</span>
                </div>
              ))}
           </div>
           <button className="w-full mt-6 py-3 bg-slate-800 rounded-xl text-[10px] font-black tracking-widest uppercase hover:bg-slate-200 transition">View Full Leaderboard</button>
        </div>

        {/* Real-time Subject Switcher */}
        <div className="bg-slate-100 border border-slate-200 rounded-3xl p-6 shadow-2xl">
           <div className="flex items-center space-x-2 mb-4">
              <BarChart2 className="text-indigo-500" size={18} />
              <h3 className="font-black text-sm uppercase tracking-widest">Studying Subjects</h3>
           </div>
           <div className="space-y-2">
              {subjects.map((sub, i) => (
                <button 
                  key={i} 
                  onClick={() => setActiveSubject(sub)}
                  className={`w-full text-left p-3 rounded-xl text-xs font-bold transition-all border ${activeSubject === sub ? 'bg-indigo-600 border-indigo-400 text-slate-900 shadow-lg' : 'bg-slate-800 border-slate-300 text-slate-500 hover:border-indigo-500'}`}
                >
                  {sub}
                </button>
              ))}
           </div>
        </div>
      </div>

    </div>
  );
}

