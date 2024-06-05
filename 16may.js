let names = ["rahul","Shiv","prateek","paras","Samyak","Aashish"];
let marks = [12,34,56,32,45,42,77];

let result = marks?.toSorted((a,b) => {
    return b-a;
})

console.log(result);