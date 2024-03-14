// : Large Shirts: Default values in make_shirt().
function make_shirt(size:string="Large",message:string="I love  TypeScript"){
    console.log(`Make a ${size} and write a message ${message}`);
    
}
make_shirt()
make_shirt("medium")
make_shirt("small","Ilove coding")
// Cities: Describing cities with a function.
function Describing_cities (city:string,country:string="Pakistan"){
    console.log(`${city} is a city of ${country}`);
    
}
Describing_cities("Karachi")
Describing_cities("Lahore")
Describing_cities("Islamabad")
// City Names: Formatting city-country pairs.
function city_country (city:string,country:string){
    console.log(`${city} is a city of ${country}`);
    
}
city_country("Jerusalem","Palestine")
city_country("Lahore","Pakistan")
city_country("Ankara","Turkey")
