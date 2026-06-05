const fs = require('fs');
const path = require('path');

const data = JSON.parse(fs.readFileSync('client/public/data/cutoffs.json', 'utf8'));
const seatMatrixData = JSON.parse(fs.readFileSync('client/public/data/seat_matrix.json', 'utf8'));

// Load colleges dynamically from UgeacData.js
let ugeacDataContent = fs.readFileSync('client/src/UgeacData.js', 'utf8');
ugeacDataContent = ugeacDataContent.replace('export const colleges =', 'const colleges =');
ugeacDataContent += '\nmodule.exports = { colleges };';

// Write temp file
fs.writeFileSync('scratch/temp_ugeac_data.js', ugeacDataContent, 'utf8');
const { colleges } = require('./temp_ugeac_data.js');
fs.unlinkSync('scratch/temp_ugeac_data.js');

const normalizedMap = {
  "B.C.E. BHAGALPUR": "BCE Bhagalpur",
  "M.I.T. MUZAFFARPUR": "MIT Muzaffarpur",
  "B.C.E. BAKHTIYARPUR": "BCE Bakhtiyarpur",
  "G.C.E. GAYA": "GCE Gaya",
  "D.C.E. DARBHANGA": "DCE Darbhanga",
  "NALANDA COLLEGE. OF ENGG,CHANDI": "Nalanda College of Engineering, Chandi",
  "NCE CHANDI": "Nalanda College of Engineering, Chandi",
  "M..C.E. MOTIHARI": "MCE Motihari",
  "MCE MOTIHARI": "MCE Motihari",
  "P.C.E. PURNEA": "Purnea College of Engineering",
  "PURNEA COLLEGE OF ENGINEERING": "Purnea College of Engineering",
  "S.C.E. SAHARSA": "Saharsa College of Engineering",
  "SAHARSA COLLEGE OF ENGINEERING": "Saharsa College of Engineering",
  "S.C.E. SUPAUL": "Supaul College of Engineering",
  "SUPAUL COLLEGE OF ENGINEERING": "Supaul College of Engineering",
  "S.C.E. SASARAM": "SCE Sasaram",
  "B.P.M.C.E. MADHEPURA": "B.P.M.C.E. Madhepura",
  "S.I.T. SITAMARHI": "SIT Sitamarhi",
  "R.R.S.D.C.E. BEGUSARAI": "RRSDCE Begusarai",
  "LNJPIT CHAPRA": "LNJPIT Chapra",
  "KCE KATIHAR": "K.C.E. Katihar",
  "G.E.C. BANKA": "Government Engineering College, Banka",
  "G.E.C. VAISHALI": "Government Engineering College, Vaishali",
  "G.E.C. JAMUI": "Government Engineering College, Jamui",
  "G.E.C. NAWADA": "Government Engineering College, Nawada",
  "G.E.C. KISHANGANJ": "Government Engineering College, Kishanganj",
  "G.E.C. ARARIA": "Shri Phanishwar Renu Engineering College, Araria",
  "G.E.C. MUNGER": "Government Engineering College, Munger",
  "G.E.C. SHEOHAR": "Government Engineering College, Sheohar",
  "G.E.C. BETTIAH": "Government Engineering College, West Champaran",
  "G.E.C. WEST CHAMPARAN": "Government Engineering College, West Champaran",
  "G.E.C. AURANGABAD": "Government Engineering College, Aurangabad",
  "G.E.C. KAIMUR": "Government Engineering College, Kaimur",
  "G.E.C. GOPALGANJ": "Government Engineering College, Gopalganj",
  "G.E.C. MADHUBANI": "Government Engineering College, Madhubani",
  "G.E.C. SIWAN": "Government Engineering College, Siwan",
  "G.E.C. JEHANABAD": "Government Engineering College, Jehanabad",
  "G.E.C. ARWAL": "Government Engineering College, Arwal",
  "G.E.C. KHAGARIA": "Government Engineering College, Khagaria",
  "G.E.C. BUXAR": "Government Engineering College, Buxar",
  "G.E.C. BHOJPUR": "Government Engineering College, Bhojpur",
  "G.E.C. SHEIKHPURA": "Government Engineering College, Sheikhpura",
  "G.E.C. LAKHISARAI": "Government Engineering College, Lakhisarai",
  "G.E.C. SAMASTIPUR": "Government Engineering College, Samastipur"
};

