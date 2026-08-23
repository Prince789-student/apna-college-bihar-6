import React, { useState } from 'react';
import { X, Award, Copy, Check } from 'lucide-react';

export default function DonateModal({ isOpen, onClose, mode = 'SUPPORT', onContinueWithoutDonating, pendingUrl }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const upiId = "apnacollegebihar@slc";

  const handleCopy = () => {
    navigator.clipboard.writeText(upiId);
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
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-md rounded-[1.5rem] md:rounded-[2rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="relative bg-[#4a6bdf] p-4 md:p-5 text-center flex-shrink-0">
          <button 
            onClick={onClose}
            className="absolute top-3 right-3 md:top-4 md:right-4 w-7 h-7 md:w-8 md:h-8 bg-white/20 hover:bg-white/30 text-white rounded-full flex items-center justify-center transition-colors"
          >
            <X size={16} />
          </button>
          
          <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-2 border border-white/20">
            <Award size={20} className="text-white md:hidden" />
            <Award size={24} className="text-white hidden md:block" />
          </div>
          
          <h2 className="text-base md:text-xl font-[900] text-white uppercase tracking-tight">Support Our Team</h2>
          <p className="text-blue-100 text-[8px] md:text-[10px] font-bold uppercase tracking-widest mt-0.5 opacity-90">
            Help us pay server bills!
          </p>
        </div>

        {/* Content (Scrollable) */}
        <div className="p-4 md:p-6 overflow-y-auto flex-1">
          
          <div className="text-center space-y-2.5 md:space-y-3 mb-4">
            <p className="text-[10px] md:text-xs text-slate-600 leading-relaxed font-medium">
              Apna College Bihar is a 100% free platform built by students, for students. We provide notes, PYQs, important questions, study materials, and exam resources to help thousands of students prepare better.
            </p>
            <p className="text-[10px] md:text-xs text-slate-600 leading-relaxed font-medium">
              Maintaining our servers, website, and developing new features requires continuous support. If our platform has helped you in any way, please consider making a small contribution.
            </p>
          </div>

          <div className="bg-white border border-slate-200 border-dashed rounded-2xl md:rounded-3xl p-2.5 md:p-3 flex flex-col items-center justify-center mb-4">
            <img 
              src="/scanner-qr.jpg" 
              alt="Donate QR Code" 
              className="w-32 h-32 md:w-44 md:h-44 object-contain rounded-xl mix-blend-multiply"
            />
          </div>

          <button 
            onClick={handleCopy}
            className="w-full bg-blue-50/50 hover:bg-blue-50 border border-blue-100 rounded-xl md:rounded-2xl p-3 flex items-center justify-between transition-colors group mb-1 md:mb-2"
          >
            <div className="text-left">
              <p className="text-[8px] md:text-[9px] font-black text-blue-600 uppercase tracking-widest mb-0.5">UPI ID (Tap to Copy)</p>
              <p className="text-xs md:text-sm font-bold text-slate-800">{upiId}</p>
            </div>
            <div className={`p-1.5 md:p-2 rounded-lg md:rounded-xl transition-all ${copied ? 'bg-emerald-100 text-emerald-600' : 'bg-blue-100 text-blue-600 group-hover:scale-110'}`}>
              {copied ? <Check size={14} /> : <Copy size={14} />}
            </div>
          </button>
        </div>

        {/* Action Buttons (Pinned to Bottom) */}
        <div className="p-4 md:p-6 bg-white border-t border-slate-100 flex-shrink-0 space-y-2">
            {mode === 'DOWNLOAD' ? (
              <button 
                onClick={() => {
                  if (onContinueWithoutDonating) onContinueWithoutDonating();
                  else if (pendingUrl) window.open(pendingUrl, '_blank');
                  onClose();
                }}
                className="w-full py-2.5 md:py-3.5 bg-[#4a6bdf] hover:bg-blue-700 text-white rounded-lg md:rounded-xl text-[9px] md:text-[11px] font-black uppercase tracking-widest transition-all shadow-lg shadow-blue-900/20 active:scale-[0.98]"
              >
                Donate After Download
              </button>
            ) : (
              <button 
                onClick={handleSaveAndContinue}
                className="w-full py-2.5 md:py-3.5 bg-[#4a6bdf] hover:bg-blue-700 text-white rounded-lg md:rounded-xl text-[9px] md:text-[11px] font-black uppercase tracking-widest transition-all shadow-lg shadow-blue-900/20 active:scale-[0.98]"
              >
                Save Scanner
              </button>
            )}
        </div>
        
      </div>
    </div>
  );
}
