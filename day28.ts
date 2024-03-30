// Find the Length of a String: Write a function that takes a string as an argument and returns the number of characters in the string.
function stringlength(string:string){
    return string.length
}
console.log(stringlength("huzaifa"));

// Converting to Upper and Lower Case: Create a function that takes a string, converts it to uppercase, then to lowercase, and logs both.
function uppercaseLowercase (str:string){
    let uppercase= str.toLocaleUpperCase()
    let lowercase= str.toLocaleLowerCase()
    console.log("upper case:",uppercase);
    console.log("lower case:",lowercase);
    
}
uppercaseLowercase("Huzaifa")

// Replacing Text in a String: Write a function that takes a sentence and replaces all instances of the word "JavaScript" with "TypeScript".
function replaceText(sentence:string){
    return sentence.replace(/javascript/g,"typescript")
}
console.log(replaceText("I love javascript"));
