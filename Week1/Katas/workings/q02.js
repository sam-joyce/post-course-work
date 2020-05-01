// 02. How do you find the duplicate number on a given integer array?

const findDuplicates = numbers => numbers.filter((item, index) => numbers.indexOf(item) != index)

console.log(findDuplicates([1, 2, 2, 3, 4, 5, 5, 6]));

// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
//   if (numbers.indexOf(numbers[i]) == -1) {
//     duplicateNumbers.push(numbers[i]);
//   }
//   console.log(duplicateNumbers);
// } return duplicateNumbers;
