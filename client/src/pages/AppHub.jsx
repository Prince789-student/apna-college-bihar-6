import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  FileText, Book, GraduationCap, Bell, 
  Calculator, Send, MessageCircle, LogIn, 
  User, Timer, Users, Globe
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { Capacitor } from '@capacitor/core';

export default function AppHub() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [showProfileMenu, setShowProfileMenu] = React.useState(false);

  const handleLogout = async () => {
    try {
      await logout();
      setShowProfileMenu(false);
      navigate('/');
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  const features = [
    { name: 'Study Zone', icon: <Timer size={32} />, path: '/dashboard/study', color: 'text-blue-500' },
    { name: 'Knowledge Hub', icon: <Book size={32} />, path: '/dashboard/notes', color: 'text-indigo-500' },
    { name: 'UGEAC Predictor', icon: <Send size={32} />, path: '/dashboard/ugeac-predictor', color: 'text-emerald-500' },
    { name: 'Study Network', icon: <Users size={32} />, path: '/dashboard/groups', color: 'text-orange-500' },
    { name: 'CGPA Calculator', icon: <GraduationCap size={32} />, path: '/dashboard/cgpa', color: 'text-cyan-500' },
    { name: 'Syllabus Hub', icon: <FileText size={32} />, path: '/dashboard/notes', color: 'text-purple-500' },
    { name: 'Scientific Calc', icon: <Calculator size={32} />, path: '/dashboard/calculator', color: 'text-rose-500' },
    { name: 'BEU Results', icon: <Globe size={32} />, path: 'https://results.beu.ac.in', external: true, color: 'text-slate-400' },
    { name: 'Official Notices', icon: <Bell size={32} />, path: 'https://t.me/apnacollegebihar', external: true, color: 'text-amber-500' },
  ];

  const handleFeatureClick = (f) => {
    if (f.external) {
      window.open(f.path, '_blank');
    } else {
      if (!user) {
        navigate('/login', { state: { from: f.path } });
      } else {
        navigate(f.path);
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0f1d] text-white font-['Inter'] relative overflow-hidden flex flex-col">
      {/* Background Orbs */}
      <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Header */}
      <header className="relative z-[100] px-6 py-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
           <img src="/logo.jpg" alt="Logo" className="w-10 h-10 rounded-xl" />
           <div>
             <h1 className="text-sm font-[1000] tracking-tighter uppercase leading-none">BIHAR ENGINEERING UNIVERSITY</h1>
             <p className="text-[6px] text-slate-500 font-black uppercase tracking-[0.4em] mt-1">Official Student Engine</p>
           </div>
        </div>
        
        {!user ? (
          <Link to="/login" className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-blue-900/20 active:scale-95 transition-all">
            <LogIn size={14} /> Login
          </Link>
        ) : (
          <div className="relative">
            <button 
              onClick={() => setShowProfileMenu(true)}
              className="flex items-center gap-2 px-4 py-2 bg-slate-800 text-white rounded-xl text-[10px] font-black uppercase tracking-widest active:scale-95 transition-all border border-slate-700"
            >
              <User size={14} /> Profile
            </button>
            
            {/* Mobile-Friendly Profile Modal */}
            {showProfileMenu && (
              <div className="fixed inset-0 z-[2000] flex items-center justify-center p-6">
                <div className="absolute inset-0 bg-[#0a0f1d]/90 backdrop-blur-xl" onClick={() => setShowProfileMenu(false)}></div>
                <div className="relative w-full max-w-xs bg-slate-900 border border-slate-800 rounded-[2.5rem] shadow-2xl p-8 pointer-events-auto">
                  <div className="flex flex-col items-center text-center mb-8">
                    <div className="w-16 h-16 bg-blue-600/10 rounded-full flex items-center justify-center text-blue-500 mb-4 border border-blue-500/20">
                      <User size={32} />
                    </div>
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-none mb-1">Scholar Hub Account</p>
                    <p className="text-xs font-bold text-white truncate max-w-full">{user.email}</p>
                  </div>
                  
                  <div className="space-y-4">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleLogout();
                      }}
                      className="w-full flex items-center justify-center gap-3 py-6 bg-red-600 text-white rounded-2xl transition-all text-xs font-black uppercase tracking-widest shadow-xl shadow-red-900/20"
                    >
                      <LogIn size={16} className="rotate-180" /> Logout Session
                    </button>
                    <button 
                      onClick={() => setShowProfileMenu(false)}
                      className="w-full py-4 text-slate-500 text-[9px] font-black uppercase tracking-widest hover:text-white"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </header>

      {/* Main Grid */}
      <main className="flex-1 relative z-10 px-6 pb-24 flex flex-col items-center justify-center">
        <div className="w-full max-w-sm grid grid-cols-3 gap-3 md:gap-4">
           {features.map((f, i) => (
             <button 
               key={i} 
               onClick={() => handleFeatureClick(f)}
               className="aspect-square bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-2xl md:rounded-3xl p-4 flex flex-col items-center justify-center gap-3 hover:bg-slate-800 transition-all active:scale-95 group"
             >
                <div className={`${f.color} group-hover:scale-110 transition-transform`}>
                  {f.icon}
                </div>
                <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-slate-300 text-center leading-tight">
                  {f.name}
                </span>
             </button>
           ))}
        </div>

        {/* Social Buttons */}
        <div className="w-full max-w-sm grid grid-cols-2 gap-3 mt-8">
           <a href="https://t.me/yourgroup" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 py-4 bg-blue-600/20 border border-blue-500/20 text-blue-400 rounded-2xl text-[9px] font-black uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all">
              <Send size={14} /> Telegram Group
           </a>
           <a href="https://whatsapp.com/channel/yourchannel" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 py-4 bg-emerald-600/20 border border-emerald-500/20 text-emerald-400 rounded-2xl text-[9px] font-black uppercase tracking-widest hover:bg-emerald-600 hover:text-white transition-all">
              <MessageCircle size={14} /> WhatsApp Channel
           </a>
        </div>
      </main>

      {/* App Footer Info */}
      <footer className="relative z-10 p-6 text-center">
         <p className="text-[8px] text-slate-600 font-black uppercase tracking-[0.2em]">Designed for Excellence • ACB 2026</p>
      </footer>
    </div>
  );
}
