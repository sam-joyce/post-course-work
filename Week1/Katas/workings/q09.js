// 09. How do you check if two strings are anagrams of each other?

const isAnagram = (string1, string2) => {
  const sorted1 = string1.split('').sort().join('');
  const sorted2 = string2.split('').sort().join('');
  if (sorted1 === sorted2) {
    return console.log(true);
  }
}

isAnagram('dog', 'god');