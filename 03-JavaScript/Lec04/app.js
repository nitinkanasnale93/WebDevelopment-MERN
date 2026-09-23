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

// console.log(" ");
// let n = Number(prompt("Enter a number: "));

// console.log("Multiplication of", n);

// for (let i = n; i <= n * 10; i = i + n) {
//     console.log(i);
// }

// console.log(" ");
// console.log("Nested loop:");

// for(let i = 1; i <= 3; i++) {
//     console.log(`Outer Loop ${i}`);

//     for(let j = 0; j <= 3; j++ ){
//         console.log(j);
//     }
// }

// for(let i = 1; i <= 3; i++) {
//     console.log(`Outer Loop ${i}`);

//     for(let j = 0; j <= 3; j++ ){
//         console.log(i);
//     }
// }


// console.log("While loop:");
// let i =1;
// while(i <= 5){
//     console.log(i);
//     i++;
// }

// let favmovie = "Jersey";

// let guess = prompt("Guess my Fav Movie: ");

// while(guess != favmovie) {

//     if(guess == "quit") {
//         console.log("Game over");
//         break;
//     }

//     console.log("Wrong guess! Please try again...");
//     guess = prompt("Guess my Fav Movie: ");
// }

// if(guess == favmovie) {

//     console.log("Congratulations! You're officially my Bestie");

// }

// let fruits = ["Mango", "Apple", "Banana", "Litchi", "Orange"]

// for(let i = 0; i <= fruits.length; i++) {
//     console.log(i, fruits[i]);
// }

// let Heroes = [
//     ["Yash", "Nani", "Kichha"],
//     ["Sushant singh", "DBoss", "Ganesh"]
// ]

// for(let i = 0; i < Heroes.length; i++) {
//     console.log(i, Heroes[i]);

//     for(let j = 0; j < Heroes[i].length; j++){
//         console.log(`j = ${j}, ${Heroes[i][j]}`);
//     }
// }

// let fruits = ["Mango", "Apple", "Banana", "Litchi", "Orange"];
// for(fruit of fruits){
//     console.log(fruit);
// }

// for(char of "NitinKanasnale"){
//     console.log(char);
// }

// let heroes = [ ["superman", "batman", "wonder woman"], ["spiderman", "ironman", "thor"] ];

// for (list of heroes) {
//     for (name of list) {
//         console.log(name);
//     }
// }

let todo = [];

let req = prompt("please enter your request");

while (true) {
    if (req == "quit") {
        console.log("quitting app");
        break;
    }

    if (req == "list") {
        console.log("----------------");
        for (let i = 0; i < todo.length; i++) {
            console.log(i, todo[i]);
        }
        console.log("----------------");
    } else if (req == "add") {
        let task = prompt("please enter the task you want to add");
        todo.push(task);
        console.log("task added");
    } else if (req == "delete") {
        let idx = prompt("please enter the task index");
        todo.splice(idx, 1);
        console.log("task deleted");
    } else {
        console.log("Wrong Request")
        
    }

    req = prompt("please enter your request");
}