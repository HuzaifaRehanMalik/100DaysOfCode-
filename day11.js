// No Users: Ensure your user list isn’t empty.
var user = [];
if (user.length == 0) {
    console.log("we need some user");
}
else {
}
// Checking Usernames: Ensure uniqueness in usernames.
var user_names = ["admin", "user1", "user2", "user3"];
var new_names = ["user1", "user2", "user3", "user4", "user5", "user6"];
var current_users = user_names.map(function (user) { return user.toLocaleLowerCase(); });
for (var _i = 0, new_names_1 = new_names; _i < new_names_1.length; _i++) {
    var new_name = new_names_1[_i];
    if (current_users.includes(new_name.toLowerCase())) {
        console.log("Sorry, the username '".concat(new_name, "' is already taken. Please enter a new username."));
    }
    else {
        console.log("The username '".concat(new_name, "' is available."));
    }
}
// Ordinal Numbers: Display numbers with their ordinal suffixes.
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _a = 0, numbers_1 = numbers; _a < numbers_1.length; _a++) {
    var number = numbers_1[_a];
    var ordinalsuffixes = void 0;
    if (number === 1) {
        ordinalsuffixes = "st";
    }
    else if (number === 2) {
        ordinalsuffixes = "nd";
    }
    else if (number === 2) {
        ordinalsuffixes = "rd";
    }
    else {
        ordinalsuffixes = "th";
    }
    console.log("".concat(number).concat(ordinalsuffixes));
}
