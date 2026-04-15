import re
from pypdf import PdfReader
import json

def extract():
    reader = PdfReader("counselling.pdf")
    data = []
    
    # regex for line like: 250310576163 2511201006153 28003 INDEMAM AHMAD M EB UR-    4 EBC-    1
    # We want AIR (28003), GENDER (M), CAT (EB), UR_RANK (4), and potentially CAT_RANK (1)
    # The AIR is the 3rd number in the sequence
    line_regex = re.compile(r'(\d{10,})\s+(\d{10,})\s+(\d+)\s+.*?\s+([MF])\s+([A-Z]+)\s+UR-\s+(\d+)')
    cat_rank_regex = re.compile(r'([A-Z]+)-\s+(\d+)')

    for page_idx, page in enumerate(reader.pages):
        text = page.extract_text()
        for line in text.split('\n'):
            match = line_regex.search(line)
            if match:
                air = int(match.group(3))
                gender = match.group(4)
                category = match.group(5)
                ur_rank = int(match.group(6))
                
                # Check for category rank in the remainder of the line
                cat_type = ""
                cat_rank = 0
                remaining = line[match.end():]
                cat_match = cat_rank_regex.search(remaining)
                if cat_match:
                    cat_type = cat_match.group(1)
                    cat_rank = int(cat_match.group(2))
                
                data.append({
                    'air': air,
                    'ur': ur_rank,
                    'cat': category,
                    'cat_type': cat_type,
                    'cat_rank': cat_rank,
                    'gender': gender
                })
        if page_idx % 50 == 0:
            print(f"Processed {page_idx} pages...")

    with open("extracted_data.json", "w") as f:
        json.dump(data, f)
    
    print(f"Total entries extracted: {len(data)}")

if __name__ == "__main__":
    extract()
