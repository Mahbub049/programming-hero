// Normal If else
let price = 200;
let discount = 10/100;

if(price>200){
    price = price - (price * discount);
    console.log(price);
}
else{
    price = price - (price*(5/100));
    console.log(price);
}

// Shorthand

price = price > 200 ? price -= (price * discount): price -= (price*(5/100));
console.log(price);

// More Advanced
let nationality = 'Bangladeshi';
let age = 20;
let fund = 200;
let increment = 100;

if(nationality==='Bangladeshi'){
    if(age>=18){
        fund += (increment * ((fund/50)/100));
    }
    else{
        fund+=(increment *((fund/90)/100));
    }
}
else{
    fund+=20;
}
console.log(fund);

// Shorthand of above
fund = 
    nationality === 'Bangladeshi' 
        ? 
        age>=18? 
            fund += (increment * ((fund/50)/100))   
            :
            fund+=(increment *((fund/90)/100))  
            : 
        fund+=20;

console.log(fund);