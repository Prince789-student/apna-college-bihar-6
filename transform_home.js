const fs = require('fs');

const inputPath = 'c:\\Apna College Bihar.worktrees\\copilot-worktree-2026-06-09T07-53-51\\client\\src\\pages\\Home.jsx';
const outputPath = 'c:\\Apna College Bihar.worktrees\\copilot-worktree-2026-06-09T07-53-51\\client\\src\\pages\\Home_new.jsx';

let content = fs.readFileSync(inputPath, 'utf-8');

// Split by lines for easier manipulation
let lines = content.split('\n');

// Find and reconstruct the section
let newLines = [];
let inFeatureMap = false;
let braceDepth = 0;
let mapStartIndex = -1;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  
  // Find the start of the feature map
  if (line.includes('{featureCategories.map((category, index)') && !inFeatureMap) {
    inFeatureMap = true;
    mapStartIndex = i;
    newLines.push('            {featureCategories.map((category) => (');
    continue;
  }
  
  if (inFeatureMap) {
    // Count braces to find where the map ends
    braceDepth += (line.match(/\(/g) || []).length - (line.match(/\)/g) || []).length;
    
    // Skip the old feature dropdown code
    if (line.includes('<div') && line.includes('className="relative"')) {
      // Start of the section to replace - output the new Link instead
      newLines.push('              <Link');
      newLines.push('                key={category.title}');
      newLines.push('                to="#features"');
      newLines.push('                className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors"');
      newLines.push('              >');
      newLines.push('                {category.title}');
      newLines.push('              </Link>');
      
      // Skip ahead to find the closing </div>
      let j = i;
      let divCount = 1;
      while (j < lines.length && divCount > 0) {
        j++;
        if (lines[j].includes('<div')) divCount++;
        if (lines[j].includes('</div>')) divCount--;
      }
      i = j;
      continue;
    }
    
    // Check if map is ending
    if (line.includes('))}')) {
      inFeatureMap = false;
      newLines.push('            ))}');
      continue;
    }
    
    // Check for About and Contact links (they should be kept)
    if (line.includes('<Link to="/about"') || line.includes('<Link to="/contact"')) {
      newLines.push(line);
      continue;
    }
    
    // Skip other lines during feature map processing
    if (inFeatureMap && line.trim() && !line.includes('<Link to="/about"') && !line.includes('<Link to="/contact"')) {
      continue;
    }
  }
  
  if (!inFeatureMap || (line.includes('<Link to="/about"') || line.includes('<Link to="/contact"'))) {
    newLines.push(line);
  }
}

fs.writeFileSync(outputPath, newLines.join('\n'), 'utf-8');
console.log('✓ Created new Home.jsx with simplified navbar');
console.log(`Written to: ${outputPath}`);
