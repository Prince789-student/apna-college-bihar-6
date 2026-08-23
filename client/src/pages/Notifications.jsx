import React, { useState, useEffect } from 'react';
import { collection, onSnapshot, query, doc, deleteDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { Calendar, ArrowUpRight, Search, FileText, Trash2, Pencil } from 'lucide-react';
import SEO from '../components/SEO';
import { useAuth } from '../context/AuthContext';

export default function Notifications() {
  const { user } = useAuth();
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const qNotices = query(collection(db, 'beu_notifications'));
    const unsub = onSnapshot(qNotices, (snap) => {
      const data = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      // Sort client-side by date descending
      const parseDate = (d) => {
        if (!d) return 0;
        if (d.includes('-')) return new Date(d).getTime();
        const p = d.split('/');
        if (p.length === 3) return new Date(`${p[2]}-${p[1]}-${p[0]}`).getTime();
        return new Date(d).getTime();
      };
      data.sort((a, b) => {
        const tA = parseDate(a.date || a.noticedate);
        const tB = parseDate(b.date || b.noticedate);
        if (tA === tB) {
            const tsA = a.timestamp?.seconds || 0;
            const tsB = b.timestamp?.seconds || 0;
            return tsB - tsA;
        }
        return tB - tA;
      });
      setNotices(data);
      setLoading(false);
    }, (error) => {
      console.error('Firestore error:', error);
      setLoading(false);
    });

    return () => unsub();
  }, []);

  const handleEditNotice = async (notice, e) => {
    e.preventDefault();
    e.stopPropagation();
    const newTitle = window.prompt("Enter new title:", notice.title || notice.board);
    if (!newTitle) return;
    const newUrl = window.prompt("Enter new PDF URL:", notice.pdfUrl || notice.link);
    if (!newUrl) return;

    try {
      await updateDoc(doc(db, 'beu_notifications', notice.id), {
        board: newTitle,
        pdfUrl: newUrl
      });
      alert('Notice updated successfully!');
    } catch (err) {
      alert('Error updating notice: ' + err.message);
    }
  };

  const handleDeleteNotice = async (notice, e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!window.confirm(`Are you sure you want to delete "${notice.title || notice.board}"?`)) return;
    try {
      await deleteDoc(doc(db, 'beu_notifications', notice.id));
      alert('Notice deleted successfully!');
    } catch (err) {
      alert('Error deleting notice: ' + err.message);
    }
  };

  const filteredNotices = notices.filter(n => 
    (n.title || n.board || '').toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50 font-['Inter'] pb-20 md:pb-10 pt-6 px-4 md:px-8">
      <SEO 
        title="BEU Notifications | Apna College Bihar" 
        description="View the latest official notifications and updates from Bihar Engineering University (BEU)." />

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
                      <div className="flex items-center text-[11px] font-bold text-slate-500 uppercase tracking-widest mt-4">
                        <Calendar size={12} /> {notice.date || notice.noticedate ? (notice.date?.includes('/') ? notice.date : new Date(notice.date || notice.noticedate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })) : 'Unknown Date'}
                      </div>
                    </div>
                    <h3 className="text-sm font-bold text-slate-800 leading-snug group-hover:text-indigo-600 transition-colors line-clamp-3 pr-16">
                      {notice.title || notice.board}
                    </h3>
                  </div>
                  <div className="hidden md:flex w-10 h-10 shrink-0 bg-slate-50 text-slate-400 group-hover:bg-blue-600 group-hover:text-white rounded-xl items-center justify-center transition-all">
                    <ArrowUpRight size={18} />
                  </div>
                </div>

                {/* Admin Actions */}
                {(user?.role === 'SUPER_ADMIN' || user?.role === 'ADMIN') && (
                  <div className="absolute top-4 right-4 flex gap-2 z-20">
                     <button onClick={(e) => handleEditNotice(notice, e)} className="p-1.5 bg-blue-50 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition-all"><Pencil size={14} /></button>
                     <button onClick={(e) => handleDeleteNotice(notice, e)} className="p-1.5 bg-red-50 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition-all"><Trash2 size={14} /></button>
                  </div>
                )}
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
