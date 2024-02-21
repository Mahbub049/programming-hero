// Function Declaration
function add1 (num1, num2){
    console.log(num1+num2);
}
add1(10, 20);

//Function Expression
const add2 = function(num1, num2){
    console.log(num1+num2);
}
add2(30, 40);

//Arrow Function
//3 ways to declare
//1. If there are two parameters like above:
const add3 = (a,b) => a+b;
console.log(add3(50, 60));

//2. If there are two parameters
const square = a => a*a;
console.log(square(2));

//3. If there are no parameters
const name = () => 'Mahbub';
console.log(name())

// In Object the arrow function
const student = {
    name: 'Mahbub',
    age: 24,
    roll: 49
}
const sum = (person) => person.age + person.roll;
console.log(sum(student));

//Large arrow function (requires 2nd bracket and implicit return dont works means that you have to use return keyword)

const math = (a, b, c) => {
    const sum = a + b + c;
    const multiply = a * b * c;
    return sum+multiply;
}

console.log(math(10, 20, 30));