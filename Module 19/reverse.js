//reverse can be done in several ways

//Shortcut
let name = 'Muhammad Mahbub Sarwar Shafi';
let revName = name.split('').reverse().join('');    //First split each letter then reverse the array and then join them
console.log(revName);

//A way
let reverse ='';
let nameWord = '';
for(let i=0; i<name.length; i++ ){
    nameWord = name[i];
    reverse = nameWord + reverse;
}
console.log(reverse);


//Another way
reverse ='';
nameWord = '';
for(let letter of name){
    nameWord = letter;
    reverse = letter + reverse;
}
console.log(reverse);