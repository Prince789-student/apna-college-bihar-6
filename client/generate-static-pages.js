import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { blogPosts } from './src/data/blogPosts.js';
import { collegeData } from './src/data/collegeData.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, 'dist');
const templatePath = path.join(distDir, 'index.html');

if (!fs.existsSync(templatePath)) {
  console.error('[SSG] Error: dist/index.html template not found. Run vite build first!');
  process.exit(1);
}

const rawTemplate = fs.readFileSync(templatePath, 'utf8');
const baseTemplate = rawTemplate
  .replace(/<script>[\s\S]*?FAST-TRACK FOR ADSENSE[\s\S]*?<\/script>/gi, '')
  .replace(/<style>[\s\S]*?Hide splash screen for bots[\s\S]*?<\/style>/gi, '')
  .replace(/<div id="acb-splash-screen"[\s\S]*?<\/div>\s*<\/div>/gi, '');

function injectIntoRoot(template, bodyContent) {
  if (template.includes('<div id="root"></div>')) {
    return template.replace('<div id="root"></div>', `<div id="root">\n${bodyContent}\n</div>`);
  }
  return template.replace(/<div id="root">[\s\S]*?<\/div>\s*(?=(?:<noscript|<script|<\/body))/i, `<div id="root">\n${bodyContent}\n</div>`);
}


// Clean up any conflicting directories so Vercel cleanUrls maps cleanly to flat .html files without directory collision
const conflictingDirs = [
  'about', 'contact', 'privacy-policy', 'terms', 'disclaimer', 'dmca',
  'notes', 'pyq', 'syllabus', 'ugeac-predictor', 'cgpa',
  'attendance', 'timetable', 'beu-result', 'lecture-finder', 'calculator',
  'study-resources', 'directory', 'colleges', 'mentorship'
];
conflictingDirs.forEach(dir => {
  const p = path.join(distDir, dir);
  if (fs.existsSync(p)) fs.rmSync(p, { recursive: true, force: true });
});
const flatBlog = path.join(distDir, 'blog.html');
if (fs.existsSync(flatBlog)) fs.unlinkSync(flatBlog);

const distBlogDir = path.join(distDir, 'blog');
if (fs.existsSync(distBlogDir)) {
  fs.readdirSync(distBlogDir).forEach(item => {
    const p = path.join(distBlogDir, item);
    if (fs.statSync(p).isDirectory()) {
      fs.rmSync(p, { recursive: true, force: true });
    }
  });
}




// Lightweight, deterministic Markdown-to-HTML converter
function mdToHtml(md) {
  if (!md) return '';
  
  // Normalize newlines
  let lines = md.trim().split('\n');
  let html = [];
  let inList = false;
  let listType = 'ul';
  let inTable = false;
  let isTableHead = false;

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i].trim();

    if (!line) {
      if (inList) {
        html.push(`</${listType}>`);
        inList = false;
      }
      if (inTable) {
        html.push('</tbody></table></div>');
        inTable = false;
      }
      continue;
    }

    // Headings
    if (line.startsWith('#### ')) {
      if (inList) { html.push(`</${listType}>`); inList = false; }
      if (inTable) { html.push('</tbody></table></div>'); inTable = false; }
      html.push(`<h4 class="text-base font-bold text-slate-900 mt-6 mb-2">${formatInline(line.slice(5))}</h4>`);
      continue;
    }
    if (line.startsWith('### ')) {
      if (inList) { html.push(`</${listType}>`); inList = false; }
      if (inTable) { html.push('</tbody></table></div>'); inTable = false; }
      html.push(`<h3 class="text-lg md:text-xl font-black text-slate-900 mt-8 mb-3">${formatInline(line.slice(4))}</h3>`);
      continue;
    }
    if (line.startsWith('## ')) {
      if (inList) { html.push(`</${listType}>`); inList = false; }
      if (inTable) { html.push('</tbody></table></div>'); inTable = false; }
      html.push(`<h2 class="text-xl md:text-2xl font-black text-slate-900 mt-10 mb-4 border-b border-slate-200 pb-2">${formatInline(line.slice(3))}</h2>`);
      continue;
    }
    if (line.startsWith('# ')) {
      if (inList) { html.push(`</${listType}>`); inList = false; }
      if (inTable) { html.push('</tbody></table></div>'); inTable = false; }
      html.push(`<h1 class="text-2xl md:text-3xl font-black text-slate-900 mt-12 mb-4">${formatInline(line.slice(2))}</h1>`);
      continue;
    }

    // Blockquote
    if (line.startsWith('> ')) {
      if (inList) { html.push(`</${listType}>`); inList = false; }
      if (inTable) { html.push('</tbody></table></div>'); inTable = false; }
      html.push(`<blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-4 bg-blue-50/50 rounded-r text-slate-700 italic">${formatInline(line.slice(2))}</blockquote>`);
      continue;
    }

    // Markdown Table
    if (line.startsWith('|') && line.endsWith('|')) {
      if (inList) { html.push(`</${listType}>`); inList = false; }
      if (!inTable) {
        html.push('<div class="overflow-x-auto my-6 border border-slate-200 rounded-2xl shadow-sm"><table class="min-w-full divide-y divide-slate-200 text-xs md:text-sm text-left">');
        inTable = true;
        isTableHead = true;
      }
      
      // Separator row like |---|---|
      if (/^\|(\s*:?-+:?\s*\|)+$/.test(line)) {
        isTableHead = false;
        continue;
      }
      
      const cells = line.split('|').slice(1, -1).map(c => c.trim());
      if (isTableHead) {
        html.push('<thead class="bg-slate-100 text-slate-900 font-bold uppercase tracking-wider text-[11px]"><tr>');
        cells.forEach(cell => {
          html.push(`<th class="px-4 py-3">${formatInline(cell)}</th>`);
        });
        html.push('</tr></thead><tbody class="divide-y divide-slate-200 bg-white">');
        isTableHead = false;
      } else {
        html.push('<tr class="hover:bg-slate-50 transition-colors">');
        cells.forEach(cell => {
          html.push(`<td class="px-4 py-3 text-slate-700">${formatInline(cell)}</td>`);
        });
        html.push('</tr>');
      }
      continue;
    } else if (inTable) {
      html.push('</tbody></table></div>');
      inTable = false;
    }

    // Unordered list
    if (line.startsWith('* ') || line.startsWith('- ')) {
      if (inTable) { html.push('</tbody></table></div>'); inTable = false; }
      if (!inList || listType !== 'ul') {
        if (inList) html.push(`</${listType}>`);
        html.push('<ul class="list-disc pl-6 space-y-2 text-slate-700 my-4">');
        inList = true;
        listType = 'ul';
      }
      html.push(`<li>${formatInline(line.slice(2))}</li>`);
      continue;
    }

    // Ordered list
    const numMatch = line.match(/^(\d+)\.\s+(.*)/);
    if (numMatch) {
      if (inTable) { html.push('</tbody></table></div>'); inTable = false; }
      if (!inList || listType !== 'ol') {
        if (inList) html.push(`</${listType}>`);
        html.push('<ol class="list-decimal pl-6 space-y-2 text-slate-700 my-4">');
        inList = true;
        listType = 'ol';
      }
      html.push(`<li>${formatInline(numMatch[2])}</li>`);
      continue;
    }

    // Regular paragraph
    if (inList) {
      html.push(`</${listType}>`);
      inList = false;
    }
    if (inTable) {
      html.push('</tbody></table></div>');
      inTable = false;
    }
    html.push(`<p class="text-slate-700 leading-relaxed text-sm md:text-base my-4">${formatInline(line)}</p>`);
  }

  if (inList) {
    html.push(`</${listType}>`);
  }
  if (inTable) {
    html.push('</tbody></table></div>');
  }

  return html.join('\n');
}

function formatInline(str) {
  return str
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-blue-600 hover:underline font-semibold">$1</a>')
    .replace(/`([^`]+)`/g, '<code class="bg-slate-100 px-1.5 py-0.5 rounded text-blue-600 font-mono text-xs">$1</code>');
}

// Navigation Header HTML
const navHeaderHtml = `
<header class="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
    <a href="/" class="flex items-center gap-2.5">
      <img src="/logo-acb.png" alt="Apna College Bihar" class="w-8 h-8 rounded-lg" />
      <span class="font-black text-base md:text-lg text-slate-900 uppercase tracking-tight">Apna College <span class="text-blue-600">Bihar</span></span>
    </a>
    <nav class="hidden md:flex items-center gap-6 text-xs font-bold uppercase tracking-wider text-slate-600">
      <a href="/" class="hover:text-blue-600 transition-colors">Home</a>
      <a href="/notes" class="hover:text-blue-600 transition-colors">BEU Notes</a>
      <a href="/pyq" class="hover:text-blue-600 transition-colors">PYQ Papers</a>
      <a href="/syllabus" class="hover:text-blue-600 transition-colors">Syllabus</a>
      <a href="/ugeac-predictor" class="hover:text-blue-600 transition-colors">UGEAC Predictor</a>
      <a href="/blog" class="text-blue-600 font-black">Blog</a>
      <a href="/about" class="hover:text-blue-600 transition-colors">About Us</a>
      <a href="/contact" class="hover:text-blue-600 transition-colors">Contact</a>
    </nav>
    <div class="flex items-center gap-2">
      <a href="/apna-college-bihar-v58.apk" download class="px-3.5 py-2 bg-blue-600 text-white rounded-xl text-xs font-black uppercase tracking-wider hover:bg-blue-700 transition-colors shadow-sm">Get App</a>
    </div>
  </div>
</header>
`;

// Footer HTML
const footerHtml = `
<footer class="bg-slate-900 text-white pt-16 pb-12 border-t border-slate-800">
  <div class="max-w-6xl mx-auto px-4 sm:px-6">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-slate-800 text-xs">
      <div class="space-y-3 md:col-span-1">
        <div class="flex items-center gap-2">
          <img src="/logo-acb.png" alt="ACB Logo" class="w-7 h-7 rounded" />
          <span class="font-black text-sm uppercase tracking-wider">Apna College <span class="text-blue-400">Bihar</span></span>
        </div>
        <p class="text-slate-400 leading-relaxed">
          The premier digital study engine and guidance platform for Bihar Engineering University (BEU) scholars across 38 government colleges.
        </p>
        <p class="text-slate-500 font-bold">Patna, Bihar 800001, India</p>
        <p class="text-slate-500">Contact: <a href="mailto:prince86944@gmail.com" class="text-blue-400 hover:underline">prince86944@gmail.com</a></p>
      </div>
      <div>
        <h4 class="font-black uppercase tracking-widest text-slate-300 mb-3">Academic Tools</h4>
        <ul class="space-y-2 text-slate-400 font-medium">
          <li><a href="/notes" class="hover:text-white transition-colors">BEU Semester Notes</a></li>
          <li><a href="/pyq" class="hover:text-white transition-colors">Previous Year Questions</a></li>
          <li><a href="/syllabus" class="hover:text-white transition-colors">Official B.Tech Syllabus</a></li>
          <li><a href="/cgpa" class="hover:text-white transition-colors">BEU CGPA Calculator</a></li>
          <li><a href="/ugeac-predictor" class="hover:text-white transition-colors">UGEAC College Predictor</a></li>
        </ul>
      </div>
      <div>
        <h4 class="font-black uppercase tracking-widest text-slate-300 mb-3">Quick Navigation</h4>
        <ul class="space-y-2 text-slate-400 font-medium">
          <li><a href="/blog" class="hover:text-white transition-colors">Engineering Blog & Guides</a></li>
          <li><a href="/colleges" class="hover:text-white transition-colors">Bihar GEC Directory</a></li>
          <li><a href="/hackathons" class="hover:text-white transition-colors">Hackathon Hub</a></li>
          <li><a href="/lecture-finder" class="hover:text-white transition-colors">YouTube Lecture Finder</a></li>
          <li><a href="/directory" class="hover:text-white transition-colors">Sitemap Directory</a></li>
        </ul>
      </div>
      <div>
        <h4 class="font-black uppercase tracking-widest text-slate-300 mb-3">Institutional & Legal</h4>
        <ul class="space-y-2 text-slate-400 font-medium">
          <li><a href="/about" class="hover:text-white transition-colors">About Our Platform</a></li>
          <li><a href="/contact" class="hover:text-white transition-colors">Contact Support Center</a></li>
          <li><a href="/privacy-policy" class="hover:text-white transition-colors">Privacy Policy</a></li>
          <li><a href="/terms" class="hover:text-white transition-colors">Terms of Service</a></li>
          <li><a href="/disclaimer" class="hover:text-white transition-colors">Disclaimer</a></li>
          <li><a href="/dmca" class="hover:text-white transition-colors">DMCA Notice</a></li>
        </ul>
      </div>
    </div>
    <div class="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
      <p>&copy; ${new Date().getFullYear()} Apna College Bihar. All rights reserved. Built with dedication for Bihar Engineering Scholars.</p>
      <div class="flex items-center gap-4">
        <a href="https://whatsapp.com/channel/0029VbC6FsH3wtb5UEDvrW0a" target="_blank" rel="noopener noreferrer" class="hover:text-emerald-400 transition-colors">WhatsApp Channel</a>
        <a href="https://youtube.com/@apnacollegebihar" target="_blank" rel="noopener noreferrer" class="hover:text-red-400 transition-colors">YouTube</a>
      </div>
    </div>
  </div>
</footer>
`;

function setMetaTag(html, attr, attrVal, content) {
  const safeContent = (content || '').replace(/"/g, '&quot;');
  const regex = new RegExp(`<meta\\s+${attr}="${attrVal}"\\s+content=".*?"\\s*\\/?>`, 'i');
  const tag = `<meta ${attr}="${attrVal}" content="${safeContent}" />`;
  if (regex.test(html)) {
    return html.replace(regex, tag);
  }
  return html.replace('</head>', `   ${tag}\n</head>`);
}

// Helper to replace and inject comprehensive <head> meta tags, OpenGraph, Twitter, and Schema
function injectHeadMetadata(html, { title, description, canonical, ogType = 'website', ogImage = 'https://www.apnacollegebihar.online/logo-acb.png', schemaJson }) {
  let modified = html;
  
  // Replace Title
  if (title) {
    modified = modified.replace(/<title>.*?<\/title>/i, `<title>${title}</title>`);
  }
  
  // Replace Meta Description
  if (description) {
    modified = setMetaTag(modified, 'name', 'description', description);
  }

  // Ensure Google robots tag
  modified = setMetaTag(modified, 'name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');

  // Canonical tag
  if (canonical) {
    const canonTag = `<link rel="canonical" href="${canonical}" />`;
    if (modified.includes('<link rel="canonical"')) {
      modified = modified.replace(/<link\s+rel="canonical"\s+href=".*?"\s*\/?>/i, canonTag);
    } else {
      modified = modified.replace('</head>', `   ${canonTag}\n</head>`);
    }
  }

  // Open Graph / Facebook
  modified = setMetaTag(modified, 'property', 'og:type', ogType);
  if (canonical) modified = setMetaTag(modified, 'property', 'og:url', canonical);
  if (title) modified = setMetaTag(modified, 'property', 'og:title', title);
  if (description) modified = setMetaTag(modified, 'property', 'og:description', description);
  modified = setMetaTag(modified, 'property', 'og:site_name', 'Apna College Bihar');
  modified = setMetaTag(modified, 'property', 'og:image', ogImage);
  modified = setMetaTag(modified, 'property', 'og:locale', 'en_IN');

  // Twitter Card
  modified = setMetaTag(modified, 'name', 'twitter:card', 'summary_large_image');
  if (title) modified = setMetaTag(modified, 'name', 'twitter:title', title);
  if (description) modified = setMetaTag(modified, 'name', 'twitter:description', description);
  modified = setMetaTag(modified, 'name', 'twitter:image', ogImage);

  // Schema JSON-LD
  if (schemaJson) {
    const formattedSchema = `<script type="application/ld+json">\n${JSON.stringify(schemaJson, null, 2)}\n   </script>`;
    if (/<script type="application\/ld\+json">[\s\S]*?<\/script>/i.test(modified)) {
      modified = modified.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/i, formattedSchema);
    } else {
      modified = modified.replace('</head>', `   ${formattedSchema}\n</head>`);
    }
  }

  return modified;
}

// Helper to write static file as flat .html for Vercel cleanUrls
function writeStaticHtml(subPath, htmlContent) {
  const flatFilePath = path.join(distDir, `${subPath}.html`);
  const flatFileDir = path.dirname(flatFilePath);
  if (!fs.existsSync(flatFileDir)) {
    fs.mkdirSync(flatFileDir, { recursive: true });
  }
  fs.writeFileSync(flatFilePath, htmlContent, 'utf8');
  console.log(`[SSG] Generated: /${subPath}.html`);
}

// ─────────────────────────────────────────────────────────────
// 1. GENERATE ALL BLOG POST PAGES
// ─────────────────────────────────────────────────────────────
console.log(`[SSG] Starting static page generation for ${blogPosts.length} blog posts...`);

blogPosts.forEach((post, index) => {
  const articleHtml = mdToHtml(post.content);
  const formattedDate = new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
  const canonicalUrl = `https://www.apnacollegebihar.online/blog/${post.slug}`;

  // Find 3 other related posts
  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id)
    .slice(0, 3);

  const relatedHtml = relatedPosts.map(p => `
    <a href="/blog/${p.slug}" class="p-5 bg-slate-50 border border-slate-200 rounded-2xl hover:border-blue-500 transition-all group block">
      <span class="text-[10px] font-bold text-blue-600 uppercase tracking-widest block mb-1">Article</span>
      <h4 class="font-bold text-slate-900 text-sm group-hover:text-blue-600 transition-colors line-clamp-2 mb-2">${p.title}</h4>
      <p class="text-xs text-slate-500 line-clamp-2">${p.excerpt}</p>
    </a>
  `).join('');

  const bodyContent = `
  <div class="min-h-screen bg-white font-['Inter'] flex flex-col justify-between">
    ${navHeaderHtml}

    <main class="flex-grow">
      <!-- Breadcrumb Bar -->
      <div class="bg-slate-50 border-b border-slate-200 py-3">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 text-xs text-slate-500 flex items-center gap-2">
          <a href="/" class="hover:text-blue-600">Home</a>
          <span>/</span>
          <a href="/blog" class="hover:text-blue-600">Blog</a>
          <span>/</span>
          <span class="text-slate-800 font-semibold truncate max-w-md">${post.title}</span>
        </div>
      </div>

      <!-- Article Header -->
      <article class="pt-8 pb-12 px-4 sm:px-6 max-w-4xl mx-auto">
        <header class="mb-8 border-b border-slate-200 pb-8">
          <span class="px-3 py-1 bg-blue-100 text-blue-800 text-[10px] font-black uppercase tracking-widest rounded-full inline-block mb-4">BEU Academic Guide</span>
          <h1 class="text-2xl sm:text-4xl md:text-5xl font-[1000] text-slate-900 tracking-tight leading-tight mb-4">${post.title}</h1>
          
          <div class="flex flex-wrap items-center gap-4 text-xs font-bold text-slate-500">
            <span>📅 Published: <time datetime="${post.date}">${formattedDate}</time></span>
            <span>✍️ Written by: <span class="text-slate-800">${post.author}</span></span>
            <span>⏱️ 5 min read</span>
          </div>
        </header>

        <!-- Main Body -->
        <div class="prose prose-slate max-w-none text-slate-800 leading-relaxed">
          ${articleHtml}
        </div>

        <!-- Author Bio Box (E-E-A-T) -->
        <div class="mt-12 p-6 md:p-8 bg-slate-50 border border-slate-200 rounded-3xl flex flex-col sm:flex-row gap-5 items-start">
          <div class="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-black text-xl shrink-0 shadow-md">
            PK
          </div>
          <div class="space-y-2 text-xs">
            <h3 class="text-base font-black text-slate-900">${post.author}</h3>
            <p class="text-slate-600 leading-relaxed font-medium">
              Er. Prince Kumar is an engineering educator and Bihar Engineering University (BEU) alumnus. He leads the technical and academic content initiatives at Apna College Bihar, helping tens of thousands of engineering scholars across Bihar excel in semester exams, UGEAC counselling, and national coding hackathons.
            </p>
            <div class="flex items-center gap-4 pt-1 font-bold text-blue-600">
              <a href="/about" class="hover:underline">Meet the Editorial Board &rarr;</a>
              <a href="/contact" class="hover:underline">Report Correction / Feedback &rarr;</a>
            </div>
          </div>
        </div>

        <!-- Related Articles Section -->
        <div class="mt-12 pt-8 border-t border-slate-200">
          <h3 class="text-lg font-black text-slate-900 uppercase tracking-tight mb-4">Recommended Articles & Guides</h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            ${relatedHtml}
          </div>
        </div>
      </article>
    </main>

    ${footerHtml}
  </div>
  `;

  // Inject into template root cleanly
  let postHtml = injectIntoRoot(baseTemplate, bodyContent);
  
  // Inject metadata
  postHtml = injectHeadMetadata(postHtml, {
    title: `${post.title} | Apna College Bihar`,
    description: post.excerpt,
    canonical: canonicalUrl,
    schemaJson: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": canonicalUrl
      },
      "headline": post.title,
      "description": post.excerpt,
      "image": "https://www.apnacollegebihar.online/logo-acb.png",
      "author": {
        "@type": "Person",
        "name": post.author,
        "jobTitle": "Lead Engineering Mentor",
        "worksFor": {
          "@type": "Organization",
          "name": "Apna College Bihar"
        }
      },
      "publisher": {
        "@type": "Organization",
        "name": "Apna College Bihar",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.apnacollegebihar.online/logo-acb.png"
        }
      },
      "datePublished": post.date,
      "dateModified": post.date
    }
  });

  writeStaticHtml(`blog/${post.slug}`, postHtml);
});

// ─────────────────────────────────────────────────────────────
// 2. GENERATE BLOG DIRECTORY PAGE (/blog)
// ─────────────────────────────────────────────────────────────
const blogCardsHtml = blogPosts.map(p => `
  <article class="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:border-blue-500 hover:shadow-md transition-all flex flex-col justify-between">
    <div>
      <div class="flex items-center justify-between text-[11px] font-bold text-slate-400 mb-3">
        <span class="px-2.5 py-0.5 bg-blue-50 text-blue-600 rounded-lg">Guide</span>
        <time>${new Date(p.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</time>
      </div>
      <h2 class="text-lg font-black text-slate-900 tracking-tight leading-snug mb-3">
        <a href="/blog/${p.slug}" class="hover:text-blue-600 transition-colors">${p.title}</a>
      </h2>
      <p class="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">${p.excerpt}</p>
    </div>
    <div class="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
      <span class="font-bold text-slate-500">${p.author}</span>
      <a href="/blog/${p.slug}" class="text-blue-600 font-bold hover:underline">Read Article &rarr;</a>
    </div>
  </article>
`).join('');

const blogIndexBody = `
<div class="min-h-screen bg-slate-50 font-['Inter'] flex flex-col justify-between">
  ${navHeaderHtml}

  <main class="flex-grow max-w-6xl mx-auto px-4 sm:px-6 py-12">
    <div class="text-center max-w-2xl mx-auto mb-12">
      <span class="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-black uppercase tracking-widest rounded-full inline-block mb-3">Apna College Bihar Editorial</span>
      <h1 class="text-3xl sm:text-5xl font-[1000] text-slate-900 tracking-tight uppercase mb-4">BEU Engineering Blog & Guides</h1>
      <p class="text-slate-600 text-sm md:text-base leading-relaxed">
        Comprehensive academic strategies, UGEAC counselling advice, semester examination blueprints, and technical career guides written by Bihar Engineering University scholars.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      ${blogCardsHtml}
    </div>
  </main>

  ${footerHtml}
</div>
`;

let blogIndexHtml = injectIntoRoot(baseTemplate, blogIndexBody);
blogIndexHtml = injectHeadMetadata(blogIndexHtml, {
  title: 'BEU Engineering Blog, UGEAC Guides & Academic Articles | Apna College Bihar',
  description: 'Official academic articles, BEU syllabus strategies, UGEAC college cutoffs, and semester exam tips for Bihar engineering students across 38 government engineering colleges.',
  canonical: 'https://www.apnacollegebihar.online/blog'
});
const blogDir = path.join(distDir, 'blog');
if (!fs.existsSync(blogDir)) {
  fs.mkdirSync(blogDir, { recursive: true });
}
fs.writeFileSync(path.join(blogDir, 'index.html'), blogIndexHtml, 'utf8');
const flatBlogHtml = path.join(distDir, 'blog.html');
if (fs.existsSync(flatBlogHtml)) {
  fs.unlinkSync(flatBlogHtml);
}
console.log('[SSG] Generated: /blog/index.html');

// ─────────────────────────────────────────────────────────────
// 3. GENERATE ABOUT US PAGE (/about)
// ─────────────────────────────────────────────────────────────
const aboutBody = `
<div class="min-h-screen bg-slate-50 font-['Inter'] flex flex-col justify-between">
  ${navHeaderHtml}

  <main class="flex-grow max-w-4xl mx-auto px-4 sm:px-6 py-12">
    <div class="text-center mb-12">
      <span class="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-black uppercase tracking-widest rounded-full inline-block mb-3">About Us</span>
      <h1 class="text-3xl sm:text-5xl font-[1000] text-slate-900 tracking-tight uppercase mb-4">About Apna College Bihar</h1>
      <p class="text-slate-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
        Empowering Bihar Engineering University (BEU) scholars through structured study notes, previous year question papers, counselling predictors, and digital academic tools.
      </p>
    </div>

    <div class="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm space-y-8 prose prose-slate max-w-none text-slate-800">
      <h2 class="text-2xl font-black text-slate-900 uppercase">Our Core Mission</h2>
      <p>
        Founded in Bihar, <strong>Apna College Bihar</strong> is an independent academic initiative dedicated to bridging the educational resource gap for engineering students across Bihar. While thousands of talented students enroll each year in the 38 Government Engineering Colleges (GECs) under Bihar Engineering University (BEU), they often struggle to find accurate semester notes, organized question banks, and trustworthy counselling advice.
      </p>
      <p>
        Our mission is simple: <strong>Deliver 100% free, high-quality, authentic academic tools and notes</strong> to every engineering student in Bihar, regardless of geographic or financial constraints.
      </p>

      <h3 class="text-xl font-bold text-slate-900">Experience, Expertise & Trust (E-E-A-T)</h3>
      <p>
        Every study resource, blog article, and calculator on our platform is built and reviewed by BEU alumni, subject toppers, and active software developers who have personal, lived experience navigating the BEU grading system. We do not rely on generic automated scrapers; every semester note and PYQ paper is verified against the official university syllabus.
      </p>

      <div class="p-6 bg-slate-50 border border-slate-200 rounded-2xl not-prose my-6 space-y-2 text-xs">
        <h4 class="font-black text-slate-900 uppercase tracking-wider text-sm mb-3">Editorial Leadership & Contact Details</h4>
        <p><strong>Founder & Chief Editor:</strong> Er. Prince Kumar (B.Tech Computer Science & Engineering, BEU Alumnus & Mentor)</p>
        <p><strong>Editorial Board:</strong> Apna College Bihar Academic Content & Mentorship Team</p>
        <p><strong>Operational Base / Headquarters:</strong> Patna, Bihar 800001, India</p>
        <p><strong>Official Editorial Contact:</strong> <a href="mailto:prince86944@gmail.com" class="text-blue-600 underline font-bold">prince86944@gmail.com</a></p>
        <p><strong>Official WhatsApp Community:</strong> <a href="https://whatsapp.com/channel/0029VbC6FsH3wtb5UEDvrW0a" class="text-emerald-600 underline font-bold">Join 10,000+ BEU Scholars</a></p>
      </div>

      <h3 class="text-xl font-bold text-slate-900">What We Offer</h3>
      <ul class="list-disc pl-5 space-y-2 text-sm">
        <li><strong>BEU Notes:</strong> Unit-wise lecture summaries and comprehensive handwritten materials tailored to university syllabus requirements.</li>
        <li><strong>PYQ Repository:</strong> Categorized question papers spanning 5+ years for all branches (CSE, Civil, Mechanical, EEE, ECE).</li>
        <li><strong>BEU CGPA Calculator:</strong> Precise grade point calculation following official university grading formulas.</li>
        <li><strong>UGEAC Predictor:</strong> Predictive tool analyzing past BCECEB cutoffs to help aspirants choose suitable colleges during counselling.</li>
      </ul>
    </div>
  </main>

  ${footerHtml}
</div>
`;

