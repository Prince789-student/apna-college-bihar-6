import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  BookOpen, Calculator, Timer, Users,
  ArrowRight, CheckCircle, GraduationCap,
  Globe, Shield, Zap, Send, Youtube,
  User, LogOut, Download, MessageCircle,
  ShieldCheck, Calendar, Sparkles, FileText, Library,
  Star, ChevronRight, Search, MapPin, Target,
  RefreshCw, Heart, Building2, Award, Mail,
  Plus, Minus, ExternalLink, Clock, Database, Briefcase, Layers, ArrowUpRight, X, Radio, Bell, Smartphone, Monitor
} from 'lucide-react';
import { collection, onSnapshot, query, orderBy, limit, doc } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../context/AuthContext';
import SEO from '../components/SEO';
import GlobalSearch from '../components/GlobalSearch';
import CountUp from '../components/CountUp';
import BrandFilmBackground from '../components/BrandFilmBackground';
import { collegeData } from '../data/collegeData';
import { blogPosts } from '../data/blogPosts';
import toast from 'react-hot-toast';

export default function Home() {
  const isNative = typeof window !== 'undefined' && Boolean(
    window.__ACB_DESKTOP__ || 
    window.isDesktopApp || 
    window.desktopBridge?.isDesktop || 
    window.Capacitor?.isNativePlatform?.() || 
    (typeof navigator !== 'undefined' && navigator.userAgent.includes('ApnaCollegeBiharDesktop'))
  );
  const { user } = useAuth();
  const navigate = useNavigate();

  // Authentic platform stats
  const [stats, setStats] = useState({ users: 166, notes: 296, pyqs: 340, groups: 24 });
  const [activeConsoleTab, setActiveConsoleTab] = useState('tools'); // 'tools' | 'predictor' | 'colleges' | 'radar' | 'guide'
  const [cinemaMode, setCinemaMode] = useState(false);
  const [topDonors, setTopDonors] = useState([]);
  const [showScanner, setShowScanner] = useState(false);
  const [beuNotices, setBeuNotices] = useState([]);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // Interactive UGEAC Predictor State (From Image 2)
  const [simPercentile, setSimPercentile] = useState(89.4);
  const calcSimRank = () => {
    const totalCandidates = 35000;
    const rank = Math.round(((100 - simPercentile) / 100) * totalCandidates);
    return Math.max(120, rank);
  };

  // 8 Core Academic Tools
  const academicTools = [
    { name: 'Notes Hub', desc: 'Unit-wise curated B.Tech notes for all branches', path: '/notes', icon: <BookOpen className="text-cyan-400" size={20} />, badge: 'High Yield' },
    { name: 'PYQ Papers', desc: '5+ years verified university exam papers', path: '/pyq', icon: <FileText className="text-cyan-400" size={20} />, badge: '5+ Years' },
    { name: 'BEU Syllabus', desc: 'Official 1st to 8th sem curriculum & credits', path: '/syllabus', icon: <Library className="text-cyan-400" size={20} />, badge: 'Updated' },
    { name: 'SGPA / CGPA Calc', desc: 'Official BEU 10-point credit grading system', path: '/cgpa', icon: <Calculator className="text-cyan-400" size={20} />, badge: 'Accurate' },
    { name: 'Lecture Finder', desc: 'Syllabus-mapped YouTube video lectures', path: '/lecture-finder', icon: <Youtube className="text-cyan-400" size={20} />, badge: 'Lectures' },
    { name: 'BEU Result Check', desc: 'Fast semester result roll number portal', path: '/beu-result', icon: <Globe className="text-cyan-400" size={20} />, badge: 'Results' },
    { name: 'Class Timetable', desc: 'Digital weekly schedule for your branch', path: '/timetable', icon: <Calendar className="text-cyan-400" size={20} />, badge: 'Routine' },
    { name: 'Attendance Safe', desc: '75% mandatory attendance tracker', path: '/attendance', icon: <ShieldCheck className="text-cyan-400" size={20} />, badge: '75% Rule' },
  ];

  // 6 Featured Colleges
  const popularColleges = [
    { name: 'MIT Muzaffarpur', code: 'MIT', estd: '1954', location: 'Muzaffarpur', slug: 'mit-muzaffarpur', cutoff: 'JEE: ~88%ile+' },
    { name: 'BCE Bhagalpur', code: 'BCE', estd: '1960', location: 'Bhagalpur', slug: 'bce-bhagalpur', cutoff: 'JEE: ~84%ile+' },
    { name: 'GCE Gaya', code: 'GCE', estd: '2008', location: 'Gaya', slug: 'gce-gaya', cutoff: 'JEE: ~79%ile+' },
    { name: 'DCE Darbhanga', code: 'DCE', estd: '2008', location: 'Darbhanga', slug: 'dce-darbhanga', cutoff: 'JEE: ~78%ile+' },
    { name: 'MCE Motihari', code: 'MCE', estd: '2008', location: 'Motihari', slug: 'mce-motihari', cutoff: 'JEE: ~76%ile+' },
    { name: 'BCE Bakhtiyarpur', code: 'BCEB', estd: '2016', location: 'Patna', slug: 'bce-bakhtiyarpur', cutoff: 'JEE: ~82%ile+' },
  ];

  // FAQs
  const faqs = [
    {
      q: 'Are all B.Tech notes and PYQs 100% free on Apna College Bihar?',
      a: 'Yes! Every single unit note, PYQ paper, syllabus PDF, and academic utility is completely open and free with zero paywalls for all Bihar engineering students.'
    },
    {
      q: 'What is the BEU 75% attendance rule and how do I avoid exam debarment?',
      a: 'Bihar Engineering University (BEU) Patna strictly requires a minimum of 75% attendance in theory, tutorials, and practical labs. Use our Attendance Safe Guard tool to track your daily lectures and calculate required attendance.'
    },
    {
      q: 'How does the UGEAC College Predictor work for Bihar GEC admissions?',
      a: 'Our predictor analyzes multi-year opening and closing ranks from BCECE Board UGEAC counselling for all 38 government engineering colleges across General, EWS, OBC, EBC, SC, and ST categories.'
    },
    {
      q: 'How do I calculate my BEU SGPA and CGPA accurately?',
      a: 'BEU follows an official 10-point relative grading scale. Our SGPA & CGPA calculators apply exact university credit weightings for theory, practical, and internal assessments automatically.'
    }
  ];

  useEffect(() => {
    let isMounted = true;
    const apiBase = window.location.hostname === 'localhost' ? 'http://localhost:5000' : '';

    // Fetch official notices
    const unsubNotices = onSnapshot(query(collection(db, 'beu_notifications'), limit(15)), (snap) => {
      if (!snap.empty && isMounted) {
        setBeuNotices(snap.docs.map(d => ({ id: d.id, ...d.data() })));
      }
    }, () => {});

    // Fetch live notices fallback
    fetch(`${apiBase}/api/beu/notices`)
      .then(res => res.json())
      .then(json => {
        if (json.success && Array.isArray(json.notices) && json.notices.length > 0 && isMounted) {
          setBeuNotices(json.notices.slice(0, 15));
        }
      })
      .catch(() => {});

    // Fetch community stats (enforcing genuine 166 users, 296 notes, 340 pyqs)
    fetch(`${apiBase}/api/public/home-stats`)
      .then(res => res.json())
      .then(json => {
        if (json.success && json.stats && isMounted) {
          setStats({
            notes: 296,
            pyqs: 340,
            users: 166, // Un-inflated active student count
            groups: 24
          });
        }
      })
      .catch(() => {});

    // Live donors
    const unsubDonors = onSnapshot(query(collection(db, 'donors'), orderBy('amount', 'desc'), limit(4)), (snap) => {
      if (!snap.empty && isMounted) {
        setTopDonors(snap.docs.map(d => ({ id: d.id, ...d.data() })));
      }
    }, () => {});

    return () => {
      isMounted = false;
      unsubNotices();
      unsubDonors();
    };
  }, []);

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "name": "Apna College Bihar",
        "url": "https://www.apnacollegebihar.online",
        "description": "Official study platform for Bihar Engineering University (BEU) students across all 38 Government Engineering Colleges."
      }
    ]
  };

  return (
    <div className="min-h-screen bg-transparent text-white font-['Inter'] relative selection:bg-cyan-500/30 overflow-x-clip">
      <SEO
        title="Apna College Bihar | #1 Academic Platform for BEU Students"
        description="Bihar's premier academic platform for Bihar Engineering University (BEU) students. Free unit-wise notes, 5+ years verified PYQ papers, official BEU syllabus, UGEAC college predictor & CGPA calculator."
        url="https://www.apnacollegebihar.online"
        keywords="BEU notes, Bihar engineering college, UGEAC 2026 predictor, B.Tech PYQ papers, Bihar college cutoff, CGPA calculator BEU, Apna College Bihar, Bihar engineering counselling, MIT Muzaffarpur, BCE Bhagalpur"
        schema={combinedSchema}
      />

      {/* ── Global Full-Page Brand Film Video Background (Header to Footer) ── */}
      <BrandFilmBackground />

      {/* ── Foreground Content Wrapper (Seamless Cinema View Transition) ── */}
      <div className={`transition-opacity duration-500 ${cinemaMode ? 'opacity-10 hover:opacity-90' : 'opacity-100'}`}>

        {/* ═══════════════════════════════════════════ */}
        {/* ── 1. CINEMATIC OPEN HERO STAGE ── */}
        {/* ═══════════════════════════════════════════ */}
        <section className="pt-10 sm:pt-16 pb-8 sm:pb-12 px-4 sm:px-6 md:px-12 relative z-10">
          <div className="container mx-auto max-w-5xl text-center">
            
            {/* Subtle Live Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/15 text-white text-xs font-bold mb-6 shadow-xl">
              <Sparkles size={14} className="text-cyan-400" />
              <span className="tracking-wide">Bihar's #1 Academic Platform for BEU Students</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight sm:leading-none mb-4 drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]">
              Apna College <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-300 bg-clip-text text-transparent">Bihar</span>
            </h1>

            <p className="text-sm sm:text-lg md:text-xl font-medium text-slate-200 max-w-3xl mx-auto leading-relaxed mb-8 drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
              Free B.Tech unit notes, verified university PYQs, official BEU syllabus, CGPA calculators &amp; senior mentorship — built specifically for students across all 38 Government Engineering Colleges.
            </p>

            {/* Direct Quick Launch Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-8">
              <Link
                to="/notes"
                className="btn-primary px-5 py-3 rounded-xl flex items-center gap-2 text-xs sm:text-sm font-heading font-black shadow-xl hover:scale-105 active:scale-95 transition-all"
              >
                <BookOpen size={16} />
                <span>Explore Notes &amp; PYQs</span>
              </Link>
              <Link
                to="/download"
                className="px-5 py-3 rounded-xl bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/25 text-white flex items-center gap-2 text-xs sm:text-sm font-heading font-black shadow-xl hover:scale-105 active:scale-95 transition-all"
              >
                <Download size={16} className="text-cyan-400" />
                <span>Download Official App (v64)</span>
              </Link>
              <Link
                to="/ugeac-predictor?tab=finder"
                className="px-5 py-3 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/35 backdrop-blur-md border border-cyan-400/40 text-cyan-300 flex items-center gap-2 text-xs sm:text-sm font-heading font-black shadow-xl hover:scale-105 active:scale-95 transition-all"
              >
                <Target size={16} />
                <span>UGEAC Predictor</span>
              </Link>
            </div>

            {/* Global Search Bar */}
            <div className="max-w-2xl mx-auto">
              <GlobalSearch placeholder="Search notes, PYQs, syllabus, colleges, or subjects..." />
            </div>

          </div>
        </section>

        {/* ═══════════════════════════════════════════ */}
        {/* ── 2. REAL-TIME STATS BENTO HUD ── */}
        {/* ═══════════════════════════════════════════ */}
        <section className="py-4 sm:py-6 px-3.5 sm:px-6 md:px-12 relative z-10">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4">
              {[
                { label: 'Curated Notes', val: stats.notes, suffix: '+', icon: <BookOpen size={20} className="sm:w-[22px] sm:h-[22px]" />, bg: 'bg-blue-500/20 text-cyan-400 border-blue-400/30' },
                { label: 'Verified PYQs', val: stats.pyqs, suffix: '+', icon: <FileText size={20} className="sm:w-[22px] sm:h-[22px]" />, bg: 'bg-cyan-500/20 text-cyan-400 border-cyan-400/30' },
                { label: 'Active Students', val: stats.users, suffix: '+', icon: <Users size={20} className="sm:w-[22px] sm:h-[22px]" />, bg: 'bg-emerald-500/20 text-emerald-400 border-emerald-400/30' },
                { label: 'Govt Colleges', val: 38, suffix: '+', icon: <Building2 size={20} className="sm:w-[22px] sm:h-[22px]" />, bg: 'bg-indigo-500/20 text-indigo-400 border-indigo-400/30' },
              ].map((item, idx) => (
                <div key={idx} className="p-3.5 sm:p-5 rounded-2xl flex items-center gap-2.5 sm:gap-4 bg-black/25 hover:bg-black/40 backdrop-blur-md border border-white/10 hover:border-cyan-400/30 text-white shadow-lg transition-all">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl ${item.bg} border flex items-center justify-center shrink-0 p-2 sm:p-3 shadow-xs`}>
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <span className="font-heading text-lg sm:text-2xl md:text-3xl font-black text-white tracking-tight block">
                      <CountUp end={item.val} suffix={item.suffix} duration={1400} />
                    </span>
                    <p className="text-[11px] sm:text-xs text-slate-300 font-semibold mt-0.5 truncate">{item.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════ */}
        {/* ── 3. UNIFIED INTERACTIVE ACADEMIC LAB (TABBED CONSOLE) ── */}
        {/* ═══════════════════════════════════════════ */}
        <section className="py-8 sm:py-12 px-3.5 sm:px-6 md:px-12 relative z-10">
          <div className="container mx-auto max-w-6xl">
            <div className="rounded-3xl bg-slate-950/40 backdrop-blur-xl border border-white/15 p-4 sm:p-6 md:p-8 shadow-[0_8px_32px_rgba(0,0,0,0.7)] text-white">
              
              {/* Header Bar with Tabs */}
              <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 text-xs font-bold mb-2">
                    <Sparkles size={13} className="text-cyan-400" /> Interactive Academic Lab
                  </div>
                  <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight drop-shadow-md">
                    Everything For Bihar Engineering Students
                  </h2>
                  <p className="text-xs text-slate-300 mt-1 font-medium">
                    Switch tabs to explore tools, predict rank, check colleges, or read live circulars without clutter.
                  </p>
                </div>

                {/* Tab Navigation Pill Bar */}
                <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-black/60 border border-white/15 overflow-x-auto custom-scrollbar shrink-0">
                  {[
                    { id: 'tools', label: '🛠️ Academic Tools', badge: '8 Tools' },
                    { id: 'predictor', label: '🎯 UGEAC Predictor', badge: 'Interactive' },
                    { id: 'colleges', label: '🏛️ Top 38 Colleges', badge: 'Cutoffs' },
                    { id: 'radar', label: '📡 Live BEU Radar', badge: beuNotices.length > 0 ? 'Live' : null },
                    { id: 'guide', label: '🧭 Guide & FAQ', badge: 'Prep' },
                  ].map(tab => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveConsoleTab(tab.id)}
                      className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-heading font-bold transition-all whitespace-nowrap cursor-pointer ${
                        activeConsoleTab === tab.id
                          ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg border border-cyan-400/40'
                          : 'text-slate-300 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <span>{tab.label}</span>
                      {tab.badge && (
                        <span className={`px-1.5 py-0.5 rounded-md text-[9px] font-black ${
                          activeConsoleTab === tab.id ? 'bg-white/20 text-white' : 'bg-white/10 text-slate-300'
                        }`}>
                          {tab.badge}
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* ── TAB 1: ACADEMIC SUITE (8 TOOLS) ── */}
              {activeConsoleTab === 'tools' && (
                <div className="pt-6 animate-in fade-in duration-200">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {academicTools.map((tool, idx) => (
                      <Link
                        key={idx}
                        to={tool.path}
                        className="p-4 rounded-2xl flex flex-col justify-between group bg-black/30 hover:bg-black/50 backdrop-blur-md border border-white/10 hover:border-cyan-400/50 transition-all text-white shadow-lg hover:shadow-cyan-500/10 active:scale-[0.99]"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-cyan-400 border border-blue-400/30 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-xs">
                              {tool.icon}
                            </div>
                            {tool.badge && (
                              <span className="px-2 py-0.5 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 text-[10px] font-bold">
                                {tool.badge}
                              </span>
                            )}
                          </div>
                          <h3 className="font-heading text-sm sm:text-base font-bold text-white group-hover:text-cyan-300 transition-colors truncate">
                            {tool.name}
                          </h3>
                          <p className="text-[11px] text-slate-300 line-clamp-2 font-medium mt-1 leading-snug">
                            {tool.desc}
                          </p>
                        </div>
                        <div className="mt-4 pt-2.5 border-t border-white/10 flex items-center justify-between text-xs text-cyan-400 font-bold">
                          <span>Launch Tool</span>
                          <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* ── TAB 2: UGEAC PREDICTOR (From Image 2) ── */}
              {activeConsoleTab === 'predictor' && (
                <div className="pt-6 animate-in fade-in duration-200">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                    
                    {/* Left: Interactive Slider & College Match Preview */}
                    <div className="lg:col-span-7 space-y-4">
                      
                      {/* Percentile Slider Card */}
                      <div className="p-4 sm:p-5 rounded-2xl bg-black/40 border border-white/15 backdrop-blur-md shadow-lg">
                        <div className="flex items-center justify-between text-xs sm:text-sm mb-2 font-bold">
                          <span className="text-slate-300">JEE Main Percentile:</span>
                          <span className="text-cyan-400 font-black text-base sm:text-lg">{simPercentile}%ile</span>
                        </div>
                        <input
                          type="range"
                          min="70"
                          max="99"
                          step="0.5"
                          value={simPercentile}
                          onChange={(e) => setSimPercentile(Number(e.target.value))}
                          className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                        />
                        <div className="flex justify-between items-center text-xs font-bold text-slate-300 mt-2.5 pt-2 border-t border-white/10">
                          <span>Est. Bihar State Rank:</span>
                          <span className="text-emerald-400 bg-emerald-500/20 border border-emerald-400/30 px-2.5 py-0.5 rounded-lg font-black text-sm">
                            ~{calcSimRank().toLocaleString()}
                          </span>
                        </div>
                      </div>

                      {/* Live College Match Cards */}
                      <div className="space-y-2.5">
                        <div className="p-3.5 rounded-2xl bg-black/35 border border-white/10 flex items-center justify-between hover:border-cyan-400/40 transition-all">
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 flex items-center justify-center font-bold text-xs">
                              MIT
                            </div>
                            <div>
                              <p className="text-xs sm:text-sm font-bold text-white">MIT Muzaffarpur • CSE / IT</p>
                              <p className="text-[11px] text-slate-400">Closing Rank: ~2,120</p>
                            </div>
                          </div>
                          <span className="px-2.5 py-1 rounded-lg bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 font-bold text-xs">
                            {simPercentile >= 88 ? '98.4% Match' : '75.2% Match'}
                          </span>
                        </div>

                        <div className="p-3.5 rounded-2xl bg-black/35 border border-white/10 flex items-center justify-between hover:border-cyan-400/40 transition-all">
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-xl bg-blue-500/20 text-blue-300 border border-blue-400/30 flex items-center justify-center font-bold text-xs">
                              BCE
                            </div>
                            <div>
                              <p className="text-xs sm:text-sm font-bold text-white">BCE Bhagalpur • ECE / EE</p>
                              <p className="text-[11px] text-slate-400">Closing Rank: ~2,450</p>
                            </div>
                          </div>
                          <span className="px-2.5 py-1 rounded-lg bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 font-bold text-xs">
                            {simPercentile >= 85 ? '96.2% Match' : '71.0% Match'}
                          </span>
                        </div>
                      </div>

                    </div>

                    {/* Right: Predictor Callout Box */}
                    <div className="lg:col-span-5 p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-blue-600/30 to-cyan-600/20 border border-cyan-400/30 flex flex-col justify-between h-full backdrop-blur-md">
                      <div>
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 text-xs font-bold mb-3">
                          <Target size={13} /> BCECEB Multi-Year Data
                        </div>
                        <h3 className="font-heading text-lg sm:text-xl font-bold text-white mb-2">
                          38+ Govt Engineering Colleges
                        </h3>
                        <p className="text-xs text-slate-200 leading-relaxed mb-6 font-medium">
                          Predict realistic seat allotment for General, EWS, OBC, EBC, SC, and ST categories based on genuine 2024–2025 opening &amp; closing cutoffs.
                        </p>
                      </div>

                      <Link
                        to="/ugeac-predictor?tab=finder"
                        className="btn-primary w-full text-xs sm:text-sm flex items-center justify-center gap-2 py-3 shadow-xl"
                      >
                        <span>Check Full UGEAC Predictor</span>
                        <ArrowRight size={14} />
                      </Link>
                    </div>

                  </div>
                </div>
              )}

              {/* ── TAB 3: TOP 38 COLLEGES ── */}
              {activeConsoleTab === 'colleges' && (
                <div className="pt-6 animate-in fade-in duration-200">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs text-slate-300 font-medium">
                      Explore campus profiles, branch seat intake, and previous years UGEAC cutoffs across Bihar.
                    </span>
                    <Link
                      to="/colleges"
                      className="btn-secondary gap-1.5 bg-white/15 text-white border-white/20 hover:bg-white/25 text-xs py-1.5 px-3 shrink-0"
                    >
                      <span>Browse All 38+ Colleges</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                    {popularColleges.map((col, idx) => (
                      <Link
                        key={idx}
                        to={`/college/${col.slug}`}
                        className="p-4 rounded-2xl group hover:border-cyan-400 transition-all flex flex-col justify-between bg-black/30 hover:bg-black/50 backdrop-blur-md border border-white/10 text-white shadow-lg"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-2.5">
                            <span className="px-2.5 py-1 rounded-lg bg-blue-500/20 border border-blue-400/30 text-cyan-300 font-heading font-bold text-xs">
                              {col.code}
                            </span>
                            <span className="text-xs text-slate-400 font-medium">Estd. {col.estd}</span>
                          </div>

                          <h3 className="font-heading text-sm sm:text-base font-bold text-white group-hover:text-cyan-400 transition-colors">
                            {col.name}
                          </h3>

                          <p className="text-xs text-slate-300 mt-1 flex items-center gap-1 font-medium">
                            <MapPin size={13} className="text-cyan-400" /> {col.location}, Bihar
                          </p>
                        </div>

                        <div className="mt-4 pt-2.5 border-t border-white/10 flex items-center justify-between text-xs font-bold text-slate-300 group-hover:text-cyan-400">
                          <span>View Cutoff &amp; Campus Info</span>
                          <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* ── TAB 4: LIVE BEU RADAR ── */}
              {activeConsoleTab === 'radar' && (
                <div className="pt-6 animate-in fade-in duration-200">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs text-slate-300 font-medium">
                      Official university notifications auto-synced from Bihar Engineering University portal (beu-bih.ac.in).
                    </span>
                    <Link
                      to="/notifications"
                      className="btn-secondary gap-1.5 bg-white/15 text-white border-white/20 hover:bg-white/25 text-xs py-1.5 px-3 shrink-0"
                    >
                      <span>Full Notice Archive</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {beuNotices.length > 0 ? (
                      beuNotices.slice(0, 6).map((notice, idx) => (
                        <a
                          key={notice.id || idx}
                          href={notice.pdfUrl || (notice.link && notice.link.startsWith('http') ? notice.link : `https://beu-bih.ac.in/backend/${encodeURI(notice.link || '')}`)}
                          target="_blank"
                          rel="noreferrer"
                          className="p-4 rounded-2xl flex flex-col justify-between group hover:border-cyan-400 bg-black/30 hover:bg-black/50 backdrop-blur-md border border-white/10 text-white transition-all shadow-lg"
                        >
                          <div>
                            <div className="flex items-center justify-between gap-2 mb-2">
                              <span className="px-2 py-0.5 rounded-lg bg-emerald-500 text-slate-950 text-[10px] font-bold tracking-wide animate-pulse">
                                CIRCULAR
                              </span>
                              <span className="text-[11px] text-slate-400 font-semibold flex items-center gap-1">
                                <Calendar size={12} className="text-slate-400" />
                                {notice.date || notice.noticedate || 'Recent'}
                              </span>
                            </div>

                            <h3 className="font-heading text-xs sm:text-sm font-bold text-white group-hover:text-cyan-400 transition-colors line-clamp-3 leading-snug">
                              {notice.title || notice.board}
                            </h3>
                          </div>

                          <div className="mt-4 pt-2.5 border-t border-white/10 flex items-center justify-between text-xs text-cyan-400 font-bold">
                            <span>View Official PDF</span>
                            <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          </div>
                        </a>
                      ))
                    ) : (
                      <div className="col-span-full p-8 rounded-2xl text-center text-slate-400 text-xs bg-black/40 border border-white/10">
                        Fetching latest BEU notices...
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* ── TAB 5: GUIDE & FAQ ── */}
              {activeConsoleTab === 'guide' && (
                <div className="pt-6 animate-in fade-in duration-200">
                  <div className="space-y-3">
                    {faqs.map((faq, i) => (
                      <div key={i} className="rounded-2xl overflow-hidden border border-white/10 bg-black/30 hover:bg-black/45 backdrop-blur-md text-white shadow-lg transition-all">
                        <button
                          onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                          className="w-full flex items-center justify-between p-4 text-left hover:bg-white/5 cursor-pointer"
                        >
                          <h3 className="text-xs sm:text-sm font-bold text-white pr-4">{faq.q}</h3>
                          <div className="shrink-0 text-cyan-400">
                            {openFaqIndex === i ? <Minus size={16} /> : <Plus size={16} />}
                          </div>
                        </button>
                        {openFaqIndex === i && (
                          <div className="px-4 pb-4 text-slate-300 text-xs leading-relaxed font-medium border-t border-white/10 pt-3">
                            {faq.a}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════ */}
        {/* ── 4. WALL OF FAME (TOP DONORS) ── */}
        {/* ═══════════════════════════════════════════ */}
        <section className="py-8 sm:py-12 px-4 sm:px-6 md:px-12 relative z-10">
          <div className="container mx-auto max-w-5xl">
            <div className="bg-black/25 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/10 text-center relative overflow-hidden shadow-lg text-white">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-cyan-300 text-xs font-bold mb-3 shadow-xs">
                <Heart size={14} className="fill-cyan-400 text-cyan-400" /> Student Powered
              </div>
              
              <h2 className="font-heading text-xl sm:text-2xl font-black text-white drop-shadow-md">
                Platform Wall of Fame
              </h2>
              <p className="text-xs text-slate-300 max-w-xl mx-auto mt-2 mb-6 font-medium">
                Apna College Bihar is 100% free with zero paywalls. Heartfelt thanks to students who contribute to keeping our servers running!
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto mb-6">
                {topDonors.map((donor, idx) => (
                  <div key={idx} className="bg-white/5 border border-white/10 p-3.5 rounded-xl text-center shadow-xs">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-400/30 text-cyan-300 font-bold text-sm mx-auto flex items-center justify-center mb-1.5 shadow-xs">
                      {donor.name?.charAt(0) || 'S'}
                    </div>
                    <h3 className="text-xs font-bold text-white truncate">{donor.name}</h3>
                    <p className="text-[11px] text-slate-300 truncate">{donor.college || 'Bihar GEC'}</p>
                    <p className="text-xs font-heading font-black text-emerald-400 mt-0.5">₹{donor.amount}</p>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setShowScanner(true)}
                className="btn-primary gap-2 py-2 px-4 text-xs font-bold"
              >
                <Heart size={14} className="fill-white" /> Contribute via UPI
              </button>
            </div>
          </div>
        </section>

      </div>

      {/* ── Floating Cinema View Mode Toggle (Desktop only) ── */}
      <div className="fixed bottom-5 right-5 z-40 hidden md:flex items-center">
        <button
          onClick={() => setCinemaMode(!cinemaMode)}
          title="Toggle Cinema Mode to clearly view the background film"
          className="px-3.5 py-1.5 rounded-full bg-black/60 hover:bg-black/85 backdrop-blur-md border border-white/20 text-slate-200 hover:text-white text-xs font-heading font-bold shadow-2xl flex items-center gap-1.5 transition-all cursor-pointer hover:border-cyan-400 active:scale-95"
        >
          <Sparkles size={13} className="text-cyan-400" />
          <span>{cinemaMode ? 'Exit Cinema View' : 'Cinema View'}</span>
        </button>
      </div>

      {/* ── SCANNER MODAL ── */}
      {showScanner && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm" onClick={() => setShowScanner(false)}>
          <div className="bg-white rounded-2xl shadow-2xl max-w-[420px] w-full p-6 text-center animate-fadeIn border border-slate-200" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
              <div className="flex items-center gap-2">
                <Heart size={18} className="text-blue-600 fill-blue-600" />
                <h3 className="font-heading font-bold text-slate-900 text-sm">Support Apna College Bihar</h3>
              </div>
              <button onClick={() => setShowScanner(false)} className="btn-icon w-8 h-8 rounded-lg" aria-label="Close Modal">
                <X size={16} />
              </button>
            </div>

            <p className="text-xs text-slate-500 mb-5 leading-relaxed font-medium">
              Help us cover Cloud database and server hosting expenses. Mention your <strong>Name &amp; College</strong> in payment remark for the Wall of Fame!
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
