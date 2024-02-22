//Destructuring: This is a technique for unpacking objects, arrays, and assigning them to variables.
//Helps to deal with functions that have a lot of parameters default values
//Is convenient to write, easy to maintain and friendly to read
//Saves from writing repetitive code

//OBJECT
const student = {
    name: "Mahbub",
    roll: 49,
    cgpa: 3.89,
    location: 'Dhaka',
    age: 24
}

//Destructuring
//Format variable_type {object_property} = object_name;
//Here roll name and cgpa works as individual variables
const {roll, name, cgpa} = student;
console.log(roll, name, cgpa);

//We can also fix the name of the variables and the values coming from the object. This is called Alias
const {roll:RollNo, name:FullName, location:Address} = student;
console.log(RollNo, FullName, Address);

//Also multiple parameters and default value can be given

const {age:Boyosh = 18} = student;  //If age is not mentioned in the object this will work
console.log(Boyosh);

//Array
const TopCG = [3.98, 4.00, 4.00];
const [x, y, z] = TopCG;
console.log(x)

//We can swap values too
let [x1, y1, z1] = [10, 20, 30];
[x1, y1, z1] = [z1, y1, x1];
console.log(x1, y1, z1);

// Square Root
function SquareRoot(num1, num2){
    return [Math.sqrt(num1), Math.sqrt(num2)]; 
}
const [num1, num2] = SquareRoot(25, 81);
console.log(num1, num2);