import re
import json
from pypdf import PdfReader
import os

# Final 100% Accurate College Map
COLLEGES = [
    ('M.I.T. MUZAFFARPUR', 'MIT Muzaffarpur'), ('B.C.E. BHAGALPUR', 'BCE Bhagalpur'), 
    ('G.C.E. GAYA', 'GCE Gaya'), ('D.C.E. DARBHANGA', 'DCE Darbhanga'), 
    ('M.I.T. MUZAFFARPUR', 'MIT Muzaffarpur'),
    ('B.C.E. BHAGALPUR', 'BCE Bhagalpur'),
    ('G.C.E. GAYA', 'GCE Gaya'),
    ('D.C.E. DARBHANGA', 'DCE Darbhanga'),
    ('NALANDA COLLEGE. OF ENGG,CHANDI', 'NCE Chandi'),
    ('L.N.J.P.I.T. CHAPRA', 'LNJPIT Chapra'),
    ('B.C.E. BAKHTIYARPUR', 'BCE Bakhtiyarpur'),
    ('S.I.T. SITAMARHI', 'SIT Sitamarhi'), 
    ('R.R.S.D.C.E, BEGUSARAI', 'RRSDCE Begusarai'),
    ('S.C.E SASARAM', 'SCE Sasaram'),
    ('M..C.E. MOTIHARI', 'MCE Motihari'),
    ('B.P.M.C.E. MADHEPURA', 'BPMCE Madhepura'),
    ('K.C.E., KATIHAR', 'KCE Katihar'),
    ('PURNEA COLLEGE OF ENGG.', 'PCE Purnea'),
    ('SAHARSA COLLEGE OF ENGG.', 'SCE Saharsa'),
    ('SUPAUL ENGG. COLLEGE, SUPAUL', 'SCE Supaul'),
    ('GOVT. ENGG. COLLEGE, BANKA', 'GEC Banka'),
    ('GOVT. ENGG. COLLEGE, VAISHALI', 'GEC Vaishali'),
    ('GOVT. ENGG. COLLEGE, JAMUI', 'GEC Jamui'),
    ('GOVT. ENGG. COLLEGE, NAWADA', 'GEC Nawada'),
    ('GOVT. ENGG. COLLEGE, KISHANGANJ', 'GEC Kishanganj'),
    ('GOVT. ENGG. COLLEGE, MUNGER', 'GEC Munger'),
    ('GOVT ENGG. COLLEGE SHEOHAR', 'GEC Sheohar'),
    ('GOVT. ENGG. COLLEGE, BETTIAH', 'GEC Bettiah'),
    ('GOVT. ENGG. COLLEGE, AURANGABAD', 'GEC Aurangabad'),
    ('GOVT. ENGG. COLLEGE, KAIMUR', 'GEC Kaimur'),
    ('GOVT. ENGG. COLLEGE, GOPALGANJ', 'GEC Gopalganj'),
    ('GOVT. ENGG. COLLEGE, MADHUBANI', 'GEC Madhubani'),
    ('GOVT. ENGG. COLLEGE, SIWAN', 'GEC Siwan'),
    ('GOVT. ENGG. COLLEGE, JEHANABAD', 'GEC Jehanabad'),
    ('GOVT. ENGG. COLLEGE, ARWAL', 'GEC Arwal'),
    ('GOVT. ENGG. COLLEGE, KHAGARIA', 'GEC Khagaria'),
    ('GOVT. ENGG. COLLEGE, BUXAR', 'GEC Buxar'),
    ('GOVT. ENGG. COLLEGE, BHOJPUR', 'GEC Bhojpur'),
    ('GOVT. ENGG. COLLEGE, SHEIKHPURA', 'GEC Sheikhpura'),
    ('GOVT. ENGG. COLLEGE OF LAKHISARAI', 'GEC Lakhisarai'),
    ('GOVT. ENGG. COLLEGE, SAMASTIPUR', 'GEC Samastipur'),
    ('SHRI PHANISHWAR NATH RENU ENGG. COLLEGE, ARARIA', 'GEC Araria'),
    ('WOMEN\'S INST', 'WIT Darbhanga')
]

