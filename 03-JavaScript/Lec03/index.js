// ==================== STRING METHODS ====================

// 1. trim() - Removes spaces from the beginning and end of a string
// let password = prompt("Enter your password: ");
// let newPass = password.trim();
// console.log(newPass);

// 2. trim() does not change the original string
// let msg = "apna   ";
// console.log("Original:", msg);
// console.log("After trim:", msg.trim());
// let str = msg.trim();
// console.log("Stored trimmed value:", str);
// console.log("Original msg:", msg);
// msg = "hello";
// console.log("New msg:", msg);

// 3. toUpperCase() and toLowerCase()
// let name = "Vishwa";
// console.log(name.toUpperCase());
// console.log(name.toLowerCase());

// 4. indexOf() - Finds the index of a value
// let str = "ILoveCoding";
// console.log(str.indexOf("Love"));
// console.log(str.indexOf("J"));
// console.log(str.indexOf("o"));

// 5. trim() and toUpperCase()
// let msg = "Nitin   ";
// let newmsg = msg.trim();
// console.log("After Trimming:", newmsg);
// console.log("UpperCase:", msg.toUpperCase());

// 6. slice() - Extracts a part of a string
// let msg = "Hello";
// console.log(msg.slice(0, 4));

// 7. slice() with length
// let msg1 = "NationalServiceScheme";
// console.log(msg1.slice(8, msg1.length - 1));
// console.log(msg1.slice(-1)); // -2 will print "me"

// 8. replace() - Replaces a value in a string
// let msg = "Love";
// console.log(msg.replace("Love", "do"));
// console.log(msg.replace("o", "x"));

// 9. repeat() - Repeats a string
// let msg = "Love";
// console.log(msg.repeat(3));

// 10. Practice Question - trim() and toUpperCase()
// let msg = "Help!";
// console.log(msg.trim().toUpperCase());

// 11. Practice Question - slice(), indexOf(), replace()
// let name = "SindhiCollege";
// console.log(name.slice(6));
// console.log(name.indexOf("Co"));
// console.log(name.replace("Sindhi", "Presidency"));
// console.log(name.slice(6).replace("l", "t"));


// ==================== ARRAY METHODS ====================

// 12. Creating and accessing an array
// let students = ["Kannika", "Nitin", "Raju"];
// console.log(students[0]);
// console.log(students.length);
// console.log(typeof students);
// console.log(students[0][0]);

// 13. Array can store different types of values
// let info = ["Nitin", 21, 70.0];

// 14. Updating array elements
// let fruits = ["Mango", "Apple", "Litchi"];
// fruits[0] = "Banana";
// fruits[10] = "Papaya";
// console.log(fruits);

// 15. push(), pop(), unshift(), shift(), indexOf(), slice()
let cars = ["BMW", "THAR", "DEFENDER", "RANGEROVER"];

console.log(cars.push("Ferrari"));
console.log(cars.pop());
console.log(cars.unshift("Ferrari"));
console.log(cars.shift());

console.log(cars.indexOf("BMW"));
console.log(cars.indexOf("XUV"));

console.log(cars.slice(1));
console.log(cars.slice(1, 3));
console.log(cars.slice(3));
console.log(cars.slice(-2));

// 16. includes() - Searches for a value
console.log(cars.includes("BMW"));

// 17. shift() - Removes the first element
let Followers = ["Tanishka", "Raju", "Mahesh", "Vishwa"];

let blocked = Followers.shift();

console.log(Followers);
console.log(blocked);

// 18. shift() and unshift() with months
let months = ["January", "July", "March", "August"];

console.log(months.shift());
console.log(months.shift());

console.log(months.unshift("June"));
console.log(months.unshift("July"));

// 19. concat() - Combines two arrays
let primary = ["Red", "Blue", "Green"];
let secondary = ["Yellow", "Orange", "Purple"];

let colors = primary.concat(secondary);

console.log(colors);

// 20. splice() - Removes elements from index 4
console.log(colors.splice(4));
console.log(colors);

// 21. splice() - Removes one element from index 0
console.log(colors.splice(0, 1));
console.log(colors);

// 22. splice() - Removes one element and adds new colors
console.log(colors.splice(0, 1, "Pink", "Brown"));
console.log(colors);

// 23. splice() - Adds elements without removing any element
console.log(colors.splice(1, 0, "White", "Black"));
console.log(colors);

// 24. splice() - Replaces one element with new colors
console.log(colors.splice(2, 1, "Pink", "Lightgreen"));
console.log(colors);

// 25. sort() - Sorts the array
console.log(cars);
console.log(cars.sort());

// 26. sort() with numbers
// sort() converts numbers into strings and sorts them lexicographically
let num = [93, 53, 26, 31, 100];

console.log(num.sort());

// 27. Array References - Different arrays
let arr1 = [1];
let arr2 = [1];

console.log(arr1 === arr2);

// 28. Array References - Same array reference
let arr = ["a", "b"];

let arrCopy = arr;

arrCopy.push("c");

console.log(arrCopy);
console.log(arr);

// 29. Constant Array
const array = [1, 2, 3];

array.push(4);
console.log(array);

array.pop();
console.log(array);

// const array → Cannot change the reference/address
// But can change the contents

// 30. Nested Arrays
let nums = [[2, 4], [6, 8], [1, 3]];

console.log(nums);
console.log(nums.length);
console.log(nums[0]);
console.log(nums[0][0]);

// 31. Practice Question - Tic-Tac-Toe Nested Array
let game = [
    ["X", null, "O"],
    [" ", null, " "],
    ["O", null, "X"]
];

console.log(game);