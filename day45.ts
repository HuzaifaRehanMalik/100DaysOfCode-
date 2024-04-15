// Write a JavaScript object and convert it into a JSON string.
interface person {
    name: string;
    age: number;
    city: string;
}
  
let person ={
    name:"Huzaifa",
    age:29,
    city:"Karachi"
}
console.log(JSON.stringify(person));
// Take a JSON string and parse it into a JavaScript object.
let jsonString: string = '{"name": "John", "age": 30, "city": "New York"}';
console.log(JSON.parse(jsonString));
// Explain how you can format a JSON string with proper indentation for readability.
interface person2 {
    name: string;
    age: number;
    city: string;
}
const person2 = {
    name: "John",
    age: 30,
    city: "New York"
};

console.log(JSON.stringify(person2, null, 2));

