// String can be declared in different ways.
//Using ''
let Fname = 'Mahbub';
//Using ""
let Mname = "Sarwar";
//Using ``
let LName = `Shafi`;
//Above 3 will return string type.
//The following one will not return string type but object type, but is string.
let BName = new String('Muhammad');
console.log(BName);


// Strings letters can be counted. But the spaces inside will also be in the count.
console.log(Fname.length);  //6

//Letters can be picked and printed using indexing
console.log(Fname[0]);  //M

//You can not change or replace the letter once it was declared using indexing
Fname[0] = 'A'; //Tried to replace M with A but will not work
console.log(Fname); //Mahbub

//String is immutable or it can not be changed. But numbers will work or number is immutable.