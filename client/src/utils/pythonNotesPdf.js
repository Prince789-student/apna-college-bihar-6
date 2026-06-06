import jsPDF from 'jspdf';
import { getLogoBase64 } from './pdfHelper';

// Topic notes formatted in notebook style
const NOTEBOOK_SECTIONS = [
  {
    type: "topic",
    title: "1. Identifiers",
    definition: "An identifier is a name given to entities like variables, functions, classes, modules etc. in a Python program. It helps to identify them uniquely.",
    rulesTitle: "Rules for Identifiers:",
    rules: [
      "It can contain letters (a-z, A-Z), digits (0-9) and underscore (_).",
      "It must start with a letter or an underscore.",
      "It cannot start with a digit.",
      "It is case-sensitive (name and Name are different).",
      "It cannot be a Python keyword."
    ],
    examples: [
      "valid   -> my_var, _count, Total1, student_name",
      "invalid -> 1name, my-var, class, for"
    ]
  },
  {
    type: "topic",
    title: "2. Keywords",
    definition: "Keywords are reserved words in Python that have special meaning and cannot be used as identifiers (variable names, function names etc.).",
    examplesText: "False, None, True, and, as, assert, break, class, continue, def, del, elif, else, except, finally, for, from, global, if, import, in, is, lambda, nonlocal, not, or, pass, raise, return, try, while, with, yield.",
    note: "Keywords may change in future versions, so it is better to check using keyword module.",
    code: [
      "Check keywords: >>> import keyword",
      "                >>> keyword.kwlist"
    ]
  },
  {
    type: "topic",
    title: "3. Variables",
    definition: "A variable in Python is a named memory location (reference pointer) used to store data values. It is created the moment you assign a value to it, without any declaration.",
    rulesTitle: "Key Characteristics of Variables:",
    rules: [
      "No Declaration Needed: Unlike C/C++ or Java, Python has no command to declare a variable. It is created automatically when assigned.",
      "Dynamic Typing: Variables do not have a fixed data type. A variable can store an integer, and later store a string (e.g. x = 10 then x = 'Hi').",
      "Case-Sensitive: Variables are case-sensitive. For example, 'val', 'Val', and 'VAL' are three completely different variables.",
      "Memory Reference: Python variables act as pointers that point to the memory address of an object (value), rather than storing the actual value."
    ],
    subsections: [
      {
        title: "1. Variable Re-assignment (Dynamic Type):",
        bullets: [
          "x = 10       -> Here x stores an Integer",
          "x = \"Patna\"  -> Same x now stores a String value"
        ]
      },
      {
        title: "2. Multiple Assignment in Single Line:",
        bullets: [
          "a = b = c = 50       -> Assigns same value 50 to a, b, and c",
          "x, y, z = 5, 10, 15  -> Assigns x=5, y=10, z=15 respectively"
        ]
      }
    ],
    examples: [
      "a = 10          # integer variable",
      "name = \"Ravi\"   # string variable",
      "price = 25.5    # float variable",
      "is_pass = True  # boolean variable"
    ]
  },
  {
    type: "topic",
    title: "4. Operators",
    definition: "An operator is a symbol that performs operations on values and variables (operands). Python supports various categories of operators.",
    subsections: [
      {
        title: "1. Arithmetic Operators (For calculations):",
        bullets: [
          "+ (Addition)      : Adds values (e.g. 5 + 3 = 8)",
          "- (Subtraction)   : Subtracts values (e.g. 5 - 3 = 2)",
          "* (Multiplication) : Multiplies values (e.g. 5 * 3 = 15)",
          "/ (Division)       : Divides and returns float (e.g. 10 / 2 = 5.0)",
          "// (Floor Div)     : Divides and removes decimals (e.g. 10 // 3 = 3)",
          "% (Modulus)       : Returns remainder of division (e.g. 10 % 3 = 1)",
          "** (Exponent)     : Power calculations (e.g. 2 ** 3 = 8)"
        ]
      },
      {
        title: "2. Comparison Operators (Compares values & returns True/False):",
        bullets: [
          "== (Equal to)      : Checks if values are equal (e.g. 5 == 5 -> True)",
          "!= (Not equal to)  : Checks if different (e.g. 5 != 3 -> True)",
          "> (Greater than)   : e.g. 10 > 5 -> True",
          "< (Less than)      : e.g. 5 < 10 -> True",
          ">=, <=             : Greater than/Less than or equal to"
        ]
      },
      {
        title: "3. Assignment Operators (Store & update values):",
        bullets: [
          "=  (Assignment)    : Assigns value (e.g. x = 10)",
          "+= (Add & Assign)   : x += 5 is equivalent to x = x + 5",
          "-=, *=, /=, %=      : Subtract, multiply, divide, modulus & assign"
        ]
      },
      {
        title: "4. Logical Operators (Combine conditions):",
        bullets: [
          "and : Returns True only if BOTH conditions are True",
          "or  : Returns True if AT LEAST ONE condition is True",
          "not : Negates the boolean result (not True -> False)"
        ]
      },
      {
        title: "5. Identity Operators (Compares memory addresses):",
        bullets: [
          "is     : True if variables refer to the SAME object in memory",
          "is not : True if variables refer to DIFFERENT objects",
          "Note   : 'a = [1,2]' & 'b = [1,2]' -> a == b is True, but a is b is False"
        ]
      },
      {
        title: "6. Membership Operators (Search in sequences):",
        bullets: [
          "in     : True if element exists in string/list (e.g. 'P' in 'Python')",
          "not in : True if element does not exist (e.g. 'Z' not in 'Python')"
        ]
      }
    ]
  }
];