let aboutHtml = injectIntoRoot(baseTemplate, aboutBody);
aboutHtml = injectHeadMetadata(aboutHtml, {
  title: 'About Apna College Bihar | Official Study Engine & Guidance Platform',
  description: 'Learn about Apna College Bihar, our editorial board, leadership, and mission to deliver 100% free BEU Notes, PYQs, and UGEAC counselling tools to engineering students across Bihar.',
  canonical: 'https://www.apnacollegebihar.online/about',
  schemaJson: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.apnacollegebihar.online/" },
          { "@type": "ListItem", "position": 2, "name": "About Us", "item": "https://www.apnacollegebihar.online/about" }
        ]
      },
      {
        "@type": "AboutPage",
        "@id": "https://www.apnacollegebihar.online/about",
        "url": "https://www.apnacollegebihar.online/about",
        "name": "About Apna College Bihar",
        "description": "Empowering Bihar Engineering University (BEU) scholars through structured study notes, previous year question papers, counselling predictors, and digital academic tools."
      }
    ]
  }
});
writeStaticHtml('about', aboutHtml);

// ─────────────────────────────────────────────────────────────
// 4. GENERATE CONTACT PAGE (/contact)
// ─────────────────────────────────────────────────────────────
const contactBody = `
<div class="min-h-screen bg-slate-50 font-['Inter'] flex flex-col justify-between">
  ${navHeaderHtml}

  <main class="flex-grow max-w-4xl mx-auto px-4 sm:px-6 py-12">
    <div class="text-center mb-12">
      <span class="px-3 py-1 bg-orange-100 text-orange-700 text-xs font-black uppercase tracking-widest rounded-full inline-block mb-3">Support Center</span>
      <h1 class="text-3xl sm:text-5xl font-[1000] text-slate-900 tracking-tight uppercase mb-4">Contact Apna College Bihar</h1>
      <p class="text-slate-600 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
        Have questions about BEU exams, want to contribute study notes, or need counselling guidance? Our team is here to support you.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      <div class="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm text-center">
        <div class="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center font-bold text-xl mx-auto mb-4">📧</div>
        <h3 class="font-black text-slate-900 text-sm uppercase mb-1">Official Email</h3>
        <p class="text-xs text-slate-500 mb-3">For editorial, support, and partnership inquiries.</p>
        <a href="mailto:prince86944@gmail.com" class="text-blue-600 font-bold text-xs hover:underline">prince86944@gmail.com</a>
      </div>

      <div class="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm text-center">
        <div class="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center font-bold text-xl mx-auto mb-4">💬</div>
        <h3 class="font-black text-slate-900 text-sm uppercase mb-1">WhatsApp Channel</h3>
        <p class="text-xs text-slate-500 mb-3">Get real-time exam notifications and notes directly.</p>
        <a href="https://whatsapp.com/channel/0029VbC6FsH3wtb5UEDvrW0a" target="_blank" rel="noopener noreferrer" class="text-emerald-600 font-bold text-xs hover:underline">Join Channel &rarr;</a>
      </div>

      <div class="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm text-center">
        <div class="w-12 h-12 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center font-bold text-xl mx-auto mb-4">▶️</div>
        <h3 class="font-black text-slate-900 text-sm uppercase mb-1">YouTube Channel</h3>
        <p class="text-xs text-slate-500 mb-3">Watch subject lectures and counselling walkthroughs.</p>
        <a href="https://youtube.com/@apnacollegebihar" target="_blank" rel="noopener noreferrer" class="text-red-600 font-bold text-xs hover:underline">Subscribe Now &rarr;</a>
      </div>
    </div>

    <!-- FAQ Section -->
    <div class="bg-white border border-slate-200 rounded-3xl p-8 md:p-10 shadow-sm space-y-6">
      <h2 class="text-xl font-black text-slate-900 uppercase">Frequently Asked Questions</h2>
      <div class="space-y-4 text-xs md:text-sm text-slate-700">
        <div>
          <h4 class="font-bold text-slate-900">Are the study notes and PYQs on this site completely free?</h4>
          <p class="text-slate-600 mt-1">Yes, Apna College Bihar is 100% free for all students. We believe in unrestricted access to educational resources.</p>
        </div>
        <div class="border-t border-slate-100 pt-4">
          <h4 class="font-bold text-slate-900">How can I contribute study materials for my college?</h4>
          <p class="text-slate-600 mt-1">You can email your verified notes or past year question papers to prince86944@gmail.com. Our editorial team will review and publish them with full attribution.</p>
        </div>
        <div class="border-t border-slate-100 pt-4">
          <h4 class="font-bold text-slate-900">Is Apna College Bihar an official portal of Bihar Engineering University?</h4>
          <p class="text-slate-600 mt-1">No, Apna College Bihar is an independent educational platform operated by alumni and mentors. We are not officially affiliated with or endorsed by BEU or BCECEB.</p>
        </div>
      </div>
    </div>
  </main>

  ${footerHtml}
</div>
`;

let contactHtml = injectIntoRoot(baseTemplate, contactBody);
contactHtml = injectHeadMetadata(contactHtml, {
  title: 'Contact Us | Apna College Bihar Support & Mentorship',
  description: 'Get in touch with the Apna College Bihar support team. Official email, WhatsApp community, and verified academic assistance for BEU students.',
  canonical: 'https://www.apnacollegebihar.online/contact',
  schemaJson: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.apnacollegebihar.online/" },
          { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://www.apnacollegebihar.online/contact" }
        ]
      },
      {
        "@type": "ContactPage",
        "@id": "https://www.apnacollegebihar.online/contact",
        "url": "https://www.apnacollegebihar.online/contact",
        "name": "Contact Apna College Bihar",
        "description": "Get in touch with the Apna College Bihar support team. Official email, WhatsApp community, and verified academic assistance for BEU students."
      }
    ]
  }
});
writeStaticHtml('contact', contactHtml);

// ─────────────────────────────────────────────────────────────
// 5. GENERATE PRIVACY POLICY PAGE (/privacy-policy)
// ─────────────────────────────────────────────────────────────
const privacyBody = `
<div class="min-h-screen bg-slate-50 font-['Inter'] flex flex-col justify-between">
  ${navHeaderHtml}

  <main class="flex-grow max-w-4xl mx-auto px-4 sm:px-6 py-12">
    <div class="text-center mb-12">
      <span class="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-black uppercase tracking-widest rounded-full inline-block mb-3">Legal & Trust</span>
      <h1 class="text-3xl sm:text-5xl font-[1000] text-slate-900 tracking-tight uppercase mb-4">Privacy Policy</h1>
      <p class="text-slate-500 text-xs uppercase tracking-widest font-bold">Effective Date: May 2026 • Last Updated: September 2026</p>
    </div>

    <div class="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm space-y-6 prose prose-slate max-w-none text-slate-700 text-xs md:text-sm">
      <h2 class="text-xl font-black text-slate-900 uppercase">1. Introduction & Overview</h2>
      <p>
        At <strong>Apna College Bihar</strong>, accessible from <a href="https://www.apnacollegebihar.online" class="text-blue-600 underline font-semibold">https://www.apnacollegebihar.online</a>, one of our main priorities is the privacy of our visitors. This comprehensive Privacy Policy document outlines the types of information that is collected and recorded by Apna College Bihar and how we use it.
      </p>
      <p>
        If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact our data protection team at <a href="mailto:prince86944@gmail.com" class="text-blue-600 underline font-bold">prince86944@gmail.com</a>.
      </p>

      <h2 class="text-xl font-black text-slate-900 uppercase">2. Information We Collect</h2>
      <p>
        When you register for an account, calculate CGPA, search university notes, or interact with our learning hub, we collect minimal data necessary to deliver your academic experience:
      </p>
      <ul class="list-disc pl-5 space-y-1">
        <li><strong>Account Information:</strong> Name, email address, college, and branch provided via secure Google authentication (Firebase).</li>
        <li><strong>Academic Progress Data:</strong> Saved timetable entries, attendance records, study streak timers, and CGPA calculations stored securely in Google Cloud Firestore.</li>
        <li><strong>Log Files & Technical Telemetry:</strong> Like standard websites, we use log files that capture IP addresses, browser types, Internet Service Providers (ISP), date/time stamps, referring/exit pages, and click counts for performance monitoring. None of this data is linked to personally identifiable information.</li>
      </ul>

      <h2 class="text-xl font-black text-slate-900 uppercase">3. How We Use Your Information</h2>
      <p>
        We use the information we collect in various ways to support and improve your learning journey:
      </p>
      <ul class="list-disc pl-5 space-y-1">
        <li>Provide, operate, and maintain our study resources, syllabus databases, and calculators.</li>
        <li>Improve, personalize, and expand our educational platform features.</li>
        <li>Understand and analyze how visitors interact with our study portal.</li>
        <li>Develop new academic tools, semester question banks, and counseling algorithms.</li>
        <li>Send notifications regarding university exam dates, admit cards, and study milestones.</li>
        <li>Detect and prevent fraud, spam, or platform abuse.</li>
      </ul>

      <h2 class="text-xl font-black text-slate-900 uppercase">4. Data Sharing & Security</h2>
      <p>
        We take your privacy seriously. <strong>Apna College Bihar does NOT sell, rent, or trade student personal information to any commercial third parties.</strong>
      </p>
      <p>
        All student records are encrypted both in transit (TLS 1.3 / HTTPS) and at rest utilizing Google Cloud / Firebase enterprise security infrastructure.
      </p>

      <h2 class="text-xl font-black text-slate-900 uppercase">5. Log Files & Standard Web Tracking</h2>
      <p>
        Apna College Bihar follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.
      </p>

      <h2 class="text-xl font-black text-slate-900 uppercase">6. Cookies & Web Beacons</h2>
      <p>
        Like any other website, Apna College Bihar uses 'cookies'. These cookies are used to store information including visitors' preferences and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
      </p>

      <h2 class="text-xl font-black text-slate-900 uppercase">7. Google DoubleClick DART Cookie & Google AdSense</h2>
      <p>
        Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to www.apnacollegebihar.online and other sites on the internet.
      </p>
      <p>
        Google's use of advertising cookies enables it and its partners to serve ads to our users based on their visit to our sites and/or other sites on the Internet.
      </p>
      <p>
        Visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL: <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline font-bold">https://policies.google.com/technologies/ads</a> or adjust personalized ad preferences via <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline font-bold">Google Ads Settings</a>.
      </p>
      <p>
        You can also opt out of interest-based advertising by visiting the Network Advertising Initiative opt-out page at <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline font-bold">https://www.aboutads.info/choices/</a>.
      </p>

      <h2 class="text-xl font-black text-slate-900 uppercase">8. CCPA Privacy Rights (Do Not Sell My Personal Information)</h2>
      <p>
        Under the California Consumer Privacy Act (CCPA), among other rights, California consumers have the right to:
      </p>
      <ul class="list-disc pl-5 space-y-1">
        <li>Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.</li>
        <li>Request that a business delete any personal data about the consumer that a business has collected.</li>
        <li>Request that a business that sells a consumer's personal data, not sell the consumer's personal data.</li>
      </ul>
      <p>
        <strong>Apna College Bihar does NOT sell any personal information of any student or user.</strong> If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us at <a href="mailto:prince86944@gmail.com" class="text-blue-600 underline font-bold">prince86944@gmail.com</a>.
      </p>

      <h2 class="text-xl font-black text-slate-900 uppercase">9. GDPR Data Protection Rights</h2>
      <p>
        We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:
      </p>
      <ul class="list-disc pl-5 space-y-1">
        <li><strong>The right to access:</strong> You have the right to request copies of your personal data.</li>
        <li><strong>The right to rectification:</strong> You have the right to request that we correct any information you believe is inaccurate or complete information you believe is incomplete.</li>
        <li><strong>The right to erasure:</strong> You have the right to request that we erase your personal data, under certain conditions.</li>
        <li><strong>The right to restrict processing:</strong> You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>
        <li><strong>The right to object to processing:</strong> You have the right to object to our processing of your personal data, under certain conditions.</li>
        <li><strong>The right to data portability:</strong> You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</li>
      </ul>
      <p>
        If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us at <a href="mailto:prince86944@gmail.com" class="text-blue-600 underline font-bold">prince86944@gmail.com</a>.
      </p>

      <h2 class="text-xl font-black text-slate-900 uppercase">10. Children's Online Privacy Protection (COPPA)</h2>
      <p>
        Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.
      </p>
      <p>
        Apna College Bihar does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.
      </p>

      <h2 class="text-xl font-black text-slate-900 uppercase">11. Third-Party Privacy Policies & Cookie Management</h2>
      <p>
        Apna College Bihar's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
      </p>
      <p>
        You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites.
      </p>

      <h2 class="text-xl font-black text-slate-900 uppercase">12. Contact Information</h2>
      <p>
        If you have any questions or suggestions regarding our Privacy Policy, do not hesitate to contact us:
      </p>
      <ul class="list-disc pl-5 space-y-1 font-semibold">
        <li>Email: <a href="mailto:prince86944@gmail.com" class="text-blue-600 underline">prince86944@gmail.com</a></li>
        <li>Platform: Apna College Bihar (https://www.apnacollegebihar.online)</li>
        <li>Patna, Bihar 800001, India</li>
      </ul>
    </div>
  </main>

  ${footerHtml}
</div>
`;

let privacyHtml = injectIntoRoot(baseTemplate, privacyBody);
privacyHtml = injectHeadMetadata(privacyHtml, {
  title: 'Privacy Policy | Apna College Bihar',
  description: 'Official Privacy Policy of Apna College Bihar. Learn about our data collection practices, Google AdSense cookie compliance, and user rights.',
  canonical: 'https://www.apnacollegebihar.online/privacy-policy',
  schemaJson: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.apnacollegebihar.online/" },
          { "@type": "ListItem", "position": 2, "name": "Privacy Policy", "item": "https://www.apnacollegebihar.online/privacy-policy" }
        ]
      },
      {
        "@type": "WebPage",
        "@id": "https://www.apnacollegebihar.online/privacy-policy",
        "url": "https://www.apnacollegebihar.online/privacy-policy",
        "name": "Privacy Policy | Apna College Bihar"
      }
    ]
  }
});
writeStaticHtml('privacy-policy', privacyHtml);

// ─────────────────────────────────────────────────────────────
// 6. GENERATE TERMS OF SERVICE PAGE (/terms)
// ─────────────────────────────────────────────────────────────
const termsBody = `
<div class="min-h-screen bg-slate-50 font-['Inter'] flex flex-col justify-between">
  ${navHeaderHtml}

  <main class="flex-grow max-w-4xl mx-auto px-4 sm:px-6 py-12">
    <div class="text-center mb-12">
      <span class="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-black uppercase tracking-widest rounded-full inline-block mb-3">Terms</span>
      <h1 class="text-3xl sm:text-5xl font-[1000] text-slate-900 tracking-tight uppercase mb-4">Terms of Service</h1>
      <p class="text-slate-500 text-xs uppercase tracking-widest font-bold">Effective Date: May 2026</p>
    </div>

    <div class="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm space-y-6 prose prose-slate max-w-none text-slate-700 text-xs md:text-sm">
      <h2 class="text-xl font-black text-slate-900 uppercase">1. Acceptance of Terms</h2>
      <p>
        By accessing and using Apna College Bihar (https://www.apnacollegebihar.online), you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you must discontinue using our services.
      </p>

      <h2 class="text-xl font-black text-slate-900 uppercase">2. Educational Use Only</h2>
      <p>
        All materials, including lecture notes, previous year question papers, syllabus summaries, and calculators, are provided solely for personal educational and study purposes. Users agree not to commercialize or redistribute these resources for monetary gain.
      </p>

      <h2 class="text-xl font-black text-slate-900 uppercase">3. Limitation of Liability</h2>
      <p>
        While we strive for 100% accuracy, Apna College Bihar does not guarantee that calculations, cutoffs, or syllabus topics are error-free. Official allocations by BCECEB and results published by BEU remain final and legally authoritative.
      </p>
    </div>
  </main>

  ${footerHtml}
</div>
`;

let termsHtml = injectIntoRoot(baseTemplate, termsBody);
termsHtml = injectHeadMetadata(termsHtml, {
  title: 'Terms of Service | Apna College Bihar',
  description: 'Terms of Service for Apna College Bihar educational platform and study resources.',
  canonical: 'https://www.apnacollegebihar.online/terms',
  schemaJson: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.apnacollegebihar.online/" },
          { "@type": "ListItem", "position": 2, "name": "Terms of Service", "item": "https://www.apnacollegebihar.online/terms" }
        ]
      },
      {
        "@type": "WebPage",
        "@id": "https://www.apnacollegebihar.online/terms",
        "url": "https://www.apnacollegebihar.online/terms",
        "name": "Terms of Service | Apna College Bihar"
      }
    ]
  }
});
writeStaticHtml('terms', termsHtml);

// ─────────────────────────────────────────────────────────────
// 7. GENERATE DISCLAIMER PAGE (/disclaimer)
// ─────────────────────────────────────────────────────────────
const disclaimerBody = `
<div class="min-h-screen bg-slate-50 font-['Inter'] flex flex-col justify-between">
  ${navHeaderHtml}

  <main class="flex-grow max-w-4xl mx-auto px-4 sm:px-6 py-12">
    <div class="text-center mb-12">
      <span class="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-black uppercase tracking-widest rounded-full inline-block mb-3">Notice</span>
      <h1 class="text-3xl sm:text-5xl font-[1000] text-slate-900 tracking-tight uppercase mb-4">Official Disclaimer</h1>
    </div>

    <div class="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm space-y-6 prose prose-slate max-w-none text-slate-700 text-xs md:text-sm">
      <h2 class="text-xl font-black text-slate-900 uppercase">Independent Student Platform</h2>
      <p>
        <strong>Apna College Bihar (apnacollegebihar.online) is an independent educational platform created by engineering alumni and students.</strong> We are <strong>NOT</strong> an official agency of the Government of Bihar, Bihar Engineering University (BEU), or the Bihar Combined Entrance Competitive Examination Board (BCECEB).
      </p>
      <p>
        All government notifications, university syllabi, and cutoff statistics presented on this website are compiled from publicly available official gazettes, university circulars, and previous counselling data for student convenience.
      </p>
      <p>
        For official inquiries, examination forms, and final seat allotments, please visit the official portals:
      </p>
      <ul class="list-disc pl-5 space-y-1 font-semibold">
        <li>Bihar Engineering University (BEU): <a href="https://beu-bih.ac.in" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">https://beu-bih.ac.in</a></li>
        <li>BCECEB (UGEAC Counselling): <a href="https://bceceboard.bihar.gov.in" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">https://bceceboard.bihar.gov.in</a></li>
      </ul>
    </div>
  </main>

  ${footerHtml}
</div>
`;

let disclaimerHtml = injectIntoRoot(baseTemplate, disclaimerBody);
disclaimerHtml = injectHeadMetadata(disclaimerHtml, {
  title: 'Disclaimer | Apna College Bihar',
  description: 'Official disclaimer clarifying that Apna College Bihar is an independent educational platform not affiliated with government agencies.',
  canonical: 'https://www.apnacollegebihar.online/disclaimer',
  schemaJson: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.apnacollegebihar.online/" },
          { "@type": "ListItem", "position": 2, "name": "Disclaimer", "item": "https://www.apnacollegebihar.online/disclaimer" }
        ]
      },
      {
        "@type": "WebPage",
        "@id": "https://www.apnacollegebihar.online/disclaimer",
        "url": "https://www.apnacollegebihar.online/disclaimer",
        "name": "Disclaimer | Apna College Bihar"
      }
    ]
  }
});
writeStaticHtml('disclaimer', disclaimerHtml);

// ─────────────────────────────────────────────────────────────
// 8. GENERATE DMCA POLICY (/dmca)
// ─────────────────────────────────────────────────────────────
const dmcaBody = `
<div class="min-h-screen bg-slate-50 font-['Inter'] flex flex-col justify-between">
  ${navHeaderHtml}

  <main class="flex-grow max-w-4xl mx-auto px-4 sm:px-6 py-12">
    <div class="text-center mb-12">
      <span class="px-3 py-1 bg-red-100 text-red-800 text-xs font-black uppercase tracking-widest rounded-full inline-block mb-3">Copyright</span>
      <h1 class="text-3xl sm:text-5xl font-[1000] text-slate-900 tracking-tight uppercase mb-4">DMCA Copyright Policy</h1>
    </div>

    <div class="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm space-y-6 prose prose-slate max-w-none text-slate-700 text-xs md:text-sm">
      <h2 class="text-xl font-black text-slate-900 uppercase">Compliance with Digital Millennium Copyright Act</h2>
      <p>
        Apna College Bihar respects the intellectual property rights of others and strictly complies with the Digital Millennium Copyright Act (DMCA). The study notes, handwritten summaries, and past year question papers shared on this platform are intended purely for non-commercial educational use.
      </p>
      <p>
        If you are a copyright owner or authorized representative and believe that any content hosted on this site infringes upon your copyright, please submit a formal takedown notice to <a href="mailto:prince86944@gmail.com" class="text-blue-600 underline font-bold">prince86944@gmail.com</a> with:
      </p>
      <ul class="list-disc pl-5 space-y-1">
        <li>Identification of the copyrighted work claimed to be infringed.</li>
        <li>Direct URL of the infringing material on our site.</li>
        <li>Your contact details (name, address, phone number, email).</li>
        <li>A statement affirming that the disputed use is not authorized by the copyright owner.</li>
      </ul>
      <p>Upon receipt of a valid notice, our team will expeditiously investigate and remove the identified content within 48 hours.</p>
    </div>
  </main>

  ${footerHtml}
</div>
`;

let dmcaHtml = injectIntoRoot(baseTemplate, dmcaBody);
dmcaHtml = injectHeadMetadata(dmcaHtml, {
  title: 'DMCA Copyright Policy | Apna College Bihar',
  description: 'DMCA copyright and takedown policy for Apna College Bihar.',
  canonical: 'https://www.apnacollegebihar.online/dmca',
  schemaJson: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.apnacollegebihar.online/" },
          { "@type": "ListItem", "position": 2, "name": "DMCA Policy", "item": "https://www.apnacollegebihar.online/dmca" }
        ]
      },
      {
        "@type": "WebPage",
        "@id": "https://www.apnacollegebihar.online/dmca",
        "url": "https://www.apnacollegebihar.online/dmca",
        "name": "DMCA Copyright Policy | Apna College Bihar"
      }
    ]
  }
});
writeStaticHtml('dmca', dmcaHtml);

