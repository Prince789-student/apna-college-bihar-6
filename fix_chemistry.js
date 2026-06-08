const fs = require('fs');
const file = 'client/public/data/syllabus.json';
let data = JSON.parse(fs.readFileSync(file, 'utf8'));

data.forEach(d => {
  if (d.content && d.content.includes('## 📘 ENGINEERING CHEMISTRY')) {
    // We will extract the Chemistry section, reformat it, and put it back.
    let parts = d.content.split('## 📘 ENGINEERING CHEMISTRY');
    
    // parts[1] contains Chemistry and possibly subsequent subjects
    // Let's split by the next subject
    let chemAndRest = parts[1].split('## 📘');
    let chemText = chemAndRest[0];
    
    // Format chemText
    // Remove all newlines so it's one big string
    let flatText = chemText.replace(/\n/g, ' ');
    
    // Remove the starting "- UNIT 1.0" bullet if it exists
    flatText = flatText.replace(/- UNIT/g, 'UNIT');
    
    let formattedChem = flatText.replace(/UNIT (\d+\.\d+)[-\s]+(.*?)(\d+)\s*hrs\s*(.*?)(?=UNIT \d+\.\d+|$)/gi, function(match, num, title, hrs, topicsStr) {
        let topics = topicsStr.split(/\. /).filter(t => t.trim().length > 0).map(t => '- ' + t.trim() + (t.endsWith('.') ? '' : '.')).join('\n');
        return `\n\n### 📌 Unit ${num}: ${title.trim()} (${hrs.trim()} hrs)\n${topics}`;
    });
    
    chemAndRest[0] = '\n' + formattedChem + '\n\n';
    parts[1] = chemAndRest.join('## 📘');
    d.content = parts.join('## 📘 ENGINEERING CHEMISTRY');
  }
});

fs.writeFileSync(file, JSON.stringify(data, null, 2));
console.log("Chemistry formatted!");
