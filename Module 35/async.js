//SetTimeout and fetch have this property
//Normal JS run synchronous

// Synchronous
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

//Fetch is Asynchronous
console.log(1);
console.log(2);
fetch('https://jsonplaceholder.typicode.com/users') //This fetch will run at the end
.then(response => response.json())
.then(data=>console.log(data))
console.log(4);
console.log(5);

//SetTimeout is asynchronous
console.log(1);
console.log(2);
setTimeout(() => {
    console.log("This will run at the end")
}, 4000) //4000 is time or after 4s this will run but at the end
console.log(4);
console.log(5);