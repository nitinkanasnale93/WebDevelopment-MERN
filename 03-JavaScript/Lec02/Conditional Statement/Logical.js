let marks = 75;

console.log("Logical Operators");
console.log("");

// AND (&&)
if (marks >= 33 && marks <= 100) {
    console.log("Pass");
}

// OR (||)
if (marks < 33 || marks > 100) {
    console.log("Fail or Invalid Marks");
}

// NOT (!)
if (!(marks < 33)) {
    console.log("Not Fail");
}

//practice qs
let str = "apple";

if (str[0] === "a" && str.length > 3) {
    console.log("Good string");
} else {
    console.log("Not a good string");
}

// Truthy & Falsy Values

console.log("Falsy Values:");

console.log(Boolean(false));
console.log(Boolean(0));
console.log(Boolean(-0));
console.log(Boolean(0n));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));

console.log("");

console.log("Truthy Values:");

console.log(Boolean(1));
console.log(Boolean(-1));
console.log(Boolean("Hello"));
console.log(Boolean("0"));
console.log(Boolean([]));
console.log(Boolean({}));