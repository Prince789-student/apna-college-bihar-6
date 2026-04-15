import json

with open("extracted_data.json", "r") as f:
    data = json.load(f)

# Sort by AIR
data.sort(key=lambda x: x['air'])

# AIR -> UR Rank mapping points
summary_points = []

# Range from 20k to 1000k (1M)
for i in range(20000, 1000001, 20000):
   matches = [d['ur'] for d in data if i - 10000 <= d['air'] <= i + 10000]
   if matches:
       avg_ur = sum(matches) / len(matches)
       summary_points.append({'air': i, 'ur': int(avg_ur)})

print("AIR to UR Rank Summary Points:")
print(json.dumps(summary_points, indent=2))

# Category Ranks
categories = {}
cat_type_map = {
    'EB': 'EBC',
    'BC': 'BC',
    'SC': 'SC',
    'ST': 'ST',
    'EW': 'EWS',
    'UR': 'UR'
}

for d in data:
    cat = cat_type_map.get(d['cat'], d['cat'])
    if d['cat_rank'] > 0:
        if cat not in categories:
            categories[cat] = []
        categories[cat].append(d['cat_rank'] / d['ur'])

print("\nCategory Ratios (Cat Rank / UR Rank):")
for cat, ratios in categories.items():
    if ratios:
        print(f"{cat}: {sum(ratios) / len(ratios):.4f}")
