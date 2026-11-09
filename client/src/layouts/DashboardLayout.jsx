import React, { useState, useEffect } from 'react';
import { Outlet, useLocation, useNavigate, Link } from 'react-router-dom';
import { 
  ChevronLeft, Shield, Timer, X, LayoutDashboard, Library, BookOpen, Calendar, 
  Clock, FileText, GraduationCap, Calculator, User, LogOut, Menu, UserCheck, 
  Flame, Send, ChevronDown, Globe, Award, Link2, ArrowRight, UserX, Youtube,
  Layers, Download, Sparkles, Building2, Smartphone, Laptop, Copy
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useStudy } from '../context/StudyContext';
import { Capacitor, registerPlugin } from '@capacitor/core';
import { App } from '@capacitor/app';
import { LocalNotifications } from '@capacitor/local-notifications';
import { AdMob, BannerAdSize, BannerAdPosition } from '@capacitor-community/admob';
import { getToken } from 'firebase/messaging';

const AppBlocker = registerPlugin('AppBlocker');
import { doc, updateDoc, collection, query, where, onSnapshot, getDocs } from 'firebase/firestore';
import { messaging, VAPID_KEY, db } from '../firebase';
import SEO from '../components/SEO';
import Footer from '../components/Footer';
import MobileBottomNav from '../components/MobileBottomNav';
import BrandFilmBackground from '../components/BrandFilmBackground';
import { toast } from 'react-hot-toast';

export default function DashboardLayout() {
  const isDesktop = typeof window !== 'undefined' && Boolean(
    window.__ACB_DESKTOP__ || 
    window.isDesktopApp || 
    window.desktopBridge?.isDesktop || 
    (typeof navigator !== 'undefined' && navigator.userAgent.includes('ApnaCollegeBiharDesktop'))
  );
  const isMobileApp = Capacitor.isNativePlatform();
  const isNative = isMobileApp || isDesktop;
  const location = useLocation();
  const navigate = useNavigate();
  const { user, updateProfileData, logout, loading } = useAuth();
  const [phone, setPhone] = useState('');
  const [isPhoneModalOpen, setPhoneModalOpen] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const { timerActive, lockMode } = useStudy();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(null);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showSupportModal, setShowSupportModal] = useState(false);
  const isHomePage = location.pathname === '/';

  const [isMobileScreen, setIsMobileScreen] = useState(() => {
    if (typeof window === 'undefined') return false;
    return Boolean(
      isMobileApp ||
      ((window.innerWidth < 768 || /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent || '')) &&
        !new URLSearchParams(window.location.search).get('desktop') &&
        !new URLSearchParams(window.location.search).get('mode')?.includes('desktop'))
    );
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobileScreen(
        Boolean(
          isMobileApp ||
          ((window.innerWidth < 768 || /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent || '')) &&
            !new URLSearchParams(window.location.search).get('desktop') &&
            !new URLSearchParams(window.location.search).get('mode')?.includes('desktop'))
        )
      );
    };
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [isMobileApp]);

  useEffect(() => {
    if (isNative) {
      // AdMob banner has been temporarily disabled because it overlaps the UI
      /*
      const showBanner = async () => {
        try {
          await AdMob.initialize();
          await AdMob.showBanner({
            adId: 'ca-app-pub-3940256099942544/6300978111', 
            adSize: BannerAdSize.BANNER,
            position: BannerAdPosition.BOTTOM_CENTER,
            margin: 0,
            isTesting: true,
          });
        } catch (e) {
          console.error('AdMob Banner error', e);
        }
      };
      showBanner();

      return () => {
        AdMob.hideBanner().catch(console.error);
      };
      */
    }
  }, [isNative]);

  const featureCategories = [
    {
      title: 'BEU Academic',
      items: [
        { name: 'BEU Result', path: '/beu-result', icon: <Globe size={16} /> },
        { name: 'Notes Hub', path: '/notes', icon: <BookOpen size={16} /> },
        { name: 'PYQ Papers', path: '/pyq', icon: <FileText size={16} /> },
        { name: 'BEU Syllabus', path: '/syllabus', icon: <Library size={16} /> },
        { name: 'SGPA / CGPA', path: '/cgpa', icon: <GraduationCap size={16} /> },
        { name: 'Lecture Finder', path: '/lecture-finder', icon: <Youtube size={16} /> },
        { name: 'Attendance Tracker', path: '/attendance', icon: <UserCheck size={16} /> },
        { name: 'Class Timetable', path: '/timetable', icon: <Calendar size={16} /> },
      ],
    },
    {
      title: 'Counselling & Colleges',
      items: [
        { name: 'College Predictor', path: '/ugeac-predictor?tab=finder', icon: <Send size={16} /> },
        { name: 'Rank Predictor', path: '/ugeac-predictor?tab=predictor', icon: <Calculator size={16} /> },
        { name: 'Counselling Guide', path: '/ugeac-predictor?tab=guide', icon: <BookOpen size={16} /> },
        { name: 'Compare Colleges', path: '/compare-colleges', icon: <Send size={16} /> },
        { name: 'Colleges Directory', path: '/colleges', icon: <Building2 size={16} /> },
      ],
    },
    {
      title: 'Study & Productivity',
      items: [
        { name: 'Free Senior Mentorship', path: '/mentorship', icon: <GraduationCap size={16} /> },
        { name: 'Focus Study Timer', path: '/study', icon: <Timer size={16} /> },
        { name: 'Scientific Calc', path: '/calculator', icon: <Calculator size={16} /> },
        { name: 'Study Resources', path: '/study-resources', icon: <Link2 size={16} /> },
        { name: 'Blog & Guidance', path: '/blog', icon: <FileText size={16} /> },
        ...(!isNative ? [{ name: 'Download Apps', path: '/download', icon: <Download size={16} /> }] : []),
        { name: 'Achievements', path: '/achievements', icon: <Award size={16} /> },
      ],
    }
  ];

