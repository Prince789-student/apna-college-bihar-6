import jsPDF from 'jspdf';

// Cache for the logo base64 string
let cachedLogoBase64 = null;

/**
 * Fetches the logo and converts it to a base64 string.
 */
export async function getLogoBase64() {
  if (cachedLogoBase64) return cachedLogoBase64;
  try {
    const resp = await fetch('/logo-acb.png?v=99');
    if (resp.ok) {
      const blob = await resp.blob();
      cachedLogoBase64 = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.readAsDataURL(blob);
      });
      return cachedLogoBase64;
    }
  } catch (e) {
    console.warn("Failed to load PDF branding logo", e);
  }
  return null;
}

/**
 * Applies professional header, footer, and repeating watermarks on a page.
 * @param {jsPDF} doc The jsPDF instance
 * @param {string} title Document Title
 * @param {number} pageNumber Current page number
 * @param {number} totalPages Total number of pages
 * @param {string|null} logoBase64 Base64 string of the logo
 */
export function applyPremiumBranding(doc, title, pageNumber, totalPages, logoBase64) {
  const pageWidth = doc.internal.pageSize.width;
  const pageHeight = doc.internal.pageSize.height;

  // 1. --- DRAW HEADER ---
  // Background band for header
  doc.setFillColor(248, 250, 252);
  doc.rect(0, 0, pageWidth, 26, 'F');
  
  // Header bottom divider line
  doc.setDrawColor(226, 232, 240);
  doc.setLineWidth(0.5);
  doc.line(0, 26, pageWidth, 26);

  // Logo on the left
  if (logoBase64) {
    try {
      doc.addImage(logoBase64, 'PNG', 15, 6, 14, 14);
    } catch (e) {
      console.warn("Error drawing header logo:", e);
    }
  }

  // Brand text next to logo
  doc.setTextColor(15, 23, 42); // slate-900
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.text("APNA COLLEGE BIHAR", logoBase64 ? 33 : 15, 12);
  
  doc.setTextColor(59, 130, 246); // blue-500
  doc.setFont("helvetica", "bold");
  doc.setFontSize(6);
  doc.text("OFFICIAL STUDY ENGINE", logoBase64 ? 33 : 15, 17);

  doc.setTextColor(100, 116, 139); // slate-500
  doc.setFont("helvetica", "normal");
  doc.setFontSize(7);
  doc.text("apnacollegebihar.online", logoBase64 ? 33 : 15, 21);

  // Right-aligned Document Title
  doc.setTextColor(71, 85, 105); // slate-600
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  const upperTitle = title.toUpperCase();
  doc.text(upperTitle, pageWidth - 15, 15, { align: 'right' });


  // 2. --- DRAW FOOTER ---
  // Footer separator line
  doc.setDrawColor(226, 232, 240);
  doc.setLineWidth(0.5);
  doc.line(15, pageHeight - 20, pageWidth - 15, pageHeight - 20);

  // Footer text
  doc.setTextColor(100, 116, 139); // slate-500
  doc.setFont("helvetica", "bold");
  doc.setFontSize(7);
  doc.text("Bihar Engineering University - Apna College Bihar", 15, pageHeight - 12);
  doc.text("apnacollegebihar.online", pageWidth / 2, pageHeight - 12, { align: 'center' });
  doc.text(`Page ${pageNumber} of ${totalPages}`, pageWidth - 15, pageHeight - 12, { align: 'right' });


  // 3. --- DRAW WATERMARKS ---
  // We use GState for transparency so it doesn't cover content readability
  doc.saveGraphicsState();
  try {
    const gState = new doc.GState({ opacity: 0.03 });
    doc.setGState(gState);
  } catch (e) {
    // Fallback if GState is not available
    doc.setTextColor(240, 240, 240);
  }

  // A. Large Diagonal Center Watermark
  if (logoBase64) {
    try {
      doc.addImage(logoBase64, 'PNG', pageWidth / 2 - 35, pageHeight / 2 - 45, 70, 70);
    } catch (e) {
      console.warn("Error drawing center watermark logo:", e);
    }
  }

  doc.setTextColor(148, 163, 184); // slate-400
  doc.setFont("helvetica", "bold");
  doc.setFontSize(28);
  doc.text("APNA COLLEGE BIHAR", pageWidth / 2, pageHeight / 2 + 38, { align: 'center', angle: 30 });
  doc.setFontSize(14);
  doc.text("apnacollegebihar.online", pageWidth / 2, pageHeight / 2 + 48, { align: 'center', angle: 30 });

  // B. Repeating Diagonal Watermark Grid across the entire page
  doc.setFontSize(8);
  const stepX = 70;
  const stepY = 70;
  for (let x = 20; x < pageWidth; x += stepX) {
    for (let y = 40; y < pageHeight - 30; y += stepY) {
      // Skip the very center where the large watermark is
      const distToCenter = Math.hypot(x - pageWidth / 2, y - pageHeight / 2);
      if (distToCenter < 60) continue;

      if (logoBase64) {
        try {
          doc.addImage(logoBase64, 'PNG', x - 6, y - 10, 12, 12);
        } catch (e) {}
      }
      doc.text("Apna College Bihar", x, y + 6, { align: 'center', angle: 30 });
      doc.text("apnacollegebihar.online", x, y + 10, { align: 'center', angle: 30 });
    }
  }

  doc.restoreGraphicsState();
}

/**
 * Standard method to apply premium branding to all pages in a jsPDF document.
 * @param {jsPDF} doc The jsPDF instance
 * @param {string} title Document title
 * @param {string|null} logoBase64 Base64 logo representation
 */
export function brandFullDocument(doc, title, logoBase64) {
  const totalPages = doc.internal.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    applyPremiumBranding(doc, title, i, totalPages, logoBase64);
  }
}
