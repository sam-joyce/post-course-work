// 01. How do you find the missing numbers in a given integer array?

// const findMissingNumbers = (array) => {
//   let missingNumbers = [];
//   for (let i = 1; i <= array.length; i++) {
//     if (array.indexOf(i) == -1) {
//       missingNumbers.push(i);
//     }
//   } console.log(missingNumbers);
// };

// findMissingNumbers([1, 2, 3, 5, 6, 7, 10, 11, 13]);

let numbers = [0, 1, 3, 4, 5, 7, 8]; // Missing 2,6
let missing = [];

for (let i = 0; i < numbers.length; i++) {
  if ((numbers[i + 1] - numbers[i]) > 1) {
    missing.push(numbers[i + 1] - numbers[1]);
  }
}

console.log(missing);
