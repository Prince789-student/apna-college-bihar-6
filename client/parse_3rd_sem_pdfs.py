import pypdf
import re
import json
import os

# Define file paths
FILES = {
    'civil': 'syllabus_pdf/BTech 3rd Sem CIVIL New Syllabus BEU Patna.pdf',
    'cse': 'syllabus_pdf/BTech 3rd Sem CSE New Syllabus BEU Patna.pdf',
    'ee': 'syllabus_pdf/BTech 3rd Sem EE New Syllabus BEU Patna.pdf',
    'eee': 'syllabus_pdf/BTech 3rd Sem EEE New Syllabus BEU Patna.pdf',
    'mech': 'syllabus_pdf/BTech 3rd Sem MECHANICAL New Syllabus BEU Patna.pdf'
}
SYLLABUS_JSON = 'public/data/syllabus.json'

def clean_text(text):
    # Remove Formulator repetitive headers
    text = re.sub(r'\d+\s*\|\s*P\s*a\s*g\s*e', '', text, flags=re.IGNORECASE)
    text = re.sub(r'Formulator/Y\s*ouTube.*?Download Formulator App', '', text, flags=re.DOTALL | re.IGNORECASE)
    text = re.sub(r'3rd\s*Semester.*?New Syllabus\)', '', text, flags=re.DOTALL | re.IGNORECASE)
    text = re.sub(r'Credit Table.*?Credits', '', text, flags=re.DOTALL | re.IGNORECASE)
    text = re.sub(r'Computer Science and Engineering|Civil Engineering|Electrical Engineering|Electrical & Electronics Engineering|Mechanical Engineering', '', text, flags=re.IGNORECASE)
    text = re.sub(r'S\.No\..*?Credits', '', text, flags=re.DOTALL)
    
    # Format Units / Modules
    text = re.sub(r'(Unit-\s*\d+\.?\d*[\s:]+[^:\n]+)', r'\n\n### 📌 \1\n', text, flags=re.IGNORECASE)
    text = re.sub(r'(Module\s*\d+[\s:]+[^:\n]+)', r'\n\n### 📌 \1\n', text, flags=re.IGNORECASE)
    
    # Format bullet points
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

def extract_subjects(pdf_path, branch_name):
    print(f"Reading {pdf_path}...")
    reader = pypdf.PdfReader(pdf_path)
    # Skip initial table of contents page (first page)
    raw_text = ''.join([p.extract_text() for p in reader.pages[1:]])
    
    # Clean Formulator headers first to avoid splitting issues
    # But keep Course Code lines intact
    # Split by Course Code or Paper Code
    parts = re.split(r'((?:Course|Paper)\s*Code[^\d\n]*\d+[A-Z]?\s*\n?\s*[A-Za-z0-9 /&,-]+(?:\s+[\d\s]+)?)', raw_text, flags=re.IGNORECASE)
    
    subjects = []
    for i in range(1, len(parts), 2):
        header = parts[i].strip()
        body = parts[i+1] if i+1 < len(parts) else ''
        
        # Parse Course Code and Title
        match = re.search(r'(?:Course|Paper)\s*Code[^\d\n]*(\d+[A-Z]?)\s*\n?\s*([A-Za-z0-9 /&,-]+)', header, flags=re.IGNORECASE)
        if match:
            code = match.group(1).strip()
            title = match.group(2).strip()
            # Clean trailing credit numbers or stray branch names from title
            title = re.sub(r'\s+\d+\s+\d+\s+\d+\s+\d+$', '', title).strip()
            title = re.sub(r'Unit-\s*\d+.*$', '', title, flags=re.IGNORECASE).strip()
            title = re.sub(r'Computer Science.*|Civil Engg.*|Electrical.*|Mechanical.*', '', title, flags=re.IGNORECASE).strip()
            
            if not title or title.lower() == 'code':
                continue
                
            cleaned_body = clean_text(body)
            
            md = f"## 📘 {title.upper()}\n**Course Code:** {code}\n\n{cleaned_body}\n"
            subjects.append(md)
            
    return '\n\n---\n\n'.join(subjects)

def run():
    with open(SYLLABUS_JSON, 'r', encoding='utf-8') as f:
        syllabus_data = json.load(f)
        
    updated_count = 0
    for branch, pdf_path in FILES.items():
        if not os.path.exists(pdf_path):
            print(f"Warning: {pdf_path} not found. Skipping {branch.upper()}.")
            continue
            
        content = extract_subjects(pdf_path, branch)
        if content.strip():
            # Find entry in syllabus_data
            for entry in syllabus_data:
                if entry['branch'] == branch and entry['semester'] == 'sem3':
                    entry['content'] = content
                    updated_count += 1
                    print(f"Updated {branch.upper()} - SEM3 ({len(content)} chars)")
                    break
        else:
            print(f"Warning: No content extracted for {branch.upper()} - SEM3")
            
    with open(SYLLABUS_JSON, 'w', encoding='utf-8') as f:
        json.dump(syllabus_data, f, indent=2, ensure_ascii=False)
        
    print(f"Successfully updated {updated_count} 3rd semester entries in syllabus.json!")

if __name__ == '__main__':
    run()
