import React, { useState, useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { ChevronLeft, Shield, Timer, X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useStudy } from '../context/StudyContext';
import { Capacitor } from '@capacitor/core';
import { getToken } from 'firebase/messaging';
import { doc, updateDoc } from 'firebase/firestore';
import { messaging, VAPID_KEY, db } from '../firebase';
import SEO from '../components/SEO';

export default function DashboardLayout() {
  const isNative = Capacitor.isNativePlatform();
  const location = useLocation();
  const navigate = useNavigate();
  const { user, updateProfileData } = useAuth();
  const [phone, setPhone] = useState('');
  const [isPhoneModalOpen, setPhoneModalOpen] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const { timerActive } = useStudy();


  // Track online/offline status
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  useEffect(() => {
    // Only show phone modal when: online + user loaded + phone missing
    if (isOnline && user && user.uid && !user.phone) {
      setPhoneModalOpen(true);
    } else {
      setPhoneModalOpen(false);
    }

    // Setup push notifications (only when online)
    const setupNotifications = async () => {
      if (!user || !messaging || !isOnline) return;
      try {
        const permission = await Notification.requestPermission();
        if (permission === 'granted') {
          const token = await getToken(messaging, { vapidKey: VAPID_KEY });
          if (token) {
            await updateDoc(doc(db, 'users', user.uid), { fcmToken: token });
          }
        }
      } catch (err) {
        console.error('Push notification setup failed:', err);
      }
    };
    setupNotifications();
  }, [user, isOnline]);

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

  const getPageTitle = (pathname) => {
    if (pathname.includes('/study-resources')) return 'Study Resources';
    if (pathname.includes('/study')) return 'Study Zone';
    if (pathname.includes('/notes')) return 'B.Tech Notes';
    if (pathname.includes('/pyq')) return 'PYQ Papers';
    if (pathname.includes('/syllabus')) return 'BEU Syllabus';
    if (pathname.includes('/cgpa')) return 'CGPA Calculator';
    if (pathname.includes('/ugeac-predictor')) return 'UGEAC Predictor';
    if (pathname.includes('/calculator')) return 'Calculator';
    if (pathname.includes('/achievements')) return 'Achievements';
    if (pathname.includes('/groups')) return 'Study Groups';
    if (pathname.includes('/timetable')) return 'BEU Timetable';
    if (pathname.includes('/attendance')) return 'BEU Attendance Tracker';
    if (pathname.includes('/extras')) return 'Personal Manager';
    if (pathname.includes('/calendar')) return 'Calendar';
    if (pathname.includes('/beu-result')) return 'BEU Result';
    if (pathname.includes('/admin')) return 'Admin Panel';
    return 'ACB Hub';
  };
  const pageTitle = getPageTitle(location.pathname);

  return (
    <div className="flex flex-col h-screen bg-white overflow-hidden text-slate-900 font-['Inter'] selection:bg-blue-500/30">
      <SEO title={pageTitle} />
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
            <span className="text-[10px] font-[1000] tracking-tighter uppercase text-slate-900">{pageTitle}</span>
         </div>
      </div>

      <main className="flex-1 overflow-y-auto custom-scrollbar relative z-10 p-4 md:p-6 lg:p-8 pb-32">
        <div className="max-w-7xl mx-auto min-h-[80vh]">
          <Outlet />
        </div>
      </main>
      
      {/* Verification Modal - only shows when online */}
      {isPhoneModalOpen && isOnline && <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-slate-50/80 backdrop-blur-xl"><div className="w-full max-w-md bg-white border border-slate-200 rounded-[3rem] p-10 text-center space-y-8 shadow-2xl relative overflow-hidden"><div className="inline-flex p-5 bg-blue-600/20 text-blue-500 rounded-3xl"><Shield size={32} /></div><h2 className="text-2xl font-[1000] text-slate-900 uppercase tracking-tighter">Security Update</h2><p className="text-slate-500 text-sm">Please link your active mobile number to secure your college portal access.</p><form onSubmit={handlePhoneSubmit} className="space-y-6"><div className="flex gap-2"><div className="bg-slate-100 px-4 py-4 rounded-2xl text-xs font-black">+91</div><input type="tel" maxLength={10} value={phone} onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))} placeholder="10-DIGIT MOBILE NO." className="flex-1 bg-slate-100 rounded-2xl p-4 text-sm font-black outline-none" /></div><button type="submit" className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-widest transition-all">Save & Continue</button></form></div></div>}

      <FloatingTimer />
    </div>
  );
}
