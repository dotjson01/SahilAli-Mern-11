// Check Prime Number
// Check if a given number is prime using a loop

let number = 29;

let isPrime =true; // let every number is prime

if(number <=1 ){ 
    isPrime = false; // joh bhi 1 se neeche false return krdoh
}else{
    // nhi toh , agar nhi toh 

    for(let i = 2; i<=Math.sqrt(number);i++){
        if(number % i == 0){
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
  console.log(`${number} is a prime number.`);
} else {
  console.log(`${number} is not a prime number.`);
}

/*
A prime number is greater than 1 and divisible only by 1 and itself.
The program loops from 2 up to √number.
If the number is divisible by any value in that range, it’s not prime.
If no divisors are found, it’s prime.
We use break to stop the loop early if a divisor is found — this saves time.
 */