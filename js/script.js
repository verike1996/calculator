function grabDisplayNumber() {
    firstNumber = parseFloat(displayText);
    displayText = 0;
}

function add() {
    if (!isAdd) {
        grabDisplayNumber();
    }
    isAdd = 1;
    isSubtract = 0;
    isMultiply = 0;
    isDivide = 0;
}

function subtract() {
    if (!isSubtract) {
        grabDisplayNumber();
    }
    isAdd = 0;
    isSubtract = 1;
    isMultiply = 0;
    isDivide = 0;
}

function multiply() {
    if (!isMultiply) {
        grabDisplayNumber();
    }
    isAdd = 0;
    isSubtract = 0;
    isMultiply = 1;
    isDivide = 0;
}

function divide() {
    if (!isDivide) {
        grabDisplayNumber();
    }
    isAdd = 0;
    isSubtract = 0;
    isMultiply = 0;
    isDivide = 1;
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

let isAdd = 0;
let isSubtract = 0;
let isMultiply = 0;
let isDivide = 0;

const numButton = document.querySelectorAll('.calc-buttons .number');

let displayText = 0;
let firstNumber = 0;
let answerText = null;

numButton.forEach(item => {
    item.addEventListener('click', event => {
        if (displayText === undefined || displayText === 0) {
            displayText = item.textContent;
            console.log(item.textContent);
        } else {
            displayText += item.textContent;
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