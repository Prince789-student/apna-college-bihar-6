const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'client/src/pages/Home.jsx');

// Read file
const content = fs.readFileSync(filePath, 'utf-8');

// Create the new navbar feature map
const OLD_PATTERN = `            {featureCategories.map((category, index) => (
              <div
                key={category.title}
                className="relative"
                onMouseEnter={() => setActiveFeatureIndex(index)}
                onMouseLeave={() => setActiveFeatureIndex(null)}
              >
                <button
                  type="button"
                  onClick={() => setActiveFeatureIndex(activeFeatureIndex === index ? null : index)}
                  className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors"
                >
                  {category.title}
                  <ChevronDown size={12} className={\\`transition-transform \\${activeFeatureIndex === index ? 'rotate-180' : ''}\\`} />
                </button>

                {activeFeatureIndex === index && (
                  <div className="absolute left-1/2 top-full z-[2500] mt-5 w-[340px] -translate-x-1/2 rounded-[2rem] border border-slate-200 bg-white/95 p-5 shadow-2xl backdrop-blur-xl">
                    <div className="space-y-2">
                      <p className="px-3 text-[9px] font-[1000] uppercase tracking-[0.25em] text-blue-500">
                        {category.title}
                      </p>
                      <div className="space-y-1">
                        {category.items.map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            onClick={() => setActiveFeatureIndex(null)}
                            className="flex items-center gap-3 rounded-2xl px-3 py-2.5 text-slate-600 transition-all hover:bg-blue-50 hover:text-blue-600"
                          >
                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-blue-600">
                              {item.icon}
                            </span>
                            <span className="text-[10px] font-black uppercase tracking-wider leading-tight">
                              {item.name}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}`;

const NEW_PATTERN = `            {featureCategories.map((category) => (
              <Link
                key={category.title}
                to="#features"
                className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors"
              >
                {category.title}
              </Link>
            ))}`;

if (content.includes(OLD_PATTERN)) {
  const newContent = content.replace(OLD_PATTERN, NEW_PATTERN);
  fs.writeFileSync(filePath, newContent, 'utf-8');
  console.log('✓ Successfully replaced feature dropdown');
  process.exit(0);
} else {
  console.log('✗ Pattern not found exactly. Attempting line-based approach...');
  
  const lines = content.split('\n');
  const result = [];
  let i = 0;
  
  while (i < lines.length) {
    const line = lines[i];
    
    // Find the start of featureCategories.map
    if (line.includes('featureCategories.map((category, index)')) {
      // Add the new pattern
      result.push('            {featureCategories.map((category) => (');
      result.push('              <Link');
      result.push('                key={category.title}');
      result.push('                to="#features"');
      result.push('                className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors"');
      result.push('              >');
      result.push('                {category.title}');
      result.push('              </Link>');
      result.push('            ))}');
      
      // Skip old code until we find the closing ))
      while (i < lines.length && !lines[i].includes('))')) {
        i++;
      }
      i++; // skip the closing line too
      continue;
    }
    
    result.push(line);
    i++;
  }
  
  fs.writeFileSync(filePath, result.join('\n'), 'utf-8');
  console.log('✓ Applied line-based replacement');
  process.exit(0);
}
