const fs = require('fs');
const xlsx = require('xlsx');

const data = JSON.parse(fs.readFileSync('client/public/data/syllabus.json', 'utf-8'));

const semesters = ['sem1', 'sem2', 'sem3', 'sem4'];
const branches = ['cse', 'ece', 'ee', 'eee', 'civil', 'mech'];
const semNames = { 'sem1': '1st Semester', 'sem2': '2nd Semester', 'sem3': '3rd Semester', 'sem4': '4th Semester' };
const branchNames = {
  'cse': 'COMPUTER SCIENCE & ENGINEERING',
  'ece': 'ELECTRONICS & COMMUNICATION ENGG',
  'ee': 'ELECTRICAL ENGINEERING',
  'eee': 'ELECTRICAL & ELECTRONICS ENGG',
  'civil': 'CIVIL ENGINEERING',
  'mech': 'MECHANICAL ENGINEERING'
};

const wb = xlsx.utils.book_new();

semesters.forEach(sem => {
  const wsData = [];
  
  branches.forEach(branch => {
    const theorySubjects = [];
    
    data.forEach(item => {
      if (item.semester === sem && item.branch === branch) {
        const content = item.content || '';
        const subjectBlocks = content.split(/\n(?=##\s+)/);
        
        subjectBlocks.forEach(block => {
          const lines = block.split('\n');
          let title = '';
          
          for(let i=0; i<lines.length; i++) {
            const trimmed = lines[i].trim();
            if (/^##\s+/.test(trimmed)) {
              title = trimmed.replace(/^##\s*/, '').replace(/^📘\s*/, '').replace(/"/g, '').trim();
            }
          }
          
          if (title) {
             // Less aggressive filter: only exclude explicit LAB or PRACTICAL
             const isLab = /LAB\b/i.test(title) || /LABORATORY/i.test(title) || /PRACTICAL/i.test(title) || /SESSIONAL/i.test(title);
             if (!isLab) {
                theorySubjects.push(title);
             }
          }
        });
      }
    });

    if (theorySubjects.length > 0) {
      wsData.push([branchNames[branch] || branch.toUpperCase()]);
      wsData.push(['Subject Name', 'Notes', 'PYQ', 'Youtube Link']);
      theorySubjects.forEach(subj => {
        wsData.push([subj, '', '', '']);
      });
      wsData.push([]);
    }
  });

  const ws = xlsx.utils.aoa_to_sheet(wsData);
  
  ws['!cols'] = [
    { wch: 45 },
    { wch: 15 },
    { wch: 15 },
    { wch: 25 },
  ];

  xlsx.utils.book_append_sheet(wb, ws, semNames[sem] || sem);
});

xlsx.writeFile(wb, 'Theory_Subjects_Final.xlsx');
console.log('Excel file generated successfully.');
