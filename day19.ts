// Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a new list where each number is twice its original value.
let numbers:number[]=[1,2,3,4,5]
let doubleNumber:number[]=numbers.map(num=>num*2)
console.log(doubleNumber);
// Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.
let arry=[1,"apple",2,3,"coconut","dates",4,5,6]
let Stringsarry=arry.filter(item=>typeof item==="string")
console.log(Stringsarry);
// Find the Average Grade: Given a list of grades, calculate the average grade.
let grades=[88,90,75,66,54,44,34,98,75]
let averageGrades=grades.reduce((total,grades)=>grades+total,0)/grades.length
console.log(averageGrades);


