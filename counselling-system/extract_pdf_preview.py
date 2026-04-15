from pypdf import PdfReader

reader = PdfReader("counselling.pdf")
text = ""
for i in range(min(5, len(reader.pages))):
    text += f"--- Page {i+1} ---\n"
    text += reader.pages[i].extract_text() + "\n"

with open("pdf_preview.txt", "w", encoding="utf-8") as f:
    f.write(text)

print("Extraction complete. Check pdf_preview.txt")
