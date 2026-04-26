import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { db } from '../firebase';
import { doc, updateDoc, addDoc, collection, serverTimestamp } from 'firebase/firestore';
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
  const timerRef = useRef(null);

  // Sync isStudying status to Firestore
  useEffect(() => {
    if (!user) return;
    const syncStatus = async () => {
      try {
        await updateDoc(doc(db, 'users', user.uid), { isStudying: timerActive });
      } catch (e) { console.error("Status Sync Error:", e); }
    };
    syncStatus();

    // Safety: Set false on window close, but NOT on component unmount (since provider stays alive)
    const handleUnload = () => {
      const uRef = doc(db, 'users', user.uid);
      updateDoc(uRef, { isStudying: false }).catch(() => {});
    };
    window.addEventListener('beforeunload', handleUnload);
    return () => window.removeEventListener('beforeunload', handleUnload);
  }, [timerActive, user]);

  // Global Timer Tick
  useEffect(() => {
    if (timerActive) {
      timerRef.current = setInterval(() => {
        setTimerTime(t => {
          if (timerMode === 'COUNTDOWN') {
            if (t <= 1) {
              clearInterval(timerRef.current);
              setTimerActive(false);
              // In a real app, you might trigger a sound or notification here
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
  }, [timerActive, timerMode]);

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
    setTimerMode
  };

  return (
    <StudyContext.Provider value={value}>
      {children}
    </StudyContext.Provider>
  );
}
