console.log("[DEBUG] main.jsx starting...");
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { StudyProvider } from './context/StudyContext'
import { HelmetProvider } from 'react-helmet-async'

console.log("[DEBUG] Imports done. Ready to mount...");

const rootEl = document.getElementById('root');
if (!rootEl) {
  console.error("[CRITICAL] Could not find #root element!");
} else {
  try {
    console.log("[DEBUG] Creating root...");
    const root = ReactDOM.createRoot(rootEl);
    console.log("[DEBUG] Rendering app to root...");
    root.render(
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
    console.log("[DEBUG] Render call reached.");
  } catch (err) {
    console.error("[CRITICAL] React Render Error:", err);
  }
}
