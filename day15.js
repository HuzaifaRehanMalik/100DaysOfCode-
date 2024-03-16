// Unchanged Magicians: Preserve the original magician names while creating a new "great" list.
var magicians = ['Harry Houdini', 'David Blaine', 'Penn Jillette', 'Teller'];
function show_magicians(magician) {
    console.log("Original Magicians:");
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician_1 = magicians_1[_i];
        console.log("".concat(magician_1));
        ;
    }
    console.log("                              ");
    console.log("Great Magicians:");
    for (var _a = 0, magicians_2 = magicians; _a < magicians_2.length; _a++) {
        var magician_2 = magicians_2[_a];
        ;
        console.log("The Great ".concat(magician_2));
    }
}
show_magicians();
// Sandwiches: Summarize sandwich orders with varying ingredients.
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making a sandwhich with folloeing item");
    for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
        var item = items_1[_a];
        console.log("- " + item);
    }
    console.log("Enjoy your sandwhich!\n");
}
makeSandwich("Turkey", "Lettuce", "Tomato", "Mayo");
makeSandwich("Ham", "Cheese");
makeSandwich("Peanut Butter", "Jelly");
//     Cars: Create detailed car objects with flexible properties.
function make_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, model: model };
    for (var _a = 0, options_1 = options; _a < options_1.length; _a++) {
        var option = options_1[_a];
        var key = option[0], value = option[1];
        car[key] = value;
    }
    return car;
}
console.log(make_car("Toyota", "Corolla", ["color", "red"], ["year", 2020]));
console.log(make_car("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));
