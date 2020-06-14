/**
 * Generates a random number between any two numbers (inclusive)
 *
 * @param {number} lower - the lower bound of the random number range
 * @param {number]} upper - the upper bound of the random number range
 * @returns {number} a number between or including the upper and lower bounds
 * @throws Will throw an error if either argument is not a number, or the lower argument is greater than the upper argument.
 */


function randomNumber (lower, upper) {
  "use strict";
  
  const lowNumber = parseInt(lower);
  const highNumber = parseInt(upper);
  
  if (lowNumber >= highNumber) {
      
      const err = new Error(`randomNumber: The number passed as the lower bound was greater than the number passed as the upper bound.`)
      throw err;
    
  } else if (lowNumber && highNumber || lowNumber === 0 && highNumber || lowNumber && highNumber === 0) {  //allow for all possible combinations of negative and 0 values
    
    const randomNum = Math.floor( Math.random() * (highNumber - lowNumber + 1) ) + lowNumber;
    return randomNum;
    
  } else {
    
    const err = new Error(`randomNumber: One of the arguments provided was not a number.`)
    throw err;
    
  }
}



