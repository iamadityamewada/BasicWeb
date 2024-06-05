let temp = 35
res = climateChecker(temp);
console.log(res)

function climateChecker(temp){
if(temp>30){
    return "hot"
}
else if(temp>=20 && temp<=30){
    return "moderate"
}
else if(temp<20){
    return "cold"
}
else{
    return "unexpected climate"
}
}

