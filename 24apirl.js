               // function //
// function addTwoNumbers (v1 , v2){
//     console.log(v1 + v2)
// }
// // function addSubNumbers (){
// //     console.log("Hey JS ")
// // }
// // // console.log(addTwoNumbers(),addSubNumbers());
// // // console.log();
// // addTwoNumbers(2,3)

// function sum1(v1 , v2 ){
//     if(typeof(v1)==="string" || typeof(v2)==="string"){
//         console.log(parseInt(v1) + parseInt(v2))
//     }else{
//         console.log(v1 + v2)
//     }
// }

// sum1("23" , "24")

// function resum(v1,v2){
//     if(typeof(v1) =="number"){
//         v1 = v1.toString()
//     } 
//     if(typeof(v2) == "number"){
//          v2 = v2.toString()
//     }
//     if(v1 === undefined || v2 === undefined){
//         console.log('Enter the agrument');
//     }
//     console.log(v1 + v2)
// }

// resum(23 )

function sum(v1,v2){
    if(v1 !== undefined && v2 !== undefined){
        console.log(v1 + v2);
    }
    else{
        console.log("Pass all the argument")
    }
}
sum(33,33)


//Task // Pratice return fn 