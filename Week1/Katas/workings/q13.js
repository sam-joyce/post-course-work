// How do you check if two strings are a rotation of each other?

// Javascript indexOf() method returns the position of the first occurrence of a specified value in a string or in an array. Can call it on a string, to look for a string and if gives -1 (not included) it shouldn''t be a rotation...?

const isRotation = (string1, string2) => {
  if (string1.length !== string2.length) {
    return false;
  }
  let string3 = string1 + string1;
  console.log(string3);
  return string3.indexOf(string2) !== -1; 
}

isRotation('erpap', 'paper');