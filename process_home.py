#!/usr/bin/env python3
"""
Complete Home.jsx file replacement with simplified navbar
"""
import sys

input_path = r'c:\Apna College Bihar.worktrees\copilot-worktree-2026-06-09T07-53-51\client\src\pages\Home.jsx'

# Read the entire file
with open(input_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Find the navbar section start and end
nav_start = content.find('featureCategories.map((category, index)')
if nav_start == -1:
    print("ERROR: Could not find navbar section")
    sys.exit(1)

# Find the beginning of this line
line_start = content.rfind('\n', 0, nav_start) + 1

# Find the end - look for the next ))}\n            <Link to="/about"
nav_end = content.find('            <Link to="/about"', nav_start)
if nav_end == -1:
    print("ERROR: Could not find about link")
    sys.exit(1)

# Build the replacement
before = content[:line_start]
after = content[nav_end:]

new_navbar = '''            {featureCategories.map((category) => (
              <Link
                key={category.title}
                to="#features"
                className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors"
              >
                {category.title}
              </Link>
            ))}
'''

new_content = before + new_navbar + after

# Write back
with open(input_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("✓ Successfully simplified navbar!")
print(f"  - Replaced dropdown with simple links to #features")
