const fs = require('fs');
const rawData = JSON.parse(fs.readFileSync('c:/Apna College Bihar/client/public/data/syllabus.json', 'utf8'));

function cleanSyllabusText(rawText) {
  if (!rawText) return rawText;
  let text = rawText;
  text = text.replace(/(\w) -\n([a-z])/g, '$1-$2');
  text = text.replace(/(\w)-\n([a-z])/g, '$1-$2');
  const prefixes = ['co', 'non', 'pre', 'self', 'over', 'sub', 'inter', 'intra', 're', 'semi', 'multi', 'poly', 'micro', 'macro'];
  for (const p of prefixes) {
    text = text.replace(new RegExp(`\\b${p} -([a-z])`, 'gi'), `${p}-$1`);
  }
  text = text.replace(/^[–\-]?\s*\w{0,5}\s+\d\s+\d\s+\d\s+\d\s*$/gm, '');
  text = text.replace(/^\s*\(\s*\)\s*$/gm, '');
  text = text.replace(/^GROUP [AB] \d+ST.*SEM\s*$/gm, '');
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
    if (/^##\s+/.test(line)) { insideReferences = false; }
    if (insideReferences) {
      const refLine = line.replace(/^#+\s*/, '').trim();
      if (/^\d+[.)]\s*.+/.test(refLine)) {
        result.push(`- ${refLine.replace(/^\d+[.)]\s*/, '')}`);
        continue;
      }
      if (line.startsWith('####')) {
        const cleaned = line.replace(/^#+\s*/, '').trim();
        if (/^\d+[.)]\s*/.test(cleaned)) { result.push(`- ${cleaned.replace(/^\d+[.)]\s*/, '')}`); } else { result.push(`- ${cleaned}`); }
        continue;
      }
    }
    const unitMatch = line.match(/^UNIT\s+(\d+\.?\d*)\s*[-–:.]?\s*(.+?)\s+(\d+\s*hrs?)/i);
    if (unitMatch && !line.startsWith('#')) {
      const num = unitMatch[1].replace(/\.$/, '');
      const title = unitMatch[2].replace(/\s{2,}/g, ' ').trim();
      const hrs = unitMatch[3].trim();
      result.push(`\n### 📌 Unit-${num}: ${title} (${hrs})\n`);
      insideReferences = false;
      continue;
    }
    result.push(line);
  }
  return result.join('\n').replace(/\n{3,}/g, '\n\n');
}

