// quetion 1
let str = "Aditya";
console.log(str.length);

// question 2
str = str.toUpperCase();
console.log(str);

// q 3
console.log(str[0]);

// qu 4 4. Change "Welcome to JS Class" to "Welcome to JavaScript Class".
str ="Welcome to JS Class";
console.log(str.replace("JS","JavaScript"));



// question 5
let myAge = 250
	let yourAge = 25 
	// Output Should be: I am 225 years older than you.
    console.log(`I am ${myAge - yourAge} years older than you`);



// 6. write a function which takes a number as a arg, and check that given number is Even or odd and return true if even else false.	
// 	a. with If else 
// 	b. with ternary operator.

//a 
let noChecker = (num)=>{
  if(num%2==0){
    return true;
  }else{
    return false;
  }
}
console.log(noChecker(4));
//b
let noChecker2 = (num)=> num%2==0? true:false 
console.log(noChecker2(5));

// que 7
// //7. Write a function which takes the string and delay time, and print the string after passed delay time.
// console.log("Question 7");
// let str1 = "Baccha";
// let delaytime = 2000;
// let delay=(str1,delaytime)=>{
//     setTimeout(() => {
//         console.log(str1);
//     }, delaytime);
// }
// delay(str1,delaytime);

// //8. Create a function, which takes a counter time, and start printing the count value till 0.
// console.log("Quetion 8");
// let countertime=1000;
// value = 10;
// Time = ((countertime,value)=>{
//      let Inter = setInterval(() => {
//         console.log(value);
//         value--;
//         if(value == 0){
//             clearInterval(Inter)
//         }
//      }, countertime);
// })
// Time(countertime,value);


// 9. Create a function which takes a n numbers as an args, return the sum of all the args.
let sum = (...rest)=>{
      let sum =0;
      rest.forEach((val)=>{
        sum+=val;
      })
      return sum;
}
console.log(sum(2,5));

//10, Create a function, which takes n number of args, and return sum of all the args, except first 2 args.
let sum2 = ( a , b ,...rest) => {
    let sum2 =0;
    rest.forEach((val)=>{
      sum2+=val;
    })
    return sum2;
}
console.log(sum2(2,5,5,6));

//11. Create a function, which takes n number of args, and return sum of last 3 args.
let sum3 = (...rest) => {
    let sum3 =0;
    rest = rest.slice(-3)
    rest.forEach((val)=>{
      sum3+=val;
    })
    return sum3;
}
console.log(sum3(2,5,5,6)); 

//12. Create a function, which takes n number of args, and return two values.
// V1: difference b/w min and max number from all the elements.

// v2. difference b/w min and second max number from all the elements.

// Hint: You can use sort methods of array. 
//    If you have to return more then one value from a function, So you can return a array from that function. And later you de-strectutre it.

let MinMax = (...rest)=>{
    rest.sort((a,b)=> a-b);
    let diff1 = rest[rest.length-1]-rest[0];
    let diff2 = rest[rest.length-2]-rest[0];
     return [diff1,diff2];
}
console.log(MinMax(3,2,5,6));

//

/// Data Set for next few questions.
const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }

  //13. Get the details of user where user age is greater then 20.
let out={};
Object.keys(users).filter((keys)=>{
    if(users[keys].age>20){
        out[keys]=users[keys];
    }
})
console.log(out);

//14. Get the details of user who isLoggedIn. 
let out1 = {};
Object.keys(users).filter((keys)=>{
    if(users[keys].isLoggedIn== true){
        out1[keys]=users[keys];
    }
})
console.log(out1);

//15. Get the details of user who have worked on Node and MongoDB.
let out3 = {};
Object.keys(users).filter((keys)=>{
    if(users[keys].skills.includes("Node","MongoDB")){
        out3[keys]=users[keys]
    }
})
console.log(out3);









  //18. Create a closure which has one inner function, and this inner function should be returned by outer function. 

  let outerfn = ()=>{
    let a = 5 
    let innerfn =(b)=>{
     console.log(b);
    }
    return innerfn(a);
  }

  console.log(outerfn());

//   19. Create a function, which take one args, one callback. 
// 	And this callback should be executed, after loging the "Welcome to TSP".

function fun( args , callback) {
    console.log("Welcome to TSP");
    console.log(callback(args));
}

fun( 10, (a)=>{
    return a+10;
});

// 20. Create a function, which takes a array of marks, and return two things, min marks, and one function, 
//and if we execute that function it should return the average of marks.

function result(marks){
    marks.sort((a,b)=>a-b);
    let minMarks = marks[0];
    avgMarks =(marks)=>{
       let sum = 0;
       marks.forEach((val)=>{
        sum+=val;
       })
       return sum/marks.length
    }
    return [minMarks,avgMarks];
}

let res = result([2,3,43,56,23])
let [minMarks,AvgMarks] = res;
console.log("Minimum Marks: ",minMarks);
console.log("Average Mark is: ",avgMarks([2,3,43,56,23]));

