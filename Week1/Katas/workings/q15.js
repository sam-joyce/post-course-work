// How do you find all permutations of a string?
// likely need:
// - new array to contain our permutations
// - iterate over the string for all possibilities

const findPermutations = (string) => {
  if (typeof string !== "string") {
    return "please enter a string";
  } else if (string.length == 1) {
    return string;
  }
  let newArray = [];
  for (let i = 0; i < string.length; i++) {
    
  }
  return newArray;
}