// Track online/offline status
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  useEffect(() => {
    // Disable duplicate local phone modal
    setPhoneModalOpen(false);

    // Setup push notifications:
    // - On NATIVE app (Android): skip web push — native app uses DailyNotificationPlugin
    //   which sends notifications directly to the phone tray via Android AlarmManager.
    // - On WEB (browser): use Firebase Web Push (Chrome notifications).
    const setupNotifications = async () => {
      if (!user || !isOnline) return;
      if (isNative) {
        // Native Android: notifications handled by DailyNotificationPlugin.java
        // No web push needed — notifications go to phone tray automatically.
        return;
      }
      // Web only: Firebase web push
      if (!messaging) return;
      try {
        const permission = await Notification.requestPermission();
        if (permission === 'granted') {
          const token = await getToken(messaging, { vapidKey: VAPID_KEY });
          if (token) {
            await updateDoc(doc(db, 'users', user.uid), { fcmToken: token });
          }
        }
      } catch (err) {
        console.error('Push notification setup failed:', err);
      }
    };
    setupNotifications();
  }, [user, isOnline, isNative]);

  // Only official BEU notifications are allowed.
  // Cancel all pending local notifications on native devices.
  useEffect(() => {
    if (isNative) {
      try {
        LocalNotifications.getPending().then(pending => {
          if (pending && pending.notifications && pending.notifications.length > 0) {
            LocalNotifications.cancel({ notifications: pending.notifications }).catch(() => {});
          }
        }).catch(() => {});
      } catch (e) {}
    }
  }, [isNative]);


  const handlePhoneSubmit = async (e) => {
    e.preventDefault();
    if (phone.length < 10) return;
    setIsUpdating(true);
    try { await updateProfileData({ phone }); setPhoneModalOpen(false); }
    catch (err) { console.error(err); } finally { setIsUpdating(false); }
  };

  useEffect(() => {
    if (isNative) {
      if (timerActive) {
        AppBlocker.lockApp().catch(console.error);
      } else {
        AppBlocker.unlockApp().catch(console.error);
      }

      // Re-lock the app when returning from a whitelisted app
      const appStateListener = App.addListener('appStateChange', ({ isActive }) => {
        if (isActive && timerActive) {
          AppBlocker.lockApp().catch(console.error);
        }
      });

      return () => {
        appStateListener.then(listener => listener.remove());
      };
    }
  }, [timerActive, lockMode, isNative]);

  useEffect(() => {
    if (isNative) {
      LocalNotifications.requestPermissions().catch(console.error);
    }
  }, [isNative]);

  const joinDate = user?.metadata?.creationTime 
    ? new Date(user.metadata.creationTime).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
    : 'Recently';

  const HeaderTimer = () => {
    const { timerActive, timerTime } = useStudy();
    if (!timerActive || location.pathname === '/study') return null;
    const m = Math.floor((timerTime % 3600) / 60);
    const sec = timerTime % 60;
    return (
      <div 
        onClick={() => navigate('/study')}
        className="flex items-center gap-2 px-3 md:px-4 py-2 md:py-2.5 bg-slate-900 border border-slate-700 hover:border-blue-500/50 rounded-xl md:rounded-2xl cursor-pointer hover:bg-slate-800 transition-all shadow-lg active:scale-95 group animate-pulse"
      >
        <Timer size={14} className="text-blue-500 group-hover:text-white transition-colors" />
        <span className="text-xs font-bold text-white tabular-nums">
          {m.toString().padStart(2, '0')}:{sec.toString().padStart(2, '0')}
        </span>
      </div>
    );
  };

  const getPageTitle = (pathname) => {
    if (pathname === '/') return 'Home';
    if (pathname.includes('/study-resources')) return 'Study Resources';
    if (pathname.includes('/study')) return 'Study Zone';
    if (pathname.includes('/notes')) return 'B.Tech Notes';
    if (pathname.includes('/pyq')) return 'PYQ Papers';
    if (pathname.includes('/lecture-finder')) return 'Lecture Finder';
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
        <div className={`p-1.5 rounded-xl transition-all ${isActive ? 'bg-blue-100 text-blue-600' : 'text-slate-400'}`}>
          <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
        </div>
        <span className={`text-xs font-semibold ${isActive ? 'text-blue-600' : 'text-slate-400'}`}>{label}</span>
      </Link>
    );
  };

  const MobileMenuLink = ({ to, icon: Icon, label }) => {
    const isActive = location.pathname === to || (to !== '/' && location.pathname.startsWith(to));
    return (
      <Link 
        to={to} 
        onClick={() => setMobileMenuOpen(false)}
        className={`flex items-center gap-3 px-4 py-3 rounded-2xl transition-all font-bold ${isActive ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'}`}
      >
        <div className={`${isActive ? 'text-white' : 'text-slate-400'}`}>
          {typeof Icon === 'function' ? <Icon size={18} /> : Icon}
        </div>
        <span className="text-xs uppercase tracking-wide font-bold">{label}</span>
      </Link>
    );
  };

  return (
    <div className={`flex flex-col h-[100dvh] min-h-[100dvh] w-full max-w-[100vw] ${
      isMobileScreen ? 'bg-[#f8fafc] bg-mesh-light text-slate-900' : 'bg-[#070b14] text-white'
    } overflow-x-clip overflow-y-hidden font-['Inter'] selection:bg-cyan-500/30 relative`}>
      <SEO 
        title={pageTitle} 
        url={window.location.href} 
      />

      {/* ── Global Full-Page Brand Film Video Background across ALL pages (Laptop & Tablet only) ── */}
      {!isMobileScreen && <BrandFilmBackground />}

      {/* Global Native Header (for Mobile Phone only - Unchanged Light UI) */}
      {(isMobileApp || isMobileScreen) && (
        <header className="bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs z-[200] shrink-0 sticky top-0 px-3 sm:px-4 py-2.5 flex items-center justify-between pt-[max(env(safe-area-inset-top,0px),0.625rem)] text-slate-900">
          <button onClick={() => navigate(-1)} className="min-w-[44px] min-h-[44px] rounded-xl bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors active:scale-95 flex items-center justify-center cursor-pointer" aria-label="Go Back">
            <ChevronLeft size={20} strokeWidth={2.5} />
          </button>
          <div className="flex items-center justify-center">
            <span className="text-xs font-black text-slate-900 uppercase tracking-tight truncate px-2">{pageTitle}</span>
          </div>
          <div className="flex items-center gap-2">
            <HeaderTimer />
          </div>
        </header>
      )}

      {/* Top Header Navigation (Desktop Web, Laptop & Tablet) */}
      {!(isMobileApp || isMobileScreen) && (
        <header className="backdrop-blur-2xl border-b border-white/10 shadow-[0_2px_15px_rgba(0,0,0,0.5)] z-[200] shrink-0 sticky top-0 transition-all pt-[max(env(safe-area-inset-top,0px),0px)] bg-black/70 text-white">
          <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/80 to-transparent"></div>
          <div className="max-w-[1440px] mx-auto px-3 sm:px-4 md:px-8 py-2.5 sm:py-3 flex items-center justify-between">
            
            {/* Logo & Brand */}
            <div className="flex items-center gap-2 sm:gap-2.5 group cursor-pointer select-none" onClick={() => navigate('/')}>
              <div className="relative w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-xl p-0.5 bg-gradient-to-tr from-blue-600 via-indigo-500 to-blue-400 shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform shrink-0">
                <img src="/logo-acb.png?v=99" alt="Logo" className="w-full h-full object-cover rounded-[10px] bg-white" />
              </div>
              <div className="block min-w-0">
                <span className="font-heading font-black text-xs sm:text-sm md:text-base lg:text-lg tracking-tight uppercase leading-none block text-white">
                  Apna College <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Bihar</span>
                </span>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-1.5 text-xs font-heading font-bold">
              <Link to="/" className="px-3 py-2 rounded-xl transition-colors text-slate-300 hover:text-cyan-400 hover:bg-white/10">
                Home
              </Link>
              <Link to="/notes" className="px-3 py-2 rounded-xl transition-colors text-slate-300 hover:text-cyan-400 hover:bg-white/10">
                Notes
              </Link>
              <Link to="/pyq" className="px-3 py-2 rounded-xl transition-colors text-slate-300 hover:text-cyan-400 hover:bg-white/10">
                PYQ
              </Link>
              <Link to="/ugeac-predictor?tab=finder" className="px-3 py-2 rounded-xl transition-colors text-slate-300 hover:text-cyan-400 hover:bg-white/10">
                Predictor
              </Link>
              <Link to="/compare-colleges" className="px-3 py-2 rounded-xl transition-colors whitespace-nowrap text-slate-300 hover:text-cyan-400 hover:bg-white/10">
                Compare Colleges
              </Link>
              <Link to="/mentorship" className="px-3 py-2 rounded-xl transition-colors inline-flex items-center gap-1.5 text-slate-300 hover:text-cyan-400 hover:bg-white/10">
                <span>Mentorship</span>
                <span className="px-1.5 py-0.5 rounded-full text-xs font-bold bg-blue-500/20 border border-blue-400/30 text-cyan-300">Free</span>
              </Link>
              <Link to="/blog" className="px-3 py-2 rounded-xl transition-colors text-slate-300 hover:text-cyan-400 hover:bg-white/10">
                Blog &amp; Guides
              </Link>

              {/* All Tools Dropdown */}
              <div className="relative ml-1">
                <button
                  onClick={() => setActiveFeatureIndex(activeFeatureIndex === 0 ? null : 0)}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-xl transition-colors text-xs font-heading font-bold cursor-pointer bg-white/10 hover:bg-white/20 text-white border border-white/15"
                >
                  <span>All Tools</span>
                  <ChevronDown size={14} className={`transition-transform duration-200 ${activeFeatureIndex === 0 ? 'rotate-180' : ''}`} />
                </button>

                {activeFeatureIndex === 0 && (
                  <>
                    <div className="fixed inset-0 z-[1900]" onClick={() => setActiveFeatureIndex(null)} />
                    <div className="absolute right-0 mt-3 w-80 bg-slate-950/95 backdrop-blur-2xl border border-white/15 rounded-2xl shadow-2xl p-3.5 z-[2000] animate-in fade-in zoom-in-95 duration-150 origin-top-right text-white">
                      {featureCategories.map((cat) => (
                        <div key={cat.title} className="mb-3 last:mb-0">
                          <span className="text-xs font-heading font-bold text-slate-400 px-3 py-1 block">
                            {cat.title}
                          </span>
                          <div className="grid grid-cols-2 gap-1 mt-1">
                            {cat.items.map((it) => (
                              <Link
                                key={it.name}
                                to={it.path}
                                onClick={() => setActiveFeatureIndex(null)}
                                className="flex items-center gap-2 p-2 rounded-xl hover:bg-white/10 text-slate-200 hover:text-cyan-400 transition-colors text-xs font-heading font-semibold"
                              >
                                <span className="w-4 h-4 text-cyan-400 shrink-0">{it.icon}</span>
                                <span className="truncate">{it.name}</span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </nav>

            {/* User Profile & Actions */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              {!isNative && (
                <Link 
                  to="/download" 
                  className="hidden md:flex h-9 items-center gap-1.5 px-3 rounded-xl font-heading font-bold text-xs transition-all shadow-xs active:scale-95 shrink-0 bg-blue-500/20 hover:bg-blue-500/30 text-cyan-300 border border-blue-400/30"
                  title="Download Official Windows, Mac, Linux & Android Apps"
                >
                  <Download size={14} className="text-cyan-400 animate-bounce" />
                  <span>Download App</span>
                </Link>
              )}

              {loading ? (
                <div className="w-5 h-5 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
              ) : user ? (
                <div className="flex items-center gap-2 md:gap-3">
                  <HeaderTimer />
                  
                  <div className="relative">
                    <button 
                      onClick={() => setShowProfileMenu(!showProfileMenu)}
                      className="h-9 flex items-center gap-2 px-3 rounded-xl font-heading font-bold text-xs transition-all shadow-xs active:scale-95 group shrink-0 bg-white/10 hover:bg-white/20 border border-white/15 text-white"
                    >
                      <div className="w-5 h-5 rounded-lg overflow-hidden bg-slate-100">
                        <img src="/logo-acb.png?v=99" alt="Profile" className="w-full h-full object-cover" />
                      </div>
                      <span className="hidden sm:inline">My Profile</span>
                      <ChevronDown size={14} className={`transition-transform duration-300 ${showProfileMenu ? 'rotate-180' : ''}`} />
                    </button>

                    {showProfileMenu && (
                      <>
                        <div className="fixed inset-0 z-[1900]" onClick={() => setShowProfileMenu(false)}></div>
                        <div className="absolute right-0 mt-3 w-64 bg-white/95 backdrop-blur-xl border border-slate-200 rounded-2xl shadow-2xl p-2 z-[2000] animate-in fade-in zoom-in-95 duration-200 origin-top-right">
                          <div className="px-5 py-5 border-b border-slate-100 mb-2 text-center">
                            <div className="w-16 h-16 rounded-xl overflow-hidden mb-3 mx-auto border border-slate-100 shadow-md">
                              <img src="/logo-acb.png?v=99" alt="ACB" className="w-full h-full object-cover" />
                            </div>
                            <p className="text-xs font-bold text-blue-600 leading-none mb-1">ACB Official Account</p>
                            <p className="text-xs font-bold text-slate-900 truncate">{user.email}</p>
                            <div className="flex items-center justify-center gap-1 text-xs text-slate-500 mt-1.5 font-medium">
                              <Calendar size={12} className="text-blue-500" />
                              <span>Joined: <strong className="text-slate-900">{joinDate}</strong></span>
                            </div>
                          </div>
                          
                          <div className="p-2 space-y-1">
                            {(user?.email === 'prince8694@gmail.com' || user?.email === 'prince86944@gmail.com' || user?.role === 'SUPER_ADMIN') && (
                              <Link 
                                to="/dashboard/admin"
                                className="flex items-center gap-3 w-full p-2.5 hover:bg-blue-50 text-blue-600 rounded-xl transition-all group"
                              >
                                <div className="p-2 bg-blue-50 group-hover:bg-blue-100 rounded-lg transition-colors">
                                  <Shield size={14} />
                                </div>
                                <span className="text-xs font-bold">Admin Panel</span>
                              </Link>
                            )}
                            
                            {!isNative && (
                              <button 
                                onClick={() => {
                                  setShowProfileMenu(false);
                                  setShowSupportModal(true);
                                }}
                                className="flex items-center gap-3 w-full p-2.5 hover:bg-blue-50 text-blue-600 rounded-xl transition-all group"
                              >
                                <div className="p-2 bg-blue-50 group-hover:bg-blue-100 rounded-lg transition-colors">
                                  <Award size={14} />
                                </div>
                                <span className="text-xs font-bold">Support Us / Donate</span>
                              </button>
                            )}

                            <button 
                              onClick={async () => {
                                setShowProfileMenu(false);
                                const shareData = {
                                  title: 'Apna College Bihar App - No More Distractions!',
                                  text: '📱 Padhai ke waqt Instagram/Reels se distract hote ho? Apna College Bihar App try karo! Isme "Strict Study Blocker" hai!\n\nSteps:\n1. App Download karke Dashboard me jao.\n2. Niche "Focus Mode" on karo.\n3. Timer set karo aur padhai shuru! (Baki saare apps block ho jayenge)\n\nSaare Notes aur PYQs bhi yahi milenge!\nDownload now: ',
                                  url: 'https://www.apnacollegebihar.online/apna-college-bihar-v64.apk'
                                };
                                try {
                                  if (navigator.share) {
                                    await navigator.share(shareData);
                                  } else {
                                    await navigator.clipboard.writeText(shareData.text + " " + shareData.url);
                                    import('react-hot-toast').then(m => m.toast.success("App link copied to clipboard!"));
                                  }
                                } catch (err) {
                                  // console.log removed
                                }
                              }}
                              className="flex items-center gap-3 w-full p-2.5 hover:bg-emerald-50 text-slate-600 hover:text-emerald-600 rounded-xl transition-all group"
                            >
                              <div className="p-2 bg-slate-100 group-hover:bg-emerald-600/10 rounded-lg transition-colors">
                                <Send size={14} />
                              </div>
                              <span className="text-xs font-bold">Share App Link</span>
                            </button>

                            <button 
                              onClick={async () => {
                                setShowProfileMenu(false);
                                await logout();
                              }}
                              className="flex items-center gap-3 w-full p-2.5 hover:bg-red-50 text-slate-600 hover:text-red-600 rounded-xl transition-all group cursor-pointer"
                            >
                              <div className="p-2 bg-slate-100 group-hover:bg-red-600/10 rounded-lg transition-colors">
                                <LogOut size={14} />
                              </div>
                              <span className="text-xs font-bold">Logout Session</span>
                            </button>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-2 sm:gap-3">
                  <HeaderTimer />

                  <Link 
                    to="/login" 
                    className="hidden sm:flex h-9 items-center px-3 font-heading font-bold text-xs transition-colors text-slate-300 hover:text-white"
                  >
                    Login
                  </Link>
                  <Link 
                    to="/signup" 
                    className="h-9 flex items-center px-4 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white rounded-xl font-heading font-bold text-xs transition-all shadow-md active:scale-95 shrink-0"
                  >
                    Sign Up
                  </Link>
                </div>
              )}

              {/* Mobile Menu Hamburger */}
              <button 
                onClick={() => setMobileMenuOpen(true)} 
                className="w-11 h-11 min-w-[44px] min-h-[44px] flex xl:hidden items-center justify-center rounded-xl transition-all ml-1 shrink-0 active:scale-95 cursor-pointer text-white bg-white/10 hover:bg-white/20 border border-white/15"
                aria-label="Open Navigation Menu"
              >
                <Menu size={20} strokeWidth={2.2} />
              </button>
            </div>
          </div>
        </header>
      )}

      {/* Main Content Area */}
      <main id="main-scroll-container" className="flex-1 overflow-y-auto custom-scrollbar relative z-10 bg-transparent flex flex-col overscroll-y-contain">
        <div className={`w-full grow shrink-0 pb-28 md:pb-8 min-h-[80vh] ${location.pathname === '/' ? '' : 'p-3 sm:p-4 md:p-6 lg:p-8 max-w-7xl mx-auto'}`}>
          <React.Suspense fallback={
            <div className="flex flex-col items-center justify-center w-full h-[60vh]">
              <div className="w-10 h-10 border-4 border-slate-200 border-t-blue-600 rounded-full animate-spin"></div>
              <p className="text-xs font-bold text-slate-400 mt-4">Loading Module...</p>
            </div>
          }>
            <Outlet />
          </React.Suspense>
        </div>

        {/* Global Footer */}
        <Footer />
      </main>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-[250] xl:hidden" onClick={() => setMobileMenuOpen(false)} />
      )}

      {/* Mobile Sidebar/Drawer (Slide from right) */}
      <aside className={`fixed inset-y-0 right-0 w-[85vw] max-w-xs sm:w-80 bg-white border-l border-slate-200 shadow-2xl z-[300] transform transition-transform duration-300 ease-in-out flex flex-col xl:hidden ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-5 border-b border-slate-100 bg-slate-50 pt-[max(env(safe-area-inset-top,0px),0.875rem)]">
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest block leading-none">Navigation Menu</span>
          <button onClick={() => setMobileMenuOpen(false)} className="text-slate-400 hover:text-slate-900 bg-white w-10 h-10 min-w-[40px] min-h-[40px] flex items-center justify-center rounded-xl shadow-xs border border-slate-200 active:scale-95 cursor-pointer" aria-label="Close Navigation Menu">
            <X size={18} strokeWidth={2.5} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-4 px-3 space-y-6 custom-scrollbar">
          {featureCategories.map((cat) => (
             <div key={cat.title}>
               <p className="px-4 text-xs font-bold text-slate-400 mb-3 flex items-center gap-2">
                 <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> {cat.title}
               </p>
               <div className="space-y-1">
                 {cat.items.map(it => (
                    <MobileMenuLink key={it.name} to={it.path} icon={() => it.icon} label={it.name} />
                 ))}
               </div>
             </div>
          ))}

          {!isNative && (
            <div className="px-3 pt-4 border-t border-slate-100 space-y-2">
               <Link 
                 to="/download"
                 onClick={() => setMobileMenuOpen(false)}
                 className="flex items-center gap-3 w-full p-3 hover:bg-emerald-50 text-emerald-700 rounded-xl transition-all group border border-emerald-200 bg-emerald-50/60 shadow-xs"
               >
                  <div className="p-2 bg-white rounded-xl shadow-xs text-emerald-600">
                    <Download size={16} />
                  </div>
                  <div className="text-left">
                    <span className="text-xs font-bold block text-emerald-800">Download Android App</span>
                    <span className="text-xs text-emerald-600 font-medium">BEU Alerts & Fast Notes (v59)</span>
                  </div>
               </Link>

               <button 
                 onClick={() => {
                   setMobileMenuOpen(false);
                   setShowSupportModal(true);
                 }}
                 className="flex items-center gap-3 w-full p-3 hover:bg-rose-50 text-rose-600 rounded-xl transition-all group border border-rose-100 bg-rose-50/50"
               >
                  <div className="p-2 bg-white rounded-xl shadow-xs">
                    <Award size={16} className="text-rose-600" />
                  </div>
                  <div className="text-left">
                    <span className="text-xs font-bold block text-rose-700">Dil Se Support</span>
                    <span className="text-xs text-rose-500 font-medium">Keep 38 GECs Education Free</span>
                  </div>
               </button>
            </div>
          )}
        </div>

        <div className="p-4 border-t border-slate-100 bg-slate-50">
          <button onClick={async () => { setMobileMenuOpen(false); await logout(); }} className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-white hover:bg-red-50 text-slate-600 hover:text-red-600 rounded-xl transition-all font-bold text-xs shadow-sm border border-slate-200 cursor-pointer">
            <LogOut size={16} strokeWidth={2.5} /> Logout Session
          </button>
        </div>
      </aside>
      
      {/* Native App-Style Mobile Bottom Navigation Bar */}
      <MobileBottomNav onOpenMenu={() => setMobileMenuOpen(true)} />
      
      {/* Verification Modal */}
      {isPhoneModalOpen && isOnline && <div className="fixed inset-0 z-[400] flex items-center justify-center p-6 bg-slate-50/80 backdrop-blur-xl"><div className="w-full max-w-md bg-white border border-slate-200 rounded-2xl p-8 text-center space-y-6 shadow-2xl relative overflow-hidden"><div className="inline-flex p-4 bg-blue-600/20 text-blue-500 rounded-2xl"><Shield size={32} /></div><h2 className="text-2xl font-bold text-slate-900 tracking-tight">Security Update</h2><p className="text-slate-500 text-sm">Please link your active mobile number to secure your college portal access.</p><form onSubmit={handlePhoneSubmit} className="space-y-4"><div className="flex gap-2"><div className="bg-slate-100 px-4 py-3 rounded-xl text-xs font-bold flex items-center">+91</div><input type="tel" maxLength={10} value={phone} onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))} placeholder="10-digit mobile number" className="flex-1 bg-slate-100 rounded-xl p-3 text-sm font-semibold outline-none" /></div><button type="submit" className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-sm transition-all shadow-md">Save & Continue</button></form></div></div>}

      {/* Support / Payment Scanner Modal (Frontend Only) */}
      {showSupportModal && !isNative && (
        <div className="fixed inset-0 z-[5000] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="w-full max-w-sm bg-white rounded-2xl shadow-2xl relative overflow-hidden flex flex-col animate-in zoom-in-95 duration-200">
            <div className="bg-gradient-to-r from-indigo-600 to-blue-600 p-6 text-center relative">
              <button 
                onClick={() => setShowSupportModal(false)}
                className="absolute top-4 right-4 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-xl transition-colors"
              >
                <X size={16} strokeWidth={3} />
              </button>
              <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-inner">
                <Award size={28} className="text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Support Our Team</h3>
              <p className="text-indigo-100 text-xs font-medium">Help us pay server bills!</p>
            </div>
            
            <div className="p-6 flex flex-col items-center">
              <div className="text-xs text-slate-500 text-center font-medium mb-6 leading-relaxed space-y-2">
                <p>Apna College Bihar is a 100% free platform built by students, for students. We provide notes, PYQs, important questions, study materials, and exam resources to help thousands of students prepare better.</p>
                <p>Maintaining our servers, website, and developing new features requires continuous support. If our platform has helped you in any way, please consider making a small contribution.</p>
              </div>
              
              <div className="p-2 bg-slate-50 border-2 border-dashed border-indigo-200 rounded-2xl mb-4">
                <div className="w-48 h-48 bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden relative group flex items-center justify-center flex-col gap-2">
                  <img 
                    src="/scanner-qr.jpg" 
                    alt="Payment QR Code" 
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                    className="w-full h-full object-contain p-2"
                  />
                  <div className="absolute inset-0 bg-slate-100 flex flex-col items-center justify-center hidden">
                    <span className="text-xs font-bold text-slate-400">QR Code Image</span>
                    <span className="text-xs text-slate-400">(Place scanner-qr.jpg in public folder)</span>
                  </div>
                </div>
              </div>

              <div 
                className="bg-indigo-50/70 hover:bg-indigo-100/60 border border-indigo-200/80 px-4 py-3 rounded-2xl w-full flex items-center justify-between group cursor-pointer transition-all shadow-xs" 
                onClick={() => {
                  navigator.clipboard.writeText("apnacollegebihar@slc");
                  toast.success("UPI ID Copied! ✅");
                }}
              >
                <div className="text-left">
                  <p className="text-xs font-bold text-indigo-600 uppercase tracking-wider mb-0.5">UPI ID (Tap to Copy)</p>
                  <p className="text-sm font-[900] text-slate-900 font-mono">apnacollegebihar@slc</p>
                </div>
                <button
                  type="button"
                  className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-black uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-sm group-hover:scale-105 cursor-pointer"
                >
                  <Copy size={13} strokeWidth={2.5} /> Copy
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
