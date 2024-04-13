// Convert a traditional function expression to an arrow function.
let great=(name:string):string=>`Hello ${name}`
console.log(great("Huzaifa"));
// Create an arrow function that takes multiple parameters and returns the product of all parameters.
let multiple=(a:number,b:number):number=>a*b
console.log(multiple(12,4));
// Explain how this behaves differently in arrow functions compared to traditional functions.
class Example {
    constructor(private name: string) {}
  
   
    traditionalGreet() {
      return function() {
        return `Hello, ${this.name}!`;
      };
    }
  
    
    arrowGreet = () => `Hello, ${this.name}!`;
  }
  
  const obj = new Example("Alice");
  
  
  const traditionalFunc = obj.traditionalGreet();
  console.log("Traditional function:", traditionalFunc());
  const arrowFunc = obj.arrowGreet;
  console.log("Arrow function:", arrowFunc()); 