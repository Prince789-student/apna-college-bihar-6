import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { BookOpen, Mail, Phone, Lock, User, CheckCircle2, ChevronRight, Chrome, ShieldCheck, GraduationCap, Zap, Globe } from 'lucide-react';

export default function Login() {
  const navigate = useNavigate();
  const { login, googleLogin } = useAuth();
  
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleGoogleLogin = async () => {
    try {
      setLoading(true);
      await googleLogin();
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
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
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#02040a] flex flex-col items-center justify-center p-4 font-['Inter'] relative overflow-hidden">
      
      {/* Background Orbs */}
      <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[-5%] right-[-5%] w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[100px]"></div>

      <div className="w-full max-w-[500px] bg-[#0d121f] border border-slate-800/80 rounded-[3rem] p-10 md:p-14 shadow-[0_50px_100px_rgba(0,0,0,0.8)] relative z-10 group">
        <div className="relative">
          {/* Brand & Greeting */}
          <div className="flex flex-col items-center mb-10">
            <div className="p-4 bg-gradient-to-br from-blue-600 to-indigo-800 rounded-[1.8rem] shadow-2xl shadow-blue-950 mb-5">
              <BookOpen className="text-white w-10 h-10" />
            </div>
            <h1 className="text-3xl md:text-4xl font-[1000] text-white tracking-tighter uppercase text-center leading-[1]">
              APNA COLLEGE<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-200 to-amber-500">BIHAR PORTAL</span>
            </h1>
          </div>

          {error && (
            <div className="bg-red-500/5 border border-red-500/20 text-red-100 p-4 rounded-2xl mb-8 text-[10px] font-bold text-center flex items-center justify-center space-x-2">
              <ShieldCheck size={16} />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleEmailLogin} className="space-y-4">
            <div className="relative group">
              <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-500" size={18} />
              <input type="email" name="email" placeholder="EMAIL ADDRESS" value={formData.email} onChange={handleChange} className="w-full bg-[#1c263d] border-2 border-transparent focus:border-blue-500/50 rounded-[1.5rem] p-5 pl-16 text-white text-xs font-bold outline-none transition-all placeholder:text-slate-600" required />
            </div>
            <div className="relative group">
              <Lock className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-500" size={18} />
              <input type="password" name="password" placeholder="PASSWORD" value={formData.password} onChange={handleChange} className="w-full bg-[#1c263d] border-2 border-transparent focus:border-blue-500/50 rounded-[1.5rem] p-5 pl-16 text-white text-xs font-bold outline-none transition-all placeholder:text-slate-600" required />
            </div>

            <button type="submit" disabled={loading} className="w-full text-white font-[1000] py-5 rounded-[1.8rem] shadow-xl transition-all active:scale-95 text-xs uppercase tracking-widest bg-blue-600 hover:bg-blue-500">
              {loading ? 'Processing...' : 'Secure Login'}
            </button>
          </form>

          {/* Fixed Social Area */}
          <div className="flex items-center my-10 px-4 opacity-30">
            <div className="flex-grow border-t border-slate-700"></div>
            <span className="mx-6 text-slate-500 text-[8px] font-black uppercase tracking-[0.5em]">Other Access</span>
            <div className="flex-grow border-t border-slate-700"></div>
          </div>

          <button onClick={handleGoogleLogin} className="w-full bg-white text-slate-950 font-black py-5 rounded-[1.8rem] shadow-xl hover:bg-slate-100 transition-all flex items-center justify-center space-x-4 active:scale-95 text-xs border border-slate-200">
            <Chrome className="text-blue-600 w-6 h-6" />
            <span>LOGIN WITH GOOGLE</span>
          </button>

          <div className="mt-8 text-center text-slate-600 text-[10px] font-bold">
            Don't have an account? <Link to="/signup" className="text-blue-500 hover:underline">Admission Open / Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
