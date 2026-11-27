import React from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Attendance from './Attendance';
import Timetable from './Timetable';
import BeuCgpa from './BeuCgpa';

const toolConfig = {
  attendance: {
    title: 'BEU Attendance Calculator',
    description: 'Calculate your attendance percentage for Bihar Engineering University (BEU). Check minimum attendance required, shortfall, and track branch-wise attendance.',
    keywords: 'BEU Attendance Calculator, Bihar Engineering Attendance, 75% attendance calculator BEU, engineering attendance shortfall',
    color: 'from-emerald-600 to-teal-600',
    component: Attendance,
  },
  timetable: {
    title: 'BEU Timetable 2025',
    description: 'View and manage your Bihar Engineering University (BEU) class timetable, exam schedule, and semester-wise time table for all branches.',
    keywords: 'BEU Timetable 2025, Bihar Engineering Timetable, BEU Exam Schedule, BEU Class Schedule',
    color: 'from-sky-600 to-cyan-600',
    component: Timetable,
  },
  cgpa: {
    title: 'BEU SGPA/CGPA Calculator',
    description: 'Calculate SGPA and CGPA for Bihar Engineering University (BEU) students. Convert marks to grade points, track semester-wise GPA.',
    keywords: 'BEU CGPA Calculator, BEU SGPA Calculator, Bihar Engineering CGPA, SGPA to CGPA converter BEU',
    color: 'from-blue-600 to-indigo-600',
    component: BeuCgpa,
  },
};

// keyword → human readable title map
const keywordTitleMap = {
  // Attendance
  'beu-attendance-calculator': 'BEU Attendance Calculator 2025',
  'attendance-percentage-calculator': 'Attendance Percentage Calculator for BEU',
  'bihar-engineering-attendance': 'Bihar Engineering Attendance Tracker',
  '75-percent-attendance-calculator': '75% Minimum Attendance Calculator – BEU',
  'attendance-shortfall-calculator': 'Attendance Shortfall Calculator BEU',
  'cse-attendance-calculator': 'CSE Branch Attendance Calculator – BEU',
  'civil-attendance-calculator': 'Civil Engineering Attendance Calculator – BEU',
  'mechanical-attendance-calculator': 'Mechanical Engineering Attendance – BEU',
  'electrical-attendance-calculator': 'Electrical Engineering Attendance – BEU',
  'ece-attendance-calculator': 'ECE Branch Attendance Calculator – BEU',
  // Timetable
  'beu-timetable-2025': 'BEU Timetable 2025 – All Branches',
  'beu-exam-schedule-2025': 'BEU Exam Schedule 2025',
  'beu-class-timetable': 'BEU Class Timetable – Semester Wise',
  'cse-timetable-beu': 'CSE Timetable BEU 2025',
  'civil-timetable-beu': 'Civil Engineering Timetable BEU',
  'mechanical-timetable-beu': 'Mechanical Timetable BEU 2025',
  'beu-semester-schedule': 'BEU Semester-wise Schedule 2025',
  // CGPA
  'beu-cgpa-calculator': 'BEU CGPA Calculator – Accurate Grade Calculator',
  'beu-sgpa-calculator': 'BEU SGPA Calculator – Semester GPA',
  'sgpa-to-cgpa-converter': 'SGPA to CGPA Converter for BEU Students',
  'beu-grade-calculator': 'BEU Grade Point Calculator',
  'beu-marks-to-cgpa': 'BEU Marks to CGPA Conversion',
  'bihar-engineering-cgpa': 'Bihar Engineering CGPA Tracker',
  'cse-cgpa-calculator-beu': 'CSE CGPA Calculator – BEU',
  'civil-cgpa-calculator-beu': 'Civil Engineering CGPA Calculator BEU',
};

export default function BeuToolSEO() {
  const { tool, keyword } = useParams();
  const config = toolConfig[tool] || toolConfig.attendance;
  const ToolComponent = config.component;

  const decoded = decodeURIComponent(keyword || '').replace(/-/g, ' ');
  const humanTitle = keywordTitleMap[keyword] || `${decoded} | Apna College Bihar`;

  const seoTitle = keyword
    ? `${humanTitle} | Apna College Bihar`
    : `${config.title} | Apna College Bihar`;

  const seoDesc = `${config.description} Search: ${decoded}.`;
  const seoKeywords = `${config.keywords}, ${decoded}, BEU 2025, Bihar Engineering`;
  const seoUrl = `https://www.apnacollegebihar.online/beu/${tool}${keyword ? '/' + keyword : ''}`;

  return (
    <div className="min-h-screen bg-slate-50">
      <SEO
        title={seoTitle}
        description={seoDesc}
        keywords={seoKeywords}
        noindex={!!keyword}
      />
      {/* SEO Breadcrumb header – lightweight, helps Google understand context */}
      <div className={`bg-gradient-to-r ${config.color} text-white px-4 py-3`}>
        <div className="max-w-5xl mx-auto flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest">
          <Link to="/" className="opacity-70 hover:opacity-100 transition-opacity">Home</Link>
          <span className="opacity-40">›</span>
          <Link to="/hub" className="opacity-70 hover:opacity-100 transition-opacity">App Hub</Link>
          <span className="opacity-40">›</span>
          <span>{config.title}</span>
          {keyword && (
            <>
              <span className="opacity-40">›</span>
              <span className="opacity-80 capitalize">{decoded}</span>
            </>
          )}
        </div>
      </div>

      {/* Actual Tool Component */}
      <ToolComponent />
    </div>
  );
}
