// Six JavaScript Fundamentals That You Need To Know
// 01. Variable declaration using const and let. Dont use var.
// Whenever you need to use a variable whose value won't be changed use const and use let when it might be changed

const myName = 'Mahbub';
let age = 24;
age = 25;

// 02. Conditions.
// Conditions can be showed using if-elseif-else mostly and also using switch.
// 6 basic conditions: > < <= >= !== ===
// multiple conditions: && ||

if(myName === 'mahbub' || age === 24){
    console.log(myName);
}
else if(myName === 'Mahbub'){
    console.log(myName+'2nd Try');
}
else{
    console.log('failed')
}

// 03. Array
// Declaration and calling each value in the array
const numbers = [10, 20, 30, 40, 50];
numbers[2] = 60;

// 04. Loops
// For loop will be used mostly. While loop is also important.
for(let i=0; i<=numbers.length; i++){
    let sum = 0;
    sum+=numbers[i];
}

// 05. Function
// The declaration and calling of the function is important
function multiply(num1, num2){
    const mult = num1 * num2;
    return mult;
}
console.log(multiply(10,20))

// 06. Object
// 3 way to call an object
const student = {
    name: 'Mahbub',
    roll: 49,
    institutions: ['SRCS', 'ACC', 'BUP']
}

// 1 way
student.name;
// 2 way
student['name'];
// 3 way
const check = 'name';
student[check];