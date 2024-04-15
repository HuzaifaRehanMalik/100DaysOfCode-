"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.utilTwo = exports.utilOne = exports.Car = exports.add = void 0;
function add(a, b) {
    return a + b;
}
exports.add = add;
var Car = /** @class */ (function () {
    function Car(make, model) {
        this.make = make;
        this.model = model;
    }
    Car.prototype.displayInfo = function () {
        console.log("This car is a ".concat(this.make, " ").concat(this.model));
    };
    return Car;
}());
exports.Car = Car;
var utilOne = function () {
    /*...*/
};
exports.utilOne = utilOne;
var utilTwo = function () {
    /*...*/
};
exports.utilTwo = utilTwo;
