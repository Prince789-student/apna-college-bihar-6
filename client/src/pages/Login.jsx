import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Chrome, Lock, Mail, ShieldCheck, ArrowRight, BookOpen } from 'lucide-react';
import { toast } from 'react-hot-toast';

export default function Login() {
  const navigate = useNavigate();
  const { login, googleLogin, user, loading: authLoading } = useAuth();

  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Auto-Redirect if already logged in — wait for auth to finish
  useEffect(() => {
    if (!authLoading && user) {
      navigate('/', { replace: true });
    }
  }, [user, authLoading, navigate]);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleGoogleLogin = async () => {
    try {
      setLoading(true);
      setError('');
      await googleLogin();
      toast.success('Welcome back!');
      navigate('/');
    } catch (err) {
      setError(err.message || 'Google login failed. Please try again.');
      toast.error('Google login failed.');
    } finally {
      setLoading(false);
    }
  };

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await login(formData.email, formData.password);
      toast.success('Successfully logged in!');
      navigate('/');
    } catch (err) {
      console.error(err);
      if (err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password' || err.code === 'auth/invalid-credential') {
        setError('Invalid email or password.');
      } else {
        setError('Login failed. Please check your connection.');
      }
      toast.error('Login failed.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0f1d] flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#1e3a5f_0%,_#0a0f1d_70%)] pointer-events-none" />
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse"></div>

      <div className="w-full max-w-[420px] relative z-10">
        {/* Card */}
        <div className="bg-[#111827]/90 border border-slate-700/50 rounded-[2.5rem] p-8 md:p-10 shadow-2xl backdrop-blur-sm">

          {/* Logo & Title */}
          <div className="flex flex-col items-center mb-10">
            <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-2xl mb-5 border-2 border-slate-600/50">
              <img src="/logo.jpg" alt="ACB Logo" className="w-full h-full object-cover" />
            </div>
            <h1 className="text-2xl font-[1000] text-white tracking-tighter uppercase text-center leading-tight">
              APNA COLLEGE<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">BIHAR</span>
            </h1>
            <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.3em] mt-3">Portal Authentication</p>
          </div>

          {/* Error */}
          {error && (
            <div className="bg-red-500/10 border border-red-500/30 text-red-400 p-4 rounded-2xl mb-6 text-[11px] font-bold text-center flex items-center justify-center gap-2 animate-shake">
              <ShieldCheck size={14} />
              <span>{error}</span>
            </div>
          )}

          {/* Email/Password Form */}
          <form onSubmit={handleEmailLogin} className="space-y-3 mb-6">
            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-500 transition-colors" size={16} />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-[#1c2636] border border-slate-700/50 focus:border-blue-500/60 rounded-2xl py-4 pl-12 pr-4 text-white text-sm font-medium outline-none transition-all placeholder:text-slate-600"
                required
              />
            </div>
            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-500 transition-colors" size={16} />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full bg-[#1c2636] border border-slate-700/50 focus:border-blue-500/60 rounded-2xl py-4 pl-12 pr-4 text-white text-sm font-medium outline-none transition-all placeholder:text-slate-600"
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-blue-600 hover:bg-blue-500 active:scale-95 text-white font-[1000] rounded-2xl text-[11px] uppercase tracking-widest shadow-lg shadow-blue-900/30 transition-all disabled:opacity-60 flex items-center justify-center gap-2"
            >
              {loading ? 'Validating...' : 'Secure Access'}
              {!loading && <ArrowRight size={14} />}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 mb-6">
            <div className="flex-1 h-px bg-slate-700/60" />
            <span className="text-slate-600 text-[9px] font-black uppercase tracking-widest">Social Gateway</span>
            <div className="flex-1 h-px bg-slate-700/60" />
          </div>

          {/* Google Login */}
          <button
            onClick={handleGoogleLogin}
            disabled={loading}
            className="w-full flex items-center justify-center gap-3 py-4 bg-white hover:bg-slate-100 active:scale-95 text-slate-900 font-black rounded-2xl text-[10px] uppercase tracking-widest shadow-lg transition-all disabled:opacity-60"
          >
            <Chrome className="text-blue-600" size={18} />
            Login with Google
          </button>

          {/* Signup link */}
          <p className="text-center text-slate-500 text-[11px] font-bold mt-8">
            Don't have an account?{' '}
            <Link to="/signup" className="text-orange-400 hover:text-orange-300 underline underline-offset-4">
              Apply for Admission
            </Link>
          </p>

          <div className="mt-8 pt-8 border-t border-slate-800/50 flex justify-center">
            <Link to="/" className="text-slate-600 hover:text-slate-300 text-[9px] font-black uppercase tracking-[0.3em] flex items-center gap-2 transition-all">
              <BookOpen size={14} /> Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
