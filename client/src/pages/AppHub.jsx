import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  BookOpen, GraduationCap, Timer, Users, Calculator, UserCheck,
  Calendar, LogIn, LogOut, MessageCircle, Youtube, User, Trash2, ShieldCheck,
  ExternalLink, Briefcase, Award, Landmark, FileText, Library, Link2,
  ArrowRight, Compass, Target, Globe, Sparkles
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import SEO from '../components/SEO';
import Footer from '../components/Footer';
import DonateModal from '../components/DonateModal';
import { collection, query, limit, onSnapshot, doc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase';

export default function AppHub() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showDonate, setShowDonate] = useState(false);
  const [beuNotices, setBeuNotices] = useState([]);

  React.useEffect(() => {
    let isMounted = true;
    const apiBase = window.location.hostname === 'localhost' ? 'http://localhost:5000' : '';

    const parseDate = (d) => {
      if (!d) return 0;
      if (typeof d === 'string' && d.includes('-')) return new Date(d).getTime() || 0;
      if (typeof d === 'string') {
        const p = d.split('/');
        if (p.length === 3) return new Date(`${p[2]}-${p[1]}-${p[0]}`).getTime() || 0;
      }
      return new Date(d).getTime() || 0;
    };

    const sortNotices = (data) => {
      return [...data].sort((a, b) => {
        const tA = parseDate(a.date || a.noticedate);
        const tB = parseDate(b.date || b.noticedate);
        if (tA === tB) {
          const tsA = a.timestamp?.seconds || 0;
          const tsB = b.timestamp?.seconds || 0;
          return tsB - tsA;
        }
        return tB - tA;
      });
    };

    fetch(`${apiBase}/api/beu/notices`)
      .then(res => res.json())
      .then(data => {
        if (!isMounted) return;
        if (data.success && Array.isArray(data.notices) && data.notices.length > 0) {
          setBeuNotices(sortNotices(data.notices).slice(0, 3));
        }
      })
      .catch(() => {});

    const qNotices = query(collection(db, 'beu_notifications'), limit(50));
    const unsubNotices = onSnapshot(qNotices, (snap) => {
      if (!isMounted) return;
      if (!snap.empty) {
        const data = snap.docs.map(d => ({ id: d.id, ...d.data() }));
        setBeuNotices(sortNotices(data).slice(0, 3));
      }
    }, () => {});

    return () => {
      isMounted = false;
      unsubNotices();
    };
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
      setShowProfileMenu(false);
      navigate('/');
    } catch (err) {
      console.error('Logout failed:', err);
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

  const joinDate = user?.metadata?.creationTime
    ? new Date(user.metadata.creationTime).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
    : 'Recently';

  const [attendanceStats, setAttendanceStats] = useState(null);

  React.useEffect(() => {
    if (!user) {
      setAttendanceStats(null);
      return;
    }
    const unsub = onSnapshot(doc(db, 'users', user.uid), (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        if (Array.isArray(data.attendance) && data.attendance.length > 0) {
          const totalPresent = data.attendance.reduce((sum, s) => sum + (Number(s.present) || 0), 0);
          const totalClasses = data.attendance.reduce((sum, s) => sum + (Number(s.total) || 0), 0);
          const pct = totalClasses > 0 ? Math.round((totalPresent / totalClasses) * 100) : 0;
          setAttendanceStats({
            percentage: pct,
            present: totalPresent,
            total: totalClasses,
            subjectsCount: data.attendance.length,
            isSafe: pct >= 75
          });
        } else {
          setAttendanceStats(null);
        }
      }
    }, () => {});
    return () => unsub();
  }, [user]);

  const categories = [
    {
      title: 'BEU Academic',
      items: [
        { name: 'Attendance', icon: <UserCheck size={34} strokeWidth={2.3} />, path: '/attendance?standalone=true', tileBg: 'bg-emerald-500 text-white shadow-sm shadow-emerald-500/25' },
        { name: 'BEU Result', icon: <GraduationCap size={34} strokeWidth={2.3} />, path: '/beu-result?standalone=true', tileBg: 'bg-blue-600 text-white shadow-sm shadow-blue-600/25' },
        { name: 'Mentorship', icon: <Sparkles size={34} strokeWidth={2.3} />, path: '/mentorship?standalone=true', tileBg: 'bg-teal-600 text-white shadow-sm shadow-teal-600/25' },
        { name: 'Timetable', icon: <Calendar size={34} strokeWidth={2.3} />, path: '/timetable?standalone=true', tileBg: 'bg-amber-500 text-white shadow-sm shadow-amber-500/25' },
        { name: 'Notes', icon: <BookOpen size={34} strokeWidth={2.3} />, path: '/notes?standalone=true', tileBg: 'bg-indigo-600 text-white shadow-sm shadow-indigo-600/25' },
        { name: 'PYQ', icon: <FileText size={34} strokeWidth={2.3} />, path: '/pyq?standalone=true', tileBg: 'bg-violet-600 text-white shadow-sm shadow-violet-600/25' },
        { name: 'SGPA / CGPA', icon: <Calculator size={34} strokeWidth={2.3} />, path: '/cgpa?standalone=true', tileBg: 'bg-cyan-600 text-white shadow-sm shadow-cyan-600/25' },
        { name: 'Syllabus', icon: <Library size={34} strokeWidth={2.3} />, path: '/syllabus?standalone=true', tileBg: 'bg-rose-600 text-white shadow-sm shadow-rose-600/25' },
        { name: 'Lectures', icon: <Youtube size={34} strokeWidth={2.3} />, path: '/lecture-finder?standalone=true', tileBg: 'bg-red-600 text-white shadow-sm shadow-red-600/25' },
      ]
    },
    {
      title: 'Study Tools',
      items: [
        { name: 'Study Timer', icon: <Timer size={34} strokeWidth={2.3} />, path: '/study?standalone=true', tileBg: 'bg-rose-600 text-white shadow-sm shadow-rose-600/25' },
        { name: 'Study Network', icon: <Users size={34} strokeWidth={2.3} />, path: '/groups?standalone=true', tileBg: 'bg-orange-500 text-white shadow-sm shadow-orange-500/25' },
        { name: 'Calculator', icon: <Calculator size={34} strokeWidth={2.3} />, path: '/calculator?standalone=true', tileBg: 'bg-emerald-600 text-white shadow-sm shadow-emerald-600/25' },
        { name: 'Resources', icon: <Link2 size={34} strokeWidth={2.3} />, path: '/study-resources?standalone=true', tileBg: 'bg-sky-600 text-white shadow-sm shadow-sky-600/25' },
      ]
    },
    {
      title: 'UGEAC Counselling',
      items: [
        { name: 'College Predictor', icon: <Compass size={34} strokeWidth={2.3} />, path: '/ugeac-predictor?standalone=true&tab=finder', tileBg: 'bg-amber-600 text-white shadow-sm shadow-amber-600/25' },
        { name: 'Rank Predictor', icon: <Target size={34} strokeWidth={2.3} />, path: '/ugeac-predictor?standalone=true&tab=predictor', tileBg: 'bg-indigo-600 text-white shadow-sm shadow-indigo-600/25' },
        { name: 'Guide', icon: <BookOpen size={34} strokeWidth={2.3} />, path: '/ugeac-predictor?standalone=true&tab=guide', tileBg: 'bg-emerald-600 text-white shadow-sm shadow-emerald-600/25' },
      ]
    },
    {
      title: 'Official Portals',
      items: [
        { name: 'AICTE', icon: <Briefcase size={34} strokeWidth={2.3} />, path: 'https://internship.aicte-india.org/', external: true, tileBg: 'bg-slate-800 text-white shadow-sm shadow-slate-800/25' },
        { name: 'SWAYAM', icon: <Globe size={34} strokeWidth={2.3} />, path: 'https://swayam.gov.in/', external: true, tileBg: 'bg-orange-600 text-white shadow-sm shadow-orange-600/25' },
        { name: 'NPTEL', icon: <Award size={34} strokeWidth={2.3} />, path: 'https://nptel.ac.in/', external: true, tileBg: 'bg-blue-700 text-white shadow-sm shadow-blue-700/25' },
        { name: 'NSP', icon: <Landmark size={34} strokeWidth={2.3} />, path: 'https://scholarships.gov.in/', external: true, tileBg: 'bg-emerald-700 text-white shadow-sm shadow-emerald-700/25' },
        { name: 'PMS Bihar', icon: <Landmark size={34} strokeWidth={2.3} />, path: 'https://pmsonline.bih.nic.in/', external: true, tileBg: 'bg-purple-600 text-white shadow-sm shadow-purple-600/25' },
        { name: 'BSSC', icon: <ExternalLink size={34} strokeWidth={2.3} />, path: 'https://bssc.bihar.gov.in/', external: true, tileBg: 'bg-cyan-700 text-white shadow-sm shadow-cyan-700/25' },
      ]
    }
  ];

  const LOGIN_REQUIRED_PATHS = ['/study', '/groups', '/achievements'];

  const handleFeatureClick = (f) => {
    if (f.external) {
      window.open(f.path, '_blank', 'noopener,noreferrer');
      return;
    }
    const basePath = f.path.split('?')[0];
    const needsLogin = LOGIN_REQUIRED_PATHS.some(p => basePath.startsWith(p));
    if (needsLogin && !user) {
      navigate('/login', { state: { from: f.path } });
    } else {
      navigate(f.path);
    }
  };

  const isAdmin =
    user?.email === 'prince86944@gmail.com' ||
    user?.email === 'prince8694@gmail.com' ||
    user?.role === 'SUPER_ADMIN' ||
    user?.role === 'ADMIN' ||
    user?.role === 'admin' ||
    user?.role === 'super_admin';

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-['Inter'] flex flex-col items-center justify-center p-4 pt-24 pb-12 relative overflow-x-clip">
      <SEO
        title="App Hub | Apna College Bihar - The Official Study Engine"
        description="Access all your college utilities - Study Timer, Notes, PYQs, UGEAC Predictor, SGPA Calculator, and more in one place."
      />

      {/* Fixed Top Header Bar */}
      <div className="fixed top-0 left-0 right-0 w-full bg-[#f8fafc]/95 border-b border-slate-200 z-50 px-5 py-3.5 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-3.5 max-w-2xl mx-auto w-full justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo-acb.png?v=99" alt="ACB Logo" className="w-10 h-10 rounded-xl border border-slate-200 shadow-sm object-cover" />
            <div>
              <h2 className="text-xs font-black text-blue-600 uppercase tracking-[0.2em] leading-tight">APNA COLLEGE BIHAR</h2>
            </div>
          </div>
          <div className="relative">
            {!user ? (
              <Link to="/login" className="flex items-center gap-1.5 px-3.5 py-2.5 bg-blue-600/10 border border-blue-500/20 text-blue-600 rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-blue-600 hover:text-white shadow-sm">
                <LogIn size={14} /> Login
              </Link>
            ) : (
              <div>
                <button
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                  className="flex items-center gap-1.5 px-3.5 py-2.5 bg-blue-600/10 border border-blue-500/20 text-blue-600 rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-blue-600 hover:text-white shadow-sm"
                >
                  <User size={14} /> My Profile
                </button>

                {showProfileMenu && (
                  <div className="absolute right-0 top-14 w-56 bg-white border border-slate-200 rounded-2xl p-3 shadow-2xl z-50">
                    <div className="pb-2.5 mb-2.5 border-b border-slate-100">
                      <p className="text-[10px] font-bold text-slate-700 truncate">{user?.email || 'Student Member'}</p>
                      <div className="flex items-center gap-1 text-[8px] text-slate-500 mt-1">
                        <Calendar size={10} className="text-blue-500" />
                        <span>Joined: <strong className="text-slate-900">{joinDate}</strong></span>
                      </div>
                    </div>

                    {isAdmin && (
                      <Link
                        to="/dashboard/admin"
                        className="w-full py-2.5 bg-blue-600/10 hover:bg-blue-600 border border-blue-500/20 text-blue-600 hover:text-white rounded-xl flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-widest mb-1.5 shadow-sm"
                      >
                        <ShieldCheck size={14} /> Admin Panel
                      </Link>
                    )}
                    <button
                      type="button"
                      onClick={() => {
                        setShowProfileMenu(false);
                        setShowDonate(true);
                      }}
                      className="w-full py-2.5 bg-rose-500/10 hover:bg-rose-600 border border-rose-500/20 text-rose-600 hover:text-white rounded-xl flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-widest mb-1.5 shadow-sm cursor-pointer"
                    >
                      ❤️ Donate Us
                    </button>
                    <button
                      onClick={handleLogout}
                      className="w-full py-2.5 bg-red-500/10 hover:bg-red-500 text-red-600 hover:text-white rounded-xl flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-widest"
                    >
                      <LogOut size={14} /> Logout
                    </button>
                  </div>
                )}
                <DonateModal isOpen={showDonate} mode="SUPPORT" onClose={() => setShowDonate(false)} />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="w-full max-w-2xl space-y-5 mb-6">
        {/* Single Compact Latest BEU Notice Bar */}
        {beuNotices.length > 0 && (() => {
          const notice = beuNotices[0];
          const rawNoticeUrl = notice.pdfUrl || (notice.link && notice.link.startsWith('http') ? notice.link : `https://beu-bih.ac.in/backend/${encodeURI((notice.link || '').replace(/^\/+/, ''))}`);
          const noticeUrl = typeof rawNoticeUrl === 'string' ? rawNoticeUrl.replace(/%2F/gi, '/') : rawNoticeUrl;
          const dateStr = notice.date || notice.noticedate
            ? (notice.date?.includes('/') ? notice.date : new Date(notice.date || notice.noticedate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }))
            : 'Recent';

          return (
            <div className="bg-white border border-slate-200/90 hover:border-blue-300 rounded-2xl p-3 sm:p-3.5 shadow-sm">
              <div className="flex items-center justify-between gap-3">
                <a
                  href={noticeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 min-w-0 flex-1"
                >
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-red-600 text-white text-[8px] font-black uppercase tracking-wider shrink-0 shadow-xs">
                    LATEST NOTICE
                  </span>
                  <span className="text-[9px] font-bold text-slate-400 shrink-0 hidden xs:inline">
                    {dateStr}
                  </span>
                  <h3 className="text-xs font-bold text-slate-800 truncate">
                    {notice.title || notice.board}
                  </h3>
                </a>

                <div className="flex items-center gap-2 shrink-0">
                  <Link
                    to="/notifications"
                    className="flex items-center gap-1 px-2.5 py-1.5 bg-slate-100 hover:bg-blue-50 text-blue-600 rounded-xl text-[9px] font-black uppercase tracking-wider whitespace-nowrap"
                  >
                    <span>View All</span>
                    <ArrowRight size={11} />
                  </Link>

                  {isAdmin && (
                    <button
                      onClick={(e) => handleDeleteNotice(notice, e)}
                      className="p-1 text-slate-400 hover:text-red-500 rounded-lg"
                      title="Delete notice"
                    >
                      <Trash2 size={12} />
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })()}

        {/* Join Official WhatsApp Channel Banner */}
        <a
          href="https://whatsapp.com/channel/0029VbC6FsH3wtb5UEDvrW0a"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between gap-3 bg-emerald-50/90 hover:bg-emerald-100/80 border border-emerald-200 rounded-2xl px-4 py-3 shadow-2xs transition-all active:scale-[0.99]"
        >
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs">
              <MessageCircle size={20} />
            </div>
            <div className="min-w-0">
              <h3 className="text-xs sm:text-sm font-black text-slate-900 truncate">
                Join Apna College Bihar on WhatsApp
              </h3>
              <p className="text-[10px] sm:text-[11px] text-emerald-800 font-semibold truncate">
                BEU Updates &amp; Free Notes, PYQ &amp; Exam Alerts
              </p>
            </div>
          </div>
          <span className="px-3.5 py-2 rounded-xl bg-emerald-600 text-white text-[10px] font-black uppercase tracking-wider shrink-0 flex items-center gap-1">
            Join <ArrowRight size={12} />
          </span>
        </a>

        {/* Dedicated Attendance Safe Guard Card */}
        <div className="bg-white border border-slate-200/90 rounded-[2rem] p-4 sm:p-5 shadow-sm">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 bg-emerald-50 text-emerald-600 border border-emerald-100 rounded-2xl flex items-center justify-center shrink-0">
                <UserCheck size={22} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xs sm:text-sm font-[1000] text-slate-900 tracking-tight uppercase leading-none">
                    75% Attendance Safe Guard
                  </h3>
                  <span className="px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 text-[8px] font-black uppercase tracking-wider">
                    BEU Mandatory
                  </span>
                </div>
                <p className="text-[10px] sm:text-[11px] text-slate-500 font-medium mt-1">
                  {attendanceStats && attendanceStats.total > 0 ? (
                    <span>
                      Overall: <strong className={attendanceStats.isSafe ? 'text-emerald-600 font-bold' : 'text-red-600 font-bold'}>{attendanceStats.percentage}%</strong> ({attendanceStats.present}/{attendanceStats.total} lectures)
                    </span>
                  ) : (
                    'Track daily lecture attendance to avoid exam debarment'
                  )}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-3.5 pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
            <span className="text-[9px] font-bold text-slate-400">Auto-synced with timetable</span>
            <Link
              to="/attendance?standalone=true"
              className="px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5"
            >
              <span>Mark Attendance</span>
              <ArrowRight size={12} />
            </Link>
          </div>
        </div>

        {/* Clean Icon-First Feature Grids (No Animations, Max Icon Space, Concise Name) */}
        {categories.map((cat, idx) => (
          <div key={idx} className="bg-white border border-slate-200 rounded-[2rem] shadow-sm p-5">
            <h3 className="text-xs font-[1000] text-slate-800 uppercase tracking-[0.2em] mb-4 text-center">
              {cat.title}
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
              {cat.items.map((f, i) => (
                <button
                  key={i}
                  onClick={() => handleFeatureClick(f)}
                  className="min-h-[116px] bg-slate-50/70 border border-slate-200/80 rounded-2xl flex flex-col items-center justify-center gap-2 py-3 px-1.5 hover:bg-white hover:border-slate-300 shadow-2xs"
                >
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center shrink-0 ${f.tileBg}`}>
                    {f.icon}
                  </div>
                  <span className="text-[11px] font-bold text-slate-800 text-center leading-snug line-clamp-2 w-full px-0.5">
                    {f.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        ))}

        {/* Social Channels */}
        <div className="bg-white border border-slate-200 rounded-[2rem] shadow-sm p-5">
          <div className="flex gap-3">
            <button
              onClick={() => window.open('https://whatsapp.com/channel/0029VbC6FsH3wtb5UEDvrW0a', '_blank', 'noopener,noreferrer')}
              className="flex-1 py-3.5 bg-slate-50 border border-slate-200/70 rounded-2xl flex items-center justify-center gap-2 hover:bg-slate-100 shadow-2xs"
            >
              <MessageCircle size={18} className="text-emerald-600" />
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-700">WhatsApp</span>
            </button>
            <button
              onClick={() => window.open('https://youtube.com/@apnacollegebihar', '_blank', 'noopener,noreferrer')}
              className="flex-1 py-3.5 bg-slate-50 border border-slate-200/70 rounded-2xl flex items-center justify-center gap-2 hover:bg-slate-100 shadow-2xs"
            >
              <Youtube size={18} className="text-red-600" />
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-700">YouTube</span>
            </button>
          </div>
        </div>
        {/* Official Sources & Non-Government Disclaimer */}
        <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 text-[11px] text-slate-600 leading-relaxed space-y-1">
          <p className="font-extrabold text-slate-800 uppercase tracking-wider text-[10px]">
            Sources &amp; Disclaimer
          </p>
          <p>
            Official public sources:{' '}
            <a href="https://beu-bih.ac.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">beu-bih.ac.in</a>,{' '}
            <a href="https://bceceboard.bihar.gov.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">bceceboard.bihar.gov.in</a>,{' '}
            <a href="https://www.aicte-india.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">aicte-india.org</a>,{' '}
            <a href="https://swayam.gov.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">swayam.gov.in</a>,{' '}
            <a href="https://scholarships.gov.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">scholarships.gov.in</a>,{' '}
            <a href="https://pmsonline.bih.nic.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">pmsonline.bih.nic.in</a>.
          </p>
          <p className="text-[10px] text-slate-500">
            Apna College Bihar is an independent student app and is NOT affiliated with or an official app of BEU Patna, BCECEB, or any government entity.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
