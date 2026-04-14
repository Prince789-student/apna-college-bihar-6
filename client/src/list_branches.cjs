const fs = require('fs');
const content = fs.readFileSync('c:/Users/princ/Downloads/ai/edu-platform-full/client/src/real_cutoffs.js', 'utf8');

const branchRegex = /"branch":\s*"([^"]+)"/g;
const branches = new Set();
let match;

while ((match = branchRegex.exec(content)) !== null) {
  branches.add(match[1].trim());
}

console.log('--- ALL BRANCHES FOUND ---');
Array.from(branches).sort().forEach(b => console.log(b));
console.log('--- END ---');
