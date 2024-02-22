// ... or spread operator used to copy the items which dont links to the previous element or no reference is taken from previous elements

//Both output will be similar because they share same reference so if i push item to any of the array, this will be shown in both array.
const rolls = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbers = rolls;
rolls.push(40);
console.log(rolls);
console.log(numbers);

//Spread operator removes this. Spread operator takes out the values from the array and show as number
const rolls1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbers1 = [...rolls];
numbers1.push(90);  //This 90 will be added to the numbers1 only
console.log(rolls1);
console.log(numbers1);

//Calculating the max from the array
const marks = [34, 76, 54, 76, 87, 98, 43, 54, 74, 37, 86 ,37];
console.log(Math.max(...marks));
// console.log(Math.max(marks)); This wont work because from array max dont works so use spread operator