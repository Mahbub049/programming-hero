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

//Converting the JS object to JSON String
const convJSON = JSON.stringify(student);
console.log(convJSON);

//Converting the JSON String to JS object
const convJS = JSON.parse(convJSON);
console.log(convJS);