import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';
import { AlertTriangle, Shield, Phone, ShieldCheck, MessageCircle } from 'lucide-react';
import { useAuth } from './context/AuthContext';
import { Capacitor } from '@capacitor/core';
import { App as CapacitorApp } from '@capacitor/app';
import { SplashScreen } from '@capacitor/splash-screen';
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
import InteractiveCanvasBackground from './components/InteractiveCanvasBackground';

import Home from './pages/Home';
import HomeOverview from './pages/HomeOverview';
import AppHub from './pages/AppHub';
import Login from './pages/Login';
import Signup from './pages/Signup';

// Pages (Lazy Loaded)
const Author = React.lazy(() => import('./pages/Author'));
const Notifications = React.lazy(() => import('./pages/Notifications'));
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
const FreeMentorship = React.lazy(() => import('./pages/FreeMentorship'));
const Extras = React.lazy(() => import('./pages/PersonalManager')); // Mapping Extras to PersonalManager
const Calendar = React.lazy(() => import('./pages/Calendar'));
const PrivacyPolicy = React.lazy(() => import('./pages/PrivacyPolicy'));
const Terms = React.lazy(() => import('./pages/Terms'));
const DeleteAccount = React.lazy(() => import('./pages/DeleteAccount'));
const About = React.lazy(() => import('./pages/About'));
const LectureFinder = React.lazy(() => import('./pages/LectureFinder'));
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
const ShortLinkResolver = React.lazy(() => import('./pages/ShortLinkResolver'));
const DownloadPage = React.lazy(() => import('./pages/DownloadPage'));

function LoadingScreen() {
  return (
    <div className="min-h-screen bg-[#0a0f1d] flex flex-col items-center justify-center">
      <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"></div>
      <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest animate-pulse">Loading Interface...</p>
    </div>
  );
}

