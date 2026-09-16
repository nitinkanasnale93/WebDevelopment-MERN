// Arithmetic Operations
let a = 10;
let b = 5;

console.log("Arithmetic Operations:");
console.log(`Addition is: ${a + b}`);
console.log(`Subtraction is: ${a - b}`);
console.log(`Multiplication is: ${a * b}`);
console.log(`Division is: ${a / b}`);
console.log(`Modulus is: ${a % b}`);
console.log(`Exponentiation is: ${a ** b}`);

console.log("");

// Unary Operators
console.log("Unary Operators:");

console.log(`Post-Increment of a: ${a++}`);
console.log(`Pre-Increment of a: ${++a}`);

console.log("");

console.log("Assignment Operators:");

// Assignment Operators
console.log(`Initial value: ${a}`);

a += 5;
console.log(`After += : ${a}`);

a -= 3;
console.log(`After -= : ${a}`);

a *= 2;
console.log(`After *= : ${a}`);

a /= 4;
console.log(`After /= : ${a}`);

a %= 3;
console.log(`After %= : ${a}`);

// Voting Age Comparison

let age = 20;
let votingAge = 18;

console.log("Voting Eligibility:");

console.log(`Age > 18 : ${age > votingAge}`);
console.log(`Age >= 18 : ${age >= votingAge}`);
console.log(`Age < 18 : ${age < votingAge}`);
console.log(`Age <= 18 : ${age <= votingAge}`);
console.log(`Age == 18 : ${age == votingAge}`);
console.log(`Age != 18 : ${age != votingAge}`);