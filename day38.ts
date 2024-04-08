// Create a Map that stores the names of countries as keys and their capitals as values. Add three countries to the Map.
const countriesCapitals = new Map();
countriesCapitals.set("Pakistan","Islamabad");
countriesCapitals.set("India","Delhi");
countriesCapitals.set('United States', 'Washington, D.C.');
console.log(countriesCapitals);
// Write a function that checks if a Map contains a key for "Canada" and logs the capital if it exists.
function checkForCanada(map) {
    if (map.has('Canada')) {
      const capital = map.get('Canada');
      console.log(`The capital of Canada is ${capital}.`);
    } else {
      console.log('Canada is not found in the map.');
    }
}
const countryCapitalsMap = new Map();
countryCapitalsMap.set('United States', 'Washington, D.C.');
countryCapitalsMap.set('United Kingdom', 'London');
countryCapitalsMap.set('France', 'Paris');

checkForCanada(countryCapitalsMap);
// Iterate over a Map of student IDs and names, and log each pair to the console.
const studentMap :any =new Map();
studentMap.set(1,"Ali");
studentMap.set(2,"Alyan");
studentMap.set(3,"Huzaifa");
studentMap.forEach((name,id) =>{
    console.log(`Student ID: ${id}, Name: ${name}`);
    
});

