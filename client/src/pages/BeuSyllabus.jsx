import React, { useState, useEffect } from 'react';
import { BookOpen, Search, ChevronDown, ChevronUp, Loader2, Download } from 'lucide-react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import jsPDF from 'jspdf';
import { Capacitor } from '@capacitor/core';
import { Directory, Filesystem } from '@capacitor/filesystem';
import { Share } from '@capacitor/share';
import SEO from '../components/SEO';

const CustomDropdown = ({ label, value, options, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectedLabel = options.find(o => o.id === value)?.label || label;
  
  return (
    <div className="relative">
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-white border-2 border-slate-100 p-4 pr-10 rounded-2xl text-[13px] font-bold text-black cursor-pointer flex items-center justify-between"
      >
        <span>{selectedLabel}</span>
        <ChevronDown size={16} className={`text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </div>
      
      {isOpen && (
        <div className="absolute z-50 top-full left-0 right-0 mt-2 bg-white border-2 border-slate-100 rounded-2xl shadow-xl max-h-60 overflow-y-auto">
          {options.map(opt => (
            <div
              key={opt.id}
              className={`p-3 text-[13px] font-bold cursor-pointer hover:bg-indigo-50 transition-colors ${value === opt.id ? 'bg-indigo-50 text-indigo-600' : 'text-black'}`}
              onClick={() => {
                onChange(opt.id);
                setIsOpen(false);
              }}
            >
              {opt.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

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
      if (insideReferences) {
        result.push(`- ${cleaned}`);
      } else {
        result.push(line);
      }
      continue;
    }

    // Strip "hrs" from the line globally so topics don't have ": 5 hrs"
    line = line.replace(/[:\-]?\s*\d+\s*hrs?/gi, '').trim();

    // Re-check if line is empty after stripping hrs
    if (!line) { result.push(''); continue; }

    const unitMatch = line.match(/^UNIT\s+(\d+\.?\d*)\s*[-–:.]?\s*(.+)$/i);
    if (unitMatch && !line.startsWith('#')) {
      const num = unitMatch[1];
      const title = unitMatch[2].replace(/\s{2,}/g, ' ').trim();
      result.push(`\n### 📌 Unit ${num}: ${title}\n`);
      insideReferences = false;
      continue;
    }

    const unitMatch2 = line.match(/^Unit[-–\s]+(\d+\.?\d*)\s*[:.]?\s*(.+)$/i);
    if (unitMatch2 && !line.startsWith('#')) {
      const num = unitMatch2[1];
      const title = unitMatch2[2].replace(/\s{2,}/g, ' ').trim();
      result.push(`\n### 📌 Unit ${num}: ${title}\n`);
      insideReferences = false;
      continue;
    }

    result.push(line);
  }

  return result.join('\n').replace(/\n{3,}/g, '\n\n');
}

// ─── Parse markdown syllabus text into structured subjects and units with topics ───

function cleanTitleStr(s) {
  let res = s.replace(/[^\x20-\x7E]/g, '');
  res = res.replace(/["'”]/g, '');
  const firstAlpha = res.search(/[A-Za-z0-9]/);
  if (firstAlpha !== -1) res = res.substring(firstAlpha);
  return res.trim();
}

function splitIntoTopics(text) {
  if (!text || text.length < 5) return [];
  
  let t = text.trim();
  t = t.replace(/\.\s*$/, '');
  const parts = [];
  let depth = 0;
  let current = '';
  for (let i = 0; i < t.length; i++) {
    const ch = t[i];
    if (ch === '(' || ch === '[') depth++;
    if (ch === ')' || ch === ']') depth--;
    
    const isSemicolon = (ch === ';');
    
    if (depth === 0 && isSemicolon) {
      if (current.trim().length > 3) parts.push(current.trim());
      current = '';
    } else {
      current += ch;
    }
  }
  if (current.trim().length > 3) parts.push(current.trim());
  
  // Clean up any remaining leading/trailing characters from the split chunks
  return parts.map(p => {
    let clean = p.trim();
    // Strip hours like ": 5 hrs" at the beginning or end of topic strings
    clean = clean.replace(/^[:\-]?\s*\d+\s*(?:hrs?|hours?)\b\s*[:\-]?/gi, '').trim();
    clean = clean.replace(/\b\d+\s*(?:hrs?|hours?)\s*[:\-]?$/gi, '').trim();
    
    if (clean.startsWith('-')) clean = clean.substring(1).trim();
    if (clean.endsWith('-')) clean = clean.substring(0, clean.length - 1).trim();
    return clean;
  }).filter(p => p.length > 2);
}


function getSubjectCredit(courseCode, title) {
  if (/SPORTS|YOGA|NCC|NSS|SWACHH|SWATCH|INDIAN KNOWLEDGE/i.test(title)) return '0';
  if (/LAB/i.test(title) || /P$/i.test(courseCode || '')) {
    if (/graphics|design/i.test(title)) return '1.5';
    if (/workshop/i.test(title)) return '1.5';
    if (/programming|java|python|web|data structure|os/i.test(title)) return '2';
    return '1';
  }
  if (/math|mechanics/i.test(title)) return '4';
  if (/physics|chemistry/i.test(title)) return '3';
  if (/english/i.test(title)) return '2';
  if (/workshop/i.test(title)) return '2';
  return '3';
}

function parseSyllabusIntoSubjects(rawText) {
  if (!rawText) return [];
  const cleaned = cleanSyllabusText(rawText);
  
  // First, split into raw subjects
  const subjectBlocks = cleaned.split(/\n(?=##\s+)/);
  const subjects = [];

  for (const block of subjectBlocks) {
    const lines = block.split('\n');
    let subject = null;
    let currentUnit = null;
    let parsingReferences = false;

    // First pass of the block: find out if it contains any explicit unit headers
    let hasExplicitUnits = false;
    for (const line of lines) {
      const trimmed = line.trim();
      if (/^#{3,4}\s*(?:📌)?\s*Unit[-–\s_—]*\d/i.test(trimmed) || 
          /^UNIT\s+\d/i.test(trimmed) || 
          /^Module\s+\d/i.test(trimmed) || 
          /^#{3,4}\s*Module\s+\d/i.test(trimmed)) {
        hasExplicitUnits = true;
        break;
      }
    }

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmed = line.trim();
      if (!trimmed) continue;

      // Subject title
      if (/^##\s+/.test(trimmed)) {
        let title = trimmed.replace(/^##\s*/, '');
        title = title.replace(/^📘\s*/, '').replace(/"/g, '').trim();
        subject = { title, courseCode: '', units: [] };
        subjects.push(subject);
        continue;
      }

      if (!subject) continue;

      // Course Code
      if (/^\*\*Course Code:\*\*/i.test(trimmed)) {
        subject.courseCode = trimmed.replace(/^\*\*Course Code:\*\*\s*/i, '').trim();
        continue;
      }
      if (/^Course Code\s*:/i.test(trimmed)) {
        subject.courseCode = trimmed.replace(/^Course Code\s*:\s*/i, '').trim();
        continue;
      }

      // Check for Unit header
      const isExplicitUnit = /^#{3,4}\s*(?:📌)?\s*Unit[-–\s_—]*\d/i.test(trimmed) || 
                             /^UNIT\s+\d/i.test(trimmed) || 
                             /^Module\s+\d/i.test(trimmed) || 
                             /^#{3,4}\s*Module\s+\d/i.test(trimmed);

      const isNumberedUnit = !hasExplicitUnits && 
                             /^\d+\s*\\?\.\s*\*\*(.+?)\*\*/.test(trimmed) && 
                             !/course/i.test(trimmed) && 
                             !/credit/i.test(trimmed) &&
                             !/l\s*t\s*p/i.test(trimmed);

      const isH4NumberedUnit = !hasExplicitUnits && /^####\s*\d+\\?\.\s*(.+?)/.test(trimmed);

      if (isExplicitUnit || isNumberedUnit || isH4NumberedUnit) {
        parsingReferences = false;
        let title = '';
        let remainingText = '';

        if (isExplicitUnit) {
          title = trimmed.replace(/^#+\s*(?:📌)?\s*/, '').replace(/^UNIT\s+/i, 'Unit ').trim();
          title = title.replace(/[:\-]?\s*\d+\s*(?:hrs?|hours?)\s*$/i, '');
        } else if (isNumberedUnit) {
          const match = trimmed.match(/^\d+\s*\\?\.\s*\*\*(.+?)\*\*/);
          const num = match[0].match(/\d+/)[0];
          title = `Unit ${num}: ${match[1].replace(/\*\*/g, '').trim()}`;
          remainingText = trimmed.replace(/^\d+\s*\\?\.\s*\*\*(.+?)\*\*\s*[:.-]?\s*/, '').trim();
        } else if (isH4NumberedUnit) {
          title = trimmed.replace(/^####\s*/, '').trim();
        }

        // SMART NEXT-LINE TITLE GRABBER & SUBHEADING COLLATOR:
        const titleCleaned = title
          .replace(/Unit[-–\s_—]*\d*/i, '')
          .replace(/Module[-–\s_—]*\d*/i, '')
          .replace(/\d+\s*(?:hrs?|hours?)/i, '')
          .replace(/[^a-zA-Z]/g, '')
          .trim();
        const hasDescriptiveText = titleCleaned.length >= 3;

        if (!hasDescriptiveText) {
          // Strategy A: Next non-empty line title grabber
          let lookAheadIdx = i + 1;
          while (lookAheadIdx < lines.length && !lines[lookAheadIdx].trim()) {
            lookAheadIdx++;
          }
          
          let foundTitle = false;
          if (lookAheadIdx < lines.length) {
            const nextLine = lines[lookAheadIdx].trim();
            const isNotHeader = !nextLine.startsWith('#');
            const isNotListItem = !/^[-*•]\s+/.test(nextLine) && !/^\d+\s*\\?\.\s*/.test(nextLine);
            const hasLetters = /[a-zA-Z]{3,}/.test(nextLine);
            
            if (isNotHeader && isNotListItem && hasLetters) {
              let descriptiveTitle = nextLine;
              if (descriptiveTitle.includes(':')) {
                descriptiveTitle = descriptiveTitle.split(':')[0].trim();
              }
              title = `${title}: ${descriptiveTitle}`;
              i = lookAheadIdx;
              foundTitle = true;
            }
          }
          
          // Strategy B: Collect subheadings inside this unit (e.g. Physics)
          if (!foundTitle) {
            let scanIdx = i + 1;
            const subheadings = [];
            while (scanIdx < lines.length) {
              const scanLine = lines[scanIdx].trim();
              if (!scanLine) { scanIdx++; continue; }
              
              const isNextUnit = /^#{3,4}\s*(?:📌)?\s*Unit[-–\s_—]*\d/i.test(scanLine) || 
                                 /^UNIT\s+\d/i.test(scanLine) || 
                                 /^Module\s+\d/i.test(scanLine) || 
                                 /^#{3,4}\s*Module\s+\d/i.test(scanLine);
              if (isNextUnit || /^##\s+/.test(scanLine)) {
                break;
              }
              
              if (scanLine.startsWith('####')) {
                let subhead = scanLine.replace(/^#+\s*/, '').trim();
                subhead = subhead.replace(/^\d+\s*\\?\.\s*/, '').replace(/^\d+\s*\)\s*/, '');
                subhead = subhead.replace(/:\s*$/, '').replace(/\(\d+\s*hrs?\)/i, '').trim();
                if (subhead.length > 2) {
                  subheadings.push(subhead);
                }
              }
              scanIdx++;
            }
            
            if (subheadings.length > 0) {
              title = `${title}: ${subheadings.join(' & ')}`;
            }
          }
        }

        currentUnit = { title, topics: [] };
        subject.units.push(currentUnit);

        if (remainingText && remainingText.length > 5) {
          currentUnit.topics.push({ text: remainingText, isHeading: false });
        }
        continue;
      }

      // Topics
      if (currentUnit) {
        if (/^(test|text\s*book|reference|credit|l\s*t\s*p|course outcome|suggested reading|books recommended)/i.test(trimmed)) {
          parsingReferences = true;
          continue;
        }
        
        if (trimmed.toLowerCase().includes('references & textbooks')) {
          parsingReferences = true;
          continue;
        }

        if (parsingReferences) {
          continue;
        }

        if (/^####/.test(trimmed)) {
          const text = trimmed.replace(/^#+\s*/, '').trim();
          currentUnit.topics.push({ text, isHeading: true });
          continue;
        }

        if (/^[-*•]\s+/.test(trimmed)) {
          const text = trimmed.replace(/^[-*•]\s+/, '').replace(/\*\*/g, '').trim();
          if (text.length > 3) {
            currentUnit.topics.push({ text, isHeading: false });
          }
          continue;
        }

        if (/^\d+\s*\\?\.\s*(.+?)/.test(trimmed)) {
          const text = trimmed.replace(/^\d+\s*\\?\.\s*/, '').replace(/\*\*/g, '').trim();
          if (text.length > 3) {
            currentUnit.topics.push({ text, isHeading: false });
          }
          continue;
        }

        if (trimmed.length > 10 && !/^\d+\s+\d+\s+\d+/.test(trimmed)) {
          const text = trimmed.replace(/\*\*/g, '').trim();
          if (currentUnit.topics.length > 0 && !currentUnit.topics[currentUnit.topics.length - 1].isHeading) {
            currentUnit.topics[currentUnit.topics.length - 1].text += ' ' + text;
          } else {
            currentUnit.topics.push({ text, isHeading: false });
          }
        }
      }
    }

    // FALLBACK MECHANISM: If a subject has NO units parsed, create a default unit
    if (subject && subject.units.length === 0) {
      const defaultUnit = { title: 'Syllabus Topics', topics: [] };
      for (const line of lines) {
        const tr = line.trim();
        // Skip subject header, credits, references, etc.
        if (tr.startsWith('##') || /^(course code|\*\*course code|credits|\*\*credits|l\s*t\s*p|references|textbook)/i.test(tr)) {
          continue;
        }
        if (/^#{3,4}\s*(.+?)/.test(tr)) {
          const headingText = tr.replace(/^#+\s*/, '').trim();
          defaultUnit.topics.push({ text: headingText, isHeading: true });
          continue;
        }
        if (/^[-*•]\s+/.test(tr)) {
          const text = tr.replace(/^[-*•]\s+/, '').replace(/\*\*/g, '').trim();
          if (text.length > 3) {
            defaultUnit.topics.push({ text, isHeading: false });
          }
          continue;
        }
        if (/^\d+\s*\\?\.\s*(.+?)/.test(tr)) {
          const text = tr.replace(/^\d+\s*\\?\.\s*/, '').replace(/\*\*/g, '').trim();
          if (text.length > 3) {
            defaultUnit.topics.push({ text, isHeading: false });
          }
          continue;
        }
        if (tr.includes('References & Textbooks')) {
          defaultUnit.topics.push({ text: 'References & Textbooks', isHeading: true });
          continue;
        }
        if (tr.length > 15 && !/^\d+\s+\d+\s+\d+/.test(tr)) {
          let text = tr.replace(/\*\*/g, '').trim();
          text = text.replace(/^:?\s*\d+\s*(?:hrs?|hours?)\s*/i, '').trim();
          if (defaultUnit.topics.length > 0 && !defaultUnit.topics[defaultUnit.topics.length - 1].isHeading) {
            defaultUnit.topics[defaultUnit.topics.length - 1].text += ' ' + text;
          } else {
            defaultUnit.topics.push({ text, isHeading: false });
          }
        }
      }
      if (defaultUnit.topics.length > 0) {
        subject.units.push(defaultUnit);
      }
    }
  }

  
  for (const subject of subjects) {
    if (subject.title) {
      subject.title = cleanTitleStr(subject.title);
    }
    for (const unit of subject.units) {
      const newTopics = [];
      for (const topic of unit.topics) {
        if (topic.isHeading) {
          newTopics.push(topic);
        } else {
          const splits = splitIntoTopics(topic.text);
          for (const sp of splits) {
            newTopics.push({ text: sp, isHeading: false });
          }
        }
      }
      unit.topics = newTopics;
    }
  }
    return subjects.sort((a, b) => {
    const aIsLab = /LAB/i.test(a.title) || /P$/i.test(a.courseCode);
    const bIsLab = /LAB/i.test(b.title) || /P$/i.test(b.courseCode);
    if (aIsLab && !bIsLab) return 1;
    if (!aIsLab && bIsLab) return -1;
    return 0;
  });
}

// ─── Single Topic Row Component ───────────────────────────────────────────────
function TopicRow({ topic, doneKey, subjectName, onToggle }) {
  const [done, setDone] = React.useState(() => {
    try { return JSON.parse(localStorage.getItem(doneKey) || 'false'); } catch { return false; }
  });
  const [showVideo, setShowVideo] = React.useState(false);

  const toggleDone = () => {
    const next = !done;
    setDone(next);
    localStorage.setItem(doneKey, JSON.stringify(next));
    if (onToggle) onToggle();
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
    <div className={`flex flex-col px-4 py-3.5 border-b border-slate-100 group transition-all ${done ? 'bg-emerald-50/50' : 'hover:bg-slate-50'}`}>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div className="flex items-start gap-3 flex-1 min-w-0">
          <button 
            onClick={toggleDone} 
            className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${done ? 'bg-emerald-500 border-emerald-500' : 'border-slate-300 hover:border-emerald-400'}`}
          >
            {done && <svg viewBox="0 0 12 12" width="10" height="10" fill="none" stroke="white" strokeWidth="2"><polyline points="1,6 4,9 11,3"/></svg>}
          </button>
          <p className={`text-[13px] md:text-sm font-semibold leading-relaxed ${done ? 'line-through text-slate-400' : 'text-slate-800'}`}>
            {topic.text}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-1.5 pl-8 md:pl-0 flex-shrink-0 opacity-90 md:opacity-60 md:group-hover:opacity-100 transition-opacity">
                    <a
            href={`https://www.youtube.com/results?search_query=${ytQuery}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-2.5 py-1.5 md:px-2 md:py-1 bg-red-50 hover:bg-red-600 text-red-600 hover:text-white rounded-xl md:rounded-lg text-[10px] md:text-[9px] font-black uppercase tracking-wide transition-all active:scale-95 shadow-sm"
          >
            <svg viewBox="0 0 24 24" width="11" height="11" fill="currentColor"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
            YouTube
          </a>
          <button
            onClick={toggleDone}
            className={`px-2.5 py-1.5 md:px-2 md:py-1 rounded-xl md:rounded-lg text-[10px] md:text-[9px] font-black uppercase tracking-wide transition-all active:scale-95 shadow-sm ${done ? 'bg-emerald-500 text-white' : 'bg-slate-100 hover:bg-emerald-500 text-slate-500 hover:text-white'}`}
          >
            {done ? '✓ Done' : 'Mark Done'}
          </button>
        </div>
      </div>
      
    </div>
  );
}

function UnitAccordion({ unit, unitIndex, subjectName, semBranchKey, onToggle }) {
  const [open, setOpen] = React.useState(unitIndex === 0);
  const [tick, setTick] = React.useState(0);

  const topicKeys = unit.topics.map((t, ti) =>
    `syllabus_done_${semBranchKey}_u${unitIndex}_t${ti}`
  );

  const doneCount = React.useMemo(() => topicKeys.filter(k => {
    try { return JSON.parse(localStorage.getItem(k) || 'false'); } catch { return false; }
  }).length, [tick, topicKeys.join(',')]);

  const totalTopics = unit.topics.filter(t => !t.isHeading).length;
  const progress = totalTopics > 0 ? Math.round((doneCount / totalTopics) * 100) : 0;

  const handleToggle = () => { setTick(t => t + 1); if (onToggle) onToggle(); };

  return (
    <div className={`border border-slate-200 rounded-2xl overflow-hidden mb-3 transition-all ${open ? 'shadow-md' : ''}`}>
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between px-5 py-4 bg-white hover:bg-slate-50 transition-all"
      >
        <div className="flex items-center gap-3 text-left">
          <div className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-black ${progress === 100 ? 'bg-emerald-100 text-emerald-600' : 'bg-indigo-50 text-indigo-600'}`}>
            {progress === 100 ? '✓' : `U${unitIndex + 1}`}
          </div>
          <div>
            <p className="text-sm font-black text-slate-800 uppercase tracking-tight leading-snug">{unit.title}</p>
            <p className="text-[9px] text-slate-400 font-bold mt-0.5">{totalTopics} topics · {progress}% done</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="w-14 md:w-24 h-1.5 bg-slate-100 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-500 ${progress === 100 ? 'bg-emerald-500' : progress >= 50 ? 'bg-indigo-500' : progress > 0 ? 'bg-amber-400' : 'bg-slate-200'}`}
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <span className={`text-[10px] font-black min-w-[30px] text-right ${progress === 100 ? 'text-emerald-500' : progress > 0 ? 'text-indigo-500' : 'text-slate-400'}`}>{progress}%</span>
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
              subjectName={subjectName}
              onToggle={handleToggle}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────
export default function BeuSyllabus() {
  const { branchId } = useParams();
  const navigate = useNavigate();

  const [syllabusData, setSyllabusData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isDownloading, setIsDownloading] = useState(false);
  const [selectedSem, setSelectedSem] = useState('');
  const [selectedBranch, setSelectedBranch] = useState(branchId ? branchId.toLowerCase() : '');
  const [selectedSubjectIndex, setSelectedSubjectIndex] = useState(null);
  const [progressTicker, setProgressTicker] = useState(0);

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
  const subjects = currentSyllabus ? parseSyllabusIntoSubjects(currentSyllabus.content) : [];
  const semBranchKey = `${selectedSem}_${selectedBranch}`;

  const theorySubjects = [];
  const labSubjects = [];
  subjects.forEach((subj, index) => {
    const isLab = /LAB/i.test(subj.title) || /P$/i.test(subj.courseCode);
    if (isLab) {
      labSubjects.push({ subject: subj, originalIndex: index });
    } else {
      theorySubjects.push({ subject: subj, originalIndex: index });
    }
  });

  // Overall progress calculation
  const allTopicKeys = [];
  const realTopics = [];
  subjects.forEach((subject, si) => {
    subject.units.forEach((unit, ui) => {
      unit.topics.forEach((t, ti) => {
        const key = `syllabus_done_${semBranchKey}_s${si}_u${ui}_t${ti}`;
        if (!t.isHeading) {
          allTopicKeys.push(key);
          realTopics.push(t);
        }
      });
    });
  });

  const doneCount = allTopicKeys.filter(k => { try { return JSON.parse(localStorage.getItem(k) || 'false'); } catch { return false; } }).length;
  const overallProgress = realTopics.length > 0 ? Math.round((doneCount / realTopics.length) * 100) : 0;

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

      const generateContent = async (logoImg) => {
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
        subjects.forEach(subject => {
          const s = doc.splitTextToSize(subject.title, maxW); 
          checkPageBreak(s.length * 6 + 25); cursorY += 6;
          s.forEach(line => { 
            doc.setFont('helvetica', 'bold'); doc.setFontSize(14); doc.setTextColor(67, 56, 202);
            doc.text(line, margin, cursorY); cursorY += 6; 
          });
          doc.setDrawColor(199, 210, 254); doc.setLineWidth(0.5);
          doc.line(margin, cursorY - 3, pageWidth - margin, cursorY - 3); cursorY += 4;
          
          subject.units.forEach((unit, ui) => {
            const ut = doc.splitTextToSize(`Unit ${ui + 1}: ${unit.title}`, maxW); 
            checkPageBreak(ut.length * 5 + 15); cursorY += 4;
            ut.forEach(line => { 
              doc.setFont('helvetica', 'bold'); doc.setFontSize(11); doc.setTextColor(79, 70, 229);
              doc.text(line, margin, cursorY); cursorY += 5; 
            });
            cursorY += 1;
            
            unit.topics.forEach(topic => {
              if (topic.isHeading) {
                const ht = doc.splitTextToSize(topic.text, maxW); 
                cursorY += 2;
                ht.forEach(line => { 
                  checkPageBreak(6); 
                  doc.setFont('helvetica', 'bold'); doc.setFontSize(10); doc.setTextColor(51, 65, 85);
                  doc.text(line, margin, cursorY); cursorY += 5; 
                });
                cursorY += 1;
              } else {
                const isNumbered = /^\\?\\d+/.test(topic.text);
                const indent = isNumbered ? 2 : 6;
                const tt = doc.splitTextToSize(topic.text, maxW - indent); 
                tt.forEach((line, lineIdx) => { 
                  checkPageBreak(6); 
                  doc.setFont('helvetica', 'normal'); doc.setFontSize(10); doc.setTextColor(71, 85, 105);
                  if (lineIdx === 0 && !isNumbered) doc.text('•', margin + 2, cursorY); 
                  doc.text(line, margin + indent, cursorY); 
                  cursorY += 5; 
                });
                cursorY += 1;
              }
            });
            cursorY += 4;
          });
          cursorY += 6;
        });
        
        const fileName = `ACB_${selectedBranch.toUpperCase()}_${selectedSem.toUpperCase()}_Syllabus.pdf`;
        if (Capacitor.isNativePlatform()) {
          try {
            const pdfOutput = doc.output('datauristring');
            const base64Data = pdfOutput.split(',')[1];
            const savedFile = await Filesystem.writeFile({
              path: fileName,
              data: base64Data,
              directory: Directory.Documents
            });
            await Share.share({
              title: fileName,
              url: savedFile.uri
            });
          } catch(e) {
            console.error("Native save error:", e);
            import('react-hot-toast').then(m => m.toast.error("Failed to save PDF on device."));
          }
        } else {
          doc.save(fileName);
        }
        setIsDownloading(false);
      };
    } catch (err) {
      console.error("PDF error:", err);
      setIsDownloading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-['Inter'] pb-24">
      <SEO 
        title={`BEU ${selectedBranch.toUpperCase()} Sem ${selectedSem.replace('sem', '')} Syllabus | Apna College Bihar`}
        description={`Check official Bihar Engineering University (BEU) syllabus for ${selectedBranch.toUpperCase()} Semester ${selectedSem.replace('sem', '')}. Track your syllabus progress online.`}
        keywords={`BEU Syllabus, ${selectedBranch} Syllabus, Semester ${selectedSem.replace('sem', '')} Syllabus, Bihar Engineering Syllabus, B.Tech Syllabus BEU`}
        url={`https://www.apnacollegebihar.online/syllabus/${selectedBranch}`}
      />
      
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
            Topic-wise interactive syllabus • Watch on YouTube • Track Progress
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-2 md:px-4 -mt-8 md:-mt-10 relative z-20">

        {/* Controls */}
        <div className="bg-white p-6 rounded-[2rem] shadow-xl border border-slate-100 mb-6 flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 px-2">Select Semester</label>
            <CustomDropdown 
              label="Select Semester"
              value={selectedSem}
              options={semesters}
              onChange={(val) => { setSelectedSem(val); setSelectedSubjectIndex(null); }}
            />
          </div>
          <div className="flex-1">
            <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 px-2">Select Branch</label>
            <CustomDropdown 
              label="Select Branch"
              value={selectedBranch}
              options={branches}
              onChange={(val) => { setSelectedBranch(val); setSelectedSubjectIndex(null); navigate(`/syllabus/${val}`); }}
            />
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
          <div className="p-4 md:p-6 bg-slate-50 border-b border-slate-100 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-sm font-black text-slate-800 uppercase tracking-widest">
                {branches.find(b => b.id === selectedBranch)?.label}
              </h2>
              <p className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest mt-1">
                {semesters.find(s => s.id === selectedSem)?.label}
              </p>
            </div>
            {currentSyllabus && !Capacitor.isNativePlatform() && (
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
            ) : !currentSyllabus ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <BookOpen size={48} className="text-slate-300 mb-4" />
                <h3 className="text-xl font-black text-slate-800 uppercase tracking-tight mb-2">Syllabus Not Available</h3>
                <p className="text-xs font-bold text-slate-500 max-w-sm mx-auto">
                  We are still compiling the official BEU syllabus for this semester and branch. It will be added soon!
                </p>
              </div>
            ) : subjects.length > 0 ? (
              <div className="space-y-8">
                {selectedSubjectIndex === null ? (
                  <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    {theorySubjects.length > 0 && (
                      <div>
                        <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest mb-4 px-2">Theory Subjects</h3>
                        <div className="flex flex-col gap-3">
                          {theorySubjects.map((item) => (
                            <button
                              key={item.originalIndex}
                              onClick={() => setSelectedSubjectIndex(item.originalIndex)}
                              className="w-full text-left bg-[#2196F3] hover:bg-[#1E88E5] text-white p-4 rounded-xl font-bold text-[13px] sm:text-sm shadow-md transition-all active:scale-[0.98] border border-blue-400"
                            >
                              {item.subject.title}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                    {labSubjects.length > 0 && (
                      <div>
                        <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest mb-4 px-2 mt-8">Lab Subjects</h3>
                        <div className="flex flex-col gap-3">
                          {labSubjects.map((item) => (
                            <button
                              key={item.originalIndex}
                              onClick={() => setSelectedSubjectIndex(item.originalIndex)}
                              className="w-full text-left bg-[#FF8C00] hover:bg-[#F57C00] text-white p-4 rounded-xl font-bold text-[13px] sm:text-sm shadow-md transition-all active:scale-[0.98] border border-orange-400"
                            >
                              {item.subject.title}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="bg-slate-50/50 p-4 md:p-6 rounded-[2.2rem] border border-slate-200/60 shadow-sm animate-in fade-in slide-in-from-right-8 duration-300">
                    <button 
                      onClick={() => setSelectedSubjectIndex(null)}
                      className="flex items-center gap-2 text-xs font-black text-slate-500 uppercase tracking-widest hover:text-indigo-600 transition-colors mb-6 px-2"
                    >
                      ← Back to Subjects
                    </button>
                    {/* Subject Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 px-2">
                      <div>
                        <h3 className="text-base font-[900] text-indigo-600 uppercase tracking-tight">
                          📘 {subjects[selectedSubjectIndex].title}
                        </h3>
                        {subjects[selectedSubjectIndex].courseCode && (
                          <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">
                            Course Code: {subjects[selectedSubjectIndex].courseCode} • Credits: {getSubjectCredit(subjects[selectedSubjectIndex].courseCode, subjects[selectedSubjectIndex].title)}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Units list */}
                    <div className="space-y-2">
                      {subjects[selectedSubjectIndex].units.map((unit, ui) => (
                        <UnitAccordion
                          key={ui}
                          unit={unit}
                          unitIndex={ui}
                          subjectName={subjects[selectedSubjectIndex].title}
                          semBranchKey={`${semBranchKey}_s${selectedSubjectIndex}`}
                          onToggle={() => setProgressTicker(p => p + 1)}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : currentSyllabus ? (
              <div className="prose prose-sm max-w-none prose-headings:font-black prose-h2:text-indigo-700 prose-h3:text-slate-800 prose-li:text-slate-600">
                <ReactMarkdown>{cleanSyllabusText(currentSyllabus.content)}</ReactMarkdown>
              </div>
            ) : (!selectedSem || !selectedBranch) ? (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="w-20 h-20 bg-indigo-50 rounded-full flex items-center justify-center mb-6">
                  <BookOpen size={32} className="text-indigo-400" />
                </div>
                <h3 className="text-lg font-black text-slate-800 uppercase tracking-tighter mb-2">Select to View Syllabus</h3>
                <p className="text-[12px] font-bold text-slate-500 max-w-xs">
                  Please select your branch and semester from the dropdowns above to view your detailed syllabus.
                </p>
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

      {/* ── Educational SEO Content ── */}
      <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-200/50 mt-12 max-w-4xl mx-auto prose prose-slate max-w-none shadow-sm mb-12 relative z-20 text-left">
        <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tighter mb-4">Official Bihar Engineering University (BEU) B.Tech Syllabus</h2>
        <p>
          Access the latest, officially approved <strong>B.Tech Syllabus for Bihar Engineering University (BEU)</strong>. Whether you are a fresher in your first year or a senior in your final semester, our platform provides a smart, interactive syllabus tracker. We have meticulously digitized the massive, hard-to-read PDF syllabus into a trackable checklist so you never miss an important academic topic or module.
        </p>

        <h3 className="text-xl font-bold mt-8 mb-4">How to Use the Smart Syllabus Tracker?</h3>
        <ul>
          <li><strong>Step 1:</strong> Select your specific Engineering Branch (e.g., Computer Science Engineering (CSE), Civil, Mechanical, Electrical).</li>
          <li><strong>Step 2:</strong> Choose your current Semester (Sem 1 to Sem 8).</li>
          <li><strong>Step 3:</strong> Click on any subject (e.g., Physics, Chemistry, Data Structures) to expand the units and see the chapter-wise topics breakdown.</li>
          <li><strong>Step 4:</strong> Check off topics as you study them. Watch your real-time progress bar increase, keeping you motivated and on track for your End Semester Exams.</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">Why is Following the BEU Syllabus So Important?</h3>
        <p>
          BEU strictly adheres to the AICTE model curriculum across all 38+ engineering colleges in Bihar. The End Semester examination question papers are framed exactly according to the module weightage and topics given in the official syllabus. Studying out of the syllabus is a waste of time. By tracking your academic progress here, you ensure that you cover 100% of the topics that will appear in your 70-mark external exams. Combine this with our BEU Notes and PYQs for maximum scoring potential.
        </p>

        <h3 className="text-xl font-bold mt-8 mb-4">Can I Download the BEU Syllabus as a PDF?</h3>
        <p>
          Yes! We have built a custom, high-speed PDF generator specifically for BEU students. Once you select your branch and semester, simply click the <strong>Download PDF</strong> button at the top of the page. It will instantly generate a clean, well-formatted, and branded PDF of your exact syllabus that you can print out or save to your mobile device for offline access during exam preparation.
        </p>
      </div>

    </div>
  );
}
