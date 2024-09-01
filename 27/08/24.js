// let arr = ['Raj','Anshu','Aditya', 'Abhi'];

// // console.log(arr);

// // let newArr = arr.map((val)=>{
// //     return val.toUpperCase()
// // })

// // console.log(newArr);

// // let newArr1 = arr.map((val)=>{
// //     return val.toLowerCase()
// // })

// // console.log(newArr1);

// arr.forEach((val)=>{
//     console.log(val + " " + val.toUpperCase() + " " + val.toLowerCase());
//     // console.log(val.toUpperCase());
//     // console.log(val.toLowerCase()); 
// })

// let arr = [1,5,2,4,6,3,7,8,9];
// let newArr = arr.map((val)=> val%2===0? val**2:1)
// console.log(newArr);

let arr = [{name:'adi',age:'21'},{name:'shayam',age:'31'},{name:'aditi',age:'24'},{name:'aditya',age:'11'}]

// let newArr = arr.map((val,ind)=>{
//     return   val.age;   
// })
// newArr.sort()
// let MaxAge = newArr[newArr.length - 1];
// arr.forEach((val)=>{
//     val.age==MaxAge? console.log(val.name): null;
    
// })

// arr.sort((a,b)=> b.age - a.age);
// console.log(arr[0].name);

let ma = [
    {
        name:"Aditya",
        marks:[56,31,48,25,39],
    },
    {
        name:"Adi",
        marks:[56,39,48,65,39],
    },
    {
        name:"Aditi",
        marks:[56,48,48,35,39],
    }
]

// ma.forEach((val)=>{
//     if(val.marks.every((num)=>num>33)){
//         console.log(val);
//     }
// })

let pass = ma.find((val)=>val.marks.every((num)=> num>33))
console.log(pass);




