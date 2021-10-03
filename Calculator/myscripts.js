

let userInput = document.getElementById("UserInput")
let userInput2 = document.getElementById("UserInput2")
let button = document.querySelectorAll("btn");


function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

button.addEventListener("click", add);
button.addEventListener("click", subtract);
button.addEventListener("click", multiply);
button.addEventListener("click", divide);

function add(userInput, userInput2){
  return userInput + userInput2;
}
function subtract(userInput, userInput2){
  return userInput - userInput2;
}
function multiply(userInput, userInput2){
  return userInput * userInput2;
}
function divide(userInput, userInput2){
  return userInput / userInput2;
}