const cleanTitle = (s) => {
  let res = s.replace(/[📘📌✨🔥💡📚🎯]+/g, '').replace(/\"/g, '');
  const firstAlpha = res.search(/[A-Za-z0-9]/);
  if (firstAlpha !== -1) { res = res.substring(firstAlpha); }
  return res.trim();
};

const stripGarbled = (s) => s.replace(/[ĐdD][ŸYÝ]["“"”][~OÒIŠ]/g, '').replace(/[📘📌✨🔥💡📚🎯]+/g, '').replace(/^[^\w(]+/, '').trim();

const splitIntoTopics = (text) => {
  if (!text || text.length < 5) return [];
  let t = text.replace(/\.\s*$/, '').trim();
  const parts = [];
  let depth = 0; let current = '';
  for (let i = 0; i < t.length; i++) {
    const ch = t[i];
    if (ch === '(' || ch === '[') depth++;
    if (ch === ')' || ch === ']') depth--;
    if (depth === 0 && ch === ',') {
      if (current.trim().length > 3) parts.push(current.trim());
      current = '';
    } else { current += ch; }
  }
  if (current.trim().length > 3) parts.push(current.trim());
  return parts;
};

function parseSyllabusIntoSubjects(rawText) {
  if (!rawText) return [];
  const cleaned = cleanSyllabusText(rawText);
  const subjectBlocks = cleaned.split(/\n(?=##\s)/);
  const subjects = [];

  for (const block of subjectBlocks) {
    if (!block.trim()) continue;
    const lines = block.split('\n');
    let subject = null;
    let currentUnit = null;
    let insideRefs = false;
    let refsUnit = null;
    let paragraphBuffer = '';

    const flushBuffer = () => {
      if (!paragraphBuffer.trim() || !currentUnit) return;
      const topics = splitIntoTopics(paragraphBuffer);
      topics.forEach(t => {
        const cleaned = t.replace(/\*\*/g, '').trim();
        if (/^\d+\s+\d+\s+\d+/.test(cleaned)) return;
        if (cleaned.length < 4) return;
        currentUnit.topics.push({ text: cleaned, isHeading: false });
      });
      paragraphBuffer = '';
    };

    for (let i = 0; i < lines.length; i++) {
      const trimmed = lines[i].trim();
      if (!trimmed) { flushBuffer(); continue; }
      if (/^##\s+/.test(trimmed)) {
        flushBuffer();
        let title = cleanTitle(trimmed.replace(/^##\s*/, ''));
        subject = { title, courseCode: '', units: [] };
        subjects.push(subject);
        currentUnit = null; insideRefs = false; refsUnit = null;
        continue;
      }
      if (!subject) continue;
      if (/^\*\*Course Code:\*\*/i.test(trimmed) || /^Course Code\s*:/i.test(trimmed)) {
        subject.courseCode = trimmed.replace(/^\*\*Course Code:\*\*\s*/i, '').replace(/^Course Code\s*:\s*/i, '').trim();
        continue;
      }
      if (/^(test|text)[/\s]+reference/i.test(trimmed) || /^\*\*📚 References/i.test(trimmed)) {
        flushBuffer();
        insideRefs = true;
        if (!refsUnit) { refsUnit = { title: '📚 References & Textbooks', topics: [], isRefsUnit: true }; subject.units.push(refsUnit); }
        continue;
      }
      if (insideRefs) {
        if (/^##\s+/.test(trimmed)) { insideRefs = false; refsUnit = null; continue; }
        const refText = trimmed.replace(/^-\s*/, '').replace(/^#+\s*/, '').replace(/^\d+[.)\s]+/, '').trim();
        if (refText.length > 8 && refsUnit) {
          if (/^[A-Z0-9\"\']/.test(refText) || refsUnit.topics.length === 0) { refsUnit.topics.push({ text: refText, isHeading: false }); }
          else if (refsUnit.topics.length > 0) { refsUnit.topics[refsUnit.topics.length - 1].text += ' ' + refText; }
        }
        continue;
      }
      if (/^\d+\s+\d+\s+\d+\s+\d+\s*$/.test(trimmed)) continue;
      if (/^[A-Z]{1,5}\s+\d\s+\d\s+\d\s+\d\s*$/.test(trimmed)) continue;
      if (/^(course outcome|pre.?requisite|list of report|perform any \d)/i.test(trimmed)) continue;
      if (/^###\s/.test(trimmed) && !/Unit/i.test(trimmed)) continue;

      const isUnitHeader = /^(?:#+|UNIT).*?\bUnit\s*[-–\s_—]*\d/i.test(trimmed);
      if (isUnitHeader) {
        flushBuffer(); insideRefs = false;
        let title = trimmed.replace(/^#+.*?Unit/i, 'Unit');
        title = cleanTitle(title);
        currentUnit = { title, topics: [] };
        subject.units.push(currentUnit);
        continue;
      }
      if (!currentUnit && !insideRefs) { currentUnit = { title: 'Topics', topics: [] }; subject.units.push(currentUnit); }
      if (!currentUnit) continue;

      if (/^####\s+/.test(trimmed)) {
        flushBuffer();
        const text = trimmed.replace(/^#+\s*/, '').replace(/^\d+[.)\s]+/, '').trim();
        const cleaned = text.replace(/\s*:?\s*\d+\s*hrs?\s*$/i, '').trim();
        if (!/^\d+$/.test(cleaned) && cleaned.length > 2) { currentUnit.topics.push({ text: cleaned, isHeading: true }); }
        continue;
      }
      if (/^\*\*.+\*\*:?$/.test(trimmed)) {
        flushBuffer();
        const text = trimmed.replace(/\*\*/g, '').replace(/:$/, '').trim();
        if (text.length > 2) { currentUnit.topics.push({ text, isHeading: true }); }
        continue;
      }
      if (/^\d+\.\s+[A-Z]/.test(trimmed) && trimmed.length < 80) {
        flushBuffer();
        let text = trimmed.replace(/^\d+\.\s*/, '').replace(/\*\*/g, '').trim();
        text = text.replace(/\s*:?\s*\d+\s*hrs?\s*$/i, '').trim();
        if (text.length > 3) { currentUnit.topics.push({ text, isHeading: true }); }
        continue;
      }
      if (/^[-*•]\s+/.test(trimmed)) {
        flushBuffer();
        const text = trimmed.replace(/^[-*•]\s+/, '').replace(/\*\*/g, '').trim();
        if (text.length > 3) { currentUnit.topics.push({ text, isHeading: false }); }
        continue;
      }
      let lineText = trimmed.replace(/^:\s*\d+\s*hrs?\s*/i, '').replace(/\*\*/g, '').trim();
      lineText = stripGarbled(lineText);
      if (/^\d\s+\d\s+\d/.test(lineText)) continue;
      if (lineText.length > 3) {
        if (paragraphBuffer) { paragraphBuffer += ' ' + lineText; } else { paragraphBuffer = lineText; }
      }
    }
    flushBuffer();
  }
  return subjects.filter(s => s.title).map(s => ({ ...s, units: s.units.filter(u => u.topics.length > 0) })).filter(s => s.units.length > 0);
}

const cse = rawData.find(d => d.branch === 'cse' && d.semester === 'sem1');
const subjects = parseSyllabusIntoSubjects(cse.content);

console.log('--- ENGINEERING MATH ---');
const math = subjects.find(s => s.title.includes('MATHEMATICS'));
if (math) {
  console.log('Title:', math.title);
  console.log('Unit 1 Title:', math.units[0].title);
  console.log('Unit 1 Topics:', math.units[0].topics);
}

console.log('\n--- ENGINEERING PHYSICS ---');
const physics = subjects.find(s => s.title.includes('PHYSICS'));
if (physics) {
  console.log('Title:', physics.title);
  console.log('Unit 1 Title:', physics.units[0].title);
  console.log('Unit 1 Topics:', physics.units[0].topics);
}
