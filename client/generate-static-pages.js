import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { blogPosts } from './src/data/blogPosts.js';

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
  if (/<div id="root">[\s\S]*?<\/div>/i.test(template)) {
    return template.replace(/<div id="root">[\s\S]*?<\/div>/i, `<div id="root">\n${bodyContent}\n</div>`);
  }
  return template.replace('<div id="root">', `<div id="root">\n${bodyContent}\n</div>`);
}


// Clean up any conflicting directories so Vercel cleanUrls maps cleanly to flat .html files without directory collision
const conflictingDirs = ['about', 'contact', 'privacy-policy', 'terms', 'disclaimer', 'dmca'];
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

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i].trim();

    if (!line) {
      if (inList) {
        html.push(`</${listType}>`);
        inList = false;
      }
      continue;
    }

    // Headings
    if (line.startsWith('#### ')) {
      if (inList) { html.push(`</${listType}>`); inList = false; }
      html.push(`<h4 class="text-base font-bold text-slate-900 mt-6 mb-2">${formatInline(line.slice(5))}</h4>`);
      continue;
    }
    if (line.startsWith('### ')) {
      if (inList) { html.push(`</${listType}>`); inList = false; }
      html.push(`<h3 class="text-lg md:text-xl font-black text-slate-900 mt-8 mb-3">${formatInline(line.slice(4))}</h3>`);
      continue;
    }
    if (line.startsWith('## ')) {
      if (inList) { html.push(`</${listType}>`); inList = false; }
      html.push(`<h2 class="text-xl md:text-2xl font-black text-slate-900 mt-10 mb-4 border-b border-slate-200 pb-2">${formatInline(line.slice(3))}</h2>`);
      continue;
    }
    if (line.startsWith('# ')) {
      if (inList) { html.push(`</${listType}>`); inList = false; }
      html.push(`<h1 class="text-2xl md:text-3xl font-black text-slate-900 mt-12 mb-4">${formatInline(line.slice(2))}</h1>`);
      continue;
    }

    // Blockquote
    if (line.startsWith('> ')) {
      if (inList) { html.push(`</${listType}>`); inList = false; }
      html.push(`<blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-4 bg-blue-50/50 rounded-r text-slate-700 italic">${formatInline(line.slice(2))}</blockquote>`);
      continue;
    }

    // Unordered list
    if (line.startsWith('* ') || line.startsWith('- ')) {
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
    html.push(`<p class="text-slate-700 leading-relaxed text-sm md:text-base my-4">${formatInline(line)}</p>`);
  }

  if (inList) {
    html.push(`</${listType}>`);
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
      <a href="/apna-college-bihar-v54.apk" download class="px-3.5 py-2 bg-blue-600 text-white rounded-xl text-xs font-black uppercase tracking-wider hover:bg-blue-700 transition-colors shadow-sm">Get App</a>
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

// Helper to replace <head> meta tags
function injectHeadMetadata(html, { title, description, canonical, schemaJson }) {
  let modified = html;
  
  // Replace Title
  if (title) {
    modified = modified.replace(/<title>.*?<\/title>/i, `<title>${title}</title>`);
  }
  
  // Replace Meta Description
  if (description) {
    const descTag = `<meta name="description" content="${description.replace(/"/g, '&quot;')}" />`;
    if (modified.includes('<meta name="description"')) {
      modified = modified.replace(/<meta\s+name="description"\s+content=".*?"\s*\/?>/i, descTag);
    } else {
      modified = modified.replace('</head>', `   ${descTag}\n</head>`);
    }
  }

  // Canonical tag
  if (canonical) {
    const canonTag = `<link rel="canonical" href="${canonical}" />`;
    if (modified.includes('<link rel="canonical"')) {
      modified = modified.replace(/<link\s+rel="canonical"\s+href=".*?"\s*\/?>/i, canonTag);
    } else {
      modified = modified.replace('</head>', `   ${canonTag}\n</head>`);
    }
  }

  // Schema JSON-LD
  if (schemaJson) {
    const schemaTag = `\n   <script type="application/ld+json">${JSON.stringify(schemaJson)}</script>\n`;
    modified = modified.replace('</head>', `${schemaTag}</head>`);
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
  canonical: 'https://www.apnacollegebihar.online/about'
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
  canonical: 'https://www.apnacollegebihar.online/contact'
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
      <h2 class="text-xl font-black text-slate-900 uppercase">1. Introduction</h2>
      <p>
        At <strong>Apna College Bihar</strong>, accessible from https://www.apnacollegebihar.online, one of our main priorities is the privacy of our visitors. This Privacy Policy document outlines the types of information that is collected and recorded by Apna College Bihar and how we use it.
      </p>

      <h2 class="text-xl font-black text-slate-900 uppercase">2. Information We Collect</h2>
      <p>
        When you register for an account or interact with our learning hub, we may collect minimal data necessary to deliver your academic experience:
      </p>
      <ul class="list-disc pl-5 space-y-1">
        <li>Account Information: Name, email address, college, and branch provided via secure Google authentication.</li>
        <li>Academic Progress Data: Saved timetable entries, attendance percentages, and CGPA calculations stored securely in Google Firestore.</li>
        <li>Log Files: Like standard websites, we use log files that capture IP addresses, browser types, Internet Service Providers (ISP), date/time stamps, and referring pages.</li>
      </ul>

      <h2 class="text-xl font-black text-slate-900 uppercase">3. Google AdSense & DoubleClick DART Cookies</h2>
      <p>
        Google is a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to our site and other sites on the internet.
      </p>
      <p>
        Visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL: <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">https://policies.google.com/technologies/ads</a>.
      </p>
      <p>
        Third-party ad servers or ad networks use technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Apna College Bihar. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of advertising campaigns and to personalize the advertising content that you see. Apna College Bihar has no access to or control over these cookies used by third-party advertisers.
      </p>

      <h2 class="text-xl font-black text-slate-900 uppercase">4. Data Security</h2>
      <p>
        We employ industry-standard encryption protocols (HTTPS, TLS 1.3) provided by Google Cloud Infrastructure to protect your personal information against unauthorized access, alteration, or disclosure.
      </p>

      <h2 class="text-xl font-black text-slate-900 uppercase">5. Contact Information</h2>
      <p>
        If you have questions or require more information about our Privacy Policy, please contact us at <a href="mailto:prince86944@gmail.com" class="text-blue-600 underline font-bold">prince86944@gmail.com</a>.
      </p>
    </div>
  </main>

  ${footerHtml}
</div>
`;

let privacyHtml = injectIntoRoot(baseTemplate, privacyBody);
privacyHtml = injectHeadMetadata(privacyHtml, {
  title: 'Privacy Policy | Apna College Bihar',
  description: 'Official Privacy Policy of Apna College Bihar. Learn about our data collection practices, Google AdSense cookie compliance, and user rights.',
  canonical: 'https://www.apnacollegebihar.online/privacy-policy'
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
  canonical: 'https://www.apnacollegebihar.online/terms'
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
  canonical: 'https://www.apnacollegebihar.online/disclaimer'
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
  canonical: 'https://www.apnacollegebihar.online/dmca'
});
writeStaticHtml('dmca', dmcaHtml);

// ─────────────────────────────────────────────────────────────
// 9. ENRICH HOMEPAGE (client/dist/index.html)
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
      <div class="bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-12 prose prose-slate max-w-none text-slate-700 text-xs md:text-sm">
        <h2 class="text-2xl font-black text-slate-900 uppercase mb-4">Why Apna College Bihar is the #1 Study Hub for BEU Students</h2>
        <p>
          Engineering in Bihar has taken significant strides forward with the establishment of <strong>Bihar Engineering University (BEU)</strong>. Spanning 38 Government Engineering Colleges (GECs), thousands of ambitious students enroll every year with dreams of building careers in software engineering, civil infrastructure, robotics, and electrical systems.
        </p>
        <p>
          However, navigating university exams, scoring above an 8.5 CGPA, and preparing for competitive placements requires structured, high-quality resources. <strong>Apna College Bihar</strong> was conceived by BEU alumni to solve these exact pain points.
        </p>
        
        <h3 class="text-lg font-black text-slate-900 mt-6 mb-2">Mastering Semester Exams with Verified PYQs and Notes</h3>
        <p>
          In university examinations, over 60% of question patterns repeat fundamental concepts from past examinations. Our academic team meticulously gathers, organizes, and verifies past question papers across semesters 1 through 8. Coupled with concise, handwritten chapter summaries, students can prepare with laser focus rather than wandering across disjointed online sources.
        </p>

        <h3 class="text-lg font-black text-slate-900 mt-6 mb-2">Transparency and Guidance for UGEAC Aspirants</h3>
        <p>
          For freshers entering through the BCECEB UGEAC counselling process, choosing the right branch and college can be daunting. Our data-backed UGEAC College Predictor maps historical category cutoffs to provide realistic admission chances across MIT Muzaffarpur, BCE Bhagalpur, GCE Gaya, and other institutions.
        </p>
      </div>
    </section>
  </main>

  ${footerHtml}
</div>
`;

// Update dist/index.html with the rich semantic home body inside root
let enrichedHomeHtml = injectIntoRoot(baseTemplate, homeStaticBody);
enrichedHomeHtml = injectHeadMetadata(enrichedHomeHtml, {
  title: "Apna College Bihar - The Ultimate Engineering Study Hub for BEU",
  description: "Official study engine for Bihar engineering students. Free BEU Notes, PYQs, Syllabus, UGEAC Predictor, CGPA Calculator and counselling guidance for 38+ engineering colleges.",
  canonical: "https://www.apnacollegebihar.online/"
});

fs.writeFileSync(templatePath, enrichedHomeHtml, 'utf8');
console.log('[SSG] Successfully enriched dist/index.html with static homepage content!');

console.log('[SSG] All static pages generated successfully!');
