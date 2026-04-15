import json

def analyze():
    with open("rank_mapping_full.json", "r") as f:
        data = json.load(f)

    # 1. AIR to UR Mapping
    map_points = []
    for i in range(0, len(data), 200):
        map_points.append({"air": data[i]['air'], "ur": data[i]['ur']})
    map_points.append({"air": data[-1]['air'], "ur": data[-1]['ur']})

    # 2. Category Ratios
    cat_stats = {} 
    
    for r in data:
        ur = r['ur']
        cats = r['cat_ranks']
        for abbr, val in cats.items():
            if val > 0:
                if abbr not in cat_stats: cat_stats[abbr] = []
                cat_stats[abbr].append(val / ur)

    final_ratios = {}
    for abbr, ratios in cat_stats.items():
        ratios.sort()
        median_ratio = ratios[len(ratios)//2]
        final_ratios[abbr] = round(median_ratio, 4)

    # 3. Predictor Logic
    # We will put these into a constant in the JS file.
    
    output = {
        "ugeac_rank_map": map_points,
        "category_ratios": final_ratios
    }

    with open("high_precision_rank_data.json", "w") as f:
        json.dump(output, f, indent=2)

    print("Ratios:", final_ratios)

if __name__ == "__main__":
    analyze()
