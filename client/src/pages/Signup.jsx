import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Chrome, ShieldCheck, Mail, Lock, User, Phone, ArrowRight, BookOpen } from 'lucide-react';
import { toast } from 'react-hot-toast';

export default function Signup() {
  const navigate = useNavigate();
  const { signup, googleLogin } = useAuth();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleGoogleSignup = async () => {
    try {
      setLoading(true);
      setError('');
      await googleLogin();
      toast.success('Successfully registered with Google!');
      navigate('/');
    } catch (err) {
      setError(err.message || 'Google signup failed.');
      toast.error('Google signup failed.');
    } finally {
      setLoading(false);
    }
  };

  const handleEmailSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters.');
      setLoading(false);
      return;
    }

    try {
      await signup(formData.email, formData.password, formData.name, formData.phone);
      toast.success('Account created successfully!');
      navigate('/');
    } catch (err) {
      console.error(err);
      if (err.code === 'auth/email-already-in-use') {
        setError('This email is already registered.');
      } else {
        setError('Failed to create account. Please try again.');
      }
      toast.error('Signup failed.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0f1d] flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[150px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[120px]"></div>

      <div className="w-full max-w-[480px] relative z-10">
        <div className="bg-[#111827]/90 border border-slate-700/50 rounded-[3rem] p-8 md:p-12 shadow-2xl backdrop-blur-xl">
          
          {/* Header */}
          <div className="flex flex-col items-center mb-10">
            <div className="w-20 h-20 rounded-3xl overflow-hidden shadow-2xl mb-6 border-2 border-slate-600/30 group">
              <img src="/logo.jpg" alt="Logo" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <h1 className="text-3xl font-[1000] text-white tracking-tighter uppercase text-center leading-none">
              JOIN THE <span className="text-blue-500">REVOLUTION</span>
            </h1>
            <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.4em] mt-3">Bihar Engineering Hub</p>
          </div>

          {error && (
            <div className="bg-red-500/10 border border-red-500/30 text-red-400 p-4 rounded-2xl mb-8 text-[11px] font-bold text-center flex items-center justify-center gap-3">
              <ShieldCheck size={16} />
              <span>{error}</span>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleEmailSignup} className="space-y-4">
            <div className="relative group">
              <User className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-500 transition-colors" size={18} />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-[#1c2636] border border-slate-700/50 focus:border-blue-500/60 rounded-2xl py-4 pl-14 pr-4 text-white text-sm font-medium outline-none transition-all placeholder:text-slate-600"
              />
            </div>

            <div className="relative group">
              <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-500 transition-colors" size={18} />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-[#1c2636] border border-slate-700/50 focus:border-blue-500/60 rounded-2xl py-4 pl-14 pr-4 text-white text-sm font-medium outline-none transition-all placeholder:text-slate-600"
              />
            </div>

            <div className="relative group">
              <Phone className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-500 transition-colors" size={18} />
              <input
                type="tel"
                name="phone"
                placeholder="Mobile Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-[#1c2636] border border-slate-700/50 focus:border-blue-500/60 rounded-2xl py-4 pl-14 pr-4 text-white text-sm font-medium outline-none transition-all placeholder:text-slate-600"
              />
            </div>

            <div className="relative group">
              <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-500 transition-colors" size={18} />
              <input
                type="password"
                name="password"
                placeholder="Create Password"
                required
                value={formData.password}
                onChange={handleChange}
                className="w-full bg-[#1c2636] border border-slate-700/50 focus:border-blue-500/60 rounded-2xl py-4 pl-14 pr-4 text-white text-sm font-medium outline-none transition-all placeholder:text-slate-600"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-5 bg-blue-600 hover:bg-blue-500 active:scale-95 text-white font-[1000] rounded-2xl text-xs uppercase tracking-widest shadow-xl shadow-blue-900/40 transition-all disabled:opacity-60 flex items-center justify-center gap-3"
            >
              {loading ? 'Processing...' : 'Complete Admission'}
              <ArrowRight size={16} />
            </button>
          </form>

          <div className="flex items-center gap-4 my-8">
            <div className="flex-1 h-px bg-slate-700/50" />
            <span className="text-slate-600 text-[10px] font-black uppercase tracking-widest">Social Auth</span>
            <div className="flex-1 h-px bg-slate-700/50" />
          </div>

          <button
            onClick={handleGoogleSignup}
            disabled={loading}
            className="w-full flex items-center justify-center gap-4 py-4 bg-white hover:bg-slate-100 active:scale-95 text-slate-900 font-black rounded-2xl text-[10px] uppercase tracking-widest shadow-xl transition-all disabled:opacity-60"
          >
            <Chrome className="text-blue-600" size={20} />
            Instant Google Signup
          </button>

          <p className="text-center text-slate-500 text-[11px] font-bold mt-10">
            Already a member?{' '}
            <Link to="/login" className="text-blue-400 hover:text-blue-300 underline underline-offset-4">
              Secure Login
            </Link>
          </p>

          <div className="mt-8 pt-8 border-t border-slate-800/50 flex justify-center">
            <Link to="/" className="text-slate-600 hover:text-slate-300 text-[9px] font-black uppercase tracking-[0.3em] flex items-center gap-2 transition-all">
              <BookOpen size={14} /> Back to Campus
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
