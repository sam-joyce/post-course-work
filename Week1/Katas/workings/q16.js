// 16. How do you check if a string contains only digits?

// parseInt()... parses a string and returns an integer


const checkOnlyDigits = (input) => {
  if (parseInt(input).toString() === input) {
    return console.log(true);
  } else {
    return console.log('contains non-digits');
  }
}

// checkOnlyDigits('2345y7');