let s1 = 'dog';
let s2 = 'god';


let isAnagram = (s1,s2) =>{
    return s1.split('').sort().join() === s2.split('').sort().join();
}