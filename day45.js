var person = {
    name: "Huzaifa",
    age: 29,
    city: "Karachi"
};
console.log(JSON.stringify(person));
// Take a JSON string and parse it into a JavaScript object.
var jsonString = '{"name": "John", "age": 30, "city": "New York"}';
console.log(JSON.parse(jsonString));
var person2 = {
    name: "John",
    age: 30,
    city: "New York"
};
console.log(JSON.stringify(person2, null, 2));
