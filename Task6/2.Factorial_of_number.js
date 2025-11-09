/*
Factorial of a Number
Calculate the factorial of a given number using a for loop.

*/


let number = 5;
let factorial = 1; // yaha pe store krunga toh 1*2*3*4*5 thak hee hoga kioki range hee itne taak diya hai 
// 1 ke baad 2,3,4,5 yeh increment hoga

for(var i=1; i<=number ; i++){
    factorial *= i;
    // joh bhi factorial*i hoga voh factorial variable mai store krdega
    // function print nhi return krega
}
console.log(`Factorial of ${number} is ${factorial}`);