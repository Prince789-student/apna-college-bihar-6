const fs = require('fs');
const file = 'c:/Apna College Bihar/client/public/data/syllabus.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

const pythonText = `
## PYTHON PROGRAMMING
**Course Code:** 100218

### Unit 1.0: Input and Output (6 hrs)
Identifiers, Keywords, Statements and Expressions, Variables, Operators, Precedence and Associativity, Data Types, Indentation, Comments, Reading Input, Print Output, Type Conversions, The type() Function and Is Operator, Dynamic and Strongly Typed Language.

### Unit 2.0: Control Flow Statements, Functions and Loops (6 hrs)
Control Flow Statements: The if Decision Control Flow Statement, if...else, if...elif...else Decision Control Statement, Nested if Statement. Built-in Functions, Commonly Used Modules, Function Definition and Calling, The return Statement and void Function, Scope and Lifetime of Variables, Default Parameters. Loops: The while Loop, The for Loop, continue and break Statements.

### Unit 3.0: Strings (3 hrs)
Creating and Storing Strings, Basic String Operations, Accessing Characters in String by Index Number, String Slicing and Joining, String Methods, Formatting Strings.

### Unit 4.0: Lists (3 hrs)
Creating Lists, Basic List Operations, Indexing and Slicing in Lists, Built-in Functions Used on Lists, List Methods, The del Statement.

### Unit 5.0: Dictionaries, Tuples and Sets (5 hrs)
Dictionaries: Creating Dictionary, Accessing and Modifying Key-Value Pairs, Built-in Functions, Dictionary Methods, del Statement.
Tuples: Creating Tuples, Basic Operations, Indexing and Slicing, Built-in Functions, Relation between Tuples and Lists/Dictionaries, Tuple Methods, Using zip() Function.
Sets: Creating Sets, Set Methods, Traversing Sets, Frozen Set.

### Unit 6.0: Files (5 hrs)
Types of Files, Creating and Reading Text Data, File Methods to Read and Write Data, Reading and Writing Binary Files, The Pickle Module, Reading and Writing CSV Files, Python os and os.path Modules.
`;

const iwdText = `
## INTRODUCTION TO WEB DESIGN
**Course Code:** 100219

### Unit 1.0: Fundamentals of Internet and Web Technologies (5 hrs)
Web Basics and Overview: Introduction to Internet, World Wide Web, History of the Web, Website, Homepage, Domain Name, Web Browsers and Web Server, Web Server Working, Client-Server Architecture, 3-Tier Web Architecture, Web Hosting, URL, MIME, HTTP Protocol, Web Programmer's Toolbox.

### Unit 2.0: Introduction to HTML (7 hrs)
Fundamentals of HTML Elements, History of HTML, Document Body, Different Tags, Sections, Text, Headings, Paragraphs, Hyperlinks, Lists, Tables, Color Coding and Images, Div and Span Tags for Grouping, Character Entities, URL Encoding, Frames, and Frame Sets.

### Unit 3.0: HTML Forms and Multimedia Integration (5 hrs)
HTML Form, Form Elements, Form Attributes, HTML Canvas, Embedding Audio and Video in a Webpage, HTML vs XHTML.

### Unit 4.0: Introduction to CSS: Styling and Layouts (8 hrs)
Need for CSS, Introduction to CSS, Basic Syntax and Structure, External Style Sheets, Internal Style Sheets, Inline Style, CSS Selectors, Div & Span Tag, CSS Color, CSS Backgrounds, Borders, Margins, Padding. Box Model, Height & Width, Outline, Text, Font, Tables, CSS Buttons, CSS Display, CSS Float & Clear, CSS Overflow.

### Unit 5.0: JavaScript Basics: Scripting and Control (8 hrs)
Introduction to Client-Side Scripting, What JavaScript Can Do, Need of JavaScript, Enhancing HTML Documents with JavaScript. Building Blocks: Data Types, Variables, Types of Operators, Operator Precedence, Type Conversion. Conditional Statements: if, if...else, else if, Switch Statement. Loops: for, while, do/while, break, continue.

### Unit 6.0: Advanced JavaScript: Objects and Events (9 hrs)
Advanced JavaScript: Objects in JavaScript (Array, Number, String, Boolean), Event Handling (e.g., onclick, onsubmit), Error Handling, JavaScript Scope, Responsive Modal Forms, Form Validation.
`;

let cseSem2 = data.find(d => d.branch === 'cse' && d.semester === 'sem2');
if (cseSem2) {
  if (!cseSem2.content.includes('PYTHON PROGRAMMING')) {
    cseSem2.content += '\\n' + pythonText;
  }
  if (!cseSem2.content.includes('INTRODUCTION TO WEB DESIGN')) {
    cseSem2.content += '\\n' + iwdText;
  }
}

fs.writeFileSync(file, JSON.stringify(data, null, 2));
console.log('Added Python and IWD to CSE Sem 2!');
