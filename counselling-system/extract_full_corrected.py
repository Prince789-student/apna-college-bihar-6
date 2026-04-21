import re
import json
from pypdf import PdfReader
import os

COLLEGES = [
    ('MIT', 'MIT Muzaffarpur'), ('BHAGALPUR', 'BCE Bhagalpur'), ('GAYA', 'GCE Gaya'),
    ('DARBHANGA', 'DCE Darbhanga'), ('CHANDI', 'NCE Chandi'), ('CHAPRA', 'LNJPIT Chapra'),
    ('BAKHTIYARPUR', 'BCE Bakhtiyarpur'), ('SITAMARHI', 'SIT Sitamarhi'), ('BEGUSARAI', 'RRSDCE Begusarai'),
    ('SASARAM', 'SCE Sasaram'), ('MOTIHARI', 'MCE Motihari'), ('MADHEPURA', 'BPMCE Madhepura'),
    ('KATIHAR', 'KCE Katihar'), ('PURNEA', 'PCE Purnea'), ('SAHARSA', 'SCE Saharsa'),
    ('SUPAUL', 'SCE Supaul'), ('BANKA', 'GEC Banka'), ('VAISHALI', 'GEC Vaishali'),
    ('JAMUI', 'GEC Jamui'), ('NAWADA', 'GEC Nawada'), ('KISHANGANJ', 'GEC Kishanganj'),
    ('MUNGER', 'GEC Munger'), ('SHEOHAR', 'GEC Sheohar'), ('WEST CHAMPARAN', 'GEC Bettiah'),
    ('BETTIAH', 'GEC Bettiah'), ('AURANGABAD', 'GEC Aurangabad'), ('KAIMUR', 'GEC Kaimur'),
    ('GOPALGANJ', 'GEC Gopalganj'), ('MADHUBANI', 'GEC Madhubani'), ('SIWAN', 'GEC Siwan'),
    ('JEHANABAD', 'GEC Jehanabad'), ('ARWAL', 'GEC Arwal'), ('KHAGARIA', 'GEC Khagaria'),
    ('BUXAR', 'GEC Buxar'), ('BHOJPUR', 'GEC Bhojpur'), ('SHEIKHPURA', 'GEC Sheikhpura'),
    ('LAKHISARAI', 'GEC Lakhisarai'), ('SAMASTIPUR', 'GEC Samastipur'), ('ARARIA', 'GEC Araria'),
    ('WOMENS INST', 'WIT Darbhanga')
]

BRANCHES = [
    ('INTERNET', 'CSE (IoT)'), ('DATA SCIENCE', 'CSE (Data Science)'), ('CYBER', 'CSE (Cyber Security)'),
    ('ARTIFICIAL', 'CSE (AI)'), ('ARTIFICAL', 'CSE (AI)'), # Added typo support
    ('AI & MACHINE', 'CSE (AI & ML)'), ('COMPUTER', 'Computer Science'),
    ('ELECTRO', 'Electronics & Communication'), ('ELECTRICAL & ELE', 'Electrical & Electronics'),
    ('ELECTRICAL', 'Electrical'), ('MECHANICAL', 'Mechanical'), ('INFORMATION', 'IT'),
    ('I.T.', 'IT'), ('CIVIL', 'Civil'), ('FIRE', 'Fire Technology'), ('ANIMATION', '3D Animation'),
    ('FOOD', 'Food Processing'), ('MINING', 'Mining Engineering'), ('CHEMICAL', 'Chemical Engineering'),
    ('Aeronautical', 'Aeronautical Engineering'), ('ROBOTICS', 'Robotics and Automation'),
    ('VLSI', 'VLSI Design'), ('BIOINFORMATICS', 'Bioinformatics'), ('AGRICULTURE', 'Agriculture'),
    ('LEATHER', 'Leather Technology'), ('TEXTILE', 'Textile')
]

def parse_pdf(file_path):
    if not os.path.exists(file_path): return {}
    reader = PdfReader(file_path)
    res = {}
    
    for page in reader.pages:
        text = page.extract_text()
        # Sometimes whole tables are extracted line by line
        lines = text.split('\n')
        for line in lines:
            t = line.upper()
            if "OPENING" in t: continue
            
            # Find College
            coll = None
            for key, val in COLLEGES:
                if key in t: coll = val; break
            if not coll: continue
            
            # Find Branch
            br = None
            for key, val in BRANCHES:
                if key in t: br = val; break
            if not br: continue
            
            # Find Category
            cat = "UR"
            for c in ["BC", "EBC", "SC", "ST", "EWS", "RCG", "DQ", "SMQ"]:
                if f" {c} " in line: cat = c; break
            
            # Find Seat Type
            seat = "Female" if "FEMALE" in t else "General"
            
            # Find Ranks
            ranks = re.findall(r'\d+', line)
            if not ranks: continue
            
            closing = int(ranks[-1])
            
            key = (coll, br, cat, seat)
            if key not in res or closing > res[key]:
                res[key] = closing
                
    return res

def main():
    print("Aggregating Clean Data...")
    d24 = parse_pdf("UGEAC2024_FOCRANK.pdf")
    # Round 2 / Rev
    d24_2 = parse_pdf("REV_UGEAC2024_SOCRANK.pdf")
    for k, v in d24_2.items():
        if k not in d24 or v > d24[k]: d24[k] = v
        
    d25 = parse_pdf("UGEAC2025_FCOFF.pdf")
    d25_2 = parse_pdf("UGEAC2025_SCOFF.pdf")
    for k, v in d25_2.items():
        if k not in d25 or v > d25[k]: d25[k] = v
        
    out = {
        "cutoffs2024": [{"collegeShort": k[0], "branch": k[1], "category": k[2], "seat_type": k[3], "closing": v} for k, v in d24.items()],
        "cutoffs2025": [{"collegeShort": k[0], "branch": k[1], "category": k[2], "seat_type": k[3], "closing": v} for k, v in d25.items()]
    }
    
    with open("../client/public/data/cutoffs.json", "w") as f:
        json.dump(out, f, indent=2)
    print(f"Final Count! 2024: {len(out['cutoffs2024'])}, 2025: {len(out['cutoffs2025'])}")

if __name__ == "__main__":
    main()
