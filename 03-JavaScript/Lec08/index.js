// let arr = [1, 2, 3, 4, 5];

// let print = function(el) {
//     console.log(el);
// };

// arr.forEach(print);

// let num = [1, 2, 3, 4, 5];

// let double = num.map((el) => {
//     return el * 2;
// });
// console.log(double);

// let students = [
//     {
//         name: "Nitin",
//         Marks: 90
//     },
//     {
//         name: "Kannika",
//         Marks: 95
//     },
//     {
//         name: "Krishna",
//         Marks: 100
//     }
// ];

// let gpa = students.map((el) => {
//     return {
//         name: el.name,
//         GPA: el.Marks / 10
//     };
// }); 
// console.log(gpa);

// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// let ans = num.filter((el) => {
//     return el % 2 === 0;
// })
// console.log(ans);

// let arr = [2, 4, 6, 8, 10, 11];

// let ans = arr.every((el) => {
//     return el % 2 === 0;
// });
// console.log(ans);   

// let num = [1,2, 3, 4];

// let ans = num.reduce((acc, el) => {
//     return acc + el;
// });
// console.log(ans);


// let arr = [9, 3, 5, 7, 2, 8, 1];

// let result = arr.reduce((max, el) => {
//     if(max < el) {
//         return el;
//     }
//     return max;
// });
// console.log(result);

// let arr = [10, 20, 30, 40, 50];

// let ans = arr.every((el) => {
//     return el % 10 === 0;
// })
// console.log(ans);


// let arr = [1, 2, 3, 4, 5];

// let min = arr.reduce((min, el) => {
//     if(min > el) {
//         return el;
//     }
//     return min;
// });
// console.log(min);

// let arr = [1, 2, 3, 4, 5];
// let newArr = [...arr];
// console.log(newArr);

// let chars = [..."hello"];
// console.log(chars);

// let odd = [1, 3, 5, 7, 9];
// let even = [2, 4, 6, 8, 10];

// let nums = [...even, ...odd];
// console.log(nums);