// Make a Smartphone Object: Create a simple way to keep track of a smartphone's details. Include its brand, model, and other key features like how much storage it has, the size of its screen, and how long its battery lasts.
var smartphone = { make: "Apple",
    model: "iphone 15",
    specs: {
        storage: "1 TB",
        screen: "6.7 inches",
        bettery: "24 houres"
    }
};
console.log(smartphone);
// Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows, like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them.
var developer_skill = {
    languages: ["JavaScript", "TypeScript", "Python"],
    tools: ["Git", "Webpack", "Docker"],
    frameworks: ["React", "Angular", "Vue"]
};
var languages = developer_skill.languages, frameworks = developer_skill.frameworks, tools = developer_skill.tools;
console.log("Language: ".concat(languages[0], ", Framework: ").concat(frameworks[0], ", Tool: ").concat(tools[0]));
console.log("Language: ".concat(languages[1], ", Framework: ").concat(frameworks[1], ", Tool: ").concat(tools[1]));
console.log("Language: ".concat(languages[2], ", Framework: ").concat(frameworks[2], ", Tool: ").concat(tools[2]));
// Making Flexible Object Keys: Learn how to set up a list where you can change the name of each section based on what you need at that moment, like adjusting labels based on user choices.
function ObjectWithDynamickey(key, value) {
    var daynamicObject = {};
    daynamicObject[key] = value;
    return daynamicObject;
}
var userPrefernce = ObjectWithDynamickey("theme", "dark");
console.log(userPrefernce);
