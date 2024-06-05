/*let uniques = []
let arr = [23,12,43,5,43,23,]
for(let i of arr){
    if(uniques.indexOf(i)===-1){
        uniques.push(i);
    }
}
console.log(uniques);
*/

// let uniques = []
// let arr = [23,12,43,5,43,23,]
// for(let i of arr){
//     if(!uniques.includes(i)){
//         uniques.push(i);
//     }
// }
// console.log(uniques);
/*
aut = ["september","october","november"];
sum = ["june","july",'august'];
spr = ["march","april","may"];
win = ["december","january","febuary"];
const weatherCheck =(month) =>{
    month = month.toLowerCase();
    if(aut.includes(month)){
        return "Autumn";
    }else if(sum.includes(month)){
        return "summer";
    }else if(win.includes(month)){
        return "Winter";
    }else if(spr.includes(month)){
        return "Spring";
    }else{
        return "Enter Only Months of Year"
    }
}
let res = weatherCheck("janUary");
console.log(res);
*/
/*
const grade = (marks) =>{
    return (marks>=80 & marks <= 100? "A":marks>=70 & marks <= 89?"B": marks>=60 & marks <= 69?"C":marks>=50 & marks <= 59?"D": marks>= 0 & marks <=49 ?"F" : "wrong marks")
}
let mark = grade(59)
console.log(mark);
*/
const sort_function = (a,b) =>{
    return b.length - a.length
}

// let names = ["Prateek","Aditya","Happy","Priya","Niki ji","Anamica"];
// let marks = [23,43,2,24,6,5,8,6,5,4,35,87,7,6,5,43,3]
// marks.sort((a,b) =>{
//     return a-b;
// }
// )
// // // names.sort(sort_function)
// // console.log(names);
// console.log(marks);

let names = ["Prateek","Aditya","Happy","Priya","Niki ji","Anamica"];
let marks = [23,43,2,24,6,5,8,6,5,4,35,87,7,6,5,43,3]
let res = marks.toSorted((a,b) =>{
    return a-b;
}
)
// // names.sort(sort_function)
// console.log(names);
console.log(res);