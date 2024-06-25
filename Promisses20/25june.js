// async and await 

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

const callApi = async()=>{
    let result = await gateAge()
    console.log(result);
}

callApi();
console.log("Hello3");