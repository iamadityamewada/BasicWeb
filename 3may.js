               // Array and for loop
/*
var arr = ["i","love","js",1,2,3,4,6,7];
for(let i = 0;i<arr.length;i++){
    if(typeof arr[i]==="string"){
        console.log("hi" + " " + arr[i]);
    }else{
        console.log(arr[i]**2);
    }
    
}
*/
             // 
             /*
var arr = ["i","love","js",true,56,56,34]            
for(let i of arr){
    console.log(arr[i])
}
        // method of array 
//slice 
console.log(arr.slice(0,6)); // return element from index 0 to 6
//indexOf
console.log(arr.indexOf("i")); // return index of element // if element not exist then return (-1)
*/

/*
let arr = ["Aman","Anshu","Aditya"]
let uName = "Aman";
arr.indexOf(uName)!==-1?console.log("Member Exist"):console.log("Member Not Exist");
*/

// Join Method
let arr = ["Aman","Anshu","Aditya","Abhi","Happy"]
let studentList = arr.join("+") // return the string of element joined with + sign 
console.log(studentList);
