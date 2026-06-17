import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { StudyProvider } from './context/StudyContext'
import { HelmetProvider } from 'react-helmet-async'

const rootEl = document.getElementById('root');
if (!rootEl) {
  console.error("[CRITICAL] Could not find #root element!");
} else {
  try {
    const root = ReactDOM.createRoot(rootEl);
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
  } catch (err) {
    console.error("[CRITICAL] React Render Error:", err);
  }
}
