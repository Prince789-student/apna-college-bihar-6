const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'client/src/pages/Home.jsx');
let content = fs.readFileSync(filePath, 'utf-8');

// Replace the entire feature map section with a simpler version
const oldSection = content.substring(content.indexOf('{featureCategories.map((category, index) => ('), content.indexOf('))}') + 4);

const newSection = `{featureCategories.map((category) => (
              <Link
                key={category.title}
                to="#features"
                className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors"
              >
                {category.title}
              </Link>
            ))}`;

if (oldSection) {
  content = content.replace(oldSection, newSection);
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log('✓ Successfully simplified feature navbar');
} else {
  console.log('✗ Could not find section to replace');
}
