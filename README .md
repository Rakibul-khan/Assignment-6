1. What is the difference between var, let, and const?
   ans:The primary difference between var,let and const in JavaScript in scoping, reassignability,and hoisting.var is function-scoped and can be reassign and re-declared,but it's generally not recommended in JavaScript.let is block scope allowing reassignment but not redeclaration.const can't be reassign and redeclared.

2. What is the difference between map(), forEach(), and filter()?
   ans: forEach iterates over each element in an array and executes a provided callback function for each element. and it's return undefined. map:This method also iterates over each element but creates a new array containing the results of calling a provided callback function on every element in the original array. filter: This method creates a new array containing only the elements from the original array that pass a test implemented by the provided callback function. The callback function should return true for elements to be included in the new array and false for elements to be excluded. The original array remains unchanged.

3. What are arrow functions in ES6?
   ans:Arrow functions introduced in ECMAScript 2015 (ES6) provide a concise syntax for writing function expressions in JavaScript. They offer a shorter and more elegant way to define functions compared to traditional function expressions.

4. How does destructuring assignment work in ES6?
   ans: const [a, b, c = 0] = [1, 2];
   here what's happening is that a will be 1 and b will be 2 and the last one c will be 0 . This is how destructuring is works.

5. Explain template literals in ES6. How are they different from string concatenation?
   ans:Template literals introduced in ECMAScript 2015 are type of string literal inclosed in backticks (``)
