const fs = require('fs');
const file = 'c:/Apna College Bihar/client/src/pages/BeuSyllabus.jsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Remove hrs from title
content = content.replace(/if \(isExplicitUnit\) {\s*title = trimmed\.replace[^;]+;/g, `if (isExplicitUnit) {
          title = trimmed.replace(/^#+\\s*📌?\\s*/, '').replace(/^UNIT\\s+/i, 'Unit ').trim();
          // Remove 7hrs, 7 hrs, etc from the title
          title = title.replace(/\\s*\\d+\\s*(?:hrs?|hours?)\\s*$/i, '');
        }`);

// 2. Fix splitIntoTopics to split by semicolon and prevent paragraph over-splitting
content = content.replace(/if \(depth === 0 && ch === ','\) {/g, `if (depth === 0 && (ch === ',' || ch === ';')) {`);

// 3. Stop paragraph oversplitting
content = content.replace(/function splitIntoTopics\(text\) {/g, `function splitIntoTopics(text) {
  if (!text || text.length < 5) return [];
  // If it's a huge paragraph with multiple sentences, don't split by commas, split by periods!
  if (text.split('. ').length > 2) {
    const s = text.split('. ').filter(x => x.trim().length > 5).map(x => x.trim().replace(/\\.$/, ''));
    if (s.length > 0) return s;
  }
`);

fs.writeFileSync(file, content);
console.log('Fixed unit titles and split logic');
