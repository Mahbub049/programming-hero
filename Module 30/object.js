//Object Properties
// Keys and Properties are same. use Object.keys(objName)

const student = {
    name: 'Mahbub Sarwar',
    DOB: '16/10/2000',
    email: 'mahbubsarwar5@gmail.com',
    address: '144/11, Matikata',
    Roll: 49,
    age: 24,
    GPA: 3.89
}

//Keys
console.log(Object.keys(student));

//Value
console.log(Object.values(student));

//Entries
//returns array with all the single property:value as single arrays or (array of array)
console.log(Object.entries(student));

//Delete property and value
delete student.address;
console.log(student);

//Delete in another way by destructuring and putting the new object keys and values into different one
const {email, ...restInfo} = student;
console.log(restInfo);  //email removed from student and put that other keys and values inside the restInfo object using spread

//Freeze
const MyJob = {
    name: 'Bekar',
    location: 'nai',
    thaki: 'dhaka',
    tk: 0,
    boyosh: 24
}

Object.freeze(MyJob);
//Now we cant not add/remove or even replace any key value
delete MyJob.tk;
MyJob.pari = "kisuina";
MyJob.boyosh = 23;
console.log(MyJob);

//Seal
const Mango = {
    type: 'langra',
    zilla: 'Chapai',
    season: 'Summer',
    price: 60
}

Object.seal(Mango);
//We can not add or remove but we can replace

delete Mango.price;
Mango.paka = false;
Mango.price = 80;
console.log(Mango);