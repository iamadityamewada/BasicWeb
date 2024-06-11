let details = {
    name : "anshu",
     age : 12};
// const copyObject = details
// copyObject.age = 23;
// console.log(details)
// console.log(copyObject)

//deep copy of object
//... spread operator
//there is three methods for making deep copy of objects
//1. ...operator (using spread operator)
// const copyObject = {...details}
// copyObject.age = 23
// console.log (details, copyObject)

//predefined class in js. - JSON, Object
//2. using JSON
// let stringObj = JSON.stringify(details) //JSON.stringify change the kay and value into string and string is immutable.
// let finalObj = JSON.parse(stringObj)  //JSON.parse change the string into object
// finalObj.age = 1234
// console.log (details, finalObj)

//Methods of Object
//1.Object.keys - give the array of all keys
//2.Object.values - give the array of all values
//3.Object.entries - give the 2d array of key value pairs
//4.Object.assign - take two argument - target and source

// console.log(Object.keys(details))
// console.log(Object.values(details))
// console.log(Object.entries(details))

// to find out the values of all the keys without having the objject.values and objet.entries methods

// Object.keys(details).forEach((key) => {
//     console.log(details[key])
// })


//spread operator is not fully suitable for "deep copy" because it doesnot support 2d object or nested object.
//object.assign is the best method for deep copy and always use this method but sometime Object.assignn also copy 
//reference so thats why it is also not suitable in some condititon so JSON. stringify is good.


 //Object.assign
// let newObj = Object.assign({email : "hi"}, details)
// console.log("New Obj", newObj);

//example of failure of spread operator

// const data = {
//     age : 23,
//     name : "JS",
//     address : {
//         city : "Bpl"
//     }
// }

// let newData = {...data}
// newData.address.city = "Indore"
// console.log(newData, data)


//failure of Object.assign method
// const data = {
//     age : 23,
//     name : "JS",
//     address : {
//         city : "Bpl"
//     }
// }

// let newData = Object.assign({}, data)
// newData.address.city = "Indore"
// console.log(newData, data)


//example of using JSON.stringify method which is successfully implemented for deep copy

//const data = {
    //     age : 23,
    //     name : "JS",
    //     address : {
    //         city : "Bpl"
    //     }
    // }
    
    // let newData = JSOn.parse(JSON.stringify(data))
    // newData.address.city = "Indore"
    // console.log(newData, data)


//3.method to deep copy using hasOwnProperty- return true and false

console.log(details.hasOwnProperty("age"))
console.log(details.hasOwnProperty("email"))


