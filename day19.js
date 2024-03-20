// Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a new list where each number is twice its original value.
var numbers = [1, 2, 3, 4, 5];
var doubleNumber = numbers.map(function (num) { return num * 2; });
console.log(doubleNumber);
// Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.
var arry = [1, "apple", 2, 3, "coconut", "dates", 4, 5, 6];
var Stringsarry = arry.filter(function (item) { return typeof item === "string"; });
console.log(Stringsarry);
// Find the Average Grade: Given a list of grades, calculate the average grade.
var grades = [88, 90, 75, 66, 54, 44, 34, 98, 75];
var averageGrades = grades.reduce(function (total, grades) { return grades + total; }, 0) / grades.length;
console.log(averageGrades);
