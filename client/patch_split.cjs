const fs = require('fs');
const file = 'c:/Apna College Bihar/client/src/pages/BeuSyllabus.jsx';
let text = fs.readFileSync(file, 'utf8');

// 1. Better splitIntoTopics
const newSplitIntoTopics = `function splitIntoTopics(text) {
  if (!text || text.length < 5) return [];
  
  // Convert period-space into comma-space so we can split everything by comma
  let t = text.trim();
  t = t.replace(/\\.\\s+([A-Z])/g, ', $1');
  t = t.replace(/\\.\\s*$/, '');
  
  const parts = [];
  let depth = 0;
  let current = '';
  for (let i = 0; i < t.length; i++) {
    const ch = t[i];
    if (ch === '(' || ch === '[') depth++;
    if (ch === ')' || ch === ']') depth--;
    if (ch === ',' && depth === 0) {
      parts.push(current);
      current = '';
    } else {
      current += ch;
    }
  }
  if (current) parts.push(current);
  return parts.map(x => x.trim().replace(/^:\\s*/, '')).filter(x => x.length > 2);
}`;

// replace old function
text = text.replace(/function splitIntoTopics\(text\) \{[\s\S]*?return parts\.map\(x => x\.trim\(\)\)\.filter\(x => x\.length > 2\);\n\}/, newSplitIntoTopics);

// 2. Sort subjects to put Labs at the end
// Find where parseSyllabusIntoSubjects returns subjects and sort it before returning
text = text.replace(/return subjects;\n\}/, `  return subjects.sort((a, b) => {
    const aIsLab = /LAB/i.test(a.title) || /P$/i.test(a.courseCode);
    const bIsLab = /LAB/i.test(b.title) || /P$/i.test(b.courseCode);
    if (aIsLab && !bIsLab) return 1;
    if (!aIsLab && bIsLab) return -1;
    return 0;
  });
}`);

fs.writeFileSync(file, text);
console.log('Fixed splitIntoTopics and subject sorting.');
