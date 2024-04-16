// Use console.log() to debug and track the value of a variable inside a loop.
for (var i = 0; i < 10; i++) {
    var j = i * 2;
    console.log("Value of variable at iteration " + i + ": " + j);
}
// Implement a try-catch block to handle potential errors in a block of code.
function devide(a, b) {
    if (b == 0) {
        throw new Error("devide by is not allowed");
    }
    return a / b;
}
try {
    var result = devide(10, 0);
    console.log("result", result);
}
catch (error) {
    console.error("An error occurred:", error.message);
}
// Describe how to use breakpoints in browser developer tools to debug JavaScript code.
console.log("Before breakpoint");
console.log("This line has a breakpoint set on it in the browser's developer tools");
console.log("After breakpoint");
