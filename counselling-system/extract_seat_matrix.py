import pandas as pd
import json
import re
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
    ('WOMENS INST', 'WIT Darbhanga')
]

BRANCH_PRIORITY = [
    ('CYBER SECITY INCLUDING BLOCK CHAIN', 'CSE (IoT + CS)'),
    ('CYBER SECURITY INCLUDING BLOCK CHAIN', 'CSE (IoT + CS)'),
    ('ARTIFICAL INTELLIGENCE & MACHINE', 'CSE (AI & ML)'),
    ('ARTIFICIAL INTELLIGENCE & MACHINE', 'CSE (AI & ML)'),
    ('DATA SCIENCE', 'CSE (Data Science)'),
    ('CYBER SECURITY', 'CSE (Cyber Security)'),
    ('INTERNET OF THINGS', 'CSE (IoT)'),
    ('COMPUTER SCIENCE AND TECHNOLOGY', 'Computer Science (CS & Tech)'),
    ('NETWORKS', 'Computer Science (Networks)'),
    ('VLSI DESIGN', 'VLSI Design'),
    ('BIOMEDICAL ROBOTIC', 'Biomedical & Robotics'),
    ('MECHATRONICS', 'Mechatronics'),
    ('ROBOTICS', 'Robotics and Automation'),
    ('ELECTRICAL & ELECTRONICS', 'Electrical & Electronics'),
    ('ELECTRO & COMMUNICATION', 'Electronics & Communication'),
    ('ELECTRONICS & COMMUNICATION', 'Electronics & Communication'),
    ('ELECTRICAL', 'Electrical'),
    ('FOOD PROCESSING', 'Food Processing'),
    ('BIOINFORMATICS', 'Bioinformatics'),
    ('DAIRY TECH', 'Dairy Tech'),
    ('LEATHER', 'Leather Technology'),
    ('CHEMICAL', 'Chemical Engineering'),
    ('AERONAUTICAL', 'Aeronautical Engineering'),
    ('PETROCHEMICAL', 'Petrochemical Engineering'),
    ('AGRICULTURE', 'Agriculture Engineering'),
    ('TEXTILE', 'Textile Engineering'),
    ('SILK', 'Silk Technology'),
    ('FIRE', 'Fire Technology'),
    ('ANIMATION', '3D Animation'),
    ('MINING', 'Mining Engineering'),
    ('COMPUTER SC', 'Computer Science'),
    ('COMPUTER SCIENCE', 'Computer Science'),
    ('INFORMATION TECHNOLOGY', 'IT'),
    ('I.T.', 'IT'),
    ('MECHANICAL', 'Mechanical'),
    ('CIVIL', 'Civil')
]

# Column mapping from raw output
# 1: Inst, 3: Course, 4: UR, 5: F_UR, 6: SC, 7: F_SC, 8: ST, 9: F_ST, 10: EBC, 11: F_EBC, 12: BC, 13: F_BC, 14: RCG, 15: EWS, 16: F_EWS, 17: DQ, 18: SMQ
CAT_COLS = {
    'UR': 4,
    'F_UR': 5,
    'SC': 6,
    'F_SC': 7,
    'ST': 8,
    'F_ST': 9,
    'EBC': 10,
    'F_EBC': 11,
    'BC': 12,
    'F_BC': 13,
    'RCG': 14,
    'EWS': 15,
    'F_EWS': 16,
    'DQ': 17,
    'SMQ': 18
}

def clean_str(val):
    if pd.isna(val): return ""
    return re.sub(r'\s+', ' ', str(val)).upper().strip()

def extract_sm():
    print("Reading UGEAC2024_SM.xlsx...")
    df = pd.read_excel("UGEAC2024_SM.xlsx", header=None)
    
    matrix = []
    
    # Rows with actual data usually start from index 3 based on our head(10) observation
    for idx, row in df.iterrows():
        if idx < 3: continue
        
        inst_raw = clean_str(row[1])
        course_raw = clean_str(row[3])
        
        if not inst_raw or 'TOTAL' in inst_raw or 'PAGE' in inst_raw:
            continue
            
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
        
        if not matched_coll or not matched_branch:
            continue
            
        seats = {}
        for cat, col_idx in CAT_COLS.items():
            val = row[col_idx]
            try:
                seats[cat] = int(float(val)) if not pd.isna(val) else 0
            except:
                seats[cat] = 0
                
        matrix.append({
            "college": matched_coll,
            "branch": matched_branch,
            "seats": seats
        })
        
    output_path = "../client/public/data/seat_matrix.json"
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    with open(output_path, "w") as f:
        json.dump(matrix, f, indent=2)
        
    print(f"Seat Matrix Successful! Processed {len(matrix)} entries.")

if __name__ == "__main__":
    extract_sm()
