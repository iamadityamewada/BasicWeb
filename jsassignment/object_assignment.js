// Q1.
/* 
let car={
    make : "toyota",
    model : "Camery" 
}
// updating the model 
car={...car,model:"Corolla"}
// adding new property 
car ={...car,year : 2022}
console.log(car);
*/

//Q2
/*
let student ={
    name : "Alice",
    age : 20,
    grade : 30
}
student.grade ? console.log(student.grade):console.log("grade not available");
*/

// Q3
/*
let person ={
    name : "Happy",
    gender :"Male",
    age : 21
}
person.age < 21 ? console.log("Underage"): console.log("Adult");
*/

//Q4 
/*
let person = {
    name : "Happy",
    gender : "male",
    city :"Sehore"
}
const printPerson=(person)=>{
    console.log(person.name);
    console.log(person.gender);
    console.log(person.city);
}
const changeCity=(person,newCity)=>{
    person={...person,city:newCity}
    console.log(person);
}
printPerson(person)
changeCity(person,"Bhopal")
*/

// Q5
/*
Employees =[
    {name:"Happy",age:21,department:"CS"},
    {name:"Hardik",age:23,department:"Engineering"},
    {name:"Bunty",age:21,department:"Engineering"},
    {name:"Gagan",age:24,department:"EC"},
]
Employees = Employees.filter((value)=>{
    return value.department==="Engineering"
})
console.log(Employees);
*/

//Q6
/*
person =[
    {name:"Happy",age:22,city:"Sehore"},
    {name:"Hardik",age:14,city:"Vidisha"},
    {name:"Gagan",age:25,city:"CG"},
    {name:"Bunty",age:13,city:"CG"}
]
const filterAdult=(person)=>{
    person = person.filter((value)=> value.age>18)
    console.log(person);
}
filterAdult(person)
*/

//Q7 
/*
const cart =[
    {name:"Laptop",price:999.99,quantity:1},
    {name:"Headphones",price:149.99,quantity:2},
    {name:"Mouse",price:29.99,quantity:3}
]
const calculateTotalPrice=(cart)=>{
    let totalPrice = 0;
    cart.forEach(product=>{
        totalPrice += product.price * product.quantity;
    });
    return totalPrice;
}
console.log(calculateTotalPrice(cart));
*/

//Q8
/*
const indianRecipes = [
    {
    name: "Paneer Tikka Masala",
    ingredients: ["paneer", "onion", "tomato", "capsicum",
    "cream", "spices"],
    category: "vegetarian"
    },
    {
    name: "Vegetable Biryani",
    ingredients: ["rice", "vegetables", "spices", "saffron",
    "yogurt"],
    category: "vegetarian"
    },
    {
    name: "Aloo Gobi",
    ingredients: ["potatoes", "cauliflower", "onion",
    "tomato", "spices"],
    category: "vegetarian"
    },
    {
    name: "Chana Masala",
    ingredients: ["chickpeas", "onion", "tomato", "spices"],
    category: "vegan"
    },
    {
    name: "Dal Tadka",
    ingredients: ["lentils", "onion", "tomato", "spices"],
    category: "vegan"
    },
    {
    name: "Chicken Curry",
    ingredients: ["chicken", "onion", "tomato", "spices"],
    category: "non-vegetarian"
    }
    ];

const findRecipesByIngredients=(recipes,ingredients)=>{
    const filteredRecipes = recipes.filter(recipe=>
        recipe.ingredients.includes(ingredients)
    );
    if(filteredRecipes.length===0){
        return `No recipe is available with this ingredient : ${ingredients}`;
    }
    return filteredRecipes;
}
const filterRecipeByCategory=(recipes,category)=>{
    const filteredRecipes = recipes.filter(recipe => recipe.category === category);
    if(filteredRecipes.length===0){
        return `No ${category}recipes found`;
    }
    return filteredRecipes;
}

console.log(findRecipesByIngredients(indianRecipes,"capsicum"))
console.log(filterRecipeByCategory(indianRecipes,"vegan"))
*/

// Assignment two 
// Q1.Write a function that returns an array of email subjects that include the word "Project".
/*
let emails = [
    {subject: "Meeting Reminder for Project", sender: 
  "boss@example.com", body: "Don't forget our meeting at 10am tomorrow." },
    { subject: "Discount Offer", sender: "promo@example.com", 
  body: "Get 20% off on your next purchase." },
    { subject: "Family Reunion", sender: "mom@example.com", 
  body: "Looking forward to seeing you this weekend." },
    { subject: "Project Update", sender: 
  "colleague@example.com", body: "Here's the latest update on the project." },
    { subject: "Party Invitation", sender: "friend@example.com", 
  body: "Join us for a party this Saturday!" },
   ];

   const subjectFilter=(emails,subject)=>{
    const filteredEmail = emails.filter(email=>
        email.subject.includes(subject)
    );
    return filteredEmail;
}
console.log(subjectFilter(emails,"Project"))
*/

// Que 2
/*
let students = [
    { name: "Alice", grades: [85, 90, 78] },
    { name: "Bob", grades: [80, 85, 88] },
    { name: "Charlie", grades: [90, 92, 95] },
    { name: "Dave", grades: [70, 75, 80] },
    { name: "Eve", grades: [88, 84, 82] }
   ];
//    Write a function that returns an array of student names who have at least one grade above 90.

const studentFilter=(students)=>{
    students = students.filter(student=>student.grades.some(grade=>grade>90)).map(student=>student.name);
    return students;
}
console.log(studentFilter(students))

---------------***-----------------------

// write a function that returns an array of students with their average grade
const avgGrades=(students)=>{
    return students.map(student=>{
        let sum = 0;
        student.grades.forEach(grade=>{
            sum +=grade;
        });
        const averageGrade = sum / student.grades.length;
        return { name: student.name, averageGrade: averageGrade.toFixed(2) }; 
      });
    }
    console.log(avgGrades(students));
*/

    // Que3. 
    /*
    let movies = [
        { title: "Inception", director: "Christopher Nolan", genres: 
      ["Sci-Fi", "Thriller"] },
        { title: "The Dark Knight", director: "Christopher Nolan", 
      genres: ["Action", "Crime"] },
        { title: "Interstellar", director: "Christopher Nolan", 
      genres: ["Sci-Fi", "Drama"] },
        { title: "Pulp Fiction", director: "Quentin Tarantino", 
      genres: ["Crime", "Drama"] },
        { title: "The Godfather", director: "Francis Ford Coppola", 
      genres: ["Crime", "Drama"] }
       ];

    //    Write a function that returns an array of movie titles directed by "Christopher Nolan".
const getNolanMovies=(movies)=>{
    const nolanMovies = movies.filter(movie => movie.director === "Christopher Nolan");
  const nolanMovieTitles = nolanMovies.map(movie => movie.title);
  return nolanMovieTitles;
}
console.log(getNolanMovies(movies)); 
-----------------**********----------------
// Write a function that returns an array of movies that include the genre "Crime".
const filteredMovie=(movies,genre)=>{
    const filterMovie = movies.filter(movie => movie.genres.includes(genre));
  const filterMovieTitles = filterMovie.map(movie => movie.title);
  return filterMovieTitles;
}
console.log(filteredMovie(movies,"Crime"));

*/