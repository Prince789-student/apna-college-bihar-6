import pypdf
import re
import json
import os

# Define file paths
GROUP_A_PDF = 'syllabus_pdf/B.-tech-Group-A-1st-2nd-Sem.pdf'
GROUP_B_PDF = 'syllabus_pdf/B.Tech-Group-B-1st-2nd-Sem.pdf'
SYLLABUS_JSON = 'public/data/syllabus.json'

def clean_text(text):
    # Remove repetitive page headers/footers
    text = re.sub(r'Group [AB] 1st & 2nd Sem \(SESSION 2024-2025\)', '', text, flags=re.IGNORECASE)
    text = re.sub(r'B\.Tech[^\n]+', '', text)
    text = re.sub(r'SESSION 2024-\d+', '', text)
    text = re.sub(r'SEMESTER [I]+', '', text)
    text = re.sub(r'TOTAL \d+', '', text)
    text = re.sub(r'Sl No\..*?Practical', '', text, flags=re.DOTALL)
    
    # Format Units / Modules
    text = re.sub(r'(Unit-\s*\d+\.?\d*[\s:]+[^:\n]+)', r'\n\n### 📌 \1\n', text, flags=re.IGNORECASE)
    text = re.sub(r'(Module\s*\d+[\s:]+[^:\n]+)', r'\n\n### 📌 \1\n', text, flags=re.IGNORECASE)
    
    # Format bullet points (lines starting with numbers or small symbols)
    lines = text.split('\n')
    cleaned_lines = []
    for line in lines:
        line = line.strip()
        if not line:
            continue
        if re.match(r'^\d+\.\s+[A-Z]', line):
            cleaned_lines.append(f"\n#### {line}")
        elif re.match(r'^[a-z]\)|\d+\)', line) or line.startswith('-') or line.startswith('*'):
            cleaned_lines.append(f"- {line.lstrip('*-) ')}")
        else:
            cleaned_lines.append(line)
            
    return '\n'.join(cleaned_lines).strip()

def extract_subjects(pdf_path):
    print(f"Reading {pdf_path}...")
    reader = pypdf.PdfReader(pdf_path)
    # Skip initial table of contents pages (first 12 pages)
    raw_text = ''.join([p.extract_text() for p in reader.pages[12:]])
    
    # Split by Course Code
    parts = re.split(r'(Course Code-\d+[A-Z]?\s+[A-Za-z0-9 /&,-]+(?:\s+[\d\s]+)?)', raw_text)
    
    subjects = {}
    for i in range(1, len(parts), 2):
        header = parts[i].strip()
        body = parts[i+1] if i+1 < len(parts) else ''
        
        # Parse Course Code and Title
        match = re.search(r'Course Code-(\d+[A-Z]?)\s+([A-Za-z0-9 /&,-]+)', header)
        if match:
            code = match.group(1).strip()
            title = match.group(2).strip()
            # Clean trailing credit numbers from title
            title = re.sub(r'\s+\d+\s+\d+\s+\d+\s+\d+$', '', title).strip()
            
            cleaned_body = clean_text(body)
            md = f"## 📘 {title.upper()}\n**Course Code:** {code}\n\n{cleaned_body}\n"
            
            # Store by code to deduplicate and allow exact lookup
            subjects[code] = md
            
    return subjects

def run():
    if not os.path.exists(GROUP_A_PDF) or not os.path.exists(GROUP_B_PDF):
        print("Error: PDF files not found in syllabus_pdf/")
        return
        
    subs_a = extract_subjects(GROUP_A_PDF)
    subs_b = extract_subjects(GROUP_B_PDF)
    
    print(f"Extracted {len(subs_a)} unique subjects from Group A PDF")
    print(f"Extracted {len(subs_b)} unique subjects from Group B PDF")
    
    # Load existing syllabus.json
    with open(SYLLABUS_JSON, 'r', encoding='utf-8') as f:
        syllabus_data = json.load(f)
        
    # Helper to combine exact subjects by code
    def build_content(subjects_dict, codes_list):
        matched = []
        for code in codes_list:
            if code in subjects_dict:
                matched.append(subjects_dict[code])
            else:
                # Try finding with/without P or exact match
                found = False
                for k, v in subjects_dict.items():
                    if k == code:
                        matched.append(v)
                        found = True
                        break
                if not found:
                    print(f"  [Notice] Course Code {code} not found in extracted dict")
        return '\n\n---\n\n'.join(matched)
        
    # Define EXACT Course Codes for each branch & semester
    # CSE
    cse_sem1 = ['100110', '100102', '100111', '100113', '100114', '100110P', '100111P', '100113P', '100114P', '100115P']
    cse_sem2 = ['100215', '100202', '100216', '100217', '100215P', '100216P', '100217P', '100220P']
    
    # EE, EEE, ECE
    ee_sem1 = ['100215', '100202', '100216', '100209', '100217', '100215P', '100216P', '100209P', '100217P', '100220P']
    ee_sem2 = ['100110', '100102', '100111', '100106', '100112', '100115P', '100110P', '100111P', '100106P', '100112P']
    
    # CIVIL
    civil_sem1 = ['100101', '100102', '100103', '100104', '100105', '100101P', '100103P', '100104P', '100109P']
    civil_sem2 = ['100201', '100202', '100203', '100206', '100204', '100201P', '100203P', '100206P', '100214P']
    
    # MECH
    mech_sem1 = ['100101', '100102', '100103', '100104', '100106', '100101P', '100103P', '100104P', '100109P']
    mech_sem2 = ['100201', '100202', '100203', '100206', '100205', '100201P', '100203P', '100206P', '100214P']

    # Mapping table
    MAPPING = {
        'cse': {'sem1': (subs_b, cse_sem1), 'sem2': (subs_b, cse_sem2)},
        'ee': {'sem1': (subs_b, ee_sem1), 'sem2': (subs_b, ee_sem2)},
        'eee': {'sem1': (subs_b, ee_sem1), 'sem2': (subs_b, ee_sem2)},
        'ece': {'sem1': (subs_b, ee_sem1), 'sem2': (subs_b, ee_sem2)},
        'civil': {'sem1': (subs_a, civil_sem1), 'sem2': (subs_a, civil_sem2)},
        'mech': {'sem1': (subs_a, mech_sem1), 'sem2': (subs_a, mech_sem2)}
    }

    # Update syllabus_data
    updated_count = 0
    for entry in syllabus_data:
        branch = entry['branch']
        sem = entry['semester']
        
        if sem in ['sem1', 'sem2'] and branch in MAPPING:
            subs_dict, codes = MAPPING[branch][sem]
            content = build_content(subs_dict, codes)
            
            if content.strip():
                entry['content'] = content
                updated_count += 1
                print(f"Updated {branch.upper()} - {sem.upper()} ({len(codes)} subjects mapped, {len(content)} chars)")
            else:
                print(f"Warning: No content matched for {branch.upper()} - {sem.upper()}")

    # Save back to syllabus.json
    with open(SYLLABUS_JSON, 'w', encoding='utf-8') as f:
        json.dump(syllabus_data, f, indent=2, ensure_ascii=False)
        
    print(f"Successfully updated {updated_count} semester entries with exact branch-wise subjects in syllabus.json!")

if __name__ == '__main__':
    run()
