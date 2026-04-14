import json

def parse_raw(raw):
    raw = raw.replace('M..C.E.', 'M.C.E.')
    raw = raw.replace('R.R.S.D.C.E,', 'R.R.S.D.C.E.')
    raw = raw.replace('S.C.E SASARAM', 'S.C.E. SASARAM')
    raw = raw.replace('K.C.E., KATIHAR', 'K.C.E. KATIHAR')
    raw = raw.replace('GEC,', 'GEC')
    raw = raw.replace('G.E.C. ', 'GEC ')
    raw = raw.replace('L.N.J.P.I.T. TECHNOLOGY. CHAPRA', 'LNJPIT Chapra')
    raw = raw.replace('LNJPIT Chapra', 'LNJPIT Chapra')
    raw = raw.replace('GOVT. ENGG. COLLEGE OF ', 'GEC ')
    raw = raw.replace('GOVT. ENGG. COLLEGE, ', 'GEC ')
    raw = raw.replace('GOVT.ENGG. COLLEGE ', 'GEC ')
    raw = raw.replace('GOVT. ENGG.COLLEGE ', 'GEC ')
    raw = raw.replace('GOVT. ENGINEERING COLLEGE, ', 'GEC ')
    raw = raw.replace('GOVT.', 'GEC')
    raw = raw.replace('GOVT ENGG COLLEGE W. CHAMPARAN', 'GEC Bettiah')
    raw = raw.replace('SHRI PHANISHWAR NATH RENU ENGG. COLLEGE, ARARIA', 'GEC Araria')
    raw = raw.replace('GOVT ENGG. COLLEGE SHEOHAR', 'GEC Sheohar')
    raw = raw.replace('PURNEA COLLEGE OF ENGG.', 'PCE Purnea')
    raw = raw.replace('SAHARSA COLLEGE OF ENGG.', 'SCE Saharsa')
    raw = raw.replace('SUPAUL ENGG. COLLEGE, SUPAUL', 'SCE Supaul')
    raw = raw.replace('S.G.I.D.T. PATNA', 'SGIDT Patna')
    
    # Common mappings
    colleges_list = [
        ("M.I.T. MUZAFFARPUR", "MIT Muzaffarpur"),
        ("B.C.E. BHAGALPUR", "BCE Bhagalpur"),
        ("G.C.E. GAYA", "GCE Gaya"),
        ("D.C.E. DARBHANGA", "DCE Darbhanga"),
        ("NALANDA COLLEGE OF ENGINEERING, CHANDI", "NCE Chandi"),
        ("NALANDA COLLEGE. OF ENGG,CHANDI", "NCE Chandi"),
        ("PURNEA COLLEGE OF ENGINEERING", "PCE Purnea"),
        ("PCE Purnea", "PCE Purnea"),
        ("L.N.J.P.I.T. CHAPRA", "LNJPIT Chapra"),
        ("B.C.E. BAKHTIYARPUR", "BCE Bakhtiyarpur"),
        ("S.I.T. SITAMARHI", "SIT Sitamarhi"),
        ("R.R.S.D.C.E. BEGUSARAI", "RRSDCE Begusarai"),
        ("K.C.E. KATIHAR", "KCE Katihar"),
        ("S.C.E. SASARAM", "SCE Sasaram"),
        ("M.C.E. MOTIHARI", "MCE Motihari"),
        ("B.P.M.C.E. MADHEPURA", "BPMCE Madhepura"),
        ("SAHARSA COLLEGE OF ENGINEERING", "SCE Saharsa"),
        ("SCE Saharsa", "SCE Saharsa"),
        ("SUPAUL COLLEGE OF ENGINEERING", "SCE Supaul"),
        ("SCE Supaul", "SCE Supaul"),
        ("GEC VAISHALI", "GEC Vaishali"),
        ("GEC BANKA", "GEC Banka"),
        ("GEC JAMUI", "GEC Jamui"),
        ("GEC NAWADA", "GEC Nawada"),
        ("GEC KISHANGANJ", "GEC Kishanganj"),
        ("GEC MUNGER", "GEC Munger"),
        ("GEC SHEOHAR", "GEC Sheohar"),
        ("GEC Sheohar", "GEC Sheohar"),
        ("GOVT. ENGINEERING COLLEGE, WEST CHAMPARAN", "GEC Bettiah"),
        ("GOVT. ENGINEERING COLLEGE, BETTIAH", "GEC Bettiah"),
        ("GEC WEST CHAMPARAN", "GEC Bettiah"),
        ("GEC BETTIAH", "GEC Bettiah"),
        ("GEC Bettiah", "GEC Bettiah"),
        ("GEC AURANGABAD", "GEC Aurangabad"),
        ("GEC KAIMUR", "GEC Kaimur"),
        ("GEC GOPALGANJ", "GEC Gopalganj"),
        ("GEC MADHUBANI", "GEC Madhubani"),
        ("GEC SIWAN", "GEC Siwan"),
        ("GEC JEHANABAD", "GEC Jehanabad"),
        ("GEC ARWAL", "GEC Arwal"),
        ("GEC KHAGARIA", "GEC Khagaria"),
        ("GEC BUXAR", "GEC Buxar"),
        ("GEC BHOJPUR", "GEC Bhojpur"),
        ("GEC SHEIKHPURA", "GEC Sheikhpura"),
        ("GEC LAKHISARAI", "GEC Lakhisarai"),
        ("GEC SAMASTIPUR", "GEC Samastipur"),
        ("GEC ARARIA", "GEC Araria"),
        ("GEC Araria", "GEC Araria"),
        ("SHRI PHANISHWAR NATH RENU ENGG. COLLEGE, ARARIA", "GEC Araria")
    ]
    
    col_short = None
    branch = raw
    for raw_prefix, short_name in colleges_list:
        if raw.startswith(raw_prefix):
            col_short = short_name
            branch = raw[len(raw_prefix):].strip()
            break
            
    # Clean up branch name
    branch_map = {
        "COMPUTER SC. & ENGINEERING": "Computer Science & Engineering",
        "COMPUTER SCIENCE & ENGINEERING": "Computer Science & Engineering",
        "CIVIL ENGINEERING": "Civil Engineering",
        "ELECTRICAL ENGINEERING": "Electrical Engineering",
        "ELECTRICAL & ELECTRONICS ENGINEERING": "Electrical & Electronics (EEE)",
        "ELECTRONICS & COMMUNICATION ENGINEERING": "Electronics & Communication",
        "ELECTRONICS & COMM. ENGINEERING": "Electronics & Communication",
        "MECHANICAL ENGINEERING": "Mechanical Engineering",
        "COMPUTER SCIENCE & ENGG  (INTERNET OF THINGS)": "Computer Science & Engineering",
        "INFORMATION TECHNOLOGY": "Information Technology",
        "CSE (AI & ML)": "CSE (AI & ML)",
        "ARTIFICIAL INTELLIGENCE & MACHINE LEARNING": "CSE (AI & ML)",
        "AERONAUTICAL ENGINEERING": "Aeronautical Engineering",
        "ROBOTICS AND AUTOMATION": "Robotics and Automation",
        "VLSI DESIGN AND TECHNOLOGY": "VLSI Design",
        "CHEMICAL ENGINEERING": "Chemical Engineering",
        "MINING ENGINEERING": "Mining Engineering",
        "FIRE TECHNOLOGY & SAFETY": "Fire Technology & Safety",
        "3D ANIMATION": "3D Animation",
        "FOOD PROCESSING": "Food Processing",
        "LEATHER TECHNOLOGY": "Leather Technology"
    }
    
    for k, v in branch_map.items():
        if branch.startswith(k):
            branch = v
            break
            
    # Title case fallback if not exactly matched
    if branch == raw[len(raw_prefix):].strip() and col_short:
        branch = branch.title()
        
    return col_short, branch

def process_file(in_path):
    with open(in_path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    print(f"Loaded {len(data)} items from {in_path}")
    
    out = []
    unmapped_colleges = set()
    for row in data:
        raw_str = row['raw'].strip()
        c_short, branch = parse_raw(raw_str)
        if not c_short:
            unmapped_colleges.add(raw_str)
            continue
            
        out.append({
            "collegeShort": c_short,
            "branch": branch,
            "category": row['category'],
            "seat_type": row['seat_type'],
            "closing": row['closing']
        })
    
    if unmapped_colleges:
        print("WARNING: Unmapped:", list(unmapped_colleges)[:5])
    
    return out

out24 = process_file('counselling-system/extract_2024.json')
out25 = process_file('counselling-system/extract_2025.json')

with open('client/src/real_cutoffs.js', 'w', encoding='utf-8') as f:
    f.write(f"export const cutoffs2024 = {json.dumps(out24, indent=2)};\n\nexport const cutoffs2025 = {json.dumps(out25, indent=2)};\n")

print("Files successfully processed and written to client/src/real_cutoffs.js!")
