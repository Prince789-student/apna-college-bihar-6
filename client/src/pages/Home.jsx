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
  Plus, Minus, ExternalLink, Clock, Database, Briefcase, Layers, ArrowUpRight, X, Radio, Bell, Smartphone
} from 'lucide-react';
import { collection, onSnapshot, query, orderBy, limit, doc, getCountFromServer } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../context/AuthContext';
import SEO from '../components/SEO';
import GlobalSearch from '../components/GlobalSearch';
import CountUp from '../components/CountUp';
import Reveal from '../components/Reveal';
import HomeEducationalGuide from '../components/HomeEducationalGuide';
import { collegeData } from '../data/collegeData';
import { blogPosts } from '../data/blogPosts';
import toast from 'react-hot-toast';

export default function Home() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [stats, setStats] = useState({ users: 0, notes: 0, pyqs: 0, groups: 0 });
  const [activeTab, setActiveTab] = useState('academic');
  const [topDonors, setTopDonors] = useState([]);
  const [showScanner, setShowScanner] = useState(false);
  const [beuNotices, setBeuNotices] = useState([]);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // ── 4 Feature Pillars (Issue 1: Unified brand color system) ──
  const featurePillars = {
    academic: {
      label: 'Academic Engine',
      desc: 'Everything you need to score 9+ CGPA in BEU examinations',
      items: [
        { name: 'Notes Hub', desc: 'Unit-wise curated B.Tech notes for all branches', path: '/notes', icon: <BookOpen className="text-blue-600" size={20} />, bg: 'bg-blue-50 text-blue-600', badge: 'High Yield' },
        { name: 'PYQ Papers', desc: '5+ years verified university exam papers', path: '/pyq', icon: <FileText className="text-blue-600" size={20} />, bg: 'bg-blue-50 text-blue-600', badge: '5+ Years' },
        { name: 'BEU Syllabus', desc: 'Official 1st to 8th sem curriculum & credits', path: '/syllabus', icon: <Library className="text-blue-600" size={20} />, bg: 'bg-blue-50 text-blue-600', badge: 'Updated' },
        { name: 'SGPA / CGPA Calc', desc: 'Official BEU 10-point credit grading system', path: '/cgpa', icon: <Calculator className="text-blue-600" size={20} />, bg: 'bg-blue-50 text-blue-600', badge: 'Accurate' },
        { name: 'Lecture Finder', desc: 'Syllabus-mapped YouTube video lectures', path: '/lecture-finder', icon: <Youtube className="text-blue-600" size={20} />, bg: 'bg-blue-50 text-blue-600' },
        { name: 'BEU Result Check', desc: 'Fast semester result roll number portal', path: '/beu-result', icon: <Globe className="text-blue-600" size={20} />, bg: 'bg-blue-50 text-blue-600' },
        { name: 'Class Timetable', desc: 'Digital weekly schedule for your branch', path: '/timetable', icon: <Calendar className="text-blue-600" size={20} />, bg: 'bg-blue-50 text-blue-600' },
        { name: 'Attendance Safe', desc: '75% mandatory attendance tracker', path: '/attendance', icon: <ShieldCheck className="text-blue-600" size={20} />, bg: 'bg-blue-50 text-blue-600' },
      ]
    },
    counselling: {
      label: 'Admissions & Cutoffs',
      desc: 'BCECE & JEE Main UGEAC Counselling Guidance',
      items: [
        { name: 'College Predictor', desc: 'Admission probability across 38+ GECs', path: '/ugeac-predictor?tab=finder', icon: <Target className="text-blue-600" size={20} />, bg: 'bg-blue-50 text-blue-600', badge: 'UGEAC' },
        { name: 'Rank Predictor', desc: 'JEE Main percentile to Bihar state rank', path: '/ugeac-predictor?tab=predictor', icon: <Calculator className="text-blue-600" size={20} />, bg: 'bg-blue-50 text-blue-600' },
        { name: 'Counselling Guide', desc: 'Step-by-step choice filling & document checklist', path: '/ugeac-predictor?tab=guide', icon: <BookOpen className="text-blue-600" size={20} />, bg: 'bg-blue-50 text-blue-600' },
        { name: 'Colleges Directory', desc: '38+ Govt Engineering College profiles', path: '/colleges', icon: <Building2 className="text-blue-600" size={20} />, bg: 'bg-blue-50 text-blue-600' },
        { name: 'Compare Colleges', desc: 'Side-by-side placements & cutoffs', path: '/compare-colleges', icon: <Send className="text-blue-600" size={20} />, bg: 'bg-blue-50 text-blue-600', badge: 'Compare' },
      ]
    },
    community: {
      label: 'Mentorship & Focus',
      desc: 'Senior guidance, study groups & productivity tools',
      items: [
        { name: 'Free Senior Mentorship', desc: '1-on-1 guidance from top Bihar seniors', path: '/mentorship', icon: <GraduationCap className="text-blue-600" size={20} />, bg: 'bg-blue-50 text-blue-600', badge: 'Free' },
        { name: 'Focus Study Timer', desc: 'Pomodoro timer with distraction blocker', path: '/study', icon: <Timer className="text-blue-600" size={20} />, bg: 'bg-blue-50 text-blue-600' },
        { name: 'Peer Study Groups', desc: 'Collaborate with branch students in Bihar', path: '/groups', icon: <Users className="text-blue-600" size={20} />, bg: 'bg-blue-50 text-blue-600' },
        { name: 'Hackathon Hub', desc: 'Smart India Hackathon & tech competitions', path: '/hackathons', icon: <Award className="text-blue-600" size={20} />, bg: 'bg-blue-50 text-blue-600' },
      ]
    }
  };

  // ── Top Colleges Data ──
  const popularColleges = [
    { name: 'MIT Muzaffarpur', slug: 'mit-muzaffarpur', code: 'MIT', location: 'Muzaffarpur', estd: '1954', tag: 'Premier Institute' },
    { name: 'BCE Bhagalpur', slug: 'bce-bhagalpur', code: 'BCE', location: 'Bhagalpur', estd: '1960', tag: 'Top Ranked' },
    { name: 'GCE Gaya', slug: 'gce-gaya', code: 'GCE', location: 'Gaya', estd: '2008', tag: 'Govt College' },
    { name: 'DCE Darbhanga', slug: 'dce-darbhanga', code: 'DCE', location: 'Darbhanga', estd: '2008', tag: 'Govt College' },
    { name: 'MCE Motihari', slug: 'mce-motihari', code: 'MCE', location: 'Motihari', estd: '2008', tag: 'Govt College' },
    { name: 'BCE Bakhtiyarpur', slug: 'bce-bakhtiyarpur', code: 'BCEB', location: 'Patna', estd: '2016', tag: 'Patna Campus' },
  ];

  // ── FAQ Data ──
  const faqs = [
    {
      q: 'What is Apna College Bihar?',
      a: 'Apna College Bihar is the #1 dedicated academic portal for Bihar Engineering University (BEU) and AKU students, offering free B.Tech notes, verified PYQs, official syllabus, CGPA calculators, and UGEAC counselling tools.',
    },
    {
      q: 'How to download B.Tech notes and PYQs for free?',
      a: 'Visit the "Notes" or "PYQ" section from the navigation bar, choose your branch (CSE, Civil, Mechanical, EE, ECE) and current semester (1st to 8th). All study PDFs are accessible for immediate 1-click download with zero paywalls.',
    },
    {
      q: 'How does the BEU WhatsApp Notification Bot work?',
      a: 'Our automated crawler constantly monitors the official university portal (beu-bih.ac.in). Whenever an exam schedule, result, or circular is uploaded, the bot formats it into clean points and broadcasts alerts directly to student WhatsApp groups.',
    },
    {
      q: 'Is the CGPA / SGPA calculator accurate for BEU?',
      a: 'Yes, our CGPA/SGPA calculator strictly follows Bihar Engineering University’s official 10-point credit scheme, accounting for theory subjects, practicals, labs, and MOOCs credits.',
    },
    {
      q: 'How does the UGEAC College Predictor work for BCECEB?',
      a: 'Our predictor analyzes multi-year official opening and closing rank data from BCECEB. Enter your JEE Main percentile/rank and category (General, EWS, OBC, EBC, SC, ST) to see realistic admission probabilities for all 38+ Govt Engineering Colleges in Bihar.',
    },
    {
      q: 'Is there a dedicated mobile or desktop app?',
      a: 'Yes! We offer a native Android APK and an Electron Windows Desktop application for quick offline study access and distraction-free study sessions.',
    }
  ];

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
      "sameAs": ["https://www.youtube.com/@ApnaCollegeBihar"]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(f => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": { "@type": "Answer", "text": f.a }
      }))
    }
  ];

  // ── Firestore Data Fetching ──
  useEffect(() => {
    const unsubDonors = onSnapshot(query(collection(db, 'donors'), orderBy('amount', 'desc'), limit(4)), (snap) => {
      setTopDonors(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    });

    const qNotices = query(collection(db, 'beu_notifications'), limit(50));
    const unsubNotices = onSnapshot(qNotices, (snap) => {
      const data = snap.docs.map(d => ({ id: d.id, ...d.data() }));
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
          return (b.timestamp?.seconds || 0) - (a.timestamp?.seconds || 0);
        }
        return tB - tA;
      });
      setBeuNotices(data.slice(0, 3));
    });

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
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans relative overflow-hidden bg-mesh-light">
      <SEO
        title="Apna College Bihar | #1 Academic Platform for BEU & Bihar Engineering Students"
        description="Comprehensive academic portal for Bihar Engineering University (BEU) and AKU students. Free B.Tech Notes, 5+ Yrs PYQs, Official Syllabus, UGEAC Predictor, CGPA Calculator, and real-time WhatsApp Notice Alerts."
        keywords="BEU notes, Bihar engineering college, UGEAC 2026 predictor, B.Tech PYQ papers, Bihar college cutoff, CGPA calculator BEU, Apna College Bihar, Bihar engineering counselling, MIT Muzaffarpur, BCE Bhagalpur"
        schema={combinedSchema}
      />

      {/* Floating Animated Gradient Orbs in Background */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[650px] pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-50px] left-[5%] w-[480px] h-[480px] rounded-full bg-gradient-to-tr from-blue-300/30 to-indigo-400/20 blur-3xl animate-float" />
        <div className="absolute top-[80px] right-[8%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-violet-300/25 to-pink-300/20 blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-[20px] left-[35%] w-[380px] h-[380px] rounded-full bg-gradient-to-r from-emerald-200/20 to-teal-300/20 blur-3xl" />
      </div>

      {/* ═══════════════════════════════════════════ */}
      {/* ── 1. VIBRANT ANIMATED HERO SECTION ── */}
      {/* ═══════════════════════════════════════════ */}
      <section className="relative pt-8 pb-16 md:pt-16 md:pb-24 px-4 sm:px-6 md:px-12 z-10">
        <div className="container mx-auto max-w-5xl flex flex-col items-center text-center">
          
          {/* Animated Radar Pill Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/90 border border-blue-200/80 text-xs font-semibold text-blue-700 shadow-sm shadow-blue-500/10 mb-6 backdrop-blur-md hover:scale-105 transition-transform cursor-pointer">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="font-heading tracking-wide text-xs font-bold text-blue-700">2026 Academic Radar</span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-600 font-medium">BEU Circulars & WhatsApp Alerts Live</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.12] mb-6 text-slate-900">
            Bihar's <span className="text-gradient-hero">#1 Next-Gen</span> Academic Ecosystem
          </h1>

          {/* Subtitle */}
          <p className="text-slate-600 text-sm sm:text-base md:text-xl font-normal leading-relaxed max-w-3xl mb-8">
            Engineered exclusively for <strong className="text-slate-900 font-bold">38+ Bihar Government Engineering Colleges</strong> & BEU students. Access unit-wise notes, 5+ years verified PYQs, accurate CGPA calculators, and instant exam notifications.
          </p>

          {/* Action Buttons Row with Clear Mobile-Friendly Hierarchy */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 sm:gap-3.5 w-full max-w-xl mb-10">
            {/* Primary CTA */}
            <Link
              to="/mentorship"
              className="btn-shimmer w-full sm:w-auto px-6 py-3.5 sm:py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-heading font-bold text-sm transition-all shadow-md shadow-blue-500/20 active:scale-95 flex items-center justify-center gap-2"
            >
              <GraduationCap size={18} /> Free Senior Mentorship
            </Link>

            {/* Secondary CTAs Group on Mobile */}
            <div className="grid grid-cols-2 sm:flex sm:items-center gap-2.5 w-full sm:w-auto">
              <a
                href="#beu-radar"
                className="px-4 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-heading font-semibold text-xs sm:text-sm transition-all active:scale-95 flex items-center justify-center gap-1.5 sm:gap-2"
              >
                <Radio size={15} className="text-emerald-600 animate-pulse shrink-0" />
                <span className="truncate">Live Notices</span>
              </a>

              <a
                href="/apna-college-bihar-v54.apk"
                download="apna-college-bihar-v54.apk"
                className="px-4 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 hover:border-slate-300 font-heading font-semibold text-xs sm:text-sm transition-all shadow-xs active:scale-95 flex items-center justify-center gap-1.5 sm:gap-2"
              >
                <Smartphone size={15} className="text-slate-500 shrink-0" />
                <span className="truncate">Android App</span>
              </a>
            </div>
          </div>

          {/* Elevated Quick Search Command HUD with clear interactive chips */}
          <div className="w-full max-w-2xl bg-white/95 border border-slate-200/80 p-3 sm:p-4 rounded-2xl shadow-lg shadow-slate-200/50 backdrop-blur-xl mb-4">
            <GlobalSearch placeholder="Search 500+ Notes, BEU PYQs, Syllabus, Colleges..." />
            <div className="flex items-center gap-1.5 pt-3 px-1 text-xs text-slate-500 overflow-x-auto no-scrollbar sm:overflow-x-visible pb-1 sm:pb-0 sm:flex-wrap sm:justify-center">
              <span className="font-semibold text-slate-400 mr-0.5 shrink-0 hidden xs:inline">Quick:</span>
              {[
                { name: 'BEU Notes', path: '/notes' },
                { name: 'PYQ Papers', path: '/pyq' },
                { name: 'BEU Syllabus', path: '/syllabus' },
                { name: 'CGPA Calc', path: '/cgpa' },
                { name: 'UGEAC 2026', path: '/ugeac-predictor' },
                { name: 'BEU Result', path: '/beu-result' },
              ].map((chip, idx) => (
                <Link
                  key={idx}
                  to={chip.path}
                  className="px-2.5 py-1.5 sm:py-1 rounded-xl bg-slate-100/90 hover:bg-blue-50 border border-slate-200 hover:border-blue-400 text-slate-700 hover:text-blue-600 font-semibold text-xs shadow-xs transition-all hover:scale-105 active:scale-95 inline-flex items-center gap-1.5 shrink-0 whitespace-nowrap"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" aria-hidden="true" />
                  {chip.name}
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* ── 2. REAL-TIME STATS BENTO HUD ── */}
      {/* ═══════════════════════════════════════════ */}
      <section className="py-8 px-4 sm:px-6 md:px-12 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Curated Notes', val: stats.notes, suffix: '+', icon: <BookOpen size={22} />, bg: 'bg-blue-50 text-blue-600 border-blue-200/60' },
              { label: 'Verified PYQs', val: stats.pyqs, suffix: '+', icon: <FileText size={22} />, bg: 'bg-blue-50 text-blue-600 border-blue-200/60' },
              { label: 'Active Students', val: stats.users, suffix: '+', icon: <Users size={22} />, bg: 'bg-emerald-50 text-emerald-600 border-emerald-200/60' },
              { label: 'Govt Colleges', val: 38, suffix: '+', icon: <Building2 size={22} />, bg: 'bg-blue-50 text-blue-600 border-blue-200/60' },
            ].map((item, idx) => (
              <div key={idx} className="glass-card-light p-5 rounded-2xl flex items-center gap-4 bg-white/90">
                <div className={`w-12 h-12 rounded-xl ${item.bg} border flex items-center justify-center shrink-0 p-3 shadow-xs`}>
                  {item.icon}
                </div>
                <div>
                  <span className="font-heading text-2xl md:text-3xl font-black text-slate-900 tracking-tight block">
                    <CountUp end={item.val} suffix={item.suffix} duration={1400} />
                  </span>
                  <p className="text-xs text-slate-500 font-semibold mt-0.5">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* ── 3. LIVE BEU RADAR & NOTICES ── */}
      {/* ═══════════════════════════════════════════ */}
      <section id="beu-radar" className="py-16 px-4 sm:px-6 md:px-12 relative z-10">
        <div className="container mx-auto max-w-6xl">
          
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold mb-2">
              <Radio size={14} className="text-emerald-500 animate-pulse" /> Live BEU Circular Radar
            </div>
            <h2 className="font-heading text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
              Official University Notifications
            </h2>
            <p className="text-xs text-slate-500 mt-1 font-medium">
              Auto-synced from Bihar Engineering University portal (beu-bih.ac.in)
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {beuNotices.length > 0 ? (
              beuNotices.map((notice, idx) => (
                <a
                  key={notice.id || idx}
                  href={notice.pdfUrl || (notice.link && notice.link.startsWith('http') ? notice.link : `https://beu-bih.ac.in/backend/${encodeURI(notice.link || '')}`)}
                  target="_blank"
                  rel="noreferrer"
                  className={`glass-card-light p-5 rounded-2xl flex flex-col justify-between group hover:border-blue-400 relative overflow-hidden bg-white ${
                    idx === 2 ? 'sm:col-span-2 lg:col-span-1' : ''
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="px-2.5 py-1 rounded-xl bg-emerald-600 text-white text-xs font-bold tracking-wide shadow-xs animate-pulse">
                        NEW NOTICE
                      </span>
                      <span className="text-xs text-slate-500 font-semibold flex items-center gap-1">
                        <Calendar size={12} className="text-slate-400" />
                        {notice.date || notice.noticedate || 'Recent'}
                      </span>
                    </div>

                    <h3 className="font-heading text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-3 leading-snug">
                      {notice.title || notice.board}
                    </h3>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-blue-600 font-bold">
                    <span>View Official PDF</span>
                    <ArrowUpRight size={15} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </a>
              ))
            ) : (
              <div className="col-span-1 sm:col-span-2 lg:col-span-3 glass-card-light p-8 rounded-2xl text-center text-slate-500 text-sm">
                Fetching latest BEU notices...
              </div>
            )}
          </div>

          {/* Centered CTA following natural eye flow (Issue 7) */}
          <div className="mt-8 text-center">
            <Link
              to="/notifications"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-white border border-slate-200 hover:border-blue-500 text-xs font-bold text-slate-700 hover:text-blue-600 transition-all shadow-xs hover:shadow-sm active:scale-95"
            >
              View Full Notice Archive <ArrowRight size={14} />
            </Link>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* ── 4. COMPLETE FEATURE MATRIX (THE 4 PILLARS) ── */}
      {/* ═══════════════════════════════════════════ */}
      <section className="py-16 px-4 sm:px-6 md:px-12 relative z-10">
        <div className="container mx-auto max-w-6xl">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-blue-600 font-heading font-extrabold text-xs tracking-wider">
              Complete Feature Matrix
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-black text-slate-900 mt-1">
              Everything For Your Engineering Journey
            </h2>
            <p className="text-sm text-slate-500 mt-2 font-medium">
              Explore specialized tools built for preparation, counselling, and campus productivity.
            </p>

            {/* Pillar Selector Tabs - Responsive Segmented Control */}
            <div
              role="tablist"
              aria-label="Academic and Tool Pillars"
              className="grid grid-cols-3 sm:inline-flex p-1.5 rounded-xl bg-slate-100 border border-slate-200/80 shadow-inner mt-7 w-full sm:w-auto max-w-xl mx-auto gap-1"
            >
              {Object.entries(featurePillars).map(([key, data]) => {
                const isActive = activeTab === key;
                return (
                  <button
                    key={key}
                    role="tab"
                    id={`tab-${key}`}
                    aria-selected={isActive}
                    aria-controls="pillar-grid"
                    onClick={() => setActiveTab(key)}
                    className={`px-2.5 sm:px-4 py-2 rounded-lg text-xs font-heading font-extrabold transition-all text-center truncate ${
                      isActive
                        ? 'bg-white text-blue-600 shadow-xs border border-slate-200/60'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                    }`}
                  >
                    {data.label}
                  </button>
                );
              })}
            </div>
            {/* Connecting visual indicator bridging tabs to cards */}
            <div className="w-8 h-3 border-l-2 border-r-2 border-blue-500/20 mx-auto hidden sm:block" />
          </div>

          {/* Pillar Cards Grid (Issue 4: Standardized 3-column grid cadence) */}
          <div id="pillar-grid" role="tabpanel" aria-labelledby={`tab-${activeTab}`} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {featurePillars[activeTab].items.map((item, idx) => (
              <Link
                key={idx}
                to={item.path}
                className="glass-card-light p-5 rounded-2xl flex flex-col justify-between group hover:border-blue-400 relative bg-white"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-11 h-11 rounded-xl ${item.bg} flex items-center justify-center group-hover:scale-110 transition-transform shadow-xs`}>
                      {item.icon}
                    </div>
                    {item.badge && (
                      <span className="px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="font-heading text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-1.5">
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-400">Direct Access</span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50 group-hover:bg-blue-600 text-blue-600 group-hover:text-white font-heading font-bold text-xs transition-all shadow-xs">
                    Launch Tool <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* ── 5. TOP BIHAR ENGINEERING COLLEGES ── */}
      {/* ═══════════════════════════════════════════ */}
      <section id="colleges-section" className="py-16 px-4 sm:px-6 md:px-12 relative z-10">
        <div className="container mx-auto max-w-6xl">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-blue-600 font-heading font-extrabold text-xs tracking-wider">
                38+ Govt Engineering Institutions
              </span>
              <h2 className="font-heading text-3xl font-black text-slate-900 mt-1">
                Top Engineering Colleges in Bihar
              </h2>
              <p className="text-xs text-slate-500 mt-1 font-medium">
                Explore campus profiles, branch seat intake, and previous years UGEAC cutoffs.
              </p>
            </div>

            <Link
              to="/colleges"
              className="px-4 py-2.5 rounded-xl bg-white border border-slate-200 hover:border-blue-500 text-xs font-bold text-slate-700 hover:text-blue-600 transition-all shadow-xs inline-flex items-center gap-1.5 active:scale-95"
            >
              Browse All 38+ Colleges <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {popularColleges.map((col, idx) => (
              <Link
                key={idx}
                to={`/college/${col.slug}`}
                className="glass-card-light p-5 rounded-2xl group hover:border-blue-400 transition-all flex flex-col justify-between bg-white"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-1 rounded-lg bg-blue-50 border border-blue-200 text-blue-700 font-heading font-bold text-xs">
                      {col.code}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">Estd. {col.estd}</span>
                  </div>

                  <h3 className="font-heading text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {col.name}
                  </h3>

                  <p className="text-xs text-slate-500 mt-1 flex items-center gap-1 font-medium">
                    <MapPin size={13} className="text-blue-500" /> {col.location}, Bihar
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-600 group-hover:text-blue-600">
                  <span>View Cutoff & Campus Info</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* ── 6. WALL OF FAME (TOP DONORS) ── */}
      {/* ═══════════════════════════════════════════ */}
      <section className="py-16 px-4 sm:px-6 md:px-12 relative z-10">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 text-center relative overflow-hidden shadow-xs">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold mb-4">
              <Heart size={14} className="fill-blue-600 text-blue-600" /> Student Powered
            </div>
            
            <h2 className="font-heading text-2xl md:text-3xl font-black text-slate-900">
              Platform Wall of Fame
            </h2>
            <p className="text-xs text-slate-500 max-w-xl mx-auto mt-2 mb-8 font-medium">
              Apna College Bihar is 100% free with zero paywalls. Heartfelt thanks to students who contribute to keeping our servers running!
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto mb-8">
              {topDonors.map((donor, idx) => (
                <div key={idx} className="bg-slate-50/60 border border-slate-200/80 p-4 rounded-2xl text-center shadow-xs">
                  <div className="w-11 h-11 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-bold text-base mx-auto flex items-center justify-center mb-2 shadow-xs">
                    {donor.name?.charAt(0) || 'S'}
                  </div>
                  <h3 className="text-xs font-bold text-slate-900 truncate">{donor.name}</h3>
                  <p className="text-xs text-slate-500 truncate">{donor.college || 'Bihar GEC'}</p>
                  <p className="text-xs font-heading font-black text-emerald-600 mt-1">₹{donor.amount}</p>
                </div>
              ))}
            </div>

            <button
              onClick={() => setShowScanner(true)}
              className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-heading font-bold text-sm transition-all shadow-sm active:scale-95 inline-flex items-center gap-2"
            >
              <Heart size={16} className="fill-white" /> Contribute via UPI
            </button>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* ── 7. FAQ ACCORDION ── */}
      {/* ═══════════════════════════════════════════ */}
      <section className="py-16 px-4 sm:px-6 md:px-12 relative z-10">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-10">
            <span className="text-blue-600 font-heading font-extrabold text-xs tracking-wider">Got Questions?</span>
            <h2 className="font-heading text-3xl font-black text-slate-900 mt-1">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="glass-card-light rounded-2xl overflow-hidden border border-slate-200/80 bg-white">
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left transition-colors hover:bg-slate-50"
                >
                  <h3 className="text-sm font-bold text-slate-800 pr-4">{faq.q}</h3>
                  <div className="shrink-0 text-blue-600">
                    {openFaqIndex === i ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>
                {openFaqIndex === i && (
                  <div className="px-5 pb-5 text-slate-600 text-xs leading-relaxed font-medium border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Guide Component */}
      <HomeEducationalGuide />

      {/* ── SCANNER MODAL ── */}
      {showScanner && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm" onClick={() => setShowScanner(false)}>
          <div className="bg-white rounded-2xl shadow-2xl max-w-[420px] w-full p-6 text-center animate-fadeIn border border-slate-200" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
              <div className="flex items-center gap-2">
                <Heart size={18} className="text-blue-600 fill-blue-600" />
                <h3 className="font-heading font-bold text-slate-900 text-sm">Support Apna College Bihar</h3>
              </div>
              <button onClick={() => setShowScanner(false)} className="p-1.5 rounded-xl text-slate-400 hover:text-slate-600 bg-slate-100">
                <X size={16} />
              </button>
            </div>

            <p className="text-xs text-slate-500 mb-5 leading-relaxed font-medium">
              Help us cover Cloud database and server hosting expenses. Mention your <strong>Name & College</strong> in payment remark for the Wall of Fame!
            </p>

            <div className="w-48 h-48 bg-white rounded-2xl p-2 mx-auto mb-5 border-2 border-dashed border-blue-200 shadow-sm">
              <img src="/scanner-qr.jpg" alt="UPI QR" className="w-full h-full object-contain rounded-xl" />
            </div>

            <div
              onClick={() => {
                navigator.clipboard.writeText('apnacollegebihar@slc');
                toast.success('UPI ID copied to clipboard!');
              }}
              className="p-3.5 rounded-xl bg-slate-50 border border-blue-200/80 flex items-center justify-between cursor-pointer hover:bg-blue-50 transition-colors"
            >
              <div className="text-left">
                <p className="text-xs text-slate-500 font-semibold">UPI ID (Tap to Copy)</p>
                <p className="text-xs font-mono font-bold text-blue-600">apnacollegebihar@slc</p>
              </div>
              <ExternalLink size={14} className="text-blue-500" />
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
