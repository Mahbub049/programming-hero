function DiscountLayered(){
    const first100price = 100;
    const second100price = 90;
    const remainingPrice = 80;
    if(quantity<100){
        const total = first100price * quantity;
        return total;
    }
    else if(quantity<=200){
        const first100Total = first100price * 100;
        const remainingQuantity = quantity - 100;
        const remainingTotal = second100price * remainingQuantity;
        const total = first100Total + remainingTotal;
        return total;
    }
    else{
        const first100Total = first100price * 100;
        const second100Total = second100price * 100;
        const remainingQuantity = quantity - 200;
        const remainingTotal = remainingPrice *  remainingQuantity;
        const total = first100Total + second100Total + remainingTotal;
        return total;
    }
}

const quantity = 205;
const discountedPrice = DiscountLayered(quantity);
console.log(discountedPrice)