// ─────────────────────────────────────────────────────────────
// 9. GENERATE BEU NOTES PAGE (/notes)
// ─────────────────────────────────────────────────────────────
const notesBody = `
<div class="min-h-screen bg-slate-50 font-['Inter'] flex flex-col justify-between">
  \${navHeaderHtml}

  <main class="flex-grow max-w-6xl mx-auto px-4 sm:px-6 py-12">
    <!-- Breadcrumb -->
    <div class="mb-6 text-xs text-slate-500 flex items-center gap-2">
      <a href="/" class="hover:text-blue-600">Home</a>
      <span>/</span>
      <span class="text-slate-800 font-semibold">BEU Semester Notes</span>
    </div>

    <div class="text-center max-w-3xl mx-auto mb-12">
      <span class="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-black uppercase tracking-widest rounded-full inline-block mb-3">Academic Repository 2026</span>
      <h1 class="text-3xl sm:text-5xl font-[1000] text-slate-900 tracking-tight uppercase mb-4">BEU B.Tech Semester Notes & Study Material</h1>
      <p class="text-slate-600 text-sm md:text-base leading-relaxed">
        Download 100% free, unit-wise handwritten and typed engineering lecture notes curated strictly according to the latest Bihar Engineering University (BEU Patna) syllabus across all 38 Government Engineering Colleges.
      </p>
    </div>

    <!-- Branch Directory Grid with Functional Links -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      <div class="bg-white p-6 border border-slate-200 rounded-3xl shadow-sm hover:border-blue-500 transition-all flex flex-col justify-between">
        <div>
          <div class="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center font-bold text-xl mb-4">💻</div>
          <h3 class="font-black text-slate-900 text-base uppercase mb-1">Computer Science & Engineering (CSE)</h3>
          <p class="text-xs text-slate-500 leading-relaxed mb-4">Complete unit notes for Data Structures, Algorithms, Operating Systems, DBMS, Computer Networks, Theory of Computation, Compiler Design, AI & ML.</p>
        </div>
        <a href="/branch/cse" class="text-blue-600 text-xs font-bold hover:underline inline-flex items-center gap-1">Access CSE Notes Hub &rarr;</a>
      </div>

      <div class="bg-white p-6 border border-slate-200 rounded-3xl shadow-sm hover:border-emerald-500 transition-all flex flex-col justify-between">
        <div>
          <div class="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center font-bold text-xl mb-4">🏗️</div>
          <h3 class="font-black text-slate-900 text-base uppercase mb-1">Civil Engineering (CE)</h3>
          <p class="text-xs text-slate-500 leading-relaxed mb-4">Structural Analysis, Fluid Mechanics, Geotechnical Engineering, Surveying, Environmental Engineering, Transportation, and RCC Design lecture notes.</p>
        </div>
        <a href="/branch/civil" class="text-emerald-600 text-xs font-bold hover:underline inline-flex items-center gap-1">Access Civil Notes Hub &rarr;</a>
      </div>

      <div class="bg-white p-6 border border-slate-200 rounded-3xl shadow-sm hover:border-orange-500 transition-all flex flex-col justify-between">
        <div>
          <div class="w-12 h-12 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center font-bold text-xl mb-4">⚙️</div>
          <h3 class="font-black text-slate-900 text-base uppercase mb-1">Mechanical Engineering (ME)</h3>
          <p class="text-xs text-slate-500 leading-relaxed mb-4">Thermodynamics, Heat Transfer, Machine Design, Fluid Machinery, Strength of Materials (SOM), Kinematics, and Manufacturing Technology notes.</p>
        </div>
        <a href="/branch/me" class="text-orange-600 text-xs font-bold hover:underline inline-flex items-center gap-1">Access Mechanical Notes Hub &rarr;</a>
      </div>

      <div class="bg-white p-6 border border-slate-200 rounded-3xl shadow-sm hover:border-amber-500 transition-all flex flex-col justify-between">
        <div>
          <div class="w-12 h-12 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center font-bold text-xl mb-4">⚡</div>
          <h3 class="font-black text-slate-900 text-base uppercase mb-1">Electrical & Electronics (EEE / EE)</h3>
          <p class="text-xs text-slate-500 leading-relaxed mb-4">Network Analysis, Electrical Machines, Control Systems, Power Systems, Power Electronics, Electromagnetic Field Theory, and Measurement notes.</p>
        </div>
        <a href="/branch/ee" class="text-amber-600 text-xs font-bold hover:underline inline-flex items-center gap-1">Access Electrical Notes Hub &rarr;</a>
      </div>

      <div class="bg-white p-6 border border-slate-200 rounded-3xl shadow-sm hover:border-indigo-500 transition-all flex flex-col justify-between">
        <div>
          <div class="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center font-bold text-xl mb-4">📡</div>
          <h3 class="font-black text-slate-900 text-base uppercase mb-1">Electronics & Communication (ECE)</h3>
          <p class="text-xs text-slate-500 leading-relaxed mb-4">Analog Circuits, Signals & Systems, Digital Communication, Microprocessors (8085/8086), VLSI Design, Antenna & Wave Propagation PDFs.</p>
        </div>
        <a href="/branch/ece" class="text-indigo-600 text-xs font-bold hover:underline inline-flex items-center gap-1">Access ECE Notes Hub &rarr;</a>
      </div>

      <div class="bg-white p-6 border border-slate-200 rounded-3xl shadow-sm hover:border-purple-500 transition-all flex flex-col justify-between">
        <div>
          <div class="w-12 h-12 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center font-bold text-xl mb-4">📐</div>
          <h3 class="font-black text-slate-900 text-base uppercase mb-1">1st Year Common (Group A & Group B)</h3>
          <p class="text-xs text-slate-500 leading-relaxed mb-4">Engineering Mathematics-I & II, Engineering Physics, Engineering Chemistry, Basic Electrical Engineering, Programming for Problem Solving (PPS in C).</p>
        </div>
        <a href="/blog/beu-btech-1st-year-syllabus-complete-guide" class="text-purple-600 text-xs font-bold hover:underline inline-flex items-center gap-1">Read 1st Year Complete Guide &rarr;</a>
      </div>
    </div>

    <!-- In-Depth Academic Subject Matrix Table -->
    <div class="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm space-y-8 prose prose-slate max-w-none text-slate-800 mb-12">
      <h2 class="text-2xl font-black text-slate-900 uppercase">Bihar Engineering University (BEU) Subject Matrix & Credit Structure</h2>
      <p class="text-sm leading-relaxed">
        Under Bihar Engineering University's AICTE-aligned curriculum, each undergraduate semester balances theoretical fundamentals with experimental laboratory coursework. Understanding the credit distribution and subject weightage enables engineering scholars to strategize study time effectively and target higher Semester Grade Point Averages (SGPA).
      </p>

      <div class="overflow-x-auto not-prose my-6">
        <table class="w-full text-left border-collapse text-xs md:text-sm">
          <thead>
            <tr class="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
              <th class="p-3">Semester</th>
              <th class="p-3">Key Theoretical Courses</th>
              <th class="p-3">Core Laboratory Subjects</th>
              <th class="p-3">Semester Credits</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100">
            <tr>
              <td class="p-3 font-bold text-blue-600">Semester 1 (Group A)</td>
              <td class="p-3">Engineering Physics, Mathematics-I (Calculus), Basic Electrical Engineering</td>
              <td class="p-3">Physics Lab, Electrical Lab, Engineering Workshop</td>
              <td class="p-3 font-semibold">17.5 Credits</td>
            </tr>
            <tr class="bg-slate-50/50">
              <td class="p-3 font-bold text-emerald-600">Semester 1 (Group B)</td>
              <td class="p-3">Engineering Chemistry, Mathematics-I, Programming for Problem Solving (PPS)</td>
              <td class="p-3">Chemistry Lab, Programming Lab, Engineering Graphics & Design</td>
              <td class="p-3 font-semibold">17.5 Credits</td>
            </tr>
            <tr>
              <td class="p-3 font-bold text-purple-600">Semester 3 (Branch Core)</td>
              <td class="p-3">Data Structures & Algorithms, Discrete Mathematics, OOP in C++/Java, Digital Electronics</td>
              <td class="p-3">Data Structures Lab, Digital Electronics Lab, IT Workshop</td>
              <td class="p-3 font-semibold">20.0 Credits</td>
            </tr>
            <tr class="bg-slate-50/50">
              <td class="p-3 font-bold text-amber-600">Semester 4 (Branch Core)</td>
              <td class="p-3">Operating Systems, DBMS, Design & Analysis of Algorithms, Computer Organization</td>
              <td class="p-3">Operating Systems Lab, Database Lab, Algorithms Lab</td>
              <td class="p-3 font-semibold">21.0 Credits</td>
            </tr>
            <tr>
              <td class="p-3 font-bold text-rose-600">Semester 5 (Advanced Core)</td>
              <td class="p-3">Computer Networks, Formal Language & Automata (TOC), Web Technologies, Professional Elective-I</td>
              <td class="p-3">Computer Networks Lab, Web Dev Lab, Mini Project</td>
              <td class="p-3 font-semibold">22.0 Credits</td>
            </tr>
            <tr class="bg-slate-50/50">
              <td class="p-3 font-bold text-indigo-600">Semester 6 (Specialization)</td>
              <td class="p-3">Compiler Design, Software Engineering, AI & Machine Learning, Open Elective-I</td>
              <td class="p-3">Compiler Lab, AI & ML Lab, Technical Presentation</td>
              <td class="p-3 font-semibold">21.0 Credits</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 class="text-xl font-bold text-slate-900">How to Prepare from BEU Notes to Secure an 8.5+ SGPA</h3>
      <p class="text-sm leading-relaxed">
        Achieving top academic standing at BEU requires understanding how university answer sheets are evaluated. Examiners grade hundreds of papers daily; presenting well-organized answers with clear diagrams, derivations, and formulas significantly impacts your final marks:
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose my-6 text-xs md:text-sm">
        <div class="p-6 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
          <h4 class="font-bold text-slate-900 text-sm uppercase">1. High-Yield Module Prioritization</h4>
          <p class="text-slate-600 leading-relaxed">
            In almost every BEU subject, Modules 1, 2, and 4 carry over 65% of the total question paper weightage. Prioritize core derivations and fundamental definitions from these modules before covering specialized peripheral chapters.
          </p>
        </div>
        <div class="p-6 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
          <h4 class="font-bold text-slate-900 text-sm uppercase">2. Diagrammatic & Formula Boxing Protocol</h4>
          <p class="text-slate-600 leading-relaxed">
            Never answer a 14-mark question with plain text alone. Include pencil-drawn schematics, circuit diagrams, or data flowcharts. Highlight final numerical results inside bold rectangular boxes with proper units.
          </p>
        </div>
        <div class="p-6 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
          <h4 class="font-bold text-slate-900 text-sm uppercase">3. Solve 5 Years of Past Papers (PYQs)</h4>
          <p class="text-slate-600 leading-relaxed">
            Over 60% of university theory questions repeat across alternating academic years. Cross-reference your unit notes with the <a href="/pyq" class="text-blue-600 underline font-semibold">BEU PYQ Portal</a> to identify repeating derivation patterns.
          </p>
        </div>
        <div class="p-6 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
          <h4 class="font-bold text-slate-900 text-sm uppercase">4. Maintain Internal Assessment Cushion</h4>
          <p class="text-slate-600 leading-relaxed">
            Internal assessments contribute 30 marks per subject. Scoring 26–28 in midterms, lab practicals, and attendance provides a strong buffer to propel your SGPA above 9.0 even if external evaluation is strict.
          </p>
        </div>
      </div>

      <h3 class="text-xl font-bold text-slate-900">Frequently Asked Questions (BEU Notes FAQ)</h3>
      <div class="space-y-4 not-prose text-xs md:text-sm">
        <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl">
          <h4 class="font-bold text-slate-900">Are these notes applicable to all 38 Government Engineering Colleges in Bihar?</h4>
          <p class="text-slate-600 mt-1">Yes. Bihar Engineering University (BEU Patna) administers a uniform syllabus, course structure, and common end-semester examinations across all 38 government engineering institutes in Bihar.</p>
        </div>
        <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl">
          <h4 class="font-bold text-slate-900">Are the notes downloadable in PDF format for offline study?</h4>
          <p class="text-slate-600 mt-1">Yes, all notes are available as high-speed PDF downloads and can also be saved offline inside the official Apna College Bihar Android mobile app.</p>
        </div>
        <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl">
          <h4 class="font-bold text-slate-900">Are these notes updated for the 2026 BEU syllabus?</h4>
          <p class="text-slate-600 mt-1">Yes, all study materials are reviewed each semester by alumni mentors and subject toppers to ensure complete alignment with the latest AICTE model curriculum adopted by BEU.</p>
        </div>
      </div>
    </div>
  </main>

  \${footerHtml}
</div>
`;

let notesHtml = injectIntoRoot(baseTemplate, notesBody);
notesHtml = injectHeadMetadata(notesHtml, {
  title: 'BEU Notes Download 2026 | Bihar Engineering University B.Tech Study Material',
  description: 'Download free handwritten & typed BEU Notes for Semesters 1 to 8 across CSE, Civil, Mechanical, EEE, ECE, IT. Unit-wise syllabus-aligned notes for Bihar engineering colleges.',
  canonical: 'https://www.apnacollegebihar.online/notes',
  schemaJson: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.apnacollegebihar.online/" },
          { "@type": "ListItem", "position": 2, "name": "BEU Notes", "item": "https://www.apnacollegebihar.online/notes" }
        ]
      },
      {
        "@type": "EducationalResource",
        "@id": "https://www.apnacollegebihar.online/notes",
        "url": "https://www.apnacollegebihar.online/notes",
        "name": "BEU Notes Download - Bihar Engineering Study Material",
        "description": "Comprehensive semester notes for Bihar Engineering University students across 38 government engineering colleges."
      }
    ]
  }
});
writeStaticHtml('notes', notesHtml);

// ─────────────────────────────────────────────────────────────
// 10. GENERATE BEU PYQ PAGE (/pyq)
// ─────────────────────────────────────────────────────────────
const pyqBody = `
<div class="min-h-screen bg-slate-50 font-['Inter'] flex flex-col justify-between">
  \${navHeaderHtml}

  <main class="flex-grow max-w-6xl mx-auto px-4 sm:px-6 py-12">
    <!-- Breadcrumb -->
    <div class="mb-6 text-xs text-slate-500 flex items-center gap-2">
      <a href="/" class="hover:text-blue-600">Home</a>
      <span>/</span>
      <span class="text-slate-800 font-semibold">BEU Previous Year Questions</span>
    </div>

    <div class="text-center max-w-3xl mx-auto mb-12">
      <span class="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-black uppercase tracking-widest rounded-full inline-block mb-3">Official Examination Archives</span>
      <h1 class="text-3xl sm:text-5xl font-[1000] text-slate-900 tracking-tight uppercase mb-4">BEU B.Tech Previous Year Question Papers (PYQ)</h1>
      <p class="text-slate-600 text-sm md:text-base leading-relaxed">
        Download verified past 5+ years of end-semester university examination papers with question pattern blueprints, recurring question breakdowns, and answer outlines for all 38 Government Engineering Colleges in Bihar.
      </p>
    </div>

    <!-- Year & Semester Archive Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
      <div class="bg-white p-6 border border-slate-200 rounded-3xl shadow-sm hover:border-indigo-500 transition-all text-center flex flex-col justify-between">
        <div>
          <div class="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center font-bold text-xl mx-auto mb-3">1️⃣</div>
          <div class="text-2xl font-black text-indigo-600 mb-1">1st Year</div>
          <h4 class="font-bold text-slate-900 text-sm uppercase mb-2">Semesters 1 & 2</h4>
          <p class="text-xs text-slate-500 mb-4 leading-relaxed">Engineering Mathematics-I & II, Physics, Chemistry, PPS (C Programming), Basic Electrical Engineering.</p>
        </div>
        <a href="/blog/beu-btech-1st-year-syllabus-complete-guide" class="text-indigo-600 font-bold text-xs hover:underline inline-flex items-center justify-center gap-1">1st Year Syllabus & PYQs &rarr;</a>
      </div>

      <div class="bg-white p-6 border border-slate-200 rounded-3xl shadow-sm hover:border-blue-500 transition-all text-center flex flex-col justify-between">
        <div>
          <div class="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center font-bold text-xl mx-auto mb-3">2️⃣</div>
          <div class="text-2xl font-black text-blue-600 mb-1">2nd Year</div>
          <h4 class="font-bold text-slate-900 text-sm uppercase mb-2">Semesters 3 & 4</h4>
          <p class="text-xs text-slate-500 mb-4 leading-relaxed">Data Structures, Discrete Maths, OOPs, Operating Systems, DBMS, Fluid Mechanics, Thermodynamics, Network Theory.</p>
        </div>
        <a href="/branch/cse" class="text-blue-600 font-bold text-xs hover:underline inline-flex items-center justify-center gap-1">2nd Year Core Papers &rarr;</a>
      </div>

      <div class="bg-white p-6 border border-slate-200 rounded-3xl shadow-sm hover:border-emerald-500 transition-all text-center flex flex-col justify-between">
        <div>
          <div class="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center font-bold text-xl mx-auto mb-3">3️⃣</div>
          <div class="text-2xl font-black text-emerald-600 mb-1">3rd Year</div>
          <h4 class="font-bold text-slate-900 text-sm uppercase mb-2">Semesters 5 & 6</h4>
          <p class="text-xs text-slate-500 mb-4 leading-relaxed">Computer Networks, Formal Languages & Automata, Compiler Design, Structural Design, Machine Design, Power Systems.</p>
        </div>
        <a href="/branch/civil" class="text-emerald-600 font-bold text-xs hover:underline inline-flex items-center justify-center gap-1">3rd Year Core Papers &rarr;</a>
      </div>

      <div class="bg-white p-6 border border-slate-200 rounded-3xl shadow-sm hover:border-rose-500 transition-all text-center flex flex-col justify-between">
        <div>
          <div class="w-12 h-12 bg-rose-50 text-rose-600 rounded-2xl flex items-center justify-center font-bold text-xl mx-auto mb-3">4️⃣</div>
          <div class="text-2xl font-black text-rose-600 mb-1">4th Year</div>
          <h4 class="font-bold text-slate-900 text-sm uppercase mb-2">Semesters 7 & 8</h4>
          <p class="text-xs text-slate-500 mb-4 leading-relaxed">Cloud Computing, AI/ML, Cyber Security, Professional Electives, Open Electives, and Comprehensive Viva Question Banks.</p>
        </div>
        <a href="/branch/me" class="text-rose-600 font-bold text-xs hover:underline inline-flex items-center justify-center gap-1">4th Year Advanced Papers &rarr;</a>
      </div>
    </div>

    <!-- BEU Examination Paper Structure Blueprint -->
    <div class="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm space-y-8 prose prose-slate max-w-none text-slate-800 mb-12">
      <h2 class="text-2xl font-black text-slate-900 uppercase">Anatomy of a BEU Theory Examination Paper (70 Marks)</h2>
      <p class="text-sm leading-relaxed">
        To prepare strategically and maximize your final score, every student must understand how Bihar Engineering University structures its external 70-mark theory papers. Rather than trying to master all 600 pages of standard textbooks during revision, understanding question choices gives you a massive advantage:
      </p>

      <div class="overflow-x-auto not-prose my-6">
        <table class="w-full text-left border-collapse text-xs md:text-sm">
          <thead>
            <tr class="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
              <th class="p-3">Paper Section</th>
              <th class="p-3">Question Structure</th>
              <th class="p-3">Marks Distribution</th>
              <th class="p-3">Evaluation Strategy</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100">
            <tr>
              <td class="p-3 font-bold text-indigo-600">Question 1 (Compulsory)</td>
              <td class="p-3">7 short conceptual questions (2 marks each) covering all 5 syllabus modules</td>
              <td class="p-3 font-semibold">14 Marks (7 &times; 2)</td>
              <td class="p-3">Write precise definitions, formulas, and state underlying assumptions with clean scientific units.</td>
            </tr>
            <tr class="bg-slate-50/50">
              <td class="p-3 font-bold text-blue-600">Questions 2 through 9</td>
              <td class="p-3">8 long-answer analytical, derivation-based, or numerical problems across syllabus units</td>
              <td class="p-3 font-semibold">56 Marks (Answer any 4 &times; 14)</td>
              <td class="p-3">Pick the 4 questions containing mathematical derivations or boxed numericals for maximum scoring potential.</td>
            </tr>
            <tr>
              <td class="p-3 font-bold text-emerald-600">Passing Thresholds</td>
              <td class="p-3">Minimum 35% in External Exam AND minimum 40% combined with Internal Assessment</td>
              <td class="p-3 font-semibold">25/70 External + 40/100 Total</td>
              <td class="p-3">Scoring below 25 in external results in an 'F' grade (backlog) irrespective of high internal marks.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 class="text-xl font-bold text-slate-900">Top High-Yield Recurring Questions Across BEU Curricula</h3>
      <p class="text-sm leading-relaxed">
        Statistical analysis of 5 consecutive examination cycles reveals that university professors repeatedly test core engineering foundations. Mastering the following high-frequency derivations provides a guaranteed scoring cushion:
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose my-6 text-xs md:text-sm">
        <div class="p-6 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
          <h4 class="font-bold text-slate-900 text-sm uppercase">Computer Science & IT</h4>
          <ul class="list-disc pl-5 space-y-1 text-slate-600">
            <li>Dijkstra's & Bellman-Ford Shortest Path Algorithm analysis</li>
            <li>Binary Search Tree (BST) insertion, deletion & AVL balancing</li>
            <li>Process Synchronization: Dining Philosophers & Semaphore solutions</li>
            <li>Relational Database Normalization: 1NF, 2NF, 3NF, BCNF proofs</li>
            <li>Chomsky Hierarchy & Context-Free Grammar to PDA conversion</li>
          </ul>
        </div>

        <div class="p-6 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
          <h4 class="font-bold text-slate-900 text-sm uppercase">Mechanical & Civil Engineering</h4>
          <ul class="list-disc pl-5 space-y-1 text-slate-600">
            <li>Bernoulli's Equation & Navier-Stokes differential formulations</li>
            <li>Air Standard Carnot, Otto, and Diesel Cycle efficiency derivations</li>
            <li>Euler's Column Buckling Theory & Rankine formula derivations</li>
            <li>Shear Force (SFD) & Bending Moment Diagrams (BMD) under combined loads</li>
            <li>One-dimensional heat conduction equation in cylindrical coordinates</li>
          </ul>
        </div>
      </div>

      <div class="p-6 bg-blue-50 border border-blue-200 rounded-2xl not-prose my-6 space-y-3 text-xs md:text-sm text-slate-800">
        <h4 class="font-black text-blue-900 uppercase tracking-wider text-sm">Strategic Study Blueprints & Related Guides</h4>
        <p class="leading-relaxed">
          Complement your past paper practice with our comprehensive editorial guides written by university toppers:
        </p>
        <div class="flex flex-wrap gap-4 pt-2">
          <a href="/blog/why-pyqs-are-key-to-engineering-exams" class="text-blue-600 font-bold hover:underline">&rarr; Read: Why PYQs are the Key to Engineering Exams</a>
          <a href="/blog/how-to-prepare-for-beu-semester-exams" class="text-blue-600 font-bold hover:underline">&rarr; Read: 60-Day Roadmap for BEU Semester Exams</a>
          <a href="/notes" class="text-blue-600 font-bold hover:underline">&rarr; Explore Semester Notes</a>
        </div>
      </div>

      <h3 class="text-xl font-bold text-slate-900">Frequently Asked Questions (BEU PYQ FAQ)</h3>
      <div class="space-y-4 not-prose text-xs md:text-sm">
        <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl">
          <h4 class="font-bold text-slate-900">How many years of PYQs should I solve before semester exams?</h4>
          <p class="text-slate-600 mt-1">Solving 5 full years of previous papers covers approximately 75% of repeating conceptual patterns and numerical problem variations.</p>
        </div>
        <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl">
          <h4 class="font-bold text-slate-900">Are solutions provided for numerical problems in these question papers?</h4>
          <p class="text-slate-600 mt-1">Yes, our subject mentors provide step-by-step solved answer keys and derivation steps for high-frequency questions inside our corresponding <a href="/notes" class="text-blue-600 underline font-semibold">BEU Notes repository</a>.</p>
        </div>
        <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl">
          <h4 class="font-bold text-slate-900">What is the carry-over policy if I miss the 25-mark external passing threshold?</h4>
          <p class="text-slate-600 mt-1">If your external score is under 24.5/70, you are awarded an 'F' grade (backlog) and must sit for the carry-over paper in the subsequent odd or even semester examination cycle.</p>
        </div>
      </div>
    </div>
  </main>

  \${footerHtml}
</div>
`;

let pyqHtml = injectIntoRoot(baseTemplate, pyqBody);
pyqHtml = injectHeadMetadata(pyqHtml, {
  title: 'BEU PYQ Papers Download 2026 | Bihar Engineering Previous Year Questions PDF',
  description: 'Download 5+ years of BEU Previous Year Question Papers (PYQs) for Semester 1 to 8 across all branches. Solved university exam question banks and blueprints.',
  canonical: 'https://www.apnacollegebihar.online/pyq',
  schemaJson: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.apnacollegebihar.online/" },
          { "@type": "ListItem", "position": 2, "name": "BEU PYQ Papers", "item": "https://www.apnacollegebihar.online/pyq" }
        ]
      },
      {
        "@type": "EducationalResource",
        "@id": "https://www.apnacollegebihar.online/pyq",
        "url": "https://www.apnacollegebihar.online/pyq",
        "name": "BEU Previous Year Questions (PYQs)",
        "description": "5+ years of verified Bihar Engineering University previous year question papers for all branches."
      }
    ]
  }
});
writeStaticHtml('pyq', pyqHtml);

// ─────────────────────────────────────────────────────────────
// 11. GENERATE BEU SYLLABUS PAGE (/syllabus)
// ─────────────────────────────────────────────────────────────
const syllabusBody = `
<div class="min-h-screen bg-slate-50 font-['Inter'] flex flex-col justify-between">
  \${navHeaderHtml}

  <main class="flex-grow max-w-6xl mx-auto px-4 sm:px-6 py-12">
    <!-- Breadcrumb -->
    <div class="mb-6 text-xs text-slate-500 flex items-center gap-2">
      <a href="/" class="hover:text-blue-600">Home</a>
      <span>/</span>
      <span class="text-slate-800 font-semibold">BEU B.Tech Syllabus</span>
    </div>

    <div class="text-center max-w-3xl mx-auto mb-12">
      <span class="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-black uppercase tracking-widest rounded-full inline-block mb-3">Curriculum Framework 2026</span>
      <h1 class="text-3xl sm:text-5xl font-[1000] text-slate-900 tracking-tight uppercase mb-4">BEU B.Tech Official Syllabus & Credit System</h1>
      <p class="text-slate-600 text-sm md:text-base leading-relaxed">
        Official AICTE-aligned undergraduate curriculum structure, 160-credit distribution, 10-point grading system, and unit-wise module breakdown for Bihar Engineering University (BEU Patna) across all 38 Government Engineering Colleges.
      </p>
    </div>

    <!-- Quick Navigation to Branch Curricula -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      <div class="bg-white p-6 border border-slate-200 rounded-3xl shadow-sm hover:border-emerald-500 transition-all flex flex-col justify-between">
        <div>
          <span class="px-2.5 py-0.5 bg-blue-50 text-blue-700 text-[10px] font-black uppercase tracking-wider rounded-md inline-block mb-2">Branch Curriculum</span>
          <h3 class="font-black text-slate-900 text-base uppercase mb-1">Computer Science & Engineering</h3>
          <p class="text-xs text-slate-500 leading-relaxed mb-4">Complete 8-semester course modules: Data Structures, Discrete Mathematics, OOPs, OS, DBMS, Algorithms, Theory of Computation, Compiler Design, AI/ML.</p>
        </div>
        <a href="/branch/cse" class="text-blue-600 text-xs font-bold hover:underline inline-flex items-center gap-1">View CSE Syllabus & Modules &rarr;</a>
      </div>

      <div class="bg-white p-6 border border-slate-200 rounded-3xl shadow-sm hover:border-emerald-500 transition-all flex flex-col justify-between">
        <div>
          <span class="px-2.5 py-0.5 bg-emerald-50 text-emerald-700 text-[10px] font-black uppercase tracking-wider rounded-md inline-block mb-2">Branch Curriculum</span>
          <h3 class="font-black text-slate-900 text-base uppercase mb-1">Civil Engineering</h3>
          <p class="text-xs text-slate-500 leading-relaxed mb-4">Fluid Mechanics, Surveying, Mechanics of Materials, Environmental Engineering, Structural Analysis, Geotechnical Engineering, Transportation, Design of RCC & Steel.</p>
        </div>
        <a href="/branch/civil" class="text-emerald-600 text-xs font-bold hover:underline inline-flex items-center gap-1">View Civil Syllabus & Modules &rarr;</a>
      </div>

      <div class="bg-white p-6 border border-slate-200 rounded-3xl shadow-sm hover:border-emerald-500 transition-all flex flex-col justify-between">
        <div>
          <span class="px-2.5 py-0.5 bg-orange-50 text-orange-700 text-[10px] font-black uppercase tracking-wider rounded-md inline-block mb-2">Branch Curriculum</span>
          <h3 class="font-black text-slate-900 text-base uppercase mb-1">Mechanical Engineering</h3>
          <p class="text-xs text-slate-500 leading-relaxed mb-4">Engineering Thermodynamics, Strength of Materials, Fluid Machinery, Heat & Mass Transfer, Kinematics & Dynamics of Machines, Machine Design, Manufacturing Technology.</p>
        </div>
        <a href="/branch/me" class="text-orange-600 text-xs font-bold hover:underline inline-flex items-center gap-1">View Mechanical Syllabus & Modules &rarr;</a>
      </div>

      <div class="bg-white p-6 border border-slate-200 rounded-3xl shadow-sm hover:border-emerald-500 transition-all flex flex-col justify-between">
        <div>
          <span class="px-2.5 py-0.5 bg-amber-50 text-amber-700 text-[10px] font-black uppercase tracking-wider rounded-md inline-block mb-2">Branch Curriculum</span>
          <h3 class="font-black text-slate-900 text-base uppercase mb-1">Electrical & Electronics</h3>
          <p class="text-xs text-slate-500 leading-relaxed mb-4">Electric Circuit Analysis, Electromagnetic Field Theory, Electrical Machines-I & II, Control Systems, Power Electronics, Power Systems-I & II, Switchgear Protection.</p>
        </div>
        <a href="/branch/ee" class="text-amber-600 text-xs font-bold hover:underline inline-flex items-center gap-1">View Electrical Syllabus & Modules &rarr;</a>
      </div>

      <div class="bg-white p-6 border border-slate-200 rounded-3xl shadow-sm hover:border-emerald-500 transition-all flex flex-col justify-between">
        <div>
          <span class="px-2.5 py-0.5 bg-indigo-50 text-indigo-700 text-[10px] font-black uppercase tracking-wider rounded-md inline-block mb-2">Branch Curriculum</span>
          <h3 class="font-black text-slate-900 text-base uppercase mb-1">Electronics & Communication</h3>
          <p class="text-xs text-slate-500 leading-relaxed mb-4">Analog & Digital Electronic Circuits, Signals & Systems, Analog Communication, Digital Communication, Microprocessors & Microcontrollers, VLSI Design, Antenna Theory.</p>
        </div>
        <a href="/branch/ece" class="text-indigo-600 text-xs font-bold hover:underline inline-flex items-center gap-1">View ECE Syllabus & Modules &rarr;</a>
      </div>

      <div class="bg-white p-6 border border-slate-200 rounded-3xl shadow-sm hover:border-emerald-500 transition-all flex flex-col justify-between">
        <div>
          <span class="px-2.5 py-0.5 bg-purple-50 text-purple-700 text-[10px] font-black uppercase tracking-wider rounded-md inline-block mb-2">Common 1st Year</span>
          <h3 class="font-black text-slate-900 text-base uppercase mb-1">Group A & Group B Induction</h3>
          <p class="text-xs text-slate-500 leading-relaxed mb-4">AICTE Model Curriculum: Engineering Mathematics-I & II, Engineering Physics, Engineering Chemistry, Basic Electrical, Programming for Problem Solving (PPS in C).</p>
        </div>
        <a href="/blog/beu-btech-1st-year-syllabus-complete-guide" class="text-purple-600 text-xs font-bold hover:underline inline-flex items-center gap-1">Read 1st Year Complete Guide &rarr;</a>
      </div>
    </div>

    <!-- AICTE 160-Credit Framework Detailed Table -->
    <div class="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm space-y-8 prose prose-slate max-w-none text-slate-800 mb-12">
      <h2 class="text-2xl font-black text-slate-900 uppercase">AICTE 160-Credit Category Breakdown for B.Tech Degree</h2>
      <p class="text-sm leading-relaxed">
        Under the academic regulations of Bihar Engineering University (BEU Patna), a student must successfully earn a minimum of <strong>160 academic credits</strong> across 8 semesters to be awarded the degree of Bachelor of Technology (B.Tech). The curriculum adheres strictly to the All India Council for Technical Education (AICTE) model structure:
      </p>

      <div class="overflow-x-auto not-prose my-6">
        <table class="w-full text-left border-collapse text-xs md:text-sm">
          <thead>
            <tr class="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
              <th class="p-3">Course Category Code</th>
              <th class="p-3">Category Classification</th>
              <th class="p-3">Curriculum Focus & Representative Subjects</th>
              <th class="p-3">Required Credits</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100">
            <tr>
              <td class="p-3 font-bold text-blue-600">BSC</td>
              <td class="p-3 font-bold">Basic Science Courses</td>
              <td class="p-3">Engineering Mathematics (I, II, III), Engineering Physics, Engineering Chemistry</td>
              <td class="p-3 font-semibold">25 Credits</td>
            </tr>
            <tr class="bg-slate-50/50">
              <td class="p-3 font-bold text-emerald-600">ESC</td>
              <td class="p-3 font-bold">Engineering Science Courses</td>
              <td class="p-3">Basic Electrical Engineering, Programming for Problem Solving (PPS), Workshop, Engineering Graphics</td>
              <td class="p-3 font-semibold">24 Credits</td>
            </tr>
            <tr>
              <td class="p-3 font-bold text-purple-600">HSMC</td>
              <td class="p-3 font-bold">Humanities & Social Sciences</td>
              <td class="p-3">English for Technical Communication, Economics for Engineers, Constitution of India, Universal Human Values</td>
              <td class="p-3 font-semibold">12 Credits</td>
            </tr>
            <tr class="bg-slate-50/50">
              <td class="p-3 font-bold text-amber-600">PCC</td>
              <td class="p-3 font-bold">Professional Core Courses</td>
              <td class="p-3">Core discipline fundamental subjects (e.g. Data Structures, Operating Systems, Fluid Mechanics, Thermodynamics)</td>
              <td class="p-3 font-semibold">48 Credits</td>
            </tr>
            <tr>
              <td class="p-3 font-bold text-rose-600">PEC</td>
              <td class="p-3 font-bold">Professional Elective Courses</td>
              <td class="p-3">Advanced departmental specializations (e.g. Cloud Computing, Cyber Security, Earthquake Engineering, Robotics)</td>
              <td class="p-3 font-semibold">18 Credits</td>
            </tr>
            <tr class="bg-slate-50/50">
              <td class="p-3 font-bold text-indigo-600">OEC</td>
              <td class="p-3 font-bold">Open Elective Courses</td>
              <td class="p-3">Interdisciplinary courses offered across departments (e.g. IoT, Project Management, Renewable Energy, Soft Computing)</td>
              <td class="p-3 font-semibold">18 Credits</td>
            </tr>
            <tr>
              <td class="p-3 font-bold text-teal-600">PROJ / INT</td>
              <td class="p-3 font-bold">Project, Seminar & Internship</td>
              <td class="p-3">Summer Industrial Internships (4 to 8 weeks), Technical Seminars, Capstone Major Project (Part I & II)</td>
              <td class="p-3 font-semibold">15 Credits</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 class="text-xl font-bold text-slate-900">Official BEU 10-Point Absolute Grading System</h3>
      <p class="text-sm leading-relaxed">
        Academic performance in each course is evaluated through continuous internal assessment (30 marks) and external end-semester theory examinations (70 marks). Letter grades and grade points are awarded based on absolute score percentages:
      </p>

      <div class="overflow-x-auto not-prose my-6">
        <table class="w-full text-left border-collapse text-xs md:text-sm">
          <thead>
            <tr class="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
              <th class="p-3">Academic Letter Grade</th>
              <th class="p-3">Grade Point (Gi)</th>
              <th class="p-3">Percentage Score Bracket</th>
              <th class="p-3">Qualitative Performance Description</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100">
            <tr>
              <td class="p-3 font-bold text-blue-600">O (Outstanding)</td>
              <td class="p-3 font-black">10</td>
              <td class="p-3">90% to 100%</td>
              <td class="p-3">Extraordinary conceptual mastery and flawless answer presentation</td>
            </tr>
            <tr class="bg-slate-50/50">
              <td class="p-3 font-bold text-emerald-600">A+ (Excellent)</td>
              <td class="p-3 font-black">9</td>
              <td class="p-3">80% to 89%</td>
              <td class="p-3">Thorough conceptual grasp and high analytical execution</td>
            </tr>
            <tr>
              <td class="p-3 font-bold text-teal-600">A (Very Good)</td>
              <td class="p-3 font-black">8</td>
              <td class="p-3">70% to 79%</td>
              <td class="p-3">Strong academic knowledge and accurate problem solving</td>
            </tr>
            <tr class="bg-slate-50/50">
              <td class="p-3 font-bold text-amber-600">B+ (Good)</td>
              <td class="p-3 font-black">7</td>
              <td class="p-3">60% to 69%</td>
              <td class="p-3">Above-average competency across core syllabus modules</td>
            </tr>
            <tr>
              <td class="p-3 font-bold text-orange-600">B (Above Average)</td>
              <td class="p-3 font-black">6</td>
              <td class="p-3">50% to 59%</td>
              <td class="p-3">Satisfactory performance meeting basic course objectives</td>
            </tr>
            <tr class="bg-slate-50/50">
              <td class="p-3 font-bold text-slate-600">C (Average)</td>
              <td class="p-3 font-black">5</td>
              <td class="p-3">45% to 49%</td>
              <td class="p-3">Fair comprehension with moderate errors in analytical derivations</td>
            </tr>
            <tr>
              <td class="p-3 font-bold text-slate-500">P (Pass)</td>
              <td class="p-3 font-black">4</td>
              <td class="p-3">40% to 44%</td>
              <td class="p-3">Minimum passing benchmark satisfying university evaluation threshold</td>
            </tr>
            <tr class="bg-rose-50/50 text-rose-700">
              <td class="p-3 font-black">F (Fail / Backlog)</td>
              <td class="p-3 font-black">0</td>
              <td class="p-3">Below 40% (or &lt;25/70 in External)</td>
              <td class="p-3 font-bold">Unsuccessful; candidate must clear subject in carry-over exams</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="p-6 bg-slate-50 border border-slate-200 rounded-2xl not-prose my-6 space-y-3 text-xs md:text-sm text-slate-800">
        <h4 class="font-black text-slate-900 uppercase tracking-wider text-sm">Official Promotion & Year-Back Regulations</h4>
        <p class="leading-relaxed">
          Bihar Engineering University follows explicit credit accumulation rules for semester promotion:
        </p>
        <ul class="list-disc pl-5 space-y-1 text-slate-600">
          <li>A student is promoted from 1st Year (Semester 2) to 2nd Year (Semester 3) only if they secure at least <strong>50% of total 1st-year credits</strong> (typically 18+ credits out of 35).</li>
          <li>Promotion from 2nd Year to 3rd Year requires clearing all 1st-year backlog courses with zero active backlogs in 1st year subjects.</li>
          <li>A maximum duration of <strong>7 academic years</strong> is permitted to complete the 4-year B.Tech program.</li>
        </ul>
      </div>

      <h3 class="text-xl font-bold text-slate-900">Frequently Asked Questions (BEU Syllabus FAQ)</h3>
      <div class="space-y-4 not-prose text-xs md:text-sm">
        <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl">
          <h4 class="font-bold text-slate-900">How do I convert BEU CGPA into percentage?</h4>
          <p class="text-slate-600 mt-1">Under official BEU Patna notifications, the percentage conversion formula is: <strong>Percentage (%) = (CGPA - 0.75) &times; 10</strong>. You can verify your exact scores using our <a href="/cgpa" class="text-blue-600 underline font-semibold">BEU CGPA Calculator</a>.</p>
        </div>
        <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl">
          <h4 class="font-bold text-slate-900">What are the passing marks for 70-mark theory papers?</h4>
          <p class="text-slate-600 mt-1">A student must score at least <strong>24.5 marks (rounded to 25) out of 70</strong> in the external university exam AND achieve an aggregate of at least 40% (40 out of 100) combining external and internal assessments.</p>
        </div>
        <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl">
          <h4 class="font-bold text-slate-900">Where can I download corresponding notes for these syllabus subjects?</h4>
          <p class="text-slate-600 mt-1">All semester subject notes matching BEU module topics are available free of charge in our <a href="/notes" class="text-blue-600 underline font-semibold">BEU Notes Section</a>.</p>
        </div>
      </div>
    </div>
  </main>

  \${footerHtml}
</div>
`;

