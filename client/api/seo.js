import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const indexPath = path.join(process.cwd(), 'dist', 'index.html');
  const fallbackPath = path.join(process.cwd(), 'public', 'index.html');
  const rootPath = path.join(process.cwd(), 'index.html');
  
  let html = '';
  try {
    if (fs.existsSync(indexPath)) {
      html = fs.readFileSync(indexPath, 'utf8');
    } else if (fs.existsSync(fallbackPath)) {
      html = fs.readFileSync(fallbackPath, 'utf8');
    } else if (fs.existsSync(rootPath)) {
      html = fs.readFileSync(rootPath, 'utf8');
    } else {
      throw new Error("No index.html found in any path");
    }
  } catch (err) {
    return res.status(500).send(`Internal Server Error: index.html not found. <br/> 
      cwd: ${process.cwd()} <br/> 
      Tried: ${indexPath}, ${fallbackPath}, ${rootPath}`);
  }

  const urlPath = req.url.split('?')[0]; // remove query params

  let title = 'Apna College Bihar | The Largest Engineering Hub';
  let description = 'Join Bihar\'s largest engineering community. Free B.Tech Notes, PYQs, BEU Syllabus, CGPA Calculator, and UGEAC Predictor.';
  let keywords = 'Apna College Bihar, BEU Notes, BEU PYQ, Bihar Engineering, B.Tech syllabus, CGPA Calculator, UGEAC';

  // Dynamic SEO Logic
  if (urlPath.startsWith('/search/')) {
    let keyword = urlPath.replace('/search/', '').replace(/-/g, ' ').trim();
    if (keyword) {
      keyword = decodeURIComponent(keyword).toUpperCase();
      title = `${keyword} B.Tech Notes & PYQ Download | Apna College Bihar`;
      description = `Download free ${keyword} study material, previous year questions (PYQ), and notes for Bihar Engineering University (BEU) students.`;
      keywords = `${keyword}, ${keyword} BEU, ${keyword} notes, ${keyword} PYQ, Bihar Engineering`;
    }
  } else if (urlPath.startsWith('/notes')) {
    title = 'BEU B.Tech Notes (All Branches & Semesters) | Apna College Bihar';
    description = 'Download free handwritten and digital B.Tech notes for all branches (CSE, Civil, Mechanical, EE) and semesters of Bihar Engineering University.';
    keywords = 'BEU notes, B.Tech notes pdf, Bihar engineering notes, CSE notes, Civil notes';
  } else if (urlPath.startsWith('/pyq')) {
    title = 'BEU Previous Year Questions (PYQ) Bank | Apna College Bihar';
    description = 'Access the largest collection of BEU Previous Year Question papers (PYQs) for all B.Tech semesters and subjects.';
    keywords = 'BEU PYQ, Bihar Engineering Question Bank, B.Tech previous year questions, AKU PYQ';
  } else if (urlPath.startsWith('/syllabus')) {
    title = 'BEU B.Tech Latest Syllabus 2026 | Apna College Bihar';
    description = 'Check and download the latest revised B.Tech syllabus for Bihar Engineering University (BEU/AKU) for all branches and semesters.';
    keywords = 'BEU syllabus, B.Tech syllabus Bihar, CSE syllabus BEU, Civil syllabus BEU';
  } else if (urlPath.startsWith('/cgpa')) {
    title = 'BEU CGPA to Percentage Calculator | Apna College Bihar';
    description = 'Calculate your BEU B.Tech CGPA and convert it to percentage instantly with our accurate BEU CGPA Calculator.';
    keywords = 'BEU CGPA calculator, CGPA to percentage BEU, Bihar Engineering CGPA';
  } else if (urlPath.startsWith('/ugeac-predictor')) {
    title = 'UGEAC College Predictor 2026 | Apna College Bihar';
    description = 'Predict your Bihar Engineering College based on your JEE Main Rank/Percentile using the UGEAC Counsellor and Predictor tool.';
    keywords = 'UGEAC Predictor, Bihar Engineering College Predictor, BCECE UGEAC, JEE Main Bihar';
  } else if (urlPath.startsWith('/hackathons')) {
    title = 'Live Hackathons & Tech Events | Apna College Bihar';
    description = 'Discover the latest live hackathons, coding competitions, and tech events happening across India and globally for engineering students.';
    keywords = 'Hackathons, coding competitions, tech events, engineering hackathon';
  }

  // Inject into HTML
  html = html.replace(
    /<title>.*?<\/title>/i,
    `<title>${title}</title>`
  );

  html = html.replace(
    /<meta name="description" content=".*?"/i,
    `<meta name="description" content="${description}"`
  );
  
  if (!html.includes('<meta name="description"')) {
    // If there is no existing description tag, inject it after title
    html = html.replace(
      '</title>',
      `</title>\n   <meta name="description" content="${description}" />\n   <meta name="keywords" content="${keywords}" />`
    );
  } else {
    // Inject keywords
    html = html.replace(
      '</title>',
      `</title>\n   <meta name="keywords" content="${keywords}" />`
    );
  }

  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate=3600');
  res.send(html);
}
