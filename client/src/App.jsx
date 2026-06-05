import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';
import { AlertTriangle, Shield, Phone, ShieldCheck } from 'lucide-react';
import { useAuth } from './context/AuthContext';
import { Capacitor } from '@capacitor/core';

// Layouts
import DashboardLayout from './layouts/DashboardLayout';

// Auth Components
import ProtectedRoute from './components/ProtectedRoute';
import AdminRoute from './components/AdminRoute';

// Pages (Lazy Loaded)
const Home = React.lazy(() => import('./pages/Home'));
const AppHub = React.lazy(() => import('./pages/AppHub'));
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
const BeuToolSEO = React.lazy(() => import('./pages/BeuToolSEO'));
const FeatureSEO = React.lazy(() => import('./pages/FeatureSEO'));
const CollegePage = React.lazy(() => import('./pages/CollegePage'));
const BranchHub = React.lazy(() => import('./pages/BranchHub'));
const UgeacInfo = React.lazy(() => import('./pages/UgeacInfo'));
const SubjectPage = React.lazy(() => import('./pages/SubjectPage'));
const HackathonHub = React.lazy(() => import('./pages/HackathonHub'));
const SitemapDirectory = React.lazy(() => import('./pages/SitemapDirectory'));
const CompareColleges = React.lazy(() => import('./pages/CompareColleges'));
const PercentilePredictor = React.lazy(() => import('./pages/PercentilePredictor'));

function LoadingScreen() {
  return (
    <div className="min-h-screen bg-[#0a0f1d] flex flex-col items-center justify-center">
      <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"></div>
      <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest animate-pulse">Loading Interface...</p>
    </div>
  );
}

function GlobalPhonePrompt() {
  const { user, updateProfileData, logout } = useAuth();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const needsPhone = user && (!user?.phone || user?.phone?.trim() === "" || user?.phone === "NOT LINKED");

  if (!needsPhone) return null;

  const handlePhoneSubmit = async (e) => {
    e.preventDefault();
    if(phoneNumber.length < 10) return toast.error("Enter a valid 10-digit number!");
    setIsSubmitting(true);
    try {
      await updateProfileData({ phone: phoneNumber });
      toast.success("Mobile number linked securely!");
    } catch(err) {
      toast.error("Failed to save. Try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[99999] bg-[#0a0f1d]/95 backdrop-blur-md flex items-center justify-center p-4 font-['Inter'] animate-in fade-in duration-300">
      <div className="bg-white border border-slate-200/50 p-8 md:p-12 rounded-[2.5rem] shadow-2xl max-w-[450px] w-full relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 blur-[50px] rounded-full"></div>
        <div className="relative z-10 flex flex-col items-center">
          <div className="p-4 bg-blue-600/10 rounded-full border border-blue-500/20 mb-6">
            <ShieldCheck className="text-blue-500 w-10 h-10" />
          </div>
          <h2 className="text-2xl md:text-3xl font-[900] text-center text-slate-900 uppercase tracking-tighter mb-2">Security Check</h2>
          <p className="text-slate-500 text-xs font-bold text-center mb-8">Please link your active mobile number to secure your college portal access.</p>
          
          <form onSubmit={handlePhoneSubmit} className="w-full space-y-4">
            <div className="relative group">
              <Phone className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400" size={18} />
              <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, '').slice(0,10))} placeholder="10-DIGIT MOBILE NO." className="w-full bg-slate-100 border border-slate-200 focus:border-blue-500/50 rounded-[1.5rem] p-5 pl-16 text-slate-900 text-xs font-bold outline-none transition-all placeholder:text-slate-500" required />
            </div>
            <button type="submit" disabled={isSubmitting} className="w-full bg-blue-600 hover:bg-blue-500 text-white font-[1000] py-5 rounded-[1.8rem] shadow-[0_10px_40px_rgba(37,99,235,0.4)] transition-all active:scale-95 text-xs tracking-widest uppercase mt-4">
              {isSubmitting ? "Updating..." : "Save & Continue"}
            </button>
          </form>

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


function App() {
  const { user, loading: authLoading } = useAuth();
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const isNative = Capacitor.isNativePlatform();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Safety timeout: Never stay loading more than 5 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    if (!authLoading) {
      setLoading(false);
      clearTimeout(timer);
    }

    return () => clearTimeout(timer);
  }, [authLoading]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a0f1d] flex flex-col items-center justify-center">
        <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest animate-pulse">Initializing Hub...</p>
      </div>
    );
  }

  try {
    return (
      <>
        <Toaster position="top-right" />
        <GlobalPhonePrompt />
        <React.Suspense fallback={<LoadingScreen />}>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={isNative || (new URLSearchParams(window.location.search).get('standalone') === 'true') ? <AppHub /> : <Home />} />
            <Route path="/hub" element={<AppHub />} />
            <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/delete-account" element={<DeleteAccount />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/directory" element={<SitemapDirectory />} />

          {/* Public Dashboard Routes (For SEO & Direct Sharing) */}
          <Route element={<DashboardLayout />}>
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
            <Route path="/college/:collegeSlug" element={<CollegePage />} />
            <Route path="/college/:collegeSlug/:section" element={<CollegePage />} />
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
              <Route path="/" element={<Navigate to="/" replace />} />
              {/* Admin Routes */}
              <Route element={<AdminRoute />}>
                <Route path="/dashboard/admin" element={<AdminPanel />} />
              </Route>
            </Route>
          </Route>

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
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
