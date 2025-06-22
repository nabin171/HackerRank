function strangeCounter(t) {
  let initialValue = 3;
  let value = initialValue;
  for (let time = 2; time <= t; time++) {
    if (value === 1) {
      value = 2 * initialValue;
      initialValue = value;
    } else {
      value -= 1;
    }
  }
  return value;
}
let t = 6;
console.log(strangeCounter(t));
//  3 2 1 6 5 4 3 2 1 12 11 ...  1 24 23 .. 1 48 47. value
//  1 2 3 4 5  time

//steps;
//1.time 1 to t , value=?
//2. value starts from 3 to 1, then doubles the initial value when it encounters after 1
//
//3 , so at each consecutive second ,value can be determined.
//
