// Explain how to export a function from one JavaScript file and import it into another file.

import { add } from "./day44(part2)";
console.log(add(12,3));

// Create two modules; one that exports a class, and another that imports the class and creates an instance.
import { Car } from "./day44(part2)";
const myCar = new Car('Toyota', 'Camry');
myCar.displayInfo();

// Discuss the difference between default and named exports in JavaScript modules.
import { add } from "./mathFunction";

console.log(add(2, 3)