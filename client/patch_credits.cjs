const fs = require('fs');
const file = 'c:/Apna College Bihar/client/src/pages/BeuSyllabus.jsx';
let text = fs.readFileSync(file, 'utf8');

const getCreditsFn = `
function getSubjectCredit(courseCode, title) {
  if (/LAB/i.test(title) || /P$/i.test(courseCode || '')) {
    if (/graphics|design/i.test(title)) return '3';
    if (/workshop/i.test(title)) return '2';
    return '1.5';
  }
  if (/math|physics|chemistry|programming/i.test(title)) return '4';
  if (/english/i.test(title)) return '3';
  if (/web design|python/i.test(title)) return '3'; // theory
  return '3';
}
`;

// Insert it before parseSyllabusIntoSubjects
text = text.replace(/function parseSyllabusIntoSubjects/, getCreditsFn + '\\nfunction parseSyllabusIntoSubjects');

// Now update the Subject Header to include Credits
const oldHeader = `                        {subject.courseCode && (
                          <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">
                            Course Code: {subject.courseCode}
                          </p>
                        )}`;

const newHeader = `                        <p className="text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">
                          {subject.courseCode ? \`Course Code: \${subject.courseCode} • \` : ''}
                          Credits: {getSubjectCredit(subject.courseCode, subject.title)}
                        </p>`;

text = text.replace(oldHeader, newHeader);

// Improve mobile responsiveness by reducing margins and paddings
text = text.replace(/max-w-4xl mx-auto px-4 -mt-10/g, 'max-w-4xl mx-auto px-2 md:px-4 -mt-8 md:-mt-10');
text = text.replace(/p-6 bg-slate-50/g, 'p-4 md:p-6 bg-slate-50');

fs.writeFileSync(file, text);
console.log('Added credits and mobile responsiveness patches');
