// const student = {
//   name: "John Doe",
//   age: 20,
//   english: 85,
//   math: 90,
//   science: 78,
//   history: 88,
//   getAvg() {
//     console.log(this);
//     let avg = (this.english + this.math + this.science + this.history) / 4;
//     return avg;
//   }
// };

// function getAvg() {
//     console.log(this);
// }

// const student2 = {
//   name: "Jane Smith",
//   age: 22,
// }
// getAvg.call(student2);

// console.log("Hello World");
// console.log("Hello World");
// try {
//     console.log(a);
// } catch (error) {
//     console.log("An error occurred:");
//     console.log(error);
// }
// console.log("Hello World");
// console.log("Hello World");

//miscellenious topics
//Arrow function

// const add = (a, b) => {
//     console.log(a + b);
// };

// const mul = (a, b) => a * b;

// console.log("Hey there!");
// setTimeout(() => {
//     console.log("Hello World");
// }, 4000);
// console.log("Are you sure you want to proceed?");

let id = setInterval(() => {
    console.log("Hello World");
}, 2000);

let id2 = setInterval(() => {
    console.log("Hello World 2");
}, 3000);