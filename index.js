// Solution to generate dice No. 1

var randomNumber1 = Math.floor(Math.random() * 6 + 1);

if (randomNumber1 === 1) {
    document.querySelector(".img1").setAttribute("src", "images/dice1.png");
} else if (randomNumber1 === 2) {
    document.querySelector(".img1").setAttribute("src", "images/dice2.png");
} else if (randomNumber1 === 3) {
    document.querySelector(".img1").setAttribute("src", "images/dice3.png");
} else if (randomNumber1 === 4) {
    document.querySelector(".img1").setAttribute("src", "images/dice4.png");
} else if (randomNumber1 === 5) {
    document.querySelector(".img1").setAttribute("src", "images/dice5.png");
} else {
    document.querySelector(".img1").setAttribute("src", "images/dice6.png");
}

// Solution to generate dice No. 2

var randomNumber2 = Math.floor(Math.random() * 6 + 1);

var diceImageSource = "images/dice" + randomNumber2 + ".png"; //images/diceX.png

document.querySelector(".img2").setAttribute("src", diceImageSource);

// Result of the game

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "🚩 Player 1 wins!";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").textContent = "Player 2 wins! 🚩";
} else {
    document.querySelector("h1").textContent = "🚩 Draw! 🚩";
}