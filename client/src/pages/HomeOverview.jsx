import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Calculator, Timer, Users, ArrowRight, CheckCircle, GraduationCap, Globe, Zap, Flame, Calendar, Sparkles, FileText, Library, Send } from 'lucide-react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../context/AuthContext';

export default function HomeOverview() {
  const { user } = useAuth();
  const [stats, setStats] = useState({ users: 5000, docs: 100, groups: 24 });
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Good Morning');
    else if (hour < 18) setGreeting('Good Afternoon');
    else setGreeting('Good Evening');

    const unsubUsers = onSnapshot(collection(db, 'users'), (snap) => setStats(s => ({ ...s, users: snap.size }))); 
    const unsubDocs = onSnapshot(collection(db, 'documents'), (snap) => setStats(s => ({ ...s, docs: snap.size })));
    return () => { unsubUsers(); unsubDocs(); };
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
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[2rem] p-6 md:p-8 text-white relative overflow-hidden shadow-2xl shadow-blue-600/20">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mt-20 -mr-20"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles size={16} className="text-blue-200" />
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
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-3">
            <Users size={20} className="text-blue-600" />
          </div>
          <p className="text-2xl font-[1000] text-slate-900">{stats.users}+</p>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Active Students</p>
        </div>
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center mb-3">
            <BookOpen size={20} className="text-emerald-600" />
          </div>
          <p className="text-2xl font-[1000] text-slate-900">{stats.docs}+</p>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Study Resources</p>
        </div>
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center mb-3">
            <Flame size={20} className="text-purple-600" />
          </div>
          <p className="text-2xl font-[1000] text-slate-900">10k+</p>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Study Hours</p>
        </div>
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center mb-3">
            <CheckCircle size={20} className="text-rose-600" />
          </div>
          <p className="text-2xl font-[1000] text-slate-900">Top 1%</p>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Bihar Study Network</p>
        </div>
      </div>

      <div className="mt-8 mb-4">
        <h2 className="text-sm font-[1000] text-slate-900 uppercase tracking-widest mb-4 flex items-center gap-2">
          <Zap size={16} className="text-blue-500" /> Quick Access Hub
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {quickLinks.map((link) => (
            <Link 
              key={link.title}
              to={link.path}
              className="group bg-white border border-slate-200 hover:border-blue-500/50 rounded-2xl p-5 shadow-sm transition-all hover:shadow-lg"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${link.bg}`}>
                  <link.icon size={24} className={link.color} />
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors text-slate-400">
                  <ArrowRight size={16} />
                </div>
              </div>
              <h3 className="text-sm font-[1000] text-slate-900 tracking-tight">{link.title}</h3>
              <p className="text-xs text-slate-500 font-medium mt-1">{link.desc}</p>
            </Link>
          ))}
        </div>
      </div>
      
          </div>
  );
}
