// Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year, and a method describe() that logs a sentence about the laptop.
let laptop= {
    make : "lenove",
    model : "Thinkpad",
    year : 2015,
    describe: function(){
        console.log(`This laptop is a ${this.year} ${this.make} ${this.model}.`);
        
    }

}
laptop.describe()
// Advanced Array Destructuring: Given an array of objects representing different laptops, each with properties make, model, and year, use array destructuring to assign the first and second laptops to variables. Then, log these variable
let laptops=[
    {make:"Dell",model:"XPS 15",year:2021},
    {make:"Apple",model:"Macbook air",year:2024},
    {make:"Apple",model:"Macbook pro",year:2022}
]
let [laptop1,laptop2]=laptops
console.log(laptop1);
console.log(laptop2);

// Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.
let prices1=[1000,3000,2500]
let prices2=[1100,2400,2700]
let combineprice=[...prices1, ...prices2].sort((a,b)=>a-b);
console.log(combineprice);













