// arr = [12,43,5,87,23,4,23,54,6,67,34];
// let res = arr.some((value,index,arr) => value > 30);
// console.log(res);

// let res1 = arr.filter((value,index,arr) => value > 30);
// console.log(res1);

// let res2 = arr.find((value,index,arr) => value > 30);
// console.log(res2);

// let res3 = arr.every((value,index,arr) => value > 30);
// console.log(res3);


// let res4 = arr.map((value,index,arr) => value > 30);
// console.log(res4);

// const ages = [19,22,19,24,20,25,26,24,25,24];
// let res  = ages.toSorted((a,b) =>{
//     return a-b;
// });
// console.log(res);

// // Ques3
// let minAge = res[0];
// let maxAge = res[res.length-1];
// console.log(minAge);
// console.log(maxAge);

// // Ques 4
// let range = res[res.length - 1]-res[0];
// console.log(range);

// //Ques 5 
// let index = ages.indexOf(minAge);
// console.log(index);

// Ques 2
// const frontEnd = ['HTML','CSS','JS','REACT','REDUX'];
// const backEnd = ['NODE','EXPRESS','MongoDB'];


// QUES 1 
// let text = 'I love teaching and empowering people. I teach HTMl,CSS,JS,React,Python';
// let newtext = text.replaceAll('.',' ' )
// newtext =  newtext.replaceAll(',',' ');
// newtext = newtext.join()

// console.log(newtext);

let ages = [
    [23,2,13,10,24,12],
    [12,21,10,11,12,15,16]
]
  ages = ages.map((arr,index) => {
      if(index%2===0){
       out = arr.map((val,index) => val**2);
       return out;
      } else {
        out = arr.map((val,index) => val**3);
        return out;
    }       
})
console.log(ages);
// ages = ages.map((arr,index)=> index % 2 ===0 ? arr.map((val,index)=> val**2): arr.map((val,index)=> val**3))
// console.log(ages);