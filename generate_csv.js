const fs = require('fs');
const path = require('path');

const data = JSON.parse(fs.readFileSync('client/public/data/syllabus.json', 'utf-8'));

const semesters = ['sem1', 'sem2', 'sem3', 'sem4'];
const branches = ['civil', 'mech', 'cse', 'ee', 'eee', 'ece'];

semesters.forEach(sem => {
  // Map to hold subjects for each branch
  const branchSubjects = {};
  branches.forEach(b => branchSubjects[b] = []);

  data.forEach(item => {
    if (item.semester === sem && branches.includes(item.branch)) {
      const content = item.content || '';
      const lines = content.split('\n');
      lines.forEach(line => {
        const match = line.match(/^##\s+(?:📘\s*)?(.+)/);
        if (match) {
          let subject = match[1].replace(/"/g, '').trim();
          branchSubjects[item.branch].push(subject);
        }
      });
    }
  });

  // Find max length
  let maxLen = 0;
  branches.forEach(b => {
    if (branchSubjects[b].length > maxLen) {
      maxLen = branchSubjects[b].length;
    }
  });

  if (maxLen > 0) {
    let csv = branches.map(b => b.toUpperCase()).join(',') + '\n';
    
    for (let i = 0; i < maxLen; i++) {
      let row = branches.map(b => {
        let subj = branchSubjects[b][i] || '';
        return `"${subj}"`;
      });
      csv += row.join(',') + '\n';
    }

    const filename = `${sem}_subjects.csv`;
    fs.writeFileSync(filename, csv);
    console.log(`Generated ${filename}`);
  }
});
