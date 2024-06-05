// for Each , map -- same as for loop
// filter and find -- find element of (s)
// some and every -- output will ve true /false
/*     // ForEach loop
let arr = [23,45,6,4,3,76,4,3];

const forEachCallBack = (value,index,arr) =>{
    console.log(value,index);
}

arr.forEach(forEachCallBack)
*/

     // map
// let arr = [23,45,6,4,3,76,4,3];

// const forEachCallBack = (value,index,arr) =>{
//     console.log(value,index);
// }

// arr.map(forEachCallBack)

// let arr = [23,45,6,4,3,76,4,3];

// const forEachCallBack = (value,index,arr) =>{
//      return value*value
// }

// let result = arr.map(forEachCallBack)
// console.log(result);

// let arr = [23,45,6,4,3,76,4,3];

// const forEachCallBack = (value,index,arr) =>{
//     return value %2 === 0? value**2 : value**3
// }

// let result = arr.map(forEachCallBack)
// console.log(result);

// let arr = [23,45,6,4,3,76,4,3];

// const forEachCallBack = (value,index,arr) =>{
//     return index %2 === 0? value**2 : value**3
// }

// let result = arr.map(forEachCallBack)
// console.log(result);

// let arr = [23,45,6,4,3,76,4,3];
// let arr2 =[]

// const forEachCallBack = (value,index,arr) =>{
//      value %2 === 0? arr2.push(value**2) : arr2.push(value**3)
// }

// arr.forEach(forEachCallBack)
// console.log(arr2);

// let arr = [23,45,6,4,3,76,4,3];
// let arr2 =[]

// const forEachCallBack = (value,index,arr) =>{
//      arr2.push(value %2 === 0? (value**2) : (value**3))
// }

// arr.forEach(forEachCallBack)
// console.log(arr2);

// let arr = [23,45,6,4,3,76,4,3];
// const forEachCallBack = (value,index,arr) =>{
//      arr[index] = value %2 === 0? (value**2) : (value**3)
// }
// arr.forEach(forEachCallBack)
// console.log(arr);

// both index and value must be even
// let arr3 = [54,45,8,5,33,76,4,34];
// const forEachCallBack = (value,index,arr3) =>{
//     arr3[index] = value %2 === 0 & index % 2 === 0? (value**2) : (value**3)
   
// }
// arr3.forEach(forEachCallBack);
// console.log(arr3);


// find and filter
// arr = [1,34,5,33,67,34,23,45,7,89];
// let out = arr.filter((value, index) =>{
//     return value>30
// }) 
// console.log(out);

// out = arr.find((value, index) =>{
//     return value > 30 
// }) 
// console.log(out);