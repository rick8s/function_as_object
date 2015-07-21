/*
  Create a function that multiplies two numbers
  passed in as argument. Return the product.
 */
function multiply(num1, num2){
  return num1 * num2;
}


/*
  Create a function that divides two numbers
  passed in as argument. Return the quotient.
 */
function divide(num1, num2){
  return num1 / num2;
}

/*
  Create a variable to hold the return value of the
  3-argument function. 

  e.g. var result = myFunction(0, 0, func)
 */
function usePrevious(num1, num2, x){
  return x(num1, num2);
}
/*var result = function usePrevious(num1, num2, x){
  return x(num1, num2);
}


/*
  Log the result
 */
 /*document.write(result(2,10,multiply));*/

/*
  Log the result
 */console.log(usePrevious(2,10,multiply));
