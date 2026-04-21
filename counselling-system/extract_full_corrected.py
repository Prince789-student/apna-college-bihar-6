import re
import json
from pypdf import PdfReader
import os

COLLEGE_MAP = {
    'B.C.E. BAKHTIYARPUR': 'BCE Bakhtiyarpur',
    'B.C.E. BHAGALPUR': 'BCE Bhagalpur',
    'M.I.T. MUZAFFARPUR': 'MIT Muzaffarpur',
    'G.C.E. GAYA': 'GCE Gaya',
    'D.C.E. DARBHANGA': 'DCE Darbhanga',
    'N.C.E. CHANDI': 'NCE Chandi',
    'L.N.J.P.I.T. CHAPRA': 'LNJPIT Chapra',
    'S.I.T. SITAMARHI': 'SIT Sitamarhi',
    'R.R.S.D.C.E. BEGUSARAI': 'RRSDCE Begusarai',
    'S.C.E. SASARAM': 'SCE Sasaram',
    'M.C.E. MOTIHARI': 'MCE Motihari',
    'B.P.M.C.E. MADHEPURA': 'BPMCE Madhepura',
    'K.C.E. KATIHAR': 'KCE Katihar',
    'PCE PURNEA': 'PCE Purnea',
    'PURNEA COLLEGE OF ENGINEERING': 'PCE Purnea',
    'SAHARSA COLLEGE OF ENGINEERING': 'SCE Saharsa',
    'SUPAUL COLLEGE OF ENGINEERING': 'SCE Supaul',
    'G.E.C. BANKA': 'GEC Banka',
    'G.E.C. VAISHALI': 'GEC Vaishali',
    'G.E.C. JAMUI': 'GEC Jamui',
    'G.E.C. NAWADA': 'GEC Nawada',
    'G.E.C. KISHANGANJ': 'GEC Kishanganj',
    'G.E.C. MUNGER': 'GEC Munger',
    'G.E.C. SHEOHAR': 'GEC Sheohar',
    'G.E.C. WEST CHAMPARAN': 'GEC Bettiah',
    'G.E.C. BETTIAH': 'GEC Bettiah',
    'G.E.C. AURANGABAD': 'GEC Aurangabad',
    'G.E.C. KAIMUR': 'GEC Kaimur',
    'G.E.C. GOPALGANJ': 'GEC Gopalganj',
    'G.E.C. MADHUBANI': 'GEC Madhubani',
    'G.E.C. SIWAN': 'GEC Siwan',
    'G.E.C. JEHANABAD': 'GEC Jehanabad',
    'G.E.C. ARWAL': 'GEC Arwal',
    'G.E.C. KHAGARIA': 'GEC Khagaria',
    'G.E.C. BUXAR': 'GEC Buxar',
    'G.E.C. BHOJPUR': 'GEC Bhojpur',
    'G.E.C. SHEIKHPURA': 'GEC Sheikhpura',
    'G.E.C. LAKHISARAI': 'GEC Lakhisarai',
    'G.E.C. SAMASTIPUR': 'GEC Samastipur',
    'G.E.C. ARARIA': 'GEC Araria',
}

