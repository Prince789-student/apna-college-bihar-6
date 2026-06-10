const fs = require('fs');

const syllabusPath = 'c:/Apna College Bihar/client/public/data/syllabus.json';
const data = JSON.parse(fs.readFileSync(syllabusPath, 'utf8'));

const sem2 = data.find(d => d.branch === 'cse' && d.semester === 'sem2');

if (sem2) {
  let content = sem2.content;
  
  // Extract INTRODUCTION TO WEB DESIGN block
  const iwdTheoryStart = content.indexOf('## INTRODUCTION TO WEB DESIGN\n');
  if (iwdTheoryStart !== -1) {
    const pythonLabStart = content.indexOf('## PYTHON PROGRAMMING LAB', iwdTheoryStart);
    
    if (pythonLabStart !== -1) {
      const iwdTheoryBlock = content.substring(iwdTheoryStart, pythonLabStart).trim();
      
      // Remove it from the current position
      content = content.substring(0, iwdTheoryStart) + content.substring(pythonLabStart);
      
      // Find PYTHON PROGRAMMING
      const pythonTheoryStart = content.indexOf('## PYTHON PROGRAMMING\n');
      if (pythonTheoryStart !== -1) {
        // Insert IWD Theory right before Python Theory
        content = content.substring(0, pythonTheoryStart) + iwdTheoryBlock + '\n\n' + content.substring(pythonTheoryStart);
        sem2.content = content;
        fs.writeFileSync(syllabusPath, JSON.stringify(data, null, 2));
        console.log('Successfully moved IWD Theory before Python Theory');
      } else {
        console.log('Could not find Python Theory');
      }
    } else {
      console.log('Could not find Python Lab after IWD Theory');
    }
  } else {
    console.log('Could not find IWD Theory');
  }
} else {
  console.log('Could not find CSE Sem 2');
}
