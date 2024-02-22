const arr = [1,2,3,4,5,6];
for(const item of arr){
    console.log(item);
}

const course = {
    name: 'OODP',
    code: 1201,
    credit: 3,
    faculty: 'Yousuf'
}

//For of for object
for(const key in course){
    const value = course[key];
    console.log(key, value);
}

//For in object
const keys = Object.keys(course);
for(const key of keys){
    const values = course[key];
    console.log(`${key}: ${values}`);
}