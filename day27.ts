// : Creating and Accessing Object Properties: Construct an object representing a car with properties for make, model, and year. Then, show how you can access the model property of the car.
let car ={
    make:"Honda" ,
    model:"civic",
    year:2024
}

console.log(car.model);


// Updating Object Properties: Add a property named color to the existing car object, and then update the year property to 2021. Show how to perform these operations.
let carNew ={
    make:"Honda" ,
    model:"civic",
    year:2024
}
carNew.color="white"
console.log(carNew.color);

// Iterating Over Object Properties: Write a function that takes an object as an argument and logs all of its properties and values.

function logObjectProperties(object:object){
    for(let property in object)
    console.log(`${property}:${object[property]}`);

    
}
logObjectProperties({make:"Honda" ,model:"civic",year:2024})




