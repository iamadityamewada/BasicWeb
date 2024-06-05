// Ques1 return sum of array 
let arr = [23,45,13,65,67,89,42,23,23];
let sum = (arr)=>{
    let sum =0;
    for(let i of arr){
        sum = sum + i;
    }
    return sum;
}

let res = sum(arr);
console.log(res);

//ques 2  search max elment in arr 
const maxEle =(arr) => {
    let arr2 = arr.toSorted( (a,b)=> b - a);
    return arr2[0];
}

let max = maxEle(arr);
console.log(max);

// Ques 3  avg of all elements
const avg = (arr) =>{
    let sum = 0;
    for(let i of arr){
        sum+=i;
    }
    return sum / arr.length
}
let avgno = avg(arr);
console.log(avgno);

// ques 4 return index 
console.log(arr.indexOf(1000));

// ques 5 arr reverse
console.log(arr.reverse());
console.log(arr.reverse());

// ques 6  remove dublicate and return length
let removeDublicate = (arr) =>{
    let newArr = [];
    for(let i of arr){
        if(newArr.indexOf(i) === -1){
            newArr.push(i);
        }
    }  
    console.log(newArr);
    return newArr.length
}
let lengtharr = removeDublicate(arr);
console.log(lengtharr);

// ques 7  count vowels
let str = "aditya";
let vowelsCount = (str) =>{
    let count = 0;
    // for(let i of str){
    //    if(i == "a" || i == "i" || i == "e" || i == "o" || i == "u"){
    //     count++;
    //    }
    // }
    for(let c of str){
        if(["a","e","i","o","u"].includes(c)){
            count++; 
        }
    }
    return count;
}
let count = vowelsCount(str);
console.log(count);

// quest 8 hello world after every to second 
//  setTimeOut( () =>{
//     console.log("hello world");
//  }, 2000)

// ques 9 
//  setInterval( () =>{
//     console.log("hello world");
//  }, 1000)

 //  ques 10;
//  let i = 5;
// let interval = setInterval(()=>{
//     console.log("Hello,World");
//     i--;
//     if(i==0){
//         clearInterval(interval)
//     }
// },1000)



// quest 11
// a = 11
// const interval1 = setInterval(()=>{
//     a--;
//     console.log(`the count is ${a}`);
//     if(a === 0 ){
//         console.log("Happy New Year");
//         clearInterval(interval1)
//     }
// }, 100)

// ques 12 
// function delayExe(func,ms){
//     setTimeout(func,ms);
// }
// function print(){
//     console.log("Function Executed After delay");
// }
// delayExe(print,2000);

// ques 13
let msg = 'tick';
let tickTock = setInterval(()=>{
console.log(msg);
msg = msg === "tick"? "tock": "tick"
},1000)
setTimeout(() => {
    clearInterval(tickTock)
},11000);