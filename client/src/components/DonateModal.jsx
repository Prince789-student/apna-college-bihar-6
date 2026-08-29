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
      <div className="bg-white rounded-[24px] shadow-2xl max-w-[450px] w-full max-h-[80vh] mt-12 flex flex-col overflow-hidden animate-in fade-in zoom-in duration-200" onClick={e => e.stopPropagation()}>
        {/* Top Blue Header Section */}
        <div className="bg-blue-600 relative pt-6 pb-5 flex flex-col items-center flex-shrink-0">
          <button onClick={onClose} className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors p-1.5 bg-white/10 hover:bg-white/20 rounded-full">
            <X size={16} />
          </button>
          
          <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center text-white mb-3 shadow-sm backdrop-blur-sm">
            <Award size={20} />
          </div>
          <h3 className="font-[900] text-white text-lg tracking-wide uppercase">Support Our Team</h3>
          <p className="text-[9px] font-bold text-blue-200 uppercase tracking-widest mt-1">
            Keep Education Free For All!
          </p>
        </div>
        
        {/* Body */}
        <div className="p-4 md:p-5 flex flex-col items-center overflow-y-auto scrollbar-hide">
          <p className="text-[11px] font-medium text-slate-500 text-center leading-relaxed mb-2">
            Usually, a single premium notes or PYQ paper costs <strong className="text-slate-800">₹15</strong>. We provide them 100% free! Your small contribution goes entirely towards maintaining server costs and keeping this platform free forever.
          </p>
          <p className="text-[11px] font-medium text-slate-500 text-center leading-relaxed mb-4">
            If this helped you, consider donating the price of a cup of tea. Add your <strong className="text-blue-600">Name and College Name</strong> in the UPI message to get featured on our Wall of Fame!
          </p>
          
          <div className="w-36 h-36 sm:w-40 sm:h-40 bg-white rounded-3xl p-2 border-2 border-dashed border-blue-200 flex items-center justify-center overflow-hidden mb-4 shadow-sm flex-shrink-0">
            <img src="/scanner-qr.jpg" alt="UPI Scanner" className="w-full h-full object-contain rounded-xl" />
          </div>
          
          {/* UPI ID Box */}
          <div className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 flex items-center justify-between group cursor-pointer hover:bg-slate-100 transition-colors"
            onClick={handleCopy}
          >
            <div>
              <p className="text-[9px] font-bold text-blue-500 uppercase tracking-widest mb-0.5">UPI ID (Tap to Copy)</p>
              <p className="text-sm font-[900] text-slate-900">{upiId}</p>
            </div>
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 group-hover:scale-105 transition-transform">
              <ExternalLink size={14} />
            </div>
          </div>
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
              className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-[11px] font-[1000] uppercase tracking-widest transition-all shadow-lg shadow-blue-600/20 active:scale-[0.98]"
            >
              Donate After Download
            </button>
          ) : (
            <button 
              onClick={handleSaveAndContinue}
              className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-[11px] font-[1000] uppercase tracking-widest transition-all shadow-lg shadow-blue-600/20 active:scale-[0.98]"
            >
              Save Scanner
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
