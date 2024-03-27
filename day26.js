// Function Parameters and Return Values: Create a function that takes two numbers as parameters, adds them together, and returns the result. Show how you can call this function and log the result.
function addValue(num1, num2) {
    var result = num1 + num2;
    return result;
}
console.log(addValue(8, 6));
// : Default Parameters: Write a function that greets a user. It should take the user's name as a parameter and say hello. If no name is given, it should greet an anonymous user.
function user(userName) {
    if (userName === void 0) { userName = "Anonymous"; }
    console.log("Hello ".concat(userName));
}
user("Ali");
user();
// Function Expressions vs. Function Declarations: Compare function expressions and declarations by creating one of each that performs the same task, such as squaring a number.\
function squareDeclarations(val) {
    return val * val;
}
var squareExpression = function (value) {
    return value * value;
};
console.log(squareDeclarations(4));
console.log(squareExpression(4));