let syllabusHtml = injectIntoRoot(baseTemplate, syllabusBody);
syllabusHtml = injectHeadMetadata(syllabusHtml, {
  title: 'BEU B.Tech Syllabus 2026 PDF Download | Bihar Engineering University',
  description: 'Official BEU Patna B.Tech Syllabus 2026 for all 8 semesters. Complete subject codes, course credits, and unit breakdowns for all 38 Bihar engineering colleges.',
  canonical: 'https://www.apnacollegebihar.online/syllabus',
  schemaJson: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.apnacollegebihar.online/" },
          { "@type": "ListItem", "position": 2, "name": "BEU Syllabus", "item": "https://www.apnacollegebihar.online/syllabus" }
        ]
      },
      {
        "@type": "EducationalResource",
        "@id": "https://www.apnacollegebihar.online/syllabus",
        "url": "https://www.apnacollegebihar.online/syllabus",
        "name": "BEU B.Tech Official Syllabus",
        "description": "Complete syllabus outline for Bihar Engineering University B.Tech courses."
      }
    ]
  }
});
writeStaticHtml('syllabus', syllabusHtml);

// ─────────────────────────────────────────────────────────────
// 12. GENERATE UGEAC PREDICTOR PAGE (/ugeac-predictor)
// ─────────────────────────────────────────────────────────────
const ugeacBody = `
<div class="min-h-screen bg-slate-50 font-['Inter'] flex flex-col justify-between">
  \${navHeaderHtml}

  <main class="flex-grow max-w-6xl mx-auto px-4 sm:px-6 py-12">
    <!-- Breadcrumb -->
    <div class="mb-6 text-xs text-slate-500 flex items-center gap-2">
      <a href="/" class="hover:text-blue-600">Home</a>
      <span>/</span>
      <span class="text-slate-800 font-semibold">UGEAC College Predictor</span>
    </div>

    <div class="text-center max-w-3xl mx-auto mb-12">
      <span class="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-black uppercase tracking-widest rounded-full inline-block mb-3">Admission Intelligence 2026</span>
      <h1 class="text-3xl sm:text-5xl font-[1000] text-slate-900 tracking-tight uppercase mb-4">BCECEB UGEAC College Predictor & Cutoff Guide</h1>
      <p class="text-slate-600 text-sm md:text-base leading-relaxed">
        Forecast your admission chances into 10,000+ B.Tech seats across all 38 Government Engineering Colleges in Bihar based on your NTA JEE Main percentile and official state category ranks.
      </p>
    </div>

    <!-- Predictor Feature Highlights -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      <div class="bg-white p-6 border border-slate-200 rounded-3xl shadow-sm">
        <div class="w-10 h-10 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center font-bold mb-3">🎯</div>
        <h3 class="font-bold text-slate-900 text-sm uppercase mb-1">JEE Main Rank Mapping</h3>
        <p class="text-xs text-slate-500 leading-relaxed">Translates your NTA All India Rank (AIR) into estimated BCECEB UGEAC State Merit Ranks (UR & Category).</p>
      </div>
      <div class="bg-white p-6 border border-slate-200 rounded-3xl shadow-sm">
        <div class="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-3">🏛️</div>
        <h3 class="font-bold text-slate-900 text-sm uppercase mb-1">38 Government GECs</h3>
        <p class="text-xs text-slate-500 leading-relaxed">Covers legacy institutes like MIT Muzaffarpur & BCE Bhagalpur alongside newly established district engineering colleges.</p>
      </div>
      <div class="bg-white p-6 border border-slate-200 rounded-3xl shadow-sm">
        <div class="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center font-bold mb-3">⚖️</div>
        <h3 class="font-bold text-slate-900 text-sm uppercase mb-1">State Reservation Matrix</h3>
        <p class="text-xs text-slate-500 leading-relaxed">Calculates category-specific closing ranks across UR, EWS, BC, EBC, SC, ST, RCG, and DQ reservation quotas.</p>
      </div>
    </div>

    <!-- Complete Counselling Guide & Cutoff Breakdown -->
    <div class="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm space-y-8 prose prose-slate max-w-none text-slate-800 mb-12">
      <h2 class="text-2xl font-black text-slate-900 uppercase">Understanding the BCECEB UGEAC Counselling Lifecycle</h2>
      <p class="text-sm leading-relaxed">
        The <strong>Undergraduate Engineering Admission Counselling (UGEAC)</strong> is conducted annually by the Bihar Combined Entrance Competitive Examination Board (BCECEB). Admission into all 38 Government Engineering Colleges (GECs) under Bihar Engineering University is determined exclusively by merit in the National Testing Agency's (NTA) JEE Main exam.
      </p>

      <h3 class="text-xl font-bold text-slate-900">Bihar State Reservation Quota Distribution</h3>
      <div class="overflow-x-auto not-prose my-6">
        <table class="w-full text-left border-collapse text-xs md:text-sm">
          <thead>
            <tr class="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
              <th class="p-3">Category Code</th>
              <th class="p-3">Category Name</th>
              <th class="p-3">State Quota %</th>
              <th class="p-3">Eligible Candidates</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100">
            <tr><td class="p-3 font-bold text-blue-600">UR</td><td class="p-3">Unreserved (Open Merit)</td><td class="p-3 font-bold">40%</td><td class="p-3">All Bihar domicile applicants regardless of caste or background</td></tr>
            <tr class="bg-slate-50/50"><td class="p-3 font-bold text-emerald-600">EWS</td><td class="p-3">Economically Weaker Section</td><td class="p-3 font-bold">10%</td><td class="p-3">General category candidates satisfying state income & asset criteria</td></tr>
            <tr><td class="p-3 font-bold text-purple-600">BC</td><td class="p-3">Backward Class (OBC-II)</td><td class="p-3 font-bold">12%</td><td class="p-3">Non-Creamy Layer (NCL) certificate holders of recognized BC castes</td></tr>
            <tr class="bg-slate-50/50"><td class="p-3 font-bold text-amber-600">EBC</td><td class="p-3">Extremely Backward Class (OBC-I)</td><td class="p-3 font-bold">18%</td><td class="p-3">Non-Creamy Layer (NCL) certificate holders of recognized EBC castes</td></tr>
            <tr><td class="p-3 font-bold text-rose-600">SC</td><td class="p-3">Scheduled Caste</td><td class="p-3 font-bold">16%</td><td class="p-3">Permanent Bihar residents from notified Scheduled Castes</td></tr>
            <tr class="bg-slate-50/50"><td class="p-3 font-bold text-teal-600">ST</td><td class="p-3">Scheduled Tribe</td><td class="p-3 font-bold">1%</td><td class="p-3">Permanent Bihar residents from notified Scheduled Tribes</td></tr>
            <tr><td class="p-3 font-bold text-indigo-600">RCG</td><td class="p-3">Reserved Category Girls</td><td class="p-3 font-bold">3%</td><td class="p-3">Horizontal reservation for female candidates of reserved categories</td></tr>
          </tbody>
        </table>
      </div>

      <h3 class="text-xl font-bold text-slate-900">Estimated JEE Main Cutoff Percentiles for Top Colleges</h3>
      <div class="overflow-x-auto not-prose my-6">
        <table class="w-full text-left border-collapse text-xs md:text-sm">
          <thead>
            <tr class="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
              <th class="p-3">College Name</th>
              <th class="p-3">Flagship Branches</th>
              <th class="p-3">UR Percentile Range</th>
              <th class="p-3">Category Percentile Range</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100">
            <tr><td class="p-3 font-bold text-slate-900">MIT Muzaffarpur</td><td class="p-3">IT, Civil, Mech, EE, ECE</td><td class="p-3 font-semibold text-blue-600">82.0 - 91.5</td><td class="p-3">70.0 - 80.0</td></tr>
            <tr class="bg-slate-50/50"><td class="p-3 font-bold text-slate-900">BCE Bhagalpur</td><td class="p-3">CSE, Civil, Mech, EE, ECE</td><td class="p-3 font-semibold text-blue-600">80.0 - 89.0</td><td class="p-3">68.0 - 78.5</td></tr>
            <tr><td class="p-3 font-bold text-slate-900">GCE Gaya</td><td class="p-3">CSE, Civil, Mech, EEE</td><td class="p-3 font-semibold text-blue-600">75.0 - 84.0</td><td class="p-3">62.0 - 74.0</td></tr>
            <tr class="bg-slate-50/50"><td class="p-3 font-bold text-slate-900">DCE Darbhanga</td><td class="p-3">CSE, Civil, Mech, EEE</td><td class="p-3 font-semibold text-blue-600">72.0 - 81.0</td><td class="p-3">58.0 - 70.0</td></tr>
            <tr><td class="p-3 font-bold text-slate-900">BCE Bakhtiyarpur (Patna)</td><td class="p-3">CSE, Civil, Mech, EE</td><td class="p-3 font-semibold text-blue-600">74.0 - 83.5</td><td class="p-3">60.0 - 72.5</td></tr>
            <tr class="bg-slate-50/50"><td class="p-3 font-bold text-slate-900">NCE Chandi (Nalanda)</td><td class="p-3">CSE, Aeronautical, Civil, Mech</td><td class="p-3 font-semibold text-blue-600">67.0 - 77.0</td><td class="p-3">52.0 - 65.0</td></tr>
            <tr><td class="p-3 font-bold text-slate-900">LNJPIT Chapra</td><td class="p-3">CSE, Civil, Mech, EEE</td><td class="p-3 font-semibold text-blue-600">68.0 - 78.0</td><td class="p-3">54.0 - 66.0</td></tr>
            <tr class="bg-slate-50/50"><td class="p-3 font-bold text-slate-900">Other District GECs</td><td class="p-3">Core & Tech Branches</td><td class="p-3 font-semibold text-blue-600">45.0 - 65.0</td><td class="p-3">30.0 - 52.0</td></tr>
          </tbody>
        </table>
      </div>

      <div class="p-6 bg-slate-50 border border-slate-200 rounded-2xl not-prose my-6 space-y-3 text-xs md:text-sm text-slate-800">
        <h4 class="font-black text-slate-900 uppercase tracking-wider text-sm">Mandatory Document Verification Checklist</h4>
        <p class="leading-relaxed">Keep 3 sets of self-attested photocopies ready for Nodal Center physical reporting:</p>
        <ul class="list-disc pl-5 space-y-1 text-slate-600">
          <li>NTA JEE Main Admit Card & Official Scorecard</li>
          <li>BCECEB UGEAC Rank Card & Seat Allotment Letter</li>
          <li>Class 10th Marksheet & Passing Certificate (DOB proof)</li>
          <li>Class 12th (10+2) Marksheet & Passing Certificate</li>
          <li>Permanent Residential / Domicile Certificate of Bihar (CO/SDO/DM level)</li>
          <li>Caste / Non-Creamy Layer Certificate (for BC, EBC, SC, ST) or EWS Asset Certificate</li>
          <li>College/School Leaving Certificate (CLC/TC) & Character Certificate</li>
          <li>6 Passport Size Photographs matching JEE Main admit card</li>
        </ul>
      </div>

      <div class="pt-4 flex flex-wrap gap-4 not-prose">
        <a href="/colleges" class="px-5 py-3 bg-blue-600 text-white rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-blue-700 transition-colors shadow-sm">Explore All 38 Colleges</a>
        <a href="/blog/complete-guide-to-ugeac-counselling-process" class="px-5 py-3 bg-slate-100 text-slate-800 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-slate-200 transition-colors">Read UGEAC Full Counselling Guide</a>
      </div>
    </div>
  </main>

  \${footerHtml}
</div>
`;

let ugeacHtml = injectIntoRoot(baseTemplate, ugeacBody);
ugeacHtml = injectHeadMetadata(ugeacHtml, {
  title: 'UGEAC College Predictor 2026 | Bihar Engineering Counselling Tool',
  description: 'Free UGEAC 2026 College Predictor based on JEE Main percentile & category cutoffs. Check admission chances across MIT Muzaffarpur, BCE Bhagalpur, GCE Gaya, and all 38 GECs.',
  canonical: 'https://www.apnacollegebihar.online/ugeac-predictor',
  schemaJson: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.apnacollegebihar.online/" },
          { "@type": "ListItem", "position": 2, "name": "UGEAC Predictor", "item": "https://www.apnacollegebihar.online/ugeac-predictor" }
        ]
      },
      {
        "@type": "WebApplication",
        "@id": "https://www.apnacollegebihar.online/ugeac-predictor",
        "url": "https://www.apnacollegebihar.online/ugeac-predictor",
        "name": "UGEAC College Predictor 2026",
        "applicationCategory": "EducationalApplication"
      }
    ]
  }
});
writeStaticHtml('ugeac-predictor', ugeacHtml);

// ─────────────────────────────────────────────────────────────
// 13. GENERATE CGPA CALCULATOR PAGE (/cgpa)
// ─────────────────────────────────────────────────────────────
const cgpaBody = `
<div class="min-h-screen bg-slate-50 font-['Inter'] flex flex-col justify-between">
  \${navHeaderHtml}

  <main class="flex-grow max-w-6xl mx-auto px-4 sm:px-6 py-12">
    <!-- Breadcrumb -->
    <div class="mb-6 text-xs text-slate-500 flex items-center gap-2">
      <a href="/" class="hover:text-blue-600">Home</a>
      <span>/</span>
      <span class="text-slate-800 font-semibold">BEU CGPA Calculator</span>
    </div>

    <div class="text-center max-w-3xl mx-auto mb-12">
      <span class="px-3 py-1 bg-rose-100 text-rose-700 text-xs font-black uppercase tracking-widest rounded-full inline-block mb-3">Academic Utility 2026</span>
      <h1 class="text-3xl sm:text-5xl font-[1000] text-slate-900 tracking-tight uppercase mb-4">Official BEU CGPA & SGPA Calculator</h1>
      <p class="text-slate-600 text-sm md:text-base leading-relaxed">
        Calculate your semester SGPA and cumulative CGPA strictly according to official Bihar Engineering University (BEU Patna) credit-weighting algorithms and AICTE percentage conversion formulas.
      </p>
    </div>

    <!-- Official Mathematical Formula Box -->
    <div class="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm space-y-8 prose prose-slate max-w-none text-slate-800 mb-12">
      <h2 class="text-2xl font-black text-slate-900 uppercase">Official University SGPA & CGPA Calculation Formulas</h2>
      <p class="text-sm leading-relaxed">
        Bihar Engineering University uses a credit-weighted grade point average system. Your semester standing (SGPA) and degree standing (CGPA) are computed strictly using the following mathematical formulations:
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose my-6 text-xs md:text-sm">
        <div class="p-6 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
          <span class="px-2.5 py-0.5 bg-blue-100 text-blue-700 text-[10px] font-black uppercase rounded-md">Semester Formula</span>
          <h3 class="font-bold text-slate-900 text-base">SGPA (Semester Grade Point Average)</h3>
          <p class="font-mono text-sm font-bold text-blue-600 bg-white p-3 rounded-xl border border-slate-200">
            SGPA = &Sigma;(Ci &times; Gi) / &Sigma;(Ci)
          </p>
          <p class="text-slate-600 text-xs leading-relaxed">
            Where <code>Ci</code> is the credit of course <code>i</code> and <code>Gi</code> is the grade point earned in that course.
          </p>
        </div>

        <div class="p-6 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
          <span class="px-2.5 py-0.5 bg-rose-100 text-rose-700 text-[10px] font-black uppercase rounded-md">Cumulative Formula</span>
          <h3 class="font-bold text-slate-900 text-base">CGPA (Cumulative Grade Point Average)</h3>
          <p class="font-mono text-sm font-bold text-rose-600 bg-white p-3 rounded-xl border border-slate-200">
            CGPA = &Sigma;(Sj &times; Cj) / &Sigma;(Cj)
          </p>
          <p class="text-slate-600 text-xs leading-relaxed">
            Where <code>Sj</code> is the SGPA of semester <code>j</code> and <code>Cj</code> is the total credits registered in semester <code>j</code>.
          </p>
        </div>
      </div>

      <h3 class="text-xl font-bold text-slate-900">Official BEU CGPA to Percentage Conversion</h3>
      <p class="text-sm leading-relaxed">
        Under official Bihar Engineering University and AICTE notifications, to convert your Cumulative Grade Point Average into an equivalent marks percentage:
      </p>

      <div class="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl not-prose my-4">
        <p class="font-mono text-base font-black text-emerald-800 text-center">
          Equivalent Percentage (%) = (CGPA - 0.75) &times; 10
        </p>
        <p class="text-center text-xs text-emerald-700 mt-2 font-medium">
          Example: If your CGPA is 8.50 &rarr; Percentage = (8.50 - 0.75) &times; 10 = 7.75 &times; 10 = <strong>77.50%</strong>
        </p>
      </div>

      <h3 class="text-xl font-bold text-slate-900">Step-by-Step Sample SGPA Calculation</h3>
      <div class="overflow-x-auto not-prose my-6">
        <table class="w-full text-left border-collapse text-xs md:text-sm">
          <thead>
            <tr class="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
              <th class="p-3">Course Title</th>
              <th class="p-3">Course Credit (Ci)</th>
              <th class="p-3">Grade Awarded</th>
              <th class="p-3">Grade Point (Gi)</th>
              <th class="p-3">Credit Points (Ci &times; Gi)</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100">
            <tr><td class="p-3 font-semibold">Data Structures & Algorithms</td><td class="p-3">4.0</td><td class="p-3 font-bold text-blue-600">A+</td><td class="p-3">9</td><td class="p-3 font-bold">36.0</td></tr>
            <tr class="bg-slate-50/50"><td class="p-3 font-semibold">Discrete Mathematics</td><td class="p-3">4.0</td><td class="p-3 font-bold text-emerald-600">A</td><td class="p-3">8</td><td class="p-3 font-bold">32.0</td></tr>
            <tr><td class="p-3 font-semibold">OOP in Java</td><td class="p-3">3.0</td><td class="p-3 font-bold text-purple-600">O</td><td class="p-3">10</td><td class="p-3 font-bold">30.0</td></tr>
            <tr class="bg-slate-50/50"><td class="p-3 font-semibold">Digital Electronics</td><td class="p-3">3.0</td><td class="p-3 font-bold text-amber-600">B+</td><td class="p-3">7</td><td class="p-3 font-bold">21.0</td></tr>
            <tr><td class="p-3 font-semibold">Data Structures Lab</td><td class="p-3">1.5</td><td class="p-3 font-bold text-purple-600">O</td><td class="p-3">10</td><td class="p-3 font-bold">15.0</td></tr>
            <tr class="bg-slate-50/50"><td class="p-3 font-semibold">Digital Electronics Lab</td><td class="p-3">1.5</td><td class="p-3 font-bold text-blue-600">A+</td><td class="p-3">9</td><td class="p-3 font-bold">13.5</td></tr>
            <tr class="bg-blue-50 font-bold text-slate-900"><td class="p-3">Total Sum</td><td class="p-3">&Sigma;Ci = 17.0</td><td class="p-3">-</td><td class="p-3">-</td><td class="p-3">&Sigma;(Ci&times;Gi) = 147.5</td></tr>
          </tbody>
        </table>
      </div>
      <p class="text-xs text-slate-600 italic">
        Resulting SGPA = 147.5 / 17.0 = <strong>8.68</strong>. Equivalent Percentage = (8.68 - 0.75) &times; 10 = <strong>79.3%</strong>.
      </p>

      <div class="pt-4 flex flex-wrap gap-4 not-prose">
        <a href="/notes" class="px-5 py-3 bg-blue-600 text-white rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-blue-700 transition-colors shadow-sm">Explore BEU Notes</a>
        <a href="/pyq" class="px-5 py-3 bg-slate-100 text-slate-800 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-slate-200 transition-colors">Download PYQs</a>
      </div>
    </div>
  </main>

  \${footerHtml}
</div>
`;

let cgpaHtml = injectIntoRoot(baseTemplate, cgpaBody);
cgpaHtml = injectHeadMetadata(cgpaHtml, {
  title: 'BEU CGPA & SGPA Calculator | Bihar Engineering University Grade Converter',
  description: 'Official BEU CGPA & SGPA Calculator. Accurately calculate semester grade points and percentage following Bihar Engineering University evaluation formulas.',
  canonical: 'https://www.apnacollegebihar.online/cgpa',
  schemaJson: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.apnacollegebihar.online/" },
          { "@type": "ListItem", "position": 2, "name": "BEU CGPA Calculator", "item": "https://www.apnacollegebihar.online/cgpa" }
        ]
      },
      {
        "@type": "WebApplication",
        "@id": "https://www.apnacollegebihar.online/cgpa",
        "url": "https://www.apnacollegebihar.online/cgpa",
        "name": "BEU CGPA & SGPA Calculator",
        "applicationCategory": "EducationalApplication"
      }
    ]
  }
});
writeStaticHtml('cgpa', cgpaHtml);

