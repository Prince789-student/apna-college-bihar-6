const fs = require('fs');
const file = 'client/public/data/syllabus.json';
let data = JSON.parse(fs.readFileSync(file, 'utf8'));

data.forEach(d => {
  if (d.content) {
    let lines = d.content.split('\n');
    let newLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      let line = lines[i];
      let trimmed = line.trim();
      
      if (trimmed.startsWith('- ')) {
        let content = trimmed.substring(2);
        
        // If it's a very long bullet point, try to split it
        if (content.length > 80) {
            // First try semicolon
            if (content.includes(';')) {
                let parts = content.split(';').map(p => p.trim()).filter(p => p.length > 0);
                parts.forEach(p => newLines.push('- ' + p));
                continue;
            } 
            // Then try period + space
            else if (content.includes('. ')) {
                let parts = content.split(/\.\s+/).map(p => p.trim()).filter(p => p.length > 0);
                parts.forEach(p => {
                    if(!p.endsWith('.')) p += '.';
                    newLines.push('- ' + p);
                });
                continue;
            }
        }
      }
      newLines.push(line);
    }
    
    d.content = newLines.join('\n');
  }
});

fs.writeFileSync(file, JSON.stringify(data, null, 2));
console.log("Topic-wise formatting applied globally!");
