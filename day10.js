// Stages of Life: Determine a person’s life stage with an if-else chain.
var age = 20;
if (age < 2) {
    console.log("he person is a baby");
}
else if (age < 5) {
    console.log("he person is a toddler");
}
else if (age < 12) {
    console.log("he person is a kid");
}
else if (age < 20) {
    console.log("he person is a teenager");
}
else {
    console.log("The person is an elder.");
}
// Favorite Fruit: Create an array for your favorite fruits and check if certain fruits are included.
var fruits = ["mangos", "bananas", "apples"];
if (fruits.includes("bananas")) {
    console.log("You really like bananas!");
}
if (fruits.includes("apples")) {
    console.log("You really like apples!");
}
if (fruits.includes("mangos")) {
    console.log("You really like apples!");
}
// Loop through usernames to personalize greetings. This introduces looping and conditional logic together.
var usernames = ["Admin", "user1", "user2", "user3"];
for (var _i = 0, usernames_1 = usernames; _i < usernames_1.length; _i++) {
    var username = usernames_1[_i];
    console.log(username);
    if (username == "Admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(username, ", thank you for logging in again."));
    }
}
