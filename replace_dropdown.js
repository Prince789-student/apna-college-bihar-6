const fs = require('fs');
const filePath = 'c:\\Apna College Bihar.worktrees\\copilot-worktree-2026-06-09T07-53-51\\client\\src\\pages\\Home.jsx';

let content = fs.readFileSync(filePath, 'utf-8');

// Simple string replacements for the feature dropdown
// Step 1: Remove the setState for activeFeatureIndex in the feature map
content = content.replace(
  /onMouseEnter=\{\(\) => setActiveFeatureIndex\(index\)\}\s+onMouseLeave=\{\(\) => setActiveFeatureIndex\(null\)\}\s+/g,
  ''
);

// Step 2: Replace button with Link
content = content.replace(
  /<button\s+type="button"\s+onClick=\{\(\) => setActiveFeatureIndex\(activeFeatureIndex === index \? null : index\)\}\s+className="flex items-center gap-1\.5 text-\[10px\] font-black uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors"\s+>\s+{category\.title}\s+<ChevronDown size=\{12\} className=\{`transition-transform \$\{activeFeatureIndex === index \? 'rotate-180' : ''\`\} \/>\s+<\/button>/,
  '<Link\n                  to="#features"\n                  className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors"\n                >\n                  {category.title}\n                </Link>'
);

// Step 3: Remove the dropdown menu that displays when activeFeatureIndex === index
content = content.replace(
  /\{activeFeatureIndex === index && \([\s\S]*?\)\}/,
  ''
);

// Step 4: Remove the wrapping <div className="relative">  </div>
content = content.replace(
  /<div\s+key=\{category\.title\}\s+className="relative"\s+>\s+([\s\S]*?)\s+<\/div>/g,
  '$1'
);

fs.writeFileSync(filePath, content, 'utf-8');
console.log('✓ Feature dropdown replaced with simple links');
