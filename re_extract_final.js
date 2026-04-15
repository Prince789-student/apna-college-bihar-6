const fs = require('fs');
const path = require('path');

// 1. EXTRACT 2024 DATA FROM real_cutoffs.js
const rawJS = fs.readFileSync('client/src/real_cutoffs.js', 'utf8');
const extractArray = (varName) => {
    const startMarker = `export const ${varName} = [`;
    const startIdx = rawJS.indexOf(startMarker);
    const endIdx = rawJS.indexOf('];', startIdx);
    const content = rawJS.substring(rawJS.indexOf('[', startIdx), endIdx + 1);
    return JSON.parse(content);
};
const cutoffs2024 = extractArray('cutoffs2024');

// 2. EXTRACT 2025 DATA FROM pdf_dump.txt (OFFICIAL ROUND 1)
const pdfText = fs.readFileSync('counselling-system/pdf_dump.txt', 'utf8');
const lines = pdfText.split('\n');
const cutoffs2025 = [];

const collegeMap = {
    'B.C.E. BHAGALPUR': 'BCE Bhagalpur',
    'M.I.T. MUZAFFARPUR': 'MIT Muzaffarpur',
    'B.C.E. BAKHTIYARPUR': 'BCE Bakhtiyarpur',
    'G.C.E. GAYA': 'GCE Gaya',
    'D.C.E. DARBHANGA': 'DCE Darbhanga',
    'NALANDA COLLEGE. OF ENGG,CHANDI': 'NCE Chandi',
    'M..C.E. MOTIHARI': 'MCE Motihari',
    'P.C.E. PURNEA': 'PCE Purnia',
    'S.I.T. SITAMARHI': 'SIT Sitamarhi',
    'R.R.S.D.C.E. BEGUSARAI': 'RRSDCE Begusarai',
    'B.P.M.C.E. MADHEPURA': 'BPMCE Madhepura'
};

const branchMap = {
    'COMPUTER SC. & ENGINEERING': 'Computer Science',
    'COMPUTER SCIENCE & ENGG': 'Computer Science',
    'COMPUTER SCI. & ENGG': 'Computer Science',
    'I.T.': 'IT',
    'CIVIL ENGINEERING': 'Civil',
    'ELECTRICAL ENGINEERING': 'Electrical',
    'MECHANICAL ENGINEERING': 'Mechanical',
    'ELECTRO  & COMMUNICATION ENGINEERING': 'Electronics & Communication',
    'ELECTRICAL & ELECTRONICS ENGINEERING': 'Electrical & Electronics',
    'FIRE TECHNOLOGY & SAFETY': 'Fire Technology'
};

lines.forEach(line => {
    // Regex to match: INSTITUTE BRANCH SEAT_TYPE CATEGORY UR_OPEN UR_CLOSE CAT_OPEN CAT_CLOSE
    // Example: B.C.E. BHAGALPUR COMPUTER SC. & ENGINEERING General UR 12 62
    const parts = line.trim().split(/\s+/);
    if (parts.length < 6) return;
    
    // Find where the numbers start
    let numIdx = parts.findIndex(p => /^\d+$/.test(p));
    if (numIdx === -1) return;
    
    const urClosing = parseInt(parts[numIdx + 1]);
    const category = parts[numIdx - 1]; // UR, BC, EBC, etc.
    const seatType = parts[numIdx - 2];  // General, Female
    
    // Reconstruct College and Branch from the first parts
    const textBefore = parts.slice(0, numIdx - 2).join(' ');
    
    // Find the college in the text
    let foundCol = null;
    let foundBranch = "Unknown";
    
    for (const key in collegeMap) {
        if (textBefore.includes(key)) {
            foundCol = collegeMap[key];
            const remaining = textBefore.replace(key, '').trim();
            foundBranch = branchMap[remaining] || remaining;
            break;
        }
    }
    
    if (foundCol && urClosing > 0) {
        cutoffs2025.push({
            collegeShort: foundCol,
            branch: foundBranch,
            category: category,
            seat_type: seatType,
            closing: urClosing
        });
    }
});

console.log(`Extracted 2024: ${cutoffs2024.length} items`);
console.log(`Extracted 2025: ${cutoffs2025.length} items`);

// Audit check: BCE Bhagalpur CS UR General
const audit25 = cutoffs2025.find(x => x.collegeShort === 'BCE Bhagalpur' && x.branch === 'Computer Science' && x.category === 'UR' && x.seat_type === 'General');
console.log('AUDIT 2025 (BCE Bhagalpur CS UR):', audit25);

fs.writeFileSync('client/public/data/cutoffs.json', JSON.stringify({ cutoffs2024, cutoffs2025 }));
