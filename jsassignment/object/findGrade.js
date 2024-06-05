// ques 2
// part 1
console.log("Question 2\n Part 1");
let students = [
    { name: "Alice", grades: [85, 90, 78] },
    { name: "Bob", grades: [80, 85, 88] },
    { name: "Charlie", grades: [90, 92, 95] },
    { name: "Dave", grades: [70, 75, 80] },
    { name: "Eve", grades: [88, 84, 82] }
   ];
let findGrade=(student,grade)=>{
    return student.filter((item)=> item.grades.find((val)=>(val >= grade)))
}
console.log(findGrade(students,90));

// part 2
console.log("Part 2");

let avgGrade = (student)=>{
    let sum=0;
    student.forEach((student)=>{
        student.grades.forEach((grade)=>{
            sum = sum + grade;
        })
    })
  return sum/3;  
}
console.log(avgGrade(students));