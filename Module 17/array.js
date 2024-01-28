// Declaring Array
let roll = [49, 7, 8, 42, 2];
console.log(roll);

// Accessing Array
console.log('Value of the indext: ' + roll[2]); //2 means index=2 that means 8

// Length of the array
console.log('The length is: ' + roll.length);

//update the value of the array
roll[4] = 3; //index 4th or last value is updated
console.log(roll);


// ADD REMOVE IN THE ARRAY
let food = ['Burger', 'Pizza', 'Momo'];
console.log(food); //printing array

//Add item in the last of the array using push()
food.push('Rice Bowl');
console.log(food);

//Remove the last item from the array using pop()
food.pop();
console.log(food);

//Add item in the beginning of the array using unshift
food.unshift('Set Menu');
console.log(food);

//Remove item from the beginning using shift
food.shift();
console.log(food);

// Dummy Space
console.log('')

/* ************************** */
// Some Applications
/* ************************* */

//includes: Case Senstive. Checks if the element is in the array.
let bank = ['Sonali', 'Rupali', 'Trust', 'Prime'];
console.log(bank.includes('Prime'));

//IndexOfJs: provides the index of the element which is picked
console.log(bank.indexOf('Rupali'));

//isArray: checks if the selected thing is array or not
console.log(Array.isArray(bank));

// Join: This returns an array as a string and doesn't change the original array and separate using any separator.
console.log(bank.join(' ~ '));

//Slice: Returns as a new array and selects from a give start (here 1 or index 1) and to the previous element of the end index (index 3 picked). doesnt change the original array
console.log(bank.slice(1,3));

//Concat: This adds two array. the array mentioned inside the bracket will actually add in the end of the array.
let add = ['Bangladesh Bank'];
console.log(bank.concat(add));

//Splice: 1st element means from where it will start and the last 1 means how many items will be selected.

console.log(bank.splice(1,1));