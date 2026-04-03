import React, { useState } from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import { Toaster } from 'react-hot-toast';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import DashboardLayout from './layouts/DashboardLayout';
import Dashboard from './pages/Dashboard';
import Notes from './pages/Notes';
import ScientificCalc from './pages/ScientificCalc';
import StudyDashboard from './pages/StudyDashboard';
import GroupDetail from './pages/GroupDetail';
import AdminPanel from './pages/AdminPanel';
import Timetable from './pages/Timetable';
import BeuCgpa from './pages/BeuCgpa';
import PrivacyPolicy from './pages/legal/PrivacyPolicy';
import AboutUs from './pages/legal/AboutUs';
import ContactUs from './pages/legal/ContactUs';
import { Youtube, ArrowRight } from 'lucide-react';

// Global Announcement Bar pinned to absolute top
const YouTubeGlobalBar = () => (
  <div className="bg-red-600 text-white px-3 py-0.5 flex flex-row items-center justify-between gap-1 w-full shadow-md border-b border-white/10 z-[101] relative overflow-hidden">
    <div className="flex items-center gap-1.5 leading-none">
       <Youtube size={10} className="fill-white shrink-0" />
       <span className="text-[7px] font-black uppercase tracking-tighter truncate">Official Live: BEU Study Material</span>
    </div>
    <a 
      href="https://youtube.com/@appne-h8p?si=0xA0suRWTouLWP3i" 
      target="_blank" 
      rel="noopener noreferrer"
      className="px-2 py-0.5 bg-white text-red-600 rounded-full font-[1000] text-[6px] uppercase tracking-tighter hover:bg-slate-100 transition-all flex items-center gap-0.5 shrink-0"
    >
      Join <ArrowRight size={6} />
    </a>
  </div>
);

// Role-Based Admin Guard (Restricted to Founder Identity)
const AdminRoute = () => {
  const { user, loading, ROLES } = useAuth();
  if (loading) return <div className="min-h-screen bg-slate-950 flex items-center justify-center"><div className="w-10 h-10 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div></div>;
  const isAuthorized = user?.email === 'prince86944@gmail.com' || user?.role === ROLES.SUPER_ADMIN;
  return isAuthorized ? <Outlet /> : <Navigate to="/dashboard" replace />;
};

function App() {
  // Safe App Mode Detection
  const [isAppMode] = useState(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      if (params.get('mode') === 'app') {
        localStorage.setItem('isAppMode', 'true');
        return true;
      }
      return localStorage.getItem('isAppMode') === 'true';
    } catch {
      return false; 
    }
  });

  return (
    <AuthProvider>
      <div className="flex flex-col min-h-full bg-white">
        <Toaster position="top-right" reverseOrder={false} />
        <YouTubeGlobalBar />
        <div className="flex-1 flex flex-col relative">
          <Routes>
            {/* If user is coming from App (WebView), skip Home landing page and direct to Login */}
            <Route path="/" element={isAppMode ? <Navigate to="/login" replace /> : <Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            {/* Unified Dashboard System */}
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route path="calculator" element={<ScientificCalc />} />
              <Route path="cgpa" element={<BeuCgpa />} />
              <Route element={<ProtectedRoute />}>
                <Route index element={<StudyDashboard />} />
                <Route path="notes" element={<Notes />} />
                <Route path="study" element={<StudyDashboard />} />
                <Route path="timer" element={<StudyDashboard />} />
                <Route path="study/group/:groupId" element={<GroupDetail />} />
                <Route path="timetable" element={<Timetable />} />
                <Route element={<AdminRoute />}>
                  <Route path="admin" element={<AdminPanel />} />
                </Route>
              </Route>
            </Route>

            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;
