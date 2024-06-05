function getCity(){
    console.log("bhopal");
}

function getTemp(city){
    console.log("Good AfterNoon");
}
function getEveningMsg(a , b){
    console.log("good Evening");
    a()
    b()
}
getEveningMsg(getTemp, getCity)

// setTimeOut  , SetInterval
