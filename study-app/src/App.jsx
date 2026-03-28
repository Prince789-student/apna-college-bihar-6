import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Group from './pages/Group';
import Timer from './pages/Timer';
import Layout from './components/Layout';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center" style={{ height: '100vh' }}>
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={!user ? <Login /> : <Navigate to="/dashboard" replace />} />
        
        <Route element={<Layout user={user} />}>
          <Route 
            path="/dashboard" 
            element={user ? <Dashboard user={user} /> : <Navigate to="/" replace />} 
          />
          <Route 
            path="/timer" 
            element={user ? <Timer user={user} /> : <Navigate to="/" replace />} 
          />
          <Route 
            path="/group/:groupId" 
            element={user ? <Group user={user} /> : <Navigate to="/" replace />} 
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
