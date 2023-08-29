//Write JS code that solve the following problems
//Q1. Using an if-else statement, determine if a number is divisible by 3, by 5, or both.

let q1test = 15;

if (q1test % 3 == 0 && q1test % 5 == 0) {
    console.log(`${q1test} is divisible by 3 and 5.`)
} else {
    if (q1test % 3 == 0) {
        console.log(`${q1test} is divisible by 3 but not 5.`)
    } else if (q1test % 5 == 0) {
        console.log(`${q1test} is divisible by 5 but not 3.`)
    }
}

//Q2. Using an if-else statement, determin is a year is a leap year or not.
//Research what are the conditions to be considered a leap year.

/* 
  Year divisible by 4 but not by 100
  Next check if the year is divisible by 400
*/

// let year = 1999; // False
// let year = 2000; // True
// let year = 1900; // False
// let year = 2024; // Truegit 
// Create array
const year = [1999, 2000, 1900, 2024];

// Loop through years
for (let i = 0; i < year.length; i++) {
    leapYear(year[i]);
}

// Check to see if is leap year and spit them out to console
function leapYear(theYear) {
    if ((theYear % 4 == 0) && (year % 100 !== 0) || (theYear % 400 == 0)) {
        console.log(theYear + " is a leap year.");
    } else {
        console.log(theYear + " is NOT a leap year.");
    }
}

//Q3. Use a loop to print all the numbers from 1 to 100 that are divisible by 3 or 4.
for (let i = 1; i < 100; i++) {
    if ((i % 3 == 0) || (i % 4 == 0)) {
        console.log(i);
    } else {
        console.log('-');
    }
}
