// 04. How do you remove duplicates from an array in place?
// could use flter, however 'Set' can only have unique values so convert then convert back(spread).

const array = [1, 2, 3, 1, 1, 4, 4, 1];

const uniqueSet = new Set(array);
const backToArray = [...uniqueSet];

console.log(backToArray);