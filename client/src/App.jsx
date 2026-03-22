import React from 'react';
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

// Role-Based Admin Guard (Restricted to Founder Identity)
const AdminRoute = () => {
  const { user, loading, ROLES } = useAuth();
  if (loading) return <div className="min-h-screen bg-slate-950 flex items-center justify-center"><div className="w-10 h-10 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div></div>;
  const isAuthorized = user?.email === 'prince86944@gmail.com' || user?.role === ROLES.SUPER_ADMIN;
  return isAuthorized ? <Outlet /> : <Navigate to="/dashboard" replace />;
};

function App() {
  return (
    <AuthProvider>
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
        {/* Public Utility Routes (No Login Filter) */}
        <Route path="/dashboard" element={<DashboardLayout />}>
           <Route path="calculator" element={<ScientificCalc />} />
           <Route path="cgpa" element={<BeuCgpa />} />
        </Route>

        {/* Protected Dashboard Routes */}
        <Route path="/dashboard" element={<ProtectedRoute />}>
          <Route element={<DashboardLayout />}>
            <Route index element={<StudyDashboard />} />
            <Route path="notes" element={<Notes />} />
            <Route path="study" element={<StudyDashboard />} />
            <Route path="timer" element={<StudyDashboard />} />
            <Route path="study/group/:groupId" element={<GroupDetail />} />
            <Route path="timetable" element={<Timetable />} />
            
            {/* Dedicated Admin Sub-Route */}
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
