import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Chrome, Lock, Mail, ShieldCheck } from 'lucide-react';

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
      navigate('/');
    } catch (err) {
      setError(err.message || 'Google login failed. Please try again.');
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
      navigate('/');
    } catch (err) {
      setError('Invalid email or password.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0f1d] flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#1e3a5f_0%,_#0a0f1d_70%)] pointer-events-none" />

      <div className="w-full max-w-[420px] relative z-10">
        {/* Card */}
        <div className="bg-[#111827]/90 border border-slate-700/50 rounded-[2.5rem] p-8 shadow-2xl backdrop-blur-sm">

          {/* Logo & Title */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-20 h-20 rounded-[1.5rem] overflow-hidden shadow-2xl mb-5 border-2 border-slate-600/50">
              <img src="/logo.jpg" alt="ACB Logo" className="w-full h-full object-cover" />
            </div>
            <h1 className="text-2xl font-[900] text-white tracking-tighter uppercase text-center leading-tight">
              APNA COLLEGE<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">BIHAR</span>
            </h1>
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.25em] mt-2">Student Portal</p>
          </div>

          {/* Error */}
          {error && (
            <div className="bg-red-500/10 border border-red-500/30 text-red-400 p-3 rounded-2xl mb-5 text-[11px] font-bold text-center flex items-center justify-center gap-2">
              <ShieldCheck size={14} />
              <span>{error}</span>
            </div>
          )}

          {/* Email/Password Form */}
          <form onSubmit={handleEmailLogin} className="space-y-3 mb-6">
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-[#1c2636] border border-slate-700/50 focus:border-blue-500/60 rounded-2xl py-4 pl-11 pr-4 text-white text-sm font-medium outline-none transition-all placeholder:text-slate-600"
                required
              />
            </div>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full bg-[#1c2636] border border-slate-700/50 focus:border-blue-500/60 rounded-2xl py-4 pl-11 pr-4 text-white text-sm font-medium outline-none transition-all placeholder:text-slate-600"
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-blue-600 hover:bg-blue-500 active:scale-95 text-white font-[900] rounded-2xl text-sm uppercase tracking-widest shadow-lg shadow-blue-900/30 transition-all disabled:opacity-60"
            >
              {loading ? 'Please wait...' : 'Secure Login'}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 mb-5">
            <div className="flex-1 h-px bg-slate-700/60" />
            <span className="text-slate-600 text-[9px] font-black uppercase tracking-widest">or</span>
            <div className="flex-1 h-px bg-slate-700/60" />
          </div>

          {/* Google Login */}
          <button
            onClick={handleGoogleLogin}
            disabled={loading}
            className="w-full flex items-center justify-center gap-3 py-4 bg-white hover:bg-slate-100 active:scale-95 text-slate-900 font-[900] rounded-2xl text-sm uppercase tracking-wider shadow-lg transition-all disabled:opacity-60"
          >
            <Chrome className="text-blue-600" size={20} />
            Login with Google
          </button>

          {/* Signup link */}
          <p className="text-center text-slate-600 text-[11px] font-bold mt-6">
            Don't have an account?{' '}
            <Link to="/signup" className="text-blue-400 hover:text-blue-300">
              Admission Open / Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