export async function generatePythonUnit1Notes() {
  const doc = new jsPDF('p', 'mm', 'a4');
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const logoBase64 = await getLogoBase64();

  let pageNum = 1;
  const lineSpacing = 7; // Slightly tighter for professional standard
  let currentY = 32;
  const marginX = 20; // Standard professional margin

  // Draw clean professional page layout
  const drawNotebookPage = (pdfDoc, pNum) => {
    // 1. Draw plain white background
    pdfDoc.setFillColor(255, 255, 255);
    pdfDoc.rect(0, 0, pageWidth, pageHeight, 'F');

    // 2. Center Watermark (Logo and Name grouped together in center)
    if (logoBase64) {
      pdfDoc.saveGraphicsState();
      try {
        const gState = new pdfDoc.GState({ opacity: 0.03 });
        pdfDoc.setGState(gState);
        // Logo in the middle
        pdfDoc.addImage(logoBase64, 'PNG', pageWidth / 2 - 40, pageHeight / 2 - 45, 80, 80);
        
        // Faded text directly below the center logo
        pdfDoc.setTextColor(148, 163, 184);
        pdfDoc.setFont('helvetica', 'bold');
        pdfDoc.setFontSize(26);
        pdfDoc.text("APNA COLLEGE BIHAR", pageWidth / 2, pageHeight / 2 + 45, { align: 'center' });
      } catch (e) {
        console.warn("Watermark error:", e);
      }
      pdfDoc.restoreGraphicsState();
    }

    // 3. Draw Header Branding
    // Logo on the top-left
    if (logoBase64) {
      pdfDoc.addImage(logoBase64, 'PNG', marginX, 5, 10, 10);
    }

    // Brand title next to logo on the left
    pdfDoc.setTextColor(15, 23, 42); // slate-900
    pdfDoc.setFont('helvetica', 'bold');
    pdfDoc.setFontSize(14);
    pdfDoc.text("APNA COLLEGE BIHAR", marginX + 12, 11.5);

    // Page number on the top-right
    pdfDoc.setFont('helvetica', 'bold');
    pdfDoc.setFontSize(9.5);
    pdfDoc.setTextColor(71, 85, 105); // slate-600
    pdfDoc.text(`Page - ${String(pNum).padStart(2, '0')}`, pageWidth - marginX - 18, 11.5);

    // Horizontal thin divider below header
    pdfDoc.setDrawColor(226, 232, 240); // slate-200
    pdfDoc.setLineWidth(0.5);
    pdfDoc.line(marginX, 18, pageWidth - marginX, 18);

    // 4. Subtitle: ONLY on the first page
    if (pNum === 1) {
      pdfDoc.setFont('helvetica', 'bold');
      pdfDoc.setFontSize(11);
      pdfDoc.setTextColor(79, 70, 229); // Indigo
      pdfDoc.text("Chapter - Python Unit 1 : Input and Output", marginX, 24);
    }

    // 5. Footer at the bottom of every page
    pdfDoc.setFont('helvetica', 'normal');
    pdfDoc.setFontSize(8.5);
    pdfDoc.setTextColor(148, 163, 184); // Soft grey
    pdfDoc.text("BEU - Apna College Bihar", pageWidth / 2, pageHeight - 8, { align: 'center' });
  };

  // Start with first page
  drawNotebookPage(doc, pageNum);
  currentY = 32; // Page 1 starts lower due to subtitle

  const checkPageBreak = (neededLines = 1) => {
    const spaceNeeded = neededLines * lineSpacing;
    if (currentY + spaceNeeded > pageHeight - 15) {
      doc.addPage();
      pageNum++;
      drawNotebookPage(doc, pageNum);
      currentY = 24; // Starts higher on subsequent pages since there's no subtitle
    }
  };

  // Render notes sections
  for (const sec of NOTEBOOK_SECTIONS) {
    if (sec.type === "question") {
      checkPageBreak(3);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(10.5);
      doc.setTextColor(220, 38, 38); // Red for Question
      
      const splitText = doc.splitTextToSize(sec.text, pageWidth - (2 * marginX));
      for (const segment of splitText) {
        checkPageBreak(1);
        doc.text(segment, marginX, currentY);
        currentY += lineSpacing;
      }
    } 
    
    else if (sec.type === "answer") {
      checkPageBreak(1.5);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(10.5);
      doc.setTextColor(5, 150, 105); // Green for Answer
      doc.text(sec.text, marginX, currentY);
      doc.line(marginX, currentY + 1, marginX + doc.getTextWidth(sec.text), currentY + 1); // clean underline
      currentY += lineSpacing + 2;
    } 
    
    else if (sec.type === "topic") {
      // Title
      checkPageBreak(2);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(11);
      doc.setTextColor(29, 78, 216); // Blue for topic title
      doc.text(sec.title, marginX, currentY);
      doc.line(marginX, currentY + 1, marginX + doc.getTextWidth(sec.title), currentY + 1); // Underline
      currentY += lineSpacing + 2;

      // Definition Box
      if (sec.definition) {
        const descLines = doc.splitTextToSize(sec.definition, pageWidth - (2 * marginX) - 30);
        const boxHeight = Math.max(1, descLines.length) * lineSpacing + 4;
        
        checkPageBreak(descLines.length + 2);

        // Draw clean light blue definition container box
        doc.setFillColor(243, 244, 246); // slate-100 grey background
        doc.rect(marginX, currentY - 5, pageWidth - (2 * marginX), boxHeight, 'F');
        doc.setDrawColor(209, 213, 219); // grey border
        doc.setLineWidth(0.3);
        doc.rect(marginX, currentY - 5, pageWidth - (2 * marginX), boxHeight, 'S');

        // Label Cell "Definition:"
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(220, 38, 38); // Red
        doc.text("Definition:", marginX + 3, currentY);

        // Content Cell text
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(31, 41, 55); // Dark text
        let tempY = currentY;
        for (const segment of descLines) {
          doc.text(segment, marginX + 26, tempY);
          tempY += lineSpacing;
        }

        currentY += boxHeight + 2;
      }

      // Rules Section
      if (sec.rulesTitle) {
        checkPageBreak(1.5);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(220, 38, 38); // Red
        doc.text(sec.rulesTitle, marginX, currentY);
        currentY += lineSpacing;

        doc.setFont('helvetica', 'normal');
        doc.setTextColor(31, 41, 55);
        for (const rule of sec.rules) {
          checkPageBreak(1.5);
          // Draw a small custom bullet point
          doc.setFillColor(29, 78, 216);
          doc.circle(marginX + 2, currentY - 1.2, 0.6, 'F');
          
          const splitRule = doc.splitTextToSize(rule, pageWidth - (2 * marginX) - 8);
          for (const segment of splitRule) {
            checkPageBreak(1);
            doc.text(segment, marginX + 5, currentY);
            currentY += lineSpacing;
          }
        }
        currentY += 2;
      }

      // Examples / Details list
      if (sec.examples) {
        checkPageBreak(1.5);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(5, 150, 105); // Green for Examples
        doc.text("Examples:", marginX, currentY);
        currentY += lineSpacing;

        doc.setFont('helvetica', 'normal');
        doc.setTextColor(31, 41, 55);
        for (const ex of sec.examples) {
          checkPageBreak(1.5);
          doc.text(ex, marginX + 4, currentY);
          currentY += lineSpacing;
        }
        currentY += 2;
      }

      // Single block text examples (like in Keywords)
      if (sec.examplesText) {
        checkPageBreak(2.5);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(5, 150, 105); // Green
        doc.text("Examples:", marginX, currentY);
        
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(31, 41, 55);
        const splitExs = doc.splitTextToSize(sec.examplesText, pageWidth - (2 * marginX) - 22);
        let tempY = currentY;
        splitExs.forEach((segment, sIdx) => {
          checkPageBreak(1);
          doc.text(segment, sIdx === 0 ? marginX + 22 : marginX, tempY);
          tempY += lineSpacing;
        });
        currentY = tempY + 2;
      }

      // Notes
      if (sec.note) {
        checkPageBreak(2);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(220, 38, 38); // Red
        doc.text("Note:", marginX, currentY);

        doc.setFont('helvetica', 'normal');
        doc.setTextColor(71, 85, 105); // Slate
        const splitNote = doc.splitTextToSize(sec.note, pageWidth - (2 * marginX) - 13);
        let tempY = currentY;
        splitNote.forEach((segment, sIdx) => {
          checkPageBreak(1);
          doc.text(segment, sIdx === 0 ? marginX + 13 : marginX, tempY);
          tempY += lineSpacing;
        });
        currentY = tempY + 2;
      }

      // Code blocks (monospaced Courier is standard for code blocks)
      if (sec.code) {
        checkPageBreak(sec.code.length + 1);
        doc.setFont('courier', 'bold');
        doc.setTextColor(31, 41, 55);
        for (const cLine of sec.code) {
          checkPageBreak(1);
          doc.text(cLine, marginX + 2, currentY);
          currentY += lineSpacing;
        }
        currentY += 2;
      }

      // Subsections (for Operators details)
      if (sec.subsections) {
        for (const sub of sec.subsections) {
          checkPageBreak(2);
          doc.setFont('helvetica', 'bold');
          doc.setTextColor(109, 40, 217); // Purple
          doc.text(sub.title, marginX, currentY);
          currentY += lineSpacing;

          doc.setFont('helvetica', 'normal');
          doc.setTextColor(31, 41, 55);
          for (const bullet of sub.bullets) {
            checkPageBreak(1.5);
            doc.setFillColor(29, 78, 216);
            doc.circle(marginX + 3, currentY - 1.2, 0.5, 'F');
            doc.text(bullet, marginX + 6, currentY);
            currentY += lineSpacing;
          }
          currentY += 2;
        }
      }
    }
  }

  // Save PDF
  doc.save("ACB_Python_Unit1_Handwritten_Notes.pdf");
}
