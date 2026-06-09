#!/usr/bin/env python3
"""
Fix Home.jsx by replacing the feature dropdown with simple links.
This script handles the navbar feature dropdown replacement.
"""

import re
import sys

file_path = r'c:\Apna College Bihar.worktrees\copilot-worktree-2026-06-09T07-53-51\client\src\pages\Home.jsx'

try:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Pattern to match the entire feature map section with dropdown
    pattern = r'(\{featureCategories\.map\(\(category, index\) => \(\s*<div\s+key=\{category\.title\}\s+className="relative"\s+onMouseEnter=\{\(\) => setActiveFeatureIndex\(index\)\}\s+onMouseLeave=\{\(\) => setActiveFeatureIndex\(null\)\}\s+>\s+<button[\s\S]*?</div>\s+\)\)\})'
    
    replacement = r'''{featureCategories.map((category) => (
              <Link
                key={category.title}
                to="#features"
                className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors"
              >
                {category.title}
              </Link>
            ))}'''
    
    new_content = re.sub(pattern, replacement, content, flags=re.MULTILINE | re.DOTALL)
    
    if new_content != content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print("✓ Successfully replaced feature dropdown with simple links")
        sys.exit(0)
    else:
        print("⚠ Pattern not found, trying alternative approach...")
        
        # Try a more lenient pattern
        # First, remove mouse handlers
        new_content = re.sub(
            r'onMouseEnter=\{\(\) => setActiveFeatureIndex\(index\)\}\s+onMouseLeave=\{\(\) => setActiveFeatureIndex\(null\)\}\s+',
            '',
            content
        )
        
        # Then replace button with Link
        new_content = re.sub(
            r'<button\s+type="button"\s+onClick=\{\(\) => setActiveFeatureIndex\(activeFeatureIndex === index \? null : index\)\}\s+className="flex items-center gap-1\.5 text-\[10px\] font-black uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors"\s+>\s+\{category\.title\}\s+<ChevronDown[^/]*?/>\s+</button>',
            '<Link to="#features" className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors">\n                  {category.title}\n                </Link>',
            new_content
        )
        
        # Remove the dropdown menu JSX
        new_content = re.sub(
            r'\{activeFeatureIndex === index && \([\s\S]*?\)\}',
            '',
            new_content
        )
        
        # Remove the wrapping div
        new_content = re.sub(
            r'<div\s+key=\{category\.title\}\s+className="relative"\s+>\s+([\s\S]*?)\s+</div>',
            r'\1',
            new_content
        )
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print("✓ Alternative approach applied")
        sys.exit(0)
        
except Exception as e:
    print(f"✗ Error: {str(e)}", file=sys.stderr)
    sys.exit(1)
