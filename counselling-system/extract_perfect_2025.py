import re
import json
from pypdf import PdfReader

def extract_all():
    reader = PdfReader("counselling.pdf")
    cutoffs = {} # (college, branch, category, seat_type) -> max_rank

    # Dynamic College Matcher
    COLLEGES = [
        ('MIT', 'Muzaffarpur'),
        ('BCE', 'Bhagalpur'),
        ('GCE', 'Gaya'),
        ('DCE', 'Darbhanga'),
        ('NCE', 'Chandi'),
        ('NALANDA', 'Chandi'),
        ('PURNEA', 'Purnea'),
        ('LNJPIT', 'Chapra'),
        ('BAKHTIYARPUR', 'BCE Bakhtiyarpur'),
        ('SIT', 'Sitamarhi'),
        ('BEGUSARAI', 'RRSDCE Begusarai'),
        ('KATIHAR', 'KCE Katihar'),
        ('SASARAM', 'SCE Sasaram'),
        ('MOTIHARI', 'MCE Motihari'),
        ('MADHEPURA', 'BPMCE Madhepura'),
        ('SAHARSA', 'SCE Saharsa'),
        ('SUPAUL', 'SCE Supaul'),
        ('VAISHALI', 'GEC Vaishali'),
        ('BANKA', 'GEC Banka'),
        ('JAMUI', 'GEC Jamui'),
        ('NAWADA', 'GEC Nawada'),
        ('KISHANGANJ', 'GEC Kishanganj'),
        ('MUNGER', 'GEC Munger'),
        ('SHEOHAR', 'GEC Sheohar'),
        ('WEST CHAMPARAN', 'GEC Bettiah'),
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
        ('ARA', 'GEC Bhojpur'),
        ('SHEIKHPURA', 'GEC Sheikhpura'),
        ('LAKHISARAI', 'GEC Lakhisarai'),
        ('SAMASTIPUR', 'GEC Samastipur'),
        ('ARARIA', 'GEC Araria'),
        ('BETTIAH', 'GEC Bettiah')
    ]

    BRANCH_MAP = {
        'COMPUTER': 'Computer Science',
        'CIVIL': 'Civil',
        'MECHANICAL': 'Mechanical',
        'ELECTRICAL': 'Electrical',
        'ELECTRONICS': 'Electronics & Communication',
        'I.T.': 'IT',
        'INFORMATION TECHNOLOGY': 'IT',
        'AI': 'CSE (AI)',
        'DATA SCIENCE': 'CSE (Data Science)',
        'IOT': 'CSE (IoT)',
        'INTERNET OF THINGS': 'CSE (IoT)',
        'CYBER SECURITY': 'CSE (Cyber Security)',
        'VLSI': 'VLSI Design',
        'ROBOTICS': 'Robotics & Automation',
        'FIRE': 'Fire Technology',
        'LEATHER': 'Leather Technology',
        'BIOMEDICAL': 'Biomedical & Robotics',
        'FOOD': 'Food Technology',
        'MINING': 'Mining Engineering',
        'CHEMICAL': 'Chemical Engineering',
        '3D': '3D Animation',
        'ANIMATION': '3D Animation'
    }

    def get_college(text):
        t = text.upper()
        # Clean text for matching
        clean = re.sub(r'[^A-Z]', '', t)
        for short, full in COLLEGES:
            # Check if both parts are mentioned nearby
            if short in clean and (re.sub(r'[^A-Z]', '', full.upper()) in clean):
                 # Specific override for names like BCE Bakhtiyarpur vs BCE Bhagalpur
                 if short == 'BCE' and 'BAKHTIYARP' in t: return 'BCE Bakhtiyarpur'
                 if short == 'BCE' and 'BHAGALPUR' in t: return 'BCE Bhagalpur'
                 
                 # Most common names in colleges array
                 college_names = {
                     'MIT': 'MIT Muzaffarpur',
                     'GCE': 'GCE Gaya',
                     'DCE': 'DCE Darbhanga',
                     'NCE': 'NCE Chandi',
                     'NALANDA': 'NCE Chandi',
                     'PURNEA': 'PCE Purnea',
                     'LNJPIT': 'LNJPIT Chapra',
                     'SIT': 'SIT Sitamarhi',
                     'BEGUSARAI': 'RRSDCE Begusarai',
                     'KATIHAR': 'KCE Katihar',
                     'SASARAM': 'SCE Sasaram',
                     'MOTIHARI': 'MCE Motihari',
                     'MADHEPURA': 'BPMCE Madhepura',
                     'SAHARSA': 'SCE Saharsa',
                     'SUPAUL': 'SCE Supaul',
                     'VAISHALI': 'GEC Vaishali',
                     'BANKA': 'GEC Banka',
                     'JAMUI': 'GEC Jamui',
                     'NAWADA': 'GEC Nawada',
                     'KISHANGANJ': 'GEC Kishanganj',
                     'MUNGER': 'GEC Munger',
                     'SHEOHAR': 'GEC Sheohar',
                     'WEST CHAMPARAN': 'GEC Bettiah',
                     'BETTIAH': 'GEC Bettiah',
                     'AURANGABAD': 'GEC Aurangabad',
                     'KAIMUR': 'GEC Kaimur',
                     'GOPALGANJ': 'GEC Gopalganj',
                     'MADHUBANI': 'GEC Madhubani',
                     'SIWAN': 'GEC Siwan',
                     'JEHANABAD': 'GEC Jehanabad',
                     'ARWAL': 'GEC Arwal',
                     'KHAGARIA': 'GEC Khagaria',
                     'BUXAR': 'GEC Buxar',
                     'BHOJPUR': 'GEC Bhojpur',
                     'ARA': 'GEC Bhojpur',
                     'SHEIKHPURA': 'GEC Sheikhpura',
                     'SHAIKHPURA': 'GEC Sheikhpura',
                     'LAKHISARAI': 'GEC Lakhisarai',
                     'SAMASTIPUR': 'GEC Samastipur',
                     'ARARIA': 'GEC Araria'
                 }
                 return college_names.get(short, full)
        return None

    def get_branch(text):
        t = text.upper()
        # Specific combinations first
        if 'ELECTRICAL' in t and 'ELECTRONICS' in t: return 'Electrical & Electronics'
        if 'CSE' in t and 'AI' in t: return 'CSE (AI)'
        if 'CSE' in t and 'IOT' in t: return 'CSE (IoT)'
        if 'COMPUTER' in t and 'NETWORKS' in t: return 'Computer Science (Networks)'
        if 'CIVIL' in t and 'COMPUTER' in t: return 'Civil + Computer Application'
        
        for key, val in BRANCH_MAP.items():
            if key in t:
                return val
        return None

    def process_allotment(allotment):
        col = get_college(allotment)
        br = get_branch(allotment)
        if not col or not br: return

        all_up = allotment.upper()
        
        # All available ranks
        ranks = {}
        for cat in ['UR', 'BC', 'EBC', 'SC', 'ST', 'EWS', 'RCG', 'DQ', 'SMQ']:
            abbr = cat
            if cat == 'EBC': abbr = 'EB'
            elif cat == 'EWS': abbr = 'EW'
            
            m = re.search(rf'{abbr}-\s+(\d+)', allotment)
            if not m: m = re.search(rf'{cat}-\s+(\d+)', allotment)
            if m: ranks[cat] = int(m.group(1))

        # Determine target category
        found_cat = 'UR'
        # The text "Against X seat" is the best indicator
        m_against = re.search(r'(?:Against|ON)\s+([A-Z\- ]+)\s+seat', allotment, re.I)
        if m_against:
           text_near = m_against.group(1).upper()
           if 'EBC' in text_near or 'EB ' in text_near: found_cat = 'EBC'
           elif 'BC' in text_near: found_cat = 'BC'
           elif 'SC' in text_near: found_cat = 'SC'
           elif 'ST' in text_near: found_cat = 'ST'
           elif 'EWS' in text_near or 'E-UR' in text_near: found_cat = 'EWS'
           elif 'RCG' in text_near: found_cat = 'RCG'
           elif 'DQ' in text_near: found_cat = 'DQ'
           elif 'SMQ' in text_near: found_cat = 'SMQ'
        
        # Fallback to general text scan if Against not found
        else:
            if ' EBC ' in all_up or ' EB ' in all_up: found_cat = 'EBC'
            elif ' BC ' in all_up: found_cat = 'BC'
            elif ' SC ' in all_up: found_cat = 'SC'
            elif ' ST ' in all_up: found_cat = 'ST'
            elif ' EWS ' in all_up: found_cat = 'EWS'
            elif ' RCG ' in all_up: found_cat = 'RCG'
            elif ' DQ ' in all_up: found_cat = 'DQ'
            elif ' SMQ ' in all_up: found_cat = 'SMQ'

        seat_type = 'Female' if 'FEMALE' in all_up or found_cat == 'RCG' else 'General'

        # Recording the cutoff
        if found_cat in ranks:
            r = ranks[found_cat]
            key = (col, br, found_cat, seat_type)
            if key not in cutoffs or r > cutoffs[key]:
                cutoffs[key] = r
                
        # Also record UR cutoff for every allotment if it was allotted under UR
        if found_cat == 'UR' and 'UR' in ranks:
            key = (col, br, 'UR', seat_type)
            if key not in cutoffs or ranks['UR'] > cutoffs[key]:
                cutoffs[key] = ranks['UR']

    # Read All
    for i in range(len(reader.pages)):
        text = reader.pages[i].extract_text()
        blocks = re.split(r'(\d{12}\s+)', text)
        # re.split keeps the separator in the next item if grouped
        current = ""
        for b in blocks:
            if re.match(r'^\d{12}\s+', b):
                current = b
            else:
                if current:
                    process_allotment(current + b)
                    current = ""
        if i % 50 == 0: print(f"Processed {i} pages...")

    final_list = []
    for k, v in cutoffs.items():
        final_list.append({
            "collegeShort": k[0],
            "branch": k[1],
            "category": k[2],
            "seat_type": k[3],
            "closing": v
        })
    
    with open("perfect_2025_cutoffs.json", "w") as f:
        json.dump(final_list, f, indent=2)
    
    print(f"Extraction complete. Total unique cutoffs: {len(final_list)}")

if __name__ == "__main__":
    extract_all()
