
import { add, subtract, multiply, divide } from './utils.js';

const firstInput = document.getElementById('first-num');
const secondInput = document.getElementById('second-num');
const addButton = document.getElementById('add-button');
const sumHere = document.getElementById('sum-here');


addButton.addEventListener('click', () => {
    const firstNum = +firstInput.value;
    const secondNum = +secondInput.value;
    const result = add(firstNum, secondNum);
    sumHere.textContext = result;

});
