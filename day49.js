// Create a function that accepts a callback and invokes it with some arguments.
function invokesCallBack(callback) {
    var arys = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arys[_i - 1] = arguments[_i];
    }
    callback.apply(void 0, arys);
}
function callbackFunction(a, b) {
    console.log("sum: ".concat(a + b));
}
invokesCallBack(callbackFunction, 3, 4);
// Show an example of a callback function used to filter an array of numbers.
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var filteredNumbers = numbers.filter(function (number) { return number > 5; });
console.log(filteredNumbers);
// Explain how to handle errors in a callback pattern.
function fetchData(callback) {
    var error = new Error("Failed to fetch data");
    var data = "Some data";
    if (Math.random() > 0.5) {
        callback(null, data);
    }
    else {
        callback(error);
    }
}
fetchData(function (error, data) {
    if (error) {
        console.error(error.message);
    }
    else {
        console.log(data);
    }
});
