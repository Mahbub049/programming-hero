/**
 * Two way swap can be done here:
 * 1. Swapping using temp variable
 * 2. Destructuring
*/

let a = 10, b = 40;
let temp;

temp = a;
a = b;
b = temp;

console.log(a,b);

// ----------------
a = 10; 
b = 20;

[a,b] = [b,a]; //Destructuring
console.log(a,b);