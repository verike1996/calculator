function addEnteredNumbers(a, b) {
    return a + b;
}

function add() {
    let firstNumber = parseFloat(newTest)
    console.log(firstNumber);
}

const display = document.getElementById('display');
const addButton = document.getElementById('add');
const subtractButton = document.getElementById('subtract');
const multiplyButton = document.getElementById('multiply');
const divideButton = document.getElementById('divide');
const equalsButton = document.getElementById('equals')

const numButton = document.querySelectorAll('.calc-buttons .number');

let newTest = 0;

numButton.forEach(item => {
    item.addEventListener('click', event => {
        if (newTest === undefined || newTest === 0) {
            newTest = item.textContent;
            console.log(item.textContent);
        } else {
            newTest += item.textContent;
            console.log(item.textContent);
        }
        display.textContent = newTest;
    })
})

addButton.addEventListener('click', event => add());