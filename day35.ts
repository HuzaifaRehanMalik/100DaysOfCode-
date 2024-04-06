// Write a function that returns a random boolean value, true or false.

function randomBoolean():boolean{
    return Math.random()<0.5
}
console.log(randomBoolean());

// Create a function that generates a random hexadecimal color code.
function randomColorCode():string{
    const color = '#' + Math.floor(Math.random()*0xFFFFFF).toString(16).padStart(6,'0')
    return color
}
console.log(randomColorCode());

// Simulate a dice roll using JavaScript and return a random integer between 1 and 6.

function diceRoll():number{
    return Math.floor(Math.random()*6)+1;
}
console.log(diceRoll());
