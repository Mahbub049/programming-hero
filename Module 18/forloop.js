let fruits = ['banana', 'apple', 'grapes', 'mango'];

//for is a keyword
//let fruit is a variable taking each value at a time
for(let fruit of fruits){
    console.log('I want to eat '+fruit);
}

// Space
console.log('')

//for loop with iteration
let i;
//for(variable declaration, condition, increment/dec)
for(i=0; i<=20; i++){
    console.log(i);
}

// Space
console.log('')

//even number print
for(i=0; i<=20; i+=2){
    console.log(i);
}

// Space
console.log('')


/**
 * SUM OF NUMBERS
*/
let sum=0;
for(i=0; i<=10; i++){
    sum+=i;
}
console.log(sum);

// Space
console.log('')

/**
 * SUM OF NUMBERS REVERSE ORDER
*/
sum=0;
for(i=10; i>=0; i--){
    sum+=i;
}
console.log(sum);