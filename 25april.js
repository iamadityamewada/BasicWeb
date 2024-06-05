                             /*  */
//  let out = 12
//  out1 =12
//  out2 = 10
// //  console.log( out || out >20)
// //  console.log(  out > 20 || out)
// //  console.log(out1 && out2)
// out1 =15
//  out2 = null
// //  console.log(!out2 && (out1 || 14));

// // if((!out2 && (out1 || 14))){
// //     console.log("Done")
// // }

// // console.log(!out2 && "") // return first failed condition
// // console.log(!out2 && false && "")
// // console.log(out2 || []);
// console.log(!out2 || []);

// function getTemp(temp){
//     console.log("today temperature is ", temp);
// }
// function getDate(temp){
//     console.log("today Date is ", temp);
// }
// var type = "date";

// // if(value){
// //     getTemp(value)
// // }
// // console.log(!value || getTemp(value));
// // !value || (value && getTemp(value));
// (type == "temp" && getTemp(type)) ||( type =="date" && getDate(type))
// type === "date" && getDate(type)

// if (type === "temp"){
//     getTemp(type)
// }
// if (type === "date"){
//     getDate(type)
// }
function getTemp(temp = 12 , maxtemp){
    // console.log("Today temperature is ", maxtemp + temp);
    if(!maxtemp && temp !== 12){
        maxtemp = temp
        temp = 12
    }
    console.log(temp + maxtemp);
}
getTemp(13,2)

function getTemp2( temp1 =10 , Max){
    if(!Max && temp1 !== 10){
        Max = temp1
        temp1 = 10 
    }
   console.log(Max + temp1); 
}
getTemp2(2)