import React, { useState } from 'react';
import { X, Copy, Check } from 'lucide-react';
import toast from 'react-hot-toast';

export default function DonateModal({ isOpen, onClose, mode = 'SUPPORT', onContinueWithoutDonating, pendingUrl }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const upiId = "apnacollegebihar@slc";

  const handleCopy = () => {
    navigator.clipboard.writeText(upiId);
    toast.success('UPI ID Copied to clipboard! ✅');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleProceed = () => {
    if (onContinueWithoutDonating) {
      onContinueWithoutDonating();
    } else if (pendingUrl) {
      window.open(pendingUrl, '_blank');
    }
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-4 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200" 
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-3xl shadow-2xl max-w-[400px] w-full max-h-[92dvh] sm:max-h-[88vh] flex flex-col overflow-hidden animate-in zoom-in-95 duration-200 border border-slate-100" 
        onClick={e => e.stopPropagation()}
      >
        {/* Compact & Vibrant Top Header */}
        <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-rose-700 relative pt-3.5 pb-2.5 sm:pt-4 sm:pb-3 flex flex-col items-center flex-shrink-0 text-center px-4">
          <button 
            onClick={onClose} 
            className="absolute top-2.5 right-2.5 text-white/80 hover:text-white transition-colors p-1.5 bg-white/15 hover:bg-white/25 rounded-full" 
            aria-label="Close"
          >
            <X size={15} />
          </button>
          
          <div className="inline-flex items-center gap-1.5 mb-0.5">
            <span className="text-base sm:text-lg">❤️</span>
            <h3 className="font-heading font-black text-white text-sm sm:text-base tracking-wide uppercase">
              Apna College Bihar Family
            </h3>
          </div>
          <p className="text-[10px] font-bold text-rose-100/90 tracking-wider">
            Built By Students, Powered By Community 🚀
          </p>
        </div>

        {/* Scrollable Content Body - Optimized for Mobile Screen Height */}
        <div className="p-3 sm:p-4 flex flex-col items-center overflow-y-auto overscroll-contain">
          {/* Community Appeal Box */}
          <div className="w-full bg-gradient-to-b from-rose-50/90 via-blue-50/70 to-amber-50/60 border border-rose-200/80 rounded-2xl p-2.5 sm:p-3 text-center mb-2.5 shadow-xs">
            <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-rose-600 text-white text-[9px] font-black uppercase tracking-wider mb-1 shadow-xs">
              🚀 Student Community Fund
            </div>
            
            <p className="text-[11px] sm:text-xs font-bold text-slate-800 leading-snug mb-1">
              "Hum bhi aapki tarah BEU ke Students hain 🤝"
            </p>
            
            <p className="text-[10px] sm:text-[11px] text-slate-600 font-medium leading-relaxed">
              Bihar ke sabhi <strong>38 Govt Colleges</strong> ke liye platform <strong>100% FREE</strong> hai. 24x7 fast server & database ke liye aapka chhota sa support <strong className="text-rose-600">(₹10, ₹20 ya jitna aap chahein)</strong> ise hamesha free aur live rakhega!
            </p>
          </div>

          {/* Compact Crisp QR Code Scanner */}
          <div className="w-28 h-28 sm:w-32 sm:h-32 bg-white rounded-2xl p-1.5 border-2 border-dashed border-rose-300 flex items-center justify-center overflow-hidden mb-2.5 shadow-xs flex-shrink-0">
            <img 
              src="/scanner-qr.jpg" 
              alt="UPI Scanner QR Code" 
              className="w-full h-full object-contain rounded-xl" 
            />
          </div>
          
          {/* UPI ID Box with 1-Tap Copy */}
          <div 
            className="w-full bg-slate-50 border border-slate-200 hover:border-rose-300 rounded-xl p-2 sm:p-2.5 flex items-center justify-between group cursor-pointer hover:bg-rose-50/30 transition-all shadow-xs"
            onClick={handleCopy}
          >
            <div className="text-left pr-2 truncate">
              <p className="text-[9px] font-bold text-rose-600 uppercase tracking-widest mb-0.5">
                Official UPI ID (Tap to Copy)
              </p>
              <p className="text-xs sm:text-sm font-black text-slate-900 font-mono tracking-tight select-all truncate">
                {upiId}
              </p>
            </div>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleCopy();
              }}
              className={`px-3 py-1.5 rounded-lg text-[11px] font-black uppercase tracking-wider flex items-center gap-1 transition-all shadow-xs shrink-0 cursor-pointer ${
                copied 
                  ? 'bg-emerald-600 text-white shadow-emerald-500/25 scale-105' 
                  : 'bg-rose-600 hover:bg-rose-700 text-white shadow-rose-500/25 group-hover:scale-105'
              }`}
            >
              {copied ? (
                <>
                  <Check size={13} strokeWidth={3} />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={13} strokeWidth={2.5} />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          <p className="text-[9px] text-slate-500 font-semibold uppercase tracking-wider text-center mt-1.5">
            💡 UPI Remark mein apna <strong className="text-slate-800">Name & College</strong> likhein — Wall of Fame me aayenge!
          </p>
        </div>

        {/* Action Button Footer */}
        <div className="p-2.5 sm:p-3 bg-white border-t border-slate-100 flex-shrink-0">
          {mode === 'DOWNLOAD' ? (
            <button 
              onClick={handleProceed}
              className="w-full py-2.5 sm:py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl text-xs font-black uppercase tracking-wider transition-all shadow-md shadow-blue-600/20 active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>❤️ Download File & Continue</span>
            </button>
          ) : (
            <button 
              onClick={onClose}
              className="w-full py-2.5 sm:py-3 bg-gradient-to-r from-rose-600 to-indigo-600 hover:from-rose-700 hover:to-indigo-700 text-white rounded-xl text-xs font-black uppercase tracking-wider transition-all shadow-md shadow-rose-600/20 active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Close & Continue</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
