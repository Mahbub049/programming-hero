//String Type
function name(yourName){
    return yourName;
}

console.log('Your Name is: ',name('Mahbub'));


//Object Type
function object(yourObj){
    return yourObj.roll;
}

let objective = {
    name: 'Mahbub',
    roll: 49,
}

console.log(object(objective));