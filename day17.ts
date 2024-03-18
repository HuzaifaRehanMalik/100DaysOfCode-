// : Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies. It should log each hobby with a statement saying you enjoy that hobby.
function loghobbies(...hobbies:string[]){
    for (let hobby of hobbies ){
        console.log(`I love ${hobby}`);
        
    }

}
loghobbies("Criket","Gaming","Coding")
// Multiline Template Literals: Use template literals to create a multiline string that describes your ideal day. Include at least three different activities.
let MyIdealDay=`My ideal day will be:
1. Wake up at 6 am for namaz.
2. Do some work out 
3. Coding for a few houres`;
console.log(MyIdealDay);
// Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function.
function area_of_rectangle(lenght,width){
    return lenght*width
}
const areaOfRectangle=(length,width)=>length*width

console.log(areaOfRectangle(5,9));

