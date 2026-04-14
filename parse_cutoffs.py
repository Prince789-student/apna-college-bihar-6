import json

def parse_raw(raw):
    # Standardize common typos and variations in raw strings
    r = raw.upper()
    r = r.replace('M..C.E.', 'M.C.E.')
    r = r.replace('R.R.S.D.C.E,', 'R.R.S.D.C.E.')
    r = r.replace('S.C.E SASARAM', 'S.C.E. SASARAM')
    r = r.replace('K.C.E., KATIHAR', 'K.C.E. KATIHAR')
    r = r.replace('GEC,', 'GEC')
    r = r.replace('G.E.C. ', 'GEC ')
    r = r.replace('GOVT. ENGG. COLLEGE OF ', 'GEC ')
    r = r.replace('GOVT. ENGG. COLLEGE, ', 'GEC ')
    r = r.replace('GOVT.ENGG. COLLEGE ', 'GEC ')
    r = r.replace('GOVT. ENGG.COLLEGE ', 'GEC ')
    r = r.replace('GOVT. ENGG. COLLEGE', 'GEC')
    r = r.replace('GOVT. ENGINEERING COLLEGE, ', 'GEC ')
    r = r.replace('GOVT. ', 'GEC ')
    r = r.replace('GOVT ', 'GEC ')
    r = r.replace('GOVT.', 'GEC')
    r = r.replace('GEC ENGG COLLEGE W. CHAMPARAN', 'GEC BETTIAH')
    r = r.replace('GEC ENGG. COLLEGE SHEOHAR', 'GEC SHEOHAR')
    r = r.replace('PURNEA COLLEGE OF ENGG.', 'PCE PURNEA')
    r = r.replace('SAHARSA COLLEGE OF ENGG.', 'SCE SAHARSA')
    r = r.replace('SUPAUL ENGG. COLLEGE', 'SCE SUPAUL')
    r = r.replace('S.G.I.D.T. PATNA', 'SGIDT PATNA')
    r = r.replace('R.R.D.C.E. ', 'RRSDCE ')
    r = r.replace('SHRI PHANISHWAR NATH RENU ENGG. COLLEGE, ARARIA', 'GEC ARARIA')
    r = r.replace('L.N.J.P.I.T. TECHNOLOGY. CHAPRA', 'LNJPIT CHAPRA')
    r = r.replace('NALANDA COLLEGE. OF ENGG,CHANDI', 'NCE CHANDI')

    # College prefix mappings (Ordered by specificity)
    colleges_list = [
        ("M.I.T. MUZAFFARPUR", "MIT Muzaffarpur"),
        ("B.C.E. BHAGALPUR", "BCE Bhagalpur"),
        ("G.C.E. GAYA", "GCE Gaya"),
        ("D.C.E. DARBHANGA", "DCE Darbhanga"),
        ("NALANDA COLLEGE OF ENGINEERING, CHANDI", "NCE Chandi"),
        ("NCE CHANDI", "NCE Chandi"),
        ("PURNEA COLLEGE OF ENGINEERING", "PCE Purnea"),
        ("PCE PURNEA", "PCE Purnea"),
        ("L.N.J.P.I.T. CHAPRA", "LNJPIT Chapra"),
        ("LNJPIT CHAPRA", "LNJPIT Chapra"),
        ("B.C.E. BAKHTIYARPUR", "BCE Bakhtiyarpur"),
        ("S.I.T. SITAMARHI", "SIT Sitamarhi"),
        ("R.R.S.D.C.E. BEGUSARAI", "RRSDCE Begusarai"),
        ("RRSDCE BEGUSARAI", "RRSDCE Begusarai"),
        ("K.C.E. KATIHAR", "KCE Katihar"),
        ("S.C.E. SASARAM", "SCE Sasaram"),
        ("M.C.E. MOTIHARI", "MCE Motihari"),
        ("B.P.M.C.E. MADHEPURA", "BPMCE Madhepura"),
        ("SAHARSA COLLEGE OF ENGINEERING", "SCE Saharsa"),
        ("SCE SAHARSA", "SCE Saharsa"),
        ("SUPAUL COLLEGE OF ENGINEERING", "SCE Supaul"),
        ("SCE SUPAUL", "SCE Supaul"),
        ("GEC VAISHALI", "GEC Vaishali"),
        ("GEC BANKA", "GEC Banka"),
        ("GEC JAMUI", "GEC Jamui"),
        ("GEC NAWADA", "GEC Nawada"),
        ("GEC KISHANGANJ", "GEC Kishanganj"),
        ("GEC MUNGER", "GEC Munger"),
        ("GEC SHEOHAR", "GEC Sheohar"),
        ("GEC WEST CHAMPARAN", "GEC Bettiah"),
        ("GEC BETTIAH", "GEC Bettiah"),
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
    ]
    
    col_short = None
    branch_remainder = r
    for raw_prefix, short_name in colleges_list:
        if r.startswith(raw_prefix):
            col_short = short_name
            branch_remainder = r[len(raw_prefix):].strip()
            break
            
    # Branch mapping (Standardizing based on user list)
    # CRITICAL: Highly specific branches MUST come FIRST
    branch_rules = [
        ("INTERNET OF THINGS", "CSE (IoT)"),
        ("CSE (IOT)", "CSE (IoT)"),
        ("AI & MACHINE LEARNING", "CSE (AI & ML)"),
        ("CSE (AI & ML)", "CSE (AI & ML)"),
        ("AI & ML", "CSE (AI & ML)"),
        ("ARTIFICIAL INTELLIGENCE & MACHINE LEARNING", "CSE (AI & ML)"),
        ("ARTIFICAL INTELLIGENCE", "CSE (AI)"),
        ("CSE (AI)", "CSE (AI)"),
        ("DATA SCIENCE", "CSE (Data Science)"),
        ("CSE (DATA SCIENCE)", "CSE (Data Science)"),
        ("CYBER SECURITY", "CSE (Cyber Security)"),
        ("CSE (CYBER SECURITY)", "CSE (Cyber Security)"),
        ("BLOCK CHAIN", "CSE (IoT + Cyber Security + Blockchain)"),
        ("CSE (IOT + CYBER SECURITY + BLOCKCHAIN)", "CSE (IoT + Cyber Security + Blockchain)"),
        ("NETWORKS", "Computer Science (Networks)"),
        ("COMPUTER SCIENCE & ENGINEERING", "Computer Science"),
        ("COMPUTER SC. & ENGINEERING", "Computer Science"),
        ("COMPUTER SCIENCE AND ENGINEERING", "Computer Science"),
        ("COMPUTER TECHNOLOGY", "Computer Science"),
        ("COMPUTER SCIENCE (CSE)", "Computer Science"),
        ("COMPUTER SCIENCE", "Computer Science"),
        ("CIVIL + COMPUTER APPLICATION", "Civil + Computer Application"),
        ("CIVIL ENGINEERING", "Civil"),
        ("CIVIL ENGG", "Civil"),
        ("CIVIL", "Civil"),
        ("MECHANICAL (SMART MANUFACTURING)", "Mechanical (Smart Manufacturing)"),
        ("MECHANICAL ENGINEERING", "Mechanical"),
        ("MECHANICAL ENGG", "Mechanical"),
        ("MECHANICAL", "Mechanical"),
        ("ELECTRICAL & ELECTRONICS ENGINEERING", "Electrical & Electronics"),
        ("ELECTRICAL & ELECTRONICS", "Electrical & Electronics"),
        ("ELECTRICAL ENGINEERING", "Electrical"),
        ("ELECTRICAL ENGG", "Electrical"),
        ("ELECTRICAL", "Electrical"),
        ("ELECTRONICS & COMMUNICATION ENGINEERING", "Electronics & Communication"),
        ("ELECTRONICS & COMM. ENGINEERING", "Electronics & Communication"),
        ("ELECTRONICS & COMMUNICATION", "Electronics & Communication"),
        ("ELECTRO  & COMMUNICATION ENGINEERING", "Electronics & Communication"),
        ("ELECTRONICS & INSTRUMENTATION", "Electronics & Instrumentation"),
        ("ELECTRONICS & INSTRUM. ENGG", "Electronics & Instrumentation"),
        ("INFORMATION TECHNOLOGY", "IT"),
        ("I.T.", "IT"),
        ("IT", "IT"),
        ("BIOMEDICAL ROBOTIC ENGG", "Biomedical & Robotics"),
        ("BIOMEDICAL & ROBOTICS", "Biomedical & Robotics"),
        ("LEATHER TECHNOLOGY", "Leather Technology"),
        ("LEATHER", "Leather Technology"),
        ("CHEMICAL ENGINEERING", "Chemical Engineering"),
        ("CHEMICAL ENGG", "Chemical Engineering"),
        ("CHEMICAL", "Chemical Engineering"),
        ("AERONAUTICAL ENGINEERING", "Aeronautical"),
        ("AERONAUTICAL", "Aeronautical"),
        ("FIRE TECHNOLOGY & SAFETY", "Fire Technology"),
        ("FIRE TECHNOLOGY", "Fire Technology"),
        ("FOOD PROCESSING", "Food Processing"),
        ("FOOD TECHNOLOGY", "Food Technology"),
        ("MINING ENGINEERING", "Mining"),
        ("MINING", "Mining"),
        ("VLSI DESIGN AND TECHNOLOGY", "VLSI Design"),
        ("VLSI DESIGN", "VLSI Design"),
        ("VLSI", "VLSI Design"),
        ("3D ANIMATION", "3D Animation"),
        ("MECHATRONICS ENGG", "Mechatronics"),
        ("MECHATRONICS", "Mechatronics"),
        ("ROBOTICS AND AUTOMATION", "Robotics & Automation"),
        ("ROBOTICS & AUTOMATION", "Robotics & Automation"),
    ]
    
    matched_branch = branch_remainder
    for k, v in branch_rules:
        if k in branch_remainder:
            matched_branch = v
            break
            
    if matched_branch == branch_remainder and col_short:
        # Fallback to cleaning the remainder
        matched_branch = branch_remainder.title()

    return col_short, matched_branch

def process_file(in_path):
    with open(in_path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    print(f"Loaded {len(data)} items from {in_path}")
    
    out = []
    unmapped_raw = set()
    for row in data:
        raw_str = row['raw'].strip()
        c_short, branch = parse_raw(raw_str)
        if not c_short:
            unmapped_raw.add(raw_str)
            continue
            
        out.append({
            "collegeShort": c_short,
            "branch": branch,
            "category": row['category'],
            "seat_type": row['seat_type'],
            "closing": row['closing']
        })
    
    if unmapped_raw:
        print(f"WARNING: {len(unmapped_raw)} Unmapped samples:")
        for s in list(unmapped_raw)[:10]:
            print(f"  - {s}")
    
    return out

out24 = process_file('counselling-system/extract_2024.json')
out25 = process_file('counselling-system/extract_2025.json')

with open('client/src/real_cutoffs.js', 'w', encoding='utf-8') as f:
    f.write(f"export const cutoffs2024 = {json.dumps(out24, indent=2)};\n\nexport const cutoffs2025 = {json.dumps(out25, indent=2)};\n")

print("Files successfully processed and written to client/src/real_cutoffs.js!")
