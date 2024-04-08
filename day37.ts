// Write an if statement that logs "Good Morning" if the current time is before 12 PM
const time = new Date();
let hour = time.getHours();
if(hour < 12){
    console.log("Good morning!");
}else{
    console.log("Good evening!");
    
}
//Create a function that assigns a grade (A, B, C, D, F) based on a student's score.

function grade (persentage:number){
    if (persentage>=80){
        console.log("A+");
    }
    else if (persentage>=70){
        console.log("A");
        
    }
    else if (persentage>=60){
        console.log("B");
        
    }
    else if (persentage>=50){
        console.log("C");
        
    }
    else if (persentage>=40){
        console.log("D");
        
    }
    else{
        console.log("FAIL");
    }
}
grade(78)
// Use an if-else-if chain to categorize a person's age group (child, teenager, adult).
function personAge(age:number){
    if (age<13){
        console.log("Child");
        
    }
    else if (age>=13 && age<=19){
        console.log("Teenager");
        
    }else{
        console.log("Adult");
        
    }
}
personAge(19)