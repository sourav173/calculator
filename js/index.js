let display = document.querySelector("#display");
// console.log(display);
let currentInput = "";

function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
}


function appendOperator(operator) {
    currentInput += operator;
    display.value = currentInput;
}
