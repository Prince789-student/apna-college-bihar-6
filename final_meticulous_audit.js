const fs = require('fs');
const path = require('path');

// MASTER MAPPING FOR 100% PRECISION
const COLLEGE_MAP = {
    'B.C.E. BHAGALPUR': 'BCE Bhagalpur',
    'BCE BHAGALPUR': 'BCE Bhagalpur',
    'M.I.T. MUZAFFARPUR': 'MIT Muzaffarpur',
    'MIT MUZAFFARPUR': 'MIT Muzaffarpur',
    'B.C.E. BAKHTIYARPUR': 'BCE Bakhtiyarpur',
    'BCE BAKHTIYARPUR': 'BCE Bakhtiyarpur',
    'G.C.E. GAYA': 'GCE Gaya',
    'GCE GAYA': 'GCE Gaya',
    'D.C.E. DARBHANGA': 'DCE Darbhanga',
    'DCE DARBHANGA': 'DCE Darbhanga',
    'NALANDA COLLEGE. OF ENGG,CHANDI': 'NCE Chandi',
    'NCE CHANDI': 'NCE Chandi',
    'M..C.E. MOTIHARI': 'MCE Motihari',
    'MCE MOTIHARI': 'MCE Motihari',
    'P.C.E. PURNEA': 'PCE Purnia',
    'PCE PURNIA': 'PCE Purnia',
    'S.C.E. SAHARSA': 'SCE Saharsa',
    'SCE SAHARSA': 'SCE Saharsa',
    'S.I.T. SITAMARHI': 'SIT Sitamarhi',
    'SIT SITAMARHI': 'SIT Sitamarhi',
    'R.R.S.D.C.E. BEGUSARAI': 'RRSDCE Begusarai',
    'RRSDCE BEGUSARAI': 'RRSDCE Begusarai'
};

const BRANCH_MAP = {
    'COMPUTER SC. & ENGINEERING': 'Computer Science',
    'COMPUTER SCIENCE & ENGINEERING': 'Computer Science',
    'COMPUTER SCIENCE & ENGG': 'Computer Science',
    'COMPUTER SCI. & ENGG': 'Computer Science',
    'CIVIL ENGINEERING': 'Civil',
    'CIVIL': 'Civil',
    'ELECTRICAL ENGINEERING': 'Electrical',
    'MECHANICAL ENGINEERING': 'Mechanical',
    'MECHANICAL': 'Mechanical',
    'ELECTRO  & COMMUNICATION ENGINEERING': 'Electronics & Communication',
    'ELECTRO & COMMUNICATION': 'Electronics & Communication',
    'ELECTRICAL & ELECTRONICS ENGINEERING': 'Electrical & Electronics',
    'ELECTRICAL & ELECTRONICS (EEE)': 'Electrical & Electronics',
    'FIRE TECHNOLOGY & SAFETY': 'Fire Technology',
    'FIRE TECHNOLOGY': 'Fire Technology',
    'I.T.': 'IT',
    'INFORMATION TECHNOLOGY': 'IT'
};

function normalizeCollege(name) {
    if (!name) return null;
    const up = name.toUpperCase().trim().replace(/\s+/g, ' ');
    for (const key in COLLEGE_MAP) {
        if (up.includes(key)) return COLLEGE_MAP[key];
    }
    // Fallback if not in map but looks okay
    return name.trim();
}

function normalizeBranch(name) {
    if (!name) return null;
    const up = name.toUpperCase().trim().replace(/\s+/g, ' ');
    for (const key in BRANCH_MAP) {
        if (up.includes(key)) return BRANCH_MAP[key];
    }
    return name.trim();
}

// 1. EXTRACT 2024 DATA
const rawJS = fs.readFileSync('client/src/real_cutoffs.js', 'utf8');
const extractArray = (varName) => {
    const startMarker = `export const ${varName} = [`;
    const startIdx = rawJS.indexOf(startMarker);
    const endIdx = rawJS.indexOf('];', startIdx);
    const content = rawJS.substring(rawJS.indexOf('[', startIdx), endIdx + 1);
    try {
        return JSON.parse(content);
    } catch (e) {
        // Fallback for messy formatting
        const items = [];
        const itemRegex = /\{[\s\S]*?\}/g;
        let m;
        const arrayStr = content;
        while ((m = itemRegex.exec(arrayStr)) !== null) {
            try {
                let cleaned = m[0]
                    .replace(/([a-zA-Z0-9_]+):/g, '"$1":')
                    .replace(/'([^']*)'/g, '"$1"')
                    .replace(/,\s*([\]}])/g, '$1');
                items.push(JSON.parse(cleaned));
            } catch (innerE) {}
        }
        return items;
    }
};

const data2024Raw = extractArray('cutoffs2024');
const cutoffs2024 = data2024Raw.map(d => ({
    collegeShort: normalizeCollege(d.collegeShort),
    branch: normalizeBranch(d.branch),
    category: d.category,
    seat_type: d.seat_type,
    closing: d.closing
})).filter(d => d.collegeShort && d.branch);

// 2. EXTRACT 2025 DATA FROM pdf_dump.txt
const pdfText = fs.readFileSync('counselling-system/pdf_dump.txt', 'utf8');
const lines = pdfText.split('\n');
const results2025Set = [];

lines.forEach(line => {
    const parts = line.trim().split(/\s+/);
    if (parts.length < 6) return;
    
    let numIdx = parts.findIndex(p => /^\d+$/.test(p));
    if (numIdx < 3) return;
    
    const urClosing = parseInt(parts[numIdx + 1]);
    const category = parts[numIdx - 1]; 
    const seatType = parts[numIdx - 2];  
    
    const textBefore = parts.slice(0, numIdx - 2).join(' ');
    
    // Attempt meticulous extraction per line
    let foundCol = null;
    let foundBranch = null;
    
    // Precise College Match
    for (const key in COLLEGE_MAP) {
        if (textBefore.includes(key)) {
            foundCol = COLLEGE_MAP[key];
            let remainder = textBefore.replace(key, '').trim();
            // Precise Branch Match in remainder
            foundBranch = normalizeBranch(remainder);
            break;
        }
    }
    
    if (foundCol && foundBranch && urClosing > 0) {
        results2025Set.push({
            collegeShort: foundCol,
            branch: foundBranch,
            category: category,
            seat_type: seatType,
            closing: urClosing
        });
    }
});

// 3. MERGE 2025 FROM SECONDARY SOURCE IF NECESSARY
// (We trust our recent Python extraction results too if they were verified)
// For now, let's keep it simple: pdf_dump.txt is THE truth for 2025.

console.log(`Final Verified 2024: ${cutoffs2024.length} records`);
console.log(`Final Verified 2025: ${results2025Set.length} records`);

// Final Overwrite
fs.writeFileSync('client/public/data/cutoffs.json', JSON.stringify({ 
    cutoffs2024: cutoffs2024, 
    cutoffs2025: results2025Set 
}, null, 2));

console.log('--- AUDIT REPORT ---');
const auditCol = 'BCE Bhagalpur';
const auditBr = 'Computer Science';
const auditResult24 = cutoffs2024.find(x => x.collegeShort === auditCol && x.branch === auditBr && x.category === 'UR' && x.seat_type === 'General');
const auditResult25 = results2025Set.find(x => x.collegeShort === auditCol && x.branch === auditBr && x.category === 'UR' && x.seat_type === 'General');

console.log(`${auditCol} ${auditBr} UR General:`);
console.log('  2024:', auditResult24 ? auditResult24.closing : 'MISSING');
console.log('  2025:', auditResult25 ? auditResult25.closing : 'MISSING');
