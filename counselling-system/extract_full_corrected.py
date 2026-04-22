import json, re, pypdf

# Exact Verbatim Map for 2025 PDF
COLLEGES = [
    ('MUZAFFARPUR', 'MIT Muzaffarpur'),
    ('BHAGALPUR', 'BCE Bhagalpur'),
    ('G.C.E. GAYA', 'GCE Gaya'),
    ('D.C.E. DARBHANGA', 'DCE Darbhanga'),
    ('NALANDA COLLEGE', 'NCE Chandi'),
    ('L.N.J.P.I.T', 'LNJPIT Chapra'),
    ('BAKHTIYARPUR', 'BCE Bakhtiyarpur'),
    ('SITAMARHI', 'SIT Sitamarhi'), 
    ('BEGUSARAI', 'RRSDCE Begusarai'),
    ('SASARAM', 'SCE Sasaram'),
    ('MOTIHARI', 'MCE Motihari'),
    ('MADHEPURA', 'BPMCE Madhepura'),
    ('KATIHAR', 'KCE Katihar'),
    ('PURNEA', 'PCE Purnea'),
    ('SAHARSA', 'SCE Saharsa'),
    ('SUPAUL', 'SCE Supaul'),
    ('BANKA', 'GEC Banka'),
    ('VAISHALI', 'GEC Vaishali'),
    ('JAMUI', 'GEC Jamui'),
    ('NAWADA', 'GEC Nawada'),
    ('KISHANGANJ', 'GEC Kishanganj'),
    ('MUNGER', 'GEC Munger'),
    ('SHEOHAR', 'GEC Sheohar'),
    ('CHAMPARAN', 'GEC Bettiah'),
    ('BETTIAH', 'GEC Bettiah'),
    ('AURANGABAD', 'GEC Aurangabad'),
    ('KAIMUR', 'GEC Kaimur'),
    ('GOPALGANJ', 'GEC Gopalganj'),
    ('MADHUBANI', 'GEC Madhubani'),
    ('SIWAN', 'GEC Siwan'),
    ('JEHANABAD', 'GEC Jehanabad'),
    ('ARWAL', 'GEC Arwal'),
    ('KHAGARIA', 'GEC Khagaria'),
    ('BUXAR', 'GEC Buxar'),
    ('BHOJPUR', 'GEC Bhojpur'),
    ('SHEIKHPURA', 'GEC Sheikhpura'),
    ('LAKHISARAI', 'GEC Lakhisarai'),
    ('SAMASTIPUR', 'GEC Samastipur'),
    ('ARARIA', 'GEC Araria'),
    ('THAKUR', 'CP Thakur Inst.'),
    ('CIPET', 'CIPET Bihta'),
    ('S.G.I.D.T', 'SGIDT Patna'),
    ('WOMENS INST', 'WIT Darbhanga'),
    ('WOMEN\'S INST', 'WIT Darbhanga')
]

