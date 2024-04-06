// Write a function that returns the current date in the format "DD-MM-YYYY".
function dateToday(){
    const  now =new Date();
    const date = now.getDate();
    const month =now.getMonth()+1;
    const year =now.getFullYear();
    console.log(`${date}-${month}-${year}`);
};
dateToday();
// Create a JavaScript snippet that calculates and logs how many days are left until New Year.
function daysUntillNewyear(){
    const today = new Date();
    const newYear = new Date(today.getFullYear()+1,0,1);
    let diff = newYear.getTime() - today.getTime();
    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    console.log(`${days} Days left till New Year`);
}
daysUntillNewyear();
// Generate a date object representing your next birthday and log it to the console.
function getnextBirthday(month:number,day:number){
    const today = new Date(); 
    const year = today.getFullYear();
    const birthday = new Date(year, month - 1,day);
    if (birthday < today){
        birthday.setFullYear(year+1);
    } 
    return birthday
}
const nextBirthday = getnextBirthday(7,18);
console.log(`next birthday is on ${nextBirthday}`);
