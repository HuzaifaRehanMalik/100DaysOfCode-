// Determine if a given year is a leap year using comparison operators.
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
var year = 2024;
console.log(isLeapYear(year) ? "".concat(year, " is a leap year.") : "".concat(year, " is not a leap year."));
// : Write a condition using logical operators that checks if a number is divisible by both 2 and 3.
function isDevisible(number) {
    return number % 2 === 0 && number % 3 === 0;
}
var testNumber = 12;
if (isDevisible(testNumber)) {
    console.log("".concat(testNumber, " is divisible by both 2 and 3."));
}
else {
    console.log("".concat(testNumber, " is not divisible by both 2 and 3."));
}
// Compare two strings to check if they are identical, ignoring case sensitivity.
function identicalString(strings1, string2) {
    return strings1.toLocaleLowerCase() === string2.toLocaleLowerCase();
}
var string1 = "Hello";
var string2 = "hEllo";
if (identicalString(string1, string2)) {
    console.log("The strings are identical (ignoring case).");
}
else {
    console.log("The strings are not identical (ignoring case).");
}
