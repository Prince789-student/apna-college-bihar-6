import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, Book, Calculator, Timer, 
  User, LogOut, Medal, X, Bell, Shield, 
  ChevronLeft, Menu, Users, GraduationCap, Send, Youtube
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { collection, query, orderBy, limit, onSnapshot } from 'firebase/firestore';
import PremiumAds from '../components/PremiumAds';

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
  const [phone, setPhone] = useState('');
  const [isPhoneModalOpen, setPhoneModalOpen] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  // Safe Platform Detection
  const isAppMode = (() => {
    try { return localStorage.getItem('isAppMode') === 'true'; }
    catch { return false; }
  })();

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
    } catch (err) {
      console.error(err);
    } finally {
      setIsUpdating(false);
    }
  };

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
      <div className={`p-3 md:p-4 flex items-center justify-between ${!isSidebarOpen && !isMobile ? 'justify-center' : ''}`}>
        <div className={`flex items-center gap-2 transition-all duration-300 ${(isSidebarOpen || isMobile) ? 'opacity-100' : 'opacity-0 w-0 overflow-hidden'}`}>
           <img src="/logo.jpg" alt="Logo" className="w-8 h-8 rounded-lg" />
           <div className="min-w-[100px]">
             <span className="text-sm font-[1000] tracking-tighter uppercase text-slate-900 block leading-none">APNA COLLEGE BIHAR</span>
             <span className="text-[6px] text-slate-500 font-black uppercase tracking-[0.3em] mt-1 block">Official Website</span>
           </div>
        </div>
        {!isMobile && (
          <button onClick={()=>setSidebarOpen(!isSidebarOpen)} className="p-2.5 bg-slate-100/50 hover:bg-slate-100 border border-slate-200/80 rounded-xl transition-all ml-2">
             <Menu size={18} className={isSidebarOpen ? 'rotate-180 transition-transform' : ''} />
          </button>
        )}
        {isMobile && (
          <button onClick={()=>setMobileMenuOpen(false)} className="p-2 text-slate-500 hover:text-slate-900">
            <X size={24} />
          </button>
        )}
      </div>

      <nav className="flex-1 px-4 md:px-6 space-y-2 mt-6 overflow-y-auto custom-scrollbar">
        {navLinks.map((link) => {
          const isActive = location.pathname === link.path;
          return (
            <Link key={link.name} to={link.path}
              className={`flex items-center gap-3 p-3 rounded-2xl transition-all duration-300 group relative ${isActive ? 'bg-blue-600 text-slate-900 shadow-xl shadow-blue-500/30' : 'text-slate-500 hover:bg-slate-100/50 hover:text-slate-900'}`}>
              <div className={`${isActive ? 'scale-110' : 'group-hover:scale-110'} transition-transform shrink-0`}>{link.icon}</div>
              <span className={`font-black text-[9px] uppercase tracking-widest transition-all duration-300 ${(isSidebarOpen || isMobile) ? 'opacity-100' : 'opacity-0 w-0 overflow-hidden'}`}>
                {link.name}
              </span>
              {isActive && (isSidebarOpen || isMobile) && <div className="absolute right-4 w-1 h-1 bg-white rounded-full animate-pulse shadow-[0_0_10px_white]" />}
            </Link>
          );
        })}

        {/* Sidebar Mini Ad */}
        {(isSidebarOpen || isMobile) && (
          <div className="pt-6 px-2">
             <PremiumAds type="SIDEBAR" />
          </div>
        )}
      </nav>

      <div className="p-6 md:p-8 border-t border-slate-200/50">
         {user ? (
           (isSidebarOpen || isMobile) ? (
             <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-[2rem] border border-slate-300/30">
                   <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-700 flex items-center justify-center font-[1000] text-slate-900 shadow-lg shrink-0">
                      {user?.name?.[0]?.toUpperCase()}
                   </div>
                   <div className="flex-1 min-w-0">
                      <p className="text-[10px] font-black text-slate-900 uppercase tracking-tighter truncate">{user?.name || 'Scholar'}</p>
                      <p className="text-[8px] font-bold text-slate-500 uppercase tracking-widest mt-0.5">{user?.role || 'Verified'}</p>
                   </div>
                </div>
                <button onClick={handleLogout} className="w-full flex items-center justify-center gap-2 p-3 bg-red-600/10 hover:bg-red-600 text-red-500 hover:text-slate-900 border border-red-500/20 rounded-xl font-black text-[8px] uppercase tracking-widest transition-all group active:scale-95">
                  <LogOut size={14} /> <span>Terminate Hub</span>
                </button>
             </div>
           ) : (
             <button onClick={handleLogout} className="w-full flex items-center justify-center p-4 bg-red-600/10 hover:bg-red-600 text-red-500 hover:text-slate-900 rounded-[1.5rem] border border-red-500/20 transition-all">
                <LogOut size={18} />
             </button>
           )
         ) : (
           <div className="space-y-3">
             <Link to="/login" className={`w-full flex items-center justify-center gap-3 p-4 bg-blue-600 hover:bg-blue-500 text-slate-900 rounded-[1.5rem] font-black text-[9px] uppercase tracking-widest transition-all shadow-lg shadow-blue-900/20 ${!isSidebarOpen && !isMobile ? 'px-0' : ''}`}>
               <User size={16} /> {(isSidebarOpen || isMobile) && <span>Student Login</span>}
             </Link>
             {(isSidebarOpen || isMobile) && (
               <Link to="/signup" className="w-full flex items-center justify-center gap-3 p-4 bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 rounded-[1.5rem] font-black text-[9px] uppercase tracking-widest transition-all">
                 Join Community
               </Link>
             )}
           </div>
         )}
      </div>
    </>
  );

  return (
    <div className="flex h-full bg-white overflow-hidden text-slate-900 font-['Inter'] selection:bg-blue-500/30">
      
      {/* ── Desktop Sidebar ── */}
      {!isAppMode && (
        <aside className={`hidden md:flex flex-col bg-white border-r border-slate-200/80 transition-all duration-500 shadow-2xl relative z-40 ${isSidebarOpen ? 'w-64' : 'w-20'}`}>
          <SidebarContent />
        </aside>
      )}

      {/* ── Mobile Drawer ── */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] md:hidden">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
          <aside className="absolute top-0 left-0 h-full w-[280px] bg-white shadow-2xl flex flex-col animate-in slide-in-from-left duration-300">
            <SidebarContent isMobile />
          </aside>
        </div>
      )}

      {/* ── Main Display ── */}
      <main className="flex-1 flex flex-col min-h-0 h-full bg-white relative overflow-hidden">
        
        {/* Mobile Navbar Header */}
        {!isAppMode && (
          <div className="md:hidden flex items-center justify-between px-4 py-2 bg-white border-b border-slate-200/80 sticky top-0 z-30">
            <div className="flex items-center gap-2">
               <img src="/logo.jpg" alt="Logo" className="w-8 h-8 rounded-lg" />
               <span className="text-xs font-[1000] tracking-tighter uppercase text-slate-900 leading-none">APNA COLLEGE BIHAR</span>
            </div>
            <button onClick={() => setMobileMenuOpen(true)} className="p-2.5 bg-slate-100/50 border border-slate-200 rounded-xl">
               <Menu size={20} />
            </button>
          </div>
        )}

        {/* Scrollable Area */}
        <div className={`flex-1 overflow-y-auto min-h-0 custom-scrollbar relative z-10 pb-32 ${isAppMode ? 'p-3' : 'p-3 md:p-6 lg:p-8'}`}>
           <div className="min-h-[80vh]">
             <Outlet />
           </div>

           {/* ── Dashboard Footer (SEO & Legal) ── */}
            {!isAppMode && (
              <footer className="mt-10 py-10 border-t border-slate-200/30 flex flex-col md:flex-row items-center justify-between gap-6 opacity-60 hover:opacity-100 transition-opacity">
                <div className="flex flex-col items-center md:items-start gap-1">
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-900">Apna College Bihar</p>
                  <p className="text-[8px] font-bold uppercase tracking-widest text-slate-500">© 2026 Official Website</p>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-6">
                  <Link to="/about" className="text-[9px] font-black uppercase tracking-widest text-slate-500 hover:text-blue-400 transition-colors">About Us</Link>
                  <Link to="/contact" className="text-[9px] font-black uppercase tracking-widest text-slate-500 hover:text-emerald-400 transition-colors">Contact Us</Link>
                  <Link to="/privacy" className="text-[9px] font-black uppercase tracking-widest text-slate-500 hover:text-orange-400 transition-colors">Privacy Policy</Link>
                </div>
                 <div className="flex items-center gap-4">
                    <a href="https://youtube.com/@appne-h8p?si=0xA0suRWTouLWP3i" target="_blank" rel="noopener noreferrer" className="p-2 bg-red-600/10 text-red-500 hover:bg-red-600 hover:text-slate-900 rounded-lg transition-all border border-red-500/10">
                      <Youtube size={14} />
                    </a>
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
                    <span className="text-[8px] font-black uppercase tracking-[0.2em] text-slate-600">All Systems Operational</span>
                 </div>
              </footer>
            )}
        </div>

        {/* ── App-Mode Bottom Navigation ── */}
        {isAppMode && (
          <div className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-xl border-t border-slate-200/80 px-4 py-3 flex justify-around items-center z-50">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link key={link.name} to={link.path} 
                  className={`flex flex-col items-center gap-1 transition-all duration-300 ${isActive ? 'text-blue-600 scale-110' : 'text-slate-400'}`}>
                  {link.icon}
                  <span className="text-[8px] font-black uppercase tracking-tighter">{link.name.split(' ')[0]}</span>
                  {isActive && <div className="w-1 h-1 bg-blue-600 rounded-full mt-0.5" />}
                </Link>
              );
            })}
            <button onClick={handleLogout} className="flex flex-col items-center gap-1 text-slate-400">
               <LogOut size={20} />
               <span className="text-[8px] font-black uppercase tracking-tighter">Exit</span>
            </button>
          </div>
        )}

        {/* Global Blur Orbs */}
        <div className="fixed top-[-20%] right-[-10%] w-[1000px] h-[1000px] bg-blue-600/5 rounded-full blur-[200px] pointer-events-none -z-10"></div>
        <div className="fixed bottom-[-10%] left-[-10%] w-[800px] h-[800px] bg-indigo-600/5 rounded-full blur-[150px] pointer-events-none -z-10"></div>

        {/* ── Verification Modal (MANDATORY) ── */}
        {isPhoneModalOpen && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-[#f8fafc]/80 backdrop-blur-xl">
             <div className="w-full max-w-md bg-white border border-slate-200/80 rounded-[3rem] p-10 md:p-14 shadow-2xl animate-in zoom-in-95 duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
                
                <div className="relative z-10 space-y-8 text-center">
                   <div className="inline-flex p-5 bg-blue-600/20 text-blue-400 rounded-3xl mb-2">
                      <Shield size={32} />
                   </div>
                   <div className="space-y-3">
                      <h2 className="text-2xl font-[1000] text-slate-900 uppercase tracking-tighter">Security Update</h2>
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest leading-relaxed">Please link your active mobile number to access your academic records.</p>
                   </div>

                   <form onSubmit={handlePhoneSubmit} className="space-y-6">
                      <div className="space-y-2 text-left">
                        <p className="text-[9px] font-black text-slate-600 uppercase tracking-[0.2em] ml-2">Phone Number</p>
                        <div className="flex gap-2">
                          <div className="bg-slate-100 px-4 py-4 rounded-2xl flex items-center justify-center text-xs font-black text-slate-500">+91</div>
                          <input 
                            type="tel" 
                            required 
                            maxLength={10}
                            value={phone}
                            onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                            placeholder="9XXXXXXXXX" 
                            className="flex-1 bg-slate-100 border-2 border-transparent focus:border-blue-500/50 rounded-2xl p-4 text-slate-900 text-sm font-black outline-none transition-all placeholder:text-slate-700" 
                          />
                        </div>
                      </div>

                      <button 
                        type="submit" 
                        disabled={isUpdating || phone.length < 10}
                        className="w-full py-5 bg-blue-600 hover:bg-blue-500 disabled:bg-slate-800 text-white rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-xl shadow-blue-900/20 active:scale-95"
                      >
                        {isUpdating ? 'Authenticating...' : 'Secure Access'}
                      </button>
                      <p className="text-[8px] text-slate-700 font-bold uppercase tracking-widest">Verification will be synced with your Casio ID</p>
                   </form>
                </div>
             </div>
          </div>
        )}

      </main>
    </div>
  );
}
