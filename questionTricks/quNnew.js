// 1
let str = "i love react js"
str = str.split(" ")
let str2 = [];
for( let i = 0 ; i <= str.length - 1; i++){
    let firstchar = str[i][0].toUpperCase();
    let ele = firstchar + (str[i].slice(1,str[i].length).toLowerCase())
    str2[i] = ele;
}
console.log(str2.join(" "));
for(let i of str){
    let loc = str.indexOf(i);
    i =i[0].toUpperCase() + i.slice(1,).toLowerCase()
    str[loc]= i;
}
console.log(str.join(" "));


// 2
let string1 = "23 2 34 3 42 i Love js 22";
sum = 0;
for(let i of string1){
    if(isNaN(i)){
           // eat 5 star do nothing
    }else{
       sum = sum + +i;
    }
}
console.log(sum);

//3
let string3 = " a chuhiya"
string3 = string3.toLowerCase();
for(let i of string3){
    if( i == 'a'|| i == 'i'|| i == 'e' ||i == 'i' || i == 'o'){
        console.log(i);
    }
}

//4
let string4 = " a@ch.&u#hiy$a"
for(let i of string4){
    if( i == '@'|| i == '.'|| i == '#' ||i == '&' || i == '$'){
        console.log("vowel ", i);
    }
}

//5
let string5 = "sohan";
if(string5[0]==string5[0].toUpperCase()){
    console.log("In Upper Case");
}else{
    console.log("Not In Upper Case");
}