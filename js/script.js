const display = document.getElementById('display');

const button = document.querySelectorAll('.calc-buttons button');

button.forEach(item => {
    item.addEventListener('click', event => {
        console.log(item.textContent);
    })
})