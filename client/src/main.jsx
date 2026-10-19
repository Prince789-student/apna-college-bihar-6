import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { StudyProvider } from './context/StudyContext'
import { HelmetProvider } from 'react-helmet-async'
import ScrollToTop from './components/ScrollToTop'
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
                <ScrollToTop />
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

    // Smoothly dismiss initial branded loader overlay once React mounts
    const dismissInitLoader = () => {
      const loader = document.getElementById('app-init-loader');
      if (loader) {
        loader.style.opacity = '0';
        loader.style.pointerEvents = 'none';
        setTimeout(() => {
          try {
            loader.remove();
          } catch (e) {}
        }, 300);
      }
    };

    if (typeof window !== 'undefined') {
      requestAnimationFrame(() => {
        setTimeout(dismissInitLoader, 80);
      });
      // Safety fallback in case animation frame is throttled
      setTimeout(dismissInitLoader, 2500);
    }
  } catch (err) {
    console.error("[CRITICAL] React Render Error:", err);
  }
}
