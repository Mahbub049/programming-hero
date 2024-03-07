//Setting date as string
const date = new Date('2000-10-16');
console.log(date);

//Setting date normally
//Here you have to give month as index no

const Date01 = new Date(2000, 9, 17);
console.log(Date01)

Date01.setMonth(2);
console.log(Date01)

//getting month in british format
const britishFormat = Date01.toLocaleDateString('en-GB');
console.log(britishFormat);