import re
import json
from pypdf import PdfReader

def extract_ranks():
    reader = PdfReader("counselling.pdf")
    all_ranks = []

    for i in range(len(reader.pages)):
        text = reader.pages[i].extract_text()
        
        # Split into blocks by Application No
        blocks = re.split(r'(\d{12}\s+)', text)
        current_id = ""
        for b in blocks:
            if re.match(r'^\d{12}\s+', b):
                current_id = b
            elif current_id:
                block_text = current_id + b
                # Extract AIR
                m_air = re.search(r'(\d{5,7})\s+[A-Z ]+\s+[MF]\s+', block_text)
                if not m_air: continue
                air = int(m_air.group(1))
                
                # Extract UR Rank
                m_ur = re.search(r'UR-\s+(\d+)', block_text)
                if not m_ur: continue
                ur = int(m_ur.group(1))
                
                # Extract All Cat Ranks
                # e.g. EBC- 12, BC- 14, RCG- 1
                cat_ranks = {}
                # Match [Abbr]- [Rank]
                # Avoid UR- which we already have
                m_cats = re.finditer(r'([A-Z]+)-\s+(\d+)', block_text)
                for mc in m_cats:
                    abbr = mc.group(1)
                    val = int(mc.group(2))
                    if abbr != 'UR':
                        cat_ranks[abbr] = val
                
                # Gender
                gender = 'F' if ' F ' in block_text else 'M'
                
                all_ranks.append({
                    "air": air,
                    "ur": ur,
                    "gender": gender,
                    "cat_ranks": cat_ranks
                })
                current_id = ""
        
        if i % 100 == 0: print(f"Processed {i} pages...")

    all_ranks.sort(key=lambda x: x['air'])
    with open("rank_mapping_full.json", "w") as f:
        json.dump(all_ranks, f, indent=2)

    print(f"Extraction complete. Total rank records: {len(all_ranks)}")

if __name__ == "__main__":
    extract_ranks()
