#!/usr/bin/env python3
import sys

file_path = r'c:\Apna College Bihar.worktrees\copilot-worktree-2026-06-09T07-53-51\client\src\pages\Home.jsx'

with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

result = []
skip_until = -1
i = 0

while i < len(lines):
    line = lines[i]
    
    # Check if this is the line with featureCategories.map((category, index)
    if 'featureCategories.map((category, index)' in line:
        # Add the new simplified navbar
        result.append('            {featureCategories.map((category) => (\n')
        result.append('              <Link\n')
        result.append('                key={category.title}\n')
        result.append('                to="#features"\n')
        result.append('                className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors"\n')
        result.append('              >\n')
        result.append('                {category.title}\n')
        result.append('              </Link>\n')
        result.append('            ))}\n')
        
        # Skip all lines until we find the About link
        while i < len(lines) and '<Link to="/about"' not in lines[i]:
            i += 1
        # Back up one since the loop will increment
        i -= 1
    else:
        result.append(line)
    
    i += 1

with open(file_path, 'w', encoding='utf-8') as f:
    f.writelines(result)

print('✓ Navbar successfully simplified!')
sys.exit(0)
