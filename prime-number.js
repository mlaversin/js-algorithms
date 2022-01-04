// A number is a prime number if it is only divisible by 1 and itself.
// A number is not a prime number if it is divisible by a number between 2 and itself

let number = 91;
let isPrimeNumber = true;

for (let i = 2; i < number; i++) {
  if (number % i === 0) {
    isPrimeNumber = false;
    console.log("Ce nombre n'est pas un nombre premier.");
    console.log(`Il est (notamment) divisible par ${i}`);
    break;
  }
}

if (isPrimeNumber) {
  console.log('Ce nombre est bien un nombre premier !');
}
