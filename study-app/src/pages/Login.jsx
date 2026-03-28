import { useState } from 'react';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    setLoading(true);
    setError('');
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Check if user exists in Firestore
      const userRef = doc(db, 'Users', user.uid);
      const userSnap = await getDoc(userRef);

      if (!userSnap.exists()) {
        // Create new user document
        await setDoc(userRef, {
          userId: user.uid,
          name: user.displayName || 'Study User',
          phone: user.phoneNumber || '',
          createdAt: new Date().toISOString(),
          totalStudyTime: 0,
          todayStudyTime: 0
        });
      }
      
      navigate('/dashboard');
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center flex-col" style={{ height: '100vh', padding: '2rem' }}>
      <div className="card" style={{ maxWidth: '400px', width: '100%', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>StudySync</h1>
        <p className="text-muted mb-8">Join the ultimate study group platform.</p>
        
        {error && <div className="text-danger mb-4" style={{ fontSize: '0.875rem' }}>{error}</div>}
        
        <button 
          onClick={handleGoogleLogin} 
          disabled={loading}
          className="btn btn-primary"
          style={{ width: '100%', padding: '1rem' }}
        >
          {loading ? <span className="loader" style={{ width: '20px', height: '20px', borderWidth: '2px' }}></span> : 'Sign in with Google'}
        </button>
      </div>
    </div>
  );
}

export default Login;
