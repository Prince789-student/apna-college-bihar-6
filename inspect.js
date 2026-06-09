// Read file and extract section for inspection
const fs = require('fs');
const path = require('path');

const filePath = 'c:\\Apna College Bihar.worktrees\\copilot-worktree-2026-06-09T07-53-51\\client\\src\\pages\\Home.jsx';
const content = fs.readFileSync(filePath, 'utf-8');
const lines = content.split('\n');

// Find and print lines around the feature dropdown
for (let i = 106; i < 125; i++) {
  console.log(`${i+1}: ${lines[i]}`);
}
