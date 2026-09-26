import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, MapPin, GraduationCap, Building2, Briefcase, 
  CheckCircle2, ArrowRight, Sparkles, ChevronRight, Award, 
  HelpCircle, ShieldCheck, Compass, FileText, Calculator
} from 'lucide-react';
import Reveal from './Reveal';

export default function HomeEducationalGuide() {
  const [activeSection, setActiveSection] = useState('admission');

  const guideSections = [
    { id: 'admission', label: 'Admission Guide', icon: <GraduationCap size={16} /> },
    { id: 'ugeac', label: 'UGEAC Counselling', icon: <MapPin size={16} /> },
    { id: 'beu', label: 'BEU Academic System', icon: <BookOpen size={16} /> },
    { id: 'placements', label: 'Placements & Career', icon: <Briefcase size={16} /> },
  ];

  return (
    <section className="py-14 px-4 sm:px-6 md:px-12 bg-gradient-to-b from-white via-slate-50/50 to-white border-t border-slate-200/80 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-0"></div>
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl pointer-events-none -z-0"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <Reveal delay={50}>
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-600 text-xs font-heading font-bold mb-3 shadow-xs">
              <Sparkles size={14} className="text-blue-600 animate-spin-slow" />
              Ultimate Engineering Guide 2026
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Bihar Engineering & <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">BEU Master Guide</span>
            </h2>
            <p className="text-slate-600 text-sm md:text-base font-sans font-medium mt-3 leading-relaxed">
              Your authoritative, step-by-step handbook covering B.Tech admission via JEE Main, UGEAC choice filling blueprints, BEU 10-point credit grading, and real placement strategies across 38+ Government Engineering Colleges.
            </p>
          </div>
        </Reveal>

        {/* Phase Selector Tabs - Mobile 2x2 Grid, sm/md 4-column Segmented Bar */}
        <div className="w-full max-w-4xl mx-auto mb-8">
          <div
            role="tablist"
            aria-label="Master Guide Phases"
            className="grid grid-cols-2 sm:grid-cols-4 p-1.5 rounded-2xl bg-slate-100/90 border border-slate-200/80 shadow-inner gap-1.5"
          >
            {guideSections.map((sec, idx) => {
              const isActive = activeSection === sec.id;
              return (
                <button
                  key={sec.id}
                  role="tab"
                  id={`guide-tab-${sec.id}`}
                  aria-selected={isActive}
                  aria-controls={`guide-panel-${sec.id}`}
                  onClick={() => setActiveSection(sec.id)}
                  className={`flex items-center justify-center sm:justify-start gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-2.5 rounded-xl text-xs font-heading font-extrabold transition-all min-h-[44px] ${
                    isActive
                      ? 'bg-white text-blue-600 shadow-xs border border-slate-200/60'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                  }`}
                >
                  <span className="opacity-60 text-[11px] shrink-0">0{idx + 1}</span>
                  <span className="shrink-0">{sec.icon}</span>
                  <span className="truncate">{sec.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Main Content Area (Issue 5: Single active phase rendered at a time) */}
          <div className="lg:col-span-8">

            {/* Section 1: Admission Guide */}
            {activeSection === 'admission' && (
              <div id="guide-panel-admission" role="tabpanel" aria-labelledby="guide-tab-admission" className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden animate-fadeIn">
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <span className="text-xs font-heading font-extrabold text-blue-600 block">Phase 01</span>
                    <h3 className="font-heading text-xl sm:text-2xl font-black text-slate-900 tracking-tight">Bihar Engineering Admission Guide</h3>
                  </div>
                </div>

                <div className="space-y-3.5 text-slate-600 text-sm leading-relaxed font-sans font-medium">
                  <p>
                    Admission to all 38 Government Engineering Colleges (GECs) across Bihar is conducted strictly through the <strong className="text-slate-900 font-bold">UGEAC (Undergraduate Engineering Admission Counselling)</strong>, organized by the Bihar Combined Entrance Competitive Examination Board (BCECEB).
                  </p>
                  <p>
                    Bihar does not conduct a separate state entrance exam for general B.Tech seats. Instead, <strong className="text-slate-900 font-bold">JEE (Main) Paper-1 NTA score</strong> is the sole criteria. BCECEB prepares a consolidated state merit list from registered JEE applicants. Vacant seats remaining after UGEAC rounds are subsequently filled through the BCECE Special Lateral / PCM Exam.
                  </p>
                </div>

                {/* Eligibility Grid */}
                <div className="mt-5 pt-5 border-t border-slate-100">
                  <h4 className="font-heading text-xs font-bold text-slate-900 mb-3.5 flex items-center gap-2">
                    <ShieldCheck className="text-blue-600" size={16} /> Essential Eligibility Checklist
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div className="p-3 bg-slate-50/80 border border-slate-200/60 rounded-xl flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                      <div className="text-xs">
                        <strong className="text-slate-900 block font-bold">10+2 Qualification</strong>
                        <span className="text-slate-600">Physics & Math mandatory with Chem/CS/Bio.</span>
                      </div>
                    </div>
                    <div className="p-3 bg-slate-50/80 border border-slate-200/60 rounded-xl flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                      <div className="text-xs">
                        <strong className="text-slate-900 block font-bold">Minimum Percentage</strong>
                        <span className="text-slate-600">45% aggregate (40% for SC/ST/EBC/BC/RCG).</span>
                      </div>
                    </div>
                    <div className="p-3 bg-slate-50/80 border border-slate-200/60 rounded-xl flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                      <div className="text-xs">
                        <strong className="text-slate-900 block font-bold">Valid JEE Main Score</strong>
                        <span className="text-slate-600">Positive NTA Scorecard in current year exam.</span>
                      </div>
                    </div>
                    <div className="p-3 bg-slate-50/80 border border-slate-200/60 rounded-xl flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                      <div className="text-xs">
                        <strong className="text-slate-900 block font-bold">Bihar Domicile Proof</strong>
                        <span className="text-slate-600">Permanent Resident Certificate for 85% state quota.</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-100">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <Link
                      to="/ugeac-predictor?tab=finder"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-heading text-xs font-bold transition-all shadow-sm active:scale-95"
                    >
                      Check Your College Chances <ArrowRight size={14} />
                    </Link>
                    <Link
                      to="/colleges"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-heading text-xs font-bold transition-all"
                    >
                      Explore 38+ Govt Colleges
                    </Link>
                  </div>
                  <button
                    onClick={() => setActiveSection('ugeac')}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-heading font-bold text-blue-600 hover:bg-blue-50 transition-colors"
                  >
                    Next: UGEAC Counselling (Phase 02) <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            )}

            {/* Section 2: UGEAC Counselling */}
            {activeSection === 'ugeac' && (
              <div id="guide-panel-ugeac" role="tabpanel" aria-labelledby="guide-tab-ugeac" className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden animate-fadeIn">
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <span className="text-xs font-heading font-extrabold text-blue-600 block">Phase 02</span>
                    <h3 className="font-heading text-xl sm:text-2xl font-black text-slate-900 tracking-tight">UGEAC Counselling & Choice Locking</h3>
                  </div>
                </div>

                <div className="space-y-3.5 text-slate-600 text-sm leading-relaxed font-sans font-medium">
                  <p>
                    UGEAC operates on a centralized online allotment algorithm. Once registration opens on <code className="text-blue-600 font-bold bg-blue-50 px-2 py-0.5 rounded">bceceboard.bihar.gov.in</code>, candidates register with their JEE Roll Number and upload category/domicile credentials.
                  </p>
                  <p>
                    <strong className="text-slate-900 font-bold">The Strategic Choice Filling Rule:</strong> The order of colleges and branches on your portal strictly determines your outcome. If you qualify for your 5th choice, options 6 through 50 are automatically locked out. Always place premier Tier-1 colleges (MIT Muzaffarpur, BCE Bhagalpur, GCE Gaya) at the top, realistic choices in the middle, and safe backup colleges at the bottom.
                  </p>
                </div>

                {/* 3-Step Choice Filling Protocol */}
                <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-4 bg-blue-50/50 border border-blue-100/80 rounded-2xl">
                    <span className="text-blue-600 font-heading font-black text-sm block mb-1">Tier A: Dream</span>
                    <p className="text-xs text-slate-600 font-medium leading-relaxed">
                      Branches slightly above your rank range (e.g. MIT/BCE CSE). Never omit ambitious targets!
                    </p>
                  </div>
                  <div className="p-4 bg-slate-50 border border-slate-200/80 rounded-2xl">
                    <span className="text-slate-800 font-heading font-black text-sm block mb-1">Tier B: Realistic</span>
                    <p className="text-xs text-slate-600 font-medium leading-relaxed">
                      Colleges where previous year closing ranks match within ±15% of your state rank.
                    </p>
                  </div>
                  <div className="p-4 bg-slate-50 border border-slate-200/80 rounded-2xl">
                    <span className="text-slate-800 font-heading font-black text-sm block mb-1">Tier C: Safe Anchors</span>
                    <p className="text-xs text-slate-600 font-medium leading-relaxed">
                      Reliable regional colleges to guarantee you do not finish Round 1 without a confirmed seat.
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-100">
                  <div className="flex flex-wrap items-center gap-3">
                    <Link
                      to="/ugeac-predictor?tab=guide"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-heading text-xs font-bold transition-all shadow-sm active:scale-95"
                    >
                      View Official UGEAC Guide <ArrowRight size={14} />
                    </Link>
                    <Link
                      to="/compare-colleges"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-heading text-xs font-bold transition-all"
                    >
                      Compare Colleges Head-to-Head
                    </Link>
                  </div>
                  <button
                    onClick={() => setActiveSection('beu')}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-heading font-bold text-blue-600 hover:bg-blue-50 transition-colors"
                  >
                    Next: BEU System (Phase 03) <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            )}

            {/* Section 3: BEU Academic System */}
            {activeSection === 'beu' && (
              <div id="guide-panel-beu" role="tabpanel" aria-labelledby="guide-tab-beu" className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden animate-fadeIn">
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                    <BookOpen size={22} />
                  </div>
                  <div>
                    <span className="text-xs font-heading font-extrabold text-blue-600 block">Phase 03</span>
                    <h3 className="font-heading text-xl sm:text-2xl font-black text-slate-900 tracking-tight">BEU Academic & Credit System</h3>
                  </div>
                </div>

                <div className="space-y-3.5 text-slate-600 text-sm leading-relaxed font-sans font-medium">
                  <p>
                    <strong className="text-slate-900 font-bold">Bihar Engineering University (BEU Patna)</strong>, established under the Bihar Engineering University Act 2021, governs academic curricula, exam conduction, and evaluations across all affiliated colleges.
                  </p>
                  <p>
                    BEU strictly operates under the <strong className="text-slate-900 font-bold">AICTE 10-Point Credit System</strong>. Academic progression requires completing approximately 160 credits across 8 semesters. Each semester evaluation divides into:
                  </p>
                </div>

                {/* Evaluation Breakdown Table */}
                <div className="mt-5 p-4 bg-slate-50 border border-slate-200/80 rounded-2xl">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-xs">
                      <span className="text-xs font-heading font-bold text-slate-900 block">Internal Assessment (30 Marks)</span>
                      <p className="text-slate-600 mt-1 font-medium">
                        Two mid-semester exams (20 Marks) + 5 marks continuous classroom attendance + 5 marks teacher assessment / assignments.
                      </p>
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-xs">
                      <span className="text-xs font-heading font-bold text-blue-600 block">End-Semester University Exam (70 Marks)</span>
                      <p className="text-slate-600 mt-1 font-medium">
                        3-hour descriptive theory examination conducted at designated university exam centers across Bihar.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-100">
                  <div className="flex flex-wrap items-center gap-3">
                    <Link
                      to="/cgpa"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-heading text-xs font-bold transition-all shadow-sm active:scale-95"
                    >
                      <Calculator size={14} /> Calculate SGPA / CGPA
                    </Link>
                    <Link
                      to="/notes"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-heading text-xs font-bold transition-all"
                    >
                      Download B.Tech Notes
                    </Link>
                    <Link
                      to="/pyq"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-heading text-xs font-bold transition-all"
                    >
                      Solve 5+ Years PYQ
                    </Link>
                  </div>
                  <button
                    onClick={() => setActiveSection('placements')}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-heading font-bold text-blue-600 hover:bg-blue-50 transition-colors"
                  >
                    Next: Placements (Phase 04) <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            )}

            {/* Section 4: Placement Reality */}
            {activeSection === 'placements' && (
              <div id="guide-panel-placements" role="tabpanel" aria-labelledby="guide-tab-placements" className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden animate-fadeIn">
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                    <Briefcase size={22} />
                  </div>
                  <div>
                    <span className="text-xs font-heading font-extrabold text-blue-600 block">Phase 04</span>
                    <h3 className="font-heading text-xl sm:text-2xl font-black text-slate-900 tracking-tight">Placement Realities & Career Avenues</h3>
                  </div>
                </div>

                <div className="space-y-3.5 text-slate-600 text-sm leading-relaxed font-sans font-medium">
                  <p>
                    Understanding Bihar campus placement dynamics early guarantees smart career planning. While Tier-1 institutions like <strong className="text-slate-900 font-bold">MIT Muzaffarpur, BCE Bhagalpur, and GCE Gaya</strong> host direct corporate on-campus recruiters (TCS, Prism Johnson, Alstom, L&T, Infosys), students in regional colleges excel primarily through:
                  </p>
                </div>

                {/* 3 Career Pillars */}
                <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-4 bg-slate-50 border border-slate-200/70 rounded-2xl">
                    <span className="font-heading text-xs font-bold text-slate-900 block mb-1">1. Off-Campus Tech Drives</span>
                    <p className="text-xs text-slate-600 font-medium leading-relaxed">
                      National qualifiers like TCS NQT, Cognizant GenC, and direct hiring platforms (Wellfound, Unstop, LinkedIn).
                    </p>
                  </div>
                  <div className="p-4 bg-slate-50 border border-slate-200/70 rounded-2xl">
                    <span className="font-heading text-xs font-bold text-slate-900 block mb-1">2. Core & Govt Engineering</span>
                    <p className="text-xs text-slate-600 font-medium leading-relaxed">
                      BPSC Assistant Engineer (AE), RRB JE, and GATE exams for prestigious PSU jobs (IOCL, NTPC, ONGC, Power Grid).
                    </p>
                  </div>
                  <div className="p-4 bg-slate-50 border border-slate-200/70 rounded-2xl">
                    <span className="font-heading text-xs font-bold text-slate-900 block mb-1">3. Startup & Hackathons</span>
                    <p className="text-xs text-slate-600 font-medium leading-relaxed">
                      Smart India Hackathon winners and Bihar Startup Policy grants providing up to ₹10 Lakhs seed funding.
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-100">
                  <div className="flex flex-wrap items-center gap-3">
                    <Link
                      to="/mentorship"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-heading text-xs font-bold transition-all shadow-sm active:scale-95"
                    >
                      Connect With Senior Mentors <ArrowRight size={14} />
                    </Link>
                    <Link
                      to="/compare-colleges"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-heading text-xs font-bold transition-all"
                    >
                      Compare Bihar Colleges
                    </Link>
                  </div>
                  <button
                    onClick={() => setActiveSection('admission')}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-heading font-bold text-blue-600 hover:bg-blue-50 transition-colors"
                  >
                    Back to Phase 01 <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            )}

            {/* Mobile / Tablet Callout HUD */}
            <div className="mt-6 lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-md shadow-blue-500/10 flex items-center justify-between gap-3">
                <div>
                  <span className="px-2 py-0.5 rounded-md bg-white/20 text-white text-[10px] font-heading font-bold inline-block mb-1">
                    100% Free Tool
                  </span>
                  <h5 className="font-heading text-xs font-bold text-white">Need Bihar Rank Guidance?</h5>
                  <p className="text-[11px] text-blue-100 font-sans mt-0.5 leading-snug">
                    Predict GEC admission chances based on opening/closing ranks.
                  </p>
                </div>
                <Link
                  to="/ugeac-predictor?tab=finder"
                  className="shrink-0 px-3 py-2 bg-white text-blue-700 rounded-xl font-heading text-xs font-bold shadow-xs hover:bg-blue-50 active:scale-95"
                >
                  Predictor
                </Link>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
                    <HelpCircle size={20} />
                  </div>
                  <div>
                    <h6 className="font-heading text-xs font-bold text-slate-900">Have specific questions?</h6>
                    <p className="text-[11px] text-slate-500 font-medium">Free 1-on-1 Senior Guidance</p>
                  </div>
                </div>
                <Link
                  to="/mentorship"
                  className="shrink-0 px-3 py-2 bg-blue-600 text-white rounded-xl font-heading text-xs font-bold shadow-xs hover:bg-blue-700 active:scale-95"
                >
                  Ask Senior
                </Link>
              </div>
            </div>

          </div>

          {/* Sidebar Sticky Navigation HUD (Issue 19: flush with content) */}
          <div className="lg:col-span-4 hidden lg:block sticky top-24 space-y-6">
            <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-sm">
              <h4 className="font-heading text-xs font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Compass size={16} className="text-blue-600" /> Guide Navigation
              </h4>

              <div className="space-y-2">
                {guideSections.map((sec, idx) => (
                  <button
                    key={sec.id}
                    onClick={() => setActiveSection(sec.id)}
                    className={`w-full flex items-center justify-between p-3 rounded-xl text-xs font-heading font-bold transition-all ${
                      activeSection === sec.id
                        ? 'bg-blue-50 text-blue-700 border border-blue-200/80 shadow-xs'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-xs font-bold text-slate-400">0{idx + 1}</span>
                      <span>{sec.label}</span>
                    </div>
                    <ChevronRight size={14} className={activeSection === sec.id ? 'text-blue-600' : 'text-slate-400'} />
                  </button>
                ))}
              </div>

              {/* Free Predictor Widget Callout */}
              <div className="mt-6 p-5 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white relative overflow-hidden shadow-md shadow-blue-500/20">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
                <span className="px-2 py-0.5 rounded-xl bg-white/20 text-white text-xs font-heading font-bold inline-block mb-2">
                  100% Free Tool
                </span>
                <h5 className="font-heading text-sm font-bold">Need Rank Guidance?</h5>
                <p className="text-xs text-blue-100 font-sans font-medium mt-1 leading-relaxed">
                  Predict your exact Bihar GEC admission chances based on genuine 2024–2025 opening & closing ranks.
                </p>
                <Link
                  to="/ugeac-predictor?tab=finder"
                  className="mt-4 block text-center w-full py-2.5 px-4 bg-white text-blue-700 rounded-xl font-heading text-xs font-bold hover:bg-blue-50 transition-colors shadow-sm"
                >
                  Launch Predictor
                </Link>
              </div>

              {/* Senior Support Callout */}
              <div className="mt-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
                  <HelpCircle size={20} />
                </div>
                <div>
                  <h6 className="font-heading text-xs font-bold text-slate-900">Have specific questions?</h6>
                  <Link to="/mentorship" className="text-xs font-bold text-blue-600 hover:underline flex items-center gap-1 mt-0.5">
                    Ask a Senior Mentor <ChevronRight size={12} />
                  </Link>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
