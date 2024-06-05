function Greet( name , callback){
    console.log("Hi" , name);
    getEveningMsg()
    callback && callback();
}

function getEveningMsg(){
    console.log("Good Evening");
    getTemp()
}

function getTemp(){
    console.log("Temperature is 35 ");
}

Greet("Aditya", getEveningMsg);


// timing function
// setTimeOut, setInterval