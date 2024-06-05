let totalPrice = 110;
if(totalPrice >=100){
    totalPrice = totalPrice -20;
    console.log(`Total Price: ${totalPrice}`);
}else if(totalPrice>=50 && totalPrice<100){
    totalPrice = totalPrice -10;
    console.log(`Total Price: ${totalPrice}`);  
}else{
    console.log(`Total Price: ${totalPrice}`);  
}