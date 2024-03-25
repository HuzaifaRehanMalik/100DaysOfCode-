// Understanding let in Loops: Write a function that uses a loop with the let keyword to print numbers from 1 to 5. Explain how the let keyword affects the visibility of the loop variable.
function printNumber(){
    for(let i =1; i<=5;++i) {
        console.log(i);
        
    }
}
printNumber();
// Compare let and const: Create two examples where let allows reassignment but const does not. Try to reassign a const-declared variable and catch the error.
const name1 = "Ali";
try {
    name1 = "Alyan"; 
} catch (error) {
    console.log("Error: Can't reassign a `const`-declared variable.");
}
let age = 19;
age = 20;
console.log(age);

// Block Scope with let and const: Demonstrate block scope by creating a code block with {} that uses both let and const. Show how variables declared inside the block are not accessible outside of it.
// Variables declared outside the block
let outsideLet = 5;
const outsideConst = 10;


{
    
    let insideLet = 15;
    const insideConst = 20;

    console.log("Inside the block:");
    console.log("insideLet:", insideLet);   
    console.log("insideConst:", insideConst); 

    
    console.log("outsideLet:", outsideLet);   
    console.log("outsideConst:", outsideConst); 
}


console.log("Outside the block:");
console.log("insideLet:", typeof insideLet);   
console.log("insideConst:", typeof insideConst);