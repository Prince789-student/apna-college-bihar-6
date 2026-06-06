import jsPDF from 'jspdf';

// Beautiful detailed handwritten notes content for Python Unit 1
const UNIT1_TOPICS = [
  {
    title: "1. Identifiers in Python",
    content: [
      "What is an Identifier?",
      "An identifier is a name used to identify a variable, function, class, or any other object in a Python program.",
      "In simple words, it is the name we give to something in a program so we can use it later.",
      "",
      "Example:",
      "  name = \"Prince\"   --> 'name' is an identifier",
      "  age = 18           --> 'age' is an identifier",
      "  college = \"GEC\"    --> 'college' is an identifier",
      "",
      "Rules for Identifiers:",
      "1. Must start with a letter (a-z, A-Z) or an underscore (_). Can NOT start with a number.",
      "   - Correct: name, _age",
      "   - Wrong: 1name, 2age",
      "2. Can contain letters, numbers, and underscores. Special characters (like @, $, %, -) are NOT allowed.",
      "   - Correct: student1, roll_no",
      "   - Wrong: student@1, roll-no",
      "3. Spaces are not allowed.",
      "   - Correct: student_name",
      "   - Wrong: student name",
      "4. Keywords cannot be used as identifiers (e.g. if, for, while, class).",
      "5. Python is Case Sensitive (e.g. 'name' and 'Name' are two different identifiers)."
    ]
  },
  {
    title: "2. Keywords in Python",
    content: [
      "What are Keywords?",
      "Keywords are special reserved words in Python that have predefined meanings. They are used by Python to perform specific tasks. We cannot use them as variable names or identifiers.",
      "",
      "Example: if, for, while, break, continue, def, class, return, import, True, False, None, etc.",
      "",
      "Key Points for Exams:",
      "- Keywords tell Python what action to perform (e.g., 'for' starts a loop, 'if' makes decisions).",
      "- You can print all keywords in Python using:",
      "  import keyword",
      "  print(keyword.kwlist)",
      "- Keywords are reserved and cannot be reassigned. Writing 'for = 10' will throw a SyntaxError."
    ]
  },
  {
    title: "3. Statements and Expressions",
    content: [
      "What is an Expression?",
      "An expression is a combination of values, variables, and operators that produces a result. Anything Python can evaluate and reduce to a single value is an expression.",
      "  Examples: 5 + 3 (produces 8), a + b, age > 18 (produces True/False).",
      "",
      "What is a Statement?",
      "A statement is an instruction that Python executes. It tells Python to perform an action.",
      "  Examples: x = 10 (Assignment Statement), print(\"Hello\") (Print Statement), loops and conditionals.",
      "",
      "Comparison Table:",
      "  - Expression: Produces a value | Example: 5 + 3",
      "  - Statement: Performs an action | Example: x = 5 + 3"
    ]
  },
  {
    title: "4. Variables in Python",
    content: [
      "What is a Variable?",
      "A variable is a named memory location used to store data values. Think of it as a labeled container or box where you store information that can be modified during program execution.",
      "",
      "Syntax:",
      "  variable_name = value",
      "  e.g. x = 100",
      "",
      "Key Features:",
      "- Variable values can be changed during execution.",
      "- Multiple variable assignment: a, b, c = 10, 20, 30",
      "- Assigning same value: x = y = z = 100",
      "- Python is dynamically typed (type is detected automatically; no need to declare it)."
    ]
  },
  {
    title: "5. Operators in Python",
    content: [
      "An operator is a special symbol that performs operations on operands (variables and values).",
      "",
      "Types of Operators:",
      "1. Arithmetic: +, -, *, /, // (Floor Division), % (Modulus), ** (Exponent)",
      "   - 7 / 2 results in 3.5 (Float division)",
      "   - 7 // 2 results in 3 (Floor division - integer part)",
      "   - 7 % 2 results in 1 (Remainder)",
      "   - 2 ** 3 results in 8 (2 raised to power 3)",
      "2. Comparison: ==, !=, >, <, >=, <=",
      "3. Logical: and, or, not",
      "4. Assignment: =, +=, -=, *=, /=, %=",
      "5. Membership: in, not in (checks if value exists in a sequence)",
      "6. Identity: is, is not (compares memory locations/objects)"
    ]
  },
  {
    title: "6. Operator Precedence & Associativity",
    content: [
      "Precedence: Decides which operator is executed first when an expression has multiple operators.",
      "  Example: 10 + 5 * 2 results in 20, not 30, because '*' has higher precedence than '+'.",
      "  Parentheses () always have the highest priority.",
      "",
      "Associativity: Decides the direction of evaluation (Left to Right or Right to Left) when operators have the SAME precedence.",
      "  - Left to Right: +, -, *, /, //, %  (e.g. 10 - 5 + 2 -> 5 + 2 = 7)",
      "  - Right to Left: Exponent (**)     (e.g. 2 ** 3 ** 2 -> 2 ** 9 = 512)"
    ]
  },
  {
    title: "7. Data Types in Python",
    content: [
      "Every value in Python has a data type. Python automatically detects it.",
      "",
      "Categories & Examples:",
      "- Numeric: int (10, -5), float (3.14, 2.0), complex (2+3j)",
      "- Boolean: bool (True, False)",
      "- Sequence: str (\"Hello\"), list ([1,2,3]), tuple ((1,2,3))",
      "- Set: set ({1,2,3})",
      "- Mapping: dict ({\"name\": \"Prince\"})",
      "- NoneType: None (represents empty or no value)",
      "",
      "Mutable vs Immutable:",
      "  - Mutable (can be changed): list, set, dict",
      "  - Immutable (cannot be changed): int, float, str, tuple"
    ]
  },
  {
    title: "8. Indentation in Python",
    content: [
      "Indentation refers to the spaces or tabs at the beginning of a line of code.",
      "Unlike C/C++/Java which use braces {} to define code blocks, Python uses indentation.",
      "",
      "Key Rules:",
      "- Standard practice is 4 spaces.",
      "- All lines inside the same block must have the same indentation level.",
      "- Mixing tabs and spaces will throw an IndentationError.",
      "- Indentation makes Python code highly readable and structured."
    ]
  },
  {
    title: "9. Comments in Python",
    content: [
      "Comments are explanatory text ignored by Python interpreter during execution.",
      "",
      "Types of Comments:",
      "1. Single-Line: Starts with # symbol",
      "   e.g. # This is a comment",
      "2. Inline: Comment at the end of a line of code",
      "   e.g. x = 10  # Store value",
      "3. Multi-Line: Using multiple # symbols or triple quotes (''' or \"\"\") as docstrings."
    ]
  },
  {
    title: "10. Reading Input",
    content: [
      "We use the input() function to take input from the user.",
      "Syntax: variable = input(\"Prompt Message\")",
      "",
      "CRITICAL POINT:",
      "  input() ALWAYS returns a string. If you need numerical calculations, you must explicitly convert it (Type Casting).",
      "",
      "Examples:",
      "  age = int(input(\"Enter age: \"))     --> converts string to integer",
      "  price = float(input(\"Enter price: \")) --> converts string to float",
      "  a, b = map(int, input().split())     --> read multiple space-separated integers"
    ]
  },
  {
    title: "11. Print Output",
    content: [
      "We use the print() function to display output on the screen.",
      "Examples:",
      "  print(\"Hello World\")",
      "  print(100)",
      "  print(\"Name:\", name, \"Age:\", age)",
      "",
      "Control parameters:",
      "  - sep: separator between items (default is space ' ')",
      "  - end: character printed at the end of statement (default is newline '\\n')"
    ]
  },
  {
    title: "12. Type Conversions",
    content: [
      "1. Implicit Type Conversion (Coercion):",
      "   Python automatically converts one data type to another without user intervention.",
      "   e.g. x = 10 (int) + 5.5 (float) -> x becomes 15.5 (float) to avoid data loss.",
      "",
      "2. Explicit Type Conversion (Type Casting):",
      "   User manually converts the data type using built-in constructor functions:",
      "   - int(), float(), str(), list(), tuple(), set(), dict()"
    ]
  },
  {
    title: "13. type() Function and is Operator",
    content: [
      "type() function: Used to check the data type of any object.",
      "  e.g. print(type(10))     --> Output: <class 'int'>",
      "       print(type(\"acb\"))  --> Output: <class 'str'>",
      "",
      "is operator: Identity operator that checks if two variables refer to the SAME object in memory.",
      "  - '==' compares values.",
      "  - 'is' compares memory address (identity).",
      "  e.g. x = [1, 2], y = [1, 2] -> x == y is True, but x is y is False (different objects in memory)."
    ]
  },
  {
    title: "14. Dynamic and Strongly Typed Language",
    content: [
      "Dynamic Typing:",
      "You don't need to specify variable data types beforehand. The type is bound to the value at runtime.",
      "  e.g. x = 10 (int), then x = \"Hello\" (str) is perfectly valid.",
      "",
      "Strong Typing:",
      "Python enforces strict type matching. It won't perform unsafe implicit conversions.",
      "  e.g. \"Age: \" + 18 will raise a TypeError. You must write: \"Age: \" + str(18)."
    ]
  }
];

