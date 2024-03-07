var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// More Guests: You've found a bigger dinner table, so there's room for more guests.
var guest_list = ["Ali", "Huzaifa", "Alyan"];
console.log("Great news! Ihave found a new table");
guest_list.unshift("Zain");
guest_list.push("Faiz");
guest_list.splice(Math.floor(guest_list.length / 2), 0);
for (var _i = 0, guest_list_1 = guest_list; _i < guest_list_1.length; _i++) {
    var guest = guest_list_1[_i];
    console.log("I would be happy if you join us for luch ".concat(guest));
}
// Shrinking Guest List: Unfortunately, your new table won’t arrive in time, and you can only invite two guests.
var guestList = ["Ali", "Huzaifa", "Alyan", "Rehan"];
console.log("Great News! I have a new table.");
console.log("Sorry we can Only invite three people for dinner. ");
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("Sorry your are not Invited ".concat(removedGuest));
}
for (var _a = 0, guestList_1 = guestList; _a < guestList_1.length; _a++) {
    var guest = guestList_1[_a];
    console.log("Your are still invited ".concat(guest));
}
// Seeing the World: Think of at least five places you’d like to visit.
var PlacesToVisit = ["Dubai", "Newyork", "Istanbul", "Las Vegas"];
console.log("orignal order: ", PlacesToVisit);
console.log("alphabetical order: ", __spreadArray([], PlacesToVisit, true).sort());
console.log("orignal order: ", PlacesToVisit);
console.log("Reverse alphabetical order: ", __spreadArray([], PlacesToVisit, true).sort().reverse());
console.log("orignal order: ", PlacesToVisit);
PlacesToVisit.reverse();
console.log("Reverse order: ", PlacesToVisit);
PlacesToVisit.reverse();
console.log("orignal order: ", PlacesToVisit);
PlacesToVisit.sort();
console.log("alphabetical order: ", PlacesToVisit);
PlacesToVisit.sort().reverse();
console.log("reverse alphabetical order: ", PlacesToVisit);
