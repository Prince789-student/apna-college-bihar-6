import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Chrome, ShieldCheck, ArrowRight, BookOpen, Sparkles } from 'lucide-react';
import { toast } from 'react-hot-toast';
import { Capacitor } from '@capacitor/core';

export default function Signup() {
  const navigate = useNavigate();
  const { googleLogin, user, loading: authLoading } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  // Auto-Redirect if already logged in
  React.useEffect(() => {
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

  const handleGoogleSignup = async () => {
    try {
      setLoading(true);
      setError('');
      await googleLogin();
      toast.success('Account created successfully!');
      
      const lastPath = localStorage.getItem('lastPath');
      if (lastPath) {
        localStorage.removeItem('lastPath');
        navigate(lastPath);
      } else {
        navigate('/');
      }
    } catch (err) {
      setError(err.message || 'Google signup failed.');
      toast.error('Google signup failed.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0f1d] flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background Animated Elements */}
      <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[150px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[120px]"></div>

      <div className="w-full max-w-[480px] relative z-10">
        <div className="bg-[#111827]/90 border border-slate-700/50 rounded-[3rem] p-10 md:p-14 shadow-2xl backdrop-blur-xl text-center">
          
          {/* Header */}
          <div className="flex flex-col items-center mb-12">
            <div className="w-24 h-24 rounded-[2rem] overflow-hidden shadow-2xl mb-8 border-2 border-slate-600/30 group p-1 bg-white/5">
              <img src="/logo.jpg" alt="Logo" className="w-full h-full object-cover rounded-[1.8rem] group-hover:scale-110 transition-transform duration-700" />
            </div>
            <h1 className="text-4xl font-[1000] text-white tracking-tighter uppercase leading-none">
              APNA COLLEGE<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">BIHAR</span>
            </h1>
            <div className="mt-4 flex items-center gap-2 px-4 py-1.5 bg-blue-600/10 border border-blue-500/20 rounded-full text-blue-400">
               <Sparkles size={12} fill="currentColor" />
               <span className="text-[9px] font-black uppercase tracking-[0.2em]">Student Excellence Portal</span>
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
              onClick={handleGoogleSignup}
              disabled={loading}
              className="w-full flex items-center justify-center gap-4 py-6 bg-white hover:bg-slate-100 active:scale-95 text-slate-900 font-[1000] rounded-[2rem] text-sm uppercase tracking-widest shadow-2xl transition-all disabled:opacity-60 group"
            >
              <Chrome className="text-blue-600 group-hover:rotate-12 transition-transform" size={24} />
              {loading ? 'Authenticating...' : 'Signup with Google'}
              {!loading && <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />}
            </button>
            
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest leading-relaxed">
              Fastest & Most Secure way to access <br/> your engineering resources.
            </p>
          </div>

          <div className="mt-12 pt-10 border-t border-slate-800/50">
            <p className="text-slate-500 text-[11px] font-bold mb-6">
              Already have an account?{' '}
              <Link to="/login" className="text-blue-400 hover:text-blue-300 underline underline-offset-4 decoration-2">
                Login with Google
              </Link>
            </p>

            <Link to="/" className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-300 text-[9px] font-black uppercase tracking-[0.3em] transition-all group">
              <BookOpen size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Campus
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
