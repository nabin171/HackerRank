function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num - 1; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

// function prime(array) {
//   array.sort((a, b) => {
//     const aIsPrime = isPrime(a);
//     const bIsPrime = isPrime(b);

//     if (aIsPrime && !bIsPrime) {
//       return -1;
//     }

//     if (!aIsPrime && bIsPrime) {
//       return 1;
//     }

//     return a < b ? -1 : 1;
//   });

//   return array;
// }

function prime(array) {
  const prime = [];
  const notPrime = [];

  for (let i = 0; i < array.length; i++) {
    if (isPrime(array[i])) {
      prime.push(array[i]);
    } else {
      notPrime.push(array[i]);
    }
  }

  prime.sort();
  notPrime.sort();

  return [...prime, ...notPrime];
}

const x = "abc";
const y = "def";

console.log(x + y);

let array = [4, 2, 3, 6, 61];
console.log(prime(array));
