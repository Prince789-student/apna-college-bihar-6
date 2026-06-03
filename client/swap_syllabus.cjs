const fs = require('fs');

const path = './public/data/syllabus.json';
const data = JSON.parse(fs.readFileSync(path, 'utf8'));

const branchesToSwap = ['ee', 'eee', 'ece', 'mech'];
let swapCount = 0;

data.forEach(item => {
    if (branchesToSwap.includes(item.branch.toLowerCase())) {
        if (item.semester === 'sem1') {
            item.semester = 'sem2';
            swapCount++;
        } else if (item.semester === 'sem2') {
            item.semester = 'sem1';
            swapCount++;
        }
    }
});

fs.writeFileSync(path, JSON.stringify(data, null, 2), 'utf8');
console.log(`Successfully swapped semester for ${swapCount} entries.`);
