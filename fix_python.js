const fs = require('fs');
const file = 'client/public/data/syllabus.json';
let data = JSON.parse(fs.readFileSync(file, 'utf8'));

// Format ALL unit headers to match parser rules:
// The parser wants: ### 📌 Unit X: Title (Y hrs)
// In syllabus.json, it sometimes looks like:
// #### 1. Frame of Reference
// :         2 hrs
// We will fix that using regex.
data.forEach(d => {
  if (d.content) {
    // We already have a client-side parser, but we can fix Python manually
  }
});

let cse2 = data.find(x => x.branch==='cse' && x.semester==='sem2');
if (cse2) {
    const pythonSyllabus = `

## 📘 PROGRAMMING IN PYTHON
**Course Code:** 100218

### 📌 Unit 1: Input and Output (8 hrs)
- Identifiers
- Keywords
- Statements and Expressions
- Variables
- Operators
- Precedence and Associativity
- Data Types
- Indentation
- Comments
- Reading Input
- Print Output
- Type Conversions
- type() Function and is Operator
- Dynamic and Strongly Typed Language

### 📌 Unit 2: Control Flow Statements (8 hrs)
- Control Flow Statements
- if Statement
- if-else Statement
- nested if Statement
- while Loop
- for Loop
- continue and break Statements
- catch-all Exceptions
- catch a specific Exception
- catch multiple Exceptions
- else Clause
- finally Clause

### 📌 Unit 3: Functions (8 hrs)
- Built-In Functions
- Commonly Used Modules
- Function Definition and Calling the Function
- The return Statement and void Function
- Scope and Lifetime of Variables
- Default Parameters
- Keyword Arguments
- Command Line Arguments

### 📌 Unit 4: Strings and Lists (8 hrs)
- Creating and Storing Strings
- Basic String Operations
- Accessing Characters in String by Index Number
- String Slicing and Joining
- String Methods
- Formatting Strings
- Lists
- Creating Lists
- Basic List Operations
- Indexing and Slicing in Lists
- Built-In Functions Used on Lists
- List Methods
- The del Statement

### 📌 Unit 5: Dictionaries and Tuples (8 hrs)
- Dictionaries
- Creating Dictionary
- Accessing and Modifying key:value Pairs in Dictionaries
- Built-In Functions Used on Dictionaries
- Dictionary Methods
- The del Statement
- Tuples and Sets
- Creating Tuples
- Basic Tuple Operations
- Indexing and Slicing in Tuples
- Built-In Functions Used on Tuples
- Relation between Tuples and Lists`;
    cse2.content += pythonSyllabus;
    fs.writeFileSync(file, JSON.stringify(data, null, 2));
    console.log("Python syllabus appended successfully!");
}
