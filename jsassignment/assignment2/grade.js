let scores = 40;
if (scores <= 59 && scores >= 50) {
  console.log("your grade is 'D'");
} else if (scores <= 69 && scores >= 60) {
  console.log("your grade is '");
} else if (scores <= 79 && scores >= 70) {
  console.log("your grade is 'B'");
} else if (scores <= 100 && scores >= 89) {
  console.log("your grade is 'A'");
} else {
  console.log("your grade is 'F'");
}

scores <= 100 && scores >= 89
  ? console.log("A")
  : scores <= 79 && scores >= 70
  ? console.log("your grade is 'B'")
  : scores <= 69 && scores >= 60
  ? console.log("your grade is 'c")
  : scores <= 59 && scores >= 50
  ? console.log("your grade is 'D'")
  : scores >=0 && scores <=40 ? 
  console.log("your grade is 'F'")
  : console.log("wrong entry");
