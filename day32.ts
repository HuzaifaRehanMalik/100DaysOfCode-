// Use the .map() method to create a new array that contains the length of each word from an array of words.
let arry :string[]=["me","you","him","her"];
let newArry:number[]=arry.map(arry=>arry.length)
console.log(newArry);
// Write a function that uses the .filter() method to return an array of numbers greater than 10.
function greater(number:number[]){
    return number.filter(number=>number>10)
}
let number:number[]=[5,7,9,10,20,23,45]
console.log(greater(number));
// Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.
let sum: number[]=[1,3,5,7,9]
function sumOfAll(sum:number[]){
    return sum.reduce((accumulator, current)=>accumulator + current,0);
}
console.log(sumOfAll(sum));
