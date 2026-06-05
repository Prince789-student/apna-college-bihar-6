const fs = require('fs');
const path = require('path');

// Load colleges dynamically from UgeacData.js
let ugeacDataContent = fs.readFileSync('client/src/UgeacData.js', 'utf8');
ugeacDataContent = ugeacDataContent.replace('export const colleges =', 'const colleges =');
ugeacDataContent += '\nmodule.exports = { colleges };';

fs.writeFileSync('scratch/temp_ugeac_data_comp.js', ugeacDataContent, 'utf8');
const { colleges } = require('./temp_ugeac_data_comp.js');
fs.unlinkSync('scratch/temp_ugeac_data_comp.js');

const cutoffsData = JSON.parse(fs.readFileSync('client/public/data/cutoffs.json', 'utf8'));

// Helper to find cutoff information
function getCollegeCutoffValue(collegeShort, year, branch, category = 'UR', seatType = 'General') {
  const dataset = year === 2025 ? cutoffsData.cutoffs2025 : cutoffsData.cutoffs2024;
  const match = dataset.find(c => {
    const isCol = c.collegeShort?.toLowerCase().trim() === collegeShort.toLowerCase().trim();
    const isBranch = c.branch?.toLowerCase().trim().includes(branch.toLowerCase().trim());
    const isCat = c.category?.toLowerCase().trim() === category.toLowerCase().trim();
    const isSeat = (c.seatType || c.seat_type || 'General').toLowerCase().trim() === seatType.toLowerCase().trim();
    return isCol && isBranch && isCat && isSeat;
  });
  return match ? match.closing : 'N/A';
}

function writeComparePage(fileName, htmlContent) {
  fs.writeFileSync(path.join('client/public/compare', fileName), htmlContent, 'utf8');
  fs.writeFileSync(path.join('server/public/compare', fileName), htmlContent, 'utf8');
}

// Create directories if they do not exist
if (!fs.existsSync('client/public/compare')) {
  fs.mkdirSync('client/public/compare', { recursive: true });
}
if (!fs.existsSync('server/public/compare')) {
  fs.mkdirSync('server/public/compare', { recursive: true });
}

// Generate compare pages for top combinations of colleges
const topColleges = colleges.filter(c => c.tier <= 3 || c.estd <= 2016);

console.log(`Generating head-to-head comparisons for ${topColleges.length} top colleges...`);

let generatedCount = 0;

