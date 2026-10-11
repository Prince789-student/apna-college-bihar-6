import React from 'react';
import { Link } from 'react-router-dom';
import { colleges } from '../UgeacData';
import { Building2, Cpu, Grid, Hammer, Link2, BookOpen, ArrowRight, ShieldCheck, Calculator, GraduationCap } from 'lucide-react';
import SEO from '../components/SEO';

const branches = [
  { id: 'cse', name: 'Computer Science & Engineering', icon: '💻' },
  { id: 'civil', name: 'Civil Engineering', icon: '🏗️' },
  { id: 'me', name: 'Mechanical Engineering', icon: '⚙️' },
  { id: 'ee', name: 'Electrical Engineering', icon: '⚡' },
  { id: 'ece', name: 'Electronics & Communication Engineering', icon: '📡' }
];

const academicTools = [
  { name: 'BEU Semester Notes', path: '/notes', desc: 'Unit-wise notes for all 8 semesters', icon: '📚' },
  { name: 'Previous Year Questions (PYQ)', path: '/pyq', desc: '5+ years of verified BEU exam papers', icon: '📝' },
  { name: 'BEU Official Syllabus', path: '/syllabus', desc: 'Revised AICTE model curriculum & credits', icon: '📋' },
  { name: 'BEU CGPA Calculator', path: '/cgpa', desc: 'Convert semester grades into SGPA & %', icon: '🧮' },
  { name: 'UGEAC College Predictor', path: '/ugeac-predictor', desc: 'Forecast Bihar colleges by JEE rank', icon: '🎯' },
  { name: 'BEU Attendance Tracker', path: '/attendance', desc: '75% attendance rule & shortfall helper', icon: '⏱️' },
  { name: 'Class Timetable', path: '/timetable', desc: 'Semester-wise branch routine', icon: '🗓️' },
  { name: 'BEU Result Portal', path: '/beu-result', desc: 'Check marksheet & semester results', icon: '🎓' },
  { name: 'YouTube Lecture Finder', path: '/lecture-finder', desc: 'Curated playlists for university syllabus', icon: '▶️' },
  { name: 'Scientific Calculator', path: '/calculator', desc: 'Engineering math, matrices & trig', icon: '🔢' },
  { name: 'Free Study Resources', path: '/study-resources', desc: 'Engineering reference books & links', icon: '📖' },
  { name: 'Senior Mentorship Hub', path: '/mentorship', desc: 'Connect with BEU alumni mentors', icon: '👨‍🏫' }
];

const COLLEGE_SLUG_MAP = {
  'sce-sasaram': 'spce-sasaram',
  'gec-rohtas': 'spce-sasaram',
  'kmc-katihar': 'kec-katihar',
  'mwec-madhepura': 'bpmce-madhepura',
  'sm-muzaffarpur': 'mit-muzaffarpur',
  'bce-buxar': 'gec-buxar',
  'gwc-buxar': 'gec-buxar',
  'jmit-jamui': 'gec-jamui',
  'mita-aurangabad': 'gec-aurangabad',
  'spce-siwan': 'gec-siwan',
  'gec-supaul': 'sce-saharsa',
  'gec-saharsa': 'sce-saharsa',
  'rce-saharsa': 'sce-saharsa',
  'gec-begusarai': 'rrsdce-begusarai',
  'sgp-patna': 'gce-gaya'
};

