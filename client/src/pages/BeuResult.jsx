import React, { useState, useEffect, useMemo } from 'react';
import {
  Globe, ExternalLink, Copy, GraduationCap, FileText,
  RefreshCw, ShieldCheck, AlertCircle, ArrowRight, X
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { Capacitor } from '@capacitor/core';
import SEO from '../components/SEO';

const PROD_API_BASE = 'https://apna-college-bihar-6-i1fb.onrender.com';
const isLocalDev = typeof window !== 'undefined'
  && !Capacitor.isNativePlatform()
  && window.location.hostname === 'localhost'
  && Boolean(window.location.port);

const API_BASE = isLocalDev ? 'http://localhost:5000' : PROD_API_BASE;

const EXAM_TYPES = [
  { id: 'NEW', label: 'New / Regular' },
  { id: 'OLD', label: 'Old Syllabus' },
  { id: 'SUPP', label: 'Supplementary' }
];

const SEMESTERS = [1, 2, 3, 4, 5, 6, 7, 8];

export default function BeuResult() {
  const [courses, setCourses] = useState([]);
  const [loadingExams, setLoadingExams] = useState(true);
  const [loadError, setLoadError] = useState('');
  const [selectedCourseId, setSelectedCourseId] = useState('');
  const [examType, setExamType] = useState('NEW');
  const [selectedSem, setSelectedSem] = useState('');
  const [selectedExamId, setSelectedExamId] = useState('');
  const [regNo, setRegNo] = useState(() => localStorage.getItem('acb_last_reg_no') || '');
  const [activeResultUrl, setActiveResultUrl] = useState('');
  const [recentRegs, setRecentRegs] = useState(() => {
    try {
      const saved = localStorage.getItem('acb_recent_regs');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const fetchExams = async () => {
    setLoadingExams(true);
    setLoadError('');
    try {
      let coursesList = null;

      const endpoints = Array.from(new Set([
        `${API_BASE}/api/beu/result-exams`,
        `${PROD_API_BASE}/api/beu/result-exams`
      ]));

      for (const url of endpoints) {
        try {
          const res = await fetch(url);
          if (res.ok) {
            const data = await res.json();
            if (data.success && Array.isArray(data.courses) && data.courses.length > 0) {
              coursesList = data.courses;
              break;
            }
          }
        } catch {
          // Try next endpoint
        }
      }

      if (!coursesList) {
        const directRes = await fetch('https://beu-bih.ac.in/backend/v1/result/sem-get');
        if (directRes.ok) {
          const directData = await directRes.json();
          const rawCourses = Array.isArray(directData)
            ? directData
            : Array.isArray(directData?.data)
              ? directData.data
              : Array.isArray(directData?.courses)
                ? directData.courses
                : null;
          if (rawCourses && rawCourses.length > 0) {
            coursesList = rawCourses;
          }
        }
      }

      if (coursesList && coursesList.length > 0) {
        setCourses(coursesList);
        const btech = coursesList.find(c => /b\.?tech/i.test(c.courseName)) || coursesList[0];
        setSelectedCourseId(String(btech.courseid));
      } else {
        setLoadError('BEU result exam list is currently unavailable.');
      }
    } catch {
      setLoadError('Could not connect to BEU server. Check your internet connection.');
    } finally {
      setLoadingExams(false);
    }
  };

  useEffect(() => {
    fetchExams();
  }, []);

  const currentCourse = useMemo(
    () => courses.find(c => String(c.courseid) === String(selectedCourseId)) || courses[0] || null,
    [courses, selectedCourseId]
  );

  const typeFilteredExams = useMemo(() => {
    const all = currentCourse?.exams || [];
    return all.filter(ex => {
      const name = (ex.examName || '').toLowerCase();
      const isSupp = name.includes('supplementary') || name.includes('supp');
      const isOld = name.includes('(old)') || name.includes('old)');
      if (examType === 'SUPP') return isSupp;
      if (examType === 'OLD') return isOld && !isSupp;
      return !isOld && !isSupp;
    });
  }, [currentCourse, examType]);

  const availableSems = useMemo(() => {
    const set = new Set(typeFilteredExams.map(e => Number(e.semId)).filter(Boolean));
    return Array.from(set).sort((a, b) => a - b);
  }, [typeFilteredExams]);

  useEffect(() => {
    if (availableSems.length > 0 && (!selectedSem || !availableSems.includes(Number(selectedSem)))) {
      setSelectedSem(String(availableSems[0]));
    } else if (availableSems.length === 0) {
      setSelectedSem('');
    }
  }, [availableSems, selectedSem]);

  const exams = useMemo(() => {
    if (!selectedSem) return typeFilteredExams;
    return typeFilteredExams.filter(e => String(e.semId) === String(selectedSem));
  }, [typeFilteredExams, selectedSem]);

  useEffect(() => {
    if (exams.length > 0 && !exams.some(e => String(e.id) === String(selectedExamId))) {
      setSelectedExamId(String(exams[0].id));
    } else if (exams.length === 0) {
      setSelectedExamId('');
    }
  }, [exams, selectedExamId]);

  const currentExam = useMemo(
    () => exams.find(e => String(e.id) === String(selectedExamId)) || exams[0] || null,
    [exams, selectedExamId]
  );

  const buildDirectResultUrl = (exam) => {
    if (!exam) return 'https://beu-bih.ac.in/result-one';
    const payload = {
      semester: exam.semId,
      session: exam.batchYear != null ? String(exam.batchYear).trim() : '',
      exam_held: exam.examHeld != null ? String(exam.examHeld).trim() : '',
      exam_id: exam.examId != null ? String(exam.examId).trim() : ''
    };
    const encoded = btoa(JSON.stringify(payload));
    const examSlug = encodeURIComponent(exam.examName || 'Result');
    return `https://beu-bih.ac.in/result-two/${examSlug}?d=${encodeURIComponent(encoded)}`;
  };

  const handleCheckResult = async (e) => {
    e.preventDefault();
    const cleanReg = regNo.replace(/\D/g, '').trim();
    if (cleanReg.length < 8) {
      toast.error('Please enter your valid University Registration Number.');
      return;
    }
    if (!currentExam) {
      toast.error('Please select an exam / semester first.');
      return;
    }

    localStorage.setItem('acb_last_reg_no', cleanReg);
    const updatedRecent = [cleanReg, ...recentRegs.filter(r => r !== cleanReg)].slice(0, 4);
    setRecentRegs(updatedRecent);
    localStorage.setItem('acb_recent_regs', JSON.stringify(updatedRecent));

    try {
      await navigator.clipboard.writeText(cleanReg);
      toast.success('Registration No. copied! Captcha verify karke app me hi Result download karein.');
    } catch {
      toast.success('Opening BEU Result verification inside app...');
    }

    const directUrl = buildDirectResultUrl(currentExam);
    setActiveResultUrl(directUrl);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-5 pb-20">
      <SEO title="BEU Result | Apna College Bihar" />

      {/* Clean Header */}
      <div className="flex items-center justify-between gap-3">
        <div>
          <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            BEU Exam Result
          </h1>
          <p className="text-xs text-slate-500 font-medium mt-0.5">
            In-App Semester Result &amp; Official Marksheet Downloader
          </p>
        </div>
        <button
          type="button"
          onClick={fetchExams}
          disabled={loadingExams}
          className="p-2.5 rounded-xl bg-white border border-slate-200 hover:border-blue-400 text-slate-600 hover:text-blue-600 shadow-2xs"
          title="Refresh Exam List"
        >
          <RefreshCw size={16} className={loadingExams ? 'animate-spin' : ''} />
        </button>
      </div>

      {/* Structured 4-Step BEU Result Form */}
      <form
        onSubmit={handleCheckResult}
        className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-5 sm:p-6 space-y-5"
      >
        <div className="flex items-center justify-between gap-3 pb-3 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-sm">
              <GraduationCap size={20} />
            </div>
            <div>
              <h2 className="text-sm font-black text-slate-900">Check &amp; Download Marksheet</h2>
              <p className="text-[11px] text-slate-500 font-medium">
                Select Syllabus Type, Semester &amp; Registration No.
              </p>
            </div>
          </div>

          {courses.length > 1 && (
            <select
              value={selectedCourseId}
              onChange={(e) => setSelectedCourseId(e.target.value)}
              className="h-9 px-2.5 rounded-xl bg-slate-100 border border-slate-200 text-xs font-extrabold text-slate-800"
              aria-label="Course"
            >
              {courses.map(c => (
                <option key={c.courseid} value={c.courseid}>{c.courseName}</option>
              ))}
            </select>
          )}
        </div>

        {loadError && (
          <div className="p-3.5 rounded-2xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold flex items-center gap-2">
            <AlertCircle size={16} className="shrink-0" />
            <span>{loadError}</span>
          </div>
        )}

        {/* Step 1: Syllabus / Exam Type */}
        <div className="space-y-2">
          <label className="text-[11px] font-extrabold text-slate-700 uppercase tracking-wider block">
            1. Syllabus / Exam Type
          </label>
          <div className="grid grid-cols-3 gap-2">
            {EXAM_TYPES.map(t => (
              <button
                key={t.id}
                type="button"
                onClick={() => setExamType(t.id)}
                className={`py-2.5 px-1 sm:px-2 rounded-xl text-[11px] sm:text-xs font-extrabold border truncate ${
                  examType === t.id
                    ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: Semester Grid (1 to 8) */}
        <div className="space-y-2">
          <label className="text-[11px] font-extrabold text-slate-700 uppercase tracking-wider block">
            2. Select Semester
          </label>
          <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
            {SEMESTERS.map(semNum => {
              const hasExam = availableSems.includes(semNum);
              const active = Number(selectedSem) === semNum;
              return (
                <button
                  key={semNum}
                  type="button"
                  disabled={!hasExam}
                  onClick={() => setSelectedSem(String(semNum))}
                  className={`py-2.5 rounded-xl border text-center font-black text-xs ${
                    active
                      ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                      : hasExam
                        ? 'bg-slate-50 text-slate-800 border-slate-200 hover:bg-blue-50 hover:border-blue-300'
                        : 'bg-slate-50/50 text-slate-300 border-slate-100 cursor-not-allowed'
                  }`}
                >
                  Sem {semNum}
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 3: Session / Exam Selector */}
        <div className="space-y-1.5">
          <label htmlFor="beu-exam-select" className="text-[11px] font-extrabold text-slate-700 uppercase tracking-wider block">
            3. Select Session / Examination
          </label>
          <select
            id="beu-exam-select"
            value={selectedExamId}
            onChange={(e) => setSelectedExamId(e.target.value)}
            disabled={loadingExams || exams.length === 0}
            className="w-full h-12 px-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-bold text-slate-900 focus:outline-none focus:border-blue-500"
          >
            {exams.length === 0 ? (
              <option value="">{loadingExams ? 'Fetching published exams...' : 'No exams for this filter'}</option>
            ) : (
              exams.map((ex) => (
                <option key={ex.id} value={ex.id}>
                  {ex.examName} ({ex.session}) • Held {ex.examHeld}
                </option>
              ))
            )}
          </select>
        </div>

        {/* Step 4: Registration Number Input */}
        <div className="space-y-1.5">
          <label htmlFor="beu-reg-input" className="text-[11px] font-extrabold text-slate-700 uppercase tracking-wider block">
            4. Registration Number
          </label>
          <div className="relative">
            <input
              id="beu-reg-input"
              type="text"
              inputMode="numeric"
              maxLength={15}
              value={regNo}
              onChange={(e) => setRegNo(e.target.value.replace(/\D/g, ''))}
              placeholder="e.g. 23105110045"
              className="w-full h-12 pl-4 pr-12 rounded-2xl bg-slate-50 border border-slate-200 text-sm font-extrabold tracking-wider text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500"
            />
            {regNo && (
              <button
                type="button"
                onClick={() => {
                  navigator.clipboard.writeText(regNo);
                  toast.success('Registration No. copied!');
                }}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 p-2 rounded-xl text-slate-400 hover:text-blue-600 hover:bg-blue-50"
                title="Copy Registration Number"
              >
                <Copy size={15} />
              </button>
            )}
          </div>

          {recentRegs.length > 0 && (
            <div className="flex flex-wrap items-center gap-1.5 pt-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase">Recent:</span>
              {recentRegs.map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => setRegNo(r)}
                  className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-blue-700 text-[11px] font-bold"
                >
                  {r}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Submit Action */}
        <button
          type="submit"
          disabled={loadingExams || !currentExam}
          className="w-full h-12 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-md flex items-center justify-center gap-2 disabled:opacity-50"
        >
          <ShieldCheck size={17} />
          <span>Show Result &amp; Verify Captcha</span>
        </button>
      </form>

      {/* Quick Academic Helper */}
      <Link
        to="/cgpa?standalone=true"
        className="p-4 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-300 flex items-center justify-between gap-3 shadow-2xs group"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-600 border border-cyan-200/70 flex items-center justify-center">
            <FileText size={18} />
          </div>
          <div>
            <h3 className="text-xs font-black text-slate-900">SGPA / CGPA Calculator</h3>
            <p className="text-[11px] text-slate-500">Convert BEU CGPA to Percentage</p>
          </div>
        </div>
        <ArrowRight size={15} className="text-slate-400 group-hover:text-blue-600" />
      </Link>

      {/* In-App Result & Captcha Modal (Opens ONLY on form submit) */}
      {activeResultUrl && (
        <div className="fixed inset-0 z-[5000] bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4">
          <div className="bg-white w-full max-w-3xl h-[88vh] rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col">
            <div className="px-4 py-3 bg-slate-900 text-white flex items-center justify-between gap-3 shrink-0">
              <div className="flex items-center gap-2 min-w-0">
                <ShieldCheck size={16} className="text-emerald-400 shrink-0" />
                <span className="text-xs font-bold truncate">
                  Reg No: {regNo} (Copied) • {currentExam?.examName}
                </span>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => {
                    navigator.clipboard.writeText(regNo);
                    toast.success('Registration No. copied!');
                  }}
                  className="px-2.5 py-1 rounded-lg bg-white/15 hover:bg-white/25 text-[11px] font-bold flex items-center gap-1"
                >
                  <Copy size={12} /> Copy Reg
                </button>
                <button
                  type="button"
                  onClick={() => setActiveResultUrl('')}
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-rose-600 text-white"
                  aria-label="Close Result"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            <div className="flex-1 relative bg-slate-50">
              <iframe
                src={activeResultUrl}
                title="BEU Result Verification"
                sandbox="allow-scripts allow-forms allow-same-origin allow-popups allow-downloads"
                className="w-full h-full border-0 bg-white"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
