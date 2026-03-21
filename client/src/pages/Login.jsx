import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { 
  GraduationCap, Mail, Lock, 
  ShieldCheck, Chrome, ArrowRight,
  ChevronRight, Globe, Zap
} from 'lucide-react';
import { toast } from 'react-hot-toast';

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
      toast.success('Access Granted via Google');
      navigate('/dashboard');
    } catch (err) {
      toast.error(err.message);
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
      toast.success('Welcome back, Scholar!');
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#02040a] text-white font-['Inter'] flex items-center justify-center p-6 relative overflow-hidden">
      
      {/* ─── BACKGROUND ELEMENTS ───────────────────────────────── */}
      <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[200px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[150px] pointer-events-none"></div>
      
      <div className="w-full max-w-lg bg-[#0d121f] border border-slate-800/80 rounded-[3.5rem] p-10 md:p-14 shadow-2xl relative z-10 animate-in zoom-in-95 duration-500 overflow-hidden">
         <div className="absolute top-0 right-0 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

         <div className="relative z-10 space-y-10">
            {/* Logo area */}
            <div className="flex flex-col items-center">
               <div className="p-4 bg-gradient-to-br from-blue-600 to-indigo-800 rounded-2xl shadow-xl shadow-blue-500/20 mb-6 group cursor-pointer" onClick={() => navigate('/')}>
                  <GraduationCap size={32} className="text-white group-hover:scale-110 transition-transform" />
               </div>
               <h1 className="text-3xl font-[1000] tracking-tighter uppercase leading-[0.9] text-center">
                  Apna College <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Bihar Portal</span>
               </h1>
            </div>

            <div className="space-y-6">
               <form onSubmit={handleEmailLogin} className="space-y-4">
                  <div className="space-y-2">
                     <p className="text-[9px] font-black text-slate-600 uppercase tracking-[0.2em] ml-2">Secure Access ID</p>
                     <div className="relative group">
                        <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-500 transition-colors" size={18} />
                        <input 
                           type="email" 
                           name="email" 
                           placeholder="EMAIL ADDRESS" 
                           value={formData.email} 
                           onChange={handleChange} 
                           className="w-full bg-[#1c263d] border-2 border-transparent focus:border-blue-500/50 rounded-2xl p-5 pl-16 text-white text-xs font-black outline-none transition-all placeholder:text-slate-700" 
                           required 
                        />
                     </div>
                  </div>

                  <div className="space-y-2">
                     <p className="text-[9px] font-black text-slate-600 uppercase tracking-[0.2em] ml-2">Biometric Passphrase</p>
                     <div className="relative group">
                        <Lock className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-500 transition-colors" size={18} />
                        <input 
                           type="password" 
                           name="password" 
                           placeholder="••••••••" 
                           value={formData.password} 
                           onChange={handleChange} 
                           className="w-full bg-[#1c263d] border-2 border-transparent focus:border-blue-500/50 rounded-2xl p-5 pl-16 text-white text-xs font-black outline-none transition-all placeholder:text-slate-700" 
                           required 
                        />
                     </div>
                  </div>

                  <button 
                     type="submit" 
                     disabled={loading} 
                     className="w-full bg-blue-600 hover:bg-blue-500 text-white rounded-2xl py-5 font-black text-xs uppercase tracking-[0.2em] shadow-xl shadow-blue-900/40 transition-all active:scale-95 disabled:opacity-50"
                  >
                     {loading ? 'Authenticating...' : 'Establish Connection'}
                  </button>
               </form>

               <div className="flex items-center gap-4 py-2">
                  <div className="flex-1 h-[1px] bg-slate-800"></div>
                  <span className="text-[8px] font-black text-slate-600 uppercase tracking-widest">Global Auth Gateway</span>
                  <div className="flex-1 h-[1px] bg-slate-800"></div>
               </div>

               <button 
                  onClick={handleGoogleLogin} 
                  className="w-full bg-white text-slate-950 rounded-2xl py-5 font-black text-xs uppercase tracking-widest flex items-center justify-center gap-4 hover:bg-slate-100 transition-all active:scale-95 shadow-xl"
               >
                  <Chrome size={20} className="text-blue-600" />
                  <span>Sync via Google Cloud</span>
               </button>
            </div>

            <div className="pt-6 text-center">
               <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tight">
                  New Candidate? <Link to="/signup" className="text-blue-500 hover:underline">Apply for Academic Hub Access</Link>
               </p>
            </div>
         </div>
      </div>

    </div>
  );
}
