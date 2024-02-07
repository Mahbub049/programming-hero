function totalCost(totalShirt, totalPant, totalShoe){
    const shirtPrice  = 500;
    const pantPrice = 300;
    const shoePrice = 900;

    const totalShirtPrice = shirtPrice * totalShirt;
    const totalPantPrice = pantPrice * totalPant;
    const totalShoePrice = shoePrice * totalShoe;

    const totalPrice = totalShirtPrice + totalPantPrice + totalShoePrice;
    return totalPrice;
}

const totalPrice = totalCost(2, 4, 1);
console.log(totalPrice)