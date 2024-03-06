const products = [
    {name: 'laptop', price: 3200, brand: 'lenovo', color: 'silver'},
    {name: 'phone', price: 7000, brand: 'iphone', color: 'golden'},
    {name: 'sungass', price: 300, brand: 'ribon', color: 'black'},
    {name: 'watch', price: 3000, brand: 'casio', color: 'yellow'},
    {name: 'camera', price: 9000, brand: 'canon', color: 'gray'}
 ];

// Map: This will return the result into an array
const prices = products.map(product => product.price);
console.log(prices);

// ForEach iterates through the array but don't return anything
products.forEach(product => console.log(product.name));

// Filter: This will filter those items according to conditions into an array
const items = products.filter(product=> product.price>900);
console.log(items);

// Find: this will find out the first element that meets the condition
const item = products.find(product => product.price>3000);
console.log(item)