// 08. How do you print duplicate characters from a string?

const removeDuplicateWords = (string) => {
  const array = string.split(' ');
  const uniqueSet = new Set(array);
  const uniqueString = [...uniqueSet].join(' ');
  return console.log(uniqueString);
}

removeDuplicateWords("one one two tree one four five two two");