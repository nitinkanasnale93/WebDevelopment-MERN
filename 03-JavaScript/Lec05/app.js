// const students = {
//     Name: "Nitin",
//     age: 21,
//     CGPA: 71
// };

// const post = {
//     username: "@Nitin",
//     content: "The Paradise",
//     like: "1M",
//     reposts: "50k",
//     tags: "@NK"
// }

// let student = {
//     name: 'shradha',
//     age: 23,
//     marks: 94.4,
//     city: 'Delhi'
// };

// console.log(student); 
// console.log(student.city); 
// student.city = "Mumbai";
// console.log(student.city); 
// console.log(student); 
// console.log(student.gender); 
// student.gender = "female";
// console.log(student.gender); 
// console.log(student); 
// console.log(student.marks); 
// student.marks = "A";
// console.log(student.marks);
// delete student.marks;

// const classInfo = {
//     aman: {
//         grade: "A+",
//         city: "Delhi"
//     },
//     shradha: {
//         grade: "A",
//         city: "Pune"
//     },
//     karan: {
//         grade: "O",
//         city: "Mumbai"
//     }
// };

// console.log(classInfo);
// console.log(classInfo.aman);
// console.log(classInfo.shradha);
// console.log(classInfo.shradha.city);
// classInfo.shradha.city = "Gurgaon";
// console.log(classInfo.shradha.city);

// const classInfo = [
//     {
//         name: "aman",
//         grade: "A+",
//         city: "Delhi"
//     },
//     {
//         name: "shradha",
//         grade: "A",
//         city: "Pune"
//     },
//     {
//         name: "karan",
//         grade: "O",
//         city: "Mumbai"
//     }
// ];

// console.log(classInfo);
// console.log(classInfo[0]);
// console.log(classInfo[1]);
// console.log(classInfo[2]);
// console.log(classInfo[1]);

// Properties
// console.log(Math.PI);
// console.log(Math.E);

// Methods
// console.log(Math.abs(-12));
// console.log(Math.pow(2, 3));
// console.log(Math.floor(4.99));
// console.log(Math.ceil(4.01));
// console.log(Math.random());

// let num = Math.random();
// num = num * 10;
// num = Math.floor(num);
// num = num + 1;
// Math.floor( Math.random() * 10 ) + 1;

// Generate a random integer between 20 and 24
// Math.floor( Math.random() * 5 ) + 20;

// Generate a random integer between 21 and 25
// Math.floor( Math.random() * 5 ) + 21;

const max = prompt("enter the max number");

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("guess the number");

while (true) {
    if (guess == "quit") {
        console.log("user quit");
        break;
    }

    if (guess == random) {
        console.log("you are right! congrats!! random number was", random);
        break;
    } else if (guess < random) {
        guess = prompt("hint : your guess was too small. please try again");
    } else {
        guess = prompt("hint : your guess was too large. please try again");
    }
}