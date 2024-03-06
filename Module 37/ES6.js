// Template String, Arrow Function, Spread Operator
// Template String
const student = {
    name: 'Mahbub',
    roll: 49,
    institutions: ['SRCS', 'ACC', 'BUP']
}
const numbers = [10, 20, 30, 40, 50];

const paragraph = `My name is ${student.name} and my roll is ${student.roll} and I achieved ${numbers[4]} marks in incourse`;

// Arrow Function
// 5 ways
// 1st: No parameters
const getFiftyFive = () => 55;
// 2nd: one parameter requires no brackets
const addSixtyFive = num => num + 65;
// 3rd: one parameter returns automatically
const isEven = x => x % 2 == 0;
// 4th: multiple parameters requires brackets
const addThree = (p, y, z) => p + y + z;
// 5th: Multi Line requires return method and {}
const doMath = (num1, num2) => {
const sum = num1 + num2;
return sum;
}

// Spread
const number = [10, 20, 30, 40, 50];
const phones = number;
phones.push(60)
// Both phone and number will be changed
console.log(phones)
console.log(number)

// but if we do spread operator, just the newNumbers will be changed
const newNumbers = [...number, 70, 80];
console.log(newNumbers)
console.log(phones)
console.log(number)