const productsBought = [
    {name: 'Shirt', price: 1500, quantity: 2},
    {name: 'Pant', price: 900, quantity: 2},
    {name: 'Sharee', price: 2900, quantity: 1},
    {name: 'Shoes', price: 700, quantity: 3},
]

//without quantity
function totalCostWithout (products){
    let total = 0;
    for(const product of products){
        total += product.price;
    }
    return total;
}
const totalCostWithoutPrice = totalCostWithout(productsBought);
console.log(totalCostWithoutPrice);

//with quantity
function totalCost (products){
    let total = 0;
    for(const product of products){
        total += product.price*product.quantity;
    }
    return total;
}
const totalCosting = totalCost(productsBought);
console.log(totalCosting)