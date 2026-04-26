import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, Book, Calculator, Timer, 
  User, LogOut, Medal, X, Bell, Shield, 
  ChevronLeft, Menu, Users, GraduationCap, Send, Youtube,
  Maximize2, ArrowRight, AlertTriangle
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { collection, query, orderBy, limit, onSnapshot } from 'firebase/firestore';
import PremiumAds from '../components/PremiumAds';
import { useStudy } from '../context/StudyContext';

export default function DashboardLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout, ROLES, updateProfileData } = useAuth();
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [phone, setPhone] = useState('');
  const [isPhoneModalOpen, setPhoneModalOpen] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const { timerActive, focusBroken, setFocusBroken } = useStudy();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const isAppMode = localStorage.getItem('isAppMode') === 'true';

  useEffect(() => {
    if (user && !user.phone) setPhoneModalOpen(true);
    else setPhoneModalOpen(false);
  }, [user]);

  const handlePhoneSubmit = async (e) => {
    e.preventDefault();
    if (phone.length < 10) return;
    setIsUpdating(true);
    try { await updateProfileData({ phone }); setPhoneModalOpen(false); }
    catch (err) { console.error(err); } finally { setIsUpdating(false); }
  };

  const isAdmin = user?.email === 'prince86944@gmail.com' || user?.role === ROLES.SUPER_ADMIN; 
  const navLinks = [
    { name: 'Study Protocol', path: '/dashboard/study', icon: <Timer size={22} className="text-blue-500" /> },
    { name: 'Study Network', path: '/dashboard/groups', icon: <Users size={20} className="text-orange-500" /> },
    { name: 'Notes & PYQ', path: '/dashboard/notes', icon: <Book size={20} /> },
    { name: 'Scientific Calc', path: '/dashboard/calculator', icon: <Calculator size={20} /> },
    { name: 'BEU CGPA', path: '/dashboard/cgpa', icon: <GraduationCap size={20} /> },
    { name: 'UGEAC COUNSELLING', path: '/dashboard/ugeac-predictor', icon: <Send size={20} className="text-emerald-500" /> },
    ...(isAdmin ? [{ name: 'Admin Operations', path: '/dashboard/admin', icon: <Shield size={20} className="text-red-500" /> }] : []),
  ];

  const handleLogout = async () => {
    try { await logout(); navigate('/login'); }
    catch (err) { console.error('Logout failed', err); }
  };

  const FloatingTimer = () => {
    const { timerActive, timerTime } = useStudy();
    const [isMinimized, setIsMinimized] = useState(false);
    if (!timerActive || location.pathname === '/dashboard/study') return null;
    const m = Math.floor((timerTime % 3600) / 60);
    const sec = timerTime % 60;
    return (
      <div className={`fixed bottom-24 right-6 md:bottom-10 md:right-10 z-[100] transition-all duration-500 transform ${isMinimized ? 'translate-x-[70%]' : ''}`}>
        <div className="bg-slate-900 border border-slate-700 p-1.5 rounded-[2rem] shadow-2xl flex items-center gap-4 group">
          <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center animate-pulse"><Timer size={20} className="text-white" /></div>
          <div className={`flex items-center gap-4 pr-6 ${isMinimized ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100'}`}>
            <div><p className="text-[8px] font-black text-blue-400 uppercase tracking-widest leading-none mb-1">Live Focus</p><p className="text-xl font-black text-white tabular-nums tracking-tighter">{m.toString().padStart(2, '0')}:{sec.toString().padStart(2, '0')}</p></div>
            <button onClick={() => navigate('/dashboard/study')} className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl text-white text-[9px] font-black uppercase tracking-widest">Resume</button>
          </div>
          <button onClick={() => setIsMinimized(!isMinimized)} className="p-2 text-slate-500 hover:text-white">{isMinimized ? <ChevronLeft size={16} /> : <X size={16} />}</button>
        </div>
      </div>
    );
  };

  const SidebarContent = ({ isMobile = false }) => (
    <>
      <div className={`p-3 md:p-4 flex items-center justify-between ${!isSidebarOpen && !isMobile ? 'justify-center' : ''}`}>
        <div className={`flex items-center gap-2 transition-all duration-300 ${(isSidebarOpen || isMobile) ? 'opacity-100' : 'opacity-0 w-0 overflow-hidden'}`}><img src="/logo.jpg" alt="Logo" className="w-8 h-8 rounded-lg" /><div className="min-w-[100px]"><span className="text-sm font-[1000] tracking-tighter uppercase text-slate-900 block leading-none">APNA COLLEGE BIHAR</span><span className="text-[6px] text-slate-500 font-black uppercase tracking-[0.3em] mt-1 block">Bihar Official</span></div></div>
        {!isMobile && <button onClick={()=>setSidebarOpen(!isSidebarOpen)} className="p-2.5 bg-slate-100/50 rounded-xl transition-all ml-2"><Menu size={18} /></button>}
        {isMobile && <button onClick={()=>setMobileMenuOpen(false)} className="p-2 text-slate-500"><X size={24} /></button>}
      </div>
      <nav className="flex-1 px-4 md:px-6 space-y-2 mt-6 overflow-y-auto custom-scrollbar">
        {navLinks.map((link) => {
          const isActive = location.pathname === link.path;
          return (
            <Link key={link.name} to={link.path} className={`flex items-center gap-3 p-3 md:p-2.5 rounded-2xl transition-all group relative ${isActive ? 'bg-blue-600 text-white shadow-xl shadow-blue-500/30' : 'text-slate-500 hover:bg-slate-100/50 hover:text-slate-900'}`}>
              <div className="shrink-0">{link.icon}</div>
              <span className={`font-black text-[10px] md:text-[9px] uppercase tracking-widest transition-all ${(isSidebarOpen || isMobile) ? 'opacity-100' : 'opacity-0 w-0 overflow-hidden'}`}>{link.name}</span>
              {isActive && (isSidebarOpen || isMobile) && !timerActive && <div className="absolute right-4 w-1.5 h-1.5 bg-white rounded-full animate-pulse shadow-[0_0_10px_white]" />}
            </Link>
          );
        })}
      </nav>
      <div className="p-6 md:p-8 border-t border-slate-200/50 mt-auto">
         {user ? <button onClick={handleLogout} className="w-full flex items-center justify-center gap-2 p-4 bg-red-600/10 hover:bg-red-600 text-red-500 hover:text-white rounded-xl font-black text-[9px] uppercase tracking-widest transition-all"><LogOut size={14} /> {(isSidebarOpen || isMobile) && <span>Terminate Hub</span>}</button> : <Link to="/login" className="w-full flex items-center justify-center gap-3 p-4 bg-blue-600 text-white rounded-xl font-black text-[10px] uppercase tracking-widest"><User size={16} /> Student Login</Link>}
      </div>
    </>
  );

  return (
    <div className="flex h-full bg-white overflow-hidden text-slate-900 font-['Inter'] selection:bg-blue-500/30">
      {!isAppMode && <aside className={`hidden md:flex flex-col bg-white border-r border-slate-200/80 transition-all duration-500 shadow-2xl relative z-40 ${isSidebarOpen ? 'w-64' : 'w-20'}`}><SidebarContent /></aside>}
      {isMobileMenuOpen && <div className="fixed inset-0 z-[100] md:hidden"><div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} /><aside className="absolute top-0 left-0 h-full w-[85%] max-w-[320px] bg-white shadow-2xl flex flex-col"><SidebarContent isMobile /></aside></div>}
      <main className="flex-1 flex flex-col min-h-0 h-full bg-white relative overflow-hidden">
        {!isAppMode && <div className="md:hidden flex items-center justify-between px-5 py-3 bg-white border-b border-slate-200/80 sticky top-0 z-30"><div className="flex items-center gap-2"><img src="/logo.jpg" alt="Logo" className="w-8 h-8 rounded-lg" /><span className="text-[10px] font-black tracking-tighter uppercase text-slate-900 leading-none">APNA COLLEGE BIHAR</span></div><button onClick={() => setMobileMenuOpen(true)} className="p-2.5 bg-slate-100 border border-slate-200 rounded-xl relative"><Menu size={20} /></button></div>}
        <div className={`flex-1 overflow-y-auto min-h-0 custom-scrollbar relative z-10 pb-32 ${isAppMode ? 'p-3' : 'p-4 md:p-6 lg:p-8'}`}>
           <div className="min-h-[80vh]"><Outlet /></div>
           {!isAppMode && <footer className="mt-10 py-12 border-t border-slate-200/30 flex flex-col items-center justify-center gap-8 opacity-70"><div className="flex flex-col items-center gap-1.5"><p className="text-[11px] font-[1000] uppercase tracking-[0.4em] text-slate-900">Apna College Bihar</p><p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">© 2026 Official Study Engine</p></div><div className="flex flex-wrap items-center justify-center gap-x-8 px-6"><Link to="/about" className="text-[10px] font-black uppercase text-slate-500">About Us</Link><Link to="/contact" className="text-[10px] font-black uppercase text-slate-500">Contact Us</Link></div><div className="flex items-center gap-2"><div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_#10b981]"></div><span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-600">Secure & Operational</span></div></footer>}
        </div>
        
        {/* Verification Modal */}
        {isPhoneModalOpen && <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-slate-50/80 backdrop-blur-xl"><div className="w-full max-w-md bg-white border border-slate-200 rounded-[3rem] p-10 text-center space-y-8 shadow-2xl relative overflow-hidden"><div className="inline-flex p-5 bg-blue-600/20 text-blue-500 rounded-3xl"><Shield size={32} /></div><h2 className="text-2xl font-[1000] text-slate-900 uppercase tracking-tighter">Security Update</h2><form onSubmit={handlePhoneSubmit} className="space-y-6"><div className="flex gap-2"><div className="bg-slate-100 px-4 py-4 rounded-2xl text-xs font-black">+91</div><input type="tel" maxLength={10} value={phone} onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))} placeholder="9XXXXXXXXX" className="flex-1 bg-slate-100 rounded-2xl p-4 text-sm font-black outline-none" /></div><button type="submit" className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-widest transition-all">Secure Access</button></form></div></div>}



        <FloatingTimer />
      </main>
    </div>
  );
}
