// Assigning and Updating Variables: Create a function where you declare a variable using let and assign an initial value. Then, update its value within the same function and log both the initial and updated values.
function assignAndUpdate() {
    var Variables = "hello";
    console.log(Variables);
    Variables = "Hello world";
    console.log(Variables);
}
assignAndUpdate();
// Swapping Variables: Demonstrate how to swap the values of two variables. Start with variables a = 5 and b = 10, then swap their values so that a becomes 10 and b becomes 5
function swapVariables() {
    var a = 5;
    var b = 10;
    var c = a;
    a = b;
    b = c;
    console.log("a = ".concat(a));
    console.log("b = ".concat(b));
}
swapVariables();
// Compound assignment operators combine an arithmetic operation with assignment, making your code cleaner and more concise. Instead of writing x = x + 2, you can simply write x 
function compoundAssignment() {
    var x = 6;
    console.log("x = ".concat(x));
    x += 2;
    console.log("After adding 2 x = ".concat(x));
    x -= 1;
    console.log("After subtracting 1 x = ".concat(x));
    x *= 2;
    console.log("After multiplying 2 x = ".concat(x));
    x /= 4;
    console.log("After divided by 4 x = ".concat(x));
}
compoundAssignment();
