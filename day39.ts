//  Use a switch statement to log the days of the week based on a number (1-7).
function logDayOfWeek(number:number) {
    switch(number) {
        case 1:
            console.log("Sunday");
            break;
        case 2:
            console.log("Monday");
            break;
        case 3:
            console.log("Tuesday");
            break;
        case 4:
            console.log("Wednesday");
            break;
        case 5:
            console.log("Thursday");
            break;
        case 6:
            console.log("Friday");
            break;
        case 7:
            console.log("Saturday");
            break;
        default:
            console.log("Invalid number. Please enter a number between 1 and 7.");
    }
}


logDayOfWeek(3); 
logDayOfWeek(6); 
logDayOfWeek(9); 
// Create a switch case that matches several cases to the same code block, representing seasons.
function getSeasons(month:number):string{
    switch(month) {
        case 12:
        case 1:
        case 2:
            return "Winter";
        case 3:
        case 4:
        case 5:
            return "Spring";
        case 6:
        case 7:
        case 8:
            return "Summer";
        case 9:
        case 10:
        case 11:
            return "Autumn (Fall)";
        default:
            return "Invalid month. Please enter a number between 1 and 12.";
    }
}
console.log(getSeasons(5));
console.log(getSeasons(7));
console.log(getSeasons(11));
console.log(getSeasons(12));
console.log(getSeasons(16));

// Implement a switch statement that evaluates an expression and uses the default case if none of the cases match.

function evaluateExpression(value:number | string):void{
    switch (typeof value) {
        case "number":
            console.log("The expression is a number.");
            break;
        case "string":
            console.log("The expression is a string.");
            break;
        default:
            console.log("The expression is neither a number nor a string.");
            break;
    }
}
evaluateExpression(42);
evaluateExpression("Hello");
evaluateExpression(true);




