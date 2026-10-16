import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen, Calculator, FileText, Target,
  Sparkles, CheckCircle2, ArrowRight, Radio,
  Award, Download, Play, Pause, ChevronRight,
  GraduationCap, Building2, Bell, Zap,
  Check, Star, ShieldCheck, Flame, Search
} from 'lucide-react';
import GlobalSearch from './GlobalSearch';

export default function InteractiveCanvasHero({ isNative }) {
  const canvasRef = useRef(null);
  const heroRef = useRef(null);

  // Interactive Stage State
  const [activeTab, setActiveTab] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  // Interactive Live Simulators State
  const [sgpaTheoryGrade, setSgpaTheoryGrade] = useState(10); // 10 = O, 9 = A+, 8 = A
  const [simPercentile, setSimPercentile] = useState(89.4);

  // 4 Interactive Stages
  const stages = [
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
    },
    {
      id: 'radar',
      title: 'Live BEU Radar',
      subtitle: 'Instant WhatsApp Exam Alerts',
      icon: Radio,
      accent: '#ea580c',
      themeClass: 'from-amber-500 to-orange-600',
      link: '#beu-radar'
    }
  ];

  // ── Continuous Auto-Cycle Interval with Progress Bar (Always ON) ──
  useEffect(() => {
    const intervalTime = 40;
    const totalDuration = 4200; // 4.2s per stage
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
  }, [stages.length]);

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

  return (
    <section ref={heroRef} className="relative pt-6 pb-16 md:pt-12 md:pb-24 px-4 sm:px-6 md:px-12 overflow-hidden z-10 select-none">

      {/* Floating Animated Ambient Backdrops */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] pointer-events-none z-0">
        <div className="absolute -top-10 left-[10%] w-[380px] h-[380px] rounded-full bg-blue-400/15 blur-3xl animate-jitter-float-1" />
        <div className="absolute top-[40px] right-[10%] w-[420px] h-[420px] rounded-full bg-violet-400/15 blur-3xl animate-jitter-float-2" />
      </div>

      <div className="container mx-auto max-w-5xl flex flex-col items-center text-center relative z-10">
        
        {/* Animated Radar Pill Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/95 border border-blue-200 text-xs font-semibold text-blue-700 shadow-sm shadow-blue-500/10 mb-6 backdrop-blur-md hover:scale-105 transition-transform cursor-pointer">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="font-heading tracking-wide text-xs font-bold text-blue-700">2026 Academic Radar</span>
          <span className="text-slate-300">•</span>
          <span className="text-slate-600 font-medium">Live Canvas UI Interactive Engine</span>
        </div>

        {/* Main Headline */}
        <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.12] mb-6 text-slate-900">
          Bihar's <span className="text-gradient-hero">#1 Next-Gen</span> Academic Ecosystem
        </h1>

        {/* Subtitle */}
        <p className="text-slate-600 text-sm sm:text-base md:text-xl font-normal leading-relaxed max-w-3xl mb-8">
          Engineered exclusively for <strong className="text-slate-900 font-bold">38+ Bihar Government Engineering Colleges</strong> & BEU students. Access unit-wise notes, 5+ years verified PYQs, accurate CGPA calculators, and instant exam notifications.
        </p>

        {/* Action Buttons Row */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 sm:gap-3.5 w-full max-w-xl mb-8">
          <Link
            to="/mentorship"
            className="btn-shimmer w-full sm:w-auto px-6 py-3.5 sm:py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-heading font-bold text-sm transition-all shadow-md shadow-blue-500/20 active:scale-95 flex items-center justify-center gap-2"
          >
            <GraduationCap size={18} /> Free Senior Mentorship
          </Link>

          <div className="grid grid-cols-2 sm:flex sm:items-center gap-2.5 w-full sm:w-auto">
            <a
              href="#beu-radar"
              className="px-4 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-heading font-semibold text-xs sm:text-sm transition-all active:scale-95 flex items-center justify-center gap-1.5 sm:gap-2"
            >
              <Radio size={15} className="text-emerald-600 animate-pulse shrink-0" />
              <span className="truncate">Live Notices</span>
            </a>

            {isNative ? (
              <Link
                to="/study"
                className="px-4 py-3 rounded-xl bg-white hover:bg-blue-50 text-blue-700 border border-blue-200 hover:border-blue-300 font-heading font-bold text-xs sm:text-sm transition-all shadow-xs active:scale-95 flex items-center justify-center gap-1.5 sm:gap-2 group"
              >
                <Zap size={15} className="text-blue-600 group-hover:scale-110 transition-transform shrink-0" />
                <span className="truncate">Focus Timer</span>
              </Link>
            ) : (
              <Link
                to="/download"
                className="px-4 py-3 rounded-xl bg-white hover:bg-blue-50 text-blue-700 border border-blue-200 hover:border-blue-300 font-heading font-bold text-xs sm:text-sm transition-all shadow-xs active:scale-95 flex items-center justify-center gap-1.5 sm:gap-2 group"
              >
                <Download size={15} className="text-blue-600 group-hover:scale-110 transition-transform shrink-0" />
                <span className="truncate">Get Apps</span>
                <span className="text-[10px] bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded font-bold uppercase tracking-wider hidden sm:inline">PC & APK</span>
              </Link>
            )}
          </div>
        </div>

        {/* Elevated Quick Search Command HUD */}
        <div className="w-full max-w-2xl bg-white/95 border border-slate-200/90 p-3 sm:p-4 rounded-2xl shadow-lg shadow-slate-200/50 backdrop-blur-xl mb-8">
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
                className="px-2.5 py-1 rounded-xl bg-slate-100 hover:bg-blue-50 border border-slate-200 hover:border-blue-400 text-slate-700 hover:text-blue-600 font-semibold text-xs shadow-xs transition-all hover:scale-105 active:scale-95 inline-flex items-center gap-1.5 shrink-0 whitespace-nowrap"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" aria-hidden="true" />
                {chip.name}
              </Link>
            ))}
          </div>
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

          <div className="hidden lg:flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-white/95 border border-amber-200 shadow-xl shadow-amber-500/15 backdrop-blur-xl absolute -top-6 -right-6 z-30 animate-jitter-float-2 pointer-events-none">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <div>
              <span className="font-heading text-xs font-black text-slate-900">BEU Radar Live</span>
              <p className="text-[10px] text-slate-500 font-medium">Auto WhatsApp Broadcast</p>
            </div>
          </div>

          {/* Main 3D Card Stage */}
          <div className="stage-3d-card rounded-3xl bg-white/95 border border-slate-200/90 shadow-2xl shadow-blue-900/10 backdrop-blur-2xl overflow-hidden transition-all duration-500">
            
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
              
              {/* SCREEN 1: NOTES & PYQ VAULT */}
              {activeTab === 0 && (
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
              {activeTab === 1 && (
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
              {activeTab === 2 && (
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

              {/* SCREEN 4: BEU LIVE RADAR */}
              {activeTab === 3 && (
                <div className="w-full animate-jitter-fade">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center text-left">
                    <div className="md:col-span-7 bg-slate-50/90 border border-slate-200 rounded-2xl p-4 sm:p-5 space-y-3">
                      <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                        <div className="flex items-center gap-2">
                          <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
                          </span>
                          <span className="text-xs font-bold text-slate-900">Official Circular Stream</span>
                        </div>
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                          Auto-Synced
                        </span>
                      </div>

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

                    <div className="md:col-span-5 bg-gradient-to-br from-amber-50 to-orange-50 p-5 rounded-2xl border border-amber-200 flex flex-col justify-between h-full">
                      <div>
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-600 text-white text-[11px] font-bold mb-3">
                          <Radio size={12} className="animate-pulse" /> Instant WhatsApp Bot
                        </div>
                        <h3 className="font-heading text-lg font-bold text-slate-900 leading-snug mb-2">
                          Never Miss University Updates
                        </h3>
                        <p className="text-xs text-slate-600 leading-relaxed mb-4">
                          Automated crawler broadcasts exam circulars directly to student WhatsApp groups in real time.
                        </p>
                      </div>

                      <a
                        href="#beu-radar"
                        className="w-full py-2.5 px-4 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-heading font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all hover:gap-3"
                      >
                        <span>View Live Notice Feed</span>
                        <ArrowRight size={14} />
                      </a>
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
