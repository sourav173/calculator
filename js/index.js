let display = document.querySelector("#display");
// console.log(display);
let currentInput = "";

function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
}

