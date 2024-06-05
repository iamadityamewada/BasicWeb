// // Deep Copy
// arr1 = [3,6,8,4]
// arr2 = [...arr1] // Spread Operator
// arr2.push(13)
// console.log(arr2);
// console.log(arr1);

// // Shallow  Copy
// arr3 = [3,6,8,4]
// arr4 = arr3
// arr4.push(13)
// console.log(arr4);
// console.log(arr3);

// const languages = [
//     ["js","python","java"],
//     ["js","html","jas"]
//     // ["c","c++","C"]
// ];
// for( let [ l1, l2, l3 ] of languages){
//     console.log(l1,l2,l3);
// }

// const address = [
//     ["BPL","mp",45845],
//     ["JBB","Mp"]
// ]
// for (let [l1,l2,l3] of address){
//     !l3 ? console.log("uncomplete") : console.log("complete");
// }


// let prod = 1;
// const multi = (...rest) =>{
//      for(let i of rest){
//         prod*=i
//      }
//      return prod;
// }
// let m = multi(23,4,6,4,2,6,7,2,4,3);
// console.log(m);

// const operation = (...data)=>{
//     let res = 0;
//     let res1 = 1;
//     if(data[data.length-1]=="+"){
//         for(let i = 0;i<data.length-1;i++){
//             res = res + data[i];
//         }
//         return res;
//      } else {
//             for(let i = 0;i<data.length-1;i++){
//                 res1 = res1 * data[i];
//         }
//         return res1;
//     }
//     }

//     let res = operation(1,3,4,5,6,"*");
//     console.log(res);

// const Calculator = (what, ...rest)=>{
//     let result = what ==="*"?1 :0
//     for(let i of rest){
//         what ==="*"? result *= i : result += i
//     }
//     return result;
// }
// let result = Calculator("+",3,5,6,3);
// console.log(result);


// const Calculator = (what, f1,f2,...rest)=>{
//     let result = what ==="*"?1 :0
//     for(let i of rest){
//         what ==="*"? result *= i : result += i
//     }
//     return result;
// }
// let result = Calculator("+",3,5,6,3);
// console.log(result);

// const Calculator = (what, ...rest)=>{
//     // let splice1 = rest.splice(rest.length-2,2)
//     // console.log(splice1);
//     let result = what ==="*"?1 :0
//     // for(let i of rest.splice(0,rest.length - 2))
//     for(let i of rest.slice(0, -2)){
//         what ==="*"? result *= i : result += i
//     }
//     return result;
// }
// let result = Calculator("+",3,5,6,3);
// console.log(result);

// const Calculator = (what, ...rest)=>{
// let [l1,l2, ...data] = rest;
//     let result = what ==="*"?1 :0
//     for(let i of data){
//         what ==="*"? result *= i : result += i
//     }
//     return result;
// }
// let result = Calculator("+",3,5,6,3);
// console.log(result);

let arr = [5,6,2,4]
for(let i in arr){
    console.log(i);
}
for(let i of arr){
    console.log(i);
}