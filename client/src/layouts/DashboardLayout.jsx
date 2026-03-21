import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, Book, Calculator, Timer, 
  User, LogOut, Medal, X, Bell, Shield, 
  ChevronLeft, Menu, Users, GraduationCap
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { collection, query, orderBy, limit, onSnapshot } from 'firebase/firestore';

const ANN_STYLE = {
  info:    { bar: 'bg-blue-600',    bg: 'bg-blue-950/80 border-blue-500/30',    text: 'text-blue-300'    },
  success: { bar: 'bg-emerald-500', bg: 'bg-emerald-950/80 border-emerald-500/30', text: 'text-emerald-300' },
  warning: { bar: 'bg-amber-500',   bg: 'bg-amber-950/80 border-amber-500/30',  text: 'text-amber-300'   },
  danger:  { bar: 'bg-red-500',     bg: 'bg-red-950/80 border-red-500/30',      text: 'text-red-300'     },
};

export default function DashboardLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout, ROLES } = useAuth();
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Auto-close mobile menu on navigation
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const isAdmin = user?.email === 'prince86944@gmail.com' || user?.role === ROLES.SUPER_ADMIN; 
  const navLinks = [
    { name: 'Study Protocol', path: '/dashboard/study', icon: <Timer size={22} className="text-blue-500" /> },
    { name: 'Notes & PYQ', path: '/dashboard/notes', icon: <Book size={20} /> },
    { name: 'Scientific Calc', path: '/dashboard/calculator', icon: <Calculator size={20} /> },
    { name: 'BEU CGPA', path: '/dashboard/cgpa', icon: <GraduationCap size={20} /> },
    ...(isAdmin ? [{ name: 'Admin Operations', path: '/dashboard/admin', icon: <Shield size={20} className="text-red-500" /> }] : []),
  ];

  const handleLogout = async () => {
    try { await logout(); navigate('/login'); }
    catch (err) { console.error('Logout failed', err); }
  };

  const SidebarContent = ({ isMobile = false }) => (
    <>
      <div className={`p-8 md:p-10 flex items-center justify-between ${!isSidebarOpen && !isMobile ? 'justify-center' : ''}`}>
        <div className={`flex items-center gap-4 transition-all duration-300 ${(isSidebarOpen || isMobile) ? 'opacity-100' : 'opacity-0 w-0 overflow-hidden'}`}>
           <div className="p-3 bg-blue-600 rounded-2xl shadow-lg shadow-blue-500/20 shrink-0"><GraduationCap size={24} className="text-white" /></div>
           <div className="min-w-[120px]">
             <span className="text-xl font-[1000] tracking-tighter uppercase text-white block leading-none">ACB PORTAL</span>
             <span className="text-[8px] text-slate-500 font-black uppercase tracking-[0.4em] mt-2 block">Premium Edu Hub</span>
           </div>
        </div>
        {!isMobile && (
          <button onClick={()=>setSidebarOpen(!isSidebarOpen)} className="p-2.5 bg-slate-900/50 hover:bg-slate-800 border border-slate-800/80 rounded-xl transition-all ml-2">
             <Menu size={18} className={isSidebarOpen ? 'rotate-180 transition-transform' : ''} />
          </button>
        )}
        {isMobile && (
          <button onClick={()=>setMobileMenuOpen(false)} className="p-2 text-slate-500 hover:text-white">
            <X size={24} />
          </button>
        )}
      </div>

      <nav className="flex-1 px-4 md:px-6 space-y-2 mt-6 overflow-y-auto custom-scrollbar">
        {navLinks.map((link) => {
          const isActive = location.pathname === link.path;
          return (
            <Link key={link.name} to={link.path}
              className={`flex items-center gap-4 p-4 rounded-[1.8rem] transition-all duration-300 group relative ${isActive ? 'bg-blue-600 text-white shadow-xl shadow-blue-500/30' : 'text-slate-400 hover:bg-slate-800/50 hover:text-white'}`}>
              <div className={`${isActive ? 'scale-110' : 'group-hover:scale-125'} transition-transform shrink-0`}>{link.icon}</div>
              <span className={`font-black text-[10px] uppercase tracking-widest transition-all duration-300 ${(isSidebarOpen || isMobile) ? 'opacity-100' : 'opacity-0 w-0 overflow-hidden'}`}>
                {link.name}
              </span>
              {isActive && (isSidebarOpen || isMobile) && <div className="absolute right-6 w-1 h-1 bg-white rounded-full animate-pulse shadow-[0_0_10px_white]" />}
            </Link>
          );
        })}
      </nav>

      <div className="p-6 md:p-8 border-t border-slate-800/50">
         {(isSidebarOpen || isMobile) ? (
           <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 bg-[#162035] rounded-[2rem] border border-slate-700/30">
                 <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-700 flex items-center justify-center font-[1000] text-white shadow-lg shrink-0">
                    {user?.name?.[0]?.toUpperCase()}
                 </div>
                 <div className="flex-1 min-w-0">
                    <p className="text-[10px] font-black text-white uppercase tracking-tighter truncate">{user?.name || 'Scholar'}</p>
                    <p className="text-[8px] font-bold text-slate-500 uppercase tracking-widest mt-0.5">{user?.role || 'Verified'}</p>
                 </div>
              </div>
              <button onClick={handleLogout} className="w-full flex items-center justify-center gap-3 p-4 bg-red-600/10 hover:bg-red-600 text-red-500 hover:text-white border border-red-500/20 rounded-[1.5rem] font-black text-[9px] uppercase tracking-widest transition-all group active:scale-95">
                <LogOut size={16} /> <span>Terminate Hub</span>
              </button>
           </div>
         ) : (
           <button onClick={handleLogout} className="w-full flex items-center justify-center p-4 bg-red-600/10 hover:bg-red-600 text-red-500 hover:text-white rounded-[1.5rem] border border-red-500/20 transition-all">
              <LogOut size={18} />
           </button>
         )}
      </div>
    </>
  );

  return (
    <div className="flex h-screen bg-[#02040a] overflow-hidden text-white font-['Inter'] selection:bg-blue-500/30">
      
      {/* ── Desktop Sidebar ── */}
      <aside className={`hidden md:flex flex-col bg-[#0d121f] border-r border-slate-800/80 transition-all duration-500 shadow-2xl relative z-40 ${isSidebarOpen ? 'w-80' : 'w-24'}`}>
        <SidebarContent />
      </aside>

      {/* ── Mobile Drawer ── */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] md:hidden">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
          <aside className="absolute top-0 left-0 h-full w-[280px] bg-[#0d121f] shadow-2xl flex flex-col animate-in slide-in-from-left duration-300">
            <SidebarContent isMobile />
          </aside>
        </div>
      )}

      {/* ── Main Display ── */}
      <main className="flex-1 flex flex-col h-full bg-[#02040a] relative overflow-hidden">
        
        {/* Mobile Navbar Header */}
        <div className="md:hidden flex items-center justify-between p-4 bg-[#0d121f] border-b border-slate-800/80 sticky top-0 z-30">
          <div className="flex items-center gap-3">
             <div className="p-2 bg-blue-600 rounded-lg shadow-lg shadow-blue-500/20"><GraduationCap size={18} className="text-white" /></div>
             <span className="text-sm font-[1000] tracking-tighter uppercase text-white leading-none">ACB PORTAL</span>
          </div>
          <button onClick={() => setMobileMenuOpen(true)} className="p-2.5 bg-slate-900/50 border border-slate-800 rounded-xl">
             <Menu size={20} />
          </button>
        </div>

        {/* Scrollable Area */}
        <div className="flex-1 overflow-y-auto custom-scrollbar relative z-10 p-5 md:p-14 lg:p-20">
           <Outlet />
        </div>

        {/* Global Blur Orbs */}
        <div className="fixed top-[-20%] right-[-10%] w-[1000px] h-[1000px] bg-blue-600/5 rounded-full blur-[200px] pointer-events-none -z-10"></div>
        <div className="fixed bottom-[-10%] left-[-10%] w-[800px] h-[800px] bg-indigo-600/5 rounded-full blur-[150px] pointer-events-none -z-10"></div>

      </main>
    </div>
  );
}
