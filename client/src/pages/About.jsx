import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, GraduationCap, Send, BookOpen, Timer, Users, Calculator, Shield, Award, Sparkles, Heart } from 'lucide-react';

export default function About() {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Send size={24} className="text-emerald-400" />,
      title: "UGEAC Counselling Predictor",
      desc: "Advanced predictive analytics mapping your JEE Main rank and category against historical BCECEB cutoffs to forecast your ideal engineering college in Bihar."
    },
    {
      icon: <BookOpen size={24} className="text-blue-400" />,
      title: "Comprehensive Notes & PYQs",
      desc: "A highly structured, semester-wise repository of premium lecture notes, study materials, and Previous Year Question (PYQ) papers tailored for BEU syllabus."
    },
    {
      icon: <GraduationCap size={24} className="text-cyan-400" />,
      title: "BEU CGPA & SGPA Calculator",
      desc: "Instant, error-free academic performance tracking designed strictly according to Bihar Engineering University grading algorithms and credit structures."
    },
    {
      icon: <Timer size={24} className="text-indigo-400" />,
      title: "Focus Zone & Study Protocol",
      desc: "Built-in Pomodoro timers, stopwatch tracking, daily study goals, and streak counters to eliminate distractions and supercharge academic productivity."
    },
    {
      icon: <Users size={24} className="text-orange-400" />,
      title: "Scholarly Study Network",
      desc: "Collaborative peer-to-peer discussion groups allowing engineering students across Bihar to connect, share insights, and solve complex problems together."
    },
    {
      icon: <Calculator size={24} className="text-rose-400" />,
      title: "Advanced Scientific Calculator",
      desc: "Full-fledged digital scientific calculator equipped with trigonometric, logarithmic, and complex mathematical functions for real-time problem solving."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0f1d] text-white font-['Inter'] selection:bg-blue-500/30 pb-24">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-[#0a0f1d]/90 backdrop-blur-xl border-b border-white/10 px-6 py-4 flex items-center justify-between shadow-2xl">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group">
          <div className="p-2 bg-white/5 group-hover:bg-blue-600/20 border border-white/10 rounded-xl transition-all">
            <ChevronLeft size={20} className="text-blue-400" />
          </div>
          <span className="text-[10px] font-black uppercase tracking-widest">Back</span>
        </button>
        <div className="flex items-center gap-3">
          <img src="/logo-acb.png?v=99" alt="ACB Logo" className="w-8 h-8 rounded-xl border border-white/10 shadow-lg object-cover" />
          <span className="text-[10px] font-black tracking-tighter uppercase text-slate-200">ACB Hub</span>
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-4xl mx-auto px-6 pt-12 space-y-16 animate-in fade-in duration-500">
        <div className="text-center space-y-6">
          <div className="inline-flex p-4 bg-blue-600/10 border border-blue-500/20 text-blue-400 rounded-3xl shadow-2xl mb-2 animate-bounce">
            <GraduationCap size={40} />
          </div>
          <div className="space-y-2">
            <p className="text-[10px] font-black text-blue-400 uppercase tracking-[0.4em]">Official Study Engine</p>
            <h1 className="text-3xl md:text-6xl font-[1000] text-white tracking-tighter uppercase leading-none">
              About Apna College Bihar
            </h1>
          </div>
          <p className="text-sm md:text-base font-medium text-slate-300 max-w-2xl mx-auto leading-relaxed pt-2">
            Apna College Bihar (ACB) is the ultimate digital academic hub and state-of-the-art study companion built exclusively for engineering students across Bihar. Our mission is to democratize high-quality technical education resources and streamline exam preparation.
          </p>
        </div>

        {/* Vision & Backbone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#0d1526] border border-white/10 rounded-[2.5rem] p-8 md:p-10 shadow-2xl space-y-4 relative overflow-hidden group hover:border-blue-500/50 transition-all">
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl group-hover:bg-blue-600/20 transition-all"></div>
            <div className="flex items-center gap-3 text-blue-400">
              <Sparkles size={28} />
              <h2 className="text-xl font-[1000] uppercase tracking-tight text-white">Our Vision</h2>
            </div>
            <p className="text-xs md:text-sm font-medium text-slate-300 leading-relaxed pt-2">
              We envision a highly empowered community of engineering scholars in Bihar where no student struggles for accurate counselling guidance, organized notes, or productivity tools. ACB acts as a single, centralized bridge connecting academic ambition with top-tier university performance.
            </p>
          </div>

          <div className="bg-[#0d1526] border border-white/10 rounded-[2.5rem] p-8 md:p-10 shadow-2xl space-y-4 relative overflow-hidden group hover:border-emerald-500/50 transition-all">
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-emerald-600/10 rounded-full blur-3xl group-hover:bg-emerald-600/20 transition-all"></div>
            <div className="flex items-center gap-3 text-emerald-400">
              <Shield size={28} />
              <h2 className="text-xl font-[1000] uppercase tracking-tight text-white">Institutional Backbone</h2>
            </div>
            <p className="text-xs md:text-sm font-medium text-slate-300 leading-relaxed pt-2">
              Proudly rooted in the academic excellence of <strong className="text-white">GEC SHEIKHPURA</strong>, Apna College Bihar represents the collective dedication of passionate engineering scholars, visionary mentors, and student developers committed to elevating Bihar's engineering landscape.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="space-y-8 pt-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl md:text-4xl font-[1000] uppercase tracking-tighter text-white">
              Everything You Need in One Hub
            </h2>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Explore the powerful modules powering ACB</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <div key={i} className="bg-[#0d1526] border border-white/5 hover:border-white/20 rounded-[2rem] p-8 shadow-xl space-y-4 transition-all hover:-translate-y-1 group">
                <div className="p-3 bg-[#152036] rounded-2xl w-fit group-hover:scale-110 transition-transform">
                  {f.icon}
                </div>
                <h3 className="text-lg font-[1000] uppercase tracking-tight text-white">{f.title}</h3>
                <p className="text-xs font-medium text-slate-300 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Community & Dev Info */}
        <div className="bg-gradient-to-r from-blue-900/40 via-[#0d1526] to-purple-900/40 border border-blue-500/30 rounded-[3rem] p-10 md:p-14 shadow-2xl text-center space-y-6 relative overflow-hidden">
          <div className="w-16 h-16 bg-blue-600 text-white rounded-[2rem] flex items-center justify-center mx-auto shadow-lg shadow-blue-600/30">
            <Award size={32} />
          </div>
          <div className="space-y-3 max-w-xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-[1000] uppercase tracking-tighter text-white">Built by Scholars, For Scholars</h3>
            <p className="text-xs md:text-sm font-medium text-slate-300 leading-relaxed">
              Apna College Bihar is continuously refined and maintained by active engineering students who understand the exact hurdles of BEU exams, semester timelines, and UGEAC counselling. 
            </p>
          </div>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#152036] border border-white/10 rounded-2xl text-xs font-black uppercase tracking-widest text-slate-200 shadow-md">
            <span>Made with</span> <Heart size={14} className="text-red-500 animate-pulse" /> <span>in Bihar</span>
          </div>
        </div>

        {/* Footer info */}
        <div className="text-center pt-8 border-t border-white/10 space-y-3 pb-12">
          <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">GEC SHEIKHPURA - APNA COLLEGE BIHAR</p>
          <p className="text-[9px] font-bold text-slate-600">Empowering Bihar Engineering University Students Across the State</p>
        </div>
      </div>
    </div>
  );
}
