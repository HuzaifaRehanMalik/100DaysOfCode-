// Arithmetic with Mixed Types: Write a function that takes two parameters: a number and a string that represents a number (e.g., "5"). Return their sum as a number. 
function addNumberString(num1, string) {
    return num1 + Number(string);
}
console.log(addNumberString(10, "5"));
//  Multiplying Decimals: Create a function that accepts two decimal numbers and returns their product. Round the result to two decimal places.
function multiplyDecimals(num1, num2) {
    var result = (num1 * num2);
    return Math.floor(result * 100) / 100;
}
console.log(multiplyDecimals(0.2, 0.9));
// Dividing and Finding the Remainder: Write a function that divides two numbers and returns both the quotient and the remainder. Use an object to return both values.
function divideRemainder(num1, num2) {
    var quotient = Math.floor(num1 / num2);
    var remainder = num1 % num2;
    return { quotient: quotient, remainder: remainder };
}
console.log(divideRemainder(17, 5));
