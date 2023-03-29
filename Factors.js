let num = 6;
console.log(`Factors of ${num} are `);
for (let i = 2; i <= num; i++) {
  while (num % i == 0) {
    //checking if completely divisible
    console.log(i);
    num = num / i; //taking remainder in num
  }
}