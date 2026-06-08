const fs = require('fs');
const file = 'client/public/data/syllabus.json';
let data = JSON.parse(fs.readFileSync(file, 'utf8'));

data.forEach(d => {
  if (d.content) {
    // 1. Fix "#### 1. Topic \n : 2 hrs" -> "#### 1. Topic (2 hrs)"
    d.content = d.content.replace(/(####.*?)\n:\s+(\d+\s*hrs?)/gi, '$1 ($2)');
    
    // 2. Fix "#### 2. Topic: 3 hrs" -> "#### 2. Topic (3 hrs)"
    d.content = d.content.replace(/(####.*?):\s+(\d+\s*hrs?)/gi, '$1 ($2)');
    
    // 3. Remove weird line breaks in sentences (lines not ending with . or : or - and not starting with #)
    // This is a bit tricky with regex, so we'll split by lines
    let lines = d.content.split('\n');
    let newLines = [];
    for(let i=0; i<lines.length; i++) {
        let line = lines[i];
        
        // If line is just text without bullets, and previous line was text without bullets, join them
        // Wait, simpler approach: just ensure every long sentence starts with a bullet point '-'
        // Let BeuSyllabus.jsx handle it? No, if we add '-' to every topic line, the UI will parse it as a single topic!
        
        let trimmed = line.trim();
        if (trimmed && !trimmed.startsWith('#') && !trimmed.startsWith('-') && !trimmed.startsWith('•') && !/^\d+\./.test(trimmed) && trimmed !== '**Course Code:**' && !trimmed.startsWith('**Course')) {
            if (trimmed.length > 30) {
                 // It's a descriptive text. Let's bullet point it if it's not a continuation.
                 // Actually, if it's a continuation of the previous line, we should merge.
                 if (newLines.length > 0 && newLines[newLines.length-1].startsWith('-')) {
                     newLines[newLines.length-1] += ' ' + trimmed;
                     continue; // Skip adding a new line
                 } else {
                     line = '- ' + trimmed;
                 }
            }
        }
        newLines.push(line);
    }
    d.content = newLines.join('\n');
  }
});

fs.writeFileSync(file, JSON.stringify(data, null, 2));
console.log("Formatting fixed!");
