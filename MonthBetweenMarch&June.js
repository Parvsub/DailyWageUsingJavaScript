// Get the day and month from the command line arguments
let day = parseInt(process.argv[2]);
let month = parseInt(process.argv[3]);

// Check if the day of the month is between March 20 and June 20
let isBetween = false;
if (month === 3 && day >= 20) {
  isBetween = true;
} else if (month > 3 && month < 6) {
  isBetween = true;
} else if (month === 6 && day <= 20) {
  isBetween = true;
}

// Output the result
console.log(isBetween);