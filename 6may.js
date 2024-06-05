// let arr = [1,2,3,5,6,7]
// let sum=0;
// for(let i =0 ; i< arr.length;i++)
//     {
//         sum = sum + arr[i];
//     }
// console.log(sum);   
// sum2 = 0;
// for( let j of arr){
//     sum2+=j;
// }
// console.log(sum2);

// let arr2 = ["43", "323343aa","5453347","43423","hj6434","f44454",'gd344234']
// let str="";
// let res=0;
// /* for(let b in arr2){
//    str = str + arr2[b][0]+arr2[b][arr2[b].length-1];
// }
// console.log(str); */
// for(let i of arr2){
//     if(isNaN(i[0])){
//         str = str + i[0];
//     }else{
//         res = res + +i[0];
//     }
// }
// console.log(str);
// console.log(res);

// let email = "AdityaAA@gMail.com"
// email = email.toLowerCase();
// console.log(email)
// email =email.toUpperCase();
// console.log(email);

// arr = ["rahul","prateek","shubham"]
// for(let i of arr){
//     let element = i[0];
//     element = element.toUpperCase() + element.slice(1,element.length);
//     arr[i] = element
//     // // i[0] = i[0].toUpperCase();
//     // cap = i[0].toUpperCase();
//     // arr[i] = cap + i.slice(1,i.length);
//     // // console.log(i);
// }
// console.log(arr);

// let url = "https://www.techsimplus.com"
// url = url.split(".");
// console.log(url[1]);

// let city = "Bhopal"
// console.log((city.trim() === "Bhopal"));
// console.log(city.indexOf("Bho"));
// console.log(city.repeat(4));
// console.log(city.charAt(4));
// console.log(city.charCodeAt(4));
// console.log(city.replace("pal","paal"))


const array = ["i","love","react","js",true,2,1,4,4];

let result = array.splice(1,0,13,14) // remove / delete or insert /replace
 result = array.splice(1,1,"hii") 
 result = array.splice(1,4,"Javascript","Python")
console.log((result, array));
