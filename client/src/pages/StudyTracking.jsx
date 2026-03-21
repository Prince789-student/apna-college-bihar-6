import React, { useState, useEffect } from 'react';
import { 
  Timer, Play, Pause, Square, Trophy, Users, 
  Flame, Calendar, BarChart2, Hash, CheckSquare, 
  Zap, Clock, Target, ChevronRight, Activity
} from 'lucide-react';

export default function StudyTracking() {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0); 
  const [activeSubject, setActiveSubject] = useState('BEE (Electrical)');
  const [subjects] = useState(['BEE (Electrical)', 'Python Programming', 'Mathematics-III', 'General Aptitude']);
  const [todayTotal, setTodayTotal] = useState(14520); // 4h 02m
  const [ranking] = useState([
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
    <div className="max-w-7xl mx-auto space-y-10 animate-in fade-in duration-1000 pb-20 px-4 md:px-0">
      
      {/* ─── HEADER ──────────────────────────────────────────────── */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-10">
         <div className="space-y-1.5 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-[1000] tracking-tighter uppercase text-white leading-none">
              Study <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 font-black">Protocol</span>
            </h1>
            <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.4em]">Integrated Focus Engine / Identity: Node.Prince</p>
         </div>
         <div className="flex items-center gap-4 bg-[#0d121f] rounded-[2rem] border border-slate-800 p-6 shadow-2xl">
            <div className="p-4 bg-orange-600/10 text-orange-500 rounded-2xl animate-pulse"><Flame size={24} /></div>
            <div>
               <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-none">Global Streak</p>
               <p className="text-2xl font-[1000] text-white tracking-tighter mt-1 uppercase leading-none">12 DAYS SECURED</p>
            </div>
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* ─── LEFT COLUMN: STATS ───────────────────────────────── */}
        <div className="lg:col-span-3 space-y-8">
           <div className="bg-[#0d121f] p-8 rounded-[3rem] border border-slate-800 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-full blur-2xl"></div>
              <div className="space-y-8 relative z-10 text-center">
                 <div className="w-20 h-20 rounded-[2rem] bg-gradient-to-tr from-blue-500 to-indigo-700 flex items-center justify-center font-[1000] text-3xl text-white shadow-2xl mx-auto">P</div>
                 <div className="space-y-2">
                    <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Active Status</p>
                    <h4 className="text-xl font-black text-white uppercase tracking-tighter">PRINCE'S HUB</h4>
                 </div>
                 <div className="grid grid-cols-1 gap-3 text-left">
                    <div className="p-4 bg-slate-900/50 rounded-2xl border border-slate-800/50 flex items-center justify-between">
                       <Clock size={16} className="text-blue-500" />
                       <span className="text-sm font-black text-white font-mono">{formatTime(todayTotal)}</span>
                    </div>
                    <div className="p-4 bg-slate-900/50 rounded-2xl border border-slate-800/50 flex items-center justify-between">
                       <Trophy size={16} className="text-amber-500" />
                       <span className="text-sm font-black text-white">#42 WORLD</span>
                    </div>
                 </div>
              </div>
           </div>

           <div className="bg-[#0d121f] p-8 rounded-[3rem] border border-slate-800 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                 <Activity size={18} className="text-sky-400" />
                 <h3 className="text-[10px] font-black uppercase text-white tracking-widest">Focus Level</h3>
              </div>
              <div className="space-y-4">
                 <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden">
                    <div className="h-full bg-sky-500 shadow-[0_0_10px_rgba(14,165,233,0.5)]" style={{width: '94%'}}></div>
                 </div>
                 <p className="text-[9px] font-bold text-slate-500 uppercase flex justify-between"><span>Supernova State</span> <span>94%</span></p>
              </div>
           </div>
        </div>

        {/* ─── CENTER COLUMN: TIMER ──────────────────────────────── */}
        <div className="lg:col-span-6 space-y-8">
           <div className="bg-[#0d121f] rounded-[4rem] border border-slate-800/80 p-10 md:p-14 relative overflow-hidden shadow-2xl text-center flex flex-col items-center justify-center min-h-[550px] group">
              <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-blue-600/10 transition-all"></div>
              
              <div className="relative z-10 space-y-12 w-full">
                 <div className="inline-flex items-center gap-2 px-6 py-2 bg-blue-600/10 border border-blue-500/20 rounded-full text-[10px] font-black text-blue-400 uppercase tracking-widest">
                    <Target size={12} /> {activeSubject}
                 </div>
                 
                 <h1 className="text-[80px] md:text-[120px] font-[1000] text-white tracking-tighter transition-all tabular-nums leading-none drop-shadow-2xl">
                    {formatTime(time)}
                 </h1>

                 <div className="flex justify-center items-center gap-10">
                    <button 
                      onClick={() => setIsRunning(!isRunning)}
                      className={`w-28 h-28 rounded-[2.5rem] flex items-center justify-center border-2 transition-all active:scale-95 shadow-2xl group/btn ${isRunning ? 'bg-orange-600 border-orange-500 shadow-orange-950/40' : 'bg-blue-600 border-blue-500 shadow-blue-950/40'}`}
                    >
                      {isRunning ? <Pause fill="white" size={36} /> : <Play fill="white" size={36} className="ml-1.5" />}
                    </button>
                    <button 
                      onClick={() => { setIsRunning(false); setTime(0); }}
                      className="w-16 h-16 rounded-[1.5rem] bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-500 hover:text-white transition-all active:scale-95"
                    >
                      <Square size={20} fill="currentColor" />
                    </button>
                 </div>

                 <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto">
                    <div className="p-4 bg-slate-900 border border-slate-800 rounded-3xl flex items-center gap-4">
                       <Zap size={20} className="text-yellow-400" />
                       <div className="text-left">
                          <p className="text-[8px] font-black text-slate-500 uppercase tracking-widest leading-none">XP ACCRUED</p>
                          <p className="text-sm font-black text-white mt-1">2,480 PTS</p>
                       </div>
                    </div>
                    <div className="p-4 bg-slate-900 border border-slate-800 rounded-3xl flex items-center gap-4">
                       <Clock size={20} className="text-indigo-400" />
                       <div className="text-left">
                          <p className="text-[8px] font-black text-slate-500 uppercase tracking-widest leading-none">SESSION START</p>
                          <p className="text-sm font-black text-white mt-1">20:22 PST</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>

           {/* HEATMAP SECTION */}
           <div className="bg-[#0d121f] p-10 rounded-[3.5rem] border border-slate-800 shadow-2xl space-y-8">
              <div className="flex justify-between items-center">
                 <div className="flex items-center gap-3">
                    <Calendar size={18} className="text-emerald-500" />
                    <h3 className="text-[10px] font-black uppercase text-white tracking-widest">Study Pulse Heatmap</h3>
                 </div>
                 <div className="text-[8px] font-black text-slate-600 uppercase tracking-widest">Global Synchronization: Active</div>
              </div>
              <div className="flex flex-wrap gap-2 justify-center">
                 {Array(84).fill(0).map((_, i) => (
                   <div key={i} className={`w-4 h-4 rounded-md transition-all hover:scale-125 hover:rotate-12 cursor-pointer border border-white/5 ${i % 7 === 0 ? 'bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.3)]' : (i % 3 === 0 ? 'bg-emerald-600' : (i%5===0 ? 'bg-emerald-900' : 'bg-slate-900'))}`}></div>
                 ))}
              </div>
           </div>
        </div>

        {/* ─── RIGHT COLUMN: LEADERBOARD ─────────────────────────── */}
        <div className="lg:col-span-3 space-y-8">
           <div className="bg-[#0d121f] p-8 rounded-[3rem] border border-slate-800 shadow-2xl">
              <div className="flex items-center gap-3 mb-8">
                 <Users size={18} className="text-amber-500" />
                 <h3 className="text-[10px] font-black uppercase text-white tracking-widest">Global Scholars</h3>
              </div>
              <div className="space-y-4">
                 {ranking.map((player, idx) => (
                   <div key={idx} className={`flex items-center justify-between p-4 rounded-2xl border transition-all ${player.rank === 1 ? 'bg-blue-600/10 border-blue-500/20' : 'bg-slate-900/50 border-slate-800/50'}`}>
                      <div className="flex items-center gap-3">
                         <span className={`w-6 h-6 flex items-center justify-center rounded-lg text-[10px] font-black ${player.rank===1 ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-600'}`}>{player.rank}</span>
                         <div>
                           <p className="text-[11px] font-black text-white uppercase truncate max-w-[80px]">{player.name}</p>
                           <p className={`text-[8px] font-black uppercase tracking-widest ${player.status === 'Studying' ? 'text-emerald-500' : 'text-slate-600'}`}>{player.status}</p>
                         </div>
                      </div>
                      <span className="text-[10px] font-mono font-black text-slate-500">{player.time}</span>
                   </div>
                 ))}
              </div>
              <button className="w-full mt-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl font-black text-[9px] tracking-widest uppercase transition-all flex items-center justify-center gap-2">View Full Rankings <ChevronRight size={12}/></button>
           </div>

           <div className="bg-[#0d121f] p-8 rounded-[3rem] border border-slate-800 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                 <BarChart2 size={18} className="text-indigo-500" />
                 <h3 className="text-[10px] font-black uppercase text-white tracking-widest">Active Subjects</h3>
              </div>
              <div className="space-y-2">
                 {subjects.map((sub, i) => (
                   <button 
                     key={i} 
                     onClick={() => setActiveSubject(sub)}
                     className={`w-full text-left p-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all border ${activeSubject === sub ? 'bg-indigo-600 border-indigo-400 text-white shadow-lg' : 'bg-slate-900 border-slate-800 text-slate-600 hover:border-indigo-500/50 hover:text-white'}`}
                   >
                     {sub}
                   </button>
                 ))}
              </div>
           </div>
        </div>

      </div>
    </div>
  );
}

