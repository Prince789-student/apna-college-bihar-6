import os

with open('old2.jsx', 'r', encoding='utf-8') as f:
    old_code = f.read()

with open('client/src/pages/StudyDashboard.jsx', 'r', encoding='utf-8') as f:
    curr_code = f.read()

# Replace bg-[#161c2c] with bg-slate-50 everywhere in old code
old_code = old_code.replace('bg-[#161c2c]', 'bg-slate-50')

# Extract the new YouTube portal from curr_code
start_idx = curr_code.find('      {/* ── Main High Impact YouTube Portal ── */}')
end_idx = curr_code.find('      {/* MODALS */}')

if start_idx != -1 and end_idx != -1:
    new_youtube_portal = curr_code[start_idx:end_idx]
else:
    print('Could not find youtube portal')
    exit(1)

# Now in old_code, find the old YouTube broadcast and replace it
# Wait! In old2.jsx, it uses unicode for the dashed lines in comments.
# "      {/* ΓöÇΓöÇ YouTube Broadcast ΓöÇΓöÇ */}"
# Let's just find "YouTube Broadcast"
old_yt_start = old_code.find('{/* \u2500\u2500 YouTube Broadcast \u2500\u2500 */}')
if old_yt_start == -1:
    old_yt_start = old_code.find('YouTube Broadcast')
    # rewind to the `{/*`
    old_yt_start = old_code.rfind('{/*', 0, old_yt_start)
    
old_yt_end = old_code.find('{/* TAB: FOCUS TIMER */}', old_yt_start)

if old_yt_start != -1 and old_yt_end != -1:
    # also wrap the new youtube portal so it only shows on overview or globally?
    # the old youtube broadcast was showing globally below the tabs.
    merged = old_code[:old_yt_start] + new_youtube_portal + "\n      " + old_code[old_yt_end:]
    
    with open('client/src/pages/StudyDashboard.jsx', 'w', encoding='utf-8') as out:
        out.write(merged)
    print("Merged successfully.")
else:
    print(f"Could not find old youtube broadcast. start={old_yt_start}, end={old_yt_end}")

