// let users = {
//     rohit:{
//         email:"aditya@gmail.com",
//         age:12
//     }
// }
// users = {...users , age:23}
// // console.log(users);
// users = {...users, address:{city:"bhopal"}}
// // console.log(users);
// // users.address = {...users.address, city:"Indore"}
// // console.log(users);
// users = {...users, rohit:{...users.rohit, mobile:"34243434"} ,address:{...users.address, country:"India"}}
// console.log(users);

// users ={
//     name:"Aditya",
//     Skills:['html','css','js']
// }
// users = {...users, Skills:[...users.Skills,'java'] }
// // console.log(users);
// // console.log(users.Skills.indexOf("html"));
// // console.log(users.Skills.includes("java"));
// users.Skills.splice(2,0,"c++");
// // console.log(users);
// users.Skills[1]=".Net";
// // console.log(users);

// users.Skills.map((item)=>{
//     console.log(item.toLowerCase());
// })
//  users.Skills = users.Skills.map((item)=>{
//     return item.toUpperCase();
//  })
//  console.log(users.Skills);

let details = [
{name:'Python', age:26},
{name:"Java", age:6},
{name:"Javascript", age:16},
{name:"Bhailang", age:46}
]
// console.log(details);
// details.forEach((element,index,arr)=>{
//     console.log(element.name);
// })

details = details.map((element,index)=>{
    // element.name = element.name.toLowerCase()
    // element.index = index;
    // element['index'] = index;
    // element = { ...element, index:index}
    // element = { ...element, index:index, name:element.name.toLowerCase()}
    element = { ...element, index, name:element.name.toLowerCase()}
    return element;
})
// console.log(details);
// details = details.filter((element)=>{
//     return element.age>20
// });
// console.log(details);

details = details.find((element)=>{
    return element.name == "java";
})
console.log(details);