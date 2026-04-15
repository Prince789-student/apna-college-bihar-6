import json
with open("extracted_data.json", "r") as f:
    data = json.load(f)

ews_ratios = []
for d in data:
    if "EWS" in d['cat_type']:
        ews_ratios.append(d['cat_rank'] / d['ur'])

if ews_ratios:
    print(f"EWS Ratio: {sum(ews_ratios)/len(ews_ratios):.4f}")
else:
    print("No EWS entries found with cat_type")
