import re
import sys

file_path = r'c:\Apna College Bihar.worktrees\copilot-worktree-2026-06-09T07-53-51\client\src\pages\Home.jsx'

try:
    # Read the file
    with open(file_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    # Find the section to replace
    start_idx = None
    end_idx = None
    
    for i, line in enumerate(lines):
        if '<div' in line and 'key={category.title}' in line and 'relative' in line:
            start_idx = i
        if start_idx is not None and '</div>' in line and i > start_idx + 20:
            # Make sure this is the closing div we want
            if 'className="relative"' in ''.join(lines[start_idx:i]):
                end_idx = i + 1
                break
    
    if start_idx is not None and end_idx is not None:
        print(f"Found section from line {start_idx+1} to {end_idx}")
        
        # Create replacement lines
        replacement = [
            '              <Link\\n',
            '                key={category.title}\\n',
            '                to="#features"\\n',
            '                className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors"\\n',
            '              >\\n',
            '                {category.title}\\n',
            '              </Link>\\n'
        ]
        
        # Replace the section
        new_lines = lines[:start_idx] + replacement + lines[end_idx:]
        
        # Write back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.writelines(new_lines)
        
        print("✓ Successfully removed feature dropdown and replaced with simple links")
        sys.exit(0)
    else:
        print("✗ Could not find the feature dropdown section")
        sys.exit(1)
        
except Exception as e:
    print(f"✗ Error: {e}")
    sys.exit(1)
