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

  // const isAdmin = user?.role === ROLES.ADMIN || user?.role === ROLES.SUPER_ADMIN;

  // ── ANNOUNCEMENTS ─────────────────────────────
  const [anns, setAnns] = useState([]);
  const [dismissed, setDismissed] = useState(() => JSON.parse(localStorage.getItem('dismissed_anns') || '[]'));

  useEffect(() => {
    const q = query(collection(db, 'announcements'), orderBy('createdAt', 'desc'), limit(5));
    return onSnapshot(q, snap => setAnns(snap.docs.map(d => ({ id: d.id, ...d.data() }))));
  }, []);

  const dismiss = (id) => {
    const next = [...dismissed, id];
    setDismissed(next);
    localStorage.setItem('dismissed_anns', JSON.stringify(next));
  };

  const visible = anns.filter(a => !dismissed.includes(a.id));

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

  return (
    <div className="flex h-screen bg-[#02040a] overflow-hidden text-white font-['Inter'] selection:bg-blue-500/30">
      
      {/* ── Sidebar ── */}
      <aside className={`bg-[#0d121f] border-r border-slate-800/80 transition-all duration-500 flex flex-col shadow-2xl relative z-40 ${isSidebarOpen ? 'w-80' : 'w-24'}`}>
        <div className="p-10 flex items-center justify-between">
          <div className={`flex items-center gap-4 transition-opacity duration-300 ${!isSidebarOpen && 'opacity-0 pointer-events-none'}`}>
             <div className="p-3 bg-blue-600 rounded-3xl shadow-xl shadow-blue-500/20"><GraduationCap size={28} className="text-white" /></div>
             <div>
               <span className="text-2xl font-[1000] tracking-tighter uppercase text-white block leading-none">ACB PORTAL</span>
               <span className="text-[9px] text-slate-500 font-black uppercase tracking-[0.4em] mt-2 block">Premium Edu Hub</span>
             </div>
          </div>
          <button onClick={()=>setSidebarOpen(!isSidebarOpen)} className="p-3 bg-slate-900/50 hover:bg-slate-800 border border-slate-800/80 rounded-2xl transition-all">
             <Menu size={20} className={isSidebarOpen ? 'rotate-180 transition-transform' : ''} />
          </button>
        </div>

        <nav className="flex-1 px-6 space-y-3 mt-10 overflow-y-auto custom-scrollbar">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            // The provided code snippet for TABS.map seems to be misplaced or intended for a different component.
            // The existing isAdmin check already filters the 'Admin Operations' link.
            // To ensure the admin link is only visible to authorized users, the `isAdmin` check is already in `navLinks` definition.
            // No further changes are needed here based on the provided instruction and code.
            return (
              <Link key={link.name} to={link.path}
                className={`flex items-center gap-5 p-5 rounded-[2rem] transition-all duration-300 group relative ${isActive ? 'bg-blue-600 text-white shadow-2xl shadow-blue-500/30' : 'text-slate-400 hover:bg-slate-800/50 hover:text-white'}`}>
                <div className={`${isActive ? 'scale-110' : 'group-hover:scale-125'} transition-transform shrink-0`}>{link.icon}</div>
                <span className={`font-black text-[11px] uppercase tracking-widest transition-all duration-300 ${!isSidebarOpen ? 'opacity-0 scale-50' : 'opacity-100'}`}>
                  {link.name}
                </span>
                {isActive && isSidebarOpen && <div className="absolute right-6 w-1.5 h-1.5 bg-white rounded-full animate-pulse shadow-[0_0_10px_white]" />}
              </Link>
            );
          })}
        </nav>

        <div className="p-8 border-t border-slate-800/50">
           {isSidebarOpen ? (
             <div className="space-y-6">
                <div className="flex items-center gap-4 p-5 bg-[#162035] rounded-[2.5rem] border border-slate-700/30">
                   <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-700 flex items-center justify-center font-[1000] text-white shadow-xl">
                      {user?.name?.[0]?.toUpperCase()}
                   </div>
                   <div className="flex-1 min-w-0 pr-2">
                      <p className="text-[11px] font-black text-white uppercase tracking-tighter truncate">{user?.name || 'Scholar'}</p>
                      <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mt-1">{user?.role || 'Verified'}</p>
                   </div>
                </div>
                <button onClick={handleLogout} className="w-full flex items-center justify-center gap-4 p-5 bg-red-600/10 hover:bg-red-600 text-red-500 hover:text-white border border-red-500/20 rounded-[2rem] font-black text-[10px] uppercase tracking-widest transition-all group active:scale-95">
                  <LogOut size={18} /> <span>Terminate Hub</span>
                </button>
             </div>
           ) : (
             <button onClick={handleLogout} className="w-full flex items-center justify-center p-5 bg-red-600/10 hover:bg-red-600 text-red-500 hover:text-white rounded-[2rem] border border-red-500/20 transition-all">
                <LogOut size={20} />
             </button>
           )}
        </div>
      </aside>

      {/* ── Main Display ── */}
      <main className="flex-1 flex flex-col h-full bg-[#02040a] relative overflow-hidden">
        
        {/* Scrollable Area */}
        <div className="flex-1 overflow-y-scroll custom-scrollbar relative z-10 p-6 md:p-14 lg:p-20">
           
           {/* Announcement Banners */}
           {visible.length > 0 && (
            <div className="mb-12 space-y-4">
               {visible.map(ann => {
                 const style = ANN_STYLE[ann.type] || ANN_STYLE.info;
                 return (
                   <div key={ann.id} className={`flex items-start gap-4 p-6 rounded-[2.5rem] border backdrop-blur-md ${style.bg} animate-in slide-in-from-top-4 duration-500 shadow-xl`}>
                     <div className={`w-1.5 self-stretch rounded-full shrink-0 ${style.bar}`} />
                     <div className={`p-2 bg-slate-900/50 rounded-xl ${style.text}`}><Bell size={18} /></div>
                     <div className="flex-1 min-w-0 pt-1">
                        <h4 className={`text-sm font-black uppercase tracking-tight ${style.text}`}>{ann.title}</h4>
                        <p className="text-slate-400 text-[12px] font-medium leading-relaxed mt-1.5 opacity-90">{ann.body}</p>
                     </div>
                     <button onClick={() => dismiss(ann.id)} className="p-2 text-slate-700 hover:text-white transition-colors shrink-0 pt-1">
                        <X size={20} />
                     </button>
                   </div>
                 );
               })}
            </div>
           )}

           <Outlet />
        </div>

        {/* Global Blur Orbs */}
        <div className="fixed top-[-20%] right-[-10%] w-[1000px] h-[1000px] bg-blue-600/5 rounded-full blur-[200px] pointer-events-none -z-10"></div>
        <div className="fixed bottom-[-10%] left-[-10%] w-[800px] h-[800px] bg-indigo-600/5 rounded-full blur-[150px] pointer-events-none -z-10"></div>

      </main>
    </div>
  );
}
