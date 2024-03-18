// : Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies. It should log each hobby with a statement saying you enjoy that hobby.
function loghobbies() {
    var hobbies = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        hobbies[_i] = arguments[_i];
    }
    for (var _a = 0, hobbies_1 = hobbies; _a < hobbies_1.length; _a++) {
        var hobby = hobbies_1[_a];
        console.log("I love ".concat(hobby));
    }
}
loghobbies("Criket", "Gaming", "Coding");
// Multiline Template Literals: Use template literals to create a multiline string that describes your ideal day. Include at least three different activities.
var MyIdealDay = "My ideal day will be:\n1. Wake up at 6 am for namaz.\n2. Do some work out \n3. Coding for a few houres";
console.log(MyIdealDay);
// Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function.
function area_of_rectangle(lenght, width) {
    return lenght * width;
}
var areaOfRectangle = function (length, width) { return length * width; };
console.log(areaOfRectangle(5, 9));
