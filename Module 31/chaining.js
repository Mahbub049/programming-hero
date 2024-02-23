//Chaining or Nested Elements

const student = {
    name: 'Mahbub',
    age: 23,
    institutes: {
        school: {
            name: 'SRCS',
            degree: 'SSC'
        },
        college: {
            name: 'ACC',
            degree: 'HSC' 
        },
        university: {
            name: 'BUP',
            degree: 'BSc or MSc',
            faculties: ['FASS', 'FSSS', 'FST', 'FBS']
        }
    }
}

//Chaining
console.log(student.institutes.university.faculties[2]);

//Optional Chaining, Use ? mark before the property name
//If the value is not there it will not show error, instead it will show undefined
console.log(student.institutes.university?.departments);