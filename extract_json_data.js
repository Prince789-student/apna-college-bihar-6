const fs = require('fs');
const path = require('path');

// We need to extract the arrays from the JS file
// File content is like: export const cutoffs2024 = [...]; export const cutoffs2025 = [...];
const filePath = path.join(__dirname, 'client/src/real_cutoffs.js');
let content = fs.readFileSync(filePath, 'utf8');

// Use regex to find the arrays
// This is a bit hacky but works for this specific file structure
const extractArray = (varName) => {
  const start = content.indexOf(`export const ${varName} = [`);
  let depth = 0;
  let result = "";
  for (let i = start + `export const ${varName} = `.length; i < content.length; i++) {
    if (content[i] === '[') depth++;
    if (content[i] === ']') depth--;
    result += content[i];
    if (depth === 0) break;
  }
  return JSON.parse(result);
};

const c24 = extractArray('cutoffs2024');
const c25 = extractArray('cutoffs2025');

const output = { cutoffs2024: c24, cutoffs2025: c25 };
fs.writeFileSync(path.join(__dirname, 'client/public/data/cutoffs.json'), JSON.stringify(output));

console.log('Successfully created client/public/data/cutoffs.json');
