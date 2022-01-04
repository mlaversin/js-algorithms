// A number is a prime number if it is only divisible by 1 and itself.
// A number is not a prime number if it is divisible by a number between 2 and itself

function isPrimeNumber(number) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrimeNumber(91));
