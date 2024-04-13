//Implement a for loop that counts from 1 to 10 but skips number 5 using the continue statement
for (var i = 1; i <= 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}
// Use a while loop to count down from 10 to 1 and breaks the loop when it reaches 5.
var j = 10;
while (j >= 1) {
    if (j === 5) {
        break;
    }
    console.log(j);
    j--;
}
// Create a loop that iterates through a string and stops when it finds the first vowel.
var string = "Hello World";
var vowel = ["a", "e", "i", "o", "u"];
for (var _i = 0, _a = string.toLocaleLowerCase(); _i < _a.length; _i++) {
    var char = _a[_i];
    if (vowel.includes(char)) {
        console.log("First vowel found:", char);
        break;
    }
}
