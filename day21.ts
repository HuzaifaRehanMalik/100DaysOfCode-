// Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example.
enum vehicles {
    car,
    bike,
    truck
}
console.log(vehicles.car);
// : Making a Student Template: Create a blueprint for student information, including their name, age, and the classes they're taking, and then fill in this blueprint with an example student.
interface Student {
    name:string;
    age:number;
    class:string[];
}
let student: Student={
    name:"HUZAIFA",
    age:20,
    class:["English","Urdu","Math"]

}
console.log(student);

// Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias, including properties unique to each shape.





type shape={
    kind:"circle"|"rectangle";
    radius?:number;
    width?:number;
    height?:number;
}
let circle:shape={
    kind:"circle",
    radius:4
};
let rectangle:shape={
    kind:"rectangle",
    width:20,
    height:40
};
console.log(circle);
console.log(rectangle);


