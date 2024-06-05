let year = 2001;
if((year%4==0 && year%100 !== 0) || (year % 400 == 0)){
    console.log("This Year is Leap Year ");
}else{{
    console.log("This Year is not a leap year");
}}