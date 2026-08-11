import React from 'react';
import { Link } from 'react-router-dom';
import { colleges } from '../UgeacData';
import { Building2, Cpu, Grid, Hammer, Info, Link2, BookOpen, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

const branches = [
  { id: 'cse', name: 'Computer Science & Engineering' },
  { id: 'civil', name: 'Civil Engineering' },
  { id: 'me', name: 'Mechanical Engineering' },
  { id: 'ee', name: 'Electrical Engineering' },
  { id: 'ece', name: 'Electronics & Communication Engineering' }
];

const branchSections = ['overview', 'skills', 'careers', 'salary', 'placements', 'internships'];

const tools = [
  { id: 'attendance', name: 'BEU Attendance Calculator' },
  { id: 'timetable', name: 'BEU Timetable' },
  { id: 'cgpa', name: 'BEU SGPA/CGPA Calculator' },
  { id: 'result', name: 'BEU Exam Result' }
];

const toolKeywords = {
  attendance: [
    'beu-attendance-calculator',
    'attendance-percentage-calculator',
    'bihar-engineering-attendance',
    '75-percent-attendance-calculator',
    'attendance-shortfall-calculator',
    'cse-attendance-calculator',
    'civil-attendance-calculator',
    'mechanical-attendance-calculator',
    'electrical-attendance-calculator',
    'ece-attendance-calculator'
  ],
  timetable: [
    'beu-timetable-2025',
    'beu-exam-schedule-2025',
    'beu-class-timetable',
    'cse-timetable-beu',
    'civil-timetable-beu',
    'mechanical-timetable-beu',
    'beu-semester-schedule'
  ],
  cgpa: [
    'beu-cgpa-calculator',
    'beu-sgpa-calculator',
    'sgpa-to-cgpa-converter',
    'beu-grade-calculator',
    'beu-marks-to-cgpa',
    'bihar-engineering-cgpa',
    'cse-cgpa-calculator-beu',
    'civil-cgpa-calculator-beu'
  ],
  result: [
    'beu-result-2025',
    'bihar-engineering-result',
    'beu-exam-result',
    'beu-result-marksheet',
    'beu-result-sem1',
    'beu-result-sem2',
    'beu-result-sem3',
    'beu-result-sem4',
    'beu-result-sem5',
    'beu-result-sem6'
  ]
};

const features = [
  { id: 'focus-timer', name: 'Focus Mode & Study Timer' },
  { id: 'study-groups', name: 'Online Study Groups' },
  { id: 'study-resources', name: 'Free Study Resources' },
  { id: 'calculator', name: 'Scientific Calculator' },
  { id: 'personal-manager', name: 'Personal Study Manager' }
];

const featureKeywords = {
  'focus-timer': [
    'pomodoro-timer-for-students',
    'study-timer-online',
    'focus-mode-for-students',
    '25-minute-study-timer',
    'engineering-student-study-timer',
    'study-streak-tracker',
    'daily-study-goal-tracker',
    'deep-work-timer-students',
    'beu-focus-mode',
    'study-session-tracker',
    'app-blocker-for-students',
    'study-app-blocker-android',
    'distraction-blocker-students',
    'block-social-media-studying',
    'android-app-blocker-engineering',
    'apna-college-bihar-app',
    'apna-college-bihar-apk-download'
  ],
  'study-groups': [
    'online-study-group-engineers',
    'beu-student-study-group',
    'engineering-study-network-bihar',
    'study-discussion-group-bihar',
    'online-study-partner-beu',
    'study-community-engineering',
    'group-study-app-students'
  ],
  'calculator': [
    'scientific-calculator-engineering',
    'matrix-calculator-online',
    'trigonometry-calculator-engineering',
    'engineering-mathematics-calculator',
    'free-scientific-calculator-online'
  ],
  'personal-manager': [
    'study-planner-engineering',
    'semester-study-plan-beu',
    'engineering-study-schedule',
    'beu-student-planner',
    'exam-preparation-planner'
  ],
  'study-resources': [
    'free-beu-study-material',
    'engineering-notes-free-download',
    'beu-youtube-resources',
    'free-engineering-pdf-notes'
  ]
};

const collegeSections = ['overview', 'branches', 'fees', 'placement', 'hostel', 'cutoff', 'review'];

export default function SitemapDirectory() {
  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 font-['Inter'] relative overflow-hidden">
      <SEO 
        title="Sitemap & Directory | Apna College Bihar"
        description="Comprehensive index directory of Bihar Engineering Colleges, BEU Syllabus, SGPA CGPA Calculator, Notes, Cutoff details, and academic resources."
        keywords="Bihar engineering colleges, BEU notes, UGEAC cutoff, sitemap apna college bihar, academic hub directory"
      />

      {/* Decorative background vectors */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-blue-600/10 via-transparent to-transparent pointer-events-none"></div>
      <div className="absolute top-40 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 py-12 relative z-10 space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex p-3 bg-blue-600/10 text-blue-500 rounded-2xl border border-blue-500/20">
            <Grid size={32} />
          </div>
          <h1 className="text-3xl md:text-5xl font-[1000] tracking-tighter text-white uppercase leading-none">
            Web Directory & Sitemap
          </h1>
          <p className="text-slate-400 text-xs md:text-sm font-bold uppercase tracking-widest max-w-2xl mx-auto">
            Quick links to all Bihar Engineering resources, colleges, syllabi, calculators, and study pages.
          </p>
        </div>

        {/* Section 1: Colleges */}
        <section className="bg-[#0f172a]/30 border border-white/5 p-6 md:p-8 rounded-[2rem] shadow-xl space-y-6">
          <h2 className="text-xl font-black text-white uppercase tracking-wider flex items-center gap-2.5">
            <Building2 className="text-blue-500" size={24} /> Bihar Government Engineering Colleges
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {colleges.map((college) => {
              const slug = college.short.toLowerCase().replace(/[\s\.]+/g, '-');
              return (
                <div key={college.id} className="p-5 bg-slate-900/40 border border-white/5 rounded-2xl space-y-3">
                  <h3 className="font-black text-white uppercase text-xs tracking-tight">{college.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    <Link 
                      to={`/college/${slug}`} 
                      className="px-2.5 py-1.5 bg-blue-600/10 hover:bg-blue-600 text-blue-400 hover:text-white rounded-lg text-[9px] font-black uppercase tracking-wider border border-blue-500/20 transition-all"
                    >
                      Home
                    </Link>
                    {collegeSections.map((sec) => (
                      <Link 
                        key={sec}
                        to={`/college/${slug}/${sec}`} 
                        className="px-2.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-[9px] font-black uppercase tracking-wider border border-white/5 transition-all"
                      >
                        {sec}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Section 2: Branches */}
        <section className="bg-[#0f172a]/30 border border-white/5 p-6 md:p-8 rounded-[2rem] shadow-xl space-y-6">
          <h2 className="text-xl font-black text-white uppercase tracking-wider flex items-center gap-2.5">
            <Cpu className="text-blue-500" size={24} /> Engineering Branch Hubs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {branches.map((b) => (
              <div key={b.id} className="p-5 bg-slate-900/40 border border-white/5 rounded-2xl space-y-3">
                <h3 className="font-black text-white uppercase text-xs tracking-tight">{b.name}</h3>
                <div className="flex flex-wrap gap-2">
                  <Link 
                    to={`/branch/${b.id}`} 
                    className="px-2.5 py-1.5 bg-blue-600/10 hover:bg-blue-600 text-blue-400 hover:text-white rounded-lg text-[9px] font-black uppercase tracking-wider border border-blue-500/20 transition-all"
                  >
                    Home
                  </Link>
                  {branchSections.map((sec) => (
                    <Link 
                      key={sec}
                      to={`/branch/${b.id}/${sec}`} 
                      className="px-2.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-[9px] font-black uppercase tracking-wider border border-white/5 transition-all"
                    >
                      {sec}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Section 3: BEU Tools */}
          <section className="bg-[#0f172a]/30 border border-white/5 p-6 md:p-8 rounded-[2rem] shadow-xl space-y-6">
            <h2 className="text-xl font-black text-white uppercase tracking-wider flex items-center gap-2.5">
              <Hammer className="text-blue-500" size={24} /> Academic Tools & Keyword Search
            </h2>
            <div className="space-y-6">
              {tools.map((t) => (
                <div key={t.id} className="space-y-2.5">
                  <div className="flex justify-between items-center">
                    <h3 className="font-black text-white uppercase text-xs tracking-tight">{t.name}</h3>
                    <Link 
                      to={`/beu/${t.id}`} 
                      className="px-2.5 py-1 bg-blue-600/15 text-blue-400 rounded-lg text-[9px] font-black uppercase tracking-wider border border-blue-500/10 hover:bg-blue-600 hover:text-white transition-all"
                    >
                      View Tool
                    </Link>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {toolKeywords[t.id]?.map((kw) => (
                      <Link 
                        key={kw}
                        to={`/beu/${t.id}/${kw}`} 
                        className="px-2 py-1 bg-slate-900/60 hover:bg-slate-800 text-slate-400 hover:text-slate-300 rounded text-[9px] font-bold tracking-tight transition-all border border-white/5"
                      >
                        {kw.replace(/-/g, ' ')}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4: Study Features */}
          <section className="bg-[#0f172a]/30 border border-white/5 p-6 md:p-8 rounded-[2rem] shadow-xl space-y-6">
            <h2 className="text-xl font-black text-white uppercase tracking-wider flex items-center gap-2.5">
              <BookOpen className="text-blue-500" size={24} /> Core Study Features & Keywords
            </h2>
            <div className="space-y-6">
              {features.map((f) => (
                <div key={f.id} className="space-y-2.5">
                  <div className="flex justify-between items-center">
                    <h3 className="font-black text-white uppercase text-xs tracking-tight">{f.name}</h3>
                    <Link 
                      to={`/feature/${f.id}`} 
                      className="px-2.5 py-1 bg-blue-600/15 text-blue-400 rounded-lg text-[9px] font-black uppercase tracking-wider border border-blue-500/10 hover:bg-blue-600 hover:text-white transition-all"
                    >
                      View Feature
                    </Link>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {featureKeywords[f.id]?.map((kw) => (
                      <Link 
                        key={kw}
                        to={`/feature/${f.id}/${kw}`} 
                        className="px-2 py-1 bg-slate-900/60 hover:bg-slate-800 text-slate-400 hover:text-slate-300 rounded text-[9px] font-bold tracking-tight transition-all border border-white/5"
                      >
                        {kw.replace(/-/g, ' ')}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Section 5: Static Guides */}
        <section className="bg-[#0f172a]/30 border border-white/5 p-6 md:p-8 rounded-[2rem] shadow-xl space-y-4 text-center">
          <h2 className="text-sm font-black text-slate-400 uppercase tracking-widest">
            Looking for Master Admissions Guides?
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/ugeac-2025-bihar-engineering-admission.html" className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-white/5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all">UGEAC Guide</Link>
            <Link to="/bihar-engineering-counselling-2025.html" className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-white/5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all">Counselling Guide</Link>
            <Link to="/ugeac-2025-choice-filling.html" className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-white/5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all">Choice Filling Strategy</Link>
            <Link to="/beu-syllabus-download-bihar-engineering.html" className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-white/5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all">Syllabus PDF Hub</Link>
          </div>
        </section>

        {/* Section 6: College Comparisons */}
        <section className="bg-[#0f172a]/30 border border-white/5 p-6 md:p-8 rounded-[2rem] shadow-xl space-y-6">
          <h2 className="text-xl font-black text-white uppercase tracking-wider flex items-center gap-2.5">
            <Link2 className="text-blue-500" size={24} /> Head-to-Head College Comparisons
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <Link to="/compare/mit-muzaffarpur-vs-bce-bhagalpur.html" className="p-3 bg-slate-900/60 hover:bg-slate-800 border border-white/5 rounded-xl text-[10px] font-bold text-center block text-slate-300">MIT Muzaffarpur vs BCE Bhagalpur</Link>
            <Link to="/compare/mit-muzaffarpur-vs-bce-bakhtiyarpur.html" className="p-3 bg-slate-900/60 hover:bg-slate-800 border border-white/5 rounded-xl text-[10px] font-bold text-center block text-slate-300">MIT Muzaffarpur vs BCE Bakhtiyarpur</Link>
            <Link to="/compare/mit-muzaffarpur-vs-gce-gaya.html" className="p-3 bg-slate-900/60 hover:bg-slate-800 border border-white/5 rounded-xl text-[10px] font-bold text-center block text-slate-300">MIT Muzaffarpur vs GCE Gaya</Link>
            <Link to="/compare/bce-bhagalpur-vs-gce-gaya.html" className="p-3 bg-slate-900/60 hover:bg-slate-800 border border-white/5 rounded-xl text-[10px] font-bold text-center block text-slate-300">BCE Bhagalpur vs GCE Gaya</Link>
            <Link to="/compare/nce-chandi-vs-lnjpit-chapra.html" className="p-3 bg-slate-900/60 hover:bg-slate-800 border border-white/5 rounded-xl text-[10px] font-bold text-center block text-slate-300">NCE Chandi vs LNJPIT Chapra</Link>
            <Link to="/compare/mce-motihari-vs-dce-darbhanga.html" className="p-3 bg-slate-900/60 hover:bg-slate-800 border border-white/5 rounded-xl text-[10px] font-bold text-center block text-slate-300">MCE Motihari vs DCE Darbhanga</Link>
          </div>
          <div className="text-center pt-2">
            <Link to="/compare" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600/10 hover:bg-blue-600 text-blue-400 hover:text-white rounded-xl text-[10px] font-black uppercase tracking-widest border border-blue-500/20 transition-all">
              Interactive Comparison Tool <ArrowRight size={12} />
            </Link>
          </div>
        </section>

        {/* Section 7: Colleges by JEE Main Percentile */}
        <section className="bg-[#0f172a]/30 border border-white/5 p-6 md:p-8 rounded-[2rem] shadow-xl space-y-6">
          <h2 className="text-xl font-black text-white uppercase tracking-wider flex items-center gap-2.5">
            <Building2 className="text-blue-500" size={24} /> Colleges by JEE Main Percentile
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {[95, 90, 85, 80, 75, 70, 65, 60, 55, 50].map(p => (
              <Link 
                key={p} 
                to={`/colleges-at-${p}-percentile-in-bihar.html`} 
                className="p-3 bg-slate-900/60 hover:bg-slate-800 border border-white/5 rounded-xl text-[10px] font-bold text-center block text-slate-300 hover:text-white transition-all"
              >
                Colleges at {p} Percentile
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
