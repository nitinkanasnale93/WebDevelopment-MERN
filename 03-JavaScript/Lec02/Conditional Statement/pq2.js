let size = "s";

function checkPrice(size) {

    let price;

    if (size === "s") {
        price = 50;
    }

    else if (size === "m") {
        price = 100;
    }

    else if (size === "l") {
        price = 200;
    }

    else if (size === "xl") {
        price = 250;
    }

    console.log(`Selected size: ${size}`);
    console.log(`Price is: ₹${price}`);

    document.getElementById("cartMessage").innerText =
        `Popcorn added to cart - ${size.toUpperCase()} size`;

    document.getElementById("totalPrice").innerText =
        `₹${price}`;
}