const fs = require('fs');
const file = 'c:/Apna College Bihar/client/public/data/syllabus.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

const pythonLabSyllabus = `## PYTHON PROGRAMMING LAB
**Course Code:** 100218P

### Unit 1: Input and Output
1. Demonstrate different number data types in Python.
2. Perform different arithmetic operations on numbers in Python.
3. Create, concatenate, and print a string; access sub-strings.
4. Check whether an integer variable is "Positive" or "Negative".
5. Find the largest element among three numbers.
6. Print the sum of all even numbers in the range 1-50.
7. Display all prime numbers within an interval of 20-50.

### Unit 2: Variables and Functions
8. Swap two numbers without using a temporary variable.
9. Define a function with multiple return values.
10. Find factorial of a number using recursion.
11. Print the current date in the format - WED 09 02 20:23 IST 2020.
12. Convert temperatures between Celsius and Fahrenheit.
13. Print prime numbers less than 20.

### Unit 3: Loops and Conditionals
14. Print patterns using loops (e.g., *, **, ***).
15. Print multiplication tables of 8, 15, 69.
16. Check whether input is digit, lowercase, uppercase, or special character.
17. Print the Fibonacci sequence using while loop.

### Unit 4: Strings
18. Find the length of a string without using library functions.
19. Check if two strings are anagrams.
20. Check if a substring is present in a string (use regular expressions).

### Unit 5: Lists
21. Perform operations on a list: add, insert, slicing.
22. Use any 5 built-in list functions.
23. Get a list of even numbers from a given list (use list comprehensions).
24. Implement round-robin sequencing with exception control and comprehensions.

### Unit 6: Tuples, Sets and Dictionaries
Tuples
25. Create tuples for at least two members, concatenate, and print them.
26. Return top 'n' most frequently occurring characters with counts.
Sets
27. Count the number of vowels in a string (no control flow allowed).
28. Display letters present in both strings.
29. Sort a list of strings based on vowel counts.
Dictionaries
30. Generate a dictionary of numbers (1 to n) in the form (x, x*x).
`;

const iwdLabSyllabus = `## INTRODUCTION TO WEB DESIGN LAB
**Course Code:** 100219P

### Unit 1: Practical 1
1. Design a home page displaying information about your college department using headings, HTML entities, and paragraphs. Implement different types of list tags.
- Create a webpage for a clinic using marquee and HTML formatting tags.
- Include images and iframes in a webpage.

### Unit 2: Practical 2
2. Create hyperlinks in the home page connecting it to 3 different pages.
- Design a webpage with an image map, embedded audio, and video.
- Create a timetable in tabular format.
- Design an admission form with text fields, password fields, drop-down lists, checkboxes, radio buttons, submit, and reset buttons.

### Unit 3: Practical 3
3. Design a static webpage using HTML to create a frameset with header, navigation, and content sections.
- Create a webpage with a frameset divided into 3 frames: 20% left for page contents, 60% center for main body, 20% right for remarks.
- Create a webpage demonstrating multiple types of style sheets used in a single page.

### Unit 4: Practical 4
4. Create a catalogue for an online shopping company using CSS.
- Design a webpage of your hometown with attractive background color, text font, and an image using inline CSS.
- Create a student web form for entering student information.
- Design a library webpage using different CSS border styles and the CSS box model.

### Unit 5: Practical 5
5. Write JavaScript programs:
- Find the largest among three numbers.
- Calculate the factorial of a number.
- Check whether a number is an Armstrong number.
- Find the sum of natural numbers using recursion.
- Check whether a string is a palindrome.
- Convert a decimal number to binary.

### Unit 6: Practical 6
6. Write JavaScript programs:
- Design a scientific calculator with event handling for each button.
- Compute the squares and cubes of numbers from 0 to 10 and display results in an HTML table.

### Unit 7: Practical 7
7. Write JavaScript to validate registration page fields:
- Name: Only alphabets, at least 5 characters long.
- Password: At least 6 characters long.
- E-mail ID: Standard pattern (name@domain.com), no invalid characters.
- Phone Number: Exactly 10 digits.
`;

const sem2 = data.find(d => d.branch === 'cse' && d.semester === 'sem2');
if (sem2) {
  // completely wipe the old labs and re-append them correctly without trash
  const pyIndex = sem2.content.indexOf('## PYTHON PROGRAMMING LAB');
  if (pyIndex !== -1) {
    sem2.content = sem2.content.substring(0, pyIndex).trim();
  }
  sem2.content += '\\n\\n' + pythonLabSyllabus + '\\n\\n' + iwdLabSyllabus;
}

fs.writeFileSync(file, JSON.stringify(data, null, 2));
console.log('Cleaned up CSE Sem2 labs completely');
