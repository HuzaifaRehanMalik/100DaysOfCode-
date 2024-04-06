// Write a function that returns the current date in the format "DD-MM-YYYY".
function dateToday() {
    var now = new Date();
    var date = now.getDate();
    var month = now.getMonth() + 1;
    var year = now.getFullYear();
    console.log("".concat(date, "-").concat(month, "-").concat(year));
}
;
dateToday();
// Create a JavaScript snippet that calculates and logs how many days are left until New Year.
function daysUntillNewyear() {
    var today = new Date();
    var newYear = new Date(today.getFullYear() + 1, 0, 1);
    var diff = newYear.getTime() - today.getTime();
    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    console.log("".concat(days, " Days left till New Year"));
}
daysUntillNewyear();
// Generate a date object representing your next birthday and log it to the console.
function getnextBirthday(month, day) {
    var today = new Date();
    var year = today.getFullYear();
    var birthday = new Date(year, month - 1, day);
    if (birthday < today) {
        birthday.setFullYear(year + 1);
    }
    return birthday;
}
var nextBirthday = getnextBirthday(7, 18);
console.log("next birthday is on ".concat(nextBirthday));
