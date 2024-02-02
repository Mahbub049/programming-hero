function multiplication (a, b){
    const multiply = a * b;
    return multiply;    //returing the value to the function where it was callled
}

const mulipliedNumber = multiplication(10,20); //saving the returned value in the variable
console.log(mulipliedNumber);

//return directly

function sum (a, b){
    return a+b;
}
console.log(sum(10, 20));


//conditional return
function isEven(number){
    if(number%2==0){
        return true;
    }
    return false;
}

console.log(isEven(10));