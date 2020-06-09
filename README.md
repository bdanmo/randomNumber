# randomNumber
A utility function that receives programmer or user input and returns a random integer between any
two integers (inclusive of lower and upper bound) provided as arguments to the function. Throws errors
if arguments/user input was not a number/no input, or if the lower param was given a number greater
than the upper param.

randomNumber(lower, uper); // returns any number between or including the numbers passed as arugments

randomNumber(-111, 0) // returns random integer from -111 (inclusive) to 0 (inclusive)
randomNumber('1', '1000') // integers are parsed and a random integer between 1 and 1000 is returned
randomNumber(1000, 1) // returns an error: the upper param must be provided with a number that is greater than 
the numberprovided to the lower param
randomNumber('boof', 6) // returns an error: one of the values provided was not a number
randomNumber('', '') // same as above

Proposed improvement: allow programmer or user to provide the upper/lower bounds to the function in any order, 
and give back the same results: a random number between the provided numbers.

