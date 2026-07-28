import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Calculator, Timer, Users, ArrowRight, CheckCircle, GraduationCap, Globe, Zap, Flame, Calendar, Sparkles, FileText, Library, Send, Clock, ChevronRight } from 'lucide-react';
import { collection, getCountFromServer } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../context/AuthContext';
import SEO from '../components/SEO';

export default function HomeOverview() {
  const { user } = useAuth();
  const [stats, setStats] = useState({ users: 5000, docs: 100, groups: 24 });
  const [loadingStats, setLoadingStats] = useState(true);
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Good Morning');
    else if (hour < 18) setGreeting('Good Afternoon');
    else setGreeting('Good Evening');

    const fetchCounts = async () => {
      try {
        const usersSnap = await getCountFromServer(collection(db, 'users'));
        const docsSnap = await getCountFromServer(collection(db, 'documents'));
        setStats(s => ({ ...s, users: usersSnap.data().count || 5000, docs: docsSnap.data().count || 100 }));
      } catch (error) {
        console.error("Error fetching stats:", error);
      } finally {
        setLoadingStats(false);
      }
    };

    fetchCounts();
  }, []);

  const quickLinks = [
    { title: 'Syllabus', desc: 'Check your semester syllabus', path: '/syllabus', icon: Library, color: 'text-indigo-500', bg: 'bg-indigo-500/10' },
    { title: 'B.Tech Notes', desc: 'Premium handwritten notes', path: '/notes', icon: BookOpen, color: 'text-blue-500', bg: 'bg-blue-500/10' },
    { title: 'PYQ Papers', desc: 'Previous year question papers', path: '/pyq', icon: FileText, color: 'text-rose-500', bg: 'bg-rose-500/10' },
    { title: 'Timetable', desc: 'Live class tracking', path: '/timetable', icon: Calendar, color: 'text-amber-500', bg: 'bg-amber-500/10' },
    { title: 'Study Timer', desc: 'Focus & track sessions', path: '/study', icon: Timer, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
    { title: 'UGEAC Predictor', desc: 'College allotment tool', path: '/ugeac-predictor', icon: Send, color: 'text-purple-500', bg: 'bg-purple-500/10' }
  ];

  return (
    <div className="space-y-6 pb-8">
      <SEO title="Home Overview | Apna College Bihar" url={window.location.href} />
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[2rem] p-6 md:p-8 text-white relative overflow-hidden shadow-2xl shadow-blue-600/20 transition-transform duration-300 hover:scale-[1.01]">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mt-20 -mr-20"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-indigo-400/20 rounded-full blur-2xl -mb-10 -ml-10"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles size={16} className="text-blue-200 animate-pulse" />
            <span className="text-xs font-black uppercase tracking-widest text-blue-200">Overview Panel</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-[1000] tracking-tight mb-2">
            {greeting}, {user?.name !== 'Scholar' && user?.name ? user.name.split(' ')[0] : 'Scholar'}! 👋
          </h1>
          <p className="text-blue-100 text-sm md:text-base max-w-xl font-medium">
            Ready to conquer today's goals? Access your classes, notes, and study tools below to stay ahead in your semester.
          </p>
        </div>
      </div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-3">
            <Users size={20} className="text-blue-600" />
          </div>
          {loadingStats ? (
            <div className="h-8 w-20 bg-slate-200 animate-pulse rounded mb-1"></div>
          ) : (
            <p className="text-2xl font-[1000] text-slate-900">{stats.users}+</p>
          )}
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Active Students</p>
        </div>
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center mb-3">
            <BookOpen size={20} className="text-emerald-600" />
          </div>
          {loadingStats ? (
            <div className="h-8 w-16 bg-slate-200 animate-pulse rounded mb-1"></div>
          ) : (
            <p className="text-2xl font-[1000] text-slate-900">{stats.docs}+</p>
          )}
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Study Resources</p>
        </div>
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center mb-3">
            <Flame size={20} className="text-purple-600" />
          </div>
          <p className="text-2xl font-[1000] text-slate-900">10k+</p>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Study Hours</p>
        </div>
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center mb-3">
            <CheckCircle size={20} className="text-rose-600" />
          </div>
          <p className="text-2xl font-[1000] text-slate-900">Top 1%</p>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Bihar Study Network</p>
        </div>
      </div>

      {/* Dynamic Section: Today's Focus */}
      <div className="bg-white border border-slate-200 rounded-2xl p-1 shadow-sm mt-6 hover:shadow-md transition-all">
        <Link to="/timetable" className="flex items-center justify-between p-4 md:p-5 hover:bg-slate-50 transition-colors rounded-xl group">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
              <Clock className="text-amber-600" size={24} />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-black uppercase tracking-widest text-amber-600 bg-amber-100 px-2 py-0.5 rounded-full">Today's Focus</span>
              </div>
              <h3 className="text-base font-bold text-slate-900">Check Your Timetable</h3>
              <p className="text-sm text-slate-500 font-medium">Stay on top of your upcoming lectures and labs.</p>
            </div>
          </div>
          <div className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-400 group-hover:bg-amber-500 group-hover:text-white group-hover:border-amber-500 transition-all">
             <ChevronRight size={20} />
          </div>
        </Link>
      </div>

      <div className="mt-8 mb-4">
        <h2 className="text-sm font-[1000] text-slate-900 uppercase tracking-widest mb-4 flex items-center gap-2">
          <Zap size={16} className="text-blue-500" /> Quick Access Hub
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {quickLinks.map((link) => (
            <Link 
              key={link.title}
              to={link.path}
              className="group bg-white border border-slate-200 hover:border-blue-500/50 rounded-2xl p-5 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col h-full"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${link.bg} group-hover:scale-110 transition-transform duration-300`}>
                  <link.icon size={24} className={link.color} />
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 text-slate-400 shadow-sm">
                  <ArrowRight size={16} />
                </div>
              </div>
              <h3 className="text-sm font-[1000] text-slate-900 tracking-tight">{link.title}</h3>
              <p className="text-xs text-slate-500 font-medium mt-1 flex-grow">{link.desc}</p>
            </Link>
          ))}
        </div>
      </div>
      
    </div>
  );
}
