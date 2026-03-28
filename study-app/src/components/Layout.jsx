import { Outlet, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

function Layout({ user }) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <>
      <nav className="navbar">
        <div 
          className="text-lg font-bold cursor-pointer" 
          onClick={() => navigate('/dashboard')}
          style={{ cursor: 'pointer', background: 'var(--primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 'bold', fontSize: '1.25rem' }}
        >
          StudySync
        </div>
        <div className="flex items-center gap-4">
          <span className="text-muted text-sm">{user?.displayName || 'User'}</span>
          <button onClick={handleLogout} className="btn btn-secondary" style={{ padding: '0.4rem 1rem', fontSize: '0.875rem' }}>
            Logout
          </button>
        </div>
      </nav>
      <main className="container">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
