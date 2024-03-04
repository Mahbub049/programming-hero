// Set the object values inside the application using json stringify. you can also use that value after getting but then you need to parse
const info = {
    name: 'Mahbub',
    age: 24,
    passed: true
}
const jsonInfo = JSON.stringify(info);
localStorage.setItem('myInfo', jsonInfo)

// getting and parse
const information = JSON.parse(localStorage.getItem('myInfo'));
console.log(information)