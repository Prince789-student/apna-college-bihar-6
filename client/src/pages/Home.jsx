import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, Shield, Timer, BookOpen, 
  Zap, Globe, ChevronRight, Calculator,
  Smartphone, Lock, Target, Award,
  Sparkles, Star, CheckCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      title: "Iron Focus Blocker",
      desc: "Hardware-level app blocking that stays active even after reboot. Zero bypass possible.",
      icon: <Lock className="text-orange-500" />,
      color: "from-orange-500/20 to-red-500/20"
    },
    {
      title: "UGEAC Intelligence",
      desc: "AI-powered college predictor for Bihar Engineering admissions with 99.9% accuracy.",
      icon: <Target className="text-blue-500" />,
      color: "from-blue-500/20 to-indigo-500/20"
    },
    {
      title: "Academic Vault",
      desc: "Access premium notes, PYQs, and semester resources exclusive to BEU students.",
      icon: <BookOpen className="text-emerald-500" />,
      color: "from-emerald-500/20 to-teal-500/20"
    }
  ];

  const stats = [
    { label: "Active Scholars", val: "5000+", icon: <Users size={16}/> },
    { label: "Study Materials", val: "1000+", icon: <BookOpen size={16}/> },
    { label: "Success Rate", val: "94%", icon: <Award size={16}/> },
    { label: "Daily Focus", val: "12k hrs", icon: <Timer size={16}/> }
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-blue-500/30 selection:text-blue-200 font-sans">
      
      {/* ── Dynamic Background ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[80%] h-[80%] bg-blue-600/10 rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-indigo-600/10 rounded-full blur-[120px]"></div>
      </div>

      {/* ── Navigation ── */}
      <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${scrolled ? 'bg-slate-950/80 backdrop-blur-2xl border-b border-white/5 py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600 blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <img src="/logo.jpg" alt="ACB" className="w-10 h-10 rounded-xl relative z-10 border border-white/10" />
            </div>
            <div className="block">
              <span className="text-xl font-[1000] tracking-tighter text-white block leading-none">ACB</span>
              <span className="text-[7px] text-blue-400 font-black uppercase tracking-[0.4em] mt-1 block">Bihar Official</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-10">
            {['Protocol', 'Intelligence', 'Vault', 'About'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-white transition-colors relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link to="/login" className="hidden sm:block text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-white transition-colors">Login</Link>
            <Link to="/signup" className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-black text-[10px] uppercase tracking-widest transition-all shadow-xl shadow-blue-900/40 active:scale-95 border border-blue-400/30">
              Join Protocol
            </Link>
          </div>
        </div>
      </nav>

      {/* ── Hero Section ── */}
      <section className="relative pt-48 pb-24 px-6 max-w-7xl mx-auto text-center z-10">
        <div className="space-y-10">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <Sparkles size={16} className="animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">v3.0 Iron Focus Protocol is Live</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-[1000] text-white tracking-tighter leading-[0.9] uppercase animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            Dominate Your <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Academic Goals</span>
          </h1>

          <p className="max-w-2xl mx-auto text-slate-400 text-sm md:text-base font-medium leading-relaxed animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500">
            Bihar's premier engineering ecosystem. From hardware-level distraction blocking to AI-powered UGEAC predictors, ACB is the ultimate terminal for serious scholars.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-8 animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-700">
            <Link to="/signup" className="w-full sm:w-auto px-10 py-5 bg-white text-black rounded-2xl font-[1000] text-sm uppercase tracking-widest hover:bg-slate-200 transition-all flex items-center justify-center gap-3 active:scale-95 shadow-2xl">
              Launch Dashboard <ArrowRight size={18}/>
            </Link>
            <a href="https://github.com/Prince789-student/apna-college-bihar-6/raw/refs/heads/main/server/public/ACB-v7.apk" className="w-full sm:w-auto px-10 py-5 bg-slate-900 text-white rounded-2xl font-[1000] text-sm uppercase tracking-widest hover:bg-slate-800 transition-all flex items-center justify-center gap-3 active:scale-95 border border-white/10 group">
              <Smartphone size={18} className="group-hover:scale-110 transition-transform"/> Download APK
            </a>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mt-32 max-w-5xl mx-auto">
           {stats.map((s, i) => (
             <div key={i} className="p-8 bg-slate-900/40 border border-white/5 rounded-[2.5rem] backdrop-blur-sm group hover:border-blue-500/30 transition-all">
                <div className="w-10 h-10 bg-blue-600/10 rounded-xl flex items-center justify-center text-blue-400 mb-4 mx-auto group-hover:scale-110 transition-transform">
                  {s.icon}
                </div>
                <p className="text-3xl font-[1000] text-white tracking-tighter mb-1">{s.val}</p>
                <p className="text-[9px] text-slate-500 font-black uppercase tracking-widest">{s.label}</p>
             </div>
           ))}
        </div>
      </section>

      {/* ── Features Section ── */}
      <section id="protocol" className="relative py-32 px-6 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-[1000] text-white tracking-tighter uppercase">The Scholar's Terminal</h2>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div key={i} className="relative group">
                <div className={`absolute inset-0 bg-gradient-to-br ${f.color} rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
                <div className="relative h-full p-10 bg-slate-900/60 border border-white/5 rounded-[3rem] backdrop-blur-xl hover:border-white/20 transition-all space-y-6">
                  <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    {f.icon}
                  </div>
                  <h3 className="text-2xl font-[1000] text-white tracking-tight uppercase leading-none">{f.title}</h3>
                  <p className="text-slate-400 text-sm font-medium leading-relaxed">{f.desc}</p>
                  <div className="pt-4">
                     <button className="flex items-center gap-2 text-blue-400 text-[10px] font-black uppercase tracking-widest group/btn">
                       Learn Protocol <ChevronRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                     </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── App Blocker Spotlight ── */}
      <section className="relative py-32 px-6 overflow-hidden">
         <div className="max-w-7xl mx-auto bg-gradient-to-br from-blue-600 to-indigo-800 rounded-[4rem] p-12 md:p-24 relative overflow-hidden flex flex-col lg:flex-row items-center gap-16 shadow-[0_0_100px_rgba(37,99,235,0.2)]">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px] pointer-events-none"></div>
            
            <div className="lg:w-1/2 space-y-8 relative z-10 text-center lg:text-left">
               <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-white border border-white/20">
                  <Shield size={14} />
                  <span className="text-[10px] font-black uppercase tracking-widest">Iron Focus Technology</span>
               </div>
               <h2 className="text-4xl md:text-6xl font-[1000] text-white tracking-tighter uppercase leading-none">Total Discipline <br/> is Mandatory.</h2>
               <p className="text-blue-100 text-base md:text-lg font-medium leading-relaxed opacity-90">
                 Our native Android blocker doesn't just ask nicely. It locks Instagram, YouTube, and Games at the hardware level. No settings bypass, no reboot bypass. Only your goals remain.
               </p>
               <div className="pt-6 flex flex-wrap justify-center lg:justify-start gap-4">
                  <Link to="/signup" className="px-10 py-5 bg-white text-blue-600 rounded-2xl font-black text-xs uppercase tracking-widest shadow-2xl active:scale-95 transition-all">Start Session</Link>
                  <div className="flex items-center gap-3 text-white/70">
                    <CheckCircle2 size={20} className="text-white" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">Available for Android 8.0+</span>
                  </div>
               </div>
            </div>

            <div className="lg:w-1/2 relative">
               <div className="relative z-10 w-full max-w-md mx-auto aspect-[9/16] bg-slate-950 rounded-[3rem] border-8 border-slate-900 shadow-2xl overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 to-transparent"></div>
                  <div className="flex flex-col items-center justify-center h-full space-y-10 p-8 text-center">
                     <div className="w-24 h-24 bg-red-500/20 border-2 border-red-500 text-red-500 rounded-[2.5rem] flex items-center justify-center animate-pulse shadow-[0_0_40px_rgba(239,68,68,0.3)]">
                        <Lock size={48} />
                     </div>
                     <div className="space-y-3">
                        <h4 className="text-3xl font-[1000] text-white tracking-tighter uppercase">Focus Locked</h4>
                        <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em]">Session in Progress</p>
                     </div>
                     <div className="w-full bg-slate-900 rounded-2xl p-4 flex items-center justify-between border border-white/5">
                        <div className="flex items-center gap-3">
                           <div className="w-8 h-8 bg-indigo-500/20 rounded-lg flex items-center justify-center text-indigo-400"><Timer size={16}/></div>
                           <span className="text-xs font-bold text-white uppercase tracking-wider">Remaining</span>
                        </div>
                        <span className="text-xl font-black text-white tabular-nums">42:18</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* ── Footer ── */}
      <footer className="py-20 border-t border-white/5 z-10 relative">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-8">
           <div className="flex items-center justify-center gap-3 opacity-50 grayscale hover:grayscale-0 transition-all cursor-pointer">
              <img src="/logo.jpg" alt="Logo" className="w-8 h-8 rounded-lg" />
              <span className="text-xl font-[1000] tracking-tighter text-white">ACB</span>
           </div>
           <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.5em]">Built for the future engineers of Bihar</p>
           <div className="flex justify-center gap-8 text-[10px] font-black uppercase tracking-widest text-slate-500">
             <a href="#" className="hover:text-white transition-colors">Privacy</a>
             <a href="#" className="hover:text-white transition-colors">Terms</a>
             <a href="#" className="hover:text-white transition-colors">Security</a>
           </div>
           <p className="text-slate-700 text-[9px] font-bold uppercase tracking-[0.2em] pt-8">© 2026 APNA COLLEGE BIHAR PROTOCOL. ALL SYSTEMS OPERATIONAL.</p>
        </div>
      </footer>
    </div>
  );
};

const Users = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

export default Home;
