// Create a function that accepts a callback and invokes it with some arguments.
function invokesCallBack(callback:function,...arys:ary[]){
    callback(...arys);
}
function callbackFunction(a:number,b:number){
    console.log(`sum: ${a+b}`);
    
}
invokesCallBack(callbackFunction,3,4)

// Show an example of a callback function used to filter an array of numbers.
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredNumbers: number[] = numbers.filter((number) => number > 5);
console.log(filteredNumbers); 

// Explain how to handle errors in a callback pattern.

function fetchData(
    callback: (error: Error | null, data?: string) => void
  ): void {
    
 const error = new Error("Failed to fetch data");
const data = "Some data";
  
   
 if (Math.random() > 0.5) {
    callback(null, data);
    } else {
    callback(error); 
    }
}
  
  
fetchData((error, data) => {
 if (error) {
   console.error(error.message); 
 } else {
   console.log(data); 
}
});

