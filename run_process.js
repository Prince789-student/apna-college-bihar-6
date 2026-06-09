const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

try {
  // Try running the Python script
  const result = execSync('python process_home.py', { 
    cwd: path.join(__dirname),
    encoding: 'utf-8'
  });
  console.log(result);
  process.exit(0);
} catch (error) {
  // If python fails, do it in Node instead
  console.log('Python execution failed, doing replacement in Node...');
  
  const filePath = path.join(__dirname, 'client/src/pages/Home.jsx');
  let content = fs.readFileSync(filePath, 'utf-8');
  
  const nav_start = content.indexOf('featureCategories.map((category, index)');
  if (nav_start === -1) {
    console.error('ERROR: Could not find navbar section');
    process.exit(1);
  }
  
  const line_start = content.lastIndexOf('\n', nav_start) + 1;
  const nav_end = content.indexOf('            <Link to="/about"', nav_start);
  
  if (nav_end === -1) {
    console.error('ERROR: Could not find about link');
    process.exit(1);
  }
  
  const before = content.substring(0, line_start);
  const after = content.substring(nav_end);
  
  const new_navbar = `            {featureCategories.map((category) => (
              <Link
                key={category.title}
                to="#features"
                className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors"
              >
                {category.title}
              </Link>
            ))}
`;
  
  const new_content = before + new_navbar + after;
  fs.writeFileSync(filePath, new_content, 'utf-8');
  
  console.log('✓ Successfully simplified navbar!');
  process.exit(0);
}
