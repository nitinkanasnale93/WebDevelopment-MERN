// let smallimg = document.getElementsByClassName("oldImg");

// for(let i = 0; i < smallimg.length; i++) {
//     smallimg[i].src = "assests/spiderman_img.png";
//     console.log(`value of img no .${i} is changed`);
// }

let mainImg = document.getElementById("mainImg");
console.log(mainImg);

let oldImages = document.getElementsByClassName("oldImg");
console.log(oldImages);
console.log(oldImages[0]);

let paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);
console.log(paragraphs[0]);

let description = document.querySelector("#description");
let box = document.querySelector(".box");
let heading = document.querySelector("h1");
let allHeadings = document.querySelectorAll("h2");

console.log(description, box, heading, allHeadings);

let title = document.querySelector("h1");

console.log(title.innerText);
console.log(title.textContent);
console.log(title.innerHTML);

let image = document.querySelector("#mainImg");

console.log(image.getAttribute("src"));

let descriptionBox = document.querySelector("#description");

let infoBox = document.querySelector(".box");

console.log(infoBox.classList.contains("box"));

let mainHeading = document.querySelector("h1");

console.log(mainHeading.parentElement);
console.log(infoBox.children);
console.log(infoBox.firstElementChild);
console.log(infoBox.lastElementChild);
console.log(mainHeading.nextElementSibling);
console.log(mainHeading.previousElementSibling);

let newHeading = document.createElement("h3");
newHeading.innerText = "Your Friendly Neighborhood Spider-Man";

let body = document.querySelector("body");

let newItem = document.createElement("li");
newItem.innerText = "Created with JavaScript";

let publicationList = document.querySelector(".box ul");

function activateSpiderManPage() {
    let heroTitle = document.querySelector("h1");
    let heroImage = document.querySelector("#mainImg");
    let aboutText = document.querySelector("#description");

    heroTitle.innerText = "Spider-Man: The Friendly Neighborhood Hero";
    heroTitle.style.color = "red";

    heroImage.style.border = "4px solid black";
    heroImage.style.borderRadius = "12px";

    aboutText.style.backgroundColor = "lightyellow";
    aboutText.style.padding = "15px";

    let message = document.createElement("p");
    message.innerText = "With great power comes great responsibility.";
    message.classList.add("highlight");

    document.querySelector("body").appendChild(message);
}

activateSpiderManPage();
