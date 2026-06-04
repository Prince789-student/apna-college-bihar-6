const fs = require('fs');
const path = require('path');

const data = JSON.parse(fs.readFileSync('client/public/data/cutoffs.json', 'utf8'));

const targetColleges = [
  { name: 'BCE Bhagalpur', short: 'BCE Bhagalpur', slug: 'bce-bhagalpur', location: 'Bhagalpur', estd: 1960, seats: '~420' },
  { name: 'MIT Muzaffarpur', short: 'MIT Muzaffarpur', slug: 'mit-muzaffarpur', location: 'Muzaffarpur', estd: 1954, seats: '~420' },
  { name: 'GCE Gaya', short: 'GCE Gaya', slug: 'gce-gaya', location: 'Gaya', estd: 2008, seats: '~420' },
  { name: 'DCE Darbhanga', short: 'DCE Darbhanga', slug: 'dce-darbhanga', location: 'Darbhanga', estd: 2008, seats: '~420' },
  { name: 'MCE Motihari', short: 'MCE Motihari', slug: 'mce-motihari', location: 'Motihari', estd: 1980, seats: '~420' },
  { name: 'LNJPIT Chapra', short: 'LNJPIT Chapra', slug: 'lnjpit-chapra', location: 'Chapra', estd: 2012, seats: '~420' }
];

function generateHTML(college, year) {
  const is2025 = (year === 2025);
  const curYear = String(year);
  const nextYear = is2025 ? '2026' : '2025';
  const otherYear = is2025 ? '2024' : '2025';
  
  // Filter data
  const yearCutoffs = is2025 ? data.cutoffs2025 : data.cutoffs2024;
  const collegeCutoffs = yearCutoffs.filter(c => {
    return c.collegeShort?.toLowerCase().replace(/[\s\.]+/g, '') === college.short.toLowerCase().replace(/[\s\.]+/g, '');
  });

  // Sort by branch, category, seatType
  collegeCutoffs.sort((a, b) => {
    if (a.branch !== b.branch) return a.branch.localeCompare(b.branch);
    if (a.category !== b.category) return a.category.localeCompare(b.category);
    return (a.seatType || a.seat_type || '').localeCompare(b.seatType || b.seat_type || '');
  });

  let tableRows = '';
  if (collegeCutoffs.length === 0) {
    tableRows = `<tr><td colspan="5" style="text-align: center; color: #94a3b8;">No data available for this year.</td></tr>`;
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

  const title = `${college.name} Cutoff Rank ${curYear} | Branch & Category-wise — Apna College Bihar`;
  const description = `${college.name} (${college.short}) UGEAC B.Tech cutoff rank for ${curYear}. Branch-wise and Category-wise (UR, EBC, BC, SC, ST) opening & closing ranks for Male and Female candidates.`;
  const keywords = `${college.short} cutoff rank ${curYear}, ${college.name} cutoff ${curYear}, ${college.short} ${curYear} closing rank, UGEAC ${curYear} ${college.short}, bihar engineering college ${college.location} cutoff`;

  const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title}</title>
  <meta name="description" content="${description}" />
  <meta name="keywords" content="${keywords}" />
  <link rel="canonical" href="https://www.apnacollegebihar.online/${college.slug}-cutoff-rank-${curYear}.html" />
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
  <meta name="author" content="Apna College Bihar" />
  <meta name="geo.region" content="IN-BR" />
  <link rel="icon" href="/logo-acb.png" />
  <!-- Open Graph -->
  <meta property="og:type" content="article" />
  <meta property="og:url" content="https://www.apnacollegebihar.online/${college.slug}-cutoff-rank-${curYear}.html" />
  <meta property="og:title" content="${college.short} Cutoff Rank ${curYear} | Branch-wise Closing Rank" />
  <meta property="og:description" content="${college.name} UGEAC ${curYear} cutoff ranks branch-wise, category-wise for Male and Female candidates." />
  <meta property="og:site_name" content="Apna College Bihar" />

  <!-- Schema: Article + BreadcrumbList + FAQPage -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://www.apnacollegebihar.online/${college.slug}-cutoff-rank-${curYear}.html#article",
        "headline": "${college.name} Cutoff Rank ${curYear} — Branch-wise & Category-wise Closing Ranks",
        "description": "Complete UGEAC ${curYear} cutoff ranks for ${college.name} — branch-wise and category-wise details.",
        "url": "https://www.apnacollegebihar.online/${college.slug}-cutoff-rank-${curYear}.html",
        "datePublished": "${curYear}-06-01",
        "dateModified": "${curYear}-06-02",
        "author": { "@type": "Organization", "name": "Apna College Bihar" },
        "publisher": { "@type": "Organization", "name": "Apna College Bihar", "url": "https://www.apnacollegebihar.online" },
        "mainEntityOfPage": "https://www.apnacollegebihar.online/${college.slug}-cutoff-rank-${curYear}.html"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.apnacollegebihar.online/" },
          { "@type": "ListItem", "position": 2, "name": "UGEAC ${curYear} Cutoffs", "item": "https://www.apnacollegebihar.online/ugeac-2025-cutoff-rank-all-colleges.html" },
          { "@type": "ListItem", "position": 3, "name": "${college.short} Cutoff ${curYear}", "item": "https://www.apnacollegebihar.online/${college.slug}-cutoff-rank-${curYear}.html" }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "${college.short} mein CSE ke liye kitna rank chahiye ${curYear} mein?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "${college.name} mein CSE ke liye General (UR) category mein UGEAC state closing rank approximately data table ke according check karein. Ranks different categories jaise EBC, BC, SC, ST ke liye variable hoti hain."
            }
          },
          {
            "@type": "Question",
            "name": "${college.short} mein total intake kitni hai?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "${college.name} ${college.location} mein lagbhag ${college.seats} B.Tech seats hain jo state UGEAC counselling ke through fill hoti hain."
            }
          }
        ]
      }
    ]
  }
  </script>

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
    <div class="info-card"><div class="num">${college.seats}</div><div class="label">Total Seats</div></div>
    <div class="info-card"><div class="num">Estd ${college.estd}</div><div class="label">Establishment Year</div></div>
    <div class="info-card"><div class="num">${college.location}</div><div class="label">Location, Bihar</div></div>
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
      <a href="/${college.slug}-cutoff-rank-${otherYear}.html">🏆 View ${college.short} Cutoff ${otherYear}</a>
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

  return htmlContent;
}

// Generate pages
targetColleges.forEach(col => {
  [2024, 2025].forEach(year => {
    const html = generateHTML(col, year);
    
    // Write to client/public
    const clientPath = path.join('client/public', `${col.slug}-cutoff-rank-${year}.html`);
    fs.writeFileSync(clientPath, html, 'utf8');
    
    // Write to server/public
    const serverPath = path.join('server/public', `${col.slug}-cutoff-rank-${year}.html`);
    fs.writeFileSync(serverPath, html, 'utf8');
    
    console.log(`Generated: ${clientPath} and ${serverPath}`);
  });
});
