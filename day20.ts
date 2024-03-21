// : Average Score Calculator: Write a simple program that can take lots of scores and find their average.
let scoresAverage=(...score:number[])=>{
    let total =score.reduce((sum,total)=>sum+total,0);
    return total/score.length
}
console.log(scoresAverage(98,88,98,67));
// Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any other number you give them later.
function addnum(addNumber:number):(number:number)=>number{
    return function(number:number):number{
        return number+addNumber;
    };
}
let addTen=addnum(10)
console.log(addTen(4));


// Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you the user's name and age.
function userProfile(){
    let name= "Huzaifa";
    let   age = 20
    console.log(`Name: ${name}`);
    console.log(`A0ge: ${age}`);

}
userProfile()
