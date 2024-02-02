/**
 * Looping Techniques 
 * for loop
 * while loop
 * do while
 * for of --> used in array
 * for in --> used in object
*/

const industries = ['Apple', 'Microsoft', 'Meta', 'Amazon', 'Walton'];

// using for of
for(const industry of industries){
    console.log(industry);
}

// using for
for(let i=0; i<industries.length; i++){
    console.log(industries[i]);
}