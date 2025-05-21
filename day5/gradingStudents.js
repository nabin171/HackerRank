function gradingStudents(grades) {
  return grades.map((grade) => {
    if (grade < 38) {
      return grade;
    }

    const nextMultipleOfFive = Math.ceil(grade / 5) * 5;

    if (nextMultipleOfFive - grade < 3) {
      return nextMultipleOfFive;
    }

    return grade;
  });
}

let grades = [20, 38, 43, 76];

console.log(gradingStudents(grades));
