import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  Send, BookOpen, GraduationCap, Timer, 
  Users, Calculator, Globe, UserCheck, 
  Bell, LogIn, LogOut, MessageCircle, Download
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function AppHub() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  const features = [
    { name: 'UGEAC 2025', icon: <Send size={28} />, path: '/dashboard/ugeac-predictor', color: 'text-emerald-400' },
    { name: 'Notes & PYQs', icon: <BookOpen size={28} />, path: '/dashboard/notes', color: 'text-blue-400' },
    { name: 'SGPA CalC', icon: <GraduationCap size={28} />, path: '/dashboard/cgpa', color: 'text-cyan-400' },
    { name: 'Study Timer', icon: <Timer size={28} />, path: '/dashboard/study', color: 'text-indigo-400' },
    { name: 'Study Network', icon: <Users size={28} />, path: '/dashboard/groups', color: 'text-orange-400' },
    { name: 'Scientific Calc', icon: <Calculator size={28} />, path: '/dashboard/calculator', color: 'text-rose-400' },
    { name: 'Results Portal', icon: <Globe size={28} />, path: 'https://results.beu.ac.in', external: true, color: 'text-slate-400' },
    { name: 'Attendance', icon: <UserCheck size={28} />, path: '/dashboard/attendance', color: 'text-emerald-400' },
    { name: 'Official Notice', icon: <Bell size={28} />, path: 'https://t.me/apnacollegebihar', external: true, color: 'text-amber-400' },
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
    <div className="min-h-screen bg-[#0a0f1d] text-white font-['Inter'] flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-[#0d1526] border-2 border-blue-900/30 rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col">
        
        {/* Header Title */}
        <div className="pt-8 pb-4 text-center">
          <h2 className="text-sm font-black text-blue-400 uppercase tracking-[0.3em]">APNA COLLEGE BIHAR</h2>
          <p className="text-[7px] text-slate-500 font-black uppercase tracking-[0.4em] mt-1">Official Study Engine</p>
        </div>

        {/* 3x3 Grid */}
        <div className="p-6 grid grid-cols-3 gap-3">
          {features.map((f, i) => (
            <button 
              key={i} 
              onClick={() => handleFeatureClick(f)}
              className="aspect-square bg-[#152036] border border-white/5 rounded-3xl flex flex-col items-center justify-center gap-3 active:scale-95 transition-all hover:bg-[#1c2b4a] shadow-lg group"
            >
              <div className={`${f.color} group-hover:scale-110 transition-transform`}>{f.icon}</div>
              <span className="text-[8px] font-black uppercase tracking-wider text-slate-300 text-center px-1 leading-tight">{f.name}</span>
            </button>
          ))}
        </div>

        {/* Social & Download Buttons */}
        <div className="p-6 pt-0 flex flex-col gap-3">
          <a 
            href="/ACB_v22_Final.apk" 
            download 
            className="w-full py-4 bg-blue-600 text-white rounded-2xl flex items-center justify-center gap-3 text-[10px] font-black uppercase tracking-widest shadow-xl shadow-blue-900/40 hover:bg-blue-500 transition-all active:scale-95"
          >
            <Download size={18} /> Download Final APK
          </a>

          <div className="flex gap-3">
            <button 
              onClick={() => window.open('https://t.me/apnacollegebihar', '_blank')}
              className="flex-1 py-3 bg-[#152036] border border-white/5 rounded-2xl flex items-center justify-center gap-2 transition-all active:scale-95"
            >
              <Send size={14} className="text-blue-400" />
              <span className="text-[8px] font-black uppercase tracking-widest text-slate-300">Telegram</span>
            </button>
            <button 
              onClick={() => window.open('https://whatsapp.com/channel/0029VaA8f9m0AgW7i7R7fC1v', '_blank')}
              className="flex-1 py-3 bg-[#152036] border border-white/5 rounded-2xl flex items-center justify-center gap-2 transition-all active:scale-95"
            >
              <MessageCircle size={14} className="text-emerald-400" />
              <span className="text-[8px] font-black uppercase tracking-widest text-slate-300">WhatsApp</span>
            </button>
          </div>

          {!user ? (
            <Link to="/login" className="py-3 text-center text-[9px] font-black uppercase tracking-widest text-slate-500 hover:text-white transition-colors">
              Already a member? Login
            </Link>
          ) : (
            <button 
              onClick={handleLogout}
              className="py-3 text-[9px] font-black uppercase tracking-widest text-red-500 hover:text-red-400 transition-colors w-full"
            >
              Logout Session
            </button>
          )}
        </div>
      </div>

      {/* Footer Attribution */}
      <div className="mt-6 text-center">
        <p className="text-[7px] font-black text-slate-700 uppercase tracking-[0.5em]">Bihar Engineering University • v2.2 Final</p>
      </div>
    </div>
  );
}
