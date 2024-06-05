function argsfn(x = 3 , y){

// if (y === "undefined"){
//     y == x;
//     x = 3;
// } 
return (x>y) ?  x*y : (x<y) ? x/y :  y  
// } if(x>y){
//    return x*y
// }else if(x<y){
//     return x/y
//   }else {
//     return y
// }
 }

console.log(argsfn(5, 3));

// // q2

// function fullNam(firstName , lastName){
//      return firstName + " " + lastName
// }

// f1 = "Aditya"
// l1 = "Mewada"
// console.log(fullNam(f1 , l1 )); 