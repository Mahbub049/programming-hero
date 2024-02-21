//var: Variable but wont be used
// let: this will be used to change the value or reassign the value
// const: to fix the value or discourage the reassign this may be used

//-----------------------------------------------------------------------------------------------------------------------
// VARIABLE
let value = 10;
value = 20; //This is accepted

const item = 2;
item = 2; //Not accepted as this is constant
//-----------------------------------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------------------------------
// Array
// We can push, replace the value of the index or at the end but we can not reassign the array but let can do everything

const arr = [1, 2, 3, 4, 5];

// Allowed
arr.push(2, 4, 6);
arr[2] = 5;

// Array redeclaration
arr = [2, 4, 6, 8]; //Not allowed
//-----------------------------------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------------------------------
// Object
//we can replace the value but can not redeclare the object

const student = {
    name: 'Mahbub',
    roll: 49
}

// Allowed
student.name = "Mahbub Sarwar";

// Not Allowed
student = {
    name: "Mahbub Sarwar"
}
//-----------------------------------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------------------------------
// Loop
// We can change the value of the const variable each time if the variable is declared inside the loop but if that is declared outside that wont work

//Allowed
for(let i = 0; i<=10; i++){
    const num = i;
    const sum = sum + num;
}

//Not Allowed
const num = 0;
for(let i = 0; i<=10; i++){
    num = i;
    const sum = sum + num;
}

