import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { BookOpen, Mail, Phone, Lock, User, ShieldCheck } from 'lucide-react';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function Signup() {
  const navigate = useNavigate();
  const { signup } = useAuth();
  
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', password: '', otp: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState('DETAILS'); // DETAILS or OTP
  const [otpHash, setOtpHash] = useState(null);

  const API_URL = '/api/auth';

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleRequestOTP = async (e) => {
    e.preventDefault();
    if (formData.phone.length < 10) return setError("Enter a valid 10-digit mobile number");
    
    setError('');
    setLoading(true);
    try {
      // 1. Send OTP to email via our Node.js Backend
      const response = await axios.post(`${API_URL}/send-email-otp`, { email: formData.email });
      setOtpHash(response.data.hash);
      setStep('OTP');
      // SHOWING OTP ON SCREEN JUST FOR PRINCE BHAI'S TESTING
      // Removed because user requires strictly Real Email transmission.
    } catch (err) {
      setError(err.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyAndSignup = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      // 2. Verify OTP with our Node.js Backend
      await axios.post(`${API_URL}/verify-email-otp`, { 
        otp: formData.otp, 
        hash: otpHash 
      });

      // 3. If OTP is valid, create account in Firebase!
      await signup(formData.email, formData.password, formData.name, formData.phone);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || err.message);
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
            <div className="p-4 bg-gradient-to-br from-blue-600 to-indigo-800 rounded-[1.8rem] shadow-2xl mb-5">
              <BookOpen className="text-white w-10 h-10" />
            </div>
            <h1 className="text-3xl md:text-4xl font-[1000] text-white tracking-tighter uppercase text-center leading-[1]">
              APNA COLLEGE<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500 text-[14px] font-black tracking-[0.3em]">STUDENT ADMISSION portal</span>
            </h1>
          </div>

          {error && (
            <div className="bg-red-500/5 border border-red-500/20 text-red-100 p-4 rounded-2xl mb-8 text-[10px] font-bold text-center flex items-center justify-center space-x-2">
              <ShieldCheck size={16} />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={step === 'DETAILS' ? handleRequestOTP : handleVerifyAndSignup} className="space-y-4">
            
            {step === 'DETAILS' ? (
              <>
                <div className="relative group">
                  <User className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-500" size={18} />
                  <input type="text" name="name" placeholder="YOUR FULL NAME" value={formData.name} onChange={handleChange} className="w-full bg-[#1c263d] border-2 border-transparent focus:border-blue-500/50 rounded-[1.5rem] p-5 pl-16 text-white text-xs font-bold outline-none transition-all placeholder:text-slate-600" required />
                </div>

                <div className="relative group">
                  <Phone className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-500" size={18} />
                  <input type="tel" name="phone" placeholder="MOBILE NUMBER (10 DIGITS)" value={formData.phone} onChange={handleChange} className="w-full bg-[#1c263d] border-2 border-transparent focus:border-blue-500/50 rounded-[1.5rem] p-5 pl-16 text-white text-xs font-bold outline-none transition-all placeholder:text-slate-600" required />
                </div>

                <div className="relative group">
                  <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-500" size={18} />
                  <input type="email" name="email" placeholder="EMAIL ADDRESS" value={formData.email} onChange={handleChange} className="w-full bg-[#1c263d] border-2 border-transparent focus:border-blue-500/50 rounded-[1.5rem] p-5 pl-16 text-white text-xs font-bold outline-none transition-all placeholder:text-slate-600" required />
                </div>

                <div className="relative group">
                  <Lock className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-500" size={18} />
                  <input type="password" name="password" placeholder="SECURE PASSWORD" value={formData.password} onChange={handleChange} className="w-full bg-[#1c263d] border-2 border-transparent focus:border-blue-500/50 rounded-[1.5rem] p-5 pl-16 text-white text-xs font-bold outline-none transition-all placeholder:text-slate-600" required />
                </div>
              </>
            ) : (
                <div className="relative group animate-in fade-in zoom-in duration-300">
                  <ShieldCheck className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-orange-500" size={18} />
                  <input type="text" name="otp" placeholder={`Enter 6-digit OTP sent to ${formData.email}`} value={formData.otp} onChange={handleChange} className="w-full bg-[#1c263d] border-2 border-transparent focus:border-orange-500/50 rounded-[1.5rem] p-5 pl-16 text-white text-xs font-bold outline-none transition-all placeholder:text-slate-600" maxLength={6} required />
                  <p className="text-[10px] text-center text-slate-500 mt-4">Check your spam folder if you don't see it.</p>
                </div>
            )}

            <button type="submit" disabled={loading} className="w-full text-white bg-blue-600 hover:bg-blue-500 font-[1000] py-5 rounded-[1.8rem] shadow-xl transition-all active:scale-95 text-xs uppercase tracking-widest mt-6">
              {loading ? 'Processing...' : (step === 'DETAILS' ? 'Verify Email with OTP' : 'Complete Admission')}
            </button>
            
            {step === 'OTP' && (
              <button type="button" onClick={() => setStep('DETAILS')} className="w-full text-slate-500 hover:text-white font-[1000] py-3 rounded-[1.8rem] transition-all text-[10px] uppercase tracking-widest">
                Edit Details
              </button>
            )}
          </form>

          <div className="mt-8 text-center text-slate-600 text-[10px] font-bold">
            Already registered? <Link to="/login" className="text-orange-500 hover:underline">Log in now</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
