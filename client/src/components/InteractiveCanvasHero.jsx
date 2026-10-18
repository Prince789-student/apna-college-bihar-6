import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen, Calculator, FileText, Target,
  Sparkles, CheckCircle2, ArrowRight, Radio,
  Award, Download, Play, Pause, ChevronRight,
  GraduationCap, Building2, Bell, Zap,
  Check, Star, ShieldCheck, Flame, Search,
  Youtube, Volume2, VolumeX, RotateCcw, ExternalLink
} from 'lucide-react';

export default function InteractiveCanvasHero({ isNative }) {
  const canvasRef = useRef(null);
  const heroRef = useRef(null);
  const stageCardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  // Interactive Stage State
  const [activeTab, setActiveTab] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  // Interactive Live Simulators State
  const [sgpaTheoryGrade, setSgpaTheoryGrade] = useState(10); // 10 = O, 9 = A+, 8 = A
  const [simPercentile, setSimPercentile] = useState(89.4);

  // Video Player & Motion Branding State
  const [videoPlaying, setVideoPlaying] = useState(true);
  const [videoChapter, setVideoChapter] = useState(0);
  const [videoTime, setVideoTime] = useState(14); // seconds counter
  const [videoMuted, setVideoMuted] = useState(false);
  const [videoMode, setVideoMode] = useState('motion'); // 'motion' | 'youtube'

  // 4 Interactive Stages (Brand Film as Lead Stage 0)
  const stages = [
    {
      id: 'why_us_video',
      title: 'Why Apna College Bihar? 🎬',
      subtitle: 'Official Brand Film',
      icon: Play,
      accent: '#2563eb',
      themeClass: 'from-blue-600 via-indigo-600 to-violet-600',
      link: '#why-us'
    },
    {
      id: 'notes',
      title: 'Notes & PYQ Vault',
      subtitle: '500+ Curated PDFs & Papers',
      icon: BookOpen,
      accent: '#2563eb',
      themeClass: 'from-blue-600 to-indigo-600',
      link: '/notes'
    },
    {
      id: 'cgpa',
      title: 'BEU SGPA Engine',
      subtitle: 'Official 10-Point Credit Calculator',
      icon: Calculator,
      accent: '#7c3aed',
      themeClass: 'from-purple-600 to-violet-600',
      link: '/cgpa'
    },
    {
      id: 'predictor',
      title: 'UGEAC 2026 Predictor',
      subtitle: '38+ Govt Colleges & Branch Cutoffs',
      icon: Target,
      accent: '#059669',
      themeClass: 'from-emerald-600 to-teal-600',
      link: '/ugeac-predictor'
    }
  ];

  // 4 Core Reasons / Video Motion Scenes
  const videoScenes = [
    {
      id: 0,
      tag: 'REASON 01 • ZERO PAYWALL',
      title: '100% Free Verified BEU Notes & Solved PYQs',
      tagline: 'Direct 1-Click PDF Download • Complete Unit 1 to 5',
      description: 'Handwritten, high-yield semester notes and 5+ years university solved papers curated strictly for 38+ Bihar Government Engineering Colleges. Zero subscription, zero paywalls.',
      badge: '500+ Verified PDFs',
      highlight: 'Top 1% BEU Ranker Curated',
      icon: BookOpen,
      accentBg: 'from-blue-600/20 via-blue-900/40 to-slate-950',
      accentColor: 'text-blue-400',
      bulletPoints: ['Direct 1-Click Offline Download', 'Strictly Aligned with BEU Syllabus', 'Numerical Step-by-Step Solutions']
    },
    {
      id: 1,
      tag: 'REASON 02 • ZERO SPAM',
      title: 'Real-Time University Notice & Exam Radar',
      tagline: 'Instant Broadcast Within 60 Seconds • WhatsApp Sync',
      description: 'Never miss examination schedules, form fillup dates, or back-paper circulars. Automated crawler scans the official university portal 24/7 and delivers authentic notices directly without rumors.',
      badge: '<60s Alert Speed',
      highlight: 'Zero Rumors / Direct Circulars',
      icon: Bell,
      accentBg: 'from-amber-600/20 via-orange-900/40 to-slate-950',
      accentColor: 'text-amber-400',
      bulletPoints: ['Official University PDF Attachments', 'Exam Schedule & Admit Card Alerts', 'Live Result Direct Roll No Lookup']
    },
    {
      id: 2,
      tag: 'REASON 03 • CUTOFF ACCURACY',
      title: 'BCECEB UGEAC 2026 Cutoff & College Matcher',
      tagline: 'Multi-Year Cutoff Predictor for 38+ Govt Engineering Colleges',
      description: 'Know your exact government college allotment before counselling. Input your JEE Main percentile & category (Gen, EWS, OBC, EBC, SC, ST) to find colleges like MIT, BCE, NCE, and GEC.',
      badge: '99.2% Accuracy',
      highlight: 'Category-Wise Rank Engine',
      icon: Target,
      accentBg: 'from-emerald-600/20 via-teal-900/40 to-slate-950',
      accentColor: 'text-emerald-400',
      bulletPoints: ['Accurate Closing Rank Thresholds', 'Branch-Wise Seat Distribution Matrix', 'District & College Comparison']
    },
    {
      id: 3,
      tag: 'REASON 04 • COMMUNITY POWER',
      title: 'Free 1-on-1 Senior Mentorship & Tech Roadmaps',
      tagline: 'Direct Mentorship from 3rd & 4th Year Toppers and Alumni',
      description: 'Connect with seniors studying across top engineering campuses in Bihar. Get actionable advice on BPSC AE, GATE preparation, software development careers, internships, and semester labs.',
      badge: '38+ Colleges Connected',
      highlight: '100% Free Senior Guidance',
      icon: GraduationCap,
      accentBg: 'from-purple-600/20 via-violet-900/40 to-slate-950',
      accentColor: 'text-purple-400',
      bulletPoints: ['BPSC AE & GATE Roadmaps', 'Software & DSA Interview Guidance', 'Free Project & Lab Assistance']
    }
  ];

  // Auto-cycle video scenes and time counter
  useEffect(() => {
    if (activeTab !== 0 || !videoPlaying || videoMode !== 'motion') return;
    const timeTimer = setInterval(() => {
      setVideoTime((prev) => (prev >= 160 ? 0 : prev + 1));
    }, 1000);
    const sceneTimer = setInterval(() => {
      setVideoChapter((curr) => (curr + 1) % videoScenes.length);
    }, 4500);
    return () => {
      clearInterval(timeTimer);
      clearInterval(sceneTimer);
    };
  }, [activeTab, videoPlaying, videoMode, videoScenes.length]);

  // Stage Cycle Interval with Progress Bar
  useEffect(() => {
    if (isPaused) return;
    const intervalTime = 40;
    const totalDuration = 4800; // 4.8s per stage
    const step = (intervalTime / totalDuration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveTab((curr) => (curr + 1) % stages.length);
          return 0;
        }
        return prev + step;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isPaused, stages.length]);

  // Calculated Real-Time SGPA Formula (Official BEU 10-Point Scale)
  const calcSimSgpa = () => {
    const totalCredits = 12.5;
    const totalPoints = (4 * sgpaTheoryGrade) + (4 * 9) + (1.5 * 10) + (3 * 9);
    return (totalPoints / totalCredits).toFixed(2);
  };

  // Calculated State Rank for Predictor
  const calcSimRank = () => {
    const totalCandidates = 35000;
    const rank = Math.round(((100 - simPercentile) / 100) * totalCandidates);
    return Math.max(120, rank);
  };

  const formatVideoTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleStageMouseMove = (e) => {
    if (!stageCardRef.current) return;
    const rect = stageCardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -4.5;
    const rotateY = ((x - centerX) / centerX) * 4.5;
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleStageMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const renderChapterVisual = (chapter) => {
    switch (chapter) {
      case 0:
        return (
          <div className="relative w-full h-full min-h-[160px] flex items-center justify-center">
            <div className="absolute inset-0 bg-blue-600/10 rounded-xl blur-md pointer-events-none" />
            <div className="absolute top-1 left-1 right-5 p-2 rounded-lg bg-slate-950/90 border border-blue-500/40 shadow-md animate-float-slow backdrop-blur-sm z-10">
              <div className="flex items-center justify-between gap-1.5">
                <div className="flex items-center gap-1.5 min-w-0">
                  <div className="w-5 h-5 rounded-md bg-blue-600/30 text-blue-400 flex items-center justify-center shrink-0">
                    <BookOpen size={11} />
                  </div>
                  <div className="min-w-0 truncate">
                    <span className="text-[9.5px] font-bold text-white block truncate">Engg. Math-I Notes</span>
                    <span className="text-[8px] text-blue-300 block">All 5 Units • BEU 2026</span>
                  </div>
                </div>
                <span className="text-[7.5px] font-black uppercase px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 shrink-0">Free PDF</span>
              </div>
            </div>
            <div className="absolute bottom-1 left-5 right-1 p-2 rounded-lg bg-slate-950/95 border border-indigo-500/40 shadow-lg animate-float-rev-slow backdrop-blur-sm z-10">
              <div className="flex items-center justify-between gap-1.5">
                <div className="flex items-center gap-1.5 min-w-0">
                  <div className="w-5 h-5 rounded-md bg-indigo-600/30 text-indigo-400 flex items-center justify-center shrink-0">
                    <Award size={11} />
                  </div>
                  <div className="min-w-0 truncate">
                    <span className="text-[9.5px] font-bold text-white block truncate">Data Structures PYQs</span>
                    <span className="text-[8px] text-indigo-300 block">5 Yrs Step Solutions</span>
                  </div>
                </div>
                <span className="text-[7.5px] font-black uppercase px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30 shrink-0">Solved</span>
              </div>
            </div>
            <div className="relative z-20 px-2.5 py-1 rounded-full bg-blue-600/90 text-white text-[9px] font-black uppercase tracking-wider shadow-lg border border-white/20 flex items-center gap-1 animate-pulse">
              <Star size={10} className="text-amber-300 fill-amber-300" /> 9.48 SGPA Topper Verified
            </div>
          </div>
        );

      case 1:
        return (
          <div className="relative w-full h-full min-h-[160px] flex items-center justify-center overflow-hidden">
            <div className="absolute w-32 h-32 rounded-full border border-amber-500/25" />
            <div className="absolute w-20 h-20 rounded-full border border-amber-500/35" />
            <div className="absolute w-10 h-10 rounded-full border border-amber-500/45" />
            <div className="absolute w-32 h-32 rounded-full overflow-hidden animate-radar-scanner pointer-events-none">
              <div
                className="w-16 h-16 bg-gradient-to-br from-amber-400/50 via-amber-500/10 to-transparent"
                style={{ clipPath: 'polygon(100% 100%, 0 0, 100% 0)' }}
              />
            </div>
            <div className="absolute top-2 left-2 flex items-center gap-1 bg-slate-950/90 px-1.5 py-0.5 rounded border border-amber-500/30 text-[7.5px] font-mono text-amber-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" /> MIT Muzaffarpur
            </div>
            <div className="absolute bottom-2 right-2 flex items-center gap-1 bg-slate-950/90 px-1.5 py-0.5 rounded border border-amber-500/30 text-[7.5px] font-mono text-amber-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" /> BCE Bhagalpur
            </div>
            <div className="absolute top-2 right-2 flex items-center gap-1 bg-slate-950/90 px-1.5 py-0.5 rounded border border-amber-500/30 text-[7.5px] font-mono text-amber-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" /> NCE Chandi
            </div>
            <div className="relative z-10 w-8 h-8 rounded-full bg-amber-500/20 border-2 border-amber-400 flex items-center justify-center text-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.5)]">
              <Radio size={14} className="animate-pulse" />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="w-full h-full min-h-[160px] flex flex-col justify-center space-y-1.5 p-1">
            <div className="flex items-center justify-between bg-slate-950/90 p-1.5 px-2 rounded-lg border border-emerald-500/30">
              <span className="text-[9px] font-mono text-slate-400">JEE CRL: #42,850</span>
              <span className="text-[8.5px] font-bold px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300">89.4%ile</span>
            </div>
            <div className="bg-gradient-to-r from-emerald-950/90 to-teal-950/90 p-1.5 px-2 rounded-lg border border-emerald-500/40 flex items-center justify-between">
              <span className="text-[8.5px] font-bold text-slate-300">UGEAC Rank</span>
              <span className="text-xs font-black font-mono text-emerald-300">#1,420 (BC)</span>
            </div>
            <div className="space-y-1">
              <div>
                <div className="flex items-center justify-between text-[7.5px] font-mono mb-0.5">
                  <span className="text-slate-300 truncate">MIT Muzaffarpur (ECE)</span>
                  <span className="text-emerald-400 font-bold">96% High</span>
                </div>
                <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full w-[94%]" />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between text-[7.5px] font-mono mb-0.5">
                  <span className="text-slate-300 truncate">BCE Bhagalpur (CSE)</span>
                  <span className="text-cyan-400 font-bold">88% Chance</span>
                </div>
                <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full w-[88%]" />
                </div>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="relative w-full h-full min-h-[160px] flex items-center justify-center p-1">
            <div className="absolute top-1 left-1 p-1.5 rounded-lg bg-slate-950/90 border border-purple-500/40 text-[8px] shadow-sm animate-float-slow">
              <span className="text-purple-300 font-bold block">TCS Digital</span>
              <span className="text-slate-400 text-[7px]">MIT Alum</span>
            </div>
            <div className="absolute bottom-1 right-1 p-1.5 rounded-lg bg-slate-950/90 border border-purple-500/40 text-[8px] shadow-sm animate-float-rev-slow">
              <span className="text-purple-300 font-bold block">GATE AIR 314</span>
              <span className="text-slate-400 text-[7px]">BCE Alum</span>
            </div>
            <div className="absolute top-1 right-1 p-1.5 rounded-lg bg-slate-950/90 border border-violet-500/40 text-[8px] shadow-sm animate-float-rev-slow">
              <span className="text-violet-300 font-bold block">BPSC AE</span>
              <span className="text-slate-400 text-[7px]">NCE Ranker</span>
            </div>
            <div className="relative z-10 p-2.5 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-600 text-white text-center shadow-lg border border-white/20">
              <GraduationCap size={16} className="mx-auto mb-0.5 text-white animate-bounce" />
              <span className="text-[9px] font-black uppercase tracking-wider block">1-on-1 Senior Help</span>
              <span className="text-[7.5px] text-purple-200 block">WhatsApp Guidance</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section ref={heroRef} className="relative pt-6 pb-16 md:pt-12 md:pb-24 px-4 sm:px-6 md:px-12 overflow-hidden z-10 select-none">

      {/* Floating Animated Ambient Backdrops */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] pointer-events-none z-0">
        <div className="absolute -top-10 left-[10%] w-[380px] h-[380px] rounded-full bg-blue-400/15 blur-3xl animate-jitter-float-1" />
        <div className="absolute top-[40px] right-[10%] w-[420px] h-[420px] rounded-full bg-violet-400/15 blur-3xl animate-jitter-float-2" />
      </div>

      <div className="container mx-auto max-w-5xl flex flex-col items-center text-center relative z-10">
        
        {/* ── Top Executive Brand Title: APNA COLLEGE BIHAR ── */}
        <div className="flex flex-col items-center justify-center text-center mb-6 pt-1">
          {/* Animated Official BEU Portal Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/90 border border-blue-200/80 text-xs font-bold text-blue-700 shadow-xs mb-3 backdrop-blur-md hover:scale-105 transition-transform">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            <span className="font-heading tracking-wide uppercase text-[11px] font-black text-blue-800">
              Official Academic Platform
            </span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-600 font-semibold text-[11px]">38+ Bihar Engineering Colleges</span>
          </div>

          {/* Grand Apna College Bihar Typography with Luminous Flowing Gradient */}
          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-[1000] tracking-tight leading-[1.05] text-slate-900 mb-2 uppercase">
            APNA COLLEGE <span className="bg-gradient-to-r from-blue-600 via-indigo-600 via-violet-600 to-blue-600 bg-clip-text text-transparent animate-gradient-flow inline-block">BIHAR</span>
          </h1>

          {/* Clean Subtitle Slogan */}
          <p className="text-slate-600 text-xs sm:text-sm md:text-base font-medium max-w-2xl leading-relaxed">
            Free Semester Notes, 5+ Yrs Solved PYQs, Real-Time BEU Exam Radar & 1-on-1 Senior Mentorship
          </p>
        </div>

        {/* ══════════════════════════════════════════════════════════════════════════ */}
        {/* ── 3D INTERACTIVE CANVAS-UI STAGE MOCKUP (Full Jitter Motion) ── */}
        {/* ══════════════════════════════════════════════════════════════════════════ */}
        <div className="relative w-full max-w-4xl mx-auto perspective-stage">
          {/* Floating Badges */}
          <div className="hidden lg:flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-white/95 border border-indigo-200 shadow-xl shadow-indigo-500/15 backdrop-blur-xl absolute -top-5 -left-6 z-30 animate-jitter-float-1 pointer-events-none">
            <div className="w-9 h-9 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-xs">
              <GraduationCap size={16} />
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="font-heading text-xs font-black text-slate-900">9.48 SGPA</span>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1 rounded">Top 1% BEU</span>
              </div>
              <p className="text-[10px] text-slate-500 font-medium">10-Point Credit Scale</p>
            </div>
          </div>

          <div
            onClick={() => setActiveTab(0)}
            className="hidden lg:flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-white/95 border border-blue-200 shadow-xl shadow-blue-500/15 backdrop-blur-xl absolute -top-6 -right-6 z-30 animate-jitter-float-2 cursor-pointer hover:scale-105 transition-transform"
          >
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center shadow-sm">
              <Play size={14} className="fill-white translate-x-0.5" />
            </div>
            <div>
              <span className="font-heading text-xs font-black text-slate-900">Why Apna College Bihar?</span>
              <p className="text-[10px] text-slate-500 font-medium">Watch Full Motion Film</p>
            </div>
          </div>

          {/* Main 3D Card Stage with dynamic perspective tilt */}
          <div
            ref={stageCardRef}
            onMouseMove={handleStageMouseMove}
            onMouseLeave={handleStageMouseLeave}
            style={{
              transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              transition: tilt.x === 0 && tilt.y === 0 ? 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)' : 'transform 0.08s ease-out'
            }}
            className="stage-3d-card rounded-3xl bg-white/95 border border-slate-200/90 shadow-2xl shadow-blue-900/10 backdrop-blur-2xl overflow-hidden will-change-transform"
          >
            
            {/* Header with Navigation Pills */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-100 bg-slate-50/90 px-4 py-3 gap-3">
              <div className="flex items-center gap-2.5">
                <div className="flex items-center gap-1.5" aria-hidden="true">
                  <span className="w-3 h-3 rounded-full bg-rose-400 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-400 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block"></span>
                </div>
                <span className="text-xs font-black text-slate-800 tracking-wider flex items-center gap-1.5 ml-1">
                  <Sparkles size={13} className="text-blue-600" />
                  CANVAS INTERACTIVE LAB
                </span>
              </div>

              {/* Navigation Tabs */}
              <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
                {stages.map((stage, idx) => {
                  const Icon = stage.icon;
                  const isActive = activeTab === idx;
                  return (
                    <button
                      key={stage.id}
                      onClick={() => {
                        setActiveTab(idx);
                        setProgress(0);
                      }}
                      className={`relative px-3 py-1.5 rounded-xl font-heading text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer active:scale-95 ${
                        isActive
                          ? `bg-gradient-to-r ${stage.themeClass} text-white shadow-sm shadow-slate-900/15 scale-102`
                          : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/80'
                      }`}
                    >
                      <Icon size={13} />
                      <span>{stage.title}</span>
                    </button>
                  );
                })}
              </div>

              {/* Play/Pause */}
              <button
                onClick={() => setIsPaused(!isPaused)}
                className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold cursor-pointer shrink-0"
              >
                {isPaused ? <Play size={11} className="text-emerald-600" /> : <Pause size={11} className="text-amber-600" />}
                <span className="text-[11px]">{isPaused ? 'Resume' : 'Auto'}</span>
              </button>
            </div>

            {/* Progress Line */}
            <div className="w-full h-1 bg-slate-100 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 via-purple-500 to-emerald-500 transition-all duration-75"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* ── Interactive Stage Screens ── */}
            <div className="p-4 sm:p-6 md:p-8 min-h-[340px] flex items-center justify-center bg-radial from-slate-50/50 via-white to-white">
              
              {/* SCREEN 0: WHY CHOOSE APNA COLLEGE BIHAR (Full Motion Video Branding Player & Film) */}
              {activeTab === 0 && (
                <div className="w-full animate-jitter-fade">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch text-left">
                    
                    {/* LEFT COLUMN: 16:9 Cinematic Full Motion Video Player */}
                    <div className="md:col-span-7 lg:col-span-8 flex flex-col justify-between bg-slate-950 text-white rounded-2xl p-4 sm:p-5 border border-blue-500/30 shadow-xl shadow-blue-900/20 relative overflow-hidden group">
                      
                      {/* Ambient Mesh Glow inside player */}
                      <div className="absolute inset-0 bg-radial from-blue-600/15 via-indigo-900/20 to-transparent pointer-events-none" />

                      {/* Video Player Header Bar */}
                      <div className="flex items-center justify-between pb-3 border-b border-slate-800/90 relative z-10">
                        <div className="flex items-center gap-2">
                          <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600"></span>
                          </span>
                          <span className="text-[11px] font-black uppercase tracking-wider text-slate-200">
                            {videoMode === 'youtube' ? 'YouTube Player' : 'Live Brand Film'}
                          </span>
                          <span className="hidden sm:inline text-slate-600">•</span>
                          <span className="hidden sm:inline text-[10px] text-slate-400 font-mono">1080p 60FPS</span>
                        </div>

                        {/* Mode Switcher & Equalizer Visualizer */}
                        <div className="flex items-center gap-2">
                          {/* Animated Soundwave Equalizer (6 bouncing bars) */}
                          {videoPlaying && videoMode === 'motion' && (
                            <div className="hidden sm:flex items-end gap-1 h-4 px-2 py-0.5 bg-slate-900/90 rounded-md border border-slate-800" title="Narrator Audio Waveform Active">
                              <span className="w-1 bg-cyan-400 rounded-full animate-eq-1"></span>
                              <span className="w-1 bg-blue-400 rounded-full animate-eq-2"></span>
                              <span className="w-1 bg-indigo-400 rounded-full animate-eq-3"></span>
                              <span className="w-1 bg-purple-400 rounded-full animate-eq-4"></span>
                              <span className="w-1 bg-pink-400 rounded-full animate-eq-5"></span>
                              <span className="w-1 bg-emerald-400 rounded-full animate-eq-6"></span>
                            </div>
                          )}

                          <button
                            type="button"
                            onClick={() => setVideoMode(videoMode === 'motion' ? 'youtube' : 'motion')}
                            className="px-2 py-0.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-[10px] font-bold text-slate-300 border border-slate-700 transition-colors flex items-center gap-1 cursor-pointer"
                          >
                            {videoMode === 'motion' ? (
                              <>
                                <Youtube size={12} className="text-red-500" />
                                <span>Switch to YouTube</span>
                              </>
                            ) : (
                              <>
                                <Play size={10} className="text-blue-400" />
                                <span>Motion Mode</span>
                              </>
                            )}
                          </button>
                        </div>
                      </div>

                      {/* Video Center Viewport / Canvas Area */}
                      <div className="py-4 relative z-10 min-h-[210px] sm:min-h-[230px] flex flex-col justify-center">
                        {videoMode === 'youtube' ? (
                          <div className="w-full h-full min-h-[210px] rounded-xl overflow-hidden bg-black flex flex-col items-center justify-center p-3 text-center border border-slate-800">
                            <Youtube size={36} className="text-red-600 mb-2 animate-bounce" />
                            <h4 className="text-sm font-bold text-white mb-1">Apna College BEU Bihar Official Channel</h4>
                            <p className="text-xs text-slate-400 max-w-sm mb-3">
                              Watch complete video tutorials, semester strategy guides, and university updates on our official channel.
                            </p>
                            <a
                              href="https://www.youtube.com/@ApnaCollegeBEUbihar"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs transition-transform active:scale-95 shadow-md"
                            >
                              <Play size={13} className="fill-white" /> Open @ApnaCollegeBEUbihar on YouTube
                            </a>
                          </div>
                        ) : (
                          /* Motion Video Scene Frame */
                          <div
                            onClick={() => setVideoPlaying(!videoPlaying)}
                            className="relative cursor-pointer select-none group/screen"
                          >
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 items-center">
                              {/* Left Text Narrative */}
                              <div className="md:col-span-7 space-y-1.5">
                                {/* Scene Header Pill */}
                                <div className="flex items-center justify-between gap-2 mb-1.5">
                                  <span className="text-[10px] font-mono tracking-widest font-black text-blue-400 bg-blue-950/80 px-2 py-0.5 rounded-md border border-blue-800/60 uppercase">
                                    {videoScenes[videoChapter].tag}
                                  </span>
                                  <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded-md border border-emerald-800/60 flex items-center gap-1">
                                    <CheckCircle2 size={11} /> {videoScenes[videoChapter].badge}
                                  </span>
                                </div>

                                {/* Scene Headline */}
                                <h3 className="font-heading text-base sm:text-lg font-black text-white leading-tight group-hover/screen:text-blue-300 transition-colors">
                                  {videoScenes[videoChapter].title}
                                </h3>

                                {/* Tagline */}
                                <p className="text-xs font-semibold text-blue-300/90">
                                  {videoScenes[videoChapter].tagline}
                                </p>

                                {/* Description */}
                                <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                                  {videoScenes[videoChapter].description}
                                </p>

                                {/* Bullet Features Matrix */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-2 border-t border-slate-800/80">
                                  {videoScenes[videoChapter].bulletPoints.slice(0, 2).map((pt, pIdx) => (
                                    <div key={pIdx} className="flex items-center gap-1.5 text-[10.5px] font-medium text-slate-300 bg-slate-900/60 px-2 py-1 rounded-lg border border-slate-800">
                                      <Check size={12} className="text-emerald-400 shrink-0" />
                                      <span className="truncate">{pt}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              {/* Right Interactive Animated Motion Graphic Canvas */}
                              <div className="md:col-span-5 bg-slate-900/80 rounded-xl border border-slate-800/90 p-2 min-h-[170px] relative overflow-hidden flex items-center justify-center">
                                {renderChapterVisual(videoChapter)}
                              </div>
                            </div>

                            {/* Center Floating Play/Pause Hint */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/screen:opacity-100 transition-opacity pointer-events-none">
                              <div className="w-12 h-12 rounded-full bg-blue-600/90 text-white flex items-center justify-center shadow-lg backdrop-blur-md">
                                {videoPlaying ? <Pause size={20} /> : <Play size={20} className="fill-white translate-x-0.5" />}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Video Player Scrubber & Controls */}
                      <div className="pt-3 border-t border-slate-800/90 relative z-10 space-y-2.5">
                        
                        {/* Interactive Scrubber Line with Chapter Markers */}
                        <div className="relative w-full h-1.5 bg-slate-800 rounded-full overflow-hidden cursor-pointer">
                          <div
                            className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 transition-all duration-300"
                            style={{ width: `${((videoChapter + 1) / videoScenes.length) * 100}%` }}
                          />
                        </div>

                        {/* Controls Bottom Row */}
                        <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                          <div className="flex items-center gap-2">
                            <button
                              type="button"
                              onClick={() => setVideoPlaying(!videoPlaying)}
                              className="w-7 h-7 rounded-lg bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center transition-transform active:scale-95 cursor-pointer"
                              title={videoPlaying ? 'Pause video' : 'Play video'}
                            >
                              {videoPlaying ? <Pause size={13} /> : <Play size={13} className="fill-white translate-x-0.5" />}
                            </button>
                            <span className="text-[11px] font-mono text-slate-400 font-semibold">
                              {formatVideoTime(videoTime)} / 02:40
                            </span>
                          </div>

                          {/* 4 Clickable Chapter Selectors */}
                          <div className="flex items-center gap-1 overflow-x-auto no-scrollbar py-0.5">
                            {videoScenes.map((sc, scIdx) => (
                              <button
                                key={sc.id}
                                type="button"
                                onClick={() => {
                                  setVideoChapter(scIdx);
                                  setVideoPlaying(true);
                                }}
                                className={`px-2 py-0.5 rounded-md text-[10px] font-bold transition-all cursor-pointer whitespace-nowrap ${
                                  videoChapter === scIdx
                                    ? 'bg-blue-600 text-white shadow-xs'
                                    : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800'
                                }`}
                              >
                                #{scIdx + 1} {scIdx === 0 ? 'Free Notes' : scIdx === 1 ? 'Exam Radar' : scIdx === 2 ? 'Predictor' : 'Mentorship'}
                              </button>
                            ))}
                          </div>

                          {/* External YouTube link */}
                          <a
                            href="https://www.youtube.com/@ApnaCollegeBEUbihar"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[11px] font-bold text-red-400 hover:text-red-300 flex items-center gap-1 transition-colors"
                          >
                            <Youtube size={13} />
                            <span className="hidden sm:inline">YouTube</span>
                            <ExternalLink size={10} />
                          </a>
                        </div>
                      </div>

                    </div>

                    {/* RIGHT COLUMN: Why Choose Us Value Proposition Card */}
                    <div className="md:col-span-5 lg:col-span-4 bg-gradient-to-br from-blue-50/90 via-indigo-50/70 to-white p-5 rounded-2xl border border-blue-200 flex flex-col justify-between h-full">
                      <div>
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-600 text-white text-[11px] font-bold mb-3">
                          <Play size={11} className="fill-white" /> Bihar's #1 Academic Hub
                        </div>
                        
                        <h3 className="font-heading text-lg font-bold text-slate-900 leading-snug mb-2">
                          Kyun Use Karein Apna College Bihar?
                        </h3>
                        
                        <p className="text-xs text-slate-600 leading-relaxed mb-4">
                          State engineering students ke sabhi zarooraton ka single, verified aur 100% free solution.
                        </p>

                        <div className="space-y-2.5 mb-5">
                          {[
                            { title: '100% Free Forever', desc: 'No subscriptions or locked PDFs' },
                            { title: 'Strictly BEU Aligned', desc: 'Updated for 38+ Govt Colleges' },
                            { title: 'Zero Spam / Verified', desc: 'Authentic circulars within 60s' },
                            { title: '38+ Colleges Network', desc: 'Statewide BEU community across Bihar' },
                          ].map((feat, fIdx) => (
                            <div key={fIdx} className="flex items-start gap-2 text-left">
                              <div className="w-4 h-4 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                                <Check size={11} className="stroke-[3]" />
                              </div>
                              <div>
                                <span className="text-xs font-bold text-slate-900 block leading-tight">{feat.title}</span>
                                <span className="text-[11px] text-slate-500 leading-tight">{feat.desc}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <a
                          href="https://www.youtube.com/@ApnaCollegeBEUbihar"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full py-2.5 px-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-heading font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all hover:scale-102 active:scale-95 cursor-pointer"
                        >
                          <Youtube size={15} />
                          <span>Watch Brand Film on YouTube</span>
                        </a>

                        <Link
                          to="/notes"
                          className="w-full py-2 px-4 rounded-xl bg-white hover:bg-blue-50 text-blue-700 border border-blue-200 font-heading font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                        >
                          <span>Explore Free Notes & PYQs</span>
                          <ArrowRight size={13} />
                        </Link>
                      </div>

                    </div>

                  </div>
                </div>
              )}

              {/* SCREEN 1: NOTES & PYQ VAULT */}
              {activeTab === 1 && (
                <div className="w-full animate-jitter-fade">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center text-left">
                    <div className="md:col-span-7 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="px-2.5 py-1 rounded-lg bg-blue-100 text-blue-800 font-bold text-xs uppercase tracking-wide">
                          CSE / IT / ECE / ME / Civil
                        </span>
                        <span className="text-xs font-bold text-emerald-600 flex items-center gap-1 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                          <CheckCircle2 size={13} /> 1-Click Offline PDF
                        </span>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-gradient-to-r from-blue-50/80 to-white border border-blue-200 flex items-center justify-between group hover:border-blue-400 transition-all">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-sm shrink-0">
                            <FileText size={20} />
                          </div>
                          <div>
                            <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                              Operating Systems & System Architecture
                            </h4>
                            <p className="text-[11px] text-slate-500">Unit 1 to 5 Hand-Written Notes • BEU Updated</p>
                          </div>
                        </div>
                        <span className="px-2.5 py-1.5 rounded-xl bg-blue-600 text-white text-xs font-bold flex items-center gap-1 shadow-xs group-hover:scale-105 transition-transform">
                          <Download size={13} /> PDF
                        </span>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-gradient-to-r from-indigo-50/80 to-white border border-indigo-200 flex items-center justify-between group hover:border-indigo-400 transition-all">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-sm shrink-0">
                            <BookOpen size={20} />
                          </div>
                          <div>
                            <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                              Design & Analysis of Algorithms (DAA)
                            </h4>
                            <p className="text-[11px] text-slate-500">5+ Years Solved PYQ Papers & Numerical Key</p>
                          </div>
                        </div>
                        <span className="px-2.5 py-1.5 rounded-xl bg-indigo-600 text-white text-xs font-bold flex items-center gap-1 shadow-xs group-hover:scale-105 transition-transform">
                          <Download size={13} /> PYQ
                        </span>
                      </div>
                    </div>

                    <div className="md:col-span-5 bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-2xl border border-blue-200 flex flex-col justify-between h-full">
                      <div>
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-600 text-white text-[11px] font-bold mb-3">
                          <Sparkles size={12} /> Unit-Wise Organization
                        </div>
                        <h3 className="font-heading text-lg font-bold text-slate-900 leading-snug mb-2">
                          100% Exam-Targeted Material
                        </h3>
                        <p className="text-xs text-slate-600 leading-relaxed mb-4">
                          Direct 1-click downloads with zero paywalls. Tailored specifically for BEU exams.
                        </p>
                      </div>

                      <Link
                        to="/notes"
                        className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-heading font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all hover:gap-3"
                      >
                        <span>Browse 500+ Notes & PYQs</span>
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              )}

              {/* SCREEN 2: BEU SGPA ENGINE (Interactive Slider!) */}
              {activeTab === 2 && (
                <div className="w-full animate-jitter-fade">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center text-left">
                    <div className="md:col-span-7 bg-slate-50/90 border border-slate-200 rounded-2xl p-4 sm:p-5 space-y-3.5">
                      <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                        <span className="text-xs font-bold text-slate-800">
                          Interactive 5th Sem Grade Simulator
                        </span>
                        <span className="text-xs font-bold text-purple-700 bg-purple-100 px-2 py-0.5 rounded">
                          Drag Slider Below
                        </span>
                      </div>

                      {/* Interactive Grade Slider */}
                      <div className="bg-white p-3 rounded-xl border border-slate-200">
                        <div className="flex items-center justify-between text-xs mb-1.5 font-bold">
                          <span className="text-slate-600">Theory Paper 1 Grade:</span>
                          <span className="text-purple-600 font-black">
                            {sgpaTheoryGrade === 10 ? 'O (10 Points)' : sgpaTheoryGrade === 9 ? 'A+ (9 Points)' : sgpaTheoryGrade === 8 ? 'A (8 Points)' : 'B+ (7 Points)'}
                          </span>
                        </div>
                        <input
                          type="range"
                          min="7"
                          max="10"
                          step="1"
                          value={sgpaTheoryGrade}
                          onChange={(e) => setSgpaTheoryGrade(Number(e.target.value))}
                          className="w-full h-2 bg-purple-100 rounded-lg appearance-none cursor-pointer accent-purple-600"
                        />
                        <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-semibold">
                          <span>B+ (7)</span>
                          <span>A (8)</span>
                          <span>A+ (9)</span>
                          <span>O (10)</span>
                        </div>
                      </div>

                      {/* Real-Time Calculated Result */}
                      <div className="p-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white flex items-center justify-between shadow-md shadow-purple-500/20">
                        <div>
                          <span className="text-[10px] text-purple-200 uppercase tracking-wider block font-semibold">Live Calculated SGPA</span>
                          <span className="font-heading text-2xl font-black">{calcSimSgpa()} / 10.00</span>
                        </div>
                        <div className="text-right">
                          <span className="px-2 py-0.5 rounded-md bg-white/20 text-xs font-bold block mb-0.5">
                            {calcSimSgpa() >= 9.0 ? 'Outstanding (O)' : 'Excellent (A+)'}
                          </span>
                          <span className="text-[10px] text-purple-200">BEU Official Formula</span>
                        </div>
                      </div>
                    </div>

                    <div className="md:col-span-5 bg-gradient-to-br from-purple-50 to-indigo-50 p-5 rounded-2xl border border-purple-200 flex flex-col justify-between h-full">
                      <div>
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-purple-600 text-white text-[11px] font-bold mb-3">
                          <Calculator size={12} /> Official BEU 10-Pt Formula
                        </div>
                        <h3 className="font-heading text-lg font-bold text-slate-900 leading-snug mb-2">
                          Accurate Credit Calculations
                        </h3>
                        <p className="text-xs text-slate-600 leading-relaxed mb-4">
                          Avoid manual calculation errors with official credit weighting for theory, lab, and MOOCs.
                        </p>
                      </div>

                      <Link
                        to="/cgpa"
                        className="w-full py-2.5 px-4 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-heading font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all hover:gap-3"
                      >
                        <span>Open CGPA Calculator</span>
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              )}

              {/* SCREEN 3: UGEAC 2026 PREDICTOR (Interactive Percentile Slider!) */}
              {activeTab === 3 && (
                <div className="w-full animate-jitter-fade">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center text-left">
                    <div className="md:col-span-7 bg-slate-50/90 border border-slate-200 rounded-2xl p-4 sm:p-5 space-y-3">
                      
                      {/* Interactive Percentile Slider */}
                      <div className="bg-white p-3 rounded-xl border border-slate-200">
                        <div className="flex items-center justify-between text-xs mb-1 font-bold">
                          <span className="text-slate-600">JEE Main Percentile:</span>
                          <span className="text-emerald-600 font-black">{simPercentile}%ile</span>
                        </div>
                        <input
                          type="range"
                          min="70"
                          max="99"
                          step="0.5"
                          value={simPercentile}
                          onChange={(e) => setSimPercentile(Number(e.target.value))}
                          className="w-full h-2 bg-emerald-100 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                        />
                        <div className="flex justify-between items-center text-[11px] font-bold text-slate-700 mt-1.5 pt-1 border-t border-slate-100">
                          <span>Est. Bihar State Rank:</span>
                          <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-black">
                            ~{calcSimRank().toLocaleString()}
                          </span>
                        </div>
                      </div>

                      {/* College Match Cards */}
                      <div className="p-3 rounded-xl bg-white border border-emerald-300 shadow-xs flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-xs">
                            MIT
                          </div>
                          <div>
                            <h4 className="text-xs font-bold text-slate-900">MIT Muzaffarpur • CSE / IT</h4>
                            <p className="text-[10px] text-slate-500">Closing Rank: 2,120</p>
                          </div>
                        </div>
                        <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold text-xs">
                          {simPercentile >= 88 ? '98.4% Match' : '75.2% Match'}
                        </span>
                      </div>

                      <div className="p-3 rounded-xl bg-white border border-blue-300 shadow-xs flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
                            BCE
                          </div>
                          <div>
                            <h4 className="text-xs font-bold text-slate-900">BCE Bhagalpur • ECE / EE</h4>
                            <p className="text-[10px] text-slate-500">Closing Rank: 2,450</p>
                          </div>
                        </div>
                        <span className="px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 border border-blue-200 font-bold text-xs">
                          {simPercentile >= 85 ? '96.2% Match' : '82.0% Match'}
                        </span>
                      </div>
                    </div>

                    <div className="md:col-span-5 bg-gradient-to-br from-emerald-50 to-teal-50 p-5 rounded-2xl border border-emerald-200 flex flex-col justify-between h-full">
                      <div>
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-600 text-white text-[11px] font-bold mb-3">
                          <Target size={12} /> BCECEB Multi-Year Data
                        </div>
                        <h3 className="font-heading text-lg font-bold text-slate-900 leading-snug mb-2">
                          38+ Govt Engineering Colleges
                        </h3>
                        <p className="text-xs text-slate-600 leading-relaxed mb-4">
                          Predict realistic seat allotment for General, EWS, OBC, EBC, SC, and ST categories.
                        </p>
                      </div>

                      <Link
                        to="/ugeac-predictor"
                        className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-heading font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all hover:gap-3"
                      >
                        <span>Check UGEAC Predictor</span>
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              )}

            </div>

            {/* Bottom Footer */}
            <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="font-semibold text-slate-700">100% Free & Open Academic Platform for Bihar Students</span>
              </div>
              <div className="text-[11px] font-medium text-slate-400">
                Move mouse to interact with particles • Hover to pause
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
