// 03. How do you find duplicate numbers in an array if it contains multiple duplicates?
// ** previous solution for q02 works whether there is one duplicate, or multiple **

const findDuplicates = numbers => numbers.filter((item, index) => numbers.indexOf(item) != index)

console.log(findDuplicates([1, 2, 2, 2, 3, 4, 5, 5, 6, 6, 6, 6]));