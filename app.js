
import { add, subtract, multiply, divide } from './utils.js';

const firstInput = document.getElementById('first-num');
const secondInput = document.getElementById('second-num');
const addButton = document.getElementById('add-button');
const subtractButton = document.getElementById('subtract-button');
const multiplyButton = document.getElementById('multiply-button');
const divideButton = document.getElementById('divide-button');
const sumHere = document.getElementById('sum-here');


addButton.addEventListener('click', () => {
    const firstNum = +firstInput.value;
    const secondNum = +secondInput.value;
    const result = add(firstNum, secondNum);
    sumHere.textContent = result;

});

subtractButton.addEventListener('click', () => {
    const firstNum = +firstInput.value;
    const secondNum = +secondInput.value;
    sumHere.textContent = subtract(firstNum, secondNum);
});

multiplyButton.addEventListener('click', () => {
    const firstNum = +firstInput.value;
    const secondNum = +secondInput.value;
    sumHere.textContent = multiply(firstNum, secondNum);
});

divideButton.addEventListener('click', () => {
    const firstNum = +firstInput.value;
    const secondNum = +secondInput.value;
    sumHere.textContent = divide(firstNum, secondNum);

});