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

function operate() {

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