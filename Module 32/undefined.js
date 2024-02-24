// 8 ways to get Undefined

// 1. variable that is not initialized will give undefined
// const variable; //you can not keep a constant uninitialized
let variable;
console.log(variable);

// 2. function with no return
function checkUndefined(a,b){
    const sum = a+b;
}
console.log(checkUndefined(10,20));

// 3. parameter that is not passed will be undefined
function checkUndefinedNew(a,b){
    const mult = a*b;
}
console.log(checkUndefinedNew());

// 4. if return has nothing on the right side will return undefined
function sum (a,b){
    const sum = a+b;
    return;
}
console.log(sum(10,20));

// 5. property that doesn't exists on an object will give you undefined
const human = {
    eyes: 2,
    legs: 2,
    hands: 2
}
console.log(human.ears);

// 6. accessing array elements outside of the index range
const numbers = [10,20,30];
console.log(numbers[12], numbers[200]);

// 7. deleting an element inside an array
delete numbers[1];
console.log(numbers[1]);

// 8. set a value directly to undefined
const undefinedVar = undefined;
console.log(undefined);


//If we want to set a value to undefined instead use null
const student = {
    semester: 1,
    CGPA: null
}
console.log(student);