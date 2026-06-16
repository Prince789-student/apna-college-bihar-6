function cleanSyllabusText(rawText) {
  if (!rawText) return rawText;

  let text = rawText
    .replace(/ -\n([a-z])/g, '-$1')
    .replace(/-\n([a-z])/g, '-$1');

  const prefixes = ['co', 'non', 'pre', 'self', 'over', 'sub', 'inter', 'intra', 're', 'semi', 'multi', 'poly'];
  for (const p of prefixes) {
    text = text.replace(new RegExp(`\\b${p} -([a-z])`, 'g'), `${p}-$1`);
  }

  text = text
    .replace(/([A-Za-z]) - ([A-Z])/g, '$1-$2')
    .replace(/([A-Z][a-z]+) -([A-Z0-9])/g, '$1-$2')

  text = text
    .replace(/^[–\-]?\w{1,4}\s+\d\s+\d\s+\d\s+\d\s*$/gm, '')
    .replace(/^\(\)\s*$/gm, '')
    .replace(/^\s*\(\s*\)\s*$/gm, '');

  const lines = text.split('\n');
  const result = [];
  let insideReferences = false;

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i].trim();
    if (!line) { result.push(''); continue; }

    if (/^(test|text)[\s/]+reference[s]?[-:]*/i.test(line)) {
      insideReferences = true;
      result.push('\n**📚 References & Textbooks:**\n');
      continue;
    }

    if (insideReferences && /^\d+[\.\)]/.test(line)) {
      line = line.replace(/^#+\s*/, '');
      result.push(`- ${line}`);
      continue;
    }

    if (line.startsWith('####')) {
      const cleaned = line.replace(/^#+\s*/, '').trim();
      if (insideReferences) {
        result.push(`- ${cleaned}`);
      } else {
        result.push(line);
      }
      continue;
    }

    const unitMatch = line.match(/^UNIT\s+(\d+\.?\d*)\s*[-–:.]?\s*(.+?)\s+(\d+\s*hrs?)/i);
    if (unitMatch && !line.startsWith('#')) {
      const num = unitMatch[1];
      const title = unitMatch[2].replace(/\s{2,}/g, ' ').trim();
      const hrs = unitMatch[3].trim();
      result.push(`\n### 📌 Unit ${num}: ${title} (${hrs})\n`);
      insideReferences = false;
      continue;
    }

    const unitMatch2 = line.match(/^Unit[-–\s]+(\d+\.?\d*)\s*[:.]?\s*(.+?)\s+(\d+\s*hrs?)/i);
    if (unitMatch2 && !line.startsWith('#')) {
      const num = unitMatch2[1];
      const title = unitMatch2[2].replace(/\s{2,}/g, ' ').trim();
      const hrs = unitMatch2[3].trim();
      result.push(`\n### 📌 Unit ${num}: ${title} (${hrs})\n`);
      insideReferences = false;
      continue;
    }

    result.push(line);
  }

  return result.join('\n').replace(/\n{3,}/g, '\n\n');
}

// ─── Parse markdown syllabus text into structured subjects and units with topics ───


