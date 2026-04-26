import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

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
    </>
  );
}

export default App;
