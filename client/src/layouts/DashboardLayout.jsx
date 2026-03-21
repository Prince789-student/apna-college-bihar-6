import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, Book, Calculator, Timer, 
  User, LogOut, Medal, X, Bell, Shield, 
  ChevronLeft, Menu, Users, GraduationCap,
  ClipboardList, Trophy, Globe, Zap, Settings,
  Target, GraduationCap as GraduateIcon, Grid
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { collection, query, orderBy, limit, onSnapshot } from 'firebase/firestore';

export default function DashboardLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout, ROLES } = useAuth();
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [phone, setPhone] = useState('');
  const [isPhoneModalOpen, setPhoneModalOpen] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  // Auto-close mobile menu on navigation
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Mandatory Phone Check
  useEffect(() => {
    if (user && !user.phone) {
      setPhoneModalOpen(true);
    } else {
      setPhoneModalOpen(false);
    }
  }, [user]);

  const { updateProfileData } = useAuth();

  const handlePhoneSubmit = async (e) => {
    e.preventDefault();
    if (phone.length < 10) return;
    setIsUpdating(true);
    try {
      await updateProfileData({ phone });
      setPhoneModalOpen(false);
    } catch (err) { console.error(err); } 
      finally { setIsUpdating(false); }
  };

  const isAdmin = user?.email === 'prince86944@gmail.com' || user?.role === ROLES.SUPER_ADMIN || user?.role === 'admin'; 
  
  const navLinks = [
    { name: 'Dashboard Hub', path: '/dashboard', icon: <LayoutDashboard size={20} /> },
    { name: 'Study Protocol', path: '/dashboard/study', icon: <Timer size={22} className="text-blue-500" /> },
    { name: 'Knowledge Hub', path: '/dashboard/notes', icon: <Book size={20} /> },
    { name: 'Engine (Sci-Calc)', path: '/dashboard/calculator', icon: <Calculator size={20} /> },
    { name: 'Engine (Matrix)', path: '/dashboard/matrix', icon: <Grid size={20} className="text-emerald-400" /> },
    { name: 'BEU Analytics', path: '/dashboard/sgpa', icon: <GraduateIcon size={20} /> },
    { name: 'Task Vector', path: '/dashboard/plan', icon: <ClipboardList size={20} className="text-indigo-400" /> },
    { name: 'Study Network', path: '/dashboard/groups', icon: <Users size={20} className="text-blue-400" /> },
    { name: 'Milestone Archive', path: '/dashboard/achievements', icon: <Trophy size={20} className="text-amber-500" /> },
    ...(isAdmin ? [{ name: 'System Admin', path: '/dashboard/admin', icon: <Shield size={20} className="text-red-500 animate-pulse" /> }] : []),
  ];

  const handleLogout = async () => {
    try { await logout(); navigate('/login'); }
    catch (err) { console.error('Logout failed', err); }
  };

  const SidebarContent = ({ isMobile = false }) => (
    <>
      <div className={`p-8 md:p-10 flex items-center justify-between ${!isSidebarOpen && !isMobile ? 'justify-center' : ''}`}>
        <div className={`flex items-center gap-4 transition-all duration-300 ${(isSidebarOpen || isMobile) ? 'opacity-100 pl-2' : 'opacity-0 w-0 overflow-hidden'}`}>
           <div className="p-3 bg-gradient-to-br from-blue-600 to-indigo-800 rounded-2xl shadow-xl shadow-blue-500/20 shrink-0"><GraduationCap size={24} className="text-white" /></div>
           <div className="min-w-[120px]">
             <span className="text-xl font-[1000] tracking-tighter uppercase text-white block leading-none">ACB PORTAL</span>
             <span className="text-[8px] text-slate-500 font-black uppercase tracking-[0.4em] mt-2 block">Premium Edu Hub</span>
           </div>
        </div>
        {!isMobile && (
          <button onClick={()=>setSidebarOpen(!isSidebarOpen)} className="p-3 bg-slate-900/50 hover:bg-slate-800 border border-slate-800/80 rounded-2xl transition-all ml-2 group">
             <Menu size={18} className={`group-hover:text-blue-500 transition-all ${isSidebarOpen ? 'rotate-180' : ''}`} />
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
              className={`flex items-center gap-4 p-4 rounded-[2rem] transition-all duration-500 group relative ${isActive ? 'bg-blue-600 text-white shadow-2xl shadow-blue-500/40' : 'text-slate-400 hover:bg-slate-800/50 hover:text-white'}`}>
              <div className={`shrink-0 transition-transform group-hover:scale-110 ${isActive ? 'text-white' : 'text-slate-600 group-hover:text-white'}`}>
                {link.icon}
              </div>
              <span className={`text-[10px] font-black uppercase tracking-widest whitespace-nowrap transition-all duration-300 ${(isSidebarOpen || isMobile) ? 'opacity-100 pl-1' : 'opacity-0 w-0 overflow-hidden invisible'}`}>
                {link.name}
              </span>
              {isActive && (
                <div className="absolute left-0 w-1.5 h-6 bg-white rounded-r-3xl" />
              )}
            </Link>
          );
        })}
      </nav>

      <div className="p-8 md:p-10 border-t border-slate-800/50 bg-[#02040a]/50">
        <div className={`flex items-center gap-4 transition-all duration-300 ${(isSidebarOpen || isMobile) ? '' : 'justify-center'}`}>
           {user?.photoURL ? (
             <img src={user.photoURL} alt="Profile" className="w-12 h-12 rounded-2xl border-2 border-slate-800 group-hover:border-blue-500 transition-all shadow-xl" />
           ) : (
             <div className="w-12 h-12 rounded-2xl bg-indigo-600/20 border-2 border-slate-800 flex items-center justify-center text-indigo-400 text-sm font-black uppercase shadow-xl transition-all"><User size={20}/></div>
           )}
           <div className={`min-w-0 transition-all duration-300 ${(isSidebarOpen || isMobile) ? 'opacity-100' : 'opacity-0 w-0 overflow-hidden'}`}>
             <p className="text-[11px] font-[1000] text-white truncate uppercase tracking-tighter">{user?.displayName || 'Identity node'}</p>
             <button onClick={handleLogout} className="text-[8px] text-red-500 font-black uppercase tracking-[0.3em] flex items-center gap-2 mt-2 hover:opacity-70 transition-all"><LogOut size={10}/> TERMINATE SIGNAL</button>
           </div>
        </div>
      </div>
    </>
  );

  return (
    <div className="flex h-screen bg-[#02040a] text-slate-100 overflow-hidden relative font-sans">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-80 h-80 bg-indigo-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Desktop Sidebar */}
      <aside className={`hidden md:flex flex-col bg-[#0d121f] border-r border-slate-800/80 transition-all duration-700 h-full relative z-[50] ${isSidebarOpen ? 'w-80' : 'w-28'}`}>
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar */}
      {isMobileMenuOpen && (
        <aside className="fixed inset-0 z-[100] md:hidden bg-[#0d121f] flex flex-col w-full animate-in slide-in-from-left duration-300">
           <SidebarContent isMobile />
        </aside>
      )}

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden relative z-10 p-4 md:p-8">
        
        {/* Interior Header */}
        <header className="flex items-center justify-between p-6 bg-[#0d121f]/50 backdrop-blur-3xl rounded-[2.5rem] border border-slate-800/80 mb-10 shadow-2xl">
           <div className="flex items-center gap-4">
              <button onClick={() => setMobileMenuOpen(true)} className="md:hidden p-3 bg-slate-900 border border-slate-800 rounded-2xl"><Menu size={20}/></button>
              <div className="hidden md:flex items-center gap-3 px-6 py-2 bg-slate-900/50 border border-slate-800 rounded-full">
                 <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.6)]" />
                 <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Signal Locked: Beta-Sector 7</span>
              </div>
           </div>
           
           <div className="flex items-center gap-6">
              <div className="flex -space-x-3 items-center group cursor-pointer hover:scale-105 transition-transform">
                 <div className="w-8 h-8 rounded-full border-2 border-[#02040a] bg-blue-600 flex items-center justify-center text-[10px] font-black">A</div>
                 <div className="w-8 h-8 rounded-full border-2 border-[#02040a] bg-indigo-600 flex items-center justify-center text-[10px] font-black">B</div>
                 <div className="w-8 h-8 rounded-full border-2 border-[#02040a] bg-emerald-600 flex items-center justify-center text-[10px] font-black">+</div>
                 <span className="pl-6 text-[9px] font-black text-slate-500 uppercase tracking-widest">Nodes Online</span>
              </div>
              <div className="p-3 bg-slate-900 border border-slate-800 rounded-2xl text-slate-500 relative cursor-pointer hover:border-slate-600 hover:text-white transition-all">
                 <Bell size={20}/>
                 <div className="absolute top-3 right-3 w-1.5 h-1.5 bg-red-500 rounded-full border-2 border-[#1c263d]" />
              </div>
           </div>
        </header>

        {/* Scrollable Page View */}
        <div className="flex-1 overflow-y-auto custom-scrollbar px-2">
           <Outlet />
        </div>
      </main>

      {/* Mandatory Phone Modal (Premium Style) */}
      {isPhoneModalOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-[#02040a]/80 backdrop-blur-xl">
           <div className="w-full max-w-lg bg-[#0d121f] border border-slate-800 rounded-[4rem] p-12 md:p-16 shadow-2xl relative overflow-hidden animate-in zoom-in-95 duration-500 text-center space-y-10">
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-600/10 rounded-full blur-[80px]"></div>
              <div className="w-20 h-20 bg-blue-600/10 text-blue-500 rounded-3xl flex items-center justify-center mx-auto border border-blue-500/20"><User size={40}/></div>
              <div className="space-y-4">
                 <h2 className="text-4xl font-[1000] text-white tracking-tighter uppercase leading-none">Identity Check</h2>
                 <p className="text-[10px] text-slate-500 font-extrabold uppercase tracking-widest">Protocol Delta Required For Hub Access</p>
              </div>
              <p className="text-[11px] text-slate-400 font-bold uppercase leading-loose tracking-tight px-4">Attention node, please verify your mobile coordinates to synchronize with the Bihar Central Operations Hub.</p>
              
              <form onSubmit={handlePhoneSubmit} className="space-y-6">
                 <input
                   type="text" required maxLength={10} value={phone} onChange={e=>setPhone(e.target.value.replace(/\D/g,''))}
                   placeholder="+91 MOBILE SIGNAL..."
                   className="w-full bg-[#1c263d] border-2 border-transparent focus:border-blue-500/50 rounded-2xl p-6 text-white text-center text-xl font-black tracking-[0.2em] outline-none shadow-xl transition-all"
                 />
                 <div className="flex flex-col gap-3">
                    <button type="submit" disabled={isUpdating || phone.length < 10} className="w-full py-6 bg-blue-600 hover:bg-blue-500 disabled:opacity-40 text-white rounded-3xl font-[1000] text-xs uppercase tracking-widest shadow-xl shadow-blue-900/40 active:scale-95 transition-all">Synchronize Node</button>
                    <button type="button" onClick={() => setPhoneModalOpen(false)} className="w-full py-3 text-[9px] font-black text-slate-600 hover:text-white uppercase tracking-widest transition-all">Bypass Identity Protocol</button>
                  </div>
              </form>
           </div>
        </div>
      )}
    </div>
  );
}
