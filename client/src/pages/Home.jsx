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
  Plus, Minus, ExternalLink, Clock, Database, Briefcase, Layers, ArrowUpRight
} from 'lucide-react';
import { collection, onSnapshot, query, orderBy, limit } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../context/AuthContext';
import SEO from '../components/SEO';
import GlobalSearch from '../components/GlobalSearch';
import CountUp from '../components/CountUp';
import Reveal from '../components/Reveal';
import HomeEducationalGuide from '../components/HomeEducationalGuide';

export default function Home() {
  const { user, loading, logout } = useAuth();
  const navigate = useNavigate();
  const [stats, setStats] = useState({ users: 0, docs: 0, groups: 0 });
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(null);
  const [announcements, setAnnouncements] = useState([]);
  const [beuNotices, setBeuNotices] = useState([]);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
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

  const faqSchema = {
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
  };

  // ── Data Fetching ──
  useEffect(() => {
    const unsubUsers = onSnapshot(collection(db, 'users'), (snap) => {
      setStats(s => ({ ...s, users: snap.size }));
    });
    const unsubDocs = onSnapshot(collection(db, 'documents'), (snap) => {
      setStats(s => ({ ...s, docs: snap.size }));
    });
    const unsubGroups = onSnapshot(collection(db, 'groups'), (snap) => {
      setStats(s => ({ ...s, groups: snap.size }));
    });
    const qNotices = query(collection(db, 'beu_notifications'), orderBy('noticedate', 'desc'), limit(3));
    const unsubNotices = onSnapshot(qNotices, (snap) => {
      setBeuNotices(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });

    return () => { unsubUsers(); unsubDocs(); unsubGroups(); unsubNotices(); };
  }, []);


  return (
    <div className="min-h-screen bg-[#f8fafc] font-['Inter'] relative overflow-hidden">
      <SEO
        title="Bihar's Largest Engineering Student Platform | Apna College Bihar"
        description="Official hub for Bihar engineering students. Free BEU Notes, PYQs, Syllabus, UGEAC Predictor, CGPA Calculator and counselling guidance for 38+ engineering colleges."
        keywords="BEU notes, Bihar engineering college, UGEAC 2026 predictor, B.Tech PYQ papers, Bihar college cutoff, CGPA calculator BEU, Apna College Bihar, Bihar engineering counselling, MIT Muzaffarpur, BCE Bhagalpur"
        url="https://www.apnacollegebihar.online/"
        schema={faqSchema}
      />


      {/* ═══════════════════════════════════════════ */}
      {/* ── 1. HERO SECTION ── */}
      {/* ═══════════════════════════════════════════ */}
      <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 px-6 md:px-16 overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-gradient-to-tr from-blue-500/10 via-indigo-500/5 to-transparent rounded-full blur-[100px] pointer-events-none"></div>

        <div className="relative z-10 container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Text Content */}
          <div className="space-y-7 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-[1000] text-slate-900 tracking-tighter uppercase leading-[0.9]">
              Bihar's Largest <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Engineering Student</span> <br className="hidden md:block" />
              Platform
            </h1>

            <p className="text-slate-600 text-sm md:text-base font-medium leading-relaxed max-w-lg mx-auto lg:mx-0">
              Notes, PYQs, Syllabus, UGEAC Tools, College Resources and Academic Support for Bihar Engineering Students.
            </p>

            {/* Feature Highlights */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 max-w-lg mx-auto lg:mx-0 pt-2">
              {[
                '38+ Colleges Covered',
                'Free Study Resources',
                'UGEAC Guidance',
                'BEU Resources'
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-50/50 hover:bg-blue-50 border border-blue-100 rounded-full text-[10px] font-black uppercase tracking-widest text-blue-700 transition-colors shadow-sm">
                  <CheckCircle size={12} className="text-blue-500" /> {text}
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href={`https://apna-college-bihar-6.onrender.com/ApnaCollegeBihar_v8.apk?t=${Date.now()}`}
                download="ApnaCollegeBihar_v8.apk"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-2xl font-black text-[11px] uppercase tracking-widest transition-all shadow-xl shadow-blue-600/20 hover:shadow-2xl hover:shadow-blue-600/30 hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <Download size={18} /> Download App
              </a>
              <a
                href="#resources"
                className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 rounded-2xl font-black text-[11px] uppercase tracking-widest transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 flex items-center justify-center gap-2 group"
              >
                Explore Resources <ArrowRight size={16} className="text-slate-400 group-hover:text-blue-600 transition-colors group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Right Dashboard Mockup */}
          <div className="relative hidden lg:block animate-float">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-indigo-600/30 rounded-[3rem] blur-[80px] transform rotate-3"></div>
            <div className="relative bg-white/90 backdrop-blur-xl border border-white/40 rounded-[2.5rem] shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(59,130,246,0.3)] transition-all duration-500 p-8 space-y-6 group cursor-default">
              <div className="flex items-center justify-between border-b border-slate-100 pb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <p className="text-lg font-[1000] text-slate-900 tracking-tighter uppercase">Student Dashboard</p>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">BEU Academic Hub</p>
                  </div>
                </div>
                <div className="px-3 py-1 bg-emerald-50 text-emerald-600 text-[10px] font-black uppercase tracking-widest rounded-full border border-emerald-100">
                  Verified
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-[1000] text-slate-900">100%</p>
                    <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Free Notes</p>
                  </div>
                  <BookOpen size={32} className="text-indigo-500 opacity-50" />
                </div>
              </div>

              <div className="space-y-3 pt-2">
                {['B.Tech Notes', 'PYQ Papers', 'UGEAC Predictor'].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-white border border-slate-200 rounded-xl">
                    <span className="text-xs font-bold text-slate-700">{item}</span>
                    <ChevronRight size={14} className="text-slate-400" />
                  </div>
                ))}
              </div>
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
                  href={notice.pdfUrl || `https://beu-bih.ac.in/backend/${encodeURIComponent(notice.link)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="block p-4 md:p-5 bg-white border border-slate-200 hover:border-blue-300 rounded-2xl shadow-sm hover:shadow-md transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-2 py-1 bg-red-600 text-white text-[9px] font-black uppercase tracking-widest rounded-md animate-pulse">NEW</span>
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1">
                          <Calendar size={12} /> {new Date(notice.noticedate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                        </span>
                      </div>
                      <h3 className="text-sm md:text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {notice.board}
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
      <section className="py-16 px-6 md:px-16 bg-slate-50">
        <Reveal>
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {[
                { value: stats.docs || 500, suffix: '+', label: 'Notes Available', icon: <BookOpen size={24} />, color: 'text-indigo-600', bg: 'bg-white', border: 'border-slate-200' },
                { value: stats.docs || 1000, suffix: '+', label: 'PYQs Available', icon: <FileText size={24} />, color: 'text-purple-600', bg: 'bg-white', border: 'border-slate-200' },
                { value: 8, suffix: '', label: 'Semesters Covered', icon: <Layers size={24} />, color: 'text-emerald-600', bg: 'bg-white', border: 'border-slate-200' },
              ].map((stat, idx) => (
                <div key={idx} className={`p-6 rounded-3xl border ${stat.bg} ${stat.border} text-center flex flex-col items-center justify-center transition-all hover:-translate-y-2 hover:shadow-xl shadow-sm group`}>
                  <div className={`w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-4 shadow-sm border border-slate-100 ${stat.color} group-hover:scale-110 transition-transform`}>
                    {stat.icon}
                  </div>
                  <p className="text-3xl font-[1000] text-slate-900 tracking-tighter">
                    <CountUp end={stat.value} suffix={stat.suffix} duration={1500} />
                  </p>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-600 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* ── 4. WHY CHOOSE APNA COLLEGE BIHAR ── */}
      {/* ═══════════════════════════════════════════ */}
      <section className="py-20 px-6 md:px-16 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-transparent"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
        <Reveal delay={100}>
          <div className="container mx-auto relative z-10 max-w-6xl">
            <div className="text-center mb-16">
              <span className="text-blue-400 font-black uppercase tracking-[0.4em] text-[10px]">Platform Features</span>
              <h2 className="text-3xl md:text-5xl font-[1000] tracking-tighter uppercase text-white mt-4">
                Why Choose Us
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { title: 'Complete Study Resources', desc: 'Detailed notes, important questions, and PYQs for every BEU subject.', icon: <Database /> },
                { title: 'UGEAC Support', desc: 'Predictors and guides to navigate the BCECEB admission process.', icon: <Target /> },
                { title: 'One Platform Solution', desc: 'From syllabus tracking to CGPA calculation, everything in one place.', icon: <Zap /> },
              ].map((feature, idx) => (
                <div key={idx} className="bg-slate-800/50 border border-slate-700/50 p-8 rounded-3xl backdrop-blur-sm hover:bg-slate-800 transition-colors flex items-start gap-5 group">
                  <div className="w-14 h-14 bg-blue-500/20 text-blue-400 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:text-blue-300 transition-transform">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-[900] text-white uppercase tracking-tight mb-2 group-hover:text-blue-400 transition-colors">{feature.title}</h3>
                    <p className="text-slate-400 text-sm font-medium leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* ── 5. POPULAR RESOURCES ── */}
      {/* ═══════════════════════════════════════════ */}
      <section id="resources" className="py-20 px-6 md:px-16 bg-white border-b border-slate-200">
        <Reveal>
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <span className="text-purple-600 font-black uppercase tracking-[0.4em] text-[10px]">Academic Toolkit</span>
              <h2 className="text-3xl md:text-5xl font-[1000] tracking-tighter uppercase text-slate-900 mt-4">
                Popular Resources
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Notes', desc: 'Handwritten BEU notes', icon: <BookOpen />, path: '/notes', color: 'text-blue-600', bg: 'bg-blue-50' },
                { title: 'PYQs', desc: 'Previous 5 Years Papers', icon: <FileText />, path: '/pyq', color: 'text-purple-600', bg: 'bg-purple-50' },
                { title: 'Syllabus', desc: 'Official BEU Curriculum', icon: <Library />, path: '/syllabus', color: 'text-emerald-600', bg: 'bg-emerald-50' },
                { title: 'CGPA Calculator', desc: 'BEU Grading Tool', icon: <Calculator />, path: '/cgpa', color: 'text-amber-600', bg: 'bg-amber-50' },
                { title: 'Study Timer', desc: 'Focus & Productivity', icon: <Timer />, path: '/study', color: 'text-rose-600', bg: 'bg-rose-50' },
                { title: 'College Predictor', desc: 'UGEAC College Predictor', icon: <Target />, path: '/ugeac-predictor', color: 'text-indigo-600', bg: 'bg-indigo-50' },
              ].map((res, idx) => (
                <div key={idx} className="flex flex-col p-6 border border-slate-200 rounded-3xl hover:shadow-2xl hover:-translate-y-1 hover:border-slate-300 transition-all duration-300 bg-white group cursor-pointer">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${res.bg} ${res.color} group-hover:scale-110 transition-transform`}>
                      {res.icon}
                    </div>
                    <div>
                      <h3 className="font-[900] text-slate-900 uppercase tracking-tight text-lg group-hover:text-blue-600 transition-colors">{res.title}</h3>
                      <p className="text-xs font-medium text-slate-500 mt-1">{res.desc}</p>
                    </div>
                  </div>
                  <Link to={res.path} className="mt-auto inline-flex items-center justify-center w-full py-3 bg-slate-50 text-slate-700 font-bold text-[10px] uppercase tracking-widest rounded-xl transition-all border border-slate-200 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 group-hover:shadow-md">
                    Access Tool <ArrowRight size={14} className="ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* ── 8. FAQ SECTION ── */}
      {/* ═══════════════════════════════════════════ */}
      <section className="py-20 px-6 md:px-16 bg-slate-50">
        <Reveal delay={100}>
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-[1000] tracking-tighter uppercase text-slate-900">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-shadow duration-300 hover:shadow-md">
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                    className="w-full flex items-center justify-between p-6 text-left transition-colors hover:bg-slate-50/50 outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  >
                    <h3 className="text-sm md:text-base font-[900] text-slate-900 pr-4">{faq.q}</h3>
                    <div className={`relative w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-500 ${openFaqIndex === i ? 'bg-blue-600 text-white rotate-180' : 'bg-slate-100 border border-slate-200 text-slate-500'
                      }`}>
                      <Plus size={16} className={`absolute transition-all duration-300 ${openFaqIndex === i ? 'opacity-0 scale-50' : 'opacity-100 scale-100'}`} />
                      <Minus size={16} className={`absolute transition-all duration-300 ${openFaqIndex === i ? 'opacity-100 scale-100' : 'opacity-0 scale-50 -rotate-90'}`} />
                    </div>
                  </button>
                  <div className={`grid transition-all duration-300 ease-in-out ${openFaqIndex === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-slate-600 text-sm leading-relaxed font-medium border-t border-slate-100 pt-4">
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
      <section className="py-20 px-6 md:px-16 bg-white">
        <Reveal delay={150}>
          <div className="container mx-auto max-w-5xl">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20"></div>
              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-[1000] text-white tracking-tighter uppercase leading-tight mb-10">
                  Ready To Ace Your Semester?
                </h2>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                  <a
                    href={`https://apna-college-bihar-6.onrender.com/ApnaCollegeBihar_v8.apk?t=${Date.now()}`}
                    download="ApnaCollegeBihar_v8.apk"
                    className="w-full sm:w-auto px-10 py-5 bg-white hover:bg-slate-50 text-blue-600 rounded-2xl font-black text-sm uppercase tracking-widest transition-all shadow-xl active:scale-95 flex items-center justify-center gap-2 hover:-translate-y-1 hover:shadow-2xl"
                  >
                    <Download size={20} /> Download App
                  </a>
                  <Link
                    to="/notes"
                    className="w-full sm:w-auto px-10 py-5 bg-blue-800/40 hover:bg-blue-800/60 text-white border border-blue-400/30 rounded-2xl font-black text-sm uppercase tracking-widest transition-all active:scale-95 flex items-center justify-center gap-2 hover:-translate-y-1 hover:bg-blue-800/70"
                  >
                    Explore Resources <ArrowRight size={20} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

    </div>
  );
}
