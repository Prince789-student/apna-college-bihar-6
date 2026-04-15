import json
with open("extracted_data.json", "r") as f:
    data = json.load(f)

rcg_ratios = []
for d in data:
    if "RCG" in d['cat_type']:
        rcg_ratios.append(d['cat_rank'] / d['ur'])

if rcg_ratios:
    print(f"RCG Ratio: {sum(rcg_ratios)/len(rcg_ratios):.4f}")
else:
    print("No RCG entries found")
