// fizzbuzz
for (var num = 1; num <= 100; num += 1) {
  if (num % 3 == 0 && num % 5 == 0) {
    console.log(`${num} - FizzBuzz`);
  } else if (num % 3 == 0) {
    console.log(`${num} - Fizz`);
  } else if (num % 5 == 0) {
    console.log(`${num} - Buzz`);
  }else {
    console.log(num);
  }
}
