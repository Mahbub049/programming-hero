//SLICE:
// We can slice some part of the sentense using slice(). Two values inside slide. 1st One-- start index 2nd One-- The index where it will stop (upto the previous index will be printed)

let name = "Muhammad Mahbub";   //M to b
console.log(name.slice(9,15));  //Mahbub


//SPLIT:
//We can split a sentence by considering the white spaces

let FullName = "Muhammad Mahbub Sarwar Shafi";
let FullNameArr = FullName.split(' ');
console.log(FullNameArr); //We have to give ' ' and white space inside to split using white space

//We can split using letter too.
console.log(FullName.split('m')); //m will be removed and when m will occur it will be splitted.

//If we dont give any value. there will be only one value in the array, the full string.
console.log(FullName.split());



//JOIN:
//we can join array elements into one string using join
console.log(FullNameArr.join()); //This will be joined by comma seperated default.
console.log(FullNameArr.join(' ')); //This will be joined usign blank space between each words.


//Concat:
//we can concat different strings using concat

let firstname = "Mahbub";
let lastname = "Sarwar";

console.log(firstname.concat(' ').concat(lastname));
//To add space concat(' ') was used
//concat can be done using + also
console.log(firstname+' '+lastname);


//Includes:
//we can check if the word or letter is present in the word/sentence.

console.log(lastname.includes('war'));  //true
console.log(firstname.includes('mah')); //Case Sensitive so false