export default function SitemapDirectory() {
  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 font-['Inter'] relative overflow-hidden">
      <SEO 
        title="Web Directory & Sitemap | Apna College Bihar"
        description="Comprehensive directory of all 38 Bihar Government Engineering Colleges, BEU B.Tech Notes, PYQs, Syllabus, CGPA Calculator, and academic tools."
        keywords="Bihar engineering colleges directory, BEU notes sitemap, UGEAC colleges list, academic directory apna college bihar"
        canonical="https://www.apnacollegebihar.online/directory"
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
            Official Academic Directory & Sitemap
          </h1>
          <p className="text-slate-400 text-xs md:text-sm font-bold uppercase tracking-widest max-w-2xl mx-auto">
            Direct canonical links to all 38 Bihar Engineering Colleges, verified BEU study materials, and academic tools.
          </p>
        </div>

        {/* Section 1: Academic Tools & Resources */}
        <section className="bg-[#0f172a]/40 border border-white/5 p-6 md:p-8 rounded-[2rem] shadow-xl space-y-6">
          <h2 className="text-xl font-black text-white uppercase tracking-wider flex items-center gap-2.5">
            <Hammer className="text-blue-500" size={24} /> Essential BEU Academic Tools
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {academicTools.map((tool) => (
              <Link 
                key={tool.path}
                to={tool.path}
                className="p-5 bg-slate-900/60 hover:bg-slate-800 border border-white/5 hover:border-blue-500/30 rounded-2xl transition-all group block"
              >
                <div className="text-2xl mb-2">{tool.icon}</div>
                <h3 className="font-bold text-white text-sm group-hover:text-blue-400 transition-colors uppercase tracking-tight mb-1">
                  {tool.name}
                </h3>
                <p className="text-xs text-slate-400">{tool.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Section 2: 38 Bihar Engineering Colleges */}
        <section className="bg-[#0f172a]/40 border border-white/5 p-6 md:p-8 rounded-[2rem] shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-black text-white uppercase tracking-wider flex items-center gap-2.5">
                <Building2 className="text-blue-500" size={24} /> 38 Bihar Government Engineering Colleges
              </h2>
              <p className="text-xs text-slate-400 mt-1">Official profile, admission cutoffs, branches, and placement overview for each institution.</p>
            </div>
            <Link to="/colleges" className="text-xs font-black uppercase tracking-wider text-blue-400 hover:text-blue-300">
              View College Directory &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {colleges.map((college) => {
              const rawSlug = college.short.toLowerCase().replace(/[\s\.]+/g, '-');
              const slug = COLLEGE_SLUG_MAP[rawSlug] || rawSlug;
              return (
                <Link
                  key={college.id}
                  to={`/college/${slug}`}
                  className="p-4 bg-slate-900/60 hover:bg-slate-800 border border-white/5 hover:border-blue-500/30 rounded-2xl transition-all group flex items-center justify-between"
                >
                  <div className="min-w-0 pr-3">
                    <h3 className="font-bold text-white text-xs group-hover:text-blue-400 transition-colors uppercase truncate">
                      {college.name}
                    </h3>
                    <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-0.5">{college.short}</p>
                  </div>
                  <ArrowRight size={14} className="text-slate-500 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all shrink-0" />
                </Link>
              );
            })}
          </div>
        </section>

        {/* Section 3: Engineering Branches */}
        <section className="bg-[#0f172a]/40 border border-white/5 p-6 md:p-8 rounded-[2rem] shadow-xl space-y-6">
          <h2 className="text-xl font-black text-white uppercase tracking-wider flex items-center gap-2.5">
            <Cpu className="text-blue-500" size={24} /> Engineering Branch Hubs
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {branches.map((b) => (
              <Link
                key={b.id}
                to={`/branch/${b.id}`}
                className="p-5 bg-slate-900/60 hover:bg-slate-800 border border-white/5 hover:border-blue-500/30 rounded-2xl transition-all group flex items-center justify-between"
              >
                <div>
                  <div className="text-2xl mb-2">{b.icon}</div>
                  <h3 className="font-bold text-white text-sm group-hover:text-blue-400 transition-colors uppercase tracking-tight">
                    {b.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">Syllabus, Career Scope, Placements & Notes</p>
                </div>
                <ArrowRight size={16} className="text-slate-500 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
              </Link>
            ))}
          </div>
        </section>

        {/* Section 4: Admissions & Percentile Guides */}
        <section className="bg-[#0f172a]/40 border border-white/5 p-6 md:p-8 rounded-[2rem] shadow-xl space-y-6">
          <h2 className="text-xl font-black text-white uppercase tracking-wider flex items-center gap-2.5">
            <GraduationCap className="text-blue-500" size={24} /> UGEAC Counselling & Percentile Guides
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {[95, 90, 85, 80, 75, 70, 65, 60, 55, 50].map(p => (
              <Link 
                key={p} 
                to={`/colleges-at-${p}-percentile-in-bihar`} 
                className="p-3 bg-slate-900/60 hover:bg-slate-800 border border-white/5 hover:border-blue-500/30 rounded-xl text-[11px] font-bold text-center block text-slate-300 hover:text-white transition-all"
              >
                Colleges at {p}%ile
              </Link>
            ))}
          </div>
        </section>

        {/* Section 5: Institutional & Legal Trust Pages */}
        <section className="bg-[#0f172a]/40 border border-white/5 p-6 md:p-8 rounded-[2rem] shadow-xl space-y-4">
          <h2 className="text-xs font-black text-slate-400 uppercase tracking-widest">
            Institutional, Editorial & Legal Pages
          </h2>
          <div className="flex flex-wrap gap-3">
            <Link to="/about" className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-white/5 rounded-xl text-xs font-bold transition-all">About Us</Link>
            <Link to="/contact" className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-white/5 rounded-xl text-xs font-bold transition-all">Contact Us</Link>
            <Link to="/blog" className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-white/5 rounded-xl text-xs font-bold transition-all">Engineering Blog</Link>
            <Link to="/privacy-policy" className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-white/5 rounded-xl text-xs font-bold transition-all">Privacy Policy</Link>
            <Link to="/terms" className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-white/5 rounded-xl text-xs font-bold transition-all">Terms of Service</Link>
            <Link to="/disclaimer" className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-white/5 rounded-xl text-xs font-bold transition-all">Disclaimer</Link>
            <Link to="/dmca" className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-white/5 rounded-xl text-xs font-bold transition-all">DMCA Policy</Link>
          </div>
        </section>
      </div>
    </div>
  );
}
