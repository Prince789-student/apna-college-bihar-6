import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { BookOpen, Chrome, ShieldCheck } from 'lucide-react';

export default function Signup() {
  const navigate = useNavigate();
  const { googleLogin } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGoogleSignup = async () => {
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

  return (
    <div className="min-h-screen bg-[#02040a] flex flex-col items-center justify-center p-4 font-['Inter'] relative overflow-hidden">
      
      {/* Background Orbs */}
      <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[-5%] right-[-5%] w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[100px]"></div>

      <div className="w-full max-w-[500px] bg-[#0d121f] border border-slate-800/80 rounded-[3rem] p-10 md:p-14 shadow-2xl relative z-10 group">
        <div className="relative">
          {/* Brand & Greeting */}
          <div className="flex flex-col items-center mb-10">
            <div className="mb-5">
              <img src="/logo.jpg" alt="Logo" className="w-16 h-16 rounded-2xl mx-auto shadow-2xl" />
            </div>
            <h1 className="text-3xl md:text-4xl font-[1000] text-white tracking-tighter uppercase text-center leading-[1]">
              APNA COLLEGE<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500 text-[18px] font-black tracking-[0.2em]">BIHAR PORTAL</span>
            </h1>
          </div>

          {error && (
            <div className="bg-red-500/5 border border-red-500/20 text-red-100 p-4 rounded-2xl mb-8 text-[10px] font-bold text-center flex items-center justify-center space-x-2">
              <ShieldCheck size={16} />
              <span>{error}</span>
            </div>
          )}

          <div className="space-y-6 pt-6">
            <button onClick={handleGoogleSignup} disabled={loading} className="w-full bg-white text-slate-950 font-black py-5 rounded-[1.8rem] shadow-xl hover:bg-slate-100 transition-all flex items-center justify-center space-x-4 active:scale-95 text-xs uppercase tracking-widest mt-6 border border-slate-200">
              <Chrome className="text-blue-600 w-6 h-6" />
              <span>{loading ? "Connecting..." : "SIGN UP WITH GOOGLE"}</span>
            </button>
          </div>

          <div className="mt-10 text-center text-slate-600 text-[10px] font-bold">
            Already registered? <Link to="/login" className="text-orange-500 hover:underline">Log in now</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
