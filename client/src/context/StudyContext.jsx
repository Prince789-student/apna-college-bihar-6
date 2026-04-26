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
  const [timerActive, setTimerActive] = useState(false);
  const [timerTime, setTimerTime] = useState(1500);
  const [timerSubject, setTimerSubject] = useState('OTHERS');
  const [customMinutes, setCustomMinutes] = useState(25);
  const [timerMode, setTimerMode] = useState('COUNTDOWN');
  const [focusBroken, setFocusBroken] = useState(false);
  const timerRef = useRef(null);

  // Reset timer when mode or custom minutes change (and not active)
  useEffect(() => {
    if (!timerActive) {
      if (timerMode === 'COUNTDOWN') {
        setTimerTime(customMinutes * 60);
      } else {
        setTimerTime(0);
      }
    }
  }, [timerMode, customMinutes, timerActive]);

  const saveGlobalSession = async (manualTime = null) => {
    if (!user) return;
    const timeToSave = manualTime || (timerMode === 'STOPWATCH' ? timerTime : (customMinutes * 60 - timerTime));
    
    if (timeToSave < 5) { // Minimum 5 seconds to save
      setTimerActive(false);
      return;
    }

    try {
      const todayStr = new Date().toISOString().split('T')[0];
      
      // 1. Add session record
      await addDoc(collection(db, 'StudySessions'), {
        userId: user.uid,
        userName: user.name || 'Scholar',
        subject: timerSubject,
        duration: timeToSave,
        date: todayStr,
        createdAt: new Date().toISOString()
      });

      // 2. Update user stats (Streak, Total Time)
      const userRef = doc(db, 'users', user.uid);
      const uSnap = await getDoc(userRef);
      if (uSnap.exists()) {
        const userData = uSnap.data();
        const totalStudyTime = (userData.totalStudyTime || 0) + timeToSave;
        
        // Basic streak logic (Simplified for global context)
        // In a real app, you'd calculate this more precisely with session history
        await updateDoc(userRef, {
          totalStudyTime,
          lastStudyDate: todayStr,
          isStudying: false
        });
      }

      setTimerActive(false);
    } catch (e) {
      console.error("Global Save Error:", e);
    }
  };

  // Sync isStudying status
  useEffect(() => {
    if (!user) return;
    updateDoc(doc(db, 'users', user.uid), { isStudying: timerActive }).catch(() => {});
  }, [timerActive, user]);

  // Anti-Distraction: Detect tab switching
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

  // Global Timer Tick
  useEffect(() => {
    if (timerActive) {
      timerRef.current = setInterval(() => {
        setTimerTime(t => {
          if (timerMode === 'COUNTDOWN') {
            if (t <= 1) {
              clearInterval(timerRef.current);
              saveGlobalSession(customMinutes * 60); // Auto-save full session
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
  }, [timerActive, timerMode, user]); // Added user to dependencies

  const value = {
    timerActive,
    setTimerActive,
    timerTime,
    setTimerTime,
    timerSubject,
    setTimerSubject,
    customMinutes,
    setCustomMinutes,
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