BRANCH_PRIORITY = [
    ('INTERNET OF THINGS', 'CSE (IoT)'),
    ('IOT', 'CSE (IoT)'),
    ('DATA SCIENCE', 'CSE (Data Science)'),
    ('CYBER SECURITY', 'CSE (Cyber Security)'),
    ('ARTIFICIAL INTELLIGENCE', 'CSE (AI)'),
    ('AI & ML', 'CSE (AI & ML)'),
    ('AI & MACHINE', 'CSE (AI & ML)'),
    ('COMPUTER SC. & ENGINEERING', 'Computer Science'),
    ('COMPUTER SCIENCE & ENGG', 'Computer Science'),
    ('COMPUTER SCIENCE & ENGINEERING', 'Computer Science'),
    ('COMPUTER SCIENCE', 'Computer Science'),
    ('ELECTRO & COMMUNICATION', 'Electronics & Communication'),
    ('ELECTRONICS & COMMUNICATION', 'Electronics & Communication'),
    ('ELECTRICAL & ELECTRONICS', 'Electrical & Electronics'),
    ('ELECTRICAL', 'Electrical'),
    ('ELECTRONICS', 'Electronics & Communication'),
    ('MECHANICAL', 'Mechanical'),
    ('INFORMATION TECHNOLOGY', 'IT'),
    ('I.T.', 'IT'),
    ('CIVIL', 'Civil'),
    ('FIRE', 'Fire Technology'),
    ('ANIMATION', '3D Animation'),
    ('FOOD', 'Food Processing'),
    ('MINING', 'Mining Engineering'),
    ('CHEMICAL', 'Chemical Engineering'),
    ('Aeronautical', 'Aeronautical Engineering'),
    ('ROBOTICS', 'Robotics and Automation'),
    ('VLSI', 'VLSI Design'),
    ('AGRICULTURE', 'Agriculture Engineering'),
    ('LEATHER', 'Leather Technology'),
    ('TEXTILE', 'Textile Engineering'),
    ('BIOINFORMATICS', 'Bioinformatics'),
]

def get_branch(line):
    t = line.upper()
    for key, val in BRANCH_PRIORITY:
        if key in t:
            return val
    return None

def parse_pdf(file_path):
    if not os.path.exists(file_path): return []
    reader = PdfReader(file_path)
    data = []
    current_college = ""

    for page in reader.pages:
        lines = page.extract_text().split('\n')
        for line in lines:
            if "INSTITUTE" in line or "OPENING" in line or "Page" in line: continue
            parts = line.split()
            if len(parts) < 6: continue

            # Extract College
            for key in COLLEGE_MAP:
                if key in line:
                    current_college = COLLEGE_MAP[key]
                    break
            
            if not current_college: continue

            # Extract Branch
            branch = get_branch(line)
            if not branch: continue

            try:
                # We need Category and Closing Rank
                # Usually: ... [SeatType] [Cat] [UR Open] [UR Close] [Cat Open] [Cat Close]
                # If UR is the category, it might be fewer columns.
                
                # We'll use a regex to find the numeric sequence at the end
                ranks = re.findall(r'\d+', line)
                if not ranks: continue
                
                # Closing rank is usually the 2nd number if UR rank is present, or 4th/last
                # In Patna PDF: UR Opening, UR Closing, Cat Opening, Cat Closing
                # We take the UR Closing Rank (index 1) for the main analysis
                closing_rank = int(ranks[1]) if len(ranks) >= 2 else int(ranks[0])
                
                # Category Detection
                cat = "UR"
                for c in ["BC", "EBC", "SC", "ST", "EWS", "RCG", "DQ", "SMQ"]:
                    if f" {c} " in line:
                        cat = c
                        break
                
                seat_type = "Female" if "Female" in line else "General"

                data.append({
                    "collegeShort": current_college,
                    "branch": branch,
                    "category": cat,
                    "seat_type": seat_type,
                    "closing": closing_rank
                })
            except:
                continue
                
    return data

def main():
    print("Extracting 2025 Data...")
    d25 = parse_pdf("UGEAC2025_FCOFF.pdf") + parse_pdf("UGEAC2025_SCOFF.pdf")
    print("Extracting 2024 Data...")
    d24 = parse_pdf("UGEAC2024_FOCRANK.pdf") + parse_pdf("REV_UGEAC2024_SOCRANK.pdf")
    
    out = {"cutoffs2024": d24, "cutoffs2025": d25}
    with open("../client/public/data/cutoffs.json", "w") as f:
        json.dump(out, f, indent=2)
    print(f"Extraction Complete! 2024: {len(d24)}, 2025: {len(d25)}")

if __name__ == "__main__":
    main()
