// console.log("1");
// console.log("2");
// console.log("3");
// console.log("4");
// console.log("5");
// console.log(" ");
// console.log("After Applying for loop:");
// for(let i = 1; i <= 5; i++) {
//     console.log(i);
// }
// console.log(" ");
// console.log("Reverse No:");
// for(let i = 10; i >= 1; i--) {
//     console.log(i);
// }

// console.log("Odd Numbers:");
// for(let i = 1; i <= 15; i=i+2){
//     i%2!==0;
//     console.log(i);
// }
// console.log(" ");
// console.log("Even no:")
// for(let i =2; i <= 10; i = i + 2){
//     console.log(i);
// }

// console.log(" ");
// console.log("Multipicastion of 5:");
// for(let i = 5; i <= 50; i = i + 5) {
//     console.log(i);
// }

console.log(" ");

let n = prompt("Enter a number: ")
console.log("Multipicastion of", +n);
for(let i = n; i <= n*10; i = i + n) {
    console.log(i);
}