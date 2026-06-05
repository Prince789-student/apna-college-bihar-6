const fs = require('fs');
const path = require('path');

// Load colleges dynamically from UgeacData.js
let ugeacDataContent = fs.readFileSync('client/src/UgeacData.js', 'utf8');
ugeacDataContent = ugeacDataContent.replace('export const colleges =', 'const colleges =');
ugeacDataContent += '\nmodule.exports = { colleges };';

fs.writeFileSync('scratch/temp_ugeac_data_per.js', ugeacDataContent, 'utf8');
const { colleges } = require('./temp_ugeac_data_per.js');
fs.unlinkSync('scratch/temp_ugeac_data_per.js');

const cutoffsData = JSON.parse(fs.readFileSync('client/public/data/cutoffs.json', 'utf8'));

// Historical mapping from UgeacPredictor
const UGEAC_RANK_MAP = [
  { ur: 4, air: 28003 }, { ur: 13, air: 50299 }, { ur: 70, air: 81272 }, 
  { ur: 109, air: 92809 }, { ur: 156, air: 100028 }, { ur: 215, air: 109032 }, 
  { ur: 333, air: 127662 }, { ur: 436, air: 140082 }, { ur: 525, air: 150732 }, 
  { ur: 617, air: 162821 }, { ur: 716, air: 171028 }, { ur: 816, air: 181269 }, 
  { ur: 914, air: 188077 }, { ur: 1012, air: 197425 }, { ur: 1115, air: 209122 }, 
  { ur: 1209, air: 219690 }, { ur: 1307, air: 229952 }, { ur: 1404, air: 238780 }, 
  { ur: 1507, air: 247321 }, { ur: 1601, air: 257341 }, { ur: 1714, air: 268036 }, 
  { ur: 1821, air: 278080 }, { ur: 1930, air: 288768 }, { ur: 2041, air: 297962 }, 
  { ur: 2137, air: 306613 }, { ur: 2243, air: 315619 }, { ur: 2333, air: 323379 }, 
  { ur: 2425, air: 330324 }, { ur: 2522, air: 339013 }, { ur: 2615, air: 347652 }, 
  { ur: 2711, air: 355967 }, { ur: 2808, air: 364892 }, { ur: 2901, air: 373625 }, 
  { ur: 3003, air: 383352 }, { ur: 3101, air: 392168 }, { ur: 3207, air: 402310 }, 
  { ur: 3308, air: 413189 }, { ur: 3400, air: 421323 }, { ur: 3501, air: 430878 }, 
  { ur: 3596, air: 440370 }, { ur: 3693, air: 449449 }, { ur: 3795, air: 458443 }, 
  { ur: 3894, air: 467591 }, { ur: 3992, air: 476591 }, { ur: 4089, air: 484050 }, 
  { ur: 4184, air: 492240 }, { ur: 4288, air: 501868 }, { ur: 4377, air: 508894 }, 
  { ur: 4474, air: 518100 }, { ur: 4581, air: 529594 }, { ur: 4680, air: 542092 }, 
  { ur: 4776, air: 550964 }, { ur: 4876, air: 559448 }, { ur: 4966, air: 568797 }, 
  { ur: 5056, air: 577816 }, { ur: 5153, air: 587447 }, { ur: 5257, air: 597045 }, 
  { ur: 5353, air: 606934 }, { ur: 5441, air: 620541 }, { ur: 5542, air: 630524 }, 
  { ur: 5641, air: 641360 }, { ur: 5737, air: 651370 }, { ur: 5843, air: 661098 }, 
  { ur: 5946, air: 673598 }, { ur: 6056, air: 686974 }, { ur: 6159, air: 697844 }, 
  { ur: 6256, air: 707967 }, { ur: 6366, air: 720052 }, { ur: 6468, air: 732511 }, 
  { ur: 6582, air: 743681 }, { ur: 6692, air: 757517 }, { ur: 6800, air: 768611 }, 
  { ur: 6919, air: 781525 }, { ur: 7036, air: 795064 }, { ur: 7141, air: 806823 }, 
  { ur: 7245, air: 819493 }, { ur: 7360, air: 833200 }, { ur: 7466, air: 848290 }, 
  { ur: 7570, air: 859488 }, { ur: 7686, air: 874752 }, { ur: 7797, air: 888309 }, 
  { ur: 7912, air: 903348 }, { ur: 8026, air: 920910 }, { ur: 8130, air: 933806 }, 
  { ur: 8229, air: 948876 }, { ur: 8334, air: 965845 }, { ur: 8428, air: 978036 }, 
  { ur: 8531, air: 993492 }, { ur: 8643, air: 1010934 }, { ur: 8749, air: 1024049 }, 
  { ur: 8852, air: 1040387 }, { ur: 8951, air: 1055816 }, { ur: 9057, air: 1070983 }, 
  { ur: 9161, air: 1091239 }, { ur: 9269, air: 1108363 }, { ur: 9364, air: 1126814 }, 
  { ur: 9469, air: 1145041 }, { ur: 9577, air: 1167857 }, { ur: 9674, air: 1183901 }, 
  { ur: 9771, air: 1197906 }, { ur: 9873, air: 1219504 }, { ur: 9967, air: 1242227 }
];

