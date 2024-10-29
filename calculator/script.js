let isResultDisplayed = false;

const buttons = document.querySelectorAll(".input-button");
const inputField = document.getElementById("input");
const equalButton = document.getElementById("equal");
const clearButton = document.getElementById("clear");
const eraseButton = document.getElementById("erase");

window.onload = () => {
    inputField.value = "";
};

buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (isResultDisplayed) {
            inputField.value = "";
            isResultDisplayed = false;
        }
        inputField.value += button.value;
    });
});

equalButton.addEventListener("click", () => {
    isResultDisplayed = true;
    try {
        const result = eval(inputField.value);
        inputField.value = Number.isInteger(result) ? result : result.toFixed(2);
    } catch {
        alert("Invalid input");
        inputField.value = "";
    }
});

clearButton.addEventListener("click", () => {
    inputField.value = "";
});

eraseButton.addEventListener("click", () => {
    inputField.value = inputField.value.slice(0, -1);
});
