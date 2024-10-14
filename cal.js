// Basic Calculator using JavaScript in console

function calculator() {
    // Get numbers and operator from the user
    let num1 = parseFloat(prompt("Enter the first number:"));
    let operator = prompt("Enter operator (+, -, *, /):");
    let num2 = parseFloat(prompt("Enter the second number:"));

    let result;

    if (operator === "+") {
        result = num1 + num2;
    } else if (operator === "-") {
        result = num1 - num2;
    } else if (operator === "*") {
        result = num1 * num2;
    } else if (operator === "/") {
        if (num2 !== 0) {
            result = num1 / num2;
        } else {
            result = "Error: Division by zero!";
        }
    } else {
        result = "Invalid operator!";
    }
    console.log(`Result: ${result}`);
}

calculator();
