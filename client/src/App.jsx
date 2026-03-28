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
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';

// Role-Based Admin Guard (Restricted to Founder Identity)
const AdminRoute = () => {
  const { user, loading, ROLES } = useAuth();
  if (loading) return <div className="min-h-screen bg-slate-950 flex items-center justify-center"><div className="w-10 h-10 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div></div>;
  const isAuthorized = user?.email === 'prince86944@gmail.com' || user?.role === ROLES.SUPER_ADMIN;
  return isAuthorized ? <Outlet /> : <Navigate to="/dashboard" replace />;
};

function App() {
  // Synchronously check if the URL contains ?mode=app or if it was previously saved in localStorage.
  // This is used for checking if the web app is running inside the Android WebView.
  const [isAppMode] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('mode') === 'app') {
      localStorage.setItem('isAppMode', 'true');
      return true;
    }
    return localStorage.getItem('isAppMode') === 'true';
  });

  return (
    <AuthProvider>
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        {/* If user is coming from App (WebView), skip Home landing page and direct to Login */}
        <Route path="/" element={isAppMode ? <Navigate to="/login" replace /> : <Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
        {/* Unified Dashboard System */}
        <Route path="/dashboard" element={<DashboardLayout />}>
           {/* Public Utility Routes (No Login Required) */}
           <Route path="calculator" element={<ScientificCalc />} />
           <Route path="cgpa" element={<BeuCgpa />} />

           {/* Protected Core Dashboard Content */}
           <Route element={<ProtectedRoute />}>
             <Route index element={<StudyDashboard />} />
             <Route path="notes" element={<Notes />} />
             <Route path="study" element={<StudyDashboard />} />
             <Route path="timer" element={<StudyDashboard />} />
             <Route path="study/group/:groupId" element={<GroupDetail />} />
             <Route path="timetable" element={<Timetable />} />
             <Route path="blog" element={<Blog />} />
             <Route path="blog/:postId" element={<BlogPost />} />
             
             {/* Founder-Only Admin Console */}
             <Route element={<AdminRoute />}>
                <Route path="admin" element={<AdminPanel />} />
             </Route>
           </Route>
        </Route>

        {/* Public Legal Pages (AdSense Compliance) */}
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />

        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
