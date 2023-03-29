// Initialize an array to store the random values
let values = [];

// Generate 5 random 3-digit values and store them in the array
for (let i = 0; i < 5; i++) {
  let value = Math.floor(Math.random() * 900) + 100;
  values.push(value);
  console.log(value);
}

// Find the minimum value in the array
let min = values[0];
for (let i = 1; i < values.length; i++) {
  if (values[i] < min) {
    min = values[i];
  }
}

// Find the maximum value in the array
let max = values[0];
for (let i = 1; i < values.length; i++) {
  if (values[i] > max) {
    max = values[i];
  }
}

// Output the minimum and maximum values
console.log("Minimum value: " + min);
console.log("Maximum value: " + max);