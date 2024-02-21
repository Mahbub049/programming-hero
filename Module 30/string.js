// Backtick is more useful then using '' or ""
// It can be used in
// 1. Multi Line String
// 2. Dynamic String

const arr = [10, 20, 40, 50, 60];
// Previous Way
const sumPrev = 'The sum of the number '+ arr[0]+' and ' + arr[1] + ' is '+ (arr[0] + arr[1]); //too tough to write and format
console.log(sumPrev);

// Backtick way
const sumNew = `The sum of the number ${arr[0]} and ${arr[1]} is ${arr[0] + arr[1]}`
console.log(sumNew);


// Multi Line String
// Previous Way: We had to use \n and each text of the line inside '' and then +
const name = 'Mahbub \n'+
'Sarwar\n'+
'Shafi'
console.log(name);

// Backtick: It doesnt require this much things
const myName = `Muhammad
Mahbub
Sarwar
Shafi`
console.log(myName);