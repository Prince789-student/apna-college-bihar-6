import fs from 'fs';
import path from 'path';
import * as cheerio from 'cheerio';

export default function handler(req, res) {
  // Read the index.html that was copied into the api directory during the build step.
  const indexPath = path.join(process.cwd(), 'api', '_index.html');
  const fallbackPath = path.join(process.cwd(), 'dist', 'index.html');
  
  let html = '';
  try {
    if (fs.existsSync(indexPath)) {
      html = fs.readFileSync(indexPath, 'utf8');
    } else if (fs.existsSync(fallbackPath)) {
      html = fs.readFileSync(fallbackPath, 'utf8');
    } else {
      throw new Error("No index.html found in any path");
    }
  } catch (err) {
    return res.status(500).send(`Internal Server Error: index.html not found. <br/> 
      cwd: ${process.cwd()} <br/> 
      Tried: ${indexPath}, ${fallbackPath}`);
  }

  const urlPath = req.url.split('?')[0]; // remove query params

  let title = 'Apna College Bihar | The Largest Engineering Hub';
  let description = 'Join Bihar\\'s largest engineering community. Free B.Tech Notes, PYQs, BEU Syllabus, CGPA Calculator, and UGEAC Predictor.';
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

  // Use Cheerio (DOM Parser) to perfectly inject SEO metadata without regex bugs!
  const $ = cheerio.load(html);

  $('title').text(title);
  
  // Update or insert meta description
  if ($('meta[name="description"]').length) {
    $('meta[name="description"]').attr('content', description);
  } else {
    $('head').append(`<meta name="description" content="${description}" />`);
  }

  // Update or insert meta keywords
  if ($('meta[name="keywords"]').length) {
    $('meta[name="keywords"]').attr('content', keywords);
  } else {
    $('head').append(`<meta name="keywords" content="${keywords}" />`);
  }

  // Open Graph Meta tags for social media link sharing (WhatsApp, Facebook, LinkedIn)
  $('head').append(`<meta property="og:title" content="${title}" />`);
  $('head').append(`<meta property="og:description" content="${description}" />`);
  $('head').append(`<meta property="og:type" content="website" />`);
  
  // Twitter Meta tags
  $('head').append(`<meta name="twitter:title" content="${title}" />`);
  $('head').append(`<meta name="twitter:description" content="${description}" />`);

  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate=3600');
  res.send($.html());
}
