function getRandom (lower, upper) {
  "use strict";
  
  const lowNumber = parseInt(lower);
  const highNumber = parseInt(upper);
  
  if (lowNumber >= highNumber) {
      
      const err = new Error(`getRandom: The number passed as the lower bound was greater than the number passed as the upper bound.`)
      throw err;
    
  } else if (lowNumber && highNumber || lowNumber === 0 && highNumber || lowNumber && highNumber === 0) {  //allow for all possible combinations of negative and 0 values
    
    const randomNum = Math.floor( Math.random() * (highNumber - lowNumber + 1) ) + lowNumber;
    return randomNum;
    
  } else {
    
    const err = new Error(`getRandom: One of the arguments provided was not a number.`)
    throw err;
    
  }
}



