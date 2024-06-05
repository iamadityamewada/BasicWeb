const details ={
    name:"JavaScript",
    age:12
}
// shallow copy ... only reference is created
// const copyObject = details;
// // copyObject.age = 23;
// console.log(copyObject, details);

// Deep copy of object
//3 .... methods
// 1. using spread operators...
// const copyObject1 = {...details};
// copyObject1.age = 24
// console.log(copyObject1);

// 2. JSON , object
// let stringObj = JSON.stringify(details);
// let finalobj = JSON.parse(stringObj);
// finalobj.age = 3434;
// console.log(finalobj, details , stringObj);


// methods of object 
// console.log(Object.keys(details));
// console.log(Object.values(details));
// console.log(Object.entries(details));
// console.log(details[]);
// for( let i in details){
//     console.log(i);
// }

// Object.keys(details).forEach((key)=>{
//     console.log(details[key]);
// })

// let newObj =Object.assign({email:"eng.adi@gmal.com"},details);
// console.log(newObj);


// const data = {
//     name: "Aditya",
//     age: 23,
//     address:{
//         city:"bpl"
//     }
// }

// let newData = JSON.parse(JSON.stringify(data));
// newData.address.city= "Indore"
// console.log(newData);
// console.log(data);

// spread operator and assign limit to create deep copy of 1d object only it will not work on nested object
//  because the key which hold the inner object is holding reference of object, only json.parse(json.stringify(obejct)) can 
// can make deep copy of nested object.

// check key is exsit or not 
// hasOwnProperty return true or false

console.log(details.hasOwnProperty('age'));
console.log(details.hasOwnProperty('age2'));




