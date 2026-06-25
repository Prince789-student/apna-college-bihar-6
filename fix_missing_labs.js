const fs = require('fs');
const path = './client/public/data/syllabus.json';
const data = JSON.parse(fs.readFileSync(path, 'utf8'));

const targetSubjects = ['CHEMISTRY', 'PHYSICS', 'MECHANICS', 'ELECTRICAL', 'ELECTRONICS', 'PROGRAMMING', 'GRAPHICS AND DESIGN', 'ENGLISH', 'MATERIALS', 'MEASUREMENTS', 'MACHINE'];

let addedCount = 0;

data.forEach(d => {
    let content = d.content;
    const headings = [...content.matchAll(/^##\s+(.+)/gm)].map(m => m[1].replace('📘', '').trim());
    
    headings.forEach(h => {
        const isTheory = !/LAB|PRACTICAL|SESSIONAL|WORKSHOP/i.test(h);
        if (isTheory) {
            targetSubjects.forEach(ts => {
                if (h.includes(ts) && !headings.some(lab => lab.includes(ts) && /LAB/i.test(lab))) {
                    // Extract course code of theory to guess lab course code
                    const escapedH = h.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                    const codeMatch = content.match(new RegExp(`## 📘 ${escapedH}\\n\\*\\*Course Code:\\*\\*\\s*([A-Za-z0-9]+)`));
                    let labCode = 'N/A';
                    if (codeMatch && codeMatch[1]) {
                        labCode = codeMatch[1] + 'P';
                    }
                    
                    const labName = h.replace(' (As per VRV syllabus)', '').replace(/ \d.*$/, '') + ' LAB';
                    
                    // Avoid duplicating
                    if (!content.includes(`## 📘 ${labName}`)) {
                        const newLabText = `\n\n---\n\n## 📘 ${labName}\n**Course Code:** ${labCode}\n\nPerform any 10 Experiments related to ${h}.\n\n#### 1. Introduction and Familiarization with lab equipment.\n#### 2. Basic experiments demonstrating fundamental principles.\n#### 3. Advanced practical applications.\n`;
                        content += newLabText;
                        addedCount++;
                        console.log(`Added ${labName} to ${d.branch} ${d.semester}`);
                        // Update headings to prevent adding it twice if targetSubjects has overlap
                        headings.push(labName);
                    }
                }
            });
        }
    });
    
    d.content = content;
});

if (addedCount > 0) {
    fs.writeFileSync(path, JSON.stringify(data, null, 2), 'utf8');
    console.log(`Successfully added ${addedCount} missing labs to syllabus.json.`);
} else {
    console.log('No missing labs found to add.');
}
