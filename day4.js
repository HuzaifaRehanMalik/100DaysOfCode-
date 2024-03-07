// Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If the programs are straightforward at this point, just add your name and the current date at the top of each program file. Then, write one sentence describing what the program does.
var message = "Hellow World"; // this is a hellow world program:
console.log(message);
// Names: Store the names of a few of your friends in an array called names. Print each person’s name by accessing each element in the list, one at a time.
var Names = ["Ali", "Alyan", "Talha"];
for (var _i = 0, Names_1 = Names; _i < Names_1.length; _i++) {
    var name_1 = Names_1[_i];
    console.log(name_1);
}
// Greetings: Use the array from Exercise 11. Instead of just printing each person’s name, print a message to them. The message should be the same for each person, but personalized with their name.
var names = ["Ali", "Alyan", "Talha"];
for (var _a = 0, names_1 = names; _a < names_1.length; _a++) {
    var name_2 = names_1[_a];
    console.log("Hellow ".concat(name_2, " would you like to come to my home"));
}
