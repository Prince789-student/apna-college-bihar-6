#!/usr/bin/env python3
import re

file_path = r'c:\Apna College Bihar.worktrees\copilot-worktree-2026-06-09T07-53-51\client\src\pages\Home.jsx'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Pattern to find and replace the feature dropdown section
pattern = r'<div\s+key=\{category\.title\}\s+className="relative"\s+onMouseEnter=\{\(\) => setActiveFeatureIndex\(index\)\}\s+onMouseLeave=\{\(\) => setActiveFeatureIndex\(null\)\}\s+>\s+<button\s+type="button"\s+onClick=\{\(\) => setActiveFeatureIndex\(activeFeatureIndex === index \? null : index\)\}\s+className="flex items-center gap-1\.5 text-\[10px\] font-black uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors"\s+>\s+\{category\.title\}\s+<ChevronDown size=\{12\} className=\{`transition-transform \$\{activeFeatureIndex === index \? \'rotate-180\' : \'\`\} />\s+</button>\s+\{activeFeatureIndex === index && \(\s+<div className="absolute left-1/2 top-full z-\[2500\] mt-5 w-\[340px\] -translate-x-1/2 rounded-\[2rem\] border border-slate-200 bg-white/95 p-5 shadow-2xl backdrop-blur-xl">[\s\S]*?</div>\s+\)\}\s+</div>'

replacement = '''<Link
                key={category.title}
                to="#features"
                className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors"
              >
                {category.title}
              </Link>'''

new_content = re.sub(pattern, replacement, content)

if new_content != content:
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("✓ Navbar feature dropdown removed and replaced with simple links")
else:
    print("✗ Pattern not found")
