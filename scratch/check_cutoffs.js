const fs = require('fs');
const data = JSON.parse(fs.readFileSync('client/public/data/cutoffs.json', 'utf8'));
console.log('2024 unique colleges:', Array.from(new Set(data.cutoffs2024.map(c => c.collegeShort))));
console.log('2025 unique colleges:', Array.from(new Set(data.cutoffs2025.map(c => c.collegeShort))));
