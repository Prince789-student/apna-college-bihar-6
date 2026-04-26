import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const AdminRoute = () => {
  const { user, loading, ROLES } = useAuth();
  if (loading) return <div className="min-h-screen bg-slate-950 flex items-center justify-center"><div className="w-10 h-10 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div></div>;
  const isAuthorized = user?.email === 'prince86944@gmail.com' || user?.role === ROLES.SUPER_ADMIN;
  return isAuthorized ? <Outlet /> : <Navigate to="/dashboard" replace />;
};

export default AdminRoute;
