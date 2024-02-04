//height conversion
function inchToFeet (inch){
    const feet = parseInt(inch / 12);
    const inches = inch % 12;
    return feet + ' feet ' + inches + ' inches ';
    
}

const mahbubHeight = 73;
console.log('Height of Mahbub is: '+inchToFeet(mahbubHeight));


//Price Conversion
function dollarToBDT (dollar){
    const bdt = dollar * 110;
    return bdt;
}

const dollar = 25;
console.log(dollarToBDT(dollar));