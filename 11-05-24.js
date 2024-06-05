//rest operator

// const arr1 = [2,4];
// const arr2 = [34,5,5,12];
// let data = [...arr1, ...arr2, 34, 4455, 55, 45]
// //const [e1, e2, e3] = data
// //console.log(e1, e2, e3);
// const [ e1, e2, e3, ...rest] = data
// console.log(rest);
//typeof rest operator is array

// let arr1 = [2,4];
// let arr2 = [34,5,5,12];
// arr2 = [23,6, ...arr2]
// //console.log(arr2);

// // let [e1, e2, e3, ...data] = [...arr2]
// // //console.log(data);
// // add element of arr1 in data.
// // let data = [...data, ...arr1] 
// //or 
// let [e1, e2, e3, ...data] = [...arr2, ...arr1]
// console.log(data);



//program to return the sum of n numbers

// const add = (...rest) => {
//     let sum = 0;
//     for (let i of rest){
        
//         sum += i
//         //return sum;
//         console.log(sum);
//     }
    
// }
// add(12,45,78,35,52)
// //console.log(add)

//correct answer

// const Add = (...rest) => {
//     let sum = 0;
//     for (let i of rest){
//         sum = sum + i;
//     }
//     return sum
// }
//     let res = Add(12,45,78)  // insert any number
//     console.log(res);

//first two element ka sum or minus rest of the element usme se

// const Add = (e1 , e2 , ...rest) => {
//     let sum = e1 + e2;
//     let sum1 = 0
//     for (let i of rest){
//         sum1 += i;
//     }
//         sum = sum - sum1;
//         return sum;
// }

// let res = Add(12,42,2,3)
// console.log(res);



    
// setTimeout(() => {
//     const sumOfThree =(v1 , v2, v3) => {
//      console.log(v1 + v2 + v3);
//     }
//     sumOfThree(1,2,3)
// },3000)


// setTimeout(() => {
//     const sumOfThree = (v1) => (v2) => (v3) => v1 + v2 + v3
   
//     let out = sumOfThree(1,2,3)(2)(4)
//     console.log(out);
// },3000)



// setTimeout(() => {
//     const sumOfFive = (v1) => (v2) => (v3) => (v4) => (v5) => v1 + v2 + v3 +v4 +v5
   
//     let out = sumOfFive(1)(2)(4)(2)(5)
//     console.log(out);
// },3000)

const isPassed = (...marks) => {
    const getPercent = () => {
        let tm = 500
        let obm = 0
        for(let i of marks){
            obm += i
        }
        const percent = (obm/tm) * 100
        return percent
    }
    let percent = getPercent()
    let isPass = false
    if (percent >33){
        isPass = true
    }
   return[isPass, getPercent]     
}
let [result, checkPercent] = isPassed (45, 0, 12, 0, 76)
console.log(result);