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
  const [step, setStep] = useState('form'); // 'form' | 'call'
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

  useEffect(() => {
    if (user) {
      setName(user.name && user.name !== 'Scholar' ? user.name : '');
      setCollegeName(user.collegeName || '');
      setDistrict(user.district || '');
      setPhoneNumber(user.phone && user.phone !== 'NOT LINKED' ? user.phone : '');
      setBranch(user.branch || '');
      setAdmissionYear(user.admissionYear || '');
      setDob(user.dob || '');

      // If user already has filled college and phone, but call preference is missing, go straight to call step
      const hasBasicDetails = Boolean(user.phone && user.phone !== 'NOT LINKED' && user.collegeName);
      if (hasBasicDetails && user.wantsCall === undefined) {
        setStep('call');
      } else {
        setStep('form');
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
    }, 1000);
    return () => clearTimeout(timer);
  }, [user, loading]);

  if (loading || !user || !canShow) return null;

  const isAdmin = user?.role === 'admin' || user?.role === 'super_admin' || user?.email === 'prince86944@gmail.com';

  const hasPhone = Boolean(user?.phone && user.phone.trim() !== '' && user.phone !== 'NOT LINKED');
  const hasCollege = Boolean(user?.collegeName && user.collegeName.trim() !== '');
  const isCompleted = Boolean(user?.profileCompleted === true || user?.profileCompleted === "true");
  const hasCallPref = user?.wantsCall !== undefined;

  // Show prompt if user is logged in, not admin, not locally dismissed, and needs either profile details or call choice
  const needsProfileUpdate = user && !isAdmin && !dismissed && (
    !isCompleted || !hasPhone || !hasCollege || !hasCallPref
  );

  if (!needsProfileUpdate) return null;

  const handleDismiss = () => {
    localStorage.setItem('profile_prompt_dismissed', 'true');
    setDismissed(true);
  };

  // STEP 1: Handle Profile Form Submit (Save Details & proceed to Call option)
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) return toast.error("Kripya apna poora naam daalein!");
    if (!collegeName.trim()) return toast.error("Kripya apne college ka naam daalein!");
    if (!district.trim()) return toast.error("Kripya apna district/jila daalein!");
    if (!branch.trim()) return toast.error("Kripya apni branch daalein!");
    if (!admissionYear.trim()) return toast.error("Kripya admission batch year daalein!");
    if (!dob.trim()) return toast.error("Kripya date of birth chunein!");
    
    const cleanPhone = phoneNumber.replace(/\D/g, '').trim();
    if (cleanPhone.length < 10) {
      return toast.error("Kripya valid 10-digit mobile number daalein!");
    }

    setIsSubmitting(true);
    try {
      await updateProfileData({
        name: name.trim(),
        collegeName: collegeName.trim(),
        district: district.trim(),
        branch: branch.trim().toUpperCase(),
        admissionYear: admissionYear.trim(),
        dob: dob.trim(),
        phone: cleanPhone
      });
      toast.success("Details save ho gayi! ✅");
      setStep('call');
    } catch (err) {
      toast.error("Failed to save details. Dobara try karein.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // STEP 2: Handle Call Option (Yes or No)
  const handleCallChoice = async (wantsCallValue) => {
    setIsSubmitting(true);
    try {
      await updateProfileData({
        wantsCall: wantsCallValue,
        callRequestedAt: wantsCallValue ? new Date().toISOString() : null,
        profileCompleted: true
      });
      localStorage.setItem('profile_prompt_dismissed', 'true');
      setDismissed(true);

      if (wantsCallValue) {
        toast.success("Call Request Registered! Hamari team aapse jald connect karegi 📞✨");
      } else {
        toast.success("Profile setup complete! Welcome to Apna College Bihar 🎓");
      }
    } catch (err) {
      toast.error("Failed to save call preference. Try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[99999] bg-[#0a0f1d]/90 backdrop-blur-md flex items-center justify-center p-4 font-['Inter'] animate-in fade-in duration-300">
      <div className="bg-white border border-slate-200/60 p-6 md:p-9 rounded-[2.5rem] shadow-2xl max-w-[460px] w-full relative overflow-hidden group">
        <div className="absolute -top-10 -right-10 w-36 h-36 bg-blue-500/10 blur-[50px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-36 h-36 bg-emerald-500/10 blur-[50px] rounded-full pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center">
          
          {/* ══════════════════════════════════════════════════════
              STEP 1: PEHLE KI TARAH COMPLETE PROFILE FORM
             ══════════════════════════════════════════════════════ */}
          {step === 'form' && (
            <>
              <div className="w-14 h-14 rounded-2xl bg-blue-600/10 border border-blue-500/20 text-blue-600 flex items-center justify-center mb-4">
                <ShieldCheck size={32} />
              </div>

              <h2 className="text-xl md:text-2xl font-[1000] text-center text-slate-900 uppercase tracking-tight mb-1">
                Profile Setup
              </h2>
              <p className="text-slate-500 text-xs font-medium text-center mb-5 leading-relaxed">
                Apna college aur contact details bharein taaki aapka portal access aur notes secure ho sakein.
              </p>

              <form onSubmit={handleFormSubmit} className="w-full space-y-3 max-h-[55vh] overflow-y-auto px-1 scrollbar-hide pb-2">
                {/* Full Name */}
                <div>
                  <label className="block text-[9.5px] font-black text-slate-400 uppercase tracking-widest mb-1">Full Name</label>
                  <input 
                    type="text" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    placeholder="YOUR FULL NAME" 
                    className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white rounded-xl p-3 text-slate-900 text-xs font-bold outline-none transition-all placeholder:text-slate-400" 
                    required 
                  />
                </div>

                {/* College Name */}
                <div>
                  <label className="block text-[9.5px] font-black text-slate-400 uppercase tracking-widest mb-1">College Name</label>
                  <input 
                    type="text" 
                    value={collegeName} 
                    onChange={(e) => setCollegeName(e.target.value)} 
                    placeholder="e.g. BCE Bhagalpur / MIT Muzaffarpur" 
                    className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white rounded-xl p-3 text-slate-900 text-xs font-bold outline-none transition-all placeholder:text-slate-400" 
                    required 
                  />
                </div>

                {/* District */}
                <div>
                  <label className="block text-[9.5px] font-black text-slate-400 uppercase tracking-widest mb-1">Home District</label>
                  <input 
                    type="text" 
                    value={district} 
                    onChange={(e) => setDistrict(e.target.value)} 
                    placeholder="e.g. Patna / Gaya / Bhagalpur" 
                    className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white rounded-xl p-3 text-slate-900 text-xs font-bold outline-none transition-all placeholder:text-slate-400" 
                    required 
                  />
                </div>

                {/* Branch & Batch */}
                <div className="flex gap-3">
                  <div className="flex-1">
                    <label className="block text-[9.5px] font-black text-slate-400 uppercase tracking-widest mb-1">Branch</label>
                    <input 
                      type="text" 
                      value={branch} 
                      onChange={(e) => setBranch(e.target.value)} 
                      placeholder="e.g. CSE / ECE" 
                      className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white rounded-xl p-3 text-slate-900 text-xs font-bold outline-none transition-all placeholder:text-slate-400" 
                      required 
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-[9.5px] font-black text-slate-400 uppercase tracking-widest mb-1">Batch / Year</label>
                    <input 
                      type="text" 
                      value={admissionYear} 
                      onChange={(e) => setAdmissionYear(e.target.value.replace(/\D/g, '').slice(0, 4))} 
                      placeholder="e.g. 2024" 
                      className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white rounded-xl p-3 text-slate-900 text-xs font-bold outline-none transition-all placeholder:text-slate-400" 
                      required 
                    />
                  </div>
                </div>

                {/* DOB & Phone */}
                <div className="flex gap-3">
                  <div className="flex-1">
                    <label className="block text-[9.5px] font-black text-slate-400 uppercase tracking-widest mb-1">Date of Birth</label>
                    <input 
                      type="date" 
                      value={dob} 
                      onChange={(e) => setDob(e.target.value)} 
                      className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white rounded-xl p-3 text-slate-900 text-xs font-bold outline-none transition-all" 
                      required 
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-[9.5px] font-black text-slate-400 uppercase tracking-widest mb-1">Mobile No. (10-Digit)</label>
                    <div className="relative flex items-center">
                      <input 
                        type="tel" 
                        value={phoneNumber} 
                        onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, '').slice(0, 10))} 
                        placeholder="9876543210" 
                        className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white rounded-xl p-3 text-slate-900 text-xs font-bold outline-none transition-all placeholder:text-slate-400" 
                        required 
                      />
                    </div>
                  </div>
                </div>

                {/* Submit button */}
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white font-[1000] py-4 rounded-xl shadow-lg shadow-blue-600/30 transition-all active:scale-95 text-xs tracking-widest uppercase mt-4 disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? "Saving details..." : "Save & Continue ➔"}
                </button>
              </form>
            </>
          )}

          {/* ══════════════════════════════════════════════════════
              STEP 2: CALL BALA YES OR NO OPTION BUS
             ══════════════════════════════════════════════════════ */}
          {step === 'call' && (
            <>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-500 text-white flex items-center justify-center mb-4 shadow-lg shadow-emerald-500/30 animate-bounce">
                <Phone size={30} />
              </div>

              <h2 className="text-xl md:text-2xl font-[1000] text-center text-slate-900 uppercase tracking-tight mb-1.5">
                Free Guidance Call?
              </h2>
              <p className="text-slate-600 text-xs font-medium text-center mb-6 leading-relaxed px-2">
                Kya aapko BEU semester guidance, notes ya engineering doubt help ke liye humari expert team se <b className="text-emerald-700">FREE guidance call</b> chahiye?
              </p>

              <div className="space-y-3 w-full mb-4">
                {/* YES OPTION */}
                <button
                  type="button"
                  onClick={() => handleCallChoice(true)}
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-[900] shadow-md shadow-emerald-500/25 transition-all hover:scale-[1.02] active:scale-95 cursor-pointer text-left group/yes"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                      <Phone size={20} className="text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-extrabold uppercase tracking-wide">
                        YES, Call Me (हाँ, Call Karein)
                      </div>
                      <div className="text-[11px] text-emerald-100 font-medium">
                        Senior mentor will guide you on +91 {phoneNumber || user?.phone || 'Mobile'}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs bg-white text-emerald-800 font-black px-2.5 py-1 rounded-lg shrink-0 group-hover/yes:translate-x-1 transition-transform">
                    YES ➔
                  </span>
                </button>

                {/* NO OPTION */}
                <button
                  type="button"
                  onClick={() => handleCallChoice(false)}
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold transition-all hover:scale-[1.01] active:scale-95 cursor-pointer text-left border border-slate-200/80 group/no"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-slate-200 text-slate-500 flex items-center justify-center shrink-0">
                      ✕
                    </div>
                    <div>
                      <div className="text-xs font-black uppercase tracking-wider text-slate-800">
                        NO, Not Needed (Nahi, Zaroorat Nahi)
                      </div>
                      <div className="text-[10px] text-slate-500 font-medium">
                        Direct website aur notes access karein
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] text-slate-500 font-black uppercase px-2 py-1 rounded-md bg-white border border-slate-200 shrink-0">
                    NO
                  </span>
                </button>
              </div>
            </>
          )}

          {/* Sign Out Option */}
          <button
            onClick={() => logout()}
            className="mt-4 text-red-400 hover:text-red-500 text-[9px] font-black uppercase tracking-widest transition-colors cursor-pointer"
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
              <Route path="/linux" element={<Navigate to="/download" replace />} />
              <Route path="/download-linux" element={<Navigate to="/download" replace />} />
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
