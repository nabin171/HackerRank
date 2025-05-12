function bonAppetit(bill, k, b) {
  // Write your code here
  let sum = 0;
  for (let i = 0; i < bill.length; i++) {
    if (i != k) {
      sum += bill[i];
    }
  }
  let final = sum / 2;

  if (final == b) {
    console.log("Bon Appetit");
  } else {
    console.log(b - final);
  }
}
let bill = [2, 3, 4, 5];
k = 3;
b = 4;
console.log(bonAppetit(bill, k, b));
