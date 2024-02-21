//Default Parameter: This allows named parameters to be initialized with default values if no value or undefined is passed.

function add(num1 = 0, num2 = 10){
    const add = num1 + num2;
    console.log(add);
}
add(10, 20);
add();  //Both 0 and 10 will be summed up
add(10,);   //2nd one will be considered as 10
add(,10); //This wont work

//Default Array
function arr(arr = []){

}

//Default Object
function obj(obj = {}){

}

// String
function string(str = ''){
    
}