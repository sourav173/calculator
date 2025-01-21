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


function clearDisplay() {
    currentInput = "";
    display.value = "";
}

function calculate() {
    try{
        currentInput = eval(currentInput).toString();
        display.value = currentInput;
    } catch(error) {
        display.value = "Error";
        currentInput = "";
    }
}