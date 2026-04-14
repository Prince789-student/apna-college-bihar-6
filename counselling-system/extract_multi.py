from pypdf import PdfReader
import json
import re

def extract_pdf(filename, output_json):
    reader = PdfReader(filename)
    results = []
    rank_regex = re.compile(r'(\d+)\s+(\d+)(?:\s+(\d+)\s+(\d+))?$')

    for page in reader.pages:
        text = page.extract_text()
        lines = text.split('\n')
        for line in lines:
            line = line.strip()
            if not line: continue
            
            cats = [' UR ', ' ST ', ' SMQ ', ' SC ', ' RCG ', ' EWS ', ' E-UR ', ' E-SC ', ' E-EBC ', ' E-BC ', ' EBC ', ' DQ ', ' BC ']
            found_cat = None
            for c in cats:
                if c in line:
                    found_cat = c.strip()
                    break
            
            if found_cat:
                parts = line.split(' ' + found_cat + ' ')
                if len(parts) >= 2:
                    inst_branch_type = parts[0].strip()
                    rank_part = parts[1].strip()
                    m = rank_regex.search(rank_part)
                    if m:
                        ur_close = m.group(2)
                        seat_type = "General"
                        if " Female" in inst_branch_type:
                            seat_type = "Female"
                            inst_branch_type = inst_branch_type.replace(" Female", "")
                        elif " General" in inst_branch_type:
                            inst_branch_type = inst_branch_type.replace(" General", "")
                        
                        results.append({
                            "raw": inst_branch_type,
                            "category": found_cat,
                            "seat_type": seat_type,
                            "closing": int(ur_close)
                        })

    with open(output_json, 'w') as f:
        json.dump(results, f, indent=2)
    print(f"Extracted {len(results)} rows from {filename}")

# Extract 2024
extract_pdf('UGEAC2024_FOCRANK.pdf', 'extract_2024.json')
# Extract 2025 again (to be safe)
extract_pdf('UGEAC2025_FCOFF.pdf', 'extract_2025.json')
