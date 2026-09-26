import React, { useState, useEffect } from 'react';
import { 
  Bell, RefreshCw, Send, Copy, Check, ExternalLink, 
  Sparkles, Edit3, Save, Trash2, Eye, AlertCircle, Loader2,
  Share2, ArrowUpRight, Search, CheckCircle2, QrCode, Smartphone, X
} from 'lucide-react';

const API_BASE = window.location.hostname === 'localhost' 
  ? 'http://localhost:5000' 
  : 'https://apna-college-bihar-6.onrender.com';

const DEFAULT_CHANNEL_URL = 'https://whatsapp.com/channel/0029VbC6FsH3wtb5UEDvrW0a';

export default function AdminBeuWhatsApp({ flash, onSwitchToNotices }) {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [syncing, setSyncing] = useState(false);
  const [generatingId, setGeneratingId] = useState(null);
  const [copiedId, setCopiedId] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [editedCaption, setEditedCaption] = useState('');
  const [search, setSearch] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);
  const [channelUrl, setChannelUrl] = useState(DEFAULT_CHANNEL_URL);

  // WhatsApp Web Auto-Bot Session States
  const [botStatus, setBotStatus] = useState('DISCONNECTED'); // 'CONNECTED', 'SCAN_QR_NEEDED', 'INITIALIZING', 'DISCONNECTED'
  const [qrImage, setQrImage] = useState(null);
  const [showQrModal, setShowQrModal] = useState(false);
  const [testingPost, setTestingPost] = useState(false);

  // New Notice Manual Form
  const [newNotice, setNewNotice] = useState({
    board: '',
    noticedate: new Date().toISOString().split('T')[0],
    pdfUrl: '',
    isimportant: 0
  });

  const fetchNotices = async (isInitial = false) => {
    try {
      if (isInitial) setLoading(true);
      const res = await fetch(`${API_BASE}/api/beu/notices`);
      const data = await res.json();
      if (data.success && Array.isArray(data.notices)) {
        setNotices(data.notices);
        if (data.channelUrl) setChannelUrl(data.channelUrl);
      }
    } catch (err) {
      console.warn('Error fetching BEU notices from backend:', err.message);
    } finally {
      if (isInitial) setLoading(false);
    }
  };

  const fetchBotStatus = async () => {
    try {
      const res = await fetch(`${API_BASE}/api/beu/whatsapp-session`);
      const data = await res.json();
      if (data.success) {
        setBotStatus(data.status);
        if (data.qrImage) setQrImage(data.qrImage);
      }
    } catch (e) {}
  };

  useEffect(() => {
    fetchNotices(true);
    fetchBotStatus();
    // Live polling: updates list automatically without clicking Sync
    const noticeInterval = setInterval(() => fetchNotices(false), 6000);
    const botInterval = setInterval(fetchBotStatus, 4000);
    return () => {
      clearInterval(noticeInterval);
      clearInterval(botInterval);
    };
  }, []);

  const handleStartWhatsAppSession = async () => {
    setShowQrModal(true);
    try {
      await fetch(`${API_BASE}/api/beu/whatsapp-start`, { method: 'POST' });
      fetchBotStatus();
    } catch (e) {
      flash('Failed to start WhatsApp session: ' + e.message, 'err');
    }
  };

  const handleTestPost = async () => {
    if (!window.confirm('WhatsApp Channel me ek test message send karein?')) return;
    setTestingPost(true);
    try {
      const res = await fetch(`${API_BASE}/api/beu/whatsapp-test-post`, { method: 'POST' });
      const data = await res.json();
      if (data.success) {
        flash('Test message successfully posted to WhatsApp Channel! 🎉', 'ok');
      } else {
        flash(data.message || 'Post failed. Make sure WhatsApp is connected.', 'err');
      }
    } catch (e) {
      flash('Error: ' + e.message, 'err');
    } finally {
      setTestingPost(false);
    }
  };

  const handleAutoPostSingle = async (notice) => {
    if (!notice.whatsappCaption) {
      flash('Pehle AI Caption generate karein!', 'err');
      return;
    }
    setGeneratingId(notice.id);
    try {
      const res = await fetch(`${API_BASE}/api/beu/dispatch-whatsapp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          noticeId: notice.id,
          caption: notice.whatsappCaption,
          pdfUrl: notice.pdfUrl || notice.link,
          title: notice.title || notice.board
        })
      });
      const data = await res.json();
      if (data.success && data.result?.status === 'SENT') {
        flash(`Notice #${notice.id} successfully auto-posted to channel! 🎉`, 'ok');
      } else {
        flash(`Auto-post status: ${data.result?.status || 'PENDING'}`, 'ok');
      }
      fetchNotices();
    } catch (e) {
      flash('Error: ' + e.message, 'err');
    } finally {
      setGeneratingId(null);
    }
  };

  const handleSyncAll = async () => {
    if (!window.confirm('BEU official portal se latest notices sync karke AI WhatsApp captions generate karein?')) return;
    setSyncing(true);
    try {
      const res = await fetch(`${API_BASE}/api/beu/sync-and-broadcast`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ forceAll: false })
      });
      const data = await res.json();
      if (data.success) {
        flash(data.message || 'BEU Sync & AI pipeline completed successfully! 🚀', 'ok');
        await fetchNotices();
      } else {
        flash(data.message || 'Sync failed.', 'err');
      }
    } catch (err) {
      flash('Sync error: ' + err.message, 'err');
    } finally {
      setSyncing(false);
    }
  };

  const handleGenerateAi = async (notice) => {
    setGeneratingId(notice.id);
    try {
      const res = await fetch(`${API_BASE}/api/beu/generate-caption`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          noticeId: notice.id,
          title: notice.title || notice.board,
          pdfUrl: notice.pdfUrl || notice.link,
          date: notice.date || notice.noticedate
        })
      });
      const data = await res.json();
      if (data.success) {
        flash(`Notice #${notice.id} ke liye AI Caption generate ho gaya! ✨`, 'ok');
        setNotices(prev => prev.map(n => n.id === notice.id ? { ...n, whatsappCaption: data.caption, aiProcessed: true } : n));
      } else {
        flash(data.message || 'AI Generation failed.', 'err');
      }
    } catch (err) {
      flash('AI error: ' + err.message, 'err');
    } finally {
      setGeneratingId(null);
    }
  };

  const handleSaveCaption = async (id) => {
    try {
      const res = await fetch(`${API_BASE}/api/beu/update-caption`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ noticeId: id, caption: editedCaption })
      });
      const data = await res.json();
      if (data.success) {
        flash('Caption successfully updated! ✅', 'ok');
        setNotices(prev => prev.map(n => n.id === id ? { ...n, whatsappCaption: editedCaption } : n));
        setEditingId(null);
      } else {
        flash(data.message || 'Update failed.', 'err');
      }
    } catch (err) {
      flash('Update error: ' + err.message, 'err');
    }
  };

  const handleCopyCaption = (id, caption) => {
    if (!caption) return;
    navigator.clipboard.writeText(caption);
    setCopiedId(id);
    flash('WhatsApp Caption Clipboard me Copy ho gaya! 📋', 'ok');
    setTimeout(() => setCopiedId(null), 3000);
  };

  const handleShareToWhatsApp = (caption) => {
    if (!caption) return;
    const shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(caption)}`;
    window.open(shareUrl, '_blank');
  };

  const handleCreateNotice = async (e) => {
    e.preventDefault();
    if (!newNotice.board || !newNotice.pdfUrl) {
      flash('Title aur PDF URL zaroori hai!', 'err');
      return;
    }
    setSyncing(true);
    try {
      const fakeId = Date.now().toString().slice(-6);
      const res = await fetch(`${API_BASE}/api/beu/generate-caption`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          noticeId: fakeId,
          title: newNotice.board,
          pdfUrl: newNotice.pdfUrl,
          date: newNotice.noticedate
        })
      });
      const data = await res.json();
      flash('Notice create ho gaya aur AI caption ready hai! 🚀', 'ok');
      setShowAddForm(false);
      setNewNotice({ board: '', noticedate: new Date().toISOString().split('T')[0], pdfUrl: '', isimportant: 0 });
      fetchNotices();
    } catch (err) {
      flash('Error adding notice: ' + err.message, 'err');
    } finally {
      setSyncing(false);
    }
  };

  const filteredNotices = notices.filter(n => {
    const q = search.toLowerCase();
    const title = (n.title || n.board || '').toLowerCase();
    const caption = (n.whatsappCaption || '').toLowerCase();
    return title.includes(q) || caption.includes(q) || String(n.id).includes(q);
  });

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      
      {/* ── TOP HERO BANNER: WHATSAPP CHANNEL & AUTO-PILOT STATUS ── */}
      <div className="bg-gradient-to-br from-emerald-600 via-teal-700 to-slate-900 text-white p-6 md:p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden border border-emerald-500/20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[9px] font-black tracking-widest uppercase flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                BEU AI Auto-Broadcaster
              </span>
              
              {botStatus === 'CONNECTED' ? (
                <span className="px-3 py-1 bg-emerald-400 text-slate-950 font-black rounded-full text-[9px] uppercase flex items-center gap-1 shadow-md">
                  <CheckCircle2 size={12} /> Auto-Post Active
                </span>
              ) : (
                <span className="px-3 py-1 bg-amber-400/20 text-amber-200 border border-amber-300/30 rounded-full text-[9px] font-black uppercase flex items-center gap-1">
                  <Smartphone size={12} /> Scan QR Once to Auto-Post
                </span>
              )}

              <span className="px-3 py-1 bg-emerald-400/20 text-emerald-200 border border-emerald-300/30 rounded-full text-[9px] font-black uppercase">
                Gemini 2.5 Flash
              </span>
            </div>
            
            <h1 className="text-2xl md:text-3xl font-[1000] tracking-tight text-white uppercase">
              BEU Notification ➔ WhatsApp Channel Auto-Pilot
            </h1>
            <p className="text-xs md:text-sm text-emerald-100 font-medium max-w-2xl leading-relaxed">
              BEU पर नया नोटिस आते ही AI पूरा PDF समझकर सीधे आपके WhatsApp Channel पर बिना किसी क्लिक के अपने आप पोस्ट कर देता है।
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {botStatus !== 'CONNECTED' ? (
              <button
                onClick={handleStartWhatsAppSession}
                className="px-6 py-3.5 bg-[#25D366] hover:bg-[#1EBE5D] text-slate-950 font-black text-xs uppercase tracking-widest rounded-2xl shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
              >
                <QrCode size={16} />
                Link WhatsApp (Scan QR)
              </button>
            ) : (
              <button
                onClick={handleTestPost}
                disabled={testingPost}
                className="px-5 py-3.5 bg-emerald-500/30 hover:bg-emerald-500/40 border border-emerald-400/40 text-white font-black text-xs uppercase tracking-widest rounded-2xl shadow-md transition-all flex items-center gap-2 disabled:opacity-50"
              >
                {testingPost ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
                Test Auto-Post
              </button>
            )}

            <button
              onClick={handleSyncAll}
              disabled={syncing}
              className="px-6 py-3.5 bg-white text-emerald-800 hover:bg-emerald-50 font-black text-xs uppercase tracking-widest rounded-2xl shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2 disabled:opacity-50"
            >
              {syncing ? <Loader2 className="animate-spin" size={16} /> : <RefreshCw size={16} />}
              Sync BEU Now
            </button>

            <a
              href={channelUrl}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-3.5 bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-400/30 text-white font-bold text-xs uppercase tracking-widest rounded-2xl transition-all flex items-center gap-1.5"
            >
              <ExternalLink size={15} />
              Channel
            </a>

            {onSwitchToNotices && (
              <button
                onClick={onSwitchToNotices}
                className="px-4 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs uppercase tracking-widest rounded-2xl transition-all flex items-center gap-1.5 cursor-pointer"
                title="BEU Notice Database & Sync Section par jayein"
              >
                <Bell size={15} />
                Notice Sync & DB
              </button>
            )}
          </div>
        </div>

        {/* Channel Link Callout */}
        <div className="mt-6 pt-5 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center gap-2 text-emerald-200">
            <span className="font-bold uppercase tracking-wider text-[10px] bg-emerald-950/60 px-2.5 py-1 rounded-lg">Target Channel:</span>
            <span className="truncate max-w-md select-all text-white font-bold">{channelUrl}</span>
          </div>
          <button
            onClick={() => {
              navigator.clipboard.writeText(channelUrl);
              flash('Channel link copied! 📋', 'ok');
            }}
            className="text-[10px] text-emerald-200 hover:text-white uppercase font-black underline tracking-widest flex items-center gap-1 self-start sm:self-auto"
          >
            <Copy size={12} /> Copy Channel Link
          </button>
        </div>
      </div>

      {/* ── QR CODE SCANNER MODAL (FOR 1-TIME LINKING) ── */}
      {showQrModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-300">
          <div className="bg-white rounded-[2.5rem] max-w-md w-full p-8 shadow-2xl border border-slate-200 relative text-center space-y-6">
            <button
              onClick={() => setShowQrModal(false)}
              className="absolute right-6 top-6 p-2 rounded-xl text-slate-400 hover:text-slate-700 bg-slate-100 transition-colors"
            >
              <X size={18} />
            </button>

            <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto shadow-inner">
              <QrCode size={32} />
            </div>

            <div className="space-y-1">
              <h3 className="text-xl font-[1000] text-slate-900 uppercase tracking-tight">
                Scan QR Code Once
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                Apne phone se scan karein taaki BEU ke naye notices apne aap aapke channel me post ho sakein.
              </p>
            </div>

            {/* QR Box Container */}
            <div className="bg-slate-50 p-6 rounded-3xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center min-h-[260px]">
              {botStatus === 'CONNECTED' ? (
                <div className="space-y-3 py-6">
                  <div className="w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto shadow-lg animate-bounce">
                    <Check size={32} />
                  </div>
                  <h4 className="text-base font-black text-slate-900 uppercase">
                    🎉 WhatsApp Successfully Connected!
                  </h4>
                  <p className="text-xs text-slate-500 font-medium">
                    Ab naya notice aate hi apne aap WhatsApp Channel par post ho jayega.
                  </p>
                </div>
              ) : qrImage ? (
                <div className="space-y-4">
                  <img
                    src={qrImage}
                    alt="WhatsApp QR Code"
                    className="w-56 h-56 mx-auto rounded-2xl shadow-md border-4 border-white"
                  />
                  <div className="flex items-center justify-center gap-1.5 text-[10px] font-bold text-emerald-600 uppercase tracking-widest animate-pulse">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    Ready to Scan from Phone
                  </div>
                </div>
              ) : (
                <div className="space-y-3 py-10">
                  <Loader2 size={36} className="animate-spin text-emerald-600 mx-auto" />
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    WhatsApp Web load ho raha hai...
                  </p>
                  <p className="text-[10px] text-slate-400">QR Code 5-10 seconds me screen par aayega</p>
                </div>
              )}
            </div>

            {/* Step-by-Step Instructions */}
            <div className="text-left bg-slate-50 p-4 rounded-2xl border border-slate-100 text-[11px] text-slate-600 space-y-1 font-medium">
              <p className="font-black text-slate-900 uppercase text-[10px] tracking-wider mb-1.5">Kaise Scan Karein:</p>
              <p>1️⃣ Apne phone me WhatsApp open karein.</p>
              <p>2️⃣ <b>Settings / 3 dots (⋮)</b> par tap karein ➔ <b>Linked Devices</b>.</p>
              <p>3️⃣ <b>Link a Device</b> dabakar upar diye gaye QR Code ko scan karein.</p>
            </div>

            {botStatus === 'CONNECTED' && (
              <button
                onClick={() => setShowQrModal(false)}
                className="w-full py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs uppercase tracking-widest rounded-2xl shadow-lg transition-all"
              >
                Close & Start Auto-Pilot
              </button>
            )}
          </div>
        </div>
      )}

      {/* ── TOOLBAR: SEARCH & ADD CUSTOM NOTICE ── */}
      <div className="bg-white p-4 md:p-6 rounded-[2rem] border border-slate-200/80 shadow-md flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="relative w-full md:w-96">
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search notices, exams, branch, semester..."
            className="w-full bg-slate-50 border border-slate-200 pl-11 pr-4 py-3 rounded-xl text-xs font-bold text-slate-800 outline-none focus:border-emerald-500 transition-colors"
          />
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto justify-end">
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="px-5 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-black uppercase tracking-wider rounded-xl transition-all"
          >
            {showAddForm ? '✕ Close Form' : '➕ Manual Notice Form'}
          </button>
          <button
            onClick={fetchNotices}
            disabled={loading}
            className="p-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl transition-all"
            title="Refresh List"
          >
            <RefreshCw size={16} className={loading ? 'animate-spin' : ''} />
          </button>
        </div>
      </div>

      {/* ── ADD NOTICE FORM COLLAPSIBLE ── */}
      {showAddForm && (
        <form onSubmit={handleCreateNotice} className="bg-white p-6 md:p-8 rounded-[2rem] border border-emerald-200 shadow-xl space-y-4 animate-in slide-in-from-top-4 duration-300">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
            <Bell size={18} className="text-emerald-600" />
            <h3 className="text-xs font-black uppercase tracking-widest text-slate-800">Custom Notice Add Karein (AI Caption Auto-Generate Hoga)</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest block mb-1">Notice Title *</label>
              <input
                required
                value={newNotice.board}
                onChange={e => setNewNotice({ ...newNotice, board: e.target.value })}
                placeholder="e.g. Notice for B.Tech 4th Semester Exam Form 2026"
                className="w-full bg-slate-50 border border-slate-200 p-3 rounded-xl text-xs font-bold outline-none focus:border-emerald-500"
              />
            </div>
            <div>
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest block mb-1">PDF URL *</label>
              <input
                required
                value={newNotice.pdfUrl}
                onChange={e => setNewNotice({ ...newNotice, pdfUrl: e.target.value })}
                placeholder="https://beu-bih.ac.in/backend/...pdf"
                className="w-full bg-slate-50 border border-slate-200 p-3 rounded-xl text-xs font-bold outline-none focus:border-emerald-500"
              />
            </div>
          </div>
          <button
            type="submit"
            disabled={syncing}
            className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs uppercase tracking-widest rounded-xl transition-all shadow-lg shadow-emerald-900/20"
          >
            {syncing ? 'Processing AI...' : 'Add Notice & Generate AI Caption'}
          </button>
        </form>
      )}

      {/* ── NOTICES LIST WITH WHATSAPP CAPTIONS ── */}
      <div className="space-y-4">
        {loading && notices.length === 0 ? (
          <div className="bg-white p-12 rounded-[2rem] text-center border border-slate-200 space-y-3">
            <Loader2 size={32} className="animate-spin text-emerald-600 mx-auto" />
            <p className="text-xs font-black text-slate-500 uppercase tracking-widest">BEU Notices & AI Captions Load Ho Rahe Hain...</p>
          </div>
        ) : filteredNotices.length === 0 ? (
          <div className="bg-white p-12 rounded-[2rem] text-center border border-slate-200 space-y-2">
            <AlertCircle size={28} className="text-slate-400 mx-auto" />
            <p className="text-xs font-bold text-slate-500">Koi matching BEU notice nahi mili.</p>
          </div>
        ) : (
          filteredNotices.map((notice) => {
            const hasCaption = !!notice.whatsappCaption;
            const isEditing = editingId === notice.id;

            return (
              <div 
                key={notice.id} 
                className="bg-white rounded-[2rem] border border-slate-200/90 shadow-md hover:shadow-xl transition-all overflow-hidden"
              >
                {/* Notice Header */}
                <div className="p-6 bg-slate-50/70 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-1.5 flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-0.5 bg-slate-200 text-slate-700 text-[9px] font-black rounded-md uppercase font-mono">
                        ID: #{notice.id}
                      </span>
                      {notice.isimportant === 1 && (
                        <span className="px-2.5 py-0.5 bg-rose-100 text-rose-600 text-[9px] font-black rounded-md uppercase">
                          ⚡ Important
                        </span>
                      )}
                      <span className="text-[10px] text-slate-500 font-bold">
                        🗓️ {notice.date || notice.noticedate || 'Latest'}
                      </span>
                    </div>
                    <h3 className="text-sm md:text-base font-[900] text-slate-900 uppercase tracking-tight">
                      {notice.title || notice.board}
                    </h3>
                  </div>

                  {/* Actions for Notice */}
                  <div className="flex items-center gap-2 self-start md:self-auto">
                    {(notice.pdfUrl || notice.link) && (
                      <a
                        href={notice.pdfUrl || notice.link}
                        target="_blank"
                        rel="noreferrer"
                        className="px-3.5 py-2 bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white rounded-xl text-[10px] font-black uppercase tracking-wider transition-colors flex items-center gap-1.5"
                        title="View Official PDF"
                      >
                        <Eye size={13} /> PDF
                      </a>
                    )}

                    <button
                      onClick={() => handleGenerateAi(notice)}
                      disabled={generatingId === notice.id}
                      className="px-3.5 py-2 bg-emerald-50 text-emerald-700 hover:bg-emerald-600 hover:text-white rounded-xl text-[10px] font-black uppercase tracking-wider transition-colors flex items-center gap-1.5 disabled:opacity-50"
                      title="Generate fresh AI caption"
                    >
                      {generatingId === notice.id ? (
                        <Loader2 size={13} className="animate-spin" />
                      ) : (
                        <Sparkles size={13} />
                      )}
                      {hasCaption ? 'Re-AI' : 'Generate AI'}
                    </button>
                  </div>
                </div>

                {/* AI WhatsApp Caption Box */}
                {hasCaption ? (
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                        <span className="text-[10px] font-[1000] text-emerald-700 uppercase tracking-widest">
                          WhatsApp Channel Post Preview
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        {!isEditing ? (
                          <button
                            onClick={() => {
                              setEditingId(notice.id);
                              setEditedCaption(notice.whatsappCaption);
                            }}
                            className="text-[10px] font-bold text-slate-500 hover:text-slate-800 flex items-center gap-1 uppercase"
                          >
                            <Edit3 size={12} /> Edit
                          </button>
                        ) : (
                          <button
                            onClick={() => handleSaveCaption(notice.id)}
                            className="px-3 py-1 bg-emerald-600 text-white rounded-lg text-[10px] font-black flex items-center gap-1 uppercase"
                          >
                            <Save size={12} /> Save
                          </button>
                        )}
                      </div>
                    </div>

                    {isEditing ? (
                      <textarea
                        value={editedCaption}
                        onChange={e => setEditedCaption(e.target.value)}
                        rows={12}
                        className="w-full bg-slate-50 border-2 border-emerald-300 p-4 rounded-2xl text-xs font-mono text-slate-900 outline-none leading-relaxed"
                      />
                    ) : (
                      <div className="bg-[#f0fdf4] border border-emerald-100 rounded-2xl p-5 text-xs text-slate-800 font-sans whitespace-pre-wrap leading-relaxed shadow-inner">
                        {notice.whatsappCaption}
                      </div>
                    )}

                    {/* Action Bar for Sharing */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleShareToWhatsApp(notice.whatsappCaption)}
                          className="px-5 py-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-black text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-emerald-500/20 active:scale-95 transition-all flex items-center gap-2"
                        >
                          <Share2 size={16} />
                          Share on WhatsApp
                        </button>

                        {botStatus === 'CONNECTED' && (
                          <button
                            onClick={() => handleAutoPostSingle(notice)}
                            disabled={generatingId === notice.id}
                            className="px-4 py-3 bg-emerald-700 hover:bg-emerald-600 text-white font-black text-xs uppercase tracking-wider rounded-xl shadow-lg active:scale-95 transition-all flex items-center gap-1.5 disabled:opacity-50"
                            title="Directly post this message to Apna College Bihar channel via bot"
                          >
                            {generatingId === notice.id ? <Loader2 size={15} className="animate-spin" /> : <Send size={15} />}
                            Auto-Post to Channel
                          </button>
                        )}

                        <button
                          onClick={() => handleCopyCaption(notice.id, notice.whatsappCaption)}
                          className={`px-4 py-3 rounded-xl text-xs font-black uppercase tracking-wider border transition-all flex items-center gap-2 ${
                            copiedId === notice.id
                              ? 'bg-emerald-600 text-white border-emerald-600'
                              : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200'
                          }`}
                        >
                          {copiedId === notice.id ? <Check size={16} /> : <Copy size={16} />}
                          {copiedId === notice.id ? 'Copied!' : 'Copy Post'}
                        </button>
                      </div>

                      <span className="text-[10px] text-slate-400 font-medium">
                        ✨ Auto-formatted with Dates, Fees & Official Links
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="p-6 bg-amber-50/50 border-t border-amber-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <AlertCircle size={20} className="text-amber-500 shrink-0" />
                      <p className="text-xs font-bold text-amber-800">
                        Is notice ke liye AI WhatsApp caption abhi tak generate nahi hua hai.
                      </p>
                    </div>
                    <button
                      onClick={() => handleGenerateAi(notice)}
                      disabled={generatingId === notice.id}
                      className="px-4 py-2.5 bg-amber-500 hover:bg-amber-400 text-white text-xs font-black uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center gap-2 whitespace-nowrap"
                    >
                      {generatingId === notice.id ? <Loader2 size={14} className="animate-spin" /> : <Sparkles size={14} />}
                      Generate Caption Now
                    </button>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

    </div>
  );
}
