// Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If the programs are straightforward at this point, just add your name and the current date at the top of each program file. Then, write one sentence describing what the program does.

let message:string="Hellow World" // this is a hellow world program:
console.log(message);

// Names: Store the names of a few of your friends in an array called names. Print each person’s name by accessing each element in the list, one at a time.
let Names:string[]=["Ali","Alyan","Talha"]
for (let name of Names){
    console.log(name);
}

// Greetings: Use the array from Exercise 11. Instead of just printing each person’s name, print a message to them. The message should be the same for each person, but personalized with their name.

let names:string[]=["Ali","Alyan","Talha"]
for (let name of names){
    console.log(`Hellow ${name} would you like to come to my home`);
}
