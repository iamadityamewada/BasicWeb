//array
//destructuring of array
const arr = [2 , 4]
//const [a] =arr
const [a , b] = arr
console.log( a, b);
//console.log( a, b , c);


//spread operator of array - ...array

 const arr1 = [ 2, 4];
 const arr2 = [34 ,5, 78, 524 ,2580]
 let data = [...arr1, ...arr2, 45, 28, 64, 58]
 console.log(data)

 //rest operator of array - 