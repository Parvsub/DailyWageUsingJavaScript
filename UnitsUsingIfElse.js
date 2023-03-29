function displayUnits(num) {
  let result = "";
  
  if (num === 1) {
    result = "one";
  } else if (num === 10) {
    result = "ten";
  } else if (num === 100) {
    result = "one hundred";
  } else if (num === 1000) {
    result = "one thousand";
  } else if (num === 10000) {
    result = "ten thousand";
  } else if (num === 100000) {
    result = "one hundred thousand";
  } else if (num === 1000000) {
    result = "one million";
  }
  
  return result;
}

console.log(displayUnits(1)); // Output: one
console.log(displayUnits(10)); // Output: ten
console.log(displayUnits(100)); // Output: one hundred
console.log(displayUnits(1000)); // Output: one thousand
console.log(displayUnits(10000)); // Output: ten thousand
console.log(displayUnits(100000)); // Output: one hundred thousand
console.log(displayUnits(1000000)); // Output: one million
