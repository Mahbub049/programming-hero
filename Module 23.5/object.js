//We can create an object and inside of it we can create more objects and other functions and more. Nesting can be done here.

const object = {
    name: 'Mahbub Sarwar',
    age: 24,
    birthYear: 2000,
    degrees: ['SSC', 'HSC', 'BSc'],
    institutions: {
        SSC: {
            name: 'SRCS',
            passYear: 2016
        },
        HSC: {
            name: 'ACC',
            passYear: 2019
        },
        BSc: {
            name: 'BUP',
            passYear: 2024
        }
    },
    prizes: function(){
        const arr = ['IEEE', 'BUPRC'];
        console.log(arr);
    }
}

object.prizes();

//Array like object can be created where the index can be given inside the ''
const rolls = {
    '0': 21,
    '1': 46,
    '2': 49
}
console.log(rolls)
console.log(rolls[0])

//We can get all the arguments as array like object and only can be accessible from the function
function accessArray(){
    console.log(arguments); //This will be printed as array like objects, watch no parameters passed
    console.log(arguments[0]); //Particular value can be accessed
}

accessArray(12, 14, 45, 65, 76)