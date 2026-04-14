const fs = require('fs');

const targetColleges = [
  { id: 101, short: "MIT Muzaffarpur", pdfMatch: "M.I.T. MUZAFFARPUR" },
  { id: 102, short: "BCE Bhagalpur", pdfMatch: "B.C.E. BHAGALPUR" },
  { id: 103, short: "GCE Gaya", pdfMatch: "G.C.E. GAYA" },
  { id: 104, short: "DCE Darbhanga", pdfMatch: "D.C.E. DARBHANGA" },
  { id: 105, short: "NCE Chandi", pdfMatch: "NALANDA COLLEGE. OF ENGG" },
  { id: 106, short: "MCE Motihari", pdfMatch: "M..C.E. MOTIHARI" },
  { id: 107, short: "LNJPIT Chapra", pdfMatch: "L.N.J.P.I.T." },
  { id: 108, short: "BCE Bakhtiyarpur", pdfMatch: "B.C.E. BAKHTIYARPUR" },
  { id: 109, short: "SIT Sitamarhi", pdfMatch: "S.I.T. SITAMARHI" },
  { id: 110, short: "RRSDCE Begusarai", pdfMatch: "R.R.S.D.C.E, BEGUSARAI" },
  { id: 111, short: "SCE Sasaram", pdfMatch: "S.C.E SASARAM" },
  { id: 112, short: "BPMCE Madhepura", pdfMatch: "B.P.M.C.E. MADHEPURA" },
  { id: 113, short: "KCE Katihar", pdfMatch: "K.C.E., KATIHAR" },
  { id: 114, short: "PCE Purnea", pdfMatch: "PURNEA COLLEGE OF ENGG." },
  { id: 115, short: "SCE Saharsa", pdfMatch: "SAHARSA COLLEGE OF ENGG." },
  { id: 116, short: "SCE Supaul", pdfMatch: "SUPAUL ENGG. COLLEGE" },
  { id: 117, short: "GEC Banka", pdfMatch: "GOVT. ENGG. COLLEGE, BANKA" },
  { id: 118, short: "GEC Vaishali", pdfMatch: "GOVT. ENGG. COLLEGE, VAISHALI" },
  { id: 119, short: "GEC Jamui", pdfMatch: "GOVT. ENGG. COLLEGE, JAMUI" },
  { id: 120, short: "GEC Nawada", pdfMatch: "GOVT. ENGG. COLLEGE, NAWADA" },
  { id: 121, short: "GEC Kishanganj", pdfMatch: "GOVT.ENGG. COLLEGE KISHANGANJ" },
  { id: 122, short: "GEC Munger", pdfMatch: "GOVT. ENGG.COLLEGE MUNGER" },
  { id: 123, short: "GEC Sheohar", pdfMatch: "GOVT ENGG. COLLEGE SHEOHAR" },
  { id: 124, short: "GEC Bettiah", pdfMatch: "GOVT ENGG COLLEGE W. CHAMPARAN" },
  { id: 125, short: "GEC Aurangabad", pdfMatch: "GOVT. ENGG. COLLEGE, AURANGABAD" },
  { id: 126, short: "GEC Kaimur", pdfMatch: "GOVT. ENGG. COLLEGE, KAIMUR" },
  { id: 127, short: "GEC Khagaria", pdfMatch: "GOVT. ENGG. COLLEGE, KHAGARIA" },
  { id: 128, short: "GEC Araria", pdfMatch: "SHRI PHANISHWAR NATH RENU ENGG. COLLEGE" },
  { id: 129, short: "GEC Arwal", pdfMatch: "GOVT. ENGG. COLLEGE, ARWAL" },
  { id: 130, short: "GEC Bhojpur", pdfMatch: "GOVT. ENGG. COLLEGE, BHOJPUR" },
  { id: 131, short: "GEC Buxar", pdfMatch: "GOVT. ENGG. COLLEGE, BUXAR" },
  { id: 132, short: "GEC Gopalganj", pdfMatch: "GOVT. ENGG. COLLEGE, GOPALGANJ" },
  { id: 133, short: "GEC Jehanabad", pdfMatch: "GOVT. ENGG. COLLEGE, JEHANABAD" },
  { id: 134, short: "GEC Madhubani", pdfMatch: "GOVT. ENGG. COLLEGE, MADHUBANI" },
  { id: 135, short: "GEC Samastipur", pdfMatch: "GOVT. ENGG. COLLEGE, SAMASTIPUR" },
  { id: 136, short: "GEC Sheikhpura", pdfMatch: "GOVT. ENGG. COLLEGE, SHEIKHPURA" },
  { id: 137, short: "GEC Siwan", pdfMatch: "GOVT. ENGG. COLLEGE, SIWAN" },
  { id: 138, short: "GEC Lakhisarai", pdfMatch: "GOVT. ENGG. COLLEGE OF LAKHISARAI" }
];