for (let i = 0; i < topColleges.length; i++) {
  for (let j = i + 1; j < topColleges.length; j++) {
    const col1 = topColleges[i];
    const col2 = topColleges[j];

    const slug1 = col1.short.toLowerCase().replace(/[\s\.]+/g, '-');
    const slug2 = col2.short.toLowerCase().replace(/[\s\.]+/g, '-');
    const fileName = `${slug1}-vs-${slug2}.html`;

    const title = `${col1.short} vs ${col2.short} | Which is Better? Fees, Placement & Cutoff — Apna College Bihar`;
    const description = `Compare ${col1.name} (${col1.short}) and ${col2.name} (${col2.short}) head-to-head. Find side-by-side comparison of Estd, placements, fees, facilities, and UGEAC CSE cutoffs.`;
    const keywords = `${col1.short} vs ${col2.short}, which is better ${col1.short} or ${col2.short}, ${col1.short} vs ${col2.short} placements, bihar engineering college comparison`;

    // Cutoff values
    const cse25_1 = getCollegeCutoffValue(col1.short, 2025, 'Computer Science');
    const cse25_2 = getCollegeCutoffValue(col2.short, 2025, 'Computer Science');
    const cse24_1 = getCollegeCutoffValue(col1.short, 2024, 'Computer Science');
    const cse24_2 = getCollegeCutoffValue(col2.short, 2024, 'Computer Science');

    const civil25_1 = getCollegeCutoffValue(col1.short, 2025, 'Civil');
    const civil25_2 = getCollegeCutoffValue(col2.short, 2025, 'Civil');

    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title}</title>
  <meta name="description" content="${description}" />
  <meta name="keywords" content="${keywords}" />
  <link rel="canonical" href="https://www.apnacollegebihar.online/compare/${fileName}" />
  <meta name="robots" content="index, follow" />
  <meta name="author" content="Apna College Bihar" />
  <link rel="icon" href="/logo-acb.png" />
  
  <style>
    *, *::before, *::after { box-sizing: border-box; }
    body { font-family: 'Segoe UI', Arial, sans-serif; max-width: 960px; margin: 0 auto; padding: 0 16px 40px; color: #1e293b; line-height: 1.75; background: #f8fafc; }
    .nav { background: linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%); padding: 16px 24px; margin: 0 -16px 32px; display: flex; align-items: center; justify-content: space-between; gap: 12px; }
    .nav-brand { color: white; font-weight: 800; font-size: 1.1rem; text-decoration: none; letter-spacing: -0.02em; }
    .nav-cta { background: #2563eb; color: white; padding: 8px 18px; border-radius: 8px; font-size: 0.85rem; font-weight: 700; text-decoration: none; white-space: nowrap; }
    .breadcrumb { font-size: 0.8rem; color: #94a3b8; margin-bottom: 20px; }
    .breadcrumb a { color: #64748b; text-decoration: none; }
    .breadcrumb a:hover { color: #2563eb; }
    .badge { background: #eff6ff; color: #1d4ed8; padding: 4px 12px; border-radius: 20px; font-size: 0.7rem; font-weight: 900; text-transform: uppercase; letter-spacing: 0.08em; display: inline-block; margin-bottom: 12px; }
    h1 { font-size: 2rem; color: #0f172a; margin: 0 0 12px; letter-spacing: -0.03em; line-height: 1.25; }
    .subtitle { color: #475569; font-size: 1.05rem; margin-bottom: 28px; }
    h2 { font-size: 1.3rem; color: #1e40af; margin-top: 40px; padding-bottom: 8px; border-bottom: 2px solid #bfdbfe; }
    p { color: #475569; margin: 10px 0; }
    
    .comparison-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin: 32px 0; }
    .college-card { background: white; border: 1px solid #e2e8f0; border-radius: 16px; padding: 24px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); }
    .college-card h3 { margin-top: 0; color: #0f172a; font-size: 1.25rem; font-weight: 800; border-bottom: 1px solid #f1f5f9; padding-bottom: 12px; }
    
    table { width: 100%; border-collapse: collapse; margin: 24px 0; font-size: 0.9rem; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); border: 1px solid #e2e8f0; }
    th { background: #1e3a5f; color: white; padding: 14px 16px; text-align: left; }
    td { padding: 14px 16px; border-bottom: 1px solid #e2e8f0; color: #334155; }
    tr:nth-child(even) td { background: #f8fafc; }
    .highlight-win { font-weight: 700; color: #16a34a; }
    
    .cta-box { background: linear-gradient(135deg, #1e3a5f, #2563eb); border-radius: 16px; padding: 28px; text-align: center; margin: 32px 0; color: white; }
    .cta-box h3 { color: white; margin-top: 0; font-size: 1.3rem; }
    .cta-btn { display: inline-block; background: white; color: #1e3a5f; padding: 14px 32px; border-radius: 10px; font-weight: 900; font-size: 1rem; text-decoration: none; margin-top: 10px; }
    
    footer { margin-top: 60px; padding-top: 24px; border-top: 2px solid #e2e8f0; text-align: center; color: #94a3b8; font-size: 0.8rem; }
    footer a { color: #64748b; }
    @media (max-width: 640px) {
      .comparison-grid { grid-template-columns: 1fr; }
      h1 { font-size: 1.5rem; }
    }
  </style>
</head>
<body>

  <nav class="nav">
    <a class="nav-brand" href="/">⚡ Apna College Bihar</a>
    <a class="nav-cta" href="/dashboard/ugeac-predictor">Free Predictor</a>
  </nav>

  <div class="breadcrumb">
    <a href="/">Home</a> › <a href="/directory">Web Directory</a> › Compare ${col1.short} vs ${col2.short}
  </div>

  <span class="badge">Side-by-Side Comparison</span>
  <h1>${col1.short} vs ${col2.short} Comparison — Placements, Fees & Cutoffs</h1>
  <p class="subtitle">Complete technical comparison report between ${col1.name} (${col1.short}) and ${col2.name} (${col2.short}) based on recent UGEAC counselings statistics.</p>

  <div class="comparison-grid">
    <div class="college-card">
      <h3>${col1.short} Overview</h3>
      <p><strong>Establishment:</strong> Year ${col1.estd || 'Govt'}</p>
      <p><strong>Location:</strong> ${col1.location}, Bihar</p>
      <p><strong>Tier:</strong> Tier ${col1.tier}</p>
      <p>${col1.description || 'Government Engineering College under Department of Science, Technology and Technical Education.'}</p>
    </div>
    <div class="college-card">
      <h3>${col2.short} Overview</h3>
      <p><strong>Establishment:</strong> Year ${col2.estd || 'Govt'}</p>
      <p><strong>Location:</strong> ${col2.location}, Bihar</p>
      <p><strong>Tier:</strong> Tier ${col2.tier}</p>
      <p>${col2.description || 'Government Engineering College under Department of Science, Technology and Technical Education.'}</p>
    </div>
  </div>

  <h2>Parameter Comparison Table</h2>
  <table>
    <thead>
      <tr>
        <th>Parameters</th>
        <th>${col1.short}</th>
        <th>${col2.short}</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Establishment Year</strong></td>
        <td>${col1.estd || 'N/A'}</td>
        <td>${col2.estd || 'N/A'}</td>
      </tr>
      <tr>
        <td><strong>Location District</strong></td>
        <td>${col1.location}</td>
        <td>${col2.location}</td>
      </tr>
      <tr>
        <td><strong>Tier Rank (State level)</strong></td>
        <td>Tier ${col1.tier}</td>
        <td>Tier ${col2.tier}</td>
      </tr>
      <tr>
        <td><strong>UGEAC 2025 CSE Cutoff (UR)</strong></td>
        <td>${cse25_1}</td>
        <td>${cse25_2}</td>
      </tr>
      <tr>
        <td><strong>UGEAC 2024 CSE Cutoff (UR)</strong></td>
        <td>${cse24_1}</td>
        <td>${cse24_2}</td>
      </tr>
      <tr>
        <td><strong>UGEAC 2025 Civil Cutoff (UR)</strong></td>
        <td>${civil25_1}</td>
        <td>${civil25_2}</td>
      </tr>
    </tbody>
  </table>

  <div class="cta-box">
    <h3>🎯 Predict your UGEAC admission chances</h3>
    <p>Apna UGEAC state rank enter karein aur live options probability analysis check karein.</p>
    <a class="cta-btn" href="/dashboard/ugeac-predictor">Predict My College Option Now →</a>
  </div>

  <h2>Which College is Best For You?</h2>
  <p>If you prefer a historically established alumni network and older campus records, <strong>${col1.estd < col2.estd ? col1.short : col2.short}</strong> is generally considered superior since it was established in ${col1.estd < col2.estd ? col1.estd : col2.estd}. For CSE branch, prioritize the college with the lower closing UGEAC cutoff rank.</p>

  <footer>
    <p>© 2026 Apna College Bihar — Bihar Engineering Students Ka Official Study Hub</p>
    <p><a href="/">Home</a> | <a href="/dashboard/ugeac-predictor">UGEAC Predictor</a> | <a href="/directory">Directory</a> | <a href="/privacy">Privacy Policy</a></p>
  </footer>

</body>
</html>`;

    writeComparePage(fileName, htmlContent);
    generatedCount++;
  }
}

console.log(`Successfully generated ${generatedCount} static compare pages inside client & server public folders!`);
