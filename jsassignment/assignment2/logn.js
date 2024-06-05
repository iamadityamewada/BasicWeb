let pwd = "12345678a";
function login(pwd){
     if(pwd.length >=8 && isNaN(pwd)){
                console.log("Password is created");
         } else{
        console.log("Password not created");
     }
    }
    login(pwd)