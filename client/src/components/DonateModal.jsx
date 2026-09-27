import React, { useState } from 'react';
import { X, Award, ExternalLink } from 'lucide-react';
import toast from 'react-hot-toast';

export default function DonateModal({ isOpen, onClose, mode = 'SUPPORT', onContinueWithoutDonating, pendingUrl }) {
  const [copied, setCopied] = useState(false);
  const [donateType, setDonateType] = useState('MONTHLY'); // 'MONTHLY' or 'ONETIME'

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
        {/* Top Blue Header Section */}
        <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-800 relative pt-6 pb-5 flex flex-col items-center flex-shrink-0">
          <button onClick={onClose} className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors p-1.5 bg-white/10 hover:bg-white/20 rounded-full">
            <X size={16} />
          </button>
          
          <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center text-white mb-2 shadow-sm backdrop-blur-sm">
            <Award size={20} />
          </div>
          <h3 className="font-[900] text-white text-lg tracking-wide uppercase">Support Apna College Bihar</h3>
          <p className="text-[9px] font-bold text-blue-200 uppercase tracking-widest mt-0.5">
            Keep Education & 38 Colleges Notice Alerts 100% Free!
          </p>
        </div>

        {/* Support Type Toggle */}
        <div className="p-3 bg-slate-50 border-b border-slate-100 flex items-center gap-2">
          <button
            onClick={() => setDonateType('MONTHLY')}
            className={`flex-1 py-2 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 ${donateType === 'MONTHLY' ? 'bg-rose-500 text-white shadow-md shadow-rose-500/20' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'}`}
          >
            💖 Become Monthly Supporter
          </button>
          <button
            onClick={() => setDonateType('ONETIME')}
            className={`flex-1 py-2 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 ${donateType === 'ONETIME' ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'}`}
          >
            ⭐ One-Time Support
          </button>
        </div>
        
        {/* Body */}
        <div className="p-4 md:p-5 flex flex-col items-center overflow-y-auto scrollbar-hide">
          {donateType === 'MONTHLY' ? (
            <div className="w-full space-y-3 mb-4">
              <div className="bg-rose-50/80 border border-rose-200/80 rounded-2xl p-3 text-center">
                <p className="text-xs font-black text-rose-700 uppercase tracking-wider mb-0.5">💖 Monthly Supporter Membership</p>
                <p className="text-[10px] text-slate-600 font-medium leading-relaxed">
                  Monthly contributions cover server hosting, Gemini AI notice summarizer & WhatsApp channel automation for all 38 BEU Engineering Colleges!
                </p>
              </div>

              {/* Monthly Tiers */}
              <div className="grid grid-cols-3 gap-2">
                <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-center hover:border-rose-400 transition-colors">
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Student</p>
                  <p className="text-base font-[1000] text-slate-900">₹49<span className="text-[9px] text-slate-400 font-bold">/mo</span></p>
                </div>
                <div className="p-2.5 bg-rose-50/50 border-2 border-rose-400 rounded-xl text-center relative shadow-sm">
                  <span className="absolute -top-2 left-1/2 -translate-x-1/2 px-1.5 py-0.2 bg-rose-500 text-white text-[7px] font-black uppercase tracking-widest rounded-full">POPULAR</span>
                  <p className="text-[9px] font-black text-rose-600 uppercase tracking-widest">Silver</p>
                  <p className="text-base font-[1000] text-rose-700">₹99<span className="text-[9px] text-rose-400 font-bold">/mo</span></p>
                </div>
                <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-center hover:border-rose-400 transition-colors">
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Gold</p>
                  <p className="text-base font-[1000] text-slate-900">₹199<span className="text-[9px] text-slate-400 font-bold">/mo</span></p>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-[11px] font-medium text-slate-500 text-center leading-relaxed mb-3">
              Usually, premium BEU PYQs & Notes cost <strong className="text-slate-800">₹15/paper</strong>. We provide them 100% free! Consider donating the price of a cup of tea to support our team.
            </p>
          )}

          <div className="w-36 h-36 sm:w-40 sm:h-40 bg-white rounded-3xl p-2 border-2 border-dashed border-blue-200 flex items-center justify-center overflow-hidden mb-3 shadow-sm flex-shrink-0">
            <img src="/scanner-qr.jpg" alt="UPI Scanner" className="w-full h-full object-contain rounded-xl" />
          </div>
          
          {/* UPI ID Box */}
          <div className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-3 flex items-center justify-between group cursor-pointer hover:bg-slate-100 transition-colors"
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
          <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider text-center mt-2">
            💡 Add your <strong className="text-slate-700">Name & College</strong> in UPI remark to get featured on Wall of Fame!
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
              className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-[11px] font-[1000] uppercase tracking-widest transition-all shadow-lg shadow-blue-600/20 active:scale-[0.98]"
            >
              Donate After Download
            </button>
          ) : (
            <button 
              onClick={handleSaveAndContinue}
              className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-[11px] font-[1000] uppercase tracking-widest transition-all shadow-lg shadow-blue-600/20 active:scale-[0.98]"
            >
              Save Scanner QR Code
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
