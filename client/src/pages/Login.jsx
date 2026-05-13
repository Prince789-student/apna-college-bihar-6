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
    <div className="min-h-screen bg-[#0a0f1d] flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background Animated Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#1e3a5f_0%,_#0a0f1d_70%)] pointer-events-none" />
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse"></div>

      <div className="w-full max-w-[420px] relative z-10">
        <div className="bg-[#111827]/90 border border-slate-700/50 rounded-[3rem] p-10 md:p-12 shadow-2xl backdrop-blur-xl text-center">
          
          {/* Header */}
          <div className="flex flex-col items-center mb-12">
            <div className="w-24 h-24 rounded-[2rem] overflow-hidden shadow-2xl mb-8 border-2 border-slate-600/50 p-1 bg-white/5">
              <img src="/logo.jpg" alt="Logo" className="w-full h-full object-cover rounded-[1.8rem]" />
            </div>
            <h1 className="text-3xl font-[1000] text-white tracking-tighter uppercase leading-none">
              APNA COLLEGE<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">BIHAR</span>
            </h1>
            <div className="mt-4 flex items-center gap-2 px-4 py-1.5 bg-amber-600/10 border border-amber-500/20 rounded-full text-amber-400">
               <Sparkles size={12} fill="currentColor" />
               <span className="text-[9px] font-black uppercase tracking-[0.2em]">Secure Authentication</span>
            </div>
          </div>

          {error && (
            <div className="bg-red-500/10 border border-red-500/30 text-red-400 p-4 rounded-2xl mb-8 text-[11px] font-bold text-center flex items-center justify-center gap-3 animate-shake">
              <ShieldCheck size={16} />
              <span>{error}</span>
            </div>
          )}

          {/* Core Action */}
          <div className="space-y-6">
            <button
              onClick={handleGoogleLogin}
              disabled={loading}
              className="w-full flex items-center justify-center gap-4 py-6 bg-white hover:bg-slate-100 active:scale-95 text-slate-900 font-[1000] rounded-[2rem] text-sm uppercase tracking-widest shadow-2xl transition-all disabled:opacity-60 group"
            >
              <Chrome className="text-blue-600 group-hover:rotate-12 transition-transform" size={24} />
              {loading ? 'Verifying...' : 'Login with Google'}
              {!loading && <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />}
            </button>
            
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest leading-relaxed">
              Authenticated via <br/> Google Cloud Identity
            </p>
          </div>

          <div className="mt-12 pt-10 border-t border-slate-800/50">
            <p className="text-slate-500 text-[11px] font-bold mb-6">
              Don't have an account?{' '}
              <Link to="/signup" className="text-orange-400 hover:text-orange-300 underline underline-offset-4 decoration-2">
                Create with Google
              </Link>
            </p>

            <Link to="/" className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-300 text-[9px] font-black uppercase tracking-[0.3em] transition-all group">
              <BookOpen size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
