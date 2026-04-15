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
    # Support all Govt Colleges (GEC, BCE, MIT, DCE, etc.)
    col_match = re.search(r'((?:B\.C\.E\.|M\.I\.T\.|G\.C\.E\.|D\.C\.E\.|M\.\.C\.E\.|NALANDA\s+COLLEGE\.|P\.C\.E\.|S\.C\.E\.|G\.E\.C\.|B\.P\.M\.C\.E\.|K\.C\.E\.|L\.N\.J\.P\.I\.T\.|S\.I\.T\.|R\.R\.S\.D\.C\.E\.|SHRI\s+PHANISHWAR\s+NATH\s+RENU)\s+[\w\s,]+)', raw)
    if not col_match: continue
    college_raw = col_match.group(1).replace('  ', ' ').strip()
    
    # Map back to standard names (Heuristic)
    college = college_raw.replace('.', '').replace('  ', ' ')
    if 'BHAGALPUR' in college: college = 'BCE Bhagalpur'
    elif 'MUZAFFARPUR' in college: college = 'MIT Muzaffarpur'
    elif 'BAKHTIYARPUR' in college: college = 'BCE Bakhtiyarpur'
    elif 'GAYA' in college: college = 'GCE Gaya'
    elif 'DARBHANGA' in college: college = 'DCE Darbhanga'
    elif 'MOTIHARI' in college: college = 'MCE Motihari'
    elif 'CHANDI' in college: college = 'NCE Chandi'
    elif 'CHAPRA' in college: college = 'LNJPIT Chapra'
    elif 'PURNEA' in college: college = 'PCE Purnea'
    elif 'SAHARSA' in college: college = 'SCE Saharsa'
    elif 'SUPAUL' in college: college = 'SCE Supaul'
    elif 'SASARAM' in college: college = 'SCE Sasaram'
    elif 'MADHEPURA' in college: college = 'BPMCE Madhepura'
    elif 'KATIHAR' in college: college = 'KCE Katihar'
    elif 'SITAMARHI' in college: college = 'SIT Sitamarhi'
    elif 'BEGUSARAI' in college: college = 'RRSDCE Begusarai'
    elif 'ARARIA' in college: college = 'GEC Araria'
    elif 'BETTIAH' in college: college = 'GEC Bettiah'
    elif 'WEST CHAMPARAN' in college: college = 'GEC Bettiah'
    
    # Generic GEC Handler
    if 'GEC' in college or 'GOVERNMENT ENGINEERING COLLEGE' in college or 'G E C' in college:
        parts = college.split()
        city = parts[-1]
        college = f"GEC {city.capitalize()}"

    # BRANCH EXTRACT
    branch = "Unknown"
    if "COMPUTER SC" in raw or "CSE" in raw: branch = "Computer Science"
    elif "CS(AI & ML)" in raw or "AI & ML" in raw: branch = "CSE (AI & ML)"
    elif "INFORMATION TECHNOLOGY" in raw or "I.T." in raw: branch = "IT"
    elif "CIVIL" in raw: branch = "Civil"
    elif "ELECTRICAL" in raw: branch = "Electrical"
    elif "ELECTRO" in raw or "ELECTRONICS" in raw: branch = "Electronics & Communication"
    elif "MECHANICAL" in raw: branch = "Mechanical"
    elif "FOOD" in raw: branch = "Food Processing"

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

# LOAD EXISTING DATA TO PRESERVE 2024
output_path = 'client/public/data/cutoffs.json'
existing_2024 = []
if os.path.exists(output_path):
    try:
        with open(output_path, 'r') as f:
            old_data = json.load(f)
            existing_2024 = old_data.get('cutoffs2024', [])
    except:
        pass

with open(output_path, 'w') as f:
    json.dump({"cutoffs2024": existing_2024, "cutoffs2025": results2025}, f, indent=2)

print(f"Saved {len(results2025)} verified 2025 records.")
print("Sample:", results2025[:2])
