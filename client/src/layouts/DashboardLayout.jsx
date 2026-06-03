import React, { useState, useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { ChevronLeft, Shield, Timer, X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useStudy } from '../context/StudyContext';
import { Capacitor } from '@capacitor/core';

export default function DashboardLayout() {
  const isNative = Capacitor.isNativePlatform();
  const location = useLocation();
  const navigate = useNavigate();
  const { user, updateProfileData } = useAuth();
  const [phone, setPhone] = useState('');
  const [isPhoneModalOpen, setPhoneModalOpen] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const { timerActive } = useStudy();

  useEffect(() => {
    if (user && !user.phone) setPhoneModalOpen(true);
    else setPhoneModalOpen(false);
  }, [user]);

  const handlePhoneSubmit = async (e) => {
    e.preventDefault();
    if (phone.length < 10) return;
    setIsUpdating(true);
    try { await updateProfileData({ phone }); setPhoneModalOpen(false); }
    catch (err) { console.error(err); } finally { setIsUpdating(false); }
  };

  const FloatingTimer = () => {
    const { timerActive, timerTime } = useStudy();
    const [isMinimized, setIsMinimized] = useState(false);
    if (!timerActive || location.pathname === '/dashboard/study') return null;
    const m = Math.floor((timerTime % 3600) / 60);
    const sec = timerTime % 60;
    return (
      <div className={`fixed bottom-24 right-6 md:bottom-10 md:right-10 z-[100] transition-all duration-500 transform ${isMinimized ? 'translate-x-[70%]' : ''}`}>
        <div className="bg-slate-900 border border-slate-700 p-1.5 rounded-[2rem] shadow-2xl flex items-center gap-4 group">
          <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center animate-pulse"><Timer size={20} className="text-white" /></div>
          <div className={`flex items-center gap-4 pr-6 ${isMinimized ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100'}`}>
            <div><p className="text-[8px] font-black text-blue-400 uppercase tracking-widest leading-none mb-1">Live Focus</p><p className="text-xl font-black text-white tabular-nums tracking-tighter">{m.toString().padStart(2, '0')}:{sec.toString().padStart(2, '0')}</p></div>
            <button onClick={() => navigate('/dashboard/study')} className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl text-white text-[9px] font-black uppercase tracking-widest">Resume</button>
          </div>
          <button onClick={() => setIsMinimized(!isMinimized)} className="p-2 text-slate-500 hover:text-white">{isMinimized ? <ChevronLeft size={16} /> : <X size={16} />}</button>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col h-screen bg-white overflow-hidden text-slate-900 font-['Inter'] selection:bg-blue-500/30">
      {/* Universal Clean Header for All Platforms & Devices */}
      <div className="flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-xl border-b border-slate-200 sticky top-0 z-[100]">
         <button 
            onClick={() => {
              if (location.state?.from === 'study-network') {
                navigate('/dashboard/study?standalone=true', { state: { tab: 'network' } });
              } else {
                navigate(-1);
              }
            }} 
            className="flex items-center gap-2 text-slate-900 hover:text-blue-600 transition-colors group"
         >
            <div className="p-2 bg-slate-100 group-hover:bg-blue-600/10 rounded-xl transition-all">
               <ChevronLeft size={20} />
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest">
              Back
            </span>
         </button>
         <div className="flex items-center gap-3">
            <img src="/logo-acb.png?v=99" alt="Logo" className="w-8 h-8 rounded-lg object-cover shadow-sm" />
            <span className="text-[10px] font-[1000] tracking-tighter uppercase text-slate-900">ACB Hub</span>
         </div>
      </div>

      <main className="flex-1 overflow-y-auto custom-scrollbar relative z-10 p-4 md:p-6 lg:p-8 pb-32">
        <div className="max-w-7xl mx-auto min-h-[80vh]">
          <Outlet />
        </div>
      </main>
      
      {/* Verification Modal */}
      {isPhoneModalOpen && <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-slate-50/80 backdrop-blur-xl"><div className="w-full max-w-md bg-white border border-slate-200 rounded-[3rem] p-10 text-center space-y-8 shadow-2xl relative overflow-hidden"><div className="inline-flex p-5 bg-blue-600/20 text-blue-500 rounded-3xl"><Shield size={32} /></div><h2 className="text-2xl font-[1000] text-slate-900 uppercase tracking-tighter">Security Update</h2><form onSubmit={handlePhoneSubmit} className="space-y-6"><div className="flex gap-2"><div className="bg-slate-100 px-4 py-4 rounded-2xl text-xs font-black">+91</div><input type="tel" maxLength={10} value={phone} onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))} placeholder="9XXXXXXXXX" className="flex-1 bg-slate-100 rounded-2xl p-4 text-sm font-black outline-none" /></div><button type="submit" className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-widest transition-all">Secure Access</button></form></div></div>}

      <FloatingTimer />
    </div>
  );
}
