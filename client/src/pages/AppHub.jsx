import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  Send, BookOpen, GraduationCap, Timer, 
  Users, Calculator, Globe, UserCheck, 
  Bell, LogIn, LogOut, MessageCircle, Download, Youtube
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
    { name: 'UGEAC 2025', icon: <Send size={28} />, path: '/dashboard/ugeac-predictor?standalone=true', color: 'text-emerald-400' },
    { name: 'Notes & PYQs', icon: <BookOpen size={28} />, path: '/dashboard/notes?standalone=true', color: 'text-blue-400' },
    { name: 'SGPA CalC', icon: <GraduationCap size={28} />, path: '/dashboard/cgpa?standalone=true', color: 'text-cyan-400' },
    { name: 'Study Timer', icon: <Timer size={28} />, path: '/dashboard/study?standalone=true', color: 'text-indigo-400' },
    { name: 'Study Network', icon: <Users size={28} />, path: '/dashboard/groups?standalone=true', color: 'text-orange-400' },
    { name: 'Scientific Calc', icon: <Calculator size={28} />, path: '/dashboard/calculator?standalone=true', color: 'text-rose-400' },
    { name: 'Results Portal', icon: <Globe size={28} />, path: 'https://results.beu.ac.in', external: true, color: 'text-slate-400' },
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
        
        {/* Premium Header Bar */}
        <div className="px-6 pt-6 pb-4 flex items-center justify-between border-b border-white/5 bg-[#10192d]/50">
          <div className="flex items-center gap-3">
            <img src="/logo-acb.png?v=99" alt="ACB Logo" className="w-10 h-10 rounded-xl border border-white/10 shadow-lg object-cover" />
            <div>
              <h2 className="text-xs font-black text-blue-400 uppercase tracking-[0.2em] leading-tight">APNA COLLEGE BIHAR</h2>
              <p className="text-[7px] text-slate-500 font-black uppercase tracking-[0.3em] mt-0.5">Official Study Engine</p>
            </div>
          </div>
          <div>
            {!user ? (
              <Link to="/login" className="flex items-center gap-1.5 px-3 py-2 bg-blue-600/20 border border-blue-500/30 text-blue-400 rounded-xl text-[8px] font-black uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all active:scale-95 shadow-md">
                <LogIn size={12} /> Login
              </Link>
            ) : (
              <button onClick={handleLogout} className="flex items-center gap-1.5 px-3 py-2 bg-red-600/20 border border-red-500/30 text-red-400 rounded-xl text-[8px] font-black uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all active:scale-95 shadow-md">
                <LogOut size={12} /> Logout
              </button>
            )}
          </div>
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

        {/* Social Channels & Download Buttons */}
        <div className="p-6 pt-0 flex flex-col gap-4">
          <a 
            href="/ACB_v22_Final.apk" 
            download 
            className="w-full py-4 bg-blue-600 text-white rounded-2xl flex items-center justify-center gap-3 text-[10px] font-black uppercase tracking-widest shadow-xl shadow-blue-900/40 hover:bg-blue-500 transition-all active:scale-95"
          >
            <Download size={18} /> Download App
          </a>

          <div className="flex gap-3">
            <button 
              onClick={() => window.open('https://whatsapp.com/channel/0029VbC6FsH3wtb5UEDvrW0a', '_blank')}
              className="flex-1 py-3.5 bg-[#152036] border border-white/5 rounded-2xl flex items-center justify-center gap-2 transition-all active:scale-95 hover:bg-[#1c2b4a] shadow-lg"
            >
              <MessageCircle size={16} className="text-emerald-400" />
              <span className="text-[9px] font-black uppercase tracking-widest text-slate-200">WhatsApp Channel</span>
            </button>
            <button 
              onClick={() => window.open('https://youtube.com/@apnacollegebihar', '_blank')}
              className="flex-1 py-3.5 bg-[#152036] border border-white/5 rounded-2xl flex items-center justify-center gap-2 transition-all active:scale-95 hover:bg-[#1c2b4a] shadow-lg"
            >
              <Youtube size={16} className="text-red-500" />
              <span className="text-[9px] font-black uppercase tracking-widest text-slate-200">YouTube Channel</span>
            </button>
          </div>
        </div>
      </div>

      {/* Footer Attribution */}
      <div className="mt-6 text-center">
        <p className="text-[8px] font-black text-slate-600 uppercase tracking-[0.4em]">GEC SHEIKHPURA - APNA COLLEGE BIHAR</p>
      </div>
    </div>
  );
}
