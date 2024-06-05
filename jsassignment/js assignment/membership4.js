var otp = 1224
f2 = parseInt(otp/100)
l2 = otp%100
fm = (f2%10)
lm = parseInt(l2/10)
if(2*f2==l2){
    console.log(true)
}
if(lm==fm){
    console.log(true)
}




