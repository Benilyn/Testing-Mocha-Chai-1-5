const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');


// unit tests for our `fizz-buzzer` function
describe('fizzBuzzer', function() {

  // test the normal case
  it('should divide a number', function() {
    // range of normal inputs, including
    // notable cases like negative answers
    const normalCases = [
      {num: 15, expected: 0},
      {num: 15, expected: 3},
      {num: 15, expected: 5}
    ];
    // for each set of inputs (a, b), `fizzBuzzer` should
    // produce the expected value
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.num);
      answer.should.equal(input.expected);
    });
  });

  it('should raise error if args not numbers', function() {
    // range of bad inputs 
    const badInputs = [
      ['15'],
      ['fifteen'],
      ['5']
    ];
    // prove that an error is raised for bad inputs
    badInputs.forEach(function(input) {
      (function() {
          fizzBuzzer(input)
      }).should.throw(Error);
    });
  });
});