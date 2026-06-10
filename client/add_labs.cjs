const fs = require('fs');
const file = 'c:/Apna College Bihar/client/public/data/syllabus.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

const pythonLabText = `
## PYTHON PROGRAMMING LAB
**Course Code:** 100218P

### List of Practical
1. Write a program to demonstrate basic data types in Python.
2. Write a program to implement control flow statements.
3. Write a program to implement functions and loops.
4. Write a program to demonstrate string operations.
5. Write a program to demonstrate lists, tuples, sets, and dictionaries.
6. Write a program to implement file handling.
`;

const iwdLabText = `
## INTRODUCTION TO WEB DESIGN LAB
**Course Code:** 100219P

### List of Practical
1. Design a webpage using basic HTML tags.
2. Design a webpage using HTML forms and multimedia.
3. Design a webpage using CSS for styling and layout.
4. Write a JavaScript program to demonstrate basic scripting.
5. Write a JavaScript program to demonstrate DOM manipulation and events.
6. Design a responsive webpage using HTML, CSS, and JavaScript.
`;

let cseSem2 = data.find(d => d.branch === 'cse' && d.semester === 'sem2');
if (cseSem2) {
  if (!cseSem2.content.includes('PYTHON PROGRAMMING LAB')) {
    cseSem2.content += '\\n' + pythonLabText;
  }
  if (!cseSem2.content.includes('INTRODUCTION TO WEB DESIGN LAB')) {
    cseSem2.content += '\\n' + iwdLabText;
  }
}

fs.writeFileSync(file, JSON.stringify(data, null, 2));
console.log('Added Python Lab and IWD Lab to CSE Sem 2!');