function getUgeacRankFromAIR(air) {
  if (air <= UGEAC_RANK_MAP[0].air) {
    return Math.max(1, Math.floor((air / UGEAC_RANK_MAP[0].air) * UGEAC_RANK_MAP[0].ur));
  }
  for (let i = 0; i < UGEAC_RANK_MAP.length - 1; i++) {
    const p1 = UGEAC_RANK_MAP[i], p2 = UGEAC_RANK_MAP[i+1];
    if (air >= p1.air && air <= p2.air) {
      return Math.floor(p1.ur + ((air - p1.air) / (p2.air - p1.air)) * (p2.ur - p1.ur));
    }
  }
  const last = UGEAC_RANK_MAP[UGEAC_RANK_MAP.length - 1];
  return Math.floor(last.ur + (air - last.air) * 0.008);
}

function getAIRFromPercentile(p) {
  // Rough estimate of CRL/AIR rank based on 2025/2026 registration numbers (~1.4 Million candidates)
  return Math.floor((100 - p) * 14000);
}

function writePage(fileName, htmlContent) {
  fs.writeFileSync(path.join('client/public', fileName), htmlContent, 'utf8');
  fs.writeFileSync(path.join('server/public', fileName), htmlContent, 'utf8');
}

const percentiles = [95, 90, 85, 80, 75, 70, 65, 60, 55, 50];

percentiles.forEach(p => {
  const air = getAIRFromPercentile(p);
  const ugeacRank = getUgeacRankFromAIR(air);

  // Filter possible matches in 2025 cutoffs
  const matches = cutoffsData.cutoffs2025.filter(c => {
    return c.category === 'UR' && (c.seatType || c.seat_type || 'General') === 'General' && c.closing >= ugeacRank;
  });

  matches.sort((a, b) => a.closing - b.closing);

  let tableRows = '';
  if (matches.length === 0) {
    tableRows = `<tr><td colspan="4" style="text-align: center; color: #94a3b8; padding: 24px;">No standard options matches found in standard ranges.</td></tr>`;
  } else {
    matches.slice(0, 35).forEach(m => {
      tableRows += `
      <tr>
        <td><strong>${m.collegeShort}</strong></td>
        <td>${m.branch}</td>
        <td>${m.opening || '-'}</td>
        <td style="font-weight: 700; color: #2563eb;">${m.closing}</td>
      </tr>`;
    });
  }

  const fileName = `colleges-at-${p}-percentile-in-bihar.html`;
  const title = `Colleges at ${p} Percentile in Bihar | JEE Main rank cutoff — Apna College Bihar`;
  const description = `Find top engineering colleges and branches available at ${p} percentile in JEE Main for Bihar engineering admission. Check rank cutoff matrix.`;
  const keywords = `colleges at ${p} percentile bihar, jee main ${p} percentile colleges, bihar engineering cutoff ${p} percentile, ugeac predictor`;

  const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title}</title>
  <meta name="description" content="${description}" />
  <meta name="keywords" content="${keywords}" />
  <link rel="canonical" href="https://www.apnacollegebihar.online/${fileName}" />
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
    
    table { width: 100%; border-collapse: collapse; margin: 24px 0; font-size: 0.9rem; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); border: 1px solid #e2e8f0; }
    th { background: #1e3a5f; color: white; padding: 14px 16px; text-align: left; }
    td { padding: 14px 16px; border-bottom: 1px solid #e2e8f0; color: #334155; }
    tr:nth-child(even) td { background: #f8fafc; }
    
    .cta-box { background: linear-gradient(135deg, #1e3a5f, #2563eb); border-radius: 16px; padding: 28px; text-align: center; margin: 32px 0; color: white; }
    .cta-box h3 { color: white; margin-top: 0; font-size: 1.3rem; }
    .cta-btn { display: inline-block; background: white; color: #1e3a5f; padding: 14px 32px; border-radius: 10px; font-weight: 900; font-size: 1rem; text-decoration: none; margin-top: 10px; }
    
    footer { margin-top: 60px; padding-top: 24px; border-top: 2px solid #e2e8f0; text-align: center; color: #94a3b8; font-size: 0.8rem; }
    footer a { color: #64748b; }
  </style>
</head>
<body>

  <nav class="nav">
    <a class="nav-brand" href="/">⚡ Apna College Bihar</a>
    <a class="nav-cta" href="/dashboard/ugeac-predictor">Free Predictor</a>
  </nav>

  <div class="breadcrumb">
    <a href="/">Home</a> › <a href="/directory">Web Directory</a> › Colleges at ${p} Percentile
  </div>

  <span class="badge">Percentile Range Matches</span>
  <h1>Colleges Available at ${p} Percentile in JEE Main — Bihar Engineering</h1>
  <p class="subtitle">Estimated options mapping matching ~${p} percentile (Estimated AIR: ${air}, UGEAC Rank: ~${ugeacRank}) in Bihar state-wide counseling.</p>

  <h2>Possible College Options List</h2>
  <table>
    <thead>
      <tr>
        <th>College</th>
        <th>Branch Name</th>
        <th>Opening Rank</th>
        <th>Closing Rank</th>
      </tr>
    </thead>
    <tbody>
      ${tableRows}
    </tbody>
  </table>

  <div class="cta-box">
    <h3>🎯 Check your personal college chances</h3>
    <p>Predict your exact choices matching your rank dynamically with category multipliers.</p>
    <a class="cta-btn" href="/dashboard/ugeac-predictor">Predict My Options Now →</a>
  </div>

  <footer>
    <p>© 2026 Apna College Bihar — Bihar Engineering Students Ka Official Study Hub</p>
    <p><a href="/">Home</a> | <a href="/dashboard/ugeac-predictor">UGEAC Predictor</a> | <a href="/directory">Directory</a> | <a href="/privacy">Privacy Policy</a></p>
  </footer>

</body>
</html>`;

  writePage(fileName, htmlContent);
});

console.log("Successfully generated all JEE Main Percentile range landing pages!");
