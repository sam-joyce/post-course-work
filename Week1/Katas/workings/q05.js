// 05. How do you find the largest and smallest number in an unsorted integer array?
// ** remember... will just base it on the first number it sees... i.e. 10 will sorted before 9 **

const findMinAndMax = (array) => {
  array.sort((a, b) => (a-b))
  console.log(array);
}

findMinAndMax([2, 4, 1, 6, 8, 7, 6, 10, 3, 3, 12]);