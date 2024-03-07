// More Guests: You've found a bigger dinner table, so there's room for more guests.
let guest_list:string[]=["Ali","Huzaifa","Alyan"]
console.log("Great news! Ihave found a new table");
guest_list.unshift("Zain")
guest_list.push("Faiz")
guest_list.splice(Math.floor(guest_list.length/2),0,)
for (let guest of guest_list){
    console.log(`I would be happy if you join us for luch ${guest}`);
}
// Shrinking Guest List: Unfortunately, your new table won’t arrive in time, and you can only invite two guests.
let guestList:string[]=["Ali","Huzaifa","Alyan","Rehan"]
console.log("Great News! I have a new table.");
console.log("Sorry we can Only invite three people for dinner. ");
while(guestList.length>2){
    let removedGuest=guestList.pop()
    console.log(`Sorry your are not Invited ${removedGuest}`);
}
for(let guest of guestList){
    console.log(`Your are still invited ${guest}`);
}
// Seeing the World: Think of at least five places you’d like to visit.
let PlacesToVisit:string[]=["Dubai","Newyork","Istanbul","Las Vegas"]
console.log("orignal order: ",PlacesToVisit);
console.log("alphabetical order: ",[...PlacesToVisit].sort() );
console.log("orignal order: ",PlacesToVisit);
console.log("Reverse alphabetical order: ",[...PlacesToVisit].sort().reverse());
console.log("orignal order: ",PlacesToVisit);
PlacesToVisit.reverse()
console.log("Reverse order: ",PlacesToVisit);
PlacesToVisit.reverse()
console.log("orignal order: ",PlacesToVisit);
PlacesToVisit.sort()
console.log("alphabetical order: ",PlacesToVisit);
PlacesToVisit.sort().reverse()
console.log("reverse alphabetical order: ",PlacesToVisit);

