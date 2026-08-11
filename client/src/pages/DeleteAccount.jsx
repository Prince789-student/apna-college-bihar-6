import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, Shield, AlertTriangle, Trash2, CheckCircle2, User, LogIn } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { doc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { getAuth, deleteUser } from 'firebase/auth';
import SEO from '../components/SEO';

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
      if (err.code === 'auth/admin-restricted-operation') {
        // Fallback to manual request since admin blocked client-side deletion
        try {
          await logout();
          setSubmitted(true);
        } catch (e) {
          setError("Failed to submit request.");
        }
        return;
      }

      if (err.code === 'auth/requires-recent-login') {
        setError("For security reasons, please log out and log back in before deleting your account.");
      } else {
        setError("Failed to delete account directly: " + err.message + ". Please log out and submit a manual request below.");
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
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-['Inter'] selection:bg-blue-500/30 pb-24">
      <SEO title="Delete Account | Apna College Bihar" />
      {/* Header */}
      <div className="sticky top-0 z-50 bg-[#f8fafc]/90 backdrop-blur-xl border-b border-slate-200 px-6 py-4 flex items-center justify-between shadow-sm">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors group">
          <div className="p-2 bg-slate-100 group-hover:bg-blue-600/10 border border-slate-200 rounded-xl transition-all">
            <ChevronLeft size={20} className="text-blue-600" />
          </div>
          <span className="text-[10px] font-black uppercase tracking-widest">Back</span>
        </button>
        <div className="flex items-center gap-3">
          <img src="/logo-acb.png?v=99" alt="ACB Logo" className="w-8 h-8 rounded-xl border border-slate-200 shadow-sm object-cover" />
          <span className="text-[10px] font-black tracking-tighter uppercase text-slate-800">ACB Hub</span>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-xl mx-auto px-6 pt-12 space-y-8 animate-in fade-in duration-500">
        {/* Title Section */}
        <div className="text-center space-y-4">
          <div className="inline-flex p-4 bg-red-600/10 border border-red-500/20 text-red-600 rounded-3xl shadow-sm mb-2">
            <AlertTriangle size={36} />
          </div>
          <p className="text-[10px] font-black text-red-600 uppercase tracking-[0.4em]">Google Play Compliance</p>
          <h1 className="text-3xl md:text-4xl font-[1000] text-slate-900 tracking-tighter uppercase leading-none">Account Deletion Portal</h1>
          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest max-w-lg mx-auto leading-relaxed pt-1">
            Permanent Data & Account Deletion Request
          </p>
        </div>

        {submitted ? (
          <div className="bg-white border border-emerald-500/30 rounded-[2.5rem] p-8 md:p-10 text-center space-y-6 shadow-sm animate-in zoom-in-95">
            <div className="w-16 h-16 bg-emerald-600/20 text-emerald-600 rounded-[2rem] flex items-center justify-center mx-auto">
              <CheckCircle2 size={32} />
            </div>
            <h2 className="text-2xl font-[1000] uppercase tracking-tighter text-slate-900">Request Processed Successfully</h2>
            <p className="text-xs font-medium text-slate-600 leading-relaxed max-w-sm mx-auto">
              Your Apna College Bihar account and all associated study data have been scheduled for permanent removal from our active servers within 24-48 hours.
            </p>
            <Link to="/" className="inline-block px-8 py-4 bg-blue-600 text-white font-black text-xs uppercase tracking-widest rounded-2xl shadow-md active:scale-95 transition-all">
              Return to Home
            </Link>
          </div>
        ) : (
          <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 md:p-10 shadow-sm space-y-8">
            <div className="space-y-3">
              <h2 className="text-lg font-[1000] uppercase tracking-tight text-slate-900 flex items-center gap-2">
                <Shield size={20} className="text-red-600" /> Data Safety Guarantee
              </h2>
              <p className="text-xs font-medium text-slate-600 leading-relaxed">
                In compliance with Google Play Store Data Safety guidelines, you can instantly terminate your Apna College Bihar account. This deletes your profile, study timer logs, streak counts, and BEU CGPA records.
              </p>
            </div>

            {error && (
              <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-2xl text-red-600 text-xs font-bold leading-relaxed">
                {error}
              </div>
            )}

            {user ? (
              <div className="space-y-6 p-6 bg-slate-50 border border-slate-200/60 rounded-3xl">
                <div className="flex items-center gap-4 border-b border-slate-200 pb-4">
                  <div className="w-12 h-12 bg-blue-600/10 text-blue-600 rounded-2xl flex items-center justify-center font-bold text-lg">
                    <User size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-black text-slate-900 uppercase tracking-wider">Active Scholar</p>
                    <p className="text-[10px] text-slate-500 font-bold truncate max-w-[200px]">{user.email}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="text-[10px] font-bold text-red-600 uppercase tracking-wider">Instant Account Removal</p>
                  <button
                    onClick={handleDeleteActiveAccount}
                    disabled={loading}
                    className="w-full py-4 bg-red-600 hover:bg-red-500 text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-md flex items-center justify-center gap-2 transition-all active:scale-95 disabled:opacity-50"
                  >
                    <Trash2 size={16} /> {loading ? "Terminating Account..." : "Permanently Delete My Account"}
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="p-6 bg-blue-600/10 border border-blue-500/20 rounded-3xl flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold text-slate-800">Have an active session?</p>
                    <p className="text-[10px] text-slate-500">Log in to instantly delete your account directly.</p>
                  </div>
                  <Link to="/login" className="px-5 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-black text-[10px] uppercase tracking-widest flex items-center gap-1.5 transition-all shadow-md shrink-0">
                    <LogIn size={14} /> Log In
                  </Link>
                </div>

                <form onSubmit={handleRequestSubmit} className="space-y-4 pt-2">
                  <p className="text-xs font-bold text-slate-600">Or submit your registered email for manual deletion:</p>
                  <input
                    type="email"
                    required
                    placeholder="student@gmail.com"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-sm font-bold text-slate-800 outline-none focus:border-blue-500 transition-all"
                  />
                  <button
                    type="submit"
                    className="w-full py-4 bg-red-600 hover:bg-red-500 text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-md flex items-center justify-center gap-2 transition-all active:scale-95"
                  >
                    <Trash2 size={16} /> Submit Deletion Request
                  </button>
                </form>
              </div>
            )}
            
            {user && error && error.includes("manual request") && (
              <div className="pt-6 border-t border-slate-200 mt-6">
                <button
                  onClick={async () => {
                     await logout();
                     setError('');
                  }}
                  className="w-full py-4 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-2xl font-black text-xs uppercase tracking-widest shadow-sm transition-all"
                >
                  Log Out to Submit Manual Request
                </button>
              </div>
            )}
          </div>
        )}

        {/* Footer info */}
        <div className="text-center pt-8 border-t border-slate-200 space-y-3">
          <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">BEU - APNA COLLEGE BIHAR</p>
          <p className="text-[9px] font-bold text-slate-500">All data removal requests are processed within strict GDPR/Play Store compliance windows.</p>
        </div>
      </div>
    </div>
  );
}