function cleanTitleStr(s) {
  let res = s.replace(/[^\x20-\x7E]/g, '');
  res = res.replace(/["'”]/g, '');
  const firstAlpha = res.search(/[A-Za-z0-9]/);
  if (firstAlpha !== -1) res = res.substring(firstAlpha);
  return res.trim();
}

function splitIntoTopics(text) {
  if (!text || text.length < 5) return [];
  if (text.split('. ').length > 2) {
    const s = text.split('. ').filter(x => x.trim().length > 5).map(x => x.trim().replace(/\.$/, ''));
    if (s.length > 0) return s;
  }
  let t = text.trim();
  t = t.replace(/\.\s*$/, '');
  const parts = [];
  let depth = 0;
  let current = '';
  for (let i = 0; i < t.length; i++) {
    const ch = t[i];
    if (ch === '(' || ch === '[') depth++;
    if (ch === ')' || ch === ']') depth--;
    if (depth === 0 && (ch === ',' || ch === ';')) {
      if (current.trim().length > 3) parts.push(current.trim());
      current = '';
    } else {
      current += ch;
    }
  }
  if (current.trim().length > 3) parts.push(current.trim());
  return parts;
}



function splitIntoTopics(text) {
  if (!text || text.length < 5) return [];
  if (text.split('. ').length > 2) {
    const s = text.split('. ').filter(x => x.trim().length > 5).map(x => x.trim().replace(/\.$/, ''));
    if (s.length > 0) return s;
  }
  let t = text.trim();
  t = t.replace(/\.\s*$/, '');
  const parts = [];
  let depth = 0;
  let current = '';
  for (let i = 0; i < t.length; i++) {
    const ch = t[i];
    if (ch === '(' || ch === '[') depth++;
    if (ch === ')' || ch === ']') depth--;
    if (depth === 0 && (ch === ',' || ch === ';')) {
      if (current.trim().length > 3) parts.push(current.trim());
      current = '';
    } else {
      current += ch;
    }
  }
  if (current.trim().length > 3) parts.push(current.trim());
  return parts;
}



function parseSyllabusIntoSubjects(rawText) {
  if (!rawText) return [];
  const cleaned = cleanSyllabusText(rawText);
  
  // First, split into raw subjects
  const subjectBlocks = cleaned.split(/\n(?=##\s+)/);
  const subjects = [];

  for (const block of subjectBlocks) {
    const lines = block.split('\n');
    let subject = null;
    let currentUnit = null;

    // First pass of the block: find out if it contains any explicit unit headers
    let hasExplicitUnits = false;
    for (const line of lines) {
      const trimmed = line.trim();
      if (/^#{3,4}\s*(?:📌)?\s*Unit[-–\s_—]*\d/i.test(trimmed) || 
          /^UNIT\s+\d/i.test(trimmed) || 
          /^Module\s+\d/i.test(trimmed) || 
          /^#{3,4}\s*Module\s+\d/i.test(trimmed)) {
        hasExplicitUnits = true;
        break;
      }
    }

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmed = line.trim();
      if (!trimmed) continue;

      // Subject title
      if (/^##\s+/.test(trimmed)) {
        let title = trimmed.replace(/^##\s*/, '');
        title = title.replace(/^📘\s*/, '').replace(/"/g, '').trim();
        subject = { title, courseCode: '', units: [] };
        subjects.push(subject);
        continue;
      }

      if (!subject) continue;

      // Course Code
      if (/^\*\*Course Code:\*\*/i.test(trimmed)) {
        subject.courseCode = trimmed.replace(/^\*\*Course Code:\*\*\s*/i, '').trim();
        continue;
      }
      if (/^Course Code\s*:/i.test(trimmed)) {
        subject.courseCode = trimmed.replace(/^Course Code\s*:\s*/i, '').trim();
        continue;
      }

      // Check for Unit header
      const isExplicitUnit = /^#{3,4}\s*(?:📌)?\s*Unit[-–\s_—]*\d/i.test(trimmed) || 
                             /^UNIT\s+\d/i.test(trimmed) || 
                             /^Module\s+\d/i.test(trimmed) || 
                             /^#{3,4}\s*Module\s+\d/i.test(trimmed);

      const isNumberedUnit = !hasExplicitUnits && 
                             /^\d+\s*\\?\.\s*\*\*(.+?)\*\*/.test(trimmed) && 
                             !/course/i.test(trimmed) && 
                             !/credit/i.test(trimmed) &&
                             !/l\s*t\s*p/i.test(trimmed);

      const isH4NumberedUnit = !hasExplicitUnits && /^####\s*\d+\\?\.\s*(.+?)/.test(trimmed);

      if (isExplicitUnit || isNumberedUnit || isH4NumberedUnit) {
        let title = '';
        let remainingText = '';

        if (isExplicitUnit) {
          title = trimmed.replace(/^#+\s*(?:📌)?\s*/, '').replace(/^UNIT\s+/i, 'Unit ').trim();
          title = title.replace(/\s*\d+\s*(?:hrs?|hours?)\s*$/i, '');
        } else if (isNumberedUnit) {
          const match = trimmed.match(/^\d+\s*\\?\.\s*\*\*(.+?)\*\*/);
          const num = match[0].match(/\d+/)[0];
          title = `Unit ${num}: ${match[1].replace(/\*\*/g, '').trim()}`;
          remainingText = trimmed.replace(/^\d+\s*\\?\.\s*\*\*(.+?)\*\*\s*[:.-]?\s*/, '').trim();
        } else if (isH4NumberedUnit) {
          title = trimmed.replace(/^####\s*/, '').trim();
        }

        // SMART NEXT-LINE TITLE GRABBER & SUBHEADING COLLATOR:
        const titleCleaned = title
          .replace(/Unit[-–\s_—]*\d*/i, '')
          .replace(/Module[-–\s_—]*\d*/i, '')
          .replace(/\d+\s*(?:hrs?|hours?)/i, '')
          .replace(/[^a-zA-Z]/g, '')
          .trim();
        const hasDescriptiveText = titleCleaned.length >= 3;

        if (!hasDescriptiveText) {
          // Strategy A: Next non-empty line title grabber
          let lookAheadIdx = i + 1;
          while (lookAheadIdx < lines.length && !lines[lookAheadIdx].trim()) {
            lookAheadIdx++;
          }
          
          let foundTitle = false;
          if (lookAheadIdx < lines.length) {
            const nextLine = lines[lookAheadIdx].trim();
            const isNotHeader = !nextLine.startsWith('#');
            const isNotListItem = !/^[-*•]\s+/.test(nextLine) && !/^\d+\s*\\?\.\s*/.test(nextLine);
            const hasLetters = /[a-zA-Z]{3,}/.test(nextLine);
            
            if (isNotHeader && isNotListItem && hasLetters) {
              let descriptiveTitle = nextLine;
              if (descriptiveTitle.includes(':')) {
                descriptiveTitle = descriptiveTitle.split(':')[0].trim();
              }
              title = `${title}: ${descriptiveTitle}`;
              i = lookAheadIdx;
              foundTitle = true;
            }
          }
          
          // Strategy B: Collect subheadings inside this unit (e.g. Physics)
          if (!foundTitle) {
            let scanIdx = i + 1;
            const subheadings = [];
            while (scanIdx < lines.length) {
              const scanLine = lines[scanIdx].trim();
              if (!scanLine) { scanIdx++; continue; }
              
              const isNextUnit = /^#{3,4}\s*(?:📌)?\s*Unit[-–\s_—]*\d/i.test(scanLine) || 
                                 /^UNIT\s+\d/i.test(scanLine) || 
                                 /^Module\s+\d/i.test(scanLine) || 
                                 /^#{3,4}\s*Module\s+\d/i.test(scanLine);
              if (isNextUnit || /^##\s+/.test(scanLine)) {
                break;
              }
              
              if (scanLine.startsWith('####')) {
                let subhead = scanLine.replace(/^#+\s*/, '').trim();
                subhead = subhead.replace(/^\d+\s*\\?\.\s*/, '').replace(/^\d+\s*\)\s*/, '');
                subhead = subhead.replace(/:\s*$/, '').replace(/\(\d+\s*hrs?\)/i, '').trim();
                if (subhead.length > 2) {
                  subheadings.push(subhead);
                }
              }
              scanIdx++;
            }
            
            if (subheadings.length > 0) {
              title = `${title}: ${subheadings.join(' & ')}`;
            }
          }
        }

        currentUnit = { title, topics: [] };
        subject.units.push(currentUnit);

        if (remainingText && remainingText.length > 5) {
          currentUnit.topics.push({ text: remainingText, isHeading: false });
        }
        continue;
      }

      // Topics
      if (currentUnit) {
        if (/^(test|text|reference|credit|l\s*t\s*p|course outcome)/i.test(trimmed)) {
          continue;
        }

        if (/^####/.test(trimmed)) {
          const text = trimmed.replace(/^#+\s*/, '').trim();
          currentUnit.topics.push({ text, isHeading: true });
          continue;
        }

        if (/^[-*•]\s+/.test(trimmed)) {
          const text = trimmed.replace(/^[-*•]\s+/, '').replace(/\*\*/g, '').trim();
          if (text.length > 3) {
            currentUnit.topics.push({ text, isHeading: false });
          }
          continue;
        }

        if (/^\d+\s*\\?\.\s*(.+?)/.test(trimmed)) {
          const text = trimmed.replace(/^\d+\s*\\?\.\s*/, '').replace(/\*\*/g, '').trim();
          if (text.length > 3) {
            currentUnit.topics.push({ text, isHeading: false });
          }
          continue;
        }

        if (trimmed.includes('References & Textbooks')) {
          currentUnit.topics.push({ text: 'References & Textbooks', isHeading: true });
          continue;
        }

        if (trimmed.length > 10 && !/^\d+\s+\d+\s+\d+/.test(trimmed)) {
          const text = trimmed.replace(/\*\*/g, '').trim();
          if (currentUnit.topics.length > 0 && !currentUnit.topics[currentUnit.topics.length - 1].isHeading) {
            currentUnit.topics[currentUnit.topics.length - 1].text += ' ' + text;
          } else {
            currentUnit.topics.push({ text, isHeading: false });
          }
        }
      }
    }

    // FALLBACK MECHANISM: If a subject has NO units parsed, create a default unit
    if (subject && subject.units.length === 0) {
      const defaultUnit = { title: 'Syllabus Topics', topics: [] };
      for (const line of lines) {
        const tr = line.trim();
        // Skip subject header, credits, references, etc.
        if (tr.startsWith('##') || /^(course code|\*\*course code|credits|\*\*credits|l\s*t\s*p|references|textbook)/i.test(tr)) {
          continue;
        }
        if (/^#{3,4}\s*(.+?)/.test(tr)) {
          const headingText = tr.replace(/^#+\s*/, '').trim();
          defaultUnit.topics.push({ text: headingText, isHeading: true });
          continue;
        }
        if (/^[-*•]\s+/.test(tr)) {
          const text = tr.replace(/^[-*•]\s+/, '').replace(/\*\*/g, '').trim();
          if (text.length > 3) {
            defaultUnit.topics.push({ text, isHeading: false });
          }
          continue;
        }
        if (/^\d+\s*\\?\.\s*(.+?)/.test(tr)) {
          const text = tr.replace(/^\d+\s*\\?\.\s*/, '').replace(/\*\*/g, '').trim();
          if (text.length > 3) {
            defaultUnit.topics.push({ text, isHeading: false });
          }
          continue;
        }
        if (tr.includes('References & Textbooks')) {
          defaultUnit.topics.push({ text: 'References & Textbooks', isHeading: true });
          continue;
        }
        if (tr.length > 15 && !/^\d+\s+\d+\s+\d+/.test(tr)) {
          let text = tr.replace(/\*\*/g, '').trim();
          text = text.replace(/^:?\s*\d+\s*(?:hrs?|hours?)\s*/i, '').trim();
          if (defaultUnit.topics.length > 0 && !defaultUnit.topics[defaultUnit.topics.length - 1].isHeading) {
            defaultUnit.topics[defaultUnit.topics.length - 1].text += ' ' + text;
          } else {
            defaultUnit.topics.push({ text, isHeading: false });
          }
        }
      }
      if (defaultUnit.topics.length > 0) {
        subject.units.push(defaultUnit);
      }
    }
  }

  
  for (const subject of subjects) {
    if (subject.title) {
      subject.title = cleanTitleStr(subject.title);
    }
    for (const unit of subject.units) {
      const newTopics = [];
      for (const topic of unit.topics) {
        if (topic.isHeading) {
          newTopics.push(topic);
        } else {
          const splits = splitIntoTopics(topic.text);
          for (const sp of splits) {
            newTopics.push({ text: sp, isHeading: false });
          }
        }
      }
      unit.topics = newTopics;
    }
  }
    return subjects.sort((a, b) => {
    const aIsLab = /LAB/i.test(a.title) || /P$/i.test(a.courseCode);
    const bIsLab = /LAB/i.test(b.title) || /P$/i.test(b.courseCode);
    if (aIsLab && !bIsLab) return 1;
    if (!aIsLab && bIsLab) return -1;
    return 0;
  });
}


module.exports = { parseSyllabusIntoSubjects };
