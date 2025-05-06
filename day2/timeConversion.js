function timeConversion(s) {
  // Write your code here
  let time = s.slice(0, 8).split(":");
  let am = s.slice(8, 10);
  if (am == "AM") {
    if (time[0] === "12") {
      time[0] = "00";
    }
  } else {
    if (time[0] !== "12") time[0] = (Number(time[0]) + 12).toString();
  }

  return time.join(":");
}
let time = "12:00:00PM";
console.log(timeConversion(time));
