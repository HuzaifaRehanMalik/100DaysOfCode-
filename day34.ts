// Use the JavaScript Math object to find the square root of 144.
function findRoot(num:number){
    let root:number=Math.sqrt(num)
    console.log(root);
}
findRoot(144)
// Generate a random integer between 1 and 10.
function random(){
    let number:number=Math.floor(Math.random()*10)+1
    console.log(number);
    
}
random();
// : Calculate and log the absolute difference between the number -5 and 5.

function differenceBetween(value1:number,value2:number){
    const diff=Math.abs(value1-value2)
    console.log(diff);
    
}
differenceBetween(-5,5)
