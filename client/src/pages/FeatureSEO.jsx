import React from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../components/SEO';
import StudyDashboard from './StudyDashboard';
import Group from './Group';
import StudyResources from './StudyResources';
import ScientificCalc from './ScientificCalc';
import PersonalManager from './PersonalManager';

// Feature Config - maps URL slug to component and SEO data
const featureConfig = {
  'focus-timer': {
    title: 'Focus Mode & Study Timer for Engineering Students',
    description: 'Pomodoro-based Focus Timer for Bihar Engineering (BEU) students. Set study goals, track sessions, block distracting apps and build study streaks.',
    keywords: 'Pomodoro Timer Students, Study Timer Online, Focus Mode App, Engineering Study Timer, BEU Study Session',
    color: 'from-rose-600 to-orange-600',
    icon: '⏱️',
    component: StudyDashboard,
    tab: 'timer',
  },
  'study-groups': {
    title: 'Online Study Groups for Bihar Engineering Students',
    description: 'Join or create study groups with fellow BEU students. Discuss doubts, share resources and study together online.',
    keywords: 'Study Group Online, BEU Study Network, Engineering Study Group Bihar, Group Discussion Students',
    color: 'from-blue-600 to-cyan-600',
    icon: '👥',
    component: Group,
  },
  'study-resources': {
    title: 'Free Engineering Study Resources & Links',
    description: 'Access and share verified free study material, YouTube links, PDFs, and guides for Bihar Engineering University (BEU) students.',
    keywords: 'Free Engineering Study Material, BEU Study Resources, Engineering Notes Links, Free BEU Resources',
    color: 'from-cyan-600 to-teal-600',
    icon: '📎',
    component: StudyResources,
  },
  'calculator': {
    title: 'Scientific Calculator for Engineering Students Online',
    description: 'Free online Scientific Calculator with matrix operations, trigonometry, logarithms and more. Specially designed for Bihar Engineering students.',
    keywords: 'Scientific Calculator Online, Engineering Calculator, Matrix Calculator Online, BEU Calculator',
    color: 'from-emerald-600 to-green-600',
    icon: '🔢',
    component: ScientificCalc,
  },
  'personal-manager': {
    title: 'Personal Study Manager & Planner for BEU Students',
    description: 'Manage your study schedule, set targets, track personal goals and organize your engineering semester plan.',
    keywords: 'Study Planner Students, Personal Manager Engineering, BEU Study Schedule, Semester Planner Bihar Engineering',
    color: 'from-violet-600 to-purple-600',
    icon: '📋',
    component: PersonalManager,
  },
};

// Keyword → Human Title Map for SEO
const keywordTitleMap = {
  // Focus Timer
  'pomodoro-timer-for-students': 'Pomodoro Timer for Engineering Students',
  'study-timer-online': 'Study Timer Online – Free Focus Timer',
  'focus-mode-for-students': 'Focus Mode for Students – Block Distractions',
  '25-minute-study-timer': '25 Minute Pomodoro Study Timer Online',
  'engineering-student-study-timer': 'Engineering Student Study Timer & Tracker',
  'study-streak-tracker': 'Study Streak Tracker for BEU Students',
  'daily-study-goal-tracker': 'Daily Study Goal Tracker – Bihar Engineering',
  'deep-work-timer-students': 'Deep Work Timer for Students',
  'beu-focus-mode': 'BEU Focus Mode – Distraction Free Study',
  'study-session-tracker': 'Study Session Tracker Online',
  // App Blocker  
  'app-blocker-for-students': 'App Blocker for Students – Android',
  'study-app-blocker-android': 'Study App Blocker Android – Block Apps While Studying',
  'distraction-blocker-students': 'Distraction Blocker for Engineering Students',
  'block-social-media-studying': 'Block Social Media While Studying App',
  'android-app-blocker-engineering': 'Android App Blocker for Engineering Students',
  'apna-college-bihar-app': 'Apna College Bihar App Download – Android',
  'apna-college-bihar-apk-download': 'Apna College Bihar APK Download',
  // Study Groups
  'online-study-group-engineers': 'Online Study Group for Engineering Students Bihar',
  'beu-student-study-group': 'BEU Student Study Group Online',
  'engineering-study-network-bihar': 'Engineering Study Network Bihar',
  'study-discussion-group-bihar': 'Study Discussion Group for Bihar Engineering',
  'online-study-partner-beu': 'Find Online Study Partner – BEU Bihar',
  'study-community-engineering': 'Study Community for Engineering Students Bihar',
  'group-study-app-students': 'Group Study App for Bihar Engineering Students',
  // Calculator
  'scientific-calculator-engineering': 'Scientific Calculator for Engineering Students',
  'matrix-calculator-online': 'Matrix Calculator Online – Engineering Math',
  'trigonometry-calculator-engineering': 'Trigonometry Calculator for BEU Students',
  'engineering-mathematics-calculator': 'Engineering Mathematics Calculator Online',
  'free-scientific-calculator-online': 'Free Scientific Calculator Online',
  // Personal Manager
  'study-planner-engineering': 'Study Planner for Engineering Students',
  'semester-study-plan-beu': 'Semester Study Plan for BEU Students',
  'engineering-study-schedule': 'Engineering Study Schedule Maker Online',
  'beu-student-planner': 'BEU Student Personal Planner',
  'exam-preparation-planner': 'Exam Preparation Planner – Bihar Engineering',
  // Study Resources
  'free-beu-study-material': 'Free BEU Study Material & Resources',
  'engineering-notes-free-download': 'Engineering Notes Free Download – BEU Bihar',
  'beu-youtube-resources': 'BEU YouTube Study Resources',
  'free-engineering-pdf-notes': 'Free Engineering PDF Notes – Bihar Engineering',
};

export default function FeatureSEO() {
  const { feature, keyword } = useParams();
  const config = featureConfig[feature] || featureConfig['focus-timer'];
  const ToolComponent = config.component;

  const decoded = decodeURIComponent(keyword || '').replace(/-/g, ' ');
  const humanTitle = keywordTitleMap[keyword] || `${decoded} | Apna College Bihar`;

  const seoTitle = keyword
    ? `${humanTitle} | Apna College Bihar`
    : `${config.title} | Apna College Bihar`;

  const seoUrl = `https://www.apnacollegebihar.online/feature/${feature}${keyword ? '/' + keyword : ''}`;

  return (
    <div className="min-h-screen bg-slate-50">
      <SEO
        title={seoTitle}
        description={`${config.description}${decoded ? ' Related: ' + decoded + '.' : ''}`}
        keywords={`${config.keywords}${decoded ? ', ' + decoded : ''}`}
        noindex={!!keyword}
      />
      {/* SEO Breadcrumb */}
      <div className={`bg-gradient-to-r ${config.color} text-white px-4 py-3`}>
        <div className="max-w-5xl mx-auto flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest flex-wrap">
          <Link to="/" className="opacity-70 hover:opacity-100 transition-opacity">Home</Link>
          <span className="opacity-40">›</span>
          <Link to="/hub" className="opacity-70 hover:opacity-100 transition-opacity">App Hub</Link>
          <span className="opacity-40">›</span>
          <span>{config.icon} {config.title.split(' – ')[0].split(' for ')[0]}</span>
          {keyword && (
            <>
              <span className="opacity-40">›</span>
              <span className="opacity-80 capitalize">{decoded}</span>
            </>
          )}
        </div>
      </div>

      <ToolComponent />
    </div>
  );
}
