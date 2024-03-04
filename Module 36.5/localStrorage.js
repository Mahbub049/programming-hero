// We can set get and remove and clear the items of the memory that can be stored in the local storage. you can go to that location using dev mode -> application

// Set Item
// Setting the key as name and value as Mahbub. Two parameter will be given to set. and use localStorage everytime
localStorage.setItem('name', 'Mahbub');

//Get Item
// To get item give key name to the getItem
const name = localStorage.getItem('name');
console.log(name);

// You can not use array and object inside the value. array will show as comma separated and object as object text only. everthing will converted as string inside the value
localStorage.setItem('roll', 49);
localStorage.setItem('foods', ['burger', 'pizza', 'chicken'])
localStorage.setItem('university', {name: 'BUP', established: 2008})

// Remove Item
// To remove an item use removeItem and the name of the key inside
localStorage.removeItem('name');

//Clear
localStorage.clear();
