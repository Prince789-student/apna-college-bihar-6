import { useState, useEffect, useRef } from 'react';
import { doc, updateDoc, increment, addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase';
import { useNavigate } from 'react-router-dom';

function Timer({ user }) {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const intervalRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isActive) {
      intervalRef.current = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isActive]);

  const formatTime = (totalSeconds) => {
    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleStart = () => setIsActive(true);

  const handleStop = async () => {
    setIsActive(false);
    if (seconds < 5) {
      // Don't save sessions shorter than 5 seconds
      setSeconds(0);
      return;
    }

    setIsSaving(true);
    try {
      const today = new Date().toISOString().split('T')[0];
      
      // 1. Save to StudySessions collection
      await addDoc(collection(db, 'StudySessions'), {
        userId: user.uid,
        duration: seconds,
        date: today,
        createdAt: new Date().toISOString()
      });

      // 2. Update User document (duration is in seconds)
      const userRef = doc(db, 'Users', user.uid);
      await updateDoc(userRef, {
        todayStudyTime: increment(seconds),
        totalStudyTime: increment(seconds)
      });

      alert(`Session Saved! You studied for ${Math.floor(seconds / 60)} minutes.`);
      navigate('/dashboard');
    } catch (err) {
      console.error("Error saving session:", err);
      alert("Failed to save session. Please check your connection.");
    } finally {
      setIsSaving(false);
      setSeconds(0);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-8" style={{ minHeight: '60vh' }}>
      <div className="card text-center" style={{ maxWidth: '500px', width: '100%', padding: '4rem 2rem' }}>
        <h2 className="mb-4">Focused Study Session</h2>
        <div className="text-muted mb-8 italic">Stay focused, Prince. You've got this!</div>
        
        <div 
          style={{ 
            fontSize: '5rem', 
            fontWeight: '800', 
            fontFamily: 'monospace',
            color: 'var(--primary)',
            textShadow: '0 0 20px rgba(99, 102, 241, 0.3)',
            marginBottom: '3rem'
          }}
        >
          {formatTime(seconds)}
        </div>

        <div className="flex gap-6 justify-center">
          {!isActive ? (
            <button 
              onClick={handleStart} 
              className="btn btn-primary" 
              style={{ padding: '1.25rem 3rem', fontSize: '1.2rem', borderRadius: '12px' }}
            >
              Start Timer
            </button>
          ) : (
            <button 
              onClick={handleStop} 
              disabled={isSaving}
              className="btn" 
              style={{ 
                padding: '1.25rem 3rem', 
                fontSize: '1.2rem', 
                borderRadius: '12px',
                background: 'var(--danger)',
                color: 'white',
                border: 'none'
              }}
            >
              {isSaving ? 'Saving...' : 'Stop & Save'}
            </button>
          )}
        </div>

        {isActive && (
          <div className="mt-8 text-sm text-muted animate-pulse">
            Recording your session in real-time...
          </div>
        )}
      </div>
    </div>
  );
}

export default Timer;
