console.log("[DEBUG] main.jsx starting...");
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

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
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    );
    console.log("[DEBUG] Render call reached.");
  } catch (err) {
    console.error("[CRITICAL] React Render Error:", err);
  }
}
