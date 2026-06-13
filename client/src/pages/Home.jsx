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
import Footer from '../components/Footer';
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
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    
    // Force Desktop View on Home page only
    const metaViewport = document.querySelector('meta[name=viewport]');
    const originalViewport = metaViewport ? metaViewport.getAttribute('content') : 'width=device-width, initial-scale=1.0';
    if (metaViewport && !window.Capacitor?.isNativePlatform?.()) {
      metaViewport.setAttribute('content', 'width=1024');
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (metaViewport) {
        metaViewport.setAttribute('content', originalViewport);
      }
    };
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
    return () => { unsubUsers(); unsubDocs(); unsubGroups(); };
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
      {/* ── NAVBAR ── */}
      {/* ═══════════════════════════════════════════ */}
      <nav className={`sticky top-0 left-0 w-full z-[100] transition-all duration-300 px-4 md:px-16 flex items-center justify-between ${scrolled ? 'bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-sm py-3' : 'bg-transparent border-transparent py-5'}`}>
        <div className="flex items-center gap-3 group">
           <img src="/logo-acb.png?v=99" alt="Apna College Bihar Logo" className="w-9 h-9 md:w-11 md:h-11 rounded-lg md:rounded-xl shadow-sm" />
           <div className="block">
             <span className="text-sm md:text-xl font-[1000] tracking-tighter uppercase text-slate-900 block leading-none">APNA COLLEGE BIHAR</span>
             <span className="text-[6px] md:text-[7px] text-blue-600 font-bold uppercase tracking-[0.3em] md:tracking-[0.5em] mt-0.5 md:mt-1 block">OFFICIAL STUDY ENGINE</span>
           </div>
        </div>
        <div className="hidden md:flex items-center gap-6">
           <Link to="/" className="text-[11px] font-black uppercase tracking-widest text-blue-600 transition-colors">Home</Link>
            {featureCategories.map((category, idx) => (
              <div key={category.title} className="relative">
                <button
                  onClick={() => setActiveFeatureIndex(activeFeatureIndex === idx ? null : idx)}
                  className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors"
                >
                  {category.title}
                  <ChevronDown size={14} className={`transition-transform duration-200 ${activeFeatureIndex === idx ? 'rotate-180' : ''}`} />
                </button>

                {activeFeatureIndex === idx && (
                  <>
                    <div className="fixed inset-0 z-[1900]" onClick={() => setActiveFeatureIndex(null)} />
                    <div className="absolute left-0 mt-3 w-56 bg-white/95 backdrop-blur-xl border border-slate-200 rounded-2xl shadow-2xl p-2 z-[2000] animate-in fade-in duration-150 origin-top-left">
                      {category.items.map((it) => (
                        <Link
                          key={it.name}
                          to={it.path}
                          className="flex items-center gap-3 w-full p-3 hover:bg-blue-50 text-slate-700 hover:text-blue-600 rounded-xl transition-all font-bold"
                          onClick={() => setActiveFeatureIndex(null)}
                        >
                          <span className="w-4 h-4 text-slate-500">{it.icon}</span>
                          <span className="text-[12px] font-black uppercase tracking-tight">{it.name}</span>
                        </Link>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))}
        </div>
        <div className="flex items-center gap-3 md:gap-4">
           {loading ? (
             <div className="w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
           ) : user ? (
             <div className="flex items-center gap-4">
               <div className="relative">
                 <a 
                   href="/ApnaCollegeBihar_Stable.apk"
                   download="ApnaCollegeBihar_Stable.apk"
                   className="flex items-center gap-2 px-3 md:px-5 py-2 md:py-2.5 bg-blue-50 hover:bg-blue-600 text-blue-600 hover:text-white border border-blue-100 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all"
                 >
                   Download App
                 </a>
               </div>
               <div className="relative">
                 <button 
                   onClick={() => setShowProfileMenu(!showProfileMenu)}
                   className="flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 bg-white border border-slate-200 hover:border-blue-500/50 text-slate-900 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all shadow-sm"
                 >
                   <div className="w-6 h-6 rounded-lg overflow-hidden bg-slate-100">
                     <img src="/logo-acb.png?v=99" alt="Profile" className="w-full h-full object-cover" />
                   </div>
                   <span className="hidden sm:inline">My Profile</span>
                 </button>

                 {showProfileMenu && (
                   <>
                    <div className="fixed inset-0 z-[1900]" onClick={() => setShowProfileMenu(false)}></div>
                    <div className="absolute right-0 mt-3 w-64 bg-white/95 backdrop-blur-xl border border-slate-200 rounded-[2rem] shadow-2xl p-2 z-[2000]">
                       <div className="px-5 py-5 border-b border-slate-100 mb-2 text-center">
                          <p className="text-[10px] font-bold text-slate-900 truncate">{user.email}</p>
                       </div>
                       <div className="space-y-1">
                          <button 
                            onClick={() => logout()}
                            className="flex items-center gap-3 w-full p-3 hover:bg-red-50 text-slate-500 hover:text-red-600 rounded-2xl transition-all group"
                          >
                             <LogOut size={16} />
                             <span className="text-[11px] font-black uppercase tracking-widest">Logout Session</span>
                          </button>
                       </div>
                    </div>
                   </>
                 )}
               </div>
             </div>
           ) : (
             <div className="flex items-center gap-3">
               <a 
                 href="/ApnaCollegeBihar_Stable.apk"
                 download="ApnaCollegeBihar_Stable.apk"
                 className="flex items-center gap-2 px-3 md:px-5 py-2 md:py-2.5 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all"
               >
                 Download App
               </a>
               <Link to="/login" className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors hidden sm:block">Login</Link>
               <Link to="/signup" className="px-4 md:px-5 py-2 md:py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-black text-[10px] uppercase tracking-widest transition-all shadow-lg shadow-blue-600/20">Sign Up</Link>
             </div>
           )}
        </div>
      </nav>

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
                href="/ApnaCollegeBihar_Stable.apk" 
                download="ApnaCollegeBihar_Stable.apk" 
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



      <Footer />
    </div>
  );
}
