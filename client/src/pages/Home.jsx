import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, Calculator, Timer, Users, 
  ArrowRight, CheckCircle, GraduationCap, 
  Globe, Shield, Zap, Flame, Send, Youtube
} from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col items-center justify-center p-4 font-['Inter'] relative overflow-hidden">

      {/* ── Navbar ── */}
      <nav className="sticky top-0 left-0 w-full z-[100] bg-[#f8fafc]/80 backdrop-blur-xl border-b border-slate-200/50 px-6 md:px-16 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3 group">
           <img src="/logo.jpg" alt="Logo" className="w-10 h-10 rounded-xl" />
           <div className="hidden sm:block">
             <span className="text-xl font-[1000] tracking-tighter uppercase text-slate-900 block leading-none">APNA COLLEGE BIHAR</span>
             <span className="text-[7px] text-blue-500 font-bold uppercase tracking-[0.5em] mt-1 block">OFFICIAL WEBSITE</span>
           </div>
        </div>
        <div className="hidden md:flex items-center gap-10">
           <a href="#features" className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors">Features</a>
           <Link to="/about" className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors">About</Link>
           <Link to="/contact" className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors">Contact</Link>
        </div>
        <div className="flex items-center gap-4">
           <Link to="/login" className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors">Login</Link>
           <Link to="/signup" className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all shadow-xl shadow-blue-900/20 active:scale-95">Signup</Link>
        </div>
      </nav>

      {/* ── Hero Section ── */}
      <section className="relative pt-40 pb-20 px-6 md:px-16 lg:pt-56 lg:pb-32 flex flex-col items-center text-center overflow-hidden">
        {/* Animated Background Orbs */}
        <div className="absolute top-[-10%] left-[-20%] w-[1000px] h-[1000px] bg-blue-600/10 rounded-full blur-[200px] animate-pulse pointer-events-none"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl space-y-8">
           <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/10 border border-blue-500/20 rounded-full text-blue-400 animate-bounce cursor-default">
             <Zap size={14} fill="currentColor"/>
             <span className="text-[10px] font-black uppercase tracking-widest">v2.0 Performance Hub is Live</span>
           </div>
           
           <h1 className="text-4xl md:text-7xl font-[1000] text-slate-900 tracking-tighter uppercase leading-[0.8] mb-6">
                   Bihar's Digital <br/>
                   <span className="text-blue-500">Study Engine</span>
                </h1>
                <p className="text-slate-500 text-xs md:text-sm font-black uppercase tracking-[0.4em] mb-12 max-w-xl mx-auto md:mx-0">
                   Apna College Bihar - Engineering Notes · CGPA · Networking
                </p>

           <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link to="/signup" className="w-full sm:w-auto px-10 py-5 bg-white text-black rounded-[2rem] font-[1000] text-sm uppercase tracking-widest hover:bg-slate-200 transition-all flex items-center justify-center gap-3 active:scale-95 shadow-2xl">
                Get Started Now <ArrowRight size={20}/>
              </Link>
              <Link to="/login" className="w-full sm:w-auto px-10 py-5 bg-slate-100/50 border border-slate-200 text-slate-900 rounded-[2rem] font-[1000] text-sm uppercase tracking-widest hover:bg-slate-100 transition-all active:scale-95">
                Visit Campus Hub
              </Link>
           </div>

           <div className="pt-16 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
              <div className="flex flex-col items-center">
                 <span className="text-3xl font-[1000] text-slate-900">5K+</span>
                 <span className="text-[8px] font-black uppercase tracking-widest text-slate-500">Academics</span>
              </div>
              <div className="flex flex-col items-center">
                 <span className="text-3xl font-[1000] text-slate-900">100+</span>
                 <span className="text-[8px] font-black uppercase tracking-widest text-slate-500">PYQ Papers</span>
              </div>
              <div className="flex flex-col items-center">
                 <span className="text-3xl font-[1000] text-slate-900">24/7</span>
                 <span className="text-[8px] font-black uppercase tracking-widest text-slate-500">Focus Hub</span>
              </div>
              <div className="flex flex-col items-center">
                 <span className="text-3xl font-[1000] text-slate-900">FREE</span>
                 <span className="text-[8px] font-black uppercase tracking-widest text-slate-500">Forever</span>
              </div>
           </div>
        </div>
      </section>

      {/* ── Feature Grid ── */}
      <section id="features" className="py-20 md:py-32 px-6 md:px-16 container mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-16">
           <div className="max-w-xl space-y-4">
              <span className="text-blue-500 font-black uppercase tracking-[0.4em] text-[10px]">Academic Arsenal</span>
              <h2 className="text-4xl md:text-5xl font-[1000] tracking-tighter uppercase text-slate-900 leading-none">Revolutionizing <br/> Bihar Engineering.</h2>
           </div>
           <p className="text-slate-500 font-bold uppercase tracking-widest text-[9px] max-w-xs text-right italic">"Built with modern stack for maximum speed and SEO dominance."</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {[
             { title: "UGEAC COUNSELLING", ic: <Send className="text-emerald-500"/>, d: "Official 2025 data-driven college recommendation engine for Bihar.", link: "/dashboard/ugeac-predictor" },
             { title: "Smart Notes Hub", ic: <BookOpen className="text-blue-500"/>, d: "Access handwritten & verified notes for all BEU semesters in one tap.", link: "/dashboard/notes" },
             { title: "Bihar Grade Engine", ic: <Calculator className="text-emerald-500"/>, d: "Accurate BEU SGPA/CGPA calculators with Hostinger-level speed.", link: "/dashboard/cgpa" },
             { title: "Deep Focus Protocol", ic: <Timer className="text-orange-500"/>, d: "Integrated Pomodoro & Stopwatch to track your daily study grind.", link: "/dashboard/study" },
             { title: "Scholars Network", ic: <Users className="text-purple-500"/>, d: "Join peer groups and discuss previous year question papers.", link: "/dashboard/study" },
             { title: "Secure Authentication", ic: <Shield className="text-indigo-500"/>, d: "Military grade Google auth to keep your data protected.", link: "/login" },
             { title: "Scientific Edge", ic: <Globe className="text-pink-500"/>, d: "Professional grade calculators for complex engineering problems.", link: "/dashboard/calculator" }
           ].map((f, i) => (
             <Link key={i} to={f.link} className="group p-8 bg-white border border-slate-200/80 rounded-[3rem] hover:border-blue-500/50 hover:bg-slate-50 transition-all duration-500 hover:-translate-y-2 text-left">
                <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center mb-8 border border-slate-200 shadow-inner group-hover:scale-110 transition-transform">
                  {f.ic}
                </div>
                <h3 className="text-xl font-black text-slate-900 uppercase mb-4 tracking-tighter">{f.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed text-sm">{f.d}</p>
             </Link>
           ))}
        </div>
      </section>

      {/* ── App Promotion ── */}
      <section className="py-20 px-6 md:px-16 container mx-auto">
        <div className="bg-white rounded-[4rem] p-10 md:p-16 border border-slate-200/80 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden group">
          <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none"></div>
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600/10 border border-emerald-500/20 rounded-full text-emerald-400">
               <Shield size={14} fill="currentColor"/>
               <span className="text-[10px] font-black uppercase tracking-widest">Available for Android</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-[1000] tracking-tighter uppercase text-slate-900 leading-none">The Ultimate <br/> <span className="text-blue-500">Distraction Blocker</span> App</h2>
            <p className="text-slate-500 font-bold uppercase tracking-widest text-[11px] leading-relaxed">
              Bihar's first study app that strictly blocks distracting apps like Instagram & Games during your study timer. Even a reboot won't stop the focus. 🔒🚀
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
               <Link to="/signup" className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-[1000] text-[10px] uppercase tracking-widest transition-all shadow-xl shadow-blue-900/40">Download APK Now</Link>
               <div className="px-8 py-4 bg-slate-100 border border-slate-200 text-slate-500 rounded-2xl font-[1000] text-[10px] uppercase tracking-widest">Coming to Play Store</div>
            </div>
          </div>
          <div className="flex-1 w-full max-w-sm">
             <div className="aspect-[9/16] bg-slate-100 rounded-[3rem] border-[8px] border-slate-200 shadow-2xl relative overflow-hidden group-hover:scale-105 transition-all duration-700">
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent"></div>
                <div className="p-8 flex flex-col items-center justify-center h-full text-center space-y-6">
                   <Timer size={60} className="text-blue-500 animate-pulse" />
                   <h3 className="text-xl font-black text-slate-900 uppercase tracking-tighter">IRON FOCUS ACTIVE</h3>
                   <div className="w-full h-2 bg-slate-800 rounded-full">
                      <div className="w-[65%] h-full bg-blue-500 rounded-full animate-progress"></div>
                   </div>
                   <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest">All Distractions Blocked 🔒</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* ── Call to Action ── */}
      <section className="py-20 px-6 md:px-16 container mx-auto">
         <div className="bg-gradient-to-br from-blue-600 to-indigo-900 rounded-[4rem] p-10 md:p-20 relative overflow-hidden text-center space-y-8 group shadow-[0_0_100px_rgba(37,99,235,0.2)]">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"></div>
            <div className="relative z-10 space-y-6">
               <h2 className="text-5xl md:text-7xl font-[1000] text-slate-900 tracking-tighter uppercase leading-none">Ready to Crush <br/> Your Finals?</h2>
               <p className="text-slate-900/60 font-bold uppercase tracking-widest text-xs md:text-sm max-w-xl mx-auto italic">Join thousands of students who have already upgraded their study workflow.</p>
               <div className="pt-8">
                  <Link to="/signup" className="inline-flex px-12 py-5 bg-white text-black rounded-[2rem] font-[1000] text-sm uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-2xl">Create Free Account</Link>
               </div>
            </div>
         </div>
      </section>

      {/* ── Footer ── */}
      <footer className="py-20 border-t border-slate-200/50 px-6 md:px-16 bg-[#f8fafc]">
         <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2 space-y-6">
               <div className="flex items-center gap-3 group">
                  <img src="/logo.jpg" alt="Logo" className="w-10 h-10 rounded-xl" />
                  <div>
                    <span className="text-xl font-[1000] tracking-tighter uppercase text-slate-900 block leading-none">APNA COLLEGE BIHAR</span>
                    <span className="text-[7px] text-blue-500 font-bold uppercase tracking-[0.5em] mt-1 block">Bihar's Study Hub</span>
                  </div>
               </div>
               <p className="text-slate-500 font-bold text-xs uppercase tracking-widest leading-loose max-w-sm">Bihar's first open-source academic website dedicated to Bihar Engineering University students.</p>
               <div className="flex gap-4">
                  <a href="https://t.me/apnacollegebihar" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#0088cc]/10 rounded-xl flex items-center justify-center text-[#0088cc] hover:bg-[#0088cc] hover:text-slate-900 border border-[#0088cc]/20 transition-all cursor-pointer">
                    <Send size={18} />
                  </a>
                  <a href="https://youtube.com/@appne-h8p?si=0xA0suRWTouLWP3i" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-red-600/10 rounded-xl flex items-center justify-center text-red-500 hover:bg-red-600 hover:text-slate-900 border border-red-500/20 transition-all cursor-pointer">
                    <Youtube size={18} />
                  </a>
               </div>
            </div>
            <div className="space-y-6">
               <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-900">Explore Hub</h4>
               <div className="flex flex-col gap-4">
                  <Link to="/about" className="text-[10px] font-black uppercase text-slate-500 hover:text-slate-900 transition-all">About ACB</Link>
                  <Link to="/contact" className="text-[10px] font-black uppercase text-slate-500 hover:text-slate-900 transition-all">Support Center</Link>
                  <Link to="/dashboard" className="text-[10px] font-black uppercase text-slate-500 hover:text-slate-900 transition-all">Study Tools</Link>
               </div>
            </div>
            <div className="space-y-6">
               <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-900">Legal Ops</h4>
               <div className="flex flex-col gap-4">
                  <Link to="/privacy" className="text-[10px] font-black uppercase text-slate-500 hover:text-slate-900 transition-all">Privacy Policy</Link>
                  <a href="/sitemap.xml" className="text-[10px] font-black uppercase text-slate-500 hover:text-slate-900 transition-all">Sitemap XML</a>
               </div>
            </div>
         </div>
         <div className="mt-20 pt-10 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">© 2026 Apna College Bihar. All Rights Reserved.</p>
            <div className="flex items-center gap-3">
              <span className="text-[8px] font-black text-slate-700 uppercase tracking-widest">Powered by Bihar Scholarly Community</span>
            </div>
         </div>
      </footer>
    </div>
  );
}
