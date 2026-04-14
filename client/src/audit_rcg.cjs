const fs = require('fs');
const content = fs.readFileSync('c:/Users/princ/Downloads/ai/edu-platform-full/client/src/real_cutoffs.js', 'utf8');

const regex = /"category":\s*"RCG"/g;
let count = 0;
while (regex.exec(content) !== null) {
  count++;
}

console.log('--- RCG ENTRIES FOUND ---');
console.log('Total RCG entries:', count);
console.log('--- END ---');
