#!/usr/bin/env python3
import subprocess
import sys
import os

os.chdir(r'c:\Apna College Bihar.worktrees\copilot-worktree-2026-06-09T07-53-51')

try:
    result = subprocess.run(['node', 'final_fix.js'], capture_output=True, text=True)
    print(result.stdout)
    if result.stderr:
        print("STDERR:", result.stderr, file=sys.stderr)
    sys.exit(result.returncode)
except Exception as e:
    print(f"Error: {e}", file=sys.stderr)
    sys.exit(1)
