import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, Calculator, Timer, Users, 
  ArrowRight, CheckCircle, GraduationCap, 
  Globe, Shield, Zap, Flame, Send, Youtube,
  User, LogOut, ChevronDown, LayoutDashboard, Bell, Download, MessageCircle, ShieldCheck, Calendar, Sparkles, UserCheck, Briefcase, Award, Landmark, FileText, Library, ExternalLink, Link2
} from 'lucide-react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../context/AuthContext';
import SEO from '../components/SEO';
import GlobalSearch from '../components/GlobalSearch';

export default function Home() {
  const { user, loading, logout } = useAuth();
  const [stats, setStats] = useState({ users: 5000, docs: 100, groups: 24 });
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const joinDate = user?.metadata?.creationTime 
    ? new Date(user.metadata.creationTime).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
    : 'Recently';

  useEffect(() => {
    const unsubUsers = onSnapshot(collection(db, 'users'), (snap) => {
      setStats(s => ({ ...s, users: snap.size })); 
    });
    const unsubDocs = onSnapshot(collection(db, 'documents'), (snap) => {
      setStats(s => ({ ...s, docs: snap.size }));
    });
    const unsubGroups = onSnapshot(collection(db, 'groups'), (snap) => {
      setStats(s => ({ ...s, groups: snap.size }));
    });
    return () => { unsubUsers(); unsubDocs(); unsubGroups(); };
  }, []);

  // Calculate remaining lines down to profile menu
  // (We match from imports all the way down to the profile menu)

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col items-center justify-center font-['Inter'] relative overflow-hidden">
      <SEO 
        title="Apna College Bihar"
        description="Bihar Engineering Counselling 2025 - UGEAC College Predictor, Cutoff Ranks, B.Tech Notes, PYQ Papers & CGPA Calculator. Official resource for Bihar Engineering students."
        url="https://www.apnacollegebihar.online/"
      />

      {/* ── Navbar ── */}
      <nav className="sticky top-0 left-0 w-full z-[100] bg-[#f8fafc]/80 backdrop-blur-xl border-b border-slate-200/50 px-4 md:px-16 py-4 md:py-5 flex items-center justify-between">
        <div className="flex items-center gap-2 md:gap-3 group">
           <img src="/logo-acb.png?v=99" alt="Logo" className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl" />
           <div className="block">
             <span className="text-sm md:text-xl font-[1000] tracking-tighter uppercase text-slate-900 block leading-none">APNA COLLEGE BIHAR</span>
             <span className="text-[6px] md:text-[7px] text-blue-500 font-bold uppercase tracking-[0.3em] md:tracking-[0.5em] mt-0.5 md:mt-1 block">OFFICIAL STUDY ENGINE</span>
           </div>
        </div>
        <div className="hidden md:flex items-center gap-10">
           <a href="#features" className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors">Features</a>
           <Link to="/about" className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors">About</Link>
           <Link to="/contact" className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors">Contact</Link>
        </div>
        <div className="flex items-center gap-3 md:gap-4">
           {loading ? (
             <div className="w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
           ) : user ? (
             <div className="flex items-center gap-4">
               <a 
                 href="/ApnaCollegeBihar_Stable.apk"
                 download="ApnaCollegeBihar_Stable.apk"
                 className="flex items-center gap-2 px-5 py-2.5 bg-blue-600/10 hover:bg-blue-600 text-blue-600 hover:text-white border border-blue-500/20 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all shadow-sm active:scale-95"
               >
                 Download APK
               </a>
               <div className="relative">
                 <button 
                   onClick={() => setShowProfileMenu(!showProfileMenu)}
                   className="flex items-center gap-2 px-4 py-2.5 md:px-6 md:py-3 bg-white border border-slate-200 hover:border-blue-500/50 text-slate-900 rounded-xl md:rounded-2xl font-black text-[9px] md:text-[10px] uppercase tracking-widest transition-all shadow-sm active:scale-95 group"
                 >
                   <div className="w-5 h-5 rounded-lg overflow-hidden bg-slate-50">
                     <img src="/logo-acb.png?v=99" alt="Profile" className="w-full h-full object-cover" />
                   </div>
                   <span>My Profile</span>
                   <ChevronDown size={12} className={`transition-transform duration-300 ${showProfileMenu ? 'rotate-180' : ''}`} />
                 </button>

                 {showProfileMenu && (
                   <>
                    <div className="fixed inset-0 z-[1900]" onClick={() => setShowProfileMenu(false)}></div>
                    <div className="absolute right-0 mt-3 w-64 bg-white/95 backdrop-blur-xl border border-slate-200 rounded-[2rem] shadow-2xl p-2 z-[2000] animate-in fade-in zoom-in-95 duration-200 origin-top-right">
                       <div className="px-5 py-5 border-b border-slate-100 mb-2 text-center">
                          <div className="w-16 h-16 rounded-2xl overflow-hidden mb-3 mx-auto border border-slate-100 shadow-lg">
                             <img src="/logo-acb.png?v=99" alt="ACB" className="w-full h-full object-cover" />
                          </div>
                          <p className="text-[8px] font-black text-blue-600 uppercase tracking-widest leading-none mb-1">ACB Official Account</p>
                          <p className="text-[10px] font-bold text-slate-900 truncate">{user.email}</p>
                          <div className="flex items-center justify-center gap-1 text-[8px] text-slate-500 mt-1.5 font-bold">
                            <Calendar size={10} className="text-blue-500" />
                            <span>Joined: <strong className="text-slate-900">{joinDate}</strong></span>
                          </div>
                       </div>
                       
                       <div className="space-y-1">
                          {(user?.email === 'prince86944@gmail.com' || user?.role === 'SUPER_ADMIN') && (
                            <Link 
                              to="/dashboard/admin" 
                              className="flex items-center gap-3 w-full p-3 hover:bg-blue-50 text-slate-700 hover:text-blue-600 rounded-2xl transition-all group font-bold"
                            >
                               <div className="p-2 bg-slate-100 group-hover:bg-blue-600/10 rounded-xl transition-colors">
                                 <ShieldCheck size={14} className="text-blue-600" />
                               </div>
                               <span className="text-[10px] font-black uppercase tracking-widest">Admin Panel</span>
                            </Link>
                          )}

                          <button 
                            onClick={() => logout()}
                            className="flex items-center gap-3 w-full p-3 hover:bg-red-50 text-slate-500 hover:text-red-600 rounded-2xl transition-all group"
                          >
                             <div className="p-2 bg-slate-100 group-hover:bg-red-600/10 rounded-xl transition-colors">
                               <LogOut size={14} />
                             </div>
                             <span className="text-[10px] font-black uppercase tracking-widest">Logout Session</span>
                          </button>
                       </div>

                       <div className="mt-2 p-3 border-t border-slate-100 text-center">
                          <p className="text-[7px] text-slate-400 font-bold uppercase tracking-widest">Apna College Bihar • 2026</p>
                       </div>
                    </div>
                   </>
                 )}
               </div>
             </div>
           ) : (
             <div className="flex items-center gap-3 md:gap-5">
               <a 
                 href="/ApnaCollegeBihar_Stable.apk"
                 download="ApnaCollegeBihar_Stable.apk"
                 className="flex items-center gap-2 px-5 py-2.5 bg-blue-600/10 hover:bg-blue-600 text-blue-600 hover:text-white border border-blue-500/20 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all"
               >
                 Download App
               </a>
               <Link to="/login" className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors">Login</Link>
               <Link to="/signup" className="px-4 py-2.5 md:px-6 md:py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl md:rounded-2xl font-black text-[9px] md:text-[10px] uppercase tracking-widest transition-all shadow-xl shadow-blue-900/20 active:scale-95">Signup</Link>
             </div>
           )}
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
                   Apna College <br/>
                   <span className="text-blue-500">Bihar</span>
                </h1>
                <p className="text-slate-500 text-[10px] md:text-sm font-black uppercase tracking-[0.2em] md:tracking-[0.4em] mb-2 max-w-xl mx-auto">
                   Bihar Engineering Counselling Hub · UGEAC Predictor
                </p>
                <p className="text-slate-400 text-xs font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
                   Bihar ke engineering students ke liye — UGEAC 2025 rank se college predict karo, BCE Bhagalpur, MIT Muzaffarpur, GCE Gaya ka cutoff dekho, aur free BEU semester notes download karo.
                </p>

            <div className="pt-8 max-w-2xl mx-auto mb-16">
               <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em]">Scroll down to explore features</p>
            </div>
 
            <div className="pt-16 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
               <div className="flex flex-col items-center">
                  <span className="text-3xl font-[1000] text-slate-900">{stats.users}</span>
                  <span className="text-[8px] font-black uppercase tracking-widest text-slate-500">Scholars</span>
               </div>
               <div className="flex flex-col items-center">
                  <span className="text-3xl font-[1000] text-slate-900">{stats.docs}</span>
                  <span className="text-[8px] font-black uppercase tracking-widest text-slate-500">PYQ & Notes</span>
               </div>
               <div className="flex flex-col items-center">
                  <span className="text-3xl font-[1000] text-slate-900">{stats.groups}</span>
                  <span className="text-[8px] font-black uppercase tracking-widest text-slate-500">Active Hubs</span>
               </div>
               <div className="flex flex-col items-center">
                  <span className="text-3xl font-[1000] text-slate-900">FREE</span>
                  <span className="text-[8px] font-black uppercase tracking-widest text-slate-500">NOW</span>
               </div>
            </div>
         </div>
       </section>

      {/* ── Platform Initiative (Detailed Info) ── */}
      <section className="py-20 px-6 md:px-16 container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
           <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600/10 border border-indigo-500/20 rounded-full text-indigo-400">
                 <Shield size={14} fill="currentColor"/>
                 <span className="text-[10px] font-black uppercase tracking-widest">Our Official Mission</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-[1000] tracking-tighter uppercase text-slate-900 leading-[0.9]">
                 Empowering Bihar's <br/> <span className="text-blue-500">Next Generation</span> <br/> of Engineers.
              </h2>
              <div className="space-y-6 text-slate-600 text-sm leading-relaxed font-medium">
                 <p>
                    <strong>Apna College Bihar (ACB)</strong> Bihar ka ekmatra dedicated academic portal hai jo vishesh roop se <strong>Bihar Engineering University (BEU)</strong> ke students aur engineering aspirants ke liye banaya gaya hai. Hamara uddeshya har student ko sahi resources aur guidance dena hai.
                 </p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="p-6 bg-white border border-slate-200/80 rounded-3xl shadow-sm">
                       <h4 className="text-xs font-black text-slate-900 uppercase mb-2">UGEAC Support</h4>
                       <p className="text-[11px]">JEE Mains ke baad Bihar ke colleges mein admission ke liye sabse accurate predictor aur cutoff data.</p>
                    </div>
                    <div className="p-6 bg-white border border-slate-200/80 rounded-3xl shadow-sm">
                       <h4 className="text-xs font-black text-slate-900 uppercase mb-2">Academic Excellence</h4>
                       <p className="text-[11px]">Free Handwritten Notes, PYQs aur BEU Semester results tracking ek hi platform par.</p>
                    </div>
                 </div>
                 <p className="text-xs italic text-slate-500">
                    "Hamara manna hai ki resource ki kami kisi bhi student ke sapno ke beech nahi aani chahiye."
                 </p>
              </div>
           </div>
           <div className="relative group">
              <div className="absolute inset-0 bg-blue-600/20 rounded-[4rem] blur-3xl group-hover:scale-110 transition-transform duration-700 opacity-50"></div>
              <div className="relative bg-white border border-slate-200 p-8 md:p-12 rounded-[4rem] shadow-2xl">
                 <div className="space-y-8">
                    <div className="flex items-center gap-6">
                       <div className="p-4 bg-blue-600/10 text-blue-500 rounded-3xl"><GraduationCap size={32}/></div>
                       <div>
                          <p className="text-2xl font-[1000] text-slate-900 tracking-tighter uppercase">Official Hub</p>
                          <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Authorized by Student Community</p>
                       </div>
                    </div>
                    <div className="space-y-4">
                       {[
                         "Verified BEU Semester Notes (Civil, CS, ME, EE, ECE)",
                         "Previous 5 Years Question Papers (PYQs)",
                         "Real-time UGEAC Counselling Updates",
                         "Student Networking & Collaborative Learning",
                         "Advanced GPA/CGPA Analysis Tools"
                       ].map((item, idx) => (
                         <div key={idx} className="flex items-center gap-3">
                            <CheckCircle size={16} className="text-emerald-500 shrink-0" />
                            <span className="text-[11px] font-bold text-slate-700 uppercase tracking-tight">{item}</span>
                         </div>
                       ))}
                    </div>

                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* ── Strict App Blocker Feature Section ── */}
      <section className="py-20 px-6 md:px-16 container mx-auto relative z-10">
        <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-950 text-white rounded-[3rem] p-8 md:p-16 relative overflow-hidden border border-slate-800 shadow-2xl">
          {/* Decorative background grid/orbs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/20 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Text description */}
            <div className="lg:col-span-7 space-y-6 md:space-y-8 text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full text-red-400">
                <Shield size={14} className="animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-widest">Premium Mobile Feature</span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-[1000] tracking-tighter uppercase leading-[0.9]">
                🚫 Strict App Blocker <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Hardcore Focus Mode</span>
              </h2>

              <p className="text-slate-400 text-xs md:text-sm font-medium leading-relaxed">
                Mobile notifications aur social media apps se hone wali distraction ko block karein. Hamare mobile app me integrated <strong>Strict App Blocker</strong> system aapko phone use karne se rokta hai aur focus karne par majboor karta hai.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="flex gap-4">
                  <div className="p-3 bg-slate-800 border border-slate-700/50 rounded-2xl h-fit text-blue-400 shrink-0">
                    <CheckCircle size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-wider text-slate-200">Custom Whitelist</h4>
                    <p className="text-slate-400 text-[11px] mt-1 leading-relaxed">Select only the apps you need for study (like Chrome or YouTube for lectures) and block everything else.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="p-3 bg-slate-800 border border-slate-700/50 rounded-2xl h-fit text-indigo-400 shrink-0">
                    <Timer size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-wider text-slate-200">Timer Integration</h4>
                    <p className="text-slate-400 text-[11px] mt-1 leading-relaxed">Set your study timer (e.g. 45 mins) and the app blocker automatically locks the device until the timer ends.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="p-3 bg-slate-800 border border-slate-700/50 rounded-2xl h-fit text-red-400 shrink-0">
                    <Shield size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-wider text-slate-200">Hardcore Overlay Lock</h4>
                    <p className="text-slate-400 text-[11px] mt-1 leading-relaxed">If you try to open blocked apps, a strict full-screen reminder blocks them immediately via accessibility service.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="p-3 bg-slate-800 border border-slate-700/50 rounded-2xl h-fit text-emerald-400 shrink-0">
                    <Sparkles size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-wider text-slate-200">Boost Study Hours</h4>
                    <p className="text-slate-400 text-[11px] mt-1 leading-relaxed">Designed by engineers for engineering students to double active focus time during exam seasons.</p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <a 
                  href="/ApnaCollegeBihar_Stable.apk"
                  download="ApnaCollegeBihar_Stable.apk"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-xl active:scale-95"
                >
                  <Download size={16} /> Get Native Android App (with Blocker)
                </a>
              </div>
            </div>

            {/* Visual simulation box / mockup */}
            <div className="lg:col-span-5 relative mt-8 lg:mt-0">
              <div className="absolute inset-0 bg-blue-500/20 rounded-[2.5rem] blur-2xl pointer-events-none"></div>
              
              {/* Phone Mockup Screen */}
              <div className="relative mx-auto max-w-[280px] bg-slate-950 border-[6px] border-slate-800 rounded-[3rem] shadow-2xl overflow-hidden aspect-[9/18]">
                {/* Speaker/Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-28 h-4 bg-slate-800 rounded-b-xl z-20"></div>

                {/* Inner Screen */}
                <div className="relative p-6 h-full flex flex-col justify-between bg-slate-950 select-none">
                  {/* Status Bar */}
                  <div className="flex justify-between items-center text-[8px] text-slate-500 font-bold">
                    <span>12:00 PM</span>
                    <div className="flex items-center gap-1">
                      <span>LTE</span>
                      <div className="w-3 h-1.5 bg-slate-500 rounded-xs"></div>
                    </div>
                  </div>

                  {/* Mock Blocker UI */}
                  <div className="my-auto text-center space-y-6 flex flex-col items-center justify-center">
                    <div className="w-16 h-16 bg-red-500/10 border border-red-500/30 rounded-2xl flex items-center justify-center text-red-500 animate-pulse">
                      <ShieldCheck size={32} />
                    </div>
                    
                    <div className="space-y-2">
                      <h5 className="text-sm font-black uppercase tracking-wider text-red-400">Distraction Blocked</h5>
                      <p className="text-[10px] text-slate-400 font-medium max-w-[180px] mx-auto leading-relaxed">
                        Instagram is blocked. Remaining study time:
                      </p>
                    </div>

                    {/* Timer */}
                    <div className="bg-slate-900 border border-slate-800 rounded-2xl py-3 px-4 w-fit mx-auto shadow-inner">
                      <span className="font-[1000] text-xl tracking-widest text-slate-200 font-mono">25:00</span>
                    </div>

                    <p className="text-[8px] text-slate-500 font-black uppercase tracking-widest">
                      🔒 STRICT BLOCKER ACTIVE
                    </p>
                  </div>

                  {/* Allowed Whitelist Indicator */}
                  <div className="bg-slate-900/50 border border-slate-800 p-3 rounded-2xl text-center space-y-1.5">
                    <span className="text-[7px] text-slate-400 font-black uppercase tracking-widest block">Allowed Apps Only:</span>
                    <div className="flex justify-center gap-2">
                      <div className="w-12 py-1 rounded bg-blue-600/20 border border-blue-500/30 text-blue-400 text-[8px] font-bold">
                        Chrome
                      </div>
                      <div className="w-12 py-1 rounded bg-indigo-600/20 border border-indigo-500/30 text-indigo-400 text-[8px] font-bold">
                        BEU
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Feature Grid (Categorized) ── */}
      <section id="features" className="py-20 md:py-32 px-6 md:px-16 container mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-16">
           <div className="max-w-xl space-y-4">
              <span className="text-blue-500 font-black uppercase tracking-[0.4em] text-[10px]">Academic Arsenal</span>
              <h2 className="text-4xl md:text-5xl font-[1000] tracking-tighter uppercase text-slate-900 leading-none">Revolutionizing <br/> Bihar Engineering.</h2>
           </div>
           <p className="text-slate-500 font-bold uppercase tracking-widest text-[9px] max-w-xs text-right italic">"Built with modern stack for maximum speed and SEO dominance."</p>
        </div>

        <div className="space-y-16">
          {[
            {
              title: "🎓 BEU",
              items: [
                { title: "BEU Result", ic: <Globe className="text-blue-500"/>, d: "Direct portal to check BEU results instantly.", link: "/beu-result?standalone=true" },
                { title: "Attendance", ic: <UserCheck className="text-green-500"/>, d: "Track the mandatory 75% BEU attendance.", link: "/attendance?standalone=true" },
                { title: "Timetable", ic: <Calendar className="text-yellow-500"/>, d: "Create and manage weekly class routines.", link: "/timetable?standalone=true" },
                { title: "Notes", ic: <BookOpen className="text-indigo-500"/>, d: "Free handwritten notes for all semesters.", link: "/notes?standalone=true" },
                { title: "PYQ", ic: <FileText className="text-purple-500"/>, d: "Previous 5 years question papers organized.", link: "/pyq?standalone=true" },
                { title: "SGPA / CGPA", ic: <GraduationCap className="text-cyan-500"/>, d: "Calculate your exact academic performance.", link: "/cgpa?standalone=true" },
                { title: "Syllabus", ic: <Library className="text-pink-500"/>, d: "Official BEU syllabus for every branch.", link: "/syllabus?standalone=true" },
              ]
            },
            {
              title: "📚 STUDY",
              items: [
                { title: "Study Timer", ic: <Timer className="text-rose-500"/>, d: "Pomodoro technique and focus tracking.", link: "/study?standalone=true" },
                { title: "Study Network", ic: <Users className="text-orange-500"/>, d: "Join student groups to discuss study material.", link: "/groups?standalone=true" },
                { title: "Scientific Calc", ic: <Calculator className="text-emerald-500"/>, d: "Advanced calculator for professional engineering.", link: "/calculator?standalone=true" },
                { title: "Study Resource", ic: <Link2 className="text-cyan-500"/>, d: "Share helpful links and descriptions with scholars.", link: "/study-resources?standalone=true" },
              ]
            },
            {
              title: "🧭 COUNSELLING",
              items: [
                { title: "UGEAC 2025", ic: <Send className="text-amber-500"/>, d: "Rank predictor based on official Bihar cutoff data.", link: "/ugeac-predictor?standalone=true" },
              ]
            },
            {
              title: "🌐 IMPORTANT WEBSITES",
              items: [
                { title: "AICTE Internship", ic: <Briefcase className="text-slate-500"/>, d: "Official AICTE internship portal for engineering students.", link: "https://internship.aicte-india.org/" },
                { title: "SWAYAM", ic: <Globe className="text-orange-500"/>, d: "Free online courses by Ministry of Education.", link: "https://swayam.gov.in/" },
                { title: "NPTEL", ic: <Award className="text-blue-500"/>, d: "National Programme on Technology Enhanced Learning.", link: "https://nptel.ac.in/" },
                { title: "NSP", ic: <Landmark className="text-emerald-500"/>, d: "National Scholarship Portal for central schemes.", link: "https://scholarships.gov.in/" },
                { title: "PMS Bihar", ic: <Landmark className="text-purple-500"/>, d: "Post Matric Scholarship portal for Bihar students.", link: "https://pmsonline.bih.nic.in/" },
                { title: "BSSC", ic: <ExternalLink className="text-cyan-500"/>, d: "Bihar Staff Selection Commission official website.", link: "https://bssc.bihar.gov.in/" },
              ]
            }
          ].map((cat, idx) => (
            <div key={idx} className="space-y-6">
              <h3 className="text-xs md:text-sm font-black text-slate-500 uppercase tracking-[0.2em] flex items-center gap-4">
                {cat.title}
                <div className="h-px flex-1 bg-slate-200"></div>
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
                 {cat.items.map((f, i) => (
                   <Link key={i} to={f.link} target={f.link.startsWith('http') ? '_blank' : '_self'} className="group p-4 md:p-6 bg-white border border-slate-200/80 rounded-2xl md:rounded-3xl hover:border-blue-500/50 hover:bg-slate-50 transition-all duration-500 hover:-translate-y-2 text-left shadow-sm flex flex-col h-full">
                      <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center mb-4 border border-slate-200 shadow-inner group-hover:scale-110 transition-transform shrink-0">
                         {React.cloneElement(f.ic, { size: 18 })}
                      </div>
                      <h4 className="text-[10px] md:text-sm font-black text-slate-900 uppercase mb-2 tracking-tighter leading-none">{f.title}</h4>
                      <p className="hidden md:block text-slate-500 font-medium leading-relaxed text-xs mt-auto">{f.d}</p>
                   </Link>
                 ))}
              </div>
            </div>
          ))}
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
      <footer className="py-20 border-t border-slate-200/50 px-4 md:px-16 bg-[#f8fafc]">
         <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2 space-y-6">
               <div className="flex items-center gap-3 group">
                  <img src="/logo-acb.png?v=99" alt="Logo" className="w-10 h-10 rounded-xl" />
                  <div>
                    <span className="text-xl font-[1000] tracking-tighter uppercase text-slate-900 block leading-none">APNA COLLEGE BIHAR</span>
                    <span className="text-[7px] text-blue-500 font-bold uppercase tracking-[0.5em] mt-1 block">Bihar's Study Hub</span>
                  </div>
               </div>
               <p className="text-slate-500 font-bold text-xs uppercase tracking-widest leading-loose max-w-sm">Bihar's first open-source academic website dedicated to Bihar Engineering University students.</p>
               <div className="flex gap-4">
                  <a href="https://t.me/apnacollegebihar" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#0088cc]/10 rounded-xl flex items-center justify-center text-[#0088cc] hover:bg-[#0088cc] hover:text-slate-900 border border-[#0088cc]/20 transition-all cursor-pointer shadow-md">
                    <Send size={18} />
                  </a>
                  <a href="https://whatsapp.com/channel/0029VbC6FsH3wtb5UEDvrW0a" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-emerald-600/10 rounded-xl flex items-center justify-center text-emerald-500 hover:bg-emerald-600 hover:text-slate-900 border border-emerald-500/20 transition-all cursor-pointer shadow-md">
                    <MessageCircle size={18} />
                  </a>
                  <a href="https://youtube.com/@apnacollegebihar" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-red-600/10 rounded-xl flex items-center justify-center text-red-500 hover:bg-red-600 hover:text-slate-900 border border-red-500/20 transition-all cursor-pointer shadow-md">
                    <Youtube size={18} />
                  </a>
               </div>
            </div>
            <div className="space-y-6">
               <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-900">Explore Hub</h4>
               <div className="flex flex-col gap-4">
                  <Link to="/about" className="text-[10px] font-black uppercase text-slate-500 hover:text-slate-900 transition-all">About ACB</Link>
                  <Link to="/contact" className="text-[10px] font-black uppercase text-slate-500 hover:text-slate-900 transition-all">Support Center</Link>
               </div>
            </div>
            <div className="space-y-6">
               <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-900">Legal Ops</h4>
               <div className="flex flex-col gap-4">
                  <Link to="/privacy-policy" className="text-[10px] font-black uppercase text-slate-500 hover:text-slate-900 transition-all">Privacy Policy</Link>
                  <Link to="/terms" className="text-[10px] font-black uppercase text-slate-500 hover:text-slate-900 transition-all">Terms of Service</Link>
                  <Link to="/delete-account" className="text-[10px] font-black uppercase text-red-500 hover:text-red-600 transition-all">Delete Account</Link>
               </div>
            </div>
         </div>
         <div className="mt-20 pt-10 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest">GEC SHEIKHPURA - APNA COLLEGE BIHAR</p>
            <div className="flex items-center gap-3">
              <span className="text-[8px] font-black text-slate-700 uppercase tracking-widest">Powered by Bihar Scholarly Community</span>
            </div>
         </div>
      </footer>
    </div>
  );
}
