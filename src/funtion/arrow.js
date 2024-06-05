// curring function in js 
/*
const sumOf4 = (v1) =>{
    return  (v2) =>{
        return (v3) =>{
            return (v4) =>{
                return v1 + v2 + v3 + v4 ;
            } 
    }
}
}
console.log(sumOf4(4)(3)(6)(6))
*/

           // if you need single line statement the no need to apply curly braces and return keyword 
                                          // lambda expresion 
/*
const sumof12 = (v1 , v2 ) => v1 +v2
const sumOfMany = (v1 , v2) => sumof12(v1,v2)
console.log(sumOfMany(4,5));
*/

// setTimeOut 
/*
setTimeout(()=>{
    console.log("I am Done ");
}, 3000)
console.log("I am Good"); */

/*
const sumof5 = (v1) => (v2) => (v3) => (v4) => (v5) =>  v1+v2+v3+v4+v5;
console.log(sumof5(3)(4)(6)(7)(5)); */