// Make a Smartphone Object: Create a simple way to keep track of a smartphone's details. Include its brand, model, and other key features like how much storage it has, the size of its screen, and how long its battery lasts.
let smartphone={make : "Apple",
    model : "iphone 15",
    specs : {
        storage : "1 TB",
        screen : "6.7 inches",
        bettery : "24 houres"
    
    }
};
console.log(smartphone);

// Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows, like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them.
let developer_skill={
    languages: ["JavaScript", "TypeScript", "Python"],
    tools: ["Git", "Webpack", "Docker"],
    frameworks: ["React", "Angular", "Vue"]
    
}

let {languages,frameworks,tools}=developer_skill
console.log(`Language: ${languages[0]}, Framework: ${frameworks[0]}, Tool: ${tools[0]}`);
console.log(`Language: ${languages[1]}, Framework: ${frameworks[1]}, Tool: ${tools[1]}`);
console.log(`Language: ${languages[2]}, Framework: ${frameworks[2]}, Tool: ${tools[2]}`);

// Making Flexible Object Keys: Learn how to set up a list where you can change the name of each section based on what you need at that moment, like adjusting labels based on user choices.


function ObjectWithDynamickey(key:string,value:string){
    let daynamicObject ={};
    daynamicObject[key]=value;
    return daynamicObject
}
let userPrefernce=ObjectWithDynamickey("theme", "dark");
console.log(userPrefernce);
