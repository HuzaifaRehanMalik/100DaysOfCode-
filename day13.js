// : Large Shirts: Default values in make_shirt().
function make_shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love  TypeScript"; }
    console.log("Make a ".concat(size, " and write a message ").concat(message));
}
make_shirt();
make_shirt("medium");
make_shirt("small", "Ilove coding");
// Cities: Describing cities with a function.
function Describing_cities(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is a city of ").concat(country));
}
Describing_cities("Karachi");
Describing_cities("Lahore");
Describing_cities("Islamabad");
// City Names: Formatting city-country pairs.
function city_country(city, country) {
    console.log("".concat(city, " is a city of ").concat(country));
}
city_country("Jerusalem", "Palestine");
city_country("Lahore", "Pakistan");
city_country("Ankara", "Turkey");
