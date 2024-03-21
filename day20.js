// : Average Score Calculator: Write a simple program that can take lots of scores and find their average.
var scoresAverage = function () {
    var score = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        score[_i] = arguments[_i];
    }
    var total = score.reduce(function (sum, total) { return sum + total; }, 0);
    return total / score.length;
};
console.log(scoresAverage(98, 88, 98, 67));
// Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any other number you give them later.
function addnum(addNumber) {
    return function (number) {
        return number + addNumber;
    };
}
var addTen = addnum(10);
console.log(addTen(4));
// Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you the user's name and age.
function userProfile() {
    var name = "Huzaifa";
    var age = 20;
    console.log("Name: ".concat(name));
    console.log("A0ge: ".concat(age));
}
userProfile();
