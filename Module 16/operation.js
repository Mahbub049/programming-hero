//Taking Numbers
var num1 = 10;
var num2 = 20;

// Addition
console.log(num1+num2);

// Subtraction
console.log(num2-num1);

// Multiplication
console.log(num2*num1);

// Division
console.log(num2/num1);

// Remainder
console.log(num2%num1);

// SHORTHAND

num1+=10; //this will add 10 to the num1 value 10 and make it 20 and then store it in the num1 variable
num1-=10; //this will subtract 10 and store to the num1
num1*=10; //Multiply 10 to the num1 and store in num1

//If we add string to a number that will be added as string but if we subtract that will be subtracted as number
num3  = '20';
console.log(num3+num1); //2010
console.log(num3-num1); //10