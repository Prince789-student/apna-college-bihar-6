import re
import json
from pypdf import PdfReader
import os

# Ultra Flexible College Mapping
COLLEGES = [
    ('MIT', 'MIT Muzaffarpur'), ('BHAGALPUR', 'BCE Bhagalpur'), ('GAYA', 'GCE Gaya'),
    ('DARBHANGA', 'DCE Darbhanga'), ('CHANDI', 'NCE Chandi'), ('CHAPRA', 'LNJPIT Chapra'),
    ('BAKHTIYARPUR', 'BCE Bakhtiyarpur'), ('SITAMARHI', 'SIT Sitamarhi'), ('BEGUSARAI', 'RRSDCE Begusarai'),
    ('SASARAM', 'SCE Sasaram'), ('MOTIHARI', 'MCE Motihari'), ('MADHEPURA', 'BPMCE Madhepura'),
    ('KATIHAR', 'KCE Katihar'), ('PURNEA', 'PCE Purnea'), ('SAHARSA', 'SCE Saharsa'),
    ('SUPAUL', 'SCE Supaul'), ('BANKA', 'GEC Banka'), ('VAISHALI', 'GEC Vaishali'),
    ('JAMUI', 'GEC Jamui'), ('NAWADA', 'GEC Nawada'), ('KISHANGANJ', 'GEC Kishanganj'),
    ('MUNGER', 'GEC Munger'), ('SHEOHAR', 'GEC Sheohar'), ('BETTIAH', 'GEC Bettiah'),
    ('AURANGABAD', 'GEC Aurangabad'), ('KAIMUR', 'GEC Kaimur'), ('GOPALGANJ', 'GEC Gopalganj'),
    ('MADHUBANI', 'GEC Madhubani'), ('SIWAN', 'GEC Siwan'), ('JEHANABAD', 'GEC Jehanabad'),
    ('ARWAL', 'GEC Arwal'), ('KHAGARIA', 'GEC Khagaria'), ('BUXAR', 'GEC Buxar'),
    ('BHOJPUR', 'GEC Bhojpur'), ('SHEIKHPURA', 'GEC Sheikhpura'), ('LAKHISARAI', 'GEC Lakhisarai'),
    ('SAMASTIPUR', 'GEC Samastipur'), ('ARARIA', 'GEC Araria'), ('WOMENS INST', 'WIT Darbhanga'),
    ('MUZAFFARPUR', 'MIT Muzaffarpur'), ('WEST CHAMPARAN', 'GEC Bettiah')
]

# Ultra Flexible Branch Mapping
BRANCHES = [
    ('INTERNET', 'CSE (IoT)'), ('IOT', 'CSE (IoT)'), ('DATA SCIENCE', 'CSE (Data Science)'),
    ('CYBER', 'CSE (Cyber Security)'), ('ARTIFICIAL', 'CSE (AI)'), ('ARTIFICAL', 'CSE (AI)'),
    ('AI & MACHINE', 'CSE (AI & ML)'), ('AI & ML', 'CSE (AI & ML)'), ('COMPUTER', 'Computer Science'),
    ('ELECTRO', 'Electronics & Communication'), ('ELECTRONICS & COM', 'Electronics & Communication'),
    ('ELECTRICAL & ELE', 'Electrical & Electronics'), ('ELECTRICAL', 'Electrical'),
    ('MECHANICAL', 'Mechanical'), ('INFORMATION', 'IT'), ('I.T.', 'IT'), ('CIVIL', 'Civil'),
    ('FIRE', 'Fire Technology'), ('ANIMATION', '3D Animation'), ('VFX', '3D Animation'),
    ('FOOD', 'Food Processing'), ('MINING', 'Mining Engineering'), ('CHEMICAL', 'Chemical Engineering'),
    ('Aeronautical', 'Aeronautical Engineering'), ('ROBOTICS', 'Robotics and Automation'),
    ('VLSI', 'VLSI Design'), ('BIOINFORMATICS', 'Bioinformatics'), ('AGRICULTURE', 'Agriculture'),
    ('LEATHER', 'Leather Technology'), ('TEXTILE', 'Textile')
]

def parse_any_pdf(file_path):
    if not os.path.exists(file_path): 
        print(f"Skipping {file_path} - Not found")
        return {}
    
    print(f"Parsing {file_path}...")
    reader = PdfReader(file_path)
    res = {}
    
    for page_idx, page in enumerate(reader.pages):
        text = page.extract_text()
        lines = text.split('\n')
        current_coll = None
        
        for line in lines:
            t = line.upper()
            if "OPENING" in t: continue
            
            # 1. Detect College (Sticky)
            found_coll = False
            for key, val in COLLEGES:
                if key in t: 
                    current_coll = val
                    found_coll = True
                    break
            
            if not current_coll: continue
            
            # 2. Detect Branch
            br = None
            for key, val in BRANCHES:
                if key in t: br = val; break
            if not br: continue
            
            # 3. Detect Category
            cat = "UR"
            for c in ["BC", "EBC", "SC", "ST", "EWS", "RCG", "DQ", "SMQ"]:
                if f" {c} " in line: cat = c; break
            
            # 4. Detect Seat Type
            seat = "Female" if "FEMALE" in t else "General"
            
            # 5. Extract Ranks
            ranks = re.findall(r'\d+', line)
            if len(ranks) < 2: continue
            
            # The closing rank is ALWAYS the last integer or the 2nd last if formatting is weird.
            # In UGEAC, the last integer is the Category Closing Rank.
            closing = int(ranks[-1])
            
            key = (current_coll, br, cat, seat)
            # We keep the largest closing rank (usually Round 2)
            if key not in res or closing > res[key]:
                res[key] = closing
                
    return res

def main():
    # 2025 Data
    d25_all = {}
    for f in ["UGEAC2025_FCOFF.pdf", "UGEAC2025_SCOFF.pdf"]:
        data = parse_any_pdf(f)
        for k, v in data.items():
            if k not in d25_all or v > d25_all[k]: d25_all[k] = v
            
    # 2024 Data
    d24_all = {}
    for f in ["UGEAC2024_FOCRANK.pdf", "REV_UGEAC2024_SOCRANK.pdf", "UGEAC2024_SOCRANK.pdf"]:
        data = parse_any_pdf(f)
        for k, v in data.items():
            if k not in d24_all or v > d24_all[k]: d24_all[k] = v
            
    # Format for JSON
    out = {
        "cutoffs2024": [{"collegeShort": k[0], "branch": k[1], "category": k[2], "seat_type": k[3], "closing": v} for k, v in d24_all.items()],
        "cutoffs2025": [{"collegeShort": k[0], "branch": k[1], "category": k[2], "seat_type": k[3], "closing": v} for k, v in d25_all.items()]
    }
    
    with open("../client/public/data/cutoffs.json", "w") as f:
        json.dump(out, f, indent=2)
        
    print(f"Extraction Complete!")
    print(f"2024: {len(out['cutoffs2024'])} records")
    print(f"2025: {len(out['cutoffs2025'])} records")

if __name__ == "__main__":
    main()
