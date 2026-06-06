import jsPDF from 'jspdf';
import { getLogoBase64 } from './pdfHelper';

// Topic notes formatted as detailed questions and answers in notebook style
const NOTEBOOK_SECTIONS = [
  {
    type: "question",
    text: "QUESTION 1: Define the following Python fundamentals: identifiers, keywords, variables and expressions."
  },
  {
    type: "answer",
    text: "Answer:"
  },
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
    definition: "Variables are containers used to store data values. In Python, variables are created when you assign a value to them.",
    examples: [
      "a = 10          # integer variable",
      "name = \"Ravi\"   # string variable",
      "price = 25.5    # float variable",
      "is_pass = True  # boolean variable"
    ]
  },
  {
    type: "question",
    text: "QUESTION 2: Explain different categories of Operators in Python with clear examples and truth tables."
  },
  {
    type: "answer",
    text: "Answer:"
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
  const lineSpacing = 8;
  let currentY = 32;

  // Draw lined notebook page
  const drawNotebookPage = (pdfDoc, pNum) => {
    // 1. Draw warm notebook paper background
    pdfDoc.setFillColor(254, 254, 252);
    pdfDoc.rect(0, 0, pageWidth, pageHeight, 'F');

    // 2. Draw vertical red margin lines on the left
    pdfDoc.setDrawColor(248, 113, 113); // Soft red
    pdfDoc.setLineWidth(0.4);
    pdfDoc.line(22, 0, 22, pageHeight);
    pdfDoc.line(22.8, 0, 22.8, pageHeight);

    // 3. Draw horizontal blue ruling lines
    pdfDoc.setDrawColor(191, 219, 254); // Soft blue
    pdfDoc.setLineWidth(0.3);
    for (let y = 30; y < pageHeight - 10; y += lineSpacing) {
      pdfDoc.line(0, y, pageWidth, y);
    }

    // 4. Center Watermark Logo
    if (logoBase64) {
      pdfDoc.saveGraphicsState();
      try {
        const gState = new pdfDoc.GState({ opacity: 0.04 });
        pdfDoc.setGState(gState);
        pdfDoc.addImage(logoBase64, 'PNG', pageWidth / 2 - 45, pageHeight / 2 - 45, 90, 90);
        
        // Faded bottom watermark text
        pdfDoc.setTextColor(148, 163, 184);
        pdfDoc.setFont('helvetica', 'bold');
        pdfDoc.setFontSize(28);
        pdfDoc.text("APNA COLLEGE BIHAR", pageWidth / 2, pageHeight - 35, { align: 'center' });
      } catch (e) {
        console.warn("Watermark error:", e);
      }
      pdfDoc.restoreGraphicsState();
    }

    // 5. Draw Header Branding (Matches exactly the layout in user's image)
    // Logo in top-left
    if (logoBase64) {
      pdfDoc.addImage(logoBase64, 'PNG', 12, 4, 11, 11);
    }

    // Brand title next to logo
    pdfDoc.setTextColor(31, 41, 55); // Slate-800
    pdfDoc.setFont('helvetica', 'bold');
    pdfDoc.setFontSize(16);
    pdfDoc.text("APNA COLLEGE BIHAR", 26, 12);

    // Page No and Date boxes on top-right
    pdfDoc.setDrawColor(220, 38, 38); // Red boxes
    pdfDoc.setLineWidth(0.4);
    
    // Page No box
    pdfDoc.rect(155, 4, 43, 6);
    pdfDoc.setFont('courier', 'italic');
    pdfDoc.setFontSize(9);
    pdfDoc.setTextColor(220, 38, 38);
    pdfDoc.text(`Page No.      ${pNum}`, 157, 8);

    // Date box
    pdfDoc.rect(155, 12, 43, 6);
    pdfDoc.text("Date :    /    /    ", 157, 16.5);

    // Horizontal double line separator below header
    pdfDoc.setDrawColor(79, 70, 229); // Indigo line
    pdfDoc.setLineWidth(0.5);
    pdfDoc.line(5, 23.5, pageWidth - 5, 23.5);
    pdfDoc.line(5, 24.2, pageWidth - 5, 24.2);

    // Subtitle below divider
    pdfDoc.setFont('courier', 'bolditalic');
    pdfDoc.setFontSize(12);
    pdfDoc.setTextColor(109, 40, 217); // Purple
    pdfDoc.text("Chapter - Python Unit 1 : Input and Output", 26, 28.5);
  };

  // Start with first page
  drawNotebookPage(doc, pageNum);
  currentY = 37;

  const checkPageBreak = (neededLines = 1) => {
    const spaceNeeded = neededLines * lineSpacing;
    if (currentY + spaceNeeded > pageHeight - 15) {
      doc.addPage();
      pageNum++;
      drawNotebookPage(doc, pageNum);
      currentY = 37;
    }
  };

  // Render notes sections
  for (const sec of NOTEBOOK_SECTIONS) {
    if (sec.type === "question") {
      checkPageBreak(3);
      doc.setFont('courier', 'bolditalic');
      doc.setFontSize(10.5);
      doc.setTextColor(220, 38, 38); // Red for Question
      
      const splitText = doc.splitTextToSize(sec.text, pageWidth - 35);
      for (const segment of splitText) {
        checkPageBreak(1);
        doc.text(segment, 26, currentY - 1.5);
        currentY += lineSpacing;
      }
    } 
    
    else if (sec.type === "answer") {
      checkPageBreak(1.5);
      doc.setFont('courier', 'bolditalic');
      doc.setFontSize(10.5);
      doc.setTextColor(5, 150, 105); // Green for Answer
      doc.text(sec.text, 26, currentY - 1.5);
      doc.line(26, currentY, 41, currentY); // underline Answer
      currentY += lineSpacing;
    } 
    
    else if (sec.type === "topic") {
      // Title
      checkPageBreak(1.5);
      doc.setFont('courier', 'bolditalic');
      doc.setFontSize(10.5);
      doc.setTextColor(29, 78, 216); // Blue for topic title
      doc.text(sec.title, 26, currentY - 1.5);
      doc.line(26, currentY, 26 + doc.getTextWidth(sec.title), currentY); // underline
      currentY += lineSpacing;

      // Definition Box
      if (sec.definition) {
        const descLines = doc.splitTextToSize(sec.definition, pageWidth - 72);
        const boxHeight = Math.max(1, descLines.length) * lineSpacing;
        
        checkPageBreak(descLines.length + 1);

        // Draw outer borders for definition box
        doc.setDrawColor(29, 78, 216); // Blue box borders
        doc.setLineWidth(0.4);
        doc.rect(26, currentY - 6.5, pageWidth - 42, boxHeight);
        doc.line(60, currentY - 6.5, 60, currentY - 6.5 + boxHeight); // vertical separator inside box

        // Label Cell "Definition:"
        doc.setFont('courier', 'bolditalic');
        doc.setTextColor(220, 38, 38); // Red
        doc.text("Definition:", 28, currentY - 1.5);

        // Content Cell text
        doc.setFont('courier', 'italic');
        doc.setTextColor(31, 41, 55); // Dark text
        let tempY = currentY;
        for (const segment of descLines) {
          doc.text(segment, 62, tempY - 1.5);
          tempY += lineSpacing;
        }

        currentY += boxHeight;
      }

      // Rules Section
      if (sec.rulesTitle) {
        checkPageBreak(1.5);
        doc.setFont('courier', 'bolditalic');
        doc.setTextColor(220, 38, 38); // Red
        doc.text(sec.rulesTitle, 28, currentY - 1.5);
        currentY += lineSpacing;

        doc.setFont('courier', 'italic');
        doc.setTextColor(31, 41, 55);
        for (const rule of sec.rules) {
          checkPageBreak(1.5);
          // Draw a small custom bullet point
          doc.setFillColor(29, 78, 216);
          doc.circle(30, currentY - 3, 0.6, 'F');
          
          const splitRule = doc.splitTextToSize(rule, pageWidth - 45);
          let firstSeg = true;
          for (const segment of splitRule) {
            checkPageBreak(1);
            doc.text(segment, 33, currentY - 1.5);
            currentY += lineSpacing;
          }
        }
      }

      // Examples / Details list
      if (sec.examples) {
        checkPageBreak(1.5);
        doc.setFont('courier', 'bolditalic');
        doc.setTextColor(5, 150, 105); // Green for Examples
        doc.text("Examples:", 28, currentY - 1.5);
        currentY += lineSpacing;

        doc.setFont('courier', 'italic');
        doc.setTextColor(31, 41, 55);
        for (const ex of sec.examples) {
          checkPageBreak(1.5);
          doc.text(ex, 30, currentY - 1.5);
          currentY += lineSpacing;
        }
      }

      // Single block text examples (like in Keywords)
      if (sec.examplesText) {
        checkPageBreak(2.5);
        doc.setFont('courier', 'bolditalic');
        doc.setTextColor(5, 150, 105); // Green
        doc.text("Examples:", 28, currentY - 1.5);
        
        doc.setFont('courier', 'italic');
        doc.setTextColor(31, 41, 55);
        const splitExs = doc.splitTextToSize(sec.examplesText, pageWidth - 55);
        let tempY = currentY;
        splitExs.forEach((segment, sIdx) => {
          checkPageBreak(1);
          doc.text(segment, sIdx === 0 ? 50 : 28, tempY - 1.5);
          tempY += lineSpacing;
        });
        currentY = tempY;
      }

      // Notes
      if (sec.note) {
        checkPageBreak(2);
        doc.setFont('courier', 'bolditalic');
        doc.setTextColor(220, 38, 38); // Red
        doc.text("Note:", 28, currentY - 1.5);

        doc.setFont('courier', 'italic');
        doc.setTextColor(71, 85, 105); // Slate
        const splitNote = doc.splitTextToSize(sec.note, pageWidth - 45);
        let tempY = currentY;
        splitNote.forEach((segment, sIdx) => {
          checkPageBreak(1);
          doc.text(segment, sIdx === 0 ? 41 : 28, tempY - 1.5);
          tempY += lineSpacing;
        });
        currentY = tempY;
      }

      // Code blocks
      if (sec.code) {
        checkPageBreak(sec.code.length + 1);
        doc.setFont('courier', 'bolditalic');
        doc.setTextColor(31, 41, 55);
        for (const cLine of sec.code) {
          checkPageBreak(1);
          doc.text(cLine, 28, currentY - 1.5);
          currentY += lineSpacing;
        }
      }

      // Subsections (for Operators details)
      if (sec.subsections) {
        for (const sub of sec.subsections) {
          checkPageBreak(2);
          doc.setFont('courier', 'bolditalic');
          doc.setTextColor(109, 40, 217); // Purple
          doc.text(sub.title, 28, currentY - 1.5);
          currentY += lineSpacing;

          doc.setFont('courier', 'italic');
          doc.setTextColor(31, 41, 55);
          for (const bullet of sub.bullets) {
            checkPageBreak(1.5);
            doc.setFillColor(29, 78, 216);
            doc.circle(32, currentY - 3, 0.5, 'F');
            doc.text(bullet, 35, currentY - 1.5);
            currentY += lineSpacing;
          }
        }
      }
    }
  }

  // Save PDF
  doc.save("ACB_Python_Unit1_Handwritten_Notes.pdf");
}
