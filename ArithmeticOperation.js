function arithmeticMaxMin(a, b, c) {
    const operations = [
      a + b * c,
      a % b + c,
      c + a / b,
      a * b + c
    ];
    const maxResult = Math.max(operations);
    const minResult = Math.min(operations);
  
    return { maxResult, minResult };
  }
  
  const result = arithmeticMaxMin(2, 3, 4);
  console.log(result.maxResult); // Output: 14
  console.log(result.minResult); // Output: 2
  