function duplicateArray (names){
    const uniqueNames = [];
    for (const name of names){
        if(uniqueNames.includes(name) === false){
            uniqueNames.push(name);
        }
    }
    return uniqueNames;
}

const names = ['Mahan', 'Farah', 'Jawad', 'Moheb', 'Mahan', 'Flavia', 'Jawad', 'Farah'];
const unique = duplicateArray(names);
console.log(unique);