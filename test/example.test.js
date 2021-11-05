// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { add } from '../utils.js';
import { subtract } from '../utils.js';
import { multiply } from '../utils.js';
import { divide } from '../utils.js';

const test = QUnit.test;

test('test add', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 3;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add(1, 2);




    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


test('test subtract', (expect) => {
    const expected = 3;

    const actual = subtract(5, 2);

    expect.equal(actual, expected);

});

test('test multiply', (expect) => {
    const expected = 6;

    const actual = multiply(2, 3);

    expect.equal(actual, expected);
});

test('test divide', (expect) => {
    const expected = 2;

    const actual = divide(6, 3);

    expect.equal(actual, expected);
});