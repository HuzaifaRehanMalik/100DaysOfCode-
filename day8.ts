// : Intentional Error: Try to produce an array index error in one of your programs. Correct the error before finishing.
let students: string[]=["Ali","Alyan","Huzaifa","Rehan"]
console.log(students[5]);
console.log(students[2]);
// Conditional Tests: Write a series of conditional tests. Predict the results of each test.
let car ="supra";
console.log("Is car == 'supra'? I predict True.");
console.log(car=="supra");
console.log("Is car != 'supra'? I predict false.");
console.log(car!="supra");
console.log("Is car == 'toyota'? I predict false.");
console.log(car=="toyota");
console.log("Is car != 'toyota'? I predict true.");
console.log(car!="toyota");

// More Conditional Tests: Expand your conditional tests to cover a wider range of comparisons.
// Tests for equality and inequality with strings
let nameOfStudent :string = "Huzaifa"
console.log("Is nameOfStudent equal Huzaifa? I peridict true");
console.log(nameOfStudent=="Huzaifa");
console.log("is nameOfStudent inequal Ali? I peridict true");
console.log(nameOfStudent != "Ali");

// • Tests using the lower case function
let country="Pakistan"
console.log("Is country.tolowercase equal pakistan? I peridict true");
console.log(country.toLocaleLowerCase()=="pakistan");
console.log("Is country.tolowercase equal india? I peridict true");
console.log(country.toLocaleLowerCase()=="india");

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let x: number = 10;
let y: number = 5;

console.log("Is x greater than y? I predict True.");
console.log(x > y);

console.log("Is x less than or equal to y? I predict False.");
console.log(x <= y);

// • Tests using "and" and "or" operators
let age :number=20
console.log("Is age greater than 15 and less than 25? I predict True.");
console.log(age > 15 && age < 25);

console.log("Is age less than 15 or greater than 50? I predict False.");
console.log(age < 15 || age > 50);

// • Test whether an item is in a array
// • Test whether an item is not in a array
let fruits: string[] = ["apple", "banana", "orange"];
console.log("Is 'apple' in the array? I predict True.");
console.log(fruits.includes("apple"));
console.log("Is 'grape' not in the array? I predict True.");
console.log(!fruits.includes("grape"));