// ─────────────────────────────────────────────────────────────
// 14. GENERATE ATTENDANCE TRACKER PAGE (/attendance)
// ─────────────────────────────────────────────────────────────
const attendanceBody = `
<div class="min-h-screen bg-slate-50 font-['Inter'] flex flex-col justify-between">
  \${navHeaderHtml}

  <main class="flex-grow max-w-6xl mx-auto px-4 sm:px-6 py-12">
    <!-- Breadcrumb -->
    <div class="mb-6 text-xs text-slate-500 flex items-center gap-2">
      <a href="/" class="hover:text-blue-600">Home</a>
      <span>/</span>
      <span class="text-slate-800 font-semibold">Attendance Tracker</span>
    </div>

    <div class="text-center max-w-3xl mx-auto mb-12">
      <span class="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-black uppercase tracking-widest rounded-full inline-block mb-3">Academic Compliance</span>
      <h1 class="text-3xl sm:text-5xl font-[1000] text-slate-900 tracking-tight uppercase mb-4">BEU Attendance Tracker & 75% Rule Guide</h1>
      <p class="text-slate-600 text-sm md:text-base leading-relaxed">
        Understand Bihar Engineering University's mandatory 75% attendance ordinance. Calculate your branch attendance, estimate classes required to clear exam eligibility, and learn medical condonation procedures.
      </p>
    </div>

    <!-- Attendance Rules & Guidance Box -->
    <div class="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm space-y-8 prose prose-slate max-w-none text-slate-800 mb-12">
      <h2 class="text-2xl font-black text-slate-900 uppercase">The BEU 75% Mandatory Attendance Regulation</h2>
      <p class="text-sm leading-relaxed">
        As codified in the academic ordinances of Bihar Engineering University (BEU Patna), every registered undergraduate engineering candidate is strictly required to attend a minimum of <strong>75% of the total theory lectures, tutorials, and practical laboratory sessions</strong> held in each course during the semester.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 not-prose my-6 text-xs md:text-sm">
        <div class="p-6 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
          <span class="px-2.5 py-0.5 bg-emerald-100 text-emerald-700 text-[10px] font-bold uppercase rounded-md">General Threshold</span>
          <h3 class="font-bold text-slate-900 text-base">75% Standard</h3>
          <p class="text-slate-600 leading-relaxed">Full eligibility for university end-semester examination admit cards without penalty or special permissions.</p>
        </div>
        <div class="p-6 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
          <span class="px-2.5 py-0.5 bg-amber-100 text-amber-700 text-[10px] font-bold uppercase rounded-md">Medical Condonation</span>
          <h3 class="font-bold text-slate-900 text-base">65% to 74%</h3>
          <p class="text-slate-600 leading-relaxed">Permitted only upon submission of authorized medical certificates signed by competent medical officers and approved by the Principal.</p>
        </div>
        <div class="p-6 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
          <span class="px-2.5 py-0.5 bg-rose-100 text-rose-700 text-[10px] font-bold uppercase rounded-md">Debarment Risk</span>
          <h3 class="font-bold text-slate-900 text-base">Below 65%</h3>
          <p class="text-slate-600 leading-relaxed">Strict debarment from university examinations. Candidate is awarded an 'F' grade and must re-register or take carry-over exams.</p>
        </div>
      </div>

      <h3 class="text-xl font-bold text-slate-900">How to Calculate Required Classes to Reach 75%</h3>
      <p class="text-sm leading-relaxed">
        If your current attendance percentage has fallen below 75%, use the following standard formula to calculate the exact number of consecutive upcoming classes you must attend:
      </p>
      <div class="p-6 bg-slate-50 border border-slate-200 rounded-2xl not-prose my-4 font-mono text-xs md:text-sm text-slate-800">
        <p class="font-bold text-blue-600 mb-2">Required Classes = &lceil;(3 &times; Total Classes Held - 4 &times; Classes Attended)&rceil;</p>
        <p class="text-slate-600 text-xs">Example: If 60 classes have been held and you attended 35 &rarr; (3 &times; 60 - 4 &times; 35) = 180 - 140 = <strong>40 more classes</strong> must be attended consecutively.</p>
      </div>

      <h3 class="text-xl font-bold text-slate-900">Medical Condonation Procedure</h3>
      <p class="text-sm leading-relaxed">
        If genuine illness or hospitalization caused an attendance shortfall below 75%:
      </p>
      <ol class="list-decimal pl-5 space-y-1 text-slate-600 text-sm">
        <li>Submit a formal medical leave application to your Head of Department (HOD) within 7 days of returning to campus.</li>
        <li>Attach prescription slips, discharge summary, and fitness certificate issued by a registered government medical officer.</li>
        <li>The college academic council reviews applications and may grant a relaxation of up to 10% (bringing the effective threshold down to 65%).</li>
      </ol>

      <div class="pt-4 flex flex-wrap gap-4 not-prose">
        <a href="/notes" class="px-5 py-3 bg-blue-600 text-white rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-blue-700 transition-colors shadow-sm">Browse Semester Notes</a>
        <a href="/timetable" class="px-5 py-3 bg-slate-100 text-slate-800 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-slate-200 transition-colors">Check Class Timetable</a>
      </div>
    </div>
  </main>

  \${footerHtml}
</div>
`;
let attendanceHtml = injectIntoRoot(baseTemplate, attendanceBody);
attendanceHtml = injectHeadMetadata(attendanceHtml, {
  title: 'BEU Attendance Calculator & 75% Rule Tracker | Apna College Bihar',
  description: 'Calculate your attendance percentage for Bihar Engineering University (BEU). Check 75% mandatory attendance shortfall, classes required, and semester compliance.',
  canonical: 'https://www.apnacollegebihar.online/attendance'
});
writeStaticHtml('attendance', attendanceHtml);

// ─────────────────────────────────────────────────────────────
// 15. GENERATE CLASS TIMETABLE PAGE (/timetable)
// ─────────────────────────────────────────────────────────────
const timetableBody = `
<div class="min-h-screen bg-slate-50 font-['Inter'] flex flex-col justify-between">
  ${navHeaderHtml}

  <main class="flex-grow max-w-5xl mx-auto px-4 sm:px-6 py-12">
    <!-- Breadcrumb -->
    <nav class="mb-6 text-xs text-slate-500 flex items-center gap-2">
      <a href="/" class="hover:text-blue-600">Home</a>
      <span>/</span>
      <span class="text-slate-800 font-semibold">Timetable & Academic Routine</span>
    </nav>

    <div class="text-center max-w-3xl mx-auto mb-12">
      <span class="px-3.5 py-1 bg-violet-100 text-violet-800 text-xs font-black uppercase tracking-widest rounded-full inline-block mb-3">Academic Routine Guide</span>
      <h1 class="text-3xl sm:text-5xl font-[1000] text-slate-900 tracking-tight uppercase mb-4">BEU Class Timetable, Lab Schedule & Routine Guide</h1>
      <p class="text-slate-600 text-sm md:text-base leading-relaxed">
        Comprehensive academic routine guidelines, laboratory batch divisions, period scheduling, and weekly class timetables across Bihar Engineering University (BEU) colleges.
      </p>
    </div>

    <div class="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm space-y-10 prose prose-slate max-w-none text-slate-700 text-xs md:text-sm">
      <section>
        <h2 class="text-xl font-black text-slate-900 uppercase tracking-tight mb-4">Bihar Engineering University Academic Schedule Framework</h2>
        <p class="leading-relaxed">
          In all 38 Government Engineering Colleges (GECs) affiliated with Bihar Engineering University (BEU Patna), academic operations follow a standardized Choice Based Credit System (CBCS) instructional schedule. A standard semester spans 90 effective instructional days (approximately 15 to 16 working weeks), structured to deliver 450 to 500 contact hours across theory lectures, tutorial problem-solving sessions, and practical laboratory coursework.
        </p>
        <p class="leading-relaxed mt-3">
          Daily academic operations generally run from <strong>10:00 AM to 5:00 PM</strong>, Monday through Saturday. Each instructional period is 50 to 60 minutes in duration, with a mandatory 40-minute lunch break scheduled between 1:00 PM and 1:40 PM. Adherence to this routine is essential for maintaining the mandatory 75% attendance threshold enforced by the university under Academic Ordinance Regulation 6.1.
        </p>
      </section>

      <section>
        <h3 class="text-lg font-black text-slate-900 uppercase tracking-tight mb-3">Standard BEU Weekly Class Schedule Matrix</h3>
        <p class="leading-relaxed mb-4">
          Below is the typical weekly instructional routine model adopted by BEU engineering departments for core B.Tech semesters:
        </p>
        <div class="overflow-x-auto not-prose my-6">
          <table class="w-full text-left text-xs border border-slate-200 rounded-2xl overflow-hidden">
            <thead class="bg-slate-100 text-slate-900 font-black uppercase text-[11px] border-b border-slate-200">
              <tr>
                <th class="p-3 border-r border-slate-200">Day</th>
                <th class="p-3 border-r border-slate-200">Period 1<br><span class="text-[10px] text-slate-500 font-normal">10:00 - 10:50 AM</span></th>
                <th class="p-3 border-r border-slate-200">Period 2<br><span class="text-[10px] text-slate-500 font-normal">10:50 - 11:40 AM</span></th>
                <th class="p-3 border-r border-slate-200">Period 3<br><span class="text-[10px] text-slate-500 font-normal">11:40 - 12:30 PM</span></th>
                <th class="p-3 border-r border-slate-200">Period 4<br><span class="text-[10px] text-slate-500 font-normal">12:30 - 01:20 PM</span></th>
                <th class="p-3 border-r border-slate-200 text-center bg-slate-200">Lunch Break<br><span class="text-[10px] text-slate-500 font-normal">01:20 - 02:00 PM</span></th>
                <th class="p-3">Periods 5 & 6 (Lab / Workshop)<br><span class="text-[10px] text-slate-500 font-normal">02:00 - 05:00 PM</span></th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100 text-slate-700">
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-bold border-r border-slate-200 bg-slate-50">Monday</td>
                <td class="p-3 border-r border-slate-200">Engineering Math</td>
                <td class="p-3 border-r border-slate-200">Data Structures / Mechanics</td>
                <td class="p-3 border-r border-slate-200">Basic Electrical / Electronics</td>
                <td class="p-3 border-r border-slate-200">Technical Communication</td>
                <td class="p-3 text-center bg-slate-100 text-slate-400 font-bold border-r border-slate-200">BREAK</td>
                <td class="p-3 font-semibold text-blue-700">Group A: Programming Lab / Group B: Physics Lab</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-bold border-r border-slate-200 bg-slate-50">Tuesday</td>
                <td class="p-3 border-r border-slate-200">Data Structures / Mechanics</td>
                <td class="p-3 border-r border-slate-200">Engineering Math</td>
                <td class="p-3 border-r border-slate-200">Environmental Science</td>
                <td class="p-3 border-r border-slate-200">Basic Electrical</td>
                <td class="p-3 text-center bg-slate-100 text-slate-400 font-bold border-r border-slate-200">BREAK</td>
                <td class="p-3 font-semibold text-blue-700">Group A: Basic Electrical Lab / Group B: Programming Lab</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-bold border-r border-slate-200 bg-slate-50">Wednesday</td>
                <td class="p-3 border-r border-slate-200">Object Oriented Programming</td>
                <td class="p-3 border-r border-slate-200">Digital Electronics</td>
                <td class="p-3 border-r border-slate-200">Engineering Math (Tutorial)</td>
                <td class="p-3 border-r border-slate-200">Library / Seminar</td>
                <td class="p-3 text-center bg-slate-100 text-slate-400 font-bold border-r border-slate-200">BREAK</td>
                <td class="p-3 font-semibold text-blue-700">Group A: Workshop Practice / Group B: Electrical Lab</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-bold border-r border-slate-200 bg-slate-50">Thursday</td>
                <td class="p-3 border-r border-slate-200">Digital Electronics</td>
                <td class="p-3 border-r border-slate-200">Data Structures / Mechanics</td>
                <td class="p-3 border-r border-slate-200">Engineering Math</td>
                <td class="p-3 border-r border-slate-200">Professional Ethics</td>
                <td class="p-3 text-center bg-slate-100 text-slate-400 font-bold border-r border-slate-200">BREAK</td>
                <td class="p-3 font-semibold text-blue-700">Group A: Engineering Graphics CAD Lab (Batch 1 & 2)</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-bold border-r border-slate-200 bg-slate-50">Friday</td>
                <td class="p-3 border-r border-slate-200">Core Engineering Subject</td>
                <td class="p-3 border-r border-slate-200">Digital Electronics (Tutorial)</td>
                <td class="p-3 border-r border-slate-200">Technical Communication Lab</td>
                <td class="p-3 border-r border-slate-200">Mentorship Hour</td>
                <td class="p-3 text-center bg-slate-100 text-slate-400 font-bold border-r border-slate-200">BREAK</td>
                <td class="p-3 font-semibold text-blue-700">Project / Innovation Lab / Coding Club Activity</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-bold border-r border-slate-200 bg-slate-50">Saturday</td>
                <td class="p-3 border-r border-slate-200">Remedial Classes</td>
                <td class="p-3 border-r border-slate-200">GATE / Aptitude Class</td>
                <td class="p-3 border-r border-slate-200">Sports / Extracurricular</td>
                <td class="p-3 border-r border-slate-200">NSS / Technical Society</td>
                <td class="p-3 text-center bg-slate-100 text-slate-400 font-bold border-r border-slate-200">BREAK</td>
                <td class="p-3 font-semibold text-slate-600">Self Study / Library Reference Hour</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h3 class="text-lg font-black text-slate-900 uppercase tracking-tight mb-3">Laboratory Batch System & Practical Continuous Assessment</h3>
        <p class="leading-relaxed">
          Because engineering laboratories require hands-on apparatus handling, each classroom section of 60 students is split into two manageable cohorts: <strong>Batch A (Roll 01–30)</strong> and <strong>Batch B (Roll 31–60)</strong>. Practical courses carry 2 to 3 credits and are evaluated out of 100 or 50 marks per subject:
        </p>
        <ul class="list-disc pl-5 space-y-2 mt-3 font-medium">
          <li><strong>Continuous Day-to-Day Evaluation (30% internal):</strong> Marks awarded weekly based on timely experiment conduction, neatness of observation table, error calculation, and viva-voce questioning by the lab faculty.</li>
          <li><strong>Lab Record Book Submission:</strong> Must be signed by the instructor in the immediate following practical session. Unsigned lab records disqualify candidates from external end-semester practical examinations.</li>
          <li><strong>External Practical Examination (70%):</strong> Conducted in presence of an external university examiner appointed by BEU, consisting of experiment performance, written quiz, and oral viva.</li>
        </ul>
      </section>

      <section>
        <h3 class="text-lg font-black text-slate-900 uppercase tracking-tight mb-3">Mid-Semester Exam Scheduling & Academic Calendar Milestones</h3>
        <p class="leading-relaxed">
          Every semester at BEU follows a strict academic calendar published by the Controller of Examinations:
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 not-prose my-4">
          <div class="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
            <h4 class="font-bold text-slate-900 text-xs uppercase mb-1">📅 Weeks 1 - 7: Phase 1</h4>
            <p class="text-[11px] text-slate-600 leading-relaxed">Completion of Units 1 and 2 of syllabus. First attendance review published on notice boards.</p>
          </div>
          <div class="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
            <h4 class="font-bold text-slate-900 text-xs uppercase mb-1">📝 Week 8 - 9: Mid-Term</h4>
            <p class="text-[11px] text-slate-600 leading-relaxed">Centralized Mid-Semester Examination (20 marks per subject). Mandatory for internal evaluation.</p>
          </div>
          <div class="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
            <h4 class="font-bold text-slate-900 text-xs uppercase mb-1">🏁 Weeks 10 - 16: Phase 2</h4>
            <p class="text-[11px] text-slate-600 leading-relaxed">Completion of Units 3, 4, and 5. Final attendance shortfall audit and admit card generation.</p>
          </div>
        </div>
      </section>

      <div class="pt-6 border-t border-slate-100 flex flex-wrap gap-4 not-prose">
        <a href="/attendance" class="px-5 py-3 bg-violet-600 text-white rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-violet-700 transition-colors shadow-sm">Check Attendance Shortfall</a>
        <a href="/notes" class="px-5 py-3 bg-blue-600 text-white rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-blue-700 transition-colors shadow-sm">Download Semester Notes</a>
        <a href="/syllabus" class="px-5 py-3 bg-slate-100 text-slate-800 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-slate-200 transition-colors">View BEU Syllabus</a>
      </div>
    </div>
  </main>

  ${footerHtml}
</div>
`;
let timetableHtml = injectIntoRoot(baseTemplate, timetableBody);
timetableHtml = injectHeadMetadata(timetableHtml, {
  title: 'BEU Timetable & Class Schedule Guide 2026 | Apna College Bihar',
  description: 'Complete academic routine guide for Bihar Engineering University (BEU Patna). Weekly timetable matrix, lab batches, mid-term dates, and period schedules for B.Tech.',
  canonical: 'https://www.apnacollegebihar.online/timetable'
});
writeStaticHtml('timetable', timetableHtml);

// ─────────────────────────────────────────────────────────────
// 16. GENERATE BEU RESULT PORTAL PAGE (/beu-result)
// ─────────────────────────────────────────────────────────────
const beuResultBody = `
<div class="min-h-screen bg-slate-50 font-['Inter'] flex flex-col justify-between">
  ${navHeaderHtml}

  <main class="flex-grow max-w-5xl mx-auto px-4 sm:px-6 py-12">
    <!-- Breadcrumb -->
    <nav class="mb-6 text-xs text-slate-500 flex items-center gap-2">
      <a href="/" class="hover:text-blue-600">Home</a>
      <span>/</span>
      <span class="text-slate-800 font-semibold">BEU Results & Marksheet Evaluation</span>
    </nav>

    <div class="text-center max-w-3xl mx-auto mb-12">
      <span class="px-3.5 py-1 bg-amber-100 text-amber-800 text-xs font-black uppercase tracking-widest rounded-full inline-block mb-3">University Results Guide</span>
      <h1 class="text-3xl sm:text-5xl font-[1000] text-slate-900 tracking-tight uppercase mb-4">BEU Exam Results, Marksheet Codes & Scrutiny Guide</h1>
      <p class="text-slate-600 text-sm md:text-base leading-relaxed">
        Comprehensive guide to Bihar Engineering University (BEU Patna) B.Tech semester examination results, grade points, marksheet codes, backlog clearance, and scrutiny re-evaluation.
      </p>
    </div>

    <div class="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm space-y-10 prose prose-slate max-w-none text-slate-700 text-xs md:text-sm">
      <section>
        <h2 class="text-xl font-black text-slate-900 uppercase tracking-tight mb-4">BEU Examination Evaluation & Result Publishing Lifecycle</h2>
        <p class="leading-relaxed">
          Bihar Engineering University (BEU Patna), established under Bihar Act 20 of 2021, governs end-semester examinations across all 38 Government Engineering Colleges in the state. At the conclusion of each odd (1st, 3rd, 5th, 7th) and even (2nd, 4th, 6th, 8th) semester, answer scripts from all affiliated institutions are coded with barcode concealment and evaluated centrally by approved university examiners.
        </p>
        <p class="leading-relaxed mt-3">
          Results are officially published through the BEU examination portal (<code>results.beu-bih.ac.in</code>). Each student receives a digitized semester grade card reflecting their course codes, subject credits, internal continuous evaluation scores (out of 30), external university theory examination marks (out of 70), letter grades, and Semester Grade Point Average (SGPA).
        </p>
      </section>

      <section>
        <h3 class="text-lg font-black text-slate-900 uppercase tracking-tight mb-3">Decoding BEU Marksheet Result Status Codes</h3>
        <p class="leading-relaxed mb-4">
          When examining your digitized marksheet or tabulator sheet (TR), the following official abbreviations indicate academic standing:
        </p>
        <div class="overflow-x-auto not-prose my-6">
          <table class="w-full text-left text-xs border border-slate-200 rounded-2xl overflow-hidden">
            <thead class="bg-slate-100 text-slate-900 font-black uppercase text-[11px] border-b border-slate-200">
              <tr>
                <th class="p-3 border-r border-slate-200">Status Code</th>
                <th class="p-3 border-r border-slate-200">Meaning</th>
                <th class="p-3 border-r border-slate-200">Implication</th>
                <th class="p-3">Required Action</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100 text-slate-700">
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-bold text-emerald-700 border-r border-slate-200">P / PASS</td>
                <td class="p-3 border-r border-slate-200">Passed Semester</td>
                <td class="p-3 border-r border-slate-200">Cleared all theory (≥25/70) and aggregate requirements (≥40/100).</td>
                <td class="p-3 text-slate-500">Eligible for normal semester progression.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-bold text-rose-700 border-r border-slate-200">F / FAIL</td>
                <td class="p-3 border-r border-slate-200">Subject Backlog</td>
                <td class="p-3 border-r border-slate-200">Failed to secure minimum 25 marks in external or 40 marks aggregate.</td>
                <td class="p-3 text-slate-700 font-semibold">Must fill carry-over examination form in subsequent corresponding semester.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-bold text-amber-700 border-r border-slate-200">AB / ABSENT</td>
                <td class="p-3 border-r border-slate-200">Absent in Exam</td>
                <td class="p-3 border-r border-slate-200">Student did not attend the scheduled end-semester paper.</td>
                <td class="p-3 text-slate-700">Treated as Fail (F grade); re-appear in next cycle.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-bold text-purple-700 border-r border-slate-200">WH / WITHHELD</td>
                <td class="p-3 border-r border-slate-200">Result Withheld</td>
                <td class="p-3 border-r border-slate-200">Pending internal marks submission, registration discrepancy, or fee clearance.</td>
                <td class="p-3 text-slate-700 font-semibold">Contact college examination section / registrar immediately for rectification.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-bold text-red-700 border-r border-slate-200">RA / UFM</td>
                <td class="p-3 border-r border-slate-200">Reported Against / Malpractice</td>
                <td class="p-3 border-r border-slate-200">Expelled or reported for unfair means during examination hall inspection.</td>
                <td class="p-3 text-slate-700">Appear before university disciplinary committee for hearing.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-bold text-blue-700 border-r border-slate-200">I / INCOMPLETE</td>
                <td class="p-3 border-r border-slate-200">Incomplete Assessment</td>
                <td class="p-3 border-r border-slate-200">Practical viva marks or sessional grades not uploaded by department.</td>
                <td class="p-3 text-slate-500">Resolved internally by departmental examination in-charge.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h3 class="text-lg font-black text-slate-900 uppercase tracking-tight mb-3">University Promotion Policy & Vertical Mobility</h3>
        <p class="leading-relaxed">
          Under BEU academic regulations, promotion between academic years requires meeting the minimum cumulative earned credit threshold:
        </p>
        <ul class="list-disc pl-5 space-y-2 mt-3 font-medium">
          <li><strong>Promotion from 1st Year to 2nd Year:</strong> A student must have earned at least <strong>50% of total credits</strong> prescribed for Semesters 1 and 2 combined (typically at least 19–20 out of 38 credits).</li>
          <li><strong>Promotion from 2nd Year to 3rd Year:</strong> Must have cleared 100% of 1st Year courses (zero backlogs in Semester 1 & 2) AND earned at least 50% credits in Semesters 3 and 4 combined.</li>
          <li><strong>Promotion from 3rd Year to 4th Year:</strong> Must have cleared 100% of 2nd Year courses (zero backlogs in Semesters 3 & 4) AND earned at least 50% credits in Semesters 5 and 6.</li>
          <li><strong>Year Back (Detention):</strong> If a candidate fails to meet the 50% credit threshold, they are detained in the current academic year and must clear pending courses before proceeding.</li>
        </ul>
      </section>

      <section>
        <h3 class="text-lg font-black text-slate-900 uppercase tracking-tight mb-3">Scrutiny / Challenge Re-Evaluation Procedure</h3>
        <p class="leading-relaxed">
          If you believe your theory examination paper was evaluated with discrepancies, BEU provides a formal scrutiny and challenge re-evaluation mechanism:
        </p>
        <ol class="list-decimal pl-5 space-y-2 mt-3 font-medium">
          <li><strong>Application Timeline:</strong> The university opens the online scrutiny window strictly within <strong>15 days</strong> of official result publication on the BEU portal.</li>
          <li><strong>Application Fee:</strong> Scrutiny fee is typically ₹500 to ₹1,000 per theory subject, payable online via the BEU portal.</li>
          <li><strong>Scrutiny Scope:</strong> In basic scrutiny, examiners verify whether all questions were marked, verify that totaling is correct, and verify that no sub-part was left unassessed. In full challenge re-evaluation, the script is evaluated independently by a second senior examiner.</li>
          <li><strong>Revised Score:</strong> If the re-evaluated score differs by 10% or more, the revised grade is formally updated on the university database and a new grade card is issued.</li>
        </ol>
      </section>

      <section>
        <h3 class="text-lg font-black text-slate-900 uppercase tracking-tight mb-3">Official Percentage Conversion Formula</h3>
        <p class="leading-relaxed">
          To convert your Cumulative Grade Point Average (CGPA) into percentage for placement applications, civil services, or GATE qualification, BEU follows the AICTE recommended conversion formula:
        </p>
        <div class="p-5 bg-amber-50 border border-amber-200 rounded-2xl not-prose my-4 font-mono text-xs md:text-sm text-amber-950 font-bold">
          Percentage Equivalent (%) = (CGPA - 0.75) × 10
        </div>
        <p class="text-xs text-slate-500">
          Example: If your final BEU CGPA is 8.25, your percentage equivalent is (8.25 - 0.75) × 10 = 7.50 × 10 = 75.00%.
        </p>
      </section>

      <div class="pt-6 border-t border-slate-100 flex flex-wrap gap-4 not-prose">
        <a href="/cgpa" class="px-5 py-3 bg-amber-600 text-white rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-amber-700 transition-colors shadow-sm">Calculate SGPA / CGPA</a>
        <a href="/pyq" class="px-5 py-3 bg-slate-100 text-slate-800 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-slate-200 transition-colors">Download PYQ Papers</a>
        <a href="/syllabus" class="px-5 py-3 bg-blue-600 text-white rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-blue-700 transition-colors shadow-sm">Review Syllabus Credits</a>
      </div>
    </div>
  </main>

  ${footerHtml}
</div>
`;
let beuResultHtml = injectIntoRoot(baseTemplate, beuResultBody);
beuResultHtml = injectHeadMetadata(beuResultHtml, {
  title: 'BEU Exam Result 2026 Guide & Marksheet Evaluation | Apna College Bihar',
  description: 'Official Bihar Engineering University (BEU Patna) B.Tech semester result guide. Marksheet status codes, scrutiny rules, carry-over backlog exams, and percentage formula.',
  canonical: 'https://www.apnacollegebihar.online/beu-result'
});
writeStaticHtml('beu-result', beuResultHtml);

