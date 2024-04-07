// Determine if a given year is a leap year using comparison operators.
function isLeapYear(year: number): boolean {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
const year: number = 2024; 
console.log(isLeapYear(year) ? `${year} is a leap year.` : `${year} is not a leap year.`);
// : Write a condition using logical operators that checks if a number is divisible by both 2 and 3.
function isDevisible(number:number){
    return number % 2===0 && number % 3===0
}
let testNumber:number=12

if (isDevisible(testNumber)){
    console.log(`${testNumber} is divisible by both 2 and 3.`);
} else {
    console.log(`${testNumber} is not divisible by both 2 and 3.`);
}
// Compare two strings to check if they are identical, ignoring case sensitivity.
function identicalString(strings1:string,string2:string){
    return strings1.toLocaleLowerCase()===string2.toLocaleLowerCase()
}
let string1="Hello";
let string2="hEllo";
if (identicalString(string1,string2)){
    console.log("The strings are identical (ignoring case).");
} else {
    console.log("The strings are not identical (ignoring case).");
}