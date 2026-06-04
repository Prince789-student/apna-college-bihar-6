import React, { useState, useEffect, useMemo } from 'react';
import { collection, onSnapshot, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../context/AuthContext';
import { 
  Link2, Plus, AlertCircle, Share2, Globe, BookOpen, ExternalLink, Search, X, Loader2
} from 'lucide-react';
import SEO from '../components/SEO';

export default function StudyResources() {
  const { user } = useAuth();
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  
  // Share modal state
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ title: '', url: '', description: '' });
  const [sharing, setSharing] = useState(false);
  const [flashMsg, setFlashMsg] = useState(null);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, 'studyResources'), (snap) => {
      setResources(snap.docs.map(d => ({ id: d.id, ...d.data() })));
      setLoading(false);
    });
    return unsub;
  }, []);

  const flash = (text, type = 'ok') => {
    setFlashMsg({ text, type });
    setTimeout(() => setFlashMsg(null), 4000);
  };

  const handleShare = async (e) => {
    e.preventDefault();
    if (!formData.title || !formData.url || !formData.description) {
      flash('Bhai, sabhi details bharna zaroori hai!', 'err');
      return;
    }
    
    // Simple URL validation
    if (!formData.url.startsWith('http://') && !formData.url.startsWith('https://')) {
      flash('Kripya ek valid URL link enter karein (https://...)', 'err');
      return;
    }

    setSharing(true);
    try {
      await addDoc(collection(db, 'studyResources'), {
        title: formData.title.toUpperCase(),
        url: formData.url.trim(),
        description: formData.description.trim(),
        verified: false,
        uploadedBy: user?.email || 'Guest Student',
        createdAt: serverTimestamp() || new Date().toISOString()
      });
      
      setFormData({ title: '', url: '', description: '' });
      setShowModal(false);
      flash('Resource bhej diya gaya hai! Admin verification ke baad ye live ho jayega. ✅');
    } catch (err) {
      console.error(err);
      flash('Submission failed: ' + err.message, 'err');
    } finally {
      setSharing(false);
    }
  };

  // Filter resources
  const activeResources = useMemo(() => {
    return resources.filter(r => r.verified === true);
  }, [resources]);

  const userPendingResources = useMemo(() => {
    if (!user?.email) return [];
    return resources.filter(r => r.verified === false && r.uploadedBy === user.email);
  }, [resources, user]);

  const filteredResources = useMemo(() => {
    if (!search.trim()) return activeResources;
    return activeResources.filter(r => 
      r.title?.toLowerCase().includes(search.toLowerCase()) ||
      r.description?.toLowerCase().includes(search.toLowerCase())
    );
  }, [activeResources, search]);

  const handleCopyLink = (url) => {
    navigator.clipboard.writeText(url);
    flash('Link copied to clipboard! 📋');
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-40 gap-4">
        <Loader2 className="w-12 h-12 text-indigo-500 animate-spin" />
        <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest animate-pulse">Loading Study Resources...</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 pb-24 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <SEO 
        title="Study Resources | Apna College Bihar"
        description="Access and share verified study materials, links, and guides for Bihar Engineering University students."
        url="https://www.apnacollegebihar.online/dashboard/study-resources"
      />
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-[#f8fafc] p-6 border border-slate-200/80 rounded-[2rem] shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-cyan-600/5 rounded-full blur-[80px] pointer-events-none"></div>
        <div className="flex items-center gap-4 relative z-10">
          <div className="p-3 bg-cyan-600/10 text-cyan-600 rounded-2xl">
            <Link2 size={24} />
          </div>
          <div>
            <h1 className="text-2xl font-[1000] text-slate-900 tracking-tighter uppercase leading-[0.8]">Study Resource</h1>
            <p className="text-[9px] text-slate-500 font-black uppercase tracking-[0.3em] mt-2">Shared Knowledge Hub</p>
          </div>
        </div>
        <button 
          onClick={() => setShowModal(true)}
          className="px-5 py-3.5 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl text-[10px] font-black uppercase tracking-widest transition-all active:scale-95 shadow-lg shadow-cyan-900/10 flex items-center gap-2"
        >
          <Plus size={14} /> Share Resource
        </button>
      </div>

      {flashMsg && (
        <div className={`p-4 rounded-2xl border flex items-center gap-3 animate-in zoom-in duration-300 ${flashMsg.type === 'ok' ? 'bg-emerald-600/10 text-emerald-600 border-emerald-200' : 'bg-red-600/10 text-red-600 border-red-200'}`}>
          <AlertCircle size={18} />
          <span className="text-[11px] font-black uppercase tracking-wider">{flashMsg.text}</span>
        </div>
      )}

      {/* Search Filter */}
      <div className="relative group">
        <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-cyan-500 transition-colors" size={18} />
        <input 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by topic, resource name, or details..."
          className="w-full bg-[#f8fafc]/50 border-2 border-slate-200 focus:border-cyan-500/50 rounded-2xl p-4.5 pl-14 text-slate-900 text-sm font-semibold outline-none transition-all"
        />
      </div>

      {/* User's Pending Submissions */}
      {userPendingResources.length > 0 && (
        <div className="bg-amber-500/5 border-2 border-dashed border-amber-500/20 p-6 rounded-[2rem] space-y-4 animate-in slide-in-from-top-4">
          <div className="flex items-center gap-2 text-amber-600">
            <AlertCircle size={16} />
            <h3 className="text-[10px] font-black uppercase tracking-widest">Aapke Submissions (Verification Pending)</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {userPendingResources.map(r => (
              <div key={r.id} className="bg-white p-5 rounded-2xl border border-amber-500/10 shadow-sm flex flex-col justify-between">
                <div>
                  <h4 className="text-xs font-black text-slate-900 uppercase tracking-tight">{r.title}</h4>
                  <p className="text-[10px] text-slate-500 mt-1 line-clamp-2 leading-relaxed">{r.description}</p>
                </div>
                <span className="inline-block mt-3 text-[7px] font-black bg-amber-500/10 text-amber-500 px-2 py-0.5 rounded uppercase tracking-wider w-fit">
                  Awaiting Verification
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Active Resource Grid */}
      {filteredResources.length === 0 ? (
        <div className="py-24 text-center bg-slate-50 rounded-[2.5rem] border border-dashed border-slate-200">
          <BookOpen size={40} className="mx-auto text-slate-300 mb-4" />
          <h3 className="text-slate-800 font-black text-base uppercase tracking-tight">No Resources Found</h3>
          <p className="text-slate-400 text-xs font-bold mt-1">Upar button dabakar koi naya resource share karein.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredResources.map(r => (
            <div 
              key={r.id}
              className="bg-white rounded-[2.5rem] border border-slate-200/80 p-7 hover:border-cyan-300/50 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group shadow-sm"
            >
              <div className="space-y-3.5">
                <div className="flex justify-between items-start gap-4">
                  <div className="w-12 h-12 bg-cyan-600/10 text-cyan-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Globe size={22} />
                  </div>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => handleCopyLink(r.url)}
                      className="p-2 bg-slate-50 hover:bg-cyan-600/10 text-slate-400 hover:text-cyan-600 rounded-xl transition-all border border-slate-200/60"
                      title="Copy URL"
                    >
                      <Share2 size={13} />
                    </button>
                    <a 
                      href={r.url} 
                      target="_blank" 
                      rel="noreferrer"
                      className="p-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl transition-all shadow-md inline-flex items-center justify-center"
                      title="Open Resource"
                    >
                      <ExternalLink size={13} />
                    </a>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-base font-[900] text-slate-900 uppercase tracking-tight leading-tight group-hover:text-cyan-600 transition-colors">
                    {r.title}
                  </h3>
                  <p className="text-[10px] text-slate-400 font-bold flex items-center gap-1">
                    Shared by: <span className="text-slate-700 font-black truncate max-w-[120px]">{r.uploadedBy || 'Student'}</span>
                  </p>
                </div>

                <p className="text-xs text-slate-500 leading-relaxed font-medium line-clamp-3">
                  {r.description}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between text-[8px] font-black text-slate-400 uppercase tracking-widest">
                <span>Verified Asset</span>
                <span className="text-cyan-600 bg-cyan-600/5 px-2 py-0.5 rounded-full border border-cyan-500/10">Active</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Share Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-300">
          <div className="bg-white w-full max-w-md rounded-[3rem] border border-slate-200 p-8 space-y-6 shadow-3xl animate-in zoom-in-95 duration-300">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-[1000] text-slate-900 uppercase tracking-tighter">Share Resource</h2>
                <p className="text-[8px] text-slate-400 font-black uppercase tracking-widest mt-1">Submit helpful learning links to other students</p>
              </div>
              <button 
                onClick={() => setShowModal(false)}
                className="p-3 bg-slate-100 hover:bg-slate-200 rounded-2xl text-slate-500 transition-all"
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleShare} className="space-y-4">
              <div className="space-y-1">
                <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">Resource Name / Title</label>
                <input 
                  type="text" 
                  required 
                  value={formData.title} 
                  onChange={e => setFormData({...formData, title: e.target.value})} 
                  placeholder="e.g. JAVA OOPs COMPLETE CHEATSHEET" 
                  className="w-full bg-slate-100 border border-slate-200 rounded-2xl p-4 text-slate-900 text-xs font-bold outline-none focus:border-cyan-500 transition-all" 
                />
              </div>

              <div className="space-y-1">
                <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">Resource Link / URL</label>
                <input 
                  type="url" 
                  required 
                  value={formData.url} 
                  onChange={e => setFormData({...formData, url: e.target.value})} 
                  placeholder="e.g. https://github.com/user/java-oops" 
                  className="w-full bg-slate-100 border border-slate-200 rounded-2xl p-4 text-slate-900 text-xs font-bold outline-none focus:border-cyan-500 transition-all" 
                />
              </div>

              <div className="space-y-1">
                <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">About / Description</label>
                <textarea 
                  required 
                  value={formData.description} 
                  onChange={e => setFormData({...formData, description: e.target.value})} 
                  placeholder="Describe what this resource contains and why it is useful for semester prep..." 
                  rows={4}
                  className="w-full bg-slate-100 border border-slate-200 rounded-2xl p-4 text-slate-900 text-xs font-bold outline-none focus:border-cyan-500 transition-all resize-none leading-relaxed" 
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button 
                  type="button" 
                  onClick={() => setShowModal(false)} 
                  className="flex-1 py-4 bg-slate-100 text-slate-700 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-200 transition-all active:scale-95"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  disabled={sharing} 
                  className="flex-1 py-4 bg-cyan-600 hover:bg-cyan-500 text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-lg shadow-cyan-900/20 transition-all active:scale-95 flex items-center justify-center gap-2"
                >
                  {sharing ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" /> Submitting...
                    </>
                  ) : (
                    'Submit'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
