const fs = require('fs');
const content = fs.readFileSync('c:/Users/princ/Downloads/ai/edu-platform-full/client/src/real_cutoffs.js', 'utf8');

const regex = /"collegeShort":\s*"MIT Muzaffarpur",\s*"branch":\s*"([^"]+)"/g;
const branches = new Set();
let match;

while ((match = regex.exec(content)) !== null) {
  branches.add(match[1]);
}

console.log('--- MIT MUZAFFARPUR BRANCHES ---');
Array.from(branches).sort().forEach(b => console.log(b));
console.log('--- END ---');
