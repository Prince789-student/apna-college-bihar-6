import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, Calculator, Timer, Users, 
  ArrowRight, CheckCircle, GraduationCap, 
  Globe, Shield, Zap, Flame, Send, Youtube,
  User, LogOut, ChevronDown, LayoutDashboard
} from 'lucide-react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../context/AuthContext';

export default function Home() {
  const { user, loading, logout } = useAuth();
  const [stats, setStats] = useState({ users: 5000, docs: 100, groups: 24 });
  const [showProfileMenu, setShowProfileMenu] = useState(false);

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

  const handleDownload = (e) => {
    e.preventDefault();
    window.location.href = '/download';
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col items-center justify-center p-4 font-['Inter'] relative overflow-hidden">

      {/* ── Navbar ── */}
      <nav className="sticky top-0 left-0 w-full z-[100] bg-[#f8fafc]/80 backdrop-blur-xl border-b border-slate-200/50 px-4 md:px-16 py-4 md:py-5 flex items-center justify-between">
        <div className="flex items-center gap-2 md:gap-3 group">
           <img src="/logo_acb.png" alt="Logo" className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl" />
           <div className="block">
             <span className="text-sm md:text-xl font-[1000] tracking-tighter uppercase text-slate-900 block leading-none">ACB</span>
             <span className="text-[6px] md:text-[7px] text-blue-500 font-bold uppercase tracking-[0.3em] md:tracking-[0.5em] mt-0.5 md:mt-1 block">OFFICIAL</span>
           </div>
        </div>
        <div className="hidden md:flex items-center gap-10">
           <a href="#features" className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors">Features</a>
           <Link to="/about" className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors">About</Link>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
            <a 
              href="/ApnaCollegeBihar_Stable.apk" 
              download
              className="flex items-center gap-2 px-3 py-2 md:px-6 md:py-3 bg-blue-600 text-white rounded-xl md:rounded-2xl font-black text-[9px] md:text-[10px] uppercase tracking-widest shadow-lg shadow-blue-900/20 active:scale-95 transition-all border border-blue-400/30"
            >
              <Zap size={14} className="animate-pulse fill-white" /> Download App
            </a>

            {user ? (
              <div className="relative">
                <button 
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                  className="flex items-center gap-2 px-4 py-2.5 md:px-6 md:py-3 bg-white border border-slate-200 hover:border-blue-500/50 text-slate-900 rounded-xl md:rounded-2xl font-black text-[9px] md:text-[10px] uppercase tracking-widest transition-all shadow-sm active:scale-95 group"
                >
                  <div className="w-5 h-5 rounded-lg overflow-hidden bg-slate-50">
                    <img src="/logo_acb.png" alt="Profile" className="w-full h-full object-cover" />
                  </div>
                  <span>My Profile</span>
                  <ChevronDown size={12} className={`transition-transform duration-300 ${showProfileMenu ? 'rotate-180' : ''}`} />
                </button>

                {showProfileMenu && (
                  <div className="fixed inset-0 z-[2000] flex justify-end">
                    <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-sm animate-in fade-in duration-300" onClick={() => setShowProfileMenu(false)}></div>
                    <div className="relative w-full max-w-xs md:max-w-sm h-full bg-white shadow-[-20px_0_80px_rgba(0,0,0,0.15)] p-8 md:p-12 flex flex-col animate-in slide-in-from-right duration-500 ease-out pointer-events-auto">
                      <div className="flex flex-col items-center text-center mb-12">
                        <div className="w-24 h-24 rounded-[2rem] overflow-hidden mb-6 border border-slate-100 shadow-2xl mx-auto ring-8 ring-slate-50">
                          <img src="/logo_acb.png" alt="ACB" className="w-full h-full object-cover" />
                        </div>
                        <p className="text-[10px] font-[1000] text-blue-600 uppercase tracking-[0.4em] mb-2">ACB Official Account</p>
                        <p className="text-sm font-bold text-slate-900 truncate max-w-full">{user.email}</p>
                      </div>
                      
                      <div className="flex-1 space-y-4 overflow-y-auto pr-2 custom-scrollbar">
                        <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 mb-8">
                          <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-6">Quick Navigation</p>
                          <div className="space-y-3">
                            <Link to="/dashboard" onClick={() => setShowProfileMenu(false)} className="flex items-center gap-4 p-4 hover:bg-white rounded-2xl transition-all text-xs font-black uppercase tracking-widest text-slate-700 shadow-sm hover:shadow-md border border-transparent hover:border-slate-100">
                              <LayoutDashboard size={20} className="text-blue-500"/> Dashboard
                            </Link>
                          </div>
                        </div>

                        <button 
                          onClick={() => logout()}
                          className="w-full flex items-center justify-center gap-4 py-6 bg-red-50 hover:bg-red-600 text-red-500 hover:text-white rounded-2xl transition-all text-xs font-black uppercase tracking-widest border border-red-100 shadow-lg shadow-red-900/5 group"
                        >
                          <LogOut size={20} className="group-hover:scale-110 transition-transform" /> Log Out Session
                        </button>
                        <button 
                          onClick={() => setShowProfileMenu(false)}
                          className="w-full py-4 text-slate-400 text-[10px] font-black uppercase tracking-widest hover:text-slate-900 transition-all"
                        >
                          Close Sidebar
                        </button>
                      </div>

                      <div className="pt-8 border-t border-slate-100 text-center">
                        <p className="text-[8px] text-slate-400 font-bold uppercase tracking-widest">Apna College Bihar • 2026</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-3 md:gap-5">
                <Link 
                  to="/login"
                  className="px-5 py-2.5 md:px-8 md:py-3.5 bg-white border border-slate-200 text-slate-900 rounded-xl md:rounded-2xl font-black text-[9px] md:text-[10px] uppercase tracking-widest hover:bg-slate-50 transition-all shadow-sm active:scale-95"
                >
                  Login
                </Link>
                <Link 
                  to="/signup"
                  className="px-5 py-2.5 md:px-8 md:py-3.5 bg-slate-900 text-white rounded-xl md:rounded-2xl font-black text-[9px] md:text-[10px] uppercase tracking-widest hover:bg-slate-800 transition-all shadow-xl active:scale-95 border border-slate-700"
                >
                  Join Hub
                </Link>
              </div>
            )}
        </div>
      </nav>

      {/* ── Hero Section ── */}
      <main className="flex-1 flex flex-col items-center justify-center w-full max-w-7xl mx-auto px-4 py-20 text-center relative z-10 mt-[-40px] md:mt-0">
        
        {/* Animated Badge */}
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-blue-600/5 border border-blue-500/10 rounded-full mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600">V2.0 Performance Hub is Live</span>
        </div>

        <div className="space-y-10 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-9xl font-[1000] text-slate-900 tracking-tighter uppercase leading-[0.85] animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
            Bihar Engineering <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Counselling Hub</span>
          </h1>
          
          <div className="space-y-6">
            <p className="text-xs md:text-base font-black text-slate-500 uppercase tracking-[0.4em] md:tracking-[0.6em] animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
              UGEAC 2025 College Predictor · Bihar B.Tech Cutoff · BEU Notes · BCECE
            </p>
            <p className="text-[10px] md:text-xs font-bold text-slate-400 leading-relaxed max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
              Bihar ke engineering students ke liye — UGEAC 2025 rank se college predict karo, BCE Bhagalpur, MIT Muzaffarpur, GCE Gaya ka cutoff dekho, aur free BEU semester notes download karo.
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center gap-3 opacity-30">
          <p className="text-[8px] font-black uppercase tracking-widest text-slate-900">Scroll Down to explore features</p>
          <div className="w-px h-12 bg-gradient-to-b from-slate-900 to-transparent"></div>
        </div>
      </main>

      {/* ── Footer ── */}
      <footer className="w-full bg-white border-t border-slate-100 px-4 md:px-16 py-20 mt-20">
         <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2 space-y-6">
               <div className="flex items-center gap-3 group">
                  <img src="/logo_acb.png" alt="Logo" className="w-10 h-10 rounded-xl" />
                  <div>
                    <span className="text-xl font-[1000] tracking-tighter uppercase text-slate-900 block leading-none">APNA COLLEGE BIHAR</span>
                    <span className="text-[7px] text-blue-500 font-bold uppercase tracking-[0.5em] mt-1 block">ACB OFFICIAL</span>
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
         <div className="mt-20 pt-10 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">© 2026 Apna College Bihar. All Rights Reserved.</p>
            <div className="flex items-center gap-3">
              <span className="text-[8px] font-black text-slate-700 uppercase tracking-widest">Powered by Bihar Scholarly Community</span>
            </div>
         </div>
      </footer>
    </div>
  );
}
