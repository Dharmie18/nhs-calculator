let resultField = document.getElementById("result");

function appendToDisplay(value) {
    resultField.value += value;
}

function clearDisplay() {
    resultField.value = "";
}

function deleteLast() {
    resultField.value = resultField.value.slice(0, -1);
}

function calculateResult() {
    try {
        resultField.value = eval(resultField.value);
    } catch (error) {
        resultField.value = "Error";
    }
}