/**
 * Reverse can be done in 3 ways
 * 1. using reverse()
 * 2. using unshift
 * 3. using push
*/

//1st Way
let roll = [1,2,3,4,5,6,7];
roll.reverse(); //This will reverse the main array
console.log(roll);


//2nd way
let friends = ['Atif', 'Arijit', 'Mahan', 'Farah', 'Sajid'];
console.log(friends);
let graduated = [];
for(const friend of friends){
    graduated.unshift(friend);
}
console.log(graduated);

//3rd Way
let friendzone = [];
for(let i=friends.length - 1; i>=0; i--){
    friendzone.push(friends[i]);
}
console.log(friendzone);