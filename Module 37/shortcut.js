// number to string
const num1 = 56;
console.log(num1+''); //concat blank string and make it string

// string to number
const num2 = '49';
console.log(+num2);

// // Toggle
let isActive = true;
const showOutput = () => console.log('displayed');
const hideOutput = () => console.log('hidden');
// isActive === true ? showOutput() : hideOutput();

// Toggle Shortcut
let Toggle = true;
Toggle = !Toggle;

// If left side is true then right side will be executed
isActive && showOutput();

// If left side is false then right side will be executed
isActive || hideOutput();