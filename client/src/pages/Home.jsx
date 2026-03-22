import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, Calculator, Timer, Users, 
  ArrowRight, CheckCircle, GraduationCap, 
  Globe, Shield, Zap, Flame, Send, Youtube
} from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#02040a] text-white font-['Inter'] selection:bg-blue-500/30 overflow-x-hidden">
      
      {/* ── Navbar ── */}
      <nav className="fixed top-0 left-0 w-full z-[100] bg-[#02040a]/80 backdrop-blur-xl border-b border-slate-800/50 px-6 md:px-16 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
           <div className="p-2 bg-blue-600 rounded-xl shadow-lg shadow-blue-500/20"><GraduationCap size={22} className="text-white" /></div>
           <span className="text-xl font-[1000] tracking-tighter uppercase text-white leading-none">ACB PORTAL</span>
        </div>
        <div className="hidden md:flex items-center gap-10">
           <a href="#features" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-white transition-colors">Features</a>
           <Link to="/about" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-white transition-colors">About</Link>
           <Link to="/contact" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-white transition-colors">Contact</Link>
        </div>
        <div className="flex items-center gap-4">
           <Link to="/login" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-white transition-colors">Login</Link>
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
           
           <h1 className="text-6xl md:text-8xl font-[1000] tracking-tighter uppercase leading-[0.9] text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500">
             Bihar's Digital <br/> <span className="text-blue-500">Study Engine.</span>
           </h1>
           
           <p className="text-slate-500 text-lg md:text-xl font-medium tracking-tight max-w-2xl mx-auto leading-relaxed">
             The ultimate all-in-one portal for BEU Students. 100% Free Notes, SGPA Calculators, 
             Focus Timers, and a thriving Community. Built by students, for students.
           </p>

           <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link to="/signup" className="w-full sm:w-auto px-10 py-5 bg-white text-black rounded-[2rem] font-[1000] text-sm uppercase tracking-widest hover:bg-slate-200 transition-all flex items-center justify-center gap-3 active:scale-95 shadow-2xl">
                Get Started Now <ArrowRight size={20}/>
              </Link>
              <Link to="/login" className="w-full sm:w-auto px-10 py-5 bg-slate-900/50 border border-slate-800 text-white rounded-[2rem] font-[1000] text-sm uppercase tracking-widest hover:bg-slate-800 transition-all active:scale-95">
                Visit Campus Hub
              </Link>
           </div>

           <div className="pt-16 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
              <div className="flex flex-col items-center">
                 <span className="text-3xl font-[1000] text-white">5K+</span>
                 <span className="text-[8px] font-black uppercase tracking-widest text-slate-500">Academics</span>
              </div>
              <div className="flex flex-col items-center">
                 <span className="text-3xl font-[1000] text-white">100+</span>
                 <span className="text-[8px] font-black uppercase tracking-widest text-slate-500">PYQ Papers</span>
              </div>
              <div className="flex flex-col items-center">
                 <span className="text-3xl font-[1000] text-white">24/7</span>
                 <span className="text-[8px] font-black uppercase tracking-widest text-slate-500">Focus Hub</span>
              </div>
              <div className="flex flex-col items-center">
                 <span className="text-3xl font-[1000] text-white">FREE</span>
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
              <h2 className="text-4xl md:text-5xl font-[1000] tracking-tighter uppercase text-white leading-none">Revolutionizing <br/> Bihar Engineering.</h2>
           </div>
           <p className="text-slate-500 font-bold uppercase tracking-widest text-[9px] max-w-xs text-right italic">"Built with modern stack for maximum speed and SEO dominance."</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {[
             { title: "Smart Notes Hub", ic: <BookOpen className="text-blue-500"/>, d: "Access handwritten & verified notes for all BEU semesters in one tap.", link: "/dashboard/notes" },
             { title: "Bihar Grade Engine", ic: <Calculator className="text-emerald-500"/>, d: "Accurate BEU SGPA/CGPA calculators with Hostinger-level speed.", link: "/dashboard/cgpa" },
             { title: "Deep Focus Protocol", ic: <Timer className="text-orange-500"/>, d: "Integrated Pomodoro & Stopwatch to track your daily study grind.", link: "/dashboard/study" },
             { title: "Scholars Network", ic: <Users className="text-purple-500"/>, d: "Join peer groups and discuss previous year question papers.", link: "/dashboard/study" },
             { title: "Secure Authentication", ic: <Shield className="text-indigo-500"/>, d: "Military grade Google auth to keep your data protected.", link: "/login" },
             { title: "Scientific Edge", ic: <Globe className="text-pink-500"/>, d: "Professional grade calculators for complex engineering problems.", link: "/dashboard/calculator" }
           ].map((f, i) => (
             <Link key={i} to={f.link} className="group p-8 bg-[#0d121f] border border-slate-800/80 rounded-[3rem] hover:border-blue-500/50 hover:bg-[#162035] transition-all duration-500 hover:-translate-y-2 text-left">
                <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center mb-8 border border-slate-800 shadow-inner group-hover:scale-110 transition-transform">
                  {f.ic}
                </div>
                <h3 className="text-xl font-black text-white uppercase mb-4 tracking-tighter">{f.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed text-sm">{f.d}</p>
             </Link>
           ))}
        </div>
      </section>

      {/* ── Call to Action ── */}
      <section className="py-20 px-6 md:px-16 container mx-auto">
         <div className="bg-gradient-to-br from-blue-600 to-indigo-900 rounded-[4rem] p-10 md:p-20 relative overflow-hidden text-center space-y-8 group shadow-[0_0_100px_rgba(37,99,235,0.2)]">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"></div>
            <div className="relative z-10 space-y-6">
               <h2 className="text-5xl md:text-7xl font-[1000] text-white tracking-tighter uppercase leading-none">Ready to Crush <br/> Your Finals?</h2>
               <p className="text-white/60 font-bold uppercase tracking-widest text-xs md:text-sm max-w-xl mx-auto italic">Join thousands of students who have already upgraded their study workflow.</p>
               <div className="pt-8">
                  <Link to="/signup" className="inline-flex px-12 py-5 bg-white text-black rounded-[2rem] font-[1000] text-sm uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-2xl">Create Free Account</Link>
               </div>
            </div>
         </div>
      </section>

      {/* ── Footer ── */}
      <footer className="py-20 border-t border-slate-800/50 px-6 md:px-16 bg-[#02040a]">
         <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2 space-y-6">
               <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-600 rounded-xl shadow-lg shadow-blue-500/20"><GraduationCap size={22} className="text-white" /></div>
                  <span className="text-xl font-[1000] tracking-tighter uppercase text-white leading-none">ACB PORTAL</span>
               </div>
               <p className="text-slate-500 font-bold text-xs uppercase tracking-widest leading-loose max-w-sm">Bihar's first open-source academic portal dedicated to Bihar Engineering University students.</p>
               <div className="flex gap-4">
                  <a href="https://t.me/apnacollegebihar" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#0088cc]/10 rounded-xl flex items-center justify-center text-[#0088cc] hover:bg-[#0088cc] hover:text-white border border-[#0088cc]/20 transition-all cursor-pointer">
                    <Send size={18} />
                  </a>
                  <a href="https://youtube.com/@appne-h8p?si=0xA0suRWTouLWP3i" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-red-600/10 rounded-xl flex items-center justify-center text-red-500 hover:bg-red-600 hover:text-white border border-red-500/20 transition-all cursor-pointer">
                    <Youtube size={18} />
                  </a>
               </div>
            </div>
            <div className="space-y-6">
               <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white">Explore Hub</h4>
               <div className="flex flex-col gap-4">
                  <Link to="/about" className="text-[10px] font-black uppercase text-slate-500 hover:text-white transition-all">About ACB</Link>
                  <Link to="/contact" className="text-[10px] font-black uppercase text-slate-500 hover:text-white transition-all">Support Center</Link>
                  <Link to="/dashboard" className="text-[10px] font-black uppercase text-slate-500 hover:text-white transition-all">Study Tools</Link>
               </div>
            </div>
            <div className="space-y-6">
               <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white">Legal Ops</h4>
               <div className="flex flex-col gap-4">
                  <Link to="/privacy" className="text-[10px] font-black uppercase text-slate-500 hover:text-white transition-all">Privacy Policy</Link>
                  <a href="/sitemap.xml" className="text-[10px] font-black uppercase text-slate-500 hover:text-white transition-all">Sitemap XML</a>
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
