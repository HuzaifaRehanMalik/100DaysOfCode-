// Demonstrate the use of the setTimeout() function to execute code after a delay.
function delayedfunction() {
    console.log("This message will apper after 3 second");
}
setTimeout(delayedfunction, 3000);
// Explain the concept of the event loop in JavaScript with an example.
console.log("Start");
setTimeout(function () {
    console.log("Async operation completed");
}, 2000);
console.log("End");
// Describe how asynchronous callbacks differ from synchronous code execution.
console.log("Before synchronous operation");
for (var i = 0; i < 1e9; i++) { }
console.log("After synchronous operation");
console.log("Before asynchronous operation");
setTimeout(function () {
    console.log("Asynchronous operation completed");
}, 1000);
console.log("After asynchronous operation setup");
