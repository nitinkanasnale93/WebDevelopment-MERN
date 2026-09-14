// Unary Operators → work with one operand

let age = 10;

// Increment → increases by 1
age++;
console.log(age); // 11

// Decrement → decreases by 1
age--;
console.log(age); // 10


// Pre-increment → change first, then use
let a = 10;
let newAge = ++a;

console.log(newAge); // 11
console.log(a);      // 11


// Post-increment → use first, then change
let b = 10;
let result = b++;

console.log(result); // 10
console.log(b);      // 11