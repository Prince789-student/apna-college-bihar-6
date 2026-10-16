import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen, Calculator, FileText, Target,
  Sparkles, CheckCircle2, ArrowRight, Radio,
  Award, Download, Play, Pause, ChevronRight,
  GraduationCap, Building2, Bell, MousePointer,
  Flame, Check, Star, ShieldCheck, Zap
} from 'lucide-react';

export default function JitterHeroShowcase() {
  const [activeTab, setActiveTab] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  // 4 Core Stages inspired by Jitter Motion Design showcases
  const stages = [
    {
      id: 'notes',
      title: 'Notes & PYQ Vault',
      subtitle: '500+ Curated PDFs & Papers',
      icon: BookOpen,
      accent: '#2563eb', // Blue
      themeClass: 'from-blue-600 to-indigo-600',
      pillBg: 'bg-blue-50 text-blue-700 border-blue-200',
      link: '/notes'
    },
    {
      id: 'cgpa',
      title: 'BEU SGPA Engine',
      subtitle: 'Official 10-Point Credit Calculator',
      icon: Calculator,
      accent: '#7c3aed', // Purple/Violet
      themeClass: 'from-purple-600 to-violet-600',
      pillBg: 'bg-purple-50 text-purple-700 border-purple-200',
      link: '/cgpa'
    },
    {
      id: 'predictor',
      title: 'UGEAC 2026 Predictor',
      subtitle: '38+ Govt Colleges & Branch Cutoffs',
      icon: Target,
      accent: '#059669', // Emerald
      themeClass: 'from-emerald-600 to-teal-600',
      pillBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      link: '/ugeac-predictor'
    },
    {
      id: 'radar',
      title: 'Live BEU Radar',
      subtitle: 'Instant WhatsApp Exam Alerts',
      icon: Radio,
      accent: '#ea580c', // Orange/Amber
      themeClass: 'from-amber-500 to-orange-600',
      pillBg: 'bg-amber-50 text-amber-700 border-amber-200',
      link: '#beu-radar'
    }
  ];

  // Auto-play interval with smooth progress bar
  useEffect(() => {
    if (isPaused) return;

    const intervalTime = 40; // 40ms updates for 60fps feel
    const totalDuration = 4500; // 4.5 seconds per tab
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

  const handleTabClick = (index) => {
    setActiveTab(index);
    setProgress(0);
  };

  // Subtle interactive 3D mouse parallax
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 8; // Max 4deg
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -8;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-5xl mx-auto my-8 px-2 sm:px-4 perspective-stage select-none"
    >
      {/* ── Soft Ambient Glow Orbs reacting to active tab ── */}
      <div
        className="absolute -top-10 left-1/2 -translate-x-1/2 w-[85%] h-[320px] rounded-full blur-3xl opacity-25 pointer-events-none transition-all duration-700"
        style={{
          background: `radial-gradient(circle, ${stages[activeTab].accent} 0%, transparent 70%)`
        }}
      />

      {/* ══════════════════════════════════════════════════════════════════════════ */}
      {/* ── JITTER 3D SATELLITE FLOATING CARDS (Physics Movement on Orbit) ── */}
      {/* ══════════════════════════════════════════════════════════════════════════ */}

      {/* Satellite 1: Top-Left (9.48 SGPA Verified) */}
      <div className="hidden lg:flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/95 border border-indigo-200/90 shadow-2xl shadow-indigo-500/15 backdrop-blur-xl absolute -top-6 -left-8 z-30 animate-jitter-float-1 pointer-events-none">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-blue-600 text-white flex items-center justify-center font-bold shadow-md shadow-indigo-500/25">
          <GraduationCap size={18} />
        </div>
        <div>
          <div className="flex items-center gap-1.5">
            <span className="font-heading text-sm font-black text-slate-900">9.48 SGPA</span>
            <span className="text-[10px] font-bold text-indigo-700 bg-indigo-50 px-1.5 py-0.5 rounded-md border border-indigo-200">
              Top 1% BEU
            </span>
          </div>
          <p className="text-[11px] text-slate-500 font-medium">10-Point Credit Calibrated</p>
        </div>
      </div>

      {/* Satellite 2: Top-Right (Live WhatsApp Radar Pulse) */}
      <div className="hidden lg:flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/95 border border-amber-200/90 shadow-2xl shadow-amber-500/15 backdrop-blur-xl absolute -top-8 -right-8 z-30 animate-jitter-float-2 pointer-events-none">
        <div className="relative flex items-center justify-center">
          <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
          <span className="absolute w-6 h-6 rounded-full bg-emerald-400/40 animate-pulse-ring"></span>
        </div>
        <div>
          <div className="flex items-center gap-1.5">
            <span className="font-heading text-xs font-black text-slate-900">BEU Radar Live</span>
            <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.2 rounded-full">
              Real-Time
            </span>
          </div>
          <p className="text-[11px] text-slate-500 font-medium">Exam Routine & Form Alert</p>
        </div>
      </div>

      {/* Satellite 3: Bottom-Left (38+ Bihar GECs) */}
      <div className="hidden lg:flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/95 border border-emerald-200/90 shadow-2xl shadow-emerald-500/15 backdrop-blur-xl absolute -bottom-6 -left-6 z-30 animate-jitter-float-3 pointer-events-none">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-600 text-white flex items-center justify-center shadow-md shadow-emerald-500/25">
          <Building2 size={18} />
        </div>
        <div>
          <div className="flex items-center gap-1.5">
            <span className="font-heading text-xs font-black text-slate-900">38+ Govt Colleges</span>
            <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded-md border border-emerald-200">
              UGEAC 2026
            </span>
          </div>
          <p className="text-[11px] text-slate-500 font-medium">MIT, BCE, GCE Verified Cutoffs</p>
        </div>
      </div>

      {/* Satellite 4: Bottom-Right (1-Click Offline PDF) */}
      <div className="hidden lg:flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/95 border border-blue-200/90 shadow-2xl shadow-blue-500/15 backdrop-blur-xl absolute -bottom-6 -right-6 z-30 animate-jitter-float-1 pointer-events-none">
        <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 border border-blue-200 flex items-center justify-center shadow-xs">
          <Download size={18} className="animate-bounce" />
        </div>
        <div>
          <span className="font-heading text-xs font-black text-slate-900">1-Click Offline PDF</span>
          <p className="text-[11px] text-emerald-600 font-bold">Zero Paywall • 100% Free</p>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════════ */}
      {/* ── 3D ISOMETRIC LAPTOP / STAGE SHOWCASE ── */}
      {/* ══════════════════════════════════════════════════════════════════════════ */}
      <div
        className="stage-3d-card relative rounded-3xl bg-white/95 border border-slate-200/90 shadow-2xl shadow-slate-900/10 backdrop-blur-2xl overflow-hidden"
        style={{
          transform: `rotateX(${7 + mousePos.y}deg) rotateY(${-3 + mousePos.x}deg) rotateZ(0.5deg)`
        }}
      >
        {/* ── Jitter-Style Autonomous Animated Mouse Cursor ── */}
        <div className="hidden md:block absolute z-40 pointer-events-none animate-cursor-glide transition-all duration-300">
          <div className="flex items-center gap-1.5">
            <svg
              className="w-5 h-5 text-slate-900 drop-shadow-md filter"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M4 0l16 12.279-6.951 1.17 4.325 8.817-3.596 1.734-4.35-8.879-5.428 5.428z" />
            </svg>
            <span className="px-2 py-0.5 rounded-full bg-slate-900 text-white font-mono text-[10px] font-bold shadow-lg tracking-wider flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
              Bihar Student
            </span>
          </div>
        </div>

        {/* ── Browser Window Header with Mac Dots & Status Indicator ── */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-200/80 bg-slate-50/90 px-4 sm:px-6 py-3.5 gap-3">
          {/* Mac Dots & Live Sync Indicator */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5" aria-hidden="true">
              <span className="w-3 h-3 rounded-full bg-rose-400 hover:scale-110 transition-transform cursor-pointer"></span>
              <span className="w-3 h-3 rounded-full bg-amber-400 hover:scale-110 transition-transform cursor-pointer"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-400 hover:scale-110 transition-transform cursor-pointer"></span>
            </div>
            <div className="flex items-center gap-2 pl-2 border-l border-slate-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="font-heading text-xs font-black text-slate-800 tracking-tight flex items-center gap-1">
                ACB MOTION ENGINE
                <span className="text-[10px] bg-blue-100 text-blue-800 font-bold px-1.5 py-0.2 rounded">v2.6</span>
              </span>
            </div>
          </div>

          {/* Interactive Navigation Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
            {stages.map((stage, idx) => {
              const Icon = stage.icon;
              const isActive = activeTab === idx;
              return (
                <button
                  key={stage.id}
                  onClick={() => handleTabClick(idx)}
                  className={`relative px-3 sm:px-3.5 py-1.5 rounded-xl font-heading text-xs font-bold transition-all duration-300 flex items-center gap-1.5 whitespace-nowrap cursor-pointer active:scale-95 ${
                    isActive
                      ? `bg-gradient-to-r ${stage.themeClass} text-white shadow-md shadow-slate-900/15 scale-102`
                      : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/80'
                  }`}
                >
                  <Icon size={14} className={isActive ? 'animate-pulse' : ''} />
                  <span>{stage.title}</span>
                </button>
              );
            })}
          </div>

          {/* Pause / Play Control */}
          <button
            onClick={() => setIsPaused(!isPaused)}
            title={isPaused ? "Play Auto Tour" : "Pause Auto Tour"}
            className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold shadow-xs transition-all cursor-pointer shrink-0"
          >
            {isPaused ? <Play size={12} className="text-emerald-600" /> : <Pause size={12} className="text-amber-600" />}
            <span className="text-[11px]">{isPaused ? 'Resume' : 'Auto 4s'}</span>
          </button>
        </div>

        {/* ── Global Animated Progress Line ── */}
        <div className="w-full h-1 bg-slate-100 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-600 via-indigo-600 via-purple-600 to-emerald-500 transition-all duration-75"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* ══════════════════════════════════════════════════════════════════════════ */}
        {/* ── INTERACTIVE CANVAS CONTENT SCREENS ── */}
        {/* ══════════════════════════════════════════════════════════════════════════ */}
        <div className="p-4 sm:p-6 md:p-8 min-h-[360px] flex items-center justify-center bg-radial from-slate-50/50 via-white to-white">
          
          {/* ───────────────────────────────────────────────────────────── */}
          {/* SCREEN 1: B.TECH NOTES & PYQ VAULT */}
          {/* ───────────────────────────────────────────────────────────── */}
          {activeTab === 0 && (
            <div className="w-full animate-jitter-fade">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                
                {/* Left Live UI Simulation */}
                <div className="md:col-span-7 space-y-3">
                  <div className="flex items-center justify-between pb-1">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-lg bg-blue-100 text-blue-800 font-bold text-xs uppercase tracking-wider flex items-center gap-1">
                        <Flame size={12} className="text-orange-500" /> BEU B.Tech
                      </span>
                      <span className="text-xs font-semibold text-slate-500">
                        CSE / IT / ECE / ME / Civil
                      </span>
                    </div>
                    <span className="text-xs font-bold text-emerald-600 flex items-center gap-1 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      <CheckCircle2 size={13} /> 100% Free
                    </span>
                  </div>

                  {/* Card 1: Hand-Written Notes */}
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-50/90 to-white border border-blue-200/80 shadow-sm flex items-center justify-between group hover:border-blue-400 transition-all">
                    <div className="flex items-center gap-3.5">
                      <div className="w-11 h-11 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-500/30 shrink-0">
                        <FileText size={22} />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                          Operating System & Cloud Architecture
                        </h4>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className="text-xs text-slate-500">Units 1 - 5 Complete</span>
                          <span className="text-[10px] font-bold text-blue-700 bg-blue-100 px-1.5 py-0.2 rounded">Handwritten</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1.5 rounded-xl bg-blue-600 text-white text-xs font-bold flex items-center gap-1.5 shadow-sm shadow-blue-500/25 group-hover:scale-105 transition-transform">
                        <Download size={13} /> Download PDF
                      </span>
                    </div>
                  </div>

                  {/* Card 2: 5+ Years Verified PYQs */}
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-indigo-50/90 to-white border border-indigo-200/80 shadow-sm flex items-center justify-between group hover:border-indigo-400 transition-all">
                    <div className="flex items-center gap-3.5">
                      <div className="w-11 h-11 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-md shadow-indigo-500/30 shrink-0">
                        <BookOpen size={22} />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                          Design & Analysis of Algorithms (DAA)
                        </h4>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className="text-xs text-slate-500">5+ Years Solved Papers (2020-2025)</span>
                          <span className="text-[10px] font-bold text-indigo-700 bg-indigo-100 px-1.5 py-0.2 rounded">Solved</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1.5 rounded-xl bg-indigo-600 text-white text-xs font-bold flex items-center gap-1.5 shadow-sm shadow-indigo-500/25 group-hover:scale-105 transition-transform">
                        <Download size={13} /> View PYQ
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Action & Value Proposition */}
                <div className="md:col-span-5 bg-gradient-to-br from-blue-50 to-indigo-100/60 p-6 rounded-2xl border border-blue-200/80 flex flex-col justify-between h-full">
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-bold mb-3 shadow-xs">
                      <Sparkles size={13} /> Curated for Bihar Colleges
                    </div>
                    <h3 className="font-heading text-xl font-black text-slate-900 leading-snug mb-2">
                      Exam-Targeted Material for 9+ CGPA
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      Direct 1-click downloads with zero redirects or paywalls. Formatted according to official BEU curriculum standards.
                    </p>
                  </div>

                  <Link
                    to="/notes"
                    className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-heading font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-blue-500/25 transition-all hover:gap-3"
                  >
                    <span>Explore 500+ Notes & PYQs</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>

              </div>
            </div>
          )}

          {/* ───────────────────────────────────────────────────────────── */}
          {/* SCREEN 2: BEU SGPA ENGINE */}
          {/* ───────────────────────────────────────────────────────────── */}
          {activeTab === 1 && (
            <div className="w-full animate-jitter-fade">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                
                {/* Left Live SGPA Gauge & Subject Simulator */}
                <div className="md:col-span-7 bg-slate-50/90 border border-slate-200/80 rounded-2xl p-4 sm:p-5 space-y-3.5">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-2.5">
                    <div>
                      <span className="font-heading text-xs font-bold text-slate-800 block">
                        5th Sem B.Tech Grade Simulator
                      </span>
                      <span className="text-[10px] text-slate-500">Theory (4 cr), Labs (1.5 cr), MOOCs (3 cr)</span>
                    </div>
                    <span className="text-xs font-bold text-purple-700 bg-purple-100 px-2.5 py-0.5 rounded-full border border-purple-200">
                      BEU 10-Point Scale
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5 text-xs">
                    <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-between">
                      <div>
                        <span className="text-slate-400 block text-[10px]">Theory Paper 1</span>
                        <strong className="text-slate-900 font-bold text-xs">O Grade (10)</strong>
                      </div>
                      <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">4.0 Cr</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-between">
                      <div>
                        <span className="text-slate-400 block text-[10px]">Theory Paper 2</span>
                        <strong className="text-slate-900 font-bold text-xs">A+ Grade (9)</strong>
                      </div>
                      <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">4.0 Cr</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-between">
                      <div>
                        <span className="text-slate-400 block text-[10px]">Design Lab</span>
                        <strong className="text-slate-900 font-bold text-xs">O Grade (10)</strong>
                      </div>
                      <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">1.5 Cr</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-between">
                      <div>
                        <span className="text-slate-400 block text-[10px]">Major Project</span>
                        <strong className="text-slate-900 font-bold text-xs">A+ Grade (9)</strong>
                      </div>
                      <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">3.0 Cr</span>
                    </div>
                  </div>

                  {/* Calculated Result Banner */}
                  <div className="p-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white flex items-center justify-between shadow-md shadow-purple-500/20">
                    <div>
                      <span className="text-[10px] text-purple-200 uppercase tracking-wider block font-semibold">Calculated Semester SGPA</span>
                      <span className="font-heading text-2xl font-black">9.48 / 10.00</span>
                    </div>
                    <div className="text-right">
                      <span className="px-2.5 py-1 rounded-lg bg-white/20 text-xs font-bold block mb-0.5">
                        Outstanding (O)
                      </span>
                      <span className="text-[10px] text-purple-200 font-medium">89.8% Equivalent</span>
                    </div>
                  </div>
                </div>

                {/* Right Action */}
                <div className="md:col-span-5 bg-gradient-to-br from-purple-50 to-indigo-100/60 p-6 rounded-2xl border border-purple-200/80 flex flex-col justify-between h-full">
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-600 text-white text-xs font-bold mb-3 shadow-xs">
                      <Calculator size={13} /> Accurate Credit Grading
                    </div>
                    <h3 className="font-heading text-xl font-black text-slate-900 leading-snug mb-2">
                      Zero Calculation Errors Guaranteed
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      Tailored to Bihar Engineering University grading norms with instant semester-to-overall CGPA roll-up.
                    </p>
                  </div>

                  <Link
                    to="/cgpa"
                    className="w-full py-3 px-4 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-heading font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-purple-500/25 transition-all hover:gap-3"
                  >
                    <span>Calculate My SGPA / CGPA</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>

              </div>
            </div>
          )}

          {/* ───────────────────────────────────────────────────────────── */}
          {/* SCREEN 3: UGEAC 2026 PREDICTOR */}
          {/* ───────────────────────────────────────────────────────────── */}
          {activeTab === 2 && (
            <div className="w-full animate-jitter-fade">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                
                {/* Left Live Cutoff Predictor Simulation */}
                <div className="md:col-span-7 bg-slate-50/90 border border-slate-200/80 rounded-2xl p-4 sm:p-5 space-y-3.5">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-2.5">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-slate-900">JEE Percentile: 89.4%</span>
                      <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">
                        Bihar State Rank: ~1,840
                      </span>
                    </div>
                    <span className="text-[11px] font-bold text-slate-600">Category: EBC</span>
                  </div>

                  {/* College Match 1: MIT Muzaffarpur */}
                  <div className="p-3.5 rounded-xl bg-white border border-emerald-300 shadow-sm flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-xs shadow-xs">
                        MIT
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-slate-900">MIT Muzaffarpur • CSE / IT</h4>
                        <p className="text-[10px] text-slate-500">Opening: 380 | Closing: 2,120</p>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold text-xs flex items-center gap-1">
                      <Check size={12} /> 98.4% Match
                    </span>
                  </div>

                  {/* College Match 2: BCE Bhagalpur */}
                  <div className="p-3.5 rounded-xl bg-white border border-blue-300 shadow-sm flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-xs shadow-xs">
                        BCE
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-slate-900">BCE Bhagalpur • ECE / EE</h4>
                        <p className="text-[10px] text-slate-500">Opening: 450 | Closing: 2,450</p>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 border border-blue-200 font-bold text-xs flex items-center gap-1">
                      <Check size={12} /> 95.8% Match
                    </span>
                  </div>
                </div>

                {/* Right Action */}
                <div className="md:col-span-5 bg-gradient-to-br from-emerald-50 to-teal-100/60 p-6 rounded-2xl border border-emerald-200/80 flex flex-col justify-between h-full">
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-600 text-white text-xs font-bold mb-3 shadow-xs">
                      <Target size={13} /> BCECEB Multi-Year Data
                    </div>
                    <h3 className="font-heading text-xl font-black text-slate-900 leading-snug mb-2">
                      38+ Govt Engineering Colleges
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      Enter your JEE Main percentile or state rank to discover exact admission probabilities across General, EWS, OBC, EBC, SC, and ST seats.
                    </p>
                  </div>

                  <Link
                    to="/ugeac-predictor"
                    className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-heading font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-emerald-500/25 transition-all hover:gap-3"
                  >
                    <span>Check College Predictor</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>

              </div>
            </div>
          )}

          {/* ───────────────────────────────────────────────────────────── */}
          {/* SCREEN 4: BEU LIVE RADAR */}
          {/* ───────────────────────────────────────────────────────────── */}
          {activeTab === 3 && (
            <div className="w-full animate-jitter-fade">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                
                {/* Left Live Radar Ticker */}
                <div className="md:col-span-7 bg-slate-50/90 border border-slate-200/80 rounded-2xl p-4 sm:p-5 space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
                      </span>
                      <span className="text-xs font-bold text-slate-900">Live Official Circular Stream</span>
                    </div>
                    <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      Auto-Synced 24/7
                    </span>
                  </div>

                  {/* Circular Item 1 */}
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Bell size={16} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1 mb-1">
                        <span className="text-[10px] font-bold text-amber-800 bg-amber-50 px-2 py-0.2 rounded border border-amber-200">
                          Notice #BEU-EXAM-2026
                        </span>
                        <span className="text-[10px] text-slate-400">Today</span>
                      </div>
                      <p className="text-xs font-bold text-slate-900 line-clamp-1">
                        B.Tech Even Semester Examination Schedule 2026 Officially Released
                      </p>
                    </div>
                  </div>

                  {/* Circular Item 2 */}
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Zap size={16} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1 mb-1">
                        <span className="text-[10px] font-bold text-blue-800 bg-blue-50 px-2 py-0.2 rounded border border-blue-200">
                          Result Portal
                        </span>
                        <span className="text-[10px] text-slate-400">Yesterday</span>
                      </div>
                      <p className="text-xs font-bold text-slate-900 line-clamp-1">
                        BEU 7th Semester B.Tech Result Announced - Check by Roll No
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Action */}
                <div className="md:col-span-5 bg-gradient-to-br from-amber-50 to-orange-100/60 p-6 rounded-2xl border border-amber-200/80 flex flex-col justify-between h-full">
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-600 text-white text-xs font-bold mb-3 shadow-xs">
                      <Radio size={13} className="animate-pulse" /> Real-Time University Radar
                    </div>
                    <h3 className="font-heading text-xl font-black text-slate-900 leading-snug mb-2">
                      Instant WhatsApp Broadcast Alerts
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      Get exam dates, carry-over rules, and circular PDFs delivered straight to your phone seconds after publication.
                    </p>
                  </div>

                  <a
                    href="#beu-radar"
                    className="w-full py-3 px-4 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-heading font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-amber-500/25 transition-all hover:gap-3"
                  >
                    <span>View All Live Notices</span>
                    <ArrowRight size={15} />
                  </a>
                </div>

              </div>
            </div>
          )}

        </div>

        {/* ── Bottom Stage Interactive Footer ── */}
        <div className="px-4 sm:px-6 py-3 bg-slate-50/90 border-t border-slate-200 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
            <span className="font-semibold text-slate-800">
              Trusted by 10,000+ Bihar B.Tech Students Across 38+ Govt Colleges
            </span>
          </div>
          <div className="flex items-center gap-3 text-[11px] font-semibold text-slate-500">
            <span className="flex items-center gap-1 text-blue-600">
              <ShieldCheck size={14} /> 100% Free & Open
            </span>
            <span>•</span>
            <span className="hover:text-blue-600 cursor-pointer">Hover to Pause Motion</span>
          </div>
        </div>

      </div>
    </div>
  );
}
