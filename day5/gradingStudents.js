function gradingStudents(grades) {
  //   for (let i = 0; i < grades.length; i++) {
  //     if (grades[i] < 38) {
  //       continue;
  //     }

  //     const nextMultipleOfFive = Math.ceil(grade / 5) * 5;

  //     if (nextMultipleOfFive - grades[i] < 3) {
  //       grades[i] = nextMultipleOfFive;
  //     }
  //   }

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
