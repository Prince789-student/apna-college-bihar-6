import re
import json
import os

# Source file with raw PDF text
source_path = 'c:/Users/princ/Downloads/ai/edu-platform-full/counselling-system/pdf_preview.txt'
if not os.path.exists(source_path):
    source_path = 'counselling-system/pdf_preview.txt'

with open(source_path, 'r', encoding='utf-8') as f:
    text = f.read()

# Pattern for UGEAC 2025 Final Allotment
# Example: UR-  159 BC-   67 B.C.E. BHAGALPUR ELECTRO & COMMUNICATION ENGINEERING UR GENERAL SEAT
# Example: 250310818341 2511201002763 100500 NIRAJ KUMAR M BC UR-  159 BC-   67 B.C.E. BHAGALPUR

records = []
# Split by lines and iterate
lines = text.split('\n')

# A robust state machine to handle multiline PDF rows
current_record = None

for line in lines:
    # Look for the start of a record (JEE Application No or UGEAC ID)
    if re.match(r'^\d{12}\s+\d{13}', line.strip()):
        # Close previous
        if current_record: records.append(current_record)
        current_record = {"raw": line}
    elif current_record:
        current_record["raw"] += " " + line

if current_record: records.append(current_record)

final_data = []
for r in records:
    raw = r["raw"]
    
    # COLLEGE EXTRACT
    col_match = re.search(r'(B\.C\.E\.\s+BHAGALPUR|M\.I\.T\.\s+MUZAFFARPUR|B\.C\.E\.\s+BAKHTIYARPUR|G\.C\.E\.\s+GAYA|D\.C\.E\.\s+DARBHANGA|M\.\.C\.E\.\s+MOTIHARI|NALANDA\s+COLLEGE\.\s+OF\s+ENGG,CHANDI|P\.C\.E\.\s+PURNEA|S\.C\.E\.\s+SAHARSA|G\.E\.C\.\s+SIWAN|G\.E\.C\.\s+AURANGABAD|G\.E\.C\.\s+KAIMUR|G\.E\.C\.\s+ARWAL|G\.E\.C\.\s+SHEIKHPURA)', raw)
    if not col_match: continue
    college = col_match.group(1).replace('  ', ' ').strip()
    
    # Map back to standard names
    college_map = {
        'B.C.E. BHAGALPUR': 'BCE Bhagalpur',
        'M.I.T. MUZAFFARPUR': 'MIT Muzaffarpur',
        'B.C.E. BAKHTIYARPUR': 'BCE Bakhtiyarpur',
        'G.C.E. GAYA': 'GCE Gaya',
        'D.C.E. DARBHANGA': 'DCE Darbhanga',
        'NALANDA COLLEGE. OF ENGG,CHANDI': 'NCE Chandi',
        'M..C.E. MOTIHARI': 'MCE Motihari',
        'P.C.E. PURNEA': 'PCE Purnia'
    }
    college = college_map.get(college, college)

    # BRANCH EXTRACT
    branch = "Unknown"
    if "COMPUTER SC. & ENGINEERING" in raw: branch = "Computer Science"
    elif "COMPUTER SCIENCE & ENGG" in raw: branch = "Computer Science"
    elif "I.T." in raw: branch = "IT"
    elif "CIVIL ENGINEERING" in raw: branch = "Civil"
    elif "ELECTRICAL ENGINEERING" in raw: branch = "Electrical"
    elif "ELECTRO & COMMUNICATION" in raw: branch = "Electronics & Communication"
    elif "MECHANICAL ENGINEERING" in raw: branch = "Mechanical"

    # UR RANK EXTRACT (Crucial Fix)
    ur_match = re.search(r'UR-\s*(\d+)', raw)
    if not ur_match: continue
    ur_rank = int(ur_match.group(1))

    # CATEGORY AND SEAT TYPE
    cat_seat = "General"
    if "UR GENERAL SEAT" in raw: cat_seat = "General"
    elif "UR FEMALE SEAT" in raw: cat_seat = "Female"
    elif "EBC GENERAL SEAT" in raw: cat_seat = "General"
    elif "EBC FEMALE SEAT" in raw: cat_seat = "Female"
    elif "BC GENERAL SEAT" in raw: cat_seat = "General"
    elif "BC FEMALE SEAT" in raw: cat_seat = "Female"

    # ALLOTTED CATEGORY
    allotted_cat = "UR"
    if "BC-" in raw: allotted_cat = "BC"
    if "EBC-" in raw: allotted_cat = "EBC"
    if "EWS-" in raw: allotted_cat = "EWS"
    if "SC-" in raw: allotted_cat = "SC"
    if "RCG-" in raw: allotted_cat = "RCG"

    # We want to STORE the highest rank for each group (the CLOSING rank)
    final_data.append({
        "collegeShort": college,
        "branch": branch,
        "category": allotted_cat,
        "seat_type": cat_seat,
        "closing": ur_rank
    })

# Deduplicate and find MAX (Closing Rank)
closing_ranks = {}
for d in final_data:
    key = f"{d['collegeShort']}|{d['branch']}|{d['category']}|{d['seat_type']}"
    if key not in closing_ranks or d['closing'] > closing_ranks[key]['closing']:
        closing_ranks[key] = d

results2025 = list(closing_ranks.values())

# For 2024, load from real_cutoffs.js if available or use a small reliable set
# Since we have the 18,000 lines file, I'll extract it properly in JS.
with open('client/public/data/cutoffs.json', 'w') as f:
    # Just temporary, we will overwrite 2024 in next step
    json.dump({"cutoffs2024": [], "cutoffs2025": results2025}, f)

print(f"Saved {len(results2025)} verified 2025 records.")
print("Sample:", results2025[:2])
