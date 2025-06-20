function happyLadybugs(b) {
  // Write your code here
  let obj = {};
  let hasSpace = false;
  for (let i = 0; i < b.length; i++) {
    if (b[i] === "_") {
      hasSpace = true;
      continue;
    }
    if (!obj[b[i]]) {
      obj[b[i]] = 0;
    }
    obj[b[i]]++;
  }

  let array = Object.values(obj);

  for (let j = 0; j < array.length; j++) {
    if (array[j] < 2) {
      return "NO";
    }
  }
  if (hasSpace) {
    return "YES";
  }
  for (let k = 0; k < b.length; k++) {
    if (b[k] !== b[k + 1] && b[k] !== b[k - 1]) {
      return "NO";
    }
  }
  return "YES";
}
let b = "RRYYBB";
console.log(happyLadybugs(b));
//  RBY_YBR  yes
//  RBYYBR no
//  RRBBYY yes
//  RBBYY no
