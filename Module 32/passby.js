//Primitive type    //In primitive type the value fixed of a variable is not set to the global variable which is called pass by value
let a = 5;
let b =6;

function sum(a , b){
    a = 50;
    console.log('Inside the function: ',a,b);
    return a+b;
}

console.log(sum(a,b));
console.log('Outside the function',a,b);

//In Non-primitive: The value of function is set to the outter or global array or object. This is called pass by reference

let student = {
    name: 'Mahbub',
    roll: 49,
    CGPA: 3.89
}


function change(person){
    person.roll = 7;
    person.CGPA = 0.00;
}

console.log('Before Call: ',student.roll, student.CGPA);
change(student);
console.log('After Call: ',student.roll, student.CGPA);