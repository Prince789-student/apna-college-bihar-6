const fs = require('fs');

const notificationsCode = fs.readFileSync('client/notifications_code.txt', 'utf8');

const code = `import React, { useState, useEffect } from 'react';
import { Outlet, useLocation, useNavigate, Link } from 'react-router-dom';
import { ChevronLeft, Shield, Timer, X, LayoutDashboard, Library, BookOpen, Calendar, Clock, FileText, GraduationCap, Calculator, User, LogOut, Menu, UserCheck, Flame, Send, Search } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useStudy } from '../context/StudyContext';
import { Capacitor } from '@capacitor/core';
import { getToken } from 'firebase/messaging';
import { doc, updateDoc, collection, query, where, onSnapshot, getDocs } from 'firebase/firestore';
import { messaging, VAPID_KEY, db } from '../firebase';
import SEO from '../components/SEO';
import { toast } from 'react-hot-toast';

export default function DashboardLayout() {
  const isNative = Capacitor.isNativePlatform();
  const location = useLocation();
  const navigate = useNavigate();
  const { user, updateProfileData, logout } = useAuth();
  const [phone, setPhone] = useState('');
  const [isPhoneModalOpen, setPhoneModalOpen] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const { timerActive } = useStudy();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

${notificationsCode}

  const handlePhoneSubmit = async (e) => {
    e.preventDefault();
    if (phone.length < 10) return;
    setIsUpdating(true);
    try { await updateProfileData({ phone }); setPhoneModalOpen(false); }
    catch (err) { console.error(err); } finally { setIsUpdating(false); }
  };

  const FloatingTimer = () => {
    const { timerActive, timerTime } = useStudy();
    const [isMinimized, setIsMinimized] = useState(false);
    if (!timerActive || location.pathname === '/study') return null;
    const m = Math.floor((timerTime % 3600) / 60);
    const sec = timerTime % 60;
    return (
      <div className={\`fixed bottom-24 right-6 md:bottom-10 md:right-10 z-[100] transition-all duration-500 transform \${isMinimized ? 'translate-x-[70%]' : ''}\`}>
        <div className="bg-slate-900 border border-slate-700 p-1.5 rounded-[2rem] shadow-2xl flex items-center gap-4 group">
          <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center animate-pulse"><Timer size={20} className="text-white" /></div>
          <div className={\`flex items-center gap-4 pr-6 \${isMinimized ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100'}\`}>
            <div><p className="text-[8px] font-black text-blue-400 uppercase tracking-widest leading-none mb-1">Live Focus</p><p className="text-xl font-black text-white tabular-nums tracking-tighter">{m.toString().padStart(2, '0')}:{sec.toString().padStart(2, '0')}</p></div>
            <button onClick={() => navigate('/study')} className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl text-white text-[9px] font-black uppercase tracking-widest">Resume</button>
          </div>
          <button onClick={() => setIsMinimized(!isMinimized)} className="p-2 text-slate-500 hover:text-white">{isMinimized ? <ChevronLeft size={16} /> : <X size={16} />}</button>
        </div>
      </div>
    );
  };

  const getPageTitle = (pathname) => {
    if (pathname === '/') return 'Home';
    if (pathname.includes('/study-resources')) return 'Study Resources';
    if (pathname.includes('/study')) return 'Study Zone';
    if (pathname.includes('/notes')) return 'B.Tech Notes';
    if (pathname.includes('/pyq')) return 'PYQ Papers';
    if (pathname.includes('/syllabus')) return 'BEU Syllabus';
    if (pathname.includes('/cgpa')) return 'CGPA Calculator';
    if (pathname.includes('/ugeac-predictor')) return 'UGEAC Predictor';
    if (pathname.includes('/calculator')) return 'Calculator';
    if (pathname.includes('/achievements')) return 'Achievements';
    if (pathname.includes('/groups')) return 'Study Groups';
    if (pathname.includes('/timetable')) return 'BEU Timetable';
    if (pathname.includes('/attendance')) return 'BEU Attendance Tracker';
    if (pathname.includes('/extras')) return 'Personal Manager';
    if (pathname.includes('/calendar')) return 'Calendar';
    if (pathname.includes('/beu-result')) return 'BEU Result';
    if (pathname.includes('/admin')) return 'Admin Panel';
    return 'ACB Hub';
  };
  const pageTitle = getPageTitle(location.pathname);

  const NavItem = ({ to, icon: Icon, label }) => {
    const isActive = location.pathname === to || (to !== '/' && location.pathname.startsWith(to));
    return (
      <Link 
        to={to} 
        onClick={() => setMobileMenuOpen(false)}
        className={\`flex items-center gap-2 px-3 py-2 rounded-xl transition-all font-bold \${isActive ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'}\`}
      >
        <Icon size={16} className={\`\${isActive ? 'text-white' : 'text-slate-400'}\`} />
        <span className="text-[11px] uppercase tracking-wider font-black">{label}</span>
      </Link>
    );
  };

  const MobileMenuLink = ({ to, icon: Icon, label }) => {
    const isActive = location.pathname === to || (to !== '/' && location.pathname.startsWith(to));
    return (
      <Link 
        to={to} 
        onClick={() => setMobileMenuOpen(false)}
        className={\`flex items-center gap-3 px-4 py-3 rounded-2xl transition-all font-bold \${isActive ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'}\`}
      >
        <Icon size={18} className={\`\${isActive ? 'text-white' : 'text-slate-400'}\`} />
        <span className="text-[12px] uppercase tracking-wider font-black">{label}</span>
      </Link>
    );
  }

  const BottomNavItem = ({ to, icon: Icon, label }) => {
    const isActive = location.pathname === to || (to !== '/' && location.pathname.startsWith(to));
    return (
      <Link 
        to={to} 
        className="flex flex-col items-center justify-center gap-1 flex-1 py-2"
      >
        <div className={\`p-1.5 rounded-xl transition-all \${isActive ? 'bg-blue-100 text-blue-600' : 'text-slate-400'}\`}>
          <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
        </div>
        <span className={\`text-[8px] font-black uppercase tracking-widest \${isActive ? 'text-blue-600' : 'text-slate-400'}\`}>{label}</span>
      </Link>
    );
  };

  return (
    <div className="flex flex-col h-screen bg-[#f8fafc] overflow-hidden text-slate-900 font-['Inter'] selection:bg-blue-500/30 relative">
      <SEO title={pageTitle} />

      {/* Top Header Navigation (Desktop) & Top Bar (Mobile) */}
      <header className="bg-white border-b border-slate-200 shadow-sm z-[200] shrink-0 sticky top-0">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <img src="/logo-acb.png?v=99" alt="Logo" className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl object-cover shadow-sm" />
            <div className="block">
              <span className="text-sm md:text-lg font-[1000] tracking-tighter uppercase text-slate-900 block leading-none">Apna College Bihar</span>
              <span className="text-[6px] md:text-[7px] text-blue-500 font-bold uppercase tracking-[0.3em] md:tracking-[0.5em] mt-0.5 md:mt-1 block">Official App</span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-2 xl:gap-4">
            <NavItem to="/" icon={LayoutDashboard} label="Home" />
            <NavItem to="/timetable" icon={Calendar} label="Timetable" />
            <NavItem to="/syllabus" icon={Library} label="Syllabus" />
            <NavItem to="/notes" icon={BookOpen} label="Notes" />
            <NavItem to="/cgpa" icon={GraduationCap} label="CGPA" />
            <NavItem to="/study" icon={Timer} label="Study" />
          </nav>

          {/* User Profile & Actions */}
          <div className="flex items-center gap-3">
            {/* Desktop Only Extra Tools Button or Status */}
            <div className="hidden lg:flex items-center gap-3 border-l border-slate-200 pl-4 ml-2">
              <div className="text-right mr-2">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-900 leading-none">{user?.name !== 'Scholar' ? user?.name : 'Student'}</p>
                <p className="text-[8px] font-bold text-slate-400 mt-1">{user?.email}</p>
              </div>
              <div className="w-10 h-10 bg-slate-100 rounded-xl overflow-hidden shadow-sm border border-slate-200">
                <img src="/logo-acb.png?v=99" alt="Profile" className="w-full h-full object-cover" />
              </div>
              <button onClick={() => logout()} className="p-2.5 bg-slate-50 hover:bg-red-50 text-slate-400 hover:text-red-500 rounded-xl transition-all" title="Logout">
                <LogOut size={16} strokeWidth={2.5} />
              </button>
            </div>
            
            {/* Mobile Title Badge */}
            <div className="lg:hidden">
               <span className="text-xs font-[1000] tracking-tighter uppercase text-slate-900 bg-slate-100 px-3 py-1.5 rounded-lg">{pageTitle}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto custom-scrollbar relative z-10 bg-slate-50/50">
        <div className="w-full h-full pb-24 lg:pb-8 p-4 md:p-6 lg:p-8 max-w-7xl mx-auto">
          <Outlet />
        </div>
      </main>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-[250] lg:hidden" onClick={() => setMobileMenuOpen(false)} />
      )}

      {/* Mobile Sidebar/Drawer (Slide from right) */}
      <aside className={\`fixed inset-y-0 right-0 w-64 bg-white border-l border-slate-200 shadow-2xl z-[300] transform transition-transform duration-300 ease-in-out flex flex-col lg:hidden \${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}\`}>
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100">
          <span className="text-sm font-[1000] tracking-tighter uppercase text-slate-900 block leading-none">More Tools</span>
          <button onClick={() => setMobileMenuOpen(false)} className="text-slate-400 hover:text-slate-900">
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-4 px-3 space-y-6 custom-scrollbar">
          <div>
            <p className="px-4 text-[9px] font-black text-slate-400 uppercase tracking-widest mb-2">Study Engine</p>
            <div className="space-y-1">
              <MobileMenuLink to="/syllabus" icon={Library} label="Syllabus" />
              <MobileMenuLink to="/notes" icon={BookOpen} label="B.Tech Notes" />
              <MobileMenuLink to="/pyq" icon={FileText} label="PYQ Papers" />
            </div>
          </div>

          <div>
            <p className="px-4 text-[9px] font-black text-slate-400 uppercase tracking-widest mb-2">Tools & Utilities</p>
            <div className="space-y-1">
              <MobileMenuLink to="/cgpa" icon={GraduationCap} label="CGPA Calc" />
              <MobileMenuLink to="/study" icon={Timer} label="Study Timer" />
              <MobileMenuLink to="/calculator" icon={Calculator} label="Calculator" />
              <MobileMenuLink to="/ugeac-predictor" icon={Send} label="UGEAC Predictor" />
              <MobileMenuLink to="/attendance" icon={UserCheck} label="Attendance" />
            </div>
          </div>
        </div>

        <div className="p-4 border-t border-slate-100">
          <button onClick={() => logout()} className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-slate-50 hover:bg-red-50 text-slate-600 hover:text-red-600 rounded-2xl transition-all font-black uppercase text-[10px] tracking-widest">
            <LogOut size={16} /> Logout Session
          </button>
        </div>
      </aside>
      
      {/* Verification Modal */}
      {isPhoneModalOpen && isOnline && <div className="fixed inset-0 z-[400] flex items-center justify-center p-6 bg-slate-50/80 backdrop-blur-xl"><div className="w-full max-w-md bg-white border border-slate-200 rounded-[3rem] p-10 text-center space-y-8 shadow-2xl relative overflow-hidden"><div className="inline-flex p-5 bg-blue-600/20 text-blue-500 rounded-3xl"><Shield size={32} /></div><h2 className="text-2xl font-[1000] text-slate-900 uppercase tracking-tighter">Security Update</h2><p className="text-slate-500 text-sm">Please link your active mobile number to secure your college portal access.</p><form onSubmit={handlePhoneSubmit} className="space-y-6"><div className="flex gap-2"><div className="bg-slate-100 px-4 py-4 rounded-2xl text-xs font-black">+91</div><input type="tel" maxLength={10} value={phone} onChange={(e) => setPhone(e.target.value.replace(/\\D/g, ''))} placeholder="10-DIGIT MOBILE NO." className="flex-1 bg-slate-100 rounded-2xl p-4 text-sm font-black outline-none" /></div><button type="submit" className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-widest transition-all">Save & Continue</button></form></div></div>}

      <FloatingTimer />

      {/* Mobile Bottom Navigation Bar */}
      <nav className="lg:hidden fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-xl border-t border-slate-200 pb-safe z-[150] flex items-center justify-around px-2 shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
         <BottomNavItem to="/" icon={LayoutDashboard} label="Home" />
         <BottomNavItem to="/timetable" icon={Calendar} label="Time" />
         <BottomNavItem to="/syllabus" icon={Library} label="Syllabus" />
         <BottomNavItem to="/notes" icon={BookOpen} label="Notes" />
         <button onClick={() => setMobileMenuOpen(true)} className="flex flex-col items-center justify-center gap-1 flex-1 py-2 text-slate-400 hover:text-slate-900">
            <div className="p-1.5 rounded-xl transition-all">
              <Menu size={20} strokeWidth={2} />
            </div>
            <span className="text-[8px] font-black uppercase tracking-widest">Menu</span>
         </button>
      </nav>
    </div>
  );
}
`;

fs.writeFileSync('client/src/layouts/DashboardLayout.jsx', code);
