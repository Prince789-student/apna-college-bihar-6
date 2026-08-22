import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Search, AlertTriangle } from 'lucide-react';
import SEO from '../components/SEO';

export default function NotFound() {
  const location = useLocation();

  React.useEffect(() => {
    console.warn(`[404 NOT FOUND] User tried to access: ${location.pathname}${location.search}`);
  }, [location]);
  return (
    <div className="min-h-screen bg-[#f8fafc] font-['Inter'] flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <SEO 
        title="Page Not Found - 404" 
        description="The page you are looking for does not exist on Apna College Bihar." 
        noindex={true} 
      />
      
      {/* Decorative Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[80px] pointer-events-none"></div>
      
      <div className="relative z-10 flex flex-col items-center text-center max-w-md w-full animate-fade-in-up">
        
        {/* Error Icon */}
        <div className="w-24 h-24 mb-6 rounded-3xl bg-white shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-slate-200 flex items-center justify-center transform rotate-12 transition-transform hover:rotate-0">
          <AlertTriangle className="w-12 h-12 text-rose-500" />
        </div>
        
        {/* 404 Header */}
        <h1 className="text-7xl font-[1000] text-slate-900 tracking-tighter mb-2">404</h1>
        
        <h2 className="text-xl md:text-2xl font-black text-slate-800 uppercase tracking-tight mb-4">
          Page Not Found
        </h2>
        
        <p className="text-sm font-medium text-slate-500 mb-8 leading-relaxed">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full">
          <Link 
            to="/" 
            className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-2xl transition-all shadow-[0_8px_25px_rgba(37,99,235,0.25)] active:scale-95"
          >
            <Home className="w-5 h-5" />
            <span>Go Home</span>
          </Link>
          
          <Link 
            to="/hub" 
            className="flex-1 flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 font-bold py-4 px-6 rounded-2xl border border-slate-200 transition-all shadow-sm active:scale-95"
          >
            <Search className="w-5 h-5" />
            <span>Explore Hub</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
