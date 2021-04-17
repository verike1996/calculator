function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
}

function addOperator() {
    operationPerformed = 'add';
    firstNumber = getNumber();
}

function subtractOperator() {
    operationPerformed = 'subtract';
    firstNumber = getNumber();
}
function addOperator() {
    operationPerformed = 'add';
    firstNumber = getNumber();
}
function addOperator() {
    operationPerformed = 'add';
    firstNumber = getNumber();
}

function evaluate() {
    switch (operationPerformed) {
        case 'add':
            return add(firstNumber, secondNumber);
            break;
        case 'subract':
            return subtract(firstNumber, secondNumber);
            break;
        case 'multiply':
            return multiply(firstNumber, secondNumber);
            break;
        case 'divide':
            return divide(firstNumber, secondNumber);
            break;
    }
}

function operate() {
    display.value = solution;
}

function getNumber() {
    let disVal = display.textContent;
    parseFloat(disVal);
    return disVal;
}

const display = document.getElementById('display');
const addButton = document.getElementById('add');
const subtractButton = document.getElementById('subtract');
const multiplyButton = document.getElementById('multiply');
const divideButton = document.getElementById('divide');
const equalsButton = document.getElementById('equals');

const clearButton = document.getElementById('clear');
const posNegButton = document.getElementById('pos-neg');
const percentageButton = document.getElementById('percent');

const numButton = document.querySelectorAll('.calc-buttons .number');

let displayText = 0;
let operationPerformed = null;
let firstNumber = null;
let secondNumber = null;

numButton.forEach(item => {
    item.addEventListener('click', event => {
        if (displayText == 0) {
            displayText = item.textContent;
        } else {
            displayText += item.textContent;
        }
        console.log(typeof(displayText));
        parseFloat(displayText);
        console.log(typeof(displayText));
        display.textContent = displayText;
    })

    // ALL SUBJECT TO CHANGE
})