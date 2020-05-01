// 11. How do you check if a given string is a palindrome?

const isPalindrome = (string1, string2) => {
  if (string1 == string2.split('').reverse().join('')) {
    return console.log(true);
  }
}

isPalindrome('stanley', 'yelnats');