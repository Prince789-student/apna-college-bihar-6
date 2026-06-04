import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { db } from '../firebase';
import { doc, updateDoc, addDoc, collection, getDoc } from 'firebase/firestore';
import { useAuth } from './AuthContext';
import { Preferences } from '@capacitor/preferences';
import { Capacitor, registerPlugin } from '@capacitor/core';

const AppBlocker = registerPlugin('AppBlocker');

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

  const [timerActive, _setTimerActive] = useState(false);
  const [timerTime, setTimerTime] = useState(60);
  const [timerSubject, setTimerSubject] = useState('OTHERS');
  const [customMinutes, setCustomMinutes] = useState(1);
  const [customSeconds, setCustomSeconds] = useState(0);
  const [timerMode, setTimerMode] = useState('COUNTDOWN');
  const [focusBroken, _setFocusBroken] = useState(false);
  const [allowedPackages, _setAllowedPackages] = useState(() => getInitialState('allowedPackages', ''));
  const [installedApps, setInstalledApps] = useState([]);
  const [selectedTaskId, setSelectedTaskId] = useState('');
  const timerRef = useRef(null);

  const isNativeApp = () => Capacitor.isNativePlatform() || (typeof window !== 'undefined' && window.Capacitor && (window.Capacitor.isNativePlatform?.() || window.Capacitor.isPluginAvailable?.('AppBlocker'))) || Capacitor.isPluginAvailable?.('AppBlocker');

  const fetchApps = async () => {
    if (!isNativeApp()) return;
    try {
      if (AppBlocker && AppBlocker.getInstalledApps) {
        const { apps } = await AppBlocker.getInstalledApps();
        setInstalledApps(apps.sort((a, b) => a.name.localeCompare(b.name)));
      }
    } catch (err) { console.error("Fetch Apps Error:", err); }
  };

  useEffect(() => {
    const initBlocker = async () => {
      if (isNativeApp()) {
        await fetchApps();
        
        try {
          const getEnd = await Preferences.get({ key: 'countdownEndTime' });
          const endTime = Number(getEnd.value || 0);
          
          if (endTime > Date.now()) {
            // Restore active countdown state
            const remainingSecs = Math.ceil((endTime - Date.now()) / 1000);
            setTimerTime(remainingSecs);
            _setTimerActive(true);
            setTimerMode('COUNTDOWN');
            
            // Restore allowed packages
            const getPrefsAllowed = await Preferences.get({ key: 'allowedPackages' });
            if (getPrefsAllowed.value) {
              _setAllowedPackages(getPrefsAllowed.value);
            }
            
            console.log("Restored active focus session on initialization:", remainingSecs, "seconds remaining");
          } else {
            // Clean up expired focus session
            if (AppBlocker && AppBlocker.stopBlocker) await AppBlocker.stopBlocker();
            await Preferences.set({ key: 'isBlockerActive', value: 'false' });
            await Preferences.set({ key: 'countdownEndTime', value: '0' });
            localStorage.setItem('timerActive', 'false');
          }
        } catch (e) {
          console.error("Error restoring blocker state:", e);
        }
      } else {
        localStorage.setItem('timerActive', 'false');
      }
      localStorage.setItem('focusBroken', 'false');
    };
    
    initBlocker();
  }, []);

  const setAllowedPackages = (val) => {
    _setAllowedPackages(val);
    localStorage.setItem('allowedPackages', JSON.stringify(val));
    if (isNativeApp()) {
      Preferences.set({ key: 'allowedPackages', value: val });
      try {
        const pkgArray = (val || '').split(',').filter(Boolean);
        if (!pkgArray.includes('com.apnacollegebihar.online')) {
            pkgArray.push('com.apnacollegebihar.online');
        }
        if (AppBlocker && AppBlocker.setAllowedPackages) {
          AppBlocker.setAllowedPackages({ packages: pkgArray });
        }
      } catch (e) {}
    }
  };

  const setTimerActive = (val) => {
    _setTimerActive(val);
    localStorage.setItem('timerActive', JSON.stringify(val));
    
    if (isNativeApp()) {
      try {
        if (val) {
          if (AppBlocker && AppBlocker.setBlockerActive) {
            AppBlocker.setBlockerActive({ active: true });
          }
          
          if (timerMode === 'COUNTDOWN') {
            if (AppBlocker && AppBlocker.startCountdown) {
              AppBlocker.startCountdown({ 
                minutes: Math.ceil(timerTime / 60)
              });
            }
            
            const endTime = Date.now() + (timerTime * 1000);
            Preferences.set({ key: 'countdownEndTime', value: String(endTime) });
          }

          const pkgArray = (allowedPackages || '').split(',').filter(Boolean);
          if (!pkgArray.includes('com.apnacollegebihar.online')) {
            pkgArray.push('com.apnacollegebihar.online');
          }
          if (AppBlocker && AppBlocker.setAllowedPackages) {
            AppBlocker.setAllowedPackages({ packages: pkgArray });
          }
          
          Preferences.set({ key: 'isBlockerActive', value: 'true' });
        } else {
          if (AppBlocker && AppBlocker.stopBlocker) AppBlocker.stopBlocker();
          Preferences.set({ key: 'isBlockerActive', value: 'false' });
          Preferences.set({ key: 'countdownEndTime', value: '0' });
        }
      } catch (e) {
        console.error("Native Blocker Error:", e);
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
      
      if (selectedTaskId) {
        await updateDoc(doc(db, 'Tasks', selectedTaskId), { done: true });
        setSelectedTaskId('');
      }
      
      setTimerActive(false);
    } catch (e) { console.error("Global Save Error:", e); }
  };

  useEffect(() => {
    if (!user) return;
    updateDoc(doc(db, 'users', user.uid), { isStudying: timerActive }).catch(() => {});
  }, [timerActive, user]);

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (timerActive) {
        e.preventDefault();
        e.returnValue = '';
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [timerActive]);

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
  }, [timerActive, timerMode, user, customMinutes, customSeconds, selectedTaskId]);

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
    installedApps,
    fetchApps,
    selectedTaskId,
    setSelectedTaskId,
    launchApp: async (pkg) => {
      if (!isNativeApp()) return;
      try {
        if (AppBlocker && AppBlocker.launchApp) {
          await AppBlocker.launchApp({ packageName: pkg });
        }
      } catch (e) { console.error(e); }
    },
    openAccessibilitySettings: async () => {
      if (!isNativeApp()) return;
      try {
        if (AppBlocker && AppBlocker.openAccessibilitySettings) {
          await AppBlocker.openAccessibilitySettings();
        }
      } catch (e) { console.error(e); }
    }
  };

  return (
    <StudyContext.Provider value={value}>
      {children}
    </StudyContext.Provider>
  );
}
