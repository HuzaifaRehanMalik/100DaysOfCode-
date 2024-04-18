// Create a Promise that resolves with "Hello, World!" after 2 seconds.
const helloPromise1=new Promise(resolve=>{
    setTimeout(()=>{
        resolve("Hello, world!")
    },2000);
});
helloPromise.then(result => console.log(result)); 
//  Show how to use the .then() and .catch() methods to handle Promise resolution and rejection.

let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved");
    }, 2000);
});

myPromise.then(result => {
        console.log("Resolved:", result);
    })
    .catch(error => {
        console.error("Rejected:", error);
});

// Explain the use of the Promise.all() method with an example.   
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise<string>((resolve) => {
  setTimeout(resolve, 100, "foo");
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values); // Outputs: [3, 42, "foo"]
});
