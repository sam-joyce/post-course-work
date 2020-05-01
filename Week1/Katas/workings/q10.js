// 10. How do you print the first non-repeated character from a string?

const firstNonRepeatedCharacter = (string) => {
  for (let i = 0; i < string.length; i++) {
    let c = string.charAt(i);
    // console.log(c);
    if (string.indexOf(c) == i && string.indexOf(c, i + 1) == -1) {
      return console.log(c);
    }
  }
  return null;
}

firstNonRepeatedCharacter('aabbccde');