let details = { 
    name:"Aditya",
    age:23,
    address: {
        city:{
            city:"Bhopal",
            wardNo:4565
        },
        state:"MP",
        pinCode:462026
    }

}
// console.log(details["address"]["city"]["wardNo"]);
// console.log(details.address.city.city);
// const {name,age,address} = details; // destruturing the object 
// console.log(age,name,address);
// const {name,age, ...others} = details; // destruturing the object using rest operator
// console.log(others);

// console.log(details["address"].city["wardNo"]);
// console.log(details["address"].pinCode);

// const {city, ...others} = details.address;
// console.log(city);
// console.log(others);

let detail ={
    name:"Python",
    address:{
        city:"Bhopal"
    }
}
console.log(detail);
// detail.age = 12;
// console.log(detail);
// detail["age"]= 23;
// console.log(detail);
// detail= {...detail, age:12232}
// detail ={age:23, ...detail}
// console.log(detail);

// detail.address.state ="MP";
// console.log(detail);
// detail["address"]["city"]["state"] = "MH";
// console.log(detail);
// detail.address = {...detail.address, state:"Bihar"}
// console.log(detail);
// detail = {...detail, address:{...detail.address , state:"J&K"}}
// console.log(detail);


detail = {...detail.address, address:{...detail, country:"India"}}
console.log(detail);