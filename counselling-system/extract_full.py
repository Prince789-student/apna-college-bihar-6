from pypdf import PdfReader
import json
import re

reader = PdfReader('UGEAC2025_FCOFF.pdf')
results = []

# Regex to match the rank numbers at the end of a line
# Can be 2 numbers (UR) or 4 numbers (Reserved)
rank_regex = re.compile(r'(\d+)\s+(\d+)(?:\s+(\d+)\s+(\d+))?$')

for page in reader.pages:
    text = page.extract_text()
    lines = text.split('\n')
    for line in lines:
        line = line.strip()
        if not line: continue
        
        # Check if line contains a category keyword
        # Categories: UR, ST, SMQ, SC, RCG, EWS, E-UR, E-SC, E-EBC, E-BC, EBC, DQ, BC
        cats = [' UR ', ' ST ', ' SMQ ', ' SC ', ' RCG ', ' EWS ', ' E-UR ', ' E-SC ', ' E-EBC ', ' E-BC ', ' EBC ', ' DQ ', ' BC ']
        found_cat = None
        for c in cats:
            if c in line:
                found_cat = c.strip()
                break
        
        if found_cat:
            # Split by category to get name+branch and ranks
            parts = line.split(' ' + found_cat + ' ')
            if len(parts) >= 2:
                inst_branch_type = parts[0].strip()
                rank_part = parts[1].strip()
                
                # Match ranks
                m = rank_regex.search(rank_part)
                if m:
                    ur_open = m.group(1)
                    ur_close = m.group(2)
                    cat_open = m.group(3)
                    cat_close = m.group(4)
                    
                    # If cat_close is None, it was a 2-number line (UR)
                    # and we treat the numbers as UR ranks
                    final_close = ur_close
                    if cat_close:
                        # For reserved categories, the PDF's "UR CLOSING" is usually
                        # the UR limit, but candidates care about their CAT rank.
                        # However, our tool currently estimates UR State Rank.
                        # So we should store the UR closing for that category.
                        final_close = ur_close
                    
                    # Clean up institute name: remove Seat Type (usually "General" or "Female")
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
                        "closing": int(final_close)
                    })

with open('full_extract.json', 'w') as f:
    json.dump(results, f, indent=2)
print(f"Extracted {len(results)} rows.")
