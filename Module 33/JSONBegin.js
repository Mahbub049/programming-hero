const student = {
    name: 'Mahbub',
    roll: 49,
    phone: 8801820909803,
    address: {
        street: 'Matikata',
        city: 'Dhaka',
        country: 'Bangladesh'
    },
    courses: ['RM', 'DSP', 'IoT', 'IS', 'CS']
}
console.log(student);

//In JSON String the object can be showed as {"name":'mahbub', "roll":49}
//In JS the object can be showed as {name:'mahbub', roll:49}

//Converting the JS object to JSON String
const convJSON = JSON.stringify(student);
console.log(convJSON);

//Converting the JSON String to JS object
const convJS = JSON.parse(convJSON);
console.log(convJS);