// Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example.
var vehicles;
(function (vehicles) {
    vehicles[vehicles["car"] = 0] = "car";
    vehicles[vehicles["bike"] = 1] = "bike";
    vehicles[vehicles["truck"] = 2] = "truck";
})(vehicles || (vehicles = {}));
console.log(vehicles.car);
var student = {
    name: "HUZAIFA",
    age: 20,
    class: ["English", "Urdu", "Math"]
};
console.log(student);
var circle = {
    kind: "circle",
    radius: 4
};
var rectangle = {
    kind: "rectangle",
    width: 20,
    height: 40
};
console.log(circle);
console.log(rectangle);