function GlobalProfilePrompt() {
  const { user, loading, updateProfileData, logout } = useAuth();
  const [step, setStep] = useState('phone'); // 'phone' | 'college' | 'whatsapp'
  const [name, setName] = useState('');
  const [collegeName, setCollegeName] = useState('');
  const [district, setDistrict] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [branch, setBranch] = useState('');
  const [admissionYear, setAdmissionYear] = useState('');
  const [dob, setDob] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [canShow, setCanShow] = useState(false);

  const hasPhone = Boolean(user?.phone && user.phone.trim() !== '' && user.phone !== 'NOT LINKED');

  useEffect(() => {
    if (user) {
      setName(user.name && user.name !== 'Scholar' ? user.name : '');
      setCollegeName(user.collegeName || '');
      setDistrict(user.district || '');
      setPhoneNumber(user.phone && user.phone !== 'NOT LINKED' ? user.phone : '');
      setBranch(user.branch || '');
      setAdmissionYear(user.admissionYear || '');
      setDob(user.dob || '');

      // Set initial step based on what's missing
      if (!user.phone || user.phone.trim() === '' || user.phone === 'NOT LINKED') {
        setStep('phone');
        localStorage.removeItem('profile_prompt_dismissed');
      } else {
        setStep('college');
      }
    }
  }, [user]);

  // Grace period so profile has time to sync
  useEffect(() => {
    if (!user || loading) {
      setCanShow(false);
      return;
    }
    const timer = setTimeout(() => {
      setCanShow(true);
    }, 1200);
    return () => clearTimeout(timer);
  }, [user, loading]);

  if (loading || !user || !canShow) return null;

  const isAdmin = user?.role === 'admin' || user?.role === 'super_admin' || user?.email === 'prince86944@gmail.com';
  const isSkipped = dismissed || (hasPhone && localStorage.getItem('profile_prompt_dismissed') === 'true');
  const isCompleted = user?.profileCompleted === true || user?.profileCompleted === "true";

  // If user has NO phone, we ALWAYS require phone prompt regardless of skip
  const needsProfileUpdate = user && !isAdmin && !isSkipped && (
    !hasPhone ||
    !isCompleted ||
    (!user?.collegeName || user?.collegeName?.trim() === '') ||
    (!user?.branch || user?.branch?.trim() === '')
  );

  if (!needsProfileUpdate) return null;

  const handleDismiss = () => {
    if (hasPhone) {
      localStorage.setItem('profile_prompt_dismissed', 'true');
    }
    setDismissed(true);
  };

  // Immediate Save for Phone Number
  const handleSavePhone = async (e) => {
    e.preventDefault();
    const clean = phoneNumber.replace(/\D/g, '').trim();
    if (clean.length < 10) {
      return toast.error("Kripya valid 10-digit mobile number daalein!");
    }

    setIsSubmitting(true);
    try {
      await updateProfileData({
        phone: clean,
        name: name.trim() || user?.name || 'Scholar'
      });
      toast.success("Mobile number successfully link ho gaya! 📱✅");
      setStep('college');
    } catch (err) {
      toast.error("Failed to save mobile number. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Step 2: College & Academic Details
  const handleSaveCollege = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await updateProfileData({
        name: name.trim() || user?.name || 'Scholar',
        collegeName: collegeName.trim(),
        district: district.trim(),
        branch: branch.trim(),
        admissionYear: admissionYear.trim(),
        dob: dob.trim(),
        profileCompleted: true
      });
      setStep('whatsapp');
    } catch (err) {
      toast.error("Failed to save college details. Try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const submitFinal = async (wantsCallValue) => {
    setIsSubmitting(true);
    try {
      await updateProfileData({
        wantsCall: wantsCallValue,
        profileCompleted: true
      });
      localStorage.setItem('profile_prompt_dismissed', 'true');
      setDismissed(true);
      toast.success("Profile setup completed successfully!");
    } catch (err) {
      toast.error("Failed to save preference. Try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[99999] bg-[#0a0f1d]/90 backdrop-blur-md flex items-center justify-center p-4 font-['Inter'] animate-in fade-in duration-300">
      <div className="bg-white border border-slate-200/60 p-7 md:p-10 rounded-[2.5rem] shadow-2xl max-w-[440px] w-full relative overflow-hidden group">
        <button
          onClick={handleDismiss}
          className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center bg-slate-100 rounded-full text-slate-400 hover:bg-slate-200 hover:text-slate-800 transition-colors z-20 font-black text-sm"
          title="Close / Skip for now"
        >
          ✕
        </button>

        <div className="absolute -top-10 -right-10 w-36 h-36 bg-emerald-500/10 blur-[50px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-36 h-36 bg-blue-500/10 blur-[50px] rounded-full pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center">
          
          {/* STEP 1: Mandatory / Priority Mobile Number Verification */}
          {step === 'phone' && (
            <>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-white shadow-lg shadow-emerald-500/30 mb-5 animate-bounce">
                <Phone size={30} />
              </div>

              <h2 className="text-xl md:text-2xl font-[1000] text-center text-slate-900 uppercase tracking-tight mb-1.5">
                Link Mobile Number
              </h2>
              <p className="text-slate-500 text-xs font-medium text-center mb-6 leading-relaxed">
                Apna 10-digit mobile number jodein taaki aapka student portal, notes sync aur exam notices secure rahein.
              </p>

              <form onSubmit={handleSavePhone} className="w-full space-y-4">
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5">
                    Full Name
                  </label>
                  <input 
                    type="text" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    placeholder="Aapka Poora Naam" 
                    className="w-full bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:bg-white rounded-2xl p-3.5 text-slate-900 text-xs font-bold outline-none transition-all placeholder:text-slate-400" 
                    required 
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5">
                    WhatsApp / Mobile Number
                  </label>
                  <div className="relative flex items-center">
                    <span className="absolute left-3.5 text-xs font-black text-slate-400 select-none">
                      🇮🇳 +91
                    </span>
                    <input 
                      type="tel" 
                      value={phoneNumber} 
                      onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, '').slice(0, 10))} 
                      placeholder="9876543210" 
                      autoFocus
                      className="w-full bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:bg-white rounded-2xl p-3.5 pl-16 text-slate-900 text-sm font-extrabold outline-none tracking-widest transition-all placeholder:text-slate-400 placeholder:tracking-normal" 
                      required 
                    />
                  </div>
                  <span className="text-[10px] text-slate-400 font-medium block mt-1">10-digit mobile number bina 0 ya country code ke.</span>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting || phoneNumber.replace(/\D/g, '').length < 10}
                  className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-[1000] py-4 rounded-2xl shadow-lg shadow-emerald-600/30 transition-all active:scale-95 text-xs tracking-widest uppercase mt-4 disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? "Linking Number..." : "Save Mobile Number 📱"}
                </button>
              </form>

              <button
                onClick={handleDismiss}
                className="mt-4 text-slate-400 hover:text-slate-600 text-[10px] font-black uppercase tracking-widest transition-colors cursor-pointer"
              >
                Skip for now
              </button>
            </>
          )}

          {/* STEP 2: College & Academic Details */}
          {step === 'college' && (
            <>
              <div className="p-3.5 bg-blue-600/10 rounded-2xl border border-blue-500/20 mb-5 text-blue-600">
                <ShieldCheck size={28} />
              </div>
              <h2 className="text-xl md:text-2xl font-[1000] text-center text-slate-900 uppercase tracking-tight mb-1.5">
                College Details
              </h2>
              <p className="text-slate-500 text-xs font-medium text-center mb-5">
                Apna college aur branch select karein taaki accurate syllabus mil sake.
              </p>

              <form onSubmit={handleSaveCollege} className="w-full space-y-3.5 max-h-[50vh] overflow-y-auto px-1 scrollbar-hide pb-2">
                <div>
                  <label className="block text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">College Name</label>
                  <input type="text" value={collegeName} onChange={(e) => setCollegeName(e.target.value)} placeholder="e.g. GEC Vaishali / MIT" className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white rounded-xl p-3 text-slate-900 text-xs font-bold outline-none transition-all placeholder:text-slate-400" required />
                </div>
                <div>
                  <label className="block text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Home District</label>
                  <input type="text" value={district} onChange={(e) => setDistrict(e.target.value)} placeholder="e.g. Patna / Gaya" className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white rounded-xl p-3 text-slate-900 text-xs font-bold outline-none transition-all placeholder:text-slate-400" required />
                </div>
                <div className="flex gap-3">
                  <div className="flex-1">
                    <label className="block text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Branch</label>
                    <input type="text" value={branch} onChange={(e) => setBranch(e.target.value)} placeholder="e.g. CSE / CIVIL" className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white rounded-xl p-3 text-slate-900 text-xs font-bold outline-none transition-all placeholder:text-slate-400" required />
                  </div>
                  <div className="flex-1">
                    <label className="block text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Batch / Year</label>
                    <input type="text" value={admissionYear} onChange={(e) => setAdmissionYear(e.target.value.replace(/\D/g, '').slice(0, 4))} placeholder="2026" className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white rounded-xl p-3 text-slate-900 text-xs font-bold outline-none transition-all placeholder:text-slate-400" required />
                  </div>
                </div>
                <div>
                  <label className="block text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Date of Birth</label>
                  <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white rounded-xl p-3 text-slate-900 text-xs font-bold outline-none transition-all" required />
                </div>
                
                <button type="submit" disabled={isSubmitting} className="w-full bg-blue-600 hover:bg-blue-500 text-white font-[1000] py-3.5 rounded-xl shadow-md transition-all active:scale-95 text-xs tracking-widest uppercase mt-3">
                  {isSubmitting ? "Saving..." : "Save College Profile"}
                </button>
              </form>

              <button
                onClick={handleDismiss}
                className="mt-3 text-slate-400 hover:text-slate-600 text-[10px] font-black uppercase tracking-widest transition-colors cursor-pointer"
              >
                Skip for now
              </button>
            </>
          )}

          {/* STEP 3: WhatsApp Alerts */}
          {step === 'whatsapp' && (
            <>
              <div className="p-3.5 bg-emerald-500/10 rounded-2xl border border-emerald-500/20 mb-5 text-emerald-600 animate-pulse">
                <MessageCircle size={28} />
              </div>
              <h2 className="text-xl md:text-2xl font-[1000] text-center text-slate-900 uppercase tracking-tight mb-2">WhatsApp Channel</h2>
              <p className="text-slate-500 text-xs font-medium text-center mb-6">Apna College Bihar ke sabhi important BEU updates aur notes sidhe WhatsApp par paayein.</p>
              
              <div className="flex gap-3 w-full mb-5">
                <button onClick={() => submitFinal(false)} disabled={isSubmitting} className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-600 font-[1000] py-3.5 rounded-xl transition-all active:scale-95 text-[10px] tracking-widest uppercase">
                  No Thanks
                </button>
                <button onClick={() => submitFinal(true)} disabled={isSubmitting} className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white font-[1000] py-3.5 rounded-xl shadow-md transition-all active:scale-95 text-[10px] tracking-widest uppercase">
                  {isSubmitting ? "Saving..." : "Join Now"}
                </button>
              </div>
              
              <a href="https://whatsapp.com/channel/0029VbC6FsH3wtb5UEDvrW0a" target="_blank" rel="noopener noreferrer" className="text-emerald-600 text-[10px] font-black uppercase tracking-widest hover:underline">
                📲 Open WhatsApp Channel
              </a>
            </>
          )}

          <button
            onClick={() => logout()}
            className="mt-5 text-red-400 hover:text-red-500 text-[9px] font-black uppercase tracking-widest transition-colors cursor-pointer"
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
  const isNative = Capacitor.isNativePlatform() 
    || !!window.Capacitor?.isNative 
    || window.location.protocol === 'file:' 
    || (typeof window !== 'undefined' && (window.location.hostname === 'localhost' && !window.location.port));

  useEffect(() => {
    if (isNative) {
      SplashScreen.hide().catch(() => {});
    }
  }, [isNative]);

  const [showSplash, setShowSplash] = useState(() => {
    // For web visitors and AdSense evaluators, do not show blocking full-screen overlay
    if (!isNative) return false;
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

  try {
    return (
      <>
        {/* Splash screen as overlay so DOM renders immediately for bots */}
        {showSplash && (
          <div className="fixed inset-0 z-[999999] bg-[#0f172a] flex flex-col items-center justify-center overflow-hidden">
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
              <div className="relative mb-6 w-24 h-24 flex items-center justify-center rounded-full bg-slate-800/40 p-2 border border-slate-700/30 shadow-[0_0_40px_rgba(59,130,246,0.15)] animate-splash-logo">
                <img 
                  src="/logo-acb.png" 
                  alt="Logo" 
                  className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                />
              </div>
              <h1 className="text-2xl font-black text-white tracking-wider mb-2 uppercase animate-text-slide">
                Apna College <span className="text-blue-500">Bihar</span>
              </h1>
              <p className="text-xs text-slate-400 font-medium tracking-wide animate-text-slide" style={{ animationDelay: '0.4s' }}>
                Your Trustworthy Engineering Companion
              </p>
              <div className="w-32 h-1 bg-slate-800/80 rounded-full overflow-hidden mt-8">
                <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full animate-bar-progress"></div>
              </div>
            </div>
          </div>
        )}

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
        <InteractiveCanvasBackground />
        <React.Suspense fallback={<LoadingScreen />}>
          <Routes>
            {/* Public Routes */}
            <Route path="/hub" element={<AppHub />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/privacy" element={<Navigate to="/privacy-policy" replace />} />
            <Route path="/dashboard/notes" element={<Navigate to="/notes" replace />} />
            <Route path="/dashboard/cgpa" element={<Navigate to="/cgpa" replace />} />
            <Route path="/dashboard/ugeac-predictor" element={<Navigate to="/ugeac-predictor" replace />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/delete-account" element={<DeleteAccount />} />
            <Route path="/about" element={<About />} />
            <Route path="/author" element={<Author />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dmca" element={<DMCAPolicy />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/directory" element={isStandalone ? <Navigate to="/" replace /> : <SitemapDirectory />} />
            <Route path="/p/:shortId" element={<ShortLinkResolver />} />

            {/* Landing page for all visitors (web and mobile app) */}
            
            {isNative && <Route path="/" element={<AppHub />} />}
            <Route element={<DashboardLayout />}>
              {!isNative && <Route path="/" element={<Home />} />}
              <Route path="/download" element={<DownloadPage />} />
              <Route path="/apps" element={<Navigate to="/download" replace />} />
              <Route path="/download-app" element={<Navigate to="/download" replace />} />
              <Route path="/desktop" element={<Navigate to="/download" replace />} />
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
              <Route path="/lecture-finder" element={<LectureFinder />} />
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
              <Route path="/mentorship" element={<FreeMentorship />} />
              <Route path="/free-mentorship" element={<FreeMentorship />} />
              <Route path="/syllabus" element={<BeuSyllabus />} />
              <Route path="/syllabus/:branchId" element={<BeuSyllabus />} />
              <Route path="/beu-syllabus" element={<BeuSyllabus />} />
              <Route path="/beu-syllabus/:branchId" element={<BeuSyllabus />} />
              <Route path="/colleges" element={<CollegeDirectory />} />
              <Route path="/college/:collegeSlug" element={<CollegeProfile />} />
              <Route path="/college/:collegeSlug/:section" element={<CollegeProfile />} />
              <Route path="/branches" element={<BranchHub />} />
              <Route path="/branch" element={<BranchHub />} />
              <Route path="/branch/:branchId" element={<BranchHub />} />
              <Route path="/branch/:branchId/:section" element={<BranchHub />} />
              <Route path="/ugeac/:page" element={<UgeacInfo />} />
              <Route path="/subject/:subjectSlug" element={<SubjectPage />} />
              <Route path="/subject/:subjectSlug/:section" element={<SubjectPage />} />
              <Route path="/hackathons" element={<HackathonHub />} />
              <Route path="/compare" element={<CompareColleges />} />
              <Route path="/compare-colleges" element={<CompareColleges />} />
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
