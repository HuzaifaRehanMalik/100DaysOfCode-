// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
let favoriteCars: string[] = ["Tesla Model S", "Porsche 911", "BMW M3", "Audi R8", "Ford Mustang"];
for (let car of favoriteCars){
    console.log(`my favorite car is ${car}` );
}
// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
let guest_list:string[]= ["Ali","Alyan","Huzaifa"]
for (let guest of guest_list){
    console.log(`hellow ${guest}, would you like to join us for lunch`);
}
// Changing Guest List: One of your guests can't make it to the dinner, so you need to send out a new set of invitations with a replacement guest.
let guest_lists:string[]= ["Ali","Alyan","Huzaifa"]
let unableToCome:string="Alyan"

guest_lists=guest_lists.filter(guests=>guests!==unableToCome)
guest_lists.push("Talha")
for (let guests of guest_lists){
    console.log(`hellow ${guests}, would you like to join us for lunch`);
}
