import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, GraduationCap, Send, BookOpen, Timer, Users, Calculator, Shield, Award, Sparkles, Heart } from 'lucide-react';
import SEO from '../components/SEO';

export default function About() {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Send size={24} className="text-emerald-600" />,
      title: "UGEAC Counselling Predictor",
      desc: "Advanced predictive analytics mapping your JEE Main rank and category against historical BCECEB cutoffs to forecast your ideal engineering college in Bihar."
    },
    {
      icon: <BookOpen size={24} className="text-blue-600" />,
      title: "Comprehensive Notes & PYQs",
      desc: "A highly structured, semester-wise repository of premium lecture notes, study materials, and Previous Year Question (PYQ) papers tailored for BEU syllabus."
    },
    {
      icon: <GraduationCap size={24} className="text-cyan-600" />,
      title: "BEU CGPA & SGPA Calculator",
      desc: "Instant, error-free academic performance tracking designed strictly according to Bihar Engineering University grading algorithms and credit structures."
    },
    {
      icon: <Timer size={24} className="text-indigo-600" />,
      title: "Focus Zone & Study Protocol",
      desc: "Built-in Pomodoro timers, stopwatch tracking, daily study goals, and streak counters to eliminate distractions and supercharge academic productivity."
    },
    {
      icon: <Users size={24} className="text-orange-600" />,
      title: "Scholarly Study Network",
      desc: "Collaborative peer-to-peer discussion groups allowing engineering students across Bihar to connect, share insights, and solve complex problems together."
    },
    {
      icon: <Calculator size={24} className="text-rose-600" />,
      title: "Advanced Scientific Calculator",
      desc: "Full-fledged digital scientific calculator equipped with trigonometric, logarithmic, and complex mathematical functions for real-time problem solving."
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-['Inter'] selection:bg-blue-500/30 pb-24">
      <SEO title="About | Apna College Bihar" url={window.location.href} />
      {/* Header */}
      <div className="sticky top-0 z-50 bg-[#f8fafc]/90 backdrop-blur-xl border-b border-slate-200 px-6 py-4 flex items-center justify-between shadow-sm">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors group">
          <div className="p-2 bg-slate-100 group-hover:bg-blue-600/10 border border-slate-200 rounded-xl transition-all">
            <ChevronLeft size={20} className="text-blue-600" />
          </div>
          <span className="text-[10px] font-black uppercase tracking-widest">Back</span>
        </button>
        <div className="flex items-center gap-3">
          <img src="/logo-acb.png?v=99" alt="ACB Logo" className="w-8 h-8 rounded-xl border border-slate-200 shadow-sm object-cover" />
          <span className="text-[10px] font-black tracking-tighter uppercase text-slate-800">ACB Hub</span>
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-4xl mx-auto px-6 pt-12 space-y-16 animate-in fade-in duration-500">
        <div className="text-center space-y-6">
          <div className="inline-flex p-4 bg-blue-600/10 border border-blue-500/20 text-blue-600 rounded-3xl shadow-sm mb-2 animate-bounce">
            <GraduationCap size={40} />
          </div>
          <div className="space-y-2">
            <p className="text-[10px] font-black text-blue-600 uppercase tracking-[0.4em]">Official Study Engine</p>
            <h1 className="text-3xl md:text-6xl font-[1000] text-slate-900 tracking-tighter uppercase leading-none">
              About Apna College Bihar
            </h1>
          </div>
          <p className="text-sm md:text-base font-medium text-slate-600 max-w-2xl mx-auto leading-relaxed pt-2">
            Apna College Bihar (ACB) is the ultimate digital academic hub and state-of-the-art study companion built exclusively for engineering students across Bihar. Our mission is to democratize high-quality technical education resources and streamline exam preparation.
          </p>
        </div>

        {/* Vision & Backbone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 md:p-10 shadow-sm space-y-4 relative overflow-hidden group hover:border-blue-500/50 transition-all">
            <div className="flex items-center gap-3 text-blue-600">
              <Sparkles size={28} />
              <h2 className="text-xl font-[1000] uppercase tracking-tight text-slate-900">Our Vision</h2>
            </div>
            <p className="text-xs md:text-sm font-medium text-slate-600 leading-relaxed pt-2">
              We envision a highly empowered community of engineering scholars in Bihar where no student struggles for accurate counselling guidance, organized notes, or productivity tools. ACB acts as a single, centralized bridge connecting academic ambition with top-tier university performance.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 md:p-10 shadow-sm space-y-4 relative overflow-hidden group hover:border-emerald-500/50 transition-all">
            <div className="flex items-center gap-3 text-emerald-600">
              <Shield size={28} />
              <h2 className="text-xl font-[1000] uppercase tracking-tight text-slate-900">Institutional Backbone</h2>
            </div>
            <p className="text-xs md:text-sm font-medium text-slate-600 leading-relaxed pt-2">
              Proudly rooted in the academic excellence of <strong className="text-slate-900">BEU</strong>, Apna College Bihar represents the collective dedication of passionate engineering scholars, visionary mentors, and student developers committed to elevating Bihar's engineering landscape.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="space-y-8 pt-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl md:text-4xl font-[1000] uppercase tracking-tighter text-slate-900">
              Everything You Need in One Hub
            </h2>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Explore the powerful modules powering ACB</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-[2rem] p-8 shadow-sm space-y-4 transition-all hover:-translate-y-1 group">
                <div className="p-3 bg-slate-50 border border-slate-200/60 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                  {f.icon}
                </div>
                <h3 className="text-lg font-[1000] uppercase tracking-tight text-slate-900">{f.title}</h3>
                <p className="text-xs font-medium text-slate-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* EEAT & Editorial Policy */}
        <div className="bg-white border border-slate-200 rounded-[3rem] p-10 md:p-14 shadow-sm space-y-8 relative overflow-hidden group hover:border-indigo-500/50 transition-all">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1 space-y-4">
              <div className="flex items-center gap-3 text-indigo-600">
                <BookOpen size={28} />
                <h2 className="text-xl font-[1000] uppercase tracking-tight text-slate-900">Editorial Policy & Quality Assurance</h2>
              </div>
              <p className="text-xs md:text-sm font-medium text-slate-600 leading-relaxed pt-2">
                At Apna College Bihar, we enforce strict editorial guidelines. All our educational content, including BEU notes, syllabus breakdowns, and counselling guides, is meticulously curated, fact-checked, and reviewed by subject matter experts. We rely exclusively on official data released by Bihar Engineering University (BEU) and BCECEB to guarantee 100% accuracy and reliability.
              </p>
            </div>
            <div className="flex-1 space-y-4">
              <div className="flex items-center gap-3 text-emerald-600">
                <Shield size={28} />
                <h2 className="text-xl font-[1000] uppercase tracking-tight text-slate-900">Our Commitment to Students</h2>
              </div>
              <p className="text-xs md:text-sm font-medium text-slate-600 leading-relaxed pt-2">
                Our platform is committed to neutrality and objectivity. We do not promote bias towards any specific private engineering college. Our predictive tools and counselling advice are rooted in raw data analytics and historical counseling trends, ensuring that every engineering aspirant in Bihar receives trustworthy, data-driven academic support.
              </p>
            </div>
          </div>
        </div>

        {/* Community & Dev Info */}
        <div className="bg-white border border-slate-200 rounded-[3rem] p-10 md:p-14 shadow-sm text-center space-y-6 relative overflow-hidden">
          <div className="w-16 h-16 bg-blue-600 text-white rounded-[2rem] flex items-center justify-center mx-auto shadow-md">
            <Award size={32} />
          </div>
          <div className="space-y-3 max-w-xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-[1000] uppercase tracking-tighter text-slate-900">Built by Scholars, For Scholars</h3>
            <p className="text-xs md:text-sm font-medium text-slate-600 leading-relaxed">
              Apna College Bihar is continuously refined and maintained by active engineering students who understand the exact hurdles of BEU exams, semester timelines, and UGEAC counselling. 
            </p>
          </div>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-xs font-black uppercase tracking-widest text-slate-700 shadow-sm">
            <span>Made with</span> <Heart size={14} className="text-red-500 animate-pulse" /> <span>in Bihar</span>
          </div>
        </div>

        {/* ── Educational SEO Content (E-E-A-T Focus) ── */}
        <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-200/50 mt-12 mb-8 prose prose-slate max-w-none shadow-sm text-left">
          <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tighter mb-4">Our Mission: Transforming Technical Education in Bihar</h2>
          <p>
            The foundation of <strong>Apna College Bihar</strong> is built on a very simple premise: equal access to high-quality educational resources for every engineering student in Bihar. Historically, students entering Bihar Engineering University (BEU) from remote districts lacked the digital infrastructure, mentorship, and organized study material needed to compete at a national level. Our mission is to democratize technical education by offering 100% free B.Tech Notes, Previous Year Questions (PYQs), and comprehensive syllabus guides.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-4">Experience and Expertise (E-E-A-T)</h3>
          <p>
            Our platform is not maintained by anonymous algorithms. It is actively curated, updated, and validated by current top-performing students and alumni of premier institutions like BCE Bhagalpur, MIT Muzaffarpur, and NIT Patna. Our core team consists of software developers, technical writers, and subject matter experts who have personally navigated the rigid structures of the BEU examination system. We understand exactly what examiners look for, which subjects require numerical focus, and how to effectively decode the BEU Syllabus. This hands-on, lived experience ensures that every PDF, note, and tool we provide is highly authoritative and trustworthy.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-4">A Commitment to Transparency and Trust</h3>
          <p>
            Trust is the cornerstone of our platform. When you download a PYQ or use our CGPA Calculator, you are using tools built with complete transparency. We strictly adhere to academic integrity—we do not promote plagiarism. Instead, we provide the foundational knowledge required for self-study. Furthermore, our dedicated admin panel rigorously reviews all community-uploaded resources before they are made public, ensuring that no student is misled by inaccurate information or outdated syllabi.
          </p>
          
          <h3 className="text-xl font-bold mt-8 mb-4">Beyond Just Academics: The Future of Bihar Engineering</h3>
          <p>
            Apna College Bihar is more than a repository for BEU Notes; it is an ecosystem. From UGEAC Counselling support for nervous freshers to advanced coding roadmaps and Hackathon directories for seniors, we are building the ultimate digital companion for the Bihar engineering community. Join us, download our app, and let us elevate the standard of technical education in our state together.
          </p>
        </div>

        {/* Footer info */}
        <div className="text-center pt-8 border-t border-slate-200 space-y-3 pb-12">
          <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">BEU - APNA COLLEGE BIHAR</p>
          <p className="text-[9px] font-bold text-slate-500">Empowering Bihar Engineering University Students Across the State</p>
        </div>
      </div>
    </div>
  );
}