// Branch specific descriptions, faculty profiles and internal details
function getBranchSpecificDetails(branchName, collegeShort) {
  const normName = branchName.toLowerCase();
  
  if (normName.includes('computer') || normName.includes('cse') || normName.includes('it') || normName.includes('information')) {
    return {
      description: `B.Tech Computer Science & Engineering (CSE / IT) at ${collegeShort} stands as the premier engineering domain. The course curriculum is designed in alignment with modern industrial needs, focusing heavily on Software Engineering, Data Structures & Algorithms (DSA), Operating Systems, DBMS, Artificial Intelligence, and Computer Networks.`,
      faculty: `The CSE faculty cohort consists of highly qualified teachers appointed via the Department of Science, Technology and Technical Education (DSTTE), Government of Bihar. Many professors hold Ph.D. or M.Tech credentials from leading institutions like IITs and NITs. They maintain standard office hours and run programming workshops to help students develop debugging skills.`,
      labs: `The department boasts state-of-the-art computer labs equipped with high-speed internet connectivity, compilers for standard languages (C++, Java, Python), database engines, and software engineering tools. A dedicated programming club supports competitive coding and hackathon participation.`,
      placements: `CSE graduates secure the highest placements in standard Bihar Central Pool Drives and campus recruitments. Key recruiters include major software organizations such as TCS, Wipro, Infosys, Tech Mahindra, and Cognizant, offering packages ranging from ₹3.6 LPA up to ₹15+ LPA.`
    };
  } else if (normName.includes('civil')) {
    return {
      description: `B.Tech Civil Engineering at ${collegeShort} provides comprehensive training in infrastructure design, geotechnical modeling, concrete construction, structural analysis, surveying, and fluid mechanics.`,
      faculty: `The Civil engineering department features experienced professors who emphasize practical learning and site planning. Many faculty members are actively involved in consultancy projects for public works and municipal assessments, bringing actual field engineering insights directly to the classroom.`,
      labs: `Practical labs include high-precision Concrete Technology setups, Soil Mechanics equipment, Surveying instruments (including Total Station and GPS systems), and Hydraulics lab structures. Fieldwork sessions are held regularly to ensure students get hands-on exposure.`,
      placements: `Civil engineering graduates at ${collegeShort} primarily target prestigious state public services (BPSC AE, WRD, RCD, PHED) or core construction giants like L&T, Tata Projects, and regional infrastructure contracting agencies.`
    };
  } else if (normName.includes('mechanical')) {
    return {
      description: `B.Tech Mechanical Engineering at ${collegeShort} offers robust mechanical system fundamentals, covering Thermodynamics, Machine Design, Fluid Mechanics, Kinematics, Heat Transfer, and CAD/CAM modeling structures.`,
      faculty: `The Mechanical department is staffed by seasoned academic instructors with research interests in thermal sciences, material sciences, and automation. Professors provide supportive mentoring for engineering design projects and technical events.`,
      labs: `Lab facilities include a fully functional Workshop (Smithy, Carpentry, Fitting), Internal Combustion Engine labs, Machine Kinematics tools, Heat Transfer rigs, and CAD workstations equipped with standard industry drafting software.`,
      placements: `Mechanical graduates consistently secure job offers in core industrial houses (like Tata Motors, L&T, Prism Cement), energy companies, or slide into software roles during central pool placement drives.`
    };
  } else if (normName.includes('electrical') || normName.includes('ee')) {
    return {
      description: `B.Tech Electrical Engineering at ${collegeShort} focuses on core power systems, control systems, electrical machinery, electrical measurements, microprocessors, and power distribution paradigms.`,
      faculty: `The Electrical engineering division consists of highly qualified professors specializing in power electronics and smart grids. They mentor students closely on academic research projects, electrical circuits troubleshooting, and system simulation.`,
      labs: `Students gain practical training in Electrical Machines labs (AC/DC motors and generators), Power System simulation setups, Electrical Measurements labs, and Microcontroller interfacing toolkits.`,
      placements: `Graduates find placement options in State Electricity Boards, NTPC, Power Grid Corporation of India, core industrial firms, and software companies through DSTTE central pool recruitment drives.`
    };
  } else if (normName.includes('electronics') || normName.includes('ece')) {
    return {
      description: `B.Tech Electronics & Communication Engineering (ECE) at ${collegeShort} blends hardware circuit design with digital communications, focusing on VLSI Design, Embedded Systems, Signal Processing, and Antenna Design.`,
      faculty: `The ECE faculty comprises modern research-oriented teachers with expertise in microelectronics and communication protocols. They guide students through circuit design, programming microcontrollers, and communication system simulations.`,
      labs: `The department features fully equipped Digital Electronics labs, Analog Circuits testing benches, VLSI Design tools, and Microprocessor interfacing labs with modern oscilloscope setups.`,
      placements: `ECE students target career paths in semiconductor firms, embedded software houses, telecom sector (Jio, Airtel), and major IT recruiters like TCS, Cognizant, and Wipro.`
    };
  } else {
    return {
      description: `B.Tech ${branchName} at ${collegeShort} offers specialized training in modern technological domains, focusing on practical learning and industry-relevant skill acquisition.`,
      faculty: `Faculty members are highly qualified professionals appointed through standard government channels, providing excellent mentorship and technical support for academic progress.`,
      labs: `Dedicated laboratory facilities are equipped with the necessary equipment and computational tools required for hands-on experimentation.`,
      placements: `Graduates are eligible to compete in both core technical sector recruitment drives and major off-campus or central pool IT recruitment drives.`
    };
  }
}

