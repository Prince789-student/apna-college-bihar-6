import React, { useState, useEffect } from 'react';
import { BookOpen, Search, ChevronDown, ChevronUp, Loader2, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import jsPDF from 'jspdf';

// ─── Smart Syllabus Text Cleaner ──────────────────────────────────────────────
function cleanSyllabusText(rawText) {
  if (!rawText) return rawText;

  let text = rawText
    .replace(/ -\n([a-z])/g, '-$1')
    .replace(/-\n([a-z])/g, '-$1');

  const prefixes = ['co', 'non', 'pre', 'self', 'over', 'sub', 'inter', 'intra', 're', 'semi', 'multi', 'poly'];
  for (const p of prefixes) {
    text = text.replace(new RegExp(`\\b${p} -([a-z])`, 'g'), `${p}-$1`);
  }

  text = text
    .replace(/([A-Za-z]) - ([A-Z])/g, '$1-$2')
    .replace(/([A-Z][a-z]+) -([A-Z0-9])/g, '$1-$2')

  text = text
    .replace(/^[–\-]?\w{1,4}\s+\d\s+\d\s+\d\s+\d\s*$/gm, '')
    .replace(/^\(\)\s*$/gm, '')
    .replace(/^\s*\(\s*\)\s*$/gm, '');

  const lines = text.split('\n');
  const result = [];
  let insideReferences = false;

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i].trim();
    if (!line) { result.push(''); continue; }

    if (/^(test|text)[\s/]+reference[s]?[-:]*/i.test(line)) {
      insideReferences = true;
      result.push('\n**📚 References & Textbooks:**\n');
      continue;
    }

    if (insideReferences && /^\d+[\.\)]/.test(line)) {
      line = line.replace(/^#+\s*/, '');
      result.push(`- ${line}`);
      continue;
    }

    if (line.startsWith('####')) {
      const cleaned = line.replace(/^#+\s*/, '').trim();
      if (/\d{4}|ISBN|Pearson|McGraw|Wiley|Oxford|Laxmi|Narosa|PHI|edition/i.test(cleaned) ||
          /^\d+[\.\)]/.test(cleaned)) {
        insideReferences = true;
        result.push(`- ${cleaned}`);
        continue;
      }
      if (insideReferences) {
        result.push(`- ${cleaned}`);
      } else {
        result.push(line);
      }
      continue;
    }

    const unitMatch = line.match(/^UNIT\s+(\d+\.?\d*)\s*[-–:.]?\s*(.+?)\s+(\d+\s*hrs?)/i);
    if (unitMatch && !line.startsWith('#')) {
      const num = unitMatch[1];
      const title = unitMatch[2].replace(/\s{2,}/g, ' ').trim();
      const hrs = unitMatch[3].trim();
      result.push(`\n### 📌 Unit ${num}: ${title} (${hrs})\n`);
      insideReferences = false;
      continue;
    }

    const unitMatch2 = line.match(/^Unit[-–\s]+(\d+\.?\d*)\s*[:.]?\s*(.+?)\s+(\d+\s*hrs?)/i);
    if (unitMatch2 && !line.startsWith('#')) {
      const num = unitMatch2[1];
      const title = unitMatch2[2].replace(/\s{2,}/g, ' ').trim();
      const hrs = unitMatch2[3].trim();
      result.push(`\n### 📌 Unit ${num}: ${title} (${hrs})\n`);
      insideReferences = false;
      continue;
    }

    line = line.replace(/  +/g, ' ');
    line = line.replace(/\b([A-Z])\s([a-z]{3,})\b/g, '$1$2');
    line = line.replace(/([A-Z]\.[A-Z])\s\.\s/g, '$1. ');
    line = line.replace(/\b([a-z]{3,})\s([a-z]{2,4})\b/g, (m, a, b) => {
      if (b.length <= 2) return a + b;
      if (a.length + b.length <= 9 && /[aeiou]$/.test(a) && /^[bcdfghjklmnpqrstvwxyz]/.test(b)) return a + b;
      return m;
    });
    line = line.replace(/\b([a-z]{3,})(i|ti|di|si|ri|li|ni|mi)\s+(on|ons|ing|ed|er|al|ation)\b/g, '$1$2$3');

    result.push(line);
  }

  return result.join('\n').replace(/\n{3,}/g, '\n\n');
}

