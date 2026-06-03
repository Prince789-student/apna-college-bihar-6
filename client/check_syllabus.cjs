const fs = require('fs');

const data = JSON.parse(fs.readFileSync('./public/data/syllabus.json', 'utf8'));

data.forEach(item => {
    const lines = item.content.split('\n');
    const subjects = lines.filter(line => line.startsWith('## 📘')).map(line => line.replace('## 📘', '').trim());
    console.log(`[${item.semester.toUpperCase()} - ${item.branch.toUpperCase()}]`);
    subjects.forEach(sub => console.log(`  - ${sub}`));
});
