import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  FileText, BookOpen, BarChart3, Megaphone, 
  UserCheck, Calculator, CalendarClock, Layers, 
  CalendarRange, LogIn, User, LogOut, Send, MessageCircle
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

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
    { name: 'PYQs', icon: <FileText size={28} />, path: '/dashboard/notes?tab=pyqs', color: 'text-blue-400' },
    { name: 'Syllabus', icon: <BookOpen size={28} />, path: '/dashboard/notes?tab=syllabus', color: 'text-indigo-400' },
    { name: 'Results', icon: <BarChart3 size={28} />, path: 'https://results.beu.ac.in', external: true, color: 'text-rose-400' },
    { name: 'BEU Notice', icon: <Megaphone size={28} />, path: 'https://t.me/apnacollegebihar', external: true, color: 'text-amber-400' },
    { name: 'Attendance', icon: <UserCheck size={28} />, path: '/dashboard/attendance', color: 'text-emerald-400' },
    { name: 'SGPA CalC', icon: <Calculator size={28} />, path: '/dashboard/cgpa', color: 'text-cyan-400' },
    { name: 'Time Table', icon: <CalendarClock size={28} />, path: '/dashboard/timetable', color: 'text-blue-400' },
    { name: 'Extras', icon: <Layers size={28} />, path: '/dashboard/extras', color: 'text-indigo-400' },
    { name: 'Calendar', icon: <CalendarRange size={28} />, path: '/dashboard/calendar', color: 'text-orange-400' },
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
          <h2 className="text-sm font-black text-blue-400 uppercase tracking-[0.3em]">BIHAR ENGINEERING UNIVERSITY</h2>
        </div>

        {/* 3x3 Grid */}
        <div className="p-6 grid grid-cols-3 gap-3">
          {features.map((f, i) => (
            <button 
              key={i} 
              onClick={() => handleFeatureClick(f)}
              className="aspect-square bg-[#152036] border border-white/5 rounded-3xl flex flex-col items-center justify-center gap-3 active:scale-95 transition-all hover:bg-[#1c2b4a] shadow-lg"
            >
              <div className={`${f.color}`}>{f.icon}</div>
              <span className="text-[9px] font-black uppercase tracking-wider text-slate-300">{f.name}</span>
            </button>
          ))}
        </div>

        {/* Social Buttons */}
        <div className="p-6 pt-0 flex flex-col gap-3">
          <div className="flex gap-3">
            <button 
              onClick={() => window.open('https://t.me/apnacollegebihar', '_blank')}
              className="flex-1 py-3 bg-blue-600/10 hover:bg-blue-600/20 border border-blue-500/20 rounded-2xl flex items-center justify-center gap-2 transition-all active:scale-95"
            >
              <Send size={14} className="text-blue-400" />
              <span className="text-[10px] font-black uppercase tracking-widest text-blue-400">Telegram Group</span>
            </button>
            <button 
              onClick={() => window.open('https://whatsapp.com/channel/0029VaA8f9m0AgW7i7R7fC1v', '_blank')}
              className="flex-1 py-3 bg-emerald-600/10 hover:bg-emerald-600/20 border border-emerald-500/20 rounded-2xl flex items-center justify-center gap-2 transition-all active:scale-95"
            >
              <MessageCircle size={14} className="text-emerald-400" />
              <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400">WhatsApp Channel</span>
            </button>
          </div>

          {!user ? (
            <Link to="/login" className="py-3 bg-blue-600 text-white rounded-2xl text-center text-[10px] font-black uppercase tracking-widest shadow-xl shadow-blue-900/40">
              Access All Features
            </Link>
          ) : (
            <button 
              onClick={handleLogout}
              className="py-3 bg-slate-800 text-slate-400 rounded-2xl text-[10px] font-black uppercase tracking-widest border border-slate-700 active:scale-95"
            >
              Logout Session
            </button>
          )}
        </div>
      </div>

      {/* Footer Attribution */}
      <div className="mt-6 text-center">
        <p className="text-[8px] font-black text-slate-700 uppercase tracking-[0.5em]">Apna College Bihar • Official Engine</p>
      </div>
    </div>
  );
}
