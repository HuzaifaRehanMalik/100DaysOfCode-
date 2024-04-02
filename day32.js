// Use the .map() method to create a new array that contains the length of each word from an array of words.
var arry = ["me", "you", "him", "her"];
var newArry = arry.map(function (arry) { return arry.length; });
console.log(newArry);
// Write a function that uses the .filter() method to return an array of numbers greater than 10.
function greater(number) {
    return number.filter(function (number) { return number > 10; });
}
var number = [5, 7, 9, 10, 20, 23, 45];
console.log(greater(number));
// Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.
var sum = [1, 3, 5, 7, 9];
function sumOfAll(sum) {
    return sum.reduce(function (accumulator, current) { return accumulator + current; }, 0);
}
console.log(sumOfAll(sum));
