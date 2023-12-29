// Creating the first random number.
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

// Setting the first image a/c to first random number
var image1 = document
  .querySelectorAll("img")[0]
  .setAttribute("src", "./images/dice" + randomNumber1 + ".png");

// Creating the second random number.
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// Setting the second image a/c to second random number
var image2 = document
  .querySelectorAll("img")[1]
  .setAttribute("src", "./images/dice" + randomNumber2 + ".png");

// Putting the conditions of changing the htlm.
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = " 🚩Player 1 wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").textContent = "Player 2 wins! 🚩";
} else {
  document.querySelector("h1").textContent = "Draw!!";
}
