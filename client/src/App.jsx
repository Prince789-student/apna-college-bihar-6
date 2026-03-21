import React from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import { Toaster } from 'react-hot-toast';

import Login from './pages/Login';
import Signup from './pages/Signup';
import DashboardLayout from './layouts/DashboardLayout';
import Notes from './pages/Notes';
import ScientificCalc from './pages/ScientificCalc';
import MatrixCalc from './pages/MatrixCalc';
import StudyTracking from './pages/StudyTracking';
import AdminPanel from './pages/AdminPanel';
import Timetable from './pages/Timetable';
import BeuCgpa from './pages/BeuCgpa';
import LandingPage from './pages/LandingPage';
import Achievements from './pages/Achievements';
import Group from './pages/Group';
import TodoList from './pages/TodoList';
import HomeOverview from './pages/HomeOverview';

// Role-Based Admin Guard
const AdminRoute = () => {
  const { user, loading, ROLES } = useAuth();
  if (loading) return <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white font-black uppercase text-[10px] tracking-widest"><div className="w-10 h-10 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mr-4"></div> Initializing Identity Hub...</div>;
  const isAuthorized = user?.email === 'prince86944@gmail.com' || user?.role === ROLES.SUPER_ADMIN || user?.role === 'admin';
  return isAuthorized ? <Outlet /> : <Navigate to="/dashboard" replace />;
};

function App() {
  return (
    <AuthProvider>
      <Toaster position="top-right" reverseOrder={false} 
        toastOptions={{
          style: {
            background: '#0d121f',
            color: '#fff',
            border: '1px solid rgba(255,255,255,0.1)',
            fontSize: '11px',
            fontWeight: '900',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            borderRadius: '1.5rem',
            padding: '1rem 1.5rem',
          }
        }}
      />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
        {/* All Dashboard Routes */}
        <Route path="/dashboard" element={<ProtectedRoute />}>
          <Route element={<DashboardLayout />}>
            <Route index element={<HomeOverview />} />
            <Route path="study" element={<StudyTracking />} />
            <Route path="notes" element={<Notes />} />
            <Route path="calculator" element={<ScientificCalc />} />
            <Route path="matrix" element={<MatrixCalc />} />
            <Route path="sgpa" element={<BeuCgpa />} />
            <Route path="achievements" element={<Achievements />} />
            <Route path="groups" element={<Group />} />
            <Route path="plan" element={<TodoList />} />
            <Route path="timetable" element={<Timetable />} />
            
            {/* Dedicated Admin Sub-Route */}
            <Route element={<AdminRoute />}>
               <Route path="admin" element={<AdminPanel />} />
            </Route>
          </Route>
        </Route>

        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
