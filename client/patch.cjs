const fs = require('fs');
const file = 'c:/Apna College Bihar/client/src/pages/BeuSyllabus.jsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Fix cleanTitle logic (since it is missing or doesn't work well)
// Wait, is cleanTitle in the current file? Let's check.
const cleanTitleMatch = content.match(/function parseSyllabusIntoSubjects/);
if (cleanTitleMatch) {
  content = content.replace(/function parseSyllabusIntoSubjects\(rawText\) {/, `
function cleanTitleStr(s) {
  let res = s.replace(/[^\\x20-\\x7E]/g, '');
  res = res.replace(/["'”]/g, '');
  const firstAlpha = res.search(/[A-Za-z0-9]/);
  if (firstAlpha !== -1) res = res.substring(firstAlpha);
  return res.trim();
}

// Helper: split a block of text into individual topics (strictly by comma)
function splitIntoTopics(text) {
  if (!text || text.length < 5) return [];
  let t = text.trim();
  t = t.replace(/\\.\\s*$/, '');
  const parts = [];
  let depth = 0;
  let current = '';
  for (let i = 0; i < t.length; i++) {
    const ch = t[i];
    if (ch === '(' || ch === '[') depth++;
    if (ch === ')' || ch === ']') depth--;
    if (depth === 0 && ch === ',') {
      if (current.trim().length > 3) parts.push(current.trim());
      current = '';
    } else {
      current += ch;
    }
  }
  if (current.trim().length > 3) parts.push(current.trim());
  return parts;
}

function parseSyllabusIntoSubjects(rawText) {`);
}

// 2. We need to split topics where they are appended.
// In the current file, topics are accumulated and then pushed. We can just run splitIntoTopics on the final subject tree.
// At the end of parseSyllabusIntoSubjects:
content = content.replace(/return subjects;\n}/, `
  // Post-process: split comma-separated topics, and clean titles
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
  return subjects;
}`);

// 3. Update TopicRow to include Inline YouTube player
content = content.replace(/function TopicRow[\s\S]*?className="text-\[10px\] font-black text-indigo-500 uppercase tracking-\[0\.2em\]">\{topic\.text\}<\/p>\n\s*<\/div>\n\s*\);\n\s*}\n\n\s*const ytQuery = encodeURIComponent\(`\$\{topic\.text\} \$\{subjectName\} BEU B\.Tech in Hindi`\);/, `function TopicRow({ topic, doneKey, subjectName, onToggle }) {
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

  const ytQuery = encodeURIComponent(\`\${topic.text} \${subjectName} BEU B.Tech in Hindi\`);`);

content = content.replace(/<div className={`flex flex-col md:flex-row md:items-center justify-between gap-3 px-4 py-3\.5 border-b border-slate-100 group transition-all \$\{done \? 'bg-emerald-50\/50' : 'hover:bg-slate-50'\}`}>[\s\S]*?<\/div>\n\s*<\/div>\n\s*\);\n}/, `<div className={\`flex flex-col px-4 py-3.5 border-b border-slate-100 group transition-all \${done ? 'bg-emerald-50/50' : 'hover:bg-slate-50'}\`}>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div className="flex items-start gap-3 flex-1 min-w-0">
          <button 
            onClick={toggleDone} 
            className={\`mt-0.5 flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all \${done ? 'bg-emerald-500 border-emerald-500' : 'border-slate-300 hover:border-emerald-400'}\`}
          >
            {done && <svg viewBox="0 0 12 12" width="10" height="10" fill="none" stroke="white" strokeWidth="2"><polyline points="1,6 4,9 11,3"/></svg>}
          </button>
          <p className={\`text-[13px] md:text-sm font-semibold leading-relaxed \${done ? 'line-through text-slate-400' : 'text-slate-800'}\`}>
            {topic.text}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-1.5 pl-8 md:pl-0 flex-shrink-0 opacity-90 md:opacity-60 md:group-hover:opacity-100 transition-opacity">
          <button
            onClick={() => setShowVideo(!showVideo)}
            className="flex items-center gap-1.5 px-2.5 py-1.5 md:px-2 md:py-1 bg-red-50 hover:bg-red-600 text-red-600 hover:text-white rounded-xl md:rounded-lg text-[10px] md:text-[9px] font-black uppercase tracking-wide transition-all active:scale-95 shadow-sm"
          >
            <svg viewBox="0 0 24 24" width="11" height="11" fill="currentColor"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
            {showVideo ? 'Close' : 'YouTube'}
          </button>
          <button
            onClick={toggleDone}
            className={\`px-2.5 py-1.5 md:px-2 md:py-1 rounded-xl md:rounded-lg text-[10px] md:text-[9px] font-black uppercase tracking-wide transition-all active:scale-95 shadow-sm \${done ? 'bg-emerald-500 text-white' : 'bg-slate-100 hover:bg-emerald-500 text-slate-500 hover:text-white'}\`}
          >
            {done ? '✓ Done' : 'Mark Done'}
          </button>
        </div>
      </div>
      {showVideo && (
        <div className="mt-4 rounded-xl overflow-hidden shadow-lg border border-slate-200 aspect-video w-full bg-slate-900">
          <iframe 
            width="100%" 
            height="100%" 
            src={\`https://www.youtube.com/embed?listType=search&list=\${ytQuery}\`}
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
}`);

fs.writeFileSync(file, content);
console.log('Successfully patched BeuSyllabus.jsx');
