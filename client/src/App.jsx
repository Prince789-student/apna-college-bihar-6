import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AlertTriangle } from 'lucide-react';
import { useStudy } from './context/StudyContext';

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

function App() {
  const { focusBroken, setFocusBroken } = useStudy();

  return (
    <>
      <Toaster position="top-right" />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
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
          <div className="w-full max-w-lg text-center space-y-10">
            <div className="w-28 h-28 bg-red-600/20 text-red-500 rounded-[2.5rem] flex items-center justify-center mx-auto animate-pulse shadow-[0_0_50px_rgba(220,38,38,0.3)]">
              <AlertTriangle size={56} />
            </div>
            <div className="space-y-4">
              <h2 className="text-5xl font-[1000] text-white tracking-tighter uppercase leading-none">Focus Violated</h2>
              <p className="text-slate-400 text-sm font-bold uppercase tracking-[0.2em] leading-relaxed max-w-sm mx-auto">
                Detecting unauthorized activity. <br/>
                <span className="text-red-500/80">Concentration is mandatory</span> <br/>
                for your academic protocol.
              </p>
            </div>
            <button 
              onClick={() => setFocusBroken(false)} 
              className="w-full py-7 bg-blue-600 hover:bg-blue-500 text-white rounded-[2.5rem] font-[1000] text-sm uppercase tracking-widest shadow-[0_20px_50px_rgba(37,99,235,0.4)] active:scale-95 transition-all"
            >
              I Commit to Focus
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
