const fs = require('fs');
const path = require('path');

const projectRoot = __dirname;
const directoriesToScan = ['client/src', 'server/routes', 'server/models', 'server/middleware'];

const report = {
    totalFiles: 0,
    totalLines: 0,
    todos: [],
    consoleLogs: [],
    secrets: [],
    largeFiles: [],
};

const regexPatterns = {
    todo: /(TODO|FIXME|HACK):?(.*)/gi,
    consoleLog: /console\.log\((.*)\)/g,
    secrets: /(password|secret|api_key|token)\s*[:=]\s*['"][^'"]+['"]/gi,
};

function scanDirectory(dir) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);

    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            scanDirectory(fullPath);
        } else if (fullPath.endsWith('.js') || fullPath.endsWith('.jsx')) {
            analyzeFile(fullPath, stat.size);
        }
    }
}

function analyzeFile(filePath, size) {
    report.totalFiles++;
    
    // Flag files larger than 100KB
    if (size > 100000) {
        report.largeFiles.push({ file: filePath.replace(projectRoot, ''), size: `${(size / 1024).toFixed(2)} KB` });
    }

    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    report.totalLines += lines.length;

    lines.forEach((line, index) => {
        const lineNumber = index + 1;
        const relativePath = filePath.replace(projectRoot, '');

        if (regexPatterns.todo.test(line)) {
            report.todos.push({ file: relativePath, line: lineNumber, content: line.trim() });
        }
        if (regexPatterns.consoleLog.test(line)) {
            report.consoleLogs.push({ file: relativePath, line: lineNumber });
        }
        if (regexPatterns.secrets.test(line)) {
            report.secrets.push({ file: relativePath, line: lineNumber, content: line.trim() });
        }
    });
}

console.log("🚀 Starting Deep Enterprise Audit...");
directoriesToScan.forEach(dir => scanDirectory(path.join(projectRoot, dir)));

console.log("\n📊 AUDIT REPORT:");
console.log(`- Total JS/JSX Files Scanned: ${report.totalFiles}`);
console.log(`- Total Lines of Code: ${report.totalLines}`);
console.log(`- Hardcoded Secrets Found: ${report.secrets.length}`);
console.log(`- TODO/FIXME Found: ${report.todos.length}`);
console.log(`- Console.logs (Needs Cleanup): ${report.consoleLogs.length}`);
console.log(`- Oversized Files (>100KB): ${report.largeFiles.length}`);

// Write full report to JSON for review
fs.writeFileSync('audit_results.json', JSON.stringify(report, null, 2));
console.log("\n✅ Detailed line-by-line report saved to 'audit_results.json'");
