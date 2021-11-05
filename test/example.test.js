// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { add } from '../utils.js';
import { subtract } from '../utils.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
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


test('time for a test', (expect) => {
    const expected = 3;

    const actual = subtract(5, 2);

    expect.equal(actual, expected);

});