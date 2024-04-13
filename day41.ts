//Implement a for loop that counts from 1 to 10 but skips number 5 using the continue statement
for (let i=1;i<=10;i++){
    if (i===5){
        continue
    }
    console.log(i);
    
}
// Use a while loop to count down from 10 to 1 and breaks the loop when it reaches 5.
let j=10
while(j>=1){
    if(j===5){
        break;
    }
    console.log(j);
    j--;
}
// Create a loop that iterates through a string and stops when it finds the first vowel.
let string:string="Hello World"
let vowel:string[]=["a","e","i","o","u"]
for(let char of string.toLocaleLowerCase()){
    if(vowel.includes(char)){
        console.log("First vowel found:", char);
        break;
        
    }
}