const names = ['sajid', 'sadiq', 'mahan', 'farah', 'flavia'];
names.sort();
console.log(names);

const rolls = [88, 63, 2, 20, 45, 46, 1, 4];
// // rolls.sort();
// console.log(rolls);

const sorted = [...rolls].sort(function (a, b) { return a - b });
console.log(sorted);
const sorteddes = [...rolls].sort(function (a, b) { return b - a });
console.log(sorteddes);