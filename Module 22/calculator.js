function add(num1, num2){
    return num1+num2;
}
function subtract(num1, num2){
    if(num1>num2)
        return num1-num2;
    else
        return num2-num1;
}
function multiply(num1, num2){
    return num1*num2;
}
function division(num1, num2){
    return num1/num2;
}

function calculator(num1, num2, operation){
    if(operation === '+')
        return add(num1, num2);
    else if(operation === '-')
        return subtract(num1, num2);
    else if(operation === '*')
        return multiply(num1, num2);
    else if(operation === '/')
        return division(num1, num2);
    else
        return 'Please provide valid operation'
}

const result = calculator(10, 20, '*');
console.log(result);