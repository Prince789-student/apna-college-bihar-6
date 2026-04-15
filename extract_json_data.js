const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'client/src/real_cutoffs.js');
const rawContent = fs.readFileSync(filePath, 'utf8');

// A much more reliable parser for this specific file format
function extractArrayManually(varName) {
    const startMarker = `export const ${varName} = [`;
    const startIdx = rawContent.indexOf(startMarker);
    if (startIdx === -1) return [];
    
    // Find the end of the array by matching brackets correctly
    let depth = 0;
    let endIdx = -1;
    for (let i = startIdx + startMarker.length - 1; i < rawContent.length; i++) {
        if (rawContent[i] === '[') depth++;
        if (rawContent[i] === ']') {
            depth--;
            if (depth === 0) {
                endIdx = i;
                break;
            }
        }
    }
    
    if (endIdx === -1) return [];
    
    const arrayStr = rawContent.substring(startIdx + startMarker.length - 1, endIdx + 1);
    
    // Convert JS object format to JSON format
    // 1. Replace property names with quoted property names (e.g., collegeShort: -> "collegeShort":)
    // 2. Replace single quotes with double quotes for values (e.g., 'MIT' -> "MIT")
    let jsonStr = arrayStr
        .replace(/([a-zA-Z0-9_]+):/g, '"$1":') // keys
        .replace(/'([^']*)'/g, '"$1"')       // values
        .replace(/,\s*([\]}])/g, '$1');      // trailing commas
        
    try {
        return JSON.parse(jsonStr);
    } catch (e) {
        console.error(`Regex JSON parse failed for ${varName}, using alternate line-parser...`);
        // Fallback: Line by line extraction for safety
        const items = [];
        const itemRegex = /\{[\s\S]*?\}/g;
        let m;
        while ((m = itemRegex.exec(arrayStr)) !== null) {
            try {
                let cleaned = m[0]
                    .replace(/([a-zA-Z0-9_]+):/g, '"$1":')
                    .replace(/'([^']*)'/g, '"$1"')
                    .replace(/,\s*([\]}])/g, '$1');
                items.push(JSON.parse(cleaned));
            } catch (innerE) {}
        }
        return items;
    }
}

const cutoffs2024 = extractArrayManually('cutoffs2024');
const cutoffs2025 = extractArrayManually('cutoffs2025');

console.log(`Extracted 2024: ${cutoffs2024.length} items`);
console.log(`Extracted 2025: ${cutoffs2025.length} items`);

fs.writeFileSync(path.join(__dirname, 'client/public/data/cutoffs.json'), JSON.stringify({ cutoffs2024, cutoffs2025 }));

const shorts = new Set(cutoffs2025.map(x => x.collegeShort));
console.log(`Unique colleges in 2025: ${shorts.size}`);
console.log('Sample from 2025:', cutoffs2025.slice(0, 2));
