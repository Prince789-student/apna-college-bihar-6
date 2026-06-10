const { parseSyllabusIntoSubjects } = require('./client/test_parser.cjs');

const text = `## PYTHON PROGRAMMING
**Course Code:** 100218

### Unit 1.0: Input and Output (6 hrs)
Identifiers, Keywords, Statements and Expressions, Variables, Operators, Precedence and Associativity, Data Types, Indentation, Comments, Reading Input, Print Output, Type Conversions, The type() Function and Is Operator, Dynamic and Strongly Typed Language.

### Unit 2.0: Control Flow Statements, Functions and Loops (6 hrs)
Control Flow Statements: The if Decision Control Flow Statement, if...else, if...elif...else, Nested if Statement, The while Loop, The for Loop, The continue and break Statements, Catching Exceptions Using try and except Statement, Functions: Built-In Functions, Commonly Used Modules, Function Definition and Calling the Function, The return Statement and void Function, Scope and Lifetime of Variables, Default Parameters, Keyword Arguments, *args and **kwargs, Command Line Arguments.
`;

const subjects = parseSyllabusIntoSubjects(text);
console.log(JSON.stringify(subjects, null, 2));
