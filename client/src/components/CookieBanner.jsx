import React, { useState, useEffect } from 'react';
import { Info, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasConsented = localStorage.getItem('acb_cookie_consent');
    if (!hasConsented) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('acb_cookie_consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[999999] bg-slate-900 border-t border-slate-800 p-4 md:p-6 shadow-2xl animate-in slide-in-from-bottom-10 fade-in duration-500">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 shrink-0 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center border border-blue-500/30">
            <Info size={20} />
          </div>
          <div>
            <p className="text-white text-sm font-bold leading-tight">We value your privacy</p>
            <p className="text-slate-400 text-xs mt-1 max-w-3xl leading-relaxed">
              We use cookies (including Google AdSense DART cookies) to personalize content, serve targeted advertisements, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies as described in our <Link to="/privacy-policy" className="text-blue-400 hover:underline">Privacy Policy</Link>.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 shrink-0 w-full md:w-auto mt-2 md:mt-0">
          <button 
            onClick={handleAccept}
            className="w-full md:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white text-xs font-black uppercase tracking-widest rounded-xl transition-all shadow-lg shadow-blue-900/50 whitespace-nowrap"
          >
            Accept All
          </button>
          <button 
            onClick={() => setIsVisible(false)}
            className="w-12 h-12 flex items-center justify-center bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white rounded-xl transition-colors"
          >
            <X size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
