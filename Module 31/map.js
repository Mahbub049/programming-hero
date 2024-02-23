//map: this is powerful thing that works with array. In the array this loops through the whole array and do the inner operation in the first bracket. we can write function name or we can also do the arrow function inside. 
//This will do the operations and then store each of the elements converted output to an array and then return it to the user.

const numbers = [1, 5, 9, 2, 4, 8, 3, 7, 6];

//Normal Way
function square(num){
    return num**2;
}
const result = numbers.map(square);
console.log(result);

//Using Arrow function
const triple = num => num**3;
const triples = numbers.map(triple);
console.log(triples);

//One line
const mapping = numbers.map(num => num*2);
console.log(mapping);

//ForEach: This do the same operation as map means loop through each item of the array and do operation. Difference is this doesn't return anything.
const numberings = [12,23,45,65,76,87,87];
const show = numberings.forEach(number => number**2);
console.log(show);