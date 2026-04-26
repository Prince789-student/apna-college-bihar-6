import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { db } from '../firebase';
import { doc, updateDoc, addDoc, collection, getDoc } from 'firebase/firestore';
import { useAuth } from './AuthContext';

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
  const timerRef = useRef(null);

  const setTimerActive = (val) => {
    _setTimerActive(val);
    localStorage.setItem('timerActive', JSON.stringify(val));
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
        await updateDoc(userRef, { 
          totalStudyTime: (userData.totalStudyTime || 0) + timeToSave, 
          lastStudyDate: todayStr, 
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
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden' && timerActive) {
        setTimerActive(false);
        setFocusBroken(true);
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
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
    setFocusBroken
  };

  return (
    <StudyContext.Provider value={value}>
      {children}
    </StudyContext.Provider>
  );
}
