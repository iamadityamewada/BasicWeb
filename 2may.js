// a = 60
// const interval = setInterval(()=>{
//     a--;
//     console.log(`the count is ${a}`);
//     if(a === 0 )
//     clearInterval(interval)
// }, 100)
/*
let min = 3;
let sec = 0;
const interval = setInterval(()=>{
    console.log(`Count Down = ${min}:${sec}`);
    if(min === 0 && sec=== 0 ){
        clearInterval(interval) 
    }
    if(sec === 0){
        min --;
        sec = 60;
    }
    sec --; 
}, 50)*/
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))
let min =1;
let sec =59;
const interval = setInterval(()=>{
    console.log(`Count Down = ${min}:${sec}`);
    if(min === 0 && sec=== 0 ){
        clearInterval(interval) 
    }
    if(sec === 0){
        sleep(2000)
        min --;
        sec = 60;
    }
    sec --; 
},50)