// ─── Parse markdown syllabus text into structured units with topics ───────────
function parseSyllabusIntoUnits(rawText) {
  if (!rawText) return [];
  const cleaned = cleanSyllabusText(rawText);
  const lines = cleaned.split('\n');
  const units = [];
  let currentUnit = null;

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;

    if (/^#{2,3}\s*📌?\s*Unit\s*\d/i.test(trimmed) || /^#{2,3}\s*Unit\s*\d/i.test(trimmed)) {
      const title = trimmed.replace(/^#+\s*📌?\s*/, '').trim();
      currentUnit = { title, topics: [] };
      units.push(currentUnit);
      continue;
    }

    if (/^##\s*📘/.test(trimmed) || (/^##\s/.test(trimmed) && !/unit/i.test(trimmed))) {
      const title = trimmed.replace(/^#+\s*📘?\s*/, '').trim();
      currentUnit = { title, topics: [], isSubject: true };
      units.push(currentUnit);
      continue;
    }

    if (/^####/.test(trimmed)) {
      const title = trimmed.replace(/^#+\s*/, '').trim();
      if (currentUnit) {
        currentUnit.topics.push({ text: title, isHeading: true });
      }
      continue;
    }

    if (/^[-*•]\s+/.test(trimmed) && currentUnit) {
      const text = trimmed.replace(/^[-*•]\s+/, '').replace(/\*\*/g, '').trim();
      if (text.length > 3) {
        currentUnit.topics.push({ text, isHeading: false });
      }
      continue;
    }

    if (currentUnit && trimmed.length > 10 && !/^(course code|credit|l\s*t\s*p|references|text|prerequisite|\*\*)/i.test(trimmed)) {
      if (!/^\d+\s+\d+\s+\d+/.test(trimmed)) {
        currentUnit.topics.push({ text: trimmed.replace(/\*\*/g, '').trim(), isHeading: false });
      }
    }
  }

  return units.filter(u => u.topics.length > 0);
}

// ─── Single Topic Row Component ───────────────────────────────────────────────
function TopicRow({ topic, doneKey, onAskAI, subjectName }) {
  const [done, setDone] = React.useState(() => {
    try { return JSON.parse(localStorage.getItem(doneKey) || 'false'); } catch { return false; }
  });

  const toggleDone = () => {
    const next = !done;
    setDone(next);
    localStorage.setItem(doneKey, JSON.stringify(next));
  };

  if (topic.isHeading) {
    return (
      <div className="px-4 pt-4 pb-1">
        <p className="text-[10px] font-black text-indigo-500 uppercase tracking-[0.2em]">{topic.text}</p>
      </div>
    );
  }

  const ytQuery = encodeURIComponent(`${topic.text} ${subjectName} BEU B.Tech in Hindi`);

  return (
    <div className={`flex items-start gap-3 px-4 py-3 border-b border-slate-100 group transition-all ${done ? 'bg-emerald-50/50' : 'hover:bg-slate-50'}`}>
      <button onClick={toggleDone} className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${done ? 'bg-emerald-500 border-emerald-500' : 'border-slate-300 hover:border-emerald-400'}`}>
        {done && <svg viewBox="0 0 12 12" width="10" height="10" fill="none" stroke="white" strokeWidth="2"><polyline points="1,6 4,9 11,3"/></svg>}
      </button>

      <p className={`flex-1 text-sm font-medium leading-relaxed ${done ? 'line-through text-slate-400' : 'text-slate-700'}`}>
        {topic.text}
      </p>

      <div className="flex items-center gap-1.5 flex-shrink-0 opacity-60 group-hover:opacity-100 transition-opacity">
        <button
          onClick={() => onAskAI(topic.text)}
          className="flex items-center gap-1 px-2 py-1 bg-indigo-50 hover:bg-indigo-600 text-indigo-600 hover:text-white rounded-lg text-[9px] font-black uppercase tracking-wide transition-all"
        >
          <svg viewBox="0 0 24 24" width="10" height="10" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/></svg>
          Ask AI
        </button>
        <a
          href={`https://www.youtube.com/results?search_query=${ytQuery}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 px-2 py-1 bg-red-50 hover:bg-red-600 text-red-600 hover:text-white rounded-lg text-[9px] font-black uppercase tracking-wide transition-all"
        >
          <svg viewBox="0 0 24 24" width="10" height="10" fill="currentColor"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
          YouTube
        </a>
        <button
          onClick={toggleDone}
          className={`px-2 py-1 rounded-lg text-[9px] font-black uppercase tracking-wide transition-all ${done ? 'bg-emerald-500 text-white' : 'bg-slate-100 hover:bg-emerald-500 text-slate-500 hover:text-white'}`}
        >
          {done ? '✓ Done' : 'Mark Done'}
        </button>
      </div>
    </div>
  );
}

// ─── Unit Accordion Component ──────────────────────────────────────────────────
function UnitAccordion({ unit, unitIndex, subjectName, semBranchKey, onAskAI }) {
  const [open, setOpen] = React.useState(unitIndex === 0);

  const topicKeys = unit.topics.map((t, ti) =>
    `syllabus_done_${semBranchKey}_u${unitIndex}_t${ti}`
  );

  const doneCount = topicKeys.filter(k => {
    try { return JSON.parse(localStorage.getItem(k) || 'false'); } catch { return false; }
  }).length;

  const totalTopics = unit.topics.filter(t => !t.isHeading).length;
  const progress = totalTopics > 0 ? Math.round((doneCount / totalTopics) * 100) : 0;

  return (
    <div className={`border border-slate-200 rounded-2xl overflow-hidden mb-3 transition-all ${open ? 'shadow-md' : ''}`}>
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between px-5 py-4 bg-white hover:bg-slate-50 transition-all"
      >
        <div className="flex items-center gap-3 text-left">
          <div className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-black ${unit.isSubject ? 'bg-indigo-600 text-white' : 'bg-indigo-50 text-indigo-600'}`}>
            {unit.isSubject ? '📘' : `U${unitIndex + 1}`}
          </div>
          <div>
            <p className="text-sm font-black text-slate-800 uppercase tracking-tight leading-none">{unit.title}</p>
            <p className="text-[9px] text-slate-400 font-bold mt-0.5">{totalTopics} topics · {progress}% done</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2">
            <div className="w-24 h-1.5 bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-500 rounded-full transition-all" style={{ width: `${progress}%` }}></div>
            </div>
            <span className="text-[9px] font-black text-slate-400">{progress}%</span>
          </div>
          {open ? <ChevronUp size={16} className="text-slate-400" /> : <ChevronDown size={16} className="text-slate-400" />}
        </div>
      </button>

      {open && (
        <div className="border-t border-slate-100 bg-white">
          {unit.topics.map((topic, ti) => (
            <TopicRow
              key={ti}
              topic={topic}
              doneKey={topicKeys[ti]}
              onAskAI={onAskAI}
              subjectName={subjectName}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────
export default function BeuSyllabus() {
  const [syllabusData, setSyllabusData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isDownloading, setIsDownloading] = useState(false);
  const [aiQuery, setAiQuery] = useState(null);
  const [aiAnswer, setAiAnswer] = useState('');
  const [aiVideoId, setAiVideoId] = useState(null);
  const [aiLanguage, setAiLanguage] = useState(null);
  const [aiLoading, setAiLoading] = useState(false);
  const [selectedSem, setSelectedSem] = useState('sem1');
  const [selectedBranch, setSelectedBranch] = useState('cse');

  useEffect(() => {
    fetch('/data/syllabus.json?v=' + new Date().getTime())
      .then(res => res.json())
      .then(data => { setSyllabusData(data); setLoading(false); })
      .catch(err => { console.error("Error fetching syllabus:", err); setLoading(false); });
  }, []);

  const semesters = [
    { id: 'sem1', label: '1st Semester' }, { id: 'sem2', label: '2nd Semester' },
    { id: 'sem3', label: '3rd Semester' }, { id: 'sem4', label: '4th Semester' },
    { id: 'sem5', label: '5th Semester' }, { id: 'sem6', label: '6th Semester' },
    { id: 'sem7', label: '7th Semester' }, { id: 'sem8', label: '8th Semester' },
  ];

  const branches = [
    { id: 'cse', label: 'Computer Science (All Spec.)' },
    { id: 'civil', label: 'Civil Engineering' },
    { id: 'mech', label: 'Mechanical Engineering' },
    { id: 'ee', label: 'Electrical Engineering' },
    { id: 'ece', label: 'Electronics & Comm.' },
    { id: 'eee', label: 'Electrical & Electronics' },
  ];

  const currentSyllabus = syllabusData.find(s => s.semester === selectedSem && s.branch === selectedBranch);
  const units = currentSyllabus ? parseSyllabusIntoUnits(currentSyllabus.content) : [];
  const semBranchKey = `${selectedSem}_${selectedBranch}`;

  // Overall progress calculation
  const allTopicKeys = units.flatMap((u, ui) => u.topics.map((t, ti) => `syllabus_done_${semBranchKey}_u${ui}_t${ti}`));
  const realTopics = units.flatMap(u => u.topics.filter(t => !t.isHeading));
  const doneCount = allTopicKeys.filter(k => { try { return JSON.parse(localStorage.getItem(k) || 'false'); } catch { return false; } }).length;
  const overallProgress = realTopics.length > 0 ? Math.round((doneCount / realTopics.length) * 100) : 0;

  // AI Handler
  const handleAskAI = (topicText) => {
    const subjectName = branches.find(b => b.id === selectedBranch)?.label || '';
    setAiQuery({ topic: topicText, subject: subjectName });
    setAiAnswer('');
    setAiVideoId(null);
    setAiLanguage(null);
  };

  const fetchAiResponse = async (language) => {
    setAiLanguage(language);
    setAiLoading(true);
    try {
      const response = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [{
            sender: 'user',
            text: `Please explain this topic.`
          }],
          isSyllabusQuery: true,
          topicText: aiQuery.topic,
          subjectName: aiQuery.subject,
          language: language
        })
      });
      const data = await response.json();
      if (!response.ok) {
         setAiAnswer(`Error: ${data.details || data.message || 'Server error'}`);
         return;
      }
      setAiAnswer(data.reply || data.message || 'Could not get response. Try again!');
      if (data.videoId) setAiVideoId(data.videoId);
    } catch (err) {
      setAiAnswer('AI response failed. Please check your connection or server logs.');
    } finally {
      setAiLoading(false);
    }
  };

  // PDF Download Handler
  const handleDownloadPdf = () => {
    if (!currentSyllabus) return;
    setIsDownloading(true);
    try {
      const doc = new jsPDF('p', 'mm', 'a4');
      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();
      const margin = 20;
      const maxW = pageWidth - margin * 2;
      let cursorY = margin + 25;
      let pageCount = 1;
      const branchLabel = branches.find(b => b.id === selectedBranch)?.label || selectedBranch.toUpperCase();
      const semLabel = semesters.find(s => s.id === selectedSem)?.label || selectedSem.toUpperCase();

      const addPageDecoration = (pageNum) => {
        doc.setTextColor(240, 243, 248); doc.setFont('helvetica', 'bold'); doc.setFontSize(42);
        doc.text('APNA COLLEGE BIHAR', pageWidth / 2, pageHeight / 2 + 10, { align: 'center', angle: 45 });
        doc.setFillColor(79, 70, 229); doc.rect(0, 0, pageWidth, 6, 'F');
        doc.setTextColor(15, 23, 42); doc.setFont('helvetica', 'bold'); doc.setFontSize(16);
        doc.text('APNA COLLEGE BIHAR', margin + 14, margin + 5);
        doc.setTextColor(79, 70, 229); doc.setFontSize(10); doc.setFont('helvetica', 'bold');
        doc.text('OFFICIAL BEU SYLLABUS', margin + 14, margin + 11);
        doc.setTextColor(100, 116, 139); doc.setFont('helvetica', 'normal'); doc.setFontSize(9);
        doc.text(`${branchLabel} • ${semLabel}`, margin + 14, margin + 16);
        doc.setDrawColor(226, 232, 240); doc.setLineWidth(0.5);
        doc.line(margin, margin + 20, pageWidth - margin, margin + 20);
        doc.setFontSize(8); doc.setTextColor(148, 163, 184);
        doc.text(`Page ${pageNum}`, pageWidth / 2, pageHeight - 12, { align: 'center' });
        doc.text('https://apnacollegebihar.online', margin, pageHeight - 12);
        doc.text('Apna College Bihar', pageWidth - margin, pageHeight - 12, { align: 'right' });
      };

      const imgEl = new Image();
      imgEl.src = '/logo-acb.png';
      imgEl.onload = () => generateContent(imgEl);
      imgEl.onerror = () => generateContent(null);

      const generateContent = (logoImg) => {
        if (logoImg) doc.addImage(logoImg, 'PNG', margin, margin - 1, 11, 11);
        addPageDecoration(1);
        const checkPageBreak = (h) => {
          if (cursorY + h > pageHeight - margin - 15) {
            doc.addPage(); pageCount++;
            cursorY = margin + 30;
            if (logoImg) doc.addImage(logoImg, 'PNG', margin, margin - 1, 11, 11);
            addPageDecoration(pageCount);
          }
        };
        const lines = cleanSyllabusText(currentSyllabus.content).split('\n');
        for (let line of lines) {
          line = line.trim(); if (!line) { cursorY += 3; continue; }
          if (line.startsWith('## ')) {
            const t = line.replace(/^#+\s*📘?\s*/, '').trim();
            doc.setFont('helvetica', 'bold'); doc.setFontSize(14); doc.setTextColor(67, 56, 202);
            const s = doc.splitTextToSize(t, maxW); checkPageBreak(s.length * 6 + 8); cursorY += 6;
            doc.text(s, margin, cursorY); cursorY += s.length * 6 + 2;
            doc.setDrawColor(199, 210, 254); doc.setLineWidth(0.5);
            doc.line(margin, cursorY - 3, pageWidth - margin, cursorY - 3); cursorY += 4;
          } else if (line.startsWith('### ')) {
            const t = line.replace(/^#+\s*📌?\s*/, '').trim();
            doc.setFont('helvetica', 'bold'); doc.setFontSize(11); doc.setTextColor(79, 70, 229);
            const s = doc.splitTextToSize(t, maxW); checkPageBreak(s.length * 5 + 6); cursorY += 4;
            doc.text(s, margin, cursorY); cursorY += s.length * 5 + 2;
          } else if (line.startsWith('- ') || line.startsWith('* ')) {
            const t = line.substring(2).trim();
            doc.setFont('helvetica', 'normal'); doc.setFontSize(10); doc.setTextColor(71, 85, 105);
            const s = doc.splitTextToSize(t, maxW - 6); checkPageBreak(s.length * 5 + 4);
            doc.text('•', margin + 2, cursorY); doc.text(s, margin + 6, cursorY); cursorY += s.length * 5 + 1;
          } else {
            doc.setFont('helvetica', 'normal'); doc.setFontSize(10); doc.setTextColor(71, 85, 105);
            const s = doc.splitTextToSize(line, maxW); checkPageBreak(s.length * 5 + 4);
            doc.text(s, margin, cursorY); cursorY += s.length * 5 + 1;
          }
        }
        doc.save(`ACB_${selectedBranch.toUpperCase()}_${selectedSem.toUpperCase()}_Syllabus.pdf`);
        setIsDownloading(false);
      };
    } catch (err) {
      console.error("PDF error:", err);
      setIsDownloading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-['Inter'] pb-24">
      {/* Header */}
      <div className="bg-indigo-600 text-white rounded-b-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center text-center">
          <Link to="/app" className="self-start text-[10px] font-black uppercase tracking-widest bg-white/20 px-4 py-2 rounded-xl mb-8 hover:bg-white/30 transition-all">
            ← Back to Hub
          </Link>
          <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 shadow-inner">
            <BookOpen size={32} className="text-white" />
          </div>
          <h1 className="text-3xl md:text-5xl font-[1000] tracking-tighter uppercase mb-4">BEU Syllabus</h1>
          <p className="text-indigo-100 text-[11px] md:text-sm font-bold uppercase tracking-widest max-w-lg">
            Topic-wise interactive syllabus • Ask AI • Watch on YouTube • Track Progress
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 -mt-10 relative z-20">

        {/* Controls */}
        <div className="bg-white p-6 rounded-[2rem] shadow-xl border border-slate-100 mb-6 flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 px-2">Select Semester</label>
            <div className="relative">
              <select value={selectedSem} onChange={e => setSelectedSem(e.target.value)}
                className="w-full appearance-none bg-slate-50 border-2 border-slate-100 p-4 pr-10 rounded-2xl text-[13px] font-bold text-slate-800 outline-none focus:border-indigo-500 transition-all cursor-pointer">
                {semesters.map(s => <option key={s.id} value={s.id}>{s.label}</option>)}
              </select>
              <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            </div>
          </div>
          <div className="flex-1">
            <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 px-2">Select Branch</label>
            <div className="relative">
              <select value={selectedBranch} onChange={e => setSelectedBranch(e.target.value)}
                className="w-full appearance-none bg-slate-50 border-2 border-slate-100 p-4 pr-10 rounded-2xl text-[13px] font-bold text-slate-800 outline-none focus:border-indigo-500 transition-all cursor-pointer">
                {branches.map(b => <option key={b.id} value={b.id}>{b.label}</option>)}
              </select>
              <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Overall Progress Bar */}
        {currentSyllabus && realTopics.length > 0 && (
          <div className="bg-white px-6 py-4 rounded-2xl shadow border border-slate-100 mb-6 flex items-center gap-4">
            <div className="flex-1">
              <div className="flex justify-between mb-1">
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Overall Progress</span>
                <span className="text-[10px] font-black text-indigo-600">{doneCount}/{realTopics.length} topics done</span>
              </div>
              <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-indigo-500 to-emerald-500 rounded-full transition-all duration-500" style={{ width: `${overallProgress}%` }}></div>
              </div>
            </div>
            <div className="text-2xl font-[1000] text-indigo-600 tabular-nums">{overallProgress}%</div>
          </div>
        )}

        {/* Content Area */}
        <div className="bg-white rounded-[2rem] shadow-xl border border-slate-100 overflow-hidden min-h-[400px]">
          <div className="p-6 bg-slate-50 border-b border-slate-100 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-sm font-black text-slate-800 uppercase tracking-widest">
                {branches.find(b => b.id === selectedBranch)?.label}
              </h2>
              <p className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest mt-1">
                {semesters.find(s => s.id === selectedSem)?.label}
              </p>
            </div>
            {currentSyllabus && (
              <button onClick={handleDownloadPdf} disabled={isDownloading}
                className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-400 text-white rounded-xl text-xs font-black uppercase tracking-widest shadow-lg transition-all active:scale-95 ml-auto">
                {isDownloading ? <><Loader2 size={16} className="animate-spin" /> Generating...</> : <><Download size={16} /> Download PDF</>}
              </button>
            )}
          </div>

          <div className="p-4 md:p-6">
            {loading ? (
              <div className="flex flex-col items-center justify-center py-20">
                <Loader2 size={40} className="text-indigo-500 animate-spin mb-4" />
                <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest">Loading Syllabus Data...</p>
              </div>
            ) : currentSyllabus && units.length > 0 ? (
              <div className="space-y-1">
                {units.map((unit, ui) => (
                  <UnitAccordion
                    key={ui}
                    unit={unit}
                    unitIndex={ui}
                    subjectName={branches.find(b => b.id === selectedBranch)?.label || ''}
                    semBranchKey={semBranchKey}
                    onAskAI={handleAskAI}
                  />
                ))}
              </div>
            ) : currentSyllabus ? (
              <div className="prose prose-sm max-w-none prose-headings:font-black prose-h2:text-indigo-700 prose-h3:text-slate-800 prose-li:text-slate-600">
                <ReactMarkdown>{cleanSyllabusText(currentSyllabus.content)}</ReactMarkdown>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mb-6">
                  <Search size={32} className="text-slate-400" />
                </div>
                <h3 className="text-lg font-black text-slate-800 uppercase tracking-tighter mb-2">No Syllabus Found</h3>
                <p className="text-[12px] font-bold text-slate-500 max-w-xs">
                  The syllabus for this specific semester and branch combination is not available yet.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* AI Answer Modal */}
      {aiQuery && (
        <div className="fixed inset-0 z-[200] flex items-end md:items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setAiQuery(null)}>
          <div className="bg-white w-full max-w-lg rounded-[2rem] shadow-2xl overflow-hidden animate-in slide-in-from-bottom-5 duration-300" onClick={e => e.stopPropagation()}>
            <div className="bg-indigo-600 p-5">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-white/20 rounded-xl flex items-center justify-center">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="white"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/></svg>
                </div>
                <div>
                  <p className="text-[9px] font-black text-indigo-200 uppercase tracking-widest">AI Explanation</p>
                  <p className="text-sm font-black text-white leading-tight">{aiQuery.topic}</p>
                </div>
                <button onClick={() => setAiQuery(null)} className="ml-auto text-white/70 hover:text-white text-xl font-black">×</button>
              </div>
            </div>

            <div className="px-5 pt-4 flex gap-2">
              <a href={`https://www.youtube.com/results?search_query=${encodeURIComponent(aiQuery.topic + ' ' + aiQuery.subject)}`}
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-2 bg-red-50 hover:bg-red-600 text-red-600 hover:text-white rounded-xl text-[9px] font-black uppercase tracking-widest transition-all">
                <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                Watch on YouTube
              </a>
            </div>

            <div className="p-5 max-h-[50vh] overflow-y-auto">
              {!aiLanguage ? (
                <div className="flex flex-col gap-3 py-4">
                  <p className="text-sm font-bold text-slate-700 text-center mb-2">Choose Explanation Language</p>
                  <button 
                    onClick={() => fetchAiResponse('hinglish')}
                    className="w-full py-3 px-4 bg-indigo-50 hover:bg-indigo-600 text-indigo-700 hover:text-white rounded-xl font-bold text-sm transition-all border border-indigo-100 hover:border-indigo-600 text-left flex justify-between items-center"
                  >
                    <span>🇮🇳 Explain in Hinglish (Bihar Style)</span>
                    <ChevronRight size={16} />
                  </button>
                  <button 
                    onClick={() => fetchAiResponse('english')}
                    className="w-full py-3 px-4 bg-slate-50 hover:bg-slate-800 text-slate-700 hover:text-white rounded-xl font-bold text-sm transition-all border border-slate-200 hover:border-slate-800 text-left flex justify-between items-center"
                  >
                    <span>🇬🇧 Explain in Normal English</span>
                    <ChevronRight size={16} />
                  </button>
                </div>
              ) : aiLoading ? (
                <div className="flex flex-col items-center py-8 gap-3">
                  <Loader2 size={28} className="text-indigo-500 animate-spin" />
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">AI is thinking...</p>
                </div>
              ) : (
                <div className="flex flex-col gap-5">
                  {aiVideoId && (
                    <div className="w-full aspect-video rounded-xl overflow-hidden bg-slate-900 shadow-inner">
                      <iframe 
                        src={`https://www.youtube.com/embed/${aiVideoId}`} 
                        className="w-full h-full border-0" 
                        allowFullScreen>
                      </iframe>
                    </div>
                  )}
                  <div className="prose prose-sm max-w-none text-slate-700">
                    <ReactMarkdown>{aiAnswer}</ReactMarkdown>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
