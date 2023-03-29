let num = 3,
  flag = false;
for (let i = 2; i <= num / 2; ++i) {
  if (num % i == 0) {
    flag = true;
    break;
  }
}

if (!flag) console.log(num + ' is a prime number.');
else console.log(num + ' is not a prime number.');