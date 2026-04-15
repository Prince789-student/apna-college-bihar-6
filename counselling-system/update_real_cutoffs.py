import json

# Load perfect 2025 cutoffs
with open("perfect_2025_cutoffs.json", "r") as f:
    res25 = json.load(f)

# Read current real_cutoffs.js up to line 14395
# Actually we can just keep everything until the export const cutoffs2025
filepath = r"c:\Users\princ\Downloads\ai\edu-platform-full\client\src\real_cutoffs.js"
with open(filepath, "r", encoding="utf-8") as f:
    lines = f.readlines()

output_lines = []
for line in lines:
    if "export const cutoffs2025" in line:
        break
    output_lines.append(line)

# Add new 2025 export
output_lines.append("export const cutoffs2025 = " + json.dumps(res25, indent=2) + ";\n")

with open(filepath, "w", encoding="utf-8") as f:
    f.writelines(output_lines)

print(f"Updated real_cutoffs.js successfully. Total 2025 entries: {len(res25)}")
