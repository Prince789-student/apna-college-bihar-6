const fs = require('fs');
const file = 'c:/Apna College Bihar/client/public/data/syllabus.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

['ee', 'eee', 'ece'].forEach(b => {
  const sem1 = data.find(d => d.branch === b && d.semester === 'sem1');
  const sem2 = data.find(d => d.branch === b && d.semester === 'sem2');
  if (sem1 && sem2) {
    const temp = sem1.content;
    sem1.content = sem2.content;
    sem2.content = temp;
    console.log(`Swapped Sem1 and Sem2 for ${b.toUpperCase()}`);
  }
});

// Write it back
fs.writeFileSync(file, JSON.stringify(data, null, 2));
