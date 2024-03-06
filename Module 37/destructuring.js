const numbers = [10, 20, 30];

// Array Destructuing
const [x, y] = numbers;
console.log([x, y])

// Destructuing can be done on array and the left one should be in [] and right one should be array or function.

function des (n1, n2){
    return [p, q] = [n1, n2];
}
const [r, s] = des(10, 20);
console.log(r, s);

// Also from a array inside an object can be considered;
const student = {
    name: 'Mahbub',
    roll: 49,
    institutions: ['SRCS', 'ACC', 'BUP']
}

const [w, e] = student.institutions;
console.log(w,e)

// OBJECT DESTRURING
const products = [
    {name: 'laptop', price: 3200, brand: 'lenovo', color: 'silver', seller: {
        name: 'Star', importPrice: '2800', country: 'Taiwan'
    }},
    {name: 'phone', price: 7000, brand: 'iphone', color: 'golden'},
    {name: 'sungass', price: 300, brand: 'ribon', color: 'black'},
    {name: 'watch', price: 3000, brand: 'casio', color: 'yellow'},
    {name: 'camera', price: 9000, brand: 'canon', color: 'gray'}
 ];

//  The left one will be object
const {price, color} = products[0];
console.log(price, color)

// The inner object should be accessed by
const {importPrice, country} = products[0].seller;
console.log(importPrice, country)