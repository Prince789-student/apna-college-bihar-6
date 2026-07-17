import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { StudyProvider } from './context/StudyContext'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'

const rootEl = document.getElementById('root');
if (!rootEl) {
  console.error("[CRITICAL] Could not find #root element!");
} else {
  // FORCE CLEAR STUBBORN SERVICE WORKER CACHES GLOBALLY
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then((registrations) => {
      for (let registration of registrations) {
        registration.unregister();
      }
    });
    caches.keys().then(keys => {
      keys.forEach(key => caches.delete(key));
    });
  }

  try {
    const appContent = (
      <React.StrictMode>
        <HelmetProvider>
          <AuthProvider>
            <StudyProvider>
              <BrowserRouter>
                <App />
              </BrowserRouter>
            </StudyProvider>
          </AuthProvider>
        </HelmetProvider>
      </React.StrictMode>
    );

    // Always use createRoot since this is a client-side only app.
    // The splash screen inside #root is not SSR content.
    const root = ReactDOM.createRoot(rootEl);
    root.render(appContent);
  } catch (err) {
    console.error("[CRITICAL] React Render Error:", err);
  }
}
