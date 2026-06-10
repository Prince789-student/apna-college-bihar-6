const fs = require('fs');
const file = 'c:/Apna College Bihar/client/src/pages/BeuSyllabus.jsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Add regex to strip ": 6 hrs " or "6 hrs " from start of lines
content = content.replace(/const text = tr\.replace\(\/\\\*\\\*\/g, ''\)\.trim\(\);/g, `let text = tr.replace(/\\*\\*/g, '').trim();
          text = text.replace(/^:?\\s*\\d+\\s*(?:hrs?|hours?)\\s*/i, '').trim();`);

// 2. Fix TopicRow YouTube button to open in new tab instead of iframe
const ytReplacement = `          <a
            href={\`https://www.youtube.com/results?search_query=\${ytQuery}\`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-2.5 py-1.5 md:px-2 md:py-1 bg-red-50 hover:bg-red-600 text-red-600 hover:text-white rounded-xl md:rounded-lg text-[10px] md:text-[9px] font-black uppercase tracking-wide transition-all active:scale-95 shadow-sm"
          >
            <svg viewBox="0 0 24 24" width="11" height="11" fill="currentColor"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
            YouTube
          </a>`;

// Find the button and replace it
content = content.replace(/<button\s+onClick=\{\(\) => setShowVideo\(!showVideo\)\}[\s\S]*?<\/button>/, ytReplacement);

// Remove the iframe code completely
content = content.replace(/\{showVideo && \([\s\S]*?<\/div>\s*\)\}/, '');

fs.writeFileSync(file, content);
console.log('Fixed youtube and hrs prefix.');
