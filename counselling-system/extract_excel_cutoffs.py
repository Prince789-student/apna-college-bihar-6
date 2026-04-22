import pandas as pd
import json
import math
import os

COLLEGES = [
    ('MUZAFFARPUR', 'MIT Muzaffarpur'),
    ('BHAGALPUR', 'BCE Bhagalpur'),
    ('G.C.E. GAYA', 'GCE Gaya'),
    ('D.C.E. DARBHANGA', 'DCE Darbhanga'),
    ('NALANDA', 'NCE Chandi'),
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

BRANCH_PRIORITY = [
    ('CYBER SECITY INCLUDING BLOCK CHAIN', 'CSE (IoT + CS)'),
    ('CYBER SECURITY INCLUDING BLOCK CHAIN', 'CSE (IoT + CS)'),
    ('BLOCKCHAIN', 'CSE (IoT + Cyber Security + Blockchain)'),
    ('BLOCK CHAIN', 'CSE (IoT + CS)'),
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
    ('ELECTRONICS AND INSTRUMENTATION', 'Electronics & Instrumentation'),
    ('ELECTRO & COMMUNICATION', 'Electronics & Communication'),
    ('ELECTRONICS & COMMUNICATION', 'Electronics & Communication'),
    ('ELECTRONICS ENGG', 'Electronics & Communication'),
    ('ELECTRICAL', 'Electrical'),
    ('FOOD PROCESSING', 'Food Processing'),
    ('FOOD TECHNOLOGY', 'Food Technology'),
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
    ('MECHANICAL', 'Mechanical'),
    ('CIVIL', 'Civil')
]

CAT_MAP = {
    'UR': 'UR', 'E-UR': 'UR', 'BC': 'BC', 'E-BC': 'BC', 
    'EBC': 'EBC', 'E-EBC': 'EBC', 'SC': 'SC', 'E-SC': 'SC', 'ST': 'ST', 'E-ST': 'ST',
    'EWS': 'EWS', 'E-EWS': 'EWS', 'DQ': 'DQ', 'SMQ': 'SMQ', 'RCG': 'RCG', 'E-RCG': 'RCG'
}

import re
def clean_str(val):
    if pd.isna(val): return ""
    return re.sub(r'\s+', ' ', str(val)).upper().strip()

def extract():
    print("Reading multiple Excel datasets...")
    
    files_to_process = [
        {"filename": "UGEAC2025_SCOFF.xlsx", "year": 2025},
        {"filename": "REV_UGEAC2024_SOCRANK.xlsx", "year": 2024}
    ]
    
    final_payload = {"cutoffs2024": [], "cutoffs2025": []}
    
    for file_meta in files_to_process:
        year = file_meta["year"]
        fname = file_meta["filename"]
        target_key = f"cutoffs{year}"
        
        if not os.path.exists(fname):
            print(f"File not found: {fname}, skipping.")
            continue
            
        print(f"Processing {fname}...")
        df = pd.read_excel(fname)
        
        for idx, row in df.iterrows():
            inst_raw = clean_str(row.get('INSTITUTE'))
            course_raw = clean_str(row.get('COURSE'))
            seat_raw = clean_str(row.get('SEAT TYPE'))
            cat_raw = clean_str(row.get('CATEGORY'))
            
            if not inst_raw: continue
            
            # 1. Map College
            matched_coll = None
            for key, val in COLLEGES:
                if key in inst_raw:
                    matched_coll = val
                    break
            
            # 2. Map Branch
            matched_branch = None
            for key, val in BRANCH_PRIORITY:
                if key in course_raw:
                    matched_branch = val
                    break
                    
            # 3. Map values
            if not matched_coll or not matched_branch:
                continue
                
            mapped_cat = CAT_MAP.get(cat_raw, 'UR')
            seat_type = 'Female' if 'FEMALE' in seat_raw else 'General'
            
            cat_open = row.get('CAT OPENING RANK')
            cat_close = row.get('CAT CLOSING RANK')
            ur_open = row.get('UR OPENING RANK')
            ur_close = row.get('UR CLOSING RANK')
            
            use_ur = False
            if mapped_cat == 'UR' or pd.isna(cat_close):
                use_ur = True
                
            final_open = ur_open if use_ur else cat_open
            final_close = ur_close if use_ur else cat_close
            
            if pd.isna(final_open) or pd.isna(final_close):
                continue
                
            try:
                o_rank = int(float(final_open))
                c_rank = int(float(final_close))
            except:
                continue
                
            final_payload[target_key].append({
                "collegeShort": matched_coll,
                "branch": matched_branch,
                "category": mapped_cat,
                "seatType": seat_type,
                "opening": o_rank,
                "closing": c_rank,
                "year": year
            })

    output_path = "../client/public/data/cutoffs.json"
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    
    with open(output_path, "w") as f:
        json.dump(final_payload, f, indent=2)
        
    print(f"Extraction Successful! Processed 2024 ({len(final_payload['cutoffs2024'])}) and 2025 ({len(final_payload['cutoffs2025'])}).")

if __name__ == "__main__":
    extract()
