// Operator Precedence → order in which
// JavaScript solves an expression

// Precedence order:
// 1. ( )        → Parentheses
// 2. **         → Exponentiation
// 3. *, /, %    → Multiplication, Division, Modulus
// 4. +, -       → Addition, Subtraction
//
// Higher precedence → solved first


console.log(5 + 4 * 10 / 2 + 3);
// First: * and /
// 5 + 40 / 2 + 3
// 5 + 20 + 3
// 28


// Parentheses have the highest precedence
console.log((5 + 4) * 10 / 2);
// First: (5 + 4)
// 9 * 10 / 2
// 45


// ** has higher precedence than *, / and %
console.log(3 + 2 ** 2);
// First: 2 ** 2
// 3 + 4
// 7


// Same-level operators are solved left to right
console.log(10 / 2 * 3);
// First: 10 / 2
// 5 * 3
// 15