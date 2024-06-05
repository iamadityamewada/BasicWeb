for(let i = 1000; i<=9999;i++){
 if (parseInt(i/1000) === (i%10)*0.5 && parseInt(i/100) === (i%100)*0.5 && (parseInt(i/100))%10 === parseInt((i%100)/10)){
    console.log(i)
 }
}