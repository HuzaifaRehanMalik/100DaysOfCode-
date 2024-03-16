// Unchanged Magicians: Preserve the original magician names while creating a new "great" list.
let magicians:string[]=['Harry Houdini', 'David Blaine', 'Penn Jillette', 'Teller']
function show_magicians(magician:string){
    console.log("Original Magicians:");
    for(let magician of magicians){
            
            
            console.log(`${magician}`);;
        
    }
    console.log("                              ");
    console.log("Great Magicians:");
    for(let magician of magicians){;
            
         
            
            console.log(`The Great ${magician}`);
        
    }
}
show_magicians()
// Sandwiches: Summarize sandwich orders with varying ingredients.

function makeSandwich (...items:string[]): void{
        console.log("Making a sandwhich with folloeing item");
        for (let item of items){
            console.log("- "+item);
            
        }
        console.log("Enjoy your sandwhich!\n");
        
    }
    makeSandwich("Turkey", "Lettuce", "Tomato", "Mayo");
    makeSandwich("Ham", "Cheese");
    makeSandwich("Peanut Butter", "Jelly");
//     Cars: Create detailed car objects with flexible properties.
function make_car(manufacturer:string,model:string,...options:[string,any][]):object{
        let car ={manufacturer,model}
        for (let option of options){
            const [key, value] = option;
            car[key] = value;
        }
        return car
    }
    console.log(make_car("Toyota", "Corolla", ["color", "red"], ["year", 2020]));
    console.log(make_car("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));    
    