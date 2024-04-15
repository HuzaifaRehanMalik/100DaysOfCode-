"use strict";
// Explain how to export a function from one JavaScript file and import it into another file.
Object.defineProperty(exports, "__esModule", { value: true });
var day44_part2_1 = require("./day44(part2)");
console.log((0, day44_part2_1.add)(12, 3));
// Create two modules; one that exports a class, and another that imports the class and creates an instance.
var day44_part2_2 = require("./day44(part2)");
var myCar = new day44_part2_2.Car('Toyota', 'Camry');
myCar.displayInfo();
console.log((0, day44_part2_1.add)(2, 3));
