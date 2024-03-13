// Pizzas: Share your favorite pizzas and express your love for them.
let Pizzas :string[]=["Vegetable","BBQ Chicken","Margherita"]
for (let pizza of Pizzas){
    console.log(`I love ${pizza} pizza`);
    
}
// Animals: Highlight animals with a common trait.
let animals : string[]=["Dog","Cat","Parrot"];
for (let animal of animals ){
    console.log(`${animal} would make a great pet`);
}
console.log("Any of these animals would make a great pet!");

// T-Shirt: Create a function for customizing t-shirts.
function make_shirt(size:string,message:string){
    console.log(`make me a shirt size ${size} and print a message on it that ${message}`);
    
}
make_shirt("small","Code enthusiast")