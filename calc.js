// Select display input
const display = document.getElementById("result");

// Function to append values to display
function appendToDisplay(value) {
    display.value += value;
}

// Function to clear the display
function clearDisplay() {
    display.value = "";
}

// Function to delete last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Function to calculate result
function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

// Function to calculate trigonometric values
function calculateTrig(func) {
    let value = parseFloat(display.value);
    if (isNaN(value)) return;

    let radians = value * (Math.PI / 180); // Convert degrees to radians

    switch (func) {
        case "sin":
            display.value = Math.sin(radians).toFixed(5);
            break;
        case "cos":
            display.value = Math.cos(radians).toFixed(5);
            break;
        case "tan":
            display.value = Math.tan(radians).toFixed(5);
            break;
    }
}

// Function to calculate percentage
function percentage() {
    display.value = (parseFloat(display.value) / 100).toFixed(5);
}
