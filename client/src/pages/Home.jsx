import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  BookOpen, Calculator, Timer, Users,
  ArrowRight, CheckCircle, GraduationCap,
  Globe, Shield, Zap, Send, Youtube,
  User, LogOut, ChevronDown, Download, MessageCircle,
  ShieldCheck, Calendar, Sparkles, FileText, Library,
  Star, ChevronRight, Search, MapPin, Target,
  RefreshCw, Heart, Building2, Award, Mail,
  Plus, Minus, ExternalLink, Clock, Database, Briefcase, Layers, ArrowUpRight, X
} from 'lucide-react';
import { collection, onSnapshot, query, orderBy, limit, where, getCountFromServer, doc } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../context/AuthContext';
import SEO from '../components/SEO';
import GlobalSearch from '../components/GlobalSearch';
import CountUp from '../components/CountUp';
import Reveal from '../components/Reveal';
import HomeEducationalGuide from '../components/HomeEducationalGuide';
import { collegeData } from '../data/collegeData';
import toast from 'react-hot-toast';

export default function Home() {
  const { user, loading, logout } = useAuth();
  const navigate = useNavigate();
  const [stats, setStats] = useState({ users: 0, notes: 0, pyqs: 0, groups: 0 });
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(null);
  const [announcements, setAnnouncements] = useState([]);
  const [topDonors, setTopDonors] = useState([]);
  const [showScanner, setShowScanner] = useState(false);
  const [beuNotices, setBeuNotices] = useState([]);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [showAllColleges, setShowAllColleges] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const joinDate = user?.metadata?.creationTime
    ? new Date(user.metadata.creationTime).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
    : 'Recently';

  const featureCategories = [
    {
      title: 'BEU Tools',
      items: [
        { name: 'Notes', path: '/notes', icon: <BookOpen size={16} /> },
        { name: 'PYQ Papers', path: '/pyq', icon: <FileText size={16} /> },
        { name: 'Lecture Finder', path: '/lecture-finder', icon: <Youtube size={16} /> },
        { name: 'Syllabus', path: '/syllabus', icon: <Library size={16} /> },
        { name: 'Timetable', path: '/timetable', icon: <Calendar size={16} /> },
        { name: 'SGPA / CGPA', path: '/cgpa', icon: <GraduationCap size={16} /> },
        { name: 'BEU Result', path: '/beu-result', icon: <Globe size={16} /> },
        { name: 'Attendance', path: '/attendance', icon: <ShieldCheck size={16} /> },
      ],
    },
    {
      title: 'Study Tools',
      items: [
        { name: 'Study Timer', path: '/study', icon: <Timer size={16} /> },
        { name: 'Study Groups', path: '/groups', icon: <Users size={16} /> },
        { name: 'Scientific Calc', path: '/calculator', icon: <Calculator size={16} /> },
        { name: 'Study Resources', path: '/study-resources', icon: <ExternalLink size={16} /> },
        { name: 'Personal Manager', path: '/extras', icon: <User size={16} /> },
      ],
    },
    {
      title: 'Counselling',
      items: [
        { name: 'College Predictor', path: '/ugeac-predictor?tab=finder', icon: <Send size={16} /> },
        { name: 'Rank Predictor', path: '/ugeac-predictor?tab=predictor', icon: <Calculator size={16} /> },
        { name: 'Counselling Guide', path: '/ugeac-predictor?tab=guide', icon: <BookOpen size={16} /> },
      ],
    },
  ];

  // ── Top Colleges Data ──
  const popularColleges = [
    { name: 'MIT Muzaffarpur', slug: 'mit-muzaffarpur', code: 'MIT', location: 'Muzaffarpur' },
    { name: 'BCE Bhagalpur', slug: 'bce-bhagalpur', code: 'BCE', location: 'Bhagalpur' },
    { name: 'GCE Gaya', slug: 'gce-gaya', code: 'GCE', location: 'Gaya' },
    { name: 'DCE Darbhanga', slug: 'dce-darbhanga', code: 'DCE', location: 'Darbhanga' },
    { name: 'MCE Motihari', slug: 'mce-motihari', code: 'MCE', location: 'Motihari' },
    { name: 'LNJPIT Chapra', slug: 'lnjpit-chapra', code: 'LNJPIT', location: 'Chapra' },
  ];

  // ── FAQ Data (Condensed to 8-10 highly relevant questions) ──
  const faqs = [
    {
      q: 'What is Apna College Bihar?',
      a: 'Apna College Bihar is the largest dedicated academic platform for engineering students in Bihar, providing free B.Tech notes, PYQs, syllabus, CGPA calculators, and UGEAC counselling tools.',
    },
    {
      q: 'How to download B.Tech notes?',
      a: 'Navigate to the "Notes" section, select your engineering branch and semester. You will see a list of subjects with organized notes available for free PDF download.',
    },
    {
      q: 'Are Previous Year Question Papers (PYQs) free?',
      a: 'Yes, all PYQ papers for the last 5+ years are 100% free. Visit the "PYQ" section to find branch-wise and subject-wise question papers for BEU examinations.',
    },
    {
      q: 'What is UGEAC?',
      a: 'UGEAC (Undergraduate Engineering Admission Counselling) is the official counselling process conducted by BCECEB for admission to B.Tech programs in Bihar government engineering colleges based on JEE Main scores.',
    },
    {
      q: 'How does the UGEAC College Predictor work?',
      a: 'Our UGEAC College Predictor uses official cutoff data from previous years. Enter your JEE Mains rank and category, and it will calculate the probability of getting admission into various branches across 38+ Bihar engineering colleges.',
    },
    {
      q: 'Which colleges are covered on this platform?',
      a: 'We cover all 38+ government engineering colleges under BEU (Bihar Engineering University), including top institutes like MIT Muzaffarpur, BCE Bhagalpur, GCE Gaya, DCE Darbhanga, MCE Motihari, and all other GECs.',
    },
    {
      q: 'How to access semester resources?',
      a: 'You can browse resources by semester from the "Notes" and "PYQ" pages where you can filter content specifically by your current semester (1st to 8th).',
    },
    {
      q: 'Is the CGPA / SGPA calculator accurate for BEU?',
      a: 'Yes, our CGPA/SGPA calculator is built strictly according to the official Bihar Engineering University (BEU) grading system and credit structure.',
    },
    {
      q: 'Is there a mobile app available?',
      a: 'Yes, we have an Android APK available for download. Click on the "Download App" button in the menu or footer for a faster, distraction-free experience with built-in study timers.',
    }
  ];

  // ── Top Donors Data (Fetched via Firestore) ──

  const combinedSchema = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Apna College Bihar",
      "url": "https://www.apnacollegebihar.online/",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://www.apnacollegebihar.online/search/{search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Apna College Bihar",
      "url": "https://www.apnacollegebihar.online/",
      "logo": "https://www.apnacollegebihar.online/logo-acb.png",
      "sameAs": [
        "https://www.youtube.com/@ApnaCollegeBihar"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(f => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": f.a
        }
      }))
    }
  ];

  // ── Data Fetching ──
  useEffect(() => {
    // Top Donors
    const unsubDonors = onSnapshot(query(collection(db, 'donors'), orderBy('amount', 'desc'), limit(4)), (snap) => {
      setTopDonors(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });

    // BEU Notices still need onSnapshot to be live and it's limited to 3
    const qNotices = query(collection(db, 'beu_notifications'), limit(50));
    const unsubNotices = onSnapshot(qNotices, (snap) => {
      const data = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
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
      setBeuNotices(data.slice(0, 3));
    });

    // Read pre-calculated unique stats to save reads
    const unsubDocs = onSnapshot(doc(db, 'documents', 'unique_counts_metadata'), (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        setStats(s => ({
          ...s,
          notes: data.uniqueNotesCount || 0,
          pyqs: data.uniquePyqsCount || 0
        }));
      }
    });

    const fetchCounts = async () => {
      try {
        const usersSnap = await getCountFromServer(collection(db, 'users'));
        const groupsSnap = await getCountFromServer(collection(db, 'groups'));
        
        setStats(s => ({
          ...s,
          users: usersSnap.data().count || 0,
          groups: groupsSnap.data().count || 0
        }));
      } catch (error) {
        console.error("Error fetching homepage stats:", error);
      }
    };

    fetchCounts();

    return () => { unsubNotices(); unsubDocs(); unsubDonors(); };
  }, []);


  return (
    <div className="min-h-screen bg-[#f8fafc] font-['Inter'] relative overflow-hidden">
      <SEO
        title="Bihar's Largest Engineering Student Platform | Apna College Bihar"
        description="Official hub for Bihar engineering students. Free BEU Notes, PYQs, Syllabus, UGEAC Predictor, CGPA Calculator and counselling guidance for 38+ engineering colleges."
        keywords="BEU notes, Bihar engineering college, UGEAC 2026 predictor, B.Tech PYQ papers, Bihar college cutoff, CGPA calculator BEU, Apna College Bihar, Bihar engineering counselling, MIT Muzaffarpur, BCE Bhagalpur"
        schema={combinedSchema}
      />


      {/* ═══════════════════════════════════════════ */}
      {/* ── 1. HERO SECTION ── */}
      {/* ═══════════════════════════════════════════ */}
      <section className="relative pt-12 pb-16 md:pt-24 md:pb-32 px-6 md:px-16 overflow-hidden bg-white">
        <div className="relative z-10 container mx-auto flex flex-col items-center text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 border border-blue-100 rounded-full text-xs font-semibold text-blue-700 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Bihar's Largest Engineering Platform
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
            Complete Education Guide for <span className="text-blue-600">Bihar Engineering Students</span>
          </h1>

          <p className="text-slate-600 text-base md:text-lg font-medium leading-relaxed max-w-2xl mx-auto mb-10">
            Get access to organized B.Tech notes, previous year question papers, official syllabus, UGEAC counselling tools, and reliable college reviews.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
            <a
              href="/apna-college-bihar-v49.apk"
              download="apna-college-bihar-v49.apk"
              className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-sm transition-all shadow-md flex items-center justify-center gap-2"
            >
              <Download size={18} /> Download App
            </a>
            <a
              href="#resources"
              className="w-full sm:w-auto px-8 py-3.5 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 rounded-xl font-semibold text-sm transition-all shadow-sm flex items-center justify-center gap-2 group"
            >
              Explore Resources <ArrowRight size={16} className="text-slate-400 group-hover:text-blue-600 transition-colors" />
            </a>
          </div>

          {/* Quick Stats Below Hero */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 w-full border-t border-slate-100 pt-8">
            <div className="text-center">
              <p className="text-2xl font-bold text-slate-900">38+</p>
              <p className="text-sm font-medium text-slate-500">Colleges Covered</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-slate-900">100%</p>
              <p className="text-sm font-medium text-slate-500">Free Resources</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-slate-900">UGEAC</p>
              <p className="text-sm font-medium text-slate-500">Counselling Guide</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-slate-900">5+ Yrs</p>
              <p className="text-sm font-medium text-slate-500">PYQ Papers</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* ── 1.5. BEU NOTIFICATIONS ── */}
      {/* ═══════════════════════════════════════════ */}
      {beuNotices.length > 0 && (
        <section className="py-8 bg-slate-50 border-y border-slate-200">
          <div className="container mx-auto px-6 md:px-16 max-w-5xl">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-50 text-red-600 rounded-xl flex items-center justify-center border border-red-100 shadow-sm">
                  <span className="text-xl">🔥</span>
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-[1000] text-slate-900 tracking-tighter uppercase">Latest BEU Notifications</h2>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Official Updates from Bihar Engineering University</p>
                </div>
              </div>
              <Link to="/notifications" className="hidden md:flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-blue-600 hover:text-blue-700 transition-colors group">
                View All <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {beuNotices.map((notice) => (
                <a
                  key={notice.id}
                  href={notice.pdfUrl || (notice.link && notice.link.startsWith('http') ? notice.link : `https://beu-bih.ac.in/backend/${encodeURI(notice.link || '')}`)}
                  target="_blank"
                  rel="noreferrer"
                  className="block p-4 md:p-5 bg-white border border-slate-200 hover:border-blue-300 rounded-2xl shadow-sm hover:shadow-md transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-2 py-1 bg-red-600 text-white text-[9px] font-black uppercase tracking-widest rounded-md animate-pulse">NEW</span>
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1">
                          <Calendar size={12} /> {notice.date || notice.noticedate ? (notice.date?.includes('/') ? notice.date : new Date(notice.date || notice.noticedate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })) : 'Unknown Date'}
                        </span>
                      </div>
                      <h3 className="text-sm md:text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {notice.title || notice.board}
                      </h3>
                    </div>
                    <div className="w-10 h-10 shrink-0 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowUpRight size={18} />
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <Link to="/notifications" className="mt-4 md:hidden flex items-center justify-center gap-2 w-full p-4 bg-white border border-slate-200 rounded-xl text-[11px] font-black uppercase tracking-widest text-blue-600 hover:bg-slate-50 transition-colors">
              View All Notifications <ArrowRight size={14} />
            </Link>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════ */}
      {/* ── 2. SMART SEARCH SECTION ── */}
      {/* ═══════════════════════════════════════════ */}
      <section className="py-8 bg-white border-y border-slate-200 relative z-20 shadow-sm">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6">
            <h2 className="text-lg font-[1000] text-slate-900 uppercase tracking-tight whitespace-nowrap hidden md:block">Quick Search:</h2>
            <div className="w-full">
              <GlobalSearch placeholder="Search Notes, PYQs, Colleges, Syllabus..." />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* ── 3. REAL STATS ── */}
      {/* ═══════════════════════════════════════════ */}
      <section className="py-16 px-6 md:px-16 bg-white border-b border-slate-200">
        <Reveal>
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {[
                { value: stats.notes, suffix: '+', label: 'Notes Available', icon: <BookOpen size={24} />, color: 'text-indigo-600', bg: 'bg-indigo-50', border: 'border-slate-100' },
                { value: stats.pyqs, suffix: '+', label: 'PYQs Available', icon: <FileText size={24} />, color: 'text-purple-600', bg: 'bg-purple-50', border: 'border-slate-100' },
                { value: stats.users, suffix: '+', label: 'Active Users', icon: <Users size={24} />, color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-slate-100' },
                { value: 8, suffix: '', label: 'Semesters Covered', icon: <Layers size={24} />, color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-slate-100' },
              ].map((stat, idx) => (
                <div key={idx} className={`p-6 rounded-2xl border ${stat.border} bg-white text-center flex flex-col items-center justify-center transition-all hover:shadow-lg shadow-sm group`}>
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 ${stat.bg} ${stat.color} group-hover:scale-110 transition-transform`}>
                    {stat.icon}
                  </div>
                  <p className="text-3xl font-extrabold text-slate-900 tracking-tight">
                    <CountUp end={stat.value} suffix={stat.suffix} duration={1500} />
                  </p>
                  <p className="text-xs font-semibold text-slate-500 mt-2 uppercase tracking-wide">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* ── 4. WHY CHOOSE APNA COLLEGE BIHAR ── */}
      {/* ═══════════════════════════════════════════ */}
      <section className="py-20 px-6 md:px-16 bg-white relative">
        <Reveal delay={100}>
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-blue-600 font-semibold uppercase tracking-wider text-sm">Platform Features</span>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mt-2">
                Why Choose Us
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'Complete Study Resources', desc: 'Detailed notes, important questions, and PYQs for every BEU subject.', icon: <Database size={28} /> },
                { title: 'UGEAC Support', desc: 'Accurate predictors and guides to easily navigate the BCECEB admission process.', icon: <Target size={28} /> },
                { title: 'One Platform Solution', desc: 'From syllabus tracking to CGPA calculation, access everything in one place.', icon: <Zap size={28} /> },
              ].map((feature, idx) => (
                <div key={idx} className="bg-slate-50 border border-slate-200 p-8 rounded-2xl transition-colors flex flex-col items-center text-center group hover:bg-white hover:shadow-lg">
                  <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600 text-sm font-medium leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* ── 5. POPULAR RESOURCES ── */}
      {/* ═══════════════════════════════════════════ */}
      <section id="resources" className="py-20 px-6 md:px-16 bg-slate-50 border-b border-slate-200">
        <Reveal>
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <span className="text-blue-600 font-semibold uppercase tracking-wider text-sm">Academic Toolkit</span>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mt-2">
                Popular Resources
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Notes', desc: 'Handwritten BEU notes', icon: <BookOpen />, path: '/notes', color: 'text-blue-600', bg: 'bg-blue-50' },
                { title: 'PYQs', desc: 'Previous 5 Years Papers', icon: <FileText />, path: '/pyq', color: 'text-purple-600', bg: 'bg-purple-50' },
                { title: 'Syllabus', desc: 'Official BEU Curriculum', icon: <Library />, path: '/syllabus', color: 'text-emerald-600', bg: 'bg-emerald-50' },
                { title: 'Lecture Finder', desc: 'Find topic-wise lectures', icon: <BookOpen />, path: '/lecture-finder', color: 'text-rose-600', bg: 'bg-rose-50' },
                { title: 'CGPA Calculator', desc: 'BEU Grading Tool', icon: <Calculator />, path: '/cgpa', color: 'text-amber-600', bg: 'bg-amber-50' },
                { title: 'Study Timer', desc: 'Focus & Productivity', icon: <Timer />, path: '/study', color: 'text-rose-600', bg: 'bg-rose-50' },
                { title: 'College Predictor', desc: 'UGEAC College Predictor', icon: <Target />, path: '/ugeac-predictor', color: 'text-indigo-600', bg: 'bg-indigo-50' },
              ].map((res, idx) => (
                <div key={idx} className="flex flex-col p-6 border border-slate-200 rounded-2xl hover:shadow-lg transition-all duration-300 bg-white group cursor-pointer">
                  <div className="flex items-center gap-4 mb-5">
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center ${res.bg} ${res.color} group-hover:scale-110 transition-transform`}>
                      {res.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg group-hover:text-blue-600 transition-colors">{res.title}</h3>
                      <p className="text-sm font-medium text-slate-500 mt-1">{res.desc}</p>
                    </div>
                  </div>
                  <Link to={res.path} className="mt-auto inline-flex items-center justify-center w-full py-2.5 bg-slate-50 text-slate-700 font-semibold text-xs uppercase tracking-wide rounded-lg transition-all border border-slate-200 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600">
                    Access Tool <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* ── 5.5. TOP DONORS ── */}
      {/* ═══════════════════════════════════════════ */}
      <section className="py-20 px-6 md:px-16 bg-white border-b border-slate-200">
        <Reveal delay={50}>
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-rose-600 font-semibold uppercase tracking-wider text-sm flex items-center justify-center gap-2">
                <Heart size={16} className="fill-rose-600" /> Support Our Mission
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mt-2">
                Our Top Supporters
              </h2>
              <p className="text-slate-600 text-sm font-medium mt-3 max-w-2xl mx-auto">
                Apna College Bihar is free for everyone. A big thank you to the students who contributed to keep our servers running and the platform growing!
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {topDonors.map((donor, idx) => (
                <div key={idx} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-md transition-shadow group">
                  <div className="w-14 h-14 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center mb-4 font-bold text-xl group-hover:scale-110 transition-transform">
                    {donor.name.charAt(0)}
                  </div>
                  <h3 className="font-bold text-slate-900 mb-1">{donor.name}</h3>
                  <p className="text-xs text-slate-500 font-medium mb-4">{donor.college}</p>
                  <div className="mt-auto px-5 py-1.5 bg-green-50 text-green-700 border border-green-200 rounded-full text-sm font-bold w-full">
                    ₹{donor.amount}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <button 
                onClick={() => setShowScanner(true)}
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-rose-600 hover:bg-rose-700 text-white font-bold text-sm rounded-xl transition-all shadow-md hover:shadow-lg active:scale-95"
              >
                <Heart size={18} className="fill-white" /> Contribute to Platform
              </button>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* ── COLLEGE SECTION ── */}
      {/* ═══════════════════════════════════════════ */}
      <section id="colleges-section" className="py-20 px-6 md:px-16 bg-white border-b border-slate-200">
        <Reveal>
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <span className="text-blue-600 font-semibold uppercase tracking-wider text-sm">BEU Institutions</span>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mt-2">
                Engineering Colleges
              </h2>
              <p className="text-slate-600 text-sm font-medium mt-3 max-w-2xl mx-auto">
                Explore government engineering colleges in Bihar under BEU. Find cutoffs, placement records, and campus details.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {(() => {
                const TOP_COLLEGES = [
                  'mit-muzaffarpur',
                  'bce-bhagalpur',
                  'gce-gaya',
                  'dce-darbhanga',
                  'mce-motihari',
                  'bce-bakhtiyarpur'
                ];
                const topColleges = TOP_COLLEGES.map(slug => [slug, collegeData[slug]]).filter(([_, col]) => !!col);
                const otherColleges = Object.entries(collegeData).filter(([slug]) => !TOP_COLLEGES.includes(slug));
                const displayedColleges = showAllColleges ? [...topColleges, ...otherColleges] : topColleges;

                return displayedColleges.map(([slug, college]) => (
                  <Link 
                    to={`/college/${slug}`} 
                    key={slug} 
                    className="group bg-white rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col"
                  >
                    <div className="h-24 bg-slate-50 relative flex items-center justify-center border-b border-slate-100">
                      <div className="absolute top-3 right-3 flex items-center justify-between">
                        <span className="px-2 py-1 bg-white text-slate-600 border border-slate-200 rounded text-[10px] font-bold uppercase tracking-wide">
                          Estd. {college.established}
                        </span>
                      </div>
                      
                      {/* Logo Container */}
                      <div className="w-16 h-16 rounded-xl bg-white border border-slate-200 p-1 flex items-center justify-center overflow-hidden">
                        <img 
                          src={college.logo} 
                          alt={`${college.shortName} Logo`} 
                          className="w-full h-full object-contain" 
                          onError={(e) => { 
                            e.target.onerror = null; 
                            e.target.src = college.fallbackLogo; 
                          }}
                        />
                      </div>
                    </div>
                    
                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-2 py-0.5 bg-blue-50 text-blue-600 rounded text-[10px] font-bold uppercase tracking-wide">
                            {college.shortName}
                          </span>
                          <span className="px-2 py-0.5 bg-emerald-50 text-emerald-600 rounded text-[10px] font-bold uppercase tracking-wide">
                            {college.type}
                          </span>
                        </div>
                        <h3 className="font-bold text-slate-900 text-lg group-hover:text-blue-600 transition-colors line-clamp-1">
                          {college.name}
                        </h3>
                        <p className="text-slate-500 text-xs font-medium mt-1 flex items-center gap-1">
                          <MapPin size={12} className="text-slate-400" /> {college.location.split(',')[0]}
                        </p>
                      </div>
                      <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600">
                        <span>View Details</span>
                        <ArrowRight size={14} className="-translate-x-1 group-hover:translate-x-0 transition-transform" />
                      </div>
                    </div>
                  </Link>
                ));
              })()}
            </div>

            <div className="mt-12 text-center">
              <button 
                onClick={() => {
                  if (showAllColleges) {
                    setShowAllColleges(false);
                    setTimeout(() => {
                      document.getElementById('colleges-section')?.scrollIntoView({ behavior: 'smooth' });
                    }, 50);
                  } else {
                    setShowAllColleges(true);
                  }
                }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold text-sm rounded-xl transition-all shadow-sm active:scale-95"
              >
                {showAllColleges ? 'Show Less Colleges' : 'View All 38+ Colleges'} 
                <ChevronDown size={16} className={`transition-transform duration-300 ${showAllColleges ? 'rotate-180' : ''}`} />
              </button>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* ── 8. FAQ SECTION ── */}
      {/* ═══════════════════════════════════════════ */}
      <section className="py-20 px-6 md:px-16 bg-slate-50 border-t border-slate-200">
        <Reveal delay={100}>
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white border border-slate-200 rounded-xl overflow-hidden transition-shadow duration-300 hover:shadow-sm">
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left transition-colors hover:bg-slate-50 outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  >
                    <h3 className="text-sm md:text-base font-bold text-slate-900 pr-4">{faq.q}</h3>
                    <div className="shrink-0 text-blue-600">
                      {openFaqIndex === i ? <Minus size={20} /> : <Plus size={20} />}
                    </div>
                  </button>
                  <div className={`grid transition-all duration-300 ease-in-out ${openFaqIndex === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-slate-600 text-sm leading-relaxed font-medium pt-1">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <HomeEducationalGuide />

      {/* ═══════════════════════════════════════════ */}
      {/* ── 9. FINAL CTA ── */}
      {/* ═══════════════════════════════════════════ */}
      <section className="py-20 px-6 md:px-16 bg-blue-600 relative overflow-hidden">
        <Reveal delay={150}>
          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-8">
              Ready To Ace Your Semester?
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/apna-college-bihar-v48.apk"
                download="apna-college-bihar-v48.apk"
                className="w-full sm:w-auto px-8 py-3.5 bg-white hover:bg-slate-100 text-blue-600 rounded-xl font-bold text-sm transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <Download size={20} /> Download App
              </a>
              <Link
                to="/notes"
                className="w-full sm:w-auto px-8 py-3.5 bg-blue-700 hover:bg-blue-800 text-white rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 border border-blue-500"
              >
                Explore Resources <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* ── 10. SEO TEXT DEPTH BLOCK ── */}
      {/* ═══════════════════════════════════════════ */}
      <section className="py-16 px-6 md:px-16 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-white p-8 md:p-12 rounded-[2rem] border border-slate-100 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-[900] text-slate-900 tracking-tight mb-6">Apna College Bihar: The Ultimate Resource for BEU B.Tech Students</h2>
            
            <div className="prose prose-slate max-w-none text-slate-600 space-y-6 text-sm leading-relaxed font-medium">
              <p>Welcome to <strong>Apna College Bihar</strong>, the premier digital learning platform dedicated specifically to students of <strong>Bihar Engineering University (BEU)</strong>. Whether you are pursuing Computer Science (CSE), Civil Engineering, Mechanical Engineering, or Electrical Engineering, finding structured, high-quality study materials can be challenging. Our mission is to bridge this gap by providing comprehensive, easy-to-understand resources that align perfectly with the official BEU B.Tech syllabus.</p>

              <h3 className="text-xl font-[800] text-slate-800 mt-8 mb-4">Comprehensive BEU Notes and Study Materials</h3>
              <p>One of the biggest hurdles engineering students face is the lack of concise and accurate study notes. At Apna College Bihar, we offer meticulously crafted <strong>BEU Notes</strong> that cover every unit of your semester. These notes are designed by top-performing students and subject matter experts to ensure that you grasp complex engineering concepts quickly. From fundamental physics and mathematics in the first year to advanced core subjects in your final year, our notes are optimized to help you score an excellent CGPA.</p>

              <h3 className="text-xl font-[800] text-slate-800 mt-8 mb-4">Mastering Exams with BEU Previous Year Questions (PYQs)</h3>
              <p>It is a well-known fact that analyzing <strong>BEU Previous Year Question Papers (PYQs)</strong> is the most effective strategy for exam preparation. The university exam patterns often repeat crucial concepts and question formats. Our platform provides a vast, organized repository of BEU PYQs for all branches and semesters. By practicing these past papers, you can identify high-weightage topics, understand the grading scheme, and approach your semester exams with absolute confidence.</p>

              <h3 className="text-xl font-[800] text-slate-800 mt-8 mb-4">Advanced Tools: CGPA Calculator, Syllabus, and Timetable</h3>
              <p>Beyond study materials, Apna College Bihar equips you with powerful digital tools to manage your academic life. Our <strong>BEU CGPA Calculator</strong> allows you to accurately track your academic performance based on the university's credit system. We also provide an easily navigable version of the <strong>BEU B.Tech Syllabus</strong> so you never miss a topic. Furthermore, our built-in timetable and attendance trackers ensure that you maintain the mandatory 75% attendance while effectively managing your self-study hours through our custom Study Timer (Focus Mode).</p>

              <h3 className="text-xl font-[800] text-slate-800 mt-8 mb-4">Why Choose Apna College Bihar?</h3>
              <p>Engineering in Bihar is evolving, and so should your preparation methods. We are not just a website; we are a community of thousands of Bihar Engineering University students striving for excellence. By integrating everything from UGEAC Counselling predictors for freshers to advanced study resources for senior students, Apna College Bihar stands as the most trusted, all-in-one educational hub. Download our official app today, eliminate distractions with our strict app blocker, and take a definitive step towards academic success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SCANNER MODAL ── */}
      {showScanner && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm" onClick={() => setShowScanner(false)}>
          <div className="bg-white rounded-[24px] shadow-2xl max-w-[450px] w-full max-h-[80vh] mt-12 flex flex-col overflow-hidden animate-in fade-in zoom-in duration-200" onClick={e => e.stopPropagation()}>
            {/* Top Blue Header Section */}
            <div className="bg-blue-600 relative pt-6 pb-5 flex flex-col items-center flex-shrink-0">
              <button onClick={() => setShowScanner(false)} className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors p-1.5 bg-white/10 hover:bg-white/20 rounded-full">
                <X size={16} />
              </button>
              
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center text-white mb-3 shadow-sm backdrop-blur-sm">
                <Award size={20} />
              </div>
              <h3 className="font-[900] text-white text-lg tracking-wide uppercase">Support Our Team</h3>
              <p className="text-[9px] font-bold text-blue-200 uppercase tracking-widest mt-1">
                Help Us Pay Server Bills!
              </p>
            </div>
            
            {/* Body */}
            <div className="p-5 flex flex-col items-center overflow-y-auto scrollbar-hide">
              <p className="text-[11px] font-medium text-slate-500 text-center leading-relaxed mb-2">
                Apna College Bihar is a 100% free platform built by students, for students. We provide notes, PYQs, important questions, study materials, and exam resources to help thousands of students prepare better.
              </p>
              <p className="text-[11px] font-medium text-slate-500 text-center leading-relaxed mb-5">
                Maintaining our servers requires continuous support. Please add your <strong className="text-blue-600">Name and College Name</strong> in the UPI payment message so we can feature you on our wall of fame!
              </p>
              
              <div className="w-40 h-40 sm:w-44 sm:h-44 bg-white rounded-3xl p-2.5 border-2 border-dashed border-blue-200 flex items-center justify-center overflow-hidden mb-5 shadow-sm flex-shrink-0">
                <img src="/scanner-qr.jpg" alt="UPI Scanner" className="w-full h-full object-contain rounded-xl" />
              </div>
              
              {/* UPI ID Box */}
              <div className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 flex items-center justify-between group cursor-pointer hover:bg-slate-100 transition-colors"
                onClick={() => {
                  navigator.clipboard.writeText('apnacollegebihar@slc');
                  toast.success('UPI ID Copied to clipboard!');
                }}
              >
                <div>
                  <p className="text-[9px] font-bold text-blue-500 uppercase tracking-widest mb-0.5">UPI ID (Tap to Copy)</p>
                  <p className="text-sm font-[900] text-slate-900">apnacollegebihar@slc</p>
                </div>
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 group-hover:scale-105 transition-transform">
                  <ExternalLink size={14} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
