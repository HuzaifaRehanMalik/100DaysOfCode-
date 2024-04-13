// Create a function inside an object that returns the object's own name property using the this keyword.
var myObject = {
    name: "myObject",
    getName: function () {
        return this.name;
    }
};
console.log(myObject.getName());
// Modify a method in an object to use the this keyword to access another property in the same object.
var myObject2 = {
    name: "myObject2",
    description: "This is an object",
    getDescription: function () {
        return "".concat(this.name, ": ").concat(this.description);
    }
};
console.log(myObject2.getDescription());
// Explain how the this keyword changes its value when used inside a nested function within a method.
var myObject3 = {
    name: "myObject3",
    outerMethod: function () {
        console.log(this.name);
        function nestedFunction() {
            console.log(this.name);
        }
        nestedFunction();
    }
};
myObject3.outerMethod();
