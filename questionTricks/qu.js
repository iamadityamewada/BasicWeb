/*// Question 1
emp = [ ];
emp[100]= 1;
console.log(emp.length); //anss

// Question 
console.log(typeof(typeof(NaN)+typeof undefined)); // String 
// Question
console.log(Number('12a')); // NaN
// Question
*/
/*
// remove duplicate from array
let arr =[1,4,5,7,8,12,4,3,2]
let arr2 =[];
let arr3 =[];
for (let i of arr){
     if(arr2.indexOf(i)==-1){
        arr2.push(i);
     }
    }
console.log(arr2);

// for (let i =0;i<arr.length;i++){
//         if(arr[i] in arr3){
//          // eat 5 star do nothing 
//         }else{
//             arr3[i] = arr[i];
//         }
//     }
// console.log(arr3);
*/
let str = "I love react js"
// str = str.split(" ");
// str = str.reverse();
// str = str.join(" ")
// console.log(str);
let str2 = "I love react js"
let arr2 = [];
str2 = str2.split(" ");
for(let j=0, i = -1 ; i<= 0 ;i--,j++){
     arr2[j]=str2[i];
}
arr2 = arr2.join(" ");
console.log(arr2);