import React, { useState, useEffect } from 'react';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import { db } from '../firebase';
import { Calendar, ArrowUpRight, Search, FileText } from 'lucide-react';
import SEO from '../components/SEO';

export default function Notifications() {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const qNotices = query(collection(db, 'beu_notifications'), orderBy('noticedate', 'desc'));
    const unsub = onSnapshot(qNotices, (snap) => {
      setNotices(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      setLoading(false);
    });

    return () => unsub();
  }, []);

  const filteredNotices = notices.filter(n => 
    n.board.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50 font-['Inter'] pb-20 md:pb-10 pt-6 px-4 md:px-8">
      <SEO 
        title="BEU Notifications | Apna College Bihar" 
        description="View the latest official notifications and updates from Bihar Engineering University (BEU)." 
       url={window.location.href} />

      <div className="max-w-5xl mx-auto space-y-6">
        
        {/* Header */}
        <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-6 items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center shadow-inner">
              <span className="text-3xl">🔥</span>
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-[1000] tracking-tighter uppercase text-slate-900">
                BEU Notifications
              </h1>
              <p className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">
                Official Updates • Results • Exam Schedules
              </p>
            </div>
          </div>
          
          <div className="w-full md:w-auto relative">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search notifications..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full md:w-80 pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all placeholder:text-slate-400"
            />
          </div>
        </div>

        {/* Notices List */}
        <div className="grid grid-cols-1 gap-4">
          {loading ? (
            <div className="flex items-center justify-center p-20 text-slate-400">
              <div className="w-8 h-8 border-4 border-slate-200 border-t-blue-600 rounded-full animate-spin"></div>
            </div>
          ) : filteredNotices.length > 0 ? (
            filteredNotices.map((notice) => (
              <a
                key={notice.id}
                href={notice.pdfUrl || `https://beu-bih.ac.in/backend/${encodeURIComponent(notice.link)}`}
                target="_blank"
                rel="noreferrer"
                className="block p-5 bg-white border border-slate-200 hover:border-blue-400 rounded-2xl shadow-sm hover:shadow-lg transition-all group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="flex items-start gap-4 md:gap-5 relative z-10">
                  <div className="w-12 h-12 shrink-0 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shadow-sm">
                    <FileText size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      {notice.isimportant === 1 && (
                        <span className="px-2 py-1 bg-red-600 text-white text-[9px] font-black uppercase tracking-widest rounded-md animate-pulse">Important</span>
                      )}
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1">
                        <Calendar size={12} /> {new Date(notice.noticedate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                      </span>
                    </div>
                    <h3 className="text-sm md:text-base font-bold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors">
                      {notice.board}
                    </h3>
                  </div>
                  <div className="hidden md:flex w-10 h-10 shrink-0 bg-slate-50 text-slate-400 group-hover:bg-blue-600 group-hover:text-white rounded-xl items-center justify-center transition-all">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </a>
            ))
          ) : (
            <div className="p-10 text-center bg-white border border-slate-200 rounded-3xl">
              <span className="text-4xl mb-4 block">🔍</span>
              <p className="text-slate-500 font-bold uppercase tracking-widest text-[11px]">No notifications found matching "{searchQuery}"</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
