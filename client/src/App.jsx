import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';
import { AlertTriangle, Shield, Phone, ShieldCheck } from 'lucide-react';
import { useAuth } from './context/AuthContext';
import { Capacitor } from '@capacitor/core';
import { App as CapacitorApp } from '@capacitor/app';
import { AdMob } from '@capacitor-community/admob';

// Layouts
import DashboardLayout from './layouts/DashboardLayout';

// Auth Components
import ProtectedRoute from './components/ProtectedRoute';
import AdminRoute from './components/AdminRoute';
import SmartRedirect from './components/SmartRedirect';
import CookieBanner from './components/CookieBanner';
import WhatsAppPopup from './components/WhatsAppPopup';
import ScrollToTop from './components/ScrollToTop';

// Pages (Lazy Loaded)
const Home = React.lazy(() => import('./pages/Home'));
const HomeOverview = React.lazy(() => import('./pages/HomeOverview'));
const Author = React.lazy(() => import('./pages/Author'));
const AppHub = React.lazy(() => import('./pages/AppHub'));
const Notifications = React.lazy(() => import('./pages/Notifications'));
const Login = React.lazy(() => import('./pages/Login'));
const Signup = React.lazy(() => import('./pages/Signup'));
const UgeacPredictor = React.lazy(() => import('./pages/UgeacPredictor'));
const Notes = React.lazy(() => import('./pages/Notes'));
const PYQ = React.lazy(() => import('./pages/PYQ'));
const BeuSyllabus = React.lazy(() => import('./pages/BeuSyllabus'));
const BeuCgpa = React.lazy(() => import('./pages/BeuCgpa'));
const StudyDashboard = React.lazy(() => import('./pages/StudyDashboard'));
const StudyResources = React.lazy(() => import('./pages/StudyResources'));
const ScientificCalc = React.lazy(() => import('./pages/ScientificCalc'));
const AdminPanel = React.lazy(() => import('./pages/AdminPanel'));
const Achievements = React.lazy(() => import('./pages/Achievements'));
const Group = React.lazy(() => import('./pages/Group'));
const GroupDetail = React.lazy(() => import('./pages/GroupDetail'));
const Timetable = React.lazy(() => import('./pages/Timetable'));
const Attendance = React.lazy(() => import('./pages/Attendance'));
const BeuResult = React.lazy(() => import('./pages/BeuResult'));
const Extras = React.lazy(() => import('./pages/PersonalManager')); // Mapping Extras to PersonalManager
const Calendar = React.lazy(() => import('./pages/Calendar'));
const PrivacyPolicy = React.lazy(() => import('./pages/PrivacyPolicy'));
const Terms = React.lazy(() => import('./pages/Terms'));
const DeleteAccount = React.lazy(() => import('./pages/DeleteAccount'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const SearchSEO = React.lazy(() => import('./pages/SearchSEO'));
const DMCAPolicy = React.lazy(() => import('./pages/DMCAPolicy'));
const Disclaimer = React.lazy(() => import('./pages/Disclaimer'));
const BeuToolSEO = React.lazy(() => import('./pages/BeuToolSEO'));
const FeatureSEO = React.lazy(() => import('./pages/FeatureSEO'));
const CollegeProfile = React.lazy(() => import('./pages/CollegeProfile'));
const BranchHub = React.lazy(() => import('./pages/BranchHub'));
const UgeacInfo = React.lazy(() => import('./pages/UgeacInfo'));
const SubjectPage = React.lazy(() => import('./pages/SubjectPage'));
const HackathonHub = React.lazy(() => import('./pages/HackathonHub'));
const SitemapDirectory = React.lazy(() => import('./pages/SitemapDirectory'));
const CollegeDirectory = React.lazy(() => import('./pages/CollegeDirectory'));
const CompareColleges = React.lazy(() => import('./pages/CompareColleges'));
const PercentilePredictor = React.lazy(() => import('./pages/PercentilePredictor'));
const Blog = React.lazy(() => import('./pages/Blog'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

function LoadingScreen() {
  return (
    <div className="min-h-screen bg-[#0a0f1d] flex flex-col items-center justify-center">
      <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"></div>
      <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest animate-pulse">Loading Interface...</p>
    </div>
  );
}

function GlobalProfilePrompt() {
  const { user, updateProfileData, logout } = useAuth();
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [collegeName, setCollegeName] = useState('');
  const [district, setDistrict] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [branch, setBranch] = useState('');
  const [admissionYear, setAdmissionYear] = useState('');
  const [dob, setDob] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (user) {
      setName(user.name && user.name !== 'Scholar' ? user.name : '');
      setCollegeName(user.collegeName || '');
      setDistrict(user.district || '');
      setPhoneNumber(user.phone && user.phone !== 'NOT LINKED' ? user.phone : '');
      setBranch(user.branch || '');
      setAdmissionYear(user.admissionYear || '');
      setDob(user.dob || '');
    }
  }, [user]);

  const needsProfileUpdate = user && (
    (!user?.phone || user?.phone?.trim() === "" || user?.phone === "NOT LINKED") ||
    (!user?.name || user?.name?.trim() === "" || user?.name === "Scholar") ||
    (!user?.collegeName || user?.collegeName?.trim() === "") ||
    (!user?.district || user?.district?.trim() === "") ||
    (!user?.branch || user?.branch?.trim() === "") ||
    (!user?.admissionYear || user?.admissionYear?.trim() === "") ||
    (!user?.dob || user?.dob?.trim() === "") ||
    (user?.wantsCall === undefined)
  );

  if (!needsProfileUpdate) return null;

  const handleNextStep = async (e) => {
    e.preventDefault();
    if (!name.trim()) return toast.error("Please enter your name!");
    if (!collegeName.trim()) return toast.error("Please enter your college name!");
    if (!district.trim()) return toast.error("Please enter your district name!");
    if (!branch.trim()) return toast.error("Please enter your branch!");
    if (!admissionYear.trim()) return toast.error("Please enter your admission year!");
    if (!dob.trim()) return toast.error("Please select your date of birth!");
    if (phoneNumber.length < 10) return toast.error("Enter a valid 10-digit mobile number!");
    
    setIsSubmitting(true);
    try {
      await updateProfileData({
        name: name.trim(),
        collegeName: collegeName.trim(),
        district: district.trim(),
        phone: phoneNumber,
        branch: branch.trim(),
        admissionYear: admissionYear.trim(),
        dob: dob.trim()
      });
      setStep(2);
    } catch (err) {
      toast.error("Failed to save details. Try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const submitFinal = async (wantsCallValue) => {
    setIsSubmitting(true);
    try {
      await updateProfileData({
        wantsCall: wantsCallValue
      });
      toast.success("Profile setup completed successfully!");
    } catch (err) {
      toast.error("Failed to save preference. Try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[99999] bg-[#0a0f1d]/95 backdrop-blur-md flex items-center justify-center p-4 font-['Inter'] animate-in fade-in duration-300">
      <div className="bg-white border border-slate-200/50 p-8 md:p-12 rounded-[2.5rem] shadow-2xl max-w-[450px] w-full relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 blur-[50px] rounded-full"></div>
        <div className="relative z-10 flex flex-col items-center">
          
          {step === 1 ? (
            <>
              <div className="p-4 bg-blue-600/10 rounded-full border border-blue-500/20 mb-6">
                <ShieldCheck className="text-blue-500 w-10 h-10" />
              </div>
              <h2 className="text-2xl md:text-3xl font-[900] text-center text-slate-900 uppercase tracking-tighter mb-2">Profile Setup</h2>
              <p className="text-slate-500 text-xs font-bold text-center mb-6">Please complete your details to unlock and secure your college portal access.</p>

              <form onSubmit={handleNextStep} className="w-full space-y-4 max-h-[50vh] overflow-y-auto px-1 scrollbar-hide pb-4">
                <div>
                  <label className="block text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1.5">Full Name</label>
                  <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="YOUR FULL NAME" className="w-full bg-slate-100 border border-slate-200 focus:border-blue-500/50 rounded-[1.2rem] p-4 text-slate-900 text-xs font-bold outline-none transition-all placeholder:text-slate-400" required />
                </div>
                <div>
                  <label className="block text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1.5">College Name</label>
                  <input type="text" value={collegeName} onChange={(e) => setCollegeName(e.target.value)} placeholder="YOUR COLLEGE NAME" className="w-full bg-slate-100 border border-slate-200 focus:border-blue-500/50 rounded-[1.2rem] p-4 text-slate-900 text-xs font-bold outline-none transition-all placeholder:text-slate-400" required />
                </div>
                <div>
                  <label className="block text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1.5">District</label>
                  <input type="text" value={district} onChange={(e) => setDistrict(e.target.value)} placeholder="YOUR DISTRICT NAME" className="w-full bg-slate-100 border border-slate-200 focus:border-blue-500/50 rounded-[1.2rem] p-4 text-slate-900 text-xs font-bold outline-none transition-all placeholder:text-slate-400" required />
                </div>
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="block text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1.5">Branch</label>
                    <input type="text" value={branch} onChange={(e) => setBranch(e.target.value)} placeholder="e.g. CSE" className="w-full bg-slate-100 border border-slate-200 focus:border-blue-500/50 rounded-[1.2rem] p-4 text-slate-900 text-xs font-bold outline-none transition-all placeholder:text-slate-400" required />
                  </div>
                  <div className="flex-1">
                    <label className="block text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1.5">Admission Year</label>
                    <input type="text" value={admissionYear} onChange={(e) => setAdmissionYear(e.target.value.replace(/\D/g, '').slice(0, 4))} placeholder="e.g. 2024" className="w-full bg-slate-100 border border-slate-200 focus:border-blue-500/50 rounded-[1.2rem] p-4 text-slate-900 text-xs font-bold outline-none transition-all placeholder:text-slate-400" required />
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="block text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1.5">Date of Birth</label>
                    <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} className="w-full bg-slate-100 border border-slate-200 focus:border-blue-500/50 rounded-[1.2rem] p-4 text-slate-900 text-xs font-bold outline-none transition-all placeholder:text-slate-400" required />
                  </div>
                  <div className="flex-1">
                    <label className="block text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1.5">Mobile Number</label>
                    <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, '').slice(0, 10))} placeholder="10-DIGIT MOBILE NO." className="w-full bg-slate-100 border border-slate-200 focus:border-blue-500/50 rounded-[1.2rem] p-4 text-slate-900 text-xs font-bold outline-none transition-all placeholder:text-slate-400" required />
                  </div>
                </div>
                
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-[1000] py-4.5 rounded-[1.5rem] shadow-[0_10px_40px_rgba(37,99,235,0.4)] transition-all active:scale-95 text-xs tracking-widest uppercase mt-4">
                  Save & Continue
                </button>
              </form>
            </>
          ) : (
            <>
              <div className="p-4 bg-amber-500/10 rounded-full border border-amber-500/20 mb-6">
                <Phone className="text-amber-500 w-10 h-10" />
              </div>
              <h2 className="text-2xl md:text-3xl font-[900] text-center text-slate-900 uppercase tracking-tighter mb-2">Almost Done!</h2>
              <p className="text-slate-500 text-xs font-bold text-center mb-8">Do you want to receive calls from the Apna College Bihar team regarding free counselling, exam updates, and exclusive resources?</p>
              
              <div className="flex gap-4 w-full">
                <button onClick={() => submitFinal(false)} disabled={isSubmitting} className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-600 font-[1000] py-4.5 rounded-[1.5rem] transition-all active:scale-95 text-[10px] tracking-widest uppercase">
                  No Thanks
                </button>
                <button onClick={() => submitFinal(true)} disabled={isSubmitting} className="flex-1 bg-blue-600 hover:bg-blue-500 text-white font-[1000] py-4.5 rounded-[1.5rem] shadow-[0_10px_40px_rgba(37,99,235,0.4)] transition-all active:scale-95 text-[10px] tracking-widest uppercase">
                  {isSubmitting ? "Saving..." : "Yes, Call Me"}
                </button>
              </div>
            </>
          )}

          <button
            onClick={() => logout()}
            className="mt-6 text-red-400 hover:text-red-500 text-[9px] font-black uppercase tracking-widest transition-colors"
          >
            Sign out from this account
          </button>
        </div>
      </div>
    </div>
  );
}

function GlobalCounsellingPopup() {
  return null;

  const handleClose = () => {
    sessionStorage.setItem('ugeacPopupSeen', 'true');
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[99998] bg-[#0a0f1d]/80 backdrop-blur-sm flex items-center justify-center p-4 font-['Inter'] animate-in fade-in duration-300">
      <div className="bg-white border border-slate-200/50 p-6 md:p-8 rounded-[2rem] shadow-2xl max-w-[650px] w-full relative overflow-hidden group">
        <button onClick={handleClose} className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-slate-100 rounded-full text-slate-500 hover:bg-slate-200 hover:text-slate-900 transition-colors z-20 font-black text-lg">
          ×
        </button>
        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/10 blur-[50px] rounded-full pointer-events-none"></div>
        <div className="relative z-10 flex flex-col items-center">
          <h2 className="text-xl md:text-3xl font-[900] text-center text-slate-900 uppercase tracking-tighter mb-2">🎯 FREE UGEAC Counselling</h2>
          <p className="text-slate-500 text-[11px] md:text-xs font-bold text-center mb-6 leading-relaxed">Register now for 100% Free Expert Guidance and secure the best Bihar Engineering College based on your JEE Rank!</p>
          
          <div className="w-full h-[65vh] max-h-[550px] rounded-[1.5rem] overflow-hidden border-2 border-indigo-50 bg-slate-50 shadow-inner relative">
            <div className="absolute inset-0 flex items-center justify-center -z-10">
              <div className="w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSeAnJ1-KOeiLnXZ8E6lk2TLwOTQi0LOOO4oHM8VWMxkhHE2fQ/viewform?embedded=true" 
              width="100%" 
              height="100%" 
              frameBorder="0" 
              marginHeight="0" 
              marginWidth="0"
              title="UGEAC Counselling Form"
              className="relative z-10 bg-transparent"
            >
              Loading…
            </iframe>
          </div>
          
          <button onClick={handleClose} className="mt-6 text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-slate-600 transition-colors active:scale-95">
            Maybe Later / Close
          </button>
        </div>
      </div>
    </div>
  );
}


function SplashUI() {
  return (
    <div className="fixed inset-0 z-[99999] bg-[#0f172a] flex flex-col items-center justify-center overflow-hidden">
      <style>{`
        @keyframes splashFadeIn {
          from { opacity: 0; transform: scale(0.85); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes textSlideUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes barProgress {
          from { width: 0%; }
          to { width: 100%; }
        }
        .animate-splash-logo {
          animation: splashFadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-text-slide {
          animation: textSlideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards;
          opacity: 0;
        }
        .animate-bar-progress {
          animation: barProgress 1.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
      `}</style>
      <div className="flex flex-col items-center max-w-sm px-6 text-center select-none animate-pulse-subtle">
        {/* Glowing Animated Logo Container */}
        <div className="relative mb-6 w-24 h-24 flex items-center justify-center rounded-full bg-slate-800/40 p-2 border border-slate-700/30 shadow-[0_0_40px_rgba(59,130,246,0.15)] animate-splash-logo">
          <img 
            src="/logo-acb.png" 
            alt="Logo" 
            className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]"
          />
        </div>

        {/* Text Branding */}
        <h1 className="text-2xl font-black text-white tracking-wider mb-2 uppercase animate-text-slide">
          Apna College <span className="text-blue-500">Bihar</span>
        </h1>
        <p className="text-xs text-slate-400 font-medium tracking-wide animate-text-slide" style={{ animationDelay: '0.4s' }}>
          Your Trustworthy Engineering Companion
        </p>

        {/* Loading Indicator */}
        <div className="w-32 h-1 bg-slate-800/80 rounded-full overflow-hidden mt-8">
          <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full animate-bar-progress"></div>
        </div>
      </div>
    </div>
  );
}


function App() {
  const { user } = useAuth();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const isNative = Capacitor.isNativePlatform();

  // Show splash screen only once per session
  const [showSplash, setShowSplash] = useState(() => {
    if (window.__PRERENDER_INJECTED && !window.Capacitor?.isNativePlatform?.()) return false;
    
    // DETECT GOOGLEBOT / ADSENSE BOT
    const userAgent = navigator.userAgent || "";
    const isBot = userAgent.indexOf('Mediapartners-Google') !== -1 || userAgent.indexOf('Googlebot') !== -1;
    if (isBot) return false; // SKIPS SPLASH SCREEN COMPLETELY FOR BOTS

    return !sessionStorage.getItem('splashPlayed');
  });

  useEffect(() => {
    if (showSplash) {
      const timer = setTimeout(() => {
        setShowSplash(false);
        sessionStorage.setItem('splashPlayed', 'true');
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [showSplash]);

  // Parse standalone param and save to session storage to persist it across navigations
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('standalone') === 'true') {
    sessionStorage.setItem('standalone', 'true');
  }
  const isStandalone = isNative || (sessionStorage.getItem('standalone') === 'true');

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [showExitPrompt, setShowExitPrompt] = useState(false);

  useEffect(() => {
    if (isNative) {
      AdMob.initialize().catch(console.error);
      
      const handleBackButton = async ({ canGoBack }) => {
        if (showExitPrompt) {
          setShowExitPrompt(false);
          return;
        }
        if (!canGoBack || window.location.pathname === '/' || window.location.pathname === '/hub') {
          setShowExitPrompt(true);
        } else {
          window.history.back();
        }
      };
      
      const listener = CapacitorApp.addListener('backButton', handleBackButton);
      return () => {
        listener.then(l => l.remove());
      };
    }
  }, [isNative, showExitPrompt]);

  if (showSplash) {
    return (
      <div className="fixed inset-0 z-[99999] bg-[#0f172a] flex flex-col items-center justify-center overflow-hidden">
        <style>{`
          @keyframes splashFadeIn {
            from { opacity: 0; transform: scale(0.85); }
            to { opacity: 1; transform: scale(1); }
          }
          @keyframes textSlideUp {
            from { opacity: 0; transform: translateY(12px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes barProgress {
            from { width: 0%; }
            to { width: 100%; }
          }
          .animate-splash-logo {
            animation: splashFadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
          .animate-text-slide {
            animation: textSlideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards;
            opacity: 0;
          }
          .animate-bar-progress {
            animation: barProgress 1.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          }
        `}</style>
        <div className="flex flex-col items-center max-w-sm px-6 text-center select-none animate-pulse-subtle">
          {/* Glowing Animated Logo Container */}
          <div className="relative mb-6 w-24 h-24 flex items-center justify-center rounded-full bg-slate-800/40 p-2 border border-slate-700/30 shadow-[0_0_40px_rgba(59,130,246,0.15)] animate-splash-logo">
            <img 
              src="/logo-acb.png" 
              alt="Logo" 
              className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]"
            />
          </div>

          {/* Text Branding */}
          <h1 className="text-2xl font-black text-white tracking-wider mb-2 uppercase animate-text-slide">
            Apna College <span className="text-blue-500">Bihar</span>
          </h1>
          <p className="text-xs text-slate-400 font-medium tracking-wide animate-text-slide" style={{ animationDelay: '0.4s' }}>
            Your Trustworthy Engineering Companion
          </p>

          {/* Loading Indicator */}
          <div className="w-32 h-1 bg-slate-800/80 rounded-full overflow-hidden mt-8">
            <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full animate-bar-progress"></div>
          </div>
        </div>
      </div>
    );
  }

  try {
    return (
      <>
        {showExitPrompt && (
          <div className="fixed inset-0 z-[999999] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
            <div className="bg-white rounded-2xl w-full max-w-[320px] shadow-2xl p-6 text-center animate-scale-in">
              <h3 className="text-xl font-bold text-slate-800 mb-2">Exit App</h3>
              <p className="text-slate-500 mb-6 font-medium">Are you sure you want to exit?</p>
              <div className="flex gap-3 w-full">
                <button 
                  onClick={() => setShowExitPrompt(false)}
                  className="flex-1 py-3 px-4 bg-slate-100 text-slate-600 rounded-xl font-bold hover:bg-slate-200 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  onClick={() => CapacitorApp.exitApp()}
                  className="flex-1 py-3 px-4 bg-rose-500 text-white rounded-xl font-bold hover:bg-rose-600 transition-colors shadow-[0_4px_12px_rgba(244,63,94,0.3)]"
                >
                  Exit
                </button>
              </div>
            </div>
          </div>
        )}
        <Toaster position="top-right" />
        <GlobalCounsellingPopup />
        <GlobalProfilePrompt />
        <CookieBanner />
        <WhatsAppPopup />
        <ScrollToTop />
        <React.Suspense fallback={<SplashUI />}>
          <Routes>
            {/* Public Routes */}
            <Route path="/hub" element={<AppHub />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/delete-account" element={<DeleteAccount />} />
            <Route path="/about" element={<About />} />
            <Route path="/author" element={<Author />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dmca" element={<DMCAPolicy />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/directory" element={isStandalone ? <Navigate to="/" replace /> : <SitemapDirectory />} />

            {/* Landing page for all visitors (web and mobile app) */}
            
            {isNative && <Route path="/" element={<AppHub />} />}
            <Route element={<DashboardLayout />}>
              {!isNative && <Route path="/" element={<Home />} />}
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/search/:keyword" element={<SearchSEO />} />
              <Route path="/notes" element={<Notes />} />
              <Route path="/notes/:branchId/:semesterId" element={<Notes />} />
              <Route path="/notes/:branchId" element={<Notes />} />
              <Route path="/pyq" element={<PYQ />} />
              <Route path="/pyq/:branchId/:semesterId" element={<PYQ />} />
              <Route path="/pyq/:branchId" element={<PYQ />} />
              <Route path="/attendance" element={<Attendance />} />
              <Route path="/timetable" element={<Timetable />} />
              <Route path="/study" element={<StudyDashboard />} />
              <Route path="/study-resources" element={<StudyResources />} />
              <Route path="/calculator" element={<ScientificCalc />} />
              <Route path="/groups" element={<Group />} />
              <Route path="/groups/:groupId" element={<GroupDetail />} />
              <Route path="/achievements" element={<Achievements />} />
              <Route path="/extras" element={<Extras />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/cgpa" element={<BeuCgpa />} />
              <Route path="/ugeac-predictor" element={<UgeacPredictor />} />
              <Route path="/beu-result" element={<BeuResult />} />
              <Route path="/syllabus" element={<BeuSyllabus />} />
              <Route path="/syllabus/:branchId" element={<BeuSyllabus />} />
              <Route path="/colleges" element={<CollegeDirectory />} />
              <Route path="/college/:collegeSlug" element={<CollegeProfile />} />
              <Route path="/college/:collegeSlug/:section" element={<CollegeProfile />} />
              <Route path="/branch/:branchId" element={<BranchHub />} />
              <Route path="/branch/:branchId/:section" element={<BranchHub />} />
              <Route path="/ugeac/:page" element={<UgeacInfo />} />
              <Route path="/subject/:subjectSlug" element={<SubjectPage />} />
              <Route path="/subject/:subjectSlug/:section" element={<SubjectPage />} />
              <Route path="/hackathons" element={<HackathonHub />} />
              <Route path="/compare" element={<CompareColleges />} />
              <Route path="/compare/:college1VsCollege2" element={<CompareColleges />} />
              <Route path="/percentile-predictor" element={<PercentilePredictor />} />
              {/* BEU Tool SEO Routes – Attendance, Timetable, CGPA, Result */}
              <Route path="/beu/:tool" element={<BeuToolSEO />} />
              <Route path="/beu/:tool/:keyword" element={<BeuToolSEO />} />
              {/* Feature SEO Routes – Study Timer, Groups, Calculator, etc. */}
              <Route path="/feature/:feature" element={<FeatureSEO />} />
              <Route path="/feature/:feature/:keyword" element={<FeatureSEO />} />
            </Route>

            {/* Protected Dashboard Routes */}
            <Route element={<ProtectedRoute />}>
              <Route element={<DashboardLayout />}>
                
                <Route path="/extras" element={<Extras />} />

                {/* Admin Routes */}
                <Route element={<AdminRoute />}>
                  <Route path="/dashboard/admin" element={<AdminPanel />} />
                </Route>
              </Route>
            </Route>

            {/* Smart Fallback – redirects old .html URLs to correct college pages */}
            <Route path="*" element={
              <>
                <SmartRedirect />
                <NotFound />
              </>
            } />
          </Routes>
        </React.Suspense>
      </>
    );
  } catch (error) {
    console.error("App Crash:", error);
    return (
      <div className="min-h-screen bg-[#0a0f1d] flex flex-col items-center justify-center p-10 text-center">
        <div className="w-16 h-16 bg-red-600/20 text-red-500 rounded-2xl flex items-center justify-center mb-6"><AlertTriangle size={32} /></div>
        <h2 className="text-xl font-black text-white uppercase tracking-tighter mb-2">Interface Error</h2>
        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-relaxed mb-8">Something went wrong while initializing the hub. Please try restarting the app.</p>
        <button onClick={() => setLoading(true)} className="px-8 py-4 bg-white text-slate-900 rounded-2xl text-[10px] font-black uppercase tracking-widest active:scale-95 transition-all">Retry Hub</button>
      </div>
    );
  }
}

export default App;
