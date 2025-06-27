function minimumNumber(n, password) {
  let hasDigit = false;
  let hasSmallLetter = false;
  let hasCapitalLetter = false;
  let hasSpecialCharacters = false;
  for (let i = 0; i < password.length; i++) {
    if (
      ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(password[i])
    ) {
      hasDigit = true;
    }
    if (password.charCodeAt(i) >= 65 && password.charCodeAt(i) <= 90) {
      hasCapitalLetter = true;
    }

    if (password.charCodeAt(i) >= 97 && password.charCodeAt(i) <= 122) {
      hasSmallLetter = true;
    }
    if (
      ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+"].includes(
        password[i]
      )
    ) {
      hasSpecialCharacters = true;
    }
  }
  let addCount = 0;
  if (hasDigit === false) {
    addCount++;
  }
  if (hasSmallLetter === false) {
    addCount++;
  }
  if (hasCapitalLetter === false) {
    addCount++;
  }
  if (hasSpecialCharacters === false) {
    addCount++;
  }
  let totalLength = n + addCount;
  if (totalLength >= 6) {
    return addCount;
  }
  return addCount + (6 - totalLength);
}
let n = 3;
let password = "bA@";
console.log(minimumNumber(n, password));

//ba@  = 3 ,missing caps,specialchar,digit
//Aa@0 = missing digit, 2
//@B012= missing small, 1
//abA01=missing special char ,1
//ab01@=missing caps,1
//ab01=missing caaps,special char
//ab$$$=missing caps,digit,
//
