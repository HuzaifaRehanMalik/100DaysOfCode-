// No Users: Ensure your user list isn’t empty.
let user:string[]=[]
if (user.length==0){
    console.log("we need some user");
}
else{

}
// Checking Usernames: Ensure uniqueness in usernames.
let user_names: string[] = ["admin", "user1", "user2", "user3"];
let new_names: string[] = ["user1", "user2", "user3", "user4", "user5", "user6"];
let current_users: string[] = user_names.map(user => user.toLocaleLowerCase());
for (let new_name of new_names) {
    if (current_users.includes(new_name.toLowerCase())) {
        console.log(`Sorry, the username '${new_name}' is already taken. Please enter a new username.`);
    } else {
        console.log(`The username '${new_name}' is available.`);
    }
}


// Ordinal Numbers: Display numbers with their ordinal suffixes.
const numbers:number[]=[1,2,3,4,5,6,7,8,9];
for (const number of numbers){
    let ordinalsuffixes:string;
    if (number===1){
        ordinalsuffixes ="st";
    }
    else if (number===2){
        ordinalsuffixes="nd"
    }
    else if (number===2){
        ordinalsuffixes="rd"
    }
    else  {
        ordinalsuffixes="th"
    }
    console.log(`${number}${ordinalsuffixes}`);
    
}







