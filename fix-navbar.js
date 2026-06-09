const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'client/src/pages/Home.jsx');
let content = fs.readFileSync(filePath, 'utf-8');

// Find and replace the feature dropdown with simple links
const oldPattern = `<div
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
                  <ChevronDown size={12} className={\`transition-transform $\{activeFeatureIndex === index ? 'rotate-180' : ''\}\`} />
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
              </div>`;

const newPattern = `<Link
                key={category.title}
                to="#features"
                className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors"
              >
                {category.title}
              </Link>`;

if (content.includes(oldPattern)) {
  content = content.replace(oldPattern, newPattern);
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log('✓ Navbar feature dropdown removed and replaced with simple links');
} else {
  console.log('✗ Pattern not found. Content may have changed.');
  // Try a more flexible approach
  content = content.replace(/onMouseEnter=\{\(\) => setActiveFeatureIndex\(index\)\}\s+onMouseLeave=\{\(\) => setActiveFeatureIndex\(null\)\}/g, '');
  content = content.replace(/<button[\s\S]*?<\/button>/m, '<Link to="#features" className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors">{category.title}</Link>');
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log('✓ Alternative pattern replacement attempted');
}
