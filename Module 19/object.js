//Primitive Data Type: Basic or this of data type can't be break into more details. Ex: int, float, etc
//Non Primitive: This data types can be break into more data types. Ex: Object

//Object declared
let subject = {
    name: 'Digital Technology', //This is property: value
    published: 2023,
    pages: 143,
    writers: ['Mahbub', 'Zafor', 'Atik'],
    exam: {
        date: '20 Feb',
        marks: 40,
        examinar: 'Mainul'
    },
    "birth day": '16 october',  //property can be created using blank spaces between but is should be within ''
}

//Full Object Preview
console.log(subject);

//Individual Property view
//Dot notation (Not everytime works like, birth day property can not be accessed using it)
console.log(subject.name);

//Bracket Notation
console.log(subject['pages']);  //To use bracket notation the property name will be in the ''

const subjectName = 'name';
console.log(subject[subjectName]);  //No '' requires as stored in the variable beforehand

//To get all the keys/properties
console.log(Object.keys(subject));

//To get the values of the properties
console.log(Object.values(subject));


//Nested Object
const university = {
    name: 'BUP',
    established: 2008,
    students: 5000,
    isPublic: true,
    faculties: ["FSS", "FBS", "FSSS", "FST"],
    department: {
        name: 'ICT',
        established: 2015,
        batch: {
            name: 'Sontoron',
            students: 88,
            graduated: true,
        }
    }
}

//Changing value of an array
university.faculties[0] = 'FASS';
console.log(university);

//Access the nested array
console.log(university.department.batch.name);

//Access the nested array in different style
console.log(university['department'].batch.students);

//delete an property
delete university.isPublic;
console.log(university)

//Loop object
//array use for of
//object use for in

//direct looping in the object
for(const prop in university){
    console.log(prop);
    console.log(university[prop]); //to view the values
}

//Creating array of the properties from the university object
const keys = Object.keys(university);
console.log(keys);

//using array to get values using for of
for(const property of keys){
    console.log(university[property])
}

//Three different way a object can be created

//1. The general case using {}
const firstObj = {
    name: 'Mahbub',
    roll: '49'
}
console.log(firstObj);

//2. using new keyword
const secondObj = new Object();
secondObj.name = "Mahbub";
secondObj.roll = 42;
console.log(secondObj);

//3. using new keyword and create
const thirdObj = Object.create(
    {
    }
)
console.log(thirdObj);