function grabDisplayNumber() {
    firstNumber = parseFloat(displayText);
}

function grabAnswerNumber() {
    firstNumber = parseFloat(answerText);
}

function add() {
    if (!isAdd) {
        grabDisplayNumber();
    } 
    if (isCalculating) {
        grabAnswerNumber();
    }
    displayText = 0;
    isAdd = 1;
    isSubtract = 0;
    isMultiply = 0;
    isDivide = 0;
    isCalculating = 1;
}

function subtract() {
    if (!isSubtract) {
        grabDisplayNumber();
    } 
    if (isCalculating) {
        grabAnswerNumber();
    }
    displayText = 0;
    isAdd = 0;
    isSubtract = 1;
    isMultiply = 0;
    isDivide = 0;
    isCalculating = 1;
}

function multiply() {
    if (!isMultiply) {
        grabDisplayNumber();
    } 
    if (isCalculating) {
        grabAnswerNumber();
    }
    displayText = 0;
    isAdd = 0;
    isSubtract = 0;
    isMultiply = 1;
    isDivide = 0;
    isCalculating = 1;
}

function divide() {
    if (!isDivide) {
        grabDisplayNumber();
    } 
    if (isCalculating) {
        grabAnswerNumber();
    }
    displayText = 0;
    isAdd = 0;
    isSubtract = 0;
    isMultiply = 0;
    isDivide = 1;
    isCalculating = 1;
}

function changePosNeg() {
    if (isCalculating) {
        answerText = answerText * -1;
        display.textContent = answerText;
    } else {
        displayText = displayText * -1;
        display.textContent = displayText;
    }
}

function evaluate() {
    let secondNumber = parseFloat(displayText);
    if (isAdd) {
        answerText = firstNumber + secondNumber;
    } else if (isSubtract) {
        answerText = firstNumber - secondNumber;
    } else if (isMultiply) {
        answerText = firstNumber * secondNumber;
    } else if (isDivide) {
        answerText = firstNumber / secondNumber;
    }
}

function equals() {
    evaluate()
    display.textContent = answerText;
}

const display = document.getElementById('display');
const addButton = document.getElementById('add');
const subtractButton = document.getElementById('subtract');
const multiplyButton = document.getElementById('multiply');
const divideButton = document.getElementById('divide');
const equalsButton = document.getElementById('equals');

const clearButton = document.getElementById('pos-neg');

let isAdd = 0;
let isSubtract = 0;
let isMultiply = 0;
let isDivide = 0;
let isCalculating = 0;

const numButton = document.querySelectorAll('.calc-buttons .number');

let displayText = 0;
let firstNumber = 0;
let answerText = null;

numButton.forEach(item => {
    item.addEventListener('click', event => {
        if (displayText === undefined || displayText === 0) {
            displayText = item.textContent;
            inputText = item.textContent;
            console.log(item.textContent);
        } else {
            displayText += item.textContent;
            inputText += item.textContent;
            console.log(item.textContent);
        }
        display.textContent = displayText;
    })
})

addButton.addEventListener('click', event => add());
subtractButton.addEventListener('click', event => subtract());
multiplyButton.addEventListener('click', event => multiply());
divideButton.addEventListener('click', event => divide());
equalsButton.addEventListener('click', event => equals());

clearButton.addEventListener('click', event => changePosNeg());