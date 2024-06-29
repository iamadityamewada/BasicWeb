// const onButtonClick = ()=>{
//     // console.log("You Click Me");
//     // alert("You Click Me")
//     // let btn = document.getElementsByTagName("button")[0];
//     let btn = document.getElementById("click")
    
//     btn && (btn.innerText = "Unfollow");
    
// //     btn.style.color="red";
// //     btn.innerHTML = `Hello All`
// }
// const onButtonClick2 = ()=>{
//     // console.log("You Click Me");
//     // alert("You Click Me")
//     // let btn = document.getElementsByTagName("button")[0];
    
//     let btn2 = document.getElementById("click2")
  
//     btn2 && (btn2.innerText = "Unlike Us");
// //     btn.style.color="red";
// //     btn.innerHTML = `Hello All`
// }

// // increment , decrement , reset , count 0-9, 0-3 color change of button,


// var count = 0;
// const onButtonClick = () => {
//     let btn2 = document.getElementById("click3");
//     count ++;
//     count>9?count=9:null;
//     count>=0&&count<3?btn2.style.color = "red":count>=5&&count<6?btn2.style.color = "green":count>=7&&count<=9?btn2.style.color = "Blue":null
//     btn2.innerText = count
// }

// const onButtonClick1 = () => {
//   let btn2 = document.getElementById("click3");
//     count --;
//     count<0?count=0:null;
//     count>=0&&count<3?btn2.style.color = "red":count>=5&&count<6?btn2.style.color = "green":count>=7&&count<=9?btn2.style.color = "Blue":null
//     btn2.innerText = count
// }

// const onButtonClick2 = () => {
//     let btn2 = document.getElementById("click3");
//     count = 0;
//     btn2.innerText = count
// }

var count = 0;

onChange = (what)=>{
    what==='i'?count++:what==='d'?count--:what==='r'?count=0:null;
    if(count<0 || count>10) return;
    update();
}

update = () => {
    let btn2 = document.getElementById("click3");
    btn2.style.color = count<3 ? "red" : count >= 5 && count <6 ? "green": count >= 7 && count <=9 ? "Blue" :null
    btn2.innerText = count
}