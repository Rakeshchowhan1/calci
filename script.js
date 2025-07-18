
const display = document.getElementById('display');

function appendToDisplay(input) {
    display.value += input;  // Concatenate instead of overwriting
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}
