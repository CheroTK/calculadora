// script.js
const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

let currentInput = "";
let currentOperator = "";
let shouldClearDisplay = false;

buttons.forEach((button) => {
button.addEventListener("click", () => {
const buttonText = button.textContent;

if (buttonText.match(/[0-9]/)) {
if (shouldClearDisplay) {
display.textContent = "";
shouldClearDisplay = false;
}

    if (display.textContent === "0") {
        display.textContent = buttonText; // Sustituye el "0" por el número ingresado
    } else {
        display.textContent += buttonText; // Concatenar el número al display
    }
} else if (buttonText === "C") {
display.textContent = "0";
currentInput = "";
currentOperator = "";
}else if (buttonText === "←") { // Botón de retroceder
    if (display.textContent.length > 1) {
        display.textContent = display.textContent.slice(0, -1); // Elimina el último dígito
    } else {
        display.textContent = "0"; // Si solo queda un dígito, vuelve a "0"
    }
    
} else if (buttonText === "=") {
if (currentOperator && currentInput) {
const result = calculate(parseFloat(currentInput), currentOperator, parseFloat(display.textContent));
display.textContent = result;
currentInput = result;
currentOperator = "";
shouldClearDisplay = true;
}
} else {
currentOperator = buttonText;
currentInput = display.textContent;
shouldClearDisplay = true;
}
});
});

function calculate(num1, operator, num2) {
switch (operator) {
case "+":
return num1 + num2;
case "-":
return num1 - num2;
case "*":
return num1 * num2;
case "^":
return  Math.pow(num1, num2);
case "√":
return Math.sqrt(num1);
case "±":
return display.textContent = (parseFloat(display.textContent) * -1).toString();
case "x²":
return num1 * num1
case "π":
return Math.PI;
case "/":
if (num2 !== 0) {
return num1 / num2;
} else {
    // Mostrar y reproducir el video de error
    errorVideo.style.display = "block"; // Mostrar el video
    errorVideo.play(); // Reproducir el video

    // Ocultar el video cuando termine de reproducirse
    errorVideo.addEventListener("ended", () => {
        errorVideo.style.display = "none"; // Ocultar el video
    });
return "Nel krnal , no se puede";
}

default:
return num2;
}
}