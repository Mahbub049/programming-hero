//Max in two values

function max(num1, num2){
    if(num1>num2)
        return num1;
    else
        return num2;
}

console.log(max(10, 20));

//Max in three values
const num1 = 55;
const num2 = 54;
const num3 = 56;

if(num1>num2 && num1>num3)
    console.log(num1+' is the largest');
else if(num2>num1 && num2>num3)
    console.log(num2+' is the largest');
else
    console.log(num3+' is the largest');

//Max function
console.log(Math.max(10, 54, 254, 2344, 65, 23534, 654, 645645 ,34645));