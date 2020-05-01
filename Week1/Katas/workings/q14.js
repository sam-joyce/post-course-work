// How do you swap two numbers without using a third variable?

const swapNumbers = (array) => {
  // example [4, 6]
  // grab the numbers for the 2 variables
  let num1 = array[0];
  let num2 = array[1];

  num1 = num1 + num2; // should be 10
  num2 = num1 - num2; // should be 4
  num1 = num1 - num2; // should be 6

  return console.log([num1, num2]);
}

swapNumbers([4, 6]);