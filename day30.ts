// Rounding to the Nearest Integer: Write a function that takes a decimal number as input and returns the number rounded to the nearest integer.
function nearestInteger(num:number){
    return Math.round(num)
}
console.log(nearestInteger(9.9));
console.log(nearestInteger(6.3));
// Converting Strings to Numbers: Create a function that takes a string representing a number (like "123") and converts it into an actual number type.
function stringToNumber(string:string){
    return parseInt(string)
}
console.log(stringToNumber("456"));

// Checking if a Value is NaN: Demonstrate how to check if a variable's value is NaN (Not a Number) and return a boolean result.
function valueNan(value:any):boolean{
    return isNaN(value)
}
console.log(valueNan(56));
console.log(valueNan("Hello"));
