//Using Array of prices
function minPhonePrice(phones){
    let minimum = phones[0];
    for(const phone of phones){
        if(phone<minimum){
            minimum = phone;
        }
    }
    return minimum;
}

const prices = [24000, 43000, 50000, 100000, 67000, 65743, 23045, 12045];
const cheapPrice = minPhonePrice(prices);
console.log('Cheapest Phone Price is: ', cheapPrice)

//From array of objects
const minPriceObj = [
    {name: 'Samsung', price: 40000, color: 'black', zip: 1206},
    {name: 'Xiomi', price: 25000, color: 'black', zip: 1206},
    {name: 'Realme', price: 35000, color: 'black', zip: 1206},
    {name: 'IPhone', price: 120000, color: 'black', zip: 1206},
    {name: 'Helio', price: 23000, color: 'black', zip: 1206},
    {name: 'Huwai', price: 63000, color: 'black', zip: 1206}
]

function minPricePhone(phones){
    let minimum = phones[0];
    for(const phone of phones){
        if(phone.price < minimum.price){
            minimum = phone;
        }
    }
    return minimum;
}

const lowPricePhone = minPricePhone(minPriceObj);
console.log(lowPricePhone);