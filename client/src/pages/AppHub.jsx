import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  Send, BookOpen, GraduationCap, Timer, 
  Users, Calculator, Globe, UserCheck, 
  Calendar, LogIn, LogOut, MessageCircle, Youtube, User, Trash2, ShieldCheck, Smartphone, ExternalLink, Briefcase, Award, GraduationCap as Cap2, Landmark, FileText, Library, Link2
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import SEO from '../components/SEO';
import GlobalSearch from '../components/GlobalSearch';

export default function AppHub() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
      setShowProfileMenu(false);
      navigate('/');
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  const joinDate = user?.metadata?.creationTime 
    ? new Date(user.metadata.creationTime).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
    : 'Recently';

  const categories = [
    {
      title: "🎓 BEU",
      items: [
        { name: 'BEU Result', icon: <Globe size={24} />, path: '/beu-result?standalone=true', color: 'text-blue-400' },
        { name: 'Attendance', icon: <UserCheck size={24} />, path: '/attendance?standalone=true', color: 'text-green-400' },
        { name: 'Timetable', icon: <Calendar size={24} />, path: '/timetable?standalone=true', color: 'text-yellow-400' },
        { name: 'Notes', icon: <BookOpen size={24} />, path: '/notes?standalone=true', color: 'text-indigo-400' },
        { name: 'PYQ', icon: <FileText size={24} />, path: '/pyq?standalone=true', color: 'text-purple-400' },
        { name: 'SGPA/CGPA', icon: <GraduationCap size={24} />, path: '/cgpa?standalone=true', color: 'text-cyan-400' },
        { name: 'Syllabus', icon: <Library size={24} />, path: '/syllabus?standalone=true', color: 'text-pink-400' },
      ]
    },
    {
      title: "📚 STUDY",
      items: [
        { name: 'Study Timer', icon: <Timer size={24} />, path: '/study?standalone=true', color: 'text-rose-400' },
        { name: 'Study Network', icon: <Users size={24} />, path: '/groups?standalone=true', color: 'text-orange-400' },
        { name: 'Scientific Calc', icon: <Calculator size={24} />, path: '/calculator?standalone=true', color: 'text-emerald-400' },
        { name: 'Study Resource', icon: <Link2 size={24} />, path: '/study-resources?standalone=true', color: 'text-cyan-400' },
      ]
    },
    {
      title: "🧭 COUNSELLING",
      items: [
        { name: 'UGEAC 2025', icon: <Send size={24} />, path: '/ugeac-predictor?standalone=true', color: 'text-amber-400' },
      ]
    },
    {
      title: "💼 CAREER OPTIONS",
      items: [
        { name: 'Hackathon Hub', icon: <Award size={24} />, path: '/hackathons', color: 'text-purple-400' },
      ]
    },
    {
      title: "🌐 IMPORTANT WEBSITES",
      items: [
        { name: 'AICTE Internship', icon: <Briefcase size={24} />, path: 'https://internship.aicte-india.org/', external: true, color: 'text-slate-300' },
        { name: 'SWAYAM', icon: <Globe size={24} />, path: 'https://swayam.gov.in/', external: true, color: 'text-orange-300' },
        { name: 'NPTEL', icon: <Award size={24} />, path: 'https://nptel.ac.in/', external: true, color: 'text-blue-300' },
        { name: 'NSP', icon: <Landmark size={24} />, path: 'https://scholarships.gov.in/', external: true, color: 'text-emerald-300' },
        { name: 'PMS Bihar', icon: <Landmark size={24} />, path: 'https://pmsonline.bih.nic.in/', external: true, color: 'text-purple-300' },
        { name: 'BSSC', icon: <ExternalLink size={24} />, path: 'https://bssc.bihar.gov.in/', external: true, color: 'text-cyan-300' },
      ]
    }
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
    <div className="min-h-screen bg-[#0a0f1d] text-white font-['Inter'] flex flex-col items-center justify-center p-4 pt-24 pb-12 relative overflow-hidden">
      <SEO 
        title="App Hub | Apna College Bihar - The Official Study Engine"
        description="Access all your college utilities - Study Timer, Notes, PYQs, UGEAC Predictor, SGPA Calculator, and more in one place."
        url="https://www.apnacollegebihar.online/hub"
      />
      
      {/* Fixed Top Header Bar */}
      <div className="fixed top-0 left-0 right-0 w-full bg-[#0a0f1d]/95 backdrop-blur-md border-b border-white/10 z-50 px-6 py-3.5 flex items-center justify-between shadow-2xl">
        <div className="flex items-center gap-3.5 max-w-2xl mx-auto w-full justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo-acb.png?v=99" alt="ACB Logo" className="w-10 h-10 rounded-xl border border-white/10 shadow-lg object-cover" />
            <div>
              <h2 className="text-xs font-black text-blue-400 uppercase tracking-[0.2em] leading-tight">APNA COLLEGE BIHAR</h2>
              <p className="text-[7px] text-slate-500 font-black uppercase tracking-[0.3em] mt-0.5">Official Study Engine</p>
            </div>
          </div>
          <div className="relative">
            {!user ? (
              <Link to="/login" className="flex items-center gap-1.5 px-3.5 py-2.5 bg-blue-600/20 border border-blue-500/30 text-blue-400 rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all active:scale-95 shadow-md">
                <LogIn size={14} /> Login
              </Link>
            ) : (
              <div>
                <button 
                  onClick={() => setShowProfileMenu(!showProfileMenu)} 
                  className="flex items-center gap-1.5 px-3.5 py-2.5 bg-blue-600/20 border border-blue-500/30 text-blue-400 rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all active:scale-95 shadow-md"
                >
                  <User size={14} /> My Profile
                </button>

                {showProfileMenu && (
                  <div className="absolute right-0 top-14 w-56 bg-[#10192d] border border-white/10 rounded-2xl p-3 shadow-2xl z-50 animate-in fade-in zoom-in-95">
                    <div className="pb-2.5 mb-2.5 border-b border-white/10">
                      <p className="text-[10px] font-bold text-slate-300 truncate">{user?.email || 'Student Member'}</p>
                      <div className="flex items-center gap-1 text-[8px] text-slate-400 mt-1">
                        <Calendar size={10} className="text-blue-400" />
                        <span>Joined: <strong className="text-white">{joinDate}</strong></span>
                      </div>
                    </div>
                    
                    {(user?.email === 'prince86944@gmail.com' || user?.role === 'SUPER_ADMIN') && (
                      <Link 
                        to="/dashboard/admin" 
                        className="w-full py-2.5 bg-blue-500/20 hover:bg-blue-500 border border-blue-500/30 text-blue-400 hover:text-white rounded-xl flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-widest transition-all active:scale-95 mb-1.5 shadow-md"
                      >
                        <ShieldCheck size={14} /> Admin Panel
                      </Link>
                    )}
                    
                    <Link 
                      to="/delete-account" 
                      className="w-full py-2.5 bg-orange-500/10 hover:bg-orange-500 text-orange-400 hover:text-white rounded-xl flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-widest transition-all active:scale-95 mb-1.5"
                    >
                      <Trash2 size={14} /> Delete Account
                    </Link>
                    <button 
                      onClick={handleLogout} 
                      className="w-full py-2.5 bg-red-500/10 hover:bg-red-500 text-red-400 hover:text-white rounded-xl flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-widest transition-all active:scale-95"
                    >
                      <LogOut size={14} /> Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="w-full max-w-2xl bg-[#0d1526] border-2 border-blue-900/30 rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col mb-6">
        
        {/* Render Categories */}
        <div className="p-6 space-y-8">
          {categories.map((cat, idx) => (
            <div key={idx}>
              <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                {cat.title}
                <div className="h-px flex-1 bg-white/5"></div>
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                {cat.items.map((f, i) => (
                  <button 
                    key={i} 
                    onClick={() => handleFeatureClick(f)}
                    className="aspect-[4/3] bg-[#152036] border border-white/5 rounded-2xl flex flex-col items-center justify-center gap-2 active:scale-95 transition-all hover:bg-[#1c2b4a] shadow-lg group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-[#10192d] to-transparent opacity-50 pointer-events-none"></div>
                    <div className={`${f.color} group-hover:scale-110 transition-transform relative z-10`}>{f.icon}</div>
                    <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-wider text-slate-300 text-center px-1 leading-tight relative z-10">{f.name}</span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Social Channels */}
        <div className="p-6 pt-0 flex flex-col gap-4 border-t border-white/5 mt-2">
          <div className="flex gap-3">
            <button 
              onClick={() => window.open('https://whatsapp.com/channel/0029VbC6FsH3wtb5UEDvrW0a', '_blank')}
              className="flex-1 py-3.5 bg-[#152036] border border-white/5 rounded-2xl flex items-center justify-center gap-2 transition-all active:scale-95 hover:bg-[#1c2b4a] shadow-lg"
            >
              <MessageCircle size={16} className="text-emerald-400" />
              <span className="text-[9px] font-black uppercase tracking-widest text-slate-200">WhatsApp</span>
            </button>
            <button 
              onClick={() => window.open('https://youtube.com/@apnacollegebihar', '_blank')}
              className="flex-1 py-3.5 bg-[#152036] border border-white/5 rounded-2xl flex items-center justify-center gap-2 transition-all active:scale-95 hover:bg-[#1c2b4a] shadow-lg"
            >
              <Youtube size={16} className="text-red-500" />
              <span className="text-[9px] font-black uppercase tracking-widest text-slate-200">YouTube</span>
            </button>
          </div>
        </div>
      </div>

      {/* Footer Attribution & Policy Links */}
      <div className="text-center space-y-3">
        <div className="flex items-center justify-center gap-4 text-[9px] font-bold text-slate-500 uppercase tracking-wider">
          <Link to="/privacy-policy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link>
          <span>•</span>
          <Link to="/terms" className="hover:text-blue-400 transition-colors">Terms of Service</Link>
          <span>•</span>
          <Link to="/delete-account" className="hover:text-red-400 transition-colors">Delete Account</Link>
        </div>
        <p className="text-[8px] font-black text-slate-600 uppercase tracking-[0.4em]">GEC SHEIKHPURA - APNA COLLEGE BIHAR</p>
      </div>
    </div>
  );
}
