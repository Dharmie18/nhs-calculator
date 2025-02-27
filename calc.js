const display = document.getElementById("result");

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

function calculateTrig(func) {
    let value = parseFloat(display.value);
    if (isNaN(value)) return;

    let radians = value * (Math.PI / 180); 

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

function percentage() {
    display.value = (parseFloat(display.value) / 100).toFixed(5);
}
