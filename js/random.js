function getRandom (lower, upper) {
  "use strict";
  
  const lowNumber = parseInt(lower);
  const highNumber = parseInt(upper);

  if (lowNumber >= highNumber) {
    
    const err = new Error(`The value provided to "upper" was not greater than the value povided to "lower".`)
    console.error(err);
    return err; //or replace this statement with whatever other error handling you need for your use case: e.g. provide user with an error message
    
  } else if (lowNumber && highNumber || lowNumber === 0 && highNumber || lowNumber && highNumber === 0) {  //allow for all possible combinations of negative and 0 values
    
    const randomNum = Math.floor( Math.random() * (highNumber - lowNumber + 1) ) + lowNumber;
    
    return randomNum;
    
  } else {
    
    const err = new Error(` One of the arguments was not a number.`)
    console.error(err)
    return err; //or replace this statement with whatever other error handling you need for your use case: e.g. provide user with an error message
    
    
  }
}

//works:
getRandom(3, 98);
getRandom(-111, 0); 
getRandom("-50", -1);
getRandom(7, '21');

//doesn't work:
getRandom(52, 5);
getRandom(7, 'George');
getRandom('', 10);
getRandom(10, '');
getRandom('','');
getRandom();




