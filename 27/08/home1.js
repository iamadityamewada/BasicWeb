// question 1 
// let data = [
//     [1,2,3],
//     [4,5,6, [43,32332,5,4,]],
//     [7,8,9]
// ]

// let newData = [];

// let isA = (val) =>{
//     val.forEach((val)=>{
//         if(Array.isArray(val)){
//             isA(val);
//         }else{
//             newData.push(val)
//         }
//     })  
// }


// another solution 
// let isA = (val) =>{
//     let newData = [];
//     val.forEach((val)=>{
//         if(Array.isArray(val)){
//             tempArr = isA(val)
//             newData = newData.concat(tempArr);
//         }else{
//             newData.push(val)
//         }
//     })
//     return newData;  
// }

// console.log(isA(data));

// ...............Question 2
//make two dimension array of anagram data

// const input = ["eat","tea","tan","ate","nat","bat","god","dog"]
// let obj ={};

// for(let item of input){
//     let key  = item.split("").sort().join("");
//     if(obj[key]){
//         obj[key].push(item)
//     }else{
//         obj[key] = [item]
//     }
    
// }

// // let out = obj.values()
// console.log(Object.values(obj));

//............... Question 3 
// let obj = {a:{b:1}, c: {d:3}}
// //let out = {b:{a:1}, d:{c:3}} 

// let keySwaper = (obj) =>{
//     let out = {};
//     let keys = Object.keys(obj);
//       keys.forEach((key)=>{ 
//         let key2 = Object.keys(obj[key]);
//         out[key2] = {[key]: obj[key][key2]}
//       })
//     return out;
// }

// console.log(keySwaper(obj));

// /..............  question 4

// let obj = {a:{b:{e:{f:1}}}, c: {d:3}}
// //let out = {b:{a:1}, d:{c:3}} 

// let keySwaper = (obj) =>{
//     let out = {};
//     let keys = Object.keys(obj);
//       keys.forEach((key)=>{ 
//         let key2 = Object.keys(obj[key]);
//         if(typeof(obj[key][key2])=== "object"){
//             out = keySwaper(obj[key][key2])
//         }else{
//           out[key2] = {[key]: obj[key][key2]}
//         }
//       })
//     return out;
// }
// // console.log(keySwaper(obj));

// // let obj = {a:{b:1}, c:{d:3}}
// const swapKey = (obj)=>{
//   let obj2 = {}
//  Object.entries(obj).map(([k1,innerVal]) => {
//     if(typeof (obj[k1]==="object")){
//       Object.entries(innerVal).map(([k2,val]) => {
//         obj2[k2] ={[k1]: val}
//     })
//     }
//  })
//  return obj2;
// }
// console.log(swapKey(obj))

// question   5 
// let obj1 = {a:{b:1}, c: {d:2}}
// let obj2 = {a:{b:1}, c: {d:2}}

// const compareObj =(obj1 , obj2)=>{
//     let entries1 = Object.entries(obj1);
//     let entries2 = Object.entries(obj2);
//        if(entries1.length === entries2.length){
//           for(let i = 1 ; i<entries1.length;i++){
//            let keys1 = entries1.map(([key,val])=> key) 
//            let keys2 = entries2.map(([key,val])=> key)
//            let val1 = entries1.map(([key,val])=> val) 
//            let val2 = entries2.map(([key,val])=> val)
//            if(keys1.length === keys2.length){
//             for(let j in keys1.length){
//               if(keys1[j]=keys2[j]){
//                  if(typeof val1[j] === "object"){
//                   compareObj(val1[j],val2[j])
//                  }else{
//                     if(val1[j]===val2[j]){
//                       return true;
//                     }else{
//                       return false;
//                     }
//                  }
//               }
//             }
//            }
//           }
//        }
          
      
// }


// let obj1 = {a:{b:1}, c: {d:2}}
// let obj2 = {a:{b:1}, c: {d:2}}

// const compareObj = (obj1, obj2)=>{
//    if(typeof obj1 !== "object" && typeof obj2 !== "object") return false; 
//    if(obj1.length !== obj2.length) return false;
   
//    const keys1 = Object.keys(obj1);
//    const keys2 = Object.keys(obj2);

//    for(let key of keys1){
//     if(!keys2.includes(key)) return false;
//     const isObject = typeof obj1[key] ==="object" && typeof obj2[key] === "object";
//     if(isObject && !compareObj(obj1[key],obj2[key])) {return false

//     }else if (!isObject && obj1[key]!==obj2[key]) return false
//    }
//   return true
// }


// console.log(compareObj(obj1,obj2));

//............... Question 

// const debounce = (func , delay)=>{
//    setTimeout(func())
// }

// const fun = ()=>{
//   console.log("function");
// }

// const debounce = (func, delay) => {
//   let timer;
//   return function() {
//     clearTimeout(timer);

//     timer = setTimeout(func(), delay);
//   };
// }

// debounce(fun,2000)
// debounce(fun,4000)
// debounce(fun,5000)


//........................Question 
