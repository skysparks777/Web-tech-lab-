let display = document.getElementById('display');
let history = document.getElementById('history');

let currentInput = '';
let pastCalculations = [];

// Display input on calculator
function input(value) {
    if (currentInput === '0' && value !== '.') {
        currentInput = value;
    } else {
        currentInput += value;
    }
    display.innerText = currentInput;
}

// Calculate and show result
function calculate() {
    try {
        let result = eval(currentInput);
        display.innerText = result;
        pastCalculations.push(`${currentInput} = ${result}`);
        updateHistory();
        currentInput = result.toString();
    } catch (error) {
        display.innerText = 'Error';
        currentInput = '';
    }
}

// Clear display
function clearDisplay() {
    currentInput = '';
    display.innerText = '0';
}

// Delete last character
function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    display.innerText = currentInput || '0';
}

// Update notepad history
function updateHistory() {
    history.innerHTML = '';
    // Display the last 7 calculations in history
    for (let i = pastCalculations.length - 1; i >= Math.max(0, pastCalculations.length - 7); i--) {
        let p = document.createElement('p');
        p.innerText = pastCalculations[i];
        history.appendChild(p);
    }
}
