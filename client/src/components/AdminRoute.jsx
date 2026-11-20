import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const AdminRoute = () => {
  const { user, loading, ROLES } = useAuth();
  if (loading) {
    return (
      <div className="min-h-screen bg-[#070b14] flex flex-col items-center justify-center gap-3">
        <div className="w-10 h-10 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Checking Authority...</p>
      </div>
    );
  }

  const userEmail = (user?.email || '').trim().toLowerCase();
  const userRole = (user?.role || '').trim().toUpperCase();

  const isAuthorized = 
    userEmail === 'prince86944@gmail.com' || 
    userEmail === 'prince8694@gmail.com' || 
    userRole === 'SUPER_ADMIN' || 
    userRole === 'ADMIN' || 
    (ROLES && (user?.role === ROLES.SUPER_ADMIN || user?.role === ROLES.ADMIN));

  return isAuthorized ? <Outlet /> : <Navigate to="/" replace />;
};

export default AdminRoute;
