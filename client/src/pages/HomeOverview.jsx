import React from 'react';
import { 
  TrendingUp, Clock, BookOpen, Calculator, 
  GraduationCap, Timer, Grid, ArrowRight,
  Zap, Target, Sparkles, LayoutDashboard
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function HomeOverview() {
  const { user } = useAuth();

  const hubs = [
    { title: 'Academic Vault', desc: 'Secure repository for Notes, PYQs & Lab Manuals.', icon: <BookOpen className="text-blue-400" />, path: '/dashboard/notes', color: 'from-blue-600 to-indigo-700', bg: 'bg-blue-600/10' },
    { title: 'BEU Analytics', desc: 'Real-time SGPA/CGPA engine with grade forecasting.', icon: <GraduationCap className="text-emerald-400" />, path: '/dashboard/sgpa', color: 'from-emerald-500 to-teal-700', bg: 'bg-emerald-600/10' },
    { title: 'Engine (Sci-Calc)', desc: 'Advanced math processor for complex engineering.', icon: <Calculator className="text-purple-400" />, path: '/dashboard/calculator', color: 'from-purple-500 to-indigo-800', bg: 'bg-purple-600/10' },
    { title: 'Matrix Laboratory', desc: '4x4 Linear Algebra solver with vector products.', icon: <Grid className="text-amber-400" />, path: '/dashboard/matrix', color: 'from-amber-500 to-orange-700', bg: 'bg-amber-600/10' },
    { title: 'Study Protocol', desc: 'Focus timer with heatmap & global leaderboard.', icon: <Timer className="text-rose-400" />, path: '/dashboard/study', color: 'from-rose-500 to-pink-700', bg: 'bg-rose-600/10' },
    { title: 'Task Vector', desc: 'Daily objective tracker & strategic planner.', icon: <Target className="text-sky-400" />, path: '/dashboard/plan', color: 'from-sky-500 to-blue-700', bg: 'bg-sky-600/10' },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-12 animate-in fade-in duration-1000 pb-20 px-4 md:px-0">
      
      {/* ─── GREETING HEADER ────────────────────────────────────── */}
      <div className="relative bg-[#0d121f] p-10 md:p-14 rounded-[4rem] border border-slate-800 shadow-2xl overflow-hidden group">
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none group-hover:bg-blue-600/10 transition-all"></div>
         
         <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-10">
            <div className="space-y-4">
               <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em]">Operational Status: Online</p>
               </div>
               <h1 className="text-4xl md:text-6xl font-[1000] text-white tracking-tighter uppercase leading-none">
                 Welcome, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">{user?.displayName?.split(' ')[0] || 'Scholar'}</span> Node
               </h1>
               <p className="max-w-xl text-slate-400 text-sm font-medium leading-relaxed">
                 Access your integrated academic modules below. Every feature is now synchronized with the Bihar Central Operations Hub.
               </p>
            </div>
            
            <div className="flex -space-x-4">
               {[1,2,3,4].map(i => (
                 <div key={i} className={`w-14 h-14 rounded-2xl border-4 border-[#0d121f] bg-slate-800 flex items-center justify-center text-xs font-black text-slate-500`}>
                   {i}
                 </div>
               ))}
               <div className="w-14 h-14 rounded-2xl border-4 border-[#0d121f] bg-blue-600 flex items-center justify-center text-[10px] font-black text-white">
                 +2.4k
               </div>
            </div>
         </div>
      </div>

      {/* ─── MODULE GRID ────────────────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {hubs.map((hub, idx) => (
          <Link 
            key={idx} 
            to={hub.path} 
            className="group bg-[#0d121f] border border-slate-800 p-8 rounded-[3rem] shadow-xl hover:border-blue-500/30 transition-all relative overflow-hidden flex flex-col justify-between min-h-[320px]"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${hub.color} opacity-0 group-hover:opacity-[0.03] transition-opacity`}></div>
            
            <div className="space-y-6 relative z-10">
              <div className={`w-16 h-16 ${hub.bg} rounded-[1.5rem] flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg border border-white/5`}>
                 {React.cloneElement(hub.icon, { size: 28 })}
              </div>
              
              <div className="space-y-3">
                 <h2 className="text-2xl font-black text-white uppercase tracking-tighter leading-none group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-all">{hub.title}</h2>
                 <p className="text-[11px] text-slate-500 font-bold uppercase tracking-tight leading-relaxed">{hub.desc}</p>
              </div>
            </div>

            <div className="pt-8 flex items-center justify-between relative z-10">
               <div className="flex items-center gap-2 text-[9px] font-black text-slate-600 uppercase tracking-widest group-hover:text-blue-400 transition-colors">
                  Initialize <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
               </div>
               <div className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center text-slate-700 group-hover:border-blue-500/30 group-hover:text-white transition-all">
                  <Sparkles size={16} />
               </div>
            </div>
          </Link>
        ))}
      </div>

      {/* ─── FOOTER CTA ────────────────────────────────────────── */}
      <div className="bg-gradient-to-r from-blue-600/10 to-indigo-600/5 border border-blue-500/20 rounded-[3rem] p-12 text-center space-y-6">
         <Zap size={40} className="mx-auto text-blue-500 animate-pulse" />
         <h3 className="text-xl font-black text-white uppercase tracking-tighter">Bihar Engineering Platform Identity v2.1</h3>
         <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.3em]">Corporate SaaS Design Language / System Core Verified</p>
      </div>

    </div>
  );
}
