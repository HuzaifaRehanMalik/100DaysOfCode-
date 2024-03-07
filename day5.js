// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
var favoriteCars = ["Tesla Model S", "Porsche 911", "BMW M3", "Audi R8", "Ford Mustang"];
for (var _i = 0, favoriteCars_1 = favoriteCars; _i < favoriteCars_1.length; _i++) {
    var car = favoriteCars_1[_i];
    console.log("my favorite car is ".concat(car));
}
// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var guest_list = ["Ali", "Alyan", "Huzaifa"];
for (var _a = 0, guest_list_1 = guest_list; _a < guest_list_1.length; _a++) {
    var guest = guest_list_1[_a];
    console.log("hellow ".concat(guest, ", would you like to join us for lunch"));
}
// Changing Guest List: One of your guests can't make it to the dinner, so you need to send out a new set of invitations with a replacement guest.
var guest_lists = ["Ali", "Alyan", "Huzaifa"];
var unableToCome = "Alyan";
guest_lists = guest_lists.filter(function (guests) { return guests !== unableToCome; });
guest_lists.push("Talha");
for (var _b = 0, guest_lists_1 = guest_lists; _b < guest_lists_1.length; _b++) {
    var guests = guest_lists_1[_b];
    console.log("hellow ".concat(guests, ", would you like to join us for lunch"));
}
