import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Chrome, ShieldCheck, ArrowRight, BookOpen, Sparkles } from 'lucide-react';
import { toast } from 'react-hot-toast';
import { Capacitor } from '@capacitor/core';

export default function Login() {
  const navigate = useNavigate();
  const { googleLogin, user, loading: authLoading } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Auto-Redirect if already logged in
  useEffect(() => {
    if (!authLoading && user) {
      const lastPath = localStorage.getItem('lastPath');
      if (lastPath) {
        localStorage.removeItem('lastPath');
        navigate(lastPath, { replace: true });
      } else {
        navigate('/', { replace: true });
      }
    }
  }, [user, authLoading, navigate]);

  const handleGoogleLogin = async () => {
    try {
      setLoading(true);
      setError('');
      await googleLogin();
      toast.success('Welcome back to the Hub!');
      
      const lastPath = localStorage.getItem('lastPath');
      if (lastPath) {
        localStorage.removeItem('lastPath');
        navigate(lastPath);
      } else {
        navigate('/');
      }
    } catch (err) {
      setError(err.message || 'Google login failed. Please try again.');
      toast.error('Google login failed.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col items-center justify-center p-4 relative overflow-hidden font-['Inter']">
      {/* Background Orbs */}
      <div className="absolute top-[-10%] left-[-20%] w-[1000px] h-[1000px] bg-blue-600/5 rounded-full blur-[200px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[800px] bg-indigo-600/5 rounded-full blur-[150px] pointer-events-none"></div>
 
      <div className="w-full max-w-[440px] relative z-10">
        <div className="bg-white/80 backdrop-blur-xl border border-slate-200/60 rounded-[3.5rem] p-10 md:p-14 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] text-center">
          
          {/* Header */}
          <div className="flex flex-col items-center mb-10">
            <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-xl mb-6 border border-slate-200 p-1 bg-white">
              <img src="/logo_acb.png" alt="Logo" className="w-full h-full object-cover rounded-xl" />
            </div>
            <h1 className="text-2xl font-[1000] text-slate-900 tracking-tighter uppercase leading-none">
              APNA COLLEGE<br/>
              <span className="text-blue-600">BIHAR</span>
            </h1>
            <div className="mt-4 flex items-center gap-2 px-4 py-1.5 bg-blue-600/5 border border-blue-500/10 rounded-full text-blue-600/60">
               <Sparkles size={12} fill="currentColor" />
               <span className="text-[9px] font-black uppercase tracking-[0.2em]">Secure Gateway</span>
            </div>
          </div>
 
          {error && (
            <div className="bg-red-50 border border-red-100 text-red-500 p-4 rounded-2xl mb-8 text-[11px] font-bold text-center flex items-center justify-center gap-3">
              <ShieldCheck size={16} />
              <span>{error}</span>
            </div>
          )}
 
          {/* Action */}
          <div className="space-y-6">
            <button
              onClick={handleGoogleLogin}
              disabled={loading}
              className="w-full flex items-center justify-center gap-4 py-5 bg-white hover:bg-slate-50 active:scale-95 text-slate-900 font-[1000] rounded-[1.8rem] text-xs uppercase tracking-widest shadow-lg border border-slate-200 transition-all disabled:opacity-60 group"
            >
              <Chrome className="text-blue-600 group-hover:rotate-12 transition-transform" size={20} />
              {loading ? 'Authenticating...' : 'Login with Google'}
              {!loading && <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />}
            </button>
            
            <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest leading-relaxed">
              Official Bihar Engineering <br/> Student Portal
            </p>
          </div>
 
          <div className="mt-12 pt-10 border-t border-slate-100">
            <p className="text-slate-500 text-[11px] font-bold mb-6">
              New to the platform?{' '}
              <Link to="/signup" className="text-blue-600 hover:underline underline-offset-4 decoration-2">
                Create Account
              </Link>
            </p>
 
            <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-900 text-[9px] font-black uppercase tracking-[0.3em] transition-all group">
              <BookOpen size={14} /> Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
