// 12. How can a given string be reversed using recursion?
// almost works... shows undefined in the terminal with the correct character after?

const reverseString = (string) => {
  if (string === "")
    return "";
  else
    return reverseString(string.substr(1)) + string.charAt(0);
}
reverseString("hello");