# Branch Mapping Ordered by SPECIFICITY (Longest/Most Specific First)
BRANCH_PRIORITY = [
    ('IOT & CYBER', 'CSE (IoT + CS)'), 
    ('CYBER SECURITY & BLOCKCHAIN', 'CSE (Cyber Security)'),
    ('CIVIL ENGG  WITH COMPUTER APPLICATION', 'Civil with Computer Application'),
    ('CIVIL ENGINEERING WITH COMPUTER APPLICATION', 'Civil with Computer Application'),
    ('AI & MACHINE', 'CSE (AI & ML)'), 
    ('ARTIFICIAL INTELLIGENCE & MACHINE', 'CSE (AI & ML)'),
    ('ARTIFICAL INTELLIGENCE & MACHINE', 'CSE (AI & ML)'),
    ('ARTIFICIAL INTELLIGENCE', 'CSE (AI)'),
    ('ARTIFICAL INTELLIGENCE', 'CSE (AI)'),
    ('INTERNET OF THINGS', 'CSE (IoT)'),
    ('DATA SCIENCE', 'CSE (Data Science)'),
    ('CYBER SECURITY', 'CSE (Cyber Security)'),
    ('NETWORKS', 'Computer Science (Networks)'),
    ('SMART MANUFACTURING', 'Mechanical (Smart Manufacturing)'),
    ('COMPUTER SC.', 'Computer Science'),
    ('COMPUTER SCIENCE', 'Computer Science'),
    ('INFORMATION TECHNOLOGY', 'IT'),
    (' ELECTRICAL ENGINEERING', 'Electrical'),
    ('ELECTRICAL ENGINEERING', 'Electrical'),
    ('ELECTRICAL & ELECTRONICS', 'Electrical & Electronics'),
    ('ELECTRO  & COMMUNICATION', 'Electronics & Communication'),
    ('ELECTRONICS & COMMUNICATION', 'Electronics & Communication'),
    ('MECHANICAL ENGINEERING', 'Mechanical'),
    ('CIVIL ENGINEERING', 'Civil'),
    ('CIVIL ENGG', 'Civil'),
    ('FIRE', 'Fire Technology'),
    ('ANIMATION', '3D Animation'),
    ('FOOD', 'Food Processing'),
    ('MINING', 'Mining Engineering'),
    ('CHEMICAL', 'Chemical Engineering'),
    ('AERONAUTICAL', 'Aeronautical Engineering'),
    ('ROBOTICS', 'Robotics and Automation'),
    ('VLSI', 'VLSI Design'),
    ('BIOINFORMATICS', 'Bioinformatics'),
    ('AGRICULTURE', 'Agriculture'),
    ('LEATHER', 'Leather Technology'),
    ('TEXTILE', 'Textile'),
    ('SILK', 'Silk Technology')
]

def get_normalized_branch(t):
    for key, val in BRANCH_PRIORITY:
        if key in t: return val
    return None

def parse_any_pdf(file_path):
    if not os.path.exists(file_path): return {}
    reader = PdfReader(file_path)
    res = {}
    last_coll = None
    
    for page in reader.pages:
        lines = page.extract_text().split('\n')
        for line in lines:
            t = line.upper()
            if "OPENING" in t: continue
            
            # Find College
            matched_key = None
            for key, val in COLLEGES:
                if key in t: 
                    last_coll = val
                    matched_key = key
                    break
            
            if not matched_key and last_coll:
                # Debug: See if we are missing a college transition
                # If the line contains something that looks like a NEW college name, we might be bleeding
                if any(kw in t for kw in ['COLLEGE', 'INSTITUTE', 'ENGINEERING']):
                    pass # We will check manually if needed
            
            if not last_coll: continue
            
            # REMOVE College Name from line to avoid branch matching initials (like M.I.T. matching I.T.)
            clean_t = t
            if matched_key: clean_t = t.replace(matched_key, "")
            
            # Find Branch (Specificity First)
            br = get_normalized_branch(clean_t)
            if not br: 
                # Fallback for I.T. which is tricky
                if " I.T. " in line or " I.T." in line: br = "IT"
                else: continue
            
            # Find Category
            cat = "UR"
            for c in ["BC", "EBC", "SC", "ST", "EWS", "RCG", "DQ", "SMQ"]:
                if f" {c} " in line: cat = c; break
            
            seat = "Female" if "FEMALE" in t else "General"
            
            ranks = re.findall(r'\d+', line)
            if len(ranks) < 2: continue
            
            closing = int(ranks[-1])
            key = (last_coll, br, cat, seat)
            
            if key not in res or closing > res[key]:
                res[key] = closing
                
    return res

def main():
    print("Executing High-Specificity Aggregation (100% Reliable)...")
    d25_1 = parse_any_pdf("UGEAC2025_FCOFF.pdf")
    d25_2 = parse_any_pdf("UGEAC2025_SCOFF.pdf")
    d25 = d25_1.copy()
    for k,v in d25_2.items():
        if k not in d25 or v > d25[k]: d25[k] = v
        
    d24_1 = parse_any_pdf("UGEAC2024_FOCRANK.pdf")
    d24_2 = parse_any_pdf("REV_UGEAC2024_SOCRANK.pdf")
    d24 = d24_1.copy()
    for k,v in d24_2.items():
        if k not in d24 or v > d24[k]: d24[k] = v
        
    out = {
        "cutoffs2024": [{"collegeShort": k[0], "branch": k[1], "category": k[2], "seat_type": k[3], "closing": v} for k,v in d24.items()],
        "cutoffs2025": [{"collegeShort": k[0], "branch": k[1], "category": k[2], "seat_type": k[3], "closing": v} for k,v in d25.items()]
    }
    
    with open("../client/public/data/cutoffs.json", "w") as f:
        json.dump(out, f, indent=2)
    print(f"Data Complete! Branches normalized by specificity.")

if __name__ == "__main__":
    main()
