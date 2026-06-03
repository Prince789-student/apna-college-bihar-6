const fs = require('fs');

const path = './public/data/syllabus.json';
const data = JSON.parse(fs.readFileSync(path, 'utf8'));

let sem1Index = -1;
let sem2Index = -1;

data.forEach((item, index) => {
    if (item.branch === 'mech' && item.semester === 'sem1') sem1Index = index;
    if (item.branch === 'mech' && item.semester === 'sem2') sem2Index = index;
});

if (sem1Index !== -1 && sem2Index !== -1) {
    const tempContent = data[sem1Index].content;
    data[sem1Index].content = data[sem2Index].content;
    data[sem2Index].content = tempContent;
    
    fs.writeFileSync(path, JSON.stringify(data, null, 2), 'utf8');
    console.log('Successfully swapped mech sem1 and sem2.');
} else {
    console.log('Could not find mech sem1 or sem2.');
}
