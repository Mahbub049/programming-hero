const products = [
    {name: 'laptop', price: 3200, brand: 'lenovo', color: 'silver'},
    {name: 'phone', price: 7000, brand: 'iphone', color: 'golden'},
    {name: 'sungass', price: 300, brand: 'ribon', color: 'black'},
    {name: 'watch', price: 3000, brand: 'casio', color: 'yellow'},
    {name: 'camera', price: 9000, brand: 'canon', color: 'gray'}
 ];

//  Stringify: convert to json
const productsJSON = JSON.stringify(products);
console.log(productsJSON);

// parse: convert to object
const productsObj =JSON.parse(productsJSON);
console.log(productsObj);

// Keys: the keys of the object can be retrieved
const keys = Object.keys(products[0]);
console.log(keys)

// Values: the values of the each property will be retrieved
const values = Object.values(products[0]);
console.log(values);

// Adding in the array creating new one
const newArray = [...products, {name: 'airpod', price: 800, brand: 'samsung', color: 'white'}];
console.log(newArray)
console.log(products)

// Removing one item from the array
const removedArray = newArray.filter(item => item.name.includes('p'))
console.log(removedArray);