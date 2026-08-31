import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  Send, BookOpen, GraduationCap, Timer, 
  Users, Calculator, Globe, UserCheck, 
  Calendar, LogIn, LogOut, MessageCircle, Youtube, User, Trash2, ShieldCheck, Smartphone, ExternalLink, Briefcase, Award, GraduationCap as Cap2, Landmark, FileText, Library, Link2, ArrowRight
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import SEO from '../components/SEO';
import GlobalSearch from '../components/GlobalSearch';
import Footer from '../components/Footer';
import { collection, query, limit, onSnapshot, doc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase';

export default function AppHub() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [beuNotices, setBeuNotices] = useState([]);

  React.useEffect(() => {
    const qNotices = query(collection(db, 'beu_notifications'), limit(50));
    const unsubNotices = onSnapshot(qNotices, (snap) => {
      const data = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      const parseDate = (d) => {
        if (!d) return 0;
        if (d.includes('-')) return new Date(d).getTime();
        const p = d.split('/');
        if (p.length === 3) return new Date(`${p[2]}-${p[1]}-${p[0]}`).getTime();
        return new Date(d).getTime();
      };
      data.sort((a, b) => {
        const tA = parseDate(a.date || a.noticedate);
        const tB = parseDate(b.date || b.noticedate);
        if (tA === tB) {
            const tsA = a.timestamp?.seconds || 0;
            const tsB = b.timestamp?.seconds || 0;
            return tsB - tsA;
        }
        return tB - tA;
      });
      setBeuNotices(data.slice(0, 3));
    });
    return () => { unsubNotices(); };
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
      setShowProfileMenu(false);
      navigate('/');
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  const handleDeleteNotice = async (notice, e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!window.confirm(`Are you sure you want to delete "${notice.title || notice.board}"?`)) return;
    try {
      await deleteDoc(doc(db, 'beu_notifications', notice.id));
      alert('Notice deleted successfully!');
    } catch (err) {
      alert('Error deleting notice: ' + err.message);
    }
  };

  const joinDate = user?.metadata?.creationTime 
    ? new Date(user.metadata.creationTime).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
    : 'Recently';

  const categories = [
    {
      title: "🎓 BEU",
      items: [
        { name: 'BEU Result', icon: <Globe size={24} />, path: '/beu-result?standalone=true', color: 'text-blue-600' },
        { name: 'Attendance', icon: <UserCheck size={24} />, path: '/attendance?standalone=true', color: 'text-emerald-600' },
        { name: 'Timetable', icon: <Calendar size={24} />, path: '/timetable?standalone=true', color: 'text-amber-600' },
        { name: 'Notes', icon: <BookOpen size={24} />, path: '/notes?standalone=true', color: 'text-indigo-600' },
        { name: 'PYQ', icon: <FileText size={24} />, path: '/pyq?standalone=true', color: 'text-purple-600' },
        { name: 'SGPA/CGPA', icon: <GraduationCap size={24} />, path: '/cgpa?standalone=true', color: 'text-cyan-600' },
        { name: 'Syllabus', icon: <Library size={24} />, path: '/syllabus?standalone=true', color: 'text-pink-600' },
        { name: 'Lecture Finder', icon: <Youtube size={24} />, path: '/lecture-finder?standalone=true', color: 'text-red-600' },
      ]
    },
    {
      title: "📚 STUDY",
      items: [
        { name: 'Study Timer', icon: <Timer size={24} />, path: '/study?standalone=true', color: 'text-rose-600' },
        { name: 'Study Network', icon: <Users size={24} />, path: '/groups?standalone=true', color: 'text-orange-600' },
        { name: 'Scientific Calc', icon: <Calculator size={24} />, path: '/calculator?standalone=true', color: 'text-emerald-600' },
        { name: 'Study Resource', icon: <Link2 size={24} />, path: '/study-resources?standalone=true', color: 'text-cyan-600' },
      ]
    },
    {
      title: "🧭 COUNSELLING",
      items: [
        { name: 'College Predictor', icon: <Send size={24} />, path: '/ugeac-predictor?standalone=true&tab=finder', color: 'text-amber-600' },
        { name: 'Rank Predictor', icon: <Calculator size={24} />, path: '/ugeac-predictor?standalone=true&tab=predictor', color: 'text-indigo-600' },
        { name: 'Counselling Guide', icon: <BookOpen size={24} />, path: '/ugeac-predictor?standalone=true&tab=guide', color: 'text-emerald-600' },
      ]
    },
    {
      title: "🌐 IMPORTANT WEBSITES",
      items: [
        { name: 'AICTE Internship', icon: <Briefcase size={24} />, path: 'https://internship.aicte-india.org/', external: true, color: 'text-slate-600' },
        { name: 'SWAYAM', icon: <Globe size={24} />, path: 'https://swayam.gov.in/', external: true, color: 'text-orange-600' },
        { name: 'NPTEL', icon: <Award size={24} />, path: 'https://nptel.ac.in/', external: true, color: 'text-blue-600' },
        { name: 'NSP', icon: <Landmark size={24} />, path: 'https://scholarships.gov.in/', external: true, color: 'text-emerald-600' },
        { name: 'PMS Bihar', icon: <Landmark size={24} />, path: 'https://pmsonline.bih.nic.in/', external: true, color: 'text-purple-600' },
        { name: 'BSSC', icon: <ExternalLink size={24} />, path: 'https://bssc.bihar.gov.in/', external: true, color: 'text-cyan-600' },
      ]
    }
  ];

  // Only these paths require login — all others are freely accessible
  const LOGIN_REQUIRED_PATHS = ['/study', '/groups', '/achievements'];

  const handleFeatureClick = (f) => {
    if (f.external) {
      window.open(f.path, '_blank');
      return;
    }
    // Extract base path (remove query params like ?standalone=true)
    const basePath = f.path.split('?')[0];
    const needsLogin = LOGIN_REQUIRED_PATHS.some(p => basePath.startsWith(p));
    if (needsLogin && !user) {
      navigate('/login', { state: { from: f.path } });
    } else {
      navigate(f.path);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-['Inter'] flex flex-col items-center justify-center p-4 pt-24 pb-12 relative overflow-hidden">
      <SEO 
        title="App Hub | Apna College Bihar - The Official Study Engine"
        description="Access all your college utilities - Study Timer, Notes, PYQs, UGEAC Predictor, SGPA Calculator, and more in one place."
      />
      
      {/* Fixed Top Header Bar */}
      <div className="fixed top-0 left-0 right-0 w-full bg-[#f8fafc]/95 backdrop-blur-md border-b border-slate-200 z-50 px-6 py-3.5 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-3.5 max-w-2xl mx-auto w-full justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo-acb.png?v=99" alt="ACB Logo" className="w-10 h-10 rounded-xl border border-slate-200 shadow-sm object-cover" />
            <div>
              <h2 className="text-xs font-black text-blue-600 uppercase tracking-[0.2em] leading-tight">APNA COLLEGE BIHAR</h2>
              <p className="text-[7px] text-slate-400 font-black uppercase tracking-[0.3em] mt-0.5">Official Study Engine</p>
            </div>
          </div>
          <div className="relative">
            {!user ? (
              <Link to="/login" className="flex items-center gap-1.5 px-3.5 py-2.5 bg-blue-600/10 border border-blue-500/20 text-blue-600 rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all active:scale-95 shadow-sm">
                <LogIn size={14} /> Login
              </Link>
            ) : (
              <div>
                <button 
                  onClick={() => setShowProfileMenu(!showProfileMenu)} 
                  className="flex items-center gap-1.5 px-3.5 py-2.5 bg-blue-600/10 border border-blue-500/20 text-blue-600 rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all active:scale-95 shadow-sm"
                >
                  <User size={14} /> My Profile
                </button>

                {showProfileMenu && (
                  <div className="absolute right-0 top-14 w-56 bg-white border border-slate-200 rounded-2xl p-3 shadow-2xl z-50 animate-in fade-in zoom-in-95">
                    <div className="pb-2.5 mb-2.5 border-b border-slate-100">
                      <p className="text-[10px] font-bold text-slate-700 truncate">{user?.email || 'Student Member'}</p>
                      <div className="flex items-center gap-1 text-[8px] text-slate-500 mt-1">
                        <Calendar size={10} className="text-blue-500" />
                        <span>Joined: <strong className="text-slate-900">{joinDate}</strong></span>
                      </div>
                    </div>
                    
                    {(user?.email === 'prince86944@gmail.com' || user?.role === 'SUPER_ADMIN') && (
                    <Link 
                      to="/dashboard/admin" 
                      className="w-full py-2.5 bg-blue-600/10 hover:bg-blue-600 border border-blue-500/20 text-blue-600 hover:text-white rounded-xl flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-widest transition-all active:scale-95 mb-1.5 shadow-sm"
                    >
                      <ShieldCheck size={14} /> Admin Panel
                    </Link>
                  )}
                  <button 
                    onClick={handleLogout} 
                    className="w-full py-2.5 bg-red-500/10 hover:bg-red-500 text-red-600 hover:text-white rounded-xl flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-widest transition-all active:scale-95"
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

      <div className="w-full max-w-2xl space-y-6 mb-6">
        
        {/* Latest BEU Notifications */}
        {beuNotices.length > 0 && (
          <div className="bg-white border border-slate-200 rounded-[2.5rem] shadow-sm p-6 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-50 text-red-600 rounded-xl flex items-center justify-center border border-red-100 shadow-sm">
                  <span className="text-xl">🔥</span>
                </div>
                <div>
                  <h2 className="text-sm font-[1000] text-slate-900 tracking-tighter uppercase leading-none">Latest BEU Notices</h2>
                  <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mt-1">Official Updates</p>
                </div>
              </div>
              <Link to="/notifications" className="flex items-center gap-1.5 px-3 py-2 bg-slate-50 hover:bg-slate-100 text-blue-600 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all">
                View All <ArrowRight size={12} />
              </Link>
            </div>
            
            <div className="space-y-3">
              {beuNotices.map((notice) => (
                <a
                  key={notice.id}
                  href={notice.pdfUrl || (notice.link && notice.link.startsWith('http') ? notice.link : `https://beu-bih.ac.in/backend/${encodeURI(notice.link || '')}`)}
                  target="_blank"
                  rel="noreferrer"
                  className="relative flex flex-col p-4 bg-slate-50 border border-slate-100 hover:border-blue-200 rounded-2xl transition-all group"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 bg-red-600 text-white text-[8px] font-black uppercase tracking-widest rounded-md animate-pulse">NEW</span>
                    <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1">
                      <Calendar size={10} /> {notice.date || notice.noticedate ? (notice.date?.includes('/') ? notice.date : new Date(notice.date || notice.noticedate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })) : 'Unknown Date'}
                    </span>
                  </div>
                  <h3 className="text-xs font-bold text-slate-800 group-hover:text-blue-600 transition-colors line-clamp-2 pr-10">
                    {notice.title || notice.board}
                  </h3>
                  
                  {/* Admin Delete Action */}
                  {(user?.role === 'SUPER_ADMIN' || user?.role === 'ADMIN') && (
                    <button 
                      onClick={(e) => handleDeleteNotice(notice, e)} 
                      className="absolute top-4 right-4 p-1.5 bg-red-50 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition-all z-20"
                    >
                      <Trash2 size={12} />
                    </button>
                  )}
                </a>
              ))}
            </div>
          </div>
        )}
        {categories.map((cat, idx) => (
          <div key={idx} className="bg-white border border-slate-200 rounded-[2.5rem] shadow-sm p-6">
            <h3 className="text-xs font-[1000] text-slate-800 uppercase tracking-[0.2em] mb-4 text-center">
              {cat.title}
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
              {cat.items.map((f, i) => (
                <button 
                  key={i} 
                  onClick={() => handleFeatureClick(f)}
                  className="aspect-[4/3] bg-slate-50 border border-slate-200/60 rounded-2xl flex flex-col items-center justify-center gap-2 active:scale-95 transition-all hover:bg-slate-100 hover:border-slate-300 shadow-sm group relative overflow-hidden"
                >
                  <div className={`${f.color} group-hover:scale-110 transition-transform relative z-10`}>{f.icon}</div>
                  <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-wider text-slate-700 text-center px-1 leading-tight relative z-10">{f.name}</span>
                </button>
              ))}
            </div>
          </div>
        ))}

        {/* Social Channels */}
        <div className="bg-white border border-slate-200 rounded-[2.5rem] shadow-sm p-6">
          <div className="flex gap-3">
            <button 
              onClick={() => window.open('https://whatsapp.com/channel/0029VbC6FsH3wtb5UEDvrW0a', '_blank')}
              className="flex-1 py-3.5 bg-slate-50 border border-slate-200/60 rounded-2xl flex items-center justify-center gap-2 transition-all active:scale-95 hover:bg-slate-100 hover:border-slate-300 shadow-sm"
            >
              <MessageCircle size={16} className="text-emerald-600" />
              <span className="text-[9px] font-black uppercase tracking-widest text-slate-700">WhatsApp</span>
            </button>
            <button 
              onClick={() => window.open('https://youtube.com/@apnacollegebihar', '_blank')}
              className="flex-1 py-3.5 bg-slate-50 border border-slate-200/60 rounded-2xl flex items-center justify-center gap-2 transition-all active:scale-95 hover:bg-slate-100 hover:border-slate-300 shadow-sm"
            >
              <Youtube size={16} className="text-red-600" />
              <span className="text-[9px] font-black uppercase tracking-widest text-slate-700">YouTube</span>
            </button>
          </div>
        </div>
      </div>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