# Robust Branch Priority with order of Specificity (Longest/Most Specific first)
BRANCH_PRIORITY = [
    ('CYBER SECITY INCLUDING BLOCK CHAIN', 'CSE (IoT + Cyber Security + Blockchain)'),
    ('CYBER SECURITY INCLUDING BLOCK CHAIN', 'CSE (IoT + Cyber Security + Blockchain)'),
    ('BLOCKCHAIN', 'CSE (IoT + Cyber Security + Blockchain)'),
    ('ARTIFICAL INTELLIGENCE & MACHINE', 'CSE (AI & ML)'),
    ('ARTIFICIAL INTELLIGENCE & MACHINE', 'CSE (AI & ML)'),
    ('ARTIFICAL INTELLIGENCE', 'CSE (AI)'),
    ('ARTIFICIAL INTELLIGENCE', 'CSE (AI)'),
    ('DATA SCIENCE', 'CSE (Data Science)'),
    ('DATA IENCE', 'CSE (Data Science)'),
    ('CYBER SECITY', 'CSE (Cyber Security)'),
    ('CYBER SECURITY', 'CSE (Cyber Security)'),
    ('INTERNET OF THINGS', 'CSE (IoT)'),
    ('COMPUTER IENCE AND TECHNOLOGY', 'Computer Science (CS & Tech)'),
    ('COMPUTER SCIENCE AND TECHNOLOGY', 'Computer Science (CS & Tech)'),
    ('NETWORKS', 'Computer Science (Networks)'),
    ('CIVIL ENGG WITH COMPUTER APPLICATION', 'Civil with Computer Application'),
    ('CIVIL ENGINEERING WITH COMPUTER APPLICATION', 'Civil with Computer Application'),
    ('VLSI DESIGN', 'VLSI Design'),
    ('BIOMEDICAL ROBOTIC', 'Biomedical & Robotics'),
    ('MECHATRONICS', 'Mechatronics'),
    ('ROBOTICS', 'Robotics and Automation'),
    ('ELECTRICAL & ELECTRONICS', 'Electrical & Electronics'),
    ('ELECTRO AND COMMUNICATION ENGINEERING (ACT)', 'Electronics & Communication (ACT)'),
    ('ELECTRO & COMMUNICATION', 'Electronics & Communication'),
    ('ELECTRONICS & COMMUNICATION', 'Electronics & Communication'),
    ('ELECTRONICS ENGG', 'Electronics & Communication'),
    ('ELECTRICAL ENGINEERING', 'Electrical'),
    ('FOOD PROCESSING', 'Food Processing'),
    ('FOOD TECHNOLOGY AND MANAGEMENT', 'Food Technology'),
    ('BIOINFORMATICS', 'Bioinformatics'),
    ('DAIRY TECH (OPEN)', 'Dairy Tech (Open)'),
    ('DAIRY TECH SELF FINANCE', 'Dairy Tech (Self Finance)'),
    ('CHEMICAL TECHNOLOGY (LEATHER', 'Leather Technology'),
    ('LEATHER', 'Leather Technology'),
    ('CHEMICAL ENGINEERING (PLASTIC', 'Chemical Engineering (Plastic & Polymer)'),
    ('CHEMICAL', 'Chemical Engineering'),
    ('AERONAUTICAL', 'Aeronautical Engineering'),
    ('PETROCHEMICAL', 'Petrochemical Engineering'),
    ('AGRICULTURE', 'Agriculture Engineering'),
    ('TEXTILE', 'Textile Engineering'),
    ('SILK', 'Silk Technology'),
    ('FIRE', 'Fire Technology'),
    ('ANIMATION', '3D Animation'),
    ('MINING', 'Mining Engineering'),
    ('COMPUTER SC.', 'Computer Science'),
    ('COMPUTER SCIENCE', 'Computer Science'),
    ('COMPUTER . &', 'Computer Science'),
    ('INFORMATION TECHNOLOGY', 'IT'),
    ('I.T.', 'IT'),
    ('MECHANICAL ENGINEERING', 'Mechanical'),
    ('CIVIL ENGINEERING', 'Civil'),
    ('CIVIL ENGG', 'Civil')
]

CAT_MAP = {
    'UR': 'UR', 'E-UR': 'UR', 'BC': 'BC', 'E-BC': 'BC', 
    'EBC': 'EBC', 'E-EBC': 'EBC', 'SC': 'SC', 'ST': 'ST', 
    'EWS': 'EWS', 'DQ': 'DQ', 'SMQ': 'SMQ', 'RCG': 'RCG'
}

def extract():
    reader = pypdf.PdfReader("UGEAC2025_FCOFF.pdf")
    all_data = []
    last_coll = None
    last_branch = None
    
    for page in reader.pages:
        text = page.extract_text()
        lines = text.split("\n")
        
        for t in lines:
            # Normalize spaces for consistent matching
            clean_t = " ".join(t.split()).upper()
            
            # Find College (Persisted State, BCECE format prints college name as header)
            matched_key = None
            for key, val in COLLEGES:
                if key in clean_t: 
                    last_coll = val
                    matched_key = key
                    break
            
            if not last_coll: continue

            # Find Branch (Persisted State, BCECE prints branch as sub-header)
            for k, v in BRANCH_PRIORITY:
                if k.upper() in clean_t:
                    last_branch = v
                    break
            
            # Match Ranks using flexible Regex
            # Cat [optional text like (FEMALE)] Open Close
            m = re.search(r'(UR|E-UR|BC|E-BC|EBC|E-EBC|SC|ST|EWS|DQ|SMQ|RCG)[^\d]*(\d+)\s+(\d+)', clean_t)
            if m:
                cat_raw, open_r, close_r = m.groups()
                seat_type = 'Female' if 'FEMALE' in clean_t else 'General'
                
                if last_branch:
                    all_data.append({
                        "collegeShort": last_coll,
                        "branch": last_branch,
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
