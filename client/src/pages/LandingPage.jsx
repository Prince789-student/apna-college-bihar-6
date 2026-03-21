import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { 
  Timer, Book, Calculator, GraduationCap, 
  Shield, Zap, CheckCircle2, Star, 
  ArrowRight, Users, BarChart3, Clock,
  ArrowUpRight, Mail, Facebook, Twitter, Instagram,
  ChevronRight, PlayCircle
} from 'lucide-react';

export default function LandingPage() {
  const navigate = useNavigate();

  const features = [
    { 
      title: 'Study Planner', 
      desc: 'Smarter schedule with AI-driven study blocks tailored for your subjects.', 
      icon: <Timer className="w-8 h-8 text-blue-500" />,
      color: 'bg-blue-500/10 border-blue-500/20'
    },
    { 
      title: 'Goal Tracking', 
      desc: 'Set daily, weekly, and monthly targets. Watch your progress grow in real-time.', 
      icon: <Zap className="w-8 h-8 text-amber-500" />,
      color: 'bg-amber-500/10 border-amber-500/20'
    },
    { 
      title: 'Progress Analytics', 
      desc: 'Stunning charts and heatmaps to visualize your consistency and study streaks.', 
      icon: <BarChart3 className="w-8 h-8 text-indigo-500" />,
      color: 'bg-indigo-500/10 border-indigo-500/20'
    },
    { 
      title: 'Knowledge Hub', 
      desc: 'Access curated notes, PYQs, and verified academic content in one place.', 
      icon: <Book className="w-8 h-8 text-emerald-500" />,
      color: 'bg-emerald-500/10 border-emerald-500/20'
    },
    { 
      title: 'Calculators+', 
      desc: 'Scientific & Matrix calculators built-in. BEU CGPA tracking included.', 
      icon: <Calculator className="w-8 h-8 text-purple-500" />,
      color: 'bg-purple-500/10 border-purple-500/20'
    },
    { 
      title: 'Smart Groups', 
      desc: 'Create or join study networks. Compete with peers and stay motivated.', 
      icon: <Users className="w-8 h-8 text-pink-500" />,
      color: 'bg-pink-500/10 border-pink-500/20'
    }
  ];

  const steps = [
    { id: '01', title: 'Pick Subject', desc: 'Select from your curriculum or add custom subjects.' },
    { id: '02', title: 'Set Target', desc: 'Define your daily hour goals and session blocks.' },
    { id: '03', title: 'Track Live', desc: 'Use our focus timer to log your active study time.' },
    { id: '04', title: 'Level Up', desc: 'Analyze progress, win badges, and hit a 10 LPA package.' }
  ];

  const testimonials = [
    { name: 'Aditya Raj', role: 'Final Year Student', text: 'ACB Portal ne meri study consistency 2x kar di. Goals track karna easy hai.', stars: 5 },
    { name: 'Priya Kumari', role: 'Gate Aspirant', text: 'Notes hub aur Focus timer ka combination shandaar hai. Highly recommended!', stars: 5 },
    { name: 'Rahul Singh', role: 'B.Tech Student', text: 'SaaS style analytics dekh kar maza aa jata hai. Feeling like a pro scholar.', stars: 5 }
  ];

  return (
    <div className="min-h-screen bg-[#02040a] text-white font-['Inter'] selection:bg-blue-500/30 overflow-x-hidden scroll-smooth">
      
      {/* ─── NAVBAR ────────────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-[#02040a]/80 backdrop-blur-xl border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => navigate('/')}>
             <div className="p-2.5 bg-gradient-to-br from-blue-600 to-indigo-800 rounded-2xl shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
                <GraduationCap size={24} className="text-white" />
             </div>
             <div>
                <span className="text-xl font-[1000] tracking-tighter uppercase block leading-none">Apna College Bihar</span>
                <span className="text-[7px] text-slate-500 font-black uppercase tracking-[0.4em] mt-1 block">Premium Edu Portal</span>
             </div>
          </div>

          <div className="hidden md:flex items-center gap-10">
            <a href="/" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-white transition-colors">Home</a>
            <a href="#features" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-white transition-colors">Features</a>
            <Link to="/dashboard" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-white transition-colors">Dashboard</Link>
            <Link to="/dashboard/admin" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-white transition-colors">Admin</Link>
          </div>

          <div className="flex items-center gap-4">
             <Link to="/login" className="hidden lg:block text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-white px-4">Login</Link>
             <Link to="/signup" className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-xl shadow-blue-900/20 transition-all active:scale-95">
                Join Hub
             </Link>
          </div>
        </div>
      </nav>

      {/* ─── HERO SECTION ────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 md:px-12 overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-[1000px] h-[1000px] bg-blue-600/5 rounded-full blur-[200px] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] bg-indigo-600/5 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
           <div className="lg:col-span-7 space-y-10 text-center lg:text-left animate-in fade-in slide-in-from-left-5 duration-1000">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-600/10 border border-blue-500/20 rounded-full text-blue-400 font-black text-[9px] uppercase tracking-widest">
                 <Zap size={14} className="fill-blue-400" /> Version 2.0 Is Live
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-[1000] tracking-tighter uppercase leading-[0.9]">
                 Level Up Your <br />
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500">Scholar Journey</span>
              </h1>
              <p className="text-slate-400 text-sm md:text-lg font-bold max-w-2xl mx-auto lg:mx-0 leading-relaxed uppercase tracking-tight">
                From Bihar Engineering College to 10 LPA Package.
                The ultimate dashboard for study tracking, goal setting, and verified academic notes.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                 <button onClick={() => navigate('/signup')} className="w-full sm:w-auto px-10 py-5 bg-white text-slate-950 rounded-[2rem] font-[1000] text-xs uppercase tracking-widest shadow-2xl hover:bg-slate-100 transition-all flex items-center justify-center gap-4 group">
                    Start Free Hub <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
                 </button>
                 <button onClick={() => navigate('/login')} className="w-full sm:w-auto px-10 py-5 bg-[#0d121f] text-white border border-slate-800 rounded-[2rem] font-[1000] text-xs uppercase tracking-widest hover:border-slate-600 transition-all flex items-center justify-center gap-4">
                    Watch Demo <PlayCircle size={18} className="text-blue-500" />
                 </button>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-8 pt-4">
                 <div className="flex -space-x-3">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-[#02040a] bg-slate-800 flex items-center justify-center text-[10px] font-black text-white overflow-hidden">
                         <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i * 123}`} alt="User" />
                      </div>
                    ))}
                    <div className="w-10 h-10 rounded-full border-2 border-[#02040a] bg-blue-600 flex items-center justify-center text-[10px] font-black text-white">+5K</div>
                 </div>
                 <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest leading-none">Trusted by <span className="text-white">Thousands of Bihar Scholars</span></p>
              </div>
           </div>

           {/* Dashboard Mockup UI */}
           <div className="lg:col-span-5 relative animate-in fade-in slide-in-from-right-5 duration-1000 delay-200">
              <div className="absolute inset-0 bg-blue-600/20 blur-[100px] pointer-events-none"></div>
              <div 
                onClick={() => toast('Login to use the interactive timer!', { icon: '🔒' })}
                className="relative bg-[#0d121f] rounded-[3.5rem] p-4 md:p-6 border border-slate-800 shadow-2xl transform lg:-rotate-2 hover:rotate-0 transition-transform duration-700 cursor-pointer group/mock">
                 <div className="bg-[#02040a] rounded-[2.5rem] overflow-hidden border border-slate-800/50 shadow-inner">
                    <div className="p-6 border-b border-slate-800/50 flex items-center justify-between">
                       <div className="flex gap-1.5">
                          <div className="w-2 h-2 rounded-full bg-red-500/50" />
                          <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                          <div className="w-2 h-2 rounded-full bg-emerald-500/50" />
                       </div>
                       <p className="text-[9px] font-black text-slate-600 uppercase tracking-widest">Scholar Dashboard v2</p>
                    </div>
                    <div className="p-8 space-y-8">
                       <div className="grid grid-cols-2 gap-4">
                          <div className="bg-slate-900/50 p-6 rounded-3xl border border-slate-800">
                             <p className="text-[8px] text-slate-500 font-black uppercase mb-1">Focus Time</p>
                             <p className="text-2xl font-black text-white leading-none">05 : 42</p>
                          </div>
                          <div className="bg-blue-600/10 p-6 rounded-3xl border border-blue-500/20">
                             <p className="text-[8px] text-blue-400 font-black uppercase mb-1">Daily Streak</p>
                             <p className="text-2xl font-black text-white leading-none">12 <span className="text-[10px] text-blue-400">🔥</span></p>
                          </div>
                       </div>
                       <div className="space-y-4">
                          <p className="text-[8px] text-slate-500 font-black uppercase">Study Consistency</p>
                          <div className="flex items-end gap-1.5 h-20">
                             {[40, 70, 45, 90, 60, 30, 80].map((h, i) => (
                               <div key={i} className={`flex-1 rounded-t-lg transition-all ${i===3?'bg-blue-500':'bg-slate-800'}`} style={{ height: `${h}%` }} />
                             ))}
                          </div>
                       </div>
                       <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl flex items-center gap-4">
                          <div className="p-2 bg-emerald-500/20 text-emerald-400 rounded-lg"><Star size={16} fill="currentColor"/></div>
                          <p className="text-[10px] font-black text-emerald-400 uppercase">Goal Hit: OS & DBMS</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* ─── FEATURES ────────────────────────────────────────────── */}
      <section id="features" className="py-24 md:py-32 px-6 md:px-12 bg-[#05070a]/50">
        <div className="max-w-7xl mx-auto space-y-20">
           <div className="text-center space-y-4 max-w-3xl mx-auto">
              <p className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em]">Engineered for Excellence</p>
              <h2 className="text-4xl md:text-6xl font-[1000] tracking-tighter uppercase leading-[0.9]">
                 Everything you need <br /> to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Master Exams</span>
              </h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((f, i) => (
                <div key={i} className="group p-10 bg-[#0d121f] border border-slate-800/80 rounded-[3rem] hover:border-blue-500/30 transition-all relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-full blur-3xl pointer-events-none group-hover:bg-blue-600/10 transition-all"></div>
                   <div className={`w-16 h-16 ${f.color} rounded-3xl flex items-center justify-center mb-10 transition-transform group-hover:scale-110 group-hover:rotate-6`}>
                      {f.icon}
                   </div>
                   <h3 className="text-2xl font-black text-white uppercase mb-4 tracking-tight leading-none">{f.title}</h3>
                   <p className="text-slate-500 text-sm font-bold leading-relaxed">{f.desc}</p>
                   <div className="mt-8 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                      <span className="text-[9px] font-black text-blue-400 uppercase tracking-widest flex items-center gap-2">Explore Feature <ArrowRight size={12}/></span>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ────────────────────────────────────────── */}
      <section id="how-it-works" className="py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
           <div className="bg-[#0d121f] rounded-[4rem] border border-slate-800/80 p-12 md:p-20 relative overflow-hidden">
              <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>
              
              <div className="text-center mb-20">
                 <h2 className="text-4xl md:text-6xl font-[1000] tracking-tighter uppercase mb-4">How it <span className="text-blue-500">Works</span></h2>
                 <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest text-center">Your Roadmap to Academic Success</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                 {steps.map((s, i) => (
                   <div key={i} className="relative group">
                      {i < 3 && <div className="hidden lg:block absolute top-10 left-full w-full h-[2px] bg-slate-800/50 z-0" />}
                      <div className="relative z-10 space-y-6 text-center lg:text-left">
                         <div className="w-20 h-20 bg-slate-900 border border-slate-800 rounded-[2rem] flex items-center justify-center mx-auto lg:mx-0 group-hover:border-blue-500/50 transition-all shadow-xl">
                            <span className="text-3xl font-[1000] text-blue-500">{s.id}</span>
                         </div>
                         <h4 className="text-2xl font-black text-white uppercase tracking-tight">{s.title}</h4>
                         <p className="text-slate-500 text-xs font-bold leading-relaxed">{s.desc}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ───────────────────────────────────────── */}
      <section id="testimonials" className="py-24 md:py-32 px-6 md:px-12 bg-[#05070a]/50">
        <div className="max-w-7xl mx-auto space-y-20">
           <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-6xl font-[1000] tracking-tighter uppercase">Scholar <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Feedback</span></h2>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((t, i) => (
                <div key={i} className="bg-[#0d121f] p-10 rounded-[3rem] border border-slate-800/80 relative space-y-6">
                   <div className="flex gap-1">
                      {[1,2,3,4,5].map(s => <Star key={s} size={14} fill="#fbbf24" className="text-amber-400" />)}
                   </div>
                   <p className="text-slate-300 text-sm font-semibold italic leading-relaxed">"{t.text}"</p>
                   <div className="flex items-center gap-4 pt-6 border-t border-slate-800/50">
                      <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center font-black text-white shadow-xl">{t.name[0]}</div>
                      <div>
                         <p className="text-sm font-black text-white uppercase tracking-tight">{t.name}</p>
                         <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest">{t.role}</p>
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* ─── CTA SECTION ─────────────────────────────────────────── */}
      <section className="py-24 md:py-32 px-6 md:px-12 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto space-y-12 relative z-10">
           <h2 className="text-5xl md:text-8xl font-[1000] tracking-tighter uppercase leading-[0.9]">
              Ready to <br /> <span className="text-blue-500">Secure</span> Your Future?
           </h2>
           <p className="text-slate-400 text-sm md:text-lg font-bold uppercase tracking-tight max-w-2xl mx-auto">
              Join thousands of scholars from Bihar already using the portal to dominate their curriculum.
           </p>
           <button onClick={() => navigate('/signup')} className="px-12 py-6 bg-blue-600 hover:bg-blue-500 text-white rounded-[2.5rem] font-[1000] text-sm uppercase tracking-[0.2em] shadow-2xl shadow-blue-900/40 active:scale-95 transition-all inline-flex items-center gap-4">
              Enter Hub Access <ChevronRight size={18}/>
           </button>
        </div>
      </section>

      {/* ─── FOOTER ──────────────────────────────────────────────── */}
      <footer className="py-20 px-6 md:px-12 border-t border-slate-800/50 bg-[#02040a]">
         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">
            <div className="space-y-6">
              <div className="flex items-center justify-center md:justify-start gap-4">
                 <div className="p-2 bg-blue-600 rounded-xl"><GraduationCap size={20} className="text-white" /></div>
                 <span className="text-lg font-black uppercase tracking-tighter">Apna College Bihar</span>
              </div>
              <p className="text-[10px] text-slate-600 font-bold uppercase tracking-widest leading-loose">
                Leading Bihar Scholars to Excellence. Empowering education with smart technology.
              </p>
              <div className="flex items-center justify-center md:justify-start gap-4">
                 {[Facebook, Twitter, Instagram, Mail].map((Icon, i) => (
                   <a key={i} href="#" className="p-3 bg-slate-900 hover:bg-blue-600 text-slate-500 hover:text-white rounded-xl transition-all"><Icon size={16}/></a>
                 ))}
              </div>
            </div>

            {[
              { title: 'Platform', links: ['Dashboard', 'Notes', 'Calculators', 'Study Tracking'] },
              { title: 'Company', links: ['About Hub', 'Join Team', 'Mentors', 'Sponsorship'] },
              { title: 'Support', links: ['Help Center', 'API Status', 'Security', 'Contact Us'] }
            ].map(col => (
               <div key={col.title} className="space-y-6">
                  <h4 className="text-[11px] font-black uppercase tracking-widest text-white">{col.title}</h4>
                  <ul className="space-y-4">
                     {col.links.map(link => (
                       <li key={link}><a href="#" className="text-[10px] font-bold text-slate-500 hover:text-white uppercase tracking-widest transition-all">{link}</a></li>
                     ))}
                  </ul>
               </div>
            ))}
         </div>
         <div className="max-w-7xl mx-auto pt-20 mt-20 border-t border-slate-800/30 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-[9px] font-black text-slate-700 uppercase tracking-widest">© 2026 APNA COLLEGE BIHAR · All Rights Reserved</p>
            <div className="flex items-center gap-8">
               <a href="#" className="text-[9px] font-black text-slate-700 uppercase tracking-widest hover:text-white">Privacy Policy</a>
               <a href="#" className="text-[9px] font-black text-slate-700 uppercase tracking-widest hover:text-white">Terms of Entry</a>
            </div>
         </div>
      </footer>
    </div>
  );
}
