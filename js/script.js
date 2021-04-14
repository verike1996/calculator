function grabDisplayNumber() {
    firstNumber = parseFloat(displayText);
    displayText = 0;
    display.textContent = displayText;;
}

function add() {
    grabDisplayNumber();
    isAdd = true;
    isSubtract = false;
    isMultiply = false;
    isDivide = false;
}

function subtract() {
    grabDisplayNumber();
    isAdd = false;
    isSubtract = true;
    isMultiply = false;
    isDivide = false;
}

function multiply() {
    grabDisplayNumber();
    isAdd = false;
    isSubtract = false;
    isMultiply = true;
    isDivide = false;
}

function divide() {
    grabDisplayNumber();
    isAdd = false;
    isSubtract = false;
    isMultiply = false;
    isDivide = true;
}

function equals() {
    let secondNumber = parseFloat(displayText);
    displayText = firstNumber + secondNumber;
    display.textContent = displayText;
}

const display = document.getElementById('display');
const addButton = document.getElementById('add');
const subtractButton = document.getElementById('subtract');
const multiplyButton = document.getElementById('multiply');
const divideButton = document.getElementById('divide');
const equalsButton = document.getElementById('equals');

let isAdd = false;
let isSubtract = false;
let isMultiply = false;
let isDivide = false;

const numButton = document.querySelectorAll('.calc-buttons .number');

let displayText = 0;
let firstNumber = 0;

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
subtractButton.addEventListener('click', subtract())
multiplyButton.addEventListener('click', multiply())
divideButton.addEventListener('click', divide())
equalsButton.addEventListener('click', event => equals());