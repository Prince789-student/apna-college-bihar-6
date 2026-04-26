import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, Calculator, Timer, Users, 
  ArrowRight, CheckCircle, GraduationCap, 
  Globe, Shield, Zap, Flame, Send, Youtube
} from 'lucide-react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';

export default function Home() {
  const [stats, setStats] = useState({ users: 5000, docs: 100, groups: 24 });

  useEffect(() => {
    const unsubUsers = onSnapshot(collection(db, 'users'), (snap) => {
      setStats(s => ({ ...s, users: snap.size > 0 ? snap.size : 5000 }));
    });
    const unsubDocs = onSnapshot(collection(db, 'documents'), (snap) => {
      setStats(s => ({ ...s, docs: snap.size > 0 ? snap.size : 100 }));
    });
    const unsubGroups = onSnapshot(collection(db, 'groups'), (snap) => {
      setStats(s => ({ ...s, groups: snap.size > 0 ? snap.size : 24 }));
    });
    return () => { unsubUsers(); unsubDocs(); unsubGroups(); };
  }, []);

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col items-center justify-center p-4 font-['Inter'] relative overflow-hidden">

      {/* ── Navbar ── */}
      <nav className="sticky top-0 left-0 w-full z-[100] bg-[#f8fafc]/80 backdrop-blur-xl border-b border-slate-200/50 px-4 md:px-16 py-4 md:py-5 flex items-center justify-between">
        <div className="flex items-center gap-2 md:gap-3 group">
           <img src="/logo.jpg" alt="Logo" className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl" />
           <div className="block">
             <span className="text-sm md:text-xl font-[1000] tracking-tighter uppercase text-slate-900 block leading-none">APNA COLLEGE</span>
             <span className="text-[6px] md:text-[7px] text-blue-500 font-bold uppercase tracking-[0.3em] md:tracking-[0.5em] mt-0.5 md:mt-1 block">BIHAR OFFICIAL</span>
           </div>
        </div>
        <div className="hidden md:flex items-center gap-10">
           <a href="#features" className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors">Features</a>
           <Link to="/about" className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors">About</Link>
           <Link to="/contact" className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors">Contact</Link>
        </div>
        <div className="flex items-center gap-3 md:gap-4">
           <Link to="/login" className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors">Login</Link>
           <Link to="/signup" className="px-4 py-2.5 md:px-6 md:py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl md:rounded-2xl font-black text-[9px] md:text-[10px] uppercase tracking-widest transition-all shadow-xl shadow-blue-900/20 active:scale-95">Signup</Link>
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
           
           <h1 className="text-4xl md:text-7xl font-[1000] text-slate-900 tracking-tighter uppercase leading-[0.9] md:leading-[0.8] mb-6">
                   Bihar Engineering <br/>
                   <span className="text-blue-500">Counselling Hub</span>
                </h1>
                <p className="text-slate-500 text-[10px] md:text-sm font-black uppercase tracking-[0.2em] md:tracking-[0.4em] mb-2 max-w-xl mx-auto">
                   UGEAC 2025 College Predictor · Bihar B.Tech Cutoff · BEU Notes · BCECE
                </p>
                <p className="text-slate-400 text-xs font-medium mb-8 max-w-2xl mx-auto leading-relaxed">
                   Bihar ke engineering students ke liye — UGEAC 2025 rank se college predict karo, BCE Bhagalpur, MIT Muzaffarpur, GCE Gaya ka cutoff dekho, aur free BEU semester notes download karo.
                </p>

           <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 px-4 w-full">
              <Link to="/signup" className="w-full sm:w-auto px-8 py-4 md:px-10 md:py-5 bg-white text-black rounded-2xl md:rounded-[2rem] font-[1000] text-xs md:text-sm uppercase tracking-widest hover:bg-slate-200 transition-all flex items-center justify-center gap-3 active:scale-95 shadow-2xl border border-slate-200">
                Get Started Now <ArrowRight size={18}/>
              </Link>
              <Link to="/login" className="w-full sm:w-auto px-8 py-4 md:px-10 md:py-5 bg-slate-100/50 border border-slate-200 text-slate-900 rounded-2xl md:rounded-[2rem] font-[1000] text-xs md:text-sm uppercase tracking-widest hover:bg-slate-100 transition-all active:scale-95">
                Visit Campus Hub
              </Link>
           </div>

           <div className="pt-16 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
              <div className="flex flex-col items-center">
                 <span className="text-3xl font-[1000] text-slate-900">{stats.users}+</span>
                 <span className="text-[8px] font-black uppercase tracking-widest text-slate-500">Scholars</span>
              </div>
              <div className="flex flex-col items-center">
                 <span className="text-3xl font-[1000] text-slate-900">{stats.docs}+</span>
                 <span className="text-[8px] font-black uppercase tracking-widest text-slate-500">PYQ & Notes</span>
              </div>
              <div className="flex flex-col items-center">
                 <span className="text-3xl font-[1000] text-slate-900">{stats.groups}</span>
                 <span className="text-[8px] font-black uppercase tracking-widest text-slate-500">Active Hubs</span>
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
             { title: "UGEAC 2025 College Predictor", ic: <Send className="text-emerald-500"/>, d: "Bihar Engineering Counselling 2025 — Apna UGEAC rank enter karo aur jaano ki BCE Bhagalpur, MIT Muzaffarpur, GCE Gaya, DCE Darbhanga mein milega seat ya nahi. 2024-2025 real cutoff data.", link: "/dashboard/ugeac-predictor" },
             { title: "BEU Notes & PYQ Hub", ic: <BookOpen className="text-blue-500"/>, d: "Bihar Engineering University (BEU) ke sabhi semesters ke liye free handwritten notes, previous year question papers (PYQ) aur study material.", link: "/dashboard/notes" },
             { title: "SGPA / CGPA Calculator", ic: <Calculator className="text-emerald-500"/>, d: "BEU ke grading system ke anusaar accurate SGPA aur CGPA calculate karo. Bihar ke engineering students ke liye specially designed.", link: "/dashboard/cgpa" },
             { title: "Study Timer & Focus", ic: <Timer className="text-orange-500"/>, d: "Pomodoro technique aur Stopwatch se apna padhai ka waqt track karo. Bihar engineering exam preparation ke liye best tool.", link: "/dashboard/study" },
             { title: "Student Study Groups", ic: <Users className="text-purple-500"/>, d: "Bihar engineering students ke study groups join karo. PYQ discuss karo, doubts pucho, aur UGEAC counselling tips share karo.", link: "/dashboard/study" },
             { title: "Secure & Free Platform", ic: <Shield className="text-indigo-500"/>, d: "Bihar ke engineering students ke liye bilkul free platform. Google login se secure account banao aur saari features access karo.", link: "/login" },
             { title: "Scientific Calculator", ic: <Globe className="text-pink-500"/>, d: "Advanced scientific calculator for Bihar B.Tech students. Complex engineering calculations ke liye professional grade tool.", link: "/dashboard/calculator" }
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

      {/* ── SEO Content Section ── */}
      <section className="py-16 px-6 md:px-16 container mx-auto">
        <div className="bg-slate-50 border border-slate-200/80 rounded-[3rem] p-10 md:p-14">
          <h2 className="text-2xl font-[1000] text-slate-900 uppercase tracking-tighter mb-6">Bihar Engineering Counselling 2025 — Complete Guide</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-slate-600 text-sm leading-relaxed">
            <div>
              <h3 className="font-black text-slate-900 uppercase tracking-tight mb-3">UGEAC 2025 College Predictor</h3>
              <p>Bihar mein B.Tech admission ke liye <strong>UGEAC (Unified Guidance Engineering Admission Counselling)</strong> process hota hai. Apna College Bihar ka <strong>UGEAC 2025 College Predictor</strong> tool use karke aap apne JEE Mains rank se pata kar sakte ho ki aapko <strong>BCE Bhagalpur, MIT Muzaffarpur, GCE Gaya, DCE Darbhanga, MCE Motihari, LNJPIT Chapra</strong> mein seat milne ki kitni sambhavna hai.</p>
            </div>
            <div>
              <h3 className="font-black text-slate-900 uppercase tracking-tight mb-3">Bihar B.Tech Cutoff Ranks 2024-2025</h3>
              <p>Hamara predictor tool <strong>UGEAC 2024 aur 2025 ke actual official cutoff data</strong> par based hai. Sabhi categories ke liye cutoff available hai — <strong>UR, EBC, BC, SC, ST, EWS, RCG</strong>. Apni category select karo aur exact cutoff dekho.</p>
            </div>
            <div>
              <h3 className="font-black text-slate-900 uppercase tracking-tight mb-3">Free BEU Notes & Study Material</h3>
              <p><strong>Bihar Engineering University (BEU) aur AKU</strong> ke students ke liye sabhi semesters ke free notes available hain. <strong>Semester 1 se 8</strong> tak ke notes, previous year questions (PYQ), aur study material organize karke rakha gaya hai.</p>
            </div>
            <div>
              <h3 className="font-black text-slate-900 uppercase tracking-tight mb-3">Bihar Ke Top Engineering Colleges</h3>
              <p>Bihar ke top government engineering colleges: <strong>BCE Bhagalpur (B.C.E.), MIT Muzaffarpur, GCE Gaya, DCE Darbhanga, MCE Motihari, LNJPIT Chapra, NCE Chandi, KCE Katihar, SCE Sasaram, PCE Purnea</strong> — sabhi ka cutoff aur details hamare platform par available hai.</p>
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
