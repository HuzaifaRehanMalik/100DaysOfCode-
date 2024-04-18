// Create a Promise that resolves with "Hello, World!" after 2 seconds.
var helloPromise1 = new Promise(function (resolve) {
    setTimeout(function () {
        resolve("Hello, world!");
    }, 2000);
});
helloPromise.then(function (result) { return console.log(result); });
//  Show how to use the .then() and .catch() methods to handle Promise resolution and rejection.
var myPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("Promise resolved");
    }, 2000);
});
myPromise.then(function (result) {
    console.log("Resolved:", result);
})
    .catch(function (error) {
    console.error("Rejected:", error);
});
// Explain the use of the Promise.all() method with an example.   
var promise1 = Promise.resolve(3);
var promise2 = 42;
var promise3 = new Promise(function (resolve) {
    setTimeout(resolve, 100, "foo");
});
Promise.all([promise1, promise2, promise3]).then(function (values) {
    console.log(values); // Outputs: [3, 42, "foo"]
});
