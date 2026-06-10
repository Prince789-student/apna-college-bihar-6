const fs = require('fs');
const file = 'c:/Apna College Bihar/client/public/data/syllabus.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

data.forEach(d => {
  if (d.branch === 'cse' || d.branch === 'it') {
    // Remove all subjects starting with ENGINEERING GRAPHICS AND DESIGN
    // They are delimited by ##
    let blocks = d.content.split(/\n(?=##\s+)/);
    blocks = blocks.filter(b => !b.match(/##\s*📘\s*ENGINEERING GRAPHICS AND DESIGN/i));
    d.content = blocks.join('\n');
  }
});

fs.writeFileSync(file, JSON.stringify(data, null, 2));
console.log('Removed EGD from CSE/IT');
