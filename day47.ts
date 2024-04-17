
// List three reserved words in JavaScript and create a valid use case for each.
const num:number=5;
if(num=5){
    console.log(num);
    
    
}
function add (a:number,b:number){
    return a+b
    
}
// Explain the error that occurs when trying to use a reserved word as a variable name.
let class = "10"
console.log(class);

// Discuss the significance of the await reserved word in asynchronous JavaScript.

async function fetchData() {
    const data = await fetchSomething();
    console.log(data);
  }
  
  fetchData();
  
  console.log("The 'await' keyword allows asynchronous, promise-based behavior to be written in a cleaner, more linear fashion.");
  
