const fs = require('fs');

const notificationsCode = fs.readFileSync('client/notifications_code.txt', 'utf8');

const code = `import React, { useState, useEffect } from 'react';
import { Outlet, useLocation, useNavigate, Link } from 'react-router-dom';
import { ChevronLeft, Shield, Timer, X, LayoutDashboard, Library, BookOpen, Calendar, Clock, FileText, GraduationCap, Calculator, User, LogOut, Menu, UserCheck, Flame, Send, ChevronDown, Globe, Award, Link2, ArrowRight } from 'lucide-react';
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
  const { user, updateProfileData, logout, loading } = useAuth();
  const [phone, setPhone] = useState('');
  const [isPhoneModalOpen, setPhoneModalOpen] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const { timerActive } = useStudy();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(null);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const featureCategories = [
    {
      title: 'BEU Tools',
      items: [
        { name: 'BEU Result', path: '/beu-result', icon: <Globe size={16} /> },
        { name: 'Attendance', path: '/attendance', icon: <UserCheck size={16} /> },
        { name: 'Timetable', path: '/timetable', icon: <Calendar size={16} /> },
        { name: 'Notes', path: '/notes', icon: <BookOpen size={16} /> },
        { name: 'PYQ Papers', path: '/pyq', icon: <FileText size={16} /> },
        { name: 'SGPA / CGPA', path: '/cgpa', icon: <GraduationCap size={16} /> },
        { name: 'Syllabus', path: '/syllabus', icon: <Library size={16} /> },
      ],
    },
    {
      title: 'Study Tools',
      items: [
        { name: 'Study Timer', path: '/study', icon: <Timer size={16} /> },
        { name: 'Scientific Calc', path: '/calculator', icon: <Calculator size={16} /> },
        { name: 'Study Resources', path: '/study-resources', icon: <Link2 size={16} /> },
        { name: 'Personal Manager', path: '/extras', icon: <User size={16} /> },
        { name: 'Achievements', path: '/achievements', icon: <Award size={16} /> },
      ],
    },
    {
      title: 'Counselling',
      items: [
        { name: 'College Predictor', path: '/ugeac-predictor?tab=finder', icon: <Send size={16} /> },
        { name: 'Rank Predictor', path: '/ugeac-predictor?tab=predictor', icon: <Calculator size={16} /> },
        { name: 'Counselling Guide', path: '/ugeac-predictor?tab=guide', icon: <BookOpen size={16} /> },
      ],
    }
  ];

${notificationsCode}

  const handlePhoneSubmit = async (e) => {
    e.preventDefault();
    if (phone.length < 10) return;
    setIsUpdating(true);
    try { await updateProfileData({ phone }); setPhoneModalOpen(false); }
    catch (err) { console.error(err); } finally { setIsUpdating(false); }
  };

  const joinDate = user?.metadata?.creationTime 
    ? new Date(user.metadata.creationTime).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
    : 'Recently';

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

  const MobileMenuLink = ({ to, icon: Icon, label }) => {
    const isActive = location.pathname === to || (to !== '/' && location.pathname.startsWith(to));
    return (
      <Link 
        to={to} 
        onClick={() => setMobileMenuOpen(false)}
        className={\`flex items-center gap-3 px-4 py-3 rounded-2xl transition-all font-bold \${isActive ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'}\`}
      >
        <div className={\`\${isActive ? 'text-white' : 'text-slate-400'}\`}>
          {typeof Icon === 'function' ? <Icon size={18} /> : Icon}
        </div>
        <span className="text-[12px] uppercase tracking-wider font-black">{label}</span>
      </Link>
    );
  };

  return (
    <div className="flex flex-col h-screen bg-[#f8fafc] overflow-hidden text-slate-900 font-['Inter'] selection:bg-blue-500/30 relative">
      <SEO title={pageTitle} />

      {/* Top Header Navigation (Desktop) & Top Bar (Mobile) */}
      <header className="bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-sm z-[200] shrink-0 sticky top-0">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-3 md:py-4 flex items-center justify-between">
          
          {/* Logo & Brand */}
          <div className="flex items-center gap-2 md:gap-3 group cursor-pointer" onClick={() => navigate('/')}>
            <img src="/logo-acb.png?v=99" alt="Logo" className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl object-cover shadow-sm group-hover:scale-105 transition-transform" />
            <div className="block">
              <span className="text-sm md:text-xl font-[1000] tracking-tighter uppercase text-slate-900 block leading-none">Apna College Bihar</span>
              <span className="text-[6px] md:text-[7px] text-blue-500 font-bold uppercase tracking-[0.3em] md:tracking-[0.5em] mt-0.5 md:mt-1 block">Official App</span>
            </div>
          </div>

          {/* Desktop Navigation Links (Dropdowns) */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link to="/" className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors">Home</Link>
            
            {featureCategories.map((category, idx) => (
              <div key={category.title} className="relative">
                <button
                  onClick={() => setActiveFeatureIndex(activeFeatureIndex === idx ? null : idx)}
                  className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors"
                >
                  {category.title}
                  <ChevronDown size={12} className={\`transition-transform duration-200 \${activeFeatureIndex === idx ? 'rotate-180' : ''}\`} />
                </button>

                {activeFeatureIndex === idx && (
                  <>
                    <div className="fixed inset-0 z-[1900]" onClick={() => setActiveFeatureIndex(null)} />
                    <div className="absolute left-1/2 -translate-x-1/2 mt-3 w-56 bg-white/95 backdrop-blur-xl border border-slate-200 rounded-2xl shadow-2xl p-2 z-[2000] animate-in fade-in duration-150 origin-top">
                      {category.items.map((it) => (
                        <Link
                          key={it.name}
                          to={it.path}
                          className="flex items-center gap-3 w-full p-3 hover:bg-blue-50 text-slate-700 hover:text-blue-600 rounded-xl transition-all font-bold"
                          onClick={() => setActiveFeatureIndex(null)}
                        >
                          <span className="w-4 h-4 text-slate-500">{it.icon}</span>
                          <span className="text-[11px] font-black uppercase tracking-widest">{it.name}</span>
                        </Link>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))}
          </nav>

          {/* User Profile & Actions */}
          <div className="flex items-center gap-3">
             {loading ? (
               <div className="w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
             ) : user ? (
               <div className="flex items-center gap-4">
                 <div className="relative hidden lg:block">
                   <a 
                     href="/ApnaCollegeBihar_Stable.apk"
                     download="ApnaCollegeBihar_Stable.apk"
                     className="flex items-center gap-2 px-5 py-2.5 bg-blue-600/10 hover:bg-blue-600 text-blue-600 hover:text-white border border-blue-500/20 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all shadow-sm active:scale-95"
                   >
                     Download APK
                   </a>
                   <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[7px] font-black uppercase px-1.5 py-0.5 rounded-full shadow-md animate-pulse">
                     Latest APK
                   </span>
                 </div>
                 <div className="relative">
                   <button 
                     onClick={() => setShowProfileMenu(!showProfileMenu)}
                     className="flex items-center gap-2 px-4 py-2.5 md:px-6 md:py-3 bg-slate-50 border border-slate-200 hover:border-blue-500/50 text-slate-900 rounded-xl md:rounded-2xl font-black text-[9px] md:text-[10px] uppercase tracking-widest transition-all shadow-sm active:scale-95 group"
                   >
                     <div className="w-5 h-5 rounded-lg overflow-hidden bg-slate-100">
                       <img src="/logo-acb.png?v=99" alt="Profile" className="w-full h-full object-cover" />
                     </div>
                     <span className="hidden md:inline">My Profile</span>
                     <ChevronDown size={12} className={\`transition-transform duration-300 \${showProfileMenu ? 'rotate-180' : ''}\`} />
                   </button>

                   {showProfileMenu && (
                     <>
                      <div className="fixed inset-0 z-[1900]" onClick={() => setShowProfileMenu(false)}></div>
                      <div className="absolute right-0 mt-3 w-64 bg-white/95 backdrop-blur-xl border border-slate-200 rounded-[2rem] shadow-2xl p-2 z-[2000] animate-in fade-in zoom-in-95 duration-200 origin-top-right">
                         <div className="px-5 py-5 border-b border-slate-100 mb-2 text-center">
                            <div className="w-16 h-16 rounded-2xl overflow-hidden mb-3 mx-auto border border-slate-100 shadow-lg">
                               <img src="/logo-acb.png?v=99" alt="ACB" className="w-full h-full object-cover" />
                            </div>
                            <p className="text-[8px] font-black text-blue-600 uppercase tracking-widest leading-none mb-1">ACB Official Account</p>
                            <p className="text-[10px] font-bold text-slate-900 truncate">{user.email}</p>
                            <div className="flex items-center justify-center gap-1 text-[8px] text-slate-500 mt-1.5 font-bold">
                              <Calendar size={10} className="text-blue-500" />
                              <span>Joined: <strong className="text-slate-900">{joinDate}</strong></span>
                            </div>
                         </div>
                         
                         <div className="space-y-1">
                            <button 
                              onClick={() => logout()}
                              className="flex items-center gap-3 w-full p-3 hover:bg-red-50 text-slate-500 hover:text-red-600 rounded-2xl transition-all group"
                            >
                               <div className="p-2 bg-slate-100 group-hover:bg-red-600/10 rounded-xl transition-colors">
                                 <LogOut size={14} />
                               </div>
                               <span className="text-[10px] font-black uppercase tracking-widest">Logout Session</span>
                            </button>
                         </div>
                      </div>
                     </>
                   )}
                 </div>
               </div>
             ) : null}
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto custom-scrollbar relative z-10 bg-[#f8fafc] flex flex-col">
        <div className="flex-1 w-full pb-24 lg:pb-8 p-4 md:p-6 lg:p-8 max-w-7xl mx-auto min-h-[80vh]">
          <Outlet />
        </div>

        {/* Global Footer */}
        <footer className="bg-slate-900 text-slate-400 py-12 px-6 lg:px-12 rounded-t-[2rem] md:rounded-t-[3rem] mt-12 w-full pb-32 lg:pb-12 border-t-[8px] border-blue-600">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src="/logo-acb.png?v=99" alt="Logo" className="w-10 h-10 rounded-xl object-cover shadow-sm bg-white p-0.5" />
                <span className="text-xl font-[1000] tracking-tighter uppercase text-white leading-none">Apna College Bihar</span>
              </div>
              <p className="text-xs font-medium max-w-xs mb-4 leading-relaxed">The ultimate study engine and counselling companion for Bihar Engineering students. Building the future of BEU together.</p>
              <div className="flex items-center gap-3">
                <a href="#" className="p-2.5 bg-white/5 hover:bg-blue-600 text-slate-300 hover:text-white rounded-xl transition-all"><Globe size={18} /></a>
                <a href="#" className="p-2.5 bg-white/5 hover:bg-blue-600 text-slate-300 hover:text-white rounded-xl transition-all"><Shield size={18} /></a>
                <a href="#" className="p-2.5 bg-white/5 hover:bg-blue-600 text-slate-300 hover:text-white rounded-xl transition-all"><Send size={18} /></a>
              </div>
            </div>
            <div>
              <h4 className="text-white font-black uppercase tracking-widest text-xs mb-6 flex items-center gap-2"><Link2 size={16} className="text-blue-500" /> Quick Links</h4>
              <ul className="space-y-3 text-xs font-bold uppercase tracking-wider">
                <li><Link to="/about" className="hover:text-blue-400 transition-colors flex items-center gap-2"><ChevronLeft size={12} className="text-slate-600" /> About Us</Link></li>
                <li><Link to="/contact" className="hover:text-blue-400 transition-colors flex items-center gap-2"><ChevronLeft size={12} className="text-slate-600" /> Contact Support</Link></li>
                <li><Link to="/privacy-policy" className="hover:text-blue-400 transition-colors flex items-center gap-2"><ChevronLeft size={12} className="text-slate-600" /> Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-blue-400 transition-colors flex items-center gap-2"><ChevronLeft size={12} className="text-slate-600" /> Terms of Service</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-black uppercase tracking-widest text-xs mb-6 flex items-center gap-2"><ArrowRight size={16} className="text-blue-500" /> Get the App</h4>
              <p className="text-xs font-medium leading-relaxed mb-6">Download the official Android app for push notifications and a native experience.</p>
              <a href="/ApnaCollegeBihar_Stable.apk" download className="inline-flex items-center gap-3 px-6 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all shadow-lg shadow-blue-500/20 active:scale-95">
                Download APK <ArrowRight size={16} />
              </a>
            </div>
          </div>
          <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 text-center flex flex-col items-center justify-center gap-2">
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">&copy; {new Date().getFullYear()} Apna College Bihar. All rights reserved.</p>
            <p className="text-[8px] font-bold text-slate-600 tracking-wider">Made with <span className="text-red-500">❤️</span> for Bihar Engineering Students</p>
          </div>
        </footer>
      </main>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-[250] lg:hidden" onClick={() => setMobileMenuOpen(false)} />
      )}

      {/* Mobile Sidebar/Drawer (Slide from right) */}
      <aside className={\`fixed inset-y-0 right-0 w-72 bg-white border-l border-slate-200 shadow-2xl z-[300] transform transition-transform duration-300 ease-in-out flex flex-col lg:hidden \${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}\`}>
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100 bg-slate-50">
          <span className="text-[10px] font-black tracking-widest uppercase text-slate-400 block leading-none">Navigation Menu</span>
          <button onClick={() => setMobileMenuOpen(false)} className="text-slate-400 hover:text-slate-900 bg-white p-2 rounded-xl shadow-sm border border-slate-200">
            <X size={16} strokeWidth={3} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-4 px-3 space-y-6 custom-scrollbar">
          {featureCategories.map((cat) => (
             <div key={cat.title}>
               <p className="px-4 text-[9px] font-black text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                 <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> {cat.title}
               </p>
               <div className="space-y-1">
                 {cat.items.map(it => (
                    <MobileMenuLink key={it.name} to={it.path} icon={() => it.icon} label={it.name} />
                 ))}
               </div>
             </div>
          ))}
        </div>

        <div className="p-4 border-t border-slate-100 bg-slate-50">
          <button onClick={() => logout()} className="w-full flex items-center justify-center gap-2 px-4 py-4 bg-white hover:bg-red-50 text-slate-600 hover:text-red-600 rounded-2xl transition-all font-black uppercase text-[10px] tracking-widest shadow-sm border border-slate-200">
            <LogOut size={16} strokeWidth={2.5} /> Logout Session
          </button>
        </div>
      </aside>
      
      {/* Verification Modal */}
      {isPhoneModalOpen && isOnline && <div className="fixed inset-0 z-[400] flex items-center justify-center p-6 bg-slate-50/80 backdrop-blur-xl"><div className="w-full max-w-md bg-white border border-slate-200 rounded-[3rem] p-10 text-center space-y-8 shadow-2xl relative overflow-hidden"><div className="inline-flex p-5 bg-blue-600/20 text-blue-500 rounded-3xl"><Shield size={32} /></div><h2 className="text-2xl font-[1000] text-slate-900 uppercase tracking-tighter">Security Update</h2><p className="text-slate-500 text-sm">Please link your active mobile number to secure your college portal access.</p><form onSubmit={handlePhoneSubmit} className="space-y-6"><div className="flex gap-2"><div className="bg-slate-100 px-4 py-4 rounded-2xl text-xs font-black">+91</div><input type="tel" maxLength={10} value={phone} onChange={(e) => setPhone(e.target.value.replace(/\\D/g, ''))} placeholder="10-DIGIT MOBILE NO." className="flex-1 bg-slate-100 rounded-2xl p-4 text-sm font-black outline-none" /></div><button type="submit" className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-widest transition-all">Save & Continue</button></form></div></div>}

      <FloatingTimer />

      {/* Mobile Bottom Navigation Bar */}
      <nav className="lg:hidden fixed bottom-0 left-0 w-full bg-white/95 backdrop-blur-xl border-t border-slate-200 pb-safe z-[150] flex items-center justify-around px-2 shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
         <BottomNavItem to="/" icon={LayoutDashboard} label="Home" />
         <BottomNavItem to="/timetable" icon={Calendar} label="Time" />
         <BottomNavItem to="/syllabus" icon={Library} label="Syllabus" />
         <BottomNavItem to="/notes" icon={BookOpen} label="Notes" />
         <button onClick={() => setMobileMenuOpen(true)} className="flex flex-col items-center justify-center gap-1 flex-1 py-2 text-slate-400 hover:text-slate-900 group">
            <div className="p-1.5 rounded-xl transition-all group-hover:bg-slate-100">
              <Menu size={20} strokeWidth={2.5} />
            </div>
            <span className="text-[8px] font-black uppercase tracking-widest group-hover:text-slate-900">Menu</span>
         </button>
      </nav>
    </div>
  );
}
`;

fs.writeFileSync('client/src/layouts/DashboardLayout.jsx', code);
