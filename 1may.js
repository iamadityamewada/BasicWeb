function parent(){
    age = 10;
    const getParentAge = () =>{
        return age
    }
    const getAge = () =>{
        return getParentAge;
    }
    function child(){
        return getAge ;
        }
    
        return child;    
}

// const out = parent();
// const out2 = out();
// console.log(out2());
console.log(parent()()()());