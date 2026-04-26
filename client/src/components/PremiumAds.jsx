import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, query, where, onSnapshot, limit } from 'firebase/firestore';
import { ExternalLink, Info, Bell, Youtube, Send, BookOpen } from 'lucide-react';

const FALLBACK_ADS = {
  BANNER: {
    title: "Access Study Resources",
    desc: "Get all your engineering notes, PYQs, and college schedules in one place.",
    link: "/dashboard/notes",
    type: "BANNER",
    icon: <BookOpen className="text-blue-400" size={32} />,
    col: "from-blue-600/20 to-indigo-900/40",
    border: "border-blue-500/30"
  },
  SIDEBAR: {
    title: "Subscribe Channel",
    desc: "Follow our YouTube for expert video guidance.",
    link: "https://youtube.com/@appne-h8p",
    type: "SIDEBAR",
    icon: <Youtube className="text-red-500" size={20} />,
    col: "from-red-600/10 to-transparent",
    border: "border-red-500/20"
  },
  INLINE: {
    title: "Support Educational Growth",
    desc: "Contribute to our notes bank and help fellow students succeed.",
    link: "/dashboard/notes",
    type: "INLINE",
    icon: <Info className="text-emerald-400" size={20} />,
    col: "from-emerald-600/10 to-transparent",
    border: "border-emerald-500/20"
  }
};

export default function PremiumAds({ type = 'BANNER' }) {
  const [ad, setAd] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, 'ads'), where('type', '==', type), where('active', '==', true), limit(1));
    const unsub = onSnapshot(q, (snap) => {
      if (!snap.empty) {
        setAd(snap.docs[0].data());
      } else {
        setAd(null);
      }
      setLoading(false);
    });
    return unsub;
  }, [type]);

  const current = ad || FALLBACK_ADS[type];

  // Force Render AdSense Slot if configured
  useEffect(() => {
     if (current?.useAdSense) {
        try {
           (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
           console.error("AdSense Error:", e);
        }
     }
  }, [current?.useAdSense]);

  if (loading) return null;

  if (current?.useAdSense) {
     return (
        <div className={`w-full overflow-hidden flex justify-center py-4`}>
           {/* AdSense Standard Placeholder */}
           <ins className="adsbygoogle"
                style={{ display: 'block' }}
                data-ad-client="ca-pub-818059891079"
                data-ad-slot={type === 'BANNER' ? '1234567890' : '0987654321'} // User will set real slot ID
                data-ad-format="auto"
                data-full-width-responsive="true"></ins>
        </div>
     );
  }

  // Render logic based on type
  if (type === 'SIDEBAR') {
    const finalLink = current.link.startsWith('/') || current.link.startsWith('http') ? current.link : `https://${current.link}`;
    return (
      <a href={finalLink} target="_blank" rel="noopener noreferrer" 
         className={`block p-4 bg-gradient-to-br ${current.col || 'from-slate-800 to-slate-900'} border ${current.border || 'border-slate-300/50'} rounded-2xl group transition-all hover:scale-[1.02] relative overflow-hidden`}>
         <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-slate-100 rounded-lg group-hover:scale-110 transition-transform">
               {current.icon || <Bell size={18} className="text-amber-500"/>}
            </div>
            <span className="text-[10px] font-black uppercase text-slate-500 tracking-[0.2em]">Promotion</span>
         </div>
         <h4 className="text-xs font-black text-slate-900 uppercase tracking-tight line-clamp-1">{current.title}</h4>
         <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest mt-1 line-clamp-2 leading-relaxed">{current.desc || current.title}</p>
         <div className="mt-4 flex justify-end">
            <ExternalLink size={14} className="text-slate-700 group-hover:text-blue-500 transition-colors" />
         </div>
      </a>
    );
  }

  if (type === 'BANNER') {
    const finalLink = current.link.startsWith('/') || current.link.startsWith('http') ? current.link : `https://${current.link}`;
    return (
      <a href={finalLink} target="_blank" rel="noopener noreferrer" 
         className={`w-full bg-gradient-to-r ${current.col || 'from-[#0d121f] to-[#162035]'} border ${current.border || 'border-slate-200/80'} rounded-[2.5rem] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 group transition-all relative overflow-hidden hover:border-blue-500/20`}>
         
         {/* Visual Backdrop */}
         <div className={`absolute -right-20 -bottom-20 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity`}></div>
         
         <div className="flex items-center gap-6 relative z-10 flex-col md:flex-row text-center md:text-left">
            <div className="w-14 h-14 bg-slate-100/50 backdrop-blur-xl border border-slate-300/30 rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500">
               {current.icon || (current.imageUrl ? <img src={current.imageUrl} className="w-full h-full object-cover rounded-2xl" /> : <Bell size={24} className="text-blue-400" />)}
            </div>
            <div className="space-y-3">
               <div className="flex items-center justify-center md:justify-start gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></span>
                  <span className="text-[9px] font-black uppercase text-slate-500 tracking-[0.4em]">Official Announcement</span>
               </div>
               <h2 className="text-xl font-[1000] text-slate-900 uppercase tracking-tighter leading-none">{current.title}</h2>
               <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em] max-w-lg leading-relaxed">{current.desc || 'Stay connected for the latest updates.'}</p>
            </div>
         </div>

         <div className="px-6 py-3 bg-white text-slate-950 rounded-xl font-[1000] text-[9px] uppercase tracking-widest shadow-2xl shadow-blue-900/40 relative z-10 group-hover:bg-blue-600 group-hover:text-slate-900 transition-all shrink-0">
            Access Now
         </div>
      </a>
    );
  }

  return (
    <a href={current.link.startsWith('/') || current.link.startsWith('http') ? current.link : `https://${current.link}`} 
       target="_blank" rel="noopener noreferrer" 
       className={`p-4 bg-slate-100/30 border border-slate-200/80 rounded-xl flex items-center justify-between gap-4 group hover:border-slate-300 transition-all`}>
       <div className="flex items-center gap-4">
          <div className="p-3 bg-slate-800 border border-slate-300 rounded-xl group-hover:scale-110 transition-transform">
             {current.icon || <Info size={16} className="text-slate-500"/>}
          </div>
          <div>
            <p className="text-[12px] font-black text-slate-900 uppercase truncate max-w-[150px]">{current.title}</p>
            <p className="text-[9px] font-bold text-slate-600 uppercase tracking-widest mt-0.5">Recommended Resource</p>
          </div>
       </div>
       <ExternalLink size={14} className="text-slate-800 group-hover:text-slate-900 transition-all" />
    </a>
  );
}

