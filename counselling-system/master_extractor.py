import pandas as pd
import json
import math
import os
import re
import pypdf

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
    ('WOMENS INST', 'WIT Darbhanga')
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
    ('DAIRY TECH', 'Dairy Tech'),
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
    ('COMPUTER SCIENCE', 'Computer Science'),
    ('COMPUTER SC.', 'Computer Science'),
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

def clean_str(val):
    if pd.isna(val): return ""
    return re.sub(r'\s+', ' ', str(val)).upper().strip()

def process_excel(filename, year):
    if not os.path.exists(filename):
        print(f"Skipping {filename} (not found)")
        return []
    
    print(f"Processing Excel: {filename} ({year})...")
    df = pd.read_excel(filename)
    data = []
    
    # Try to find columns regardless of exact names
    cols = [c.upper() for c in df.columns]
    inst_col = next((c for c in df.columns if 'INSTITUTE' in c.upper()), None)
    course_col = next((c for c in df.columns if 'COURSE' in c.upper() or 'BRANCH' in c.upper()), None)
    seat_col = next((c for c in df.columns if 'SEAT TYPE' in c.upper()), 'SEAT TYPE')
    cat_col = next((c for c in df.columns if 'CATEGORY' in c.upper()), 'CATEGORY')
    ur_op_col = next((c for c in df.columns if 'UR OPENING' in c.upper()), None)
    ur_cl_col = next((c for c in df.columns if 'UR CLOSING' in c.upper()), None)
    cat_op_col = next((c for c in df.columns if 'CAT OPENING' in c.upper()), None)
    cat_cl_col = next((c for c in df.columns if 'CAT CLOSING' in c.upper()), None)

    for idx, row in df.iterrows():
        inst_raw = clean_str(row.get(inst_col))
        course_raw = clean_str(row.get(course_col))
        seat_raw = clean_str(row.get(seat_col))
        cat_raw = clean_str(row.get(cat_col))
        
        if not inst_raw: continue
        
        matched_coll = None
        for k, v in COLLEGES:
            if k in inst_raw: matched_coll = v; break
            
        matched_branch = None
        for k, v in BRANCH_PRIORITY:
            if k in course_raw: matched_branch = v; break
            
        if not matched_coll or not matched_branch: continue
            
        mapped_cat = CAT_MAP.get(cat_raw, 'UR')
        seat_type = 'Female' if 'FEMALE' in seat_raw else 'General'
        
        cat_cl = row.get(cat_cl_col)
        use_ur = (mapped_cat == 'UR' or pd.isna(cat_cl))
        
        f_open = row.get(ur_op_col) if use_ur else row.get(cat_op_col)
        f_close = row.get(ur_cl_col) if use_ur else row.get(cat_cl_col)
        
        try:
            o_rank = int(float(f_open))
            c_rank = int(float(f_close))
            data.append({
                "collegeShort": matched_coll,
                "branch": matched_branch,
                "category": mapped_cat,
                "seatType": seat_type,
                "opening": o_rank,
                "closing": c_rank,
                "year": year
            })
        except: continue
            
    return data

def process_pdf(filename, year):
    if not os.path.exists(filename):
        print(f"Skipping {filename} (not found)")
        return []
        
    print(f"Processing PDF: {filename} ({year})...")
    reader = pypdf.PdfReader(filename)
    data = []
    
    last_coll = None
    last_branch = None
    
    for page in reader.pages:
        text = page.extract_text()
        for line in text.split('\n'):
            clean_t = clean_str(line)
            
            # 1. Update College
            for key, val in COLLEGES:
                if key in clean_t:
                    last_coll = val
                    break
            
            # 2. Update Branch
            for key, val in BRANCH_PRIORITY:
                if key in clean_t:
                    # Check for "COMPUTER SC." vs "COMPUTER SC. & ENGINEERING"
                    # But the order in BRANCH_PRIORITY is already by specificity (descending length)
                    last_branch = val
                    break
                    
            # 3. Match Ranks
            m = re.search(r'(UR|E-UR|BC|E-BC|EBC|E-EBC|SC|E-SC|ST|E-ST|EWS|E-EWS|DQ|E-DQ|SMQ|E-SMQ|RCG|E-RCG)[^\d]*(\d+)\s+(\d+)', clean_t)
            if m:
                cat_raw, open_r, close_r = m.groups()
                seat_type = 'Female' if 'FEMALE' in clean_t else 'General'
                
                if last_coll and last_branch:
                    data.append({
                        "collegeShort": last_coll,
                        "branch": last_branch,
                        "category": CAT_MAP.get(cat_raw, 'UR'),
                        "seatType": seat_type,
                        "opening": int(open_r),
                        "closing": int(close_r),
                        "year": year
                    })
    return data

def master_extract():
    all_2025 = []
    all_2024 = []
    
    # 2025 R1 (PDF)
    all_2025 += process_pdf("UGEAC2025_FCOFF.pdf", 2025)
    # 2025 R2 (Excel)
    all_2025 += process_excel("UGEAC2025_SCOFF.xlsx", 2025)
    
    # 2024 R1 (Excel)
    all_2024 += process_excel("UGEAC2024_FOCRANK.xlsx", 2024)
    # 2024 R2 (Excel)
    all_2024 += process_excel("REV_UGEAC2024_SOCRANK.xlsx", 2024)
    
    output_path = "../client/public/data/cutoffs.json"
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    with open(output_path, "w") as f:
        json.dump({"cutoffs2024": all_2024, "cutoffs2025": all_2025}, f, indent=2)
        
    print(f"Master Extraction Finished! Total 2025 entries: {len(all_2025)}, Total 2024 entries: {len(all_2024)}")

if __name__ == "__main__":
    master_extract()
