import React, { useState, useEffect } from 'react';
import { Outlet, useLocation, useNavigate, Link } from 'react-router-dom';
import { ChevronLeft, Shield, Timer, X, LayoutDashboard, Library, BookOpen, Calendar, Clock, FileText, GraduationCap, Calculator, User, LogOut, Menu, UserCheck, Flame, Send, ChevronDown, Globe, Award, Link2, ArrowRight, UserX } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useStudy } from '../context/StudyContext';
import { Capacitor, registerPlugin } from '@capacitor/core';
import { App } from '@capacitor/app';
import { LocalNotifications } from '@capacitor/local-notifications';
import { AdMob, BannerAdSize, BannerAdPosition } from '@capacitor-community/admob';
import { getToken } from 'firebase/messaging';

const AppBlocker = registerPlugin('AppBlocker');
import { doc, updateDoc, collection, query, where, onSnapshot, getDocs } from 'firebase/firestore';
import { messaging, VAPID_KEY, db } from '../firebase';
import SEO from '../components/SEO';
import Footer from '../components/Footer';
import { toast } from 'react-hot-toast';

export default function DashboardLayout() {
  const isNative = Capacitor.isNativePlatform();
  const location = useLocation();
  const navigate = useNavigate();
  const { user, updateProfileData, logout, loading } = useAuth();
  const [phone, setPhone] = useState('');
  const [isPhoneModalOpen, setPhoneModalOpen] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const { timerActive, lockMode } = useStudy();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(null);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showSupportModal, setShowSupportModal] = useState(false);

  useEffect(() => {
    if (isNative) {
      const showBanner = async () => {
        try {
          // Ensure AdMob is initialized first
          await AdMob.initialize();
          
          await AdMob.showBanner({
            adId: 'ca-app-pub-3940256099942544/6300978111', // Test Banner ID
            adSize: BannerAdSize.BANNER,
            position: BannerAdPosition.BOTTOM_CENTER,
            margin: 0,
            isTesting: true,
          });
        } catch (e) {
          console.error('AdMob Banner error', e);
          import('@capacitor/toast').then(({ Toast }) => {
            Toast.show({ text: `Ad Error: ${e.message || 'Unknown'}` });
          });
        }
      };
      showBanner();

      return () => {
        AdMob.hideBanner().catch(console.error);
      };
    }
  }, [isNative]);

  const featureCategories = [
    {
      title: 'BEU Tools',
      items: [
        { name: 'BEU Result', path: '/beu-result', icon: <Globe size={16} /> },
        { name: 'Attendance', path: '/attendance', icon: <UserCheck size={16} /> },
        { name: 'Timetable', path: '/timetable', icon: <Calendar size={16} /> },
        { name: 'Notes', path: '/notes', icon: <BookOpen size={16} /> },
        { name: 'PYQ Papers', path: '/pyq', icon: <FileText size={16} /> },
        { name: 'SGPA / CGPA', path: '/cgpa', icon: <GraduationCap size={16} /> },
        { name: 'Syllabus', path: '/syllabus', icon: <Library size={16} /> },
      ],
    },
    {
      title: 'Study Tools',
      items: [
        { name: 'Blog & Articles', path: '/blog', icon: <FileText size={16} /> },
        { name: 'Study Timer', path: '/study', icon: <Timer size={16} /> },
        { name: 'Scientific Calc', path: '/calculator', icon: <Calculator size={16} /> },
        { name: 'Study Resources', path: '/study-resources', icon: <Link2 size={16} /> },
        { name: 'Personal Manager', path: '/extras', icon: <User size={16} /> },
        { name: 'Achievements', path: '/achievements', icon: <Award size={16} /> },
      ],
    },
    {
      title: 'Counselling',
      items: [
        { name: 'College Predictor', path: '/ugeac-predictor?tab=finder', icon: <Send size={16} /> },
        { name: 'Rank Predictor', path: '/ugeac-predictor?tab=predictor', icon: <Calculator size={16} /> },
        { name: 'Counselling Guide', path: '/ugeac-predictor?tab=guide', icon: <BookOpen size={16} /> },
      ],
    }
  ];

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

    // Setup push notifications:
    // - On NATIVE app (Android): skip web push — native app uses DailyNotificationPlugin
    //   which sends notifications directly to the phone tray via Android AlarmManager.
    // - On WEB (browser): use Firebase Web Push (Chrome notifications).
    const setupNotifications = async () => {
      if (!user || !isOnline) return;
      if (isNative) {
        // Native Android: notifications handled by DailyNotificationPlugin.java
        // No web push needed — notifications go to phone tray automatically.
        return;
      }
      // Web only: Firebase web push
      if (!messaging) return;
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
  }, [user, isOnline, isNative]);

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

    // 2. Scheduled Checkers — ONLY on native app, skip on website
    if (!isNative) return () => unsubNudge(); // Web: keep nudges only, skip all scheduled toasts
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
          // If they have studied today, OR timer is active, OR it's 8 AM or later, they are awake!
          const isAwake = !snap.empty || timerActive || curHour >= 8;
          const userName = user.name || 'Bihari Babu';
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
            <div className={`${t.visible ? 'animate-enter' : 'animate-leave'} max-w-md w-full bg-slate-900 text-white shadow-2xl rounded-[2rem] border border-slate-700/60 p-6 pointer-events-auto flex flex-col gap-3 font-['Inter'] z-[9999]`}>
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

      // class schedule alert (8:00 AM) - Always run before attendance warning
      let timetableShown = false;
      if (curHour >= 8) {
        const ttKey = `timetable_alert_${todayStr}`;
        if (!localStorage.getItem(ttKey)) {
          const FULL_DAYS = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
          const todayDay = FULL_DAYS[new Date().getDay()];
          const todaySchedule = user.timetableV3?.[todayDay] || [];
          const classes = todaySchedule.filter(c => c.subject && c.subject.trim() !== '');

          if (classes.length > 0) {
            const classListText = classes.map(c => `• ${c.startTime || ''}: ${c.subject}`).join('\n');
            const text = `🗓️ Aaj ki Classes:\n${classListText}\nTime par pahunch jana biru, padhai shuru karo! 😉`;
            
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
          timetableShown = true;
        }
      }

      // attendance alert check (6:00 AM) - Shown after timetable check
      const triggerAttendance = () => {
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
                      text: `🚨 Critical Attendance Alert: ${record.name} me attendance sirf ${percent}% hai (75% se niche)! College me back lag jayega biru, fatfat class lagao! 😤🔥`
                    });
                  } else {
                    alerts.push({
                      type: 'success',
                      text: `🔥 Gazab Bhai! ${record.name} me attendance ${percent}% hai. Sessional me +${getMarks(percent)} number pakke hain tere! aise hi lagatar class karte raho! 💪✨`
                    });
                  }
                }
              });

              alerts.forEach((alert, idx) => {
                setTimeout(() => {
                  if (isNative) {
                    LocalNotifications.schedule({
                      notifications: [{
                        title: "Attendance Alert",
                        body: alert.text,
                        id: new Date().getTime() % 100000 + idx
                      }]
                    });
                  } else {
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
                  }
                }, idx * 1000);
              });
            }
            localStorage.setItem(attKey, 'true');
          }
        }
      };

      if (timetableShown) {
        setTimeout(triggerAttendance, 2000); // Wait 2s if timetable was just shown
      } else {
        triggerAttendance();
      }

      // target setup alert (throttled once per day)
      const triggerTargetAlert = async () => {
        const targetKey = `target_check_${todayStr}`;
        if (!localStorage.getItem(targetKey)) {
          const tasksQuery = query(
            collection(db, 'Tasks'),
            where('userId', '==', user.uid),
            where('date', '==', todayStr)
          );
          const snap = await getDocs(tasksQuery);
          if (snap.empty) {
            const text = "🎯 Target Alert: Bhai, aaj ka study target set nahi kiya tune! Plan tab me ja aur subject targets set kar jaldi! 😤🔥";
            if (isNative) {
              LocalNotifications.schedule({
                notifications: [{ title: "Target Alert", body: text, id: new Date().getTime() % 100000 }]
              });
            } else {
              toast(text, {
                duration: 8000,
                icon: '🎯',
                style: { background: '#fffbeb', color: '#b45309', fontWeight: '800', fontSize: '11px', border: '1px solid #fde68a' }
              });
            }
          } else {
            const text = `🎯 Targets Setup: Aaj ke ${snap.docs.length} targets scheduled hain tere! Chal birus, unhe complete karke dikha de aaj! 💪🔥`;
            if (isNative) {
              LocalNotifications.schedule({
                notifications: [{ title: "Targets Setup", body: text, id: new Date().getTime() % 100000 }]
              });
            } else {
              toast(text, {
                duration: 8000,
                icon: '✅',
                style: { background: '#f0fdf4', color: '#166534', fontWeight: '800', fontSize: '11px', border: '1px solid #bbf7d0' }
              });
            }
          }
          localStorage.setItem(targetKey, 'true');
        }
      };
      
      if (timetableShown) {
        setTimeout(triggerTargetAlert, 4000);
      } else {
        setTimeout(triggerTargetAlert, 1500);
      }
    };

    // Run scheduled checks on mount
    runScheduledChecks();

    // 3. Periodic "Bhai Padh Le" Inactivity Check (every 15 minutes)
    const runInactivityCheck = async () => {
      if (timerActive) return; // Currently studying, do not disturb
      const todayStr = new Date().toLocaleDateString('en-CA');
      
      // Minimum 3 Hours Check: If user already studied 3 hours today, do not nag them!
      // 3 hours = 3 * 3600 = 10800 seconds
      const sessionsQuery = query(
        collection(db, 'StudySessions'),
        where('userId', '==', user.uid),
        where('date', '==', todayStr)
      );
      const sessionsSnap = await getDocs(sessionsQuery);
      const totalSecsToday = sessionsSnap.docs.reduce((a, s) => a + (Number(s.data().duration) || 0), 0);
      if (totalSecsToday >= 10800) {
        return; // Target met, no notification needed
      }

      const tasksQuery = query(
        collection(db, 'Tasks'),
        where('userId', '==', user.uid),
        where('date', '==', todayStr),
        where('done', '==', false)
      );
      const snap = await getDocs(tasksQuery);
      if (!snap.empty) {
        const text = "📚 Bhai padh le, target complete karna hai, time waste mat kar! Sapne free hain biru, par unki EMI roz ki mehnat se bharni padti hai! 😉🔥";
        if (isNative) {
          LocalNotifications.schedule({
            notifications: [{ title: "Padhai Remainder! 📚", body: text, id: new Date().getTime() % 100000 }]
          });
        } else {
          toast(text, {
            duration: 9000,
            icon: '✍️',
            style: { background: '#fff1f2', color: '#be123c', fontWeight: '900', fontSize: '11px', border: '1px solid #fecdd3' }
          });
          if ('Notification' in window && Notification.permission === 'granted') {
            new Notification('Padhai Remainder! 📚', { body: text, icon: '/logo-acb.png' });
          }
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
  }, [user, timerActive, isOnline, lockMode]);


  const handlePhoneSubmit = async (e) => {
    e.preventDefault();
    if (phone.length < 10) return;
    setIsUpdating(true);
    try { await updateProfileData({ phone }); setPhoneModalOpen(false); }
    catch (err) { console.error(err); } finally { setIsUpdating(false); }
  };

  useEffect(() => {
    if (isNative) {
      if (timerActive) {
        AppBlocker.lockApp().catch(console.error);
      } else {
        AppBlocker.unlockApp().catch(console.error);
      }

      // Re-lock the app when returning from a whitelisted app
      const appStateListener = App.addListener('appStateChange', ({ isActive }) => {
        if (isActive && timerActive) {
          AppBlocker.lockApp().catch(console.error);
        }
      });

      return () => {
        appStateListener.then(listener => listener.remove());
      };
    }
  }, [timerActive, lockMode, isNative]);

  useEffect(() => {
    if (isNative) {
      LocalNotifications.requestPermissions().catch(console.error);
    }
  }, [isNative]);

  const joinDate = user?.metadata?.creationTime 
    ? new Date(user.metadata.creationTime).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
    : 'Recently';

  const HeaderTimer = () => {
    const { timerActive, timerTime } = useStudy();
    if (!timerActive || location.pathname === '/study') return null;
    const m = Math.floor((timerTime % 3600) / 60);
    const sec = timerTime % 60;
    return (
      <div 
        onClick={() => navigate('/study')}
        className="flex items-center gap-2 px-3 md:px-4 py-2 md:py-2.5 bg-slate-900 border border-slate-700 hover:border-blue-500/50 rounded-xl md:rounded-2xl cursor-pointer hover:bg-slate-800 transition-all shadow-lg active:scale-95 group animate-pulse"
      >
        <Timer size={14} className="text-blue-500 group-hover:text-white transition-colors" />
        <span className="text-[10px] md:text-xs font-black text-white tabular-nums tracking-tighter">
          {m.toString().padStart(2, '0')}:{sec.toString().padStart(2, '0')}
        </span>
      </div>
    );
  };

  const getPageTitle = (pathname) => {
    if (pathname === '/') return 'Home';
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

  const BottomNavItem = ({ to, icon: Icon, label }) => {
    const isActive = location.pathname === to || (to !== '/' && location.pathname.startsWith(to));
    return (
      <Link 
        to={to} 
        className="flex flex-col items-center justify-center gap-1 flex-1 py-2"
      >
        <div className={`p-1.5 rounded-xl transition-all ${isActive ? 'bg-blue-100 text-blue-600' : 'text-slate-400'}`}>
          <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
        </div>
        <span className={`text-[8px] font-black uppercase tracking-widest ${isActive ? 'text-blue-600' : 'text-slate-400'}`}>{label}</span>
      </Link>
    );
  };

  const MobileMenuLink = ({ to, icon: Icon, label }) => {
    const isActive = location.pathname === to || (to !== '/' && location.pathname.startsWith(to));
    return (
      <Link 
        to={to} 
        onClick={() => setMobileMenuOpen(false)}
        className={`flex items-center gap-3 px-4 py-3 rounded-2xl transition-all font-bold ${isActive ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'}`}
      >
        <div className={`${isActive ? 'text-white' : 'text-slate-400'}`}>
          {typeof Icon === 'function' ? <Icon size={18} /> : Icon}
        </div>
        <span className="text-[12px] uppercase tracking-wider font-black">{label}</span>
      </Link>
    );
  };

  return (
    <div className="flex flex-col h-screen bg-[#f8fafc] overflow-hidden text-slate-900 font-['Inter'] selection:bg-blue-500/30 relative">
      <SEO 
        title={pageTitle} 
        url={window.location.href} 
      />

      {/* Global Native Header (for App only) */}
      {isNative && (
        <header className="bg-white border-b border-slate-200 shadow-sm z-[200] shrink-0 sticky top-0 px-4 py-3 flex items-center justify-between">
          <button onClick={() => navigate(-1)} className="p-2.5 rounded-xl bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors active:scale-95 flex items-center justify-center">
            <ChevronLeft size={20} strokeWidth={3} />
          </button>
          <div className="flex items-center justify-center">
            <span className="text-[12px] font-black tracking-widest uppercase text-slate-900 truncate px-2">{pageTitle}</span>
          </div>
          <div className="flex items-center gap-2">
            <HeaderTimer />
          </div>
        </header>
      )}

      {/* Top Header Navigation (Desktop) & Top Bar (Mobile) */}
      {!isNative && (
        <header className="bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-sm z-[200] shrink-0 sticky top-0">
          <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-3 md:py-4 flex items-center justify-between">
            
            {/* Logo & Brand */}
          <div className="flex items-center gap-2 md:gap-3 group cursor-pointer" onClick={() => navigate('/')}>
            <img src="/logo-acb.png?v=99" alt="Logo" className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl object-cover shadow-sm group-hover:scale-105 transition-transform" />
            <div className="block min-w-0">
              <span className="text-[11px] sm:text-sm md:text-xl font-[1000] tracking-tighter uppercase text-slate-900 block leading-none truncate">Apna College Bihar</span>
              <span className="text-[6px] md:text-[7px] text-blue-500 font-bold uppercase tracking-[0.3em] md:tracking-[0.5em] mt-0.5 md:mt-1 block">Official App</span>
            </div>
          </div>

          {/* Desktop Navigation Links (Dropdowns) */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link to="/" className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors">Home</Link>
            
            {featureCategories.map((category, idx) => (
              <div key={category.title} className="relative">
                <button
                  onClick={() => setActiveFeatureIndex(activeFeatureIndex === idx ? null : idx)}
                  className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors"
                >
                  {category.title}
                  <ChevronDown size={12} className={`transition-transform duration-200 ${activeFeatureIndex === idx ? 'rotate-180' : ''}`} />
                </button>

                {activeFeatureIndex === idx && (
                  <>
                    <div className="fixed inset-0 z-[1900]" onClick={() => setActiveFeatureIndex(null)} />
                    <div className="absolute left-1/2 -translate-x-1/2 mt-3 w-56 bg-white/95 backdrop-blur-xl border border-slate-200 rounded-2xl shadow-2xl p-2 z-[2000] animate-in fade-in duration-150 origin-top">
                      {category.items.map((it) => (
                        <Link
                          key={it.name}
                          to={it.path}
                          className="flex items-center gap-3 w-full p-3 hover:bg-blue-50 text-slate-700 hover:text-blue-600 rounded-xl transition-all font-bold"
                          onClick={() => setActiveFeatureIndex(null)}
                        >
                          <span className="w-4 h-4 text-slate-500">{it.icon}</span>
                          <span className="text-[11px] font-black uppercase tracking-widest">{it.name}</span>
                        </Link>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))}
          </nav>

          {/* User Profile & Actions */}
          <div className="flex items-center gap-3">
             {loading ? (
               <div className="w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
             ) : user ? (
               <div className="flex items-center gap-2 md:gap-4">
                 <HeaderTimer />
                 
                 <div className={`relative ${isNative ? 'hidden' : 'hidden lg:block'}`}>
                   <a 
                     href="https://apnacollegebihar.online/ApnaCollegeBihar_v20.apk"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="flex items-center gap-2 px-3 md:px-5 py-2 md:py-2.5 bg-blue-600/10 hover:bg-blue-600 text-blue-600 hover:text-white border border-blue-500/20 rounded-xl text-[8px] md:text-[9px] font-black uppercase tracking-widest transition-all shadow-sm active:scale-95"
                   >
                     <span className="hidden md:inline">Download</span> APK
                   </a>
                   <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[6px] md:text-[7px] font-black uppercase px-1.5 py-0.5 rounded-full shadow-md animate-pulse">
                     New
                   </span>
                 </div>
                 <div className="relative">
                   <button 
                     onClick={() => setShowProfileMenu(!showProfileMenu)}
                     className="flex items-center gap-2 px-4 py-2.5 md:px-6 md:py-3 bg-slate-50 border border-slate-200 hover:border-blue-500/50 text-slate-900 rounded-xl md:rounded-2xl font-black text-[9px] md:text-[10px] uppercase tracking-widest transition-all shadow-sm active:scale-95 group"
                   >
                     <div className="w-5 h-5 rounded-lg overflow-hidden bg-slate-100">
                       <img src="/logo-acb.png?v=99" alt="Profile" className="w-full h-full object-cover" />
                     </div>
                     <span className="hidden md:inline">My Profile</span>
                     <ChevronDown size={12} className={`transition-transform duration-300 ${showProfileMenu ? 'rotate-180' : ''}`} />
                   </button>

                   {showProfileMenu && (
                     <>
                      <div className="fixed inset-0 z-[1900]" onClick={() => setShowProfileMenu(false)}></div>
                      <div className="absolute right-0 mt-3 w-64 bg-white/95 backdrop-blur-xl border border-slate-200 rounded-[2rem] shadow-2xl p-2 z-[2000] animate-in fade-in zoom-in-95 duration-200 origin-top-right">
                         <div className="px-5 py-5 border-b border-slate-100 mb-2 text-center">
                            <div className="w-16 h-16 rounded-2xl overflow-hidden mb-3 mx-auto border border-slate-100 shadow-lg">
                               <img src="/logo-acb.png?v=99" alt="ACB" className="w-full h-full object-cover" />
                            </div>
                            <p className="text-[8px] font-black text-blue-600 uppercase tracking-widest leading-none mb-1">ACB Official Account</p>
                            <p className="text-[10px] font-bold text-slate-900 truncate">{user.email}</p>
                            <div className="flex items-center justify-center gap-1 text-[8px] text-slate-500 mt-1.5 font-bold">
                              <Calendar size={10} className="text-blue-500" />
                              <span>Joined: <strong className="text-slate-900">{joinDate}</strong></span>
                            </div>
                         </div>
                         
                         <div className="p-2 space-y-1">
                            {(user?.email === 'prince8694@gmail.com' || user?.email === 'prince86944@gmail.com' || user?.role === 'SUPER_ADMIN') && (
                              <Link 
                                to="/dashboard/admin"
                                className="flex items-center gap-3 w-full p-3 hover:bg-blue-50 text-blue-600 rounded-2xl transition-all group"
                              >
                                 <div className="p-2 bg-blue-50 group-hover:bg-blue-100 rounded-xl transition-colors">
                                   <Shield size={14} />
                                 </div>
                                 <span className="text-[10px] font-black uppercase tracking-widest">Admin Panel</span>
                              </Link>
                            )}
                            
                            {!isNative && (
                              <button 
                                onClick={() => {
                                  setShowProfileMenu(false);
                                  setShowSupportModal(true);
                                }}
                                className="flex items-center gap-3 w-full p-3 hover:bg-indigo-50 text-indigo-600 rounded-2xl transition-all group"
                              >
                                 <div className="p-2 bg-indigo-50 group-hover:bg-indigo-100 rounded-xl transition-colors">
                                   <Award size={14} />
                                 </div>
                                 <span className="text-[10px] font-black uppercase tracking-widest">Support Us / Donate</span>
                              </button>
                            )}

                            <button 
                              onClick={async () => {
                                setShowProfileMenu(false);
                                const shareData = {
                                  title: 'Apna College Bihar App - No More Distractions!',
                                  text: '📱 Padhai ke waqt Instagram/Reels se distract hote ho? Apna College Bihar App try karo! Isme "Strict Study Blocker" hai!\n\nSteps:\n1. App Download karke Dashboard me jao.\n2. Niche "Focus Mode" on karo.\n3. Timer set karo aur padhai shuru! (Baki saare apps block ho jayenge)\n\nSaare Notes aur PYQs bhi yahi milenge!\nDownload now: ',
                                  url: 'https://apnacollegebihar.online/apna-college-bihar-v24.apk'
                                };
                                try {
                                  if (navigator.share) {
                                    await navigator.share(shareData);
                                  } else {
                                    await navigator.clipboard.writeText(shareData.text + " " + shareData.url);
                                    import('react-hot-toast').then(m => m.toast.success("App link copied to clipboard!"));
                                  }
                                } catch (err) {
                                  // console.log removed
                                }
                              }}
                              className="flex items-center gap-3 w-full p-3 hover:bg-emerald-50 text-slate-500 hover:text-emerald-600 rounded-2xl transition-all group"
                            >
                               <div className="p-2 bg-slate-100 group-hover:bg-emerald-600/10 rounded-xl transition-colors">
                                 <Send size={14} />
                               </div>
                               <span className="text-[10px] font-black uppercase tracking-widest">Share App Link</span>
                            </button>

                            <button 
                              onClick={() => logout()}
                              className="flex items-center gap-3 w-full p-3 hover:bg-red-50 text-slate-500 hover:text-red-600 rounded-2xl transition-all group"
                            >
                               <div className="p-2 bg-slate-100 group-hover:bg-red-600/10 rounded-xl transition-colors">
                                 <LogOut size={14} />
                               </div>
                               <span className="text-[10px] font-black uppercase tracking-widest">Logout Session</span>
                            </button>
                         </div>
                      </div>
                     </>
                   )}
                 </div>
               </div>
             ) : (
               <div className="flex items-center gap-2 md:gap-4">
                 <HeaderTimer />

                 <div className={`relative ${isNative ? 'hidden' : 'hidden lg:block'}`}>
                   <a 
                     href="https://apnacollegebihar.online/ApnaCollegeBihar_v20.apk"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="flex items-center gap-2 px-3 md:px-5 py-2 md:py-2.5 bg-blue-600/10 hover:bg-blue-600 text-blue-600 hover:text-white border border-blue-500/20 rounded-xl text-[8px] md:text-[9px] font-black uppercase tracking-widest transition-all shadow-sm active:scale-95"
                   >
                     <span className="hidden md:inline">Download</span> APK
                   </a>
                   <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[6px] md:text-[7px] font-black uppercase px-1.5 py-0.5 rounded-full shadow-md animate-pulse">
                     New
                   </span>
                 </div>
                 <Link to="/login" className="hidden md:block px-4 py-2.5 md:px-5 md:py-3 text-slate-600 hover:text-slate-900 font-black text-[9px] md:text-[10px] uppercase tracking-widest transition-colors">
                   Login
                 </Link>
                 <Link to="/signup" className="px-3 py-2 md:px-6 md:py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl md:rounded-2xl font-black text-[8px] md:text-[10px] uppercase tracking-widest transition-all shadow-lg shadow-blue-500/30 active:scale-95 shrink-0">
                   Sign Up
                 </Link>
               </div>
             )}
                <button 
                  onClick={() => setMobileMenuOpen(true)} 
                  className="flex lg:hidden items-center justify-center p-2.5 text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors ml-1 shrink-0"
                >
                  <Menu size={24} />
                </button>
          </div>
        </div>
      </header>
      )}

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto custom-scrollbar relative z-10 bg-[#f8fafc] flex flex-col">
        <div className={`w-full grow shrink-0 pb-24 lg:pb-8 min-h-[80vh] ${location.pathname === '/' ? '' : 'p-4 md:p-6 lg:p-8 max-w-7xl mx-auto'}`}>
          <Outlet />
        </div>

        {/* Global Footer */}
        <Footer />
      </main>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-[250] lg:hidden" onClick={() => setMobileMenuOpen(false)} />
      )}

      {/* Mobile Sidebar/Drawer (Slide from right) */}
      <aside className={`fixed inset-y-0 right-0 w-72 bg-white border-l border-slate-200 shadow-2xl z-[300] transform transition-transform duration-300 ease-in-out flex flex-col lg:hidden ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100 bg-slate-50">
          <span className="text-[10px] font-black tracking-widest uppercase text-slate-400 block leading-none">Navigation Menu</span>
          <button onClick={() => setMobileMenuOpen(false)} className="text-slate-400 hover:text-slate-900 bg-white p-2 rounded-xl shadow-sm border border-slate-200">
            <X size={16} strokeWidth={3} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-4 px-3 space-y-6 custom-scrollbar">
          {featureCategories.map((cat) => (
             <div key={cat.title}>
               <p className="px-4 text-[9px] font-black text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                 <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> {cat.title}
               </p>
               <div className="space-y-1">
                 {cat.items.map(it => (
                    <MobileMenuLink key={it.name} to={it.path} icon={() => it.icon} label={it.name} />
                 ))}
               </div>
             </div>
          ))}

          {!isNative && (
            <div className="px-3 pt-4 border-t border-slate-100">
               <button 
                 onClick={() => {
                   setMobileMenuOpen(false);
                   setShowSupportModal(true);
                 }}
                 className="flex items-center gap-3 w-full p-3 hover:bg-indigo-50 text-indigo-600 rounded-2xl transition-all group border border-indigo-100 bg-indigo-50/50"
               >
                  <div className="p-2 bg-white rounded-xl shadow-sm">
                    <Award size={16} className="text-indigo-600" />
                  </div>
                  <div className="text-left">
                    <span className="text-[11px] font-black uppercase tracking-widest block text-indigo-700">Support Us</span>
                    <span className="text-[8px] font-bold text-indigo-500 uppercase tracking-wider">Help maintain server cost</span>
                  </div>
               </button>
            </div>
          )}
        </div>

        <div className="p-4 border-t border-slate-100 bg-slate-50">
          <button onClick={() => logout()} className="w-full flex items-center justify-center gap-2 px-4 py-4 bg-white hover:bg-red-50 text-slate-600 hover:text-red-600 rounded-2xl transition-all font-black uppercase text-[10px] tracking-widest shadow-sm border border-slate-200">
            <LogOut size={16} strokeWidth={2.5} /> Logout Session
          </button>
        </div>
      </aside>
      
      {/* Verification Modal */}
      {isPhoneModalOpen && isOnline && <div className="fixed inset-0 z-[400] flex items-center justify-center p-6 bg-slate-50/80 backdrop-blur-xl"><div className="w-full max-w-md bg-white border border-slate-200 rounded-[3rem] p-10 text-center space-y-8 shadow-2xl relative overflow-hidden"><div className="inline-flex p-5 bg-blue-600/20 text-blue-500 rounded-3xl"><Shield size={32} /></div><h2 className="text-2xl font-[1000] text-slate-900 uppercase tracking-tighter">Security Update</h2><p className="text-slate-500 text-sm">Please link your active mobile number to secure your college portal access.</p><form onSubmit={handlePhoneSubmit} className="space-y-6"><div className="flex gap-2"><div className="bg-slate-100 px-4 py-4 rounded-2xl text-xs font-black">+91</div><input type="tel" maxLength={10} value={phone} onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))} placeholder="10-DIGIT MOBILE NO." className="flex-1 bg-slate-100 rounded-2xl p-4 text-sm font-black outline-none" /></div><button type="submit" className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-widest transition-all">Save & Continue</button></form></div></div>}

      {/* Support / Payment Scanner Modal (Frontend Only) */}
      {showSupportModal && !isNative && (
        <div className="fixed inset-0 z-[5000] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="w-full max-w-sm bg-white rounded-[2rem] shadow-2xl relative overflow-hidden flex flex-col animate-in zoom-in-95 duration-200">
            <div className="bg-gradient-to-r from-indigo-600 to-blue-600 p-6 text-center relative">
              <button 
                onClick={() => setShowSupportModal(false)}
                className="absolute top-4 right-4 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-xl transition-colors"
              >
                <X size={16} strokeWidth={3} />
              </button>
              <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-inner">
                <Award size={28} className="text-white" />
              </div>
              <h3 className="text-lg font-black text-white uppercase tracking-wider mb-1">Support Our Team</h3>
              <p className="text-indigo-100 text-[10px] font-bold uppercase tracking-widest">Help us pay server bills!</p>
            </div>
            
            <div className="p-6 flex flex-col items-center">
              <div className="text-xs text-slate-500 text-center font-medium mb-6 leading-relaxed space-y-2">
                <p>Apna College Bihar is a 100% free platform built by students, for students. We provide notes, PYQs, important questions, study materials, and exam resources to help thousands of students prepare better.</p>
                <p>Maintaining our servers, website, and developing new features requires continuous support. If our platform has helped you in any way, please consider making a small contribution.</p>
              </div>
              
              <div className="p-2 bg-slate-50 border-2 border-dashed border-indigo-200 rounded-3xl mb-4">
                {/* Fallback placeholder QR if image is missing. User can replace the image at /scanner-qr.jpg */}
                <div className="w-48 h-48 bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden relative group flex items-center justify-center flex-col gap-2">
                  <img 
                    src="/scanner-qr.jpg" 
                    alt="Payment QR Code" 
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                    className="w-full h-full object-contain p-2"
                  />
                  <div className="absolute inset-0 bg-slate-100 flex flex-col items-center justify-center hidden">
                    <span className="text-xs font-bold text-slate-400">QR Code Image</span>
                    <span className="text-[9px] text-slate-400 uppercase">(Place scanner-qr.jpg in public folder)</span>
                  </div>
                </div>
              </div>

              <div className="bg-indigo-50 px-4 py-3 rounded-2xl w-full flex items-center justify-between group cursor-copy" onClick={() => {
                navigator.clipboard.writeText("apnacollegebihar@slc");
                toast.success("UPI ID Copied!");
              }}>
                <div>
                  <p className="text-[9px] font-black uppercase text-indigo-500 mb-0.5">UPI ID (Tap to Copy)</p>
                  <p className="text-sm font-bold text-slate-900">apnacollegebihar@slc</p>
                </div>
                <div className="p-2 bg-indigo-100 text-indigo-600 rounded-xl group-hover:scale-110 transition-transform">
                  <Link2 size={16} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
