// Integer Number
var roll = 49; //This is integer number
console.log(roll);
console.log(typeof roll);

// Float Number
var price = 20.50; //This is floating point number
console.log(price);
console.log(typeof price);

//If you write a number inside '' or "" this is not number, this becomes string
var Roll = '49';
console.log(Roll);
console.log(typeof Roll);

//If you add two integer number it will result an integer number
var var1 = 20;
var var2= 21;
console.log(var1+var2);

//If you add a number and a string it will result in a concatination or make the whole output as string
var Main = 20549010;
var digit = '49';
console.log(Main+digit); //This 49 will be added in the end of 20549010

// Now if we want to convert a number we will use parseInt to convert in Integer and parseFloat to convert in float from string
var text1 = '29';
var text = '29.29';
var con1 = parseInt(text1); //Converting text1 to integer
var con2 = parseFloat(text); //Converting text to float
console.log(con1+con2);

//If the string is not a number it will result in NaN.
var string = "Mahbub";
console.log(parseInt(string));

//If we use parseInt in a float number then the number will show as integer
var try1 = 49.49;
console.log(parseInt(try1));

//If we want to fix the total digits we want to see after the decimal point, then we can use toFixed to fix the decimal point..
var no1 = 0.1;
var no2 = 0.2;
console.log((no1+no2).toFixed(2));

//If we divide a number by 0 then it will result in infinity. If the number is positive it will result in a positive number and if the number is a negative then the number will be a negative number.
var check1 = 10/0;
console.log(check1);
var check2 = -10/0;
console.log(check2);
