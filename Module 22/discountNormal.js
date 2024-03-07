function discount(price, quantity){
    let totalPrice = 0;
    if(price<=100){
        totalprice = 100 * quantity;
    }
    else if(price<=200){
        totalprice = 90 * quantity;
    }
    else{
        totalPrice = 80 * quantity;
    }
    return totalPrice;
}

const price = 250;
const quantity = 5;
const discountedPrice = discount(price, quantity);
console.log(discountedPrice)