
const sumof5 = (v1) => (v2) => (v3) => (v4 = 5) => (v5 = 5) =>  v1+v2+v3+v4+v5;
console.log(sumof5(3)(4)(6)()());
const sumof3 =(a)=>{
    return (b) =>{
       return (c) =>{
        return a+b+c;
       }
    }
}
console.log(sumof3(3)(9)(5));