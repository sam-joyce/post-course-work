// 06. How do you find all pairs of an integer array whose sum is equal to a given number?

const findPairs = (array, number) => {
  let sums = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === number) {
        sums.push([array[i], array[j]])
      }
    }
  }
  return console.log(sums);
}
// this way returns the reverse too (i.e. 2 + 5 as well as 5 + 2) and seems quite long winded... revisit using: 'hash tables'. 

findPairs([1, 2, 3, 3, 4, 5, 7, 8, 9, 2, 4], 7);