const branchMap = [
  { target: "Computer Science & Engineering", pdfKeywords: ["COMPUTER SC. & ENGINEERING", "COMPUTER SCIENCE & ENGG", "COMPUTER SC AND ENGG"] },
  { target: "Civil Engineering", pdfKeywords: ["CIVIL ENGINEERING", "CIVIL ENGG"] },
  { target: "Mechanical Engineering", pdfKeywords: ["MECHANICAL ENGINEERING"] },
  { target: "Electrical Engineering", pdfKeywords: ["ELECTRICAL ENGINEERING"] },
  { target: "Electrical & Electronics (EEE)", pdfKeywords: ["ELECTRICAL & ELECTRONICS ENGINEERING"] },
  { target: "Electronics & Communication", pdfKeywords: ["ELECTRO  & COMMUNICATION ENGINEERING", "ELECTRO AND COMMUNICATION"] },
  { target: "Information Technology", pdfKeywords: ["I.T."] },
  { target: "Leather Technology", pdfKeywords: ["LEATHER TECH"] },
  { target: "CSE (AI & ML)", pdfKeywords: ["ARTIFICAL INTELLIGENCE & MACHINE LEARNING", "ARTIFICIAL INTELLIGENCE & MACHINE LEARNING", "ARTIFICAL INTELLIGENCE"] },
  { target: "CSE (Data Science)", pdfKeywords: ["DATA SCIENCE"] },
  { target: "CSE (Cyber Security)", pdfKeywords: ["CYBER SECURITY"] },
  { target: "CSE (IoT)", pdfKeywords: ["INTERNET OF THINGS", "IOT"] },
  { target: "Aeronautical Engineering", pdfKeywords: ["AERONAUTICAL ENGG"] },
  { target: "Robotics and Automation", pdfKeywords: ["ROBOTICS", "ROBOTIC"] },
  { target: "Chemical Engineering", pdfKeywords: ["CHEMICAL ENGG"] },
  { target: "Mining Engineering", pdfKeywords: ["MINING ENGG"] },
  { target: "Fire Technology & Safety", pdfKeywords: ["FIRE TECHNOLOGY"] },
  { target: "Food Processing", pdfKeywords: ["FOOD PROCESSING"] },
  { target: "3D Animation", pdfKeywords: ["3-D ANIMATION"] },
  { target: "VLSI Design", pdfKeywords: ["VLSI DESIGN"] },
  { target: "Dairy Technology", pdfKeywords: ["DAIRY TECH"] },
  { target: "Audio Engineering", pdfKeywords: ["AUDIO ENGINEERING"] },
  { target: "Agriculture Engineering", pdfKeywords: ["AGRICULTURE ENGG"] },
  { target: "Bioinformatics", pdfKeywords: ["BIOINFORMATICS"] }
];

function processRows(rows) {
  const processed = [];
  rows.forEach(row => {
    const matchedCol = targetColleges.find(tc => row.raw.includes(tc.pdfMatch));
    if (matchedCol) {
      const matchedBranch = branchMap.find(bm => bm.pdfKeywords.some(k => row.raw.includes(k)));
      if (matchedBranch) {
        processed.push({
          collegeShort: matchedCol.short,
          branch: matchedBranch.target,
          category: row.category,
          seat_type: row.seat_type,
          closing: row.closing
        });
      }
    }
  });
  return processed;
}

const rows2024 = JSON.parse(fs.readFileSync('extract_2024.json'));
const rows2025 = JSON.parse(fs.readFileSync('extract_2025.json'));

const cutoffs2024 = processRows(rows2024);
const cutoffs2025 = processRows(rows2025);

const finalFileContent = `
export const cutoffs2024 = ${JSON.stringify(cutoffs2024, null, 2)};
export const cutoffs2025 = ${JSON.stringify(cutoffs2025, null, 2)};
`;
fs.writeFileSync('src/real_cutoffs.js', finalFileContent);
console.log(`Generated real_cutoffs.js with ${cutoffs2024.length} entries for 2024 and ${cutoffs2025.length} for 2025.`);