export async function generatePythonUnit1Notes() {
  const doc = new jsPDF('p', 'mm', 'a4');
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const marginX = 30; // Leave space for vertical red margin line at X=25
  const lineSpacing = 8; // Notebook line height

  let currentY = 32;
  let pageNum = 1;

  // Function to draw lined notebook background
  const drawNotebookPage = (pdfDoc, pNum) => {
    // 1. Draw warm cream background
    pdfDoc.setFillColor(255, 253, 240);
    pdfDoc.rect(0, 0, pageWidth, pageHeight, 'F');

    // 2. Draw vertical red margin line
    pdfDoc.setDrawColor(255, 77, 77); // Red
    pdfDoc.setLineWidth(0.6);
    pdfDoc.line(25, 0, 25, pageHeight);
    pdfDoc.line(25.8, 0, 25.8, pageHeight); // double margin line

    // 3. Draw horizontal blue lines
    pdfDoc.setDrawColor(173, 216, 230); // Light blue
    pdfDoc.setLineWidth(0.35);
    for (let y = 30; y < pageHeight - 15; y += lineSpacing) {
      pdfDoc.line(0, y, pageWidth, y);
    }

    // 4. Page Header Branding in the top margin area
    pdfDoc.setTextColor(79, 70, 229); // indigo
    pdfDoc.setFont('courier', 'bolditalic');
    pdfDoc.setFontSize(10);
    pdfDoc.text("ACB - HANDWRITTEN CLASSROOM NOTES", 30, 15);
    pdfDoc.setTextColor(148, 163, 184);
    pdfDoc.text("CSE SEM-2: PYTHON PROGRAMMING", 30, 21);

    // Date/Page details on top right
    pdfDoc.setTextColor(100, 116, 139);
    pdfDoc.text(`PAGE: ${pNum}`, pageWidth - 35, 15);
    pdfDoc.text("DATE: 06/06/2026", pageWidth - 50, 21);

    // Draw a divider line for the top margin
    pdfDoc.setDrawColor(239, 68, 68); // Red top line
    pdfDoc.setLineWidth(0.5);
    pdfDoc.line(0, 26, pageWidth, 26);
  };

  // Draw first page background
  drawNotebookPage(doc, pageNum);

  // Write Title
  doc.setFont('courier', 'bolditalic');
  doc.setFontSize(18);
  doc.setTextColor(31, 41, 55); // slate-800
  doc.text("UNIT 1: INPUT AND OUTPUT", 40, 38);
  doc.line(40, 40, 128, 40); // underline
  currentY = 48;

  // Loop through topics and draw content
  for (const topic of UNIT1_TOPICS) {
    // Check if we need a page break before the heading
    if (currentY + 20 > pageHeight - 20) {
      doc.addPage();
      pageNum++;
      drawNotebookPage(doc, pageNum);
      currentY = 36;
    }

    // Draw topic heading
    doc.setFont('courier', 'bolditalic');
    doc.setFontSize(12);
    doc.setTextColor(79, 70, 229); // Indigo for headings
    doc.text(topic.title, marginX, currentY);
    currentY += lineSpacing;

    // Draw topic content lines
    doc.setFont('courier', 'italic');
    doc.setFontSize(10);
    doc.setTextColor(17, 24, 39); // Dark grey text

    for (const line of topic.content) {
      // Check if we need page break
      if (currentY > pageHeight - 20) {
        doc.addPage();
        pageNum++;
        drawNotebookPage(doc, pageNum);
        currentY = 36;
        
        // Re-apply content styling
        doc.setFont('courier', 'italic');
        doc.setFontSize(10);
        doc.setTextColor(17, 24, 39);
      }

      // Check if line is empty (skip or just spacing)
      if (line.trim() !== "") {
        // Wrap text to fit page width
        const splitText = doc.splitTextToSize(line, pageWidth - marginX - 15);
        for (const segment of splitText) {
          if (currentY > pageHeight - 20) {
            doc.addPage();
            pageNum++;
            drawNotebookPage(doc, pageNum);
            currentY = 36;
            doc.setFont('courier', 'italic');
            doc.setFontSize(10);
            doc.setTextColor(17, 24, 39);
          }
          doc.text(segment, marginX + (line.startsWith("  ") ? 5 : 0), currentY - 1.5); // align slightly above line
          currentY += lineSpacing;
        }
      } else {
        currentY += lineSpacing;
      }
    }
    
    currentY += lineSpacing; // add space between topics
  }

  // Save the document
  doc.save("ACB_Python_Unit1_Handwritten_Notes.pdf");
}
