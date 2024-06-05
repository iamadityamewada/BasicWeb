// Quest 1
// let car ={
//     make:"Toyato",
//     model:"Campry"
// }
// console.log(car);
// car.model = "Corolla";
// console.log(car);
// car = {...car , year:2022}
// console.log(car);

// //ques 2
let student ={
    name:"Alice",
    age:20,
    grade:"A"
}
"grade" in student ?console.log(student.grade):console.log("Grade is not availabe");

// ques 3
// let person={
//     name:"Priyanshu",
//     age: 24,
//     gender: "male"
// }
// person.age>21?console.log("Adult"):console.log("UnderAge")

// ques 4
// let Person ={
//     name:"Aditya",
//     age:24,
//     city:"Bhopal"
// }
// const printPerson = (Person) =>{
//    console.log(`Name:${Person.name}\nAge:${Person.age}\nCity:${Person.city}`);
// }
// const changeCity =(Person, newCity) =>{
//     Person.city = newCity;
// }
// printPerson(Person);
// changeCity(Person,"Delhi");
// console.log(Person);
// printPerson(Person);

//ques 5
// let emp = [
//     emp1={
//         name:"Aditya",
//         age:24,
//         department:"Engineering"
//     },
//     emp2={
//         name:"Aditi",
//         age:21,
//         department:"Development"
//     },
//     emp3={
//         name:"Anshu",
//         age:23,
//         department:"Engineering"
//     },
//     emp4={
//         name:"Abhisekh Lodhi",
//         age:29,
//         department:"DevOps"
//     },
// ]
// console.log(emp);
// let er =[];
// emp.forEach((val,index)=>{
//     if(val.department === 'Engineering'){
//         er.push(val)
//     }
// })
// console.log(er);

//QUEST 6
// let arr = [person1={name:"Aditya",age:24},person2={name:"Aditi",age:23},person3={name:"Anshu",age:16},person4={name:"Abhi",age:29},];
// console.log(arr);
// function filterAdult(arr){
//    return arr.filter((val)=> val.age>18 )
// }
// let arr2 = filterAdult(arr);
// console.log(arr2);

// ques 7 online shoping cart
// const cart = [
//     { name: "Laptop", price: 999.99, quantity: 1 },
//     { name: "Headphones", price: 149.99, quantity: 2 },
//     { name: "Mouse", price: 29.99, quantity: 3 }
//     ];
// let calculateTotalPrice =(cart)=>{
//      let totalPrice = 0;
//      cart.forEach((val) => {
//         totalPrice += val.price*val.quantity;
//      });
//     return totalPrice;
//     }
// console.log("Total Price: " + calculateTotalPrice(cart));   

// //Question 8
// const indianRecipes = [
//     {
//     name: "Paneer Tikka Masala",
//     ingredients: ["paneer", "onion", "tomato", "capsicum",
//     "cream", "spices"],
//     category: "vegetarian"
//     },
//     {
//     name: "Vegetable Biryani",
//     ingredients: ["rice", "vegetables", "spices", "saffron",
//     "yogurt"],
//     category: "vegetarian"
//     },
//     {
//     name: "Aloo Gobi",
//     ingredients: ["potatoes", "cauliflower", "onion",
//     "tomato", "spices"],
//     category: "vegetarian"
//     },
//     {
//     name: "Chana Masala",
//     ingredients: ["chickpeas", "onion", "tomato", "spices"],
//     category: "vegan"
//     },
//     {
//     name: "Dal Tadka",
//     ingredients: ["lentils", "onion", "tomato", "spices"],
//     category: "vegan"
//     },
//     {
//     name: "Chicken Curry",
//     ingredients: ["chicken", "onion", "tomato", "spices"],
//     category: "non-vegetarian"
//     }
//     ];

//     let findRecipeByIngredients = (arr,ingredient) =>{
//         let sortedRecipes = [];
//         sortedRecipes = arr.filter((val) => {
//             return val.ingredients.includes(ingredient)
//         //    val.ingredients.forEach((ingred) =>{
//         //     if(ingred.includes(ingredient)){
//         //         sortedRecipes.push(val)
//         //     }            
//         //    })
//         });
//         return sortedRecipes.length ? sortedRecipes : `No such recipe found contains ${ingredient}`
//     //     if(sortedRecipes){
//     //     return sortedRecipes;
//     //    }else{
//     //     return `No such recipe found contain ${ingredient}`;
//     //   }
//     }
// console.log(findRecipeByIngredients(indianRecipes,"tomato"));



// //Extra
// let student ={
//     name:"xyz",
//     age:34,
//     num:4348
// }

// function printPerson({name,age,num}){
//     console.log(name,age,num);
// }
// printPerson(student);