const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');


// unit tests for our `fizz-buzzer` function
describe('fizzBuzzer', function() {

  
/*
  // test the normal case
  it('should divide a number', function() {
    // range of normal inputs, including
    // notable cases like negative answers
    const normalCases = [
      {num: 15, expected: 0},
      {num: 5, expected: 0},
      {num: 3, expected: 0}
    ];
    // for each input (num), `fizzBuzzer` should
    // return 'fizz-buzz', 'fizz', or 'buzz'
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.num);
      answer.should.equal(input.expected);
    });
  });
*/

//return 'fizz-buzz' if num is divisible by 5
  it('should return fizz-buzz is divisible by 15', function (){
    const divisibleBy15 = [15, 30, 45, 60];
    divisibleBy15.forEach(function(input) {
      fizzBuzzer(input).should.equal('fizz-buzz')
    }) //divisibleBy15
  }); //return fizz-buzz

  //return 'buzz' if num is divisible by 5
  it('should return buzz is divisible by 5', function (){
    const divisibleBy5 = [5, 10, 15, 20];
    divisibleBy5.forEach(function(input) {
      fizzBuzzer(input).should.equal('buzz')
    }) //divisibleBy5
  }); //return buzz

  //return 'fizz' if num is divisible by 3
  it('should return fizz is divisible by 3', function (){
    const divisibleBy3 = [3, 6, 9, 12];
    divisibleBy3.forEach(function(input) {
      fizzBuzzer(input).should.equal('fizz')
    }) //divisibleBy3
  }); //return fizz

  //return number if not divisible by 15, 5 or 3
  it('should return num if not divisible by 15, 5 or 3', function(){
    const notDivisible = [2, 7, 11, 13];
    notDivisible.forEach(function(input){
      fizzBuzzer(input).should.equal(input)
    }); //notDivisible 
  }); //return num

  // prove that an error is raised for bad inputs
  it('should raise error if input is not numbers', function() {
    const badInputs = ['15', 'fifteen', '5', true,'yes'];
    badInputs.forEach(function(input) {
      (function() {fizzBuzzer(input)}).should.throw(Error);
    }); //badInputs.forEach
  }); //it (error for bad inputs)
}); //fizzBuzzer function