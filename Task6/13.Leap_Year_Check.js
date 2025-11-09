// Program to check if a year is a leap year

let year = 2024;

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
  console.log(`${year} is a leap year.`);
} else {
  console.log(`${year} is not a leap year.`);
}


/*
If a year is divisible by 4, it might be a leap year.
But if it’s also divisible by 100, it’s not a leap year — unless…
It’s divisible by 400, in which case it is a leap year.
 */