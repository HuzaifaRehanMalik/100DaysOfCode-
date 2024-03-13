// Pizzas: Share your favorite pizzas and express your love for them.
var Pizzas = ["Vegetable", "BBQ Chicken", "Margherita"];
for (var _i = 0, Pizzas_1 = Pizzas; _i < Pizzas_1.length; _i++) {
    var pizza = Pizzas_1[_i];
    console.log("I love ".concat(pizza, " pizza"));
}
// Animals: Highlight animals with a common trait.
var animals = ["Dog", "Cat", "Parrot"];
for (var _a = 0, animals_1 = animals; _a < animals_1.length; _a++) {
    var animal = animals_1[_a];
    console.log("".concat(animal, " would make a great pet"));
}
console.log("Any of these animals would make a great pet!");
// T-Shirt: Create a function for customizing t-shirts.
function make_shirt(size, message) {
    console.log("make me a shirt size ".concat(size, " and print a message on it that ").concat(message));
}
make_shirt("small", "Code enthusiast");
