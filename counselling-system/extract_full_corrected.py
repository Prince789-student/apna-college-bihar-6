import json, re, pypdf

# Exact Verbatim Map for 2025 PDF
COLLEGES = [
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
    ('DR. C.P. THAKUR INSTITUTE OF', 'CP Thakur Inst.'),
    ('CIPET:IPT, HAJIPUR', 'CIPET Hajipur'),
    ('S.G.I.D.T.', 'SGIDT Patna'),
    ('WOMEN\'S INST', 'WIT Darbhanga')
]

# Robust Branch Priority with space normalization
BRANCH_PRIORITY = [
    ('IOT & CYBER', 'CSE (IoT + CS)'), 
    ('CYBER SECURITY & BLOCKCHAIN', 'CSE (Cyber Security)'),
    ('CIVIL ENGG WITH COMPUTER APPLICATION', 'Civil with Computer Application'),
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
    ('I.T.', 'IT'),
    ('ELECTRICAL & ELECTRONICS', 'Electrical & Electronics'),
    ('ELECTRO & COMMUNICATION', 'Electronics & Communication'),
    ('ELECTRONICS & COMMUNICATION', 'Electronics & Communication'),
    ('ELECTRICAL ENGINEERING', 'Electrical'),
    ('MECHANICAL ENGINEERING', 'Mechanical'),
    ('CIVIL ENGINEERING', 'Civil'),
    ('CIVIL ENGG', 'Civil'),
    ('MECHATRONICS', 'Mechatronics'),
    ('ROBOTICS', 'Robotics and Automation'),
    ('FIRE', 'Fire Technology'),
    ('ANIMATION', '3D Animation'),
    ('FOOD', 'Food Processing'),
    ('MINING', 'Mining Engineering'),
    ('CHEMICAL', 'Chemical Engineering'),
    ('AERONAUTICAL', 'Aeronautical Engineering'),
    ('VLSI', 'VLSI Design'),
    ('AGRICULTURE', 'Agriculture Engineering'),
    ('LEATHER', 'Leather Technology'),
    ('TEXTILE', 'Textile Engineering'),
    ('SILK', 'Silk Technology')
]

CAT_MAP = {
    'UR': 'UR', 'E-UR': 'UR', 'BC': 'BC', 'E-BC': 'BC', 
    'EBC': 'EBC', 'E-EBC': 'EBC', 'SC': 'SC', 'ST': 'ST', 
    'EWS': 'EWS', 'DQ': 'DQ', 'SMQ': 'SMQ'
}

def extract():
    reader = pypdf.PdfReader("UGEAC2025_FCOFF.pdf")
    all_data = []
    last_coll = None
    
    for page in reader.pages:
        text = page.extract_text()
        lines = text.split("\n")
        
        for t in lines:
            # Normalize spaces for consistent matching
            clean_t = " ".join(t.split()).upper()
            
            # Find College
            matched_key = None
            for key, val in COLLEGES:
                if key in clean_t: 
                    last_coll = val
                    matched_key = key
                    break
            
            if not last_coll: continue
            
            # Match Ranks using flexible Regex
            # Cat Open Close (Allowing E- prefixes)
            m = re.search(r'(UR|E-UR|BC|E-BC|EBC|E-EBC|SC|ST|EWS|DQ|SMQ)\s+(\d+)\s+(\d+)', clean_t)
            if m:
                cat_raw, open_r, close_r = m.groups()
                seat_type = 'Female' if 'FEMALE' in clean_t else 'General'
                
                # Identify Branch
                branch_found = None
                for k, v in BRANCH_PRIORITY:
                    if k.upper() in clean_t:
                        branch_found = v
                        break
                
                if branch_found:
                    all_data.append({
                        "collegeShort": last_coll,
                        "branch": branch_found,
                        "category": CAT_MAP[cat_raw],
                        "seatType": seat_type,
                        "opening": int(open_r),
                        "closing": int(close_r),
                        "year": 2025
                    })

    # Output to single location used by React app
    output_path = "../client/public/data/cutoffs.json"
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    with open(output_path, "w") as f:
        json.dump({"cutoffs2025": all_data}, f, indent=2)
    
    print(f"Extraction Successful! Processed {len(all_data)} ranks across 40+ institutions.")

if __name__ == "__main__":
    import os
    extract()
