const fs = require('fs');
const path = require('path');

// Safe Extraction: We will use a more robust way to capture the arrays
const filePath = path.join(__dirname, 'client/src/real_cutoffs.js');
let content = fs.readFileSync(filePath, 'utf8');

// Instead of JSON.parse on a raw slice, we will clean the JS first
function captureArray(varName) {
    const regex = new RegExp(`export const ${varName} = \\[([\\s\\S]*?)\\];`, 'm');
    const match = content.match(regex);
    if (!match) {
        console.error(`Could not find ${varName}`);
        return [];
    }
    
    // Clean the content: Replace single quotes with double quotes for JSON compatibility
    // and remove trailing commas which break JSON.parse
    let raw = match[1]
        .replace(/'/g, '"') // Single to Double quotes
        .replace(/,\s*([\]}])/g, '$1') // Remove trailing commas before ] or }
        .trim();
        
    try {
        return JSON.parse(`[${raw}]`);
    } catch (e) {
        console.error(`Failed to parse ${varName}:`, e.message);
        // Fallback: If JSON.parse fails, try a riskier eval-style capture 
        // (Only safe because we trust our own file content)
        try {
            const evalStr = `(function() { return [${match[1]}]; })()`;
            return eval(evalStr);
        } catch (e2) {
            console.error(`Eval fallback also failed for ${varName}`);
            return [];
        }
    }
}

const c24 = captureArray('cutoffs2024');
const c25 = captureArray('cutoffs2025');

const output = { cutoffs2024: c24, cutoffs2025: c25 };
fs.writeFileSync(path.join(__dirname, 'client/public/data/cutoffs.json'), JSON.stringify(output));

console.log(`Success! Extracted ${c24.length} records for 2024 and ${c25.length} records for 2025.`);
const shorts = new Set(c25.map(x => x.collegeShort));
console.log(`Total unique colleges found in 2025 data: ${shorts.size}`);