// ─────────────────────────────────────────────────────────────
// 17. GENERATE YOUTUBE LECTURE FINDER PAGE (/lecture-finder)
// ─────────────────────────────────────────────────────────────
const lectureFinderBody = `
<div class="min-h-screen bg-slate-50 font-['Inter'] flex flex-col justify-between">
  ${navHeaderHtml}

  <main class="flex-grow max-w-5xl mx-auto px-4 sm:px-6 py-12">
    <!-- Breadcrumb -->
    <nav class="mb-6 text-xs text-slate-500 flex items-center gap-2">
      <a href="/" class="hover:text-blue-600">Home</a>
      <span>/</span>
      <span class="text-slate-800 font-semibold">Video Lecture Finder</span>
    </nav>

    <div class="text-center max-w-3xl mx-auto mb-12">
      <span class="px-3.5 py-1 bg-red-100 text-red-800 text-xs font-black uppercase tracking-widest rounded-full inline-block mb-3">Curated Digital Learning</span>
      <h1 class="text-3xl sm:text-5xl font-[1000] text-slate-900 tracking-tight uppercase mb-4">BEU YouTube Lecture Finder & Video Course Directory</h1>
      <p class="text-slate-600 text-sm md:text-base leading-relaxed">
        Curated unit-by-unit YouTube video playlists and top educator lectures strictly mapped to the Bihar Engineering University (BEU) B.Tech syllabus.
      </p>
    </div>

    <div class="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm space-y-10 prose prose-slate max-w-none text-slate-700 text-xs md:text-sm">
      <section>
        <h2 class="text-xl font-black text-slate-900 uppercase tracking-tight mb-4">Curated Video Lecture Framework for BEU Curriculum</h2>
        <p class="leading-relaxed">
          While millions of educational videos exist on YouTube, engineering students in Bihar often waste 30 to 45 minutes searching for playlists that actually follow the exact sequence of their syllabus. In Bihar Engineering University, subject examinations follow strict module outlines specified in the AICTE model curriculum. A lecture series that covers topics in a different order or goes too deep into irrelevant tangents harms exam efficiency.
        </p>
        <p class="leading-relaxed mt-3">
          Our senior mentors and university toppers have audited over 350 video series and cataloged the highest-yield, unit-mapped YouTube channels for every core engineering discipline. Below is your official reference guide across major foundational and departmental subjects.
        </p>
      </section>

      <section>
        <h3 class="text-lg font-black text-slate-900 uppercase tracking-tight mb-3">Recommended High-Yield Channels by Subject Discipline</h3>
        <div class="overflow-x-auto not-prose my-6">
          <table class="w-full text-left text-xs border border-slate-200 rounded-2xl overflow-hidden">
            <thead class="bg-slate-100 text-slate-900 font-black uppercase text-[11px] border-b border-slate-200">
              <tr>
                <th class="p-3 border-r border-slate-200">Subject</th>
                <th class="p-3 border-r border-slate-200">Target Semester / Branch</th>
                <th class="p-3 border-r border-slate-200">Recommended Channel & Faculty</th>
                <th class="p-3">Key Focus Modules</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100 text-slate-700">
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-bold border-r border-slate-200">Engineering Mathematics I & II</td>
                <td class="p-3 border-r border-slate-200">1st & 2nd Sem (All Branches)</td>
                <td class="p-3 border-r border-slate-200 font-semibold text-blue-700">Dr. Gajendra Purohit / Bhagwan Singh Vishwakarma</td>
                <td class="p-3">Matrices, Eigenvalues, Multivariable Calculus, Taylor Series, Differential Equations.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-bold border-r border-slate-200">Programming for Problem Solving (PPS)</td>
                <td class="p-3 border-r border-slate-200">1st / 2nd Sem (All Branches)</td>
                <td class="p-3 border-r border-slate-200 font-semibold text-blue-700">Jenny's Lectures / CodeWithHarry</td>
                <td class="p-3">C fundamentals, Pointers, Arrays, Strings, File Handling, Recursion.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-bold border-r border-slate-200">Basic Electrical Engineering</td>
                <td class="p-3 border-r border-slate-200">1st / 2nd Sem (All Branches)</td>
                <td class="p-3 border-r border-slate-200 font-semibold text-blue-700">Gate Academy / Neso Academy</td>
                <td class="p-3">DC Circuits (Thevenin, Norton), AC fundamentals, Single-phase Transformers, 3-Phase induction motors.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-bold border-r border-slate-200">Data Structures & Algorithms (DSA)</td>
                <td class="p-3 border-r border-slate-200">3rd Sem CSE / IT</td>
                <td class="p-3 border-r border-slate-200 font-semibold text-blue-700">Abdul Bari / Striver (takeUforward)</td>
                <td class="p-3">Linked Lists, Stacks, Queues, Binary Trees, AVL Trees, Graphs, Sorting algorithms.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-bold border-r border-slate-200">Operating Systems & DBMS</td>
                <td class="p-3 border-r border-slate-200">4th & 5th Sem CSE / IT</td>
                <td class="p-3 border-r border-slate-200 font-semibold text-blue-700">Gate Smashers (Varun Singla) / Knowledge Gate</td>
                <td class="p-3">Process Scheduling, Deadlocks, Paging, Virtual Memory, SQL, Normalization (1NF–BCNF), ER Diagrams.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-bold border-r border-slate-200">Engineering Mechanics & SOM</td>
                <td class="p-3 border-r border-slate-200">2nd & 3rd Sem Civil / Mech</td>
                <td class="p-3 border-r border-slate-200 font-semibold text-blue-700">Tikle's Academy / NPTEL (Prof. S.K. Saha)</td>
                <td class="p-3">Trusses, Centroid & Moment of Inertia, SFD & BMD, Stress-Strain diagrams, Torsion in shafts.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-bold border-r border-slate-200">Thermodynamics & Fluid Mechanics</td>
                <td class="p-3 border-r border-slate-200">3rd & 4th Sem Mech / Civil</td>
                <td class="p-3 border-r border-slate-200 font-semibold text-blue-700">Exergic / NPTEL (Prof. S. Chakraborty)</td>
                <td class="p-3">1st & 2nd Laws of Thermodynamics, Carnot Engine, Bernoulli's Equation, Flow through pipes.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-bold border-r border-slate-200">Digital Electronics & Microprocessors</td>
                <td class="p-3 border-r border-slate-200">3rd & 4th Sem EE / ECE / CSE</td>
                <td class="p-3 border-r border-slate-200 font-semibold text-blue-700">Neso Academy / Engineering Funda</td>
                <td class="p-3">Boolean Algebra, K-Maps, Multiplexers, Flip-Flops, Counters, 8085 Microprocessor architecture.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h3 class="text-lg font-black text-slate-900 uppercase tracking-tight mb-3">The 3-Step "Video-Notes-PYQ" Study Loop</h3>
        <p class="leading-relaxed">
          Watching videos passively rarely produces high exam scores. To guarantee an 8.5+ SGPA, adopt this proven 3-phase revision loop:
        </p>
        <ol class="list-decimal pl-5 space-y-2 mt-3 font-medium">
          <li><strong>Phase 1: Conceptual Video Comprehension (1.25x Speed):</strong> Watch the unit video series actively. Pause and draw circuit diagrams, state machine charts, and derivations in a rough notebook rather than taking passive screenshots.</li>
          <li><strong>Phase 2: Sync with Apna College Bihar Notes:</strong> Read the corresponding unit notes on this platform immediately after the video. This familiarizes you with the exact academic definitions, bullet formats, and presentation required by BEU evaluators.</li>
          <li><strong>Phase 3: Solve Last 5 Years' BEU PYQs:</strong> Open the BEU Previous Year Question paper for that subject. Identify which questions from that specific unit were asked in recent years and write full solutions under timed conditions.</li>
        </ol>
      </section>

      <div class="pt-6 border-t border-slate-100 flex flex-wrap gap-4 not-prose">
        <a href="/notes" class="px-5 py-3 bg-red-600 text-white rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-red-700 transition-colors shadow-sm">Download BEU Notes</a>
        <a href="/pyq" class="px-5 py-3 bg-slate-100 text-slate-800 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-slate-200 transition-colors">Download PYQs</a>
        <a href="/study-resources" class="px-5 py-3 bg-blue-600 text-white rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-blue-700 transition-colors shadow-sm">Textbook Guides</a>
      </div>
    </div>
  </main>

  ${footerHtml}
</div>
`;
let lectureFinderHtml = injectIntoRoot(baseTemplate, lectureFinderBody);
lectureFinderHtml = injectHeadMetadata(lectureFinderHtml, {
  title: 'BEU YouTube Lecture Finder & Video Directory | Apna College Bihar',
  description: 'Curated unit-by-unit YouTube video lectures aligned with Bihar Engineering University (BEU) B.Tech syllabus for CSE, Civil, Mechanical, EE, and ECE.',
  canonical: 'https://www.apnacollegebihar.online/lecture-finder'
});
writeStaticHtml('lecture-finder', lectureFinderHtml);

// ─────────────────────────────────────────────────────────────
// 18. GENERATE SCIENTIFIC CALCULATOR PAGE (/calculator)
// ─────────────────────────────────────────────────────────────
const calculatorBody = `
<div class="min-h-screen bg-slate-50 font-['Inter'] flex flex-col justify-between">
  ${navHeaderHtml}

  <main class="flex-grow max-w-5xl mx-auto px-4 sm:px-6 py-12">
    <!-- Breadcrumb -->
    <nav class="mb-6 text-xs text-slate-500 flex items-center gap-2">
      <a href="/" class="hover:text-blue-600">Home</a>
      <span>/</span>
      <span class="text-slate-800 font-semibold">Scientific Calculator & Formula Guide</span>
    </nav>

    <div class="text-center max-w-3xl mx-auto mb-12">
      <span class="px-3.5 py-1 bg-blue-100 text-blue-800 text-xs font-black uppercase tracking-widest rounded-full inline-block mb-3">Engineering Tools</span>
      <h1 class="text-3xl sm:text-5xl font-[1000] text-slate-900 tracking-tight uppercase mb-4">Engineering Scientific Calculator & Math Formula Guide</h1>
      <p class="text-slate-600 text-sm md:text-base leading-relaxed">
        Essential scientific calculator operations, examination permissible models, and high-frequency engineering mathematics formulas for BEU scholars.
      </p>
    </div>

    <div class="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm space-y-10 prose prose-slate max-w-none text-slate-700 text-xs md:text-sm">
      <section>
        <h2 class="text-xl font-black text-slate-900 uppercase tracking-tight mb-4">Scientific Calculator Regulations in BEU Examinations</h2>
        <p class="leading-relaxed">
          In Bihar Engineering University end-semester examinations, the use of scientific calculators is permitted for mathematical, analytical, and design subjects (such as Engineering Mathematics, Strength of Materials, Thermodynamics, Circuit Theory, and Structural Analysis). However, the university enforces strict regulations regarding permissible device types:
        </p>
        <ul class="list-disc pl-5 space-y-2 mt-3 font-medium">
          <li><strong>Permissible Models:</strong> Standard non-programmable scientific calculators including <strong>Casio fx-82MS, fx-100MS, fx-991MS, fx-991ES Plus (2nd Edition), and fx-991EX ClassWiz</strong> are fully authorized.</li>
          <li><strong>Prohibited Devices:</strong> Any programmable calculator (capable of storing alphanumeric text strings, source code, or custom user programs), graphing calculators, and mobile phone calculator applications are strictly prohibited. Possessing unauthorized devices in the examination hall leads to immediate confiscation and disciplinary action under university malpractice codes.</li>
        </ul>
      </section>

      <section>
        <h3 class="text-lg font-black text-slate-900 uppercase tracking-tight mb-3">High-Frequency Engineering Mathematics Formula Cheat-Sheet</h3>
        <p class="leading-relaxed mb-4">
          Mastering these essential mathematical relations saves valuable calculation time during numerical evaluations in end-semester papers:
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose my-6">
          <div class="p-5 bg-slate-50 border border-slate-200 rounded-2xl">
            <h4 class="font-black text-slate-900 text-xs uppercase mb-3">Differential Calculus & Expansions</h4>
            <ul class="space-y-2 text-xs font-mono text-slate-800">
              <li>• Taylor Series: f(x) = f(a) + f'(a)(x-a) + f''(a)(x-a)²/2! + ...</li>
              <li>• Maclaurin Series: e^x = 1 + x + x²/2! + x³/3! + ...</li>
              <li>• sin(x) = x - x³/3! + x⁵/5! - ...</li>
              <li>• cos(x) = 1 - x²/2! + x⁴/4! - ...</li>
              <li>• L'Hôpital Rule: lim f(x)/g(x) = lim f'(x)/g'(x) [for 0/0 or ∞/∞]</li>
            </ul>
          </div>

          <div class="p-5 bg-slate-50 border border-slate-200 rounded-2xl">
            <h4 class="font-black text-slate-900 text-xs uppercase mb-3">Matrices, Determinants & Eigenvalues</h4>
            <ul class="space-y-2 text-xs font-mono text-slate-800">
              <li>• Characteristic Equation: |A - λI| = 0</li>
              <li>• Sum of Eigenvalues = Trace(A) [Sum of diagonal entries]</li>
              <li>• Product of Eigenvalues = det(A) [Determinant of A]</li>
              <li>• Cayley-Hamilton Theorem: Every square matrix satisfies its own characteristic equation.</li>
              <li>• A⁻¹ = (1/det(A)) × adj(A)</li>
            </ul>
          </div>

          <div class="p-5 bg-slate-50 border border-slate-200 rounded-2xl">
            <h4 class="font-black text-slate-900 text-xs uppercase mb-3">Laplace Transform Pairs</h4>
            <ul class="space-y-2 text-xs font-mono text-slate-800">
              <li>• L{1} = 1/s</li>
              <li>• L{t^n} = n! / s^(n+1) [for positive integer n]</li>
              <li>• L{e^(at)} = 1 / (s - a)</li>
              <li>• L{sin(at)} = a / (s² + a²)</li>
              <li>• L{cos(at)} = s / (s² + a²)</li>
              <li>• First Shifting Theorem: L{e^(at) f(t)} = F(s - a)</li>
            </ul>
          </div>

          <div class="p-5 bg-slate-50 border border-slate-200 rounded-2xl">
            <h4 class="font-black text-slate-900 text-xs uppercase mb-3">Numerical Methods Approximations</h4>
            <ul class="space-y-2 text-xs font-mono text-slate-800">
              <li>• Newton-Raphson: x_(n+1) = x_n - [f(x_n) / f'(x_n)]</li>
              <li>• Trapezoidal Rule: ∫y dx = (h/2) [ (y₀ + y_n) + 2(y₁ + ... + y_(n-1)) ]</li>
              <li>• Simpson's 1/3 Rule: ∫y dx = (h/3) [ (y₀ + y_n) + 4(odd) + 2(even) ]</li>
              <li>• Runge-Kutta 4th Order: k₁=hf(x,y), k₂=hf(x+h/2, y+k₁/2)...</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h3 class="text-lg font-black text-slate-900 uppercase tracking-tight mb-3">Critical Exam Tips for Calculator Computation</h3>
        <ul class="list-disc pl-5 space-y-2 font-medium">
          <li><strong>Angle Mode Verification:</strong> Always verify whether your calculator is in <strong>DEG (Degree)</strong> or <strong>RAD (Radian)</strong> mode before computing trigonometric functions. Solving calculus and Fourier integrals in DEG mode leads to zero marks on the problem.</li>
          <li><strong>Bracket Precedence:</strong> When evaluating complex fractions with multiple terms in numerator and denominator, enclose the entire numerator and denominator in independent parentheses: <code>(A + B) / (C + D)</code>.</li>
          <li><strong>Equation Solver Validation:</strong> Use your Casio fx-991ES Plus equation solver mode (Mode 5) to verify quadratic, cubic, and simultaneous linear equation roots obtained through manual analytical derivation.</li>
        </ul>
      </section>

      <div class="pt-6 border-t border-slate-100 flex flex-wrap gap-4 not-prose">
        <a href="/cgpa" class="px-5 py-3 bg-blue-600 text-white rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-blue-700 transition-colors shadow-sm">BEU CGPA Calculator</a>
        <a href="/notes" class="px-5 py-3 bg-slate-100 text-slate-800 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-slate-200 transition-colors">Semester Engineering Notes</a>
        <a href="/pyq" class="px-5 py-3 bg-indigo-600 text-white rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-indigo-700 transition-colors shadow-sm">Solve Previous Year Papers</a>
      </div>
    </div>
  </main>

  ${footerHtml}
</div>
`;
let calculatorHtml = injectIntoRoot(baseTemplate, calculatorBody);
calculatorHtml = injectHeadMetadata(calculatorHtml, {
  title: 'Engineering Scientific Calculator & Math Formula Guide | Apna College Bihar',
  description: 'Online scientific calculator reference and comprehensive engineering mathematics formula sheets for calculus, matrices, and BEU exam preparation.',
  canonical: 'https://www.apnacollegebihar.online/calculator'
});
writeStaticHtml('calculator', calculatorHtml);

// ─────────────────────────────────────────────────────────────
// 19. GENERATE STUDY RESOURCES PAGE (/study-resources)
// ─────────────────────────────────────────────────────────────
const studyResourcesBody = `
<div class="min-h-screen bg-slate-50 font-['Inter'] flex flex-col justify-between">
  ${navHeaderHtml}

  <main class="flex-grow max-w-5xl mx-auto px-4 sm:px-6 py-12">
    <!-- Breadcrumb -->
    <nav class="mb-6 text-xs text-slate-500 flex items-center gap-2">
      <a href="/" class="hover:text-blue-600">Home</a>
      <span>/</span>
      <span class="text-slate-800 font-semibold">Study Resources & Reference Books</span>
    </nav>

    <div class="text-center max-w-3xl mx-auto mb-12">
      <span class="px-3.5 py-1 bg-emerald-100 text-emerald-800 text-xs font-black uppercase tracking-widest rounded-full inline-block mb-3">Academic Repository</span>
      <h1 class="text-3xl sm:text-5xl font-[1000] text-slate-900 tracking-tight uppercase mb-4">BEU Engineering Reference Books & Free Study Resources</h1>
      <p class="text-slate-600 text-sm md:text-base leading-relaxed">
        Standard engineering textbooks, laboratory manuals, NPTEL course mappings, and open-access academic literature for Bihar Engineering University scholars.
      </p>
    </div>

    <div class="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm space-y-10 prose prose-slate max-w-none text-slate-700 text-xs md:text-sm">
      <section>
        <h2 class="text-xl font-black text-slate-900 uppercase tracking-tight mb-4">The Standard Reference Literature Advantage</h2>
        <p class="leading-relaxed">
          In Bihar engineering examinations, relying solely on local question-bank summaries often limits students to mediocre marks. BEU paper setters and examiners draw university theory questions directly from standard author textbooks prescribed in the official university syllabus. Understanding foundational principles from authoritative authors ensures clarity for semester exams, GATE preparation, and technical placement interviews.
        </p>
        <p class="leading-relaxed mt-3">
          Below is our vetted selection of standard reference books mapped to the BEU B.Tech syllabus across foundational first-year subjects and core engineering disciplines.
        </p>
      </section>

      <section>
        <h3 class="text-lg font-black text-slate-900 uppercase tracking-tight mb-3">Standard Engineering Textbooks Matrix</h3>
        <div class="overflow-x-auto not-prose my-6">
          <table class="w-full text-left text-xs border border-slate-200 rounded-2xl overflow-hidden">
            <thead class="bg-slate-100 text-slate-900 font-black uppercase text-[11px] border-b border-slate-200">
              <tr>
                <th class="p-3 border-r border-slate-200">Discipline</th>
                <th class="p-3 border-r border-slate-200">Course Subject</th>
                <th class="p-3 border-r border-slate-200">Prescribed Reference Textbook</th>
                <th class="p-3">Primary Author / Publisher</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100 text-slate-700">
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-bold border-r border-slate-200 bg-slate-50">Common First Year</td>
                <td class="p-3 border-r border-slate-200">Higher Engineering Mathematics</td>
                <td class="p-3 border-r border-slate-200 font-semibold text-blue-700">Higher Engineering Mathematics</td>
                <td class="p-3">Dr. B.S. Grewal (Khanna Publishers)</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-bold border-r border-slate-200 bg-slate-50">Common First Year</td>
                <td class="p-3 border-r border-slate-200">Basic Electrical Engineering</td>
                <td class="p-3 border-r border-slate-200 font-semibold text-blue-700">Electrical Engineering Fundamentals</td>
                <td class="p-3">Vincent Del Toro / D.P. Kothari & I.J. Nagrath</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-bold border-r border-slate-200 bg-slate-50">Common First Year</td>
                <td class="p-3 border-r border-slate-200">Programming for Problem Solving</td>
                <td class="p-3 border-r border-slate-200 font-semibold text-blue-700">Programming in ANSI C</td>
                <td class="p-3">E. Balagurusamy (McGraw Hill)</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-bold border-r border-slate-200 bg-slate-50">Computer Science (CSE)</td>
                <td class="p-3 border-r border-slate-200">Data Structures & Algorithms</td>
                <td class="p-3 border-r border-slate-200 font-semibold text-blue-700">Introduction to Algorithms</td>
                <td class="p-3">Cormen, Leiserson, Rivest, Stein (CLRS / MIT Press)</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-bold border-r border-slate-200 bg-slate-50">Computer Science (CSE)</td>
                <td class="p-3 border-r border-slate-200">Operating System Concepts</td>
                <td class="p-3 border-r border-slate-200 font-semibold text-blue-700">Operating System Concepts</td>
                <td class="p-3">Silberschatz, Galvin, Gagne (Wiley)</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-bold border-r border-slate-200 bg-slate-50">Computer Science (CSE)</td>
                <td class="p-3 border-r border-slate-200">Database Management Systems</td>
                <td class="p-3 border-r border-slate-200 font-semibold text-blue-700">Database System Concepts</td>
                <td class="p-3">Korth, Silberschatz, Sudarshan (McGraw Hill)</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-bold border-r border-slate-200 bg-slate-50">Civil Engineering</td>
                <td class="p-3 border-r border-slate-200">Strength of Materials (SOM)</td>
                <td class="p-3 border-r border-slate-200 font-semibold text-blue-700">Strength of Materials</td>
                <td class="p-3">R.K. Rajput / Dr. B.C. Punmia</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-bold border-r border-slate-200 bg-slate-50">Civil Engineering</td>
                <td class="p-3 border-r border-slate-200">Reinforced Concrete Design</td>
                <td class="p-3 border-r border-slate-200 font-semibold text-blue-700">Reinforced Concrete: Limit State Design</td>
                <td class="p-3">A.K. Jain / B.C. Punmia (Laxmi Pub)</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-bold border-r border-slate-200 bg-slate-50">Mechanical Engineering</td>
                <td class="p-3 border-r border-slate-200">Thermodynamics</td>
                <td class="p-3 border-r border-slate-200 font-semibold text-blue-700">Engineering Thermodynamics</td>
                <td class="p-3">P.K. Nag (McGraw Hill)</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-bold border-r border-slate-200 bg-slate-50">Mechanical Engineering</td>
                <td class="p-3 border-r border-slate-200">Theory of Machines (TOM)</td>
                <td class="p-3 border-r border-slate-200 font-semibold text-blue-700">Theory of Machines</td>
                <td class="p-3">S.S. Rattan / Thomas Bevan</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-bold border-r border-slate-200 bg-slate-50">Electrical / ECE</td>
                <td class="p-3 border-r border-slate-200">Electric Circuits & Networks</td>
                <td class="p-3 border-r border-slate-200 font-semibold text-blue-700">Fundamentals of Electric Circuits</td>
                <td class="p-3">Charles K. Alexander & Matthew N.O. Sadiku</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-bold border-r border-slate-200 bg-slate-50">Electrical / ECE</td>
                <td class="p-3 border-r border-slate-200">Control Systems Engineering</td>
                <td class="p-3 border-r border-slate-200 font-semibold text-blue-700">Control Systems Engineering</td>
                <td class="p-3">I.J. Nagrath & M. Gopal (New Age)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h3 class="text-lg font-black text-slate-900 uppercase tracking-tight mb-3">Open-Access Government Digital Academic Repositories</h3>
        <p class="leading-relaxed">
          Students across Bihar's 38 government engineering institutions can leverage free national academic repositories funded by the Ministry of Education (MoE), Government of India:
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose my-4">
          <div class="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
            <h4 class="font-bold text-slate-900 text-xs uppercase mb-1">📖 National Digital Library of India (NDLI)</h4>
            <p class="text-[11px] text-slate-600 leading-relaxed">Access over 50 million digitized textbooks, research theses, and conference papers free through your institutional or personal email.</p>
          </div>
          <div class="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
            <h4 class="font-bold text-slate-900 text-xs uppercase mb-1">💻 NPTEL & SWAYAM Online Portal</h4>
            <p class="text-[11px] text-slate-600 leading-relaxed">Video lecture courses developed by IIT and IISc faculty. Under BEU rules, approved NPTEL course certifications transfer up to 20% semester credits.</p>
          </div>
          <div class="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
            <h4 class="font-bold text-slate-900 text-xs uppercase mb-1">🔬 Virtual Labs (vlab.co.in)</h4>
            <p class="text-[11px] text-slate-600 leading-relaxed">Interactive simulation of physics, electronics, mechanical, and civil engineering experiments without requiring physical laboratory apparatus.</p>
          </div>
          <div class="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
            <h4 class="font-bold text-slate-900 text-xs uppercase mb-1">📂 e-ShodhSindhu & Spoken Tutorial</h4>
            <p class="text-[11px] text-slate-600 leading-relaxed">Free peer-reviewed academic journals, open-source software training in Linux, Python, LaTeX, and C/C++ supported by IIT Bombay.</p>
          </div>
        </div>
      </section>

      <div class="pt-6 border-t border-slate-100 flex flex-wrap gap-4 not-prose">
        <a href="/notes" class="px-5 py-3 bg-emerald-600 text-white rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-emerald-700 transition-colors shadow-sm">Download Semester Notes</a>
        <a href="/syllabus" class="px-5 py-3 bg-slate-100 text-slate-800 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-slate-200 transition-colors">Review B.Tech Syllabus</a>
        <a href="/colleges" class="px-5 py-3 bg-blue-600 text-white rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-blue-700 transition-colors shadow-sm">Explore 38 Bihar Colleges</a>
      </div>
    </div>
  </main>

  ${footerHtml}
</div>
`;
let studyResourcesHtml = injectIntoRoot(baseTemplate, studyResourcesBody);
studyResourcesHtml = injectHeadMetadata(studyResourcesHtml, {
  title: 'BEU Engineering Reference Books & Free Study Resources | Apna College Bihar',
  description: 'Standard engineering reference textbooks, laboratory manuals, NPTEL course mappings, and open-access academic literature for Bihar engineering students.',
  canonical: 'https://www.apnacollegebihar.online/study-resources'
});
writeStaticHtml('study-resources', studyResourcesHtml);

// ─────────────────────────────────────────────────────────────
// 20. GENERATE WEB DIRECTORY & SITEMAP PAGE (/directory)
// ─────────────────────────────────────────────────────────────
const directoryDivisions = {
  "Patna Division": ["bce-bakhtiyarpur", "mit-muzaffarpur", "gec-bhojpur", "gec-buxar", "gec-rohtas", "gec-kaimur"],
  "Tirhut Division": ["gec-vaishali", "mce-motihari", "sec-sitamarhi", "gec-sheohar", "gec-west-champaran"],
  "Magadh Division": ["gce-gaya", "gec-nawada", "gec-aurangabad", "gec-jehanabad", "gec-arwal"],
  "Saran Division": ["chapra-lnjpit", "gec-siwan", "gec-gopalganj"],
  "Darbhanga Division": ["dce-darbhanga", "gec-madhubani", "gec-samastipur"],
  "Kosi & Purnia Division": ["sce-saharsa", "gec-madhepura", "gec-supaul", "gec-purnea", "gec-katihar", "gec-araria", "gec-kishanganj"],
  "Bhagalpur & Munger Division": ["bce-bhagalpur", "gec-banka", "gec-munger", "gec-jamui", "gec-lakhisarai", "gec-sheikhpura", "gec-khagaria", "gec-begusarai"]
};

const directoryDivisionHtml = Object.keys(directoryDivisions).map(divName => {
  const slugs = directoryDivisions[divName];
  const itemsHtml = slugs.filter(s => collegeData[s]).map(s => {
    const c = collegeData[s];
    return `<li><a href="/college/${s}" class="text-blue-600 hover:underline font-medium">${c.name} (${c.shortName})</a> — <span class="text-slate-500">${c.district}</span></li>`;
  }).join('');

  return `
    <div class="p-5 bg-slate-50 border border-slate-200 rounded-2xl">
      <h3 class="font-black text-slate-900 text-sm uppercase mb-3 text-blue-700">🏛️ ${divName}</h3>
      <ul class="space-y-1.5 text-xs text-slate-700 list-disc pl-4">
        ${itemsHtml}
      </ul>
    </div>
  `;
}).join('');

