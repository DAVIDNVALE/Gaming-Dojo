var cart = 0;
var countElement = document.querySelector("#cart");

console.log(countElement);

function add1() {
    cart++;
    countElement.innerText = cart
    console.log(cart);
}

var middleImg = document.querySelector("#middle-picture");

console.log(middleImg);

function left() {
    middleImg.src = "images/stonepunk.png";
}

function right() {
    middleImg.src = "images/pixel-ninjas-2.png";
}