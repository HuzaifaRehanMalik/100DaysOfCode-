// Finding the Position of a Substring: Write a function that locates the first occurrence of the word "code" within any given string and returns its position.
function findPosition(string) {
    return string.indexOf("code");
}
console.log(findPosition("Learn how to code with Typescript"));
// Checking for Text Presence: Create a function that checks if the word "JavaScript" is present in a given string. It should return true if found, otherwise false.
function findWord(str) {
    return str.includes("JavaScript");
}
console.log(findWord("I love TypeScript but donot like JavaScript"));
// Extracting a Substring: Demonstrate how to extract the first 11 characters from a string.
function Extract(a) {
    return a.substring(0, 11);
}
console.log(Extract("I love code but hate Javascript"));