const directoryBody = `
<div class="min-h-screen bg-slate-50 font-['Inter'] flex flex-col justify-between">
  ${navHeaderHtml}

  <main class="flex-grow max-w-5xl mx-auto px-4 sm:px-6 py-12">
    <!-- Breadcrumb -->
    <nav class="mb-6 text-xs text-slate-500 flex items-center gap-2">
      <a href="/" class="hover:text-blue-600">Home</a>
      <span>/</span>
      <span class="text-slate-800 font-semibold">Academic Directory & Master Index</span>
    </nav>

    <div class="text-center max-w-3xl mx-auto mb-12">
      <span class="px-3.5 py-1 bg-blue-100 text-blue-800 text-xs font-black uppercase tracking-widest rounded-full inline-block mb-3">Master Navigation Index</span>
      <h1 class="text-3xl sm:text-5xl font-[1000] text-slate-900 tracking-tight uppercase mb-4">Official Academic Directory & Sitemap</h1>
      <p class="text-slate-600 text-sm md:text-base leading-relaxed">
        Master directory linking all 38 Government Engineering Colleges in Bihar, BEU semester notes, question papers, syllabus modules, calculators, and administrative pages.
      </p>
    </div>

    <div class="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm space-y-10 prose prose-slate max-w-none text-slate-700 text-xs md:text-sm">
      <section>
        <h2 class="text-xl font-black text-slate-900 uppercase tracking-tight mb-4">Core Academic & Utility Hubs</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 not-prose">
          <a href="/notes" class="p-4 bg-slate-50 border border-slate-200 rounded-2xl block hover:border-blue-500 font-bold text-slate-900">📚 BEU Semester Notes Hub</a>
          <a href="/pyq" class="p-4 bg-slate-50 border border-slate-200 rounded-2xl block hover:border-blue-500 font-bold text-slate-900">📝 5-Year PYQ Question Papers</a>
          <a href="/syllabus" class="p-4 bg-slate-50 border border-slate-200 rounded-2xl block hover:border-blue-500 font-bold text-slate-900">📋 BEU B.Tech Syllabus Guide</a>
          <a href="/cgpa" class="p-4 bg-slate-50 border border-slate-200 rounded-2xl block hover:border-blue-500 font-bold text-slate-900">🧮 BEU CGPA / SGPA Calculator</a>
          <a href="/attendance" class="p-4 bg-slate-50 border border-slate-200 rounded-2xl block hover:border-blue-500 font-bold text-slate-900">⏱️ 75% Attendance Tracker</a>
          <a href="/ugeac-predictor" class="p-4 bg-slate-50 border border-slate-200 rounded-2xl block hover:border-blue-500 font-bold text-slate-900">🎯 BCECEB UGEAC Predictor</a>
          <a href="/timetable" class="p-4 bg-slate-50 border border-slate-200 rounded-2xl block hover:border-blue-500 font-bold text-slate-900">📅 Class Timetable & Routine</a>
          <a href="/beu-result" class="p-4 bg-slate-50 border border-slate-200 rounded-2xl block hover:border-blue-500 font-bold text-slate-900">📊 BEU Result & Marksheet Portal</a>
          <a href="/lecture-finder" class="p-4 bg-slate-50 border border-slate-200 rounded-2xl block hover:border-blue-500 font-bold text-slate-900">🎥 YouTube Lecture Finder</a>
          <a href="/calculator" class="p-4 bg-slate-50 border border-slate-200 rounded-2xl block hover:border-blue-500 font-bold text-slate-900">🔢 Scientific Calculator</a>
          <a href="/study-resources" class="p-4 bg-slate-50 border border-slate-200 rounded-2xl block hover:border-blue-500 font-bold text-slate-900">📖 Reference Books & Resources</a>
          <a href="/colleges" class="p-4 bg-slate-50 border border-slate-200 rounded-2xl block hover:border-blue-500 font-bold text-slate-900">🏛️ 38 Bihar Government Colleges</a>
          <a href="/mentorship" class="p-4 bg-slate-50 border border-slate-200 rounded-2xl block hover:border-blue-500 font-bold text-slate-900">🤝 Free Senior Mentorship</a>
          <a href="/blog" class="p-4 bg-slate-50 border border-slate-200 rounded-2xl block hover:border-blue-500 font-bold text-slate-900">📰 Bihar Engineering Blog</a>
          <a href="/about" class="p-4 bg-slate-50 border border-slate-200 rounded-2xl block hover:border-blue-500 font-bold text-slate-900">ℹ️ About Apna College Bihar</a>
          <a href="/contact" class="p-4 bg-slate-50 border border-slate-200 rounded-2xl block hover:border-blue-500 font-bold text-slate-900">📧 Contact & Support</a>
          <a href="/privacy" class="p-4 bg-slate-50 border border-slate-200 rounded-2xl block hover:border-blue-500 font-bold text-slate-900">🔒 Privacy Policy</a>
          <a href="/terms" class="p-4 bg-slate-50 border border-slate-200 rounded-2xl block hover:border-blue-500 font-bold text-slate-900">⚖️ Terms of Service</a>
        </div>
      </section>

      <section>
        <h2 class="text-xl font-black text-slate-900 uppercase tracking-tight mb-4">Engineering Branch Portals</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 not-prose">
          <a href="/branch/cse" class="p-3 bg-slate-50 border border-slate-200 rounded-xl block hover:border-blue-500 font-bold text-center text-xs text-slate-900">💻 Computer Science</a>
          <a href="/branch/civil" class="p-3 bg-slate-50 border border-slate-200 rounded-xl block hover:border-blue-500 font-bold text-center text-xs text-slate-900">🏗️ Civil Engineering</a>
          <a href="/branch/me" class="p-3 bg-slate-50 border border-slate-200 rounded-xl block hover:border-blue-500 font-bold text-center text-xs text-slate-900">⚙️ Mechanical Engg</a>
          <a href="/branch/ee" class="p-3 bg-slate-50 border border-slate-200 rounded-xl block hover:border-blue-500 font-bold text-center text-xs text-slate-900">⚡ Electrical Engg</a>
          <a href="/branch/ece" class="p-3 bg-slate-50 border border-slate-200 rounded-xl block hover:border-blue-500 font-bold text-center text-xs text-slate-900">📡 Electronics (ECE)</a>
        </div>
      </section>

      <section>
        <h2 class="text-xl font-black text-slate-900 uppercase tracking-tight mb-4">All 38 Government Engineering Colleges by Administrative Division</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose">
          ${directoryDivisionHtml}
        </div>
      </section>
    </div>
  </main>

  ${footerHtml}
</div>
`;
let directoryHtml = injectIntoRoot(baseTemplate, directoryBody);
directoryHtml = injectHeadMetadata(directoryHtml, {
  title: 'Web Directory & Master Sitemap | Apna College Bihar',
  description: 'Comprehensive academic directory of all 38 Government Engineering Colleges in Bihar, BEU semester notes, PYQs, syllabus documents, and tools.',
  canonical: 'https://www.apnacollegebihar.online/directory'
});
writeStaticHtml('directory', directoryHtml);

// ─────────────────────────────────────────────────────────────
// 21. GENERATE COLLEGES DIRECTORY PAGE (/colleges)
// ─────────────────────────────────────────────────────────────
const collegesListHtml = Object.keys(collegeData).map(slug => {
  const c = collegeData[slug];
  const seatsCount = c.seatMatrix ? c.seatMatrix.reduce((acc, curr) => acc + (curr.seats || 0), 0) : (c.quickFacts && c.quickFacts.seats ? c.quickFacts.seats : 'N/A');
  return `
    <div class="bg-white p-6 border border-slate-200 rounded-3xl shadow-sm hover:border-blue-500 hover:shadow-md transition-all flex flex-col justify-between">
      <div>
        <div class="flex items-center gap-3 mb-3">
          <img src="${c.logo}" alt="${c.shortName} Logo" class="w-12 h-12 rounded-xl object-contain border border-slate-100 p-1" onerror="this.onerror=null;this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(c.shortName)}&background=0D8ABC&color=fff&size=100';" />
          <div>
            <h3 class="font-black text-slate-900 text-sm leading-tight">${c.name}</h3>
            <span class="text-[11px] text-blue-600 font-bold uppercase tracking-wider">${c.shortName} • Estd. ${c.established}</span>
          </div>
        </div>
        <p class="text-xs text-slate-500 line-clamp-2 mb-3">📍 ${c.location}</p>
        <div class="flex items-center gap-2 mb-4 text-[11px] font-semibold text-slate-600 bg-slate-50 p-2 rounded-xl">
          <span>🎓 Seats: <strong>${seatsCount}</strong></span>
          <span>•</span>
          <span>💼 Highest: <strong>${c.placement ? c.placement.highestPackage : '4.5 LPA'}</strong></span>
        </div>
      </div>
      <a href="/college/${slug}" class="text-blue-600 font-bold text-xs hover:underline flex items-center justify-between pt-3 border-t border-slate-100">
        <span>View Full College Profile</span>
        <span>&rarr;</span>
      </a>
    </div>
  `;
}).join('');

const collegesBody = `
<div class="min-h-screen bg-slate-50 font-['Inter'] flex flex-col justify-between">
  ${navHeaderHtml}

  <main class="flex-grow max-w-6xl mx-auto px-4 sm:px-6 py-12">
    <!-- Breadcrumb -->
    <nav class="mb-6 text-xs text-slate-500 flex items-center gap-2">
      <a href="/" class="hover:text-blue-600">Home</a>
      <span>/</span>
      <span class="text-slate-800 font-semibold">Government Engineering Colleges</span>
    </nav>

    <div class="text-center max-w-3xl mx-auto mb-12">
      <span class="px-3.5 py-1 bg-blue-100 text-blue-800 text-xs font-black uppercase tracking-widest rounded-full inline-block mb-3">Official Directory</span>
      <h1 class="text-3xl sm:text-5xl font-[1000] text-slate-900 tracking-tight uppercase mb-4">38 Government Engineering Colleges in Bihar</h1>
      <p class="text-slate-600 text-sm md:text-base leading-relaxed">
        Verified institutional profiles, UGEAC closing cutoffs, seat matrices, campus facilities, and placement statistics for all 38 government colleges under Bihar Engineering University.
      </p>
    </div>

    <!-- Editorial In-Depth Guide -->
    <div class="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm space-y-8 prose prose-slate max-w-none text-slate-700 text-xs md:text-sm mb-12">
      <section>
        <h2 class="text-xl font-black text-slate-900 uppercase tracking-tight mb-4">Evolution of Technical Education in Bihar: The 38-District Network</h2>
        <p class="leading-relaxed">
          Higher technical education in Bihar has witnessed a historic transformation over the last decade. Historically anchored by legendary institutions like <strong>Muzaffarpur Institute of Technology (MIT Muzaffarpur, Estd. 1954)</strong> and <strong>Bhagalpur College of Engineering (BCE Bhagalpur, Estd. 1960)</strong>, the state government launched an ambitious initiative under the <em>"Saat Nishchay"</em> good governance program to establish a dedicated, modern Government Engineering College (GEC) in every single one of Bihar's 38 administrative districts.
        </p>
        <p class="leading-relaxed mt-3">
          To unify academic standards, syllabus frameworks, and examination timelines, the Government of Bihar enacted the <strong>Bihar Engineering University Act, 2021</strong>, officially creating the <strong>Bihar Engineering University (BEU Patna)</strong>. Today, all 38 government engineering colleges function under the single academic umbrella of BEU, ensuring AICTE-compliant curriculum standards, standardized semester evaluations, and transparent degree awards.
        </p>
      </section>

      <section>
        <h3 class="text-lg font-black text-slate-900 uppercase tracking-tight mb-3">Admission Workflow via NTA JEE Main & BCECEB UGEAC</h3>
        <p class="leading-relaxed">
          Admissions across all 38 state engineering colleges are 100% merit-based and centralized. The <strong>Bihar Combined Entrance Competitive Examination Board (BCECEB)</strong> conducts the annual <strong>Under Graduate Engineering Admission Counselling (UGEAC)</strong> using National Testing Agency (NTA) JEE Main All India Ranks. The admission sequence involves:
        </p>
        <ol class="list-decimal pl-5 space-y-2 mt-3 font-medium">
          <li><strong>Online Registration:</strong> Candidates with valid JEE Main scores register on <code>bceceboard.bihar.gov.in</code> and receive a State UGEAC Merit Rank.</li>
          <li><strong>Choice Filling & Locking:</strong> Candidates select preferred college-branch combinations from the 38 government colleges based on closing cutoff trends.</li>
          <li><strong>Seat Allotment (Rounds 1, 2, and Mop-Up):</strong> Computerized allocation based on category reservation (UR, EWS, BC, EBC, SC, ST, RCG, DQ) and candidate merit.</li>
          <li><strong>Physical Document Verification:</strong> Allotted candidates report to designated reporting nodal centers with original academic and domicile credentials.</li>
        </ol>
      </section>

      <section>
        <h3 class="text-lg font-black text-slate-900 uppercase tracking-tight mb-3">Subsidized Government Fee Structure</h3>
        <p class="leading-relaxed">
          Because these institutions are state-funded, annual academic tuition fees are heavily subsidized:
        </p>
        <ul class="list-disc pl-5 space-y-1.5 mt-2 font-medium">
          <li><strong>Tuition Fee:</strong> Subsidized to approximately ₹120 per year (₹10/month).</li>
          <li><strong>Annual Academic & Development Fee:</strong> Between ₹10,000 and ₹14,000 per academic year.</li>
          <li><strong>Hostel & Messing:</strong> Hostel room rent is nominal (~₹2,400/year), with student-managed cooperative mess charges averaging ₹3,000 to ₹3,500 per month.</li>
          <li><strong>Bihar Student Credit Card (MNSSBY):</strong> Eligible students can avail zero-interest education loans up to ₹4,00,000 for academic and living expenses.</li>
        </ul>
      </section>
    </div>

    <!-- College Cards Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      ${collegesListHtml}
    </div>
  </main>

  ${footerHtml}
</div>
`;
let collegesHtml = injectIntoRoot(baseTemplate, collegesBody);
collegesHtml = injectHeadMetadata(collegesHtml, {
  title: 'Top 38 Government Engineering Colleges in Bihar (GEC Directory) | Apna College Bihar',
  description: 'Complete directory of 38 Government Engineering Colleges (GECs) in Bihar under BEU. Cutoff ranks, placement statistics, branches, and fee details.',
  canonical: 'https://www.apnacollegebihar.online/colleges'
});
writeStaticHtml('colleges', collegesHtml);

// ─────────────────────────────────────────────────────────────
// 22. GENERATE SENIOR MENTORSHIP PAGE (/mentorship)
// ─────────────────────────────────────────────────────────────
const mentorshipBody = `
<div class="min-h-screen bg-slate-50 font-['Inter'] flex flex-col justify-between">
  ${navHeaderHtml}

  <main class="flex-grow max-w-5xl mx-auto px-4 sm:px-6 py-12">
    <!-- Breadcrumb -->
    <nav class="mb-6 text-xs text-slate-500 flex items-center gap-2">
      <a href="/" class="hover:text-blue-600">Home</a>
      <span>/</span>
      <span class="text-slate-800 font-semibold">Senior Mentorship Program</span>
    </nav>

    <div class="text-center max-w-3xl mx-auto mb-12">
      <span class="px-3.5 py-1 bg-emerald-100 text-emerald-800 text-xs font-black uppercase tracking-widest rounded-full inline-block mb-3">Student Community</span>
      <h1 class="text-3xl sm:text-5xl font-[1000] text-slate-900 tracking-tight uppercase mb-4">Free Senior Mentorship & Engineering Career Roadmap</h1>
      <p class="text-slate-600 text-sm md:text-base leading-relaxed">
        Connect directly with BEU alumni mentors, university toppers, and senior engineers for guidance on semester exams, placements, coding roadmaps, and career planning.
      </p>
    </div>

    <div class="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm space-y-10 prose prose-slate max-w-none text-slate-700 text-xs md:text-sm">
      <section>
        <h2 class="text-xl font-black text-slate-900 uppercase tracking-tight mb-4">Bridging the Guidance Gap for Bihar Engineering Students</h2>
        <p class="leading-relaxed">
          Many students entering Bihar's Government Engineering Colleges come from rural districts and small towns without access to senior engineers in their immediate families. Navigating competitive coding, off-campus recruitment drives, GATE exams, and complex university ordinances without a trusted senior mentor leads to avoidable mistakes, lost opportunities, and lower semester GPAs.
        </p>
        <p class="leading-relaxed mt-3">
          <strong>Apna College Bihar</strong> was established by BEU alumni working at top tech firms (TCS, Cognizant, Wipro, L&T, Alstom, and tech startups) to provide free peer mentorship, career roadmaps, and exam survival strategies to every student in Bihar—completely free of cost.
        </p>
      </section>

      <section>
        <h3 class="text-lg font-black text-slate-900 uppercase tracking-tight mb-3">The 4-Year B.Tech Engineering Roadmap</h3>
        <p class="leading-relaxed mb-4">
          Follow this proven year-by-year framework designed to maximize your academic record and technical employability:
        </p>
        <div class="space-y-4 not-prose my-6">
          <div class="p-5 bg-slate-50 border border-slate-200 rounded-2xl">
            <h4 class="font-black text-slate-900 text-sm uppercase mb-1">🌱 1st Year: Foundational Grounding & GPA Security</h4>
            <p class="text-xs text-slate-600 leading-relaxed mb-2">Focus on scoring 8.5+ SGPA across Semesters 1 and 2. High first-year GPAs buffer your overall CGPA throughout 4 years. Concurrently, master C programming fundamentals, git version control, and problem-solving logic.</p>
            <div class="text-[11px] font-bold text-blue-600">Milestone: Zero backlogs, clean C language proficiency, and participation in at least one college technical club.</div>
          </div>

          <div class="p-5 bg-slate-50 border border-slate-200 rounded-2xl">
            <h4 class="font-black text-slate-900 text-sm uppercase mb-1">🌿 2nd Year: Core Branch Mastery & Data Structures (DSA)</h4>
            <p class="text-xs text-slate-600 leading-relaxed mb-2">Dive deep into core branch subjects (Strength of Materials for Civil, Thermodynamics for Mech, Circuit Theory for EE, and Data Structures & Algorithms in C++ or Java for CSE/IT). Begin solving LeetCode / GeeksforGeeks problems daily.</p>
            <div class="text-[11px] font-bold text-blue-600">Milestone: 150+ DSA problems solved, completion of foundational branch projects, and mapping GATE syllabus topics.</div>
          </div>

          <div class="p-5 bg-slate-50 border border-slate-200 rounded-2xl">
            <h4 class="font-black text-slate-900 text-sm uppercase mb-1">🌳 3rd Year: Full-Stack / Core Projects & Industrial Internships</h4>
            <p class="text-xs text-slate-600 leading-relaxed mb-2">Build 2 to 3 end-to-end projects with live deployments (MERN stack, Flutter, or core domain simulation in MATLAB/AutoCAD). Undertake mandatory summer industrial training in state public works, railway workshops, power stations, or software companies.</p>
            <div class="text-[11px] font-bold text-blue-600">Milestone: Production-grade GitHub portfolio, verified industrial internship certificate, and intense GATE / placement prep.</div>
          </div>

          <div class="p-5 bg-slate-50 border border-slate-200 rounded-2xl">
            <h4 class="font-black text-slate-900 text-sm uppercase mb-1">🍎 4th Year: Campus Placements & Capstone Project</h4>
            <p class="text-xs text-slate-600 leading-relaxed mb-2">Participate actively in college pool campus recruitment drives (TCS National Qualifier Test, Cognizant GenC, L&T, off-campus hiring). Complete and defend your final-year Capstone engineering project with research documentation.</p>
            <div class="text-[11px] font-bold text-blue-600">Milestone: Securing placement offer(s) and graduating with ≥8.0 CGPA with zero pending backlogs.</div>
          </div>
        </div>
      </section>

      <section>
        <h3 class="text-lg font-black text-slate-900 uppercase tracking-tight mb-3">Top 5 Exam Survival Secrets from 9+ CGPA Holders</h3>
        <ul class="list-disc pl-5 space-y-2 font-medium">
          <li><strong>Never Skip Answer Diagrams:</strong> University evaluators award 30% to 40% of marks for clear, neatly labeled pencil schematics, circuit diagrams, and flowcharts.</li>
          <li><strong>PYQ Repetition:</strong> Practice at least 5 years of previous year question papers. Over 60% of question concepts and numerical patterns repeat across alternate examination sessions.</li>
          <li><strong>Protect Your Internal Assessment:</strong> Securing 26+ out of 30 marks in internal continuous assessment makes achieving an 'A+' or 'O' grade significantly easier. Maintain 75%+ attendance and submit practical files punctually.</li>
          <li><strong>Format with Structured Subheadings:</strong> Organize 14-mark university answers with Introduction, Principle / Derivation, Labeled Diagram, Advantages, Limitations, and Applications. Avoid unstructured essay walls.</li>
          <li><strong>Form Peer Study Groups:</strong> Collaborate with 2 to 3 focused batchmates to discuss tough derivation units and share lab experiment insights.</li>
        </ul>
      </section>

      <div class="pt-6 border-t border-slate-100 flex flex-wrap gap-4 not-prose">
        <a href="https://whatsapp.com/channel/0029VbC6FsH3wtb5UEDvrW0a" target="_blank" rel="noopener noreferrer" class="px-5 py-3 bg-emerald-600 text-white rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-emerald-700 transition-colors shadow-sm">Join WhatsApp Mentorship Channel</a>
        <a href="/notes" class="px-5 py-3 bg-blue-600 text-white rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-blue-700 transition-colors shadow-sm">Explore BEU Notes</a>
        <a href="/pyq" class="px-5 py-3 bg-slate-100 text-slate-800 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-slate-200 transition-colors">Download PYQs</a>
      </div>
    </div>
  </main>

  ${footerHtml}
</div>
`;
let mentorshipHtml = injectIntoRoot(baseTemplate, mentorshipBody);
mentorshipHtml = injectHeadMetadata(mentorshipHtml, {
  title: 'Free Senior Mentorship for BEU Engineering Students | Apna College Bihar',
  description: 'Join the free senior mentorship community for Bihar Engineering University students. Get exam advice, 4-year coding roadmaps, and career placement mentorship.',
  canonical: 'https://www.apnacollegebihar.online/mentorship'
});
writeStaticHtml('mentorship', mentorshipHtml);

