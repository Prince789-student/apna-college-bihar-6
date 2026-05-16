import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, Shield, AlertTriangle, Trash2, CheckCircle2, User, LogIn } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { doc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { getAuth, deleteUser } from 'firebase/auth';

export default function DeleteAccount() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [loading, setLoading] = useState(false);
  const [emailInput, setEmailInput] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleDeleteActiveAccount = async () => {
    if (!window.confirm("WARNING: This will permanently delete your Apna College Bihar account, study history, and profile. This action cannot be undone. Proceed?")) {
      return;
    }

    setLoading(true);
    setError('');
    try {
      const auth = getAuth();
      const currentUser = auth.currentUser;
      if (currentUser) {
        // Delete user doc from firestore
        await deleteDoc(doc(db, 'users', currentUser.uid));
        // Delete user auth account
        await deleteUser(currentUser);
        // Logout state
        await logout();
        setSubmitted(true);
      } else {
        setError("Session expired. Please log in again to delete your account directly.");
      }
    } catch (err) {
      console.error("Account deletion error:", err);
      if (err.code === 'auth/requires-recent-login') {
        setError("For security reasons, please log out and log back in before deleting your account.");
      } else {
        setError("Failed to delete account directly: " + err.message + ". You can submit a deletion request below.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleRequestSubmit = (e) => {
    e.preventDefault();
    if (!emailInput || !emailInput.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#0a0f1d] text-white font-['Inter'] selection:bg-blue-500/30 pb-24">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-[#0a0f1d]/90 backdrop-blur-xl border-b border-white/10 px-6 py-4 flex items-center justify-between shadow-2xl">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group">
          <div className="p-2 bg-white/5 group-hover:bg-blue-600/20 border border-white/10 rounded-xl transition-all">
            <ChevronLeft size={20} className="text-blue-400" />
          </div>
          <span className="text-[10px] font-black uppercase tracking-widest">Back</span>
        </button>
        <div className="flex items-center gap-3">
          <img src="/logo-acb.png?v=99" alt="ACB Logo" className="w-8 h-8 rounded-xl border border-white/10 shadow-lg object-cover" />
          <span className="text-[10px] font-black tracking-tighter uppercase text-slate-200">ACB Hub</span>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-xl mx-auto px-6 pt-12 space-y-8 animate-in fade-in duration-500">
        {/* Title Section */}
        <div className="text-center space-y-4">
          <div className="inline-flex p-4 bg-red-600/10 border border-red-500/20 text-red-400 rounded-3xl shadow-2xl mb-2">
            <AlertTriangle size={36} />
          </div>
          <p className="text-[10px] font-black text-red-400 uppercase tracking-[0.4em]">Google Play Compliance</p>
          <h1 className="text-3xl md:text-4xl font-[1000] text-white tracking-tighter uppercase leading-none">Account Deletion Portal</h1>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest max-w-lg mx-auto leading-relaxed pt-1">
            Permanent Data & Account Deletion Request
          </p>
        </div>

        {submitted ? (
          <div className="bg-[#0d1526] border border-emerald-500/30 rounded-[2.5rem] p-8 md:p-10 text-center space-y-6 shadow-2xl animate-in zoom-in-95">
            <div className="w-16 h-16 bg-emerald-600/20 text-emerald-400 rounded-[2rem] flex items-center justify-center mx-auto">
              <CheckCircle2 size={32} />
            </div>
            <h2 className="text-2xl font-[1000] uppercase tracking-tighter text-white">Request Processed Successfully</h2>
            <p className="text-xs font-medium text-slate-300 leading-relaxed max-w-sm mx-auto">
              Your Apna College Bihar account and all associated study data have been scheduled for permanent removal from our active servers within 24-48 hours.
            </p>
            <Link to="/" className="inline-block px-8 py-4 bg-blue-600 text-white font-black text-xs uppercase tracking-widest rounded-2xl shadow-xl active:scale-95 transition-all">
              Return to Home
            </Link>
          </div>
        ) : (
          <div className="bg-[#0d1526] border border-white/10 rounded-[2.5rem] p-8 md:p-10 shadow-2xl space-y-8">
            <div className="space-y-3">
              <h2 className="text-lg font-[1000] uppercase tracking-tight text-white flex items-center gap-2">
                <Shield size={20} className="text-red-400" /> Data Safety Guarantee
              </h2>
              <p className="text-xs font-medium text-slate-300 leading-relaxed">
                In compliance with Google Play Store Data Safety guidelines, you can instantly terminate your Apna College Bihar account. This deletes your profile, study timer logs, streak counts, and BEU CGPA records.
              </p>
            </div>

            {error && (
              <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-2xl text-red-400 text-xs font-bold leading-relaxed">
                {error}
              </div>
            )}

            {user ? (
              <div className="space-y-6 p-6 bg-[#152036] border border-white/5 rounded-3xl">
                <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                  <div className="w-12 h-12 bg-blue-600/20 text-blue-400 rounded-2xl flex items-center justify-center font-bold text-lg">
                    <User size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-black text-white uppercase tracking-wider">Active Scholar</p>
                    <p className="text-[10px] text-slate-400 font-bold truncate max-w-[200px]">{user.email}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="text-[10px] font-bold text-red-400 uppercase tracking-wider">Instant Account Removal</p>
                  <button
                    onClick={handleDeleteActiveAccount}
                    disabled={loading}
                    className="w-full py-4 bg-red-600 hover:bg-red-500 text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl flex items-center justify-center gap-2 transition-all active:scale-95 disabled:opacity-50"
                  >
                    <Trash2 size={16} /> {loading ? "Terminating Account..." : "Permanently Delete My Account"}
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="p-6 bg-blue-600/10 border border-blue-500/20 rounded-3xl flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold text-slate-200">Have an active session?</p>
                    <p className="text-[10px] text-slate-400">Log in to instantly delete your account directly.</p>
                  </div>
                  <Link to="/login" className="px-5 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-black text-[10px] uppercase tracking-widest flex items-center gap-1.5 transition-all shadow-lg shrink-0">
                    <LogIn size={14} /> Log In
                  </Link>
                </div>

                <form onSubmit={handleRequestSubmit} className="space-y-4 pt-2">
                  <p className="text-xs font-bold text-slate-300">Or submit your registered email for manual deletion:</p>
                  <input
                    type="email"
                    required
                    placeholder="student@gmail.com"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    className="w-full bg-[#152036] border border-white/10 rounded-2xl px-5 py-4 text-sm font-bold text-white outline-none focus:border-blue-500 transition-all"
                  />
                  <button
                    type="submit"
                    className="w-full py-4 bg-red-600 hover:bg-red-500 text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl flex items-center justify-center gap-2 transition-all active:scale-95"
                  >
                    <Trash2 size={16} /> Submit Deletion Request
                  </button>
                </form>
              </div>
            )}
          </div>
        )}

        {/* Footer info */}
        <div className="text-center pt-8 border-t border-white/10 space-y-3">
          <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">GEC SHEIKHPURA - APNA COLLEGE BIHAR</p>
          <p className="text-[9px] font-bold text-slate-600">All data removal requests are processed within strict GDPR/Play Store compliance windows.</p>
        </div>
      </div>
    </div>
  );
}
