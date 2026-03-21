import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { 
  GraduationCap, Chrome, ShieldCheck, 
  ArrowRight, UserCheck, Zap, Star 
} from 'lucide-react';
import { toast } from 'react-hot-toast';

export default function Signup() {
  const navigate = useNavigate();
  const { googleLogin } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGoogleSignup = async () => {
    try {
      setLoading(true);
      await googleLogin();
      toast.success('Registration Successful!');
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

         <div className="relative z-10 space-y-10 text-center">
            {/* Logo area */}
            <div className="flex flex-col items-center">
               <div className="p-4 bg-gradient-to-br from-blue-600 to-indigo-800 rounded-2xl shadow-xl shadow-blue-500/20 mb-6 group cursor-pointer" onClick={() => navigate('/')}>
                  <GraduationCap size={32} className="text-white group-hover:scale-110 transition-transform" />
               </div>
               <h1 className="text-3xl font-[1000] tracking-tighter uppercase leading-[0.9]">
                  Join the <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Scholar Hub</span>
               </h1>
            </div>

            <div className="space-y-8">
               <div className="p-8 bg-blue-600/5 border border-blue-500/20 rounded-[2.5rem] space-y-4">
                  <div className="flex items-center justify-center gap-2 text-blue-400">
                     <UserCheck size={20} />
                     <span className="text-[10px] font-black uppercase tracking-[0.3em]">Verified Admission</span>
                  </div>
                  <p className="text-slate-400 text-xs font-bold leading-relaxed px-4">
                     We utilize Google Authentication for instant identity verification. No passwords or OTPs required.
                  </p>
               </div>

               <div className="space-y-4">
                  <button 
                     onClick={handleGoogleSignup} 
                     disabled={loading} 
                     className="w-full bg-white text-slate-950 rounded-2xl py-6 font-black text-xs uppercase tracking-widest flex items-center justify-center gap-4 hover:bg-slate-100 transition-all active:scale-95 shadow-xl shadow-blue-900/10"
                  >
                     <Chrome size={20} className="text-blue-600" />
                     <span>{loading ? "Establishing..." : "Sync Google Scholar ID"}</span>
                  </button>

                  <div className="flex items-center justify-center gap-6 pt-4">
                     <div className="flex items-center gap-2">
                        <Zap size={14} className="text-blue-500" />
                        <span className="text-[8px] font-black text-slate-600 uppercase tracking-widest">Instant Access</span>
                     </div>
                     <div className="w-[1px] h-3 bg-slate-800"></div>
                     <div className="flex items-center gap-2">
                        <Star size={14} className="text-emerald-500" />
                        <span className="text-[8px] font-black text-slate-600 uppercase tracking-widest">Premium Tools</span>
                     </div>
                  </div>
               </div>
            </div>

            <div className="pt-6 border-t border-slate-800/50">
               <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tight">
                  Already a Scholar? <Link to="/login" className="text-blue-500 font-black hover:underline ml-1">Member Entrance</Link>
               </p>
            </div>
         </div>
      </div>

    </div>
  );
}
