let s1 = 'dog';
let s2 = 'god';


let isAnagram = (s1,s2) =>{
    return s1.split('').sort().join() === s2.split('').sort().join();
}

console.log('isAnagram' ,isAnagram( s1, s2));

let isPanaldram = (s1) =>{
    return s1 === s1.split("").reverse().join("");
}

console.log('isPanaldram', isPanaldram('madam'));


// Q2
let arr = [3,4,2,6,7,8,4,5,6];
let max=0;
for(let i of arr){
    if(max<i){
        max=i;
    }
}
arr.forEach((i, index)=>{
    if(i==max){
        console.log("index",index);
        
    }
})

console.log('maximum no: ', max , "index: " , arr.indexOf(max));

// Q3

// let str = 'welcome to techsimplus learning';
// let count ={};
// str.split("").forEach((val)=> {
//    count[val] = (count[val] || 0) + 1;
// })

// console.log(count);

// ques
// let vowelCount= 0;
// let vowel= 'aeiou'
// let vCount = {};
// str.split("").forEach((val)=>{
//     if(vowel.includes(val)){
//         vowelCount++;
//      }
//  })
 
//  console.log(vowelCount);


// hwwwwwwwwwwwwwww............
// one array contains number ,, find second largest.. without using method...
// reverse words of string on its place



let str = 'welcome to techsimplus learning';
let temp;
let word;
let rString;
for(let w of str){
    if(w === " "){
        for(let i=0 , j = word.length ;i<word.length /2;i++,j--){
            temp = word[i];
             word[i]=word[j];
            word[j]= temp;
    } 
   rString += word;
}else {
        word += w;
    }
    }



console.log(rString);