// ─────────────────────────────────────────────────────────────
// 23. GENERATE ALL 38 INDIVIDUAL COLLEGE PAGES (/college/:slug)
// ─────────────────────────────────────────────────────────────
console.log(`[SSG] Starting static page generation for ${Object.keys(collegeData).length} colleges...`);
Object.keys(collegeData).forEach(slug => {
  const c = collegeData[slug];
  const canonicalCollegeUrl = `https://www.apnacollegebihar.online/college/${slug}`;

  // Build Seat Matrix Rows
  let totalSeats = 0;
  const seatMatrixRows = (c.seatMatrix || []).map(item => {
    totalSeats += (item.seats || 0);
    return `
      <tr class="hover:bg-slate-50">
        <td class="p-3 border-r border-slate-200 font-medium text-slate-800">${item.branch}</td>
        <td class="p-3 font-bold text-blue-700 text-right">${item.seats}</td>
      </tr>
    `;
  }).join('');

  // Build Facilities List
  const facilitiesHtml = (c.facilities || []).map(f => `
    <div class="p-3 bg-slate-50 border border-slate-200 rounded-2xl flex items-center gap-3">
      <span class="text-base">🏢</span>
      <span class="text-xs font-semibold text-slate-800">${f.name || f}</span>
    </div>
  `).join('');

  // Build Recruiters Badges
  const recruitersHtml = (c.placement && c.placement.recruiters ? c.placement.recruiters : ['TCS', 'Wipro', 'Cognizant', 'L&T', 'Pie Infocomm']).map(r => `
    <span class="px-3 py-1 bg-blue-50 text-blue-800 border border-blue-200 rounded-full text-xs font-bold">${r}</span>
  `).join('');

  // Build Admission Documents List
  const documentsHtml = (c.admission && c.admission.documents ? c.admission.documents : [
    'JEE Main Rank Card & Admit Card',
    'BCECEB UGEAC Allotment Letter',
    '10th & 12th Marksheet & Passing Certificate',
    'Residential / Domicile Certificate of Bihar',
    'Caste Certificate (if claiming reservation)',
    'Income Certificate (EWS / TFW candidates)',
    'Medical Fitness Certificate',
    'Character Certificate & Migration Certificate',
    '6 Passport Size Photographs'
  ]).map(doc => `<li class="flex items-start gap-2"><span class="text-emerald-600 font-bold">✓</span> <span>${doc}</span></li>`).join('');

  const collegeDetailBody = `
  <div class="min-h-screen bg-slate-50 font-['Inter'] flex flex-col justify-between">
    ${navHeaderHtml}

    <main class="flex-grow max-w-5xl mx-auto px-4 sm:px-6 py-12">
      <!-- Breadcrumb -->
      <nav class="mb-6 text-xs text-slate-500 flex items-center gap-2">
        <a href="/" class="hover:text-blue-600">Home</a>
        <span>/</span>
        <a href="/colleges" class="hover:text-blue-600">Colleges</a>
        <span>/</span>
        <span class="text-slate-800 font-semibold">${c.shortName}</span>
      </nav>

      <!-- College Header Hero -->
      <div class="bg-white border border-slate-200 rounded-3xl p-8 md:p-10 shadow-sm mb-8">
        <div class="flex flex-col sm:flex-row items-start sm:items-center gap-6 pb-6 border-b border-slate-100">
          <img src="${c.logo}" alt="${c.shortName} Official Logo" class="w-20 h-20 rounded-2xl object-contain border border-slate-100 p-2 shadow-xs" onerror="this.onerror=null;this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(c.shortName)}&background=0D8ABC&color=fff&size=200';" />
          <div>
            <span class="px-2.5 py-0.5 bg-blue-50 text-blue-700 text-[10px] font-black uppercase tracking-wider rounded-md inline-block mb-2">${c.type || 'Government College'} • Estd. ${c.established}</span>
            <h1 class="text-2xl sm:text-3xl md:text-4xl font-[1000] text-slate-900 tracking-tight leading-tight">${c.name}</h1>
            <p class="text-xs text-slate-500 mt-1 font-medium">📍 ${c.location} (District: ${c.district})</p>
          </div>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 text-center text-xs">
          <div class="p-3 bg-slate-50 rounded-2xl">
            <span class="text-slate-400 block text-[10px] font-bold uppercase">Affiliation</span>
            <span class="font-black text-slate-900">${c.affiliation || 'BEU Patna'}</span>
          </div>
          <div class="p-3 bg-slate-50 rounded-2xl">
            <span class="text-slate-400 block text-[10px] font-bold uppercase">Approval</span>
            <span class="font-black text-slate-900">${c.approval || 'AICTE Approved'}</span>
          </div>
          <div class="p-3 bg-slate-50 rounded-2xl">
            <span class="text-slate-400 block text-[10px] font-bold uppercase">Admission Mode</span>
            <span class="font-black text-slate-900">JEE Main / UGEAC</span>
          </div>
          <div class="p-3 bg-slate-50 rounded-2xl">
            <span class="text-slate-400 block text-[10px] font-bold uppercase">Campus Size</span>
            <span class="font-black text-slate-900">${c.quickFacts && c.quickFacts.campusSize ? c.quickFacts.campusSize : 'State Campus'}</span>
          </div>
        </div>
      </div>

      <!-- Quick Facts Stats Cards -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        <div class="bg-white border border-slate-200 p-5 rounded-2xl shadow-xs">
          <span class="text-slate-400 text-[10px] font-bold uppercase tracking-wider block mb-1">Annual Academic Fee</span>
          <span class="text-base sm:text-lg font-black text-slate-900">${c.quickFacts && c.quickFacts.fees ? c.quickFacts.fees : '₹10,000 - ₹14,000 / Year'}</span>
        </div>
        <div class="bg-white border border-slate-200 p-5 rounded-2xl shadow-xs">
          <span class="text-slate-400 text-[10px] font-bold uppercase tracking-wider block mb-1">Total B.Tech Intake</span>
          <span class="text-base sm:text-lg font-black text-blue-600">${totalSeats > 0 ? totalSeats + ' Seats' : (c.quickFacts && c.quickFacts.seats ? c.quickFacts.seats : '240 - 360 Seats')}</span>
        </div>
        <div class="bg-white border border-slate-200 p-5 rounded-2xl shadow-xs">
          <span class="text-slate-400 text-[10px] font-bold uppercase tracking-wider block mb-1">Hostel Accommodation</span>
          <span class="text-base sm:text-lg font-black text-emerald-600">${c.quickFacts && c.quickFacts.hostelAvailable ? c.quickFacts.hostelAvailable : 'Available (Boys & Girls)'}</span>
        </div>
        <div class="bg-white border border-slate-200 p-5 rounded-2xl shadow-xs">
          <span class="text-slate-400 text-[10px] font-bold uppercase tracking-wider block mb-1">Highest Package</span>
          <span class="text-base sm:text-lg font-black text-purple-600">${c.placement && c.placement.highestPackage ? c.placement.highestPackage : '4.5 - 10 LPA'}</span>
        </div>
      </div>

      <!-- Main Overview Content -->
      <div class="bg-white border border-slate-200 rounded-3xl p-8 md:p-10 shadow-sm space-y-10 prose prose-slate max-w-none text-slate-700 text-xs md:text-sm">
        <section>
          <h2 class="text-xl font-black text-slate-900 uppercase tracking-tight mb-4">About ${c.name}</h2>
          <p class="leading-relaxed">${c.description}</p>
          <p class="leading-relaxed mt-3">
            Operating under the academic guidelines of <strong>Bihar Engineering University (BEU Patna)</strong> and approved by the <strong>All India Council for Technical Education (AICTE)</strong>, ${c.shortName} offers four-year Bachelor of Technology (B.Tech) degree programs across core engineering branches. The curriculum follows the standard AICTE Choice Based Credit System (CBCS), integrating theoretical rigor, laboratory experimentation, and industrial internships.
          </p>
        </section>

        <!-- Seat Matrix Section -->
        <section>
          <h3 class="text-lg font-black text-slate-900 uppercase tracking-tight mb-3">Sanctioned B.Tech Branch Seat Matrix</h3>
          <p class="leading-relaxed mb-4">
            Below is the official approved annual intake of students across various engineering disciplines at ${c.shortName}:
          </p>
          <div class="overflow-x-auto not-prose my-4">
            <table class="w-full text-left text-xs border border-slate-200 rounded-2xl overflow-hidden">
              <thead class="bg-slate-100 text-slate-900 font-black uppercase text-[11px] border-b border-slate-200">
                <tr>
                  <th class="p-3 border-r border-slate-200">Engineering Branch</th>
                  <th class="p-3 text-right">Sanctioned Intake (Seats)</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 text-slate-700">
                ${seatMatrixRows || '<tr><td class="p-3">Computer Science, Civil, Mechanical, Electrical</td><td class="p-3 text-right font-bold">60 Seats each</td></tr>'}
                <tr class="bg-slate-50 font-black text-slate-900 border-t border-slate-200">
                  <td class="p-3 border-r border-slate-200 uppercase">Total Sanctioned Capacity</td>
                  <td class="p-3 text-right text-blue-700">${totalSeats > 0 ? totalSeats : '240 - 360'} Seats</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <!-- Fee Structure Section -->
        <section>
          <h3 class="text-lg font-black text-slate-900 uppercase tracking-tight mb-3">Annual Subsidized Fee Structure</h3>
          <p class="leading-relaxed mb-4">
            As a premier state government institution under the Department of Science, Technology and Technical Education (DSTTE), Bihar, the academic fee structure is highly subsidized:
          </p>
          <div class="overflow-x-auto not-prose my-4">
            <table class="w-full text-left text-xs border border-slate-200 rounded-2xl overflow-hidden">
              <thead class="bg-slate-100 text-slate-900 font-black uppercase text-[11px] border-b border-slate-200">
                <tr>
                  <th class="p-3 border-r border-slate-200">Fee Component</th>
                  <th class="p-3">Amount / Frequency</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 text-slate-700">
                <tr class="hover:bg-slate-50">
                  <td class="p-3 font-semibold border-r border-slate-200">Tuition Fee</td>
                  <td class="p-3 font-mono">${c.feeStructure ? c.feeStructure.tuitionFee : '₹120 / Year (₹10 / Month)'}</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-3 font-semibold border-r border-slate-200">Admission & Registration Fee</td>
                  <td class="p-3 font-mono">${c.feeStructure ? c.feeStructure.admissionFee : '₹2,500 (One-Time)'}</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-3 font-semibold border-r border-slate-200">University Exam Fee</td>
                  <td class="p-3 font-mono">${c.feeStructure ? c.feeStructure.examFee : '₹3,700 / Semester (BEU)'}</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-3 font-semibold border-r border-slate-200">Hostel Rent (Room Fee)</td>
                  <td class="p-3 font-mono">${c.feeStructure ? c.feeStructure.hostelFee : '₹2,400 / Year'}</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-3 font-semibold border-r border-slate-200">Mess Charges (Food)</td>
                  <td class="p-3 font-mono">${c.feeStructure ? c.feeStructure.messCharges : '₹3,000 - ₹3,500 / Month (Cooperative)'}</td>
                </tr>
                <tr class="bg-blue-50/50 font-bold text-slate-900">
                  <td class="p-3 border-r border-slate-200">Estimated Annual Day Scholar Cost</td>
                  <td class="p-3 font-mono text-blue-700">${c.feeStructure ? c.feeStructure.totalDayScholar : '₹10,000 - ₹12,000 / Year'}</td>
                </tr>
                <tr class="bg-blue-50/70 font-bold text-slate-900">
                  <td class="p-3 border-r border-slate-200">Estimated Annual Hosteller Cost</td>
                  <td class="p-3 font-mono text-blue-700">${c.feeStructure ? c.feeStructure.totalHosteller : '₹45,000 - ₹50,000 / Year (Inc. Mess)'}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p class="text-xs text-slate-500 mt-2">
            <em>Note: Eligible students can finance their entire academic expenses under the Bihar Student Credit Card (MNSSBY) scheme with zero interest for girls/SC/ST/PwD and 4% for boys.</em>
          </p>
        </section>

        <!-- Training & Placement Overview -->
        <section>
          <h3 class="text-lg font-black text-slate-900 uppercase tracking-tight mb-3">Training & Placement Cell (TPO)</h3>
          <p class="leading-relaxed mb-4">
            The active Training and Placement Cell at ${c.shortName} facilitates campus recruitment, technical training, industrial visits, and internship opportunities:
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 not-prose mb-4">
            <div class="p-4 bg-slate-50 border border-slate-200 rounded-2xl text-center">
              <span class="text-slate-400 text-[10px] font-bold uppercase block mb-1">Highest Package</span>
              <span class="text-lg font-black text-blue-600">${c.placement ? c.placement.highestPackage : '6.5 LPA'}</span>
            </div>
            <div class="p-4 bg-slate-50 border border-slate-200 rounded-2xl text-center">
              <span class="text-slate-400 text-[10px] font-bold uppercase block mb-1">Average Package</span>
              <span class="text-lg font-black text-slate-900">${c.placement ? c.placement.averagePackage : '3.6 LPA'}</span>
            </div>
            <div class="p-4 bg-slate-50 border border-slate-200 rounded-2xl text-center">
              <span class="text-slate-400 text-[10px] font-bold uppercase block mb-1">Placement Percentage</span>
              <span class="text-lg font-black text-emerald-600">${c.placement ? c.placement.percentage : '65% - 75%'}</span>
            </div>
          </div>
          <h4 class="text-xs font-black uppercase text-slate-900 mb-2">Major Visiting & Off-Campus Recruiters:</h4>
          <div class="flex flex-wrap gap-2 not-prose">
            ${recruitersHtml}
          </div>
        </section>

        <!-- Admission & Documents Checklist -->
        <section>
          <h3 class="text-lg font-black text-slate-900 uppercase tracking-tight mb-3">Admission Process & Required Verification Documents</h3>
          <p class="leading-relaxed mb-3">
            Admissions to B.Tech programs at ${c.shortName} are conducted strictly through <strong>BCECEB UGEAC</strong> based on NTA JEE Main scores. Candidates must qualify 10+2 with Physics, Mathematics, and Chemistry with at least 45% marks (40% for reserved categories).
          </p>
          <h4 class="text-xs font-black uppercase text-slate-900 mb-2">Mandatory Documents Required for Physical Reporting:</h4>
          <ul class="space-y-1.5 text-xs text-slate-700 not-prose mb-4">
            ${documentsHtml}
          </ul>
        </section>

        <!-- Campus Facilities -->
        <section>
          <h3 class="text-lg font-black text-slate-900 uppercase tracking-tight mb-3">Campus Infrastructure & Facilities</h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 not-prose">
            ${facilitiesHtml || '<div class="p-3 bg-slate-50 rounded-2xl text-xs">Modern Computer Lab, Central Library, Hostels, Wi-Fi, Sports Ground</div>'}
          </div>
        </section>

        <!-- Contact Information -->
        <section>
          <h3 class="text-lg font-black text-slate-900 uppercase tracking-tight mb-3">Institutional Contact & Principal's Desk</h3>
          ${c.principal && c.principal.name ? `
            <blockquote class="p-4 bg-slate-50 border-l-4 border-blue-600 rounded-r-2xl not-prose mb-4">
              <p class="text-xs italic text-slate-700">"${c.principal.message || 'Committed to fostering engineering excellence and research innovation.'}"</p>
              <div class="text-[11px] font-bold text-slate-900 mt-2">— ${c.principal.name}, ${c.principal.designation || 'Principal'}</div>
            </blockquote>
          ` : ''}
          <div class="p-5 bg-slate-50 border border-slate-200 rounded-2xl not-prose space-y-2 text-xs">
            <p><strong>Official Address:</strong> ${c.contact && c.contact.address ? c.contact.address : c.location}</p>
            <p><strong>District & Pincode:</strong> ${c.district} — ${c.contact && c.contact.pincode ? c.contact.pincode : 'Bihar'}</p>
            <p><strong>Official Website:</strong> <a href="${c.website}" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-bold">${c.website}</a></p>
            ${c.contact && c.contact.phones ? `<p><strong>Helpline Phone:</strong> ${c.contact.phones.join(', ')}</p>` : ''}
            ${c.contact && c.contact.emails ? `<p><strong>Official Email:</strong> ${c.contact.emails.join(', ')}</p>` : ''}
          </div>
        </section>

        <!-- Study Resources Cross-Links for this College -->
        <div class="pt-6 border-t border-slate-100 flex flex-wrap gap-4 not-prose">
          <a href="/notes" class="px-5 py-3 bg-blue-600 text-white rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-blue-700 transition-colors shadow-sm">BEU Semester Notes</a>
          <a href="/pyq" class="px-5 py-3 bg-slate-100 text-slate-800 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-slate-200 transition-colors">Download PYQs</a>
          <a href="/ugeac-predictor" class="px-5 py-3 bg-purple-600 text-white rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-purple-700 transition-colors shadow-sm">Check UGEAC Cutoffs</a>
          <a href="/cgpa" class="px-5 py-3 bg-rose-600 text-white rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-rose-700 transition-colors shadow-sm">BEU CGPA Calculator</a>
        </div>
      </div>
    </main>

    ${footerHtml}
  </div>
  `;

  let collegeHtml = injectIntoRoot(baseTemplate, collegeDetailBody);
  collegeHtml = injectHeadMetadata(collegeHtml, {
    title: `${c.name} (${c.shortName}) - Cutoff, Admission, Fees & Details | Apna College Bihar`,
    description: `Official details, UGEAC closing cutoffs, B.Tech seat matrix, annual fees, placement report, and admission rules for ${c.name} (${c.shortName}) under Bihar Engineering University.`,
    canonical: canonicalCollegeUrl,
    schemaJson: {
      "@context": "https://schema.org",
      "@type": "CollegeOrUniversity",
      "name": c.name,
      "url": canonicalCollegeUrl,
      "logo": c.logo,
      "description": c.description,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": c.district,
        "addressRegion": "Bihar",
        "addressCountry": "IN"
      }
    }
  });

  writeStaticHtml(`college/${slug}`, collegeHtml);
});

// ─────────────────────────────────────────────────────────────
// 24. ENRICH HOMEPAGE (client/dist/index.html)
// ─────────────────────────────────────────────────────────────
console.log('[SSG] Enriching Homepage root with comprehensive semantic content...');

const latestHomePostsHtml = blogPosts.slice(0, 6).map(p => `
  <a href="/blog/${p.slug}" class="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:border-blue-500 hover:shadow-md transition-all block group">
    <div class="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-1">Guide • ${new Date(p.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}</div>
    <h4 class="font-bold text-slate-900 text-sm group-hover:text-blue-600 transition-colors line-clamp-2 mb-2">${p.title}</h4>
    <p class="text-xs text-slate-500 line-clamp-2">${p.excerpt}</p>
  </a>
`).join('');

const homeStaticBody = `
<div class="min-h-screen bg-slate-50 font-['Inter'] flex flex-col justify-between">
  ${navHeaderHtml}

  <main class="flex-grow">
    <!-- Hero Section -->
    <section class="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24 border-b border-slate-200 text-center px-4">
      <div class="max-w-4xl mx-auto space-y-6">
        <span class="px-4 py-1.5 bg-blue-100 text-blue-800 text-xs font-black uppercase tracking-widest rounded-full inline-block">Official Study Engine for BEU</span>
        <h1 class="text-3xl sm:text-5xl md:text-6xl font-[1000] text-slate-900 tracking-tight leading-tight uppercase">
          Bihar's Premier Engineering Study Platform
        </h1>
        <p class="text-slate-600 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
          Free semester notes, 5+ years previous year question papers (PYQs), official BEU syllabus, UGEAC college predictor, and CGPA calculators for all 38 Government Engineering Colleges in Bihar.
        </p>
        <div class="flex flex-wrap items-center justify-center gap-4 pt-4">
          <a href="/notes" class="px-6 py-3.5 bg-blue-600 text-white rounded-2xl text-xs font-black uppercase tracking-wider hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20">Explore BEU Notes</a>
          <a href="/pyq" class="px-6 py-3.5 bg-white border border-slate-200 text-slate-800 rounded-2xl text-xs font-black uppercase tracking-wider hover:bg-slate-50 transition-all shadow-sm">Download PYQs</a>
          <a href="/blog" class="px-6 py-3.5 bg-slate-900 text-white rounded-2xl text-xs font-black uppercase tracking-wider hover:bg-slate-800 transition-all shadow-sm">Read Blog</a>
        </div>
      </div>
    </section>

    <!-- Core Tools Grid -->
    <section class="max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <div class="text-center max-w-xl mx-auto mb-12">
        <h2 class="text-2xl sm:text-3xl font-[1000] text-slate-900 uppercase tracking-tight mb-2">Essential Engineering Tools</h2>
        <p class="text-xs sm:text-sm text-slate-500 font-bold">Everything you need to excel in semester exams & counselling</p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="bg-white p-6 border border-slate-200 rounded-3xl shadow-sm">
          <div class="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-3">📚</div>
          <h3 class="font-black text-slate-900 text-sm uppercase mb-1">BEU Semester Notes</h3>
          <p class="text-xs text-slate-500 leading-relaxed mb-4">Unit-wise notes covering all branches and semesters formatted strictly per BEU syllabus.</p>
          <a href="/notes" class="text-blue-600 text-xs font-bold hover:underline">Access Notes &rarr;</a>
        </div>

        <div class="bg-white p-6 border border-slate-200 rounded-3xl shadow-sm">
          <div class="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center font-bold mb-3">📝</div>
          <h3 class="font-black text-slate-900 text-sm uppercase mb-1">Previous Year Questions</h3>
          <p class="text-xs text-slate-500 leading-relaxed mb-4">5+ years of solved and unsolved BEU end-semester question papers with answer outlines.</p>
          <a href="/pyq" class="text-indigo-600 text-xs font-bold hover:underline">Download PYQs &rarr;</a>
        </div>

        <div class="bg-white p-6 border border-slate-200 rounded-3xl shadow-sm">
          <div class="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center font-bold mb-3">🎯</div>
          <h3 class="font-black text-slate-900 text-sm uppercase mb-1">UGEAC Predictor</h3>
          <p class="text-xs text-slate-500 leading-relaxed mb-4">Forecast your engineering college in Bihar based on your JEE Main percentile and category.</p>
          <a href="/ugeac-predictor" class="text-emerald-600 text-xs font-bold hover:underline">Predict College &rarr;</a>
        </div>

        <div class="bg-white p-6 border border-slate-200 rounded-3xl shadow-sm">
          <div class="w-10 h-10 bg-rose-50 text-rose-600 rounded-xl flex items-center justify-center font-bold mb-3">🧮</div>
          <h3 class="font-black text-slate-900 text-sm uppercase mb-1">BEU CGPA Calculator</h3>
          <p class="text-xs text-slate-500 leading-relaxed mb-4">Calculate your semester SGPA and cumulative CGPA using official university grade point formulas.</p>
          <a href="/cgpa" class="text-rose-600 text-xs font-bold hover:underline">Calculate CGPA &rarr;</a>
        </div>
      </div>
    </section>

    <!-- Latest Articles Preview -->
    <section class="bg-white py-16 border-t border-slate-200">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="flex items-center justify-between mb-8">
          <div>
            <h2 class="text-xl sm:text-2xl font-[1000] text-slate-900 uppercase tracking-tight">Latest Academic Articles & Guides</h2>
            <p class="text-xs text-slate-500 font-bold">Expert advice from BEU alumni & educators</p>
          </div>
          <a href="/blog" class="text-xs font-black text-blue-600 uppercase tracking-wider hover:underline">View All &rarr;</a>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          ${latestHomePostsHtml}
        </div>
      </div>
    </section>

    <!-- Comprehensive In-Depth Text (AdSense High Value Signal) -->
    <section class="max-w-4xl mx-auto px-4 sm:px-6 py-16">
      <div class="bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-12 prose prose-slate max-w-none text-slate-700 text-xs md:text-sm space-y-8">
        <div>
          <h2 class="text-2xl font-black text-slate-900 uppercase mb-4 tracking-tight">Why Apna College Bihar is the #1 Study Hub for BEU Students</h2>
          <p class="leading-relaxed">
            Technical education in Bihar has entered an era of rapid modernization following the establishment of the <strong>Bihar Engineering University (BEU)</strong>. Spanning 38 Government Engineering Colleges (GECs), thousands of engineering aspirants enroll every academic session to build rewarding careers in computer software, structural infrastructure, electrical power, and mechanical engineering.
          </p>
          <p class="leading-relaxed">
            However, navigating university end-semester examinations, scoring above an 8.5 CGPA, and preparing for competitive campus recruitment drives requires structured, authoritative resources. <strong>Apna College Bihar (apnacollegebihar.online)</strong> was engineered by BEU alumni and senior student mentors to solve these foundational academic pain points by providing free, verified semester notes, question paper solutions, syllabus tracking, and admission tools.
          </p>
        </div>

        <div>
          <h3 class="text-xl font-black text-slate-900 uppercase mb-3">Bihar Engineering University (BEU) Examination & Grading Architecture</h3>
          <p class="leading-relaxed mb-3">
            Understanding the university grading scheme is vital to achieving a top academic record. BEU operates under the standardized <strong>Choice Based Credit System (CBCS)</strong>:
          </p>
          <ul class="list-disc pl-5 space-y-2 font-medium">
            <li><strong>70/30 Examination Distribution:</strong> Every theory subject carries 100 marks, divided into 70 marks for the centralized End-Semester University Examination and 30 marks for Internal Continuous Assessment (Attendance, Mid-Sem, and Lab Viva).</li>
            <li><strong>Passing Thresholds:</strong> A student must secure a minimum of <strong>35% marks (25 out of 70)</strong> in the external theory exam AND an aggregate of <strong>40% overall</strong> (Internal + External combined) to pass the subject.</li>
            <li><strong>The 75% Attendance Ordinance:</strong> BEU Academic Ordinance Regulation 6.1 strictly mandates a minimum of 75% class attendance. Shortfall up to 10% may be condoned by the college Principal solely on certified medical grounds.</li>
            <li><strong>Grade Points Scale:</strong> University results are awarded on a 10-point scale: 'O' (Outstanding, 10 GP), 'A+' (Excellent, 9 GP), 'A' (Very Good, 8 GP), 'B+' (Good, 7 GP), 'B' (Above Average, 6 GP), 'C' (Average, 5 GP), 'P' (Pass, 4 GP), and 'F' (Fail, 0 GP).</li>
          </ul>
        </div>

        <div>
          <h3 class="text-xl font-black text-slate-900 uppercase mb-3">B.Tech Engineering Branch Curriculum & Syllabus Roadmaps</h3>
          <p class="leading-relaxed mb-3">
            Apna College Bihar provides comprehensive unit-by-unit syllabus guides and lecture notes mapped directly to BEU course curricula across all major engineering disciplines:
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose my-4">
            <div class="p-4 bg-white border border-slate-200 rounded-2xl shadow-xs">
              <h4 class="font-black text-slate-900 text-xs uppercase mb-1">💻 Computer Science & IT</h4>
              <p class="text-[11px] text-slate-500 leading-relaxed">Data Structures & Algorithms, Operating Systems, Database Management Systems (DBMS), Computer Networks, and Object-Oriented Programming (Java/C++).</p>
            </div>
            <div class="p-4 bg-white border border-slate-200 rounded-2xl shadow-xs">
              <h4 class="font-black text-slate-900 text-xs uppercase mb-1">🏗️ Civil Engineering</h4>
              <p class="text-[11px] text-slate-500 leading-relaxed">Mechanics of Solids, Fluid Mechanics, Structural Analysis, Surveying, Geotechnical Engineering, and Reinforced Cement Concrete (RCC) Design.</p>
            </div>
            <div class="p-4 bg-white border border-slate-200 rounded-2xl shadow-xs">
              <h4 class="font-black text-slate-900 text-xs uppercase mb-1">⚙️ Mechanical Engineering</h4>
              <p class="text-[11px] text-slate-500 leading-relaxed">Engineering Thermodynamics, Fluid Machines, Heat & Mass Transfer, Theory of Machines (TOM), Kinematics, and Manufacturing Technology.</p>
            </div>
            <div class="p-4 bg-white border border-slate-200 rounded-2xl shadow-xs">
              <h4 class="font-black text-slate-900 text-xs uppercase mb-1">⚡ Electrical & Electronics</h4>
              <p class="text-[11px] text-slate-500 leading-relaxed">Circuit Analysis, Electrical Machines (Transformers & Motors), Power Systems, Control Systems, Analog Circuits, and Microprocessors.</p>
            </div>
          </div>
        </div>

        <div>
          <h3 class="text-xl font-black text-slate-900 uppercase mb-3">BCECEB UGEAC Counselling & Admission Overview</h3>
          <p class="leading-relaxed">
            Admissions to first-year B.Tech degree programs across all 38 Government Engineering Colleges in Bihar are conducted centrally through <strong>BCECEB UGEAC (Undergraduate Engineering Admission Counselling)</strong>. Eligibility is determined exclusively by the National Testing Agency (NTA) JEE Main All India Rank.
          </p>
          <p class="leading-relaxed mt-2">
            State reservations adhere strictly to Bihar government norms: 40% Unreserved (UR), 10% EWS, 12% BC, 18% EBC, 16% SC, 1% ST, and 3% Reserved Category Girls (RCG), along with 5% horizontal reservation for Disabled Quota (DQ) candidates. Use the <a href="/ugeac-predictor" class="text-blue-600 font-bold hover:underline">Apna College Bihar UGEAC Predictor</a> to check previous year category closing cutoffs.
          </p>
        </div>

        <div>
          <h3 class="text-xl font-black text-slate-900 uppercase mb-4">Frequently Asked Questions (FAQs)</h3>
          <div class="space-y-4 not-prose">
            <div class="p-5 bg-white border border-slate-200 rounded-2xl">
              <h4 class="font-black text-slate-900 text-xs uppercase mb-2">Q1: How can I score above a 9.0 CGPA in BEU Semester Examinations?</h4>
              <p class="text-xs text-slate-600 leading-relaxed">To achieve a 9+ CGPA, focus on three pillars: First, systematically practice 5 years of Previous Year Questions (PYQs) from the ACB portal, as 60% of core concepts repeat. Second, illustrate all theoretical answers with neat pencil diagrams, block schematics, and boxed numerical solutions. Third, score at least 26/30 in internal assessments by maintaining 75%+ attendance and submitting practical records on time.</p>
            </div>
            <div class="p-5 bg-white border border-slate-200 rounded-2xl">
              <h4 class="font-black text-slate-900 text-xs uppercase mb-2">Q2: What is the official passing marks criteria in BEU examinations?</h4>
              <p class="text-xs text-slate-600 leading-relaxed">Under BEU regulations, you must score at least 25 out of 70 marks in the external theory exam AND achieve at least 40 marks combined with internal continuous evaluation to pass a subject. Scoring below 25 in externals results in an 'F' grade (backlog) regardless of internal marks.</p>
            </div>
            <div class="p-5 bg-white border border-slate-200 rounded-2xl">
              <h4 class="font-black text-slate-900 text-xs uppercase mb-2">Q3: Can I get admission to Bihar government engineering colleges without JEE Main?</h4>
              <p class="text-xs text-slate-600 leading-relaxed">No. Under current BCECEB regulations, admission to government B.Tech programs in Bihar requires a valid NTA JEE Main scorecard. BCECEB conducts centralized UGEAC counselling strictly based on JEE Main ranks.</p>
            </div>
            <div class="p-5 bg-white border border-slate-200 rounded-2xl">
              <h4 class="font-black text-slate-900 text-xs uppercase mb-2">Q4: How do I convert BEU CGPA into percentage?</h4>
              <p class="text-xs text-slate-600 leading-relaxed">According to standard AICTE and university guidelines, the standard conversion formula is: Percentage = (CGPA - 0.75) × 10. For certain recruitment drives (such as TCS, Wipro, Infosys), direct multiplication by 9.5 or 10 may be accepted. Use our official BEU CGPA Calculator to verify your scores.</p>
            </div>
            <div class="p-5 bg-white border border-slate-200 rounded-2xl">
              <h4 class="font-black text-slate-900 text-xs uppercase mb-2">Q5: What are the top government engineering colleges under BEU?</h4>
              <p class="text-xs text-slate-600 leading-relaxed">The premier government engineering colleges in Bihar include Muzaffarpur Institute of Technology (MIT Muzaffarpur, Estd. 1954), Bhagalpur College of Engineering (BCE Bhagalpur, Estd. 1960), Gaya College of Engineering (GCE Gaya), Darbhanga College of Engineering (DCE Darbhanga), and Bakhtiyarpur College of Engineering (BCE Patna).</p>
            </div>
            <div class="p-5 bg-white border border-slate-200 rounded-2xl">
              <h4 class="font-black text-slate-900 text-xs uppercase mb-2">Q6: Are BEU notes and PYQs on Apna College Bihar completely free?</h4>
              <p class="text-xs text-slate-600 leading-relaxed">Yes. All semester notes, official syllabuses, question papers, and educational calculators on Apna College Bihar are 100% free and accessible for all students without any subscription fees or paywalls.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  ${footerHtml}
</div>
`;

// Update dist/index.html with the rich semantic home body inside root
let enrichedHomeHtml = injectIntoRoot(baseTemplate, homeStaticBody);
enrichedHomeHtml = injectHeadMetadata(enrichedHomeHtml, {
  title: "Apna College Bihar - Official Engineering Hub for BEU Notes, PYQs & Cutoffs",
  description: "Official study engine for Bihar engineering students. Free BEU Notes, PYQs, Syllabus, UGEAC Predictor, CGPA Calculator and counselling guidance for 38+ engineering colleges.",
  canonical: "https://www.apnacollegebihar.online/",
  schemaJson: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.apnacollegebihar.online/#website",
        "url": "https://www.apnacollegebihar.online/",
        "name": "Apna College Bihar",
        "description": "Official hub for Bihar engineering students. Free BEU Notes, PYQs, Syllabus, UGEAC Predictor, CGPA Calculator and counselling guidance.",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://www.apnacollegebihar.online/notes?search={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "EducationalOrganization",
        "@id": "https://www.apnacollegebihar.online/#organization",
        "name": "Apna College Bihar",
        "url": "https://www.apnacollegebihar.online/",
        "logo": "https://www.apnacollegebihar.online/logo-acb.png",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Patna",
          "addressRegion": "Bihar",
          "postalCode": "800001",
          "addressCountry": "IN"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "Customer Support",
          "email": "prince86944@gmail.com"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.apnacollegebihar.online/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How can I score above a 9.0 CGPA in BEU Semester Examinations?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "To achieve a 9+ CGPA, focus on three pillars: First, systematically practice 5 years of Previous Year Questions (PYQs) from the ACB portal, as 60% of core concepts repeat. Second, illustrate all theoretical answers with neat pencil diagrams, block schematics, and boxed numerical solutions. Third, score at least 26/30 in internal assessments by maintaining 75%+ attendance and submitting practical records on time."
            }
          },
          {
            "@type": "Question",
            "name": "What is the official passing marks criteria in BEU examinations?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Under BEU regulations, you must score at least 25 out of 70 marks in the external theory exam AND achieve at least 40 marks combined with internal continuous evaluation to pass a subject. Scoring below 25 in externals results in an 'F' grade (backlog) regardless of internal marks."
            }
          },
          {
            "@type": "Question",
            "name": "Can I get admission to Bihar government engineering colleges without JEE Main?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Under current BCECEB regulations, admission to government B.Tech programs in Bihar requires a valid NTA JEE Main scorecard. BCECEB conducts centralized UGEAC counselling strictly based on JEE Main ranks."
            }
          },
          {
            "@type": "Question",
            "name": "How do I convert BEU CGPA into percentage?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "According to standard AICTE and university guidelines, the standard conversion formula is: Percentage = (CGPA - 0.75) × 10. For certain recruitment drives, direct multiplication by 9.5 or 10 may be accepted. Use our official BEU CGPA Calculator to verify your scores."
            }
          },
          {
            "@type": "Question",
            "name": "What are the top government engineering colleges under BEU?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The premier government engineering colleges in Bihar include Muzaffarpur Institute of Technology (MIT Muzaffarpur, Estd. 1954), Bhagalpur College of Engineering (BCE Bhagalpur, Estd. 1960), Gaya College of Engineering (GCE Gaya), Darbhanga College of Engineering (DCE Darbhanga), and Bakhtiyarpur College of Engineering (BCE Patna)."
            }
          },
          {
            "@type": "Question",
            "name": "Are BEU notes and PYQs on Apna College Bihar completely free?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. All semester notes, official syllabuses, question papers, and educational calculators on Apna College Bihar are 100% free and accessible for all students without any subscription fees or paywalls."
            }
          }
        ]
      }
    ]
  }
});

fs.writeFileSync(templatePath, enrichedHomeHtml, 'utf8');
console.log('[SSG] Successfully enriched dist/index.html with static homepage content!');

console.log('[SSG] All static pages generated successfully!');
