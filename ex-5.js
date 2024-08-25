function calculateStudentGrade(score) {
  // Start coding here
  let grade;
  if (score >= 0 && score <= 59) {
      grade = "F";
  } else if (score >= 60 && score <= 69){
    grade = "D"; 
  } else if (score >= 70 && score <= 79) {
    grade = "C";
  } else if (score >= 80 && score <= 89) {
    grade = "B";
  } else if (score >= 90 && score <= 100) {
    grade = "A";
  } else {
    grade = "F";
  }

  return grade;
}

// Example case
let johnGrade = calculateStudentGrade(30);
let lisaGrade = calculateStudentGrade(73);
let janeGrade = calculateStudentGrade(80);
let jjGrade = calculateStudentGrade(60);
let alexGrade = calculateStudentGrade(90);




console.log(`John grade is ${johnGrade}`);
console.log(`Lisa grade is ${lisaGrade}`);
console.log(`Jane grade is ${janeGrade}`);
console.log(`JJ grade is ${jjGrade}`);
console.log(`Alex grade is ${alexGrade}`);
