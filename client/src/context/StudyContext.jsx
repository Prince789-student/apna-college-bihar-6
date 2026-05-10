import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { db } from '../firebase';
import { doc, updateDoc, addDoc, collection, getDoc } from 'firebase/firestore';
import { useAuth } from './AuthContext';
import { Preferences } from '@capacitor/preferences';
import { Capacitor } from '@capacitor/core';

const StudyContext = createContext(null);

export function useStudy() {
  return useContext(StudyContext);
}

export function StudyProvider({ children }) {
  const { user } = useAuth();
  
  const getInitialState = (key, defaultVal) => {
    try {
      const saved = localStorage.getItem(key);
      return saved !== null ? JSON.parse(saved) : defaultVal;
    } catch { return defaultVal; }
  };

  const [timerActive, _setTimerActive] = useState(() => getInitialState('timerActive', false));
  const [timerTime, setTimerTime] = useState(1500);
  const [timerSubject, setTimerSubject] = useState('OTHERS');
  const [customMinutes, setCustomMinutes] = useState(25);
  const [customSeconds, setCustomSeconds] = useState(0);
  const [timerMode, setTimerMode] = useState('COUNTDOWN');
  const [focusBroken, _setFocusBroken] = useState(() => getInitialState('focusBroken', false));
  const [allowedPackages, _setAllowedPackages] = useState(() => getInitialState('allowedPackages', ''));
  const [installedApps, setInstalledApps] = useState([]);
  const timerRef = useRef(null);

  const fetchApps = async () => {
    if (!Capacitor.isNativePlatform()) return;
    try {
      const AppBlocker = Capacitor.Plugins.AppBlocker;
      if (AppBlocker) {
        const { apps } = await AppBlocker.getInstalledApps();
        setInstalledApps(apps.sort((a, b) => a.name.localeCompare(b.name)));
      }
    } catch (err) { console.error("Fetch Apps Error:", err); }
  };

  useEffect(() => {
    if (Capacitor.isNativePlatform()) {
      fetchApps();
    }
  }, []);

  const setAllowedPackages = (val) => {
    _setAllowedPackages(val);
    localStorage.setItem('allowedPackages', JSON.stringify(val));
    if (Capacitor.isNativePlatform()) {
      Preferences.set({ key: 'allowedPackages', value: val });
    }
  };

  const setTimerActive = (val) => {
    _setTimerActive(val);
    localStorage.setItem('timerActive', JSON.stringify(val));
    
    // Native Blocker Integration
    if (Capacitor.isNativePlatform()) {
      if (val) {
        Preferences.set({ key: 'isBlockerActive', value: 'true' });
        if (timerMode === 'COUNTDOWN') {
          const endTime = Date.now() + (timerTime * 1000);
          Preferences.set({ key: 'countdownEndTime', value: String(endTime) });
        } else {
          // In Stopwatch, we don't have a fixed end time, so we just set it very far in the future
          // or just rely on isBlockerActive: true
          Preferences.set({ key: 'countdownEndTime', value: '0' });
        }
      } else {
        Preferences.set({ key: 'isBlockerActive', value: 'false' });
        Preferences.set({ key: 'countdownEndTime', value: '0' });
      }
    }
  };

  const setFocusBroken = (val) => {
    _setFocusBroken(val);
    localStorage.setItem('focusBroken', JSON.stringify(val));
  };

  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === 'timerActive') _setTimerActive(JSON.parse(e.newValue));
      if (e.key === 'focusBroken') _setFocusBroken(JSON.parse(e.newValue));
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  // Reset timer logic: Supports custom minutes AND seconds
  useEffect(() => {
    if (!timerActive) {
      if (timerMode === 'COUNTDOWN') {
        setTimerTime(customMinutes * 60 + customSeconds);
      } else {
        setTimerTime(0);
      }
    }
  }, [timerMode, customMinutes, customSeconds, timerActive]);

  const saveGlobalSession = async (manualTime = null) => {
    if (!user) return;
    const timeToSave = manualTime || (timerMode === 'STOPWATCH' ? timerTime : (customMinutes * 60 + customSeconds - timerTime));
    if (timeToSave < 5) { setTimerActive(false); return; }

    try {
      const todayStr = new Date().toLocaleDateString('en-CA');
      await addDoc(collection(db, 'StudySessions'), {
        userId: user.uid,
        userName: user.name || 'Scholar',
        subject: timerSubject,
        duration: timeToSave,
        date: todayStr,
        createdAt: new Date().toISOString()
      });
      const userRef = doc(db, 'users', user.uid);
      const uSnap = await getDoc(userRef);
      if (uSnap.exists()) {
        const userData = uSnap.data();
        const isNewDay = userData.lastStudyDate !== todayStr;
        const newTodayTime = isNewDay ? timeToSave : (userData.todayStudyTime || 0) + timeToSave;
        
        const y = new Date(); y.setDate(y.getDate() - 1);
        const yStr = y.toLocaleDateString('en-CA');
        
        let streak = userData.streak || 0;
        let streakDate = userData.streakDate || '';
        
        if (streakDate !== todayStr && streakDate !== yStr) {
          streak = 0;
        }
        
        if (newTodayTime >= 7200 && streakDate !== todayStr) {
          if (streakDate === yStr) streak += 1;
          else streak = 1;
          streakDate = todayStr;
        }
        
        await updateDoc(userRef, { 
          totalStudyTime: (userData.totalStudyTime || 0) + timeToSave,
          todayStudyTime: newTodayTime,
          lastStudyDate: todayStr,
          streak,
          streakDate,
          isStudying: false 
        });
      }
      setTimerActive(false);
    } catch (e) { console.error("Global Save Error:", e); }
  };

  useEffect(() => {
    if (!user) return;
    updateDoc(doc(db, 'users', user.uid), { isStudying: timerActive }).catch(() => {});
  }, [timerActive, user]);

  useEffect(() => {
    const handleViolation = () => {
      if (timerActive) {
        // If it's a stopwatch, we can pause/stop it.
        // If it's a countdown, we DON'T stop it automatically because we want 
        // the native blocker to handle it and keep the user in the app.
        if (timerMode === 'STOPWATCH') {
          setTimerActive(false);
          setFocusBroken(true);
        }
      }
    };
    
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') handleViolation();
    };

    const handleBlur = () => {
      setTimeout(() => {
        if (!document.hasFocus() && timerActive) {
          handleViolation();
        }
      }, 100);
    };

    const handleBeforeUnload = (e) => {
      if (timerActive) {
        e.preventDefault();
        e.returnValue = '';
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('blur', handleBlur);
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('blur', handleBlur);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [timerActive, timerMode]);

  useEffect(() => {
    if (timerActive) {
      timerRef.current = setInterval(() => {
        setTimerTime(t => {
          if (timerMode === 'COUNTDOWN') {
            if (t <= 1) {
              clearInterval(timerRef.current);
              saveGlobalSession(customMinutes * 60 + customSeconds);
              return 0;
            }
            return t - 1;
          } else {
            return t + 1;
          }
        });
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [timerActive, timerMode, user, customMinutes, customSeconds]);

  const value = {
    timerActive,
    setTimerActive,
    timerTime,
    setTimerTime,
    timerSubject,
    setTimerSubject,
    customMinutes,
    setCustomMinutes,
    customSeconds,
    setCustomSeconds,
    timerMode,
    setTimerMode,
    saveGlobalSession,
    focusBroken,
    setFocusBroken,
    allowedPackages,
    setAllowedPackages,
    fetchApps,
    launchApp: async (pkg) => {
      if (!Capacitor.isNativePlatform()) return;
      try {
        await Capacitor.Plugins.AppBlocker.launchApp({ packageName: pkg });
      } catch (e) { console.error(e); }
    },
    openAccessibilitySettings: async () => {
      if (!Capacitor.isNativePlatform()) return;
      try {
        await Capacitor.Plugins.AppBlocker.openAccessibilitySettings();
      } catch (e) { console.error(e); }
    }
  };

  return (
    <StudyContext.Provider value={value}>
      {children}
    </StudyContext.Provider>
  );
}
