// const promise = new Promise((resolve,reject)=>{
//     // resolve(45)
//     reject(30)
// })

// console.log(promise);

// const date = new Date();
// console.log(date);

// const promise = new Promise((resolve,reject)=>{
//      setTimeout(()=>{
//         resolve("YOU are eligible to work on it");
//         // reject("YOU are not eligible to work on it");
//      },2000)
//     // reject(30)
// })

// // console.log(promise);
// promise.then((response)=>{
//     console.log(response);
// }).catch((error)=>{
//     console.log(error);
// })

let gateAge = (userName)=>{
    num = Math.floor(Math.random()*100)
    console.log(num);
    return new Promise((resolve,reject)=>{
        if (num>50) {
            setTimeout(() => {
                resolve(`Hi ${userName} your re eligible for vote`)
            }, 3000);
        } else {
            setTimeout(() => {
                reject(`Hi ${userName} your re not eligible for vote`)
            }, 3000);  
        }
    })
}

gateAge("Rohan").then((res)=>{
    console.log(res);
}).catch((error)=>{
    console.log(error);
});

// console.log((Math.random()*9999));