// Helper to standardise paths and write files
function writeSEOPage(fileName, htmlContent) {
  fs.writeFileSync(path.join('client/public', fileName), htmlContent, 'utf8');
  fs.writeFileSync(path.join('server/public', fileName), htmlContent, 'utf8');
}

// Generate Main College Cutoff Pages
function generateCollegeCutoffPage(college, year) {
  const curYear = String(year);
  const otherYear = (year === 2025) ? '2024' : '2025';
  
  const yearCutoffs = (year === 2025) ? data.cutoffs2025 : data.cutoffs2024;
  const collegeCutoffs = yearCutoffs.filter(c => {
    const key = c.collegeShort?.toUpperCase().trim();
    const formalName = normalizedMap[key] || c.collegeShort;
    return formalName === college.name || c.collegeShort === college.short || c.collegeShort === college.name;
  });

  collegeCutoffs.sort((a, b) => {
    if (a.branch !== b.branch) return a.branch.localeCompare(b.branch);
    if (a.category !== b.category) return a.category.localeCompare(b.category);
    return (a.seatType || a.seat_type || '').localeCompare(b.seatType || b.seat_type || '');
  });

  let tableRows = '';
  if (collegeCutoffs.length === 0) {
    tableRows = `<tr><td colspan="5" style="text-align: center; color: #94a3b8; padding: 24px;">No official round allotment cutoff data available for this year yet.</td></tr>`;
  } else {
    collegeCutoffs.forEach(row => {
      const seatTypeLabel = (row.seatType || row.seat_type || 'General') === 'Female' ? 'Female (F)' : 'General / Male';
      const branchName = row.branch;
      const isCSE = branchName.toLowerCase().includes('computer') || branchName.toLowerCase().includes('cse');
      const tag = isCSE ? '<span class="tag">CSE</span>' : '';
      
      tableRows += `
      <tr>
        <td><strong>${branchName}</strong> ${tag}</td>
        <td><span style="font-weight: 800; color: #1e3a5f;">${row.category}</span></td>
        <td>${seatTypeLabel}</td>
        <td style="font-family: monospace;">${row.opening || '-'}</td>
        <td style="font-family: monospace; font-weight: 700; color: #2563eb;">${row.closing}</td>
      </tr>`;
    });
  }

  const collegeSlug = college.short.toLowerCase().replace(/[\s\.]+/g, '-');
  const title = `${college.name} Cutoff Rank ${curYear} | Branch & Category-wise — Apna College Bihar`;
  const description = `${college.name} (${college.short}) UGEAC B.Tech cutoff rank for ${curYear}. Branch-wise and Category-wise (UR, EBC, BC, SC, ST) opening & closing ranks for Male and Female candidates.`;
  const keywords = `${college.short} cutoff rank ${curYear}, ${college.name} cutoff ${curYear}, ${college.short} ${curYear} closing rank, UGEAC ${curYear} ${college.short}, bihar engineering college ${college.location} cutoff`;

  const totalSeats = college.seats || '~360-420';
  const estd = college.estd ? `Estd ${college.estd}` : 'Govt';
  const location = college.location || 'Bihar';

  const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title}</title>
  <meta name="description" content="${description}" />
  <meta name="keywords" content="${keywords}" />
  <link rel="canonical" href="https://www.apnacollegebihar.online/${collegeSlug}-cutoff-rank-${curYear}.html" />
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
  <meta name="author" content="Apna College Bihar" />
  <meta name="geo.region" content="IN-BR" />
  <link rel="icon" href="/logo-acb.png" />
  <!-- Open Graph -->
  <meta property="og:type" content="article" />
  <meta property="og:url" content="https://www.apnacollegebihar.online/${collegeSlug}-cutoff-rank-${curYear}.html" />
  <meta property="og:title" content="${college.short} Cutoff Rank ${curYear} | Branch-wise Closing Rank" />
  <meta property="og:description" content="${college.name} UGEAC ${curYear} cutoff ranks branch-wise, category-wise for Male and Female candidates." />
  <meta property="og:site_name" content="Apna College Bihar" />

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
    h3 { font-size: 1.05rem; color: #334155; margin-top: 24px; }
    p { color: #475569; margin: 10px 0; }
    a { color: #2563eb; font-weight: 600; text-decoration: none; }
    a:hover { text-decoration: underline; }
    .cta-box { background: linear-gradient(135deg, #1e3a5f, #2563eb); border-radius: 16px; padding: 28px; text-align: center; margin: 32px 0; color: white; }
    .cta-box h3 { color: white; margin-top: 0; font-size: 1.3rem; }
    .cta-box p { color: rgba(255,255,255,0.8); }
    .cta-btn { display: inline-block; background: white; color: #1e3a5f; padding: 14px 32px; border-radius: 10px; font-weight: 900; font-size: 1rem; text-decoration: none; margin-top: 10px; transition: transform 0.2s; }
    .cta-btn:hover { transform: translateY(-2px); text-decoration: none; }
    table { width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 0.9rem; }
    th { background: #1e3a5f; color: white; padding: 12px 10px; text-align: left; }
    td { padding: 10px; border-bottom: 1px solid #e2e8f0; color: #334155; }
    tr:nth-child(even) td { background: #f1f5f9; }
    tr:hover td { background: #eff6ff; }
    .info-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; margin: 24px 0; }
    .info-card { background: white; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; text-align: center; }
    .info-card .num { font-size: 2rem; font-weight: 900; color: #2563eb; }
    .info-card .label { font-size: 0.8rem; color: #64748b; margin-top: 4px; }
    .faq-item { background: white; border: 1px solid #e2e8f0; border-left: 4px solid #2563eb; border-radius: 8px; padding: 20px; margin: 16px 0; }
    .faq-q { font-weight: 700; color: #1e293b; margin-bottom: 8px; }
    .faq-a { color: #475569; }
    .links-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 12px; margin: 20px 0; }
    .link-card { background: white; border: 1px solid #e2e8f0; border-radius: 10px; padding: 16px; transition: all 0.2s; }
    .link-card:hover { border-color: #2563eb; transform: translateY(-2px); box-shadow: 0 4px 12px rgba(37,99,235,0.1); }
    .link-card a { display: block; font-weight: 700; color: #1e40af; text-decoration: none; }
    .link-card p { font-size: 0.8rem; margin: 6px 0 0; color: #64748b; }
    .tag { display: inline-block; background: #f0fdf4; color: #166534; border-radius: 4px; padding: 2px 8px; font-size: 0.75rem; font-weight: 700; margin-left: 8px; }
    footer { margin-top: 60px; padding-top: 24px; border-top: 2px solid #e2e8f0; text-align: center; color: #94a3b8; font-size: 0.8rem; }
    footer a { color: #64748b; }
    @media (max-width: 640px) { h1 { font-size: 1.5rem; } .nav { flex-wrap: wrap; } }
  </style>
</head>
<body>

  <nav class="nav">
    <a class="nav-brand" href="/">⚡ Apna College Bihar</a>
    <a class="nav-cta" href="/dashboard/ugeac-predictor">Free College Predictor</a>
  </nav>

  <div class="breadcrumb">
    <a href="/">Home</a> › <a href="/ugeac-2025-cutoff-rank-all-colleges.html">UGEAC Cutoffs</a> › ${college.short} Cutoff ${curYear}
  </div>

  <span class="badge">UGEAC ${curYear} Official Ranks</span>
  <h1>${college.name} Cutoff Rank ${curYear} — B.Tech Closing Ranks</h1>
  <p class="subtitle">${college.name} (${college.short}) ke official state-wide UGEAC ${curYear} cutoff ranks details — branch-wise, category-wise aur gender-wise (Male aur Female options).</p>

  <div class="cta-box">
    <h3>🎯 Apna UGEAC Rank Enter Karein</h3>
    <p>Apna College Bihar ke advanced predictor tool se direct pata karein kaunse options aapke rank range mein mil rahe hain!</p>
    <a class="cta-btn" href="/dashboard/ugeac-predictor">Predict My College Options Now →</a>
  </div>

  <div class="info-grid">
    <div class="info-card"><div class="num">${totalSeats}</div><div class="label">Total Seats</div></div>
    <div class="info-card"><div class="num">${estd}</div><div class="label">Establishment Year</div></div>
    <div class="info-card"><div class="num">${location}</div><div class="label">Location, Bihar</div></div>
    <div class="info-card"><div class="num">BEU</div><div class="label">Affiliation University</div></div>
  </div>

  <h2>Official ${college.short} UGEAC ${curYear} Cutoff Rank Table</h2>
  <p>Neeche diye gaye table mein ${college.short} ki official round wise aur category wise B.Tech cutoffs list hai:</p>

  <table>
    <thead>
      <tr>
        <th>Branch Name</th>
        <th>Category</th>
        <th>Seat Type / Gender</th>
        <th>Opening Rank</th>
        <th>Closing Rank</th>
      </tr>
    </thead>
    <tbody>
      ${tableRows}
    </tbody>
  </table>

  <h2>Admission Procedure and Counselling Tips</h2>
  <p>${college.name} mein B.Tech admission pane ke liye candidates ko state counselling authority BCECEB ke standard dynamic options choice lock phase mein standard UGEAC application process follow karna hoga.</p>
  <ul>
    <li>Ensure you lock your choices before the counselling system deadline.</li>
    <li>Participate in both Round 1 & Round 2 to secure the best branch options.</li>
    <li>Utilize our Predictor tool to evaluate historical options matching your percentile.</li>
  </ul>

  <h2>Related Resources — Apna College Bihar</h2>
  <div class="links-grid">
    <div class="link-card">
      <a href="/${collegeSlug}-cutoff-rank-${otherYear}.html">🏆 View ${college.short} Cutoff ${otherYear}</a>
      <p>Compare the branch closing ranks with year ${otherYear} dataset.</p>
    </div>
    <div class="link-card">
      <a href="/dashboard/ugeac-predictor">🎯 UGEAC College Predictor</a>
      <p>Analyze your admission chance dynamically using percentile.</p>
    </div>
    <div class="link-card">
      <a href="/ugeac-2025-cutoff-rank-all-colleges.html">📋 All Colleges Cutoffs Hub</a>
      <p>Check cutoff database for all 38 engineering colleges.</p>
    </div>
  </div>

  <footer>
    <p>© 2026 Apna College Bihar — Bihar Engineering Students Ka Official Study Hub</p>
    <p><a href="/">Home</a> | <a href="/dashboard/ugeac-predictor">UGEAC Predictor</a> | <a href="/dashboard/notes">BEU Notes</a> | <a href="/dashboard/cgpa">CGPA Calculator</a> | <a href="/sitemap.xml">Sitemap</a> | <a href="/privacy">Privacy Policy</a></p>
    <p style="margin-top: 12px; font-size: 0.75rem;">${college.name} | ${college.short} Cutoff ${curYear} | Bihar Engineering Counselling</p>
  </footer>

</body>
</html>`;

  writeSEOPage(`${collegeSlug}-cutoff-rank-${curYear}.html`, htmlContent);
}

// Generate Branch-Specific Cutoff Pages for each College
function generateBranchCutoffPage(college, branch, year) {
  const curYear = String(year);
  const otherYear = (year === 2025) ? '2024' : '2025';
  
  const yearCutoffs = (year === 2025) ? data.cutoffs2025 : data.cutoffs2024;
  const branchCutoffs = yearCutoffs.filter(c => {
    const key = c.collegeShort?.toUpperCase().trim();
    const formalName = normalizedMap[key] || c.collegeShort;
    const isColMatch = formalName === college.name || c.collegeShort === college.short || c.collegeShort === college.name;
    const isBranchMatch = c.branch?.toLowerCase().trim() === branch.toLowerCase().trim();
    return isColMatch && isBranchMatch;
  });

  branchCutoffs.sort((a, b) => {
    if (a.category !== b.category) return a.category.localeCompare(b.category);
    return (a.seatType || a.seat_type || '').localeCompare(b.seatType || b.seat_type || '');
  });

  // Fetch branch seat matrix
  const seatMatrix = seatMatrixData.filter(s => {
    const isColMatch = s.college === college.name || s.college === college.short;
    const isBranchMatch = s.branch?.toLowerCase().trim() === branch.toLowerCase().trim();
    return isColMatch && isBranchMatch;
  });

  let seatRows = '';
  if (seatMatrix.length > 0) {
    const s = seatMatrix[0].seats;
    seatRows = `
    <tr>
      <td>${seatMatrix[0].branch}</td>
      <td>${s.UR || 0}</td>
      <td>${s.EBC || 0}</td>
      <td>${s.BC || 0}</td>
      <td>${s.SC || 0}</td>
      <td>${s.ST || 0}</td>
      <td>${s.EWS || 0}</td>
      <td>${s.RCG || 0}</td>
    </tr>`;
  } else {
    seatRows = `<tr><td colspan="8" style="text-align: center; color: #94a3b8;">Detailed branch seat distribution data not found.</td></tr>`;
  }

  let tableRows = '';
  if (branchCutoffs.length === 0) {
    tableRows = `<tr><td colspan="5" style="text-align: center; color: #94a3b8; padding: 24px;">No branch specific cutoff data found for ${branch} in ${curYear}.</td></tr>`;
  } else {
    branchCutoffs.forEach(row => {
      const seatTypeLabel = (row.seatType || row.seat_type || 'General') === 'Female' ? 'Female (F)' : 'General / Male';
      tableRows += `
      <tr>
        <td><strong>${row.branch}</strong></td>
        <td><span style="font-weight: 800; color: #1e3a5f;">${row.category}</span></td>
        <td>${seatTypeLabel}</td>
        <td style="font-family: monospace;">${row.opening || '-'}</td>
        <td style="font-family: monospace; font-weight: 700; color: #2563eb;">${row.closing}</td>
      </tr>`;
    });
  }

  // Get rich dynamic branch and faculty descriptions
  const branchDetails = getBranchSpecificDetails(branch, college.short);

  const collegeSlug = college.short.toLowerCase().replace(/[\s\.]+/g, '-');
  const branchSlug = branch.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  const fileName = `${collegeSlug}-${branchSlug}-cutoff-rank-${curYear}.html`;

  const title = `${college.short} ${branch} Cutoff ${curYear} | UGEAC Closing Rank — Apna College Bihar`;
  const description = `${college.name} ${branch} engineering branch UGEAC closing cutoff rank for year ${curYear}. Find round-wise opening & closing ranks for UR, EBC, BC, SC, ST category candidates.`;
  const keywords = `${college.short} ${branch} cutoff ${curYear}, ${college.name} ${branch} closing rank, UGEAC ${curYear} ${college.short} ${branch}, bihar engineering ${branch} cutoff`;

  const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title}</title>
  <meta name="description" content="${description}" />
  <meta name="keywords" content="${keywords}" />
  <link rel="canonical" href="https://www.apnacollegebihar.online/${fileName}" />
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
  <meta name="author" content="Apna College Bihar" />
  <link rel="icon" href="/logo-acb.png" />
  <!-- Open Graph -->
  <meta property="og:type" content="article" />
  <meta property="og:url" content="https://www.apnacollegebihar.online/${fileName}" />
  <meta property="og:title" content="${college.short} ${branch} Cutoff Rank ${curYear} | Closing Ranks" />
  <meta property="og:description" content="Branch-wise and category-wise opening and closing ranks for ${branch} in ${college.name} for ${curYear} admission." />
  <meta property="og:site_name" content="Apna College Bihar" />

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
    h3 { font-size: 1.05rem; color: #334155; margin-top: 24px; }
    p { color: #475569; margin: 10px 0; }
    a { color: #2563eb; font-weight: 600; text-decoration: none; }
    a:hover { text-decoration: underline; }
    .cta-box { background: linear-gradient(135deg, #1e3a5f, #2563eb); border-radius: 16px; padding: 28px; text-align: center; margin: 32px 0; color: white; }
    .cta-box h3 { color: white; margin-top: 0; font-size: 1.3rem; }
    .cta-box p { color: rgba(255,255,255,0.8); }
    .cta-btn { display: inline-block; background: white; color: #1e3a5f; padding: 14px 32px; border-radius: 10px; font-weight: 900; font-size: 1rem; text-decoration: none; margin-top: 10px; transition: transform 0.2s; }
    .cta-btn:hover { transform: translateY(-2px); text-decoration: none; }
    table { width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 0.9rem; }
    th { background: #1e3a5f; color: white; padding: 12px 10px; text-align: left; }
    td { padding: 10px; border-bottom: 1px solid #e2e8f0; color: #334155; }
    tr:nth-child(even) td { background: #f1f5f9; }
    tr:hover td { background: #eff6ff; }
    .info-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; margin: 24px 0; }
    .info-card { background: white; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; text-align: center; }
    .info-card .num { font-size: 2rem; font-weight: 900; color: #2563eb; }
    .info-card .label { font-size: 0.8rem; color: #64748b; margin-top: 4px; }
    .tag { display: inline-block; background: #f0fdf4; color: #166534; border-radius: 4px; padding: 2px 8px; font-size: 0.75rem; font-weight: 700; margin-left: 8px; }
    .rich-info-section { background: white; border: 1px solid #e2e8f0; border-radius: 16px; padding: 24px; margin: 24px 0; }
    footer { margin-top: 60px; padding-top: 24px; border-top: 2px solid #e2e8f0; text-align: center; color: #94a3b8; font-size: 0.8rem; }
    footer a { color: #64748b; }
    @media (max-width: 640px) { h1 { font-size: 1.5rem; } .nav { flex-wrap: wrap; } }
  </style>
</head>
<body>

  <nav class="nav">
    <a class="nav-brand" href="/">⚡ Apna College Bihar</a>
    <a class="nav-cta" href="/dashboard/ugeac-predictor">Free College Predictor</a>
  </nav>

  <div class="breadcrumb">
    <a href="/">Home</a> › <a href="/ugeac-2025-cutoff-rank-all-colleges.html">UGEAC Cutoffs</a> › <a href="/${collegeSlug}-cutoff-rank-${curYear}.html">${college.short}</a> › ${branch}
  </div>

  <span class="badge">Official Branch Data</span>
  <h1>${college.short} ${branch} Cutoff Rank ${curYear}</h1>
  <p class="subtitle">${college.name} (${college.short}) ${branch} branch detailed category-wise UGEAC state closing cutoff ranks for admission cycle ${curYear}.</p>

  <div class="cta-box">
    <h3>🎯 Predict your B.Tech Branch Chances</h3>
    <p>Apna rank enter karein aur checks karein GCE, MIT, BCE college engineering branches matches.</p>
    <a class="cta-btn" href="/dashboard/ugeac-predictor">Predict Branch & College →</a>
  </div>

  <div class="rich-info-section">
    <h2>🏢 Branch Internal Overview & Academics</h2>
    <p>${branchDetails.description}</p>
    
    <h3>👨‍🏫 Faculty & Mentorship Profile</h3>
    <p>${branchDetails.faculty}</p>
    
    <h3>🔬 Laboratory & Practical Infrastructure</h3>
    <p>${branchDetails.labs}</p>

    <h3>💼 Branch Placement Statistics</h3>
    <p>${branchDetails.placements}</p>
  </div>

  <h2>Branch Seat Matrix Intake</h2>
  <table>
    <thead>
      <tr>
        <th>Branch Name</th>
        <th>UR</th>
        <th>EBC</th>
        <th>BC</th>
        <th>SC</th>
        <th>ST</th>
        <th>EWS</th>
        <th>RCG</th>
      </tr>
    </thead>
    <tbody>
      ${seatRows}
    </tbody>
  </table>

  <h2>Official UGEAC ${curYear} Cutoff Ranks for ${branch}</h2>
  <table>
    <thead>
      <tr>
        <th>Specialisation</th>
        <th>Category</th>
        <th>Seat Type / Gender</th>
        <th>Opening Rank</th>
        <th>Closing Rank</th>
      </tr>
    </thead>
    <tbody>
      ${tableRows}
    </tbody>
  </table>

  <h2>Related Resources — Apna College Bihar</h2>
  <div class="links-grid">
    <div class="link-card">
      <a href="/${collegeSlug}-${branchSlug}-cutoff-rank-${otherYear}.html">🏆 View ${college.short} ${branch} Cutoff ${otherYear}</a>
      <p>Compare the branch closing ranks with year ${otherYear} dataset.</p>
    </div>
    <div class="link-card">
      <a href="/${collegeSlug}-cutoff-rank-${curYear}.html">🏢 All ${college.short} Cutoffs</a>
      <p>View all other branches cutoffs for this college.</p>
    </div>
    <div class="link-card">
      <a href="/dashboard/ugeac-predictor">🎯 College Predictor Tool</a>
      <p>Analyze your options dynamically using percentile.</p>
    </div>
  </div>

  <footer>
    <p>© 2026 Apna College Bihar — Bihar Engineering Students Ka Official Study Hub</p>
    <p><a href="/">Home</a> | <a href="/dashboard/ugeac-predictor">UGEAC Predictor</a> | <a href="/dashboard/notes">BEU Notes</a> | <a href="/dashboard/cgpa">CGPA Calculator</a> | <a href="/sitemap.xml">Sitemap</a> | <a href="/privacy">Privacy Policy</a></p>
    <p style="margin-top: 12px; font-size: 0.75rem;">${college.name} | ${branch} Cutoff ${curYear} | Bihar Engineering Counselling</p>
  </footer>

</body>
</html>`;

  writeSEOPage(fileName, htmlContent);
}

// Generate pages for ALL colleges in the UgeacData list
colleges.forEach(col => {
  const branches = col.branches || ["Civil", "Mechanical", "Electrical", "Electronics & Communication", "Computer Science"];
  
  [2024, 2025].forEach(year => {
    // Generate College level page
    generateCollegeCutoffPage(col, year);

    // Generate Branch specific page for each branch in the college
    branches.forEach(branch => {
      generateBranchCutoffPage(col, branch, year);
    });
  });
});

console.log(`Successfully generated cutoff pages (including branch-specific pages) for all ${colleges.length} colleges for both 2024 and 2025!`);
