const fs = require('fs');
const data = JSON.parse(fs.readFileSync('client/public/data/syllabus.json', 'utf8'));
const sem2 = data.find(d => d.branch === 'cse' && d.semester === 'sem2');
const text = fs.readFileSync('client/src/pages/BeuSyllabus.jsx', 'utf8');

// extract cleanSyllabusText
const cleanFn = text.substring(text.indexOf('function cleanSyllabusText'), text.indexOf('function cleanTitleStr'));

// extract parseSyllabusIntoSubjects
const parseFn = text.substring(text.indexOf('function parseSyllabusIntoSubjects'), text.indexOf('return subjects;') + 16);

eval(cleanFn);
eval(parseFn);

const subjects = parseSyllabusIntoSubjects(sem2.content);
console.log('Number of subjects:', subjects.length);
subjects.forEach(s => {
  console.log(s.title, 'Units:', s.units.length);
});
