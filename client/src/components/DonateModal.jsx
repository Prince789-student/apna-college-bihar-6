import React, { useState } from 'react';
import { X, Award, ExternalLink } from 'lucide-react';
import toast from 'react-hot-toast';

export default function DonateModal({ isOpen, onClose, mode = 'SUPPORT', onContinueWithoutDonating, pendingUrl }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const upiId = "apnacollegebihar@slc";

  const handleCopy = () => {
    navigator.clipboard.writeText(upiId);
    toast.success('UPI ID Copied to clipboard!');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSaveAndContinue = () => {
    // 1. Download the scanner image
    const link = document.createElement('a');
    link.href = '/scanner-qr.jpg';
    link.download = 'ApnaCollegeBihar_QR.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // 2. If there's a pending file to download, open it after a tiny delay
    if (pendingUrl) {
      setTimeout(() => {
        window.open(pendingUrl, '_blank');
      }, 300);
    }

    // 3. Close the modal
    setTimeout(() => {
      onClose();
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm" onClick={onClose}>
      <div className="bg-white rounded-[24px] shadow-2xl max-w-[460px] w-full max-h-[85vh] mt-6 flex flex-col overflow-hidden animate-in fade-in zoom-in duration-200" onClick={e => e.stopPropagation()}>
        {/* Top Header Section */}
        <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-rose-700 relative pt-6 pb-5 flex flex-col items-center flex-shrink-0 text-center px-4">
          <button onClick={onClose} className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors p-1.5 bg-white/10 hover:bg-white/20 rounded-full" aria-label="Close">
            <X size={16} />
          </button>
          
          <div className="w-11 h-11 bg-white/20 rounded-2xl flex items-center justify-center text-white mb-2 shadow-sm backdrop-blur-sm animate-pulse">
            <span className="text-xl">❤️</span>
          </div>
          <h3 className="font-heading font-black text-white text-lg tracking-wide uppercase">
            Apna College Bihar Family
          </h3>
          <p className="text-[10px] font-bold text-rose-100 tracking-wider mt-0.5">
            Built By Students, Powered By Community 🚀
          </p>
        </div>

        {/* Body */}
        <div className="p-4 md:p-5 flex flex-col items-center overflow-y-auto scrollbar-hide">
          {/* Deeply Dignified Community Appeal Box */}
          <div className="w-full bg-gradient-to-b from-rose-50/80 via-blue-50/60 to-amber-50/50 border border-rose-200/80 rounded-2xl p-4 text-center mb-3 shadow-xs">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-600 text-white text-[10px] font-black uppercase tracking-wider mb-2.5 shadow-sm shadow-rose-500/30">
              🚀 Student Community Fund
            </div>
            
            <p className="text-xs font-bold text-slate-800 leading-snug mb-2">
              "Hum bhi aapki tarah BEU ke Students hain 🤝"
            </p>
            
            <p className="text-[11px] text-slate-600 font-medium leading-relaxed mb-2">
              Bihar ke sabhi <strong>38 Govt Engineering Colleges</strong> ke brothers & sisters ke liye humne din-raat mehnat karke yeh platform <strong>100% FREE</strong> rakha hai taaki kisi ko Notes ya PYQ ke paise na dene paden.
            </p>

            <div className="p-2.5 bg-white/80 rounded-xl border border-rose-100/80 text-[11px] text-slate-700 leading-relaxed font-semibold">
              ✨ Cloud server aur database ko 24x7 fast rakhne ke liye monthly infrastructure cost aata hai. Aapka chhota sa voluntary support <strong className="text-rose-600 underline">(₹10, ₹20 ya jitna aap chahein)</strong> is platform ko hamesha free aur strong rakhega!
            </div>
          </div>

          <div className="w-36 h-36 sm:w-40 sm:h-40 bg-white rounded-3xl p-2 border-2 border-dashed border-rose-300 flex items-center justify-center overflow-hidden mb-3 shadow-sm flex-shrink-0">
            <img src="/scanner-qr.jpg" alt="UPI Scanner" className="w-full h-full object-contain rounded-xl" />
          </div>
          
          {/* UPI ID Box */}
          <div className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-3 flex items-center justify-between group cursor-pointer hover:bg-slate-100 transition-colors"
            onClick={handleCopy}
          >
            <div>
              <p className="text-[9px] font-bold text-rose-500 uppercase tracking-widest mb-0.5">UPI ID (Tap to Copy)</p>
              <p className="text-sm font-[900] text-slate-900">{upiId}</p>
            </div>
            <div className="w-8 h-8 bg-rose-100 rounded-lg flex items-center justify-center text-rose-600 group-hover:scale-105 transition-transform">
              <ExternalLink size={14} />
            </div>
          </div>
          <p className="text-[9px] text-slate-500 font-bold uppercase tracking-wider text-center mt-2">
            💡 UPI Remark mein apna <strong className="text-slate-800">Name & College</strong> likhein — Hum aapko Wall of Fame mein Add karenge!
          </p>
        </div>

        {/* Action Buttons */}
        <div className="p-4 bg-white border-t border-slate-100 flex-shrink-0">
          {mode === 'DOWNLOAD' ? (
            <button 
              onClick={() => {
                if (onContinueWithoutDonating) onContinueWithoutDonating();
                else if (pendingUrl) window.open(pendingUrl, '_blank');
                onClose();
              }}
              className="w-full py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl text-[11px] font-[1000] uppercase tracking-widest transition-all shadow-lg shadow-blue-600/25 active:scale-[0.98] flex items-center justify-center gap-2"
            >
              <span>❤️ Download File & Support Community</span>
            </button>
          ) : (
            <button 
              onClick={handleSaveAndContinue}
              className="w-full py-3.5 bg-gradient-to-r from-rose-600 to-indigo-600 hover:from-rose-700 hover:to-indigo-700 text-white rounded-xl text-[11px] font-[1000] uppercase tracking-widest transition-all shadow-lg shadow-rose-600/25 active:scale-[0.98] flex items-center justify-center gap-2"
            >
              <span>❤️ Save Scanner QR & Support Community</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
