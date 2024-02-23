// reduce: this combines all the elements and do some operation

const prices = [10, 20, 30, 40, 50];
const result = prices.reduce((first,second) => first+second,0);
//
console.log(result);