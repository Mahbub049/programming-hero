const friends = ['Mahbub', 'Mirza', 'Mahan', 'Farah', 'Sajid', 'Moheb', 'Sadiq', 'Flavia', 'Spondon'];

//Filter: This finds out all the items in the array which fulfils the condition given.
const evenFriends = friends.filter(friend => friend.length % 2 === 0);
console.log(evenFriends);

//Find: This finds out the first element in the array that fulfils the condition given.
const oddFriend = friends.find(friend => friend.length % 2 === 1);
console.log(oddFriend)