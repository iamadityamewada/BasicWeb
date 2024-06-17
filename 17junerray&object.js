// let arr = [43,564,34,6733,334332];
// arr.forEach((val,index)=>arr[index]=val**2)

// arr = arr.map((val)=>val**2)

// arr = arr.map((val)=>val%2===0?val**2:val**3)
// arr = arr.map((val,i)=>val ** (i % 2 === 0?2:3))
// arr.sort((a,b)=>b-a);
// arr.sort((a,b)=> (b.toString()).length - (a.toString()).length)
// console.log(arr);

// let details =[
//     {name:"Raman",age:21,gender:"male"},{name:"Aditya",age:23,gender:"male"},{name:"Anshu",age:16,gender:"female"},{name:"Happy",age:25,gender:"male"}
// ]
// details.sort((a,b)=> a.age-b.age)
// details.sort((a,b)=>a.name.localeCompare(b.name))
// details.forEach((val,i)=> {
//     val.age = val.age+5
//     details[i]=val;
// })

// details = details.map((val,i)=> val = val.age+=5)
// details.forEach((val,i)=> {
//     val.gender=="male"?val.name= "Mr. " + val.name:val.name= "Miss. " + val.name
//     details[i]=val;
// })
// details.map((val,i)=> val = val.gender=="male"?val.name= "Mr. " + val.name:val.name= "Miss. " + val.name)

// let male = [];
// let female =[];
// // details.forEach((val,i)=> val.gender==="male"?male.push(val):female.push(val))

// male = details.filter((val)=> val.gender === "male")
// female = details.filter((val)=> val.gender === "female")

// malePer = male.length *100 / details.length
// femalePer = female.length *100 / details.length

// console.log(details);
// console.log(male);
// console.log(female);
// console.log("male:female = " + (male.length/(male.length+female.length)) *100 +":"+(female.length/(male.length+female.length))*100);
// console.log("male:female = " + male.length/(male.length+female.length)+":"+female.length/(male.length+female.length));

// votingUser = details.filter((val)=>val.age>18)
// console.log(votingUser);

// let user={
//     name:"JS",
//     age:23
// }

// let newUser={}
// // Object.keys(user).forEach(key => newUser[key]= user[key]);
// // console.log(newUser);
// data = Object.entries(user);
// // data.forEach(onedata => newUser[onedata[0]]=onedata[1]);
// data.forEach(([key,value]) => newUser[key]= value)

// console.log(newUser);

// let user = {
//     rohit:{
//         age:23 , skills:["Html","JS","MongoDB","React","Node"], marks:[34,56,34,56,21]
//         },
//     rahul:{age:14 , skills:["Html","JS","MongoDB","Node"], marks:[34,76,14,36,21]},
//     shubham:{age:21 , skills:["Html","JS","React","Node"], marks:[34,36,36,46,91]}
// }
// console.log(user);

// let newUser =  {}
// // Object.keys(user).forEach(key => newUser[key]= user[key].age);
// Object.keys(user).forEach((key) =>{
//     if(user[key].age>18)
//        newUser[key]= user[key].age
//     }
// );
// let user = {
//     rohit:{
//         age:23 , skills:["Html","JS","MongoDB","React","Node"], marks:[34,56,34,56,21]
//         },
//     rahul:{age:14 , skills:["Html","JS","MongoDB","Node"], marks:[34,76,14,36,21]},
//     shubham:{age:21 , skills:["Html","JS","React","Node"], marks:[34,36,36,46,91]}
// }
// // console.log(user);


let user = {
    rohit:{
        age:23 , marks:[34,56,34,56,21],skills:["Html","JS","MongoDB","Node"]
        },
    rahul:{age:14 , skills:["Html","JS","MongoDB","Node"], marks:[34,76,14,36,21]},
    shubham:{age:21 , skills:["Html","JS","React","Node"], marks:[34,36,36,46,91]}
}
// console.log(user);
// let newUser={}
// Object.keys(user).forEach((key) => {
//         if(user[key].skills?.includes("React")){ //?? sklls? to handle error of undefined or null or not have such key or vale 
//            newUser[key] = user[key];
//         }
//         })
// console.log(newUser);

let newUser = {}
Object.keys(user).forEach((key)=>{
    let isPassed = user[key].marks.every((mark) => mark > 10)
    if(isPassed){
        newUser[key]=user[key];
    }
})

console.log(newUser);





