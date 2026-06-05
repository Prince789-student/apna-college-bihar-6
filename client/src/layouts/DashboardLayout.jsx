import React, { useState, useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { ChevronLeft, Shield, Timer, X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useStudy } from '../context/StudyContext';
import { Capacitor } from '@capacitor/core';
import { getToken } from 'firebase/messaging';
import { doc, updateDoc, collection, query, where, onSnapshot, getDocs } from 'firebase/firestore';
import { messaging, VAPID_KEY, db } from '../firebase';
import SEO from '../components/SEO';
import { toast } from 'react-hot-toast';

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
    // Disable duplicate local phone modal
    setPhoneModalOpen(false);

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

  // Unified Notification Manager Effect
  useEffect(() => {
    if (!user || !user.uid || !isOnline) return;

    // 1. Real-time Nudges Listener
    const sessionStart = new Date();
    const nudgeQuery = query(
      collection(db, 'nudges'),
      where('toUserId', '==', user.uid),
      where('timestamp', '>=', sessionStart)
    );
    const unsubNudge = onSnapshot(nudgeQuery, (snap) => {
      snap.docChanges().forEach((change) => {
        if (change.type === 'added') {
          const nudge = change.doc.data();
          const text = `📚 ${nudge.fromUserName || 'Scholar'} says: padh lo padh lo kam dega!`;
          toast(text, {
            duration: 6000,
            icon: '💡',
            style: { background: '#1e293b', color: '#f8fafc', fontWeight: '800', fontSize: '12px' }
          });
          if ('Notification' in window && Notification.permission === 'granted') {
            new Notification('Study Nudge 📚', { body: text, icon: '/logo-acb.png' });
          }
        }
      });
    });

    // 2. Scheduled Checkers
    const runScheduledChecks = async () => {
      const todayStr = new Date().toLocaleDateString('en-CA');
      const curHour = new Date().getHours();

      // morning greeting check (5:00 AM)
      if (curHour >= 5) {
        const morningKey = `morning_greeting_${todayStr}`;
        if (!localStorage.getItem(morningKey)) {
          const sessionsQuery = query(
            collection(db, 'StudySessions'),
            where('userId', '==', user.uid),
            where('date', '==', todayStr)
          );
          const snap = await getDocs(sessionsQuery);
          const isAwake = !snap.empty || timerActive;
          const userName = user.name || 'Bhai';
          let title = '';
          let body = '';

          if (!isAwake) {
            title = `Good Morning Bhai ${userName} ☀️`;
            body = `Uth ja bidu 😄, kitna soyega?\n\nNaya din hai, naya chance hai. Kal jo nahi hua uska tension chhod, aaj jo kar sakta hai uspar focus kar.\n\nChai ☕ pi, fresh ho, aur lag ja apne kaam par. Thoda-thoda karke hi bade sapne pure hote hain.\n\nAur haan, mobile scroll karne se pehle apna target yaad kar lena. 😏\n\nChal bhai, aaj ka din phod dete hain. 💪🔥\nGood Morning, have a great day! 🌞✨`;
          } else {
            title = `Good Morning Biru 🌞`;
            body = `Subah-subah yaad aa gaya ki duniya mein ek banda aur hai jo bade-bade sapne dekhta hai aur phir unhe pura karne ki koshish bhi karta hai. 😄\n\nAaj ka mission simple hai:\n\nBakchodi limited 😜\nMehnat unlimited 💪\nTension zero 😌\n\nAur haan, agar aaj motivation na mile to yaad rakhna — sapne free hain, lekin unki EMI roz ki mehnat se bharni padti hai. 😅\n\nDin mast jaye bhai, kuch aisa karna ki raat ko lage ki aaj ka din waste nahi gaya. ❤️✨`;
          }

          toast.custom((t) => (
            <div className={`${t.visible ? 'animate-enter' : 'animate-leave'} max-w-md w-full bg-slate-900 text-white shadow-2xl rounded-[2rem] border border-slate-700/60 p-6 pointer-events-auto flex flex-col gap-3 font-['Inter']`}>
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-2">
                  <span className="text-xl">🌅</span>
                  <h4 className="text-xs font-black uppercase tracking-wider text-amber-400">{title}</h4>
                </div>
                <button onClick={() => toast.dismiss(t.id)} className="text-slate-400 hover:text-white text-[10px] font-black uppercase tracking-widest bg-white/10 px-2.5 py-1 rounded-lg">Close</button>
              </div>
              <p className="text-[10px] font-bold uppercase tracking-wider leading-relaxed whitespace-pre-line text-slate-300">
                {body}
              </p>
            </div>
          ), { duration: 15000 });

          if ('Notification' in window && Notification.permission === 'granted') {
            new Notification(title, { body: body.replace(/\n\n/g, ' '), icon: '/logo-acb.png' });
          }
          localStorage.setItem(morningKey, 'true');
        }
      }

      // attendance alert check (6:00 AM)
      if (curHour >= 6) {
        const attKey = `attendance_alert_${todayStr}`;
        if (!localStorage.getItem(attKey)) {
          const FULL_DAYS = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
          const todayDay = FULL_DAYS[new Date().getDay()];
          const todaySchedule = user.timetableV3?.[todayDay] || [];
          const todaySubjects = todaySchedule.filter(c => c.subject && c.subject.trim() !== '').map(c => c.subject.trim().toLowerCase());

          if (todaySubjects.length > 0) {
            const attendanceList = user.attendance || [];
            const alerts = [];

            todaySubjects.forEach(subName => {
              const record = attendanceList.find(a => a.name.trim().toLowerCase() === subName);
              if (record) {
                const percent = record.total > 0 ? Number(((record.present / record.total) * 100).toFixed(1)) : 0;
                const getMarks = (p) => {
                  if (p < 75) return 0;
                  if (p <= 80) return 1;
                  if (p <= 85) return 2;
                  if (p <= 90) return 3;
                  if (p <= 95) return 4;
                  return 5;
                };

                if (percent < 75) {
                  alerts.push({
                    type: 'danger',
                    text: `🚨 Critical: ${record.name} me attendance sirf ${percent}% hai (75% se niche)! College me back lag jayega, class lagao bidu! 😤🔥`
                  });
                } else {
                  alerts.push({
                    type: 'success',
                    text: `🔥 Shabash Biru! ${record.name} me attendance ${percent}% hai. Sessional me +${getMarks(percent)} marks pakke hain tere! aise hi lagatar class karte raho! 💪✨`
                  });
                }
              }
            });

            alerts.forEach((alert, idx) => {
              setTimeout(() => {
                toast(alert.text, {
                  duration: 8000,
                  icon: alert.type === 'danger' ? '🚨' : '🔥',
                  style: { 
                    background: alert.type === 'danger' ? '#fecaca' : '#d1fae5', 
                    color: alert.type === 'danger' ? '#991b1b' : '#065f46', 
                    fontWeight: '800', 
                    fontSize: '11px',
                    border: `1px solid ${alert.type === 'danger' ? '#fca5a5' : '#6ee7b7'}`
                  }
                });
                if ('Notification' in window && Notification.permission === 'granted') {
                  new Notification('Attendance Alert', { body: alert.text, icon: '/logo-acb.png' });
                }
              }, idx * 1000);
            });
          }
          localStorage.setItem(attKey, 'true');
        }
      }

      // class schedule alert (8:00 AM)
      if (curHour >= 8) {
        const ttKey = `timetable_alert_${todayStr}`;
        if (!localStorage.getItem(ttKey)) {
          const FULL_DAYS = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
          const todayDay = FULL_DAYS[new Date().getDay()];
          const todaySchedule = user.timetableV3?.[todayDay] || [];
          const classes = todaySchedule.filter(c => c.subject && c.subject.trim() !== '');

          if (classes.length > 0) {
            const classListText = classes.map(c => `• ${c.startTime || ''}: ${c.subject}`).join('\n');
            const text = `🗓️ Aaj ki Classes:\n${classListText}\nTime par pahunch jana, padhai shuru karo! 😉`;
            
            toast(text, {
              duration: 8000,
              icon: '🗓️',
              style: { background: '#f8fafc', color: '#0f172a', fontWeight: '800', fontSize: '11px', border: '1px solid #e2e8f0' }
            });
            if ('Notification' in window && Notification.permission === 'granted') {
              new Notification('Timetable Classes Alert', { body: text, icon: '/logo-acb.png' });
            }
          }
          localStorage.setItem(ttKey, 'true');
        }
      }

      // target setup alert (throttled once per day)
      const targetKey = `target_check_${todayStr}`;
      if (!localStorage.getItem(targetKey)) {
        const tasksQuery = query(
          collection(db, 'Tasks'),
          where('userId', '==', user.uid),
          where('date', '==', todayStr)
        );
        const snap = await getDocs(tasksQuery);
        if (snap.empty) {
          toast("🎯 Target Alert: Bhai, aaj ka study target set nahi kiya tune! Plan tab me ja aur subject targets set kar jaldi! 😤🔥", {
            duration: 8000,
            icon: '🎯',
            style: { background: '#fffbeb', color: '#b45309', fontWeight: '800', fontSize: '11px', border: '1px solid #fde68a' }
          });
        } else {
          toast(`🎯 Targets: Aaj ke ${snap.docs.length} targets scheduled hain tere! Chal birus, unhe complete karke phod de! 💪🔥`, {
            duration: 8000,
            icon: '✅',
            style: { background: '#f0fdf4', color: '#166534', fontWeight: '800', fontSize: '11px', border: '1px solid #bbf7d0' }
          });
        }
        localStorage.setItem(targetKey, 'true');
      }
    };

    // Run scheduled checks on mount
    runScheduledChecks();

    // 3. Periodic "Bhai Padh Le" Inactivity Check (every 15 minutes)
    const runInactivityCheck = async () => {
      if (timerActive) return; // Currently studying, do not disturb
      const todayStr = new Date().toLocaleDateString('en-CA');
      const tasksQuery = query(
        collection(db, 'Tasks'),
        where('userId', '==', user.uid),
        where('date', '==', todayStr),
        where('done', '==', false)
      );
      const snap = await getDocs(tasksQuery);
      if (!snap.empty) {
        const text = "📚 Bhai padh le, target complete karna hai, time waste mat kar! Padhoge likhoge banoge nawab, scroll karoge to banoge kharab! 😉🔥";
        toast(text, {
          duration: 9000,
          icon: '✍️',
          style: { background: '#fff1f2', color: '#be123c', fontWeight: '900', fontSize: '11px', border: '1px solid #fecdd3' }
        });
        if ('Notification' in window && Notification.permission === 'granted') {
          new Notification('Padhai Remainder! 📚', { body: text, icon: '/logo-acb.png' });
        }
      }
    };

    // Run first check after 2 minutes to not annoy on initial log, then every 15 minutes
    const initialReminderTimer = setTimeout(runInactivityCheck, 120000);
    const intervalId = setInterval(runInactivityCheck, 900000);

    return () => {
      unsubNudge();
      clearTimeout(initialReminderTimer);
      clearInterval(intervalId);
    };
  }, [user, timerActive, isOnline]);

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
    if (!timerActive || location.pathname === '/study') return null;
    const m = Math.floor((timerTime % 3600) / 60);
    const sec = timerTime % 60;
    return (
      <div className={`fixed bottom-24 right-6 md:bottom-10 md:right-10 z-[100] transition-all duration-500 transform ${isMinimized ? 'translate-x-[70%]' : ''}`}>
        <div className="bg-slate-900 border border-slate-700 p-1.5 rounded-[2rem] shadow-2xl flex items-center gap-4 group">
          <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center animate-pulse"><Timer size={20} className="text-white" /></div>
          <div className={`flex items-center gap-4 pr-6 ${isMinimized ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100'}`}>
            <div><p className="text-[8px] font-black text-blue-400 uppercase tracking-widest leading-none mb-1">Live Focus</p><p className="text-xl font-black text-white tabular-nums tracking-tighter">{m.toString().padStart(2, '0')}:{sec.toString().padStart(2, '0')}</p></div>
            <button onClick={() => navigate('/study')} className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl text-white text-[9px] font-black uppercase tracking-widest">Resume</button>
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
                navigate('/study?standalone=true', { state: { tab: 'network' } });
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
