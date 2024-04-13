// Convert a traditional function expression to an arrow function.
var great = function (name) { return "Hello ".concat(name); };
console.log(great("Huzaifa"));
// Create an arrow function that takes multiple parameters and returns the product of all parameters.
var multiple = function (a, b) { return a * b; };
console.log(multiple(12, 4));
// Explain how this behaves differently in arrow functions compared to traditional functions.
var Example = /** @class */ (function () {
    function Example(name) {
        var _this = this;
        this.name = name;
        this.arrowGreet = function () { return "Hello, ".concat(_this.name, "!"); };
    }
    Example.prototype.traditionalGreet = function () {
        return function () {
            return "Hello, ".concat(this.name, "!");
        };
    };
    return Example;
}());
var obj = new Example("Alice");
var traditionalFunc = obj.traditionalGreet();
console.log("Traditional function:", traditionalFunc());
var arrowFunc = obj.arrowGreet;
console.log("Arrow function:", arrowFunc());
