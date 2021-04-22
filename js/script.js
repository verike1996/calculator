function grabNumber() {
    if (answerText !== null) {
        firstNumber = answerText;
        secondNumber = parseFloat(displayText);
    }
    if (firstNumber == null || firstNumber == NaN) {
        firstNumber = parseFloat(displayText)
    } else if (secondNumber == null) {
        secondNumber = parseFloat(displayText);
    }
    displayText = 0;
}

function add() {
    operate();
    lastOperatorClicked = 'add';
}

function subtract() {
    operate();
    lastOperatorClicked = 'subtract';
}

function multiply() {
    operate();
    lastOperatorClicked = 'multiply';
}

function divide() {
    operate();
    lastOperatorClicked = 'divide';
}

function changePosNeg() {
    displayText = display.textContent * -1;
    display.textContent = displayText;
}

function clearOperations() {
    answerText = 0;
    displayText = 0;
    lastOperatorClicked = null;
    firstNumber = null;
    secondNumber = null;
    display.textContent = displayText;
}

function getPercentage() {
    display.textContent = displayText * .01;
}

function countDecimals(value) {
    if(Math.floor(value) === value) return 0;
    return value.toString().split('.')[1].length || 0;
}

function evaluate() {
    if (lastOperatorClicked == 'add') {
        answerText = firstNumber + secondNumber;
    } else if (lastOperatorClicked == 'subtract') {
        answerText = firstNumber - secondNumber;
    } else if (lastOperatorClicked == 'multiply') {
        answerText = firstNumber * secondNumber;
    } else if (lastOperatorClicked == 'divide') {
        answerText = firstNumber / secondNumber;
    }
    displayText = answerText;
    answerText = 0;
}

function operate() {
    grabNumber();
    if (lastOperatorClicked !== null) {
        evaluate();
        if (firstNumber !== null && secondNumber !== null) {
            if (displayText.toString().length > 13) {
                displayText = Number(displayText).toExponential(2);
                display.textContent = displayText;
            } else {
                display.textContent = displayText;
            }
        }
    }
}

function equals() {
    operate();
    isCalculating = 1;
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

let lastOperatorClicked = null;
let isCalculating = 0;

const numButton = document.querySelectorAll('.calc-buttons .number');

let displayText = null;
let firstNumber = null;
let secondNumber = null;
let answerText = null;

numButton.forEach(item => {
    item.addEventListener('click', event => {
        if (displayText === 0 || displayText === null) {
            displayText = item.textContent;
        } else {
            if (displayText.length < 13) {
                displayText += item.textContent;
            }
        }
        display.textContent = displayText;
    })
})

addButton.addEventListener('click', event => add());
subtractButton.addEventListener('click', event => subtract());
multiplyButton.addEventListener('click', event => multiply());
divideButton.addEventListener('click', event => divide());
equalsButton.addEventListener('click', event => equals());

clearButton.addEventListener('click', event => clearOperations());
posNegButton.addEventListener('click', event => changePosNeg());
percentageButton.addEventListener('click', event => getPercentage());