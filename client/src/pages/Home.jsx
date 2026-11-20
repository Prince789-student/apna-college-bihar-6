import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  BookOpen, Calculator, Timer, Users,
  ArrowRight, CheckCircle, CheckCircle2, GraduationCap,
  Globe, Shield, Zap, Send, Youtube,
  User, LogOut, Download, MessageCircle, LogIn, ChevronDown,
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
import toast from 'react-hot-toast';
import ThreeCanvasHero from '../components/ThreeCanvasHero';

export default function Home() {
  const isNative = typeof window !== 'undefined' && Boolean(
    window.__ACB_DESKTOP__ || 
    window.isDesktopApp || 
    window.desktopBridge?.isDesktop || 
    window.Capacitor?.isNativePlatform?.() || 
    (typeof navigator !== 'undefined' && navigator.userAgent.includes('ApnaCollegeBiharDesktop'))
  );
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [isMobileScreen, setIsMobileScreen] = useState(() => {
    if (typeof window === 'undefined') return false;
    return Boolean(
      (window.innerWidth < 768 || /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent || '')) &&
      !new URLSearchParams(window.location.search).get('desktop') &&
      !new URLSearchParams(window.location.search).get('mode')?.includes('desktop')
    );
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobileScreen(
        Boolean(
          (window.innerWidth < 768 || /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent || '')) &&
          !new URLSearchParams(window.location.search).get('desktop') &&
          !new URLSearchParams(window.location.search).get('mode')?.includes('desktop')
        )
      );
    };
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Authentic platform stats
  const [stats, setStats] = useState({ users: 166, notes: 296, pyqs: 340, groups: 24 });
  const [activeConsoleTab, setActiveConsoleTab] = useState('tools'); // 'tools' | 'predictor' | 'colleges' | 'radar' | 'guide'
  const [topDonors, setTopDonors] = useState([]);
  const [showScanner, setShowScanner] = useState(false);
  const [beuNotices, setBeuNotices] = useState([]);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [mobileTab, setMobileTab] = useState('notes'); // 'notes' | 'pyq' | 'tools' | 'colleges'
  const [activeHubTab, setActiveHubTab] = useState('notes'); // 'notes' | 'pyqs' | 'tools' | 'colleges'
  const [activeGuideTab, setActiveGuideTab] = useState('admission'); // 'admission' | 'counselling' | 'beu' | 'career'
  const [selectedMobileBranch, setSelectedMobileBranch] = useState('CSE');
  const [noticeMarqueeIdx, setNoticeMarqueeIdx] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [showMobileProfileMenu, setShowMobileProfileMenu] = useState(false);

  const joinDate = user?.metadata?.creationTime 
    ? new Date(user.metadata.creationTime).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
    : 'Recently';

  const handleMobileSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/notes?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  // Authentic BCECEB UGEAC Rank Piecewise Mapping (From Official 2024-2025 Data)
  const UGEAC_RANK_MAP = [
    { ur: 4, air: 28003 }, { ur: 13, air: 50299 }, { ur: 70, air: 81272 }, { ur: 109, air: 92809 },
    { ur: 156, air: 100028 }, { ur: 215, air: 109032 }, { ur: 333, air: 127662 }, { ur: 436, air: 140082 },
    { ur: 525, air: 150732 }, { ur: 617, air: 162821 }, { ur: 716, air: 171028 }, { ur: 816, air: 181269 },
    { ur: 914, air: 188077 }, { ur: 1012, air: 197425 }, { ur: 1115, air: 209122 }, { ur: 1209, air: 219690 },
    { ur: 1307, air: 229952 }, { ur: 1404, air: 238780 }, { ur: 1507, air: 247321 }, { ur: 1601, air: 257341 },
    { ur: 1714, air: 268036 }, { ur: 1821, air: 278080 }, { ur: 1930, air: 288768 }, { ur: 2041, air: 297962 },
    { ur: 2137, air: 306613 }, { ur: 2243, air: 315619 }, { ur: 2333, air: 323379 }, { ur: 2425, air: 330324 },
    { ur: 2522, air: 339013 }, { ur: 2615, air: 347652 }, { ur: 2711, air: 355967 }, { ur: 2808, air: 364892 },
    { ur: 2901, air: 373625 }, { ur: 3003, air: 383352 }, { ur: 3101, air: 392168 }, { ur: 3207, air: 402310 },
    { ur: 3308, air: 413189 }, { ur: 3400, air: 421323 }, { ur: 3501, air: 430878 }, { ur: 3596, air: 440370 },
    { ur: 3693, air: 449449 }, { ur: 3795, air: 458443 }, { ur: 3894, air: 467591 }, { ur: 3992, air: 476591 },
    { ur: 4089, air: 484050 }, { ur: 4184, air: 492240 }, { ur: 4288, air: 501868 }, { ur: 4377, air: 508894 },
    { ur: 4474, air: 518100 }, { ur: 4581, air: 529594 }, { ur: 4680, air: 542092 }, { ur: 4776, air: 550964 },
    { ur: 4876, air: 559448 }, { ur: 4966, air: 568797 }, { ur: 5056, air: 577816 }, { ur: 5153, air: 587447 },
    { ur: 5257, air: 597045 }, { ur: 5353, air: 606934 }, { ur: 5441, air: 620541 }, { ur: 5542, air: 630524 },
    { ur: 5641, air: 641360 }, { ur: 5737, air: 651370 }, { ur: 5843, air: 661098 }, { ur: 5946, air: 673598 },
    { ur: 6056, air: 686974 }, { ur: 6159, air: 697844 }, { ur: 6256, air: 707967 }, { ur: 6366, air: 720052 },
    { ur: 6468, air: 732511 }, { ur: 6582, air: 743681 }, { ur: 6692, air: 757517 }, { ur: 6800, air: 768611 },
    { ur: 6919, air: 781525 }, { ur: 7036, air: 795064 }, { ur: 7141, air: 806823 }, { ur: 7245, air: 819493 },
    { ur: 7360, air: 833200 }, { ur: 7466, air: 848290 }, { ur: 7570, air: 859488 }, { ur: 7686, air: 874752 },
    { ur: 7797, air: 888309 }, { ur: 7912, air: 903348 }, { ur: 8026, air: 920910 }, { ur: 8130, air: 933806 },
    { ur: 8229, air: 948876 }, { ur: 8334, air: 965845 }, { ur: 8428, air: 978036 }, { ur: 8531, air: 993492 },
    { ur: 8643, air: 1010934 }, { ur: 8749, air: 1024049 }, { ur: 8852, air: 1040387 }, { ur: 8951, air: 1055816 },
    { ur: 9057, air: 1070983 }, { ur: 9161, air: 1091239 }, { ur: 9269, air: 1108363 }, { ur: 9364, air: 1126814 },
    { ur: 9469, air: 1145041 }, { ur: 9577, air: 1167857 }, { ur: 9674, air: 1183901 }, { ur: 9771, air: 1197906 },
    { ur: 9873, air: 1219504 }, { ur: 9967, air: 1242227 }
  ];

  const [simPercentile, setSimPercentile] = useState(89.4);

  const calcAirAndUgeacRank = (percentile) => {
    const air = Math.max(1, Math.round(((100 - percentile) / 100) * 1400000));
    if (air <= UGEAC_RANK_MAP[0].air) {
      return { air, ugeacRank: Math.max(1, Math.round((air / UGEAC_RANK_MAP[0].air) * UGEAC_RANK_MAP[0].ur)) };
    }
    for (let i = 0; i < UGEAC_RANK_MAP.length - 1; i++) {
      const p1 = UGEAC_RANK_MAP[i];
      const p2 = UGEAC_RANK_MAP[i + 1];
      if (air >= p1.air && air <= p2.air) {
        const factor = (air - p1.air) / (p2.air - p1.air);
        const ur = Math.round(p1.ur + factor * (p2.ur - p1.ur));
        return { air, ugeacRank: ur };
      }
    }
    const last = UGEAC_RANK_MAP[UGEAC_RANK_MAP.length - 1];
    const slope = (last.ur - UGEAC_RANK_MAP[UGEAC_RANK_MAP.length - 5].ur) / 
                  (last.air - UGEAC_RANK_MAP[UGEAC_RANK_MAP.length - 5].air);
    const extraAir = air - last.air;
    const ur = Math.round(last.ur + extraAir * slope);
    return { air, ugeacRank: Math.min(10850, ur) };
  };

  const { air: currentAir, ugeacRank: currentUgeacRank } = calcAirAndUgeacRank(simPercentile);

  // Official College Cutoffs Sample
  const officialCollegeCutoffs = [
    { code: 'MIT', college: 'MIT Muzaffarpur', branch: 'Information Technology', closing: 215, color: 'bg-blue-500/20 text-cyan-300 border-blue-400/30' },
    { code: 'BCE', college: 'BCE Bhagalpur', branch: 'Computer Science & Engg', closing: 109, color: 'bg-indigo-500/20 text-indigo-300 border-indigo-400/30' },
    { code: 'BCEB', college: 'BCE Bakhtiyarpur', branch: 'Computer Science (AI)', closing: 333, color: 'bg-purple-500/20 text-purple-300 border-purple-400/30' },
    { code: 'GCE', college: 'GCE Gaya', branch: 'Computer Science & Engg', closing: 525, color: 'bg-emerald-500/20 text-emerald-300 border-emerald-400/30' },
    { code: 'DCE', college: 'DCE Darbhanga', branch: 'Computer Science & Engg', closing: 617, color: 'bg-amber-500/20 text-amber-300 border-amber-400/30' },
    { code: 'MIT', college: 'MIT Muzaffarpur', branch: 'Civil Engineering', closing: 1081, color: 'bg-teal-500/20 text-teal-300 border-teal-400/30' },
    { code: 'BCE', college: 'BCE Bhagalpur', branch: 'Electrical Engineering', closing: 1501, color: 'bg-indigo-500/20 text-indigo-300 border-indigo-400/30' },
    { code: 'MIT', college: 'MIT Muzaffarpur', branch: 'Mechanical Engineering', closing: 2239, color: 'bg-rose-500/20 text-rose-300 border-rose-400/30' }
  ];

  const getSimulatedCollegeMatches = (rank) => {
    if (rank <= 250) {
      return [officialCollegeCutoffs[1], officialCollegeCutoffs[0], officialCollegeCutoffs[2]];
    } else if (rank <= 600) {
      return [officialCollegeCutoffs[0], officialCollegeCutoffs[2], officialCollegeCutoffs[3]];
    } else if (rank <= 1200) {
      return [officialCollegeCutoffs[3], officialCollegeCutoffs[4], officialCollegeCutoffs[5]];
    } else {
      return [officialCollegeCutoffs[5], officialCollegeCutoffs[6], officialCollegeCutoffs[7]];
    }
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
            users: 166,
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

  useEffect(() => {
    if (!beuNotices.length) return;
    const interval = setInterval(() => {
      setNoticeMarqueeIdx(prev => (prev + 1) % beuNotices.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [beuNotices.length]);

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.apnacollegebihar.online/#website",
        "url": "https://www.apnacollegebihar.online",
        "name": "Apna College Bihar",
        "description": "Bihar Engineering University (BEU) academic study platform. Free B.Tech notes, PYQs, and syllabus."
      },
      {
        "@type": "EducationalOrganization",
        "@id": "https://www.apnacollegebihar.online/#organization",
        "name": "Apna College Bihar",
        "url": "https://www.apnacollegebihar.online",
        "description": "Official study platform for Bihar Engineering University (BEU) students across all 38 Government Engineering Colleges."
      }
    ]
  };

  // ═══════════════════════════════════════════════════════════════════════════════
  // ── MOBILE ANIMATED PHONE-LIKE UI (Dedicated Smartphone App-Like Experience) ──
  // ═══════════════════════════════════════════════════════════════════════════════
  if (isMobileScreen) {
    const greetingText = (() => {
      const hour = new Date().getHours();
      if (hour < 12) return 'Good Morning';
      if (hour < 17) return 'Good Afternoon';
      return 'Good Evening';
    })();

    const userName = user?.displayName?.split(' ')[0] || user?.email?.split('@')[0] || 'Engineer';

    // Interactive Story Highlights
    const mobileStories = [
      { id: '3rd-sem', label: '3rd Sem', badge: 'HOT', path: '/notes', icon: <Sparkles size={18} className="text-amber-500" />, ring: 'from-amber-400 via-rose-500 to-pink-500' },
      { id: 'notes', label: 'Notes Hub', badge: '550+', path: '/notes', icon: <BookOpen size={18} className="text-blue-600" />, ring: 'from-blue-500 via-cyan-400 to-teal-400' },
      { id: 'pyq', label: 'PYQ Papers', badge: 'SOLVED', path: '/pyq', icon: <FileText size={18} className="text-emerald-600" />, ring: 'from-emerald-400 via-teal-500 to-cyan-500' },
      { id: 'cgpa', label: 'CGPA Calc', badge: '10-PT', path: '/cgpa', icon: <Calculator size={18} className="text-purple-600" />, ring: 'from-purple-500 via-indigo-500 to-blue-500' },
      { id: 'predictor', label: 'Predictor', badge: 'UGEAC', path: '/ugeac-predictor', icon: <Target size={18} className="text-rose-600" />, ring: 'from-rose-500 via-red-500 to-amber-500' },
      { id: 'notices', label: 'BEU Live', badge: 'CIRCULARS', path: '/notifications', icon: <Bell size={18} className="text-amber-600" />, ring: 'from-yellow-400 via-amber-500 to-orange-500' },
      { id: 'syllabus', label: 'Syllabus', badge: 'BEU', path: '/syllabus', icon: <Library size={18} className="text-sky-600" />, ring: 'from-sky-400 via-blue-500 to-indigo-500' },
      { id: 'groups', label: 'Communities', badge: 'JOIN', path: '/groups', icon: <Users size={18} className="text-teal-600" />, ring: 'from-teal-400 via-emerald-500 to-green-500' },
    ];

    const mobileBranches = [
      { id: 'CSE', name: 'Computer Science', short: 'CSE' },
      { id: 'CIVIL', name: 'Civil Engg', short: 'Civil' },
      { id: 'ECE', name: 'Electronics', short: 'ECE' },
      { id: 'EE', name: 'Electrical', short: 'EE' },
      { id: 'EEE', name: 'Electrical & Electronics', short: 'EEE' },
      { id: 'ME', name: 'Mechanical', short: 'Mech' },
      { id: 'IT', name: 'Information Tech', short: 'IT' },
    ];

    const currentNotice = beuNotices[noticeMarqueeIdx] || (beuNotices.length > 0 ? beuNotices[0] : null);

    return (
      <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-['Inter'] relative selection:bg-blue-500/20 overflow-x-clip pb-28">
        <SEO
          title="Apna College Bihar | #1 Academic Platform for BEU Students"
          description="Bihar's premier academic platform for Bihar Engineering University (BEU) students. Free unit-wise notes, 5+ years verified PYQ papers, official BEU syllabus, UGEAC college predictor & CGPA calculator."
          url="https://www.apnacollegebihar.online"
          keywords="BEU notes, Bihar engineering college, UGEAC 2026 predictor, B.Tech PYQ papers, Bihar college cutoff, CGPA calculator BEU, Apna College Bihar"
          schema={combinedSchema}
        />

        {/* Ambient Top Glow Spheres (Soft Light Theme) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-[110px] pointer-events-none"></div>
        <div className="absolute top-64 -right-16 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="relative z-10 px-3.5 pt-3 sm:pt-5 space-y-4">

          {/* ══════════════════════════════════════════════════════════════
              1. NATIVE APP TOP BAR (Header with Greeting, Profile & Actions)
             ══════════════════════════════════════════════════════════════ */}
          <div className="flex items-center justify-between pt-1 relative">
            {user ? (
              <button 
                type="button"
                onClick={() => setShowMobileProfileMenu(!showMobileProfileMenu)} 
                className="flex items-center gap-2.5 active:scale-98 transition-transform group text-left cursor-pointer"
              >
                <div className="relative">
                  <div className="w-10 h-10 rounded-full p-[2px] bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 shadow-md shadow-blue-500/20">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-blue-600 font-black text-sm">
                      {userName[0]?.toUpperCase()}
                    </div>
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 ring-2 ring-white animate-pulse"></span>
                </div>
                <div className="text-left">
                  <p className="text-[11px] font-semibold text-slate-500 flex items-center gap-1">
                    <span>{greetingText},</span>
                    <span className="text-blue-600 font-bold truncate max-w-[90px]">{userName}</span>
                  </p>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <h1 className="font-heading font-black text-xs text-slate-900 tracking-tight leading-none">
                      Apna College <span className="text-blue-600">Bihar</span>
                    </h1>
                  </div>
                </div>
              </button>
            ) : (
              <Link to="/login" className="flex items-center gap-2.5 active:scale-98 transition-transform group">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full p-[2px] bg-gradient-to-tr from-blue-500 to-indigo-600 shadow-md">
                    <div className="w-full h-full rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-bold text-xs">
                      <User size={18} />
                    </div>
                  </div>
                </div>
                <div className="text-left">
                  <p className="text-[11px] font-semibold text-slate-500">{greetingText}</p>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <h1 className="font-heading font-black text-xs text-slate-900 tracking-tight leading-none">
                      Apna College <span className="text-blue-600">Bihar</span>
                    </h1>
                  </div>
                </div>
              </Link>
            )}

            {/* Quick Action Badges */}
            <div className="flex items-center gap-1.5">
              {/* My Profile / Login Button */}
              {user ? (
                <button
                  type="button"
                  onClick={() => setShowMobileProfileMenu(!showMobileProfileMenu)}
                  className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200/80 active:scale-95 transition-all shadow-2xs cursor-pointer"
                  title="My Profile"
                  aria-label="My Profile"
                >
                  <User size={13} className="text-blue-600 shrink-0" />
                  <span className="font-heading font-black text-[11px] tracking-tight">My Profile</span>
                  <ChevronDown size={11} className={`text-blue-500 transition-transform duration-200 ${showMobileProfileMenu ? 'rotate-180' : ''}`} />
                </button>
              ) : (
                <Link
                  to="/login"
                  className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-heading font-black text-xs shadow-sm active:scale-95 transition-all"
                  title="Login"
                >
                  <LogIn size={13} className="shrink-0" />
                  <span>Login</span>
                </Link>
              )}

              <button
                onClick={() => setShowScanner(true)}
                className="w-8 h-8 rounded-xl bg-white hover:bg-rose-50 border border-slate-200/80 flex items-center justify-center text-rose-500 active:scale-95 transition-all shadow-2xs"
                aria-label="Support via UPI"
                title="Support Apna College Bihar"
              >
                <Heart size={15} className="fill-rose-500/20" />
              </button>

              <Link
                to="/notifications"
                className="w-8 h-8 rounded-xl bg-white hover:bg-slate-100 border border-slate-200/80 flex items-center justify-center text-slate-700 active:scale-95 transition-all relative shadow-2xs"
                aria-label="Notices"
              >
                <Bell size={15} />
                {beuNotices.length > 0 && (
                  <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-blue-600 animate-ping"></span>
                )}
                {beuNotices.length > 0 && (
                  <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-blue-600"></span>
                )}
              </Link>
            </div>
          </div>

          {/* ── Laptop-Style Mobile Profile Menu Dropdown ── */}
          {showMobileProfileMenu && user && (
            <>
              <div 
                className="fixed inset-0 z-[1900] bg-slate-950/40 backdrop-blur-xs" 
                onClick={() => setShowMobileProfileMenu(false)} 
              />
              <div className="absolute right-3.5 top-16 w-72 bg-white/95 backdrop-blur-2xl border border-slate-200/90 rounded-3xl shadow-2xl p-4 z-[2000] animate-in fade-in zoom-in-95 duration-200 text-slate-900 origin-top-right">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">ACB Official Account</span>
                  <button 
                    onClick={() => setShowMobileProfileMenu(false)} 
                    className="w-6 h-6 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center active:scale-95 cursor-pointer"
                    aria-label="Close"
                  >
                    <X size={13} />
                  </button>
                </div>

                <div className="py-3.5 text-center border-b border-slate-100">
                  <div className="w-14 h-14 rounded-2xl overflow-hidden mb-2.5 mx-auto border border-slate-100 shadow-md">
                    <img src="/logo-acb.png?v=99" alt="ACB" className="w-full h-full object-cover" />
                  </div>
                  <p className="text-[10px] font-black uppercase tracking-wider text-blue-600 leading-none mb-1">Apna College Bihar</p>
                  <p className="text-xs font-bold text-slate-900 truncate px-1">{user?.email}</p>
                  <div className="flex items-center justify-center gap-1 text-[10px] text-slate-500 mt-1 font-medium">
                    <Calendar size={11} className="text-blue-500" />
                    <span>Joined: <strong className="text-slate-800">{joinDate}</strong></span>
                  </div>
                </div>

                <div className="pt-2 space-y-1">
                  {(user?.email === 'prince8694@gmail.com' || user?.email === 'prince86944@gmail.com' || user?.role === 'SUPER_ADMIN' || user?.role === 'ADMIN' || user?.role === 'admin' || user?.role === 'super_admin') && (
                    <Link
                      to="/dashboard/admin"
                      onClick={() => setShowMobileProfileMenu(false)}
                      className="flex items-center gap-2.5 w-full p-2.5 hover:bg-blue-50 text-blue-600 rounded-xl transition-all font-bold text-xs"
                    >
                      <div className="p-1.5 bg-blue-50 rounded-lg text-blue-600">
                        <Shield size={14} />
                      </div>
                      <span>Admin Control Panel</span>
                    </Link>
                  )}

                  <button
                    type="button"
                    onClick={() => {
                      setShowMobileProfileMenu(false);
                      setShowScanner(true);
                    }}
                    className="flex items-center gap-2.5 w-full p-2.5 hover:bg-rose-50 text-rose-600 rounded-xl transition-all font-bold text-xs text-left cursor-pointer"
                  >
                    <div className="p-1.5 bg-rose-50 rounded-lg text-rose-600">
                      <Award size={14} />
                    </div>
                    <span>Support Us / Donate (UPI)</span>
                  </button>

                  <button
                    type="button"
                    onClick={async () => {
                      setShowMobileProfileMenu(false);
                      const shareData = {
                        title: 'Apna College Bihar App',
                        text: 'Apna College Bihar - The Official Study Engine for BEU Students! Download notes, PYQs, and syllabus: ',
                        url: 'https://www.apnacollegebihar.online'
                      };
                      try {
                        if (navigator.share) {
                          await navigator.share(shareData);
                        } else {
                          await navigator.clipboard.writeText(shareData.text + " " + shareData.url);
                          toast.success("Platform link copied!");
                        }
                      } catch (err) {}
                    }}
                    className="flex items-center gap-2.5 w-full p-2.5 hover:bg-emerald-50 text-emerald-700 rounded-xl transition-all font-bold text-xs text-left cursor-pointer"
                  >
                    <div className="p-1.5 bg-emerald-50 rounded-lg text-emerald-600">
                      <Send size={14} />
                    </div>
                    <span>Share App Link</span>
                  </button>

                  <button
                    type="button"
                    onClick={async () => {
                      setShowMobileProfileMenu(false);
                      try {
                        await logout();
                        toast.success("Logged out successfully");
                      } catch (err) {
                        toast.error("Logout failed");
                      }
                    }}
                    className="flex items-center gap-2.5 w-full p-2.5 hover:bg-red-50 text-red-600 rounded-xl transition-all font-bold text-xs text-left cursor-pointer border-t border-slate-100 pt-2 mt-1"
                  >
                    <div className="p-1.5 bg-red-50 rounded-lg text-red-600">
                      <LogOut size={14} />
                    </div>
                    <span>Logout Session</span>
                  </button>
                </div>
              </div>
            </>
          )}

          {/* ══════════════════════════════════════════════════════════════
              2. INSTAGRAM-STYLE ANIMATED STORY REELS CAROUSEL
             ══════════════════════════════════════════════════════════════ */}
          <div className="overflow-x-auto no-scrollbar -mx-3.5 px-3.5 pt-1">
            <div className="flex items-center gap-3 w-max py-1">
              {mobileStories.map((story) => (
                <Link
                  key={story.id}
                  to={story.path}
                  className="flex flex-col items-center gap-1.5 active:scale-95 transition-transform group"
                >
                  <div className={`p-[2px] rounded-full bg-gradient-to-tr ${story.ring} shadow-xs group-hover:scale-105 transition-transform`}>
                    <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center p-0.5 border-2 border-white shadow-inner">
                      <div className="w-full h-full rounded-full bg-slate-50 flex items-center justify-center relative">
                        {story.icon}
                        <span className="absolute -bottom-1 -right-0.5 px-1 py-[1px] rounded bg-slate-900 text-white text-[8px] font-black uppercase tracking-tighter shadow-xs">
                          {story.badge}
                        </span>
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-heading font-extrabold text-slate-700 tracking-tight max-w-[64px] truncate text-center">
                    {story.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* ══════════════════════════════════════════════════════════════
              3. LIVE BEU CIRCULARS BREAKING MARQUEE TICKER (Light Theme)
             ══════════════════════════════════════════════════════════════ */}
          <div className="rounded-2xl p-2.5 bg-gradient-to-r from-blue-50 via-indigo-50/60 to-cyan-50 border border-blue-200/80 shadow-xs flex items-center gap-2 relative overflow-hidden">
            <div className="flex items-center gap-1 shrink-0 px-2 py-1 rounded-lg bg-rose-500 text-white text-[9px] font-black uppercase tracking-wider shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>
              <span>LIVE</span>
            </div>
            <Link
              to="/notifications"
              className="min-w-0 flex-1 flex items-center justify-between gap-2 text-xs font-semibold text-slate-800 hover:text-blue-600 transition-colors"
            >
              <p className="truncate text-[11px] font-medium leading-tight text-slate-700">
                {currentNotice
                  ? (currentNotice.title || currentNotice.board)
                  : "BEU 3rd Semester Exam Form & Updates • 537+ Verified Unit Notes Live!"}
              </p>
              <ChevronRight size={13} className="shrink-0 text-blue-600" />
            </Link>
          </div>

          {/* ══════════════════════════════════════════════════════════════
              4. SEARCH BAR WITH TRENDING TAGS (Light Theme)
             ══════════════════════════════════════════════════════════════ */}
          <div className="space-y-2">
            <form onSubmit={handleMobileSearchSubmit} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search 3rd Sem Notes, PYQs, Subjects..."
                className="w-full h-11 pl-10 pr-10 rounded-2xl bg-white border border-slate-200 text-slate-900 placeholder:text-slate-400 text-xs font-semibold focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 shadow-xs transition-all"
              />
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                >
                  <X size={14} />
                </button>
              )}
            </form>

            {/* Quick Trending Filters */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar -mx-1 px-1 py-0.5">
              <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 shrink-0">Trending:</span>
              {['3rd Sem CSE', 'Civil Unit 1', 'UHV', 'PYQ 2024', 'Syllabus'].map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => {
                    setSearchQuery(tag);
                    navigate(`/notes?search=${encodeURIComponent(tag)}`);
                  }}
                  className="px-2.5 py-1 rounded-xl bg-white hover:bg-blue-50 hover:text-blue-600 border border-slate-200/80 text-[10px] font-bold text-slate-600 shrink-0 active:scale-95 transition-all shadow-2xs"
                >
                  #{tag}
                </button>
              ))}
            </div>
          </div>

          {/* ══════════════════════════════════════════════════════════════
              3D INTERACTIVE BIHAR ENGINEERING CORE (Three.js WebGL)
             ══════════════════════════════════════════════════════════════ */}
          <div className="rounded-3xl p-3 bg-white border border-slate-200/90 shadow-xs relative overflow-hidden group">
            <div className="flex items-center justify-between px-2 pt-1 pb-1">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse"></span>
                <span className="font-heading font-black text-xs text-slate-900 uppercase tracking-tight">
                  3D Bihar Engineering Universe
                </span>
              </div>
              <span className="px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 text-[10px] font-bold border border-blue-200/70">
                38 Colleges Core
              </span>
            </div>

            <ThreeCanvasHero isMobile={true} />
          </div>

          {/* ══════════════════════════════════════════════════════════════
              5. FEATURED BENTO: 🔥 3RD SEMESTER MASTER PACK (Light Theme)
             ══════════════════════════════════════════════════════════════ */}
          <div className="rounded-3xl p-4.5 bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700 text-white shadow-lg shadow-blue-600/20 relative overflow-hidden border border-blue-400/30">
            <div className="absolute top-0 right-0 w-44 h-44 bg-cyan-400/20 rounded-full blur-2xl pointer-events-none"></div>

            <div className="relative z-10 space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-black uppercase tracking-wider text-cyan-200 border border-white/25">
                  🔥 Just Released • 2026 Batch
                </span>
                <span className="text-[11px] font-bold text-blue-100 flex items-center gap-1">
                  <CheckCircle2 size={13} className="text-cyan-300" /> 537 Verified Notes
                </span>
              </div>

              <div>
                <h2 className="font-heading font-black text-lg text-white tracking-tight leading-tight">
                  3rd Semester Master Pack
                </h2>
                <p className="text-xs text-blue-100 mt-1 font-medium leading-relaxed">
                  Civil, CSE, ECE, EE, EEE, Mechanical &amp; IT ke unit-wise notes, handwritten PDFs aur 5+ years solved PYQ papers available hain.
                </p>
              </div>

              {/* 1-Tap Quick Stream Selector */}
              <div className="pt-1">
                <p className="text-[10px] font-black uppercase tracking-wider text-blue-200 mb-1.5">Select Branch:</p>
                <div className="grid grid-cols-4 gap-1.5">
                  {[
                    { label: 'CSE', branch: 'cse' },
                    { label: 'Civil', branch: 'civil' },
                    { label: 'ECE', branch: 'ece' },
                    { label: 'EE', branch: 'ee' },
                    { label: 'EEE', branch: 'eee' },
                    { label: 'Mech', branch: 'me' },
                    { label: 'IT', branch: 'it' },
                    { label: 'All 14', branch: 'all' },
                  ].map((b) => (
                    <Link
                      key={b.label}
                      to={b.branch === 'all' ? '/notes' : `/notes/${b.branch}/3rd-sem`}
                      className="px-2 py-1.5 rounded-xl bg-white/15 hover:bg-white/30 border border-white/20 text-center font-heading font-extrabold text-[11px] text-white active:scale-95 transition-all"
                    >
                      {b.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="pt-1 flex items-center gap-2">
                <Link
                  to="/notes"
                  className="flex-1 py-2.5 px-3 rounded-xl bg-white text-blue-700 font-heading font-black text-xs text-center shadow-md active:scale-98 transition-all flex items-center justify-center gap-1.5"
                >
                  <BookOpen size={14} /> Open 3rd Sem Hub
                </Link>
                <Link
                  to="/pyq"
                  className="py-2.5 px-3 rounded-xl bg-blue-900/60 hover:bg-blue-900/80 border border-white/20 text-white font-heading font-black text-xs text-center active:scale-98 transition-all flex items-center justify-center gap-1"
                >
                  <FileText size={14} /> PYQs
                </Link>
              </div>
            </div>
          </div>

          {/* ══════════════════════════════════════════════════════════════
              6. 🎓 EDUCATION BALA: BEU ACADEMIC & ADMISSION MASTER GUIDE
                 (Interactive Animated Guide Requested by User)
             ══════════════════════════════════════════════════════════════ */}
          <div className="rounded-3xl p-4 bg-white border border-slate-200/90 shadow-sm space-y-3.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-200/80 flex items-center justify-center text-blue-600 shadow-2xs">
                  <GraduationCap size={17} />
                </div>
                <div>
                  <h3 className="font-heading font-black text-xs text-slate-900 uppercase tracking-tight">
                    BEU Academic &amp; Admission Guide
                  </h3>
                  <p className="text-[10px] text-slate-500 font-medium">Authoritative 2026 handbook for Bihar engineers</p>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 font-bold text-[9px] uppercase border border-blue-200/80">
                Official
              </span>
            </div>

            {/* Guide Interactive 4-Phase Tabs */}
            <div className="grid grid-cols-4 gap-1 p-1 bg-slate-100 rounded-2xl border border-slate-200/60">
              {[
                { id: 'admission', label: 'Admission', icon: '🏛️' },
                { id: 'counselling', label: 'Counselling', icon: '🧭' },
                { id: 'beu', label: 'BEU Exam', icon: '📚' },
                { id: 'career', label: 'Career', icon: '💼' },
              ].map((tab) => {
                const isActive = activeGuideTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveGuideTab(tab.id)}
                    className={`py-2 px-1 rounded-xl text-center font-heading font-extrabold text-[10.5px] transition-all flex flex-col items-center gap-0.5 ${
                      isActive
                        ? 'bg-white text-blue-600 shadow-sm border border-slate-200/80'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <span>{tab.icon}</span>
                    <span className="truncate">{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Guide Active Content Panel */}
            <div className="p-3.5 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50/30 border border-slate-200/70 text-xs space-y-2.5 animate-fadeIn">
              {activeGuideTab === 'admission' && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase tracking-wider text-blue-600">Phase 01 • B.Tech Eligibility</span>
                    <span className="text-[10px] font-bold text-slate-500">BCECEB Merit</span>
                  </div>
                  <h4 className="font-heading font-black text-sm text-slate-900">
                    Admission via JEE (Main) Paper-1
                  </h4>
                  <p className="text-slate-600 text-[11px] leading-relaxed font-medium">
                    Bihar me 38 Government Engineering Colleges (GECs) me admission strictly <strong className="text-slate-900 font-bold">UGEAC counselling</strong> ke through hota hai. 12th PCM me general category ke liye 45% aur reserved ke liye 40% aggregate required hai.
                  </p>
                  <div className="grid grid-cols-2 gap-1.5 pt-1 text-[10px]">
                    <div className="p-2 rounded-xl bg-white border border-slate-200/80 flex items-center gap-1.5 font-bold text-slate-800">
                      <CheckCircle2 size={12} className="text-emerald-500 shrink-0" /> No State Entrance Exam
                    </div>
                    <div className="p-2 rounded-xl bg-white border border-slate-200/80 flex items-center gap-1.5 font-bold text-slate-800">
                      <CheckCircle2 size={12} className="text-emerald-500 shrink-0" /> MNSSBY 4 Lakh Loan
                    </div>
                  </div>
                  <Link
                    to="/blog/complete-guide-to-ugeac-counselling-process"
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-blue-600 hover:text-blue-700 pt-1"
                  >
                    Read Complete Admission Guide <ArrowRight size={12} />
                  </Link>
                </div>
              )}

              {activeGuideTab === 'counselling' && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase tracking-wider text-blue-600">Phase 02 • Choice Filling</span>
                    <span className="text-[10px] font-bold text-slate-500">UGEAC 2026</span>
                  </div>
                  <h4 className="font-heading font-black text-sm text-slate-900">
                    College Priority &amp; Cutoff Blueprints
                  </h4>
                  <p className="text-slate-600 text-[11px] leading-relaxed font-medium">
                    Top choice filling preference order: <strong className="text-slate-900">MIT Muzaffarpur &gt; BCE Bhagalpur &gt; GCE Gaya &gt; NCE Chandi &gt; MCE Motihari</strong>. Round 1 aur Round 2 cutoffs ke according lock karein.
                  </p>
                  <div className="grid grid-cols-2 gap-1.5 pt-1 text-[10px]">
                    <div className="p-2 rounded-xl bg-white border border-slate-200/80 flex items-center gap-1.5 font-bold text-slate-800">
                      <CheckCircle2 size={12} className="text-emerald-500 shrink-0" /> 38 GEC Cutoffs Inside
                    </div>
                    <div className="p-2 rounded-xl bg-white border border-slate-200/80 flex items-center gap-1.5 font-bold text-slate-800">
                      <CheckCircle2 size={12} className="text-emerald-500 shrink-0" /> Real-time Predictor
                    </div>
                  </div>
                  <Link
                    to="/ugeac-predictor"
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-blue-600 hover:text-blue-700 pt-1"
                  >
                    Launch College &amp; Rank Predictor <ArrowRight size={12} />
                  </Link>
                </div>
              )}

              {activeGuideTab === 'beu' && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase tracking-wider text-blue-600">Phase 03 • University Rules</span>
                    <span className="text-[10px] font-bold text-slate-500">10-Point CGPA</span>
                  </div>
                  <h4 className="font-heading font-black text-sm text-slate-900">
                    BEU Semester Grading &amp; 75% Attendance
                  </h4>
                  <p className="text-slate-600 text-[11px] leading-relaxed font-medium">
                    BEU 10-point relative grading scale follow karta hai. 70 me se 25 marks external aur 30 me se internal practical pass hone ke liye mandatory hai. <strong className="text-slate-900">75% attendance</strong> exam form fill karne ke liye compulsory hai.
                  </p>
                  <div className="grid grid-cols-2 gap-1.5 pt-1 text-[10px]">
                    <div className="p-2 rounded-xl bg-white border border-slate-200/80 flex items-center gap-1.5 font-bold text-slate-800">
                      <CheckCircle2 size={12} className="text-emerald-500 shrink-0" /> 10-Point Calculator
                    </div>
                    <div className="p-2 rounded-xl bg-white border border-slate-200/80 flex items-center gap-1.5 font-bold text-slate-800">
                      <CheckCircle2 size={12} className="text-emerald-500 shrink-0" /> Carry-over Guidelines
                    </div>
                  </div>
                  <Link
                    to="/cgpa"
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-blue-600 hover:text-blue-700 pt-1"
                  >
                    Open BEU CGPA Calculator <ArrowRight size={12} />
                  </Link>
                </div>
              )}

              {activeGuideTab === 'career' && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase tracking-wider text-blue-600">Phase 04 • Career Roadmap</span>
                    <span className="text-[10px] font-bold text-slate-500">Internship &amp; Jobs</span>
                  </div>
                  <h4 className="font-heading font-black text-sm text-slate-900">
                    AICTE Mandatory Internships &amp; Tech Clubs
                  </h4>
                  <p className="text-slate-600 text-[11px] leading-relaxed font-medium">
                    2nd aur 3rd year me AICTE Internship Portal se verified credits earn karein. Coding clubs, hackathons (SIH), aur open source contributions ke zariye Tier-3 colleges se high package off-campus crack karein.
                  </p>
                  <div className="grid grid-cols-2 gap-1.5 pt-1 text-[10px]">
                    <div className="p-2 rounded-xl bg-white border border-slate-200/80 flex items-center gap-1.5 font-bold text-slate-800">
                      <CheckCircle2 size={12} className="text-emerald-500 shrink-0" /> Free Senior Mentorship
                    </div>
                    <div className="p-2 rounded-xl bg-white border border-slate-200/80 flex items-center gap-1.5 font-bold text-slate-800">
                      <CheckCircle2 size={12} className="text-emerald-500 shrink-0" /> Hackathon Hub
                    </div>
                  </div>
                  <Link
                    to="/mentorship"
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-blue-600 hover:text-blue-700 pt-1"
                  >
                    Connect with Senior Mentors <ArrowRight size={12} />
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* ══════════════════════════════════════════════════════════════
              7. INTERACTIVE SEGMENTED HUB SWITCHER (Light Theme)
             ══════════════════════════════════════════════════════════════ */}
          <div className="space-y-3">
            <div className="flex items-center justify-between px-1">
              <h3 className="text-xs font-black uppercase tracking-wider text-slate-700">
                Explore ACB Hub
              </h3>
              <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">Interactive Switcher</span>
            </div>

            {/* 4-Tab Switcher */}
            <div className="grid grid-cols-4 gap-1 p-1 rounded-2xl bg-slate-200/70 border border-slate-300/60 shadow-xs">
              {[
                { id: 'notes', label: 'Notes', icon: <BookOpen size={13} /> },
                { id: 'pyqs', label: 'PYQs', icon: <FileText size={13} /> },
                { id: 'tools', label: 'Tools', icon: <Sparkles size={13} /> },
                { id: 'colleges', label: 'Colleges', icon: <Building2 size={13} /> },
              ].map((tab) => {
                const isActive = activeHubTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveHubTab(tab.id)}
                    className={`flex items-center justify-center gap-1 py-2 px-1 rounded-xl text-xs font-heading font-extrabold transition-all ${
                      isActive
                        ? 'bg-white text-blue-600 shadow-sm border border-slate-200/80'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {tab.icon}
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Hub Content: NOTES */}
            {activeHubTab === 'notes' && (
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-3 animate-fadeIn">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Step 1: Choose Branch</span>
                  <Link to="/notes" className="text-[10px] font-bold text-blue-600 hover:underline">View All 14 Branches &rarr;</Link>
                </div>

                <div className="grid grid-cols-4 gap-1.5">
                  {mobileBranches.map((br) => {
                    const isSelected = selectedMobileBranch === br.id;
                    return (
                      <button
                        key={br.id}
                        onClick={() => setSelectedMobileBranch(br.id)}
                        className={`p-2 rounded-xl text-center font-heading font-black text-xs transition-all ${
                          isSelected
                            ? 'bg-blue-600 text-white shadow-sm shadow-blue-600/30'
                            : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200/70'
                        }`}
                      >
                        {br.short}
                      </button>
                    );
                  })}
                  <Link
                    to="/notes"
                    className="p-2 rounded-xl text-center font-heading font-bold text-xs bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200/70 flex items-center justify-center"
                  >
                    More+
                  </Link>
                </div>

                <div className="pt-2 border-t border-slate-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Step 2: Choose Semester</span>
                    <span className="text-[10px] font-mono font-bold text-emerald-600">Sem 3 Verified ★</span>
                  </div>
                  <div className="grid grid-cols-4 gap-1.5">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
                      <Link
                        key={sem}
                        to={`/notes/${selectedMobileBranch.toLowerCase()}/${sem}${sem === 1 ? 'st' : sem === 2 ? 'nd' : sem === 3 ? 'rd' : 'th'}-sem`}
                        className={`p-2 rounded-xl text-center text-xs font-bold transition-all relative ${
                          sem === 3
                            ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-black shadow-sm'
                            : 'bg-slate-100 hover:bg-blue-50 hover:text-blue-700 text-slate-700 border border-slate-200/70'
                        }`}
                      >
                        Sem {sem}
                        {sem === 3 && (
                          <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-amber-400 ring-1 ring-white"></span>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Hub Content: PYQS */}
            {activeHubTab === 'pyqs' && (
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-2.5 animate-fadeIn">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">BEU Previous Year Papers</span>
                  <Link to="/pyq" className="text-[10px] font-bold text-blue-600 hover:underline">Explore All &rarr;</Link>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { year: '2024 Exam Papers', desc: 'Solved Odd & Even Semester Papers', path: '/pyq' },
                    { year: '2023 Exam Papers', desc: 'Complete BEU Subject Sets', path: '/pyq' },
                    { year: '2022 Exam Papers', desc: 'Mid-Sem & End-Sem Archive', path: '/pyq' },
                    { year: '2021 Exam Papers', desc: 'Foundation Core Papers', path: '/pyq' },
                  ].map((p, i) => (
                    <Link
                      key={i}
                      to={p.path}
                      className="p-2.5 rounded-xl bg-slate-50 hover:bg-blue-50 border border-slate-200/80 block text-left group transition-all"
                    >
                      <h4 className="font-heading font-extrabold text-xs text-slate-900 group-hover:text-blue-600">{p.year}</h4>
                      <p className="text-[10px] text-slate-500 mt-0.5">{p.desc}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Hub Content: TOOLS */}
            {activeHubTab === 'tools' && (
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-2 animate-fadeIn">
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { name: 'CGPA Calculator', desc: '10-pt BEU scale', path: '/cgpa', icon: <Calculator size={14} className="text-cyan-600" /> },
                    { name: 'UGEAC Predictor', desc: '38 GEC rank cutoffs', path: '/ugeac-predictor', icon: <Target size={14} className="text-rose-600" /> },
                    { name: 'Attendance Manager', desc: '75% safe tracker', path: '/attendance', icon: <Clock size={14} className="text-emerald-600" /> },
                    { name: 'BEU Timetable', desc: 'Class schedules', path: '/timetable', icon: <Calendar size={14} className="text-purple-600" /> },
                  ].map((t, idx) => (
                    <Link
                      key={idx}
                      to={t.path}
                      className="p-2.5 rounded-xl bg-slate-50 hover:bg-blue-50 border border-slate-200/80 flex items-center gap-2 transition-all group"
                    >
                      <div className="p-2 rounded-lg bg-white shadow-2xs border border-slate-200/70">{t.icon}</div>
                      <div>
                        <h4 className="font-heading font-bold text-xs text-slate-900 group-hover:text-blue-600">{t.name}</h4>
                        <p className="text-[9px] text-slate-500">{t.desc}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Hub Content: COLLEGES */}
            {activeHubTab === 'colleges' && (
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-2 animate-fadeIn">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">38 GECs Directory</span>
                  <Link to="/colleges" className="text-[10px] font-bold text-blue-600 hover:underline">Full List &rarr;</Link>
                </div>
                <div className="space-y-1.5">
                  {[
                    { name: 'MIT Muzaffarpur', cutoff: 'Top 1 UGEAC', location: 'Muzaffarpur', estd: '1954' },
                    { name: 'BCE Bhagalpur', cutoff: 'Top 2 UGEAC', location: 'Bhagalpur', estd: '1960' },
                    { name: 'GCE Gaya', cutoff: 'Top 3 UGEAC', location: 'Gaya', estd: '2008' },
                    { name: 'NCE Chandi', cutoff: 'Top 4 UGEAC', location: 'Nalanda', estd: '2008' },
                  ].map((col, idx) => (
                    <Link
                      key={idx}
                      to="/colleges"
                      className="p-2.5 rounded-xl bg-slate-50 hover:bg-blue-50 border border-slate-200/80 flex items-center justify-between text-xs active:scale-98 transition-all"
                    >
                      <div>
                        <h4 className="font-heading font-bold text-slate-900 text-xs">{col.name}</h4>
                        <p className="text-[10px] text-slate-500">{col.location} • Estd {col.estd}</p>
                      </div>
                      <span className="px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 text-[10px] font-mono font-bold border border-blue-200/80">
                        {col.cutoff}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* ══════════════════════════════════════════════════════════════
              8. NATIVE 8-TOOLS APP DOCK GRID (Light Theme 2-Column Grid)
             ══════════════════════════════════════════════════════════════ */}
          <div className="space-y-2.5 pt-1">
            <div className="flex items-center justify-between px-1">
              <div className="flex items-center gap-1.5">
                <Sparkles size={14} className="text-blue-600" />
                <h3 className="text-xs font-black uppercase tracking-wider text-slate-700">
                  Full Academic Toolkit
                </h3>
              </div>
              <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">8 App Modules</span>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              {academicTools.map((tool, idx) => (
                <Link
                  key={idx}
                  to={tool.path}
                  className="p-3.5 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200/90 active:scale-[0.97] transition-all duration-150 flex flex-col justify-between shadow-2xs relative overflow-hidden group"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 border border-blue-200/70 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                        {tool.icon}
                      </div>
                      <span className="px-1.5 py-0.5 rounded-md bg-slate-100 text-blue-700 text-[9px] font-black uppercase tracking-tight border border-slate-200/60">
                        {tool.badge}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-heading font-extrabold text-xs text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1">
                        {tool.name}
                      </h4>
                      <p className="text-[10px] text-slate-500 leading-snug line-clamp-2 mt-0.5 font-medium">
                        {tool.desc}
                      </p>
                    </div>
                  </div>
                  <div className="pt-2 flex items-center justify-between text-[10px] font-bold text-blue-600 border-t border-slate-100 mt-2">
                    <span>Open Module</span>
                    <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* ══════════════════════════════════════════════════════════════
              9. VERIFIED MILESTONE STATS BENTO (Light Theme)
             ══════════════════════════════════════════════════════════════ */}
          <div className="grid grid-cols-3 gap-2 pt-1">
            <div className="p-3 rounded-2xl bg-white border border-slate-200/90 text-center shadow-2xs">
              <span className="font-heading font-black text-base text-blue-600 block leading-tight">38 GECs</span>
              <span className="text-[9px] font-bold uppercase tracking-wider text-slate-500 block mt-0.5">Covered</span>
            </div>
            <div className="p-3 rounded-2xl bg-white border border-slate-200/90 text-center shadow-2xs">
              <span className="font-heading font-black text-base text-emerald-600 block leading-tight">537+</span>
              <span className="text-[9px] font-bold uppercase tracking-wider text-slate-500 block mt-0.5">Sem 3 Notes</span>
            </div>
            <div className="p-3 rounded-2xl bg-white border border-slate-200/90 text-center shadow-2xs">
              <span className="font-heading font-black text-base text-purple-600 block leading-tight">100%</span>
              <span className="text-[9px] font-bold uppercase tracking-wider text-slate-500 block mt-0.5">Free Access</span>
            </div>
          </div>

          {/* ══════════════════════════════════════════════════════════════
              10. COMMUNITY & SUPPORT STRIP (Light Theme)
             ══════════════════════════════════════════════════════════════ */}
          <div className="p-3.5 rounded-2xl bg-gradient-to-r from-blue-50 via-indigo-50 to-cyan-50 border border-blue-200/80 shadow-xs space-y-2.5">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-heading font-black text-xs text-slate-900">Join Official BEU Communities</h4>
                <p className="text-[10px] text-slate-600 font-medium">Daily notes alerts &amp; discussion groups</p>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[9px] font-black uppercase">
                Active
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <a
                href="https://whatsapp.com/channel/0029VbC6FsH3wtb5UEDvrW0a"
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-heading font-black text-xs text-center flex items-center justify-center gap-1.5 active:scale-95 transition-all shadow-xs"
              >
                <MessageCircle size={14} /> WhatsApp Channel
              </a>
              <a
                href="https://t.me/apnacollegebihar"
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-3 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-heading font-black text-xs text-center flex items-center justify-center gap-1.5 active:scale-95 transition-all shadow-xs"
              >
                <Send size={14} /> Telegram Group
              </a>
            </div>

            <div className="pt-1">
              <button
                type="button"
                onClick={() => setShowScanner(true)}
                className="w-full py-2.5 px-3 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200/80 font-heading font-black text-xs text-center flex items-center justify-center gap-1.5 active:scale-95 transition-all"
              >
                <Heart size={13} className="fill-rose-500 text-rose-500" /> Support ACB via UPI Scanner
              </button>
            </div>
          </div>

          {/* ══════════════════════════════════════════════════════════════
              11. FREQUENTLY ASKED QUESTIONS (FAQ Accordion - Light Theme)
             ══════════════════════════════════════════════════════════════ */}
          <div className="space-y-2 pt-1">
            <h3 className="text-xs font-black uppercase tracking-wider text-slate-700 px-1">
              Frequently Asked Questions
            </h3>
            <div className="space-y-1.5">
              {faqs.map((faq, i) => (
                <div key={i} className="rounded-xl overflow-hidden bg-white border border-slate-200/90 shadow-2xs">
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                    className="w-full flex items-center justify-between p-3.5 text-left text-xs font-bold text-slate-900 active:bg-slate-50 transition-colors"
                  >
                    <span className="pr-2">{faq.q}</span>
                    <span className="text-blue-600 shrink-0">
                      {openFaqIndex === i ? <Minus size={14} /> : <Plus size={14} />}
                    </span>
                  </button>
                  {openFaqIndex === i && (
                    <div className="px-3.5 pb-3.5 text-[11px] text-slate-600 leading-relaxed font-medium border-t border-slate-100 pt-2.5 animate-fadeIn">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ── Mobile Scanner Modal ── */}
        {showScanner && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md" onClick={() => setShowScanner(false)}>
            <div className="bg-white border border-slate-200 text-slate-900 rounded-3xl shadow-2xl max-w-[340px] w-full p-5 text-center animate-fadeIn" onClick={e => e.stopPropagation()}>
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
                <div className="flex items-center gap-2">
                  <Heart size={16} className="text-rose-500 fill-rose-500" />
                  <span className="font-heading font-black text-xs uppercase tracking-wider text-slate-900">Support via UPI</span>
                </div>
                <button onClick={() => setShowScanner(false)} className="text-slate-400 hover:text-slate-700 p-1">
                  <X size={16} />
                </button>
              </div>

              <p className="text-[11px] text-slate-600 mb-3 font-medium leading-relaxed">
                Apna College Bihar is 100% free. Aapke support se hum server costs pay karte hain.
              </p>

              <div className="p-2 bg-slate-50 rounded-2xl border border-slate-200 inline-block mb-3 shadow-inner">
                <img
                  src="/scanner-qr.jpg"
                  alt="UPI Scanner"
                  className="w-44 h-44 object-contain rounded-xl"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <div className="w-44 h-44 hidden flex-col items-center justify-center bg-slate-100 rounded-xl text-xs text-slate-400 font-bold p-3">
                  Place scanner-qr.jpg in public folder
                </div>
              </div>

              <div
                onClick={() => {
                  navigator.clipboard.writeText("apnacollegebihar@slc");
                  toast.success("UPI ID Copied! ✅");
                }}
                className="p-2.5 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-between cursor-pointer active:scale-98 transition-all"
              >
                <div className="text-left">
                  <p className="text-[9px] text-slate-500 font-bold uppercase">UPI ID (Tap to Copy)</p>
                  <p className="text-xs font-mono font-bold text-blue-700">apnacollegebihar@slc</p>
                </div>
                <ExternalLink size={14} className="text-blue-600" />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }


  // ═══════════════════════════════════════════════════════════════════════════════
  // ── DESKTOP VIEW (100% Crisp, Transparent, Unblurred Background Brand Film) ──
  // ═══════════════════════════════════════════════════════════════════════════════
  return (
    <div className="min-h-screen bg-transparent text-white font-['Inter'] relative selection:bg-cyan-500/30 overflow-x-clip">
      <SEO
        title="Apna College Bihar | #1 Academic Platform for BEU Students"
        description="Bihar's premier academic platform for Bihar Engineering University (BEU) students. Free unit-wise notes, 5+ years verified PYQ papers, official BEU syllabus, UGEAC college predictor & CGPA calculator."
        url="https://www.apnacollegebihar.online"
        keywords="BEU notes, Bihar engineering college, UGEAC 2026 predictor, B.Tech PYQ papers, Bihar college cutoff, CGPA calculator BEU, Apna College Bihar, Bihar engineering counselling, MIT Muzaffarpur, BCE Bhagalpur"
        schema={combinedSchema}
      />

      {/* ── Foreground Content Wrapper ── */}
      <div className="relative z-10">

        {/* ═══════════════════════════════════════════ */}
        {/* ── 1. CINEMATIC OPEN HERO STAGE ── */}
        {/* ═══════════════════════════════════════════ */}
        <section className="pt-10 sm:pt-16 pb-8 sm:pb-12 px-4 sm:px-6 md:px-12 relative z-10">
          <div className="container mx-auto max-w-5xl text-center">
            
            {/* Subtle Live Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/30 border border-white/15 text-white shadow-xl text-xs font-bold mb-6">
              <Sparkles size={14} className="text-cyan-400" />
              <span className="tracking-wide">Bihar's #1 Academic Platform for BEU Students</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl font-black text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)] tracking-tight leading-tight sm:leading-none mb-6">
              Apna College <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-300 bg-clip-text text-transparent">Bihar</span>
            </h1>

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
                className="px-5 py-3 rounded-xl bg-black/30 hover:bg-white/10 border border-white/20 hover:border-cyan-400/60 text-white flex items-center gap-2 text-xs sm:text-sm font-heading font-black shadow-xl hover:scale-105 active:scale-95 transition-all"
              >
                <Download size={16} className="text-cyan-400" />
                <span>Download Official App (v64)</span>
              </Link>
              <Link
                to="/ugeac-predictor?tab=finder"
                className="px-5 py-3 rounded-xl bg-black/30 hover:bg-white/10 border border-cyan-400/40 hover:border-cyan-400 text-cyan-300 flex items-center gap-2 text-xs sm:text-sm font-heading font-black shadow-xl hover:scale-105 active:scale-95 transition-all"
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
        {/* ── 3D INTERACTIVE ACADEMIC CORE (Three.js) ── */}
        {/* ═══════════════════════════════════════════ */}
        <section className="py-4 sm:py-6 px-4 sm:px-6 md:px-12 relative z-10">
          <div className="container mx-auto max-w-5xl">
            <div className="rounded-3xl p-5 md:p-7 bg-slate-950/45 backdrop-blur-2xl border border-white/15 shadow-2xl relative overflow-hidden group">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 border-b border-white/10 mb-2 gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping"></span>
                    <h3 className="font-heading font-black text-lg md:text-xl text-white tracking-tight">
                      Bihar Engineering University 3D Constellation
                    </h3>
                  </div>
                  <p className="text-xs text-slate-300 font-medium mt-1">
                    Real-time WebGL 3D neural model representing 38 Government Engineering Colleges orbiting the BEU academic core.
                  </p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="px-3 py-1 rounded-xl bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 text-xs font-bold font-mono">
                    Three.js WebGL Core
                  </span>
                </div>
              </div>

              <ThreeCanvasHero isMobile={false} />
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════ */}
        {/* ── 2. REAL-TIME STATS BENTO HUD ── */}
        {/* ═══════════════════════════════════════════ */}
        <section className="py-4 sm:py-6 px-3.5 sm:px-6 md:px-12 relative z-10">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 border-y border-white/10 py-4">
              {[
                { label: 'Curated Notes', val: stats.notes, suffix: '+', icon: <BookOpen size={20} className="sm:w-[22px] sm:h-[22px]" /> },
                { label: 'Verified PYQs', val: stats.pyqs, suffix: '+', icon: <FileText size={20} className="sm:w-[22px] sm:h-[22px]" /> },
                { label: 'Active Students', val: stats.users, suffix: '+', icon: <Users size={20} className="sm:w-[22px] sm:h-[22px]" /> },
                { label: 'Govt Colleges', val: 38, suffix: '+', icon: <Building2 size={20} className="sm:w-[22px] sm:h-[22px]" /> },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-white transition-all hover:translate-y-[-2px]">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-cyan-500/15 border border-cyan-400/25 text-cyan-300 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <span className="font-heading text-xl sm:text-2xl md:text-3xl font-[1000] text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)] tracking-tight block">
                      <CountUp end={item.val} suffix={item.suffix} duration={1400} />
                    </span>
                    <p className="text-[11px] sm:text-xs text-slate-200 font-bold drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)] tracking-wide uppercase truncate">{item.label}</p>
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
            <div className="text-white">
              
              {/* Header Bar with Full-Width Typography & Navigation */}
              <div className="pb-6 border-b border-white/10 space-y-4">
                <div className="flex flex-col gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 text-xs font-bold w-fit shadow-xs">
                    <Sparkles size={13} className="text-cyan-400" />
                    <span>BEU PATNA OFFICIAL STUDY ENGINE • 38 GOVT ENGINEERING COLLEGES</span>
                  </div>
                  <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-[1000] text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] tracking-tight">
                    Bihar Engineering Academic Lab &amp; Tools
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-200 drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)] font-medium max-w-3xl leading-relaxed">
                    Access verified B.Tech semester notes, past 5-year PYQ blueprints, SGPA calculator, and real-time BCECEB UGEAC cutoff intelligence across all 38 Government Engineering Colleges.
                  </p>
                </div>

                {/* Tab Navigation Pill Bar (Clean, Spacious & Responsive) */}
                <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-black/40 border border-white/15 overflow-x-auto custom-scrollbar">
                  {[
                    { id: 'tools', label: '🛠️ Academic Tools', badge: '8 Tools' },
                    { id: 'predictor', label: '🎯 UGEAC Predictor', badge: 'Cutoffs 2024–25' },
                    { id: 'colleges', label: '🏛️ Top 38 Colleges', badge: 'Profiles' },
                    { id: 'radar', label: '📡 Live BEU Radar', badge: beuNotices.length > 0 ? 'Live' : null },
                    { id: 'guide', label: '🧭 Guide & FAQ', badge: 'Prep' },
                  ].map(tab => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveConsoleTab(tab.id)}
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-heading font-bold transition-all whitespace-nowrap cursor-pointer ${
                        activeConsoleTab === tab.id
                          ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg border border-cyan-400/40'
                          : 'text-slate-300 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <span>{tab.label}</span>
                      {tab.badge && (
                        <span className={`px-1.5 py-0.5 rounded-md text-[9px] font-black ${
                          activeConsoleTab === tab.id 
                            ? 'bg-white/20 text-white' 
                            : 'bg-white/10 text-slate-300'
                        }`}>
                          {tab.badge}
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* ── TAB 1: ACADEMIC SUITE (8 TOOLS - ZERO BLUR TO REVEAL BACKGROUND) ── */}
              {activeConsoleTab === 'tools' && (
                <div className="pt-6 animate-in fade-in duration-200">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    {academicTools.map((tool, idx) => (
                      <Link
                        key={idx}
                        to={tool.path}
                        className="p-5 rounded-2xl bg-black/20 hover:bg-white/5 border border-white/15 hover:border-cyan-400/60 shadow-lg text-white flex flex-col justify-between group transition-all hover:-translate-y-1 active:scale-[0.98]"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-md">
                              {tool.icon}
                            </div>
                            {tool.badge && (
                              <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 text-[10px] font-black uppercase tracking-wider">
                                {tool.badge}
                              </span>
                            )}
                          </div>
                          <h3 className="font-heading text-base font-extrabold text-white group-hover:text-cyan-300 transition-colors drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                            {tool.name}
                          </h3>
                          <p className="text-xs text-slate-200 drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)] font-medium mt-1.5 leading-relaxed">
                            {tool.desc}
                          </p>
                        </div>
                        <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between">
                          <span className="text-[11px] text-slate-400 font-medium">Direct Access</span>
                          <span className="px-2.5 py-1 rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 group-hover:bg-cyan-500 group-hover:text-white text-xs font-bold flex items-center gap-1 transition-all">
                            <span>Launch Tool</span>
                            <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* ── TAB 2: UGEAC PREDICTOR (Authentic BCECEB Data & Math) ── */}
              {activeConsoleTab === 'predictor' && (
                <div className="pt-6 animate-in fade-in duration-200">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    
                    {/* Left: Interactive Slider & College Match Preview */}
                    <div className="lg:col-span-7 space-y-4">
                      
                      {/* Percentile Slider Card */}
                      <div className="p-4 sm:p-5 rounded-2xl bg-black/25 border border-white/15 shadow-xl text-white">
                        <div className="flex items-center justify-between text-xs sm:text-sm mb-2 font-bold">
                          <span className="text-slate-200">Your JEE Main Percentile:</span>
                          <span className="text-cyan-400 font-[1000] text-base sm:text-lg">{simPercentile}%ile</span>
                        </div>
                        <input
                          type="range"
                          min="70"
                          max="99.5"
                          step="0.5"
                          value={simPercentile}
                          onChange={(e) => setSimPercentile(Number(e.target.value))}
                          className="w-full h-2.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                        />
                        
                        {/* Dual Rank Metrics (AIR + BCECEB State UR Rank) */}
                        <div className="grid grid-cols-2 gap-3 mt-3 pt-3 border-t border-white/10">
                          <div className="bg-white/5 border-white/10 p-2.5 rounded-xl border">
                            <span className="text-[10px] uppercase font-bold text-slate-300 block tracking-wider">All India CRL (AIR)</span>
                            <span className="text-white font-[1000] text-sm sm:text-base">~{currentAir.toLocaleString()}</span>
                          </div>
                          <div className="bg-emerald-500/10 border-emerald-400/20 p-2.5 rounded-xl border">
                            <span className="text-[10px] uppercase font-bold text-emerald-300 block tracking-wider">Est. Bihar State Rank (UR)</span>
                            <span className="text-emerald-400 font-[1000] text-sm sm:text-base">#{currentUgeacRank.toLocaleString()}</span>
                          </div>
                        </div>
                      </div>

                      {/* Live College Match Cards (Based on Real 2024-2025 BCECEB Cutoffs) */}
                      <div className="space-y-2.5">
                        <div className="flex items-center justify-between text-xs font-bold text-slate-200 px-1">
                          <span>Predicted Seat Allotment Status (General UR):</span>
                          <span className="text-[11px] text-cyan-400">2024-2025 Closing Cutoff</span>
                        </div>

                        {getSimulatedCollegeMatches(currentUgeacRank).map((col, idx) => {
                          const isLikely = currentUgeacRank <= col.closing;
                          const isModerate = !isLikely && currentUgeacRank <= Math.round(col.closing * 1.35);

                          return (
                            <div key={idx} className="p-3.5 rounded-xl bg-black/25 border border-white/15 text-white hover:border-cyan-400/40 shadow-lg flex items-center justify-between transition-all">
                              <div className="flex items-center gap-3">
                                <div className={`w-10 h-10 rounded-xl ${col.color} border flex items-center justify-center font-black text-xs shrink-0`}>
                                  {col.code}
                                </div>
                                <div>
                                  <p className="text-xs sm:text-sm font-bold text-white leading-tight">
                                    {col.college} • <span className="text-cyan-300 font-semibold">{col.branch}</span>
                                  </p>
                                  <p className="text-[11px] text-slate-300 mt-0.5">
                                    Closing Rank: <strong className="text-white">#{col.closing.toLocaleString()}</strong>
                                  </p>
                                </div>
                              </div>

                              <div className="text-right shrink-0">
                                {isLikely ? (
                                  <span className="px-2.5 py-1 rounded-lg bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 font-bold text-xs inline-flex items-center gap-1">
                                    <span>High Chance</span> <span>✓</span>
                                  </span>
                                ) : isModerate ? (
                                  <span className="px-2.5 py-1 rounded-lg bg-amber-500/20 border border-amber-400/30 text-amber-300 font-bold text-xs inline-flex items-center gap-1">
                                    <span>Round 2 / Mop-Up</span> <span>⚠️</span>
                                  </span>
                                ) : (
                                  <span className="px-2.5 py-1 rounded-lg bg-slate-800/80 border border-white/10 text-slate-400 font-bold text-xs inline-flex items-center gap-1">
                                    <span>Cutoff Exceeded</span> <span>✕</span>
                                  </span>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>

                    </div>

                    {/* Right: Predictor Callout Box */}
                    <div className="lg:col-span-5 p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-blue-600/20 to-cyan-600/15 border border-cyan-400/30 text-white flex flex-col justify-between space-y-6">
                      <div>
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 text-xs font-bold mb-3">
                          <Target size={13} /> Official BCECEB Multi-Year Cutoffs
                        </div>
                        <h3 className="font-heading text-lg sm:text-xl font-bold text-white mb-2">
                          All 38 Bihar Govt Engineering Colleges
                        </h3>
                        <p className="text-xs text-slate-200 leading-relaxed font-medium mb-4">
                          Explore category quota predictions (General UR, BC, EBC, SC, ST, EWS &amp; RCG) across every campus — MIT Muzaffarpur, BCE Bhagalpur, Bakhtiyarpur, Gaya, Darbhanga, and 33 more.
                        </p>
                        <div className="bg-black/20 border-white/10 text-slate-300 p-3 rounded-xl border text-xs space-y-1">
                          <p>• <strong>Authentic Data:</strong> Direct from BCECEB allotment seat charts.</p>
                          <p>• <strong>Category Quota:</strong> Includes 33% girls horizontal reservation.</p>
                        </div>
                      </div>

                      <Link
                        to="/ugeac-predictor"
                        className="btn-primary w-full text-xs sm:text-sm flex items-center justify-center gap-2 py-3 shadow-xl"
                      >
                        <span>Launch Full UGEAC Predictor (All 38 Colleges)</span>
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
                    <span className="text-xs text-slate-200 font-medium">
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {popularColleges.map((col, idx) => (
                      <Link
                        key={idx}
                        to={`/college/${col.slug}`}
                        className="p-5 rounded-2xl group transition-all flex flex-col justify-between bg-black/20 hover:bg-white/5 border border-white/15 hover:border-cyan-400/60 shadow-xl text-white hover:-translate-y-0.5 active:scale-[0.98]"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="px-2 py-0.5 rounded-md bg-cyan-500/15 border border-cyan-400/25 text-cyan-300 font-heading font-black text-xs">
                              {col.code}
                            </span>
                            <span className="text-xs text-slate-300 font-medium">Estd. {col.estd}</span>
                          </div>

                          <h3 className="font-heading text-sm sm:text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                            {col.name}
                          </h3>

                          <p className="text-xs text-slate-200 mt-1 flex items-center gap-1 font-medium">
                            <MapPin size={13} className="text-cyan-400" /> {col.location}, Bihar
                          </p>
                        </div>

                        <div className="mt-4 pt-2 border-t border-white/10 text-slate-200 group-hover:text-cyan-300 flex items-center justify-between text-xs font-bold">
                          <span>View Cutoff &amp; Campus Info</span>
                          <ArrowRight size={13} className="group-hover:translate-x-1.5 transition-transform" />
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
                    <span className="text-xs text-slate-200 font-medium">
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {beuNotices.length > 0 ? (
                      beuNotices.slice(0, 6).map((notice, idx) => (
                        <a
                          key={notice.id || idx}
                          href={notice.pdfUrl || (notice.link && notice.link.startsWith('http') ? notice.link : `https://beu-bih.ac.in/backend/${encodeURI(notice.link || '')}`)}
                          target="_blank"
                          rel="noreferrer"
                          className="p-5 rounded-2xl flex flex-col justify-between group bg-black/20 hover:bg-white/5 border border-white/15 hover:border-cyan-400/60 shadow-xl text-white transition-all hover:-translate-y-0.5 active:scale-[0.98]"
                        >
                          <div>
                            <div className="flex items-center justify-between gap-2 mb-2">
                              <span className="px-2 py-0.5 rounded-md bg-emerald-500 text-slate-950 text-[10px] font-bold tracking-wide animate-pulse">
                                CIRCULAR
                              </span>
                              <span className="text-[11px] text-slate-300 font-semibold flex items-center gap-1">
                                <Calendar size={12} className="text-slate-300" />
                                {notice.date || notice.noticedate || 'Recent'}
                              </span>
                            </div>

                            <h3 className="font-heading text-xs sm:text-sm font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-3 leading-snug">
                              {notice.title || notice.board}
                            </h3>
                          </div>

                          <div className="mt-4 pt-2 border-t border-white/10 text-cyan-400 flex items-center justify-between text-xs font-bold">
                            <span>View Official PDF</span>
                            <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          </div>
                        </a>
                      ))
                    ) : (
                      <div className="col-span-full p-8 rounded-xl text-center border-white/10 text-slate-300 text-xs border">
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
                      <div key={i} className="rounded-2xl overflow-hidden bg-black/25 border border-white/15 text-white shadow-md transition-all">
                        <button
                          onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                          className="w-full flex items-center justify-between p-4 text-left cursor-pointer"
                        >
                          <h3 className="text-xs sm:text-sm font-bold text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)] pr-4">{faq.q}</h3>
                          <div className="shrink-0 text-cyan-400">
                            {openFaqIndex === i ? <Minus size={16} /> : <Plus size={16} />}
                          </div>
                        </button>
                        {openFaqIndex === i && (
                          <div className="px-4 pb-4 text-slate-200 border-white/10 drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)] text-xs leading-relaxed font-medium border-t pt-3">
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
        <section className="py-8 sm:py-12 px-4 sm:px-6 md:px-12 relative z-10 border-t border-white/10 text-white">
          <div className="container mx-auto max-w-5xl text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-cyan-300 text-xs font-bold mb-3 shadow-xs">
              <Heart size={14} className="fill-cyan-400 text-cyan-400" /> Student Powered
            </div>
            
            <h2 className="font-heading text-xl sm:text-2xl font-black text-white drop-shadow-md">
              Platform Wall of Fame
            </h2>
            <p className="text-xs text-slate-200 max-w-xl mx-auto mt-2 mb-6 font-medium">
              Apna College Bihar is 100% free with zero paywalls. Heartfelt thanks to students who contribute to keeping our servers running!
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto mb-6">
              {topDonors.map((donor, idx) => (
                <div key={idx} className="bg-black/25 border border-white/15 text-white shadow-lg p-3.5 rounded-2xl text-center">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 border-blue-400/30 text-cyan-300 font-bold text-sm mx-auto flex items-center justify-center mb-1.5 shadow-xs">
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
              className="btn-primary gap-2 py-2.5 px-5 text-xs font-bold"
            >
              <Heart size={14} className="fill-white" /> Contribute via UPI
            </button>
          </div>
        </section>

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
