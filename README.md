# randomNumber
A utility function that receives programmer or user input (checks for user errors) and returns a random integer between any
two integers (inclusive lower and upper) provided as arguments to the function.

randomNumber(lower, uper); // returns any number between or including the numbers passed as arugments

randomNumber(-111, 0) // returns random integer from -111 (inclusive) to 0 (inclusive)
randomNumber('1', '1000') // integers are parsed and a random integer between 1 and 1000 is returned
randomNumber(1000, 1) // returns an error: the upper param must be provided with a number that is greater than the number
provided to the lower param
randomNumber('boof', 6) // returns an error: one of the values provided was not a number
randomNumber('', '') // same as above



