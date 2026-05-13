import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AlertTriangle, Shield } from 'lucide-react';
import { useStudy } from './context/StudyContext';
import { useAuth } from './context/AuthContext';
import { Capacitor } from '@capacitor/core';

// Layouts
import DashboardLayout from './layouts/DashboardLayout';

// Auth Components
import ProtectedRoute from './components/ProtectedRoute';
import AdminRoute from './components/AdminRoute';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import UgeacPredictor from './pages/UgeacPredictor';
import Notes from './pages/Notes';
import BeuCgpa from './pages/BeuCgpa';
import StudyDashboard from './pages/StudyDashboard';
import ScientificCalc from './pages/ScientificCalc';
import AdminPanel from './pages/AdminPanel';
import Achievements from './pages/Achievements';
import Group from './pages/Group';
import GroupDetail from './pages/GroupDetail';

import AppHub from './pages/AppHub';

function App() {
  const { focusBroken, setFocusBroken } = useStudy();
  const { user, loading: authLoading } = useAuth();
  const [loading, setLoading] = useState(true);
  const isNative = Capacitor.isNativePlatform();

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
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/hub" element={<AppHub />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Dashboard Routes */}
        <Route element={<ProtectedRoute />}>
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/ugeac-predictor" element={<UgeacPredictor />} />
            <Route path="/dashboard/notes" element={<Notes />} />
            <Route path="/dashboard/cgpa" element={<BeuCgpa />} />
            <Route path="/dashboard/study" element={<StudyDashboard />} />
            <Route path="/dashboard/calculator" element={<ScientificCalc />} />
            <Route path="/dashboard/achievements" element={<Achievements />} />
            <Route path="/dashboard/groups" element={<Group />} />
            <Route path="/dashboard/groups/:groupId" element={<GroupDetail />} />
            
            {/* Admin Routes */}
            <Route element={<AdminRoute />}>
              <Route path="/dashboard/admin" element={<AdminPanel />} />
            </Route>
          </Route>
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {/* Global Focus Shield Overlay */}
      {focusBroken && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-6 bg-slate-950/98 backdrop-blur-3xl animate-in fade-in duration-500">
          <div className="w-full max-w-lg text-center space-y-12">
            <div className="relative">
               <div className="absolute inset-0 bg-blue-600/20 blur-[60px] animate-pulse"></div>
               <div className="w-32 h-32 bg-slate-900 border-2 border-blue-500/50 text-blue-500 rounded-[2.5rem] flex items-center justify-center mx-auto relative z-10 animate-bounce shadow-[0_0_50px_rgba(37,99,235,0.3)]">
                 <Shield size={64} className="animate-pulse" />
               </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-6xl font-[1000] text-white tracking-tighter uppercase leading-none">Iron Focus</h2>
              <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.4em] leading-relaxed max-w-sm mx-auto">
                <span className="text-blue-500">Distraction Detected.</span> <br/>
                Protocol is currently locked. <br/>
                Return to your academic targets.
              </p>
            </div>
            <button 
              onClick={() => setFocusBroken(false)} 
              className="w-full py-8 bg-blue-600 hover:bg-blue-500 text-white rounded-[2.5rem] font-black text-xs uppercase tracking-[0.3em] shadow-[0_25px_60px_rgba(37,99,235,0.4)] active:scale-95 transition-all border border-blue-400/30"
            >
              Resume Protocol
            </button>
            <p className="text-slate-600 text-[8px] font-bold uppercase tracking-widest">Biometric bypass disabled · Session integrity verified</p>
          </div>
        </div>
      )}
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
