import React, { useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Phone, ShieldCheck } from 'lucide-react';
import toast from 'react-hot-toast';

const ProtectedRoute = () => {
  const { user, loading, updateProfileData } = useAuth();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (loading) return <div className="min-h-screen bg-[#02040a] flex items-center justify-center"><div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div></div>;
  if (!user) return <Navigate to="/login" />;

  const needsPhone = !user.phone || user.phone.trim() === "";

  const handlePhoneSubmit = async (e) => {
    e.preventDefault();
    if(phoneNumber.length < 10) return toast.error("Enter a valid 10-digit number!");
    setIsSubmitting(true);
    try {
      await updateProfileData({ phone: phoneNumber });
      toast.success("Mobile number linked securely!");
    } catch(err) {
      toast.error("Failed to save. Try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Traps user cleanly in a full-screen blurred background
  if (needsPhone) {
    return (
      <div className="fixed inset-0 z-[9999] bg-[#02040a]/90 backdrop-blur-md flex items-center justify-center p-4">
        <div className="bg-[#0b101c] border border-blue-600/30 p-8 md:p-12 rounded-[2.5rem] shadow-2xl max-w-[450px] w-full relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 blur-[50px] rounded-full"></div>
          <div className="relative z-10 flex flex-col items-center">
            <div className="p-4 bg-blue-600/10 rounded-full border border-blue-500/20 mb-6">
              <ShieldCheck className="text-blue-500 w-10 h-10" />
            </div>
            <h2 className="text-2xl md:text-3xl font-[900] text-center text-white uppercase tracking-tighter mb-2">Security Check</h2>
            <p className="text-slate-400 text-xs font-bold text-center mb-8">Please link your active mobile number to secure your college portal access.</p>
            
            <form onSubmit={handlePhoneSubmit} className="w-full space-y-4">
              <div className="relative group">
                <Phone className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400" size={18} />
                <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value.replace(/\\D/g, '').slice(0,10))} placeholder="10-DIGIT MOBILE NO." className="w-full bg-[#182136] border border-transparent focus:border-blue-500/50 rounded-[1.5rem] p-5 pl-16 text-white text-xs font-bold outline-none transition-all placeholder:text-slate-600" required />
              </div>
              <button type="submit" disabled={isSubmitting} className="w-full bg-blue-600 hover:bg-blue-500 text-white font-[1000] py-5 rounded-[1.8rem] shadow-[0_10px_40px_rgba(37,99,235,0.4)] transition-all active:scale-95 text-xs tracking-widest uppercase mt-4">
                {isSubmitting ? "Updating..." : "Save & Continue"}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return <Outlet />;
};

export default ProtectedRoute;
